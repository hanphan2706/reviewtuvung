import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 55 — Verb (+ object) + to … (I want you to …).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 54 (Verb + to …).
 */
export const U55_VERB_OBJECT_TO_TOPIC: GrammarTopicDetail = {
  slug: "u55-verb-object-to",
  title: "Verb (+ Object) + to …",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 55",
  sourceNote:
    "want/expect/ask/help/would like + (object) + to …; tell/advise/remind/warn… + object + to …; make/let (không to); be made to. Nên học kèm Unit 54.",
  intro:
    "Unit này giúp bạn nắm Verb (+ Object) + to …: Want/expect/ask/help/would like + (object) + to …; tell/advise/remind/warn… + object + to …; make/let (không to); be made to. Nên học kèm Unit 54.",
  structure: {
    affirmative:
      "want/expect/ask… + (O) + to + V | tell/advise/warn… + O + to + V | make/let + O + V | be made to + V",
    negative:
      "don't want + O + to + V | warn + O + not to + V | wouldn't let + O + V | aren't allowed to + V",
  },
  usagePoints: [
    {
      before: "want / expect / would like + ",
      strong: "(object) + to …",
      after: ": He doesn't want to know. / He doesn't want anybody to know.",
    },
    {
      before: "Không nói ",
      strong: "want that …",
      after: ": Do you want me to come with you?",
    },
    {
      before: "tell / advise / remind / warn / persuade… + ",
      strong: "object + to …",
      after: ": I wouldn't advise you to stay there. She warned me not to touch it.",
    },
    {
      before: "help: ",
      strong: "help (somebody) (to) do",
      after: " — có hoặc không to: Can you help me (to) move this table?",
    },
    {
      before: "make / let + ",
      strong: "somebody + V",
      after: " (không to): Hot weather makes me feel tired. Let me carry your bag.",
    },
    {
      before: "Bị động: ",
      strong: "be made to / be allowed to",
      after: ": We were made to wait for two hours. Are we allowed to park here?",
    },
  ],
  examples: [
    {
      english: "Would you like me to go now?",
      vietnamese: "Bạn muốn tôi đi ngay bây giờ không?",
    },
    {
      english: "Do you want me to come with you? (not want that I come)",
      vietnamese: "Bạn có muốn tôi đi cùng không? (không: want that…)",
    },
    {
      english: "Can you remind me to call Sam tomorrow?",
      vietnamese: "Bạn nhắc tôi gọi Sam ngày mai nhé?",
    },
    {
      english: "Joe warned me not to touch the switch.",
      vietnamese: "Joe cảnh báo tôi đừng chạm vào công tắc.",
    },
    {
      english: "Her parents wouldn't let her go out alone.",
      vietnamese: "Bố mẹ cô ấy không cho cô ấy ra ngoài một mình. (không: to go)",
    },
    {
      english: "We were made to wait for two hours.",
      vietnamese: "Chúng tôi bị bắt phải chờ hai giờ. (passive + to)",
    },
    {
      english: "Jane suggested that I ask you for advice. (not suggested me to ask)",
      vietnamese: "Jane đề nghị tôi hỏi bạn lời khuyên. (không: suggested me to…)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
