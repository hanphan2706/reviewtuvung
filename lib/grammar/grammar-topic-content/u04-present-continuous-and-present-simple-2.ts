import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 4 — Present continuous and present simple 2 (I am doing and I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_TOPIC: GrammarTopicDetail = {
  slug: "u04-present-continuous-and-present-simple-2",
  title: "Present Continuous and Present Simple 2",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 4",
  sourceNote:
    "Present continuous và present simple 2 (I am doing and I do). Động từ trạng thái, think, am/is/are being, see/hear/smell/taste. Nên học kèm Unit 3.",
  intro:
    "Present continuous và present simple 2 (I am doing and I do). Động từ trạng thái, think, am/is/are being, see/hear/smell/taste. Nên học song song với Unit 3 để có bức tranh đầy đủ về đối chiếu hai thời này.",
  structure: {
    affirmative: "State verbs: S + V (không dùng V-ing) · being: S + am/is/are + being + adj",
    negative: "State verbs: S + don't/doesn't + V · being: S + am/is/are + not + being + adj",
  },
  usagePoints: [
    {
      before: "Các ",
      strong: "động từ trạng thái",
      after: " như like, want, need, know, believe, understand, remember, belong, seem, fit, contain … không dùng ở dạng continuous, dù đang nói về hiện tại (I want, không nói I'm wanting).",
    },
    {
      before: "think nghĩa ",
      strong: "'cho rằng, có quan điểm'",
      after: " → dùng simple (I think Mary is Canadian); nhưng think nghĩa 'đang suy nghĩ, xem xét' → dùng continuous (I'm thinking about what happened).",
    },
    {
      before: "am/is/are + ",
      strong: "being + tính từ",
      after: " diễn tả cách một người đang cư xử/hành động lúc này (tạm thời, có thể kiểm soát): He's being selfish — khác is + tính từ (bản chất lâu dài): He's selfish.",
    },
    {
      before: "Không dùng being với tính từ chỉ ",
      strong: "trạng thái không kiểm soát được",
      after: " (Sam is ill, không nói is being ill; Are you tired?, không nói are you being tired).",
    },
    {
      before: "Các động từ ",
      strong: "see/hear/smell/taste",
      after: " thường dùng ở simple, không continuous (Do you see that man? — không nói are you seeing).",
    },
    {
      before: "Riêng ",
      strong: "look và feel",
      after: " có thể dùng cả simple hoặc continuous khi nói cảm nhận lúc này (You look well today / You're looking well today).",
    },
  ],
  examples: [
    {
      english: "I'm hungry. I want something to eat.",
      vietnamese: "Tôi đói. Tôi muốn ăn gì đó. (want là động từ trạng thái, không dùng continuous)",
    },
    {
      english: "I think Mary is Canadian, but I'm not sure.",
      vietnamese: "Tôi cho rằng Mary là người Canada, nhưng không chắc. (think = 'cho rằng')",
    },
    {
      english: "Nicky is thinking of giving up her job.",
      vietnamese: "Nicky đang xem xét việc nghỉ việc. (think = 'đang suy nghĩ, xem xét')",
    },
    {
      english: "I can't understand why he's being so selfish. He isn't usually like that.",
      vietnamese: "Tôi không hiểu sao anh ấy lại ích kỷ như vậy lúc này. Bình thường anh ấy không như thế.",
    },
    {
      english: "Sam is ill.",
      vietnamese: "Sam bị bệnh. (không nói is being ill vì đây là trạng thái không kiểm soát được)",
    },
    {
      english: "Do you see that man over there?",
      vietnamese: "Bạn có thấy người đàn ông đằng kia không? (không dùng are you seeing)",
    },
    {
      english: "You look well today. / You're looking well today.",
      vietnamese: "Hôm nay bạn trông khỏe đấy. (cả hai dạng đều được với look/feel)",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 640,
  },
};
