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
    "Sau giới từ động từ luôn -ing; before/after/by/without + -ing; to là giới từ → to + -ing (look forward to). Nên học kèm Unit 53.",
  intro:
    "Bài này giúp bạn luôn dùng -ing sau giới từ (interested in, before, without…), và nhận ra khi to là giới từ — như look forward to — thì theo -ing chứ không phải nguyên thể. Nên học kèm Unit 53 (Verb + -ing).",
  structure: {
    affirmative:
      "prep (in/for/about/of…) + V-ing | before/after/by/without + V-ing | look forward to + V-ing | prefer … to + V-ing",
    negative:
      "instead of + V-ing | without + V-ing | without + being + V3 | not looking forward to + V-ing",
  },
  usagePoints: [
    {
      before: "Giới từ + động từ → luôn ",
      strong: "-ing",
      after: ": interested in working; good at learning; thanks for inviting.",
    },
    {
      before: "before / after + ",
      strong: "-ing",
      after: ": Before going out, I phoned Sarah. What did you do after leaving school?",
    },
    {
      before: "by + ",
      strong: "-ing",
      after: " = bằng cách: You can improve your English by reading more.",
    },
    {
      before: "without + ",
      strong: "-ing",
      after: ": We ran ten kilometres without stopping. I said it without thinking.",
    },
    {
      before: "Khi to là giới từ → ",
      strong: "to + -ing",
      after: ": looking forward to going; prefer driving to travelling. (KHÔNG: to go / to travel)",
    },
    {
      before: "Khác với ",
      strong: "to + infinitive",
      after: " sau decide / would like…: We decided to travel by train.",
    },
  ],
  examples: [
    {
      english: "Are you interested in working for us?",
      vietnamese: "Sau giới từ in phải dùng -ing.",
    },
    {
      english: "Before going out, I phoned Sarah.",
      vietnamese: "Before + -ing, không Before to go…",
    },
    {
      english: "You can improve your English by reading more.",
      vietnamese: "by + -ing = bằng cách làm gì.",
    },
    {
      english: "We ran ten kilometres without stopping.",
      vietnamese: "without + -ing = mà không / không cần…",
    },
    {
      english: "Are you looking forward to going on holiday?",
      vietnamese: "to trong look forward to là giới từ → + -ing.",
    },
    {
      english: "I prefer driving to travelling by train.",
      vietnamese: "to sau prefer … to cũng là giới từ → -ing.",
    },
    {
      english: "I'm fed up with people telling me what to do.",
      vietnamese: "fed up with + -ing / danh từ + -ing.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 520,
  },
};
