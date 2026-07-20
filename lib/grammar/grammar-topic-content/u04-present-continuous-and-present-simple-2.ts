import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 4 — Present continuous and present simple 2 (I am doing and I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 3 (I am doing and I do 1).
 */
export const U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_TOPIC: GrammarTopicDetail = {
  slug: "u04-present-continuous-and-present-simple-2",
  title: "Present Continuous and Present Simple 2",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 4",
  sourceNote:
    "Present continuous và present simple 2 (I am doing and I do): động từ trạng thái, think, am/is/are + being, see/hear/smell/taste. Nên học kèm Unit 3 (I am doing and I do 1).",
  intro:
    "Bài này giúp bạn tiếp tục đối chiếu present continuous và present simple qua các động từ trạng thái không dùng continuous, hai nghĩa khác nhau của think, cấu trúc am/is/are + being + tính từ, và các động từ giác quan see/hear/smell/taste. Nên học kèm Unit 3 (I am doing and I do 1) để có bức tranh đầy đủ về đối chiếu hai thời này.",
  structure: {
    affirmative: "State verbs: S + V (không dùng V-ing) · being: S + am/is/are + being + adj",
    negative:
      "KHÔNG chia continuous cho động từ trạng thái (KHÔNG nói I'm wanting, I'm knowing) → dùng simple: I want, I know.",
  },
  usagePoints: [
    {
      before: "Các ",
      strong: "động từ trạng thái",
      after: " như like, want, need, know, believe, understand, remember, belong, seem, fit, contain … không dùng ở dạng continuous, dù đang nói về hiện tại: I want (không nói I'm wanting).",
    },
    {
      before: "think nghĩa ",
      strong: "'cho rằng, có quan điểm'",
      after: " → dùng simple: I think Mary is Canadian.",
    },
    {
      before: "think nghĩa ",
      strong: "'đang suy nghĩ, xem xét'",
      after: " → dùng continuous: I'm thinking about what happened.",
    },
    {
      before: "am/is/are + ",
      strong: "being + tính từ",
      after: " diễn tả cách một người đang cư xử/hành động lúc này, tạm thời và có thể kiểm soát: He's being selfish.",
    },
    {
      before: "is/are + tính từ (không có being) = ",
      strong: "bản chất, tính cách lâu dài",
      after: ": He's selfish — khác He's being selfish (cách cư xử tạm thời) ở trên.",
    },
    {
      before: "Không dùng being với tính từ chỉ ",
      strong: "trạng thái không kiểm soát được",
      after: ": Sam is ill (không nói is being ill); Are you tired? (không nói are you being tired).",
    },
    {
      before: "Các động từ ",
      strong: "see/hear/smell/taste",
      after: " thường dùng ở simple, không continuous: Do you see that man? (không nói are you seeing).",
    },
    {
      before: "Riêng ",
      strong: "look và feel",
      after: " có thể dùng cả simple hoặc continuous khi nói cảm nhận lúc này: You look well today. / You're looking well today.",
    },
  ],
  examples: [
    {
      english: "I'm hungry. I want something to eat.",
      vietnamese: "want = động từ trạng thái, không chia continuous dù đang nói về hiện tại.",
    },
    {
      english: "I think Mary is Canadian, but I'm not sure.",
      vietnamese: "think = 'cho rằng' → simple, không phải một hành động đang diễn ra.",
    },
    {
      english: "Nicky is thinking of giving up her job.",
      vietnamese: "is thinking of = 'đang suy nghĩ, xem xét' → continuous, khác nghĩa 'cho rằng' ở trên.",
    },
    {
      english: "I can't understand why he's being so selfish. He isn't usually like that.",
      vietnamese: "is being selfish = cách cư xử tạm thời lúc này, không phải bản chất lâu dài.",
    },
    {
      english: "Sam is ill.",
      vietnamese: "is ill (không being ill) vì đây là trạng thái không kiểm soát được, không phải cách cư xử.",
    },
    {
      english: "Do you see that man over there?",
      vietnamese: "Do you see = động từ giác quan dùng simple, không nói are you seeing.",
    },
    {
      english: "You look well today. / You're looking well today.",
      vietnamese: "look/feel = hiếm động từ giác quan chấp nhận cả hai dạng khi nói cảm nhận lúc này.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 640,
  },
};
