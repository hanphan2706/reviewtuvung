import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 99 — Adjectives (order; after verbs; the first two…).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 100–101 (adjectives and adverbs).
 */
export const U99_ADJECTIVES_TOPIC: GrammarTopicDetail = {
  slug: "u99-adjectives",
  title: "Adjectives",
  levelLabel: "Intermediate",
  kindLabel: "Adjective",
  sourceBook: "English Grammar in Use · Intermediate · Unit 99",
  sourceNote:
    "Tính từ chỉ ý kiến đứng trước tính từ chỉ đặc điểm; thứ tự các tính từ đặc điểm; tính từ sau be/look/feel…; the first two / next few…. Nên học kèm Units 100–101.",
  intro:
    "Bài này giúp bạn sắp xếp nhiều tính từ trước danh từ, dùng tính từ đúng sau be/look/feel/sound…, và đặt số đúng vị trí trong the first two, the next few hay the last ten. Nên học kèm Units 100–101.",
  structure: {
    affirmative:
      "opinion + fact(s) + noun | be/look/feel/sound/taste/smell + adj | the first/next/last + number + noun",
    negative:
      "KHÔNG thường đặt đặc điểm trước ý kiến | KHÔNG nói Drive careful → Drive carefully | KHÔNG nói the two first days → the first two days",
  },
  usagePoints: [
    {
      before: "Tính từ chỉ ý kiến đứng ",
      strong: "trước tính từ chỉ đặc điểm",
      after: ": a nice long holiday; an interesting young man.",
    },
    {
      before: "Các tính từ chỉ đặc điểm thường theo thứ tự ",
      strong: "size → age → colour → origin → material",
      after: ": a small black plastic bag.",
    },
    {
      before: "Giữa hai màu dùng ",
      strong: "and",
      after: ": a black and white dress. Các tính từ khác thường KHÔNG có and: a long black dress.",
    },
    {
      before: "Dùng tính từ sau ",
      strong: "be / look / feel / sound / taste / smell",
      after: ": She seems nice. The dinner smells good.",
    },
    {
      before: "Khi mô tả cách thực hiện hành động, dùng ",
      strong: "trạng từ",
      after: " (Unit 100): Drive carefully. plays … well.",
    },
    {
      before: "Đặt first/next/last trước số: ",
      strong: "the first two / the next few / the last ten",
      after: " (KHÔNG nói the two first).",
    },
  ],
  examples: [
    {
      english: "My brother lives in a nice new house.",
      vietnamese: "Nice là ý kiến nên đứng trước new là đặc điểm.",
    },
    {
      english: "In the kitchen there was a beautiful large round wooden table.",
      vietnamese: "Thứ tự: ý kiến + kích thước + hình dáng + chất liệu.",
    },
    {
      english: "a black and white dress; a long black dress",
      vietnamese: "Hai màu nối bằng and; không dùng and giữa long và black.",
    },
    {
      english: "You look tired. This tea tastes a bit strange.",
      vietnamese: "tính từ sau look / taste.",
    },
    {
      english: "Drive carefully! Suzanne plays the piano very well.",
      vietnamese: "trạng từ — Unit 100.",
    },
    {
      english: "I didn't enjoy the first two days of the course.",
      vietnamese: "Đặt first trước số: the first two, KHÔNG nói the two first.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 492,
  },
};
