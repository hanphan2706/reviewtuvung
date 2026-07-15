import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 47 — Reported speech 1 (he said that …).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 48 (Reported speech 2); câu hỏi tường thuật ➜ Unit 50.
 */
export const U47_REPORTED_SPEECH_1_TOPIC: GrammarTopicDetail = {
  slug: "u47-reported-speech-1",
  title: "Reported Speech 1",
  levelLabel: "Intermediate",
  kindLabel: "Reported speech",
  sourceBook: "English Grammar in Use · Intermediate · Unit 47",
  sourceNote:
    "Direct → reported; lùi thì (am→was, will→would…); that có thể lược. Nên học kèm Unit 48; reported questions ➜ Unit 50.",
  intro:
    "Direct → reported; lùi thì (am→was, will→would…); that có thể lược. Nên học kèm Unit 48 (say/tell, không luôn lùi thì) và Unit 50B (câu hỏi tường thuật).",
  structure: {
    affirmative:
      "S + said/told … (that) + S + past verb | Paul said he was feeling ill",
    negative:
      "… said (that) + S + didn't / wasn't / wouldn't / couldn't…",
  },
  usagePoints: [
    {
      before: "Reported: động từ chính ",
      strong: "thường past",
      after: " → phần sau cũng thường past: I told Lisa that I didn't have any money.",
    },
    {
      before: "Có thể ",
      strong: "bỏ that",
      after: ": Paul said he was feeling ill.",
    },
    {
      before: "Lùi thì: ",
      strong: "am/is→was, will→would, can→could…",
      after: ": 'I'll phone' → she would phone when she got back.",
    },
    {
      before: "Past simple có thể ",
      strong: "giữ hoặc → past perfect",
      after: ": he woke up / he had woken up; he didn't go / he hadn't gone.",
    },
    {
      before: "Đại từ / sở hữu đổi theo ",
      strong: "người nói",
      after: ": I've lost my phone → she had lost her phone.",
    },
    {
      before: "Xem thêm Unit 48: ",
      strong: "không luôn phải lùi thì",
      after: " nếu tình huống vẫn đúng.",
    },
  ],
  examples: [
    {
      english: "Paul said that he was feeling ill.",
      vietnamese: "Paul nói rằng anh ấy đang cảm thấy ốm.",
    },
    {
      english: "Anna said that she had lost her phone.",
      vietnamese: "Anna nói rằng cô đã mất điện thoại. ('I've lost…')",
    },
    {
      english: "She said that she couldn't come to the party on Friday.",
      vietnamese: "Cô ấy nói không thể đến tiệc thứ Sáu.",
    },
    {
      english: "She said she was going away and would phone me when she got back.",
      vietnamese: "Cô ấy nói sẽ đi vài ngày và sẽ gọi khi về.",
    },
    {
      english: "Paul said he woke up feeling ill, so he didn't go to work.",
      vietnamese: "Paul nói anh thức dậy thấy ốm nên không đi làm. (past có thể giữ)",
    },
    {
      english: "Paul said he had woken up feeling ill, so he hadn't gone to work.",
      vietnamese: "Cũng đúng với past perfect.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 490,
  },
};
