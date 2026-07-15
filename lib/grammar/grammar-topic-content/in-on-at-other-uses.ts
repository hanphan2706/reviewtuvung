import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 127 — In/On/At (Other Uses).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 121 (time) và Units 123–125 (position).
 */
export const U127_IN_ON_AT_OTHER_USES_TOPIC: GrammarTopicDetail = {
  slug: "u127-in-on-at-other-uses",
  title: "In/On/At (Other Uses)",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 127",
  sourceNote:
    "in the rain/sun/language/love/mood/opinion; on TV/phone/fire/purpose/holiday; at the age of / at 100 degrees. Nên học kèm Units 121, 123–125.",
  intro:
    "Trong unit này bạn sẽ nắm: in the rain/sun/language/love/mood/opinion; on TV/phone/fire/purpose/holiday; at the age of / at 100 degrees. Nên học kèm Units 121, 123–125.",
  structure: {
    affirmative:
      "in the rain/sun… | in love / in my opinion | on TV / on purpose / on holiday | at the age of… / at + speed/temp",
    negative:
      "on purpose ≠ by accident (Unit 128); for a holiday cũng đúng",
  },
  usagePoints: [
    {
      before: "in the rain / sun / shade / dark; ",
      strong: "in a language / currency",
      after: ": How do you say this in Russian? What's that in dollars?",
    },
    {
      before: "in love; in a mood; ",
      strong: "in my opinion",
      after: ": They're in love. You seem in a bad mood. In my opinion the movie wasn't good.",
    },
    {
      before: "on TV / radio / the phone; ",
      strong: "on fire / on purpose",
      after: "; on the whole (= nói chung).",
    },
    {
      before: "on holiday / on a trip / ",
      strong: "on business / on strike / on a diet",
      after: "; cũng: go to France for a holiday.",
    },
    {
      before: "at the age of 16; ",
      strong: "at 120 miles an hour",
      after: "; Water boils at 100 degrees Celsius.",
    },
    {
      before: "Đang bay ",
      strong: "at a speed of…",
      after: " and at an altitude of…",
    },
  ],
  examples: [
    {
      english: "Don't go out in the rain. We sat in the shade.",
      vietnamese: "Đừng ra ngoài lúc mưa. Chúng tôi ngồi trong bóng râm.",
    },
    {
      english: "How do you say 'thank you' in Russian?",
      vietnamese: "Nói 'cảm ơn' bằng tiếng Nga thế nào?",
    },
    {
      english: "I heard the weather forecast on the radio.",
      vietnamese: "Tôi nghe dự báo thời tiết trên đài.",
    },
    {
      english: "I'm sorry. I didn't do it on purpose.",
      vietnamese: "Xin lỗi. Tôi không cố ý.",
    },
    {
      english: "I'm going on holiday next week. Emma's away on business.",
      vietnamese: "Tuần sau tôi đi nghỉ. Emma đang đi công tác.",
    },
    {
      english: "Tracy left school at the age of 16. / at 16.",
      vietnamese: "Tracy nghỉ học năm 16 tuổi.",
    },
    {
      english: "Water boils at 100 degrees Celsius.",
      vietnamese: "Nước sôi ở 100 độ C.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 501,
  },
};
