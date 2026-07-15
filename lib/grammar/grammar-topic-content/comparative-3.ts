import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 107 — Comparative 3 (as … as / than).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 105–106, 108.
 */
export const U107_COMPARATIVE_3_TOPIC: GrammarTopicDetail = {
  slug: "u107-comparative-3",
  title: "Comparative 3",
  levelLabel: "Intermediate",
  kindLabel: "Comparative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 107",
  sourceNote:
    "as … as / not as … as / not so … as; less than; the same as; than me / than I am. Nên học kèm Units 105–106, 108.",
  intro:
    "Trong unit này bạn sẽ nắm: as … as / not as … as / not so … as; less than; the same as; than me / than I am. Nên học kèm Units 105–106 và 108.",
  structure: {
    affirmative: "as + adj/adv + as | the same as | twice/three times as … as",
    negative: "not as/so … as | less (+ adj) than | not as much/many … as",
  },
  usagePoints: [
    {
      before: "Ngang bằng: ",
      strong: "as … as",
      after: ": I got here as fast as I could. You can have as much as you want.",
    },
    {
      before: "Không bằng: ",
      strong: "not as … as",
      after: " (hoặc not so … as): He isn't as rich as Sarah.",
    },
    {
      before: "",
      strong: "less … than",
      after: " ≈ not as … as: I spent less money than you.",
    },
    {
      before: "",
      strong: "the same as",
      after: " (không like): Laura's salary is the same as mine.",
    },
    {
      before: "than/as + đại từ: ",
      strong: "than me / than I am",
      after: " đều được; ít khi chỉ than I.",
    },
    {
      before: "",
      strong: "twice as … as",
      after: ": Petrol is twice as expensive as it was a few years ago.",
    },
  ],
  examples: [
    {
      english: "Joe is richer than David, but he isn't as rich as Sarah.",
      vietnamese: "Joe giàu hơn David, nhưng không giàu bằng Sarah.",
    },
    {
      english: "I'm sorry I'm late. I got here as fast as I could.",
      vietnamese: "Xin lỗi tôi đến muộn. Tôi đã đến nhanh hết sức có thể.",
    },
    {
      english: "It's not as cold as yesterday.",
      vietnamese: "Không lạnh bằng hôm qua.",
    },
    {
      english: "I spent less money than you.",
      vietnamese: "Tôi tiêu ít tiền hơn bạn. (= not as much as you)",
    },
    {
      english: "David is the same age as James.",
      vietnamese: "David bằng tuổi James.",
    },
    {
      english: "You're taller than me. / You're taller than I am.",
      vietnamese: "Bạn cao hơn tôi.",
    },
    {
      english: "Their house is about three times as big as ours.",
      vietnamese: "Nhà họ to gấp khoảng ba lần nhà chúng tôi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
