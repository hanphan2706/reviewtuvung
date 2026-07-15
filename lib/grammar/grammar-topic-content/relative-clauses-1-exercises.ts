import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 92 exercises — Relative Clauses 1 (English Grammar in Use · Intermediate).
 */
export const U92_RELATIVE_CLAUSES_1_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u92-1-2",
    "92.1 · who",
    "A customer is someone __________ buys something from a shop.",
    "who",
    {
      alternatives: ["that"],
      explanation: "Người → who/that: someone who buys…",
    },
  ),
  grammarCloze(
    "u92-1-3",
    "92.1 · who",
    "A burglar is someone __________ breaks into a house to steal things.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that + V cho người.",
    },
  ),
  grammarCloze(
    "u92-1-4",
    "92.1 · who",
    "A coward is someone __________ is not brave.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that is not brave.",
    },
  ),
  grammarCloze(
    "u92-1-5",
    "92.1 · who",
    "A tenant is someone __________ pays rent to live somewhere.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that pays rent…",
    },
  ),
  grammarCloze(
    "u92-1-6",
    "92.1 · who",
    "A shoplifter is someone __________ steals from a shop.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that steals from a shop.",
    },
  ),
  grammarCloze(
    "u92-1-7",
    "92.1 · who",
    "A liar is someone __________ doesn't tell the truth.",
    "who",
    {
      alternatives: ["that", "who does not"],
      explanation: "who/that doesn't tell the truth.",
    },
  ),
  grammarCloze(
    "u92-1-8",
    "92.1 · who",
    "A pessimist is someone __________ expects the worst to happen.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that expects the worst…",
    },
  ),
  grammarCloze(
    "u92-2-2",
    "92.2 · combine",
    "A waiter served us. He was impolite. → The waiter __________ served us was impolite and impatient.",
    "who",
    {
      alternatives: ["that"],
      explanation: "The waiter who/that served us…",
    },
  ),
  grammarCloze(
    "u92-2-3",
    "92.2 · combine",
    "A building was destroyed in the fire. It has been rebuilt. → The building __________ was destroyed in the fire has now been rebuilt.",
    "that",
    {
      alternatives: ["which"],
      explanation: "Vật → that/which.",
    },
  ),
  grammarCloze(
    "u92-2-4",
    "92.2 · combine",
    "Some people were arrested. They have been released. → The people __________ were arrested have now been released.",
    "who",
    {
      alternatives: ["that"],
      explanation: "Người → who/that.",
    },
  ),
  grammarCloze(
    "u92-2-5",
    "92.2 · combine",
    "A bus goes to the airport. It runs every half hour. → The bus __________ goes to the airport runs every half hour.",
    "that",
    {
      alternatives: ["which"],
      explanation: "Vật → that/which.",
    },
  ),
  grammarCloze(
    "u92-3-2",
    "92.3 · who/that/which",
    "The movie is about a girl __________ runs away from home.",
    "who",
    {
      alternatives: ["that"],
      explanation: "girl → who/that.",
    },
  ),
  grammarCloze(
    "u92-3-3",
    "92.3 · who/that/which",
    "What happened to the pictures __________ were hanging on the wall?",
    "that",
    {
      alternatives: ["which"],
      explanation: "pictures → that/which.",
    },
  ),
  grammarCloze(
    "u92-3-4",
    "92.3 · who/that/which",
    "A mystery is something __________ cannot be explained.",
    "that",
    {
      alternatives: ["which"],
      explanation: "something → that/which.",
    },
  ),
  grammarCloze(
    "u92-3-5",
    "92.3 · who/that/which",
    "I've heard it's a good hotel, but I don't know anyone __________ has stayed there.",
    "who",
    {
      alternatives: ["that"],
      explanation: "anyone → who/that.",
    },
  ),
  grammarCloze(
    "u92-3-7",
    "92.3 · who/that/which",
    "Albert Einstein was the scientist __________ developed the theory of relativity.",
    "who",
    {
      alternatives: ["that"],
      explanation: "scientist → who/that.",
    },
  ),
  grammarCloze(
    "u92-4-3",
    "92.4 · correct",
    "Sửa: Where's the nearest shop who sells bread? → Where's the nearest shop __________ sells bread?",
    "that",
    {
      alternatives: ["which"],
      explanation: "Vật/shop → that/which (không who).",
    },
  ),
  grammarCloze(
    "u92-4-5",
    "92.4 · correct",
    "Sửa: The driver which caused the accident was fined. → The driver __________ caused the accident was fined £500.",
    "who",
    {
      alternatives: ["that"],
      explanation: "Người → who/that (không which).",
    },
  ),
  grammarCloze(
    "u92-4-7",
    "92.4 · correct",
    "Sửa: We live in a world what is changing. → We live in a world __________ is changing all the time.",
    "that",
    {
      alternatives: ["which"],
      explanation: "không what → that/which.",
    },
  ),
  grammarCloze(
    "u92-4-9",
    "92.4 · correct",
    "Sửa: the horse what won the race → What was the name of the horse __________ won the race?",
    "that",
    {
      alternatives: ["which"],
      explanation: "không what → that/which.",
    },
  ),
];
