import { coreEnViGloss } from "@/lib/reading/core-en-vi-glossary";
import { passageVocabGlossaryGloss } from "@/lib/reading/passage-vocabulary";
import { wiktionaryViGloss } from "@/lib/reading/wiktionary-vi-store";

/** Ghi đè thủ công chỉ khi import thiếu hoặc sai. */
const MANUAL_OVERRIDES: Record<string, string> = {};

/**
 * Nghĩa VI ngắn: curated bài đọc → Wiktionary/StarDict → core → override tay.
 */
export function vietnameseGlossaryGloss(
  lemma: string,
  primaryPos: string,
  headword?: string,
): string | null {
  const hw = (headword ?? lemma).toLowerCase();
  const lm = lemma.toLowerCase();

  const fromPassage =
    passageVocabGlossaryGloss(lm, primaryPos) ?? passageVocabGlossaryGloss(hw, primaryPos);
  if (fromPassage) return fromPassage;

  const fromWiki = wiktionaryViGloss(lemma, primaryPos, headword);
  if (fromWiki) return fromWiki;

  const fromCore = coreEnViGloss(lemma, primaryPos, headword);
  if (fromCore) return fromCore;

  return MANUAL_OVERRIDES[lm] ?? MANUAL_OVERRIDES[hw] ?? null;
}
