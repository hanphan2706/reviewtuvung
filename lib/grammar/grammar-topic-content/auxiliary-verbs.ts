import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 51 — Auxiliary verbs (have/do/can etc.) / I think so….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 49–50 (Questions); question tags ➜ Unit 52.
 */
export const U51_AUXILIARY_VERBS_TOPIC: GrammarTopicDetail = {
  slug: "u51-auxiliary-verbs",
  title: "Auxiliary Verbs",
  levelLabel: "Intermediate",
  kindLabel: "Auxiliary",
  sourceBook: "English Grammar in Use · Intermediate · Unit 51",
  sourceNote:
    "Trợ động từ (have/do/can…) thay cho lặp cả động từ; so am I / neither do I; I think so / I hope not thay cho lặp cả mệnh đề. Nên học kèm Units 49–50, Unit 52.",
  intro:
    "Bài này giúp bạn dùng trợ động từ để tránh lặp lại động từ đã nói trước đó, phản hồi bằng so/neither + trợ động từ + chủ ngữ, và dùng I think so / I hope not để tránh lặp cả mệnh đề. Nên học kèm Units 49–50 (câu hỏi) và Unit 52 (question tags).",
  structure: {
    affirmative:
      "Yes, I have/do/can… | So + aux + S | I think/hope/expect so",
    negative:
      "KHÔNG nói I don't hope so → I hope not. (không: I don't hope so) | No, I'm not/I don't… | Neither/Nor + aux + S",
  },
  usagePoints: [
    {
      before: "Trợ động từ ",
      strong: "tránh lặp",
      after: ": Gary wasn't working, but Laura was. Jessica could lend me money, but she won't.",
    },
    {
      before: "Present/past simple → ",
      strong: "do/does/did",
      after: ": 'Does Simon live in London?' 'He did, but he doesn't any more.'",
    },
    {
      before: "Phản hồi ",
      strong: "quan tâm / ngạc nhiên",
      after: ": 'I've just seen Steven.' 'Oh, have you?'",
    },
    {
      before: "so / neither + ",
      strong: "aux + subject",
      after: ": So am I. Neither do I. (không: so Paul did → so did Paul)",
    },
    {
      before: "I think so / I hope so / ",
      strong: "I'm afraid so",
      after: "… khi không muốn lặp cả mệnh đề.",
    },
    {
      before: "Phủ định: ",
      strong: "I don't think so; I hope not",
      after: " (không: I don't hope so).",
    },
  ],
  examples: [
    {
      english: "'Have you locked the door?' 'Yes, I have.'",
      vietnamese: "Yes, I have = trợ động từ have thay cho 'I have locked the door'.",
    },
    {
      english: "'You're sitting in my place.' 'No, I'm not.'",
      vietnamese: "No, I'm not = trợ động từ am thay cho lặp cả câu.",
    },
    {
      english: "'I'm tired.' 'So am I.'",
      vietnamese: "So am I = so + trợ động từ + chủ ngữ, không đảo ngược lại.",
    },
    {
      english: "'I never read newspapers.' 'Neither do I.'",
      vietnamese: "Neither do I = neither + trợ động từ + chủ ngữ, ý phủ định giống nhau.",
    },
    {
      english: "'Are those people Korean?' 'I think so.'",
      vietnamese: "I think so = tránh lặp cả mệnh đề khẳng định.",
    },
    {
      english: "'Do you think it will rain?' 'I hope not.'",
      vietnamese: "I hope not = phủ định của hope, KHÔNG nói I don't hope so.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 505,
  },
};
