import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["You're through to", "You are through to"],
    },
    { id: "g2", answers: ["Could you give me some information"] },
    { id: "g3", answers: ["They're from Canada", "They are from Canada"] },
    { id: "g4", answers: ["that will appeal to children"] },
    {
      id: "g5",
      answers: ["I hope there's going to be", "I hope there is going to be"],
    },
    { id: "g6", answers: ["You're in luck", "You are in luck"] },
    { id: "g7", answers: ["a local amateur group"] },
    { id: "g8", answers: ["aimed more at children"] },
    { id: "g9", answers: ["with electronic music by young composers"] },
    { id: "g10", answers: ["how people communicate"] },
    {
      id: "g11",
      answers: ["at least once every day"],
    },
    {
      id: "g12",
      answers: [
        "you don't happen to have",
        "you do not happen to have",
      ],
    },
    { id: "g13", answers: ["even sweet things like cakes"] },
    {
      id: "g14",
      answers: ["encourage our children to cook"],
    },
    { id: "g15", answers: ["to reflect the history"] },
    { id: "g16", answers: ["will be exhibited"] },
    { id: "g17", answers: ["swimming in natural waters"] },
    {
      id: "g18",
      answers: ["There'll be lifeguards on duty", "There will be lifeguards on duty"],
    },
  ],
  lines: [
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Good morning. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the tourist information office, Tim speaking. How can I help you?" },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        { type: "text", text: "Oh hello. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " about next month's festival, please? My family and I will be staying in the town that week.",
        },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Of course. Well it starts with a concert on the afternoon of the 17th.",
        },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        {
          type: "text",
          text: "Oh I heard about that. The orchestra and singers come from the USA, don't they?",
        },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". They're very popular over there. They're going to perform a number of well-known pieces ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " as well as adults." },
      ],
    },
    {
      speaker: "JEAN",
      segments: [{ type: "text", text: "That sounds good. My whole family are interested in music." }],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "The next day, the 18th, there's a performance by a ballet company called Eustatis.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Sorry?" }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "The name is spelt E-U-S-T-A-T-I-S. They appeared in last year's festival, and went down very well. Again, their programme is designed for all ages.",
        },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        { type: "text", text: "Good. I expect we'll go to that. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " a play during the festival, a comedy, ideally." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: "! On the 19th and 20th " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " are performing one written by a member of the group. It's called Jemima. That'll be on in the town hall. They've already performed it two or three times. I haven't seen it myself, but the review in the local paper was very good.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "And is it suitable for children?" }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Yes, in fact it's " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " than at adults, so both performances are in the afternoon." },
      ],
    },
    {
      speaker: "JEAN",
      segments: [{ type: "text", text: "And what about dance? Will there be any performances?" }],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Yes, also on the 20th, but in the evening. A professional company is putting on a show of modern pieces, ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Uh-huh." }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "The show is about " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", or fail to communicate, with each other, so it's got the rather strange name, Chat.",
        },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        {
          type: "text",
          text: "I suppose that's because that's something we do both face to face and online.",
        },
      ],
    },
    { speaker: "TIM", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Now there are also some workshops and other activities. They'll all take place ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", so everyone who wants to take part will have a chance." },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        { type: "text", text: "Good. We're particularly interested in cookery – " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " a cookery workshop, do you?" },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "We certainly do. It's going to focus on how to make food part of a healthy lifestyle, and it'll show that ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " can contain much less sugar than they usually do." },
      ],
    },
    {
      speaker: "JEAN",
      segments: [
        { type: "text", text: "That might be worth going to. We're trying to " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Another workshop is just for children, and that's on creating posters " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " of the town. The aim is to make children aware of how both the town and people's lives have changed over the centuries. The results ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " in the community centre. Then the other workshop is in toy-making, and that's for adults only.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Oh, why's that?" }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Because it involves carpentry – participants will be making toys out of wood, so there'll be a lot of sharp chisels and other tools around.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "It makes sense to keep children away from it." }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Exactly. Now let me tell you about some of the outdoor activities. There'll be supervised wild swimming …",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Wild swimming? What's that?" }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "It just means " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", rather than a swimming pool." },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Oh OK. In a lake, for instance." }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Yes, there's a beautiful one just outside the town, and that'll be the venue for the swimming. ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", so it's suitable for all ages. And finally, there'll be a walk in some nearby woods every day. The leader is an expert on insects. He'll show some that live in the woods, and how important they are for the environment. So there are going to be all sorts of different things to do during the festival.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "There certainly are." }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "If you'd like to read about how the preparations for the festival are going, the festival organizer is keeping a blog. Just search online for the festival website, and you'll find it.",
        },
      ],
    },
    { speaker: "JEAN", segments: [{ type: "text", text: "Well, thank you very much for all the information." }] },
    { speaker: "TIM", segments: [{ type: "text", text: "You're welcome. Goodbye." }] },
    { speaker: "JEAN", segments: [{ type: "text", text: "Goodbye." }] },
  ],
};

export const CAM15_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "a ballet — company called ______",
    questionVi: "ballet — đoàn tên ______",
    modelParaphraseEn: "there's a performance by a ballet company called Eustatis – E-U-S-T-A-T-I-S",
    modelParaphraseVi: "there's a performance by a ballet company called Eustatis – E-U-S-T-A-T-I-S",
    acceptedAnswers: ["Eustatis"],
    explanationEn: "Spelled E-U-S-T-A-T-I-S. Not from the USA (that was the concert).",
    explanationVi: "Đánh vần E-U-S-T-A-T-I-S. Không phải đoàn Mỹ (concert mới từ Canada).",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "a comedy called Jemima has had a good ______",
    questionVi: "hài kịch Jemima đã có ______ tốt",
    modelParaphraseEn: "the review in the local paper was very good",
    modelParaphraseVi: "the review in the local paper was very good",
    acceptedAnswers: ["review"],
    explanationEn: "Tim has not seen Jemima himself; the local-paper review was very good.",
    explanationVi: "Tim chưa xem Jemima; review trên báo địa phương rất tốt.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "20th (evening) — a ______ show",
    questionVi: "tối 20 — show ______",
    modelParaphraseEn: "And what about dance? … A professional company is putting on a show of modern pieces",
    modelParaphraseVi: "And what about dance? … A professional company is putting on a show of modern pieces",
    acceptedAnswers: ["dance"],
    explanationEn: "Jean asks about dance; the evening show on the 20th is a dance show.",
    explanationVi: "Jean hỏi về dance; show tối ngày 20 là dance show.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "show is called ______",
    questionVi: "tên show là ______",
    modelParaphraseEn: "it's got the rather strange name, Chat",
    modelParaphraseVi: "it's got the rather strange name, Chat",
    acceptedAnswers: ["Chat"],
    explanationEn: "About communicating / failing to communicate — the strange name is Chat.",
    explanationVi: "Về giao tiếp / thất bại trong giao tiếp — tên lạ là Chat.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Workshops — Making ______ food",
    questionVi: "Workshop — làm đồ ăn ______",
    modelParaphraseEn: "how to make food part of a healthy lifestyle … even sweet things like cakes can contain much less sugar",
    modelParaphraseVi: "how to make food part of a healthy lifestyle … even sweet things like cakes can contain much less sugar",
    acceptedAnswers: ["healthy"],
    explanationEn: "Cookery workshop: food as part of a healthy lifestyle (less sugar).",
    explanationVi: "Workshop nấu ăn: food thuộc healthy lifestyle (ít đường hơn).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "(children only) Making ______",
    questionVi: "(chỉ trẻ em) Làm ______",
    modelParaphraseEn: "creating posters to reflect the history of the town",
    modelParaphraseVi: "creating posters to reflect the history of the town",
    acceptedAnswers: ["posters"],
    explanationEn: "Children's workshop: creating posters about the town's history.",
    explanationVi: "Workshop trẻ em: tạo posters về lịch sử thị trấn.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "(adults only) Making toys from ______",
    questionVi: "(chỉ người lớn) Làm đồ chơi từ ______",
    modelParaphraseEn: "participants will be making toys out of wood … sharp chisels and other tools",
    modelParaphraseVi: "participants will be making toys out of wood … sharp chisels and other tools",
    acceptedAnswers: ["wood"],
    explanationEn: "Adults only because of carpentry: toys out of wood, sharp tools.",
    explanationVi: "Chỉ người lớn vì carpentry: đồ chơi từ wood, dụng cụ sắc.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Swimming in the ______",
    questionVi: "Bơi ở ______",
    modelParaphraseEn: "In a lake, for instance. Yes, there's a beautiful one just outside the town",
    modelParaphraseVi: "In a lake, for instance. Yes, there's a beautiful one just outside the town",
    acceptedAnswers: ["lake"],
    explanationEn: "Wild swimming = natural waters; the venue is a lake outside town, not a pool.",
    explanationVi: "Wild swimming = nước tự nhiên; địa điểm là lake ngoài thị trấn, không phải hồ bơi.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Walking in the woods, led by an expert on ______",
    questionVi: "Đi bộ trong rừng, hướng dẫn bởi chuyên gia về ______",
    modelParaphraseEn: "The leader is an expert on insects. He'll show some that live in the woods",
    modelParaphraseVi: "The leader is an expert on insects. He'll show some that live in the woods",
    acceptedAnswers: ["insects"],
    explanationEn: "Woods walk led by an insects expert, showing why they matter for the environment.",
    explanationVi: "Đi rừng do chuyên gia insects dẫn, chỉ vai trò với môi trường.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "See the festival organiser's ______ for more information",
    questionVi: "Xem ______ của người tổ chức lễ hội để biết thêm",
    modelParaphraseEn: "the festival organizer is keeping a blog. Just search online for the festival website",
    modelParaphraseVi: "the festival organizer is keeping a blog. Just search online for the festival website",
    acceptedAnswers: ["blog"],
    explanationEn: "Preparations are on the organiser's blog, found via the festival website.",
    explanationVi: "Chuẩn bị lễ hội được viết trên blog; tìm qua website lễ hội.",
  },
];
