import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 94 exercises — Relative Clauses 3 (English Grammar in Use · Intermediate).
 */
export const U94_RELATIVE_CLAUSES_3_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u94-1-2",
    "94.1 · who / whose",
    "I met a man __________ wife is an English teacher.",
    "whose",
    {
      explanation: "whose wife = vợ anh ấy.",
    },
  ),
  grammarCloze(
    "u94-1-3",
    "94.1 · who / whose",
    "I met a woman __________ owns a restaurant.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who owns… (chính cô ấy sở hữu).",
    },
  ),
  grammarCloze(
    "u94-1-4",
    "94.1 · who / whose",
    "I met somebody __________ ambition is to climb Mount Everest.",
    "whose",
    {
      explanation: "whose ambition…",
    },
  ),
  grammarCloze(
    "u94-1-5",
    "94.1 · who / whose",
    "I met a couple __________ have just got married.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who have just got married.",
    },
  ),
  grammarCloze(
    "u94-1-6",
    "94.1 · who / whose",
    "I met somebody __________ parents used to work in a circus.",
    "whose",
    {
      explanation: "whose parents…",
    },
  ),
  grammarCloze(
    "u94-2-2a",
    "94.2 · whom (formal)",
    "more formal: I went to see a lawyer __________ a friend of mine recommended.",
    "whom",
    {
      explanation: "whom = tân ngữ (trang trọng).",
    },
  ),
  grammarCloze(
    "u94-2-2b",
    "94.2 · without whom",
    "less formal (omit relative pronoun): I went to see a lawyer a friend of mine __________.",
    "recommended",
    {
      alternatives: ["had recommended"],
      explanation: "Bỏ whom: a lawyer a friend recommended.",
    },
  ),
  grammarCloze(
    "u94-2-3a",
    "94.2 · to whom",
    "more formal: The person to __________ I spoke wasn't very helpful.",
    "whom",
    {
      explanation: "to whom (trang trọng).",
    },
  ),
  grammarCloze(
    "u94-2-4a",
    "94.2 · with whom",
    "more formal: The woman with __________ Tom was in love wasn't in love with him.",
    "whom",
    {
      explanation: "with whom Tom was in love…",
    },
  ),
  grammarCloze(
    "u94-3-2",
    "94.3 · who/whom/whose/where",
    "A cemetery is a place __________ people are buried.",
    "where",
    {
      explanation: "where = nơi.",
    },
  ),
  grammarCloze(
    "u94-3-3",
    "94.3 · who/whom/whose/where",
    "A pacifist is a person __________ believes that all wars are wrong.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that believes…",
    },
  ),
  grammarCloze(
    "u94-3-4",
    "94.3 · who/whom/whose/where",
    "An orphan is a child __________ parents are dead.",
    "whose",
    {
      explanation: "whose parents…",
    },
  ),
  grammarCloze(
    "u94-3-5",
    "94.3 · who/whom/whose/where",
    "What's the name of the hotel __________ your parents are staying?",
    "where",
    {
      explanation: "where your parents are staying.",
    },
  ),
  grammarCloze(
    "u94-3-6",
    "94.3 · who/whom/whose/where",
    "This school is only for children __________ first language is not English.",
    "whose",
    {
      explanation: "whose first language…",
    },
  ),
  grammarCloze(
    "u94-3-7",
    "94.3 · who/whom/whose/where",
    "The person from __________ I bought my car is a friend of my father's.",
    "whom",
    {
      explanation: "from whom (giới từ + whom).",
    },
  ),
  grammarCloze(
    "u94-3-8",
    "94.3 · who/whom/whose/where",
    "I live in a friendly village __________ everybody knows everybody else.",
    "where",
    {
      explanation: "where everybody knows…",
    },
  ),
  grammarCloze(
    "u94-1-1",
    "94.1 · whose",
    "I met somebody __________ mother writes detective stories.",
    "whose",
    {
      explanation: "whose mother…",
    },
  ),
  grammarCloze(
    "u94-4-2",
    "94.4 · the reason",
    "The reason __________ was that the salary was too low. (I left my job)",
    "I left my job",
    {
      alternatives: [
        "that I left my job",
        "why I left my job",
        "I left my job",
      ],
      explanation: "The reason (why/that) I left my job…",
    },
  ),
  grammarCloze(
    "u94-4-5",
    "94.4 · the reason",
    "The reason __________ is that neither of them can drive. (they don't have a car)",
    "they don't have a car",
    {
      alternatives: [
        "that they don't have a car",
        "why they don't have a car",
        "they do not have a car",
      ],
      explanation: "The reason (why/that) they don't have a car…",
    },
  ),
  grammarCloze(
    "u94-2-3b",
    "94.2 · less formal",
    "less formal: The person __________ wasn't very helpful. (I spoke to him)",
    "I spoke to",
    {
      alternatives: [
        "who I spoke to",
        "that I spoke to",
        "I spoke to",
      ],
      explanation: "The person I spoke to…",
    },
  ),
];
