/** Blank token: underscores, ellipsis, or dots (Cambridge .txt variants). */
export const FILL_GAP_BLANK = "(?:_{2,}|…{2,}|\\.{3,})";

/** Number immediately followed by a blank (note/summary inline gaps). */
export const FILL_GAP_RE = new RegExp(`(\\d{1,2})\\s*${FILL_GAP_BLANK}`, "g");

/** Bare gap in vertical Cambridge PDFs: "entirely 1 diet" (not thousands like "3,100"). */
export const BARE_GAP_RE = /\s(\d{1,2})(?!\d)(?:,(?!\d)|(?=[\s.…]|$))/g;

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
    if (!Number.isNaN(n)) nums.push(n);
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
