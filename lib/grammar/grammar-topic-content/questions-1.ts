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
    "Đảo trợ động từ; do/does/did; who/what làm chủ ngữ; giới từ cuối câu; câu hỏi phủ định. Nên học kèm Unit 50; tags ➜ Unit 52.",
  intro:
    "Đảo trợ động từ; do/does/did; who/what làm chủ ngữ; giới từ cuối câu; câu hỏi phủ định. Nên học kèm Unit 50 (Do you know where…?) và Unit 52 (question tags).",
  structure: {
    affirmative:
      "Aux + subject + …? | Do/Does/Did + subject + V? | Who/What + V…? (subject)",
    negative:
      "Don't/Doesn't/Didn't + subject + V…? | Isn't/Wasn't…? | Why don't/doesn't…?",
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
      vietnamese: "Bạn sống ở đâu? Ngôi nhà được xây khi nào?",
    },
    {
      english: "Who phoned Emma? / Who did Emma phone?",
      vietnamese: "Ai gọi Emma? / Emma gọi ai? (chủ ngữ vs tân ngữ)",
    },
    {
      english: "What happened to you last night?",
      vietnamese: "Tối qua chuyện gì xảy ra với bạn? (không: What did happen)",
    },
    {
      english: "Who do you want to speak to?",
      vietnamese: "Bạn muốn nói chuyện với ai?",
    },
    {
      english: "Didn't you hear the doorbell? I rang it three times.",
      vietnamese: "Bạn không nghe chuông cửa à? Tôi bấm ba lần. (ngạc nhiên)",
    },
    {
      english: "Why don't we eat out tonight?",
      vietnamese: "Sao tối nay mình không ra ngoài ăn? (không: Why we don't)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
