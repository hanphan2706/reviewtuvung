/**
 * Dòng rác khi copy đề reading từ web (placeholder quảng cáo giữa các đoạn).
 * Chỉ khớp dòng đúng bằng "Advertisement(s)" — giữ nguyên nếu từ nằm trong câu Cambridge
 * (vd. "placed an advertisement in The Wall Street Journal").
 */
export function isReadingWebAdNoiseLine(line: string): boolean {
  const t = line.replace(/\u00a0/g, " ").trim();
  return /^advertisements?$/i.test(t);
}

/** Bỏ dòng quảng cáo web khỏi raw reading; giữ nội dung passage có chữ advertisement. */
export function stripReadingWebAdNoise(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => !isReadingWebAdNoiseLine(line))
    .join("\n");
}
