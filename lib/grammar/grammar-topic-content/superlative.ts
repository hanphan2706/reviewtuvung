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
    "Dạng so sánh nhất the …-est hoặc the most …; best, worst, furthest; oldest và eldest; in và of; present perfect sau superlative. Nên học kèm Units 105–107.",
  intro:
    "Bài này giúp bạn lập dạng so sánh nhất với the …-est hoặc the most …, phân biệt oldest và eldest, chọn in hay of sau superlative, và dùng present perfect khi hỏi về kinh nghiệm cá nhân. Nên học kèm Units 105–107.",
  structure: {
    affirmative:
      "the + tính từ-est | the most + tính từ | the best / the worst | one of the + dạng so sánh nhất + danh từ số nhiều",
    negative:
      "Không bỏ the trước dạng so sánh nhất | Không dùng eldest cho đồ vật hoặc khi so sánh ngoài gia đình",
  },
  usagePoints: [
    {
      before: "Tính từ ngắn thường thêm ",
      strong: "the …-est",
      after: ": the longest, the hottest, the easiest.",
    },
    {
      before: "Tính từ dài dùng ",
      strong: "the most …",
      after: ": the most famous, the most difficult.",
    },
    {
      before: "Bất quy tắc: ",
      strong: "the best / the worst / the furthest",
      after: ".",
    },
    {
      before: "Sau superlative, nói về ",
      strong: "địa điểm hoặc nhóm",
      after: " thì dùng in: the longest river in the world (không nói of the world).",
    },
    {
      before: "Sau superlative, nói về ",
      strong: "khoảng thời gian",
      after: " thì dùng of: the hottest day of the year.",
    },
    {
      before: "Sau superlative thường dùng ",
      strong: "present perfect",
      after: " khi hỏi về kinh nghiệm: What's the best movie you've ever seen?",
    },
    {
      before: "Eldest chỉ dùng với ",
      strong: "người trong gia đình",
      after: ": their eldest son. That church is the oldest building (không dùng eldest).",
    },
  ],
  examples: [
    {
      english: "What is the longest river in the world?",
      vietnamese: "In the world chỉ phạm vi so sánh, không dùng of.",
    },
    {
      english: "Yesterday was the hottest day of the year.",
      vietnamese: "Of the year chỉ khoảng thời gian cụ thể.",
    },
    {
      english: "She's one of the nicest people I know.",
      vietnamese: "One of the … nói thuộc nhóm cao nhất, không nhất thiết là duy nhất.",
    },
    {
      english: "This hotel is the cheapest in town.",
      vietnamese: "In town chỉ phạm vi địa điểm sau superlative.",
    },
    {
      english: "Their eldest son is 13 years old.",
      vietnamese: "Eldest chỉ dùng với con cái trong gia đình.",
    },
    {
      english: "What's the most important decision you've ever made?",
      vietnamese: "Present perfect sau superlative khi hỏi về kinh nghiệm cá nhân.",
    },
    {
      english: "Who is the youngest student in the class?",
      vietnamese: "In the class chỉ nhóm so sánh, không dùng of.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
