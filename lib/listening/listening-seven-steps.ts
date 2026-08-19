export type ListeningSevenStepId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ListeningSevenStepDefinition = {
  id: ListeningSevenStepId;
};

/** 1–4 warmup/câu hỏi, 5 đục lỗ, 6 keyword, 7 shadowing, 8 phản ánh. */
export const LISTENING_SEVEN_STEPS: readonly ListeningSevenStepDefinition[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export const LISTENING_FLOW_QUESTION_STEP = 4 as const;
export const LISTENING_FLOW_CLOZE_STEP = 5 as const;
export const LISTENING_FLOW_KEYWORD_STEP = 6 as const;
export const LISTENING_FLOW_SHADOWING_STEP = 7 as const;
export const LISTENING_FLOW_REFLECT_STEP = 8 as const;

/** Basic IELTS: bỏ warmup — câu hỏi → shadowing → phản ánh. */
export const BASIC_IELTS_FLOW_STEPS: readonly ListeningSevenStepId[] = [4, 7, 8];

export const LISTENING_FLOW_STEPPER_WINDOW = 6;

export function buildIeltsComprehensionFlowSteps(options: {
  hasCloze: boolean;
  hasKeyword: boolean;
}): ListeningSevenStepId[] {
  const steps: ListeningSevenStepId[] = [1, 2, 3, 4];
  if (options.hasCloze) steps.push(5);
  if (options.hasKeyword) steps.push(6);
  steps.push(7, 8);
  return steps;
}

export function adjacentFlowStep(
  steps: readonly ListeningSevenStepId[],
  current: ListeningSevenStepId,
  delta: -1 | 1,
): ListeningSevenStepId | null {
  const index = steps.indexOf(current);
  if (index < 0) return null;
  return steps[index + delta] ?? null;
}

export function listeningFlowStepperWindow(
  stepCount: number,
  currentIndex: number,
  compact: boolean,
): { start: number; end: number; fadeLeft: boolean; fadeRight: boolean } {
  if (!compact || stepCount <= LISTENING_FLOW_STEPPER_WINDOW) {
    return { start: 0, end: stepCount, fadeLeft: false, fadeRight: false };
  }
  if (currentIndex < 5) {
    return { start: 0, end: LISTENING_FLOW_STEPPER_WINDOW, fadeLeft: false, fadeRight: true };
  }
  return { start: 2, end: stepCount, fadeLeft: true, fadeRight: false };
}
