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
    "look / sound / feel + like / as if / as though + S + V; It looks like…; as if + past cho ý không thật (hiện tại). Nên học kèm Unit 117.",
  intro:
    "Bài này giúp bạn mô tả ấn tượng bằng look / sound / feel + like / as if / as though, phân biệt look + tính từ với look like / as if + mệnh đề, và dùng as if + past cho ý không thật. Nên học kèm Unit 117.",
  structure: {
    affirmative:
      "look/sound/feel + like / as if / as though + S + V | It looks/sounds like… | as if + past (không thật)",
    negative:
      "KHÔNG nói look like tired → look tired hoặc look as if you haven't slept | as if + ý không thật dùng past / were, không dùng will",
  },
  usagePoints: [
    {
      before: "look / sound / feel + ",
      strong: "like / as if / as though",
      after: " + S + V: Amy sounded like she had a cold. I don't feel as if I've had a holiday.",
    },
    {
      before: "look + ",
      strong: "adjective",
      after: " (tính từ trực tiếp): You look tired.",
    },
    {
      before: "look + ",
      strong: "like / as if + mệnh đề",
      after: ": You look as if you haven't slept.",
    },
    {
      before: "",
      strong: "It looks like… / It sounds like…",
      after: ": It looks like she isn't coming. It sounds like they're having a party.",
    },
    {
      before: "Các động từ khác + ",
      strong: "like / as if / as though",
      after: ": He ran like he was running for his life. They looked at me as though I was mad.",
    },
    {
      before: "as if + ",
      strong: "past",
      after: " = ý không thật (hiện tại): He talks as if he knew everything. (= he doesn't)",
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
      vietnamese: "Look like + mệnh đề = trông như sắp sụp (cũng: looks as if…).",
    },
    {
      english: "You look tired. / You look as if you haven't slept.",
      vietnamese: "Look tired = tính từ trực tiếp; look as if = mệnh đề giải thích vì sao trông mệt.",
    },
    {
      english: "It looks like she isn't coming.",
      vietnamese: "It looks like = hình như / có vẻ cô ấy không đến.",
    },
    {
      english: "It sounds as though they're having a party.",
      vietnamese: "It sounds as though = nghe như đang có tiệc.",
    },
    {
      english: "He talks as if he knew everything.",
      vietnamese: "As if + past = nói như thể biết hết — thực ra không biết.",
    },
    {
      english: "Why do you talk about him as if he were an old man?",
      vietnamese: "Were (hoặc was) sau as if khi ý không thật — anh ấy không phải ông già.",
    },
    {
      english: "They treat me as if I was their own son.",
      vietnamese: "As if I was = đối xử như con ruột — thực ra tôi không phải.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
