import { lookupVocabularyIpa } from "@/lib/vocabulary/ipa/vocabulary-ipa-lookup";
import type { VocabularyUnit, VocabularyWordPreset } from "@/lib/vocabulary/vocabulary-unit-types";

function enrichWord(word: VocabularyWordPreset): VocabularyWordPreset {
  if (word.ipa?.trim()) return word;
  const ipa = lookupVocabularyIpa(word.term);
  return ipa ? { ...word, ipa } : word;
}

/** Gắn IPA từ lookup tập trung khi unit chưa có phiên âm. */
export function enrichVocabularyUnitIpa(unit: VocabularyUnit): VocabularyUnit {
  let changed = false;
  const words = unit.words.map((word) => {
    const next = enrichWord(word);
    if (next !== word) changed = true;
    return next;
  });
  return changed ? { ...unit, words } : unit;
}

export function enrichVocabularyUnitsIpa(units: readonly VocabularyUnit[]): VocabularyUnit[] {
  return units.map(enrichVocabularyUnitIpa);
}
