const SENTENCE_END = /[.!?…]["')\]]*$/;

/** Thêm dấu chấm cuối nếu câu mô tả/hook chưa kết thúc bằng . ! ? … */
export function ensureSentenceEnd(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (SENTENCE_END.test(trimmed)) return trimmed;
  return `${trimmed}.`;
}
