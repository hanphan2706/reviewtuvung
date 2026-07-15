import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 117 — Like and As.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 116 (as = cùng lúc / because) và Unit 118 (like / as if).
 */
export const U117_LIKE_AND_AS_TOPIC: GrammarTopicDetail = {
  slug: "u117-like-and-as",
  title: "Like and As",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 117",
  sourceNote:
    "like + noun/-ing (= giống); as + S + V; as usual / as always / the same as; as a … (= vai trò) vs like a … (= giống). Nên học kèm Units 116, 118.",
  intro:
    "Unit này giúp bạn nắm Like and As: Like + noun/-ing (= giống); as + S + V; as usual / as always / the same as; as a … (= vai trò) vs like a … (= giống). Nên học kèm Units 116, 118.",
  structure: {
    affirmative:
      "like + noun / pronoun / -ing | as + S + V | as usual / as always | the same as | as + noun (vai trò)",
    negative:
      "không: as a palace / as this / the same like | as ≠ like khi nói 'giống như'",
  },
  usagePoints: [
    {
      before: "like = ",
      strong: "giống / giống như",
      after: ": It's like a palace. I hate weather like this. It sounds like a baby crying.",
    },
    {
      before: "like + ",
      strong: "noun / pronoun / -ing",
      after: " (giới từ): like walking on ice; people like him.",
    },
    {
      before: "as + S + V = ",
      strong: "theo cách / đúng như",
      after: ": Leave everything as it was. Do it as I showed you. (cũng: like I showed you)",
    },
    {
      before: "as usual / as always; ",
      strong: "the same as",
      after: " (không the same like): You're late as usual. Your phone is the same as mine.",
    },
    {
      before: "as you know / as I said / ",
      strong: "as she expected",
      after: "…: As you know, it's Emma's birthday. Andy failed, as he expected.",
    },
    {
      before: "as + noun = ",
      strong: "vai trò / hình thức",
      after: "; like = giống: I worked as a photographer. I'm like a taxi driver (không phải tài xế).",
    },
  ],
  examples: [
    {
      english: "What a beautiful house! It's like a palace.",
      vietnamese: "Ngôi nhà đẹp quá! Giống như một cung điện. (không: as a palace)",
    },
    {
      english: "I left everything as it was.",
      vietnamese: "Tôi để mọi thứ nguyên như cũ.",
    },
    {
      english: "You should have done it as I showed you.",
      vietnamese: "Bạn lẽ ra phải làm như tôi đã chỉ. (cũng: like I showed you)",
    },
    {
      english: "You're late as usual.",
      vietnamese: "Bạn muộn như thường lệ.",
    },
    {
      english: "Your phone is the same as mine.",
      vietnamese: "Điện thoại bạn giống của tôi. (không: the same like)",
    },
    {
      english: "Many years ago I worked as a photographer.",
      vietnamese: "Nhiều năm trước tôi làm nhiếp ảnh gia. (= đó là nghề của tôi)",
    },
    {
      english: "Everyone wants me to drive them. I'm like a taxi driver.",
      vietnamese: "Ai cũng muốn tôi chở — tôi giống tài xế taxi. (nhưng không phải)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 468,
  },
};
