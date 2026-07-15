import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 57 exercises — Verb + -ing or to … 2 (English Grammar in Use · Intermediate).
 */
export const U57_VERB_ING_OR_TO_2_EXERCISES: readonly GrammarExercise[] = [
  // 57.1 — try
  grammarCloze(
    "u57-1-2",
    "57.1 · try + to …",
    "I tried __________ the shelf, but I wasn't tall enough. (reach)",
    "to reach",
    {
      explanation: "try + to … = cố gắng: tried to reach the shelf.",
    },
  ),
  grammarCloze(
    "u57-1-3",
    "57.1 · try + -ing",
    "I rang the doorbell, but there was no answer. Then I tried __________ on the window. (knock)",
    "knocking",
    {
      explanation: "try + -ing = thử xem: tried knocking on the window.",
    },
  ),
  grammarCloze(
    "u57-1-4",
    "57.1 · try + to …",
    "We tried __________ the fire out, but without success. (put)",
    "to put",
    {
      explanation: "try + to … = cố gắng: tried to put the fire out.",
    },
  ),
  grammarCloze(
    "u57-1-5",
    "57.1 · try + to …",
    "Please leave me alone. I'm trying __________. (concentrate)",
    "to concentrate",
    {
      explanation: "try + to …: trying to concentrate.",
    },
  ),
  grammarCloze(
    "u57-1-6",
    "57.1 · try + -ing",
    "Sue needed to borrow some money. She tried __________ Carl, but he didn't have any. (ask)",
    "asking",
    {
      explanation: "try + -ing = thử hỏi xem: tried asking Carl.",
    },
  ),
  grammarCloze(
    "u57-1-7",
    "57.1 · try + -ing",
    "Mr Bennett isn't here right now. Please try __________ later. (call)",
    "calling",
    {
      explanation: "try + -ing = thử gọi lại: try calling later.",
    },
  ),
  grammarCloze(
    "u57-1-8",
    "57.1 · try + to …",
    "The woman's face was familiar. I tried __________ where I'd seen her before. (remember)",
    "to remember",
    {
      explanation: "try + to … = cố nhớ: tried to remember.",
    },
  ),
  grammarCloze(
    "u57-1-9",
    "57.1 · try + -ing",
    "If you have a problem with the computer, try __________ it. (restart)",
    "restarting",
    {
      explanation: "try + -ing = thử xem: try restarting it.",
    },
  ),

  // 57.2 — need + -ing
  grammarCloze(
    "u57-2-2",
    "57.2 · need + -ing",
    "The grass is very long. It __________.",
    "needs cutting",
    {
      explanation: "need + -ing (= need to be cut): needs cutting.",
    },
  ),
  grammarCloze(
    "u57-2-3",
    "57.2 · need + -ing",
    "The windows are dirty. They __________.",
    "need cleaning",
    {
      explanation: "need + -ing: need cleaning.",
    },
  ),
  grammarCloze(
    "u57-2-4",
    "57.2 · need + -ing",
    "The screws are loose. They __________.",
    "need tightening",
    {
      explanation: "need + -ing: need tightening.",
    },
  ),
  grammarCloze(
    "u57-2-5",
    "57.2 · need + -ing",
    "The bin is full. It __________.",
    "needs emptying",
    {
      explanation: "need + -ing: needs emptying.",
    },
  ),

  // 57.3
  grammarCloze(
    "u57-3-2",
    "57.3 · need + -ing",
    "These clothes are dirty. They all need __________.",
    "washing",
    {
      explanation: "clothes need washing (= to be washed).",
    },
  ),
  grammarCloze(
    "u57-3-4",
    "57.3 · need + to …",
    "I can't make a decision right now. I need __________ about it.",
    "to think",
    {
      explanation: "I need + to …: need to think about it (không: need thinking về chủ ngữ người).",
    },
  ),
  grammarCloze(
    "u57-3-6",
    "57.3 · need + to …",
    "I need a change. I need __________ away for a while.",
    "to go",
    {
      explanation: "I need + to …: need to go away.",
    },
  ),
  grammarCloze(
    "u57-3-8",
    "57.3 · need + -ing",
    "That shirt looks fine. It doesn't need __________.",
    "ironing",
    {
      explanation: "It doesn't need ironing (= to be ironed).",
    },
  ),

  // 57.4 — help / can't help
  grammarCloze(
    "u57-4-2",
    "57.4 · help + (to) …",
    "I've lost my phone. Can you help me __________ for it? (look)",
    "look",
    {
      alternatives: ["to look"],
      explanation: "help + (to) V: help me look / to look for it.",
    },
  ),
  grammarCloze(
    "u57-4-3",
    "57.4 · can't help + -ing",
    "They were talking very loudly. We couldn't help __________ what they said. (overhear)",
    "overhearing",
    {
      explanation: "can't help + -ing: couldn't help overhearing.",
    },
  ),
  grammarCloze(
    "u57-4-4",
    "57.4 · can't help + -ing",
    "He looks so funny. Whenever I see him, I can't help __________. (smile)",
    "smiling",
    {
      explanation: "can't help + -ing: can't help smiling.",
    },
  ),
  grammarCloze(
    "u57-4-7",
    "57.4 · can't help + -ing",
    "I think about what happened all the time. I can't help __________ about it. (think)",
    "thinking",
    {
      explanation: "can't help + -ing: can't help thinking about it.",
    },
  ),
];
