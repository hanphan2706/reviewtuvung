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
    "Can/Could/Would you…?: nhờ vả, xin đồ, xin phép, đề nghị/mời. Nên học kèm Unit 26.",
  structure: {
    affirmative:
      "Can/Could you + V…? | Can/Could/May I (have)…? | Would you like…? | I'd like (+ noun / to + V)",
    negative: "Do you mind if I…? (trả lời No = đồng ý) | I'd rather not…",
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
      vietnamese: "Bạn mở cửa giúp được không?",
    },
    {
      english: "Can I have these postcards, please?",
      vietnamese: "Cho tôi mấy tấm bưu thiếp này được không?",
    },
    {
      english: "Could I use your phone charger?",
      vietnamese: "Tôi mượn sạc điện thoại được không?",
    },
    {
      english: "Can I help you? / Can I give you a hand?",
      vietnamese: "Tôi giúp gì được không?",
    },
    {
      english: "Would you like some coffee?",
      vietnamese: "Bạn dùng cà phê chứ?",
    },
    {
      english: "I'd like some information about hotels, please.",
      vietnamese: "Tôi muốn thông tin về khách sạn, làm ơn.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
