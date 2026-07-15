import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 79 exercises — Singular and Plural (English Grammar in Use · Intermediate).
 */
export const U79_SINGULAR_AND_PLURAL_EXERCISES: readonly GrammarExercise[] = [
  // 79.1
  grammarCloze(
    "u79-1-2",
    "79.1 · trousers / glasses…",
    "The trousers you bought for me __________ fit me.",
    "don't",
    {
      alternatives: ["do not"],
      explanation: "trousers số nhiều → don't.",
    },
  ),
  grammarCloze(
    "u79-1-3",
    "79.1 · trousers / glasses…",
    "The jacket you bought for me __________ fit me.",
    "doesn't",
    {
      alternatives: ["does not"],
      explanation: "jacket số ít → doesn't.",
    },
  ),
  grammarCloze(
    "u79-1-4",
    "79.1 · trousers / glasses…",
    "I need __________ scissors to cut this piece of material.",
    "some",
    {
      explanation: "scissors số nhiều → some scissors.",
    },
  ),
  grammarCloze(
    "u79-1-5",
    "79.1 · trousers / glasses…",
    "I can't find my binoculars. Have you seen __________?",
    "them",
    {
      explanation: "binoculars số nhiều → them.",
    },
  ),
  grammarCloze(
    "u79-1-6",
    "79.1 · trousers / glasses…",
    "I went shopping and bought a __________ of jeans.",
    "pair",
    {
      explanation: "a pair of jeans.",
    },
  ),
  grammarCloze(
    "u79-1-7",
    "79.1 · trousers / glasses…",
    "Where __________ my sunglasses?",
    "are",
    {
      explanation: "sunglasses số nhiều → are.",
    },
  ),
  grammarCloze(
    "u79-1-8",
    "79.1 · trousers / glasses…",
    "I went shopping and bought __________ pair of pyjamas.",
    "a",
    {
      explanation: "a pair of pyjamas.",
    },
  ),

  // 79.2
  grammarCloze(
    "u79-2-2",
    "79.2 · means / series / species…",
    "The bicycle is a __________ of transport.",
    "means",
    {
      explanation: "a means of transport.",
    },
  ),
  grammarCloze(
    "u79-2-3",
    "79.2 · means / series / species…",
    "A lot of American TV __________ are shown in other countries.",
    "series",
    {
      explanation: "series cùng dạng số nhiều.",
    },
  ),
  grammarCloze(
    "u79-2-4",
    "79.2 · means / series / species…",
    "The tiger is an endangered __________.",
    "species",
    {
      explanation: "a species / an endangered species.",
    },
  ),
  grammarCloze(
    "u79-2-6",
    "79.2 · means / series / species…",
    "Fortunately the __________ wasn't as bad as we expected.",
    "news",
    {
      explanation: "news số ít → wasn't.",
    },
  ),
  grammarCloze(
    "u79-2-8",
    "79.2 · means / series / species…",
    "I didn't have my phone, so I had no __________ of contacting you.",
    "means",
    {
      explanation: "no means of contacting…",
    },
  ),

  // 79.3
  grammarCloze(
    "u79-3-2",
    "79.3 · động từ số ít / số nhiều",
    "My new glasses __________ fit very well.",
    "don't",
    {
      alternatives: ["do not"],
      explanation: "glasses số nhiều → don't.",
    },
  ),
  grammarCloze(
    "u79-3-3",
    "79.3 · động từ số ít / số nhiều",
    "The police __________ to interview two men about the robbery.",
    "want",
    {
      explanation: "police số nhiều → want.",
    },
  ),
  grammarCloze(
    "u79-3-5",
    "79.3 · động từ số ít / số nhiều",
    "It's a nice place to visit. The people __________ very friendly.",
    "are",
    {
      explanation: "people số nhiều → are.",
    },
  ),
  grammarCloze(
    "u79-3-7",
    "79.3 · động từ số ít / số nhiều",
    "__________ the police know how the accident happened?",
    "Do",
    {
      alternatives: ["do"],
      explanation: "police số nhiều → Do.",
    },
  ),

  // 79.4 / 79.5
  grammarCloze(
    "u79-4-2",
    "79.4 · số ít với thời gian / số đo",
    "Thirty degrees __________ for Tom. He doesn't like hot weather.",
    "is too hot",
    {
      explanation: "nhiệt độ coi là một đơn vị → is too hot.",
    },
  ),
  grammarCloze(
    "u79-4-3",
    "79.4 · số ít với thời gian / số đo",
    "Ten dollars __________ . We need more than that.",
    "isn't enough money",
    {
      alternatives: ["is not enough money"],
      explanation: "số tiền → isn't enough money.",
    },
  ),
  grammarCloze(
    "u79-5-3",
    "79.5 · sửa lỗi",
    "Susan was wearing __________.",
    "black jeans",
    {
      alternatives: ["wearing black jeans", "some black jeans"],
      explanation: "không: a black jeans → black jeans / a pair of…",
    },
  ),
  grammarCloze(
    "u79-5-4",
    "79.5 · sửa lỗi",
    "I like Martin and Jane. They're very __________.",
    "nice people",
    {
      explanation: "không: nice persons → nice people.",
    },
  ),
];
