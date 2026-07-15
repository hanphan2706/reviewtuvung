import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 71 exercises — Countable Nouns with a/an and some (EGIU Intermediate).
 */
export const U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_EXERCISES: readonly GrammarExercise[] = [
  // 71.1 — what kind
  grammarCloze(
    "u71-1-3",
    "71.1 · loại đồ / loài",
    "Carrots and onions → __________.",
    "They're vegetables",
    {
      alternatives: ["They are vegetables", "They're vegetables."],
      explanation: "số nhiều → They're vegetables.",
    },
  ),
  grammarCloze(
    "u71-1-4",
    "71.1 · loại đồ / loài",
    "A tulip → __________.",
    "It's a flower",
    {
      alternatives: ["It is a flower", "It's a flower."],
      explanation: "số ít → It's a flower.",
    },
  ),
  grammarCloze(
    "u71-1-5",
    "71.1 · loại đồ / loài",
    "Earth, Mars and Jupiter → __________.",
    "They're planets",
    {
      alternatives: ["They are planets", "They're planets."],
      explanation: "số nhiều → They're planets.",
    },
  ),
  grammarCloze(
    "u71-1-6",
    "71.1 · loại đồ / loài",
    "Chess → __________.",
    "It's a game",
    {
      alternatives: ["It is a game", "It's a game."],
      explanation: "số ít → It's a game.",
    },
  ),
  grammarCloze(
    "u71-1-9",
    "71.1 · loại đồ / loài",
    "A mosquito → __________.",
    "It's an insect",
    {
      alternatives: ["It is an insect", "It's an insect."],
      explanation: "insect → an insect.",
    },
  ),

  // 71.2 — jobs
  grammarCloze(
    "u71-2-2",
    "71.2 · nghề nghiệp",
    "Gary works in a restaurant. He brings the food to the tables. He's __________.",
    "a waiter",
    {
      explanation: "nghề → a waiter.",
    },
  ),
  grammarCloze(
    "u71-2-3",
    "71.2 · nghề nghiệp",
    "Jane writes articles for a newspaper. She's __________.",
    "a journalist",
    {
      explanation: "nghề → a journalist.",
    },
  ),
  grammarCloze(
    "u71-2-4",
    "71.2 · nghề nghiệp",
    "Kevin works in a hospital. He operates on people. He's __________.",
    "a surgeon",
    {
      explanation: "nghề → a surgeon.",
    },
  ),
  grammarCloze(
    "u71-2-5",
    "71.2 · nghề nghiệp",
    "Jonathan cooks in a restaurant. He's __________.",
    "a chef",
    {
      explanation: "nghề → a chef.",
    },
  ),
  grammarCloze(
    "u71-2-8",
    "71.2 · nghề nghiệp",
    "Lisa translates so that people can understand each other. She's __________.",
    "an interpreter",
    {
      explanation: "interpreter → an interpreter.",
    },
  ),

  // 71.3 — which is right
  grammarCloze(
    "u71-3-2",
    "71.3 · chọn dạng đúng",
    "Are you __________?",
    "a careful driver",
    {
      explanation: "số ít đếm được → a careful driver.",
    },
  ),
  grammarCloze(
    "u71-3-3",
    "71.3 · chọn dạng đúng",
    "I went to the library and borrowed __________.",
    "some books",
    {
      explanation: "một số sách cụ thể → some books.",
    },
  ),
  grammarCloze(
    "u71-3-4",
    "71.3 · chọn dạng đúng",
    "Mark works in a bookshop. He sells __________.",
    "books",
    {
      explanation: "nghề bán sách nói chung → books (không: some books).",
    },
  ),
  grammarCloze(
    "u71-3-6",
    "71.3 · chọn dạng đúng",
    "I don't feel very well. I've got __________.",
    "a sore throat",
    {
      explanation: "throat số ít → a sore throat.",
    },
  ),
  grammarCloze(
    "u71-3-7",
    "71.3 · chọn dạng đúng",
    "What __________! Thank you very much.",
    "a lovely present",
    {
      explanation: "What a + singular countable.",
    },
  ),
  grammarCloze(
    "u71-3-9",
    "71.3 · chọn dạng đúng",
    "It might rain. Don't go out without __________.",
    "an umbrella",
    {
      alternatives: ["without an umbrella"],
      explanation: "umbrella → an umbrella.",
    },
  ),

  // 71.4 — a/an/some/−
  grammarCloze(
    "u71-4-4",
    "71.4 · a / an / some / −",
    "When I was __________ child, I used to be very shy.",
    "a",
    {
      explanation: "a child.",
    },
  ),
  grammarCloze(
    "u71-4-5",
    "71.4 · a / an / some / −",
    "__________ birds, for example the penguin, cannot fly.",
    "Some",
    {
      alternatives: ["some"],
      explanation: "some = một phần (không phải tất cả).",
    },
  ),
  grammarCloze(
    "u71-4-6",
    "71.4 · a / an / some / −",
    "Would you like to be __________ actor?",
    "an",
    {
      explanation: "actor → an actor.",
    },
  ),
  grammarCloze(
    "u71-4-8",
    "71.4 · a / an / some / −",
    "I didn't expect to see you. What __________ surprise!",
    "a",
    {
      explanation: "What a surprise!",
    },
  ),
];
