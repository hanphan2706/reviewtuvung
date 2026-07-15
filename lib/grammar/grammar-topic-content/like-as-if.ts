import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 118 — Like / As If.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 117 (like and as); so sánh look + adjective vs look like / as if.
 */
export const U118_LIKE_AS_IF_TOPIC: GrammarTopicDetail = {
  slug: "u118-like-as-if",
  title: "Like / As If",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 118",
  sourceNote:
    "look/sound/feel like / as if / as though + S + V; It looks like…; as if + past (không thật). Nên học kèm Unit 117.",
  intro:
    "Unit này giúp bạn nắm Like / As If: Look/sound/feel like / as if / as though + S + V; It looks like…; as if + past (không thật). Nên học kèm Unit 117.",
  structure: {
    affirmative:
      "look/sound/feel + like / as if / as though + S + V | It looks/sounds like… | as if + past (không thật)",
    negative:
      "không: look like tired | as if + will… cho ý không thật → dùng past / were",
  },
  usagePoints: [
    {
      before: "look / sound / feel + ",
      strong: "like / as if / as though",
      after: " + S + V: Amy sounded like she had a cold. I don't feel as if I've had a holiday.",
    },
    {
      before: "look + adjective vs ",
      strong: "look like / as if + mệnh đề",
      after: ": You look tired. / You look as if you haven't slept.",
    },
    {
      before: "It looks like… / ",
      strong: "It sounds like…",
      after: ": It looks like she isn't coming. It sounds like they're having a party.",
    },
    {
      before: "Các động từ khác + ",
      strong: "like / as if / as though",
      after: ": He ran like he was running for his life. They looked at me as though I was mad.",
    },
    {
      before: "as if + quá khứ = ",
      strong: "ý không thật (hiện tại)",
      after: ": He talks as if he knew everything. (= he doesn't)",
    },
    {
      before: "Có thể dùng ",
      strong: "were thay was",
      after: ": Why talk about him as if he were an old man? They treat me as if I were their son.",
    },
  ],
  examples: [
    {
      english: "That house looks like it's going to fall down.",
      vietnamese: "Ngôi nhà trông như sắp sụp. (cũng: looks as if…)",
    },
    {
      english: "You look tired. / You look as if you haven't slept.",
      vietnamese: "Bạn trông mệt. / Bạn trông như chưa ngủ.",
    },
    {
      english: "It looks like she isn't coming.",
      vietnamese: "Hình như cô ấy không đến.",
    },
    {
      english: "It sounds as though they're having a party.",
      vietnamese: "Nghe như họ đang tíu tít tiệc tùng.",
    },
    {
      english: "He talks as if he knew everything.",
      vietnamese: "Anh ta nói như thể biết hết mọi thứ. (ý không thật — không dùng like kiểu này)",
    },
    {
      english: "Why do you talk about him as if he were an old man?",
      vietnamese: "Sao bạn nói về anh ấy như thể ông già? (were hoặc was)",
    },
    {
      english: "They treat me as if I was their own son.",
      vietnamese: "Họ đối xử với tôi như con ruột. (tôi không phải)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
