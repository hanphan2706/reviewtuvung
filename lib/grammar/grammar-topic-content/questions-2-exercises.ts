import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 50 exercises — Questions 2 (English Grammar in Use · Intermediate).
 */
export const U50_QUESTIONS_2_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u50-1-1",
    "50.1 · choose the correct form",
    "Which is right? Do you know what time __________?",
    "the film starts",
    {
      alternatives: ["Do you know what time the film starts?"],
      explanation: "… what time the film starts (không: does the film start).",
    },
  ),
  grammarCloze(
    "u50-1-2",
    "50.1 · choose the correct form",
    "Which is right? __________ Amy get up so early every day?",
    "Why does",
    {
      alternatives: ["Why does Amy get up so early every day?"],
      explanation: "Why does Amy get up…?",
    },
  ),
  grammarCloze(
    "u50-1-3",
    "50.1 · choose the correct form",
    "I want to know what __________.",
    "this word means",
    {
      alternatives: ["I want to know what this word means"],
      explanation: "… what this word means (không: does this word mean).",
    },
  ),
  grammarCloze(
    "u50-1-4",
    "50.1 · choose the correct form",
    "I can't remember where __________.",
    "I parked the car",
    {
      alternatives: ["I can't remember where I parked the car"],
      explanation: "… where I parked the car (không đảo did).",
    },
  ),
  grammarCloze(
    "u50-1-6",
    "50.1 · choose the correct form",
    "Do you know where __________?",
    "Helen works",
    {
      alternatives: ["Do you know where Helen works?"],
      explanation: "… where Helen works.",
    },
  ),
  grammarCloze(
    "u50-2-2",
    "50.2 · word order",
    "(is / to the airport / far / it) → How __________?",
    "far is it to the airport",
    {
      alternatives: [
        "How far is it to the airport?",
        "How far is it to the airport",
      ],
      explanation: "How far is it to the airport?",
    },
  ),
  grammarCloze(
    "u50-2-3",
    "50.2 · word order",
    "(wonder / is / how / old / Tom) → I __________.",
    "wonder how old Tom is",
    {
      alternatives: [
        "I wonder how old Tom is",
        "I wonder how old Tom is.",
      ],
      explanation: "I wonder how old Tom is.",
    },
  ),
  grammarCloze(
    "u50-2-4",
    "50.2 · word order",
    "(they / married / been / have) → How long __________?",
    "have they been married",
    {
      alternatives: [
        "How long have they been married?",
        "How long have they been married",
      ],
      explanation: "How long have they been married?",
    },
  ),
  grammarCloze(
    "u50-2-5",
    "50.2 · word order",
    "Do you know how long __________?",
    "they have been married",
    {
      alternatives: [
        "Do you know how long they have been married?",
        "Do you know how long they have been married",
      ],
      explanation: "Do you know how long they have been married?",
    },
  ),
  grammarCloze(
    "u50-2-6",
    "50.2 · word order",
    "Could you tell me where __________?",
    "the station is",
    {
      alternatives: [
        "Could you tell me where the station is?",
        "Could you tell me where the station is",
      ],
      explanation: "Could you tell me where the station is?",
    },
  ),
  grammarCloze(
    "u50-2-7",
    "50.2 · word order",
    "I don't know whether __________ in the accident.",
    "anyone was injured",
    {
      alternatives: [
        "I don't know whether anyone was injured in the accident",
        "anyone was injured",
      ],
      explanation: "… whether anyone was injured…",
    },
  ),
  grammarCloze(
    "u50-2-8",
    "50.2 · word order",
    "Do you know what time __________ tomorrow?",
    "you will arrive",
    {
      alternatives: [
        "Do you know what time you will arrive tomorrow?",
        "you will arrive tomorrow",
      ],
      explanation: "… what time you will arrive tomorrow?",
    },
  ),
  grammarCloze(
    "u50-3-1",
    "50.3 · reported questions",
    "'Where are you from?' → He asked me __________",
    "where I was from",
    {
      alternatives: [
        "He asked me where I was from",
        "He asked me where I was from.",
      ],
      explanation: "He asked me where I was from.",
    },
  ),
  grammarCloze(
    "u50-3-2",
    "50.3 · reported questions",
    "'How long have you been in London?' → She asked me __________",
    "how long I'd been in London",
    {
      alternatives: [
        "how long I had been in London",
        "She asked me how long I'd been in London",
        "She asked me how long I had been in London",
      ],
      explanation: "… how long I'd / I had been in London.",
    },
  ),
  grammarCloze(
    "u50-3-3",
    "50.3 · reported questions",
    "'Have you been to London before?' → They asked me __________",
    "if I'd been to London before",
    {
      alternatives: [
        "whether I'd been to London before",
        "if I had been to London before",
        "whether I had been to London before",
        "They asked me if I'd been to London before",
      ],
      explanation: "… if/whether I'd / I had been…",
    },
  ),
  grammarCloze(
    "u50-3-4",
    "50.3 · reported questions",
    "'Do you like London?' → She asked me __________",
    "if I liked London",
    {
      alternatives: [
        "whether I liked London",
        "She asked me if I liked London",
        "She asked me whether I liked London",
      ],
      explanation: "… if/whether I liked London.",
    },
  ),
  grammarCloze(
    "u50-3-5",
    "50.3 · reported questions",
    "'Where are you staying?' → He asked me __________",
    "where I was staying",
    {
      alternatives: [
        "He asked me where I was staying",
        "He asked me where I was staying.",
      ],
      explanation: "He asked me where I was staying.",
    },
  ),
  grammarCloze(
    "u50-3-8",
    "50.3 · reported questions",
    "'Why did you come to London?' → They asked me __________",
    "why I'd come to London",
    {
      alternatives: [
        "why I had come to London",
        "why I came to London",
        "They asked me why I'd come to London",
        "They asked me why I had come to London",
        "They asked me why I came to London",
      ],
      explanation: "… why I'd come / I had come / I came…",
    },
  ),
];
