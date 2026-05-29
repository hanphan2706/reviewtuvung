import * as lemmatizer from "wink-lemmatizer";

/** Đưa dạng bôi đen (including, built) về headword tra từ điển (include, build). */

const OVERRIDES: Record<string, string> = {
  including: "include",
  included: "include",
  includes: "include",
  built: "build",
  breaching: "breach",
  breached: "breach",
  wrinkled: "wrinkle",
  organized: "organize",
  organised: "organize",
  caused: "cause",
  causing: "cause",
  increased: "increase",
  increasing: "increase",
  decreased: "decrease",
  decreasing: "decrease",
  showing: "show",
  showed: "show",
  shown: "show",
  series: "series",
  species: "species",
  movies: "movie",
  using: "use",
  used: "use",
  helped: "help",
  helping: "help",
  changed: "change",
  changing: "change",
};

function winkLemma(word: string): string | null {
  const w = word.toLowerCase().replace(/[^a-z'-]/g, "");
  if (!w) return null;
  const verb = lemmatizer.verb(w);
  if (verb && verb !== w) return verb;
  const noun = lemmatizer.noun(w);
  if (noun && noun !== w) return noun;
  const adj = lemmatizer.adjective(w);
  if (adj && adj !== w) return adj;
  return null;
}

export function toDictionaryHeadword(lemma: string): string {
  const w = lemma.toLowerCase().replace(/[^a-z'-]/g, "");
  if (!w) return lemma.toLowerCase();
  if (OVERRIDES[w]) return OVERRIDES[w];

  const fromWink = winkLemma(w);
  if (fromWink && fromWink !== w) return fromWink;

  if (w.endsWith("ing") && w.length > 5) {
    if (w.endsWith("ying")) {
      const stem = w.slice(0, -4);
      return stem.length > 1 ? `${stem}y` : w;
    }
    if (/([^aeiou])\1ing$/.test(w)) {
      return w.slice(0, -4);
    }
    const stem = w.slice(0, -3);
    return `${stem}e`;
  }

  if (w.endsWith("ied") && w.length > 4) {
    return `${w.slice(0, -3)}y`;
  }

  if (w.endsWith("ed") && w.length > 4) {
    const stem = w.slice(0, -2);
    if (stem.endsWith("i")) return `${stem.slice(0, -1)}y`;
    if (/([^aeiou])\1ed$/.test(w)) return stem.slice(0, -1);
    return `${stem}e`;
  }

  if (w.endsWith("ies") && w.length > 4) {
    return `${w.slice(0, -3)}y`;
  }

  if (w.endsWith("es") && w.length > 4) {
    return w.slice(0, -2);
  }

  if (w.endsWith("s") && w.length > 3 && !w.endsWith("ss")) {
    return w.slice(0, -1);
  }

  return w;
}
