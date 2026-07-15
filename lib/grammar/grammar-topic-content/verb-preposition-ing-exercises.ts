import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 62 exercises — Verb + Preposition + -ing (English Grammar in Use · Intermediate).
 */
export const U62_VERB_PREPOSITION_ING_EXERCISES: readonly GrammarExercise[] = [
  // 62.1
  grammarCloze(
    "u62-1-1",
    "62.1 · apologise for + -ing",
    "Our neighbours apologised for __________ so much noise.",
    "making",
    {
      explanation: "apologise for + -ing: making.",
    },
  ),
  grammarCloze(
    "u62-1-2",
    "62.1 · feel like + -ing",
    "I feel lazy. I don't feel like __________ any work.",
    "doing",
    {
      explanation: "feel like doing…",
    },
  ),
  grammarCloze(
    "u62-1-3",
    "62.1 · insist on + -ing",
    "I wanted to go out alone, but Joe insisted on __________ with me.",
    "coming",
    {
      alternatives: ["going"],
      explanation: "insist on coming/going with me.",
    },
  ),
  grammarCloze(
    "u62-1-4",
    "62.1 · think of + -ing",
    "I'm fed up with my job. I'm thinking of __________ something else.",
    "doing",
    {
      alternatives: ["trying"],
      explanation: "thinking of doing/trying something else.",
    },
  ),
  grammarCloze(
    "u62-1-5",
    "62.1 · decide against + -ing",
    "We can't afford a car right now, so we've decided against __________ one.",
    "buying",
    {
      alternatives: ["having"],
      explanation: "decide against buying/having one.",
    },
  ),
  grammarCloze(
    "u62-1-6",
    "62.1 · succeed in + -ing",
    "It took us a long time, but we finally succeeded in __________ the problem.",
    "solving",
    {
      explanation: "succeed in solving…",
    },
  ),
  grammarCloze(
    "u62-1-7",
    "62.1 · dream of + -ing",
    "I've always dreamed of __________ a small house by the sea.",
    "having",
    {
      alternatives: ["buying", "owning"],
      explanation: "dream of having/buying/owning…",
    },
  ),
  grammarCloze(
    "u62-1-8",
    "62.1 · look forward to + -ing",
    "Amy and Sam are coming to visit. I'm looking forward to __________ them again.",
    "seeing",
    {
      explanation: "look forward to seeing…",
    },
  ),

  // 62.2
  grammarCloze(
    "u62-2-1",
    "62.2 · feel like + -ing",
    "I don't feel like __________ this evening. I'm too tired.",
    "going out",
    {
      explanation: "feel like going out.",
    },
  ),
  grammarCloze(
    "u62-2-2",
    "62.2 · suspect of + -ing",
    "The police stopped the car because they suspected the driver __________ it.",
    "of stealing",
    {
      explanation: "suspect somebody of stealing…",
    },
  ),
  grammarCloze(
    "u62-2-3",
    "62.2 · prevent from + -ing",
    "Bad weather prevented the plane __________.",
    "from taking off",
    {
      explanation: "prevent … from taking off.",
    },
  ),
  grammarCloze(
    "u62-2-4",
    "62.2 · think of + -ing",
    "My phone is very old. I'm thinking __________ a new one.",
    "of getting",
    {
      alternatives: ["about getting"],
      explanation: "thinking of/about getting a new one.",
    },
  ),
  grammarCloze(
    "u62-2-5",
    "62.2 · insist on + -ing",
    "I didn't want to hear the story but Dan insisted __________ me anyway.",
    "on telling",
    {
      explanation: "insist on telling me…",
    },
  ),
  grammarCloze(
    "u62-2-6",
    "62.2 · look forward to + -ing",
    "I'm getting hungry. I'm really looking forward __________ something.",
    "to eating",
    {
      explanation: "looking forward to eating…",
    },
  ),
  grammarCloze(
    "u62-2-7",
    "62.2 · apologise for + -ing",
    "I think you should apologise to Sarah __________ so rude.",
    "for being",
    {
      explanation: "apologise to somebody for being…",
    },
  ),
  grammarCloze(
    "u62-2-8",
    "62.2 · stop from + -ing",
    "There's a fence around the lawn to stop people __________ on the grass.",
    "from walking",
    {
      alternatives: ["walking"],
      explanation: "stop people (from) walking…",
    },
  ),
  grammarCloze(
    "u62-2-9",
    "62.2 · thank for + -ing",
    "I can't come to your party, but thank you very much __________ me.",
    "for inviting",
    {
      explanation: "thank somebody for inviting…",
    },
  ),
  grammarCloze(
    "u62-2-10",
    "62.2 · accuse of + -ing",
    "I did my best. Nobody can accuse me of not __________.",
    "trying",
    {
      explanation: "accuse somebody of not trying.",
    },
  ),

  // 62.3
  grammarCloze(
    "u62-3-1",
    "62.3 · congratulate on",
    "Dan: I hear you got married. Congratulations! → Dan congratulated me __________.",
    "on getting married",
    {
      explanation: "congratulate somebody on getting married.",
    },
  ),
  grammarCloze(
    "u62-3-2",
    "62.3 · accuse of",
    "Jane: You don't care about other people. → Jane accused __________.",
    "me of not caring about other people",
    {
      alternatives: ["me of not caring"],
      explanation: "accused me of not caring about other people.",
    },
  ),
];
