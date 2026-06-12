/**
 * Build file sync transcript ↔ audio (chạy LOCAL — không gọi API lúc user nghe).
 *
 * Mặc định: faster-whisper trên máy (miễn phí API).
 *   npm run listening:sync-transcript
 *   npm run listening:sync-transcript -- --part 2
 *   npm run listening:sync-transcript -- --all
 *
 * Cài Whisper local (một lần):
 *   python3 -m venv .venv-listening && source .venv-listening/bin/activate
 *   pip install -r scripts/requirements-listening-whisper.txt
 *
 * Output (commit + deploy cùng app):
 *   listening materials/sync/cam19-t1-p{n}.sync.json
 *
 * Tuỳ chọn:
 *   --proportional     Ước lượng (không Whisper)
 *   --api              OpenAI Whisper API (trả phí, build một lần)
 *   --no-cache         Bỏ qua .whisper-words.json cache
 *   --anchor "text" --at 120   Neo tay (chủ yếu cho proportional)
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  alignTranscriptSyncToAnchor,
  buildProportionalTranscriptSync,
  buildWhisperAlignedTranscriptSync,
} from "../lib/listening/build-transcript-sync";
import {
  LISTENING_SYNC_SUBDIR,
  listeningAudioCandidates,
  listeningTranscriptCandidates,
} from "../lib/listening/listening-materials-paths";
import { LISTENING_SYNC_ANCHORS, getListeningSyncPartConfig } from "../lib/listening/listening-sync-presets";
import { sanitizeListeningTranscript } from "../lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "../lib/listening/split-transcript-parts";
import { whisperApiTranscribeFileWords } from "../lib/listening/whisper-transcribe-file";
import {
  listeningWhisperWordsCachePath,
  whisperLocalTranscribe,
} from "../lib/listening/whisper-transcribe-local";

type SyncMode = "local" | "api" | "proportional";

function resolveListeningAudioPath(fileName: string): string | null {
  for (const p of listeningAudioCandidates(fileName)) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function resolveListeningTranscriptPath(fileName: string): string | null {
  for (const p of listeningTranscriptCandidates(fileName)) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function parseArgs(argv: string[]): {
  parts: number[];
  mode: SyncMode;
  test: number;
  anchorText: string | null;
  anchorAt: number | null;
  speechStart: number | null;
  useCache: boolean;
} {
  let mode: SyncMode = "local";
  let test = 1;
  let part = 1;
  let all = false;
  let anchorText: string | null = null;
  let anchorAt: number | null = null;
  let speechStart: number | null = null;
  let useCache = true;

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--local") mode = "local";
    if (a === "--api" || a === "--whisper") mode = "api";
    if (a === "--proportional") mode = "proportional";
    if (a === "--all") all = true;
    if (a === "--no-cache") useCache = false;
    if (a === "--part" && argv[i + 1]) part = Number.parseInt(argv[i + 1]!, 10);
    if (a === "--test" && argv[i + 1]) test = Number.parseInt(argv[i + 1]!, 10);
    if (a === "--anchor" && argv[i + 1]) anchorText = argv[i + 1]!;
    if (a === "--at" && argv[i + 1]) anchorAt = Number.parseFloat(argv[i + 1]!);
    if (a === "--speech-start" && argv[i + 1]) speechStart = Number.parseFloat(argv[i + 1]!);
  }

  const parts = all ? [1, 2, 3, 4] : [part];
  for (const p of parts) {
    if (!Number.isFinite(p) || p < 1 || p > 4) {
      throw new Error("--part must be 1–4");
    }
  }

  return { parts, mode, test, anchorText, anchorAt, speechStart, useCache };
}

function probeDurationSeconds(audioPath: string): number {
  try {
    const out = execSync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
      { encoding: "utf8" },
    ).trim();
    const n = Number.parseFloat(out);
    if (Number.isFinite(n) && n > 0) return n;
  } catch {
    /* fall through */
  }
  throw new Error("ffprobe không đọc được duration — cài ffmpeg hoặc kiểm tra file audio.");
}

async function buildSyncForPart(
  part: number,
  test: number,
  mode: SyncMode,
  opts: {
    anchorText: string | null;
    anchorAt: number | null;
    speechStart: number | null;
    useCache: boolean;
  },
): Promise<void> {
  const partId = `cam19-t${test}-p${part}`;
  const audioFile = `Test${test} Part${part}.mp3`;
  const audioPath = resolveListeningAudioPath(audioFile);
  if (!audioPath) {
    throw new Error(`Không tìm thấy audio: ${audioFile}`);
  }

  const transcriptPath =
    resolveListeningTranscriptPath(`cam19-test${test}.cleaned.txt`) ??
    resolveListeningTranscriptPath(`cam19-test${test}.txt`);
  if (!transcriptPath) {
    throw new Error(`Không tìm thấy cam19-test${test}.cleaned.txt hoặc cam19-test${test}.txt`);
  }

  const full = sanitizeListeningTranscript(readFileSync(transcriptPath, "utf8"));
  const plain = splitTranscriptByPart(full)[part];
  if (!plain?.length) {
    throw new Error(`Không có nội dung PART ${part} trong transcript.`);
  }

  const durationSeconds = probeDurationSeconds(audioPath);
  let sync;

  if (mode === "local") {
    console.log(`[${partId}] Whisper local (faster-whisper)…`);
    const payload = await whisperLocalTranscribe(audioPath, {
      wordsCachePath: opts.useCache ? listeningWhisperWordsCachePath(partId) : undefined,
    });
    console.log(`  words: ${payload.words.length}, segments: ${payload.segments.length}`);
    const partCfg = getListeningSyncPartConfig(partId);
    sync = buildWhisperAlignedTranscriptSync({
      partId,
      audioFile,
      durationSeconds,
      plainTranscript: plain,
      whisperWords: payload.words,
      whisperSegments: payload.segments,
      method: "whisper-local",
      anchorText: partCfg.anchorText,
      dialogueMinStartSeconds: partCfg.dialogueMinStartSeconds,
      maxDialogueEndSeconds: partCfg.maxDialogueEndSeconds,
    });
  } else if (mode === "api") {
    const key = process.env.OPENAI_API_KEY?.trim();
    if (!key) {
      throw new Error("Cần OPENAI_API_KEY để dùng --api");
    }
    console.log(`[${partId}] Whisper API…`);
    const words = await whisperApiTranscribeFileWords(audioPath, key);
    sync = buildWhisperAlignedTranscriptSync({
      partId,
      audioFile,
      durationSeconds,
      plainTranscript: plain,
      whisperWords: words,
      method: "whisper-api",
    });
  } else {
    sync = buildProportionalTranscriptSync({
      partId,
      audioFile,
      durationSeconds,
      plainTranscript: plain,
      speechStartSeconds: opts.speechStart ?? undefined,
    });
  }

  if (opts.anchorText && opts.anchorAt !== null) {
    sync = alignTranscriptSyncToAnchor(sync, opts.anchorText, opts.anchorAt);
    console.log(`  anchor: "${opts.anchorText}" @ ${opts.anchorAt}s → ${sync.anchor?.cueId}`);
  } else {
    const preset = LISTENING_SYNC_ANCHORS[partId];
    if (preset && mode !== "local") {
      sync = alignTranscriptSyncToAnchor(sync, preset.anchorText, preset.atSeconds);
      console.log(`  anchor (preset): "${preset.anchorText}" @ ${preset.atSeconds}s → ${sync.anchor?.cueId}`);
    } else if (preset && mode === "local" && sync.anchor == null) {
      console.log(`  anchor (word): "${preset.anchorText}" @ ${preset.atSeconds}s (built-in)`);
    }
  }

  writeSync(sync, partId);
}

function writeSync(
  sync: ReturnType<typeof buildProportionalTranscriptSync>,
  partId: string,
): void {
  const outDir = path.join(process.cwd(), LISTENING_SYNC_SUBDIR);
  mkdirSync(outDir, { recursive: true });
  const dest = path.join(outDir, `${partId}.sync.json`);
  writeFileSync(dest, `${JSON.stringify(sync, null, 2)}\n`, "utf8");
  console.log(`Wrote ${dest}`);
  console.log(`  method: ${sync.method}, cues: ${sync.cues.length}, duration: ${sync.durationSeconds.toFixed(1)}s`);
}

async function main(): Promise<void> {
  const { parts, mode, test, anchorText, anchorAt, speechStart, useCache } = parseArgs(
    process.argv.slice(2),
  );

  for (const part of parts) {
    await buildSyncForPart(part, test, mode, {
      anchorText,
      anchorAt,
      speechStart,
      useCache,
    });
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
