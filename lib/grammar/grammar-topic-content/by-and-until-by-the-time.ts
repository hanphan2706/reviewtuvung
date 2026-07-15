import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 120 — By and Until / By the Time ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm by (dùng khác) Units 42B, 60B, 128; will have done (Unit 24).
 */
export const U120_BY_AND_UNTIL_BY_THE_TIME_TOPIC: GrammarTopicDetail = {
  slug: "u120-by-and-until-by-the-time",
  title: "By and Until / By the Time …",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 120",
  sourceNote:
    "by = không muộn hơn; until/till = tình trạng kéo dài đến; by the time…; by then. Nên học kèm Unit 128 (by khác nghĩa).",
  intro:
    "Unit này giúp bạn nắm By and Until / By the Time …: By = không muộn hơn; until/till = tình trạng kéo dài đến; by the time…; by then. Nên học kèm Unit 128 (by khác nghĩa).",
  structure: {
    affirmative:
      "by + time | until/till + time/clause | by the time + clause | by then / by that time",
    negative:
      "until = kéo dài; by = hoàn thành/đến trước — không đổi chỗ tuỳ tiện",
  },
  usagePoints: [
    {
      before: "by = ",
      strong: "không muộn hơn",
      after: ": The milk has to be used by 14 August. We have to be home by 5 o'clock.",
    },
    {
      before: "until / till = ",
      strong: "đến tận lúc…",
      after: ": Wait until it stops raining. I'll be working until 11.30.",
    },
    {
      before: "So sánh: away ",
      strong: "until Monday",
      after: " vs back by Monday; finish by 11.30 vs working until 11.30.",
    },
    {
      before: "by the time + ",
      strong: "clause",
      after: ": By the time we get to the cinema, the film will have started.",
    },
    {
      before: "Quá khứ: ",
      strong: "By the time she arrived…",
      after: ", most of the other guests had left.",
    },
    {
      before: "by then / ",
      strong: "by that time",
      after: ": She got there at midnight, but by then most guests had left.",
    },
  ],
  examples: [
    {
      english: "I sent the documents today, so they should arrive by Monday.",
      vietnamese: "Tôi gửi hôm nay nên chúng sẽ đến không muộn hơn thứ Hai.",
    },
    {
      english: "Where's Sarah? She should be here by now.",
      vietnamese: "Sarah đâu rồi? Cô ấy lẽ ra đã ở đây rồi chứ.",
    },
    {
      english: "Let's wait until it stops raining.",
      vietnamese: "Hãy chờ đến khi mưa tạnh.",
    },
    {
      english: "Joe will be away until Monday. / Joe will be back by Monday.",
      vietnamese: "Joe vắng đến thứ Hai. / Joe sẽ về không muộn hơn thứ Hai.",
    },
    {
      english: "By the time we get there, the bank will be closed.",
      vietnamese: "Đến lúc chúng ta tới nơi thì ngân hàng đã đóng.",
    },
    {
      english: "By the time she arrived, most of the other guests had left.",
      vietnamese: "Khi cô ấy tới, hầu hết khách đã về.",
    },
    {
      english: "I was very tired by the time I finished.",
      vietnamese: "Tôi mệt lử khi làm xong.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
