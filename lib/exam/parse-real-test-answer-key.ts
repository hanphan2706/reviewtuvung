import { normalizeExamAnswerValue } from "@/lib/reading/parse-passage-answers";

/** Cặp choose-TWO trong Mid-Term Listening (drag-and-drop). */
const LISTENING_CHOOSE_TWO_PAIRS: readonly [number, number][] = [
  [17, 18],
  [19, 20],
];

export type RealTestAnswerKey = Record<string, string>;

function normalizeRealTestLine(line: string): string {
  return line.replace(/\r/g, "").trim();
}

function extractChooseTwoLetters(values: readonly string[]): string[] {
  const letters = new Set<string>();
  for (const value of values) {
    for (const part of value.split("/")) {
      const letter = part.trim().toUpperCase();
      if (/^[A-H]$/.test(letter)) letters.add(letter);
    }
  }
  return [...letters].sort();
}

function expandListeningChooseTwoKeys(out: RealTestAnswerKey): void {
  for (const [a, b] of LISTENING_CHOOSE_TWO_PAIRS) {
    const ka = out[`q${a}`];
    const kb = out[`q${b}`];
    if (!ka?.includes("/") || !kb?.includes("/")) continue;

    const letters = extractChooseTwoLetters([ka, kb]);
    if (letters.length !== 2) continue;

    delete out[`q${a}`];
    delete out[`q${b}`];
    out[`${a}&${b}`] = letters.join(", ");
  }
}

/**
 * Parse file Real Test: 40 dòng `q1`…`q40`, rồi 40 đáp án theo thứ tự.
 * Trả về map `qN` (và `17&18` cho choose-TWO listening).
 */
export function parseRealTestAnswerKeyFile(text: string): RealTestAnswerKey {
  const lines = text.split("\n").map(normalizeRealTestLine).filter(Boolean);
  if (lines.length < 80) {
    throw new Error(`real test answer file needs 80 lines (40 labels + 40 answers), got ${lines.length}`);
  }

  const out: RealTestAnswerKey = {};
  for (let i = 0; i < 40; i += 1) {
    const label = lines[i];
    const answer = lines[i + 40];
    if (!label || !answer) {
      throw new Error(`missing label or answer at question ${i + 1}`);
    }

    const match = label.match(/^q(\d+)$/i);
    if (!match?.[1]) {
      throw new Error(`invalid question label "${label}" at line ${i + 1}`);
    }

    const num = Number.parseInt(match[1], 10);
    if (num !== i + 1) {
      throw new Error(`expected q${i + 1}, got ${label}`);
    }

    out[`q${num}`] = normalizeExamAnswerValue(answer);
  }

  expandListeningChooseTwoKeys(out);
  return out;
}

export function realTestAnswerKeyForBoot(key: RealTestAnswerKey | null): RealTestAnswerKey | null {
  if (!key || Object.keys(key).length === 0) return null;
  return key;
}
