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
    "Direct speech → reported speech: lùi thì một bậc (am/is→was, will→would…); that có thể lược. Nên học kèm Unit 48; câu hỏi tường thuật ➜ Unit 50.",
  intro:
    "Bài này giúp bạn chuyển lời nói trực tiếp sang reported speech bằng cách lùi thì một bậc (am/is → was, will → would, can → could…), biết khi nào có thể bỏ that, và đổi đại từ/sở hữu theo người nói. Nên học kèm Unit 48 (say/tell, không luôn phải lùi thì) và Unit 50B (câu hỏi tường thuật).",
  structure: {
    affirmative:
      "S + said/told … (that) + S + past verb | Paul said he was feeling ill",
    negative:
      "KHÔNG giữ nguyên thì hiện tại khi động từ tường thuật ở quá khứ → she said she didn't have any money (không: she said she doesn't have) | said/told (that) + S + didn't/wasn't/wouldn't/couldn't…",
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
      vietnamese: "Was feeling = am/is lùi thành was trong reported speech.",
    },
    {
      english: "Anna said that she had lost her phone.",
      vietnamese: "Had lost = have lùi thành had (present perfect → past perfect).",
    },
    {
      english: "She said that she couldn't come to the party on Friday.",
      vietnamese: "Couldn't = can lùi thành could trong reported speech.",
    },
    {
      english: "She said she was going away and would phone me when she got back.",
      vietnamese: "Would phone = will lùi thành would.",
    },
    {
      english: "Paul said he woke up feeling ill, so he didn't go to work.",
      vietnamese: "Woke up / didn't go = past simple có thể giữ nguyên trong reported speech.",
    },
    {
      english: "Paul said he had woken up feeling ill, so he hadn't gone to work.",
      vietnamese: "Had woken up / hadn't gone = past simple cũng có thể đổi thành past perfect.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 490,
  },
};
