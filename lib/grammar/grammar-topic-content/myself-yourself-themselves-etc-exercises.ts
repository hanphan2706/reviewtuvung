import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 82 exercises — Myself/Yourself/Themselves etc. (English Grammar in Use · Intermediate).
 */
export const U82_MYSELF_YOURSELF_THEMSELVES_ETC_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u82-1-2",
    "82.1 · reflexive",
    "Ben fell down some steps, but fortunately he didn't __________.",
    "hurt himself",
    {
      explanation: "chủ ngữ = tân ngữ → hurt himself.",
    },
  ),
  grammarCloze(
    "u82-1-3",
    "82.1 · reflexive",
    "It isn't Sue's fault. She really shouldn't __________.",
    "blame herself",
    {
      explanation: "blame herself.",
    },
  ),
  grammarCloze(
    "u82-1-4",
    "82.1 · reflexive",
    "Please try and understand how I feel. You have to __________ in my position.",
    "put yourself",
    {
      explanation: "put yourself in my position.",
    },
  ),
  grammarCloze(
    "u82-1-5",
    "82.1 · reflexive",
    "The children had a great time at the beach. They really __________.",
    "enjoyed themselves",
    {
      explanation: "enjoyed themselves.",
    },
  ),
  grammarCloze(
    "u82-1-6",
    "82.1 · reflexive",
    "Be careful! That pan is hot. Don't __________.",
    "burn yourself",
    {
      explanation: "Don't burn yourself.",
    },
  ),
  grammarCloze(
    "u82-1-7",
    "82.1 · reflexive",
    "Sometimes I can't say exactly what I mean. I wish I could __________ better.",
    "express myself",
    {
      explanation: "express myself better.",
    },
  ),
  grammarCloze(
    "u82-2-2",
    "82.2 · me / myself",
    "It's not my fault. You can't blame __________.",
    "me",
    {
      explanation: "blame me (chủ ngữ you ≠ object me theo nghĩa phản thân).",
    },
  ),
  grammarCloze(
    "u82-2-3",
    "82.2 · myself",
    "What I did was really bad. I'm ashamed of __________.",
    "myself",
    {
      explanation: "ashamed of myself.",
    },
  ),
  grammarCloze(
    "u82-2-5",
    "82.2 · yourself",
    "'Can I take another biscuit?' 'Of course. Help __________!'",
    "yourself",
    {
      explanation: "Help yourself! (một người).",
    },
  ),
  grammarCloze(
    "u82-2-7",
    "82.2 · ourselves",
    "Don't worry about us. We can take care of __________.",
    "ourselves",
    {
      explanation: "take care of ourselves.",
    },
  ),
  grammarCloze(
    "u82-2-9",
    "82.2 · themselves",
    "I gave them a key to our house so that they could let __________ in.",
    "themselves",
    {
      explanation: "let themselves in.",
    },
  ),
  grammarCloze(
    "u82-3-3",
    "82.3 · no reflexive",
    "I wasn't very well yesterday, but I __________ much better today.",
    "feel",
    {
      explanation: "feel — không feel myself.",
    },
  ),
  grammarCloze(
    "u82-3-4",
    "82.3 · reflexive",
    "I climbed out of the swimming pool and __________ with a towel.",
    "dried myself",
    {
      explanation: "dried myself (có thể cần towel).",
    },
  ),
  grammarCloze(
    "u82-3-5",
    "82.3 · no reflexive",
    "I tried to study, but I couldn't __________.",
    "concentrate",
    {
      explanation: "concentrate — không concentrate myself.",
    },
  ),
  grammarCloze(
    "u82-3-6",
    "82.3 · reflexive",
    "If somebody attacks you, you have the right to __________.",
    "defend yourself",
    {
      explanation: "defend yourself.",
    },
  ),
  grammarCloze(
    "u82-4-2",
    "82.4 · themselves / each other",
    "If people work too hard, they can make __________ ill.",
    "themselves",
    {
      explanation: "make themselves ill (= tự làm mình ốm).",
    },
  ),
  grammarCloze(
    "u82-4-3",
    "82.4 · each other",
    "I need you and you need me. We need __________.",
    "each other",
    {
      alternatives: ["one another"],
      explanation: "need each other (lẫn nhau).",
    },
  ),
  grammarCloze(
    "u82-4-5",
    "82.4 · themselves",
    "Some people are selfish. They only think of __________.",
    "themselves",
    {
      explanation: "think of themselves.",
    },
  ),
  grammarCloze(
    "u82-5-2",
    "82.5 · emphasis",
    "I didn't buy this cake from a shop. I __________.",
    "made it myself",
    {
      explanation: "I made it myself (nhấn mạnh).",
    },
  ),
  grammarCloze(
    "u82-5-5",
    "82.5 · emphasis",
    "'Who cuts Paul's hair for him?' 'Nobody. He __________.'",
    "cuts it himself",
    {
      explanation: "He cuts it himself.",
    },
  ),
];
