import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 112 — Even.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * even though → Unit 113; word order → Unit 110.
 */
export const U112_EVEN_TOPIC: GrammarTopicDetail = {
  slug: "u112-even",
  title: "Even",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 112",
  sourceNote:
    "even nhấn mạnh điều bất ngờ; not even; even + so sánh hơn; even though/even when/even if trước mệnh đề, không dùng even một mình như liên từ. Nên học kèm Unit 113.",
  intro:
    "Bài này giúp bạn dùng even để nhấn mạnh điều bất ngờ, tăng mức so sánh bằng even + comparative, và chọn đúng even though, even when hoặc even if khi theo sau là một mệnh đề. Nên học kèm Unit 113.",
  structure: {
    affirmative: "even + noun/phrase | S + even + V | even + comparative | even though/if/when + S + V",
    negative:
      "not even … | can't/don't/didn't even + V | KHÔNG dùng even + S + V → dùng even though/when/if",
  },
  usagePoints: [
    {
      before: "Dùng ",
      strong: "even",
      after: " = bất thường/ngạc nhiên: even the bathroom; She's even been to the Antarctic.",
    },
    {
      before: "Trong câu phủ định, dùng ",
      strong: "not even / can't even",
      after: ": They didn't even say hello. I can't even boil an egg.",
    },
    {
      before: "Để tăng mức so sánh, dùng ",
      strong: "even + comparative",
      after: ": even hotter, even more surprised, even less.",
    },
    {
      before: "Trước một mệnh đề, dùng ",
      strong: "even though / even when / even if + S + V",
      after: " — KHÔNG dùng even + S + V.",
    },
    {
      before: "even if = ",
      strong: "dù điều kiện đó xảy ra hay không",
      after: ": We're going even if the weather is bad.",
    },
    {
      before: "if = ",
      strong: "chỉ khi điều kiện xảy ra",
      after: ": We won't go if the weather is bad.",
    },
    {
      before: "Trước một cụm từ, dùng even trực tiếp: ",
      strong: "even for … / even with …",
      after: ": even for strong swimmers; even with glasses.",
    },
  ],
  examples: [
    {
      english: "She has a television in every room, even the bathroom.",
      vietnamese: "Even nhấn mạnh phòng tắm là nơi ít ai ngờ cũng có TV.",
    },
    {
      english: "She's even been to the Antarctic.",
      vietnamese: "Cô ấy thậm chí đã đến Nam Cực.",
    },
    {
      english: "I can't even boil an egg.",
      vietnamese: "Tôi thậm chí không luộc nổi một quả trứng.",
    },
    {
      english: "Today it's even hotter than yesterday.",
      vietnamese: "Even đứng trước hotter để tăng mức so sánh.",
    },
    {
      english: "Even though Tina can't drive, she has a car.",
      vietnamese: "Theo sau là mệnh đề nên dùng even though, không dùng even một mình.",
    },
    {
      english: "We're going even if the weather is bad.",
      vietnamese: "Chúng tôi vẫn đi dù thời tiết xấu.",
    },
    {
      english: "Nobody would help her, not even her best friend.",
      vietnamese: "Không ai giúp cô ấy, kể cả bạn thân nhất.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
