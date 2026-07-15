import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 15 — Past perfect (I had done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const PAST_PERFECT_TOPIC: GrammarTopicDetail = {
  slug: "u15-past-perfect",
  title: "Past Perfect",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 15",
  sourceNote: "Past perfect (I had done). Dùng had + V3 để nói việc xảy ra trước một thời điểm mốc trong quá khứ.",
  intro:
    "Past perfect (I had done). Dùng had + V3 để nói việc xảy ra trước một thời điểm mốc trong quá khứ.",
  structure: {
    affirmative: "S + had + V3 (past participle)",
    negative: "S + hadn't + V3",
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
      before: "So sánh present perfect (have seen — tính đến hiện tại) với ",
      strong: "past perfect (had seen — tính đến một mốc trong quá khứ)",
      after: ": I've seen her before vs I'd seen her before, but couldn't remember where.",
    },
    {
      before: "So sánh past simple (left) với ",
      strong: "past perfect (had already left)",
      after: " khi nói hai việc xảy ra trước-sau trong quá khứ: Was Tom there when you arrived? No, he'd already left.",
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
      vietnamese: "Khi Sarah đến buổi tiệc, Paul đã về nhà rồi.",
    },
    {
      english: "When we got home last night, we found that somebody had broken into the flat.",
      vietnamese: "Khi chúng tôi về nhà tối qua, chúng tôi thấy có người đã đột nhập vào căn hộ.",
    },
    {
      english: "Karen didn't come to the cinema with us. She'd already seen the movie.",
      vietnamese: "Karen không đi xem phim cùng chúng tôi. Cô ấy đã xem bộ phim đó rồi.",
    },
    {
      english: "I thought I'd done the right thing, but I soon realised I'd made a big mistake.",
      vietnamese: "Tôi nghĩ mình đã làm đúng, nhưng chẳng mấy chốc tôi nhận ra mình đã phạm một lỗi lớn.",
    },
    {
      english: "They hadn't flown before.",
      vietnamese: "Trước đó họ chưa từng đi máy bay.",
    },
    {
      english: "Was Tom there when you arrived? No, he'd already left.",
      vietnamese: "Tom có ở đó khi bạn đến không? Không, anh ấy đã về rồi.",
    },
    {
      english: "Kate had just got home when I phoned.",
      vietnamese: "Kate vừa về nhà khi tôi gọi điện.",
    },
  ],
  practice: {
    questionCount: 15,
    studentCount: 905,
  },
};
