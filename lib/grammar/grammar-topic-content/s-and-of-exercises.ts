import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 81 exercises — 's and of … (English Grammar in Use · Intermediate).
 */
export const U81_S_AND_OF_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u81-1-3",
    "81.1 · -'s",
    "Is this __________? (umbrella belonging to your friend)",
    "your friend's umbrella",
    {
      alternatives: ["your friends umbrella"],
      explanation: "người → your friend's umbrella (không: the umbrella of your friend).",
    },
  ),
  grammarCloze(
    "u81-1-5",
    "81.1 · -'s",
    "I've never met __________.",
    "James's daughter",
    {
      alternatives: ["James' daughter"],
      explanation: "James's daughter (không: the daughter of James).",
    },
  ),
  grammarCloze(
    "u81-1-6",
    "81.1 · -'s",
    "How old is __________?",
    "Helen and Andy's son",
    {
      explanation: "hai người cùng sở hữu → Helen and Andy's son.",
    },
  ),
  grammarCloze(
    "u81-1-9",
    "81.1 · -'s / -s'",
    "__________ are here.",
    "Your children's friends",
    {
      alternatives: ["your children's friends"],
      explanation: "children không hết -s → Children's + friends.",
    },
  ),
  grammarCloze(
    "u81-1-11",
    "81.1 · -s'",
    "__________ is very small.",
    "Our neighbours' garden",
    {
      alternatives: ["our neighbours' garden", "Our neighbor's garden", "our neighbors' garden"],
      explanation: "neighbours số nhiều hết -s → neighbours' garden.",
    },
  ),
  grammarCloze(
    "u81-1-12",
    "81.1 · -'s",
    "__________ is very long.",
    "David's hair",
    {
      alternatives: ["david's hair"],
      explanation: "David's hair (không: the hair of David).",
    },
  ),
  grammarCloze(
    "u81-1-14",
    "81.1 · -'s",
    "I couldn't go to __________.",
    "my best friend's party",
    {
      explanation: "my best friend's party.",
    },
  ),
  grammarCloze(
    "u81-1-16",
    "81.1 · -'s",
    "Have you seen __________?",
    "Ben's parents' car",
    {
      explanation: "Ben's parents' car (= xe của bố mẹ Ben).",
    },
  ),
  grammarCloze(
    "u81-2-2",
    "81.2 · -'s form",
    "It's my __________ birthday tomorrow.",
    "father's",
    {
      explanation: "father's birthday (không: father / fathers').",
    },
  ),
  grammarCloze(
    "u81-2-3",
    "81.2 · no 's",
    "Those __________ look nice. Shall we buy some?",
    "apples",
    {
      explanation: "số nhiều thường → apples (không: apple's).",
    },
  ),
  grammarCloze(
    "u81-2-4",
    "81.2 · -'s",
    "__________ clothes are expensive.",
    "Children's",
    {
      alternatives: ["children's"],
      explanation: "Children's clothes (= clothes for children).",
    },
  ),
  grammarCloze(
    "u81-2-5",
    "81.2 · -'s",
    "Zurich is __________ largest city.",
    "Switzerland's",
    {
      explanation: "địa điểm → «Switzerland's largest city».",
    },
  ),
  grammarCloze(
    "u81-2-6",
    "81.2 · -s'",
    "Your __________ parents are your grandparents.",
    "parents'",
    {
      explanation: "parents' parents (= bố mẹ của bố mẹ bạn).",
    },
  ),
  grammarCloze(
    "u81-2-8",
    "81.2 · -'s",
    "This isn't my coat. It's __________.",
    "someone else's",
    {
      alternatives: ["somebody else's"],
      explanation: "someone else's (= coat của người khác).",
    },
  ),
  grammarCloze(
    "u81-2-9",
    "81.2 · -'s",
    "Have you read any of __________ poems?",
    "Shakespeare's",
    {
      explanation: "Shakespeare's poems.",
    },
  ),
  grammarCloze(
    "u81-3-2",
    "81.3 · time + 's",
    "__________ caused a lot of damage. (the storm last week)",
    "Last week's storm",
    {
      alternatives: ["last week's storm"],
      explanation: "Last week's storm …",
    },
  ),
  grammarCloze(
    "u81-3-3",
    "81.3 · place + 's",
    "__________ has closed down. (the only cinema in the town)",
    "The town's only cinema",
    {
      alternatives: ["the town's only cinema"],
      explanation: "The town's only cinema …",
    },
  ),
  grammarCloze(
    "u81-3-4",
    "81.3 · place + 's",
    "__________ is very changeable.",
    "Britain's weather",
    {
      explanation: "Britain's weather …",
    },
  ),
  grammarCloze(
    "u81-4-2",
    "81.4 · period + '",
    "So it's __________ from my house to the centre. (20 minutes / walk)",
    "twenty minutes' walk",
    {
      alternatives: ["20 minutes' walk"],
      explanation: "twenty minutes' walk.",
    },
  ),
  grammarCloze(
    "u81-4-4",
    "81.4 · period + 's",
    "So last night I only had __________.",
    "an hour's sleep",
    {
      alternatives: ["one hour's sleep"],
      explanation: "an/one hour's sleep.",
    },
  ),
];
