import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 69 exercises — Countable and Uncountable 1 (English Grammar in Use · Intermediate).
 */
export const U69_COUNTABLE_AND_UNCOUNTABLE_1_EXERCISES: readonly GrammarExercise[] = [
  // 69.1 — a/an where necessary
  grammarCloze(
    "u69-1-3",
    "69.1 · a/an",
    "We went to __________ last weekend. (very nice restaurant)",
    "a very nice restaurant",
    {
      explanation: "restaurant đếm được số ít → a very nice restaurant.",
    },
  ),
  grammarCloze(
    "u69-1-5",
    "69.1 · a/an",
    "I use __________ to brush my teeth.",
    "a toothbrush",
    {
      explanation: "toothbrush đếm được số ít → a toothbrush.",
    },
  ),
  grammarCloze(
    "u69-1-6",
    "69.1 · a/an",
    "Can you tell me if there's __________ near here?",
    "a bank",
    {
      explanation: "bank đếm được số ít → a bank.",
    },
  ),
  grammarCloze(
    "u69-1-7",
    "69.1 · a/an",
    "My brother works for __________.",
    "an insurance company",
    {
      explanation: "insurance bắt đầu bằng nguyên âm → an insurance company.",
    },
  ),
  grammarCloze(
    "u69-1-9",
    "69.1 · a/an",
    "When we were in Rome, we stayed in __________.",
    "a big hotel",
    {
      explanation: "hotel đếm được số ít → a big hotel.",
    },
  ),
  grammarCloze(
    "u69-1-10",
    "69.1 · a/an",
    "If you have __________, I'll try and help you.",
    "a problem",
    {
      explanation: "problem đếm được số ít → a problem.",
    },
  ),
  grammarCloze(
    "u69-1-11",
    "69.1 · a/an",
    "I like your suggestion. It's __________.",
    "an interesting idea",
    {
      explanation: "interesting bắt đầu bằng nguyên âm → an interesting idea.",
    },
  ),
  grammarCloze(
    "u69-1-16",
    "69.1 · a/an",
    "Does this city have __________?",
    "an airport",
    {
      explanation: "airport bắt đầu bằng nguyên âm → an airport.",
    },
  ),

  // 69.2 — a/an or bare uncountable
  grammarCloze(
    "u69-2-3",
    "69.2 · a/an hoặc uncountable",
    "I couldn't get into the house. I didn't have __________.",
    "a key",
    {
      explanation: "key đếm được → a key.",
    },
  ),
  grammarCloze(
    "u69-2-4",
    "69.2 · a/an hoặc uncountable",
    "It's very warm today. Why are you wearing __________?",
    "a coat",
    {
      explanation: "coat đếm được → a coat.",
    },
  ),
  grammarCloze(
    "u69-2-5",
    "69.2 · a/an hoặc uncountable",
    "Would you like __________ in your drink?",
    "ice",
    {
      explanation: "ice không đếm được → không a/an.",
    },
  ),
  grammarCloze(
    "u69-2-6",
    "69.2 · a/an hoặc uncountable",
    "Are you hungry? Have __________!",
    "a biscuit",
    {
      explanation: "biscuit đếm được → a biscuit.",
    },
  ),
  grammarCloze(
    "u69-2-7",
    "69.2 · a/an hoặc uncountable",
    "Our lives would be very difficult without __________.",
    "electricity",
    {
      explanation: "electricity không đếm được → không a/an.",
    },
  ),
  grammarCloze(
    "u69-2-10",
    "69.2 · a/an hoặc uncountable",
    "The heart pumps __________ through the body.",
    "blood",
    {
      explanation: "blood không đếm được → không a/an.",
    },
  ),
  grammarCloze(
    "u69-2-12",
    "69.2 · a/an hoặc uncountable",
    "I had __________ for a job yesterday. It went quite well.",
    "an interview",
    {
      explanation: "interview đếm được, bắt đầu bằng nguyên âm → an interview.",
    },
  ),

  // 69.3 — plural / a-an / bare
  grammarCloze(
    "u69-3-2",
    "69.3 · số nhiều / a-an",
    "There are seven __________ in a week.",
    "days",
    {
      explanation: "sau số → số nhiều: days.",
    },
  ),
  grammarCloze(
    "u69-3-3",
    "69.3 · số nhiều / a-an",
    "A vegetarian is a person who doesn't eat __________.",
    "meat",
    {
      explanation: "meat không đếm được → không a/an, không số nhiều.",
    },
  ),
  grammarCloze(
    "u69-3-4",
    "69.3 · số nhiều / a-an",
    "Outside the cinema there was __________ of people waiting to see the film.",
    "a queue",
    {
      explanation: "a queue of people.",
    },
  ),
  grammarCloze(
    "u69-3-10",
    "69.3 · số nhiều / a-an",
    "I think it's going to rain. Do you have __________ I could borrow?",
    "an umbrella",
    {
      explanation: "umbrella đếm được → an umbrella.",
    },
  ),
  grammarCloze(
    "u69-3-11",
    "69.3 · số nhiều / a-an",
    "How many __________ can you speak?",
    "languages",
    {
      explanation: "How many + số nhiều: languages.",
    },
  ),
];
