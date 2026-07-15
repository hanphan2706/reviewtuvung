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
    "Tag = mini-question; khẳng định + tag phủ định / ngược lại; Let's… shall we?; Don't… will you?; I'm… aren't I?. Nên học kèm Unit 51.",
  intro:
    "Tag = mini-question; khẳng định + tag phủ định / ngược lại; Let's… shall we?; Don't… will you?; I'm… aren't I? Nên học kèm Unit 51 (trợ động từ) và Units 49–50 (câu hỏi).",
  structure: {
    affirmative:
      "Positive sentence, negative tag? | Let's…, shall we? | I'm…, aren't I?",
    negative:
      "Negative sentence, positive tag? | Don't…, will you?",
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
      vietnamese: "Hôm nay đẹp trời, đúng không? (chờ đồng ý)",
    },
    {
      english: "You haven't seen Kate today, have you?",
      vietnamese: "Hôm nay bạn chưa gặp Kate chứ? (hỏi thật)",
    },
    {
      english: "Let's go for a walk, shall we?",
      vietnamese: "Đi dạo thôi, được không?",
    },
    {
      english: "Don't be late, will you?",
      vietnamese: "Đừng muộn nhé, được chứ?",
    },
    {
      english: "I'm right, aren't I?",
      vietnamese: "Tôi đúng chứ? (= am I not)",
    },
    {
      english: "You couldn't do me a favour, could you?",
      vietnamese: "Bạn làm ơn giúp mình được không?",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 515,
  },
};
