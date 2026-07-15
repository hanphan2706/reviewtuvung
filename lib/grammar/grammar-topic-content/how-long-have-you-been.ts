import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 11 — How long have you (been) ... ?
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const HOW_LONG_HAVE_YOU_BEEN_TOPIC: GrammarTopicDetail = {
  slug: "u11-how-long-have-you-been",
  title: "How Long Have You (Been) ...?",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 11",
  sourceNote:
    "How long have you (been) ...? Present perfect cho việc bắt đầu trong quá khứ và còn tiếp diễn tới hiện tại; so sánh với thời hiện tại đơn/tiếp diễn.",
  intro:
    "Dùng present perfect (đơn hoặc tiếp diễn) để nói về việc bắt đầu trong quá khứ và vẫn còn tiếp diễn tới hiện tại — khi hỏi 'how long', không dùng thời hiện tại thường.",
  structure: {
    affirmative: "How long + have/has + S + (been) + V-ing/V3 ...?",
    negative: "S + haven't/hasn't + (been) + V-ing/V3 + for/since ...",
  },
  usagePoints: [
    {
      before: "So sánh hiện tại đơn/tiếp diễn (",
      strong: "Paul is in hospital",
      after: ") với present perfect (He's been in hospital since Monday) — không nói 'Paul is in hospital since Monday'.",
    },
    {
      before: "Khi hỏi/nói 'how long', ",
      strong: "continuous thường phổ biến hơn",
      after: ": I've been learning English since January.",
    },
    {
      before: "Một số động từ (",
      strong: "know, like, have theo nghĩa sở hữu",
      after: ") không dùng continuous: How long have you known Jane? (not have you been knowing)",
    },
    {
      before: "Với ",
      strong: "live và work",
      after: " có thể dùng cả continuous hoặc simple: Julia has been living / has lived in this house for a long time.",
    },
    {
      before: "Với ",
      strong: "always",
      after: ", luôn dùng simple: I've always lived in the country (not always been living).",
    },
    {
      before: "'I haven't ... since/for' dùng ",
      strong: "simple",
      after: " để nói lần cuối làm việc gì: I haven't seen Tom since Monday.",
    },
  ],
  examples: [
    {
      english: "He's been in hospital since Monday.",
      vietnamese: "Anh ấy nằm viện từ thứ Hai.",
    },
    {
      english: "We've known each other for a long time.",
      vietnamese: "Chúng tôi biết nhau đã lâu.",
    },
    {
      english: "How long have they had their car?",
      vietnamese: "Họ có chiếc xe đó bao lâu rồi?",
    },
    {
      english: "They have been married for 20 years.",
      vietnamese: "Họ đã kết hôn được 20 năm.",
    },
    {
      english: "Julia has been living in this house for a long time.",
      vietnamese: "Julia đã sống trong căn nhà này rất lâu.",
    },
    {
      english: "I've always lived in the country.",
      vietnamese: "Tôi luôn sống ở vùng nông thôn (từ trước tới nay).",
    },
    {
      english: "I haven't seen Tom since Monday.",
      vietnamese: "Tôi chưa gặp Tom từ thứ Hai.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 1035,
  },
};
