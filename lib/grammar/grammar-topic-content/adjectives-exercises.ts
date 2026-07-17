import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 99 exercises — Adjectives (English Grammar in Use · Intermediate).
 */

/** 99.2 — Verb box + adjective box (combined for choose-from display). */
const U99_2_VERB_ADJ_BANK = [
  "feel",
  "look",
  "seem",
  "smell",
  "sound",
  "taste",
  "awful",
  "nervous",
  "interesting",
  "nice",
  "upset",
  "wet",
] as const;

export const U99_ADJECTIVES_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u99-1-2",
    "99.1 · adjective order",
    "an unusual ring (gold) → an __________",
    "unusual gold ring",
    {
      explanation: "opinion/other + material: unusual gold ring.",
    },
  ),
  grammarCloze(
    "u99-1-3",
    "99.1 · adjective order",
    "an old house (beautiful) → a __________",
    "beautiful old house",
    {
      explanation: "opinion trước age: beautiful old house.",
    },
  ),
  grammarCloze(
    "u99-1-5",
    "99.1 · adjective order",
    "an American film (old) → an __________",
    "old American film",
    {
      explanation: "age trước origin.",
    },
  ),
  grammarCloze(
    "u99-1-7",
    "99.1 · adjective order",
    "a long face (thin) → a __________",
    "long thin face",
    {
      explanation: "length trước shape: long thin face.",
    },
  ),
  grammarCloze(
    "u99-1-9",
    "99.1 · adjective order",
    "a sunny day (lovely) → a __________",
    "lovely sunny day",
    {
      explanation: "opinion trước fact.",
    },
  ),
  grammarCloze(
    "u99-1-13",
    "99.1 · adjective order",
    "a new sweater (green / nice) → a __________",
    "nice new green sweater",
    {
      explanation: "opinion → age → colour.",
    },
  ),
  grammarCloze(
    "u99-1-14",
    "99.1 · adjective order",
    "a metal box (black / small) → a __________",
    "small black metal box",
    {
      explanation: "size → colour → material.",
    },
  ),
  grammarCloze(
    "u99-1-16",
    "99.1 · adjective order",
    "an old painting (interesting / French) → an __________",
    "interesting old French painting",
    {
      explanation: "opinion → age → origin.",
    },
  ),
  grammarCloze(
    "u99-1-17",
    "99.1 · adjective order",
    "a large umbrella (red / yellow) → a __________",
    "large red and yellow umbrella",
    {
      explanation: "hai màu → and.",
    },
  ),
  grammarCloze(
    "u99-1-18",
    "99.1 · adjective order",
    "a big cat (black / white / fat) → a __________",
    "big fat black and white cat",
    {
      explanation: "size → shape → colours + and.",
    },
  ),
  grammarCloze(
    "u99-2-2",
    "99.2 · verb + adj",
    "I can't eat this. I've just tried it and it __________.",
    "tastes awful",
    {
      alternatives: ["tasted awful"],
      choiceBank: U99_2_VERB_ADJ_BANK,
      explanation: "taste + adj: tastes/tasted awful.",
    },
  ),
  grammarCloze(
    "u99-2-3",
    "99.2 · verb + adj",
    "It's normal to __________ before an exam or an interview.",
    "feel nervous",
    {
      choiceBank: U99_2_VERB_ADJ_BANK,
      explanation: "feel nervous.",
    },
  ),
  grammarCloze(
    "u99-2-4",
    "99.2 · verb + adj",
    "What beautiful flowers! They __________ too.",
    "smell nice",
    {
      choiceBank: U99_2_VERB_ADJ_BANK,
      explanation: "smell nice.",
    },
  ),
  grammarCloze(
    "u99-2-5",
    "99.2 · verb + adj",
    "You __________ . Have you been out in the rain?",
    "look wet",
    {
      choiceBank: U99_2_VERB_ADJ_BANK,
      explanation: "look wet.",
    },
  ),
  grammarCloze(
    "u99-2-6",
    "99.2 · verb + adj",
    "James told me about his new job. It __________ — much better than his old job.",
    "sounds interesting",
    {
      alternatives: ["sounded interesting"],
      choiceBank: U99_2_VERB_ADJ_BANK,
      explanation: "sound(s/ed) interesting.",
    },
  ),
  grammarCloze(
    "u99-3-2",
    "99.3 · adj / adv",
    "I usually feel __________ when the sun is shining. (happy / happily)",
    "happy",
    {
      explanation: "feel + adj: happy.",
    },
  ),
  grammarCloze(
    "u99-3-3",
    "99.3 · adj / adv",
    "The children were playing __________ in the garden. (happy / happily)",
    "happily",
    {
      explanation: "play + adv: happily.",
    },
  ),
  grammarCloze(
    "u99-3-5",
    "99.3 · adj / adv",
    "There's no point in doing a job if you don't do it __________. (proper / properly)",
    "properly",
    {
      explanation: "do it properly (adv).",
    },
  ),
  grammarCloze(
    "u99-4-3",
    "99.4 · the first/next/last",
    "yesterday and the day before yesterday → __________",
    "the last two days",
    {
      explanation: "the last two days.",
    },
  ),
  grammarCloze(
    "u99-4-6",
    "99.4 · the first/next/last",
    "questions 1, 2 and 3 in the exam → __________",
    "the first three questions",
    {
      alternatives: ["the first three questions in the exam"],
      explanation: "the first three questions…",
    },
  ),
];
