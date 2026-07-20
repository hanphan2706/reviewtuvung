import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 12 — For and since (when ...? and how long ...?).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 11 (how long have you been).
 */
export const FOR_AND_SINCE_TOPIC: GrammarTopicDetail = {
  slug: "u12-for-and-since",
  title: "For and Since",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 12",
  sourceNote:
    "for + khoảng thời gian, since + mốc bắt đầu; when...? đi với past simple, how long...? đi với present perfect. Nên học kèm Unit 11.",
  intro:
    "Bài này giúp bạn phân biệt for (khoảng thời gian) và since (mốc bắt đầu) khi nói how long, và so sánh when...? + past simple với how long...? + present perfect để không dùng lẫn hai câu hỏi này. Nên học kèm Unit 11 (how long have you been) để ôn lại present perfect chỉ khoảng thời gian trước khi đi sâu vào for và since.",
  structure: {
    affirmative: "... for + khoảng thời gian | ... since + điểm mốc bắt đầu",
    negative:
      "KHÔNG dùng for trước all (for all my life) — bỏ for: I've lived here all my life | Câu phủ định PHẢI giữ for (hoặc dùng in): haven't ... for/in ten years",
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
      after: ": Sally has been working here six months (vẫn đúng, nhưng ít phổ biến hơn).",
    },
    {
      before: "Câu phủ định ",
      strong: "cần giữ for (hoặc dùng in thay thế)",
      after: ": They haven't had a holiday for/in ten years.",
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
      vietnamese: "for + khoảng thời gian = đã chờ suốt hai giờ, không nói mốc bắt đầu.",
    },
    {
      english: "We've been waiting since 8 o'clock.",
      vietnamese: "since + mốc bắt đầu = chờ từ lúc 8 giờ tới giờ, không nói tổng thời gian.",
    },
    {
      english: "Sally has been working here for six months.",
      vietnamese: "for six months = khoảng thời gian, có thể bỏ for mà nghĩa vẫn không đổi.",
    },
    {
      english: "I haven't seen Tom for three days.",
      vietnamese: "câu phủ định giữ nguyên for, không bỏ được như câu khẳng định.",
    },
    {
      english: "I've lived here all my life.",
      vietnamese: "all my life không đi với for — nói for all my life là sai.",
    },
    {
      english: "When did it start raining? — It started raining an hour ago.",
      vietnamese: "when...? luôn đi với past simple, hỏi thời điểm bắt đầu, không hỏi tổng thời gian.",
    },
    {
      english: "It's two years since I last saw Joe.",
      vietnamese: "It's ... since ... = đã hai năm tính từ lần cuối một việc xảy ra.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 1080,
  },
};
