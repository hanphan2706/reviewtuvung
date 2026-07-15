import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 72 exercises — A/an and the (English Grammar in Use · Intermediate).
 */
export const U72_A_AN_AND_THE_EXERCISES: readonly GrammarExercise[] = [
  // 72.2 — a/an or the
  grammarCloze(
    "u72-2-1a",
    "72.2 · a/an hoặc the",
    "This house is very nice. Does it have __________ garden?",
    "a",
    {
      explanation: "garden lần đầu / nói chung có sân không → a.",
    },
  ),
  grammarCloze(
    "u72-2-1b",
    "72.2 · a/an hoặc the",
    "It's a beautiful day. Let's sit in __________ garden.",
    "the",
    {
      explanation: "sân nhà này (đã rõ) → the garden.",
    },
  ),
  grammarCloze(
    "u72-2-1c",
    "72.2 · a/an hoặc the",
    "I like living in this house, but it's a shame that __________ garden is so small.",
    "the",
    {
      explanation: "sân của ngôi nhà này → the.",
    },
  ),
  grammarCloze(
    "u72-2-2a",
    "72.2 · a/an hoặc the",
    "Can you recommend __________ good restaurant?",
    "a",
    {
      explanation: "một nhà hàng tốt nào đó → a.",
    },
  ),
  grammarCloze(
    "u72-2-2c",
    "72.2 · a/an hoặc the",
    "We had dinner in __________ best restaurant in town.",
    "the",
    {
      explanation: "best → the (siêu cấp / cụ thể).",
    },
  ),
  grammarCloze(
    "u72-2-3a",
    "72.2 · a/an hoặc the",
    "What's __________ name of that man we met yesterday?",
    "the",
    {
      explanation: "the name of … = tên cụ thể.",
    },
  ),
  grammarCloze(
    "u72-2-4a",
    "72.2 · a/an hoặc the",
    "Did Paula get __________ job she applied for?",
    "the",
    {
      explanation: "công việc cụ thể đã apply → the job.",
    },
  ),
  grammarCloze(
    "u72-2-4b",
    "72.2 · a/an hoặc the",
    "It's not easy to get __________ job at the moment.",
    "a",
    {
      explanation: "một công việc nói chung → a job.",
    },
  ),
  grammarCloze(
    "u72-2-5c",
    "72.2 · a/an hoặc the",
    "Gary has a part-time job. He works three mornings __________ week.",
    "a",
    {
      explanation: "three mornings a week.",
    },
  ),

  // 72.3 — put in a/an or the
  grammarCloze(
    "u72-3-2",
    "72.3 · điền a/an/the",
    "How often do you go to __________?",
    "the dentist",
    {
      explanation: "go to the dentist.",
    },
  ),
  grammarCloze(
    "u72-3-3",
    "72.3 · điền a/an/the",
    "Can you close __________, please?",
    "the door",
    {
      explanation: "cửa trong phòng → the door.",
    },
  ),
  grammarCloze(
    "u72-3-4",
    "72.3 · điền a/an/the",
    "I have __________. I need your help.",
    "a problem",
    {
      explanation: "problem lần đầu → a problem.",
    },
  ),
  grammarCloze(
    "u72-3-5",
    "72.3 · điền a/an/the",
    "How far is it from here to __________?",
    "the station",
    {
      explanation: "nhà ga của thị trấn → the station.",
    },
  ),
  grammarCloze(
    "u72-3-6",
    "72.3 · điền a/an/the",
    "I'm going to __________. I won't be long.",
    "the post office",
    {
      explanation: "go to the post office.",
    },
  ),
  grammarCloze(
    "u72-3-7",
    "72.3 · điền a/an/the",
    "Paul plays tennis. He's __________.",
    "a very good player",
    {
      explanation: "loại người → a very good player.",
    },
  ),
  grammarCloze(
    "u72-3-8",
    "72.3 · điền a/an/the",
    "There isn't __________ near where I live.",
    "an airport",
    {
      explanation: "airport → an airport.",
    },
  ),
  grammarCloze(
    "u72-3-9",
    "72.3 · điền a/an/the",
    "__________ is 70 miles away.",
    "The nearest airport",
    {
      explanation: "nearest → The nearest airport.",
    },
  ),
  grammarCloze(
    "u72-3-10",
    "72.3 · điền a/an/the",
    "There were no chairs, so we sat on __________.",
    "the floor",
    {
      explanation: "sàn phòng → the floor.",
    },
  ),
  grammarCloze(
    "u72-3-12",
    "72.3 · điền a/an/the",
    "Chris has just got __________ in Zurich.",
    "a job in a bank",
    {
      explanation: "a job in a bank (cả hai lần đầu).",
    },
  ),
  grammarCloze(
    "u72-3-13",
    "72.3 · điền a/an/the",
    "We live in __________.",
    "a small apartment in the city centre",
    {
      alternatives: ["a small apartment in the city center"],
      explanation: "a small apartment + the city centre.",
    },
  ),
];
