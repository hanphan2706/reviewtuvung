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
    "although / though / even though + S + V; in spite of / despite + noun / -ing / the fact that. Phân biệt although với because và in spite of với because of. Nên học kèm Units 114–115 và câu điều kiện (Units 25, 38–40).",
  intro:
    "Bài này giúp bạn nói ý tương phản bằng although / though / even though trước mệnh đề, chuyển sang in spite of / despite khi theo sau là danh từ hoặc -ing, và tránh nhầm với because / because of. Nên học kèm Units 114–115.",
  structure: {
    affirmative:
      "Although/Though/Even though + S + V, … | In spite of/Despite + noun/-ing/the fact that …",
    negative:
      "KHÔNG nói despite I was tired → despite being tired hoặc despite the fact that I was tired | KHÔNG nói despite of → despite | KHÔNG nhầm although với because",
  },
  usagePoints: [
    {
      before: "although / though / even though + ",
      strong: "S + V",
      after: ": Although it rained a lot, they had a good time.",
    },
    {
      before: "in spite of / despite + ",
      strong: "noun / -ing / the fact that",
      after: ": In spite of the rain… Despite being tired…",
    },
    {
      before: "Chỉ dùng ",
      strong: "despite",
      after: " (KHÔNG thêm of): despite this — không: despite of this.",
    },
    {
      before: "even though ≈ ",
      strong: "although",
      after: " — KHÔNG dùng even + S + V thay cho even though.",
    },
    {
      before: "though ở ",
      strong: "cuối câu",
      after: " (nói): I like the garden though. (= but I like…)",
    },
    {
      before: "although = ",
      strong: "dù / mặc dù",
      after: " (tương phản): We went out although it was raining.",
    },
    {
      before: "because = ",
      strong: "vì",
      after: " (lý do): We didn't go out because it was raining.",
    },
    {
      before: "in spite of / despite = ",
      strong: "bất chấp",
      after: " (tương phản): In spite of the rain, they went out.",
    },
    {
      before: "because of = ",
      strong: "vì",
      after: " (lý do): Because of the rain, we stayed home.",
    },
  ],
  examples: [
    {
      english: "Although it rained a lot, they had a good time.",
      vietnamese: "Although + mệnh đề = dù trời mưa nhiều, họ vẫn chơi vui.",
    },
    {
      english: "In spite of the rain, they had a good time.",
      vietnamese: "In spite of + danh từ cùng ý tương phản — không cần mệnh đề.",
    },
    {
      english: "I couldn't sleep despite being very tired.",
      vietnamese: "Despite + -ing — KHÔNG nói despite I was tired.",
    },
    {
      english: "I didn't apply in spite of having the necessary qualifications.",
      vietnamese: "In spite of + -ing = dù có đủ bằng cấp vẫn không nộp đơn.",
    },
    {
      english: "Even though I was really tired, I couldn't sleep.",
      vietnamese: "Even though nhấn mạnh hơn although — vẫn theo sau là mệnh đề.",
    },
    {
      english: "The house isn't so nice. I like the garden though.",
      vietnamese: "Though ở cuối câu = nhưng / tuy nhiên khi nói.",
    },
    {
      english: "We went out although it was raining. / We didn't go out because it was raining.",
      vietnamese: "Although = tương phản; because = lý do — hai nghĩa khác nhau.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
