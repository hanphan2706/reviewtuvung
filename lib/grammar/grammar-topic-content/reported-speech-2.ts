import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 48 — Reported speech 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 47; reported questions ➜ Unit 50.
 */
export const U48_REPORTED_SPEECH_2_TOPIC: GrammarTopicDetail = {
  slug: "u48-reported-speech-2",
  title: "Reported Speech 2",
  levelLabel: "Intermediate",
  kindLabel: "Reported speech",
  sourceBook: "English Grammar in Use · Intermediate · Unit 48",
  sourceNote:
    "Không luôn lùi thì nếu tình huống vẫn đúng; say vs tell; tell/ask somebody to…. Nên học kèm Unit 47.",
  intro:
    "Không luôn lùi thì nếu tình huống vẫn đúng; say vs tell; tell/ask somebody to… Nên học kèm Unit 47.",
  structure: {
    affirmative:
      "said/told (that) + clause | tell/ask + somebody + to + V | say (not) to + V",
    negative:
      "told + somebody + not to + V | said not to + V | (không: said me…)",
  },
  usagePoints: [
    {
      before: "Tình huống còn đúng → ",
      strong: "có thể giữ hiện tại",
      after: ": She said she wants to go to Canada next year.",
    },
    {
      before: "Tình huống đã đổi / sai → ",
      strong: "dùng past",
      after: ": Rachel said you were in hospital. (không: are — vì rõ là không)",
    },
    {
      before: "tell + ",
      strong: "người nghe",
      after: ": What did you tell the police? (không: say the police)",
    },
    {
      before: "say ",
      strong: "không + me/him…",
      after: " trực tiếp: Rachel said that…; said goodbye to me.",
    },
    {
      before: "tell/ask somebody ",
      strong: "to + V",
      after: ": told me to hurry; asked me to help; told him not to worry.",
    },
    {
      before: "said (not) to… ",
      strong: "không có object người",
      after: ": Paul said not to worry about him.",
    },
  ],
  examples: [
    {
      english: "Paul said that his new job is boring.",
      vietnamese: "Paul nói công việc mới chán. (vẫn còn đúng — có thể giữ is)",
    },
    {
      english: "Joe, Rachel said you were in hospital.",
      vietnamese: "Joe, Rachel bảo bạn nằm viện. (không: are — vì rõ là không)",
    },
    {
      english: "Rachel told me that you were in hospital.",
      vietnamese: "Rachel bảo tôi rằng bạn nằm viện. (tell + me)",
    },
    {
      english: "Anna said goodbye to me and left.",
      vietnamese: "Anna nói tạm biệt với tôi rồi đi. (không: said me goodbye)",
    },
    {
      english: "The doctor told me to drink plenty of water.",
      vietnamese: "Bác sĩ bảo tôi uống nhiều nước.",
    },
    {
      english: "I told Joe not to work too hard.",
      vietnamese: "Tôi bảo Joe đừng làm việc quá sức.",
    },
    {
      english: "Jackie asked me to help her.",
      vietnamese: "Jackie nhờ tôi giúp cô ấy.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
