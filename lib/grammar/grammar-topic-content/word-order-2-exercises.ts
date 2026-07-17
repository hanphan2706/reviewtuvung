import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 110 exercises — Word order 2: adverbs with the verb (English Grammar in Use · Intermediate).
 * 110.1: wrong-order source. 110.2: adverb in brackets. 110.3: jumbled words in brackets.
 */
export const U110_WORD_ORDER_2_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u110-1-1",
    "110.1 · adverb position",
    "Wrong: Helen drives always to work. → Helen __________ to work.",
    "always drives",
    { explanation: "always trước động từ thường: always drives." },
  ),
  grammarCloze(
    "u110-1-3",
    "110.1 · adverb position",
    "Wrong: I have usually a shower in the morning. → I __________ a shower in the morning.",
    "usually have",
    { explanation: "usually trước have: I usually have…" },
  ),
  grammarCloze(
    "u110-1-5",
    "110.1 · adverb position",
    "Wrong: Steve gets hardly ever angry. → Steve __________ angry.",
    "hardly ever gets",
    { explanation: "hardly ever trước gets." },
  ),
  grammarCloze(
    "u110-1-6",
    "110.1 · adverb position",
    "Wrong: I called him and I sent also an email. → I called him and I __________ an email.",
    "also sent",
    { explanation: "also trước sent (không: sent also)." },
  ),
  grammarCloze(
    "u110-1-7",
    "110.1 · adverb position",
    "Wrong: I have always to repeat things. → I __________ repeat things.",
    "always have to",
    { explanation: "always trước have to (không: have always to)." },
  ),
  grammarCloze(
    "u110-1-8",
    "110.1 · adverb position",
    "Wrong: I never have worked in a factory. → I __________ in a factory.",
    "have never worked",
    {
      alternatives: ["I've never worked", "never have worked"],
      explanation: "I've never worked / I have never worked.",
    },
  ),
  grammarCloze(
    "u110-1-10",
    "110.1 · adverb position",
    "Wrong: When I arrived, my friends already were there. → When I arrived, my friends __________ there.",
    "were already",
    {
      alternatives: ["were there already"],
      explanation: "were already there / were there already.",
    },
  ),
  grammarCloze(
    "u110-2-1",
    "110.2 · rewrite with adverb",
    "Clare doesn't __________ drive to work. (usually)",
    "usually",
    { explanation: "doesn't usually drive." },
  ),
  grammarCloze(
    "u110-2-2",
    "110.2 · rewrite with adverb",
    "Katherine is __________ very generous. (always)",
    "always",
    { explanation: "is always very generous." },
  ),
  grammarCloze(
    "u110-2-4",
    "110.2 · rewrite with adverb",
    "Do you __________ watch TV in the evenings? (always)",
    "always",
    { explanation: "Do you always watch…?" },
  ),
  grammarCloze(
    "u110-2-5",
    "110.2 · rewrite with adverb",
    "Martin is learning Spanish and he is __________ learning Japanese. (also)",
    "also",
    { explanation: "he is also learning Japanese." },
  ),
  grammarCloze(
    "u110-2-7a",
    "110.2 · probably",
    "The new hotel is __________ expensive. (probably)",
    "probably",
    { explanation: "is probably expensive." },
  ),
  grammarCloze(
    "u110-2-8b",
    "110.2 · probably",
    "I __________ can't help you. (probably)",
    "probably",
    {
      alternatives: ["I probably won't be able to help you"],
      explanation: "I probably can't… (probably trước phủ định).",
    },
  ),
  grammarCloze(
    "u110-3-1",
    "110.3 · order words",
    "What's her name again? I __________ it. (remember / I / never / can)",
    "can never remember",
    { explanation: "can never remember." },
  ),
  grammarCloze(
    "u110-3-4",
    "110.3 · order words",
    "Mark and Amy __________ in Manchester. (both / were / born)",
    "were both born",
    { explanation: "were both born." },
  ),
  grammarCloze(
    "u110-3-5",
    "110.3 · order words",
    "Lisa is a good pianist. She __________ very well. (sing / she / also / can)",
    "can also sing",
    { explanation: "can also sing." },
  ),
  grammarCloze(
    "u110-3-8",
    "110.3 · order words",
    "We haven't moved. We __________ in the same place. (we / still / are / living)",
    "are still living",
    {
      alternatives: ["'re still living"],
      explanation: "are still living.",
    },
  ),
  grammarCloze(
    "u110-3-11",
    "110.3 · order words",
    "Thanks for the invitation, but I __________ able to come to the party. (probably / I / be / won't)",
    "probably won't be",
    {
      explanation: "I probably won't be (không: won't probably).",
    },
  ),
  grammarCloze(
    "u110-3-13",
    "110.3 · order words",
    "Helen goes away a lot. She __________ at home. (is / hardly ever / she)",
    "is hardly ever",
    {
      alternatives: ["'s hardly ever"],
      explanation: "is hardly ever at home.",
    },
  ),
  grammarCloze(
    "u110-3-9",
    "110.3 · order words",
    "This shop is always busy. You __________ a long time to be served. (have / you / always / to wait)",
    "always have to wait",
    { explanation: "always have to wait." },
  ),
];
