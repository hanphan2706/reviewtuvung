import { parseRealTestAnswerKeyFile, type RealTestAnswerKey } from "@/lib/exam/parse-real-test-answer-key";
import { listeningTranscriptPlainToSafeHtml } from "@/lib/listening/transcript-to-display-html";

export type DialogueLine = {
  speaker: string;
  text: string;
  part: number;
};

const PART_RANGES: Record<number, { start: number; end: number }> = {
  1: { start: 1, end: 10 },
  2: { start: 11, end: 20 },
  3: { start: 21, end: 30 },
  4: { start: 31, end: 40 },
};

const INTRO_LINE =
  /^(you will hear|there will be time|all the recordings|the test is in four|write all your answers|at the end of the test|now turn to part|part (one|two|three|four)|first,? you have some time|now listen (carefully )?and answer|before you hear the rest|that is the end of (part|the listening)|you now have .*check your answers|in one minute|in 30 seconds)/i;

/** Từ khóa trong transcript cho đáp án trắc nghiệm / chọn đáp án. */
const MCQ_ANSWER_HINTS: Record<number, string[]> = {
  11: ["never made a mistake", "made anything"],
  12: ["too much confidence"],
  13: ["keep your goals in mind", "never give up"],
  14: ["marketing", "take care of the marketing"],
  15: ["look up to", "right decisions"],
  16: ["tread carefully", "short-term risks"],
  17: ["need for your product", "cater for people"],
  18: ["dedicate the next 10 years", "10 years of my life"],
  19: ["original or not", "completely new ideas"],
  20: ["colour should the packet", "how much should it cost"],
  21: ["connections", "theatres"],
  22: ["movement analysis"],
  23: ["sewing clothes", "national ballet"],
  24: ["collaborating with others", "working independently"],
  25: ["royal opera house", "stage design"],
  26: ["literature", "all the literature"],
  27: ["performance", "appearing on stage"],
  28: ["education", "post-grad certificate"],
  29: ["theatre management", "wasn't earning enough"],
  30: ["marketing", "not so much competition"],
};

/** Gợi ý vị trí chèn Q31–Q40 trong monologue Part 4 (đề thi thật 1). */
const PART4_ANSWER_HINTS: Record<number, string[]> = {
  31: ["catch sharks", "nets used to catch sharks"],
  32: ["the cost", "important of these is the cost"],
  33: ["catch quite easily"],
  34: ["in the ocean", "signal in the ocean"],
  35: ["helicopter", "polar bear"],
  36: ["against rocks", "rubbing up against rocks"],
  37: ["applied paint", "less invasive"],
  38: ["diagram", "whisker patterns"],
  39: ["zoos around australia", "zoos around Australia"],
  40: ["inviting the public", "the public to take part"],
};

const LISTENING_OUTRO_RE =
  /\s*You now have ten minutes[\s\S]*?(?:question booklet to be collected\.?)?\s*$/i;

function normalizeToken(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isIntroLine(line: string): boolean {
  const t = line.trim();
  if (!t) return true;
  if (INTRO_LINE.test(t)) return true;
  if (/^part (one|two|three|four)\b/i.test(t)) return true;
  return false;
}

function detectPartNumber(line: string, current: number): number {
  const t = line.trim().toLowerCase();
  if (t === "part one." || t === "part one" || t.startsWith("part one ")) return 1;
  if (t === "part two." || t === "part two" || t.startsWith("part two ")) return 2;
  if (t === "part three." || t === "part three" || t.startsWith("part three ")) return 3;
  if (t === "part four." || t === "part four" || t.startsWith("part four ")) return 4;
  if (/end of part one/i.test(t)) return 1;
  if (/end of part two/i.test(t)) return 2;
  if (/end of part three/i.test(t)) return 3;
  if (/end of part four/i.test(t)) return 4;
  return current;
}

function guessSpeaker(part: number, line: string, prev: string | null): string {
  const lower = line.toLowerCase();

  if (part === 1) {
    if (/sports center|committee|advertisement|how can i help|let me get a form|water safety certificate|local paper|radio/i.test(lower)) {
      return "STAFF";
    }
    if (/peter|i'd like to apply|waiter|baseball|restaurant|diving|saturday mornings/i.test(lower)) return "PETER";
    return prev === "STAFF" ? "PETER" : prev === "PETER" ? "STAFF" : "STAFF";
  }

  if (part === 2) {
    if (/thanks,? sue|arthur,? welcome|so,? arthur/i.test(lower)) return "SUE";
    if (/thanks,? sue|well,? i started my business|my strengths were/i.test(lower)) return "ARTHUR";
    if (lower.includes("arthur")) return /^(thanks|so arthur)/i.test(line.trim()) ? "SUE" : "ARTHUR";
    if (prev === "SUE") return "ARTHUR";
    if (prev === "ARTHUR") return "SUE";
    return "ARTHUR";
  }

  if (part === 3) {
    if (/^so gina|^sure,? charlie|^okay\.? that could/i.test(lower)) return "CHARLIE";
    if (/^sure,? charlie|^no,? it's been|^absolutely|^great\.|^right\./i.test(lower)) return "GINA";
    if (lower.includes("charlie")) return "GINA";
    if (lower.includes("gina")) return "CHARLIE";
    return prev === "CHARLIE" ? "GINA" : prev === "GINA" ? "CHARLIE" : "CHARLIE";
  }

  if (part === 4) {
    return "LECTURER";
  }

  return "NARRATOR";
}

function mergeDialogueTurns(rawLines: string[]): DialogueLine[] {
  const turns: DialogueLine[] = [];
  let part = 1;
  let prevSpeaker: string | null = null;

  for (const raw of rawLines) {
    const line = raw.trim();
    if (!line || isIntroLine(line)) {
      part = detectPartNumber(line, part);
      continue;
    }

    part = detectPartNumber(line, part);
    const speaker = guessSpeaker(part, line, prevSpeaker);

    const last = turns[turns.length - 1];
    if (last && last.speaker === speaker && last.part === part) {
      last.text = `${last.text} ${line}`.replace(/\s+/g, " ").trim();
    } else {
      turns.push({ speaker, text: line, part });
    }
    prevSpeaker = speaker;
  }

  return turns;
}

function answerSearchTerms(answer: string): string[] {
  const trimmed = answer.trim();
  if (!trimmed) return [];

  const alts = trimmed.split("/").map((s) => s.trim()).filter(Boolean);
  const terms: string[] = [];

  for (const alt of alts) {
    if (/^[A-F]$/i.test(alt)) continue;
    terms.push(alt);
    const digits = alt.replace(/\D/g, "");
    if (digits.length >= 4) terms.push(digits);
    if (/^\d+$/.test(alt) && alt.length >= 4) {
      terms.push(alt.replace(/(\d{3})(\d+)/, "$1-$2"));
    }
  }

  return terms;
}

function stripListeningOutro(text: string): string {
  return text.replace(LISTENING_OUTRO_RE, "").trim();
}

function findMarkerInsertPos(text: string, terms: string[], minIndex: number): number {
  const lower = text.toLowerCase();
  let best = -1;
  for (const term of terms) {
    const t = term.trim();
    if (t.length < 3) continue;
    const idx = lower.indexOf(t.toLowerCase(), minIndex);
    if (idx < 0) continue;
    const end = idx + t.length;
    if (best < 0 || end < best) best = end;
  }
  return best;
}

function injectPart4Markers(text: string, answers: RealTestAnswerKey): string {
  let result = stripListeningOutro(text);
  let searchFrom = 0;

  for (let q = 31; q <= 40; q += 1) {
    const key = `q${q}`;
    const answer = answers[key] ?? answers[String(q)] ?? "";
    const hints = PART4_ANSWER_HINTS[q] ?? [];
    const pos = findMarkerInsertPos(result, [...hints, ...answerSearchTerms(answer)], searchFrom);
    if (pos < 0) continue;
    const marker = ` Q${q}`;
    const before = result.slice(0, pos);
    if (before.includes(marker) || before.endsWith(`Q${q}`)) {
      searchFrom = pos;
      continue;
    }
    result = `${before}${marker}${result.slice(pos)}`;
    searchFrom = pos + marker.length;
  }

  return result;
}

function findMarkerLineIndex(turns: DialogueLine[], qNum: number, answer: string, used: Set<number>): number {
  const hints = MCQ_ANSWER_HINTS[qNum] ?? [];
  const terms = [...hints, ...answerSearchTerms(answer)];

  for (const term of terms) {
    const needle = normalizeToken(term);
    if (needle.length < 3) continue;
    for (let i = 0; i < turns.length; i += 1) {
      if (used.has(i)) continue;
      const part = turns[i]!.part;
      const range = PART_RANGES[part];
      if (!range || qNum < range.start || qNum > range.end) continue;
      if (normalizeToken(turns[i]!.text).includes(needle)) return i;
    }
  }

  const part = Object.entries(PART_RANGES).find(([, r]) => qNum >= r.start && qNum <= r.end)?.[0];
  if (!part) return -1;
  const partNum = Number(part);
  const inPart = turns
    .map((t, idx) => ({ t, idx }))
    .filter(({ t, idx }) => t.part === partNum && !used.has(idx));
  const slot = qNum - PART_RANGES[partNum]!.start;
  const pick = inPart[Math.min(slot, Math.max(0, inPart.length - 1))];
  return pick?.idx ?? -1;
}

function injectQuestionMarkers(turns: DialogueLine[], answers: RealTestAnswerKey): DialogueLine[] {
  const out = turns.map((t) => ({ ...t, text: t.text }));
  const used = new Set<number>();

  for (let q = 1; q <= 30; q += 1) {
    const key = `q${q}`;
    const answer = answers[key] ?? answers[String(q)] ?? "";
    const idx = findMarkerLineIndex(out, q, answer, used);
    if (idx < 0) continue;
    used.add(idx);
    const marker = ` Q${q}`;
    if (!out[idx]!.text.includes(marker)) {
      out[idx]!.text = `${out[idx]!.text.replace(/\s+$/, "")}${marker}`;
    }
  }

  for (let i = 0; i < out.length; i += 1) {
    if (out[i]!.part !== 4) continue;
    out[i]!.text = injectPart4Markers(out[i]!.text, answers);
    break;
  }

  return out;
}

function formatCambridgeTranscript(turns: DialogueLine[]): string {
  const chunks: string[] = [];
  let currentPart = 0;

  for (const turn of turns) {
    if (turn.part !== currentPart) {
      if (currentPart > 0) chunks.push("—————————————-");
      currentPart = turn.part;
      chunks.push(`PART ${currentPart}`);
    }
    chunks.push(`${turn.speaker}: ${turn.text}`);
  }

  return chunks.join("\n");
}

export function buildRealTestListeningTranscriptFromWhisper(rawWhisper: string, answerKeyText: string): string {
  const answers = parseRealTestAnswerKeyFile(answerKeyText);
  const lines = rawWhisper.split(/\r?\n/);
  const turns = mergeDialogueTurns(lines);
  const marked = injectQuestionMarkers(turns, answers);
  return formatCambridgeTranscript(marked);
}

export function realTestListeningTranscriptToHtml(plain: string): string {
  return listeningTranscriptPlainToSafeHtml(plain);
}
