import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 55 exercises — Verb (+ object) + to … (English Grammar in Use · Intermediate).
 */
export const U55_VERB_OBJECT_TO_EXERCISES: readonly GrammarExercise[] = [
  // 55.1
  grammarCloze(
    "u55-1-2",
    "55.1 · want me to …",
    "Do you have enough money, or do you want me __________ you some?",
    "to lend",
    {
      explanation: "want + object + to …: want me to lend you some.",
    },
  ),
  grammarCloze(
    "u55-1-3",
    "55.1 · would you like me to …",
    "Shall I leave the window open, or would you like me __________ it?",
    "to shut",
    {
      explanation: "would like + object + to …: would you like me to shut it.",
    },
  ),
  grammarCloze(
    "u55-1-4",
    "55.1 · would you like me to …",
    "Do you know how to use the printer, or would you like me __________ you?",
    "to show",
    {
      explanation: "would like + object + to …: would you like me to show you.",
    },
  ),
  grammarCloze(
    "u55-1-5",
    "55.1 · want me to …",
    "Did you hear what I said, or do you want me __________ it?",
    "to repeat",
    {
      explanation: "want + object + to …: want me to repeat it.",
    },
  ),
  grammarCloze(
    "u55-1-6",
    "55.1 · want me to …",
    "Can I go now, or do you want me __________?",
    "to wait",
    {
      explanation: "want + object + to …: want me to wait.",
    },
  ),

  // 55.2
  grammarCloze(
    "u55-2-2",
    "55.2 · invite + object + to …",
    "Why don't you come and stay with us? — That would be nice. They invited him __________.",
    "to stay with them",
    {
      explanation: "invite + object + to …: invited him to stay with them.",
    },
  ),
  grammarCloze(
    "u55-2-3",
    "55.2 · remind + object + to …",
    "Don't forget to call Joe. — No, I won't forget. He reminded her __________.",
    "to call Joe",
    {
      explanation: "remind + object + to …: reminded her to call Joe.",
    },
  ),
  grammarCloze(
    "u55-2-4",
    "55.2 · warn + object + to …",
    "Be careful. — Don't worry. I will. She warned __________.",
    "him to be careful",
    {
      explanation: "warn + object + to …: warned him to be careful.",
    },
  ),
  grammarCloze(
    "u55-2-5",
    "55.2 · ask + object + to …",
    "Can you give me a hand? — Sure. He asked __________.",
    "her to give him a hand",
    {
      alternatives: ["her to help him"],
      explanation: "ask + object + to …: asked her to give him a hand.",
    },
  ),

  // 55.3 — rewrite
  grammarCloze(
    "u55-3-2",
    "55.3 · expect + object + to …",
    "I was surprised that it rained. → I didn't expect __________.",
    "it to rain",
    {
      explanation: "expect + object + to …: didn't expect it to rain.",
    },
  ),
  grammarCloze(
    "u55-3-3",
    "55.3 · let + object + V",
    "Don't stop him doing what he wants. → Let __________.",
    "him do what he wants",
    {
      explanation: "let + object + V (không to): Let him do what he wants.",
    },
  ),
  grammarCloze(
    "u55-3-4",
    "55.3 · make + object + V",
    "Tom looks older when he wears glasses. → Tom's glasses make __________.",
    "him look older",
    {
      explanation: "make + object + V (không to): make him look older.",
    },
  ),
  grammarCloze(
    "u55-3-5",
    "55.3 · want + object + to …",
    "I think you should know the truth. → I want __________.",
    "you to know the truth",
    {
      explanation: "want + object + to …: want you to know the truth.",
    },
  ),
  grammarCloze(
    "u55-3-6",
    "55.3 · persuade + object + to …",
    "At first I didn't want to apply for the job, but Sarah persuaded me. → Sarah persuaded __________.",
    "me to apply for the job",
    {
      explanation: "persuade + object + to …: persuaded me to apply for the job.",
    },
  ),
  grammarCloze(
    "u55-3-7",
    "55.3 · advise + object + not to …",
    "My lawyer said I shouldn't say anything to the police. → My lawyer advised __________.",
    "me not to say anything to the police",
    {
      explanation: "advise + object + not to …: advised me not to say anything…",
    },
  ),
  grammarCloze(
    "u55-3-8",
    "55.3 · be warned + not to …",
    "I was told that I shouldn't believe everything he says. → I was warned __________.",
    "not to believe everything he says",
    {
      explanation: "passive warn: was warned not to believe…",
    },
  ),
  grammarCloze(
    "u55-3-9",
    "55.3 · enable + object + to …",
    "If you've got a car, you are able to get around more easily. → Having a car enables __________.",
    "you to get around more easily",
    {
      explanation: "enable + object + to …: enables you to get around more easily.",
    },
  ),

  // 55.4 — choose form
  grammarCloze(
    "u55-4-2",
    "55.4 · advise + object + to …",
    "I'm in a difficult position. What do you advise me __________?",
    "to do",
    {
      explanation: "advise + object + to …: advise me to do (không: do).",
    },
  ),
  grammarCloze(
    "u55-4-3",
    "55.4 · make + object + V",
    "The film was very sad. It made me __________.",
    "cry",
    {
      explanation: "make + object + V (không to): made me cry.",
    },
  ),
  grammarCloze(
    "u55-4-10",
    "55.4 · be allowed + to …",
    "If you enter a country with a tourist visa, you are not allowed __________ there.",
    "to work",
    {
      explanation: "be allowed + to …: are not allowed to work there.",
    },
  ),
];
