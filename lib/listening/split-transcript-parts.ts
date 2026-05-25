const PART_HEADER = /^PART\s+(\d+)\s*$/i;

/** Tách transcript full-test thành map part → nội dung (bỏ dòng tiêu đề PART n). */
export function splitTranscriptByPart(full: string): Record<number, string> {
  const out: Record<number, string> = {};
  const lines = full.split(/\r?\n/);
  let current = 0;
  const buf: string[] = [];

  const flush = () => {
    if (current > 0) {
      const body = buf.join("\n").trim();
      if (body.length > 0) out[current] = body;
    }
    buf.length = 0;
  };

  for (const line of lines) {
    const m = line.trim().match(PART_HEADER);
    if (m) {
      flush();
      current = Number.parseInt(m[1] ?? "0", 10);
      continue;
    }
    if (current > 0) buf.push(line);
  }
  flush();
  return out;
}
