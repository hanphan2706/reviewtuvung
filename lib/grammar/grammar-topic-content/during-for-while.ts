import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 119 — During / For / While.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 12 (for and since); while + -ing (Unit 68B).
 */
export const U119_DURING_FOR_WHILE_TOPIC: GrammarTopicDetail = {
  slug: "u119-during-for-while",
  title: "During / For / While",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 119",
  sourceNote:
    "during + noun (khi nào); for + period (bao lâu); while + S + V. KHÔNG dùng during + khoảng thời gian hay while + will. Nên học kèm for/while và Unit 12.",
  intro:
    "Bài này giúp bạn chọn during khi hỏi khi nào (theo sau là danh từ), for khi hỏi bao lâu, và while khi theo sau là mệnh đề. Nên học kèm for/while và Unit 12.",
  structure: {
    affirmative:
      "during + noun | for + period | while + S + V (present cho tương lai)",
    negative:
      "KHÔNG nói during two hours / during five years → for two hours / for five years | KHÔNG nói while I will be → while I am / while I'm there",
  },
  usagePoints: [
    {
      before: "during = ",
      strong: "khi nào (trong lúc…)",
      after: ": We met nice people during our holiday. It rained during the night.",
    },
    {
      before: "for = ",
      strong: "bao lâu",
      after: ": We watched TV for two hours. (KHÔNG: during two hours)",
    },
    {
      before: "Hỏi ",
      strong: "When? → during",
      after: ": During the movie. / in the night.",
    },
    {
      before: "Hỏi ",
      strong: "How long? → for",
      after: ": For half an hour. / for three days.",
    },
    {
      before: "during + ",
      strong: "noun",
      after: ": during the exam.",
    },
    {
      before: "while + ",
      strong: "S + V",
      after: ": while he was doing the exam.",
    },
    {
      before: "while + ",
      strong: "present",
      after: " khi nói tương lai: I hope the weather is good while I'm there. (KHÔNG: while I will be)",
    },
    {
      before: "",
      strong: "while we were waiting",
      after: "; While you were out…; Alex read while Amy watched TV.",
    },
  ],
  examples: [
    {
      english: "I fell asleep during the movie.",
      vietnamese: "During + danh từ = trong lúc xem phim — hỏi khi nào.",
    },
    {
      english: "It rained for three days without stopping.",
      vietnamese: "For + khoảng thời gian = bao lâu — KHÔNG nói during three days.",
    },
    {
      english: "I fell asleep while I was watching TV.",
      vietnamese: "While + mệnh đề = khi đang xem TV thì ngủ gật.",
    },
    {
      english: "We met a lot of interesting people during our holiday.",
      vietnamese: "During our holiday = trong kỳ nghỉ — theo sau là danh từ.",
    },
    {
      english: "We met a lot of interesting people while we were on holiday.",
      vietnamese: "While we were on holiday = cùng ý nhưng theo sau là mệnh đề.",
    },
    {
      english: "I hope the weather will be good while I'm there.",
      vietnamese: "Nói tương lai dùng present sau while — KHÔNG nói while I will be.",
    },
    {
      english: "What are you going to do while you're waiting?",
      vietnamese: "While you're waiting = trong lúc chờ — present cho tương lai.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 492,
  },
};
