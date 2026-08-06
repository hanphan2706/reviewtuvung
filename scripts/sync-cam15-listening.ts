/**
 * Whisper Cam 15 Test 1–4 → transcript + sync (local faster-whisper).
 *
 *   npx tsx scripts/sync-cam15-listening.ts
 *   npx tsx scripts/sync-cam15-listening.ts --test 1
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  buildWhisperSegmentOnlyTranscriptSync,
  whisperSegmentsToPlainTranscript,
} from "../lib/listening/build-transcript-sync";
import {
  LISTENING_SYNC_SUBDIR,
  LISTENING_TRANSCRIPT_SUBDIR,
  listeningAudioCandidates,
} from "../lib/listening/listening-materials-paths";
import { listeningPartAudioFileName } from "../lib/listening/listening-materials-urls";
import {
  listeningWhisperWordsCachePath,
  whisperLocalTranscribe,
} from "../lib/listening/whisper-transcribe-local";

function probeDurationSeconds(audioPath: string): number {
  const out = execSync(
    `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
    { encoding: "utf8" },
  ).trim();
  const n = Number.parseFloat(out);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error(`ffprobe failed for ${audioPath}`);
  }
  return n;
}

function parseArgs(argv: string[]): { tests: number[]; useCache: boolean } {
  let useCache = true;
  let test: number | null = null;
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--no-cache") useCache = false;
    if (argv[i] === "--test" && argv[i + 1]) {
      const parsed = Number.parseInt(argv[i + 1] ?? "", 10);
      test = Number.isFinite(parsed) ? parsed : null;
    }
  }
  const tests = test ? [test] : [1, 2, 3, 4];
  return { tests, useCache };
}

function resolveAudio(test: number, part: number): string {
  const file = listeningPartAudioFileName("cam15", test, part);
  const found = listeningAudioCandidates(file).find((candidate) => fs.existsSync(candidate));
  if (!found) throw new Error(`Missing audio ${file}`);
  return found;
}

async function syncPart(test: number, part: number, useCache: boolean): Promise<string> {
  const partId = `cam15-t${test}-p${part}`;
  const audioPath = resolveAudio(test, part);
  const durationSeconds = probeDurationSeconds(audioPath);
  console.log(`[cam15] Whisper ${partId} (${durationSeconds.toFixed(1)}s)`);
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: useCache ? listeningWhisperWordsCachePath(partId) : undefined,
  });
  if (payload.segments.length === 0) {
    throw new Error(`Whisper returned no segments for ${partId}`);
  }

  const plain = whisperSegmentsToPlainTranscript(payload.segments);
  const sync = buildWhisperSegmentOnlyTranscriptSync({
    partId,
    audioFile: listeningPartAudioFileName("cam15", test, part),
    durationSeconds,
    segments: payload.segments,
    method: "whisper-local",
  });

  const syncDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  mkdirSync(syncDir, { recursive: true });
  writeFileSync(path.join(syncDir, `${partId}.sync.json`), `${JSON.stringify(sync, null, 2)}\n`);
  console.log(`  cues ${sync.cues.length} → ${partId}.sync.json`);
  return plain.trim();
}

async function main(): Promise<void> {
  const { tests, useCache } = parseArgs(process.argv.slice(2));
  const transcriptDir = path.join(process.cwd(), LISTENING_TRANSCRIPT_SUBDIR);
  mkdirSync(transcriptDir, { recursive: true });

  for (const test of tests) {
    const blocks: string[] = [];
    for (const part of [1, 2, 3, 4]) {
      const plain = await syncPart(test, part, useCache);
      blocks.push(`PART ${part}\n\n${plain}`);
    }
    const dest = path.join(transcriptDir, `cam15-test ${test}.whisper.txt`);
    writeFileSync(dest, `${blocks.join("\n\n")}\n`);
    console.log(`[cam15] wrote ${dest} (does not overwrite book transcript)`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
