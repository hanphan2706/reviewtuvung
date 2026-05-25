/** Gợi ý paraphrase / cách diễn đạt gần nghĩa — bổ sung khi Datamuse thiếu (IELTS đọc hiểu). */
export type ParaphraseGlossaryItem = {
  en: string;
  /** Khớp loại từ sense chính; bỏ qua nếu không khớp. */
  pos?: "noun" | "verb" | "adjective" | "adverb";
};

const GLOSSARY: Record<string, ParaphraseGlossaryItem[]> = {
  cause: [
    { en: "lead to", pos: "verb" },
    { en: "bring about", pos: "verb" },
    { en: "encourage", pos: "verb" },
    { en: "prompt", pos: "verb" },
    { en: "reason", pos: "noun" },
    { en: "source", pos: "noun" },
  ],
  effect: [
    { en: "result", pos: "noun" },
    { en: "outcome", pos: "noun" },
    { en: "bring about", pos: "verb" },
    { en: "lead to", pos: "verb" },
  ],
  increase: [
    { en: "raise", pos: "verb" },
    { en: "boost", pos: "verb" },
    { en: "grow", pos: "verb" },
    { en: "rise", pos: "verb" },
  ],
  decrease: [
    { en: "reduce", pos: "verb" },
    { en: "lower", pos: "verb" },
    { en: "decline", pos: "verb" },
    { en: "drop", pos: "verb" },
  ],
  important: [
    { en: "significant", pos: "adjective" },
    { en: "crucial", pos: "adjective" },
    { en: "key", pos: "adjective" },
    { en: "vital", pos: "adjective" },
  ],
  show: [
    { en: "demonstrate", pos: "verb" },
    { en: "reveal", pos: "verb" },
    { en: "indicate", pos: "verb" },
    { en: "display", pos: "verb" },
  ],
  use: [
    { en: "employ", pos: "verb" },
    { en: "utilize", pos: "verb" },
    { en: "apply", pos: "verb" },
  ],
  help: [
    { en: "assist", pos: "verb" },
    { en: "support", pos: "verb" },
    { en: "aid", pos: "verb" },
  ],
  problem: [
    { en: "issue", pos: "noun" },
    { en: "challenge", pos: "noun" },
    { en: "difficulty", pos: "noun" },
  ],
  change: [
    { en: "alter", pos: "verb" },
    { en: "modify", pos: "verb" },
    { en: "shift", pos: "verb" },
    { en: "transform", pos: "verb" },
  ],
  include: [
    { en: "comprise", pos: "verb" },
    { en: "contain", pos: "verb" },
    { en: "incorporate", pos: "verb" },
    { en: "cover", pos: "verb" },
  ],
};

function posMatches(itemPos: ParaphraseGlossaryItem["pos"], primaryPos: string): boolean {
  if (!itemPos) return true;
  const p = primaryPos.toLowerCase();
  if (itemPos === "noun") return p === "noun";
  if (itemPos === "verb") return p === "verb";
  if (itemPos === "adjective") return p === "adjective" || p === "adj";
  if (itemPos === "adverb") return p === "adverb" || p === "adv";
  return true;
}

export function glossaryParaphrases(lemma: string, primaryPos: string, limit: number): string[] {
  const items = GLOSSARY[lemma.toLowerCase()];
  if (!items?.length) return [];
  const out: string[] = [];
  for (const item of items) {
    if (!posMatches(item.pos, primaryPos)) continue;
    out.push(item.en);
    if (out.length >= limit) break;
  }
  return out;
}
