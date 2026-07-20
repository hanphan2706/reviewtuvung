import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 1 — Present continuous (I am doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 2 (present simple) và Unit 3 (đối chiếu hai thời).
 */
export const U01_PRESENT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u01-present-continuous",
  title: "Present Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 1",
  sourceNote:
    "Present continuous (I am doing): hành động đang diễn ra, tình huống tạm thời, xu hướng thay đổi. Nên học kèm Unit 2 (present simple) và Unit 3 (đối chiếu hai thời).",
  intro:
    "Bài này giúp bạn dùng present continuous (I am doing) để nói về việc đang xảy ra ngay lúc nói, một tình huống tạm thời quanh hiện tại, hoặc một xu hướng đang thay đổi. Nên học kèm Unit 2 (present simple) để có đủ hai vế trước khi ghép chúng lại trong Unit 3 (so sánh trực tiếp hai thời).",
  structure: {
    affirmative: "S + am/is/are + V-ing",
    negative:
      "KHÔNG bỏ am/is/are khi phủ định (KHÔNG nói She not working) → đúng là S + am/is/are + not + V-ing (She isn't working today).",
  },
  usagePoints: [
    {
      before: "Dùng cho việc ",
      strong: "đang xảy ra ngay lúc nói",
      after: ", người nói đang ở giữa hành động, đã bắt đầu nhưng chưa xong: I'm trying to work. He's having a shower.",
    },
    {
      before: "Không nhất thiết đúng ",
      strong: "chính xác tại thời điểm nói",
      after: ", mà đúng trong một giai đoạn quanh hiện tại như today/this week/this year: Kate is learning Italian.",
    },
    {
      before: "Diễn tả ",
      strong: "tình huống tạm thời",
      after: " kéo dài trong thời gian ngắn, khác với việc lâu dài, cố định: I'm living with friends until I find a flat.",
    },
    {
      before: "Dùng với các động từ chỉ ",
      strong: "sự thay đổi, xu hướng",
      after: ": getting, becoming, changing, improving, increasing, rising, falling, growing.",
    },
    {
      before: "Câu hỏi và phủ định mượn trợ động từ ",
      strong: "am/is/are",
      after: ", đứng trước chủ ngữ hoặc thêm not: Are you enjoying it? It isn't raining any more.",
    },
  ],
  examples: [
    {
      english: "I'm reading a really good book at the moment.",
      vietnamese: "Continuous vì việc đọc đang diễn ra, chưa xong — 'at the moment' neo vào lúc nói.",
    },
    {
      english: "Please don't make so much noise. I'm trying to work.",
      vietnamese: "I'm trying to work = đang cố làm việc ngay lúc này, việc chưa hoàn thành.",
    },
    {
      english: "Where's Mark? He's having a shower.",
      vietnamese: "He's having a shower = đang tắm, hành động đang diễn ra ngay lúc được hỏi.",
    },
    {
      english: "It isn't raining any more. Let's go out now.",
      vietnamese: "isn't raining = phủ định continuous bằng not sau am/is/are, không chia lại động từ.",
    },
    {
      english: "Kate wants to work in Italy, so she's learning Italian.",
      vietnamese: "is learning = trong giai đoạn học tiếng Ý hiện tại, không cần đúng ngay lúc nói câu này.",
    },
    {
      english: "The population of the world is increasing very fast.",
      vietnamese: "is increasing = xu hướng đang thay đổi theo thời gian, một động từ continuous đặc trưng.",
    },
    {
      english: "Is your English getting better?",
      vietnamese: "Is … getting better = hỏi về xu hướng tiến bộ đang diễn ra, không phải một sự thật cố định.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 860,
  },
};
