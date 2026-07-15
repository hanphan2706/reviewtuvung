import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 54 — Verb + to … (decide to … / forget to … etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 53, 55–58.
 */
export const U54_VERB_TO_TOPIC: GrammarTopicDetail = {
  slug: "u54-verb-to",
  title: "Verb + to …",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 54",
  sourceNote:
    "offer/agree/decide/plan/hope/forget/manage… + to …; seem/appear/pretend/claim; what/how/where + to …. Nên học kèm Units 53, 55–58.",
  intro:
    "Trong unit này bạn sẽ nắm: offer/agree/decide/plan/hope/forget/manage… + to …; seem/appear/pretend/claim; what/how/where + to …. Nên học kèm Unit 53 (-ing) và Units 55–58.",
  structure: {
    affirmative:
      "decide/hope/manage… + to + V | seem/appear/pretend + to + V / to be -ing / to have + V3 | know/decide + what/how… + to + V",
    negative:
      "decide/promise… + not to + V | claim + not to have + V3 | daren't + V (không to)",
  },
  usagePoints: [
    {
      before: "Động từ + ",
      strong: "to …",
      after: ": We decided to take a taxi. I agreed to help him. How old were you when you learnt to drive?",
    },
    {
      before: "Phủ định: ",
      strong: "not to …",
      after: ": We decided not to go out. I promised not to be late.",
    },
    {
      before: "Không dùng to sau ",
      strong: "enjoy / suggest / think of",
      after: ": I enjoy reading. Are you thinking of buying a car?",
    },
    {
      before: "seem / appear / pretend / claim + ",
      strong: "to … / to have done",
      after: ": They seem to have plenty of money. I seem to have lost my keys.",
    },
    {
      before: "Hỏi: ",
      strong: "what / how / where / whether + to …",
      after: ": Have you decided where to go? Can somebody show me how to use this camera?",
    },
    {
      before: "dare: ",
      strong: "dare (to) / daren't + V",
      after: ": I didn't dare (to) tell him. I daren't tell him. (không: daren't to tell)",
    },
  ],
  examples: [
    {
      english: "It was a long way, so we decided to take a taxi home.",
      vietnamese: "Đường xa nên chúng tôi quyết định bắt taxi về.",
    },
    {
      english: "We decided not to go out because of the weather.",
      vietnamese: "Chúng tôi quyết định không ra ngoài vì thời tiết.",
    },
    {
      english: "I waved to Karen, but failed to attract her attention.",
      vietnamese: "Tôi vẫy Karen nhưng không thu hút được sự chú ý của cô ấy.",
    },
    {
      english: "I pretended to be reading the newspaper.",
      vietnamese: "Tôi giả vờ đang đọc báo. (= pretended that I was reading)",
    },
    {
      english: "Have you seen my keys? I seem to have lost them.",
      vietnamese: "Bạn thấy chìa khóa tôi chưa? Hình như tôi đã làm mất.",
    },
    {
      english: "Do you know how to get to the airport from here?",
      vietnamese: "Bạn có biết đi sân bay từ đây thế nào không?",
    },
    {
      english: "I enjoy reading. (not enjoy to read)",
      vietnamese: "Tôi thích đọc. (so với Unit 53 — không dùng to)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
