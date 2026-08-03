/**
 * Whisper-sync transcript cho Pinball entry listening (4 parts).
 * Không có transcript sách — dùng text từ Whisper segments làm plain transcript.
 *
 *   npx tsx scripts/sync-pinball-entry-transcript.ts
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { buildWhisperAlignedTranscriptSync } from "../lib/listening/build-transcript-sync";
import {
  LISTENING_SYNC_SUBDIR,
  listeningAudioCandidates,
} from "../lib/listening/listening-materials-paths";
import { pinballEntryListeningAudioFileName } from "../lib/listening/listening-materials-urls";
import {
  listeningWhisperWordsCachePath,
  whisperLocalTranscribe,
} from "../lib/listening/whisper-transcribe-local";

const TRANSCRIPT_DIR = path.join(process.cwd(), "listening materials", "transcript");

function probeDurationSeconds(audioPath: string): number {
  const out = execSync(
    `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
    { encoding: "utf8" },
  ).trim();
  const n = Number.parseFloat(out);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error(`ffprobe không đọc được duration: ${audioPath}`);
  }
  return n;
}

function resolveAudio(part: number): string {
  const file = pinballEntryListeningAudioFileName(part);
  const found = listeningAudioCandidates(file).find((p) => fs.existsSync(p));
  if (!found) throw new Error(`Không tìm thấy ${file}`);
  return found;
}

async function syncPart(part: number): Promise<void> {
  /** Matches `PINBALL_ENTRY_LISTENING_PARTS` ids (`pinball-entry-p1` …). */
  const partId = `pinball-entry-p${part}`;
  const transcriptFileStem = `pinball-entry-part${part}`;
  const audioPath = resolveAudio(part);
  const audioFile = path.basename(audioPath);
  const durationSeconds = probeDurationSeconds(audioPath);

  console.log(`[${partId}] Whisper local…`);
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: listeningWhisperWordsCachePath(partId),
  });
  console.log(`  words: ${payload.words.length}, segments: ${payload.segments.length}`);

  const plain =
    payload.segments.length > 0
      ? payload.segments.map((s) => s.text.trim()).filter(Boolean).join("\n")
      : payload.words.map((w) => w.word).join(" ");

  if (!plain.trim()) {
    throw new Error(`Whisper không trả text cho ${partId}`);
  }

  fs.mkdirSync(TRANSCRIPT_DIR, { recursive: true });
  const transcriptPath = path.join(TRANSCRIPT_DIR, `${transcriptFileStem}.txt`);
  fs.writeFileSync(transcriptPath, `${plain.trim()}\n`, "utf8");
  console.log(`  wrote ${transcriptPath}`);

  const sync = buildWhisperAlignedTranscriptSync({
    partId,
    audioFile,
    durationSeconds,
    plainTranscript: plain,
    whisperWords: payload.words,
    whisperSegments: payload.segments,
    method: "whisper-local",
  });

  const outDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${partId}.sync.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(sync, null, 2)}\n`, "utf8");
  console.log(`  wrote ${outPath} (cues: ${sync.cues?.length ?? 0}, duration: ${durationSeconds.toFixed(1)}s)`);
}

async function main(): Promise<void> {
  for (const part of [1, 2, 3, 4]) {
    await syncPart(part);
  }
  console.log("Done: pinball-entry parts 1–4.");
}

void main();
