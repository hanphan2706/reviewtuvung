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
    "during + noun (khi nào); for + period (bao lâu); while + S + V. Nên học kèm for/while và Unit 12.",
  intro:
    "Unit này giúp bạn nắm During / For / While: During + noun (khi nào); for + period (bao lâu); while + S + V. Nên học kèm for/while và Unit 12.",
  structure: {
    affirmative:
      "during + noun | for + period | while + S + V (present cho tương lai)",
    negative:
      "không: during two hours / during five years | không: while + will…",
  },
  usagePoints: [
    {
      before: "during = ",
      strong: "khi nào (trong lúc…)",
      after: ": We met nice people during our holiday. It rained during the night. / in the night.",
    },
    {
      before: "for = ",
      strong: "bao lâu",
      after: ": We watched TV for two hours. (không: during two hours)",
    },
    {
      before: "So sánh: ",
      strong: "When? → during",
      after: "; How long? → for: During the movie. / For half an hour.",
    },
    {
      before: "during + ",
      strong: "noun",
      after: "; while + S + V: during the exam / while he was doing the exam.",
    },
    {
      before: "while + ",
      strong: "present",
      after: " khi nói tương lai: I hope the weather is good while I'm there. (không: while I will be)",
    },
    {
      before: "Ví dụ while: ",
      strong: "while we were waiting",
      after: "; While you were out…; Alex read while Amy watched TV.",
    },
  ],
  examples: [
    {
      english: "I fell asleep during the movie.",
      vietnamese: "Tôi ngủ gật trong lúc xem phim.",
    },
    {
      english: "It rained for three days without stopping.",
      vietnamese: "Trời mưa ba ngày liên tục. (không: during three days)",
    },
    {
      english: "I fell asleep while I was watching TV.",
      vietnamese: "Tôi ngủ gật khi đang xem TV.",
    },
    {
      english: "We met a lot of interesting people during our holiday.",
      vietnamese: "Chúng tôi gặp nhiều người thú vị trong kỳ nghỉ.",
    },
    {
      english: "We met a lot of interesting people while we were on holiday.",
      vietnamese: "… trong lúc chúng tôi đi nghỉ. (while + S + V)",
    },
    {
      english: "I hope the weather will be good while I'm there.",
      vietnamese: "Tôi hy vọng thời tiết đẹp trong lúc tôi ở đó. (không: while I will be)",
    },
    {
      english: "What are you going to do while you're waiting?",
      vietnamese: "Bạn định làm gì trong lúc chờ?",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 492,
  },
};
