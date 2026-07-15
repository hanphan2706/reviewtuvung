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
    "Trợ động từ tránh lặp; phản hồi ngạc nhiên; so / neither; I think so / I hope not…. Nên học kèm Units 49–50, 52.",
  intro:
    "Trợ động từ tránh lặp; phản hồi ngạc nhiên; so / neither; I think so / I hope not… Nên học kèm Units 49–50, 52.",
  structure: {
    affirmative:
      "Yes, I have/do/can… | So + aux + S | I think/hope/expect so",
    negative:
      "No, I'm not / I don't… | Neither/Nor + aux + S | I don't think so | I hope not",
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
      vietnamese: "—'Bạn khóa cửa chưa?' —'Rồi.' (= I have locked…)",
    },
    {
      english: "'You're sitting in my place.' 'No, I'm not.'",
      vietnamese: "—'Bạn đang ngồi chỗ tôi.' —'Không phải.'",
    },
    {
      english: "'I'm tired.' 'So am I.'",
      vietnamese: "—'Tôi mệt.' —'Tôi cũng vậy.'",
    },
    {
      english: "'I never read newspapers.' 'Neither do I.'",
      vietnamese: "—'Tôi không bao giờ đọc báo.' —'Tôi cũng không.'",
    },
    {
      english: "'Are those people Korean?' 'I think so.'",
      vietnamese: "—'Họ có phải người Hàn không?' —'Tôi nghĩ vậy.'",
    },
    {
      english: "'Do you think it will rain?' 'I hope not.'",
      vietnamese: "—'Bạn nghĩ trời sẽ mưa?' —'Hy vọng là không.' (không: I don't hope so)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 505,
  },
};
