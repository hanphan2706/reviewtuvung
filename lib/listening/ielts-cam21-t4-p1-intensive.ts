import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["a few minutes to spare"] },
    { id: "g2", answers: ["I guess that would be OK", "I guess that would be okay", "I guess that would be ok"] },
    { id: "g3", answers: ["Everybody seems so busy today"] },
    { id: "g4", answers: ["I don't have loads of time", "I do not have loads of time"] },
    { id: "g5", answers: ["It really won't take long", "It really will not take long"] },
    { id: "g6", answers: ["Could I start by"] },
    { id: "g7", answers: ["don't actually publish", "do not actually publish"] },
    { id: "g8", answers: ["get into town today"] },
    { id: "g9", answers: ["good luck with that"] },
    { id: "g10", answers: ["don't actually own one", "do not actually own one"] },
    { id: "g11", answers: ["can't wait to get it back", "cannot wait to get it back"] },
    { id: "g12", answers: ["I hate it when"] },
    { id: "g13", answers: ["The shops are less busy then"] },
    { id: "g14", answers: ["I'd probably say", "I would probably say"] },
    { id: "g15", answers: ["almost anything you want"] },
    { id: "g16", answers: ["It's a shame", "It is a shame"] },
    { id: "g17", answers: ["have a choice"] },
    { id: "g18", answers: ["can't see any advantage", "cannot see any advantage"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Good morning. I'm doing a survey of shoppers in Broadbeach. Would you have " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to answer some questions?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh...erm...yes, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Thank you very much. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well actually " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", so..." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh yes, of course. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " taking your name please?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Martyn Leigh. Martyn's with a Y." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "And is your family name spelt L-double-E?" }],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "It's L-E-I-G-H." }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Thank you. We " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " your name or details. It just makes it easier for me to identify people when I look at all the results at the end.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "I see." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "And can I ask, how did you " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Well, normally I catch the bus, but I'm on my motorbike today because I'm going to work later.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "And could you tell me what you're doing this morning, I mean, the reason for your trip into town?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "I've just been to the hairdresser. You see, I have a job interview at the council in a few days.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh really! Well, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Thanks a lot. And now I'm on my way to buy a suit that I can wear to the interview. I " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " at the moment!" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "OK. Is that everything you're planning to do in town?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yeah. Well, I've got to go and pick up my laptop. It broke a couple of days ago so I took it to the shop to get it fixed. They had to order a spare part, but apparently it's ready for collection now. I " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I'm sure. " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " my technology breaks down. ...One more thing, it's Saturday today – is that when you like to do your shopping?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Well it's more a question of when I'm free. If I'm free on a Monday, that's when I choose to come into town. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", which I always prefer." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "So, I'd like to ask you a few more questions to get your views about shopping in Broadbeach, if that's ok.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Sure. What would you like to know specifically?" }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "What would you say you like best about the shops here?" }],
    },
    {
      speaker: "MAN",
      segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: " it's the service you get wherever you go." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "OK. And what do you think about the range of shops in Broadbeach?" }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh you can get " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " here." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "And what about recent changes? What do you like and dislike about them? For example, there are a lot of new coffee shops now, are you enjoying them?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "No, there are too many of them. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " as those places could be occupied by other kinds of shops." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "What would you like to see instead?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Well, I think we have enough clothing shops. But there's only one place that sells books at the moment. It'd be nice to " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", you know." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Right. And have you been to the new shopping centre outside Broadbeach yet, Martyn?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Yes, once or twice. It's not that far from where I live." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "It's a very modern-looking building, isn't it?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, and it's lovely. The glass roof is certainly impressive. But my favourite thing is the plants they've put around the building. They're amazing, and so big already.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "And what about the entertainment facilities? Have you used any of them yet? Like the new cinema?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Nah, not yet. I " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " in having it there because the one in town is actually bigger." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "OK, well thank you so much for..." }],
    },
  ],
};

export const CAM21_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Name: Martyn ______",
    questionVi: "Name: Martyn ______",
    modelParaphraseEn: "Martyn Leigh. Martyn's with a Y. It's L-E-I-G-H",
    modelParaphraseVi: "Martyn Leigh. Martyn's with a Y. It's L-E-I-G-H",
    acceptedAnswers: ["Leigh"],
    explanationEn: "Surname is Leigh (L-E-I-G-H), not Lee. First name is Martyn with a Y.",
    explanationVi: "Họ là Leigh (L-E-I-G-H), không phải Lee. Tên là Martyn với chữ Y.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Today's journey to Broadbeach town centre: used his ______",
    questionVi: "Today's journey to Broadbeach town centre: used his ______",
    modelParaphraseEn: "normally I catch the bus, but I'm on my motorbike today because I'm going to work later",
    modelParaphraseVi: "normally I catch the bus, but I'm on my motorbike today because I'm going to work later",
    acceptedAnswers: ["motorbike"],
    explanationEn: "He usually takes the bus; today he used his motorbike because he is going to work later.",
    explanationVi: "Bình thường đi bus; hôm nay đi motorbike vì lát nữa đi làm.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "has visited the ______",
    questionVi: "has visited the ______",
    modelParaphraseEn: "I've just been to the hairdresser. You see, I have a job interview at the council in a few days",
    modelParaphraseVi: "I've just been to the hairdresser. You see, I have a job interview at the council in a few days",
    acceptedAnswers: ["hairdresser"],
    explanationEn: "He has already been to the hairdresser for a council interview in a few days.",
    explanationVi: "Anh ấy vừa tới hairdresser vì sắp phỏng vấn ở hội đồng.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "looking for a new ______",
    questionVi: "looking for a new ______",
    modelParaphraseEn: "I'm on my way to buy a suit that I can wear to the interview",
    modelParaphraseVi: "I'm on my way to buy a suit that I can wear to the interview",
    acceptedAnswers: ["suit"],
    explanationEn: "He is buying a suit for the interview — he does not own one yet.",
    explanationVi: "Anh ấy đang mua suit để phỏng vấn — hiện chưa có bộ nào.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "collecting ______ (after repair)",
    questionVi: "collecting ______ (after repair)",
    modelParaphraseEn: "I've got to go and pick up my laptop. It broke … they had to order a spare part, but apparently it's ready for collection now",
    modelParaphraseVi: "I've got to go and pick up my laptop. It broke … they had to order a spare part, but apparently it's ready for collection now",
    acceptedAnswers: ["laptop"],
    explanationEn: "He is collecting a laptop after a repair (spare part ordered; now ready).",
    explanationVi: "Anh ấy đi lấy laptop sau khi sửa (đặt linh kiện; giờ đã sẵn).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Preferred day for shopping: ______",
    questionVi: "Preferred day for shopping: ______",
    modelParaphraseEn: "If I'm free on a Monday, that's when I choose to come into town. The shops are less busy then",
    modelParaphraseVi: "If I'm free on a Monday, that's when I choose to come into town. The shops are less busy then",
    acceptedAnswers: ["Monday"],
    explanationEn: "Today is Saturday, but he prefers Monday because the shops are quieter.",
    explanationVi: "Hôm nay là Saturday, nhưng anh ấy thích Monday vì cửa hàng vắng hơn.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Thinks there are too many places selling ______",
    questionVi: "Thinks there are too many places selling ______",
    modelParaphraseEn: "there are a lot of new coffee shops now, are you enjoying them? No, there are too many of them",
    modelParaphraseVi: "there are a lot of new coffee shops now, are you enjoying them? No, there are too many of them",
    acceptedAnswers: ["coffee"],
    explanationEn: "He dislikes the number of new coffee shops — too many of them.",
    explanationVi: "Anh ấy không thích quá nhiều cửa hàng coffee mới.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Would like more places to buy ______",
    questionVi: "Would like more places to buy ______",
    modelParaphraseEn: "there's only one place that sells books at the moment. It'd be nice to have a choice",
    modelParaphraseVi: "there's only one place that sells books at the moment. It'd be nice to have a choice",
    acceptedAnswers: ["books"],
    explanationEn: "Enough clothing shops; he wants more choice of bookshops.",
    explanationVi: "Quần áo đã đủ; anh ấy muốn thêm chỗ bán books.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Likes the ______ best",
    questionVi: "Likes the ______ best",
    modelParaphraseEn: "The glass roof is certainly impressive. But my favourite thing is the plants they've put around the building",
    modelParaphraseVi: "The glass roof is certainly impressive. But my favourite thing is the plants they've put around the building",
    acceptedAnswers: ["plants"],
    explanationEn: "The glass roof is impressive, but his favourite feature is the plants.",
    explanationVi: "Mái kính ấn tượng, nhưng thứ anh ấy thích nhất là plants.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Believes the ______ is unnecessary",
    questionVi: "Believes the ______ is unnecessary",
    modelParaphraseEn: "Like the new cinema? Nah, not yet. I can't see any advantage in having it there because the one in town is actually bigger",
    modelParaphraseVi: "Like the new cinema? Nah, not yet. I can't see any advantage in having it there because the one in town is actually bigger",
    acceptedAnswers: ["cinema"],
    explanationEn: "The out-of-town cinema is unnecessary — the one in town is bigger.",
    explanationVi: "Cinema ngoại ô là không cần — rạp trong phố còn lớn hơn.",
  },
];
