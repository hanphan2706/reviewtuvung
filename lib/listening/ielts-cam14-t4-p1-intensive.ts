import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'm arranging a party for my parents' fiftieth wedding anniversary",
        "I am arranging a party for my parents' fiftieth wedding anniversary",
      ],
    },
    {
      id: "g2",
      answers: [
        "I'm ringing to ask about hiring a room",
        "I am ringing to ask about hiring a room",
      ],
    },
    { id: "g3", answers: ["I'm sure we can help you with that", "I am sure we can help you with that"] },
    { id: "g4", answers: ["Will you be having a sit-down meal or a buffet"] },
    {
      id: "g5",
      answers: [
        "And do you know how many people there'll be",
        "And do you know how many people there will be",
      ],
    },
    {
      id: "g6",
      answers: [
        "there's room for four or five musicians in the gallery overlooking the room",
        "there is room for four or five musicians in the gallery overlooking the room",
      ],
    },
    {
      id: "g7",
      answers: ["the music can be loud enough for dancing, but not too loud for conversation"],
    },
    {
      id: "g8",
      answers: [
        "I really don't like it when you can't talk",
        "I really do not like it when you cannot talk",
        "I really don't like it when you cannot talk",
      ],
    },
    { id: "g9", answers: ["there are French windows leading out onto the terrace"] },
    {
      id: "g10",
      answers: ["that side of the hotel gets the sun in the afternoon and early evening"],
    },
    { id: "g11", answers: ["you can stroll through there to the river"] },
    {
      id: "g12",
      answers: ["it isn't visible from the hotel", "it is not visible from the hotel"],
    },
    { id: "g13", answers: ["And can you go outside from the room"] },
    { id: "g14", answers: ["the windows look out onto the lake"] },
    {
      id: "g15",
      answers: [
        "who'll be with you throughout the party",
        "who will be with you throughout the party",
      ],
    },
    { id: "g16", answers: ["they can easily get people's attention", "they can easily get peoples' attention"] },
    { id: "g17", answers: ["They each sleep two to four people"] },
    {
      id: "g18",
      answers: [
        "it's worth booking in advance if you possibly can",
        "it is worth booking in advance if you possibly can",
      ],
    },
  ],
  lines: [
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "Good morning, Clare House Hotel. Andrew speaking. I'm the Events Manager.",
        },
      ],
    },
    {
      speaker: "SAM",
      segments: [
        { type: "text", text: "Good morning, Andrew. My name's Samantha. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " some time next September. Also my parents and several of the guests will need accommodation.",
        },
      ],
    },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "OK, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Probably a sit-down." }] },
    {
      speaker: "ANDREW",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "?" }],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Around eighty, I think." }] },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "Well we have two rooms that can hold that number. One is the Adelphi Room. That can seat eighty-five, or hold over a hundred if people are standing for a buffet.",
        },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "If you have live music, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". Our guests usually appreciate the fact that " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SAM",
      segments: [{ type: "gap", gapId: "g8" }, { type: "text", text: "." }],
    },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "Exactly. Now the Adelphi Room is at the back of the hotel, and " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". This has a beautiful display of pots of roses at that time of the year.",
        },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Which direction does it face?" }] },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "Southwest, so " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Very nice." }] },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "From the terrace you can see the area of trees within the grounds of the hotel, or " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " – that's on the far side, so " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "Then another option is the Carlton Room. This is a bit bigger – it can hold up to a hundred and ten people – and it has the advantage of a stage, which is useful if you have any entertainment, or indeed a small band can fit onto it.",
        },
      ],
    },
    {
      speaker: "SAM",
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "?" }],
    },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "No, the Carlton Room is on the first floor, but on one side " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SAM",
      segments: [{ type: "text", text: "Lovely. I think either of those rooms would be suitable." }],
    },
    {
      speaker: "ANDREW",
      segments: [{ type: "text", text: "Can I tell you about some of the options we offer in addition?" }],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Please do." }] },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "As well as a meal, you can have an MC, a Master of Ceremonies, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SAM",
      segments: [
        {
          type: "text",
          text: "What exactly is the MC's function? I suppose they make a speech during the meal if we need one, do they?",
        },
      ],
    },
    {
      speaker: "ANDREW",
      segments: [
        { type: "text", text: "That's right. All our MCs are trained as public speakers, so " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " – many guests are glad to have someone who can make themselves heard above the chatter! And they're also your support – if anything goes wrong, the MC will deal with it, so you can relax.",
        },
      ],
    },
    {
      speaker: "SAM",
      segments: [
        {
          type: "text",
          text: "Great! I'll need to ask you about food, but something else that's important is accommodation. You obviously have rooms in the hotel, but do you also have any other accommodation, like cabins, for example?",
        },
      ],
    },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "Yes, there are five in the grounds, all self-contained. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " and have their own living room, bathroom and small kitchen." },
      ],
    },
    {
      speaker: "SAM",
      segments: [{ type: "text", text: "That sounds perfect for what we'll need." }],
    },
    {
      speaker: "SAM",
      segments: [
        {
          type: "text",
          text: "Now you have various facilities, don't you? Are they all included in the price of hiring the room? The pool, for instance.",
        },
      ],
    },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "Normally you'd be able to use it, but it'll be closed throughout September for refurbishment, I'm afraid. The gym will be available, though, at no extra charge. That's open all day, from six in the morning until midnight.",
        },
      ],
    },
    { speaker: "SAM", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "ANDREW",
      segments: [
        {
          type: "text",
          text: "And the tennis courts, but there is a small additional payment for those. We have four courts, and " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", as there can be quite a long waiting list for them!" },
      ],
    },
    {
      speaker: "SAM",
      segments: [
        {
          type: "text",
          text: "Right. Now could we discuss the food? This would be dinner, around seven o'clock …",
        },
      ],
    },
  ],
};

export const CAM14_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Adelphi Room — number of people who can sit down to eat: ______",
    questionVi: "Adelphi Room — số người ngồi ăn: ______",
    modelParaphraseEn: "That can seat eighty-five, or hold over a hundred if people are standing for a buffet",
    modelParaphraseVi: "That can seat eighty-five, or hold over a hundred if people are standing for a buffet",
    acceptedAnswers: ["85", "eighty-five", "eighty five"],
    explanationEn: "Sit-down capacity is 85; over 100 is standing / buffet only.",
    explanationVi: "Sức chứa ngồi ăn là 85; trên 100 chỉ khi đứng / buffet.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "can go out and see the ______ in pots on the terrace",
    questionVi: "ra ngoài thấy ______ trong chậu trên terrace",
    modelParaphraseEn: "This has a beautiful display of pots of roses at that time of the year",
    modelParaphraseVi: "This has a beautiful display of pots of roses at that time of the year",
    acceptedAnswers: ["roses"],
    explanationEn: "French windows lead onto the terrace with pots of roses.",
    explanationVi: "French windows ra terrace có chậu roses.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "terrace has a view of a group of ______",
    questionVi: "terrace nhìn ra một cụm ______",
    modelParaphraseEn: "From the terrace you can see the area of trees within the grounds of the hotel",
    modelParaphraseVi: "From the terrace you can see the area of trees within the grounds of the hotel",
    acceptedAnswers: ["trees"],
    explanationEn: "View from the terrace is a group of trees in the grounds (the river is not visible from the hotel).",
    explanationVi: "Từ terrace thấy cụm trees trong khuôn viên (sông không thấy từ khách sạn).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Carlton Room — number who can sit down to eat: 110; has a ______",
    questionVi: "Carlton Room — 110 người ngồi ăn; có ______",
    modelParaphraseEn: "it has the advantage of a stage, which is useful if you have any entertainment",
    modelParaphraseVi: "it has the advantage of a stage, which is useful if you have any entertainment",
    acceptedAnswers: ["stage"],
    explanationEn: "The Carlton Room's extra feature is a stage (a small band can fit on it).",
    explanationVi: "Điểm thêm của Carlton Room là stage (ban nhạc nhỏ vừa lên được).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Master of Ceremonies: can give a ______ while people are eating",
    questionVi: "MC: có thể phát biểu ______ khi khách đang ăn",
    modelParaphraseEn: "I suppose they make a speech during the meal if we need one … That's right",
    modelParaphraseVi: "I suppose they make a speech during the meal if we need one … That's right",
    acceptedAnswers: ["speech"],
    explanationEn: "The MC can make a speech during the meal; they are trained public speakers.",
    explanationVi: "MC có thể speech trong bữa ăn; họ được đào tạo public speaking.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "will provide ______ if there are any problems",
    questionVi: "sẽ hỗ trợ ______ nếu có vấn đề",
    modelParaphraseEn: "they're also your support – if anything goes wrong, the MC will deal with it",
    modelParaphraseVi: "they're also your support – if anything goes wrong, the MC will deal with it",
    acceptedAnswers: ["support"],
    explanationEn: "If anything goes wrong, the MC provides support so the host can relax.",
    explanationVi: "Nếu có sự cố, MC là support để chủ tiệc yên tâm.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Accommodation: in the hotel rooms or ______",
    questionVi: "Chỗ ở: phòng khách sạn hoặc ______",
    modelParaphraseEn: "do you also have any other accommodation, like cabins, for example? Yes, there are five in the grounds",
    modelParaphraseVi: "do you also have any other accommodation, like cabins, for example? Yes, there are five in the grounds",
    acceptedAnswers: ["cabins"],
    explanationEn: "Besides hotel rooms there are five self-contained cabins in the grounds.",
    explanationVi: "Ngoài phòng khách sạn còn năm cabins tự chứa trong khuôn viên.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "outdoor swimming pool — A included / B extra charge / C not available",
    questionVi: "hồ bơi ngoài trời — A gồm trong giá / B phụ thu / C không có",
    modelParaphraseEn: "it'll be closed throughout September for refurbishment",
    modelParaphraseVi: "it'll be closed throughout September for refurbishment",
    acceptedAnswers: ["C", "not available", "closed throughout September"],
    explanationEn: "C = not available: the pool is closed all September for refurbishment.",
    explanationVi: "C = không dùng được: hồ đóng suốt tháng 9 để refurbishment.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "gym — A included / B extra charge / C not available",
    questionVi: "gym — A gồm trong giá / B phụ thu / C không có",
    modelParaphraseEn: "The gym will be available, though, at no extra charge",
    modelParaphraseVi: "The gym will be available, though, at no extra charge",
    acceptedAnswers: ["A", "included", "no extra charge"],
    explanationEn: "A = included: gym available at no extra charge (6 a.m. to midnight).",
    explanationVi: "A = gồm trong giá: gym dùng miễn phụ thu (6h–nửa đêm).",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "tennis courts — A included / B extra charge / C not available",
    questionVi: "sân tennis — A gồm trong giá / B phụ thu / C không có",
    modelParaphraseEn: "there is a small additional payment for those",
    modelParaphraseVi: "there is a small additional payment for those",
    acceptedAnswers: ["B", "extra charge", "additional payment"],
    explanationEn: "B = extra charge: tennis courts have a small additional payment; book in advance.",
    explanationVi: "B = phụ thu: tennis có additional payment nhỏ; nên đặt trước.",
  },
];
