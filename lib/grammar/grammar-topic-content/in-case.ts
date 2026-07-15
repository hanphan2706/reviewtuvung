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
    "in case (= because it is possible…); in case vs if; in case + past; in case of. Không will sau in case. Nên học kèm Units 113, 115.",
  intro:
    "Unit này giúp bạn nắm In Case: In case (= because it is possible…); in case vs if; in case + past; in case of. Không will sau in case. Nên học kèm Units 113, 115 và if.",
  structure: {
    affirmative: "… in case + S + present/past | just in case | In case of + noun, …",
    negative: "… in case + S + don't/doesn't / didn't … | (không: in case + will)",
  },
  usagePoints: [
    {
      before: "",
      strong: "in case",
      after: " = phòng khi có thể xảy ra: Write down your password in case you forget it.",
    },
    {
      before: "Không dùng ",
      strong: "will",
      after: " sau in case: in case I forget (không: will forget).",
    },
    {
      before: "",
      strong: "in case ≠ if",
      after: ": Buy food in case Tom comes (= mua sẵn). Buy food if Tom comes (= chỉ mua khi anh ấy đến).",
    },
    {
      before: "",
      strong: "just in case",
      after: " = khả năng nhỏ: I'll take an umbrella just in case.",
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
      vietnamese: "Xe nên có bánh dự phòng phòng khi thủng lốp.",
    },
    {
      english: "I'll write down my password in case I forget it.",
      vietnamese: "Tôi sẽ ghi mật khẩu phòng khi quên. (không: will forget)",
    },
    {
      english: "We'll buy some more food in case Tom comes.",
      vietnamese: "Mua thêm đồ ăn sẵn — dù Tom có đến hay không.",
    },
    {
      english: "We'll buy some more food if Tom comes.",
      vietnamese: "Chỉ mua thêm nếu Tom đến.",
    },
    {
      english: "I don't think it will rain, but I'll take an umbrella just in case.",
      vietnamese: "Tôi không nghĩ trời mưa, nhưng mang ô phòng khi cần.",
    },
    {
      english: "I drew a map for Sarah in case she had a problem finding our house.",
      vietnamese: "Tôi vẽ bản đồ cho Sarah phòng khi cô ấy khó tìm nhà.",
    },
    {
      english: "In case of fire, please leave the building as quickly as possible.",
      vietnamese: "Nếu có cháy, hãy rời tòa nhà càng nhanh càng tốt.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 420,
  },
};
