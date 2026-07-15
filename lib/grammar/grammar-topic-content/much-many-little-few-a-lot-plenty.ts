import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 87 — Much, Many, Little, Few, a Lot, Plenty.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_TOPIC: GrammarTopicDetail = {
  slug: "u87-much-many-little-few-a-lot-plenty",
  title: "Much, Many, Little, Few, a Lot, Plenty",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 87",
  sourceNote:
    "much/little + không đếm; many/few + số nhiều; a lot of / plenty of; little ≠ a little; few ≠ a few.",
  intro:
    "Unit này giúp bạn nắm Much, Many, Little, Few, a Lot, Plenty: Much/little + không đếm; many/few + số nhiều; a lot of / plenty of; little ≠ a little; few ≠ a few.",
  structure: {
    affirmative:
      "much/little + uncountable | many/few + plural | a lot of / plenty of + both | a little / a few",
    negative:
      "avoid much in + spoken statements | not only little / only few",
  },
  usagePoints: [
    {
      before: "much / little + ",
      strong: "không đếm được",
      after: "; many / few + số nhiều.",
    },
    {
      before: "a lot of / plenty of: ",
      strong: "cả hai loại danh từ",
      after: "; plenty = hơn đủ.",
    },
    {
      before: "Câu khẳng định nói: ",
      strong: "a lot (of)",
      after: " thay much; too/so/as much vẫn OK.",
    },
    {
      before: "little / few = ",
      strong: "ít (thiếu)",
      after: "; a little / a few = một ít / một vài.",
    },
    {
      before: "only ",
      strong: "a little / a few",
      after: " (không: only little/few).",
    },
    {
      before: "many years / many weeks: ",
      strong: "thường many",
      after: " (không thường a lot of years).",
    },
  ],
  examples: [
    {
      english: "We didn't spend much money. We spent a lot of money.",
      vietnamese: "much trong phủ định; khẳng định → a lot of.",
    },
    {
      english: "There's no need to hurry. We've got plenty of time.",
      vietnamese: "plenty of = hơn đủ.",
    },
    {
      english: "He has little time for other things. She has few friends there.",
      vietnamese: "little/few = ít (thiếu).",
    },
    {
      english: "We have a little time before the train. I have a few friends here.",
      vietnamese: "a little / a few = một ít / một vài (đủ).",
    },
    {
      english: "Hurry! We only have a little time. There were only a few houses.",
      vietnamese: "only a little / only a few.",
    },
    {
      english: "We've lived here for many years.",
      vietnamese: "many years (không thường a lot of years).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
