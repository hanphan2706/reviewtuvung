import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["It's really good to see you", "It is really good to see you"] },
    { id: "g2", answers: ["I feel I'm losing touch with", "I feel I am losing touch with"] },
    { id: "g3", answers: ["We really miss you in the office"] },
    { id: "g4", answers: ["you must be relieved to have"] },
    { id: "g5", answers: ["Have you tried to get any support"] },
    { id: "g6", answers: ["I didn't know I could", "I did not know I could"] },
    { id: "g7", answers: ["How do I go about getting this support"] },
    { id: "g8", answers: ["you'd have to have an assessment", "you would have to have an assessment"] },
    { id: "g9", answers: ["That means someone would come round"] },
    { id: "g10", answers: ["that's becoming a bit of a problem", "that is becoming a bit of a problem"] },
    { id: "g11", answers: ["be ready to tell them about"] },
    { id: "g12", answers: ["I'd be in real trouble if that happened", "I would be in real trouble if that happened"] },
    { id: "g13", answers: ["if I'm eligible, what happens next", "if I am eligible, what happens next"] },
    { id: "g14", answers: ["they might support you financially"] },
    { id: "g15", answers: ["I usually drive her myself, actually"] },
    { id: "g16", answers: ["I hope you don't mind me saying this", "I hope you do not mind me saying this"] },
    { id: "g17", answers: ["I feel so much better having talked to you"] },
    { id: "g18", answers: ["I'll get in touch with the council straight away", "I will get in touch with the council straight away"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", Tom. Since I had to give up work, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " my friends and colleagues." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". We were all so sorry you had to leave. But ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " more time to look after your mother. How is she?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Well she is very cheerful, but she needs a lot of help." }],
    },
    {
      speaker: "MAN",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: " from the local council?" }],
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
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " of your mother's needs. " },
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
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". She used to be very good at it, but not anymore." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " anything you find particularly difficult about caring for your mother." },
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
        { type: "text", text: "Yes, she's quite heavy and I'm afraid of hurting my back. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
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
        { type: "text", text: "Great. So once they've done this assessment, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, " },
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
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". So, could I claim the petrol?" },
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
          text: "And if you need help with the housework, they can arrange for someone to come along once or twice a week. And one other thing. ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", but it's important you look after yourself. And it seems to me you're under quite a bit of stress.",
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
        { type: "text", text: "Really? Though, actually, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Now, shall we go for coffee or something?" },
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
