import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 83 — A Friend of Mine / My Own / on My Own / by Myself.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 82 (myself/yourself/themselves).
 */
export const U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_TOPIC: GrammarTopicDetail = {
  slug: "u83-a-friend-of-mine-my-own-on-my-own-by-myself",
  title: "A Friend of Mine / My Own / on My Own / by Myself",
  levelLabel: "Intermediate",
  kindLabel: "Pronouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 83",
  sourceNote:
    "a friend of mine/yours…; my own / a room of my own; cut his own hair; on my own = by myself. Nên học kèm Unit 82.",
  intro:
    "Trong unit này bạn sẽ nắm: a friend of mine/yours…; my own / a room of my own; cut his own hair; on my own = by myself. Nên học kèm Unit 82 (myself / yourself…).",
  structure: {
    affirmative:
      "a N of mine/yours/… | my/your/her own + N | on my own / by myself",
    negative:
      "not a friend of me | not an own house | not by my own / with himself (for 'alone')",
  },
  usagePoints: [
    {
      before: "a friend of ",
      strong: "mine / yours / hers …",
      after: " (= one of my/your… friends). Cũng: a friend of Amy's.",
    },
    {
      before: "my own room = ",
      strong: "chỉ của tôi",
      after: " (không chia sẻ). Không: an own room.",
    },
    {
      before: "cuts his own hair = ",
      strong: "tự cắt",
      after: " (thay vì nhờ người khác).",
    },
    {
      before: "on my own = ",
      strong: "by myself",
      after: " (= alone).",
    },
    {
      before: "a room of my own / problems of his own: ",
      strong: "of + possessive",
      after: ".",
    },
    {
      before: "its own: ",
      strong: "của nó (vật/tổ chức)",
      after: " — its own private beach.",
    },
  ],
  examples: [
    {
      english: "A friend of mine is getting married. We went with some friends of ours.",
      vietnamese: "of mine/ours — không of me/us.",
    },
    {
      english: "I want my own room. I'd like a room of my own.",
      vietnamese: "my own / of my own.",
    },
    {
      english: "Paul usually cuts his own hair.",
      vietnamese: "tự làm thay vì nhờ người khác.",
    },
    {
      english: "I like living on my own. / I like living by myself.",
      vietnamese: "hai cách nói 'một mình'.",
    },
    {
      english: "It's my own fault that I have no money.",
      vietnamese: "my own fault = lỗi của chính tôi.",
    },
    {
      english: "He won't help you. He has too many problems of his own.",
      vietnamese: "problems of his own.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
