import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 2 — Present simple (I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 1 (present continuous) và Unit 3 (đối chiếu hai thời).
 */
export const U02_PRESENT_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u02-present-simple",
  title: "Present Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 2",
  sourceNote:
    "Present simple (I do): sự thật chung, thói quen, do/does, tần suất, động từ tuyên bố. Nên học kèm Unit 1 (present continuous) và Unit 3 (đối chiếu hai thời).",
  intro:
    "Bài này giúp bạn dùng present simple (I do) để nói về sự thật chung, quy luật, và thói quen lặp lại, cách dùng do/does khi hỏi và phủ định, các từ chỉ tần suất, cùng một số động từ tuyên bố luôn ở dạng simple. Nên học kèm Unit 1 (present continuous) để phân biệt việc đang xảy ra với việc lặp lại thường xuyên, rồi xem Unit 3 khi so sánh trực tiếp hai thời này.",
  structure: {
    affirmative: "S + V(-s/-es với he/she/it)",
    negative:
      "KHÔNG chia -s/-es cho động từ chính sau don't/doesn't (KHÔNG nói He doesn't goes) → đúng là S + don't/doesn't + V nguyên thể (He doesn't go).",
  },
  usagePoints: [
    {
      before: "Dùng để nói về ",
      strong: "sự thật chung, quy luật",
      after: " luôn đúng: The earth goes round the sun. Rice doesn't grow in cold climates.",
    },
    {
      before: "Diễn tả ",
      strong: "thói quen, việc lặp lại",
      after: " nhiều lần, không chỉ đúng ngay lúc nói: I usually go away at weekends. Alex drives a bus.",
    },
    {
      before: "Câu hỏi và phủ định dùng ",
      strong: "do/does",
      after: " + động từ nguyên thể, does cho he/she/it: Where do you come from? What does this word mean?",
    },
    {
      before: "Kết hợp với các từ chỉ ",
      strong: "tần suất",
      after: " (always, usually, often, every day, how often …) để nói mức độ thường xuyên: I get up at 8 o'clock every morning.",
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
      vietnamese: "Present simple cho sự thật chung, đúng mọi lúc — không gắn với thời điểm nói cụ thể.",
    },
    {
      english: "The earth goes round the sun.",
      vietnamese: "goes round = quy luật khoa học luôn đúng, không bao giờ dùng continuous.",
    },
    {
      english: "Alex is a bus driver, but now he is in bed asleep. He drives a bus.",
      vietnamese: "drives a bus = nghề nghiệp, thói quen nói chung, dù ngay lúc này anh ấy không lái xe.",
    },
    {
      english: "I don't go away very often.",
      vietnamese: "don't go = phủ định present simple bằng don't, không chia lại động từ chính.",
    },
    {
      english: "What does this word mean?",
      vietnamese: "does … mean = does đứng trước chủ ngữ khi hỏi, động từ mean giữ nguyên thể.",
    },
    {
      english: "Robert usually goes away two or three times a year.",
      vietnamese: "usually + goes = từ chỉ tần suất đi kèm present simple để nói mức độ thường xuyên.",
    },
    {
      english: "I promise I won't be late.",
      vietnamese: "promise = động từ tuyên bố, luôn ở simple ngay khi nói ra, không dùng continuous.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 790,
  },
};
