import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 52 — Question tags (do you? isn't it? etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 51 (auxiliary verbs); Questions ➜ Units 49–50.
 */
export const U52_QUESTION_TAGS_TOPIC: GrammarTopicDetail = {
  slug: "u52-question-tags",
  title: "Question Tags",
  levelLabel: "Intermediate",
  kindLabel: "Question",
  sourceBook: "English Grammar in Use · Intermediate · Unit 52",
  sourceNote:
    "Question tag = mini-question ở cuối câu; câu khẳng định + tag phủ định và ngược lại; I'm…→ aren't I?; Let's…→ shall we?; Don't…→ will you?. Nên học kèm Unit 51.",
  intro:
    "Bài này giúp bạn thêm question tag vào cuối câu để xác nhận hoặc hỏi lại: câu khẳng định đi với tag phủ định, câu phủ định đi với tag khẳng định, cùng các trường hợp đặc biệt như I'm… → aren't I?, Let's… → shall we? và Don't… → will you? Nên học kèm Unit 51 (trợ động từ) và Units 49–50 (câu hỏi).",
  structure: {
    affirmative:
      "Positive sentence, negative tag? | Let's…, shall we? | I'm…, aren't I?",
    negative:
      "KHÔNG dùng amn't I → I'm right, aren't I? (không: amn't I) | Negative sentence, positive tag? | Don't…, will you?",
  },
  usagePoints: [
    {
      before: "Khẳng định + ",
      strong: "tag phủ định",
      after: ": Kate will be here soon, won't she? There was a lot of traffic, wasn't there?",
    },
    {
      before: "Phủ định + ",
      strong: "tag khẳng định",
      after: ": Kate won't be late, will she? You haven't eaten yet, have you?",
    },
    {
      before: "Present/past simple → ",
      strong: "do/does/did",
      after: ": Karen plays the piano, doesn't she? You didn't lock the door, did you?",
    },
    {
      before: "Giọng xuống = ",
      strong: "chờ đồng ý",
      after: "; giọng lên = hỏi thật / nhờ việc.",
    },
    {
      before: "Let's… → ",
      strong: "shall we?",
      after: " Don't… → will you? I'm… → aren't I?",
    },
    {
      before: "Nhờ việc: ",
      strong: "phủ định + tag khẳng định",
      after: ": You couldn't do me a favour, could you?",
    },
  ],
  examples: [
    {
      english: "It's a nice day, isn't it?",
      vietnamese: "Isn't it = tag phủ định sau câu khẳng định.",
    },
    {
      english: "You haven't seen Kate today, have you?",
      vietnamese: "Have you = tag khẳng định sau câu phủ định.",
    },
    {
      english: "Let's go for a walk, shall we?",
      vietnamese: "Shall we = tag đặc biệt sau Let's….",
    },
    {
      english: "Don't be late, will you?",
      vietnamese: "Will you = tag đặc biệt sau câu ra lệnh/yêu cầu (Don't…).",
    },
    {
      english: "I'm right, aren't I?",
      vietnamese: "Aren't I = tag đặc biệt cho I'm…, KHÔNG dùng amn't I.",
    },
    {
      english: "You couldn't do me a favour, could you?",
      vietnamese: "Could you = phủ định + tag khẳng định dùng để nhờ vả lịch sự.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 515,
  },
};
