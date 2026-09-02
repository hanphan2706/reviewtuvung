/**
 * Convert scraped real-test transcripts (`SECTION N`, `(Q1)`, Audio Player junk)
 * into Cambridge-style plain text used by sync / review (`PART N`, `SPEAKER: … Q1`).
 */

const NOISE_RE =
  /^(advertisements?|audio player|use up\/down arrow keys to increase or decrease volume\.?|\d{1,2}:\d{2}(?::\d{2})?)$/i;
const SECTION_RE = /^SECTION\s+(\d+)\s*$/i;
const PART_RE = /^PART\s+(\d+)\s*$/i;
const SPEAKER_RE = /^([A-Z][A-Z0-9 .'/&-]{0,40}?)\s*[.:]\s*(.*)$/;

function normalizeLine(line: string): string {
  return line.replace(/\u00a0/g, " ").replace(/[ \t]+/g, " ").trim();
}

function defaultSpeakerForPart(part: number): string {
  if (part === 4) return "LECTURER";
  if (part === 2) return "GUIDE";
  return "SPEAKER";
}

function normalizeSpeakerLabel(raw: string): string {
  return raw
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, "")
    .replace(/\s+/g, " ");
}

function normalizeQuestionMarkers(text: string): string {
  return text
    .replace(/\(Example\)/gi, "")
    .replace(/\(\s*Q(\d+)\s*\)/gi, " Q$1")
    .replace(/\bQ(\d+)\b/gi, "Q$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeRealTestScrapedTranscript(raw: string): string {
  const lines = raw.split(/\r?\n/);
  const out: string[] = [];
  let part = 0;
  let lastSpeaker: string | null = null;

  for (const rawLine of lines) {
    const line = normalizeLine(rawLine);
    if (!line || NOISE_RE.test(line)) continue;

    const sectionMatch = line.match(SECTION_RE) || line.match(PART_RE);
    if (sectionMatch) {
      const nextPart = Number.parseInt(sectionMatch[1] ?? "0", 10);
      if (nextPart >= 1 && nextPart <= 4 && nextPart !== part) {
        if (part > 0) out.push("—————————————-");
        part = nextPart;
        lastSpeaker = null;
        out.push(`PART ${part}`);
      }
      continue;
    }

    if (part < 1) {
      part = 1;
      out.push("PART 1");
    }

    const speakerMatch = line.match(SPEAKER_RE);
    if (speakerMatch) {
      const label = normalizeSpeakerLabel(speakerMatch[1] ?? "");
      const body = normalizeQuestionMarkers(speakerMatch[2] ?? "");
      if (!label || !body) continue;
      // Skip false positives like "SECTION 2: …" already handled; keep MR SMITH etc.
      if (/^(SECTION|PART|QUESTIONS?)$/i.test(label)) continue;
      lastSpeaker = label;
      out.push(`${label}: ${body}`);
      continue;
    }

    const body = normalizeQuestionMarkers(line);
    if (!body) continue;
    const speaker = lastSpeaker ?? defaultSpeakerForPart(part);
    lastSpeaker = speaker;
    out.push(`${speaker}: ${body}`);
  }

  return `${out.join("\n").trim()}\n`;
}
