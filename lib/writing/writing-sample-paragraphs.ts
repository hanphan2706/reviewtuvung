/** Tách model answer thành đoạn để render từng `<p>` — F12 copy từng node chỉ lấy 1 đoạn. */
export function splitWritingEssayParagraphs(answer: string): string[] {
  const normalized = answer.replace(/\r\n/g, "\n").trim();
  if (!normalized) return [];

  const byDouble = normalized
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (byDouble.length >= 2) return byDouble;

  const bySingle = normalized
    .split(/\n/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (bySingle.length >= 2) return bySingle;

  return [normalized.replace(/\s+/g, " ").trim()];
}
