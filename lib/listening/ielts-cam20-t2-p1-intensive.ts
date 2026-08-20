import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["really good to see you"] },
    { id: "g2", answers: ["losing touch with"] },
    { id: "g3", answers: ["really miss you"] },
    { id: "g4", answers: ["must be relieved"] },
    { id: "g5", answers: ["get any support"] },
    { id: "g6", answers: ["I didn't know I could", "I did not know I could"] },
    { id: "g7", answers: ["How do I go about"] },
    { id: "g8", answers: ["have an assessment"] },
    { id: "g9", answers: ["come round"] },
    { id: "g10", answers: ["a bit of a problem"] },
    { id: "g11", answers: ["be ready to"] },
    { id: "g12", answers: ["in real trouble"] },
    { id: "g13", answers: ["what happens next"] },
    { id: "g14", answers: ["support you financially"] },
    { id: "g15", answers: ["drive her myself"] },
    { id: "g16", answers: ["don't mind me saying", "do not mind me saying"] },
    { id: "g17", answers: ["feel so much better"] },
    { id: "g18", answers: ["get in touch"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "It's " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", Tom. Since I had to give up work, I feel I'm " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " my friends and colleagues." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "We " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " in the office. We were all so sorry you had to leave. But you ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " to have more time to look after your mother. How is she?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Well she is very cheerful, but she needs a lot of help." }],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Have you tried to " }, { type: "gap", gapId: "g5" }, { type: "text", text: " from the local council?" }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, they offer different kinds of practical support. They realise that carers sometimes need time for all the other responsibilities they have, apart from the person they're caring for, and also that they sometimes need a break.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Absolutely. OK, so tell me more. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " getting this support?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, you'd have to " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " of your mother's needs. That means someone would " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " and talk to you about the situation and what you need. So, for a start, they'd want to know the amount of time you spend looking after your mother every day.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Then they'll probably ask you what sorts of tasks you do for your mother during the day. Things like if she needs help with getting dressed, for example.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. I help her with that. And also I help her get into the shower in the morning.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, that sort of thing. They'll probably ask you if you do the shopping for her and help her at meal times, and whether she can cope using money.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes, that's becoming " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". She used to be very good at it, but not anymore." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " tell them about anything you find particularly difficult about caring for your mother." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "So, recently I've noticed she's started to have quite bad problems with her memory. If I wasn't there, I think she'd forget to eat, for example. And often she doesn't seem quite sure what day it is.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, tell them about that. And are there any physical difficulties you have caring for her? Lifting her, for example?",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes, she's quite heavy and I'm afraid of hurting my back. I'd be " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " if that happened." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "They can give you advice about that and also about how to avoid the possibility of your mum having a fall.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Great. So once they've done this assessment, if I'm eligible, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, they might " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". So they might help you with transport costs, like if you have to get a taxi to take your mother for an appointment, for example.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I usually " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", actually. So, could I claim the petrol?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "You could. And you can claim for the insurance too." }],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, right." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "And if you need help with the housework, they can arrange for someone to come along once or twice a week. And one other thing. I hope you ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " this, but it's important you look after yourself. And it seems to me you're under quite a bit of stress.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "I am, yes." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Well, tell the council because they may be able to give you some advice on how to minimise it.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Really? Though, actually, I " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " having talked to you. I'll " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " with the council straight away. Now, shall we go for coffee or something?" },
      ],
    },
  ],
};

export const CAM20_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "This can give the carer: time for other responsibilities; a ______",
    questionVi: "This can give the carer: time for other responsibilities; a ______",
    modelParaphraseEn: "they sometimes need a break",
    modelParaphraseVi: "they sometimes need a break",
    acceptedAnswers: ["break"],
    explanationEn: "Besides time for other responsibilities, practical support can give the carer a break.",
    explanationVi: "Ngoài thời gian cho trách nhiệm khác, hỗ trợ thực tế còn cho người chăm một break.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "how much ______ the caring involves",
    questionVi: "how much ______ the caring involves",
    modelParaphraseEn: "the amount of time you spend looking after your mother every day",
    modelParaphraseVi: "the amount of time you spend looking after your mother every day",
    acceptedAnswers: ["time"],
    explanationEn: "The assessment asks how much time caring involves each day.",
    explanationVi: "Buổi đánh giá hỏi mỗi ngày caring chiếm bao nhiêu time.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "helping her have a ______",
    questionVi: "helping her have a ______",
    modelParaphraseEn: "I help her get into the shower in the morning",
    modelParaphraseVi: "I help her get into the shower in the morning",
    acceptedAnswers: ["shower"],
    explanationEn: "Dressing is already on the notes; the other personal-care task is a shower.",
    explanationVi: "Dressing đã có trên đề; việc chăm sóc cá nhân kia là shower.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "dealing with ______",
    questionVi: "dealing with ______",
    modelParaphraseEn: "whether she can cope using money",
    modelParaphraseVi: "whether she can cope using money",
    acceptedAnswers: ["money"],
    explanationEn: "Shopping and meals are given; they also ask if she can cope using money.",
    explanationVi: "Shopping và meals đã có trên đề; họ còn hỏi mẹ có cope using money không.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "loss of ______",
    questionVi: "loss of ______",
    modelParaphraseEn: "she's started to have quite bad problems with her memory",
    modelParaphraseVi: "she's started to have quite bad problems with her memory",
    acceptedAnswers: ["memory"],
    explanationEn: "She might forget to eat or be unsure what day it is — loss of memory.",
    explanationVi: "Bà có thể quên ăn hoặc không rõ hôm nay là thứ mấy — loss of memory.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "______ her",
    questionVi: "______ her",
    modelParaphraseEn: "physical difficulties … Lifting her, for example",
    modelParaphraseVi: "physical difficulties … Lifting her, for example",
    acceptedAnswers: ["lifting"],
    explanationEn: "A difficult physical task is lifting her — she is quite heavy.",
    explanationVi: "Khó khăn thể chất là lifting her — bà khá nặng.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "preventing a ______",
    questionVi: "preventing a ______",
    modelParaphraseEn: "how to avoid the possibility of your mum having a fall",
    modelParaphraseVi: "how to avoid the possibility of your mum having a fall",
    acceptedAnswers: ["fall"],
    explanationEn: "They can advise on avoiding a fall.",
    explanationVi: "Họ có thể tư vấn cách tránh một fall.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "transport costs, e.g. cost of a ______",
    questionVi: "transport costs, e.g. cost of a ______",
    modelParaphraseEn: "help you with transport costs, like if you have to get a taxi",
    modelParaphraseVi: "help you with transport costs, like if you have to get a taxi",
    acceptedAnswers: ["taxi"],
    explanationEn: "The transport-cost example is a taxi to an appointment.",
    explanationVi: "Ví dụ chi phí đi lại là taxi đưa mẹ đi hẹn.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "car-related costs, e.g. fuel and ______",
    questionVi: "car-related costs, e.g. fuel and ______",
    modelParaphraseEn: "could I claim the petrol? You could. And you can claim for the insurance too",
    modelParaphraseVi: "could I claim the petrol? You could. And you can claim for the insurance too",
    acceptedAnswers: ["insurance"],
    explanationEn: "Fuel/petrol is already implied; the other car cost is insurance.",
    explanationVi: "Fuel/petrol đã có trên đề; chi phí xe kia là insurance.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "help to reduce ______",
    questionVi: "help to reduce ______",
    modelParaphraseEn: "you're under quite a bit of stress … advice on how to minimise it",
    modelParaphraseVi: "you're under quite a bit of stress … advice on how to minimise it",
    acceptedAnswers: ["stress"],
    explanationEn: "The council may advise on how to minimise stress.",
    explanationVi: "Hội đồng có thể tư vấn cách giảm stress.",
  },
];
