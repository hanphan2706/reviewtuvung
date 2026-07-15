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
    "both/neither/either cho 2 thứ; of + the/these/us…; both…and / neither…nor / either…or; so với any/none/all.",
  intro:
    "Unit này giúp bạn nắm Both / Neither / Either: Both/neither/either cho 2 thứ; of + the/these/us…; both…and / neither…nor / either…or; so với any/none/all.",
  structure: {
    affirmative:
      "both/neither/either (+ N) | both/neither/either of + the/these/us… | both…and / neither…nor / either…or",
    negative:
      "not the both | not both us | either/neither only for two",
  },
  usagePoints: [
    {
      before: "Hai thứ: ",
      strong: "both (= cả hai) / neither (= không bên nào) / either (= một trong hai)",
      after: ".",
    },
    {
      before: "both of / neither of / either of + ",
      strong: "the/these/my…",
      after: "; both ± of.",
    },
    {
      before: "both of us/you/them: ",
      strong: "of bắt buộc",
      after: ".",
    },
    {
      before: "Cặp liên từ: ",
      strong: "both… and / neither… nor / either… or",
      after: ".",
    },
    {
      before: ">2 thứ → ",
      strong: "any / none / all",
      after: " (không either/neither/both).",
    },
    {
      before: "neither of…: động từ ",
      strong: "số ít hoặc số nhiều",
      after: ".",
    },
  ],
  examples: [
    {
      english: "Both restaurants are good. Neither restaurant is expensive. Either is fine.",
      vietnamese: "both / neither / either với hai lựa chọn.",
    },
    {
      english: "Both of these restaurants are good. / Both these restaurants…",
      vietnamese: "both ± of.",
    },
    {
      english: "Neither of them knew. Both of us were tired.",
      vietnamese: "… of them/us.",
    },
    {
      english: "Both Chris and Paul were late. Neither Joe nor Sam has a car.",
      vietnamese: "both…and / neither…nor.",
    },
    {
      english: "She's either Spanish or Italian. We can leave either today or tomorrow.",
      vietnamese: "either… or…",
    },
    {
      english: "Two hotels: either of them. Many hotels: any of them.",
      vietnamese: "2 vs >2.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
