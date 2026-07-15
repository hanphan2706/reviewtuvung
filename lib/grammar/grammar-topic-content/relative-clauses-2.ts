import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 93 — Relative Clauses 2 (with / without who/that/which).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 92, 94–96.
 */
export const U93_RELATIVE_CLAUSES_2_TOPIC: GrammarTopicDetail = {
  slug: "u93-relative-clauses-2",
  title: "Relative Clauses 2",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 93",
  sourceNote:
    "who/that/which bắt buộc khi là chủ ngữ; được bỏ khi là tân ngữ; giới từ cuối mệnh đề; what vs that. Nên học kèm Units 92, 94–96.",
  intro:
    "Unit này giúp bạn nắm Relative Clauses 2: Who/that/which bắt buộc khi là chủ ngữ; được bỏ khi là tân ngữ; giới từ cuối mệnh đề; what vs that. Nên học kèm Unit 92 và Units 94–96.",
  structure: {
    affirmative:
      "noun + who/that/which + V (subject — keep) | noun + (who/that/which) + S + V (object — optional) | … prep at end",
    negative:
      "don't drop subject who/that/which | not … you lost them | not Everything what…",
  },
  usagePoints: [
    {
      before: "who/that/which là ",
      strong: "chủ ngữ → bắt buộc",
      after: ": The people who work in the office are friendly.",
    },
    {
      before: "who/that/which là ",
      strong: "tân ngữ → có thể bỏ",
      after: ": Did you find the keys (that) you lost?",
    },
    {
      before: "Không thêm ",
      strong: "them / it",
      after: " sau động từ: the dress Lisa bought (không: bought it).",
    },
    {
      before: "Giới từ ",
      strong: "thường cuối mệnh đề",
      after: ": Do you know the woman Tom is talking to?",
    },
    {
      before: "Everything/all the money + ",
      strong: "(that)",
      after: " — không what: all the money (that) I had.",
    },
    {
      before: "What = ",
      strong: "the thing(s) that",
      after: ": What they said was true.",
    },
  ],
  examples: [
    {
      english: "The woman who lives next door to me is a doctor.",
      vietnamese: "who = chủ ngữ → không bỏ.",
    },
    {
      english: "The woman I wanted to see was away. / The woman who I wanted to see…",
      vietnamese: "who = tân ngữ → có thể bỏ.",
    },
    {
      english: "Did you find the keys you lost?",
      vietnamese: "không: the keys you lost them.",
    },
    {
      english: "Are these the books you were looking for?",
      vietnamese: "giới từ for ở cuối.",
    },
    {
      english: "I gave her all the money (that) I had. What they said was true.",
      vietnamese: "that (hoặc bỏ) vs what.",
    },
    {
      english: "The bed I slept in wasn't comfortable.",
      vietnamese: "mệnh đề quan hệ + giới từ cuối.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 452,
  },
};
