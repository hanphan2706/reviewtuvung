import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 11 — How long have you (been) ... ?
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 10 (continuous và simple) và Unit 12 (for and since).
 */
export const HOW_LONG_HAVE_YOU_BEEN_TOPIC: GrammarTopicDetail = {
  slug: "u11-how-long-have-you-been",
  title: "How Long Have You (Been) ...?",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 11",
  sourceNote:
    "Hỏi how long về việc bắt đầu trong quá khứ và còn tiếp diễn tới hiện tại phải dùng present perfect, không dùng hiện tại đơn/tiếp diễn. Nên học kèm Unit 10 và Unit 12.",
  intro:
    "Bài này giúp bạn dùng present perfect (đơn hoặc tiếp diễn) để hỏi và trả lời how long về việc bắt đầu trong quá khứ và vẫn tiếp diễn tới hiện tại, thay vì dùng nhầm hiện tại đơn/tiếp diễn. Nên học kèm Unit 10 (continuous và simple) để chọn đúng dạng, và xem tiếp Unit 12 (for and since) để nắm cách nói khoảng thời gian.",
  structure: {
    affirmative: "How long + have/has + S + (been) + V-ing/V3 ...?",
    negative:
      "KHÔNG dùng hiện tại đơn/tiếp diễn với since/for khi việc vẫn còn tiếp diễn (Paul is in hospital since Monday) — dùng present perfect: He's been in hospital since Monday | S + haven't/hasn't + (been) + V-ing/V3 + for/since ...",
  },
  usagePoints: [
    {
      before: "Hiện tại đơn/tiếp diễn (",
      strong: "Paul is in hospital",
      after: ") chỉ nói tình trạng lúc này, không cho biết đã bao lâu.",
    },
    {
      before: "Muốn nói đã kéo dài bao lâu, dùng ",
      strong: "present perfect",
      after: ": He's been in hospital since Monday (not Paul is in hospital since Monday).",
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
      vietnamese: "present perfect + since = nằm viện từ thứ Hai tới giờ, vẫn còn nằm viện.",
    },
    {
      english: "We've known each other for a long time.",
      vietnamese: "know là động từ trạng thái — luôn dùng simple, không thêm been.",
    },
    {
      english: "How long have they had their car?",
      vietnamese: "have (sở hữu) không dùng continuous — hỏi thời gian sở hữu bằng present perfect simple.",
    },
    {
      english: "They have been married for 20 years.",
      vietnamese: "have been married = trạng thái kéo dài 20 năm, tính đến hiện tại.",
    },
    {
      english: "Julia has been living in this house for a long time.",
      vietnamese: "live cho phép cả continuous và simple — has lived cũng đúng nghĩa tương tự.",
    },
    {
      english: "I've always lived in the country.",
      vietnamese: "always luôn đi với simple, không nói always been living.",
    },
    {
      english: "I haven't seen Tom since Monday.",
      vietnamese: "haven't + since = lần cuối gặp là thứ Hai, từ đó đến nay chưa gặp lại.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 1035,
  },
};
