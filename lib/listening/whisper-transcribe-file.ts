import fs from "node:fs";
import type { WhisperWord } from "@/lib/listening/build-transcript-sync";

type WhisperVerboseResponse = {
  words?: Array<{ word?: string; start?: number; end?: number }>;
  segments?: Array<{
    words?: Array<{ word?: string; start?: number; end?: number }>;
  }>;
};

/** Gọi OpenAI Whisper API (word timestamps) — chỉ dùng khi build với `--api`. */
export async function whisperApiTranscribeFileWords(
  audioPath: string,
  apiKey: string,
): Promise<WhisperWord[]> {
  const buffer = fs.readFileSync(audioPath);
  const blob = new Blob([buffer], { type: "audio/mpeg" });
  const form = new FormData();
  form.append("file", blob, pathBasename(audioPath));
  form.append("model", "whisper-1");
  form.append("language", "en");
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "word");

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Whisper failed (${res.status}): ${err.slice(0, 300)}`);
  }

  const data = (await res.json()) as WhisperVerboseResponse;
  const fromTop = data.words ?? [];
  const fromSegments = (data.segments ?? []).flatMap((s) => s.words ?? []);
  const words = fromTop.length > 0 ? fromTop : fromSegments;

  return words
    .map((w) => ({
      word: typeof w.word === "string" ? w.word : "",
      start: typeof w.start === "number" ? w.start : 0,
      end: typeof w.end === "number" ? w.end : 0,
    }))
    .filter((w) => w.word.length > 0);
}

function pathBasename(p: string): string {
  const parts = p.split(/[/\\]/);
  return parts[parts.length - 1] ?? "audio.mp3";
}
