/** Gỡ metadata PDF Compass (Reading Time, mẩu glossary dính cuối đoạn). */
const READING_TIME_TAIL =
  /\s*Reading Time\s+_{1,}\s*minutes\s+_{1,}\s*seconds(?:\s+\d+\s*words)?[\s\S]*$/i;

const READING_TIME_ONLY = /^Reading Time\s+_{1,}\s*minutes\s+_{1,}\s*seconds[\s\S]*$/i;

/** Bullet PDF / Wingdings thường gặp trong extract Compass. */
const IDIOM_BULLET = String.raw`[♦•\uF06E\uF0B7\u25A1\u25AA]`;

/**
 * Glossary / bài điền từ OCR dính vào cuối body (trước khối IMAGE/IDIOMS).
 * Term có thể nhiều từ: `be made (out) of [ … ]`.
 */
const IDIOM_EXERCISE_TAIL = new RegExp(
  String.raw`\s*(?:Idiomatic Expressions\b|Fill in the blank\b|${IDIOM_BULLET}\s*[^\n\[]{1,80}\[\s*[^\]]+\])[\s\S]*$`,
  "i",
);

const IDIOM_GLOSSARY_PARA = new RegExp(
  String.raw`^(?:Idiomatic Expressions\b|Fill in the blank\b|${IDIOM_BULLET}\s*[^\n\[]{1,80}\[)`,
  "i",
);

const FILL_IN_BLANK_PARA = /_{8,}/;

/** Dạng glossary một đoạn: `term [ def ] Example. term2 [ def2 ] Example2.` */
const INLINE_IDIOM_GLOSSARY_PARA =
  /^(?:[♦•\uF06E\uF0B7\u25A1\u25AA]\s*)?[A-Za-z][A-Za-z'()\s-]{0,40}\[\s*[^\]]+\]\s+.+\b\[\s*[^\]]+\]/;

export function stripCompassBodyJunk(text: string): string {
  let out = text.trim();
  if (!out) return out;

  out = out.replace(READING_TIME_TAIL, "").trim();
  out = out.replace(IDIOM_EXERCISE_TAIL, "").trim();

  const paragraphs = out.split(/\n\n+/);
  const cleaned = paragraphs
    .map((p) => p.replace(READING_TIME_TAIL, "").replace(IDIOM_EXERCISE_TAIL, "").trim())
    .filter(
      (p) =>
        p &&
        !READING_TIME_ONLY.test(p) &&
        !IDIOM_GLOSSARY_PARA.test(p) &&
        !INLINE_IDIOM_GLOSSARY_PARA.test(p) &&
        !FILL_IN_BLANK_PARA.test(p),
    );

  return cleaned.join("\n\n");
}
