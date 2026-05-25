import { fetchDatamuseParaphrases } from "@/lib/reading/fetch-datamuse-paraphrases";
import { toDictionaryHeadword } from "@/lib/reading/lemma-headword";
import { isBlockedParaphrase } from "@/lib/reading/paraphrase-filters";
import { glossaryParaphrases } from "@/lib/reading/paraphrase-glossary";

const MAX_PARAPHRASES = 4;

/**
 * Paraphrase = từ/cụm EN thay thế gần nghĩa (vd. cause → lead to, encourage).
 * Glossary trước, Datamuse bổ sung.
 */
/** Chỉ glossary local — không gọi Datamuse (dùng cho tra từ nhanh). */
export function collectParaphrasesGlossaryOnly(lemma: string, primaryPos: string): string[] {
  const headword = toDictionaryHeadword(lemma);
  const seen = new Set<string>([lemma.toLowerCase(), headword]);
  const out: string[] = [];

  const add = (phrase: string) => {
    const key = phrase.trim().toLowerCase();
    if (!key || seen.has(key) || key.length > 32) return;
    if (isBlockedParaphrase(key, primaryPos)) return;
    seen.add(key);
    out.push(phrase.trim());
  };

  for (const g of glossaryParaphrases(headword, primaryPos, MAX_PARAPHRASES)) {
    add(g);
    if (out.length >= MAX_PARAPHRASES) return out;
  }

  return out;
}

export async function collectParaphrases(lemma: string, primaryPos: string): Promise<string[]> {
  const headword = toDictionaryHeadword(lemma);
  const seen = new Set<string>([lemma.toLowerCase(), headword]);
  const out: string[] = [];

  const add = (phrase: string) => {
    const key = phrase.trim().toLowerCase();
    if (!key || seen.has(key) || key.length > 32) return;
    if (isBlockedParaphrase(key, primaryPos)) return;
    seen.add(key);
    out.push(phrase.trim());
  };

  for (const g of glossaryParaphrases(headword, primaryPos, MAX_PARAPHRASES)) {
    add(g);
    if (out.length >= MAX_PARAPHRASES) return out;
  }

  const remote = await fetchDatamuseParaphrases(headword, primaryPos, MAX_PARAPHRASES + 6);
  for (const p of remote) {
    add(p);
    if (out.length >= MAX_PARAPHRASES) break;
  }

  return out;
}
