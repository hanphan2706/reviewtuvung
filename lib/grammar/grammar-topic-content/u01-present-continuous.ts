import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 1 — Present continuous (I am doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const U01_PRESENT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u01-present-continuous",
  title: "Present Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 1",
  sourceNote: "Present continuous (I am doing). Hành động đang diễn ra, tình huống tạm thời, sự thay đổi.",
  intro:
    "Present continuous (I am doing). Hành động đang diễn ra, tình huống tạm thời, sự thay đổi.",
  structure: {
    affirmative: "S + am/is/are + V-ing",
    negative: "S + am/is/are + not + V-ing",
  },
  usagePoints: [
    {
      before: "Dùng cho hành động ",
      strong: "đang xảy ra ngay lúc nói",
      after: " — người nói đang ở giữa việc làm, đã bắt đầu nhưng chưa xong (I'm trying to work; He's having a shower).",
    },
    {
      before: "Không nhất thiết đúng ",
      strong: "chính xác tại thời điểm nói",
      after: ", mà là trong một giai đoạn quanh hiện tại như today/this week/this year (Kate is learning Italian).",
    },
    {
      before: "Diễn tả ",
      strong: "tình huống tạm thời",
      after: " đang tiếp diễn trong thời gian ngắn, khác với thói quen lâu dài (I'm living with friends until I find a flat).",
    },
    {
      before: "Dùng với các động từ chỉ ",
      strong: "sự thay đổi, xu hướng",
      after: ": getting, becoming, changing, improving, starting, beginning, increasing, rising, falling, growing.",
    },
    {
      before: "Câu hỏi và phủ định mượn trợ động từ ",
      strong: "am/is/are",
      after: ", đứng trước chủ ngữ hoặc thêm not (Are you enjoying it? / It isn't raining any more).",
    },
  ],
  examples: [
    {
      english: "I'm reading a really good book at the moment.",
      vietnamese: "Tôi đang đọc một cuốn sách rất hay (chưa đọc xong).",
    },
    {
      english: "Please don't make so much noise. I'm trying to work.",
      vietnamese: "Làm ơn đừng gây ồn. Tôi đang cố gắng làm việc.",
    },
    {
      english: "Where's Mark? He's having a shower.",
      vietnamese: "Mark đâu rồi? Anh ấy đang tắm.",
    },
    {
      english: "It isn't raining any more. Let's go out now.",
      vietnamese: "Trời không còn mưa nữa. Đi ra ngoài thôi.",
    },
    {
      english: "Kate wants to work in Italy, so she's learning Italian.",
      vietnamese: "Kate muốn làm việc ở Ý, nên cô ấy đang học tiếng Ý (giai đoạn hiện tại, chưa chắc đang học ngay lúc này).",
    },
    {
      english: "The population of the world is increasing very fast.",
      vietnamese: "Dân số thế giới đang tăng rất nhanh.",
    },
    {
      english: "Is your English getting better?",
      vietnamese: "Tiếng Anh của bạn có đang tiến bộ hơn không?",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 860,
  },
};
