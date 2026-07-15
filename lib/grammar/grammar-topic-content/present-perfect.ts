import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 7 — Present perfect 1 (I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const PRESENT_PERFECT_TOPIC: GrammarTopicDetail = {
  slug: "present-perfect",
  title: "Present Perfect",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 7",
  sourceNote: "Present perfect 1 (I have done). Cấu trúc, thông tin mới, gone/been, just/already/yet.",
  intro:
    "Present perfect (I have done): cấu trúc, thông tin mới, gone/been, và just/already/yet.",
  structure: {
    affirmative: "S + have/has + V3 (past participle)",
    negative: "S + haven't/hasn't + V3",
  },
  usagePoints: [
    {
      before: "Dùng khi nói ",
      strong: "thông tin mới",
      after: " về việc vừa xảy ra (I've cut my finger; There's been an accident).",
    },
    {
      before: "Hành động trong quá khứ có ",
      strong: "kết quả ở hiện tại",
      after: " (Tom has lost his key = he doesn't have it now).",
    },
    {
      before: "Phân biệt ",
      strong: "has gone to",
      after: " (đi rồi, đang ở đó hoặc đang trên đường) và has been to (đã đi và đã về).",
    },
    {
      before: "Kết hợp ",
      strong: "just, already, yet",
      after: " — just (vừa mới), already (sớm hơn dự kiến), yet (cho tới giờ, thường ở câu phủ định và câu hỏi).",
    },
    {
      before: "Một số ví dụ trong unit cũng có thể dùng ",
      strong: "past simple",
      after: " (He went out / I just had lunch) với nghĩa tương tự.",
    },
  ],
  examples: [
    {
      english: "I've lost my key.",
      vietnamese: "Tôi làm mất chìa khóa rồi. (= giờ tôi không còn chìa khóa)",
    },
    {
      english: "The road is closed. There's been an accident.",
      vietnamese: "Đường bị đóng. Đã có một vụ tai nạn.",
    },
    {
      english: "He has gone to Italy.",
      vietnamese: "Anh ấy đã đi Ý. (= đang ở đó hoặc đang trên đường)",
    },
    {
      english: "She has been to Italy.",
      vietnamese: "Cô ấy đã từng đi Ý. (= đã về rồi)",
    },
    {
      english: "No, I've just had lunch.",
      vietnamese: "Không, tôi vừa mới ăn trưa xong.",
    },
    {
      english: "I've already paid it.",
      vietnamese: "Tôi đã trả tiền rồi.",
    },
    {
      english: "I've written the email, but I haven't sent it yet.",
      vietnamese: "Tôi đã viết email, nhưng vẫn chưa gửi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 1240,
  },
};
