import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 16 — Past perfect continuous (I had been doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const PAST_PERFECT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u16-past-perfect-continuous",
  title: "Past Perfect Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 16",
  sourceNote: "Past perfect continuous (I had been doing). had been + V-ing để nói hoạt động đã diễn ra trước một mốc trong quá khứ.",
  intro:
    "Past perfect continuous (I had been doing). had been + V-ing để nói hoạt động đã diễn ra trước một mốc trong quá khứ.",
  structure: {
    affirmative: "S + had + been + V-ing",
    negative: "S + hadn't + been + V-ing",
  },
  usagePoints: [
    {
      before: "Dùng để giải thích ",
      strong: "kết quả nhìn thấy tại một mốc quá khứ",
      after: ", do một hoạt động xảy ra trước đó: My hands were dirty because I'd been repairing my bike.",
    },
    {
      before: "Có thể nói hoạt động ",
      strong: "đã diễn ra được bao lâu trước khi việc khác xảy ra",
      after: ": We'd been playing tennis for about half an hour when it started to rain.",
    },
    {
      before: "So sánh ",
      strong: "have been -ing (tính đến hiện tại) với had been -ing (tính đến một mốc quá khứ)",
      after: ": I've been waiting 20 minutes (before now) / I'd been waiting 20 minutes (before the bus came).",
    },
    {
      before: "So sánh ",
      strong: "was -ing (đang diễn ra tại mốc đó) với had been -ing (đã diễn ra trước mốc đó)",
      after: ": It wasn't raining... but it had been raining, so the ground was wet.",
    },
    {
      before: "Một số động từ trạng thái (",
      strong: "know, have theo nghĩa sở hữu",
      after: ") không dùng continuous: We had known each other for years (not had been knowing).",
    },
  ],
  examples: [
    {
      english: "It had been raining, so the ground was wet.",
      vietnamese: "Trời đã mưa (trước đó), nên mặt đất còn ướt.",
    },
    {
      english: "My hands were dirty because I'd been repairing my bike.",
      vietnamese: "Tay tôi bẩn vì tôi vừa sửa xe đạp.",
    },
    {
      english: "Tom was tired when he got home. He'd been working hard all day.",
      vietnamese: "Tom mệt khi về nhà. Anh ấy đã làm việc vất vả cả ngày.",
    },
    {
      english: "We'd been playing tennis for about half an hour when it started to rain heavily.",
      vietnamese: "Chúng tôi đã chơi tennis được khoảng nửa giờ khi trời bắt đầu mưa to.",
    },
    {
      english: "I hope the bus comes soon. I've been waiting for 20 minutes.",
      vietnamese: "Tôi hy vọng xe buýt sớm đến. Tôi đã chờ 20 phút rồi.",
    },
    {
      english: "At last the bus came. I'd been waiting for 20 minutes.",
      vietnamese: "Cuối cùng xe buýt cũng đến. Tôi đã chờ 20 phút (trước khi nó đến).",
    },
    {
      english: "Katherine was lying on the sofa. She was tired because she'd been working hard.",
      vietnamese: "Katherine nằm trên ghế sofa. Cô ấy mệt vì đã làm việc vất vả.",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 860,
  },
};
