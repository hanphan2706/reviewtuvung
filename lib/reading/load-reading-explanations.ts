import fs from "node:fs";
import path from "node:path";

export type ReadingExplanationStep = {
  id: string;
  titleVi: string;
  bodyVi?: string;
  pairs?: Array<{
    q: string;
    p: string;
    paraphrases?: Array<{ q: string; p: string }>;
  }>;
  paraphrases?: Array<{ q: string; p: string }>;
  distractors?: Array<{ letter: string; whyVi: string }> | string;
};

export type ReadingExplanationQuestion = {
  passage: number;
  type: string;
  answer: string;
  /** Choose-two cluster: paired question numbers sharing one answer set. */
  answerPair?: [number, number];
  answerAlternatives?: string[];
  evidence?: {
    /** Single contiguous span (still supported). */
    quoteEn?: string;
    /**
     * Multiple non-contiguous spans to highlight together.
     * Preferred for matching headings, where the topic is spread across a paragraph.
     */
    quotesEn?: string[];
    paragraphLetter?: string;
  };
  steps: ReadingExplanationStep[];
};

export type ReadingExamExplanationsFile = {
  pilotId: string;
  schemaVersion?: number;
  questions: Record<string, ReadingExplanationQuestion>;
};

/** Load optional per-pilot explanation map (`reading explanations/{pilotId}.json`). */
export function loadReadingExamExplanations(
  pilotId: string,
): ReadingExamExplanationsFile | null {
  const filePath = path.join(process.cwd(), "reading explanations", `${pilotId}.json`);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw) as ReadingExamExplanationsFile;
    if (!data?.questions || typeof data.questions !== "object") return null;
    return data;
  } catch {
    return null;
  }
}

/** Slim payload for exam boot (only what the runner needs). */
export function slimReadingExplanationsForBoot(
  file: ReadingExamExplanationsFile | null,
): Record<string, ReadingExplanationQuestion> | null {
  if (!file?.questions) return null;
  const out: Record<string, ReadingExplanationQuestion> = {};
  for (const [num, item] of Object.entries(file.questions)) {
    if (!item?.steps?.length) continue;
    out[num] = {
      passage: item.passage,
      type: item.type,
      answer: item.answer,
      evidence: item.evidence,
      steps: item.steps,
    };
  }
  return Object.keys(out).length ? out : null;
}
