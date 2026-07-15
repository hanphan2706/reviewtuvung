import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 76 — The 4.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 73–75 (chuỗi the) và Units 77–78 (tên riêng).
 */
export const U76_THE_4_TOPIC: GrammarTopicDetail = {
  slug: "u76-the-4",
  title: "The 4",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 76",
  sourceNote:
    "the + loài/máy móc/nhạc cụ; the + tính từ (the rich); quốc tịch (the French…). Nên học kèm Units 73–75, 77–78.",
  intro:
    "Unit này giúp bạn nắm The 4: The + loài/máy móc/nhạc cụ; the + tính từ (the rich); quốc tịch (the French…). Nên học kèm Units 73–75 và 77–78.",
  structure: {
    affirmative:
      "the + type (giraffe/telephone/piano) | the + adjective (the rich) | the French / the Chinese | Italians / Mexican people",
    negative:
      "no the olds / a rich | no a French (alone) | man (= humans) without the",
  },
  usagePoints: [
    {
      before: "the + danh từ = ",
      strong: "loại",
      after: ": The giraffe is the tallest animal. When was the camera invented?",
    },
    {
      before: "Nhạc cụ: ",
      strong: "play the piano / the guitar",
      after: "; có chiếc đàn → a piano.",
    },
    {
      before: "man không the = ",
      strong: "loài người",
      after: ": the origins of man.",
    },
    {
      before: "the + tính từ = ",
      strong: "nhóm người",
      after: ": the rich, the unemployed, the injured (số nhiều).",
    },
    {
      before: "the French / the English; ",
      strong: "the Chinese / the Swiss",
      after: "; Italians / Brazilians (thường không the).",
    },
    {
      before: "Một người: ",
      strong: "a French woman / a German",
      after: " — không: a French / a rich.",
    },
  ],
  examples: [
    {
      english: "The giraffe is the tallest of all animals. The dollar is the currency of the United States.",
      vietnamese: "the = loại động vật / loại tiền.",
    },
    {
      english: "Can you play the guitar? I'd like to have a piano.",
      vietnamese: "chơi nhạc cụ → the; sở hữu một cái → a.",
    },
    {
      english: "Do you think the rich should pay higher taxes?",
      vietnamese: "the rich = người giàu (nhóm).",
    },
    {
      english: "The French are famous for their food.",
      vietnamese: "the + tính từ quốc tịch (-ch).",
    },
    {
      english: "Italians are very friendly. / Italian people are very friendly.",
      vietnamese: "quốc tịch -s thường không the; hoặc adj + people.",
    },
    {
      english: "I met a French woman / an English guy.",
      vietnamese: "Một người: a + nationality (+ noun).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
