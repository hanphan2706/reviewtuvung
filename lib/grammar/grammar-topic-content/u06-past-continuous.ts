import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 6 — Past continuous (I was doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 5 (past simple).
 */
export const U06_PAST_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u06-past-continuous",
  title: "Past Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 6",
  sourceNote:
    "Past continuous (I was doing): hành động đang diễn ra tại một thời điểm quá khứ, đối chiếu với past simple. Nên học kèm Unit 5 (past simple).",
  intro:
    "Bài này giúp bạn dùng past continuous (I was doing) để nói về hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ, làm bối cảnh cho một hành động khác xảy ra ở giữa, và đối chiếu với past simple khi hai việc xảy ra nối tiếp nhau. Nên học kèm Unit 5 (past simple) để phân biệt việc đã hoàn tất với việc đang diễn ra.",
  structure: {
    affirmative: "S + was/were + V-ing",
    negative:
      "KHÔNG dùng continuous cho động từ trạng thái, kể cả ở quá khứ (KHÔNG nói We were knowing) → dùng simple: We knew each other well.",
  },
  usagePoints: [
    {
      before: "Dùng cho hành động ",
      strong: "đang diễn ra tại một thời điểm cụ thể",
      after: " trong quá khứ — đã bắt đầu trước đó, chưa kết thúc tại lúc đang nói tới: At 10.30 they were playing tennis.",
    },
    {
      before: "Past continuous: ",
      strong: "was doing (đang làm, chưa xong)",
      after: ": We were walking home khi gặp Dan — hành động chưa hoàn tất tại thời điểm đó.",
    },
    {
      before: "Past simple: ",
      strong: "did (hành động đã hoàn tất, trọn vẹn)",
      after: ": We walked home (đi hết đường về) — khác were walking (đang đi) ở trên.",
    },
    {
      before: "Dùng để nêu ",
      strong: "bối cảnh cho một hành động khác xảy ra ở giữa",
      after: ": Matt phoned while we were having dinner (bữa tối đang diễn ra khi Matt gọi).",
    },
    {
      before: "Khi hai việc xảy ra ",
      strong: "nối tiếp nhau (cái này xong mới đến cái kia)",
      after: ", dùng past simple cho cả hai: I was walking along the road when I saw Dan. So I stopped …",
    },
    {
      before: "were having dinner = ",
      strong: "đã bắt đầu trước khi Karen đến",
      after: ": When Karen arrived, we were having dinner.",
    },
    {
      before: "had dinner = ",
      strong: "Karen đến rồi mới bắt đầu ăn",
      after: " — thứ tự thời gian hoàn toàn khác were having dinner ở trên.",
    },
  ],
  examples: [
    {
      english: "We were walking home when I met Dan.",
      vietnamese: "were walking = đang trong quá trình đi khi Dan xuất hiện, chưa kết thúc.",
    },
    {
      english: "We walked home after the party last night.",
      vietnamese: "walked = hành động trọn vẹn, đi hết cả đoạn đường, không phải đang xảy ra.",
    },
    {
      english: "Kate was watching TV when we arrived.",
      vietnamese: "was watching = bối cảnh đang diễn ra khi việc arrived (past simple) xảy ra.",
    },
    {
      english: "This time last year I was living in Hong Kong.",
      vietnamese: "was living = tình huống tạm thời đang tiếp diễn tại một thời điểm quá khứ cụ thể.",
    },
    {
      english: "Matt phoned while we were having dinner.",
      vietnamese: "were having dinner = bối cảnh đang diễn ra; phoned (past simple) xảy ra ở giữa.",
    },
    {
      english: "I was walking along the road when I saw Dan. So I stopped, and we talked for a while.",
      vietnamese: "was walking (bối cảnh), rồi saw, stopped, talked (past simple, nối tiếp nhau).",
    },
    {
      english: "When Karen arrived, we were having dinner.",
      vietnamese: "were having dinner = đã bắt đầu trước khi Karen đến, khác had dinner (ăn sau khi cô ấy tới).",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 730,
  },
};
