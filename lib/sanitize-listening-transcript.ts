const NOISE_LOWER_EXACT = new Set([
  "audio player",
  "00:00",
  "use up/down arrow keys to increase or decrease volume.",
  "advertisements",
]);

/** Dòng chỉ là mốc thời gian kiểu trình phát (0:00, 12:34, 1:02:03). */
function isTimestampOnlyLine(trimmed: string): boolean {
  return /^\d{1,2}:\d{2}$/.test(trimmed) || /^\d{1,2}:\d{2}:\d{2}$/.test(trimmed);
}

/** Bỏ dòng rác thường gặp khi copy transcript từ trình phát web (Audio Player, v.v.). */
export function isListeningTranscriptNoiseLine(line: string): boolean {
  const t = line.replace(/\u00a0/g, " ").trim();
  if (t.length === 0) return true;
  const lower = t.toLowerCase();
  if (NOISE_LOWER_EXACT.has(lower)) return true;
  if (isTimestampOnlyLine(t)) return true;
  return false;
}

/**
 * Lọc transcript listening: bỏ dòng rác + gom dòng trống thừa.
 * Giữ nguyên nội dung thoại (PART n, SALLY:, dấu gạch ngăn đoạn, Q1…).
 */
export function sanitizeListeningTranscript(raw: string): string {
  const lines = raw.split(/\r?\n/);
  const kept: string[] = [];
  for (const line of lines) {
    if (!isListeningTranscriptNoiseLine(line)) kept.push(line);
  }
  let out = kept.join("\n");
  out = out.replace(/\n{3,}/g, "\n\n");
  return out.trim();
}
