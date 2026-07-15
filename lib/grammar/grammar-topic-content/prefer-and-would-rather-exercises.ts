import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 59 exercises — Prefer and Would Rather (English Grammar in Use · Intermediate).
 */
export const U59_PREFER_AND_WOULD_RATHER_EXERCISES: readonly GrammarExercise[] = [
  // 59.1
  grammarCloze(
    "u59-1-2",
    "59.1 · prefer A to B",
    "basketball / football → I prefer __________.",
    "basketball to football",
    {
      explanation: "prefer A to B: prefer basketball to football.",
    },
  ),
  grammarCloze(
    "u59-1-3",
    "59.1 · prefer doing to doing",
    "going to the cinema / watching movies at home → I prefer going to the cinema to __________.",
    "watching movies at home",
    {
      explanation: "prefer doing A to doing B.",
    },
  ),
  grammarCloze(
    "u59-1-4",
    "59.1 · prefer doing to doing",
    "being very busy / having nothing to do → I prefer being very busy to __________.",
    "having nothing to do",
    {
      explanation: "prefer being very busy to having nothing to do.",
    },
  ),
  grammarCloze(
    "u59-1-6",
    "59.1 · prefer to … rather than",
    "going to the cinema / watching movies at home → I prefer to go to the cinema rather than __________.",
    "watch movies at home",
    {
      alternatives: ["watching movies at home"],
      explanation: "prefer to do rather than (do): rather than watch…",
    },
  ),

  // 59.2
  grammarCloze(
    "u59-2-1",
    "59.2 · would rather + V",
    "Shall we walk home? — I'd rather __________ a taxi.",
    "get",
    {
      explanation: "I'd rather + V (không to): I'd rather get a taxi.",
    },
  ),
  grammarCloze(
    "u59-2-3",
    "59.2 · would prefer + to …",
    "Would you like to watch TV? — I'd __________ to listen to some music.",
    "prefer",
    {
      explanation: "I'd prefer to listen…",
    },
  ),
  grammarCloze(
    "u59-2-4",
    "59.2 · would rather + V",
    "Do you want to go to a restaurant? — I'd rather __________ at home.",
    "eat",
    {
      alternatives: ["stay"],
      explanation: "I'd rather eat/stay at home.",
    },
  ),
  grammarCloze(
    "u59-2-6",
    "59.2 · would prefer + to …",
    "What about a game of tennis? — I'd prefer __________ for a swim.",
    "to go",
    {
      explanation: "I'd prefer to go for a swim.",
    },
  ),
  grammarCloze(
    "u59-2-9",
    "59.2 · would rather + V",
    "Do you want me to come with you? — I'd rather __________ alone.",
    "go",
    {
      explanation: "I'd rather go alone.",
    },
  ),
  grammarCloze(
    "u59-2-11",
    "59.2 · would rather … than",
    "I'd rather __________ some music than watch TV.",
    "listen to",
    {
      explanation: "I'd rather listen to some music than watch TV.",
    },
  ),
  grammarCloze(
    "u59-2-12",
    "59.2 · would prefer … rather than",
    "I'd prefer to eat at home rather than __________ to a restaurant.",
    "go",
    {
      alternatives: ["going"],
      explanation: "prefer to … rather than (go): rather than go to a restaurant.",
    },
  ),
  grammarCloze(
    "u59-2-13",
    "59.2 · would rather … than",
    "I'd rather go for a swim than __________ tennis.",
    "play",
    {
      alternatives: ["have a game of"],
      explanation: "I'd rather go for a swim than play tennis.",
    },
  ),

  // 59.3 — I'd rather somebody did
  grammarCloze(
    "u59-3-2",
    "59.3 · would rather + past",
    "Are you going to pay the bill or would you rather I __________ it?",
    "paid",
    {
      explanation: "I'd rather + S + past: would you rather I paid it?",
    },
  ),
  grammarCloze(
    "u59-3-3",
    "59.3 · would rather + past",
    "Are you going to do the shopping or would you rather I __________ it?",
    "did",
    {
      explanation: "would you rather I did it?",
    },
  ),
  grammarCloze(
    "u59-3-4",
    "59.3 · would rather + past",
    "Are you going to phone Tina or would you rather I __________ her?",
    "phoned",
    {
      explanation: "would you rather I phoned her?",
    },
  ),

  // 59.4
  grammarCloze(
    "u59-4-2",
    "59.4 · would rather + past",
    "You can stay here if you want to, but I'd rather you __________ with us.",
    "came",
    {
      explanation: "I'd rather you came with us. (past = present meaning)",
    },
  ),
  grammarCloze(
    "u59-4-3",
    "59.4 · would rather not + V",
    "I don't like this programme. I'd rather not __________ it.",
    "watch",
    {
      explanation: "I'd rather not + V: I'd rather not watch it.",
    },
  ),
  grammarCloze(
    "u59-4-5",
    "59.4 · would rather + didn't",
    "This is a private matter. I'd rather you __________ tell anybody else.",
    "didn't",
    {
      explanation: "I'd rather you didn't tell anybody else.",
    },
  ),
  grammarCloze(
    "u59-4-7",
    "59.4 · would prefer + to …",
    "I don't want to go to the match. I'd prefer __________ it on TV.",
    "to watch",
    {
      explanation: "I'd prefer to watch it on TV.",
    },
  ),
  grammarCloze(
    "u59-4-10",
    "59.4 · prefer to … rather than",
    "I'd prefer to go to the beach __________ go shopping.",
    "rather than",
    {
      explanation: "prefer to … rather than …: rather than go shopping.",
    },
  ),
];
