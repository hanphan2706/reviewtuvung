import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["We're doing a customer satisfaction survey", "We are doing a customer satisfaction survey"] },
    {
      id: "g2",
      answers: [
        "I've got about ten minutes before my train home leaves",
        "I have got about ten minutes before my train home leaves",
      ],
    },
    { id: "g3", answers: ["I'm on a day trip", "I am on a day trip"] },
    { id: "g4", answers: ["That must be interesting"] },
    { id: "g5", answers: ["it's my day off", "it is my day off"] },
    { id: "g6", answers: ["I do sometimes come here for work"] },
    { id: "g7", answers: ["I didn't get any discount", "I did not get any discount"] },
    {
      id: "g8",
      answers: ["you'd have saved 20% on your ticket today", "you would have saved 20% on your ticket today"],
    },
    { id: "g9", answers: ["that's one of the main complaints we get", "that is one of the main complaints we get"] },
    { id: "g10", answers: ["You can't always plan ahead", "You cannot always plan ahead"] },
    { id: "g11", answers: ["I hate using ticket machines"] },
    { id: "g12", answers: ["they're often out of order", "they are often out of order"] },
    {
      id: "g13",
      answers: ["It's good to get some positive feedback on that", "It is good to get some positive feedback on that"],
    },
    { id: "g14", answers: ["the trains run on time and are pretty reliable"] },
    { id: "g15", answers: ["the whole station's been upgraded", "the whole station has been upgraded"] },
    { id: "g16", answers: ["I couldn't always see it properly", "I could not always see it properly"] },
    { id: "g17", answers: ["which was frustrating"] },
    {
      id: "g18",
      answers: ["I don't really have an opinion as I never use it", "I do not really have an opinion as I never use it"],
    },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Hello. Do you mind if I ask you some questions about your journey today? " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SOPHIE",
      segments: [
        { type: "text", text: "Yes. OK. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Great. Thank you. So first of all, could you tell me your name?" }],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "It's Sophie Bird." }] },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Thank you. And would you mind telling me what you do?" }],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "I'm a journalist." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh really? " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Yes. It is." }] },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "So was the reason for your visit here today work?" }],
    },
    {
      speaker: "SOPHIE",
      segments: [
        { type: "text", text: "Actually, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". I came here to do some shopping." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Oh right." }] },
    {
      speaker: "SOPHIE",
      segments: [
        { type: "text", text: "But " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "OK. Now I'd like to ask some questions about your journey today, if that's OK." }],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Yes. No problem." }] },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Right, so can you tell me which station you're travelling back to?" }],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Staunfirth, where I live." }] },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Can I just check the spelling? S-T-A-U-N-F-I-R-T-H?" }],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "That's right." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "And you travelled from there this morning?" }] },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK, good. Next, can I ask what kind of ticket you bought? I assume it wasn't a season ticket, as you don't travel every day.",
        },
      ],
    },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "That's right. No, I just got a normal return ticket. I don't have a rail card so ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". I keep meaning to get one because it's a lot cheaper." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes – " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". So you paid the full price for your ticket?" },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "I paid £23.70." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "OK. Do you think that's good value for money?" }] },
    {
      speaker: "SOPHIE",
      segments: [{ type: "text", text: "Not really. I think it's too much for a journey that only takes 45 minutes." }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". So, you didn't buy your ticket in advance?" },
      ],
    },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "No. I know it's cheaper if you buy a week in advance but I didn't know I was coming then.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "I know. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". So, did you buy it this morning?" },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "No, it was yesterday." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "Right. And do you usually buy your tickets at the station?" }] },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "Well, I do usually but the ticket office closes early and ",
        },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". I think ticket offices should be open for longer hours. There's always a queue for the machines and ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "A lot of customers are saying the same thing." }] },
    {
      speaker: "SOPHIE",
      segments: [{ type: "text", text: "So to answer your question … I got an e-ticket online." }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. Thank you. Now I'd like to ask you about your satisfaction with your journey. So what would you say you were most satisfied with today?",
        },
      ],
    },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "Well, I like the wifi on the train. It's improved a lot. It makes it easier for me to work if I want to.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "That's the first time today anyone's mentioned that. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Mmm." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "And, is there anything you weren't satisfied with?" }] },
    {
      speaker: "SOPHIE",
      segments: [
        { type: "text", text: "Well, normally, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " but today there was a delay; the train was about 15 minutes behind schedule." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. I'll put that down. Now I'd also like to ask about the facilities at this station. You've probably noticed that ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". What are you most satisfied with?" },
      ],
    },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "I think the best thing is that they've improved the amount of information about train times etc. that's given to passengers – it's much clearer – before there was only one board and ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " – " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "That's good. And is there anything you're not satisfied with?" }] },
    {
      speaker: "SOPHIE",
      segments: [
        {
          type: "text",
          text: "Let's see … I think things have generally improved a lot. The trains are much more modern and I like the new café. But one thing is that there aren't enough places to sit down, especially on the platforms.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK – so I'll put 'seating' down, shall I, as the thing you're least satisfied with?",
        },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Yes, OK." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Can I ask your opinion about some of the other facilities? We'd like feedback on whether people are satisfied, dissatisfied or neither satisfied nor dissatisfied.",
        },
      ],
    },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "OK." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "What about the parking at the station?" }] },
    {
      speaker: "SOPHIE",
      segments: [
        { type: "text", text: "Well to be honest, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "So, neither satisfied nor dissatisfied for that then." }] },
    { speaker: "SOPHIE", segments: [{ type: "text", text: "Yes, I suppose so …" }] },
    { speaker: "MAN", segments: [{ type: "text", text: "OK, and what about …?" }] },
  ],
};

export const CAM15_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Occupation: ______",
    questionVi: "Occupation: ______",
    modelParaphraseEn: "I'm a journalist",
    modelParaphraseVi: "I'm a journalist",
    acceptedAnswers: ["journalist"],
    explanationEn: "Sophie says she is a journalist — not a related job title.",
    explanationVi: "Sophie nói nghề của cô là journalist.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Reason for travel today: ______",
    questionVi: "Reason for travel today: ______",
    modelParaphraseEn: "it's my day off. I came here to do some shopping",
    modelParaphraseVi: "it's my day off. I came here to do some shopping",
    acceptedAnswers: ["shopping"],
    explanationEn: "Today is her day off; the reason for travel is shopping, not work.",
    explanationVi: "Hôm nay là ngày nghỉ; lý do đi là shopping, không phải công việc.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Name of station returning to: ______",
    questionVi: "Name of station returning to: ______",
    modelParaphraseEn: "Staunfirth, where I live – S-T-A-U-N-F-I-R-T-H",
    modelParaphraseVi: "Staunfirth, where I live – S-T-A-U-N-F-I-R-T-H",
    acceptedAnswers: ["Staunfirth"],
    explanationEn: "Home station is spelled Staunfirth.",
    explanationVi: "Ga về nhà được đánh vần Staunfirth.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Type of ticket purchased: Standard ______ ticket",
    questionVi: "Type of ticket purchased: Standard ______ ticket",
    modelParaphraseEn: "I just got a normal return ticket",
    modelParaphraseVi: "I just got a normal return ticket",
    acceptedAnswers: ["return"],
    explanationEn: "Not a season ticket — a normal / standard return.",
    explanationVi: "Không phải season ticket — vé return thông thường.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Cost of ticket: £______",
    questionVi: "Cost of ticket: £______",
    modelParaphraseEn: "I paid £23.70",
    modelParaphraseVi: "I paid £23.70",
    acceptedAnswers: ["23.70"],
    explanationEn: "Full price is £23.70 (no rail-card discount).",
    explanationVi: "Giá đủ là £23.70 (không giảm rail card).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Where ticket was bought: ______",
    questionVi: "Where ticket was bought: ______",
    modelParaphraseEn: "I got an e-ticket online",
    modelParaphraseVi: "I got an e-ticket online",
    acceptedAnswers: ["online"],
    explanationEn: "Bought yesterday as an e-ticket online, not at the station this morning.",
    explanationVi: "Mua hôm qua bằng e-ticket online, không phải tại ga sáng nay.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Least satisfied with: the ______ this morning",
    questionVi: "Least satisfied with: the ______ this morning",
    modelParaphraseEn: "today there was a delay; the train was about 15 minutes behind schedule",
    modelParaphraseVi: "today there was a delay; the train was about 15 minutes behind schedule",
    acceptedAnswers: ["delay"],
    explanationEn: "Least satisfied with the delay (15 minutes late), not the wifi.",
    explanationVi: "Ít hài lòng nhất về delay (trễ 15 phút), không phải wifi.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Most satisfied with: how much ______ was provided",
    questionVi: "Most satisfied with: how much ______ was provided",
    modelParaphraseEn: "they've improved the amount of information about train times that's given to passengers",
    modelParaphraseVi: "they've improved the amount of information about train times that's given to passengers",
    acceptedAnswers: ["information"],
    explanationEn: "Station upgrade: clearer / more information about train times.",
    explanationVi: "Ga được nâng cấp: information về giờ tàu rõ hơn / nhiều hơn.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Least satisfied with: lack of seats, particularly on the ______",
    questionVi: "Least satisfied with: lack of seats, particularly on the ______",
    modelParaphraseEn: "there aren't enough places to sit down, especially on the platforms",
    modelParaphraseVi: "there aren't enough places to sit down, especially on the platforms",
    acceptedAnswers: ["platforms", "platform"],
    explanationEn: "Not enough seating, especially on the platforms.",
    explanationVi: "Thiếu chỗ ngồi, đặc biệt trên platforms.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Neither satisfied nor dissatisfied with: the ______ available",
    questionVi: "Neither satisfied nor dissatisfied with: the ______ available",
    modelParaphraseEn: "What about the parking at the station? I don't really have an opinion as I never use it",
    modelParaphraseVi: "What about the parking at the station? I don't really have an opinion as I never use it",
    acceptedAnswers: ["parking"],
    explanationEn: "No opinion on parking because she never uses it → neither satisfied nor dissatisfied.",
    explanationVi: "Không có ý kiến về parking vì không bao giờ dùng → neither.",
  },
];
