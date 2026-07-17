import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 91 — Each and Every.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 90 (all / every / whole).
 */
export const U91_EACH_AND_EVERY_TOPIC: GrammarTopicDetail = {
  slug: "u91-each-and-every",
  title: "Each and Every",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 91",
  sourceNote:
    "each nhấn mạnh từng cá thể; every nhìn toàn bộ nhóm; đúng hai dùng each; tần suất dùng every; each of / every one of; phân biệt everyone và every one. Nên học kèm Unit 90.",
  intro:
    "Bài này giúp bạn phân biệt each (xét từng người/vật riêng lẻ) với every (nhìn tất cả thành một nhóm), dùng đúng each of / every one of, và tránh nhầm everyone với every one. Nên học kèm Unit 90.",
  structure: {
    affirmative:
      "each/every + N | each of + the/them… | every one (of …) | N + each | … each + V",
    negative:
      "KHÔNG nói every of (phải every one of) | Tần suất: KHÔNG dùng each day → dùng every day | Đúng hai đối tượng: dùng each, KHÔNG every",
  },
  usagePoints: [
    {
      before: "each nhấn mạnh ",
      strong: "từng cá thể riêng lẻ",
      after: " (thường là nhóm nhỏ).",
    },
    {
      before: "every nhìn ",
      strong: "tất cả thành một nhóm",
      after: ".",
    },
    {
      before: "Khi có đúng hai người hoặc vật, dùng ",
      strong: "each",
      after: " (KHÔNG dùng every): each team has eleven players.",
    },
    {
      before: "Để diễn tả tần suất, dùng ",
      strong: "every day / every ten minutes",
      after: " (thường KHÔNG dùng each day).",
    },
    {
      before: "Dùng each of the/them… nhưng với every phải nói ",
      strong: "every one of …",
      after: " (KHÔNG nói: every of).",
    },
    {
      before: "Khi nói giá hoặc phần được chia cho từng người/vật, dùng ",
      strong: "a pound each",
      after: "; were each given…",
    },
    {
      before: "everyone (một từ) = ",
      strong: "everybody",
      after: ".",
    },
    {
      before: "every one (hai từ) = ",
      strong: "từng cái / từng người",
      after: " trong một nhóm.",
    },
  ],
  examples: [
    {
      english: "Each book was a different colour. Every window in the house was open.",
      vietnamese: "Each nhấn mạnh từng cuốn sách; every nói tất cả cửa sổ trong nhà.",
    },
    {
      english: "In football, each team has eleven players.",
      vietnamese: "Một trận có hai đội nên dùng each, không dùng every.",
    },
    {
      english: "'How often do you use your car?' 'Every day.'",
      vietnamese: "Tần suất lặp lại dùng every day.",
    },
    {
      english: "Each of the books was a different colour. I've read every one of them.",
      vietnamese: "Dùng each of…, nhưng với every phải nói every one of…",
    },
    {
      english: "Those oranges are 40 pence each. We paid 200 dollars each.",
      vietnamese: "Each đứng sau số tiền để nói giá mỗi quả hoặc phần mỗi người trả.",
    },
    {
      english: "Everyone enjoyed the party. She goes to every one. (= every party)",
      vietnamese: "Everyone là mọi người; every one là từng buổi tiệc trong một nhóm.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 495,
  },
};
