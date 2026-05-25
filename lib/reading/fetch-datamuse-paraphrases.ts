import { isBlockedParaphrase } from "@/lib/reading/paraphrase-filters";

/** Datamuse (miễn phí) — từ/cụm diễn đạt gần nghĩa: https://www.datamuse.com/api */

type DatamuseHit = {
  word: string;
  score: number;
  tags?: string[];
};

const DATAMUSE = "https://api.datamuse.com/words";

function primaryPosToTags(primaryPos: string): Set<string> {
  const p = primaryPos.toLowerCase();
  const tags = new Set<string>();
  if (p === "noun") tags.add("n");
  if (p === "verb") tags.add("v");
  if (p === "adjective" || p === "adj") tags.add("adj");
  if (p === "adverb" || p === "adv") tags.add("adv");
  return tags;
}

function hitMatchesPos(hit: DatamuseHit, wantedTags: Set<string>): boolean {
  if (!wantedTags.size) return true;
  const tags = hit.tags ?? [];
  if (!tags.length) return true;
  for (const t of tags) {
    const code = t.split(":")[0];
    if (code && wantedTags.has(code)) return true;
  }
  return false;
}

function isValidParaphrasePhrase(text: string, lemma: string): boolean {
  const w = text.trim().toLowerCase();
  if (!w || w === lemma) return false;
  if (w.length > 32) return false;
  if (/[0-9]/.test(w)) return false;
  const words = w.split(/\s+/);
  if (words.length > 4) return false;
  if (words.some((x) => x.length > 20)) return false;
  return /^[a-z][a-z\s'-]*$/.test(w);
}

async function datamuseQuery(params: Record<string, string>): Promise<DatamuseHit[]> {
  const url = new URL(DATAMUSE);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  try {
    const res = await fetch(url.toString(), { next: { revalidate: 86400 } });
    if (!res.ok) return [];
    const data = (await res.json()) as DatamuseHit[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

/**
 * Paraphrase = từ/cụm thay thế gần nghĩa (synonym, trigger, cụm “means like”).
 */
export async function fetchDatamuseParaphrases(
  lemma: string,
  primaryPos: string,
  limit: number,
): Promise<string[]> {
  const wantedTags = primaryPosToTags(primaryPos);
  const [synHits, trgHits, mlHits] = await Promise.all([
    datamuseQuery({ rel_syn: lemma, max: "20" }),
    datamuseQuery({ rel_trg: lemma, max: "15" }),
    datamuseQuery({ ml: lemma, max: "12" }),
  ]);

  const ranked: { word: string; score: number }[] = [];

  for (const hit of [...synHits, ...trgHits, ...mlHits]) {
    if (!isValidParaphrasePhrase(hit.word, lemma)) continue;
    if (isBlockedParaphrase(hit.word, primaryPos)) continue;
    if (hit.score < 500) continue;
    if (!hitMatchesPos(hit, wantedTags)) continue;
    ranked.push({ word: hit.word.toLowerCase(), score: hit.score });
  }

  ranked.sort((a, b) => b.score - a.score);

  const seen = new Set<string>([lemma]);
  const out: string[] = [];
  for (const { word } of ranked) {
    if (seen.has(word)) continue;
    seen.add(word);
    out.push(word);
    if (out.length >= limit) break;
  }
  return out;
}
