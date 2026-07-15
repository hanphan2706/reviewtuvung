import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 112 — Even.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * even though → Unit 113; word order → Unit 110.
 */
export const U112_EVEN_TOPIC: GrammarTopicDetail = {
  slug: "u112-even",
  title: "Even",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 112",
  sourceNote:
    "even / not even; even + comparative; even though / even when / even if (không even + S + V). Nên học kèm Unit 113 (even though).",
  intro:
    "Unit này giúp bạn nắm Even: Even / not even; even + comparative; even though / even when / even if (không even + S + V). Nên học kèm Unit 113.",
  structure: {
    affirmative: "even + noun/phrase | S + even + V | even + comparative | even though/if/when + S + V",
    negative: "not even … | can't/don't/didn't even + V",
  },
  usagePoints: [
    {
      before: "",
      strong: "even",
      after: " = bất thường/ngạc nhiên: even the bathroom; She's even been to the Antarctic.",
    },
    {
      before: "",
      strong: "not even / can't even",
      after: ": They didn't even say hello. I can't even boil an egg.",
    },
    {
      before: "",
      strong: "even + comparative",
      after: ": even hotter, even more surprised, even less.",
    },
    {
      before: "",
      strong: "even though / even when / even if + S + V",
      after: " — không: even + S + V.",
    },
    {
      before: "even if = dù thế nào; ",
      strong: "if",
      after: " = điều kiện: We're going even if the weather is bad. vs We won't go if it's bad.",
    },
    {
      before: "even (không if) + cụm: ",
      strong: "even for … / even with …",
      after: ": even for strong swimmers; even with glasses.",
    },
  ],
  examples: [
    {
      english: "She has a television in every room, even the bathroom.",
      vietnamese: "Cô ấy có TV mọi phòng, kể cả phòng tắm.",
    },
    {
      english: "She's even been to the Antarctic.",
      vietnamese: "Cô ấy thậm chí đã đến Nam Cực.",
    },
    {
      english: "I can't even boil an egg.",
      vietnamese: "Tôi thậm chí không luộc nổi một quả trứng.",
    },
    {
      english: "Today it's even hotter than yesterday.",
      vietnamese: "Hôm nay còn nóng hơn cả hôm qua.",
    },
    {
      english: "Even though Tina can't drive, she has a car.",
      vietnamese: "Dù Tina không lái được xe, cô ấy vẫn có xe. (không: Even she can't drive)",
    },
    {
      english: "We're going even if the weather is bad.",
      vietnamese: "Chúng tôi vẫn đi dù thời tiết xấu.",
    },
    {
      english: "Nobody would help her, not even her best friend.",
      vietnamese: "Không ai giúp cô ấy, kể cả bạn thân nhất.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
