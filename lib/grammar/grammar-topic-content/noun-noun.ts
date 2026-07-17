import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 80 — Noun + Noun.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U80_NOUN_NOUN_TOPIC: GrammarTopicDetail = {
  slug: "u80-noun-noun",
  title: "Noun + Noun",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 80",
  sourceNote:
    "Ghép danh từ + danh từ (bus driver), chuỗi danh từ, coffee cup và cup of coffee, cụm đo lường a three-hour journey.",
  intro:
    "Bài này giúp bạn ghép hai hay nhiều danh từ để gọi tên người, đồ vật hay nơi chốn, phân biệt coffee cup và cup of coffee, và dùng cụm đo lường như a three-hour journey.",
  structure: {
    affirmative:
      "danh từ 1 (số ít) + danh từ 2 | danh từ 1 + danh từ 2 + danh từ 3… | số + đơn vị đo + danh từ (a three-hour journey)",
    negative:
      "Không thêm -s sau đơn vị đo đứng trước danh từ (không nói a three-hours flight) | coffee cup khác cup of coffee",
  },
  usagePoints: [
    {
      before: "Danh từ đầu hoạt động như ",
      strong: "tính từ mô tả",
      after: ": bus driver, health problems, Paris hotel.",
    },
    {
      before: "Có thể ghép thành ",
      strong: "chuỗi danh từ",
      after: ": hotel reception desk, school football team.",
    },
    {
      before: "Danh từ đầu thường giữ ",
      strong: "số ít",
      after: " dù nghĩa số nhiều: car park, apple tree, ticket machine.",
    },
    {
      before: "A coffee cup nghĩa là ",
      strong: "cái cốc dùng để uống cà phê",
      after: "; a cup of coffee nghĩa là một cốc cà phê đang đựng.",
    },
    {
      before: "Cụm đo lường đứng trước danh từ: ",
      strong: "a three-hour journey",
      after: ", a ten-pound note, a six-year-old child.",
    },
    {
      before: "Khi số + đơn vị đo đứng ",
      strong: "một mình",
      after: " thì dùng số nhiều: The course lasted four weeks. It took two hours.",
    },
  ],
  examples: [
    {
      english: "A bus driver is someone who drives a bus. Income tax is tax on your income.",
      vietnamese: "Ghép danh từ + danh từ để gọi tên nghề hoặc loại thuế.",
    },
    {
      english: "You need a frying pan and a washing machine.",
      vietnamese: "Danh từ -ing + danh từ chỉ dụng cụ dùng để làm việc gì.",
    },
    {
      english: "I waited at the hotel reception desk.",
      vietnamese: "Ba danh từ ghép liên tiếp trong một cụm.",
    },
    {
      english: "a coffee cup / a cup of coffee",
      vietnamese: "Loại cốc khác với một cốc cà phê đang đựng.",
    },
    {
      english: "It was a four-week course. The course lasted four weeks.",
      vietnamese: "Cụm đo lường trước danh từ dùng số ít có gạch nối; vế sau dùng số nhiều.",
    },
    {
      english: "Sam has a six-year-old daughter. She is six years old.",
      vietnamese: "Six-year-old đứng trước danh từ; be + six years old đứng riêng.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 435,
  },
};
