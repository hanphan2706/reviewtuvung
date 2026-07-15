import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 9 — Present perfect continuous (I have been doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Bài tập tranh minh họa (9.1) được chuyển thành tình huống văn bản.
 */
export const PRESENT_PERFECT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u09-present-perfect-continuous",
  title: "Present Perfect Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 9",
  sourceNote:
    "Present perfect continuous (I have been doing). Hoạt động vừa/đang diễn ra, how long, for/since, so sánh với present continuous.",
  intro:
    "Present perfect continuous (I have been doing). Hoạt động vừa/đang diễn ra, how long, for/since, so sánh với present continuous.",
  structure: {
    affirmative: "S + have/has + been + V-ing",
    negative: "S + haven't/hasn't + been + V-ing",
  },
  usagePoints: [
    {
      before: "Dùng cho hoạt động ",
      strong: "vừa mới dừng hoặc mới dừng gần đây",
      after: " — kết quả còn thấy rõ (Why are you out of breath? Have you been running?).",
    },
    {
      before: "Dùng với ",
      strong: "how long, for..., since...",
      after: " khi hoạt động vẫn đang tiếp diễn tại thời điểm nói (How long have you been learning English?).",
    },
    {
      before: "Dùng cho hành động ",
      strong: "lặp lại nhiều lần",
      after: " tính đến hiện tại (She's been playing tennis since she was eight.).",
    },
    {
      before: "Phân biệt với ",
      strong: "present continuous (I am doing)",
      after: ": present continuous chỉ hành động đang diễn ra ngay bây giờ, present perfect continuous nhấn khoảng thời gian đã kéo dài tính đến hiện tại.",
    },
    {
      before: "Một số động từ trạng thái (know, like...) ",
      strong: "không dùng dạng continuous",
      after: " — xem Unit 4A; have xem Unit 17.",
    },
  ],
  examples: [
    {
      english: "Why are you out of breath? Have you been running?",
      vietnamese: "Sao bạn thở hổn hển vậy? Bạn vừa chạy đúng không?",
    },
    {
      english: "Paul is very tired. He's been working hard.",
      vietnamese: "Paul rất mệt. Anh ấy đã làm việc vất vả.",
    },
    {
      english: "I've been talking to Amanda and she agrees with me.",
      vietnamese: "Tôi vừa nói chuyện với Amanda và cô ấy đồng ý với tôi.",
    },
    {
      english: "How long have you been learning English?",
      vietnamese: "Bạn học tiếng Anh được bao lâu rồi?",
    },
    {
      english: "It's been raining for two hours.",
      vietnamese: "Trời đã mưa được hai giờ rồi.",
    },
    {
      english: "Silvia is a very good tennis player. She's been playing since she was eight.",
      vietnamese: "Silvia chơi tennis rất giỏi. Cô ấy chơi từ khi tám tuổi.",
    },
    {
      english: "I've been working hard. Now I'm going to have a break.",
      vietnamese: "Tôi đã làm việc vất vả. Giờ tôi sẽ nghỉ một chút.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 990,
  },
};
