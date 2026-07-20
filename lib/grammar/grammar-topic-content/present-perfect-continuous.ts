import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 9 — Present perfect continuous (I have been doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Bài tập tranh minh họa (9.1) được chuyển thành tình huống văn bản.
 * Nên học kèm Unit 7 và Unit 8 (present perfect 1–2).
 */
export const PRESENT_PERFECT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u09-present-perfect-continuous",
  title: "Present Perfect Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 9",
  sourceNote:
    "Present perfect continuous (I have been doing): hoạt động vừa/đang diễn ra, how long, for/since, so sánh với present continuous. Nên học kèm Unit 7 và Unit 8 (present perfect 1–2).",
  intro:
    "Bài này giúp bạn dùng present perfect continuous (I have been doing) để nói về hoạt động vừa dừng hoặc vẫn đang tiếp diễn, cách dùng how long/for/since, và phân biệt với present continuous (nhấn khoảng thời gian đã kéo dài, không chỉ việc đang xảy ra). Nên học kèm Unit 7 và Unit 8 (present perfect 1–2) để thấy sự khác nhau giữa continuous và simple trong nhóm thời present perfect.",
  structure: {
    affirmative: "S + have/has + been + V-ing",
    negative:
      "KHÔNG dùng continuous cho động từ trạng thái (KHÔNG nói I've been knowing) → dùng present perfect simple: I've known her for years.",
  },
  usagePoints: [
    {
      before: "Dùng cho hoạt động ",
      strong: "vừa mới dừng hoặc mới dừng gần đây",
      after: " — kết quả còn thấy rõ: Why are you out of breath? Have you been running?",
    },
    {
      before: "Dùng với ",
      strong: "how long, for..., since...",
      after: " khi hoạt động vẫn đang tiếp diễn tại thời điểm nói: How long have you been learning English?",
    },
    {
      before: "Dùng cho hành động ",
      strong: "lặp lại nhiều lần",
      after: " tính đến hiện tại: She's been playing tennis since she was eight.",
    },
    {
      before: "present continuous (I am doing) = ",
      strong: "chỉ hành động đang diễn ra ngay bây giờ",
      after: ": I'm working.",
    },
    {
      before: "present perfect continuous (I have been doing) = ",
      strong: "nhấn khoảng thời gian đã kéo dài tính đến hiện tại",
      after: ": I've been working — khác present continuous (chỉ việc đang xảy ra) ở trên.",
    },
    {
      before: "Một số động từ trạng thái (know, like...) ",
      strong: "không dùng dạng continuous",
      after: " — xem Unit 4 (động từ trạng thái) và Unit 17 (have).",
    },
  ],
  examples: [
    {
      english: "Why are you out of breath? Have you been running?",
      vietnamese: "Have you been running = hoạt động vừa dừng, kết quả (thở hổn hển) còn thấy rõ.",
    },
    {
      english: "Paul is very tired. He's been working hard.",
      vietnamese: "has been working = hoạt động vừa/đang diễn ra, giải thích lý do mệt.",
    },
    {
      english: "I've been talking to Amanda and she agrees with me.",
      vietnamese: "have been talking = hoạt động vừa mới dừng, dẫn tới kết quả ở câu sau.",
    },
    {
      english: "How long have you been learning English?",
      vietnamese: "How long … have been learning = hỏi khoảng thời gian hoạt động đã kéo dài, đi cùng for/since.",
    },
    {
      english: "It's been raining for two hours.",
      vietnamese: "for two hours = khoảng thời gian tiếp diễn tính đến hiện tại, đi cùng perfect continuous.",
    },
    {
      english: "Silvia is a very good tennis player. She's been playing since she was eight.",
      vietnamese: "since she was eight = mốc bắt đầu, hoạt động lặp lại tính đến hiện tại.",
    },
    {
      english: "I've been working hard. Now I'm going to have a break.",
      vietnamese: "have been working = nhấn khoảng thời gian đã kéo dài, khác am working (chỉ việc đang xảy ra ngay bây giờ).",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 990,
  },
};
