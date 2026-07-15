import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 42 — Passive 1 (is done / was done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 43–44 (Passive 2–3).
 */
export const U42_PASSIVE_1_TOPIC: GrammarTopicDetail = {
  slug: "u42-passive-1",
  title: "Passive 1",
  levelLabel: "Intermediate",
  kindLabel: "Passive",
  sourceBook: "English Grammar in Use · Intermediate · Unit 42",
  sourceNote:
    "be + past participle (present / past simple); chủ ngữ chịu tác động; by + agent. Nên học kèm Units 43–44.",
  intro:
    "Unit này giúp bạn nắm Passive 1: Be + past participle (present / past simple); chủ ngữ chịu tác động; by + agent. Nên học kèm Unit 43 (have been / being done) và Unit 44 (I was given… / get).",
  structure: {
    affirmative:
      "S + am/is/are + V3 | S + was/were + V3 | … by + agent",
    negative:
      "S + am/is/are + not + V3 | S + was/were + not + V3",
  },
  usagePoints: [
    {
      before: "Active = chủ ngữ ",
      strong: "làm",
      after: "; passive = chủ ngữ chịu tác động: Somebody built this house → This house was built.",
    },
    {
      before: "Passive khi ",
      strong: "không biết / không cần",
      after: " ai làm: Is this room cleaned every day?",
    },
    {
      before: "Nêu người làm bằng ",
      strong: "by",
      after: ": This house was built by my grandfather.",
    },
    {
      before: "Công thức: ",
      strong: "be + past participle",
      after: " (cleaned / built / stolen… — nhiều động từ bất quy tắc).",
    },
    {
      before: "Present simple: ",
      strong: "am/is/are + V3",
      after: ": This room is cleaned every day. How is this word pronounced?",
    },
    {
      before: "Past simple: ",
      strong: "was/were + V3",
      after: ": This room was cleaned yesterday. I wasn't invited.",
    },
  ],
  examples: [
    {
      english: "This house was built in 1981.",
      vietnamese: "Ngôi nhà này được xây năm 1981.",
    },
    {
      english: "Two hundred people are employed by the company.",
      vietnamese: "Hai trăm người được công ty thuê.",
    },
    {
      english: "A lot of money was stolen in the robbery.",
      vietnamese: "Rất nhiều tiền đã bị đánh cắp trong vụ cướp. (không biết ai)",
    },
    {
      english: "Many accidents are caused by careless driving.",
      vietnamese: "Nhiều tai nạn do lái xe bất cẩn gây ra.",
    },
    {
      english: "How is this word pronounced?",
      vietnamese: "Từ này được phát âm thế nào?",
    },
    {
      english: "We were woken up by a loud noise during the night.",
      vietnamese: "Chúng tôi bị đánh thức bởi tiếng ồn lớn trong đêm.",
    },
    {
      english: "'Did you go to the party?' 'No, I wasn't invited.'",
      vietnamese: "—'Bạn có đi tiệc không?' —'Không, tôi không được mời.'",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
