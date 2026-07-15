import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 107 exercises — Comparative 3: as … as / than (English Grammar in Use · Intermediate).
 */
export const U107_COMPARATIVE_3_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u107-1-1",
    "107.1 · as … as",
    "I'm tall, but you are taller. I'm not __________ you.",
    "as tall as",
    { explanation: "not as tall as you." },
  ),
  grammarCloze(
    "u107-1-2",
    "107.1 · as … as",
    "My salary is high, but yours is higher. My salary isn't __________.",
    "as high as yours",
    { explanation: "isn't as high as yours." },
  ),
  grammarCloze(
    "u107-1-4",
    "107.1 · as … as",
    "We are busy today, but we were busier yesterday. We aren't __________.",
    "as busy today as we were yesterday",
    {
      alternatives: ["as busy today as yesterday", "as busy as we were yesterday"],
      explanation: "aren't as busy today as (we were) yesterday.",
    },
  ),
  grammarCloze(
    "u107-1-5",
    "107.1 · as … as",
    "I still feel bad, but I felt a lot worse earlier. I don't __________.",
    "feel as bad as I did earlier",
    {
      alternatives: ["feel as bad as I felt earlier"],
      explanation: "don't feel as bad as … earlier.",
    },
  ),
  grammarCloze(
    "u107-2-1",
    "107.2 · rewrite",
    "Jack is younger than he looks. Jack isn't __________.",
    "as old as he looks",
    { explanation: "isn't as old as he looks." },
  ),
  grammarCloze(
    "u107-2-3",
    "107.2 · rewrite",
    "The station was nearer than I thought. The station wasn't __________.",
    "as far as I thought",
    { explanation: "wasn't as far as I thought." },
  ),
  grammarCloze(
    "u107-2-4",
    "107.2 · rewrite",
    "The meal didn't cost as much as I expected. The meal cost __________.",
    "less than I expected",
    { explanation: "cost less than I expected." },
  ),
  grammarCloze(
    "u107-2-5",
    "107.2 · rewrite",
    "I watch TV less than I used to. I don't __________.",
    "watch TV as much as I used to",
    {
      alternatives: ["watch TV as often as I used to"],
      explanation: "don't watch … as much/often as I used to.",
    },
  ),
  grammarCloze(
    "u107-2-8",
    "107.2 · rewrite",
    "There are fewer students in this class than in the other one. There aren't __________.",
    "as many students in this class as in the other one",
    { explanation: "aren't as many … as …" },
  ),
  grammarCloze(
    "u107-3-1",
    "107.3 · as … as",
    "I'm sorry I'm late. I got here __________ I could.",
    "as fast as",
    { explanation: "as fast as I could." },
  ),
  grammarCloze(
    "u107-3-2",
    "107.3 · as … as",
    "It was a difficult question. I answered it __________ I could.",
    "as well as",
    { explanation: "as well as I could." },
  ),
  grammarCloze(
    "u107-3-3",
    "107.3 · as … as",
    "You can stay __________ you like.",
    "as long as",
    { explanation: "as long as you like." },
  ),
  grammarCloze(
    "u107-3-4",
    "107.3 · as … as",
    "I need the information quickly, so let me know __________ possible.",
    "as soon as",
    { explanation: "as soon as possible." },
  ),
  grammarCloze(
    "u107-3-5",
    "107.3 · as … as",
    "I like to keep fit, so I go swimming __________ I can.",
    "as often as",
    { explanation: "as often as I can." },
  ),
  grammarCloze(
    "u107-3-6",
    "107.3 · as … as",
    "I didn't want to wake anybody, so I came in __________ I could.",
    "as quietly as",
    { explanation: "as quietly as I could." },
  ),
  grammarCloze(
    "u107-4-1",
    "107.4 · the same as",
    "David and James are both 22. David __________ James.",
    "is the same age as",
    { explanation: "is the same age as James." },
  ),
  grammarCloze(
    "u107-4-2",
    "107.4 · the same as",
    "You and I both have dark brown hair. Your hair __________ mine.",
    "is the same colour as",
    {
      alternatives: ["is the same color as"],
      explanation: "the same colour as mine.",
    },
  ),
  grammarCloze(
    "u107-4-3",
    "107.4 · the same as",
    "I arrived at 10.25 and so did you. I arrived __________ you.",
    "at the same time as",
    {
      alternatives: ["the same time as"],
      explanation: "(at) the same time as you.",
    },
  ),
  grammarCloze(
    "u107-5-7",
    "107.5 · choose",
    "Your bag is quite light. Mine is __________ as heavy as yours.",
    "twice",
    { explanation: "twice as heavy as." },
  ),
  grammarCloze(
    "u107-5-5",
    "107.5 · choose",
    "This morning there was __________ traffic than usual.",
    "less",
    { explanation: "less traffic than usual." },
  ),
];
