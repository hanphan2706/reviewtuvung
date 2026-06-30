import { splitTranscriptSpeakerLine } from "@/lib/listening/parse-transcript-speaker";

const RULE_LINE = /^[—\-_\s]{4,}$/;
const PART_LINE = /^PART\s+\d+\s*$/i;
const INSTRUCTION_LINE = /^(Before you hear|Now listen)/i;

export type ParsedTranscriptLine = {
  speaker: string | null;
  text: string;
};

/** Tách plain text Part (đã sanitize) thành các dòng thoại — bỏ PART header và gạch ngăn. */
export function parseListeningTranscriptLines(plain: string): ParsedTranscriptLine[] {
  const out: ParsedTranscriptLine[] = [];
  let lastSpeaker: string | null = null;

  for (const raw of plain.split(/\r?\n/)) {
    const t = raw.trim();
    if (t.length === 0 || PART_LINE.test(t) || RULE_LINE.test(t)) continue;

    const split = splitTranscriptSpeakerLine(raw.trimEnd());
    if (split.speaker) {
      lastSpeaker = split.speaker;
      out.push({ speaker: split.speaker, text: split.body });
      continue;
    }

    if (INSTRUCTION_LINE.test(t)) {
      lastSpeaker = null;
      out.push({ speaker: null, text: t });
      continue;
    }

    out.push({ speaker: lastSpeaker, text: t });
  }
  return out;
}

export function countTranscriptWords(lines: readonly ParsedTranscriptLine[]): number[] {
  return lines.map((line) => {
    const tokens = line.text.match(/[A-Za-z0-9']+/g);
    return Math.max(1, tokens?.length ?? 1);
  });
}
