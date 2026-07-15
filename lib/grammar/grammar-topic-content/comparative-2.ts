import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 106 — Comparative 2 (much better / any better etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Units 105, 107–108.
 */
export const U106_COMPARATIVE_2_TOPIC: GrammarTopicDetail = {
  slug: "u106-comparative-2",
  title: "Comparative 2",
  levelLabel: "Intermediate",
  kindLabel: "Comparative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 106",
  sourceNote:
    "much/a lot/far/a bit + comparative; any/no + comparative; better and better; the … the …; older/elder. Nên học kèm Units 105, 107–108.",
  intro:
    "Trong unit này bạn sẽ nắm: much/a lot/far/a bit + comparative; any/no + comparative; better and better; the … the …; older/elder. Nên học kèm Units 105, 107–108.",
  structure: {
    affirmative:
      "much/a lot/far/a bit + comparative | better and better | the + comparative, the + comparative | my elder/older sister",
    negative: "not + any + comparative | no + comparative (+ than)",
  },
  usagePoints: [
    {
      before: "Cường độ: ",
      strong: "much / a lot / far / a bit / slightly + comparative",
      after: ": much better, a bit more slowly, far more serious.",
    },
    {
      before: "any / no + comparative: ",
      strong: "any longer / no bigger",
      after: ": I'm not waiting any longer. It's no bigger than ours.",
    },
    {
      before: "Lặp: ",
      strong: "better and better / more and more …",
      after: " = thay đổi liên tục: It's getting more and more difficult.",
    },
    {
      before: "",
      strong: "the … the …",
      after: ": The sooner the better. The younger you are, the easier it is to learn.",
    },
    {
      before: "old → ",
      strong: "older",
      after: " (thường). elder chỉ với người trong gia đình: my elder sister.",
    },
    {
      before: "Không nói ",
      strong: "somebody is elder than …",
      after: ": My sister is older than me. (không: elder than me)",
    },
  ],
  examples: [
    {
      english: "I feel much better now.",
      vietnamese: "Bây giờ tôi thấy khỏe hơn nhiều.",
    },
    {
      english: "I'm not waiting any longer.",
      vietnamese: "Tôi không đợi thêm nữa.",
    },
    {
      english: "It's getting bigger and bigger.",
      vietnamese: "Nó ngày càng to hơn.",
    },
    {
      english: "The sooner we leave, the earlier we'll arrive.",
      vietnamese: "Càng đi sớm, càng đến sớm.",
    },
    {
      english: "The more I thought about the plan, the less I liked it.",
      vietnamese: "Càng nghĩ về kế hoạch, tôi càng ít thích nó.",
    },
    {
      english: "My elder sister is a TV producer.",
      vietnamese: "Chị tôi là nhà sản xuất TV. (cũng: older sister)",
    },
    {
      english: "My sister is older than me.",
      vietnamese: "Chị tôi lớn tuổi hơn tôi. (không: elder than me)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
