import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I want to report a theft"] },
    {
      id: "g2",
      answers: ["I'm sorry to hear that", "I am sorry to hear that"],
    },
    {
      id: "g3",
      answers: ["I'll need to take a few details", "I will need to take a few details"],
    },
    { id: "g4", answers: ["are you resident in the UK"] },
    { id: "g5", answers: ["I come over most summers on business"] },
    {
      id: "g6",
      answers: ["I've had a really good trip this year", "I have had a really good trip this year"],
    },
    { id: "g7", answers: ["so I had to find another one"] },
    {
      id: "g8",
      answers: ["I really can't understand it", "I really cannot understand it"],
    },
    {
      id: "g9",
      answers: [
        "fortunately I don't keep my credit cards in that wallet",
        "fortunately I do not keep my credit cards in that wallet",
      ],
    },
    { id: "g10", answers: ["I must have already spent about £50 of that", "I must have already spent about 50 pounds of that"] },
    {
      id: "g11",
      answers: [
        "that's when I realised I'd been robbed",
        "that is when I realised I had been robbed",
        "that's when I realized I'd been robbed",
      ],
    },
    {
      id: "g12",
      answers: [
        "at least they didn't take the keys to my rental car",
        "at least they did not take the keys to my rental car",
      ],
    },
    {
      id: "g13",
      answers: ["do you have any idea at all of where or when the things might possibly have been stolen"],
    },
    {
      id: "g14",
      answers: [
        "I generally use it when I'm travelling because it seems safer than a handbag",
        "I generally use it when I am travelling because it seems safer than a handbag",
        "I generally use it when I'm traveling because it seems safer than a handbag",
      ],
    },
    { id: "g15", answers: ["a group of young boys ran up to us"] },
    { id: "g16", answers: ["The one who did most of the talking"] },
    { id: "g17", answers: ["They came and went so quickly"] },
    { id: "g18", answers: ["so you can contact your insurance company"] },
  ],
  lines: [
    { speaker: "OFFICER", segments: [{ type: "text", text: "Good morning. What can I do for you?" }] },
    {
      speaker: "LOUISE",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: ". I had some things stolen out of my bag yesterday." },
      ],
    },
    {
      speaker: "OFFICER",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". Right, so " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". Can I start with your name?" },
      ],
    },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Louise Taylor." }] },
    {
      speaker: "OFFICER",
      segments: [
        { type: "text", text: "OK, thank you. And " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LOUISE",
      segments: [{ type: "text", text: "No, I'm actually Canadian. Though my mother was British." }],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "And your date of birth?" }] },
    { speaker: "LOUISE", segments: [{ type: "text", text: "December 14th, 1977." }] },
    { speaker: "OFFICER", segments: [{ type: "text", text: "So you're just visiting this country?" }] },
    {
      speaker: "LOUISE",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". I'm an interior designer and I come over to buy old furniture, antiques you know. There are some really lovely things around here, but you need to get out to the small towns. ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", until this happened." },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "OK. So you've been here quite a while?" }] },
    {
      speaker: "LOUISE",
      segments: [{ type: "text", text: "Yes, I'm here for two months. I go back next week." }],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "So may I ask where you're staying now?" }] },
    {
      speaker: "LOUISE",
      segments: [
        {
          type: "text",
          text: "Well at present I've got a place at Park Apartments, that's on King Street. I was staying at the Riverside Apartments on the same street, but the apartment there was only available for six weeks ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "OK. And the apartment number?" }] },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Fifteen." }] },
    { speaker: "OFFICER", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "OFFICER",
      segments: [
        {
          type: "text",
          text: "Now, I need to take some details of the theft. So you said you had some things stolen out of your bag?",
        },
      ],
    },
    { speaker: "LOUISE", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "OFFICER",
      segments: [{ type: "text", text: "And were you actually carrying the bag when the theft took place?" }],
    },
    {
      speaker: "LOUISE",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". I had my backpack on. And I went into a supermarket to buy a few things and when I opened it up my wallet wasn't there.",
        },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "And what did your wallet have in it?" }] },
    {
      speaker: "LOUISE",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " – I keep them with my passport in an inside compartment in my backpack. But there was quite a bit of cash there … about £250 sterling, I should think. I withdrew £300 from my account yesterday, but I did a bit of shopping, so ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "LOUISE",
      segments: [
        {
          type: "text",
          text: "At first I thought, oh I must have left the wallet back in the apartment, but then I realised my phone had gone as well. It was only a week old, and ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Anyway ", },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "Yes. So you say the theft occurred yesterday?" }] },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "OFFICER",
      segments: [
        { type: "text", text: "So that was September the tenth. And " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LOUISE",
      segments: [
        {
          type: "text",
          text: "Well at first I couldn't believe it because the bag had been on my back ever since I left the apartment after lunch. It's just a small backpack, but ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". Anyway, I met up with a friend, and we spent a couple of hours in the museum. But I do remember that as we were leaving there, at about 4 o'clock, ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", and they were really crowding round us, and they were asking us what time it was, then all of a sudden they ran off.",
        },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "Can you remember anything about them?" }] },
    {
      speaker: "LOUISE",
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " was wearing a T-shirt with a picture of something … let's see … a tiger." },
      ],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "Right. Any idea of how old he might have been?" }] },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Around twelve years old?" }] },
    {
      speaker: "OFFICER",
      segments: [{ type: "text", text: "And can you remember anything else about his appearance?" }],
    },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Not much. He was quite thin …" }] },
    { speaker: "OFFICER", segments: [{ type: "text", text: "Colour of hair?" }] },
    {
      speaker: "LOUISE",
      segments: [{ type: "text", text: "I do remember that – he was blond. All the others were dark-haired." }],
    },
    { speaker: "OFFICER", segments: [{ type: "text", text: "And any details of the others?" }] },
    {
      speaker: "LOUISE",
      segments: [
        { type: "text", text: "Not really. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "OFFICER",
      segments: [
        {
          type: "text",
          text: "Right. So what I'm going to do now is give you a crime reference number ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". So this is ten digits: 87954 82361." },
      ],
    },
    { speaker: "LOUISE", segments: [{ type: "text", text: "Thank you. So should I …" }] },
  ],
};

export const CAM14_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Nationality ______",
    questionVi: "Nationality ______",
    modelParaphraseEn: "No, I'm actually Canadian. Though my mother was British",
    modelParaphraseVi: "No, I'm actually Canadian. Though my mother was British",
    acceptedAnswers: ["Canadian"],
    explanationEn: "She is Canadian (not UK resident); her mother was British.",
    explanationVi: "Cô ấy là Canadian (không cư trú UK); mẹ là người British.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "business (to buy antique ______)",
    questionVi: "business (to buy antique ______)",
    modelParaphraseEn: "I come over to buy old furniture, antiques you know",
    modelParaphraseVi: "I come over to buy old furniture, antiques you know",
    acceptedAnswers: ["furniture"],
    explanationEn: "She buys old furniture / antiques for her interior-design work.",
    explanationVi: "Cô ấy mua furniture / antiques cũ cho công việc interior design.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "______ Apartments (No 15)",
    questionVi: "______ Apartments (No 15)",
    modelParaphraseEn: "I've got a place at Park Apartments, that's on King Street",
    modelParaphraseVi: "I've got a place at Park Apartments, that's on King Street",
    acceptedAnswers: ["Park"],
    explanationEn: "Current address is Park Apartments, number 15 (not Riverside).",
    explanationVi: "Địa chỉ hiện tại là Park Apartments, số 15 (không phải Riverside).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "a wallet containing approximately £______",
    questionVi: "a wallet containing approximately £______",
    modelParaphraseEn: "about £250 sterling … I withdrew £300 … already spent about £50",
    modelParaphraseVi: "about £250 sterling … I withdrew £300 … already spent about £50",
    acceptedAnswers: ["250", "£250", "250 sterling"],
    explanationEn: "About £250 left in the wallet (withdrew 300, spent about 50).",
    explanationVi: "Trong ví còn khoảng £250 (rút 300, đã tiêu khoảng 50).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Items stolen: a wallet and a ______",
    questionVi: "Items stolen: a wallet and a ______",
    modelParaphraseEn: "then I realised my phone had gone as well. It was only a week old",
    modelParaphraseVi: "then I realised my phone had gone as well. It was only a week old",
    acceptedAnswers: ["phone"],
    explanationEn: "The phone had gone as well — that is when she realised she had been robbed.",
    explanationVi: "Phone cũng mất — lúc đó cô ấy mới hiểu là bị cướp.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Date of theft ______",
    questionVi: "Date of theft ______",
    modelParaphraseEn: "the theft occurred yesterday … So that was September the tenth",
    modelParaphraseVi: "the theft occurred yesterday … So that was September the tenth",
    acceptedAnswers: ["10th September", "10 September", "September 10th", "September the tenth", "10(th) September"],
    explanationEn: "The officer confirms the date: September the tenth.",
    explanationVi: "Cảnh sát xác nhận ngày: September the tenth.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Location: outside the ______ at about 4 pm",
    questionVi: "Location: outside the ______ at about 4 pm",
    modelParaphraseEn: "we spent a couple of hours in the museum … as we were leaving there, at about 4 o'clock",
    modelParaphraseVi: "we spent a couple of hours in the museum … as we were leaving there, at about 4 o'clock",
    acceptedAnswers: ["museum"],
    explanationEn: "The boys crowded round them as they were leaving the museum at about 4 pm.",
    explanationVi: "Bọn trẻ xúm lại khi họ đang ra khỏi museum lúc khoảng 4 giờ.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "some boys asked for the ______ then ran off",
    questionVi: "some boys asked for the ______ then ran off",
    modelParaphraseEn: "they were asking us what time it was, then all of a sudden they ran off",
    modelParaphraseVi: "they were asking us what time it was, then all of a sudden they ran off",
    acceptedAnswers: ["time"],
    explanationEn: "The boys asked what time it was, then ran off.",
    explanationVi: "Bọn trẻ hỏi time rồi chạy mất.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "about 12, slim build with ______ hair",
    questionVi: "about 12, slim build with ______ hair",
    modelParaphraseEn: "he was blond. All the others were dark-haired",
    modelParaphraseVi: "he was blond. All the others were dark-haired",
    acceptedAnswers: ["blond", "blonde"],
    explanationEn: "The boy who talked most had blond hair; the others were dark-haired.",
    explanationVi: "Cậu nói nhiều nhất có tóc blond; những đứa kia tóc tối.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Crime reference number ______",
    questionVi: "Crime reference number ______",
    modelParaphraseEn: "this is ten digits: 87954 82361",
    modelParaphraseVi: "this is ten digits: 87954 82361",
    acceptedAnswers: ["87954 82361", "8795482361"],
    explanationEn: "Ten-digit crime reference number for the insurance company.",
    explanationVi: "Mã reference 10 chữ số để liên hệ bảo hiểm.",
  },
];
