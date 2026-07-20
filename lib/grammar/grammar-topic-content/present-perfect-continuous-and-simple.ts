import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 10 — Present perfect continuous and simple (I have been doing and I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 9 (continuous) và Units 7–8 (simple).
 */
export const PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u10-present-perfect-continuous-and-simple",
  title: "Present Perfect Continuous and Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 10",
  sourceNote:
    "have/has been + V-ing nhấn vào hoạt động, chưa chắc đã xong; have/has + V3 nhấn vào kết quả đã hoàn tất. Nên học kèm Unit 9 (continuous) và Units 7–8 (simple).",
  intro:
    "Bài này giúp bạn phân biệt present perfect continuous (have/has been + V-ing) — nhấn vào hoạt động đang/đã diễn ra, chưa chắc xong — với present perfect simple (have/has + V3) — nhấn vào kết quả đã hoàn tất, và biết chọn đúng dạng khi hỏi how long so với how much/how many. Nên học kèm Unit 9 (continuous) và Units 7–8 (simple) để thấy rõ sự khác biệt giữa hai dạng.",
  structure: {
    affirmative: "S + have/has been + V-ing (continuous) | S + have/has + V3 (simple)",
    negative:
      "KHÔNG dùng continuous với động từ trạng thái như know, have (sở hữu) — I've known, not I've been knowing | S + haven't/hasn't been + V-ing / haven't/hasn't + V3",
  },
  usagePoints: [
    {
      before: "Continuous nhấn vào ",
      strong: "hoạt động",
      after: ", không quan tâm đã xong hay chưa: She has been painting her bedroom (có thể chưa xong).",
    },
    {
      before: "Simple nhấn vào ",
      strong: "kết quả / hành động đã hoàn tất",
      after: ": She has painted her bedroom (phòng đã sơn xong).",
    },
    {
      before: "Dùng continuous để hỏi/trả lời ",
      strong: "how long",
      after: " khi việc vẫn tiếp diễn: How long have you been reading that book?",
    },
    {
      before: "Dùng simple để hỏi/trả lời ",
      strong: "how much, how many, how many times",
      after: " cho hành động đã hoàn tất: How many pages have you read?",
    },
    {
      before: "Một số động từ trạng thái (",
      strong: "know, have theo nghĩa sở hữu…",
      after: ") không dùng dạng continuous — xem Unit 4A, Unit 17.",
    },
    {
      before: "Ngoại lệ: ",
      strong: "want, mean",
      after: " vẫn dùng được continuous: I've been meaning to phone Anna, but I keep forgetting.",
    },
  ],
  examples: [
    {
      english: "She has been painting her bedroom.",
      vietnamese: "has been painting = đang/vừa sơn — nhấn hoạt động, chưa chắc đã xong.",
    },
    {
      english: "She has painted her bedroom.",
      vietnamese: "has painted = đã sơn xong — kết quả rõ ràng, phòng đã đổi màu.",
    },
    {
      english: "My hands are very dirty. I've been repairing my bike.",
      vietnamese: "I've been repairing = đang/vừa sửa xe — giải thích vì sao tay bẩn, không quan tâm đã xong chưa.",
    },
    {
      english: "My bike is OK again now. I've repaired it.",
      vietnamese: "I've repaired = đã sửa xong — nêu kết quả cuối cùng, khác hẳn ví dụ trên.",
    },
    {
      english: "How long have you been reading that book?",
      vietnamese: "how long + continuous = hỏi việc đọc đã diễn ra bao lâu, vẫn đang tiếp tục.",
    },
    {
      english: "How many pages of that book have you read?",
      vietnamese: "how many + simple = hỏi số lượng đã hoàn tất, không hỏi thời gian.",
    },
    {
      english: "I've known about the problem for a long time. (not I've been knowing)",
      vietnamese: "know là động từ trạng thái — luôn dùng simple, không có dạng been knowing.",
    },
  ],
  practice: {
    questionCount: 16,
    studentCount: 940,
  },
};
