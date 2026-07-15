import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 12 — For and since (when ...? and how long ...?).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const FOR_AND_SINCE_TOPIC: GrammarTopicDetail = {
  slug: "u12-for-and-since",
  title: "For and Since",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 12",
  sourceNote:
    "For and since — khi nào dùng each; so sánh when ...? (+ past simple) và how long ...? (+ present perfect).",
  intro:
    "Phân biệt for (khoảng thời gian) và since (mốc bắt đầu); so sánh when…? với past simple và how long…? với present perfect.",
  structure: {
    affirmative: "... for + khoảng thời gian | ... since + điểm mốc bắt đầu",
    negative: "S + haven't/hasn't + V3 + for/since ...",
  },
  usagePoints: [
    {
      before: "",
      strong: "for + một khoảng thời gian",
      after: " (two hours, ten years, ages...): Sally has been working here for six months.",
    },
    {
      before: "",
      strong: "since + điểm mốc bắt đầu",
      after: " (8 o'clock, Monday, we arrived...): Sally has been working here since April.",
    },
    {
      before: "Có thể ",
      strong: "bỏ for trong câu khẳng định",
      after: ", nhưng câu phủ định cần giữ for (hoặc dùng in thay thế): They haven't had a holiday for/in ten years.",
    },
    {
      before: "Không dùng for với ",
      strong: "all (all day, all my life)",
      after: ": I've lived here all my life (not for all my life).",
    },
    {
      before: "So sánh ",
      strong: "when...? (+ past simple)",
      after: " với how long...? (+ present perfect): When did it start raining? / How long has it been raining?",
    },
    {
      before: "Cấu trúc ",
      strong: "It's ... since ... / It's been ... since ...",
      after: " để nói khoảng thời gian từ một việc đã xảy ra: It's two years since I last saw Joe.",
    },
  ],
  examples: [
    {
      english: "We've been waiting for two hours.",
      vietnamese: "Chúng tôi đã chờ hai giờ rồi.",
    },
    {
      english: "We've been waiting since 8 o'clock.",
      vietnamese: "Chúng tôi đã chờ từ 8 giờ.",
    },
    {
      english: "Sally has been working here for six months.",
      vietnamese: "Sally làm việc ở đây được sáu tháng rồi.",
    },
    {
      english: "I haven't seen Tom for three days.",
      vietnamese: "Tôi chưa gặp Tom ba ngày rồi.",
    },
    {
      english: "I've lived here all my life.",
      vietnamese: "Tôi đã sống ở đây cả đời.",
    },
    {
      english: "When did it start raining? — It started raining an hour ago.",
      vietnamese: "Trời bắt đầu mưa từ khi nào? — Bắt đầu mưa một giờ trước.",
    },
    {
      english: "It's two years since I last saw Joe.",
      vietnamese: "Đã hai năm rồi từ lần cuối tôi gặp Joe.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 1080,
  },
};
