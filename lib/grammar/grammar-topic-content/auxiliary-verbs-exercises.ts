import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 51 exercises — Auxiliary verbs (English Grammar in Use · Intermediate).
 * Skip open personal free-response items (51.3 style).
 */
export const U51_AUXILIARY_VERBS_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u51-1-2",
    "51.1 · auxiliary verb",
    "I like hot weather, but Ann __________.",
    "doesn't",
    {
      alternatives: ["doesn't."],
      explanation: "… but Ann doesn't. (= doesn't like hot weather)",
    },
  ),
  grammarCloze(
    "u51-1-3",
    "51.1 · auxiliary verb",
    "'Is Andy here?' 'He __________ five minutes ago, but I think he's gone home now.'",
    "was",
    {
      explanation: "He was (here) five minutes ago.",
    },
  ),
  grammarCloze(
    "u51-1-4",
    "51.1 · auxiliary verb",
    "I haven't travelled much, but Gary __________.",
    "has",
    {
      alternatives: ["has."],
      explanation: "… but Gary has. (= has travelled)",
    },
  ),
  grammarCloze(
    "u51-1-5",
    "51.1 · auxiliary verb",
    "Lisa said she might come tomorrow, but I don't think she __________.",
    "will",
    {
      alternatives: ["will."],
      explanation: "I don't think she will.",
    },
  ),
  grammarCloze(
    "u51-1-6",
    "51.1 · auxiliary verb",
    "Do you think I __________?",
    "should",
    {
      alternatives: ["should?"],
      explanation: "Do you think I should? (= apply for the job)",
    },
  ),
  grammarCloze(
    "u51-1-7",
    "51.1 · auxiliary verb",
    "'Please don't tell anybody.' 'Don't worry. I __________.'",
    "won't",
    {
      alternatives: ["won't."],
      explanation: "I won't. (= won't tell)",
    },
  ),
  grammarCloze(
    "u51-1-8",
    "51.1 · auxiliary verb",
    "'You never listen to me.' 'Yes, I __________!'",
    "do",
    {
      alternatives: ["do!"],
      explanation: "Yes, I do! (phủ nhận lời buộc tội)",
    },
  ),
  grammarCloze(
    "u51-1-9",
    "51.1 · auxiliary verb",
    "I usually work on Saturdays, but last Saturday I __________.",
    "didn't",
    {
      alternatives: ["didn't."],
      explanation: "… but last Saturday I didn't.",
    },
  ),
  grammarCloze(
    "u51-1-10",
    "51.1 · auxiliary verb",
    "'Do you think it's going to rain?' 'It __________ . Take an umbrella.'",
    "might",
    {
      alternatives: ["might."],
      explanation: "It might. Take an umbrella…",
    },
  ),
  grammarCloze(
    "u51-2-3",
    "51.2 · disagree",
    "Amy: 'I like football.' You never agree: __________",
    "Do you? I don't",
    {
      alternatives: [
        "Do you? I don't.",
        "Do you?  I don't.",
      ],
      explanation: "Do you? I don't.",
    },
  ),
  grammarCloze(
    "u51-2-4",
    "51.2 · disagree",
    "Amy: 'I didn't enjoy the film.' You: __________",
    "Didn't you? I did",
    {
      alternatives: ["Didn't you? I did."],
      explanation: "Didn't you? I did.",
    },
  ),
  grammarCloze(
    "u51-2-5",
    "51.2 · disagree",
    "Amy: 'I'm not tired.' You: __________",
    "Aren't you? I am",
    {
      alternatives: ["Aren't you? I am."],
      explanation: "Aren't you? I am.",
    },
  ),
  grammarCloze(
    "u51-2-6",
    "51.2 · disagree",
    "Amy: 'I thought the exam was easy.' You: __________",
    "Did you? I didn't",
    {
      alternatives: ["Did you? I didn't."],
      explanation: "Did you? I didn't.",
    },
  ),
  grammarCloze(
    "u51-4-1",
    "51.4 · I think so / hope not…",
    "Sam: 'Is it going to rain?' (You don't like rain) → __________",
    "I hope not",
    {
      alternatives: ["I hope not."],
      explanation: "I hope not. (không: I don't hope so)",
    },
  ),
  grammarCloze(
    "u51-4-2",
    "51.4 · I think so / hope not…",
    "Sam: 'Do you think you'll get a pay rise?' (You need more money) → __________",
    "I hope so",
    {
      alternatives: ["I hope so."],
      explanation: "I hope so.",
    },
  ),
  grammarCloze(
    "u51-4-3",
    "51.4 · I think so / hope not…",
    "Sam: 'Will John be at the party?' (You can't stand John) → __________",
    "I hope not",
    {
      alternatives: ["I hope not."],
      explanation: "I hope not.",
    },
  ),
  grammarCloze(
    "u51-4-4",
    "51.4 · I think so / hope not…",
    "Sam: 'Is Amy married?' (Probably isn't) → __________",
    "I don't think so",
    {
      alternatives: ["I don't think so."],
      explanation: "I don't think so.",
    },
  ),
  grammarCloze(
    "u51-4-5",
    "51.4 · I think so / hope not…",
    "Sam: 'Does Jane speak Italian?' (Lived in Italy for years) → __________",
    "I suppose so",
    {
      alternatives: ["I suppose so."],
      explanation: "I suppose so.",
    },
  ),
  grammarCloze(
    "u51-4-6",
    "51.4 · I think so / hope not…",
    "Sam: 'Do you have to leave already?' (You do) → __________",
    "I'm afraid so",
    {
      alternatives: ["I'm afraid so.", "I am afraid so", "I am afraid so."],
      explanation: "I'm afraid so.",
    },
  ),
  grammarCloze(
    "u51-4-8",
    "51.4 · I think so / hope not…",
    "Sam: 'Do you have a room for tonight?' (Hotel is full) → __________",
    "I'm afraid not",
    {
      alternatives: ["I'm afraid not.", "I am afraid not", "I am afraid not."],
      explanation: "I'm afraid not.",
    },
  ),
];
