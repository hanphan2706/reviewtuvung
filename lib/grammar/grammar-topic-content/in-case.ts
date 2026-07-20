import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 114 — In case.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 113, 115 và câu điều kiện (25, 38–40).
 */
export const U114_IN_CASE_TOPIC: GrammarTopicDetail = {
  slug: "u114-in-case",
  title: "In Case",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 114",
  sourceNote:
    "in case = phòng khi có thể xảy ra; phân biệt in case và if; in case + past cho việc đã làm; in case of + noun trong thông báo. KHÔNG dùng will sau in case. Nên học kèm Units 113, 115.",
  intro:
    "Bài này giúp bạn chuẩn bị trước phòng khi điều gì có thể xảy ra bằng in case, phân biệt in case với if, và dùng in case of trong thông báo. Nên học kèm Units 113, 115 và if.",
  structure: {
    affirmative: "… in case + S + present/past | just in case | In case of + noun, …",
    negative:
      "KHÔNG dùng will sau in case → in case I forget (không: will forget) | KHÔNG nhầm in case với if khi nói chuẩn bị trước",
  },
  usagePoints: [
    {
      before: "in case = ",
      strong: "phòng khi có thể xảy ra",
      after: ": Write down your password in case you forget it.",
    },
    {
      before: "KHÔNG dùng ",
      strong: "will",
      after: " sau in case: in case I forget (không: will forget).",
    },
    {
      before: "in case = ",
      strong: "chuẩn bị trước",
      after: ": Buy food in case Tom comes (= mua sẵn, dù anh ấy có đến hay không).",
    },
    {
      before: "if = ",
      strong: "chỉ khi điều kiện xảy ra",
      after: ": Buy food if Tom comes (= chỉ mua khi anh ấy đến).",
    },
    {
      before: "",
      strong: "just in case",
      after: " = phòng khi khả năng nhỏ: I'll take an umbrella just in case.",
    },
    {
      before: "in case + ",
      strong: "past",
      after: " giải thích việc đã làm: I gave him my number in case he needed to call.",
    },
    {
      before: "",
      strong: "in case of + noun",
      after: " (thông báo): In case of emergency, call this number.",
    },
  ],
  examples: [
    {
      english: "Your car should have a spare wheel in case you have a puncture.",
      vietnamese: "In case = phòng khi thủng lốp — chuẩn bị trước, không chờ lốp thủng mới lo.",
    },
    {
      english: "I'll write down my password in case I forget it.",
      vietnamese: "Sau in case dùng present — KHÔNG nói will forget.",
    },
    {
      english: "We'll buy some more food in case Tom comes.",
      vietnamese: "In case = mua sẵn phòng Tom đến — dù anh ấy có đến hay không.",
    },
    {
      english: "We'll buy some more food if Tom comes.",
      vietnamese: "If = chỉ mua thêm khi Tom thật sự đến.",
    },
    {
      english: "I don't think it will rain, but I'll take an umbrella just in case.",
      vietnamese: "Just in case = phòng khi cần, dù khả năng mưa thấp.",
    },
    {
      english: "I drew a map for Sarah in case she had a problem finding our house.",
      vietnamese: "In case + past giải thích lý do đã vẽ bản đồ trước đó.",
    },
    {
      english: "In case of fire, please leave the building as quickly as possible.",
      vietnamese: "In case of + noun dùng trong thông báo chính thức.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 420,
  },
};
