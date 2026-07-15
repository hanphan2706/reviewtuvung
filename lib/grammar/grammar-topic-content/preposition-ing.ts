import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 60 — Preposition + -ing.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 53 (Verb + -ing); used to → Unit 61.
 */
export const U60_PREPOSITION_ING_TOPIC: GrammarTopicDetail = {
  slug: "u60-preposition-ing",
  title: "Preposition + -ing",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 60",
  sourceNote:
    "giới từ + -ing; before/after/by/without + -ing; to như giới từ → to + -ing (look forward to). Nên học kèm Unit 53.",
  intro:
    "Unit này giúp bạn nắm Preposition + -ing: Giới từ + -ing; before/after/by/without + -ing; to như giới từ → to + -ing (look forward to). Nên học kèm Unit 53 (Verb + -ing).",
  structure: {
    affirmative:
      "prep (in/for/about/of…) + V-ing | before/after/by/without + V-ing | look forward to + V-ing | prefer … to + V-ing",
    negative:
      "instead of + V-ing | without + V-ing | without + being + V3 | not looking forward to + V-ing",
  },
  usagePoints: [
    {
      before: "Giới từ + động từ → ",
      strong: "-ing",
      after: ": interested in working; good at learning; fed up with studying; thanks for inviting.",
    },
    {
      before: "before / after + ",
      strong: "-ing",
      after: ": Before going out, I phoned Sarah. What did you do after leaving school?",
    },
    {
      before: "by + ",
      strong: "-ing",
      after: " = bằng cách: She made herself ill by not eating properly.",
    },
    {
      before: "without + ",
      strong: "-ing",
      after: ": We ran ten kilometres without stopping. I said it without thinking.",
    },
    {
      before: "to như giới từ → ",
      strong: "to + -ing",
      after: ": looking forward to going; prefer driving to travelling. (không: to go / to travel)",
    },
    {
      before: "So với ",
      strong: "to + infinitive",
      after: ": We decided to travel by train. Would you like to meet for lunch?",
    },
  ],
  examples: [
    {
      english: "Are you interested in working for us?",
      vietnamese: "Bạn có quan tâm làm việc với chúng tôi không?",
    },
    {
      english: "Before going out, I phoned Sarah.",
      vietnamese: "Trước khi ra ngoài, tôi gọi Sarah. (không: Before to go)",
    },
    {
      english: "You can improve your English by reading more.",
      vietnamese: "Bạn có thể cải thiện tiếng Anh bằng cách đọc thêm.",
    },
    {
      english: "We ran ten kilometres without stopping.",
      vietnamese: "Chúng tôi chạy mười kilomet mà không dừng.",
    },
    {
      english: "Are you looking forward to going on holiday?",
      vietnamese: "Bạn có mong chờ đi nghỉ không? (không: looking forward to go)",
    },
    {
      english: "I prefer driving to travelling by train.",
      vietnamese: "Tôi thích lái xe hơn đi tàu. (to = giới từ → -ing)",
    },
    {
      english: "I'm fed up with people telling me what to do.",
      vietnamese: "Tôi chán việc người khác bảo tôi phải làm gì.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 520,
  },
};
