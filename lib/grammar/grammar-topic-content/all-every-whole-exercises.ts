import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 90 exercises — All, Every, Whole (English Grammar in Use · Intermediate).
 */
export const U90_ALL_EVERY_WHOLE_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u90-1-3",
    "90.1 · everybody / everything / all",
    "__________ has their faults. Nobody is perfect.",
    "Everybody",
    {
      alternatives: ["Everyone", "everybody", "everyone"],
      explanation: "Everybody/Everyone has their faults.",
    },
  ),
  grammarCloze(
    "u90-1-4",
    "90.1 · everybody / everything / all",
    "Nothing has changed. __________ is the same as it was.",
    "Everything",
    {
      alternatives: ["everything"],
      explanation: "Everything is the same…",
    },
  ),
  grammarCloze(
    "u90-1-5",
    "90.1 · everybody / everything / all",
    "Kate told me __________ about her new job.",
    "all",
    {
      alternatives: ["everything"],
      explanation: "told me all / everything about…",
    },
  ),
  grammarCloze(
    "u90-1-7",
    "90.1 · everybody / everything / all",
    "Why are you always thinking about money? Money isn't __________.",
    "everything",
    {
      explanation: "Money isn't everything.",
    },
  ),
  grammarCloze(
    "u90-1-8",
    "90.1 · everybody / everything / all",
    "I'm really exhausted. __________ I want to do is sleep.",
    "All",
    {
      alternatives: ["all"],
      explanation: "All I want to do is sleep.",
    },
  ),
  grammarCloze(
    "u90-1-10",
    "90.1 · everybody / everything / all",
    "Amy didn't say where she was going. __________ she said was that she was going away.",
    "All",
    {
      alternatives: ["all"],
      explanation: "All she said was…",
    },
  ),
  grammarCloze(
    "u90-1-12",
    "90.1 · everybody / everything / all",
    "We all did well. __________ in our class passed.",
    "Everybody",
    {
      alternatives: ["Everyone", "everybody", "everyone"],
      explanation: "Everybody/Everyone in our class passed.",
    },
  ),
  grammarCloze(
    "u90-1-13",
    "90.1 · all of",
    "We all did well. __________ of us passed.",
    "All",
    {
      alternatives: ["all"],
      explanation: "All of us passed.",
    },
  ),
  grammarCloze(
    "u90-2-2",
    "90.2 · whole",
    "Everyone in the team played well. → __________ played well.",
    "The whole team",
    {
      explanation: "The whole team played well.",
    },
  ),
  grammarCloze(
    "u90-2-3",
    "90.2 · whole",
    "Paul finished a box of chocolates. He ate __________.",
    "the whole box",
    {
      alternatives: ["the whole box of chocolates"],
      explanation: "He ate the whole box (of chocolates).",
    },
  ),
  grammarCloze(
    "u90-2-4",
    "90.2 · whole",
    "The police searched everywhere, every room. They searched __________.",
    "the whole house",
    {
      explanation: "They searched the whole house.",
    },
  ),
  grammarCloze(
    "u90-2-6",
    "90.2 · whole",
    "Sarah worked from early morning until late evening. Sarah worked __________.",
    "the whole day",
    {
      explanation: "worked the whole day.",
    },
  ),
  grammarCloze(
    "u90-2-8",
    "90.2 · all",
    "Sarah worked from early morning until late evening. → Sarah worked __________.",
    "all day",
    {
      explanation: "worked all day (không: all the day).",
    },
  ),
  grammarCloze(
    "u90-2-9",
    "90.2 · all",
    "It rained from the beginning of the week to the end. → It rained __________.",
    "all week",
    {
      explanation: "It rained all week.",
    },
  ),
  grammarCloze(
    "u90-3-2",
    "90.3 · every",
    "Tom is ill. He has to take his medicine __________.",
    "every four hours",
    {
      explanation: "every four hours.",
    },
  ),
  grammarCloze(
    "u90-3-3",
    "90.3 · every",
    "The Olympic Games take place __________.",
    "every four years",
    {
      explanation: "every four years.",
    },
  ),
  grammarCloze(
    "u90-3-4",
    "90.3 · every",
    "A plane flies over our house __________.",
    "every five minutes",
    {
      explanation: "every five minutes.",
    },
  ),
  grammarCloze(
    "u90-4-2",
    "90.4 · every / all / whole",
    "Eve works __________ except Sunday.",
    "every day",
    {
      explanation: "every day (không: all days).",
    },
  ),
  grammarCloze(
    "u90-4-4",
    "90.4 · every / all / whole",
    "It was a terrible fire. __________ was destroyed.",
    "The whole building",
    {
      alternatives: ["the whole building"],
      explanation: "The whole building…",
    },
  ),
  grammarCloze(
    "u90-4-5",
    "90.4 · every / all / whole",
    "It's a very sad song. __________ I hear it, it makes me cry.",
    "Every time",
    {
      alternatives: ["every time"],
      explanation: "Every time I hear it…",
    },
  ),
];
