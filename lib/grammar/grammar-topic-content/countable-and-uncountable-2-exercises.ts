import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 70 exercises — Countable and Uncountable 2 (English Grammar in Use · Intermediate).
 */
export const U70_COUNTABLE_AND_UNCOUNTABLE_2_EXERCISES: readonly GrammarExercise[] = [
  // 70.1 — which sense
  grammarCloze(
    "u70-1-1b",
    "70.1 · countable / uncountable",
    "We live near a busy road so __________.",
    "there's a lot of noise",
    {
      alternatives: ["there is a lot of noise"],
      explanation: "ồn nói chung → a lot of noise (không: a lot of noises).",
    },
  ),
  grammarCloze(
    "u70-1-2a",
    "70.1 · countable / uncountable",
    "__________ comes from the sun.",
    "Light",
    {
      alternatives: ["light"],
      explanation: "ánh sáng nói chung → Light (không: A light).",
    },
  ),
  grammarCloze(
    "u70-1-2b",
    "70.1 · countable / uncountable",
    "I thought there was somebody in the house because there was __________ on inside.",
    "a light",
    {
      explanation: "đèn cụ thể → a light.",
    },
  ),
  grammarCloze(
    "u70-1-3a",
    "70.1 · countable / uncountable",
    "I was in a hurry this morning. I didn't have __________ for breakfast.",
    "time",
    {
      explanation: "thời gian nói chung → time (không: a time).",
    },
  ),
  grammarCloze(
    "u70-1-3b",
    "70.1 · countable / uncountable",
    "We really enjoyed our holiday. We had __________.",
    "a great time",
    {
      explanation: "Have a great time = vui vẻ.",
    },
  ),
  grammarCloze(
    "u70-1-5b",
    "70.1 · countable / uncountable",
    "We have a big garage. There's __________ for two cars.",
    "room",
    {
      explanation: "room = chỗ trống (không đếm được nghĩa này).",
    },
  ),

  // 70.2 — correct form
  grammarCloze(
    "u70-2-2",
    "70.2 · chọn dạng đúng",
    "We were very unfortunate. We had __________.",
    "bad luck",
    {
      explanation: "luck không đếm được → bad luck (không: a bad luck).",
    },
  ),
  grammarCloze(
    "u70-2-3",
    "70.2 · chọn dạng đúng",
    "Our __________ from Paris to Moscow by train was very tiring.",
    "journey",
    {
      explanation: "một chuyến → journey (không: travel trong nghĩa này).",
    },
  ),
  grammarCloze(
    "u70-2-4",
    "70.2 · chọn dạng đúng",
    "When the fire alarm rang, there was __________.",
    "complete chaos",
    {
      explanation: "chaos không đếm được → complete chaos (không: a …).",
    },
  ),
  grammarCloze(
    "u70-2-5",
    "70.2 · chọn dạng đúng",
    "Bad news __________ make people happy.",
    "doesn't",
    {
      alternatives: ["does not"],
      explanation: "news số ít → doesn't (không: don't).",
    },
  ),
  grammarCloze(
    "u70-2-6",
    "70.2 · chọn dạng đúng",
    "There's __________ in this part of the country.",
    "some lovely scenery",
    {
      explanation: "scenery không đếm được → some lovely scenery.",
    },
  ),
  grammarCloze(
    "u70-2-9",
    "70.2 · chọn dạng đúng",
    "The trip took a long time. There was __________.",
    "heavy traffic",
    {
      explanation: "traffic không đếm được → heavy traffic.",
    },
  ),
  grammarCloze(
    "u70-2-10",
    "70.2 · chọn dạng đúng",
    "__________ too long. You should have it cut.",
    "Your hair is",
    {
      alternatives: ["Your hair is too long"],
      explanation: "hair (trên đầu) không đếm được → Your hair is … it.",
    },
  ),

  // 70.3 — word choice
  grammarCloze(
    "u70-3-2",
    "70.3 · điền từ",
    "We have no __________, not even a bed or a table.",
    "furniture",
    {
      explanation: "furniture không số nhiều.",
    },
  ),
  grammarCloze(
    "u70-3-3",
    "70.3 · điền từ",
    "There is room for everybody to sit down. There are plenty of __________.",
    "chairs",
    {
      explanation: "chair đếm được → số nhiều chairs.",
    },
  ),
  grammarCloze(
    "u70-3-5",
    "70.3 · điền từ",
    "Carla's English is better than it was. She's made good __________.",
    "progress",
    {
      explanation: "progress không đếm được, không số nhiều.",
    },
  ),
  grammarCloze(
    "u70-3-7",
    "70.3 · điền từ",
    "I didn't know what I should do, so I asked Chris for __________.",
    "advice",
    {
      explanation: "advice không đếm được (không: an advice).",
    },
  ),
  grammarCloze(
    "u70-3-8",
    "70.3 · điền từ",
    "I don't think Dan should get the job. He doesn't have enough __________.",
    "experience",
    {
      explanation: "kinh nghiệm nghề → experience (không đếm được).",
    },
  ),
  grammarCloze(
    "u70-3-9",
    "70.3 · điền từ",
    "Kate has done many interesting things. She could write a book about her __________.",
    "experiences",
    {
      explanation: "những trải nghiệm cụ thể → experiences (đếm được).",
    },
  ),
  grammarCloze(
    "u70-3-10",
    "70.3 · điền từ",
    "The __________ caused by the storm will cost a lot to repair.",
    "damage",
    {
      explanation: "damage không đếm được.",
    },
  ),
];
