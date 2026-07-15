import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 105 exercises — Comparative 1 (English Grammar in Use · Intermediate).
 */
export const U105_COMPARATIVE_1_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u105-1-2",
    "105.1 · comparative",
    "This coffee is very weak. I like it __________.",
    "stronger",
    { explanation: "weak → so sánh hơn stronger." },
  ),
  grammarCloze(
    "u105-1-3",
    "105.1 · comparative",
    "The town was surprisingly big. I expected it to be __________.",
    "smaller",
    { explanation: "big → mong đợi smaller." },
  ),
  grammarCloze(
    "u105-1-4",
    "105.1 · comparative",
    "The hotel was surprisingly cheap. I expected it to be __________.",
    "more expensive",
    { explanation: "cheap → more expensive." },
  ),
  grammarCloze(
    "u105-1-5",
    "105.1 · comparative",
    "The weather is too cold here. I'd like to live somewhere __________.",
    "warmer",
    {
      alternatives: ["hotter"],
      explanation: "cold → warmer/hotter.",
    },
  ),
  grammarCloze(
    "u105-1-6",
    "105.1 · comparative",
    "Sometimes my job is a bit boring. I'd like to do something __________.",
    "more interesting",
    {
      alternatives: ["more exciting"],
      explanation: "boring → more interesting/exciting.",
    },
  ),
  grammarCloze(
    "u105-1-9",
    "105.1 · comparative",
    "Your work isn't very good. I'm sure you can do __________.",
    "better",
    { explanation: "good → better." },
  ),
  grammarCloze(
    "u105-1-10",
    "105.1 · comparative",
    "Don't worry. The situation isn't so bad. It could be __________.",
    "worse",
    { explanation: "bad → worse." },
  ),
  grammarCloze(
    "u105-1-11",
    "105.1 · comparative",
    "You hardly ever call me. Why don't you call me __________?",
    "more often",
    { explanation: "hardly ever → more often." },
  ),
  grammarCloze(
    "u105-1-12",
    "105.1 · comparative",
    "You're too near the camera. Can you move a bit __________ away?",
    "further",
    {
      alternatives: ["farther"],
      explanation: "near → further/farther away.",
    },
  ),
  grammarCloze(
    "u105-2-3",
    "105.2 · comparative + than",
    "Unfortunately the problem was __________ we thought at first.",
    "more serious than",
    { explanation: "serious → more serious than." },
  ),
  grammarCloze(
    "u105-2-4",
    "105.2 · comparative",
    "You look __________. Have you lost weight?",
    "thinner",
    { explanation: "thin → thinner." },
  ),
  grammarCloze(
    "u105-2-5",
    "105.2 · comparative",
    "We don't have enough space here. We need a __________ apartment.",
    "bigger",
    { explanation: "big → bigger." },
  ),
  grammarCloze(
    "u105-2-7",
    "105.2 · comparative + than",
    "Health and happiness are __________ money.",
    "more important than",
    { explanation: "important → more important than." },
  ),
  grammarCloze(
    "u105-2-8",
    "105.2 · comparative + than",
    "I like living in the country. It's __________ living in a town.",
    "more peaceful than",
    { explanation: "peaceful → more peaceful than." },
  ),
  grammarCloze(
    "u105-2-9",
    "105.2 · comparative",
    "I'm sorry I don't understand. Can you speak __________, please?",
    "more slowly",
    { explanation: "slowly → more slowly." },
  ),
  grammarCloze(
    "u105-3-2",
    "105.3 · more + adj",
    "Sorry about my mistake. I'll try and be more __________ in future.",
    "careful",
    { explanation: "more careful." },
  ),
  grammarCloze(
    "u105-3-3",
    "105.3 · comparative",
    "Your English has improved. It's __________ than it was.",
    "better",
    { explanation: "good → better." },
  ),
  grammarCloze(
    "u105-3-6",
    "105.3 · comparative",
    "I'm a pessimist. I always think things are going to get __________.",
    "worse",
    { explanation: "bad → worse." },
  ),
  grammarCloze(
    "u105-4-2",
    "105.4 · situations",
    "I ran ten kilometres. Dan stopped after eight. I ran __________ Dan.",
    "further than",
    {
      alternatives: ["farther than"],
      explanation: "further/farther than Dan.",
    },
  ),
  grammarCloze(
    "u105-4-5",
    "105.4 · situations",
    "There is always a lot of traffic here, but today it's really bad. The traffic today __________ usual.",
    "is worse than",
    {
      explanation: "The traffic today is worse than usual.",
    },
  ),
];
