import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 44 — Passive 3 (I was offered… / being… / get).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 42–43 (Passive 1–2).
 */
export const U44_PASSIVE_3_TOPIC: GrammarTopicDetail = {
  slug: "u44-passive-3",
  title: "Passive 3",
  levelLabel: "Intermediate",
  kindLabel: "Passive",
  sourceBook: "English Grammar in Use · Intermediate · Unit 44",
  sourceNote:
    "I was given…; being + V3; I was born; get + V3 (informal). Nên học kèm Units 42–43.",
  intro:
    "Unit này mở rộng bị động: động từ hai tân ngữ (I was given…), being + V3, was born, và get + V3 (không trang trọng). Nên học kèm Units 42–43.",
  structure: {
    affirmative:
      "S + be + V3 + object | being + V3 | was born | get + V3",
    negative:
      "wasn't/weren't + V3 | don't like being + V3 | don't get + V3 | not supposed…",
  },
  usagePoints: [
    {
      before: "Động từ hai tân ngữ → bị động thường ",
      strong: "bắt đầu bằng người",
      after: ": I've been offered the job. You will be given time.",
    },
    {
      before: "Passive của -ing: ",
      strong: "being + V3",
      after: ": I don't like being told what to do. without being seen",
    },
    {
      before: "Sinh: ",
      strong: "I was born",
      after: " (không: I am born). Where were you born?",
    },
    {
      before: "get + V3 = bị động ",
      strong: "thân mật",
      after: " khi có 'sự kiện': nobody got hurt; I don't get invited.",
    },
    {
      before: "Không dùng get cho ",
      strong: "trạng thái",
      after: ": Jessica is liked by everybody. (không: gets liked)",
    },
    {
      before: "get married / dressed / lost / changed = ",
      strong: "thành ngữ",
      after: ", không phải bị động thuần.",
    },
  ],
  examples: [
    {
      english: "I've been offered the job, but I don't think I want it.",
      vietnamese: "Tôi được đề nghị công việc, nhưng tôi không nghĩ mình muốn.",
    },
    {
      english: "I was shown a copy of the document.",
      vietnamese: "Tôi được cho xem một bản sao của tài liệu.",
    },
    {
      english: "I don't like being told what to do.",
      vietnamese: "Tôi không thích bị bảo phải làm gì.",
    },
    {
      english: "We climbed over the wall without being seen.",
      vietnamese: "Chúng tôi trèo tường mà không bị phát hiện.",
    },
    {
      english: "I was born in Chicago. Where were you born?",
      vietnamese: "Tôi sinh ra ở Chicago. Bạn sinh ở đâu?",
    },
    {
      english: "There was a fight, but nobody got hurt.",
      vietnamese: "Có đánh nhau, nhưng không ai bị thương.",
    },
    {
      english: "I don't get invited to many parties.",
      vietnamese: "Tôi không được mời đến nhiều tiệc. (= I'm not invited)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
