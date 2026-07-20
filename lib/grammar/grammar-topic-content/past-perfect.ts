import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 15 — Past perfect (I had done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 16 (past perfect continuous) và Units 13–14 (present perfect and past).
 */
export const PAST_PERFECT_TOPIC: GrammarTopicDetail = {
  slug: "u15-past-perfect",
  title: "Past Perfect",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 15",
  sourceNote:
    "had + V3 để nói việc xảy ra trước một mốc khác trong quá khứ, giống present perfect nhưng lùi mốc so sánh về quá khứ. Nên học kèm Unit 16 và Units 13–14.",
  intro:
    "Bài này giúp bạn dùng past perfect (had + V3) để nói việc xảy ra trước một mốc thời gian khác trong quá khứ, phân biệt với past simple (chỉ kể việc đã xảy ra, không so mốc) và present perfect (tính đến hiện tại, xem Units 13–14). Nên học kèm Unit 16 (past perfect continuous) để nắm cả dạng tiếp diễn của thời này.",
  structure: {
    affirmative: "S + had + V3 (past participle)",
    negative:
      "KHÔNG bắt buộc dùng had nếu thứ tự trước-sau đã rõ nhờ when/after (When she saw me, she smiled) — past simple là đủ | S + hadn't + V3 khi cần nhấn việc đã xảy ra trước mốc",
  },
  usagePoints: [
    {
      before: "Dùng khi có một ",
      strong: "mốc thời gian trong quá khứ",
      after: ", và nói về việc xảy ra trước mốc đó: When Sarah arrived at the party, Paul had already gone home.",
    },
    {
      before: "Thường đi cùng ",
      strong: "already, just, never",
      after: " trước had: She'd already seen the movie.",
    },
    {
      before: "Present perfect (have seen) tính đến hiện tại, còn ",
      strong: "past perfect (had seen) tính đến một mốc trong quá khứ",
      after: ": I've seen her before (đến giờ) vs I'd seen her before, but couldn't remember where (đến một mốc đã qua).",
    },
    {
      before: "So với past simple (left), ",
      strong: "past perfect (had already left) nhấn việc xảy ra trước mốc còn lại",
      after: ": Was Tom there when you arrived? No, he'd already left.",
    },
    {
      before: "Một số động từ trạng thái vẫn dùng ",
      strong: "past perfect đơn (không continuous)",
      after: ": They hadn't flown before.",
    },
  ],
  examples: [
    {
      english: "When Sarah arrived at the party, Paul had already gone home.",
      vietnamese: "had gone home = việc xảy ra trước mốc arrived — Paul về nhà rồi Sarah mới tới.",
    },
    {
      english: "When we got home last night, we found that somebody had broken into the flat.",
      vietnamese: "had broken in = xảy ra trước mốc got home, không phải cùng lúc.",
    },
    {
      english: "Karen didn't come to the cinema with us. She'd already seen the movie.",
      vietnamese: "she'd already seen = đã xem trước đó, đó là lý do không đi cùng cả nhóm.",
    },
    {
      english: "I thought I'd done the right thing, but I soon realised I'd made a big mistake.",
      vietnamese: "cả hai had đều nói việc xảy ra trước mốc realised/thought trong quá khứ.",
    },
    {
      english: "They hadn't flown before.",
      vietnamese: "hadn't flown = chưa từng đi máy bay tính đến mốc đang kể, dùng dạng đơn vì fly là trải nghiệm.",
    },
    {
      english: "Was Tom there when you arrived? No, he'd already left.",
      vietnamese: "he'd already left = Tom đã đi trước khi người kia đến, so sánh rõ thứ tự trước-sau.",
    },
    {
      english: "Kate had just got home when I phoned.",
      vietnamese: "had just got home = vừa về nhà xong ngay trước mốc phoned.",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 905,
  },
};
