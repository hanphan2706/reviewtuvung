import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 73 exercises — The 1 (English Grammar in Use · Intermediate).
 */
export const U73_THE_1_EXERCISES: readonly GrammarExercise[] = [
  // 73.1
  grammarCloze(
    "u73-1-1",
    "73.1 · the / a / −",
    "Our apartment is on the tenth floor. I hope there's __________.",
    "a lift",
    {
      alternatives: ["an elevator"],
      explanation: "lift lần đầu → a lift.",
    },
  ),
  grammarCloze(
    "u73-1-2",
    "73.1 · the / a / −",
    "Did you have a nice holiday? Yes, it was __________ I've ever had.",
    "the best holiday",
    {
      explanation: "siêu cấp → the best holiday.",
    },
  ),
  grammarCloze(
    "u73-1-3a",
    "73.1 · the / a / −",
    "Where's __________?",
    "the nearest shop",
    {
      explanation: "nearest → the nearest shop.",
    },
  ),
  grammarCloze(
    "u73-1-3b",
    "73.1 · the / a / −",
    "There's one at __________ of this street.",
    "the end",
    {
      explanation: "at the end of this street.",
    },
  ),
  grammarCloze(
    "u73-1-6",
    "73.1 · the / a / −",
    "Would you like to travel in space? Yes, I'd love to go to __________.",
    "the moon",
    {
      explanation: "space không the; the moon.",
    },
  ),
  grammarCloze(
    "u73-1-8",
    "73.1 · the / a / −",
    "What's Jupiter? Is it a star? No, it's a planet. It's __________ in the solar system.",
    "the largest planet",
    {
      explanation: "siêu cấp → the largest planet.",
    },
  ),

  // 73.2
  grammarCloze(
    "u73-2-2",
    "73.2 · chọn đúng",
    "Sarah spends most of her free time watching __________.",
    "TV",
    {
      alternatives: ["television"],
      explanation: "watch TV (không: the TV).",
    },
  ),
  grammarCloze(
    "u73-2-3",
    "73.2 · chọn đúng",
    "Do you ever listen to __________?",
    "the radio",
    {
      explanation: "listen to the radio.",
    },
  ),
  grammarCloze(
    "u73-2-4",
    "73.2 · chọn đúng",
    "__________ was on, but nobody was watching it.",
    "The television",
    {
      alternatives: ["the television"],
      explanation: "chiếc TV → The television.",
    },
  ),
  grammarCloze(
    "u73-2-6",
    "73.2 · chọn đúng",
    "It's confusing when two people have __________.",
    "the same name",
    {
      explanation: "the same name.",
    },
  ),
  grammarCloze(
    "u73-2-9",
    "73.2 · chọn đúng",
    "This computer is not connected to __________.",
    "the internet",
    {
      alternatives: ["the Internet"],
      explanation: "the internet.",
    },
  ),
  grammarCloze(
    "u73-2-10a",
    "73.2 · chọn đúng",
    "I lay down on __________ and looked up at the sky.",
    "the ground",
    {
      explanation: "the ground.",
    },
  ),
  grammarCloze(
    "u73-2-11b",
    "73.2 · chọn đúng",
    "The next train to London leaves from __________.",
    "platform 3",
    {
      explanation: "platform + số → không the.",
    },
  ),

  // 73.3 / 73.4
  grammarCloze(
    "u73-3-2",
    "73.3 · sửa / điền",
    "I'm fed up with __________ every day.",
    "doing the same thing",
    {
      alternatives: ["doing the same thing every day"],
      explanation: "the same thing.",
    },
  ),
  grammarCloze(
    "u73-3-3",
    "73.3 · sửa / điền",
    "Room 25 is on __________.",
    "the second floor",
    {
      explanation: "the second floor; Room 25 không the.",
    },
  ),
  grammarCloze(
    "u73-3-5",
    "73.3 · sửa / điền",
    "We had lunch in a nice restaurant by __________.",
    "the sea",
    {
      explanation: "by the sea.",
    },
  ),
  grammarCloze(
    "u73-4-2",
    "73.4 · the nếu cần",
    "There was no wind, so __________ was very calm.",
    "the sea",
    {
      explanation: "the sea.",
    },
  ),
  grammarCloze(
    "u73-4-3",
    "73.4 · the nếu cần",
    "Most of the questions were OK, but I couldn't answer __________.",
    "question 3",
    {
      explanation: "question + số → không the.",
    },
  ),
  grammarCloze(
    "u73-4-4",
    "73.4 · the nếu cần",
    "I'm going to __________ tonight. What are you going to see?",
    "the cinema",
    {
      explanation: "go to the cinema.",
    },
  ),
  grammarCloze(
    "u73-4-7",
    "73.4 · the nếu cần",
    "Flight AB123 to Rome is now boarding at __________.",
    "Gate 24",
    {
      explanation: "Gate + số → không the.",
    },
  ),
];
