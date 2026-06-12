const SPEAKER_LINE = /^([A-Z][A-Z'\s]{1,22}):\s*(.*)$/;
const RULE_LINE = /^[—\-_\s]{4,}$/;
const PART_LINE = /^PART\s+\d+\s*$/i;

export type ParsedTranscriptLine = {
  speaker: string | null;
  text: string;
};

/** Tách plain text Part (đã sanitize) thành các dòng thoại — bỏ PART header và gạch ngăn. */
export function parseListeningTranscriptLines(plain: string): ParsedTranscriptLine[] {
  const out: ParsedTranscriptLine[] = [];
  for (const raw of plain.split(/\r?\n/)) {
    const t = raw.trim();
    if (t.length === 0 || PART_LINE.test(t) || RULE_LINE.test(t)) continue;
    const sm = raw.trimEnd().match(SPEAKER_LINE);
    if (sm?.[1]) {
      out.push({ speaker: sm[1].trim(), text: (sm[2] ?? "").trim() });
      continue;
    }
    out.push({ speaker: null, text: t });
  }
  return out;
}

export function countTranscriptWords(lines: readonly ParsedTranscriptLine[]): number[] {
  return lines.map((line) => {
    const tokens = line.text.match(/[A-Za-z0-9']+/g);
    return Math.max(1, tokens?.length ?? 1);
  });
}
