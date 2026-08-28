/** Blank token: underscores / ellipsis (U+2026) / ASCII dots.
 * OCR often mixes them (e.g. `……….…` + `..`), so match any run of 2+ blank chars.
 */
export const FILL_GAP_BLANK = "[_.…]{2,}";

/** Number immediately followed by a blank (note/summary inline gaps). */
export const FILL_GAP_RE = new RegExp(`(\\d{1,2})\\s*${FILL_GAP_BLANK}`, "g");

/** Extend past a gap match while leftover blank chars remain (defensive). */
export function consumeTrailingBlankChars(text: string, fromIndex: number): number {
  let i = fromIndex;
  while (i < text.length && /[_.…]/.test(text[i] ?? "")) i += 1;
  return i;
}

/** Bare gap in vertical Cambridge PDFs: "entirely 1 diet" (not thousands like "3,100" or years like "70 CE"). */
export const BARE_GAP_RE = /\s([1-9]|[12]\d|3[0-9]|40)(?!\d)(?:,(?!\d)|(?=[\s.…]|$))/g;

/** Units / dimensions after a bare number — not fill-gap question numbers (e.g. "up to 30 metres"). */
export const BARE_GAP_UNIT_AFTER_RE =
  /^\s*(?:metres?|meters?|kilometres?|kilometers?|km\b|kg\b|cm\b|mm\b|%|years?|days?|hours?|minutes?|seconds?|tall|long|wide|high)\b/i;

/** "passage 3", "questions 14", "boxes 9" — passage/box refs, not gap numbers. */
export const BARE_GAP_CONTEXT_BEFORE_RE =
  /(?:passages?|questions?|boxes?|sections?|parts?|paragraphs?|numbers?|items?)\s*$/i;

export function isBareGapFollowedByUnit(line: string, matchEndIndex: number): boolean {
  return BARE_GAP_UNIT_AFTER_RE.test(line.slice(matchEndIndex));
}

/** `BARE_GAP_RE` match index points at the whitespace before the digits. */
export function isBareGapContextFalsePositive(line: string, matchIndex: number): boolean {
  return BARE_GAP_CONTEXT_BEFORE_RE.test(line.slice(0, matchIndex));
}

export function textHasBlankChars(text: string): boolean {
  return new RegExp(FILL_GAP_BLANK).test(text);
}

/** Extract all question numbers with blanks on one line. */
export function extractGapNumbersFromLine(line: string): number[] {
  const nums: number[] = [];
  const inline = new RegExp(FILL_GAP_RE.source, "g");
  let m = inline.exec(line);
  while (m !== null) {
    const n = Number.parseInt(m[1] ?? "", 10);
    if (!Number.isNaN(n)) nums.push(n);
    m = inline.exec(line);
  }
  if (nums.length > 0) return nums;

  /** Bare number gap (vertical Cambridge layout): "entirely 1 diet", "mother's 3". */
  const bare = new RegExp(BARE_GAP_RE.source, "g");
  let bm = bare.exec(line);
  while (bm !== null) {
    const n = Number.parseInt(bm[1] ?? "", 10);
    const matchIndex = bm.index ?? 0;
    const afterIdx = matchIndex + bm[0].length;
    // Skip measurements / dimensions: "up to 30 metres", "6 metres long".
    if (isBareGapFollowedByUnit(line, afterIdx) || isBareGapContextFalsePositive(line, matchIndex)) {
      bm = bare.exec(line);
      continue;
    }
    if (!Number.isNaN(n) && n >= 1 && n <= 40) nums.push(n);
    bm = bare.exec(line);
  }
  if (nums.length > 0) return [...new Set(nums)];

  const lead = line.match(/^(\d{1,2})\s+(.+)$/);
  if (lead?.[1] && lead[2] && textHasBlankChars(lead[2])) {
    const n = Number.parseInt(lead[1], 10);
    if (!Number.isNaN(n)) nums.push(n);
  }
  return nums;
}

export function hasFillGap(line: string): boolean {
  return extractGapNumbersFromLine(line).length > 0;
}
