import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 69 — Countable and Uncountable 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 70 (Countable and Uncountable 2).
 */
export const U69_COUNTABLE_AND_UNCOUNTABLE_1_TOPIC: GrammarTopicDetail = {
  slug: "u69-countable-and-uncountable-1",
  title: "Countable and Uncountable 1",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 69",
  sourceNote:
    "Phân biệt danh từ đếm được và không đếm được; a/an, some/any, many/few và much/little. Nên học kèm Units 70 và 71.",
  intro:
    "Bài này giúp bạn phân biệt danh từ đếm được với không đếm được, biết khi nào dùng a/an, some/any, và chọn many/few hay much/little cho đúng. Nên học kèm Unit 70 và Unit 71.",
  structure: {
    affirmative:
      "a/an + danh từ đếm được số ít | (some) + danh từ số nhiều / không đếm được | a … of + danh từ không đếm được",
    negative:
      "Danh từ không đếm được không dùng a/an | Danh từ đếm được số ít luôn phải có a/an | many/few với số nhiều · much/little với không đếm được",
  },
  usagePoints: [
    {
      before: "Danh từ ",
      strong: "đếm được",
      after: " có dạng số ít và số nhiều, đếm được bằng số: a banana / bananas; one banana, two bananas.",
    },
    {
      before: "Danh từ ",
      strong: "không đếm được",
      after: " chỉ có một dạng, không có số nhiều và không đếm trực tiếp: rice, music, sand, money.",
    },
    {
      before: "Chỉ dùng a/an với ",
      strong: "danh từ đếm được số ít",
      after: ": a beach, an accident. Không nói: want banana / There's been accident.",
    },
    {
      before: "Với danh từ không đếm được thì ",
      strong: "KHÔNG",
      after: " dùng a/an; thay vào đó dùng a … of: a bowl / a packet of rice.",
    },
    {
      before: "Dùng some/any với ",
      strong: "danh từ số nhiều và không đếm được",
      after: ": some songs / some music; any apples / any apple juice.",
    },
    {
      before: "Dùng many/few với ",
      strong: "danh từ số nhiều",
      after: "; dùng much/little với danh từ không đếm được: many pictures / much shopping; a few things / a little work.",
    },
  ],
  examples: [
    {
      english: "I eat a banana every day. I like bananas.",
      vietnamese: "Banana là danh từ đếm được: số ít cần a, số nhiều đứng một mình khi nói chung.",
    },
    {
      english: "I eat rice every day. I like rice.",
      vietnamese: "Rice không đếm được nên không có số nhiều và không dùng a rice.",
    },
    {
      english: "Do you want a banana? There's been an accident.",
      vietnamese: "Danh từ đếm được số ít luôn phải có a/an.",
    },
    {
      english: "We sang some songs. We listened to some music.",
      vietnamese: "some dùng được với cả danh từ số nhiều và không đếm được.",
    },
    {
      english: "We didn't take many pictures. We didn't do much shopping.",
      vietnamese: "many đi với số nhiều; much đi với danh từ không đếm được.",
    },
    {
      english: "I have a few things to do. I have a little work to do.",
      vietnamese: "a few đi với số nhiều; a little đi với danh từ không đếm được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
