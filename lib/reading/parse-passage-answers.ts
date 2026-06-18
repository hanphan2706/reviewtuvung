/**
 * Đáp án trong cùng file .txt Cambridge, sau phần Questions của passage:
 *
 * ANSWERS
 * 14 E
 * 15 B
 * 17 mood
 */

/** Chuẩn hóa viết tắt trong file .txt → giá trị UI exam (TRUE/FALSE/NOT GIVEN, …). */
export function normalizeExamAnswerValue(ans: string): string {
  const trimmed = ans.trim();
  const upper = trimmed.toUpperCase();
  if (upper === "T") return "TRUE";
  if (upper === "F") return "FALSE";
  if (upper === "NG" || upper === "N0") return "NOT GIVEN";
  return trimmed;
}

/** Parse one answer cell (`1. carnivorous`, `11  FALSE`, …). */
function parseAnswerCell(cell: string, out: Record<number, string>): void {
  const trimmed = cell.trim();
  if (!trimmed) return;

  const combined = trimmed.match(/^(\d{1,2})\s*(?:&|and)\s*(\d{1,2})\s+(.+)$/i);
  if (combined?.[1] && combined[2] && combined[3]) {
    const nums = [Number.parseInt(combined[1], 10), Number.parseInt(combined[2], 10)];
    const letters = combined[3]
      .split(/[,，]/)
      .map((part) => normalizeExamAnswerValue(part.trim()))
      .filter(Boolean);
    nums.forEach((num, i) => {
      if (!Number.isNaN(num) && letters[i]) out[num] = letters[i];
    });
    return;
  }

  const m =
    trimmed.match(/^(\d{1,2})\s*[.):\-–]\s*(.+)$/i) ??
    trimmed.match(/^(\d{1,2})\s+(\S(?:.*)?)$/);
  if (!m?.[1] || !m[2]) return;

  const num = Number.parseInt(m[1], 10);
  const ans = normalizeExamAnswerValue(m[2]);
  if (!Number.isNaN(num) && ans) out[num] = ans;
}

/** Parse khối ANSWERS → map số câu → đáp án. */
export function parsePassageAnswerKey(text: string): Record<number, string> {
  const out: Record<number, string> = {};
  const lines = text.replace(/\r\n/g, "\n").split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || /^READING PASSAGE/i.test(trimmed)) continue;

    if (trimmed.includes("\t")) {
      for (const cell of trimmed.split(/\t+/)) {
        parseAnswerCell(cell, out);
      }
      continue;
    }

    /** Choose TWO: `23&24   A, C` hoặc `25&26 A, E` */
    const combined = trimmed.match(/^(\d{1,2})\s*(?:&|and)\s*(\d{1,2})\s+(.+)$/i);
    if (combined?.[1] && combined[2] && combined[3]) {
      parseAnswerCell(trimmed, out);
      continue;
    }

    parseAnswerCell(trimmed, out);
  }

  return out;
}

const ANSWERS_BLOCK_RE = /\n(?:ANSWERS|Answers?|Answer\s+key)\s*:?\s*\n([\s\S]*)$/i;

/** Khối đáp án chung cuối file Cambridge (sau cả 3 passage). */
export function extractGlobalAnswerKeyFromRaw(raw: string): Record<number, string> {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(ANSWERS_BLOCK_RE);
  if (!match?.[1]) return {};
  return parsePassageAnswerKey(match[1]);
}

/** Lấy đáp án cho các câu thuộc một passage. */
export function pickAnswerKeyForQuestionNums(
  global: Record<number, string>,
  questionNums: number[],
): Record<number, string> {
  const out: Record<number, string> = {};
  for (const n of questionNums) {
    const ans = global[n];
    if (ans != null && ans !== "") out[n] = ans;
  }
  return out;
}

/** Tách phần ANSWERS (nếu có) từ đoạn raw một passage. */
export function extractAnswerKeyFromSegment(segment: string): Record<number, string> {
  const normalized = segment.replace(/\r\n/g, "\n");
  const match = normalized.match(ANSWERS_BLOCK_RE);
  if (!match?.[1]) return {};
  return parsePassageAnswerKey(match[1]);
}
