import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["find out about joining"] },
    { id: "g2", answers: ["I can help you there"] },
    { id: "g3", answers: ["interested in membership"] },
    {
      id: "g4",
      answers: [
        "If you're pretty serious about cycling",
        "If you are pretty serious about cycling",
      ],
    },
    {
      id: "g5",
      answers: [
        "not really up to that standard",
      ],
    },
    {
      id: "g6",
      answers: [
        "better with the Recreational membership",
      ],
    },
    { id: "g7", answers: ["It's paid quarterly", "It is paid quarterly"] },
    {
      id: "g8",
      answers: [
        "permitted to wear our kit",
      ],
    },
    {
      id: "g9",
      answers: [
        "made to order",
      ],
    },
    {
      id: "g10",
      answers: [
        "improving your cycling skills",
      ],
    },
    { id: "g11", answers: ["Level A is pretty fast"] },
    {
      id: "g12",
      answers: [
        "They're both early morning sessions",
        "They are both early morning sessions",
      ],
    },
    { id: "g13", answers: ["it's quite near my home", "it is quite near my home"] },
    {
      id: "g14",
      answers: [
        "easy to fit in",
      ],
    },
    { id: "g15", answers: ["it's quite a social event", "it is quite a social event"] },
    {
      id: "g16",
      answers: [
        "only just moved to the city",
      ],
    },
    { id: "g17", answers: ["support one another"] },
    {
      id: "g18",
      answers: [
        "while you're cycling",
        "while you are cycling",
      ],
    },
  ],
  lines: [
    { speaker: "JIM", segments: [{ type: "text", text: "Hello, South City Cycling Club." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, hi. Er … I want to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the club." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ". I'm the club secretary and my name's Jim Hunter.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, hi Jim." }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "So, are you " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " for yourself?" },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "OK. Well there are basically two types of adult membership. " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", there's the Full membership. That costs 260 dollars and that covers you not just for ordinary cycling but also for races both here in the city and also in other parts of Australia.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Right. Well, I'm " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". I was more interested in just joining a group to do some cycling in my free time.",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Sure. That's why most people join. So, in that case you'd be " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". That's 108 dollars if you're over 19, and 95 dollars if you're under.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "I'm 25." }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", and you can upgrade it later to the Full membership if you want to, of course. Now both types of membership include the club fee of 20 dollars. They also provide insurance in case you have an accident, though we hope you won't need that, of course.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "No. OK, well, I'll go with the Recreational membership, I think. And that allows me to join in the club activities, and so on?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "That's right. And once you're a member of the club, you're also " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " when you're out cycling. It's green and white." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes, I've seen cyclists wearing it. So, can I buy that at the club?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "No, it's " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " by a company in Brisbane. You can find them online: they're called Jerriz. That's J-E-R-R-I-Z. You can use your membership number to put in an order on their website.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "OK. Now, can you tell me a bit about the rides I can do?" }],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Sure. So we have training rides pretty well every morning, and they're a really good way of " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " as well as your general level of fitness, but they're different levels. ",
        },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " - you're looking at about 30 or 35 kilometres an hour. If you can do about 25 kilometres an hour, you'd probably be level B, and then level C are the novices, who stay at about 15 kilometres per hour.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. Well I reckon I'd be level B. So, when are the sessions for that level?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "There are a couple each week. " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". There's one on Tuesdays, and for that one you meet at 5.30 am, and the meeting point's the stadium - do you know where that is?",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", in fact. OK, and how about the other one?" },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "That's on Thursdays. It starts at the same time, but they meet at the main gate to the park.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Is that the one just past the shopping mall?" }] },
    { speaker: "JIM", segments: [{ type: "text", text: "That's it." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "So how long are the rides?" }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "They're about an hour and a half. So, if you have a job it's " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " before you go to work. And the members often go somewhere for coffee afterwards, so ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. That sounds good. I've " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " so I don't actually know many people yet." },
      ],
    },
    { speaker: "JIM", segments: [{ type: "text", text: "Well, it's a great way to meet people." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And does each ride have a leader?" }] },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Sometimes, but not always. But you don't really need one; the group members on the ride ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", anyway." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "How would we know where to go?" }] },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "If you check the club website, you'll see that the route for each ride is clearly marked. So you can just print that out and take it along with you. It's similar from one week to another, but it's not always exactly the same.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And what do I need to bring?" }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Well, bring a bottle of water, and your phone. You shouldn't use it " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", but have it with you." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "And in winter, it's well before sunrise when we set out, so you need to make sure your bike's got lights.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "That's OK. Well, thanks Jim. I'd definitely like to join. So what's the best way of going about it?",
        },
      ],
    },
  ],
};

export const CAM13_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Full membership costs $260; this covers cycling and ______ all over Australia",
    questionVi: "Full membership costs $260; this covers cycling and ______ all over Australia",
    modelParaphraseEn:
      "that covers you not just for ordinary cycling but also for races both here in the city and also in other parts of Australia",
    modelParaphraseVi:
      "that covers you not just for ordinary cycling but also for races both here in the city and also in other parts of Australia",
    acceptedAnswers: ["races"],
    explanationEn: "Full membership covers ordinary cycling and races in the city and elsewhere in Australia.",
    explanationVi: "Full membership gồm đạp xe thường và races ở thành phố lẫn các nơi khác ở Australia.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Cost of membership includes the club fee and ______",
    questionVi: "Cost of membership includes the club fee and ______",
    modelParaphraseEn: "both types of membership include the club fee of 20 dollars. They also provide insurance in case you have an accident",
    modelParaphraseVi: "both types of membership include the club fee of 20 dollars. They also provide insurance in case you have an accident",
    acceptedAnswers: ["insurance"],
    explanationEn: "Membership includes the $20 club fee plus insurance in case of an accident.",
    explanationVi: "Hội phí gồm club fee $20 và insurance nếu tai nạn.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "The club kit is made by a company called ______",
    questionVi: "The club kit is made by a company called ______",
    modelParaphraseEn: "they're called Jerriz. That's J-E-R-R-I-Z",
    modelParaphraseVi: "they're called Jerriz. That's J-E-R-R-I-Z",
    acceptedAnswers: ["Jerriz"],
    explanationEn: "The kit is made to order in Brisbane by Jerriz (J-E-R-R-I-Z).",
    explanationVi: "Kit đặt làm ở Brisbane bởi Jerriz (J-E-R-R-I-Z).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Level B: speed about ______ kph",
    questionVi: "Level B: speed about ______ kph",
    modelParaphraseEn: "If you can do about 25 kilometres an hour, you'd probably be level B",
    modelParaphraseVi: "If you can do about 25 kilometres an hour, you'd probably be level B",
    acceptedAnswers: ["25", "twenty-five"],
    explanationEn: "Level B is about 25 kph. Level A is 30–35; Level C novices stay at about 15.",
    explanationVi: "Level B khoảng 25 kph. Level A là 30–35; Level C novice khoảng 15.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Tuesdays at 5.30 am, meet at the ______",
    questionVi: "Tuesdays at 5.30 am, meet at the ______",
    modelParaphraseEn: "you meet at 5.30 am, and the meeting point's the stadium",
    modelParaphraseVi: "you meet at 5.30 am, and the meeting point's the stadium",
    acceptedAnswers: ["stadium"],
    explanationEn: "Tuesday Level B session: meet at 5.30 am at the stadium.",
    explanationVi: "Buổi Level B thứ Ba: họp lúc 5.30 am tại stadium.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Thursdays at 5.30 am, meet at the entrance to the ______",
    questionVi: "Thursdays at 5.30 am, meet at the entrance to the ______",
    modelParaphraseEn: "they meet at the main gate to the park",
    modelParaphraseVi: "they meet at the main gate to the park",
    acceptedAnswers: ["park"],
    explanationEn: "Thursday session: same time, main gate to the park (just past the shopping mall).",
    explanationVi: "Buổi thứ Năm: cùng giờ, cổng chính của park (ngay sau shopping mall).",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Members often have ______ together afterwards",
    questionVi: "Members often have ______ together afterwards",
    modelParaphraseEn: "the members often go somewhere for coffee afterwards, so it's quite a social event",
    modelParaphraseVi: "the members often go somewhere for coffee afterwards, so it's quite a social event",
    acceptedAnswers: ["coffee"],
    explanationEn: "After the ride, members often go for coffee — a social event.",
    explanationVi: "Sau buổi đạp, hội viên thường đi uống coffee — mang tính xã giao.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "There is not always a ______ with the group on these rides",
    questionVi: "There is not always a ______ with the group on these rides",
    modelParaphraseEn: "And does each ride have a leader? Sometimes, but not always",
    modelParaphraseVi: "And does each ride have a leader? Sometimes, but not always",
    acceptedAnswers: ["leader"],
    explanationEn: "A leader is only sometimes present; group members support one another anyway.",
    explanationVi: "Không phải lúc nào cũng có leader; thành viên trong nhóm hỗ trợ nhau.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Check and print the ______ on the website beforehand",
    questionVi: "Check and print the ______ on the website beforehand",
    modelParaphraseEn: "the route for each ride is clearly marked. So you can just print that out and take it along with you",
    modelParaphraseVi: "the route for each ride is clearly marked. So you can just print that out and take it along with you",
    acceptedAnswers: ["route"],
    explanationEn: "The route is marked on the club website — print it and take it with you.",
    explanationVi: "Route được đánh dấu trên website CLB — in ra và mang theo.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Bikes must have ______",
    questionVi: "Bikes must have ______",
    modelParaphraseEn: "it's well before sunrise when we set out, so you need to make sure your bike's got lights",
    modelParaphraseVi: "it's well before sunrise when we set out, so you need to make sure your bike's got lights",
    acceptedAnswers: ["lights"],
    explanationEn: "Winter rides start before sunrise, so the bike must have lights.",
    explanationVi: "Mùa đông xuất phát trước sunrise, nên xe phải có lights.",
  },
];
