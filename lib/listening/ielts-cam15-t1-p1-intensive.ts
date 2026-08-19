import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Is now a good time"] },
    { id: "g2", answers: ["I can tell you the address now"] },
    { id: "g3", answers: ["is there anyone in particular I should speak to there"] },
    { id: "g4", answers: ["The agent I always deal with"] },
    {
      id: "g5",
      answers: [
        "she's always really busy in the morning trying to fill last-minute vacancies",
        "she is always really busy in the morning trying to fill last-minute vacancies",
      ],
    },
    {
      id: "g6",
      answers: [
        "I'm sure it would be worth getting in touch with her for an informal chat",
        "I am sure it would be worth getting in touch with her for an informal chat",
      ],
    },
    { id: "g7", answers: ["which will look good on your CV"] },
    {
      id: "g8",
      answers: ["I don't have much office experience", "I do not have much office experience"],
    },
    {
      id: "g9",
      answers: [
        "you'll pick up office skills really quickly on the job",
        "you will pick up office skills really quickly on the job",
      ],
    },
    {
      id: "g10",
      answers: ["That shouldn't be too difficult", "That should not be too difficult"],
    },
    {
      id: "g11",
      answers: [
        "It's unusual to be sent somewhere for just a day or two",
        "It is unusual to be sent somewhere for just a day or two",
      ],
    },
    { id: "g12", answers: ["I was only expecting to get eight or nine pounds an hour"] },
    { id: "g13", answers: ["The interview usually takes about an hour"] },
    {
      id: "g14",
      answers: ["It's better to look too smart than too casual", "It is better to look too smart than too casual"],
    },
    {
      id: "g15",
      answers: [
        "they don't need to see those, I don't think",
        "they do not need to see those, I do not think",
      ],
    },
    {
      id: "g16",
      answers: [
        "I wouldn't get stressed about the interview though",
        "I would not get stressed about the interview though",
      ],
    },
    {
      id: "g17",
      answers: [
        "they can try and match you to a job which you'll like",
        "they can try and match you to a job which you will like",
      ],
    },
    {
      id: "g18",
      answers: ["it's much easier than ringing up individual companies", "it is much easier than ringing up individual companies"],
    },
  ],
  lines: [
    {
      speaker: "AMBER",
      segments: [
        {
          type: "text",
          text: "Hello William. This is Amber – you said to phone if I wanted to get more information about the job agency you mentioned. ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "text", text: "Oh, hi Amber. Yes. Fine. So the agency I was talking about is called Bankside – they're based in Docklands – " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " – 497 Eastside." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [
        { type: "text", text: "OK, thanks. So " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: " is called Becky Jamieson." },
      ],
    },
    { speaker: "AMBER", segments: [{ type: "text", text: "Let me write that down – Becky …" }] },
    { speaker: "WILLIAM", segments: [{ type: "text", text: "Jamieson J-A-M-I-E-S-O-N." }] },
    { speaker: "AMBER", segments: [{ type: "text", text: "Do you have her direct line?" }] },
    {
      speaker: "WILLIAM",
      segments: [
        {
          type: "text",
          text: "Yes, it's in my contacts somewhere – right, here we are: 078 double 6, 510 triple 3. I wouldn't call her until the afternoon if I were you – ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". She's really helpful and friendly so " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [{ type: "text", text: "It's mainly clerical and admin jobs they deal with, isn't it?" }],
    },
    {
      speaker: "WILLIAM",
      segments: [
        {
          type: "text",
          text: "That's right. I know you're hoping to find a full-time job in the media eventually – but Becky mostly recruits temporary staff for the finance sector – ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " – and generally pays better too." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [
        { type: "text", text: "Yeah – I'm just a bit worried because " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [
        {
          type: "text",
          text: "I wouldn't worry. They'll probably start you as a receptionist, or something like that. So what's important for that kind of job isn't so much having business skills or knowing lots of different computer systems – it's communication that really matters – so you'd be fine there. And ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". It's not that complicated." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [
        {
          type: "text",
          text: "OK good. So how long do people generally need temporary staff for? It would be great if I could get something lasting at least a month.",
        },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". But you're more likely to be offered something for a week at first, which might get extended. ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [{ type: "text", text: "Right, I've heard the pay isn't too bad – better than working in a shop or a restaurant." }],
    },
    {
      speaker: "WILLIAM",
      segments: [{ type: "text", text: "Oh yes – definitely. The hourly rate is about £10, 11 if you're lucky." }],
    },
    {
      speaker: "AMBER",
      segments: [
        { type: "text", text: "That's pretty good. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [{ type: "text", text: "Do you want me to tell you anything about the registration process?" }],
    },
    { speaker: "AMBER", segments: [{ type: "text", text: "Yes, please. I know you have to have an interview." }] },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: " and you should arrange that about a week in advance." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [
        {
          type: "text",
          text: "I suppose I should dress smartly if it's for office work – I can probably borrow a suit from Mum.",
        },
      ],
    },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "text", text: "Good idea. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMBER",
      segments: [{ type: "text", text: "Will I need to bring copies of my exam certificates or anything like that?" }],
    },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "text", text: "No – " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "AMBER", segments: [{ type: "text", text: "What about my passport?" }] },
    { speaker: "WILLIAM", segments: [{ type: "text", text: "Oh yes – they will ask to see that." }] },
    { speaker: "AMBER", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "WILLIAM",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". It's just a chance for them to build a relationship with you – so ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". So there are questions about personality that they always ask candidates – fairly basic ones. And they probably won't ask anything too difficult like what your plans are for the future.",
        },
      ],
    },
    { speaker: "AMBER", segments: [{ type: "text", text: "Hope not." }] },
    {
      speaker: "WILLIAM",
      segments: [
        {
          type: "text",
          text: "Anyway, there are lots of benefits to using an agency – for example, the interview will be useful because they'll give you feedback on your performance so you can improve next time.",
        },
      ],
    },
    { speaker: "AMBER", segments: [{ type: "text", text: "And they'll have access to jobs which aren't advertised." }] },
    { speaker: "WILLIAM", segments: [{ type: "text", text: "Exactly – most temporary jobs aren't advertised." }] },
    {
      speaker: "AMBER",
      segments: [
        { type: "text", text: "And I expect finding a temporary job this way takes a lot less time – " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WILLIAM", segments: [{ type: "text", text: "Yes indeed. Well I think …" }] },
  ],
};

export const CAM15_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Name of agent: Becky ______",
    questionVi: "Name of agent: Becky ______",
    modelParaphraseEn: "The agent I always deal with is called Becky Jamieson – J-A-M-I-E-S-O-N",
    modelParaphraseVi: "The agent I always deal with is called Becky Jamieson – J-A-M-I-E-S-O-N",
    acceptedAnswers: ["Jamieson"],
    explanationEn: "Spelled J-A-M-I-E-S-O-N: Jamieson. ASR 'Jamison' is wrong.",
    explanationVi: "Đánh vần J-A-M-I-E-S-O-N: Jamieson. ASR 'Jamison' sai.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Best to call her in the ______",
    questionVi: "Best to call her in the ______",
    modelParaphraseEn: "I wouldn't call her until the afternoon if I were you – she's always really busy in the morning",
    modelParaphraseVi: "I wouldn't call her until the afternoon if I were you – she's always really busy in the morning",
    acceptedAnswers: ["afternoon"],
    explanationEn: "Call in the afternoon; mornings are for last-minute vacancies.",
    explanationVi: "Gọi buổi afternoon; sáng bận fill last-minute vacancies.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Must have good ______ skills",
    questionVi: "Must have good ______ skills",
    modelParaphraseEn: "what's important … isn't so much having business skills or knowing lots of different computer systems – it's communication that really matters",
    modelParaphraseVi: "what's important … isn't so much having business skills or knowing lots of different computer systems – it's communication that really matters",
    acceptedAnswers: ["communication"],
    explanationEn: "Communication matters more than business skills or computer systems.",
    explanationVi: "Communication quan trọng hơn business skills hay computer systems.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Jobs are usually for at least one ______",
    questionVi: "Jobs are usually for at least one ______",
    modelParaphraseEn: "you're more likely to be offered something for a week at first, which might get extended",
    modelParaphraseVi: "you're more likely to be offered something for a week at first, which might get extended",
    acceptedAnswers: ["week"],
    explanationEn: "Usually at least one week at first (may be extended); not just a day or two.",
    explanationVi: "Thường ít nhất one week lúc đầu (có thể gia hạn); không chỉ một-hai ngày.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Pay is usually £______ per hour",
    questionVi: "Pay is usually £______ per hour",
    modelParaphraseEn: "The hourly rate is about £10, 11 if you're lucky",
    modelParaphraseVi: "The hourly rate is about £10, 11 if you're lucky",
    acceptedAnswers: ["10", "ten"],
    explanationEn: "About £10 an hour (11 if lucky). Not 10.11.",
    explanationVi: "Khoảng £10 một giờ (11 nếu may). Không phải 10.11.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Wear a ______ to the interview",
    questionVi: "Wear a ______ to the interview",
    modelParaphraseEn: "I can probably borrow a suit from Mum … It's better to look too smart than too casual",
    modelParaphraseVi: "I can probably borrow a suit from Mum … It's better to look too smart than too casual",
    acceptedAnswers: ["suit"],
    explanationEn: "Dress smartly – borrow a suit; better too smart than too casual.",
    explanationVi: "Ăn mặc lịch sự – mượn suit; quá smart còn hơn quá casual.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Must bring your ______ to the interview",
    questionVi: "Must bring your ______ to the interview",
    modelParaphraseEn: "What about my passport? Oh yes – they will ask to see that",
    modelParaphraseVi: "What about my passport? Oh yes – they will ask to see that",
    acceptedAnswers: ["passport"],
    explanationEn: "They will ask to see a passport. Exam certificates are not needed.",
    explanationVi: "Họ sẽ hỏi xem passport. Exam certificates không cần.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "They will ask questions about each applicant's ______",
    questionVi: "They will ask questions about each applicant's ______",
    modelParaphraseEn: "there are questions about personality that they always ask candidates – fairly basic ones",
    modelParaphraseVi: "there are questions about personality that they always ask candidates – fairly basic ones",
    acceptedAnswers: ["personality"],
    explanationEn: "Fairly basic personality questions; not difficult future-plans questions.",
    explanationVi: "Câu hỏi personality khá cơ bản; không hỏi plans for the future khó.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "The ______ you receive at interview will benefit you",
    questionVi: "The ______ you receive at interview will benefit you",
    modelParaphraseEn: "they'll give you feedback on your performance so you can improve next time",
    modelParaphraseVi: "they'll give you feedback on your performance so you can improve next time",
    acceptedAnswers: ["feedback"],
    explanationEn: "Interview feedback on performance helps you improve next time.",
    explanationVi: "Feedback lúc interview giúp cải thiện lần sau.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Less ______ is involved in applying for jobs",
    questionVi: "Less ______ is involved in applying for jobs",
    modelParaphraseEn: "finding a temporary job this way takes a lot less time – it's much easier than ringing up individual companies",
    modelParaphraseVi: "finding a temporary job this way takes a lot less time – it's much easier than ringing up individual companies",
    acceptedAnswers: ["time"],
    explanationEn: "Using an agency takes a lot less time than ringing companies one by one.",
    explanationVi: "Dùng agency tốn ít time hơn gọi từng công ty.",
  },
];
