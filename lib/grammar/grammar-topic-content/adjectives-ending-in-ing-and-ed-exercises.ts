import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 98 exercises — Adjectives Ending in -ing and -ed (EGIU Intermediate).
 */

/** 98.3 — Choose a word from the box (pairs shown as separate forms). */
const U98_3_BOX_BANK = [
  "amusing",
  "amused",
  "annoying",
  "annoyed",
  "boring",
  "bored",
  "confusing",
  "confused",
  "disgusting",
  "disgusted",
  "exciting",
  "excited",
  "exhausting",
  "exhausted",
  "interesting",
  "interested",
  "surprising",
  "surprised",
] as const;

export const U98_ADJECTIVES_ENDING_IN_ING_AND_ED_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u98-1-2a",
    "98.1 · -ing / -ed",
    "Donna's job is hard. She enjoys it, but it's often __________. (exhaust…)",
    "exhausting",
    {
      explanation: "job → exhausting (-ing).",
    },
  ),
  grammarCloze(
    "u98-1-2b",
    "98.1 · -ing / -ed",
    "At the end of a day's work, she is often __________. (exhaust…)",
    "exhausted",
    {
      explanation: "cảm xúc → exhausted (-ed).",
    },
  ),
  grammarCloze(
    "u98-1-3a",
    "98.1 · -ing / -ed",
    "It's been raining all day. This weather is __________. (depress…)",
    "depressing",
    {
      explanation: "weather → depressing.",
    },
  ),
  grammarCloze(
    "u98-1-4a",
    "98.1 · -ing / -ed",
    "Going to Mexico will be an __________ experience for Clare. (excit…)",
    "exciting",
    {
      explanation: "experience → exciting.",
    },
  ),
  grammarCloze(
    "u98-1-4c",
    "98.1 · -ing / -ed",
    "She is really __________ about going to Mexico. (excit…)",
    "excited",
    {
      explanation: "cảm xúc → excited about.",
    },
  ),
  grammarCloze(
    "u98-2-2",
    "98.2 · choose form",
    "I'm not particularly __________ in football. (interesting / interested)",
    "interested",
    {
      explanation: "interested in (không interesting).",
    },
  ),
  grammarCloze(
    "u98-2-3",
    "98.2 · choose form",
    "The new project sounds __________. (exciting / excited)",
    "exciting",
    {
      explanation: "project → exciting.",
    },
  ),
  grammarCloze(
    "u98-2-4",
    "98.2 · choose form",
    "It can be __________ when you have to ask people for money. (embarrassing / embarrassed)",
    "embarrassing",
    {
      explanation: "tình huống → embarrassing.",
    },
  ),
  grammarCloze(
    "u98-2-5",
    "98.2 · choose form",
    "Do you easily get __________? (embarrassing / embarrassed)",
    "embarrassed",
    {
      explanation: "get embarrassed (cảm xúc).",
    },
  ),
  grammarCloze(
    "u98-2-6",
    "98.2 · choose form",
    "I was __________ when I was offered the job. (amazing / amazed)",
    "amazed",
    {
      explanation: "I was amazed.",
    },
  ),
  grammarCloze(
    "u98-2-7",
    "98.2 · choose form",
    "She's made __________ progress. (amazing / amazed)",
    "amazing",
    {
      explanation: "progress → amazing.",
    },
  ),
  grammarCloze(
    "u98-2-9",
    "98.2 · choose form",
    "I'm __________ in joining the club. (interesting / interested)",
    "interested",
    {
      explanation: "interested in joining…",
    },
  ),
  grammarCloze(
    "u98-2-10",
    "98.2 · choose form",
    "It was a really __________ experience. (terrifying / terrified)",
    "terrifying",
    {
      explanation: "experience → terrifying.",
    },
  ),
  grammarCloze(
    "u98-2-10b",
    "98.2 · choose form",
    "Everybody was very __________ when they heard what happened. (shocking / shocked)",
    "shocked",
    {
      explanation: "shocked (không shocking).",
    },
  ),
  grammarCloze(
    "u98-2-11",
    "98.2 · choose form",
    "Why do you always look so __________? (boring / bored)",
    "bored",
    {
      explanation: "look bored (cảm xúc).",
    },
  ),
  grammarCloze(
    "u98-2-11b",
    "98.2 · choose form",
    "Is your life really so __________? (boring / bored)",
    "boring",
    {
      explanation: "life → boring.",
    },
  ),
  grammarCloze(
    "u98-2-12",
    "98.2 · choose form",
    "He's one of the most __________ people I've ever met. (boring / bored)",
    "boring",
    {
      explanation: "người làm người khác chán → boring.",
    },
  ),
  grammarCloze(
    "u98-3-2",
    "98.3 · box words",
    "Some people get __________ very easily. They always need something new.",
    "bored",
    {
      choiceBank: U98_3_BOX_BANK,
      explanation: "get bored.",
    },
  ),
  grammarCloze(
    "u98-3-3",
    "98.3 · box words",
    "The teacher's explanation was __________ . Nobody understood it.",
    "confusing",
    {
      choiceBank: U98_3_BOX_BANK,
      explanation: "explanation → confusing.",
    },
  ),
  grammarCloze(
    "u98-3-7",
    "98.3 · box words",
    "The lecture was __________ . I fell asleep.",
    "boring",
    {
      choiceBank: U98_3_BOX_BANK,
      explanation: "lecture → boring.",
    },
  ),
];
