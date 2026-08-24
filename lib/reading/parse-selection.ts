export type ReadingSelectionMode = "word" | "phrase" | "translate-only";

const MAX_CHARS = 320;
const MAX_WORDS_DICTIONARY = 4;

/**
 * 1 từ → từ điển; 2–4 từ → từ điển + dịch; dài hơn → dịch (vẫn thêm được vào deck).
 */
export function parseReadingSelection(text: string): { query: string; mode: ReadingSelectionMode } | null {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length < 2) return null;
  const clipped = t.length > MAX_CHARS ? t.slice(0, MAX_CHARS) : t;

  const words = clipped.split(" ").filter(Boolean);
  if (words.length === 0) return null;
  if (words.length === 1) return { query: clipped, mode: "word" };
  if (words.length <= MAX_WORDS_DICTIONARY) return { query: clipped, mode: "phrase" };
  return { query: clipped, mode: "translate-only" };
}

/** @deprecated dùng parseReadingSelection */
export function singleWordOrPhrase(text: string): string | null {
  const parsed = parseReadingSelection(text);
  if (!parsed || parsed.mode === "translate-only") return null;
  return parsed.query;
}
