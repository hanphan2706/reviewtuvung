import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 25 — When I do and when I've done (if and when).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 */
export const U25_WHEN_I_DO_AND_WHEN_IVE_DONE_TOPIC: GrammarTopicDetail = {
  slug: "u25-when-i-do-and-when-ive-done",
  title: "When I Do and When I've Done",
  levelLabel: "Intermediate",
  kindLabel: "Clause",
  sourceBook: "English Grammar in Use · Intermediate · Unit 25",
  sourceNote:
    "When I do and when I've done; if and when. Không dùng will sau when/while/before/after/as soon as/until, và sau if khi nói về tương lai.",
  intro:
    "When I do and when I've done; if and when. Không dùng will sau when/while/before/after/as soon as/until, và sau if khi nói về tương lai.",
  structure: {
    affirmative: "when/if/before/after/until/as soon as + S + V(s/es)/have/has + V3, S + will + V",
    negative: "when/if… + S + do/does/have/has + not + V, S + will not/won't + V",
  },
  usagePoints: [
    {
      before: "Sau when/while/before/after/as soon as/until nói về tương lai, dùng ",
      strong: "present simple",
      after: ", KHÔNG dùng will: We'll go out when it stops raining. (không nói when it will stop)",
    },
    {
      before: "Có thể dùng ",
      strong: "present perfect",
      after: " sau when/after/until/as soon as để nhấn việc này xong trước việc kia: When I've phoned Kate, we can go out.",
    },
    {
      before: "KHÔNG dùng present perfect nếu hai việc ",
      strong: "xảy ra đồng thời",
      after: ": When I phone Kate, I'll ask her about the party. (không nói when I've phoned)",
    },
    {
      before: "Sau if, dùng ",
      strong: "present simple",
      after: " cho tương lai, không dùng will: I'll be angry if it happens again. (không nói if it will happen)",
    },
    {
      before: "if dùng cho việc ",
      strong: "có thể xảy ra hoặc không",
      after: ", còn when dùng cho việc chắc chắn sẽ xảy ra: If it rains, I won't go out. / When I go out, I'll get some bread.",
    },
    {
      before: "Nhiều trường hợp có thể dùng cả ",
      strong: "present simple hoặc present perfect",
      after: " sau as soon as/after: I'll come as soon as I finish. = I'll come as soon as I've finished.",
    },
  ],
  examples: [
    {
      english: "We'll go out when it stops raining.",
      vietnamese: "Chúng tôi sẽ ra ngoài khi trời tạnh mưa. (không dùng will sau when)",
    },
    {
      english: "Don't forget to lock the door when you go out.",
      vietnamese: "Đừng quên khóa cửa khi bạn ra ngoài.",
    },
    {
      english: "Can I have the newspaper when you've finished with it?",
      vietnamese: "Tôi lấy tờ báo được không, sau khi bạn đọc xong?",
    },
    {
      english: "When I've phoned Kate, we can go out.",
      vietnamese: "Sau khi tôi gọi cho Kate xong, chúng ta có thể ra ngoài. (việc này xong trước việc kia)",
    },
    {
      english: "I'll be angry if it happens again.",
      vietnamese: "Tôi sẽ giận nếu việc đó lại xảy ra lần nữa.",
    },
    {
      english: "If it is raining this evening, I won't go out.",
      vietnamese: "Nếu tối nay trời mưa, tôi sẽ không ra ngoài. (có thể xảy ra hoặc không)",
    },
    {
      english: "I'm going out later. When I go out, I'll get some bread.",
      vietnamese: "Tôi sẽ ra ngoài sau. Khi tôi ra ngoài, tôi sẽ mua bánh mì. (chắc chắn sẽ xảy ra)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 360,
  },
};
