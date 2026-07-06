import { listEviuElementaryUnits } from "@/lib/vocabulary/units/eviu-elementary-all-units";
import type { WordInput } from "@/lib/vocabulary/units/eviu-unit-builder";

/** Chuẩn hoá headword / cụm để so khớp dedup giữa các series EVIU. */
export function normalizeVocabularyKey(term: string): string {
  return term
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

let elementaryKeysCache: Set<string> | null = null;

/** Lemma + cụm đã có trong EVIU Elementary (gồm food-a1). */
export function getElementaryVocabularyKeys(): ReadonlySet<string> {
  if (elementaryKeysCache) return elementaryKeysCache;

  const keys = new Set<string>();
  for (const unit of listEviuElementaryUnits()) {
    for (const word of unit.words) {
      const key = normalizeVocabularyKey(word.term);
      if (key) keys.add(key);
    }
  }
  elementaryKeysCache = keys;
  return keys;
}

export function isDuplicateOfElementary(term: string): boolean {
  const key = normalizeVocabularyKey(term);
  return key ? getElementaryVocabularyKeys().has(key) : false;
}

/** Lọc danh sách từ Pre-Intermediate — bỏ lemma/cụm đã có ở Elementary. */
export function filterWordsNotInElementary(words: readonly WordInput[]): WordInput[] {
  const existing = getElementaryVocabularyKeys();
  return words.filter((word) => {
    const key = normalizeVocabularyKey(word.term);
    return key && !existing.has(key);
  });
}
