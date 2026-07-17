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
    "so + tính từ/trạng từ; such + (tính từ) + danh từ; such a/an với danh từ số ít; so/such … (that); so long / such a long time. Nên học kèm Units 103–104.",
  intro:
    "Bài này giúp bạn chọn so trước tính từ/trạng từ và such trước cụm danh từ, đặt a/an đúng vị trí trong such a/an…, và dùng so/such … (that) để diễn tả kết quả. Nên học kèm Units 103–104.",
  structure: {
    affirmative:
      "so + adj/adv | such (+ adj) + noun | such a + singular noun | so/such … (that)…",
    negative:
      "KHÔNG nói a so stupid story → such a stupid story | KHÔNG nói so nice people → such nice people | KHÔNG nói so long time → such a long time",
  },
  usagePoints: [
    {
      before: "Dùng so trước ",
      strong: "tính từ / trạng từ",
      after: ": I'm so tired. He talks so quietly.",
    },
    {
      before: "Dùng such trước ",
      strong: "danh từ / tính từ + danh từ",
      after: ": such nice people; such a stupid story.",
    },
    {
      before: "Với danh từ số ít, đặt a/an sau such: ",
      strong: "such a big dog",
      after: " (KHÔNG nói a such big dog).",
    },
    {
      before: "Trong so/such … (that)…, ",
      strong: "có thể bỏ that",
      after: ": I was so tired (that) I fell asleep.",
    },
    {
      before: "Không có danh từ: ",
      strong: "so long / so far / so much",
      after: ".",
    },
    {
      before: "Có cụm danh từ: ",
      strong: "such a long time / such a long way / such a lot of",
      after: ".",
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
      vietnamese: "So đứng trước stupid; such đứng trước cả cụm a stupid story.",
    },
    {
      english: "They are such nice people. (not so nice people)",
      vietnamese: "Có danh từ people nên dùng such, không dùng so.",
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
