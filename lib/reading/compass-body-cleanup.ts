/** Gỡ metadata PDF Compass (Reading Time, mẩu glossary dính cuối đoạn). */
const READING_TIME_TAIL =
  /\s*Reading Time\s+_{1,}\s*minutes\s+_{1,}\s*seconds(?:\s+\d+\s*words)?[\s\S]*$/i;

const READING_TIME_ONLY = /^Reading Time\s+_{1,}\s*minutes\s+_{1,}\s*seconds[\s\S]*$/i;

export function stripCompassBodyJunk(text: string): string {
  let out = text.trim();
  if (!out) return out;

  out = out.replace(READING_TIME_TAIL, "").trim();

  const paragraphs = out.split(/\n\n+/);
  const cleaned = paragraphs
    .map((p) => p.replace(READING_TIME_TAIL, "").trim())
    .filter((p) => p && !READING_TIME_ONLY.test(p));

  return cleaned.join("\n\n");
}
