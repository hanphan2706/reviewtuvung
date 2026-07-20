import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 18 — Used to (do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–F.
 * Nên học kèm Unit 61 (be/get used to).
 */
export const USED_TO_DO_TOPIC: GrammarTopicDetail = {
  slug: "u18-used-to-do",
  title: "Used to (do)",
  levelLabel: "Intermediate",
  kindLabel: "Verb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 18",
  sourceNote:
    "used to + V nguyên thể diễn tả thói quen/tình trạng đã từng đúng nhưng không còn đúng ở hiện tại; phân biệt với am/is/are used to doing (Unit 61).",
  intro:
    "Bài này giúp bạn dùng used to + V để nói về thói quen hoặc tình trạng đã từng đúng trong quá khứ nhưng không còn đúng ở hiện tại, chia đúng câu hỏi/phủ định với used to, và tránh nhầm với am/is/are used to doing (đã quen với việc gì, Unit 61) — hai cấu trúc giống nhau về mặt chữ nhưng nghĩa hoàn toàn khác.",
  structure: {
    affirmative: "S + used to + V",
    negative:
      "KHÔNG chia used to như động từ thường (uses to, useds to) — mọi ngôi đều dùng used to + V nguyên thể | S + didn't use to + V (hoặc used not to + V)",
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
      before: "used to do (thói quen quá khứ) khác ",
      strong: "was doing (đang làm giữa lúc đó)",
      after: ": I used to watch TV a lot. / I was watching TV when Rob called.",
    },
    {
      before: "Không nhầm với ",
      strong: "am/is/are used to doing (đã quen với việc gì, Unit 61)",
      after: ": I used to live alone (đã từng, không còn) khác I am used to living alone (đang sống một mình và đã quen với điều đó).",
    },
  ],
  examples: [
    {
      english: "She used to travel a lot.",
      vietnamese: "used to travel = từng đi du lịch nhiều, ngụ ý bây giờ không còn (nhiều) nữa.",
    },
    {
      english: "David used to spend a lot of money on clothes.",
      vietnamese: "thói quen quá khứ đã chấm dứt, không phải thói quen hiện tại.",
    },
    {
      english: "This building used to be a cinema.",
      vietnamese: "used to be = tình trạng từng đúng (từng là rạp chiếu phim), giờ không còn đúng.",
    },
    {
      english: "We used to live in a small village, but now we live in a city.",
      vietnamese: "so sánh trực tiếp used to (quá khứ) với live (hiện tại) — used to không có dạng hiện tại.",
    },
    {
      english: "Did you use to eat a lot of sweets when you were a child?",
      vietnamese: "câu hỏi dùng did + use to, không chia use ở dạng khác.",
    },
    {
      english: "I didn't use to like him.",
      vietnamese: "câu phủ định dùng didn't use to, không nói doesn't/didn't used to.",
    },
    {
      english: "I used to live alone. / I am used to living alone.",
      vietnamese: "used to live (đã từng sống một mình, không còn) khác am used to living (đang sống và đã quen).",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 1210,
  },
};
