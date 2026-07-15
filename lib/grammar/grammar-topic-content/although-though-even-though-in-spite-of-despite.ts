import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 113 — Although / though / even though / in spite of / despite.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Units 114–115 (in case, unless…); even → Unit 112.
 */
export const U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_TOPIC: GrammarTopicDetail = {
  slug: "u113-although-though-even-though-in-spite-of-despite",
  title: "Although / Though / Even Though / In Spite of / Despite",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 113",
  sourceNote:
    "although/though/even though + S + V; in spite of/despite + noun/-ing/the fact that. Nên học kèm Units 114–115; conditionals Units 25, 38–40.",
  intro:
    "Trong unit này bạn sẽ nắm: although/though/even though + S + V; in spite of/despite + noun/-ing/the fact that. Nên học kèm Units 114–115 và câu điều kiện.",
  structure: {
    affirmative:
      "Although/Though/Even though + S + V, … | In spite of/Despite + noun/-ing/the fact that …",
    negative: "Although + S + don't/didn't … | despite not + -ing …",
  },
  usagePoints: [
    {
      before: "",
      strong: "although + S + V",
      after: ": Although it rained a lot, they had a good time.",
    },
    {
      before: "",
      strong: "in spite of / despite + noun / -ing",
      after: ": In spite of the rain… Despite being tired… (không: despite I was tired)",
    },
    {
      before: "",
      strong: "despite",
      after: " (không of): despite this — không: despite of this.",
    },
    {
      before: "",
      strong: "even though",
      after: " ≈ although — không: even + S + V.",
    },
    {
      before: "though ở ",
      strong: "cuối câu",
      after: " (nói): I like the garden though. (= but I like…)",
    },
    {
      before: "although ≠ ",
      strong: "because",
      after: "; in spite of ≠ because of.",
    },
  ],
  examples: [
    {
      english: "Although it rained a lot, they had a good time.",
      vietnamese: "Dù trời mưa nhiều, họ vẫn chơi vui.",
    },
    {
      english: "In spite of the rain, they had a good time.",
      vietnamese: "Bất chấp mưa, họ vẫn chơi vui.",
    },
    {
      english: "I couldn't sleep despite being very tired.",
      vietnamese: "Tôi không ngủ được dù rất mệt. (không: despite I was tired)",
    },
    {
      english: "I didn't apply in spite of having the necessary qualifications.",
      vietnamese: "Tôi không nộp đơn dù có đủ bằng cấp.",
    },
    {
      english: "Even though I was really tired, I couldn't sleep.",
      vietnamese: "Dù thật sự mệt, tôi vẫn không ngủ được.",
    },
    {
      english: "The house isn't so nice. I like the garden though.",
      vietnamese: "Nhà không đẹp lắm. Nhưng tôi thích khu vườn.",
    },
    {
      english: "We went out although it was raining. / We didn't go out because it was raining.",
      vietnamese: "although ≠ because.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
