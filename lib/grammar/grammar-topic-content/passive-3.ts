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
    "I was given…; being + V3; I was born; get + V3 (thân mật, sự kiện). KHÔNG dùng get cho trạng thái. Nên học kèm Units 42–43.",
  intro:
    "Bài này giúp bạn mở rộng bị động với động từ hai tân ngữ (I was given…), dạng being + V3, was born, và get + V3 mang tính thân mật khi có sự kiện xảy ra. Nên học kèm Units 42–43 trước khi sang Unit 45 (it is said that / he is supposed to).",
  structure: {
    affirmative:
      "S + be + V3 (+ object) | being + V3 | was/were born | get + V3",
    negative:
      "KHÔNG: I am born → I was born | KHÔNG dùng get cho trạng thái: gets liked → is liked | don't like being + V3 | don't get + V3",
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
      vietnamese: "I've been offered = tôi được đề nghị — bị động bắt đầu bằng người nhận.",
    },
    {
      english: "I was shown a copy of the document.",
      vietnamese: "I was shown = tôi được cho xem — show có hai tân ngữ, ưu tiên người làm chủ ngữ bị động.",
    },
    {
      english: "I don't like being told what to do.",
      vietnamese: "being told = bị bảo — dạng bị động của -ing sau like.",
    },
    {
      english: "We climbed over the wall without being seen.",
      vietnamese: "without being seen = không bị nhìn thấy — being + V3 sau giới từ.",
    },
    {
      english: "I was born in Chicago. Where were you born?",
      vietnamese: "was born = sinh ra — luôn quá khứ, không dùng am born.",
    },
    {
      english: "There was a fight, but nobody got hurt.",
      vietnamese: "got hurt = bị thương — get + V3 thân mật cho sự kiện xảy ra.",
    },
    {
      english: "I don't get invited to many parties.",
      vietnamese: "don't get invited ≈ I'm not invited — get bị động thân mật, không trang trọng bằng be.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
