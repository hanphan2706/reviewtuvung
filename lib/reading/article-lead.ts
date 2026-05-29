/** Lead / subheadline từ đoạn đầu body (khi cần khớp file raw động). */
export function subheadlineFromBody(body: string, maxLength = 200): string {
  const para = body
    .split(/\n\s*\n/)[0]
    ?.replace(/\s+/g, " ")
    .trim();
  if (!para) return "";
  if (para.length <= maxLength) return para;
  const cut = para.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 80) return `${cut.slice(0, lastSpace)}…`;
  return `${cut}…`;
}
