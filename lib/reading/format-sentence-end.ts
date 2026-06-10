const SENTENCE_END = /[.!?…]["')\]]*$/;

/** Viết hoa chữ cái đầu (hook / phụ đề thẻ bài). */
export function ensureSentenceStart(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return text;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/** Thêm dấu chấm cuối nếu câu mô tả/hook chưa kết thúc bằng . ! ? … */
export function ensureSentenceEnd(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (SENTENCE_END.test(trimmed)) return trimmed;
  return `${trimmed}.`;
}
