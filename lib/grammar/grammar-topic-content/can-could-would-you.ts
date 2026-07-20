import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 37 — Can/Could/Would you … ? (requests, offers, permission, invitations).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 26 (can/could) để nắm nghĩa khả năng trước khi dùng trong lời nhờ/xin phép.
 */
export const U37_CAN_COULD_WOULD_YOU_TOPIC: GrammarTopicDetail = {
  slug: "u37-can-could-would-you",
  title: "Can / Could / Would You … ?",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 37",
  sourceNote:
    "Can/Could/Would you…?: nhờ vả, xin đồ, xin phép, đề nghị/mời. Nên học kèm Unit 26 (can, could and (be) able to).",
  intro:
    "Bài này giúp bạn dùng Can/Could/Would you…? để nhờ vả, xin đồ, xin phép, đề nghị giúp và mời — cùng I'd like như cách nói lịch sự. Nên học kèm Unit 26.",
  structure: {
    affirmative:
      "Can/Could you + V…? | Can/Could/May I (have)…? | Would you like…? | I'd like (+ noun / to + V)",
    negative:
      "KHÔNG nói Do you think you can…? → Do you think you could…? | Do you mind if I…? — trả lời No = đồng ý",
  },
  usagePoints: [
    {
      before: "Nhờ người khác: ",
      strong: "Can/Could you…?",
      after: " / Do you think you could…? (không: Do you think you can): Could you open the door, please?",
    },
    {
      before: "Xin đồ: ",
      strong: "Can/Could/May I have…?",
      after: " / Can I get…?: Can I have these postcards, please?",
    },
    {
      before: "Xin phép: ",
      strong: "Can/Could/May I…?",
      after: " / Do you mind if I…? / Is it OK if I…?: Could I use your phone charger?",
    },
    {
      before: "Do you mind if I…? — trả lời ",
      strong: "No = đồng ý",
      after: " (không phải từ chối).",
    },
    {
      before: "Đề nghị giúp: ",
      strong: "Can I…?",
      after: ": Can I help you? Can I give you a hand?",
    },
    {
      before: "Mời/đề nghị: ",
      strong: "Would you like…?",
      after: " (không Do you like với nghĩa này): Would you like some coffee?",
    },
    {
      before: "I'd like… = ",
      strong: "cách lịch sự nói muốn gì",
      after: ": I'd like some information about hotels. I'd like to try on this jacket.",
    },
  ],
  examples: [
    {
      english: "Could you open the door, please?",
      vietnamese: "Could you = nhờ lịch sự — lịch sự hơn Can you.",
    },
    {
      english: "Can I have these postcards, please?",
      vietnamese: "Can I have = xin mua/lấy — không phải hỏi thích hay không.",
    },
    {
      english: "Could I use your phone charger?",
      vietnamese: "Could I = xin phép mượn — lịch sự hơn Can I.",
    },
    {
      english: "Can I help you? / Can I give you a hand?",
      vietnamese: "Can I help = đề nghị giúp — chủ động offer.",
    },
    {
      english: "Would you like some coffee?",
      vietnamese: "Would you like = mời uống — KHÔNG nói Do you like coffee? (sở thích).",
    },
    {
      english: "I'd like some information about hotels, please.",
      vietnamese: "I'd like = muốn (lịch sự) — thay cho I want trong giao tiếp.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
