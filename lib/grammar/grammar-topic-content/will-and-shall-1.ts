import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 21 — Will and shall 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 22 (will and shall 2 — dự đoán) để nắm trọn cách dùng will/shall.
 */
export const U21_WILL_AND_SHALL_1_TOPIC: GrammarTopicDetail = {
  slug: "u21-will-and-shall-1",
  title: "Will and Shall 1",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 21",
  sourceNote:
    "will/'ll cho quyết định ngay lúc nói, đề nghị/hứa/đồng ý; shall I…?/shall we…? để xin ý kiến. Nên học kèm Unit 22 (will/shall cho dự đoán tương lai).",
  intro:
    "Bài này giúp bạn dùng will/'ll cho quyết định vừa đưa ra ngay lúc nói, để đề nghị giúp đỡ, hứa hẹn hoặc đồng ý làm gì, và dùng shall I…?/shall we…? để xin ý kiến người nghe. Nên học kèm Unit 22 để nắm cả will/shall dùng cho dự đoán tương lai.",
  structure: {
    affirmative: "S + will/'ll + V (quyết định ngay lúc nói) | Shall I/we + V…?",
    negative:
      "KHÔNG dùng will cho việc đã quyết định/sắp xếp từ trước → I'm going on holiday next Saturday. (không: I'll go on holiday next Saturday) | S + will not/won't + V",
  },
  usagePoints: [
    {
      before: "I'll… dùng khi ",
      strong: "vừa quyết định ngay lúc nói",
      after: " — không dùng present simple: Oh, I left the door open. I'll go and shut it. (không nói I go and shut it)",
    },
    {
      before: "Dùng I'll để ",
      strong: "đề nghị giúp đỡ",
      after: " (That bag looks heavy. I'll help you with it), đồng ý làm việc gì (Sure, I'll give it to him) hoặc hứa hẹn (I'll pay you back on Friday).",
    },
    {
      before: "won't = ",
      strong: "từ chối/không chịu làm",
      after: " (The car won't start. = xe 'không chịu' nổ máy); còn I won't… = tôi sẽ không (hứa) làm gì.",
    },
    {
      before: "Will you…? = ",
      strong: "làm ơn hãy làm việc gì",
      after: " (Will you please turn the music down? = làm ơn tắt/giảm nhạc đi).",
    },
    {
      before: "Không dùng will cho điều ",
      strong: "đã quyết định/sắp xếp từ trước",
      after: " — dùng present continuous (I'm going on holiday next Saturday, không nói I'll go).",
    },
    {
      before: "shall chủ yếu dùng trong câu hỏi ",
      strong: "Shall I…?/Shall we…?",
      after: " để hỏi ý kiến hoặc xin gợi ý: Shall I open the window? Where shall we have lunch?",
    },
  ],
  examples: [
    {
      english: "Oh, I left the door open. I'll go and shut it.",
      vietnamese: "'ll go = quyết định vừa nảy ra ngay lúc nói, không dùng present simple.",
    },
    {
      english: "'What would you like to drink?' 'I'll have orange juice, please.'",
      vietnamese: "'ll have = quyết định tức thời ngay khi được hỏi.",
    },
    {
      english: "That bag looks heavy. I'll help you with it.",
      vietnamese: "'ll help = đề nghị giúp đỡ ngay khi thấy tình huống.",
    },
    {
      english: "Thanks for lending me the money. I'll pay you back on Friday.",
      vietnamese: "'ll pay back = lời hứa, không phải kế hoạch đã định từ trước.",
    },
    {
      english: "I've tried to give her advice, but she won't listen.",
      vietnamese: "Won't listen = từ chối/không chịu nghe, không phải 'sẽ không nghe'.",
    },
    {
      english: "Will you please turn the music down? It's too loud.",
      vietnamese: "Will you…? = yêu cầu lịch sự, làm ơn hãy làm gì.",
    },
    {
      english: "Shall I open the window?",
      vietnamese: "Shall I…? = xin ý kiến người nghe, không phải tuyên bố quyết định.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
