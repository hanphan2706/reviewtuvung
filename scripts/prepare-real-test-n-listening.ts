#!/usr/bin/env npx tsx
/**
 * Real-test listening: scraped transcript → cleaned + whisper-aligned sync.
 *
 * Usage:
 *   LISTENING_WHISPER_PYTHON=.venv-listening/bin/python \
 *     npx tsx scripts/prepare-real-test-n-listening.ts 2
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { normalizeRealTestScrapedTranscript } from "@/lib/exam/normalize-real-test-scraped-transcript";
import { buildWhisperAlignedTranscriptSync } from "@/lib/listening/build-transcript-sync";
import { LISTENING_SYNC_SUBDIR } from "@/lib/listening/listening-materials-paths";
import { whisperLocalTranscribe } from "@/lib/listening/whisper-transcribe-local";

const ANCHORS: Record<number, { text: string; dialogueMinStartSeconds: number }> = {
  1: { text: "Hello, Fernley sports center", dialogueMinStartSeconds: 70 },
  2: { text: "City House Services", dialogueMinStartSeconds: 40 },
  3: { text: "Habitat Hunters", dialogueMinStartSeconds: 40 },
  4: { text: "how may I help you", dialogueMinStartSeconds: 35 },
};

function probeDurationSeconds(file: string): number {
  const out = execSync(
    `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${file}"`,
    { encoding: "utf8" },
  ).trim();
  const n = Number.parseFloat(out);
  if (!Number.isFinite(n) || n <= 0) throw new Error("Cannot read audio duration");
  return n;
}

async function main(): Promise<void> {
  const n = Number.parseInt(process.argv[2] ?? "", 10);
  if (!Number.isFinite(n) || n < 1) {
    console.error("Usage: npx tsx scripts/prepare-real-test-n-listening.ts <N>");
    process.exit(2);
  }

  const audioPath = path.join(process.cwd(), "listening materials/Audio real test", `real test ${n}.mp3`);
  const scrapedPath = path.join(process.cwd(), "listening materials/transcript", `real test ${n}.txt`);
  const cleanedPath = path.join(process.cwd(), "listening materials/transcript", `real-test-${n}.cleaned.txt`);
  const cachePath = path.join(process.cwd(), "listening materials/sync", `real-test-${n}.whisper-words.json`);
  const syncPath = path.join(process.cwd(), LISTENING_SYNC_SUBDIR, `real-test-${n}.sync.json`);

  if (!fs.existsSync(audioPath)) {
    console.error("Missing audio:", audioPath);
    process.exit(1);
  }
  if (!fs.existsSync(scrapedPath)) {
    console.error("Missing transcript:", scrapedPath);
    process.exit(1);
  }

  console.log("Normalizing scraped transcript…");
  const cleaned = normalizeRealTestScrapedTranscript(fs.readFileSync(scrapedPath, "utf8"));
  fs.mkdirSync(path.dirname(cleanedPath), { recursive: true });
  fs.writeFileSync(cleanedPath, cleaned, "utf8");
  console.log("Wrote", cleanedPath);

  const python =
    process.env.LISTENING_WHISPER_PYTHON ??
    (fs.existsSync(path.join(process.cwd(), ".venv-listening/bin/python"))
      ? path.join(process.cwd(), ".venv-listening/bin/python")
      : "python3");

  console.log("Whisper align (python=%s)…", python);
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: cachePath,
    model: process.env.LISTENING_WHISPER_MODEL ?? "base",
    python,
  });
  const durationSeconds = probeDurationSeconds(audioPath);
  const anchor = ANCHORS[n] ?? { text: "", dialogueMinStartSeconds: 40 };
  const sync = buildWhisperAlignedTranscriptSync({
    partId: `real-test-${n}`,
    audioFile: `real test ${n}.mp3`,
    durationSeconds,
    plainTranscript: cleaned,
    whisperWords: payload.words,
    whisperSegments: payload.segments,
    dialogueMinStartSeconds: anchor.dialogueMinStartSeconds,
    anchorText: anchor.text || undefined,
  });

  fs.mkdirSync(path.dirname(syncPath), { recursive: true });
  fs.writeFileSync(syncPath, `${JSON.stringify(sync, null, 2)}\n`, "utf8");
  console.log("Wrote", syncPath, `(${sync.cues.length} cues, ${durationSeconds.toFixed(1)}s)`);
}

void main().catch((err) => {
  console.error(err);
  process.exit(1);
});
