/** Loại paraphrase gây hiểu nhầm (giới từ, cụm không thay thế được trong đọc hiểu). */

const BLOCKLIST = new Set(
  [
    "among",
    "amongst",
    "between",
    "during",
    "through",
    "despite",
    "concerning",
    "regarding",
    "let in",
    "admit",
    "allow in",
    "inside",
    "within",
    "of",
    "in",
    "on",
    "at",
  ].map((s) => s.toLowerCase()),
);

const VERB_PARAPHRASE_BLOCKLIST = new Set(
  ["among", "amongst", "between", "during", "through", "let in", "admit", "allow in"].map((s) =>
    s.toLowerCase(),
  ),
);

export function isBlockedParaphrase(phrase: string, primaryPos: string): boolean {
  const key = phrase.trim().toLowerCase();
  if (BLOCKLIST.has(key)) return true;
  const p = primaryPos.toLowerCase();
  if (p === "verb" && VERB_PARAPHRASE_BLOCKLIST.has(key)) return true;
  if (p === "verb" && /^(in|on|at|of|to|for|with)$/.test(key)) return true;
  return false;
}
