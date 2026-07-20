import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 53 — Verb + -ing (enjoy doing / stop doing etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Units 54, 56–58 (Verb + to … / -ing or to …).
 */
export const U53_VERB_ING_TOPIC: GrammarTopicDetail = {
  slug: "u53-verb-ing",
  title: "Verb + -ing",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 53",
  sourceNote:
    "enjoy / mind / suggest / stop / finish… + -ing; give up / put off / go on / keep on; verb + somebody + -ing; having done. Nên học kèm Units 54, 56–58.",
  intro:
    "Bài này giúp bạn dùng -ing sau các động từ như enjoy, mind, suggest, stop và finish, kể cả cụm phrasal give up / put off / keep on và mẫu verb + somebody + -ing. Nên học kèm Unit 54 (Verb + to …) và Units 56–58 (cùng -ing hoặc to …).",
  structure: {
    affirmative:
      "enjoy/mind/suggest/stop… + V-ing | give up / put off / go on / keep (on) + V-ing | verb + somebody + V-ing",
    negative:
      "enjoy/mind… + not + V-ing | KHÔNG dùng to … sau enjoy / mind / suggest",
  },
  usagePoints: [
    {
      before: "Sau enjoy / mind / suggest dùng ",
      strong: "-ing",
      after: " (KHÔNG dùng to …): I enjoy reading. Would you mind closing the door?",
    },
    {
      before: "Cùng nhóm: ",
      strong: "stop, finish, avoid, admit, deny, risk, consider…",
      after: " + -ing: He tried to avoid answering. They denied doing anything wrong.",
    },
    {
      before: "Phrasal: ",
      strong: "give up / put off / go on / keep (on)",
      after: " + -ing: I've given up buying newspapers. You keep interrupting me.",
    },
    {
      before: "Phủ định: ",
      strong: "not + -ing",
      after: ": I enjoy not having to get up early.",
    },
    {
      before: "Một số động từ có thể theo ",
      strong: "somebody + -ing",
      after: ": I don't remember her saying that. Sorry to keep you waiting.",
    },
    {
      before: "Hành động đã xong có thể dùng ",
      strong: "having done",
      after: " (hoặc chỉ -ing): They admitted (having) stolen the money.",
    },
  ],
  examples: [
    {
      english: "I enjoy reading. (not enjoy to read)",
      vietnamese: "Sau enjoy dùng -ing, KHÔNG dùng enjoy to read.",
    },
    {
      english: "Would you mind closing the door?",
      vietnamese: "Mind luôn theo -ing khi nhờ ai làm gì.",
    },
    {
      english: "Suddenly everybody stopped talking. There was silence.",
      vietnamese: "Stop + -ing = ngừng việc đang làm.",
    },
    {
      english: "I've given up buying newspapers. I don't read them any more.",
      vietnamese: "Give up + -ing = bỏ thói quen làm gì.",
    },
    {
      english: "You can't stop people doing what they want.",
      vietnamese: "Stop somebody + -ing = ngăn ai đó làm gì.",
    },
    {
      english: "They admitted stealing / having stolen the money.",
      vietnamese: "Admit + -ing hoặc having done đều được khi nói việc đã xảy ra.",
    },
    {
      english: "When I'm on holiday, I enjoy not having to get up early.",
      vietnamese: "Phủ định trong -ing: not + -ing.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
