import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["I've seen your advert", "I have seen your advert"],
    },
    { id: "g2", answers: ["the right person to speak to"] },
    { id: "g3", answers: ["Could I have your name", "could I have your name"] },
    {
      id: "g4",
      answers: ["This will probably sound crazy", "this will probably sound crazy"],
    },
    { id: "g5", answers: ["a complete career change"] },
    {
      id: "g6",
      answers: ["I've just finished my training", "I have just finished my training"],
    },
    { id: "g7", answers: ["has now been cancelled"] },
    { id: "g8", answers: ["depending on the size"] },
    { id: "g9", answers: ["proving so popular"] },
    { id: "g10", answers: ["working with children"] },
    { id: "g11", answers: ["some more experience"] },
    { id: "g12", answers: ["fit in with your plans"] },
    { id: "g13", answers: ["as long as", "As long as"] },
    { id: "g14", answers: ["fill in an application form"] },
    { id: "g15", answers: ["P Papa or B Bravo"] },
    { id: "g16", answers: ["a long way from"] },
    {
      id: "g17",
      answers: ["any certificates you've got", "any certificates you have got"],
    },
    {
      id: "g18",
      answers: [
        "I'll start thinking about that straightaway",
        "I will start thinking about that straightaway",
      ],
    },
  ],
  lines: [
    {
      speaker: "BOB",
      segments: [{ type: "text", text: "Hello, Pembroke Cycling Holidays, Bob speaking." }],
    },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "Oh hello. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for people to lead cycle trips. Are you " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        { type: "text", text: "Yes, I am. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", please?" },
      ],
    },
    { speaker: "MARGARET", segments: [{ type: "text", text: "It's Margaret Smith." }] },
    {
      speaker: "BOB",
      segments: [{ type: "text", text: "Are you looking for a permanent job, Margaret?" }],
    },
    {
      speaker: "MARGARET",
      segments: [
        {
          type: "text",
          text: "No, temporary. I've got a permanent job starting in a few months' time, and I want to do something else until then.",
        },
      ],
    },
    { speaker: "BOB", segments: [{ type: "text", text: "What work do you do?" }] },
    {
      speaker: "MARGARET",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: " - I used to be a lawyer, and then I made " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " and I'm going to be a doctor. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BOB",
      segments: [{ type: "text", text: "Right. And have you had any experience of leading cycle trips?" }],
    },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "Yes, I've led several bike tours in Africa. The trip to India that I had arranged to lead next month " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", so when I saw you were advertising for tour leaders, I decided to apply.",
        },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        { type: "text", text: "OK. Now we normally have two or three leaders on a trip, " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " of the group. Some tours are for very experienced cyclists, but we've got a tour coming up soon in Spain, which is " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " we need an additional leader. It's a cycling holiday for families. Would that suit you?" },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "It certainly would. I enjoy " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", and I probably need " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " before I go on a really challenging trip." },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "That tour includes several teenagers: have you worked with that age group before?",
        },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [
        {
          type: "text",
          text: "Yes, I'm a volunteer worker in a youth club, where I help people to improve their cycling skills. Before that I helped out in a cycling club where I taught beginners.",
        },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "Well that's great. Now the trip I mentioned is just for a fortnight, but there might be the possibility of leading other tours after that. ",
        },
        { type: "text", text: "Would that " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [
        {
          type: "text",
          text: "That'd be fine. I'll be free for five months. My job is due to start on October the 2nd, and I'm available from May the 1st until late September.",
        },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "Good. Now is there anything I need to know about the food you eat? We usually have one or two people in the group who don't eat meat, or have some sort of food allergy, so we're always very careful about that.",
        },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [{ type: "text", text: "Yes, I'm allergic to cheese. Would that be a problem?" }],
    },
    {
      speaker: "BOB",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " we have enough notice, we can deal with that." },
      ],
    },
    { speaker: "MARGARET", segments: [{ type: "text", text: "That's great." }] },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "It sounds really interesting - would you like me to " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "BOB", segments: [{ type: "text", text: "Yes, please. Where should I post it to?" }] },
    {
      speaker: "MARGARET",
      segments: [
        {
          type: "text",
          text: "Could you send it to 27 Arbuthnot Place - A-R-B-U-T-H-N-O-T - Place, Dumfries.",
        },
      ],
    },
    { speaker: "BOB", segments: [{ type: "text", text: "And what's the postcode, please?" }] },
    { speaker: "MARGARET", segments: [{ type: "text", text: "DG7 4PH." }] },
    {
      speaker: "BOB",
      segments: [
        { type: "text", text: "Was that " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "MARGARET", segments: [{ type: "text", text: "P Papa." }] },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "Got that. If you could return the application form by Friday this week, we can interview you on Tuesday next week. Say half past two. Would that be possible for you?",
        },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "Yes, it's fine. You're quite " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " where I live, so I'll drive over on Monday. Should I bring anything to the interview?" },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        { type: "text", text: "We'll have your application form, of course, but we'll need to see " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " that are relevant, in cycling, first aid, or whatever." },
      ],
    },
    { speaker: "MARGARET", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "And at the interview we'd like to find out about your experience of being a tour guide, so could you prepare a ten-minute talk about that, please? You don't need slides or any complicated equipment - just some notes.",
        },
      ],
    },
    {
      speaker: "MARGARET",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "BOB",
      segments: [
        {
          type: "text",
          text: "Good. Well, we'll look forward to receiving your application form, and we'll contact you to confirm the interview.",
        },
      ],
    },
    { speaker: "MARGARET", segments: [{ type: "text", text: "Thanks very much." }] },
    { speaker: "BOB", segments: [{ type: "text", text: "Thank you, Margaret. Goodbye." }] },
    { speaker: "MARGARET", segments: [{ type: "text", text: "Bye." }] },
  ],
};

export const CAM12_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "wants a ______ job",
    questionVi: "wants a ______ job",
    modelParaphraseEn: "Are you looking for a permanent job? No, temporary",
    modelParaphraseVi: "Are you looking for a permanent job? No, temporary",
    acceptedAnswers: ["temporary"],
    explanationEn: "She does not want a permanent job — she wants a temporary one until her next post starts.",
    explanationVi: "Cô không muốn việc permanent — muốn việc temporary đến khi nhận việc mới.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "will soon start work as a ______",
    questionVi: "will soon start work as a ______",
    modelParaphraseEn: "I used to be a lawyer … I'm going to be a doctor. I've just finished my training",
    modelParaphraseVi: "I used to be a lawyer … I'm going to be a doctor. I've just finished my training",
    acceptedAnswers: ["doctor"],
    explanationEn: "Career change from lawyer; she will soon start work as a doctor.",
    explanationVi: "Đổi nghề từ lawyer; sắp bắt đầu làm doctor.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "has led cycle trips in ______",
    questionVi: "has led cycle trips in ______",
    modelParaphraseEn: "I've led several bike tours in Africa",
    modelParaphraseVi: "I've led several bike tours in Africa",
    acceptedAnswers: ["Africa"],
    explanationEn: "Her leading experience is bike tours in Africa (the India trip was cancelled).",
    explanationVi: "Kinh nghiệm dẫn đoàn là bike tours ở Africa (chuyến India đã bị huỷ).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "is currently doing voluntary work with members of a ______ club",
    questionVi: "is currently doing voluntary work with members of a ______ club",
    modelParaphraseEn: "I'm a volunteer worker in a youth club, where I help people to improve their cycling skills",
    modelParaphraseVi: "I'm a volunteer worker in a youth club, where I help people to improve their cycling skills",
    acceptedAnswers: ["youth"],
    explanationEn: "Current voluntary work is at a youth club. The cycling club was before that.",
    explanationVi: "Việc tình nguyện hiện tại là ở youth club. Cycling club là trước đó.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "available for five months from the 1st of ______",
    questionVi: "available for five months from the 1st of ______",
    modelParaphraseEn: "I'm available from May the 1st until late September",
    modelParaphraseVi: "I'm available from May the 1st until late September",
    acceptedAnswers: ["May"],
    explanationEn: "Free for five months from 1 May; the new job starts on 2 October.",
    explanationVi: "Rảnh năm tháng từ 1 May; việc mới bắt đầu 2 October.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "can't eat ______",
    questionVi: "can't eat ______",
    modelParaphraseEn: "I'm allergic to cheese. Would that be a problem?",
    modelParaphraseVi: "I'm allergic to cheese. Would that be a problem?",
    acceptedAnswers: ["cheese"],
    explanationEn: "Food restriction is an allergy to cheese, not a general refusal of meat.",
    explanationVi: "Kiêng vì dị ứng cheese, không phải vì không ăn thịt.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "address: 27 ______ Place, Dumfries",
    questionVi: "address: 27 ______ Place, Dumfries",
    modelParaphraseEn: "27 Arbuthnot Place - A-R-B-U-T-H-N-O-T - Place, Dumfries",
    modelParaphraseVi: "27 Arbuthnot Place - A-R-B-U-T-H-N-O-T - Place, Dumfries",
    acceptedAnswers: ["Arbuthnot"],
    explanationEn: "The street is spelled letter by letter: Arbuthnot.",
    explanationVi: "Tên đường được đánh vần: Arbuthnot.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "postcode: ______",
    questionVi: "postcode: ______",
    modelParaphraseEn: "DG7 4PH … P Papa, not B Bravo",
    modelParaphraseVi: "DG7 4PH … P Papa, not B Bravo",
    acceptedAnswers: ["DG7 4PH"],
    explanationEn: "Postcode is DG7 4PH — he checks P Papa, not B Bravo.",
    explanationVi: "Postcode là DG7 4PH — xác nhận P Papa, không phải B Bravo.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "interview at 2.30 pm on ______",
    questionVi: "interview at 2.30 pm on ______",
    modelParaphraseEn: "we can interview you on Tuesday next week. Say half past two",
    modelParaphraseVi: "we can interview you on Tuesday next week. Say half past two",
    acceptedAnswers: ["Tuesday"],
    explanationEn: "Interview is Tuesday next week at 2.30. Monday is when she will drive over.",
    explanationVi: "Phỏng vấn vào Tuesday tuần sau lúc 2.30. Monday là ngày cô lái xe tới.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "will plan a short ______ about being a tour guide",
    questionVi: "will plan a short ______ about being a tour guide",
    modelParaphraseEn: "could you prepare a ten-minute talk about that, please?",
    modelParaphraseVi: "could you prepare a ten-minute talk about that, please?",
    acceptedAnswers: ["talk", "presentation"],
    explanationEn: "She must prepare a ten-minute talk about being a tour guide (notes only, no slides).",
    explanationVi: "Cần chuẩn bị talk mười phút về làm tour guide (chỉ notes, không slides).",
  },
];
