import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 2 — Present simple (I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U02_PRESENT_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u02-present-simple",
  title: "Present Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 2",
  sourceNote: "Present simple (I do). Sự thật chung, thói quen, do/does, tần suất, các động từ tuyên bố.",
  intro:
    "Present simple (I do). Sự thật chung, thói quen, do/does, tần suất, các động từ tuyên bố.",
  structure: {
    affirmative: "S + V(-s/-es với he/she/it)",
    negative: "S + don't/doesn't + V",
  },
  usagePoints: [
    {
      before: "Dùng để nói về ",
      strong: "sự thật chung, quy luật",
      after: " luôn đúng (The earth goes round the sun; Rice doesn't grow in cold climates).",
    },
    {
      before: "Diễn tả ",
      strong: "thói quen, việc lặp lại",
      after: " nhiều lần, không chỉ đúng ngay lúc nói (I usually go away at weekends; Alex drives a bus).",
    },
    {
      before: "Câu hỏi và phủ định dùng ",
      strong: "do/does",
      after: " + động từ nguyên thể — does cho he/she/it (Where do you come from? / What does this word mean?).",
    },
    {
      before: "Kết hợp với các từ chỉ ",
      strong: "tần suất",
      after: " (always, usually, often, every day, how often …) để nói mức độ thường xuyên (I get up at 8 o'clock every morning).",
    },
    {
      before: "Một số động từ ",
      strong: "tuyên bố hành động ngay khi nói ra",
      after: " (I promise, I suggest, I apologise, I insist, I agree, I refuse …) luôn ở dạng present simple, không dùng continuous.",
    },
  ],
  examples: [
    {
      english: "Nurses look after patients in hospitals.",
      vietnamese: "Y tá chăm sóc bệnh nhân trong bệnh viện. (sự thật chung)",
    },
    {
      english: "The earth goes round the sun.",
      vietnamese: "Trái Đất quay quanh Mặt Trời. (quy luật luôn đúng)",
    },
    {
      english: "Alex is a bus driver, but now he is in bed asleep. He drives a bus.",
      vietnamese: "Alex là lái xe buýt, nhưng giờ anh ấy đang ngủ. (Anh ấy) lái xe buýt (nói chung, dù không lái ngay lúc này).",
    },
    {
      english: "I don't go away very often.",
      vietnamese: "Tôi không thường đi đâu xa.",
    },
    {
      english: "What does this word mean?",
      vietnamese: "Từ này nghĩa là gì?",
    },
    {
      english: "Robert usually goes away two or three times a year.",
      vietnamese: "Robert thường đi xa hai, ba lần một năm.",
    },
    {
      english: "I promise I won't be late.",
      vietnamese: "Tôi hứa sẽ không đến muộn. (promise = hành động tuyên bố ngay khi nói)",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 790,
  },
};
