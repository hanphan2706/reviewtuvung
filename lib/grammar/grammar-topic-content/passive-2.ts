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
    "have/has been + V3; had been + V3; is/was being + V3; (to) be + V3; (to) have been + V3. Nên học kèm Units 42, 44.",
  intro:
    "Trong unit này bạn sẽ nắm: have/has been + V3; had been + V3; is/was being + V3; (to) be + V3; (to) have been + V3. Nên học kèm Unit 42 (is/was done) và Unit 44 (I was offered… / being told).",
  structure: {
    affirmative:
      "have/has been + V3 | had been + V3 | am/is/are being + V3 | (to) be + V3 | (to) have been + V3",
    negative:
      "haven't/hasn't been + V3 | hadn't been + V3 | isn't/aren't being + V3 | not to be + V3",
  },
  usagePoints: [
    {
      before: "Present perfect: ",
      strong: "have/has been + V3",
      after: ": The trip has been cancelled. Have you ever been bitten by a dog?",
    },
    {
      before: "Past perfect: ",
      strong: "had been + V3",
      after: ": It had been cleaned. They had been cooked too long.",
    },
    {
      before: "Continuous: ",
      strong: "is/was being + V3",
      after: ": The room is being cleaned. We were being followed.",
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
      vietnamese: "Căn phòng trông đẹp. Nó đã được dọn.",
    },
    {
      english: "I haven't been invited to the party.",
      vietnamese: "Tôi chưa được mời đến tiệc.",
    },
    {
      english: "The room is being cleaned at the moment.",
      vietnamese: "Căn phòng đang được dọn lúc này.",
    },
    {
      english: "Something must be done before it's too late.",
      vietnamese: "Phải làm điều gì đó trước khi quá muộn.",
    },
    {
      english: "The letter might have been sent to the wrong address.",
      vietnamese: "Lá thư có lẽ đã được gửi nhầm địa chỉ.",
    },
    {
      english: "If you had locked the car, it wouldn't have been stolen.",
      vietnamese: "Nếu bạn khóa xe, nó đã không bị đánh cắp.",
    },
    {
      english: "They seem to have been solved.",
      vietnamese: "Chúng dường như đã được giải quyết.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
