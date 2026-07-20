import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 43 — Passive 2 (be done / been done / being done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 42, 44 (Passive 1, 3).
 */
export const U43_PASSIVE_2_TOPIC: GrammarTopicDetail = {
  slug: "u43-passive-2",
  title: "Passive 2",
  levelLabel: "Intermediate",
  kindLabel: "Passive",
  sourceBook: "English Grammar in Use · Intermediate · Unit 43",
  sourceNote:
    "Mở rộng bị động: have/has been + V3, had been + V3, is/was being + V3, (to) be + V3, (to) have been + V3, going to be + V3. Nên học kèm Units 42, 44.",
  intro:
    "Bài này giúp bạn mở rộng bị động sang present perfect, past perfect, continuous, infinitive và going to — have/has been, had been, is/was being, (to) be + V3, (to) have been + V3. Nên học kèm Unit 42 (is/was done) và Unit 44 (I was offered… / being told).",
  structure: {
    affirmative:
      "have/has been + V3 | had been + V3 | am/is/are being + V3 | (to) be + V3 | (to) have been + V3",
    negative:
      "KHÔNG bỏ been: The room has cleaned → has been cleaned | KHÔNG nhầm being với been: is cleaned (đã xong) ≠ is being cleaned (đang diễn ra) | haven't/hasn't been + V3 | hadn't been + V3 | isn't/aren't being + V3",
  },
  usagePoints: [
    {
      before: "Present perfect: ",
      strong: "have/has been + V3",
      after: " = đã xong: The trip has been cancelled. Have you ever been bitten by a dog?",
    },
    {
      before: "Past perfect: ",
      strong: "had been + V3",
      after: " = đã xong trước mốc quá khứ: It had been cleaned. They had been cooked too long.",
    },
    {
      before: "Continuous — đang diễn ra: ",
      strong: "is/was being + V3",
      after: ": The room is being cleaned. We were being followed.",
    },
    {
      before: "Hoàn thành — không còn đang: ",
      strong: "is/was + V3",
      after: " (không being): The room is cleaned. ≠ The room is being cleaned.",
    },
    {
      before: "Infinitive: ",
      strong: "(to) be + V3",
      after: ": Something must be done. I want to be left alone.",
    },
    {
      before: "Perfect infinitive: ",
      strong: "(to) have been + V3",
      after: ": It might have been sent. It shouldn't have been stolen.",
    },
    {
      before: "Going to: ",
      strong: "is going to be + V3",
      after: ": A new supermarket is going to be built next year.",
    },
  ],
  examples: [
    {
      english: "The room looks nice. It has been cleaned.",
      vietnamese: "has been cleaned = đã dọn xong (present perfect passive).",
    },
    {
      english: "I haven't been invited to the party.",
      vietnamese: "haven't been invited = phủ định: haven't + been + V3.",
    },
    {
      english: "The room is being cleaned at the moment.",
      vietnamese: "is being cleaned = đang được dọn — khác is cleaned (đã xong).",
    },
    {
      english: "Something must be done before it's too late.",
      vietnamese: "must be done = infinitive passive sau modal.",
    },
    {
      english: "The letter might have been sent to the wrong address.",
      vietnamese: "might have been sent = perfect infinitive passive — có lẽ đã gửi nhầm.",
    },
    {
      english: "If you had locked the car, it wouldn't have been stolen.",
      vietnamese: "wouldn't have been stolen = phủ định perfect infinitive trong câu điều kiện.",
    },
    {
      english: "They seem to have been solved.",
      vietnamese: "to have been solved = perfect infinitive sau seem — dường đã được giải quyết.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
