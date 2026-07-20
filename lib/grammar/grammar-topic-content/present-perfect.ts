import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 7 — Present perfect 1 (I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 8 (kinh nghiệm sống) và Unit 9 (present perfect continuous).
 */
export const PRESENT_PERFECT_TOPIC: GrammarTopicDetail = {
  slug: "present-perfect",
  title: "Present Perfect",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 7",
  sourceNote:
    "Present perfect 1 (I have done): thông tin mới, gone/been, just/already/yet. Nên học kèm Unit 8 (kinh nghiệm sống) và Unit 9 (present perfect continuous).",
  intro:
    "Bài này giúp bạn dùng present perfect (I have done) để đưa thông tin mới về việc vừa xảy ra, nêu kết quả còn ảnh hưởng tới hiện tại, phân biệt gone to và been to, và dùng just/already/yet đúng chỗ. Nên học kèm Unit 8 (present perfect 2 — kinh nghiệm sống) và Unit 9 (present perfect continuous) để nắm trọn nhóm thời present perfect.",
  structure: {
    affirmative: "S + have/has + V3 (past participle)",
    negative:
      "KHÔNG dùng present perfect với mốc thời gian đã xác định (KHÔNG nói I have seen him yesterday) → dùng past simple: I saw him yesterday. Phủ định: S + haven't/hasn't + V3.",
  },
  usagePoints: [
    {
      before: "Dùng khi nói ",
      strong: "thông tin mới",
      after: " về việc vừa xảy ra: I've cut my finger. There's been an accident.",
    },
    {
      before: "Hành động trong quá khứ có ",
      strong: "kết quả ở hiện tại",
      after: ": Tom has lost his key = anh ấy hiện không có chìa khóa.",
    },
    {
      before: "has gone to = ",
      strong: "đi rồi, đang ở đó hoặc đang trên đường",
      after: ": He has gone to Italy.",
    },
    {
      before: "has been to = ",
      strong: "đã đi và đã về",
      after: ": She has been to Italy — khác has gone to (còn ở đó) ở trên.",
    },
    {
      before: "just = ",
      strong: "vừa mới",
      after: ": No, I've just had lunch.",
    },
    {
      before: "already = ",
      strong: "sớm hơn dự kiến",
      after: ": I've already paid it.",
    },
    {
      before: "yet = ",
      strong: "cho tới giờ",
      after: ", thường ở câu phủ định và câu hỏi: I haven't sent it yet. Have you finished yet?",
    },
    {
      before: "Một số ví dụ trong unit cũng ",
      strong: "được dùng ở past simple",
      after: " với nghĩa tương tự: He went out. I just had lunch.",
    },
  ],
  examples: [
    {
      english: "I've lost my key.",
      vietnamese: "have lost = thông tin mới, kết quả còn ảnh hưởng: giờ không có chìa khóa.",
    },
    {
      english: "The road is closed. There's been an accident.",
      vietnamese: "There's been = thông tin mới vừa xảy ra, giải thích lý do đường bị đóng.",
    },
    {
      english: "He has gone to Italy.",
      vietnamese: "has gone to = đang ở đó hoặc trên đường, chưa quay về.",
    },
    {
      english: "She has been to Italy.",
      vietnamese: "has been to = đã đi và đã về, khác has gone to (còn ở đó) ở trên.",
    },
    {
      english: "No, I've just had lunch.",
      vietnamese: "just = vừa mới xảy ra, cách đây không lâu.",
    },
    {
      english: "I've already paid it.",
      vietnamese: "already = việc xảy ra sớm hơn người nghe tưởng.",
    },
    {
      english: "I've written the email, but I haven't sent it yet.",
      vietnamese: "yet = cho tới giờ vẫn chưa, thường dùng ở câu phủ định.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 1240,
  },
};
