import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 117 — Like and As.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 116 (as = cùng lúc / because) và Unit 118 (like / as if).
 */
export const U117_LIKE_AND_AS_TOPIC: GrammarTopicDetail = {
  slug: "u117-like-and-as",
  title: "Like and As",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 117",
  sourceNote:
    "like + noun / -ing (= giống); as + S + V (= theo cách / đúng như); as usual / as always / the same as; as a … (= vai trò) vs like a … (= giống). Nên học kèm Units 116, 118.",
  intro:
    "Bài này giúp bạn dùng like để so sánh giống nhau trước danh từ hoặc -ing, dùng as + S + V khi theo sau là mệnh đề, và phân biệt as a … (vai trò thật) với like a … (chỉ giống). Nên học kèm Units 116, 118.",
  structure: {
    affirmative:
      "like + noun / pronoun / -ing | as + S + V | as usual / as always | the same as | as + noun (vai trò)",
    negative:
      "KHÔNG nói as a palace / as this khi ý là giống → dùng like | KHÔNG nói the same like → the same as | like ≠ as khi nói giống nhau",
  },
  usagePoints: [
    {
      before: "like = ",
      strong: "giống / giống như",
      after: ": It's like a palace. I hate weather like this. It sounds like a baby crying.",
    },
    {
      before: "like + ",
      strong: "noun / pronoun / -ing",
      after: " (giới từ): like walking on ice; people like him.",
    },
    {
      before: "as + S + V = ",
      strong: "theo cách / đúng như",
      after: ": Leave everything as it was. Do it as I showed you. (cũng: like I showed you)",
    },
    {
      before: "",
      strong: "as usual / as always",
      after: ": You're late as usual.",
    },
    {
      before: "Dùng ",
      strong: "the same as",
      after: " (KHÔNG nói the same like): Your phone is the same as mine.",
    },
    {
      before: "as you know / as I said / ",
      strong: "as she expected",
      after: "…: As you know, it's Emma's birthday. Andy failed, as he expected.",
    },
    {
      before: "as + noun = ",
      strong: "vai trò / hình thức thật",
      after: ": I worked as a photographer.",
    },
    {
      before: "like + noun = ",
      strong: "chỉ giống, không phải thật",
      after: ": I'm like a taxi driver (không phải tài xế thật).",
    },
  ],
  examples: [
    {
      english: "What a beautiful house! It's like a palace.",
      vietnamese: "Like = giống như cung điện — KHÔNG nói as a palace.",
    },
    {
      english: "I left everything as it was.",
      vietnamese: "As + mệnh đề = để nguyên như cũ — không phải so sánh giống.",
    },
    {
      english: "You should have done it as I showed you.",
      vietnamese: "As I showed you = làm đúng cách tôi đã chỉ (cũng: like I showed you).",
    },
    {
      english: "You're late as usual.",
      vietnamese: "As usual = như thường lệ — cụm cố định.",
    },
    {
      english: "Your phone is the same as mine.",
      vietnamese: "The same as — KHÔNG nói the same like.",
    },
    {
      english: "Many years ago I worked as a photographer.",
      vietnamese: "As a photographer = đó thật sự là nghề của tôi.",
    },
    {
      english: "Everyone wants me to drive them. I'm like a taxi driver.",
      vietnamese: "Like a taxi driver = chỉ giống tài xế — tôi không phải tài xế thật.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 468,
  },
};
