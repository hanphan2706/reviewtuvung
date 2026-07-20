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
    "by = không muộn hơn / chậm hơn; until / till = tình trạng kéo dài đến; by the time…; by then / by that time. Nên học kèm Unit 128 (by khác nghĩa).",
  intro:
    "Bài này giúp bạn dùng by để nói không muộn hơn mốc thời gian, until / till để nói tình trạng kéo dài đến lúc đó, và by the time / by then khi một việc xảy ra trước mốc khác. Nên học kèm Unit 128 (by khác nghĩa).",
  structure: {
    affirmative:
      "by + time | until/till + time/clause | by the time + clause | by then / by that time",
    negative:
      "KHÔNG nhầm by (= không muộn hơn) với until (= kéo dài đến) | away until Monday ≠ back by Monday",
  },
  usagePoints: [
    {
      before: "by = ",
      strong: "không muộn hơn",
      after: ": The milk has to be used by 14 August. We have to be home by 5 o'clock.",
    },
    {
      before: "until / till = ",
      strong: "đến tận lúc… / kéo dài đến",
      after: ": Wait until it stops raining. I'll be working until 11.30.",
    },
    {
      before: "away ",
      strong: "until Monday",
      after: " = vắng đến hết thứ Hai.",
    },
    {
      before: "back ",
      strong: "by Monday",
      after: " = về không muộn hơn thứ Hai.",
    },
    {
      before: "finish ",
      strong: "by 11.30",
      after: " = xong trước hoặc đúng 11.30.",
    },
    {
      before: "working ",
      strong: "until 11.30",
      after: " = làm việc kéo dài đến 11.30.",
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
      before: "",
      strong: "by then / by that time",
      after: ": She got there at midnight, but by then most guests had left.",
    },
  ],
  examples: [
    {
      english: "I sent the documents today, so they should arrive by Monday.",
      vietnamese: "By Monday = đến không muộn hơn thứ Hai — mốc hạn chót.",
    },
    {
      english: "Where's Sarah? She should be here by now.",
      vietnamese: "By now = lẽ ra đã ở đây rồi — không muộn hơn bây giờ.",
    },
    {
      english: "Let's wait until it stops raining.",
      vietnamese: "Until = chờ kéo dài đến khi mưa tạnh — không phải mốc hạn.",
    },
    {
      english: "Joe will be away until Monday. / Joe will be back by Monday.",
      vietnamese: "Until = vắng đến hết thứ Hai; by = về không muộn hơn thứ Hai.",
    },
    {
      english: "By the time we get there, the bank will be closed.",
      vietnamese: "By the time = đến lúc chúng ta tới thì ngân hàng đã đóng.",
    },
    {
      english: "By the time she arrived, most of the other guests had left.",
      vietnamese: "By the time + quá khứ = khi cô ấy tới thì hầu hết khách đã về.",
    },
    {
      english: "I was very tired by the time I finished.",
      vietnamese: "By the time I finished = khi làm xong thì đã mệt lử.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
