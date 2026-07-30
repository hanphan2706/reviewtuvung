/** Small words kept lowercase in title case (except the first word). */
const TITLE_SMALL_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "as",
  "by",
  "with",
  "from",
  "into",
  "over",
  "via",
  "vs",
]);

/** True when letter characters are overwhelmingly uppercase (ALL CAPS titles). */
export function isMostlyUppercaseTitle(title: string): boolean {
  const trimmed = title.trim();
  // Skip answer-key style lines: "11. NOT GIVEN"
  if (/^\d+\.\s/.test(trimmed)) return false;
  const letters = trimmed.replace(/[^\p{L}]/gu, "");
  if (letters.length < 6) return false;
  const upper = letters.replace(/[^\p{Lu}]/gu, "").length;
  return upper / letters.length >= 0.85;
}

/**
 * Convert ALL-CAPS passage titles to normal title case for bài lẻ / hub display.
 * Leaves already-mixed titles unchanged (e.g. "IQ Scores", "The kākāpō").
 */
export function normalizeReadingPassageTitle(title: string): string {
  const trimmed = title.trim();
  if (!trimmed || !isMostlyUppercaseTitle(trimmed)) return trimmed;

  let wordIndex = 0;
  return trimmed.toLowerCase().replace(/[\p{L}'’]+/gu, (word) => {
    const lower = word.toLowerCase();
    const capitalize = wordIndex === 0 || !TITLE_SMALL_WORDS.has(lower);
    wordIndex += 1;
    if (!capitalize) return lower;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });
}
