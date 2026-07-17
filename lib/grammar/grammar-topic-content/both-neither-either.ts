import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 89 — Both / Neither / Either.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U89_BOTH_NEITHER_EITHER_TOPIC: GrammarTopicDetail = {
  slug: "u89-both-neither-either",
  title: "Both / Neither / Either",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 89",
  sourceNote:
    "both/neither/either chỉ dùng khi có hai người hoặc vật; of + the/these/us…; các cặp both…and / neither…nor / either…or; trên hai lựa chọn dùng all/none/any.",
  intro:
    "Bài này giúp bạn diễn tả cả hai, không bên nào hoặc một trong hai bằng both, neither và either; dùng đúng of trước từ hạn định/đại từ; và phân biệt các từ này với all, none, any khi có hơn hai lựa chọn.",
  structure: {
    affirmative:
      "both/neither/either (+ N) | both/neither/either of + the/these/us… | both…and / neither…nor / either…or",
    negative:
      "KHÔNG nói the both | KHÔNG nói both us | both/neither/either chỉ dùng cho hai",
  },
  usagePoints: [
    {
      before: "Khi có đúng hai người hoặc vật: ",
      strong: "both (= cả hai) / neither (= không bên nào) / either (= một trong hai)",
      after: ".",
    },
    {
      before: "Dùng both of / neither of / either of trước ",
      strong: "the/these/my…",
      after: "; riêng both có thể bỏ of.",
    },
    {
      before: "Trước us/you/them, ",
      strong: "of là bắt buộc",
      after: ": both of us, neither of them.",
    },
    {
      before: "Ba cặp liên từ tương ứng là ",
      strong: "both… and / neither… nor / either… or",
      after: ".",
    },
    {
      before: "Khi có hơn hai lựa chọn, dùng ",
      strong: "any / none / all",
      after: " (KHÔNG dùng either/neither/both).",
    },
    {
      before: "Sau neither of…, động từ có thể ở ",
      strong: "số ít hoặc số nhiều",
      after: ": Neither of them is/are ready.",
    },
  ],
  examples: [
    {
      english: "Both restaurants are good. Neither restaurant is expensive. Either is fine.",
      vietnamese: "Both, neither và either đều đang nói về đúng hai nhà hàng.",
    },
    {
      english: "Both of these restaurants are good. / Both these restaurants…",
      vietnamese: "Trước these, both có thể dùng có hoặc không có of.",
    },
    {
      english: "Neither of them knew. Both of us were tired.",
      vietnamese: "Trước đại từ them/us phải có of.",
    },
    {
      english: "Both Chris and Paul were late. Neither Joe nor Sam has a car.",
      vietnamese: "Dùng both…and để nối hai ý khẳng định; neither…nor để phủ định cả hai.",
    },
    {
      english: "She's either Spanish or Italian. We can leave either today or tomorrow.",
      vietnamese: "Either…or trình bày hai khả năng hoặc lựa chọn.",
    },
    {
      english: "Two hotels: either of them. Many hotels: any of them.",
      vietnamese: "Hai khách sạn dùng either; nhiều hơn hai dùng any.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
