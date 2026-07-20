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
    "Không luôn phải lùi thì nếu tình huống vẫn đúng; say (không kèm người nghe) khác tell (luôn kèm người nghe); tell/ask somebody to…. Nên học kèm Unit 47.",
  intro:
    "Bài này giúp bạn giữ nguyên thì hiện tại khi tình huống được tường thuật vẫn còn đúng, phân biệt say (không kèm người nghe trực tiếp) với tell (luôn kèm người nghe), và dùng tell/ask + somebody + to + V để tường thuật lời yêu cầu, đề nghị. Nên học kèm Unit 47 (reported speech 1) trước khi mở rộng các mẫu này.",
  structure: {
    affirmative:
      "said/told (that) + clause | tell/ask + somebody + to + V | say (not) to + V",
    negative:
      "KHÔNG nói say + người nghe hoặc said + tân ngữ người trực tiếp → tell the police (không: say the police); said goodbye to me (không: said me goodbye) | told + somebody + not to + V | said not to + V",
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
      vietnamese: "Is boring (giữ hiện tại) = tình huống vẫn còn đúng khi tường thuật.",
    },
    {
      english: "Joe, Rachel said you were in hospital.",
      vietnamese: "Were (quá khứ) = tình huống rõ đã không còn đúng.",
    },
    {
      english: "Rachel told me that you were in hospital.",
      vietnamese: "Told me = tell luôn kèm người nghe (không nói said me).",
    },
    {
      english: "Anna said goodbye to me and left.",
      vietnamese: "Said goodbye to me = say + to + người nghe, không nói said me goodbye.",
    },
    {
      english: "The doctor told me to drink plenty of water.",
      vietnamese: "Told me to = tell/ask + somebody + to + V cho lời yêu cầu.",
    },
    {
      english: "I told Joe not to work too hard.",
      vietnamese: "Told … not to = phủ định của tell somebody to.",
    },
    {
      english: "Jackie asked me to help her.",
      vietnamese: "Asked me to = ask + somebody + to + V cho lời đề nghị, nhờ vả.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
