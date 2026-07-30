#!/usr/bin/env npx tsx
/**
 * Whisper raw → Cambridge-style transcript + audio sync cho Đề thi thật 1.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { buildRealTestListeningTranscriptFromWhisper } from "@/lib/exam/build-real-test-listening-transcript";
import { buildWhisperAlignedTranscriptSync } from "@/lib/listening/build-transcript-sync";
import { LISTENING_SYNC_SUBDIR } from "@/lib/listening/listening-materials-paths";
import { whisperLocalTranscribe } from "@/lib/listening/whisper-transcribe-local";

const audioPath = path.join(process.cwd(), "listening materials/Audio real test/real test 1.mp3");
const rawPath = path.join(process.cwd(), "listening materials/transcript/real-test-1.txt");
const cleanedPath = path.join(process.cwd(), "listening materials/transcript/real-test-1.cleaned.txt");
const answerKeyPath = path.join(process.cwd(), "listening materials/real test 1 answers.txt");
const cachePath = path.join(process.cwd(), "listening materials/sync/real-test-1.whisper-words.json");
const syncPath = path.join(process.cwd(), LISTENING_SYNC_SUBDIR, "real-test-1.sync.json");

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
  if (!fs.existsSync(audioPath)) {
    console.error("Missing audio:", audioPath);
    process.exit(1);
  }

  let rawWhisper = "";
  if (fs.existsSync(rawPath)) {
    rawWhisper = fs.readFileSync(rawPath, "utf8");
  } else {
    console.log("Transcribing audio…");
    const payload = await whisperLocalTranscribe(audioPath, {
      wordsCachePath: cachePath,
      model: "base",
    });
    rawWhisper = payload.segments.map((s) => s.text.trim()).filter(Boolean).join("\n");
    fs.mkdirSync(path.dirname(rawPath), { recursive: true });
    fs.writeFileSync(rawPath, `${rawWhisper.trim()}\n`, "utf8");
  }

  console.log("Building Cambridge-style transcript…");
  const answerKeyText = fs.readFileSync(answerKeyPath, "utf8");
  const cleaned = buildRealTestListeningTranscriptFromWhisper(rawWhisper, answerKeyText);
  fs.writeFileSync(cleanedPath, `${cleaned.trim()}\n`, "utf8");
  console.log("Wrote", cleanedPath);

  console.log("Building whisper sync…");
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: cachePath,
    model: "base",
  });
  const durationSeconds = probeDurationSeconds(audioPath);
  const sync = buildWhisperAlignedTranscriptSync({
    partId: "real-test-1",
    audioFile: "real test 1.mp3",
    durationSeconds,
    plainTranscript: cleaned,
    whisperWords: payload.words,
    whisperSegments: payload.segments,
    dialogueMinStartSeconds: 70,
    anchorText: "Hello, Fernley sports center",
  });

  fs.mkdirSync(path.dirname(syncPath), { recursive: true });
  fs.writeFileSync(syncPath, `${JSON.stringify(sync, null, 2)}\n`, "utf8");
  console.log("Wrote", syncPath, `(${sync.cues.length} cues)`);
}

void main().catch((err) => {
  console.error(err);
  process.exit(1);
});
