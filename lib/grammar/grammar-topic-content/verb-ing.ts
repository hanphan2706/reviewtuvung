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
    "Trong unit này bạn sẽ nắm: enjoy / mind / suggest / stop / finish… + -ing; give up / put off / go on / keep on; verb + somebody + -ing; having done. Nên học kèm Unit 54 (Verb + to …) và Units 56–58 (cùng -ing hoặc to …).",
  structure: {
    affirmative:
      "enjoy/mind/suggest/stop… + V-ing | give up / put off / go on / keep (on) + V-ing | verb + somebody + V-ing",
    negative:
      "enjoy/mind… + not + V-ing | don't mind + somebody + V-ing",
  },
  usagePoints: [
    {
      before: "Sau enjoy / mind / suggest dùng ",
      strong: "-ing",
      after: " (không to …): I enjoy reading. Would you mind closing the door?",
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
      before: "verb + ",
      strong: "somebody + -ing",
      after: ": I don't remember her saying that. Sorry to keep you waiting.",
    },
    {
      before: "Hành động đã xong: ",
      strong: "having done",
      after: " (hoặc chỉ -ing): They admitted (having) stolen the money.",
    },
  ],
  examples: [
    {
      english: "I enjoy reading. (not enjoy to read)",
      vietnamese: "Tôi thích đọc sách. (không: enjoy to read)",
    },
    {
      english: "Would you mind closing the door?",
      vietnamese: "Bạn có phiền đóng cửa giúp không?",
    },
    {
      english: "Suddenly everybody stopped talking. There was silence.",
      vietnamese: "Bỗng mọi người ngừng nói chuyện. Im lặng.",
    },
    {
      english: "I've given up buying newspapers. I don't read them any more.",
      vietnamese: "Tôi đã bỏ mua báo. Tôi không đọc nữa.",
    },
    {
      english: "You can't stop people doing what they want.",
      vietnamese: "Bạn không thể ngăn người khác làm điều họ muốn.",
    },
    {
      english: "They admitted stealing / having stolen the money.",
      vietnamese: "Họ thừa nhận đã lấy tiền. (having stolen cũng đúng)",
    },
    {
      english: "When I'm on holiday, I enjoy not having to get up early.",
      vietnamese: "Khi đi nghỉ, tôi thích không phải dậy sớm.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
