import { passageVocabGlossaryGloss } from "@/lib/reading/passage-vocabulary";

function normalizePhrase(phrase: string): string {
  return phrase.toLowerCase().trim().replace(/\s+/g, " ");
}

/** Cụm 2–4 từ có trong từ vựng curated (bài đọc / RC). */
export function curatedCollocationGloss(phrase: string): string | null {
  const key = normalizePhrase(phrase);
  if (!key || !/\s/.test(key)) return null;
  return passageVocabGlossaryGloss(key);
}
