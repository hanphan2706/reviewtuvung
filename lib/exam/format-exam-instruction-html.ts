function escHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Fix common OCR / source typos before instruction keyword bolding. */
export function normalizeExamInstructionText(text: string): string {
  return text
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\bANDIOR\b/gi, "AND/OR")
    .replace(/\bAND\s+OR\b/gi, "AND/OR")
    .trim();
}

const INSTRUCTION_PHRASES = [
  "NO MORE THAN THREE WORDS AND/OR A NUMBER",
  "NO MORE THAN TWO WORDS AND/OR A NUMBER",
  "NO MORE THAN THREE WORDS",
  "NO MORE THAN TWO WORDS",
  "ONE WORD AND/OR A NUMBER",
  "ONE WORD ONLY",
] as const;

function phraseRegex(phrase: string): RegExp {
  const pattern = phrase
    .split(/\s+/)
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("\\s+");
  return new RegExp(`\\b${pattern}\\b`, "gi");
}

function boldInstructionPhrases(html: string): string {
  const placeholders: string[] = [];
  let out = html;
  for (const phrase of INSTRUCTION_PHRASES) {
    out = out.replace(phraseRegex(phrase), (match) => {
      const token = `@@EXAM_INSTR_${placeholders.length}@@`;
      placeholders.push(`<b>${match}</b>`);
      return token;
    });
  }
  for (let i = 0; i < placeholders.length; i += 1) {
    out = out.split(`@@EXAM_INSTR_${i}@@`).join(placeholders[i] ?? "");
  }
  return out;
}

function boldChooseTwo(html: string): string {
  return html.replace(/\bTWO\b/g, (match, offset, source) => {
    const before = source.slice(Math.max(0, offset - 12), offset);
    return /Choose\s+$/i.test(before) ? "<b>TWO</b>" : match;
  });
}

function boldTfngAnswerWords(html: string): string {
  return html
    .replace(/\bNOT GIVEN\b/gi, "<b>NOT GIVEN</b>")
    .replace(/\bTRUE\b/gi, "<b>TRUE</b>")
    .replace(/\bFALSE\b/gi, "<b>FALSE</b>")
    .replace(/\bYES\b/gi, "<b>YES</b>")
    .replace(/\bNO\b(?!\s+MORE\s+THAN)/gi, "<b>NO</b>");
}

function boldLetterRanges(html: string): string {
  return html.replace(/([A-H])(–|-|to)([A-H])/gi, "<b>$1$2$3</b>");
}

export type FormatExamInstructionOptions = {
  /** Listening map questions use SIX as a keyword. */
  includeSix?: boolean;
};

/** Cambridge-style keyword bolding for exam section instructions. */
export function formatExamInstructionHtml(
  lines: string[],
  options: FormatExamInstructionOptions = {},
): string {
  const text = normalizeExamInstructionText(lines.join(" "));
  if (!text) return "";

  let html = escHtml(text);
  html = boldInstructionPhrases(html);
  html = boldChooseTwo(html);
  if (options.includeSix) {
    html = html.replace(/\bSIX\b/gi, "<b>SIX</b>");
  }
  html = boldTfngAnswerWords(html);
  html = boldLetterRanges(html);
  return html;
}

export function boldTfngInstructionSegment(text: string): string {
  const normalized = normalizeExamInstructionText(text);
  return boldTfngAnswerWords(escHtml(normalized));
}
