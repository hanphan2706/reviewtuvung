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
 * Tách đoạn monologue quá dài thành từng câu để sync transcript ↔ audio chính xác hơn.
 */
function splitLongMonologueLine(line: string): string[] {
  const t = line.replace(/\u00a0/g, " ").trim();
  if (t.length < 200) return [line];
  if (/^(?:PART|SECTION)\s+\d/i.test(t)) return [line];
  if (/^(MAN|WOMAN|LECTURER)\s+/i.test(t)) return [line];
  if (/^[A-Z][A-Z\s']+:\s/.test(t)) return [line];
  if (/^Before you hear/i.test(t)) return [line];
  if (/^Now listen/i.test(t)) return [line];

  const sentences = t.split(/(?<=[.!?])\s+(?=[A-Z"'(])/);
  if (sentences.length <= 1) return [line];
  return sentences.map((s) => s.trim()).filter(Boolean);
}

export function sanitizeListeningTranscript(raw: string): string {
  const lines = raw.split(/\r?\n/);
  const kept: string[] = [];
  for (const line of lines) {
    if (isListeningTranscriptNoiseLine(line)) continue;
    kept.push(...splitLongMonologueLine(line));
  }
  let out = kept.join("\n");
  out = out.replace(/\n{3,}/g, "\n\n");
  out = out.replace(/^(?:SECTION)\s+(\d+)\s*$/gim, "PART $1");
  out = out.replace(/^(PART\s+(\d+))(?:\n+PART\s+\2)+/gim, "$1");
  return out.trim();
}
