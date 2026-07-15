import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 64 exercises — To …, for … and so that ….
 */
export const U64_TO_FOR_AND_SO_THAT_EXERCISES: readonly GrammarExercise[] = [
  // 64.1
  grammarCloze(
    "u64-1-1",
    "64.1 · to + purpose",
    "I shouted __________ people of the danger.",
    "to warn",
    {
      explanation: "I shouted to warn people of the danger.",
    },
  ),
  grammarCloze(
    "u64-1-2",
    "64.1 · to + purpose",
    "I opened the box __________ what was in it.",
    "to see",
    {
      explanation: "I opened the box to see what was in it.",
    },
  ),
  grammarCloze(
    "u64-1-3",
    "64.1 · to + purpose",
    "I moved to a new apartment __________ nearer my friends.",
    "to be",
    {
      explanation: "… to be nearer my friends.",
    },
  ),
  grammarCloze(
    "u64-1-4",
    "64.1 · to + purpose",
    "I called the police __________ the accident.",
    "to report",
    {
      explanation: "… to report the accident.",
    },
  ),
  grammarCloze(
    "u64-1-5",
    "64.1 · to + purpose",
    "I employed an assistant __________ me with my work.",
    "to help",
    {
      explanation: "… to help me with my work.",
    },
  ),

  // 64.2
  grammarCloze(
    "u64-2-1",
    "64.2 · to + V",
    "The president has a team of bodyguards __________ him.",
    "to protect",
    {
      explanation: "bodyguards to protect him.",
    },
  ),
  grammarCloze(
    "u64-2-2",
    "64.2 · to + V",
    "I don't have enough time __________ all the things I have to do.",
    "to do",
    {
      explanation: "enough time to do…",
    },
  ),
  grammarCloze(
    "u64-2-3",
    "64.2 · to + V",
    "Would you like something __________? Coffee? Tea?",
    "to drink",
    {
      explanation: "something to drink.",
    },
  ),
  grammarCloze(
    "u64-2-4",
    "64.2 · to + V",
    "I saw Helen at the party, but I didn't have a chance __________ to her.",
    "to talk",
    {
      alternatives: ["to speak"],
      explanation: "a chance to talk/speak to her.",
    },
  ),
  grammarCloze(
    "u64-2-5",
    "64.2 · to + V",
    "Why are you so scared? There's nothing __________ afraid of.",
    "to be",
    {
      explanation: "nothing to be afraid of.",
    },
  ),

  // 64.3
  grammarCloze(
    "u64-3-1",
    "64.3 · for / to",
    "We stopped __________ petrol.",
    "for",
    {
      explanation: "for + noun: for petrol.",
    },
  ),
  grammarCloze(
    "u64-3-2",
    "64.3 · for / to",
    "We'll need time __________ make a decision.",
    "to",
    {
      explanation: "time to make…",
    },
  ),
  grammarCloze(
    "u64-3-3",
    "64.3 · for / to",
    "I went to the dentist __________ a check-up.",
    "for",
    {
      explanation: "for a check-up.",
    },
  ),
  grammarCloze(
    "u64-3-4",
    "64.3 · for / to",
    "He's very old. He needs somebody __________ take care of him.",
    "to",
    {
      explanation: "somebody to take care of him.",
    },
  ),
  grammarCloze(
    "u64-3-5",
    "64.3 · for / to",
    "I put on my glasses __________ read the letter.",
    "to",
    {
      explanation: "to read = mục đích hành động.",
    },
  ),
  grammarCloze(
    "u64-3-6",
    "64.3 · for / to",
    "Do you wear glasses __________ reading?",
    "for",
    {
      explanation: "for reading = công dụng.",
    },
  ),

  // 64.4
  grammarCloze(
    "u64-4-1",
    "64.4 · so that",
    "I hurried. I didn't want to be late. → I hurried so that I __________ be late.",
    "wouldn't",
    {
      alternatives: ["would not"],
      explanation: "so that I wouldn't be late.",
    },
  ),
  grammarCloze(
    "u64-4-2",
    "64.4 · so that",
    "I wore warm clothes. I didn't want to get cold. → I wore warm clothes so that I __________ get cold.",
    "wouldn't",
    {
      alternatives: ["would not", "wouldn't get/be"],
      explanation: "so that I wouldn't get/be cold.",
    },
  ),
  grammarCloze(
    "u64-4-3",
    "64.4 · so that",
    "I gave Mark my phone number so that he __________ contact me.",
    "could",
    {
      alternatives: ["would be able to"],
      explanation: "so that he could / would be able to contact me.",
    },
  ),
  grammarCloze(
    "u64-4-4",
    "64.4 · so that",
    "We spoke very quietly so that nobody else __________ hear us.",
    "would",
    {
      alternatives: ["could", "would be able to"],
      explanation: "so that nobody else would/could hear us.",
    },
  ),
];
