import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 108 — Superlative (the longest / the most enjoyable etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Units 105–107 (comparative).
 */
export const U108_SUPERLATIVE_TOPIC: GrammarTopicDetail = {
  slug: "u108-superlative",
  title: "Superlative",
  levelLabel: "Intermediate",
  kindLabel: "Comparative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 108",
  sourceNote:
    "the …-est / the most …; best/worst/furthest; oldest/eldest; in vs of; present perfect after superlative. Nên học kèm Units 105–107.",
  intro:
    "Trong unit này bạn sẽ nắm: the …-est / the most …; best/worst/furthest; oldest/eldest; in vs of; present perfect after superlative. Nên học kèm Units 105–107.",
  structure: {
    affirmative: "the + adj-est | the most + adj | the best/worst | one of the + superlative + plural",
    negative: "not the + superlative | (so sánh bằng comparative thay thế)",
  },
  usagePoints: [
    {
      before: "Từ ngắn → ",
      strong: "the …-est",
      after: ": the longest, the hottest, the easiest.",
    },
    {
      before: "Từ dài → ",
      strong: "the most …",
      after: ": the most famous, the most difficult.",
    },
    {
      before: "Bất quy tắc: ",
      strong: "best / worst / furthest",
      after: ".",
    },
    {
      before: "Địa điểm/nhóm → ",
      strong: "in",
      after: ": the longest river in the world (không: of the world).",
    },
    {
      before: "Khoảng thời gian → ",
      strong: "of",
      after: ": the hottest day of the year.",
    },
    {
      before: "Thường dùng ",
      strong: "present perfect",
      after: " sau superlative: What's the best movie you've ever seen?",
    },
    {
      before: "eldest: ",
      strong: "chỉ người trong gia đình",
      after: ": their eldest son. That church is the oldest building (không eldest).",
    },
  ],
  examples: [
    {
      english: "What is the longest river in the world?",
      vietnamese: "Sông nào dài nhất thế giới?",
    },
    {
      english: "Yesterday was the hottest day of the year.",
      vietnamese: "Hôm qua là ngày nóng nhất trong năm.",
    },
    {
      english: "She's one of the nicest people I know.",
      vietnamese: "Cô ấy là một trong những người dễ thương nhất tôi biết.",
    },
    {
      english: "This hotel is the cheapest in town.",
      vietnamese: "Khách sạn này rẻ nhất trong thị trấn.",
    },
    {
      english: "Their eldest son is 13 years old.",
      vietnamese: "Con trai cả của họ 13 tuổi. (cũng: oldest)",
    },
    {
      english: "What's the most important decision you've ever made?",
      vietnamese: "Quyết định quan trọng nhất bạn từng đưa ra là gì?",
    },
    {
      english: "Who is the youngest student in the class?",
      vietnamese: "Ai là học sinh trẻ nhất trong lớp? (in, không of)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
