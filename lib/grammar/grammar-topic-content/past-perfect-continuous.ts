import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 16 — Past perfect continuous (I had been doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 15 (past perfect).
 */
export const PAST_PERFECT_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u16-past-perfect-continuous",
  title: "Past Perfect Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 16",
  sourceNote:
    "had been + V-ing để nói hoạt động đã diễn ra (và có thể còn tiếp diễn) trước một mốc trong quá khứ. Nên học kèm Unit 15 (past perfect).",
  intro:
    "Bài này giúp bạn dùng past perfect continuous (had been + V-ing) để giải thích kết quả nhìn thấy tại một mốc quá khứ bằng một hoạt động đã diễn ra trước đó, và biết khi nào chọn continuous thay cho past perfect đơn. Nên học kèm Unit 15 (past perfect) vì đây chính là dạng tiếp diễn của thời đó.",
  structure: {
    affirmative: "S + had + been + V-ing",
    negative:
      "KHÔNG dùng continuous với động từ trạng thái như know, have (sở hữu) — We had known each other, not had been knowing | S + hadn't + been + V-ing",
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
      before: "Have been -ing tính đến hiện tại, còn ",
      strong: "had been -ing tính đến một mốc quá khứ",
      after: ": I've been waiting 20 minutes (before now) / I'd been waiting 20 minutes (before the bus came).",
    },
    {
      before: "Was -ing cho biết việc đang diễn ra tại mốc đó, còn ",
      strong: "had been -ing cho biết việc đã diễn ra trước mốc đó",
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
      vietnamese: "had been raining = mưa đã diễn ra trước đó, giải thích vì sao mặt đất ướt lúc đang kể.",
    },
    {
      english: "My hands were dirty because I'd been repairing my bike.",
      vietnamese: "I'd been repairing = hoạt động trước đó gây ra kết quả (tay bẩn) đang thấy.",
    },
    {
      english: "Tom was tired when he got home. He'd been working hard all day.",
      vietnamese: "he'd been working = lý do khiến Tom mệt lúc về nhà, việc xảy ra trước mốc got home.",
    },
    {
      english: "We'd been playing tennis for about half an hour when it started to rain heavily.",
      vietnamese: "nói rõ hoạt động kéo dài nửa giờ trước khi việc khác (mưa) xảy ra.",
    },
    {
      english: "I hope the bus comes soon. I've been waiting for 20 minutes.",
      vietnamese: "have been waiting = tính đến hiện tại, xe vẫn chưa đến.",
    },
    {
      english: "At last the bus came. I'd been waiting for 20 minutes.",
      vietnamese: "had been waiting = tính đến mốc quá khứ (khi xe đến), khác ví dụ trên tính đến hiện tại.",
    },
    {
      english: "Katherine was lying on the sofa. She was tired because she'd been working hard.",
      vietnamese: "she'd been working = việc xảy ra trước, giải thích trạng thái mệt đang được tả.",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 860,
  },
};
