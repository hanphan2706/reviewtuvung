import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 101 exercises — Adjectives and Adverbs 2 (EGIU Intermediate).
 */

/** 101.2 — well + participle from the box. */
const U101_2_PARTICIPLE_BANK = [
  "behaved",
  "informed",
  "kept",
  "known",
  "paid",
  "written",
] as const;

/** 101.4 — Verbs used with hardly + … */
const U101_4_VERB_BANK = [
  "change",
  "hear",
  "know",
  "recognise",
  "say",
  "sleep",
  "speak",
] as const;

export const U101_ADJECTIVES_AND_ADVERBS_2_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u101-1-2",
    "101.1 · good / well",
    "Joe's exam results were very __________.",
    "good",
    {
      explanation: "results were good (adj).",
    },
  ),
  grammarCloze(
    "u101-1-3",
    "101.1 · good / well",
    "Joe did __________ in his exams.",
    "well",
    {
      explanation: "did well (adv).",
    },
  ),
  grammarCloze(
    "u101-1-4",
    "101.1 · good / well",
    "I didn't sleep __________ last night.",
    "well",
    {
      explanation: "sleep well.",
    },
  ),
  grammarCloze(
    "u101-1-5",
    "101.1 · good / well",
    "I like your hat. It looks __________ on you.",
    "good",
    {
      explanation: "looks good (adj after look).",
    },
  ),
  grammarCloze(
    "u101-1-8",
    "101.1 · good / well",
    "Lucy speaks German __________.",
    "well",
    {
      explanation: "speaks well (adv).",
    },
  ),
  grammarCloze(
    "u101-1-8b",
    "101.1 · good / well",
    "Lucy is __________ at languages.",
    "good",
    {
      explanation: "good at languages.",
    },
  ),
  grammarCloze(
    "u101-2-2",
    "101.2 · well + participle",
    "I'm surprised you haven't heard of her. She is quite __________.",
    "well-known",
    {
      alternatives: ["well known"],
      choiceBank: U101_2_PARTICIPLE_BANK,
      explanation: "well-known.",
    },
  ),
  grammarCloze(
    "u101-2-3",
    "101.2 · well + participle",
    "Our neighbours' garden is neat and tidy. It is very __________.",
    "well-kept",
    {
      alternatives: ["well kept"],
      choiceBank: U101_2_PARTICIPLE_BANK,
      explanation: "well-kept.",
    },
  ),
  grammarCloze(
    "u101-2-4",
    "101.2 · well + participle",
    "I enjoyed the book. It's a great story and it's very __________.",
    "well-written",
    {
      alternatives: ["well written"],
      choiceBank: U101_2_PARTICIPLE_BANK,
      explanation: "well-written.",
    },
  ),
  grammarCloze(
    "u101-2-6",
    "101.2 · well + participle",
    "Jane works very hard in her job, but she isn't very __________.",
    "well-paid",
    {
      alternatives: ["well paid"],
      choiceBank: U101_2_PARTICIPLE_BANK,
      explanation: "well-paid.",
    },
  ),
  grammarCloze(
    "u101-3-3",
    "101.3 · hard / hardly / late…",
    "I haven't been to the cinema __________.",
    "lately",
    {
      explanation: "lately = recently.",
    },
  ),
  grammarCloze(
    "u101-3-5",
    "101.3 · hard / hardly / late…",
    "I tried __________ to remember her name, but I couldn't.",
    "hard",
    {
      explanation: "tried hard (cố gắng).",
    },
  ),
  grammarCloze(
    "u101-3-6",
    "101.3 · hard / hardly / late…",
    "This coat is practically unused. I've __________ worn it.",
    "hardly",
    {
      explanation: "hardly worn = almost never.",
    },
  ),
  grammarCloze(
    "u101-3-8",
    "101.3 · hard / hardly / late…",
    "It's really dark in here. I can __________ see.",
    "hardly",
    {
      explanation: "can hardly see (không: see hardly).",
    },
  ),
  grammarCloze(
    "u101-4-2",
    "101.4 · hardly + verb",
    "You're speaking very quietly. I can __________ you.",
    "hardly hear",
    {
      choiceBank: U101_4_VERB_BANK,
      explanation: "can hardly hear you.",
    },
  ),
  grammarCloze(
    "u101-4-3",
    "101.4 · hardly + verb",
    "I don't feel good this morning. I __________ last night.",
    "hardly slept",
    {
      choiceBank: U101_4_VERB_BANK,
      explanation: "I hardly slept.",
    },
  ),
  grammarCloze(
    "u101-4-5",
    "101.4 · hardly + verb",
    "Kate was very quiet this evening. She __________ anything.",
    "hardly said",
    {
      choiceBank: U101_4_VERB_BANK,
      explanation: "She hardly said anything.",
    },
  ),
  grammarCloze(
    "u101-5-2",
    "101.5 · hardly any…",
    "It was a very warm day and there was __________ wind.",
    "hardly any",
    {
      explanation: "hardly any wind.",
    },
  ),
  grammarCloze(
    "u101-5-4",
    "101.5 · hardly any…",
    "The hotel was almost empty. There was __________ staying there.",
    "hardly anybody",
    {
      alternatives: ["hardly anyone"],
      explanation: "hardly anybody/anyone.",
    },
  ),
  grammarCloze(
    "u101-5-5",
    "101.5 · hardly any…",
    "I listen to the radio a lot, but I __________ watch TV.",
    "hardly ever",
    {
      explanation: "hardly ever = almost never.",
    },
  ),
];
