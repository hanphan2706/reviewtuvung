import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 78 exercises — Names with and without the 2 (EGIU Intermediate).
 */
export const U78_NAMES_WITH_AND_WITHOUT_THE_2_EXERCISES: readonly GrammarExercise[] = [
  // 78.2 — where are these
  grammarCloze(
    "u78-2-2",
    "78.2 · địa danh",
    "__________ is in Paris.",
    "The Eiffel Tower",
    {
      alternatives: ["the Eiffel Tower"],
      explanation: "tháp nổi tiếng → The Eiffel Tower.",
    },
  ),
  grammarCloze(
    "u78-2-3",
    "78.2 · địa danh",
    "__________ is in London.",
    "Buckingham Palace",
    {
      explanation: "Place + Palace → không the.",
    },
  ),
  grammarCloze(
    "u78-2-4",
    "78.2 · địa danh",
    "__________ is in Washington.",
    "The White House",
    {
      alternatives: ["the White House"],
      explanation: "the White House.",
    },
  ),
  grammarCloze(
    "u78-2-5",
    "78.2 · địa danh",
    "__________ is in Moscow.",
    "The Kremlin",
    {
      alternatives: ["the Kremlin"],
      explanation: "the Kremlin.",
    },
  ),
  grammarCloze(
    "u78-2-6",
    "78.2 · địa danh",
    "__________ is in New York.",
    "Broadway",
    {
      explanation: "tên đường → Broadway (không the).",
    },
  ),
  grammarCloze(
    "u78-2-7",
    "78.2 · địa danh",
    "__________ is in Athens.",
    "The Acropolis",
    {
      alternatives: ["the Acropolis"],
      explanation: "the Acropolis.",
    },
  ),
  grammarCloze(
    "u78-2-8",
    "78.2 · địa danh",
    "__________ is near London.",
    "Gatwick Airport",
    {
      explanation: "Place + Airport → không the.",
    },
  ),

  // 78.3 — which is right
  grammarCloze(
    "u78-3-2",
    "78.3 · chọn đúng",
    "Many tourists in London visit __________.",
    "St Paul's Cathedral",
    {
      alternatives: ["St Pauls Cathedral", "St. Paul's Cathedral"],
      explanation: "St + tên → không the.",
    },
  ),
  grammarCloze(
    "u78-3-3",
    "78.3 · chọn đúng",
    "The biggest park in New York is __________.",
    "Central Park",
    {
      explanation: "công viên kiểu này → không the.",
    },
  ),
  grammarCloze(
    "u78-3-4",
    "78.3 · chọn đúng",
    "I'd like to go to China and see __________.",
    "the Great Wall",
    {
      alternatives: ["the Great Wall of China"],
      explanation: "the Great Wall (of…).",
    },
  ),
  grammarCloze(
    "u78-3-5",
    "78.3 · chọn đúng",
    "__________ is situated about 12 kilometres from the city centre.",
    "Dublin Airport",
    {
      alternatives: ["Dublin Airport is situated about 12 kilometres from the city centre"],
      explanation: "Place + Airport → không the.",
    },
  ),
  grammarCloze(
    "u78-3-6",
    "78.3 · chọn đúng",
    "'Which cinema are we going to this evening?' '__________.'",
    "The Classic",
    {
      alternatives: ["the Classic"],
      explanation: "rạp chiếu phim → The Classic.",
    },
  ),
  grammarCloze(
    "u78-3-7",
    "78.3 · chọn đúng",
    "Jack is a student at __________.",
    "Liverpool University",
    {
      explanation: "Place + University → không the.",
    },
  ),
  grammarCloze(
    "u78-3-8",
    "78.3 · chọn đúng",
    "You should go to __________. It's very interesting.",
    "the National Museum",
    {
      explanation: "bảo tàng → the National Museum.",
    },
  ),
  grammarCloze(
    "u78-3-9",
    "78.3 · chọn đúng",
    "If you're looking for a department store, I would recommend __________.",
    "Harrison's",
    {
      explanation: "tên 's → không the.",
    },
  ),
  grammarCloze(
    "u78-3-10",
    "78.3 · chọn đúng",
    "Andy is a flight attendant. He works for __________.",
    "Cathay Pacific",
    {
      explanation: "hãng bay → không the.",
    },
  ),
  grammarCloze(
    "u78-3-11",
    "78.3 · chọn đúng",
    "'Which newspaper do you want?' '__________.'",
    "The Morning News",
    {
      alternatives: ["the Morning News"],
      explanation: "báo → The Morning News.",
    },
  ),
  grammarCloze(
    "u78-3-12",
    "78.3 · chọn đúng",
    "We went to Italy and saw __________ of Pisa.",
    "the Leaning Tower",
    {
      alternatives: ["the Leaning Tower of Pisa"],
      explanation: "the Leaning Tower.",
    },
  ),
  grammarCloze(
    "u78-3-13",
    "78.3 · chọn đúng",
    "This book is published by __________.",
    "Cambridge University Press",
    {
      explanation: "nhà xuất bản kiểu Place + … → không the.",
    },
  ),
  grammarCloze(
    "u78-3-14",
    "78.3 · chọn đúng",
    "The building across the street is __________.",
    "the College of Art",
    {
      explanation: "… of … → the College of Art.",
    },
  ),
];
