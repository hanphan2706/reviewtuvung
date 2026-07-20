import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 41 — Wish.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 39 (I wish I knew), Unit 40 (I wish I had known); phân biệt wish vs hope.
 */
export const U41_WISH_TOPIC: GrammarTopicDetail = {
  slug: "u41-wish",
  title: "Wish",
  levelLabel: "Intermediate",
  kindLabel: "Wish",
  sourceBook: "English Grammar in Use · Intermediate · Unit 41",
  sourceNote:
    "wish somebody luck…; hope cho việc bạn muốn xảy ra (không phải wish + present); wish + past / had / could / would. KHÔNG dùng wish + would cho tình trạng bạn mong muốn. Nên học kèm Units 39–40.",
  intro:
    "Bài này giúp bạn dùng wish để chúc may mắn, phân biệt wish với hope, nói tiếc nuối về hiện tại (wish + past) và quá khứ (wish + had), và dùng wish + would để phàn nàn hoặc muốn ai đó thay đổi. Nên học kèm Units 39–40.",
  structure: {
    affirmative:
      "wish + somebody + luck/success… | I wish + S + V2 / had + V3 / could… | I wish + S + would + V",
    negative:
      "KHÔNG dùng wish + present cho hope → I hope you feel better (không: I wish you feel) | KHÔNG dùng wish + would be / would have → I wish Sarah was here (không: I wish Sarah would be here) | I wish + wouldn't / hadn't + V3",
  },
  usagePoints: [
    {
      before: "wish somebody ",
      strong: "luck / all the best / success",
      after: ": I wish you all the best. He wished me luck.",
    },
    {
      before: "Muốn việc gì xảy ra → dùng ",
      strong: "hope + present/future",
      after: ": I hope you feel better soon. (= I want this to happen)",
    },
    {
      before: "KHÔNG nói ",
      strong: "wish + present",
      after: " cho hope: (không: I wish you feel)",
    },
    {
      before: "wish + past = ",
      strong: "tiếc hiện tại (Unit 39)",
      after: ": I wish I knew what to do. I wish you didn't have to go so soon.",
    },
    {
      before: "wish + had… = ",
      strong: "tiếc quá khứ (Unit 40)",
      after: ": I wish I'd known about the party. I wish I hadn't said it.",
    },
    {
      before: "Muốn ai đó thay đổi hành vi → ",
      strong: "wish + would / wouldn't",
      after: ": I wish it would stop raining. I wish you wouldn't keep interrupting me.",
    },
    {
      before: "Mong có tình trạng khác → ",
      strong: "wish + past / had",
      after: ": I wish Sarah was here. I wish I had a car. (không: would be / would have)",
    },
  ],
  examples: [
    {
      english: "I wish you all the best in the future.",
      vietnamese: "Wish somebody + danh từ = chúc may mắn — không phải tiếc nuối.",
    },
    {
      english: "I'm sorry you're not well. I hope you feel better soon.",
      vietnamese: "Hope + present = muốn việc xảy ra — KHÔNG nói I wish you feel.",
    },
    {
      english: "I wish I knew what to do about the problem.",
      vietnamese: "Wish + past = tiếc hiện tại — thực tế tôi không biết phải làm gì.",
    },
    {
      english: "I wish I hadn't said it.",
      vietnamese: "Wish + hadn't = tiếc quá khứ — đã nói rồi, giờ hối hận.",
    },
    {
      english: "I wish it would stop raining.",
      vietnamese: "Wish + would = muốn trời đổi — thường mang ý phàn nàn.",
    },
    {
      english: "I wish you wouldn't keep interrupting me.",
      vietnamese: "Wish + wouldn't = muốn bạn ngừng hành vi — please stop.",
    },
    {
      english: "I wish I had a car.",
      vietnamese: "Wish + past cho tình trạng mong muốn — KHÔNG nói I wish I would have a car.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
