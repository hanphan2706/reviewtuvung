export type ReadingSelectionMode = "word" | "phrase" | "translate-only";

const MAX_CHARS = 320;
const MAX_WORDS_DICTIONARY = 4;
const MAX_WORDS_TRANSLATE = 24;

/**
 * 1 từ → từ điển; 2–4 từ → từ điển + dịch; 5–24 từ → chỉ dịch (Google / MyMemory).
 */
export function parseReadingSelection(text: string): { query: string; mode: ReadingSelectionMode } | null {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length < 2 || t.length > MAX_CHARS) return null;
  if (/\n/.test(t)) return null;

  const words = t.split(" ").filter(Boolean);
  if (words.length === 0) return null;
  if (words.length === 1) return { query: t, mode: "word" };
  if (words.length <= MAX_WORDS_DICTIONARY) return { query: t, mode: "phrase" };
  if (words.length <= MAX_WORDS_TRANSLATE) return { query: t, mode: "translate-only" };
  return null;
}

/** @deprecated dùng parseReadingSelection */
export function singleWordOrPhrase(text: string): string | null {
  const parsed = parseReadingSelection(text);
  if (!parsed || parsed.mode === "translate-only") return null;
  return parsed.query;
}
