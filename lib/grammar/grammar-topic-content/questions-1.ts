import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 49 — Questions 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 50 (Questions 2); question tags ➜ Unit 52.
 */
export const U49_QUESTIONS_1_TOPIC: GrammarTopicDetail = {
  slug: "u49-questions-1",
  title: "Questions 1",
  levelLabel: "Intermediate",
  kindLabel: "Question",
  sourceBook: "English Grammar in Use · Intermediate · Unit 49",
  sourceNote:
    "Đảo trợ động từ lên trước chủ ngữ; do/does/did cho present/past simple; who/what làm chủ ngữ thì không cần do. Nên học kèm Unit 50; question tags ➜ Unit 52.",
  intro:
    "Bài này giúp bạn đảo trợ động từ lên trước chủ ngữ khi đặt câu hỏi, dùng do/does/did cho present/past simple, biết khi nào who/what là chủ ngữ (không cần do) và khi nào là tân ngữ (cần do/did), cùng cách đặt giới từ ở cuối câu. Nên học kèm Unit 50 (Do you know where…?) và Unit 52 (question tags).",
  structure: {
    affirmative:
      "Aux + subject + …? | Do/Does/Did + subject + V? | Who/What + V…? (subject)",
    negative:
      "KHÔNG thêm do/does/did khi who/what làm chủ ngữ của câu → What happened last night? (không: What did happen) | Don't/Doesn't/Didn't + subject + V…?",
  },
  usagePoints: [
    {
      before: "Chủ ngữ sau ",
      strong: "động từ đầu",
      after: ": Is Katherine working today? (không: Is working Katherine)",
    },
    {
      before: "Present/past simple: ",
      strong: "do/does/did",
      after: ": What time does the film start? Why did the train stop?",
    },
    {
      before: "who/what là chủ ngữ → ",
      strong: "không dùng do",
      after: ": Who wants something to eat? What happened last night?",
    },
    {
      before: "who/what là tân ngữ → ",
      strong: "có do/did",
      after: ": Who did Emma phone? What are you looking for?",
    },
    {
      before: "Giới từ thường ",
      strong: "ở cuối",
      after: ": Which job has Tina applied for?",
    },
    {
      before: "Negative questions: ",
      strong: "ngạc nhiên / chờ đồng ý",
      after: ": Didn't you hear the doorbell? Haven't we met before?",
    },
  ],
  examples: [
    {
      english: "Where do you live? When was the house built?",
      vietnamese: "Do you live = đảo trợ động từ do lên trước chủ ngữ you.",
    },
    {
      english: "Who phoned Emma? / Who did Emma phone?",
      vietnamese: "Who phoned (chủ ngữ, không do) / Who did Emma phone (tân ngữ, có did).",
    },
    {
      english: "What happened to you last night?",
      vietnamese: "Happened = what là chủ ngữ, KHÔNG dùng did happen.",
    },
    {
      english: "Who do you want to speak to?",
      vietnamese: "Speak to = giới từ to đặt ở cuối câu hỏi.",
    },
    {
      english: "Didn't you hear the doorbell? I rang it three times.",
      vietnamese: "Didn't you hear…? = câu hỏi phủ định thể hiện ngạc nhiên.",
    },
    {
      english: "Why don't we eat out tonight?",
      vietnamese: "Why don't we…? = trợ động từ don't đảo lên trước chủ ngữ we.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
