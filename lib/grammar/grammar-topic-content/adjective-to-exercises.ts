import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 65 exercises — Adjective + to ….
 */
export const U65_ADJECTIVE_TO_EXERCISES: readonly GrammarExercise[] = [
  // 65.1
  grammarCloze(
    "u65-1-1",
    "65.1 · adj + to",
    "It's hard to understand some things. → Some things are hard __________.",
    "to understand",
    {
      explanation: "Some things are hard to understand.",
    },
  ),
  grammarCloze(
    "u65-1-2",
    "65.1 · adj + to",
    "It was difficult to open the window. → The window was difficult __________.",
    "to open",
    {
      explanation: "The window was difficult to open.",
    },
  ),
  grammarCloze(
    "u65-1-3",
    "65.1 · adj + to",
    "It's impossible to translate some words. → Some words are impossible __________.",
    "to translate",
    {
      explanation: "Some words are impossible to translate.",
    },
  ),
  grammarCloze(
    "u65-1-4",
    "65.1 · adj + to",
    "It's expensive to maintain a car. → A car is expensive __________.",
    "to maintain",
    {
      explanation: "A car is expensive to maintain.",
    },
  ),
  grammarCloze(
    "u65-1-5",
    "65.1 · adj + to",
    "It's not safe to eat this meat. → This meat isn't safe __________.",
    "to eat",
    {
      alternatives: ["to eat."],
      explanation: "This meat isn't safe to eat.",
    },
  ),

  // 65.2
  grammarCloze(
    "u65-2-1",
    "65.2 · adj + noun + to",
    "I couldn't answer the question. → It was a difficult question __________.",
    "to answer",
    {
      explanation: "a difficult question to answer.",
    },
  ),
  grammarCloze(
    "u65-2-2",
    "65.2 · adj + noun + to",
    "It's a very common mistake. → It's an easy mistake __________.",
    "to make",
    {
      explanation: "an easy mistake to make.",
    },
  ),
  grammarCloze(
    "u65-2-3",
    "65.2 · adj + noun + to",
    "I like living in this town. → It's a great place __________.",
    "to live",
    {
      explanation: "a great place to live.",
    },
  ),
  grammarCloze(
    "u65-2-4",
    "65.2 · adj + noun + to",
    "I wonder why she said that. → It was a strange thing __________.",
    "to say",
    {
      explanation: "a strange thing to say.",
    },
  ),

  // 65.3
  grammarCloze(
    "u65-3-1",
    "65.3 · nice of … to",
    "It's nice of Dan and Kate __________ me to their party.",
    "to invite",
    {
      explanation: "nice of somebody to invite…",
    },
  ),
  grammarCloze(
    "u65-3-2",
    "65.3 · glad to",
    "I've been travelling a long time. Now I'm __________ to be back home.",
    "glad",
    {
      explanation: "glad to be back…",
    },
  ),
  grammarCloze(
    "u65-3-3",
    "65.3 · relieved to",
    "I heard about Tom's accident. I was relieved __________ that he's OK.",
    "to hear",
    {
      explanation: "relieved to hear…",
    },
  ),
  grammarCloze(
    "u65-3-4",
    "65.3 · of you to",
    "It was nice __________ to remember my birthday.",
    "of you",
    {
      explanation: "nice of you to…",
    },
  ),
  grammarCloze(
    "u65-3-5",
    "65.3 · disappointed not to",
    "My interview went well. I was disappointed __________ to be offered the job.",
    "not",
    {
      explanation: "disappointed not to be offered…",
    },
  ),

  // 65.4
  grammarCloze(
    "u65-4-1",
    "65.4 · the first to",
    "Nobody spoke before me. I was the first person __________.",
    "to speak",
    {
      explanation: "the first person to speak.",
    },
  ),
  grammarCloze(
    "u65-4-2",
    "65.4 · the last to",
    "Everybody else arrived before Paul. Paul was the last __________.",
    "to arrive",
    {
      alternatives: ["person to arrive", "(person) to arrive"],
      explanation: "Paul was the last (person) to arrive.",
    },
  ),
  grammarCloze(
    "u65-4-3",
    "65.4 · the only to",
    "Emily passed. All the others failed. Emily was the only student __________.",
    "to pass",
    {
      alternatives: ["to pass the exam", "one to pass"],
      explanation: "the only student/one to pass.",
    },
  ),
  grammarCloze(
    "u65-4-4",
    "65.4 · the first to",
    "Neil Armstrong walked on the moon in 1969. He was the first person __________ on the moon.",
    "to walk",
    {
      alternatives: ["man to walk"],
      explanation: "the first person/man to walk on the moon.",
    },
  ),

  // 65.5
  grammarCloze(
    "u65-5-1",
    "65.5 · bound to",
    "Carla is a very good student. She's bound __________ the exam.",
    "to pass",
    {
      explanation: "bound to pass…",
    },
  ),
  grammarCloze(
    "u65-5-2",
    "65.5 · not likely to",
    "I don't think you'll need an umbrella. It __________ rain.",
    "isn't likely to",
    {
      alternatives: ["is not likely to", "It's not likely to", "it's not likely to"],
      explanation: "It isn't / It's not likely to rain.",
    },
  ),
];
