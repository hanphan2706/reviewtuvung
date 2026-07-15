import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 102 — So and Such.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 103–104 (enough/too; quite/rather…).
 */
export const U102_SO_AND_SUCH_TOPIC: GrammarTopicDetail = {
  slug: "u102-so-and-such",
  title: "So and Such",
  levelLabel: "Intermediate",
  kindLabel: "Structure",
  sourceBook: "English Grammar in Use · Intermediate · Unit 102",
  sourceNote:
    "so + adj/adv; such (+ adj) + noun; such a…; so/such … (that); so long / such a long time. Nên học kèm Units 103–104.",
  intro:
    "Trong unit này bạn sẽ nắm: so + adj/adv; such (+ adj) + noun; such a…; so/such … (that); so long / such a long time. Nên học kèm Units 103–104.",
  structure: {
    affirmative:
      "so + adj/adv | such (+ adj) + noun | such a + singular noun | so/such … (that)…",
    negative:
      "not a so stupid story | not so nice people | not so long time → such a long time | no such…",
  },
  usagePoints: [
    {
      before: "so + ",
      strong: "adj / adv",
      after: ": I'm so tired. He talks so quietly.",
    },
    {
      before: "such + ",
      strong: "noun / adj + noun",
      after: ": such nice people; such a stupid story.",
    },
    {
      before: "such a… — ",
      strong: "không a such",
      after: ": such a big dog.",
    },
    {
      before: "so/such … (that)… — ",
      strong: "that thường bỏ",
      after: ": I was so tired (that) I fell asleep.",
    },
    {
      before: "so long ↔ ",
      strong: "such a long time",
      after: "; so far ↔ such a long way; so much ↔ such a lot of.",
    },
    {
      before: "no such… = ",
      strong: "không tồn tại kiểu đó",
      after: ": There's no such word.",
    },
  ],
  examples: [
    {
      english: "The story was so stupid. It was such a stupid story.",
      vietnamese: "so + adj; such a + adj + noun.",
    },
    {
      english: "They are such nice people. (not so nice people)",
      vietnamese: "such + adj + plural noun.",
    },
    {
      english: "I was so tired (that) I fell asleep in the armchair.",
      vietnamese: "so … (that)…",
    },
    {
      english: "It was such nice weather (that) we spent the whole day on the beach.",
      vietnamese: "such … (that)…",
    },
    {
      english: "I haven't seen her for so long / for such a long time.",
      vietnamese: "so long = such a long time.",
    },
    {
      english: "There's no such word as 'blid' in the dictionary.",
      vietnamese: "no such…",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 473,
  },
};
