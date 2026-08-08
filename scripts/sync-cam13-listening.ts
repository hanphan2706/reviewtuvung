/**
 * Align Cam 13 book transcripts (with Q markers) to Whisper word timings.
 * Uses cached `*.whisper-words.json` when present.
 *
 *   npx tsx scripts/sync-cam13-listening.ts
 *   npx tsx scripts/sync-cam13-listening.ts --test 1
 *   npx tsx scripts/sync-cam13-listening.ts --test 1 --part 4
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { buildWhisperAlignedTranscriptSync } from "../lib/listening/build-transcript-sync";
import {
  LISTENING_SYNC_SUBDIR,
  LISTENING_TRANSCRIPT_SUBDIR,
  listeningAudioCandidates,
} from "../lib/listening/listening-materials-paths";
import { listeningPartAudioFileName } from "../lib/listening/listening-materials-urls";
import { getListeningSyncPartConfig } from "../lib/listening/listening-sync-presets";
import { parseListeningTranscriptLines } from "../lib/listening/parse-listening-transcript-lines";
import { sanitizeListeningTranscript } from "../lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "../lib/listening/split-transcript-parts";
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

function deriveAnchorTextFromPlain(plain: string): string | undefined {
  for (const line of parseListeningTranscriptLines(plain)) {
    const text = line.text.trim();
    if (text.length < 6) continue;
    if (/^before you hear/i.test(text) || /^now listen/i.test(text)) continue;
    const tokens = text.match(/[A-Za-z']+/g);
    if (!tokens || tokens.length < 2) continue;
    return tokens.slice(0, Math.min(4, tokens.length)).join(" ");
  }
  return undefined;
}

function parseArgs(argv: string[]): { tests: number[]; parts: number[]; useCache: boolean } {
  let useCache = true;
  let test: number | null = null;
  let part: number | null = null;
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--no-cache") useCache = false;
    if (argv[i] === "--test" && argv[i + 1]) {
      const parsed = Number.parseInt(argv[i + 1] ?? "", 10);
      test = Number.isFinite(parsed) ? parsed : null;
    }
    if (argv[i] === "--part" && argv[i + 1]) {
      const parsed = Number.parseInt(argv[i + 1] ?? "", 10);
      part = Number.isFinite(parsed) ? parsed : null;
    }
  }
  const tests = test ? [test] : [1, 2, 3, 4];
  const parts = part ? [part] : [1, 2, 3, 4];
  return { tests, parts, useCache };
}

function resolveAudio(test: number, part: number): string {
  const file = listeningPartAudioFileName("cam13", test, part);
  const found = listeningAudioCandidates(file).find((candidate) => fs.existsSync(candidate));
  if (!found) throw new Error(`Missing audio ${file}`);
  return found;
}

function loadPlainTranscript(test: number, part: number): string {
  const transcriptDir = path.join(process.cwd(), LISTENING_TRANSCRIPT_SUBDIR);
  const candidates = [
    path.join(transcriptDir, `cam13-test${test}.cleaned.txt`),
    path.join(transcriptDir, `cam13-test ${test}.txt`),
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) throw new Error(`Missing transcript for cam13 test ${test}`);
  const full = sanitizeListeningTranscript(readFileSync(found, "utf8"));
  const plain = splitTranscriptByPart(full)[part];
  if (!plain?.trim()) throw new Error(`Empty PART ${part} in ${found}`);
  return plain;
}

async function syncPart(test: number, part: number, useCache: boolean): Promise<void> {
  const partId = `cam13-t${test}-p${part}`;
  const audioPath = resolveAudio(test, part);
  const audioFile = listeningPartAudioFileName("cam13", test, part);
  const durationSeconds = probeDurationSeconds(audioPath);
  const plain = loadPlainTranscript(test, part);

  console.log(`[cam13] Align ${partId} (${durationSeconds.toFixed(1)}s) → book transcript + Whisper words`);
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: useCache ? listeningWhisperWordsCachePath(partId) : undefined,
  });
  if (payload.words.length === 0) {
    throw new Error(`Whisper returned no words for ${partId}`);
  }

  const partCfg = getListeningSyncPartConfig(partId);
  const anchorText = partCfg.anchorText ?? deriveAnchorTextFromPlain(plain);
  const sync = buildWhisperAlignedTranscriptSync({
    partId,
    audioFile,
    durationSeconds,
    plainTranscript: plain,
    whisperWords: payload.words,
    whisperSegments: payload.segments,
    method: "whisper-local",
    anchorText,
    dialogueMinStartSeconds: partCfg.dialogueMinStartSeconds,
    maxDialogueEndSeconds: partCfg.maxDialogueEndSeconds,
  });

  const qMarkers = new Set<string>();
  for (const cue of sync.cues) {
    for (const match of cue.text.matchAll(/\bQ(\d+)\b/g)) {
      qMarkers.add(`Q${match[1]}`);
    }
  }

  const syncDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  mkdirSync(syncDir, { recursive: true });
  writeFileSync(path.join(syncDir, `${partId}.sync.json`), `${JSON.stringify(sync, null, 2)}\n`);
  console.log(
    `  cues ${sync.cues.length}, Q-markers ${qMarkers.size} → ${partId}.sync.json` +
      (sync.preambleSeconds != null ? ` (preamble ${sync.preambleSeconds}s)` : ""),
  );
}

async function main(): Promise<void> {
  const { tests, parts, useCache } = parseArgs(process.argv.slice(2));
  for (const test of tests) {
    for (const part of parts) {
      await syncPart(test, part, useCache);
    }
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
