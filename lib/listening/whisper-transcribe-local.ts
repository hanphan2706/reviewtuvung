import { execFile } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import type { WhisperWord } from "@/lib/listening/build-transcript-sync";

const execFileAsync = promisify(execFile);

const PYTHON_SCRIPT = path.join(process.cwd(), "scripts", "whisper-local-words.py");

export type WhisperSegment = { text: string; start: number; end: number };

export type WhisperLocalPayload = {
  words: WhisperWord[];
  segments: WhisperSegment[];
};

export type WhisperLocalOptions = {
  model?: string;
  python?: string;
  wordsCachePath?: string;
};

function parseWord(item: unknown): WhisperWord | null {
  if (!item || typeof item !== "object") return null;
  const w = item as { word?: unknown; start?: unknown; end?: unknown };
  const word = typeof w.word === "string" ? w.word.trim() : "";
  const start = typeof w.start === "number" ? w.start : 0;
  const end = typeof w.end === "number" ? w.end : start;
  if (!word) return null;
  return { word, start, end };
}

function parseSegment(item: unknown): WhisperSegment | null {
  if (!item || typeof item !== "object") return null;
  const s = item as { text?: unknown; start?: unknown; end?: unknown };
  const text = typeof s.text === "string" ? s.text.trim() : "";
  const start = typeof s.start === "number" ? s.start : 0;
  const end = typeof s.end === "number" ? s.end : start;
  if (!text) return null;
  return { text, start, end };
}

function parsePayloadJson(raw: string): WhisperLocalPayload {
  const data = JSON.parse(raw) as unknown;

  if (Array.isArray(data)) {
    return {
      words: data.map(parseWord).filter((x): x is WhisperWord => x !== null),
      segments: [],
    };
  }

  if (!data || typeof data !== "object") {
    throw new Error("Whisper local output must be JSON object or array");
  }

  const obj = data as { words?: unknown; segments?: unknown };
  const words = Array.isArray(obj.words)
    ? obj.words.map(parseWord).filter((x): x is WhisperWord => x !== null)
    : [];
  const segments = Array.isArray(obj.segments)
    ? obj.segments.map(parseSegment).filter((x): x is WhisperSegment => x !== null)
    : [];

  return { words, segments };
}

/** Chạy faster-whisper trên máy local (không gọi OpenAI). */
export async function whisperLocalTranscribe(
  audioPath: string,
  options: WhisperLocalOptions = {},
): Promise<WhisperLocalPayload> {
  const cachePath = options.wordsCachePath;
  if (cachePath && fs.existsSync(cachePath)) {
    return parsePayloadJson(fs.readFileSync(cachePath, "utf8"));
  }

  if (!fs.existsSync(PYTHON_SCRIPT)) {
    throw new Error(`Missing ${PYTHON_SCRIPT}`);
  }

  const python = options.python ?? process.env.LISTENING_WHISPER_PYTHON ?? "python3";
  const model = options.model ?? process.env.LISTENING_WHISPER_MODEL ?? "base";

  const { stdout, stderr } = await execFileAsync(
    python,
    [PYTHON_SCRIPT, audioPath, model],
    {
      maxBuffer: 64 * 1024 * 1024,
      encoding: "utf8",
      env: { ...process.env },
    },
  );

  if (stderr?.trim()) {
    console.warn("[whisper-local]", stderr.trim().slice(0, 500));
  }

  const payload = parsePayloadJson(stdout.trim());
  if (cachePath) {
    fs.mkdirSync(path.dirname(cachePath), { recursive: true });
    fs.writeFileSync(cachePath, `${JSON.stringify(payload)}\n`, "utf8");
  }

  return payload;
}

/** @deprecated Dùng whisperLocalTranscribe */
export async function whisperLocalTranscribeFileWords(
  audioPath: string,
  options: WhisperLocalOptions = {},
): Promise<WhisperWord[]> {
  const payload = await whisperLocalTranscribe(audioPath, options);
  return payload.words;
}

export function listeningWhisperWordsCachePath(partId: string): string {
  return path.join(process.cwd(), "listening materials", "sync", `${partId}.whisper-words.json`);
}
