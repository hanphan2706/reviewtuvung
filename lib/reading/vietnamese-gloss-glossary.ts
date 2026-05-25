import { wiktionaryViGloss } from "@/lib/reading/wiktionary-vi-store";

/** Ghi đè thủ công chỉ khi Wiktionary/import thiếu hoặc sai — ưu tiên chỉ mục import. */
const MANUAL_OVERRIDES: Record<string, string> = {};

/**
 * Nghĩa VI ngắn kiểu từ điển: Wiktionary (data/dictionary) → override tay (nếu có).
 */
export function vietnameseGlossaryGloss(
  lemma: string,
  primaryPos: string,
  headword?: string,
): string | null {
  const fromWiki = wiktionaryViGloss(lemma, primaryPos, headword);
  if (fromWiki) return fromWiki;

  const hw = (headword ?? lemma).toLowerCase();
  const lm = lemma.toLowerCase();
  return MANUAL_OVERRIDES[lm] ?? MANUAL_OVERRIDES[hw] ?? null;
}
