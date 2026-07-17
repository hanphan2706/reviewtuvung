import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 87 — Much, Many, Little, Few, a Lot, Plenty.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_TOPIC: GrammarTopicDetail = {
  slug: "u87-much-many-little-few-a-lot-plenty",
  title: "Much, Many, Little, Few, a Lot, Plenty",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 87",
  sourceNote:
    "much/little + danh từ không đếm được; many/few + danh từ số nhiều; a lot of / plenty of dùng cho cả hai; phân biệt little/few và a little/a few.",
  intro:
    "Bài này giúp bạn chọn đúng much, many, a lot of và plenty of theo loại danh từ, đồng thời phân biệt little/few (quá ít, gần như không có) với a little/a few (vẫn có một ít).",
  structure: {
    affirmative:
      "much/little + danh từ không đếm được | many/few + danh từ số nhiều | a lot of / plenty of + cả hai loại | a little / a few",
    negative:
      "Trong câu khẳng định thông thường, ưu tiên a lot of thay vì much | KHÔNG nói only little / only few",
  },
  usagePoints: [
    {
      before: "much / little đi với ",
      strong: "danh từ không đếm được",
      after: "; many / few đi với danh từ số nhiều.",
    },
    {
      before: "a lot of / plenty of dùng với ",
      strong: "cả hai loại danh từ",
      after: "; plenty of mang nghĩa nhiều hơn mức cần thiết.",
    },
    {
      before: "Trong câu khẳng định thông thường, dùng ",
      strong: "a lot (of)",
      after: " tự nhiên hơn much; much vẫn dùng sau too, so và as.",
    },
    {
      before: "little / few = ",
      strong: "quá ít, gần như không có",
      after: "; a little / a few = có một ít, một vài.",
    },
    {
      before: "Sau only phải dùng ",
      strong: "a little / a few",
      after: " (KHÔNG nói: only little/few).",
    },
    {
      before: "Với khoảng thời gian như years / weeks, ",
      strong: "many",
      after: " thường tự nhiên hơn a lot of: many years, many weeks.",
    },
  ],
  examples: [
    {
      english: "We didn't spend much money. We spent a lot of money.",
      vietnamese: "Much tự nhiên trong câu phủ định; câu khẳng định thường dùng a lot of.",
    },
    {
      english: "There's no need to hurry. We've got plenty of time.",
      vietnamese: "Plenty of time nghĩa là có dư thời gian, không cần vội.",
    },
    {
      english: "He has little time for other things. She has few friends there.",
      vietnamese: "Little/few nhấn mạnh số lượng quá ít hoặc không đủ.",
    },
    {
      english: "We have a little time before the train. I have a few friends here.",
      vietnamese: "A little/a few cho biết vẫn có một lượng nhỏ, không mang ý thiếu hụt.",
    },
    {
      english: "Hurry! We only have a little time. There were only a few houses.",
      vietnamese: "Sau only dùng a little hoặc a few, không bỏ a.",
    },
    {
      english: "We've lived here for many years.",
      vietnamese: "Với years, many thường tự nhiên hơn a lot of.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
