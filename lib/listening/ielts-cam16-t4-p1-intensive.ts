import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I was hoping to speak to"] },
    { id: "g2", answers: ["we own the cottages together"] },
    { id: "g3", answers: ["they thought it was great"] },
    { id: "g4", answers: ["What date did you have in mind"] },
    { id: "g5", answers: ["we could manage that"] },
    {
      id: "g6",
      answers: ["That's a bit more than we wanted to pay", "That is a bit more than we wanted to pay"],
    },
    { id: "g7", answers: ["We've budgeted up to", "We have budgeted up to"] },
    { id: "g8", answers: ["What was that again"] },
    { id: "g9", answers: ["It grows fairly wild around here"] },
    { id: "g10", answers: ["So could you tell me something about it"] },
    { id: "g11", answers: ["So that must sleep two people, as well"] },
    { id: "g12", answers: ["I wouldn't like to guarantee", "I would not like to guarantee"] },
    { id: "g13", answers: ["It has standard things like"] },
    { id: "g14", answers: ["I think a lot of people prefer that nowadays"] },
    {
      id: "g15",
      answers: ["It's more environmentally friendly, isn't it", "It is more environmentally friendly, isn't it"],
    },
    { id: "g16", answers: ["That sounds very pleasant"] },
    { id: "g17", answers: ["I'd like to book it, please", "I would like to book it, please"] },
    { id: "g18", answers: ["Could I just take your details"] },
  ],
  lines: [
    { speaker: "SHIRLEY", segments: [{ type: "text", text: "Hello?" }] },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Oh hello. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " Jack Fitzgerald about renting a cottage." },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        { type: "text", text: "I'm his wife, Shirley, and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", so I'm sure I can help you." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "Great. My name's Tom. Some friends of ours rented Granary Cottage from you last year, and ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". So my wife and I are hoping to come in May for a week." },
      ],
    },
    { speaker: "SHIRLEY", segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "?" }] },
    { speaker: "TOM", segments: [{ type: "text", text: "The week beginning the 14th, if possible." }] },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "I'll just check ... I'm sorry, Tom, it's already booked that week. It's free the week beginning the 28th, though, for seven nights. In fact, that's the only time you could have it in May.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Oh. Well, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", I think. We'd just need to change a couple of things. How much would it cost?" },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        { type: "text", text: "That's the beginning of high season, so it'd be £550 for the week." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Ah. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", I'm afraid. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " £500 for accommodation." },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Well, we've just finished converting another building into a cottage, which we're calling Chervil Cottage.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Sorry? " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "SHIRLEY", segments: [{ type: "text", text: "Chervil. C-H-E-R-V for Victor I-L." }] },
    { speaker: "TOM", segments: [{ type: "text", text: "Oh, that's a herb, isn't it?" }] },
    {
      speaker: "SHIRLEY",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". You could have that for the week you want for £480." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", please?" },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Of course. The building was built as a garage. It's a little smaller than Granary Cottage.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "?" }] },
    { speaker: "SHIRLEY", segments: [{ type: "text", text: "That's right. There's a double bedroom." }] },
    { speaker: "TOM", segments: [{ type: "text", text: "Does it have a garden?" }] },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Yes, you get to it from the living room through French doors, and we provide two deckchairs. We hope to build a patio in the near future, but ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " it'll be finished by May." },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "The front door opens onto the old farmyard, and parking isn't a problem – there's plenty of room at the front for that. There are some trees and potted plants there.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "What about facilities in the cottage? " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " a cooker and fridge, I presume." },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "In the kitchen area there's a fridge-freezer and we've just put in an electric cooker.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Is there a washing machine?" }] },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Yes. There's also a TV in the living room, which plays DVDs too. The bathroom is too small for a bath, so there's a shower instead. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", anyway." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: "? Unless you spend half the day in it!" },
      ],
    },
    { speaker: "SHIRLEY", segments: [{ type: "text", text: "Exactly." }] },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "What about heating? It sometimes gets quite cool at that time of year." },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "There's central heating, and if you want to light a fire, there's a stove. We can provide all the wood you need for it. It smells so much nicer than coal, and it makes the room very cosy – we've got one in our own house.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". Perhaps we should come in the winter, to make the most of it!" },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Yes, we find we don't want to go out when we've got the fire burning. There are some attractive views from the cottage, which I haven't mentioned. There's a famous stone bridge – it's one of the oldest in the region, and you can see it from the living room. It isn't far away. The bedroom window looks in the opposite direction, and has a lovely view of the hills and the monument at the top.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Well, that all sounds perfect. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". Would you want a deposit?" },
      ],
    },
    {
      speaker: "SHIRLEY",
      segments: [
        {
          type: "text",
          text: "Yes, we ask for thirty percent to secure your booking, so that'll be, um, £144.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "And when would you like the rest of the money?" }] },
    {
      speaker: "SHIRLEY",
      segments: [{ type: "text", text: "You're coming in May, so the last day of March, please." }],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Fine." }] },
    {
      speaker: "SHIRLEY",
      segments: [
        { type: "text", text: "Excellent. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " ..." },
      ],
    },
  ],
};

export const CAM16_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "available for week beginning ______ May",
    questionVi: "available for week beginning ______ May",
    modelParaphraseEn: "It's free the week beginning the 28th, though, for seven nights",
    modelParaphraseVi: "It's free the week beginning the 28th, though, for seven nights",
    acceptedAnswers: ["28th", "28"],
    explanationEn: "Granary Cottage is free from the 28th of May, not the 14th Tom first asked for.",
    explanationVi: "Granary Cottage trống từ 28 tháng 5, không phải tuần 14 Tom hỏi trước.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "cost for the week: £______",
    questionVi: "cost for the week: £______",
    modelParaphraseEn: "That's the beginning of high season, so it'd be £550 for the week",
    modelParaphraseVi: "That's the beginning of high season, so it'd be £550 for the week",
    acceptedAnswers: ["550"],
    explanationEn: "High-season price for Granary Cottage is £550.",
    explanationVi: "Giá high season của Granary Cottage là £550.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "______ Cottage (£480)",
    questionVi: "______ Cottage (£480)",
    modelParaphraseEn: "which we're calling Chervil Cottage – C-H-E-R-V for Victor I-L",
    modelParaphraseVi: "which we're calling Chervil Cottage – C-H-E-R-V for Victor I-L",
    acceptedAnswers: ["Chervil"],
    explanationEn: "The cheaper cottage is spelled Chervil (a herb).",
    explanationVi: "Cottage rẻ hơn được đánh vần Chervil (tên một loại rau thơm).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "building was originally a ______",
    questionVi: "building was originally a ______",
    modelParaphraseEn: "The building was built as a garage",
    modelParaphraseVi: "The building was built as a garage",
    acceptedAnswers: ["garage"],
    explanationEn: "Chervil Cottage was converted from a garage.",
    explanationVi: "Chervil Cottage được cải tạo từ garage.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "walk through doors from living room into a ______",
    questionVi: "walk through doors from living room into a ______",
    modelParaphraseEn: "you get to it from the living room through French doors",
    modelParaphraseVi: "you get to it from the living room through French doors",
    acceptedAnswers: ["garden"],
    explanationEn: "Tom asks if it has a garden; Shirley says yes, via French doors from the living room.",
    explanationVi: "Tom hỏi garden; Shirley nói có, đi từ living room qua French doors.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "several ______ spaces at the front",
    questionVi: "several ______ spaces at the front",
    modelParaphraseEn: "parking isn't a problem – there's plenty of room at the front for that",
    modelParaphraseVi: "parking isn't a problem – there's plenty of room at the front for that",
    acceptedAnswers: ["parking"],
    explanationEn: "Plenty of room at the front means several parking spaces.",
    explanationVi: "Chỗ trống phía trước nghĩa là several parking spaces.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "central heating and stove that burns ______",
    questionVi: "central heating and stove that burns ______",
    modelParaphraseEn: "there's a stove. We can provide all the wood you need for it – nicer than coal",
    modelParaphraseVi: "there's a stove. We can provide all the wood you need for it – nicer than coal",
    acceptedAnswers: ["wood"],
    explanationEn: "The stove burns wood, not coal.",
    explanationVi: "Bếp đốt wood, không phải than.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "views of old ______ from living room",
    questionVi: "views of old ______ from living room",
    modelParaphraseEn: "There's a famous stone bridge – one of the oldest – you can see it from the living room",
    modelParaphraseVi: "There's a famous stone bridge – one of the oldest – you can see it from the living room",
    acceptedAnswers: ["bridge"],
    explanationEn: "The living-room view is of an old stone bridge.",
    explanationVi: "Living room nhìn ra old stone bridge.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "view of hilltop ______ from the bedroom",
    questionVi: "view of hilltop ______ from the bedroom",
    modelParaphraseEn: "The bedroom window ... has a lovely view of the hills and the monument at the top",
    modelParaphraseVi: "The bedroom window ... has a lovely view of the hills and the monument at the top",
    acceptedAnswers: ["monument"],
    explanationEn: "From the bedroom you see the monument on the hill.",
    explanationVi: "Từ bedroom nhìn thấy monument trên đồi.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "deadline for final payment: end of ______",
    questionVi: "deadline for final payment: end of ______",
    modelParaphraseEn: "You're coming in May, so the last day of March, please",
    modelParaphraseVi: "You're coming in May, so the last day of March, please",
    acceptedAnswers: ["March"],
    explanationEn: "The balance is due by the last day of March (not May).",
    explanationVi: "Phần còn lại phải trả trước last day of March (không phải May).",
  },
];
