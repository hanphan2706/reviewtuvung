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
    "Bài này giúp bạn dùng in, on và at trong các ngữ cảnh đặc biệt ngoài thời gian và vị trí thông thường: in the rain/language/love/opinion, on TV/phone/purpose/holiday, và at the age of / at 100 degrees. Nên học kèm Units 121, 123–125.",
  structure: {
    affirmative:
      "in the rain/sun… | in love / in my opinion | on TV / on purpose / on holiday | at the age of… / at + speed/temp",
    negative:
      "KHÔNG nhầm on purpose (= cố ý) với by accident (Unit 128) | on holiday cũng đúng; go to France for a holiday cũng được",
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
      strong: "on fire",
      after: ": I heard the weather forecast on the radio.",
    },
    {
      before: "on purpose = ",
      strong: "cố ý",
      after: ": I'm sorry. I didn't do it on purpose.",
    },
    {
      before: "on the whole = ",
      strong: "nói chung",
      after: ": On the whole, I enjoyed the trip.",
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
      vietnamese: "in the rain/shade = trong điều kiện mưa/bóng râm.",
    },
    {
      english: "How do you say 'thank you' in Russian?",
      vietnamese: "in Russian = bằng tiếng Nga (ngôn ngữ).",
    },
    {
      english: "I heard the weather forecast on the radio.",
      vietnamese: "on the radio = qua sóng đài, không phải 'trong' đài.",
    },
    {
      english: "I'm sorry. I didn't do it on purpose.",
      vietnamese: "on purpose = cố ý — đối lập by accident (Unit 128).",
    },
    {
      english: "I'm going on holiday next week. Emma's away on business.",
      vietnamese: "on holiday/on business = đi nghỉ/đi công tác (trạng thái).",
    },
    {
      english: "Tracy left school at the age of 16. / at 16.",
      vietnamese: "at the age of / at 16 = ở tuổi 16.",
    },
    {
      english: "Water boils at 100 degrees Celsius.",
      vietnamese: "at + nhiệt độ = ở mức nhiệt độ đó.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 501,
  },
};
