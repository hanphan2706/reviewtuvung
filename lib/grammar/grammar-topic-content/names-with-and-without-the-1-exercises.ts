import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 77 exercises — Names with and without the 1 (EGIU Intermediate).
 */
export const U77_NAMES_WITH_AND_WITHOUT_THE_1_EXERCISES: readonly GrammarExercise[] = [
  // 77.1
  grammarCloze(
    "u77-1-2",
    "77.1 · chọn đúng",
    "I was ill. __________ told me to rest for a few days.",
    "The doctor",
    {
      alternatives: ["the doctor"],
      explanation: "bác sĩ (không kèm tên) → The doctor.",
    },
  ),
  grammarCloze(
    "u77-1-3",
    "77.1 · chọn đúng",
    "__________ is an expert on heart disease.",
    "Doctor Thomas",
    {
      explanation: "Doctor + tên → không the.",
    },
  ),
  grammarCloze(
    "u77-1-4",
    "77.1 · chọn đúng",
    "I'm looking for __________. Do you know where she is?",
    "Professor Brown",
    {
      explanation: "Professor + tên → không the.",
    },
  ),
  grammarCloze(
    "u77-1-5",
    "77.1 · chọn đúng",
    "In the United States, __________ is elected for four years.",
    "the President",
    {
      explanation: "chức danh không kèm tên → the President.",
    },
  ),
  grammarCloze(
    "u77-1-6",
    "77.1 · chọn đúng",
    "__________ was assassinated in 1963.",
    "President Kennedy",
    {
      explanation: "President + tên → không the.",
    },
  ),
  grammarCloze(
    "u77-1-8",
    "77.1 · chọn đúng",
    "Do you know __________? They're a very nice couple.",
    "the Wilsons",
    {
      explanation: "gia đình số nhiều → the Wilsons.",
    },
  ),
  grammarCloze(
    "u77-1-9",
    "77.1 · chọn đúng",
    "Julia spent three years as a student in __________.",
    "the United States",
    {
      alternatives: ["the USA", "the US"],
      explanation: "United States → the.",
    },
  ),
  grammarCloze(
    "u77-1-10",
    "77.1 · chọn đúng",
    "__________ has a population of about 66 million.",
    "France",
    {
      explanation: "tên nước thường → không the.",
    },
  ),

  // 77.2
  grammarCloze(
    "u77-2-2",
    "77.2 · thêm the nếu cần",
    "Milan and Turin are cities in __________ of Italy.",
    "the north",
    {
      explanation: "the north of Italy.",
    },
  ),
  grammarCloze(
    "u77-2-4",
    "77.2 · thêm the nếu cần",
    "Last year I visited Mexico and __________.",
    "the United States",
    {
      alternatives: ["the USA"],
      explanation: "United States cần the.",
    },
  ),
  grammarCloze(
    "u77-2-5",
    "77.2 · thêm the nếu cần",
    "Southern England is warmer than __________.",
    "the north",
    {
      explanation: "the north (đối lập với Southern England).",
    },
  ),
  grammarCloze(
    "u77-2-8",
    "77.2 · thêm the nếu cần",
    "Next year we're going skiing in __________.",
    "the Swiss Alps",
    {
      explanation: "dãy núi → the Swiss Alps.",
    },
  ),
  grammarCloze(
    "u77-2-9",
    "77.2 · thêm the nếu cần",
    "__________ consists of Great Britain and Northern Ireland.",
    "The UK",
    {
      alternatives: ["The United Kingdom", "the UK"],
      explanation: "UK → The UK.",
    },
  ),
  grammarCloze(
    "u77-2-10",
    "77.2 · thêm the nếu cần",
    "__________ are a group of islands in the Indian Ocean.",
    "The Seychelles",
    {
      alternatives: ["the Seychelles"],
      explanation: "quần đảo → The Seychelles.",
    },
  ),
  grammarCloze(
    "u77-2-12",
    "77.2 · thêm the nếu cần",
    "The River Volga flows into __________.",
    "the Caspian Sea",
    {
      explanation: "biển → the Caspian Sea.",
    },
  ),

  // 77.3
  grammarCloze(
    "u77-3-2",
    "77.3 · địa lý",
    "Where is Argentina? → __________",
    "South America",
    {
      alternatives: ["in South America", "(in) South America"],
      explanation: "South America không the.",
    },
  ),
  grammarCloze(
    "u77-3-3",
    "77.3 · địa lý",
    "Which is the longest river in Africa? → __________",
    "the Nile",
    {
      alternatives: ["the Nile River", "the River Nile"],
      explanation: "sông → the Nile.",
    },
  ),
  grammarCloze(
    "u77-3-5",
    "77.3 · địa lý",
    "Of which country is Washington the capital? → __________",
    "the United States",
    {
      alternatives: ["the USA", "the US"],
      explanation: "the United States.",
    },
  ),
  grammarCloze(
    "u77-3-6",
    "77.3 · địa lý",
    "What is the name of the mountain range in the west of North America? → __________",
    "the Rockies",
    {
      alternatives: ["the Rocky Mountains"],
      explanation: "dãy núi → the Rockies.",
    },
  ),
  grammarCloze(
    "u77-3-11",
    "77.3 · địa lý",
    "Which river flows through London? → __________",
    "the Thames",
    {
      alternatives: ["the River Thames"],
      explanation: "sông → the Thames.",
    },
  ),
];
