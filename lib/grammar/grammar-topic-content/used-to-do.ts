import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 18 — Used to (do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–F.
 */
export const USED_TO_DO_TOPIC: GrammarTopicDetail = {
  slug: "u18-used-to-do",
  title: "Used to (do)",
  levelLabel: "Intermediate",
  kindLabel: "Verb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 18",
  sourceNote:
    "Used to (do). Diễn tả thói quen/tình trạng đã từng đúng trong quá khứ nhưng không còn đúng ở hiện tại; phân biệt với am/is/are used to doing (Unit 61).",
  intro:
    "Used to (do). Diễn tả thói quen/tình trạng đã từng đúng trong quá khứ nhưng không còn đúng ở hiện tại; phân biệt với am/is/are used to doing (Unit 61).",
  structure: {
    affirmative: "S + used to + V",
    negative: "S + didn't use to + V (hoặc used not to + V)",
  },
  usagePoints: [
    {
      before: "Diễn tả việc ",
      strong: "đã làm thường xuyên trong quá khứ, nhưng không còn làm nữa",
      after: ": I used to play tennis a lot, but I don't play very much now.",
    },
    {
      before: "Diễn tả ",
      strong: "tình trạng/sự thật từng đúng nhưng không còn đúng",
      after: ": This building used to be a cinema.",
    },
    {
      before: "",
      strong: "Không có dạng hiện tại",
      after: " — nói hiện tại phải dùng present simple: We used to live in a small village, but now we live in a city.",
    },
    {
      before: "Câu hỏi dùng ",
      strong: "did (you) use to...?",
      after: "; câu phủ định dùng didn't use to... (hoặc used not to...): Did you use to eat a lot of sweets? / I didn't use to like him.",
    },
    {
      before: "Phân biệt ",
      strong: "used to do (thói quen quá khứ) với was doing (đang làm giữa lúc đó)",
      after: ": I used to watch TV a lot. / I was watching TV when Rob called.",
    },
    {
      before: "Không nhầm với ",
      strong: "am/is/are used to doing (đã quen với việc gì, Unit 61)",
      after: " — cấu trúc và nghĩa khác nhau: I used to live alone (đã từng, không còn) khác I am used to living alone (đang sống một mình và đã quen với điều đó).",
    },
  ],
  examples: [
    {
      english: "She used to travel a lot.",
      vietnamese: "Trước đây cô ấy đi du lịch nhiều.",
    },
    {
      english: "David used to spend a lot of money on clothes.",
      vietnamese: "David từng chi rất nhiều tiền cho quần áo.",
    },
    {
      english: "This building used to be a cinema.",
      vietnamese: "Tòa nhà này trước đây là một rạp chiếu phim.",
    },
    {
      english: "We used to live in a small village, but now we live in a city.",
      vietnamese: "Chúng tôi từng sống ở một làng nhỏ, nhưng giờ sống ở thành phố.",
    },
    {
      english: "Did you use to eat a lot of sweets when you were a child?",
      vietnamese: "Hồi nhỏ bạn có thường ăn nhiều kẹo không?",
    },
    {
      english: "I didn't use to like him.",
      vietnamese: "Trước đây tôi không thích anh ta.",
    },
    {
      english: "I used to live alone. / I am used to living alone.",
      vietnamese: "Tôi đã từng sống một mình. / Tôi đã quen với việc sống một mình (bây giờ).",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 1210,
  },
};
