import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 100 exercises — Adjectives and Adverbs 1 (EGIU Intermediate).
 */

/** 100.3 — Adjective/adverb stems from the box. */
const U100_3_BOX_BANK = [
  "careful",
  "carefully",
  "complete",
  "completely",
  "dangerous",
  "dangerously",
  "financial",
  "financially",
  "fluent",
  "fluently",
  "frequent",
  "frequently",
  "nervous",
  "nervously",
  "perfect",
  "perfectly",
  "permanent",
  "permanently",
  "special",
  "specially",
] as const;

/** 100.4 — Two boxes: intensifiers + adjectives/participles. */
const U100_4_TWO_WORD_BANK = [
  "absolutely",
  "badly",
  "completely",
  "happily",
  "reasonably",
  "seriously",
  "slightly",
  "unnecessarily",
  "unusually",
  "changed",
  "cheap",
  "damaged",
  "enormous",
  "ill",
  "long",
  "married",
  "planned",
  "quiet",
] as const;

export const U100_ADJECTIVES_AND_ADVERBS_1_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u100-1-2",
    "100.1 · adverb",
    "I found a flat quite ea__________.",
    "easily",
    {
      explanation: "easily (easy + -ly).",
    },
  ),
  grammarCloze(
    "u100-1-3",
    "100.1 · adverb",
    "We waited pat__________.",
    "patiently",
    {
      explanation: "patiently.",
    },
  ),
  grammarCloze(
    "u100-1-4",
    "100.1 · adverb",
    "He arrived unex__________.",
    "unexpectedly",
    {
      explanation: "unexpectedly.",
    },
  ),
  grammarCloze(
    "u100-1-5",
    "100.1 · adverb",
    "Mike keeps fit by playing tennis reg__________.",
    "regularly",
    {
      explanation: "regularly.",
    },
  ),
  grammarCloze(
    "u100-2-2",
    "100.2 · adj / adv",
    "I think you behaved very __________. (selfish / selfishly)",
    "selfishly",
    {
      explanation: "behaved + adv: selfishly.",
    },
  ),
  grammarCloze(
    "u100-2-3",
    "100.2 · adj / adv",
    "The weather changed __________. (sudden / suddenly)",
    "suddenly",
    {
      explanation: "changed + adv: suddenly.",
    },
  ),
  grammarCloze(
    "u100-2-4",
    "100.2 · adj / adv",
    "There was a __________ change in the weather. (sudden / suddenly)",
    "sudden",
    {
      explanation: "a sudden change (adj + noun).",
    },
  ),
  grammarCloze(
    "u100-2-5",
    "100.2 · adj / adv",
    "Liz fell and hurt herself really __________. (bad / badly)",
    "badly",
    {
      explanation: "hurt … badly.",
    },
  ),
  grammarCloze(
    "u100-2-6",
    "100.2 · adj / adv",
    "I think I have flu. I feel __________. (awful / awfully)",
    "awful",
    {
      explanation: "feel + adj: awful.",
    },
  ),
  grammarCloze(
    "u100-2-7",
    "100.2 · adj / adv",
    "Tanya is __________ upset about losing her job. (terrible / terribly)",
    "terribly",
    {
      explanation: "terribly upset (adv + adj).",
    },
  ),
  grammarCloze(
    "u100-2-8",
    "100.2 · adj / adv",
    "I could sit in this chair all day. It's very __________. (comfortable / comfortably)",
    "comfortable",
    {
      explanation: "be + adj: comfortable.",
    },
  ),
  grammarCloze(
    "u100-2-12",
    "100.2 · adj / adv",
    "I'm glad you had a good trip and got home __________. (safe / safely)",
    "safely",
    {
      explanation: "got home safely (adv).",
    },
  ),
  grammarCloze(
    "u100-3-2",
    "100.3 · adj / adv",
    "He's late sometimes, but it doesn't happen __________.",
    "frequently",
    {
      choiceBank: U100_3_BOX_BANK,
      explanation: "happen frequently.",
    },
  ),
  grammarCloze(
    "u100-3-3",
    "100.3 · adj / adv",
    "Maria's English is very __________ although she makes quite a lot of mistakes.",
    "fluent",
    {
      choiceBank: U100_3_BOX_BANK,
      explanation: "English is fluent (adj).",
    },
  ),
  grammarCloze(
    "u100-3-4",
    "100.3 · adj / adv",
    "I cooked this meal __________ for you.",
    "specially",
    {
      choiceBank: U100_3_BOX_BANK,
      explanation: "specially for you.",
    },
  ),
  grammarCloze(
    "u100-3-6",
    "100.3 · adj / adv",
    "I tried on the shoes and they fitted me __________.",
    "perfectly",
    {
      choiceBank: U100_3_BOX_BANK,
      explanation: "fitted … perfectly.",
    },
  ),
  grammarCloze(
    "u100-3-10",
    "100.3 · adj / adv",
    "Dan likes to take risks. He lives __________.",
    "dangerously",
    {
      choiceBank: U100_3_BOX_BANK,
      explanation: "lives dangerously.",
    },
  ),
  grammarCloze(
    "u100-4-2",
    "100.4 · two words",
    "Will's mother is __________ in hospital.",
    "seriously ill",
    {
      choiceBank: U100_4_TWO_WORD_BANK,
      explanation: "seriously ill.",
    },
  ),
  grammarCloze(
    "u100-4-3",
    "100.4 · two words",
    "This house is so big! It's __________.",
    "absolutely enormous",
    {
      choiceBank: U100_4_TWO_WORD_BANK,
      explanation: "absolutely enormous.",
    },
  ),
  grammarCloze(
    "u100-4-4",
    "100.4 · two words",
    "It wasn't a serious accident. The car was only __________.",
    "slightly damaged",
    {
      choiceBank: U100_4_TWO_WORD_BANK,
      explanation: "slightly damaged.",
    },
  ),
];
