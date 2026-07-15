import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 89 exercises — Both / Neither / Either (English Grammar in Use · Intermediate).
 */
export const U89_BOTH_NEITHER_EITHER_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u89-1-2",
    "89.1 · both/neither/either",
    "'What day is it today – the 18th or the 19th?' '__________. It's the 20th.'",
    "Neither",
    {
      alternatives: ["neither"],
      explanation: "Neither (không phải 18 hay 19).",
    },
  ),
  grammarCloze(
    "u89-1-3",
    "89.1 · both/neither/either",
    "We went to Korea and Japan. We went to __________.",
    "both",
    {
      explanation: "We went to both.",
    },
  ),
  grammarCloze(
    "u89-1-4",
    "89.1 · both/neither/either",
    "'Shall we sit in the corner or by the window?' '__________. I don't mind.'",
    "Either",
    {
      alternatives: ["either"],
      explanation: "Either. I don't mind.",
    },
  ),
  grammarCloze(
    "u89-1-5",
    "89.1 · both/neither/either",
    "'Is Lisa at work or at home?' '__________. She's away on holiday.'",
    "Neither",
    {
      alternatives: ["neither"],
      explanation: "Neither.",
    },
  ),
  grammarCloze(
    "u89-1-6",
    "89.1 · both/neither/either",
    "'Does Kate speak Spanish and Arabic?' 'Yes, she speaks __________ fluently.'",
    "both",
    {
      explanation: "she speaks both fluently.",
    },
  ),
  grammarCloze(
    "u89-2-2",
    "89.2 · either",
    "You can walk along the river or go along the road. You can go __________ way.",
    "either",
    {
      explanation: "either way.",
    },
  ),
  grammarCloze(
    "u89-2-3",
    "89.2 · both",
    "I went to Carl's house twice, but __________ times he wasn't at home.",
    "both",
    {
      explanation: "both times.",
    },
  ),
  grammarCloze(
    "u89-2-4",
    "89.2 · Neither of",
    "__________ Tom's parents is English. His father is Polish and his mother is Italian.",
    "Neither of",
    {
      alternatives: ["neither of"],
      explanation: "Neither of Tom's parents…",
    },
  ),
  grammarCloze(
    "u89-2-5",
    "89.2 · neither / both",
    "Fortunately __________ driver was injured, but __________ cars were badly damaged.",
    "neither ... both",
    {
      alternatives: [
        "neither ... both the",
        "neither ... both of the",
        "neither ... both",
      ],
      explanation: "neither driver… both (the/of the) cars…",
    },
  ),
  grammarCloze(
    "u89-3-2",
    "89.3 · either of them",
    "I was invited to two parties, but I couldn't go to __________.",
    "either of them",
    {
      explanation: "either of them.",
    },
  ),
  grammarCloze(
    "u89-3-3",
    "89.3 · both of them",
    "There were two windows. It was warm, so I opened __________.",
    "both of them",
    {
      explanation: "both of them.",
    },
  ),
  grammarCloze(
    "u89-3-4",
    "89.3 · Neither of us",
    "Sam and I often play tennis, but __________ can play well.",
    "Neither of us",
    {
      alternatives: ["neither of us"],
      explanation: "Neither of us can play well.",
    },
  ),
  grammarCloze(
    "u89-3-5",
    "89.3 · neither of them",
    "I tried two bookshops, but __________ had it.",
    "neither of them",
    {
      explanation: "neither of them had it.",
    },
  ),
  grammarCloze(
    "u89-4-3",
    "89.4 · both…and",
    "It was a boring movie. It was long too. → The movie was __________.",
    "both boring and long",
    {
      explanation: "both boring and long.",
    },
  ),
  grammarCloze(
    "u89-4-4",
    "89.4 · neither…nor",
    "Joe doesn't have a car. Sam doesn't either. → __________ has a car.",
    "Neither Joe nor Sam",
    {
      alternatives: ["Neither Joe nor Sam has", "Neither Joe nor Sam has got"],
      explanation: "Neither Joe nor Sam has (got) a car.",
    },
  ),
  grammarCloze(
    "u89-4-5",
    "89.4 · both…and",
    "Emily speaks German and Russian. → Emily speaks __________.",
    "both German and Russian",
    {
      explanation: "both German and Russian.",
    },
  ),
  grammarCloze(
    "u89-4-6",
    "89.4 · neither…nor",
    "Ben doesn't watch TV and he doesn't read newspapers. → Ben __________.",
    "neither watches TV nor reads newspapers",
    {
      explanation: "neither watches TV nor reads newspapers.",
    },
  ),
  grammarCloze(
    "u89-4-7",
    "89.4 · either…or",
    "That man's name is Richard or Robert. → That man's name is __________.",
    "either Richard or Robert",
    {
      explanation: "either Richard or Robert.",
    },
  ),
  grammarCloze(
    "u89-5-2",
    "89.5 · either / any / none",
    "Sam has two sisters, but I haven't met __________ of them.",
    "either",
    {
      explanation: "either of them (hai người).",
    },
  ),
  grammarCloze(
    "u89-5-3",
    "89.5 · either / any / none",
    "Emily has four brothers, but I haven't met __________ of them.",
    "any",
    {
      explanation: "any of them (>2).",
    },
  ),
];
