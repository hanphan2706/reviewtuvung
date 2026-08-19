import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Good morning everyone"] },
    {
      id: "g2",
      answers: [
        "My name's Joy Parkins and I'm the restaurant manager",
        "My name is Joy Parkins and I am the restaurant manager",
        "My name's Joy Parkins and I am the restaurant manager",
      ],
    },
    {
      id: "g3",
      answers: [
        "none of you've had any previous experience as kitchen assistants",
        "none of you have had any previous experience as kitchen assistants",
      ],
    },
    { id: "g4", answers: ["you might be feeling a bit nervous now"] },
    {
      id: "g5",
      answers: [
        "they might get shouted at sometimes, but it's nothing personal",
        "they might get shouted at sometimes, but it is nothing personal",
      ],
    },
    {
      id: "g6",
      answers: ["we might think about moving you up and giving you some more responsibility"],
    },
    {
      id: "g7",
      answers: [
        "you've all shown up on time, which is an excellent start",
        "you have all shown up on time, which is an excellent start",
      ],
    },
    { id: "g8", answers: ["the floors can get very wet and slippery"] },
    {
      id: "g9",
      answers: ["Those of you with long hair have got it well out of the way"],
    },
    {
      id: "g10",
      answers: [
        "Fortunately we've got our Head Chef back",
        "Fortunately we have got our Head Chef back",
      ],
    },
    {
      id: "g11",
      answers: [
        "I'll tell you a bit more about the job in a minute but first, some general regulations",
        "I will tell you a bit more about the job in a minute but first, some general regulations",
      ],
    },
    {
      id: "g12",
      answers: ["until you've been properly trained", "until you have been properly trained"],
    },
    { id: "g13", answers: ["that's Emma and Jake, isn't it"] },
    {
      id: "g14",
      answers: ["until you've been shown how it works", "until you have been shown how it works"],
    },
    {
      id: "g15",
      answers: ["you'll get a break in the middle", "you will get a break in the middle"],
    },
    {
      id: "g16",
      answers: ["we do have a very efficient air conditioning system compared with some kitchens"],
    },
    {
      id: "g17",
      answers: [
        "so that you learn while you're on the job",
        "so that you learn while you are on the job",
      ],
    },
    { id: "g18", answers: ["One person whose name you must remember is David Field"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "gap", gapId: "g1" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "gap", gapId: "g2" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And I understand that " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", but most of our kitchen assistants say they enjoy the work." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", and they're pleased that they have so many different things to do, which means they never get bored.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And I'll tell you straightaway that if you do well, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right, well, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now I'm glad to see none of you have unsuitable footwear, so that's good - you need to be careful as ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", but some of you'll need to remove your rings and bracelets - just put them somewhere safe for today, and remember to leave them at home tomorrow, as they can be a safety hazard.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now it's going to be a busy day for you all today - we don't have any tables free for this evening, and only a few for lunch.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " - he was away on holiday all last week which meant the other chefs had extra work.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For all of you, whatever your age, there's some equipment you mustn't use ",
        },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", like the waste disposal system for example, for health and safety reasons.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Then I think there are two of you here who are under 18 - " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right, so for you two, the meat slicer is out of bounds." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And of course none of you are allowed to use the electric mixer ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now you may have heard that this can be a stressful job, and I have to say that can be true.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll be working an eight-hour day for the first week, though you'll have the chance to do overtime after that as well if you want to.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But however long the hours are, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What you will find is that you're on your feet all day long, lifting and carrying, so if you're not fit now you soon will be!",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll find you don't have much chance to take it easy - when someone tells you to do something you need to do it straightaway - but at least ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Now let me tell you about some of the people you need to know." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So as I said, I'm Joy Parkins and I decide who does what during the day and how long they work for.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I'll be trying to get you to work with as many different people in the kitchen as possible, ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you injure yourself at all, even if it's really minor, you must report to him and he'll make sure the incident is recorded and you get the appropriate treatment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He's trained to give basic treatment to staff himself, or he'll send you off somewhere else if necessary.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then there's Dexter Wills - he's the person you need to see if you smash a plate or something like that.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Don't just leave it and hope no one will notice - it's really important to get things noted and replaced or there could be problems later.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "And finally, there's Mike Smith." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He's the member of staff who takes care of all the stores of perishables, so if you notice we're getting low in flour or sugar or something, make sure you let him know so he can put in an order.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "OK, now the next thing …" }] },
  ],
};

export const CAM12_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "According to the manager, what do most people like about the job of kitchen assistant? A the variety of work / B the friendly atmosphere / C the opportunities for promotion",
    questionVi:
      "According to the manager, what do most people like about the job of kitchen assistant? A the variety of work / B the friendly atmosphere / C the opportunities for promotion",
    modelParaphraseEn:
      "they're pleased that they have so many different things to do, which means they never get bored",
    modelParaphraseVi:
      "they're pleased that they have so many different things to do, which means they never get bored",
    acceptedAnswers: ["A", "the variety of work"],
    explanationEn:
      "A = many different things to do / never get bored. Promotion is only a possible later reward; shouting is mentioned, not a friendly atmosphere.",
    explanationVi:
      "A = nhiều việc khác nhau / never get bored. Promotion chỉ là phần thưởng có thể sau này; bị shout không phải friendly atmosphere.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn:
      "The manager is concerned about some of the new staff's A jewellery. / B hair styles. / C shoes.",
    questionVi:
      "The manager is concerned about some of the new staff's A jewellery. / B hair styles. / C shoes.",
    modelParaphraseEn:
      "some of you'll need to remove your rings and bracelets … they can be a safety hazard",
    modelParaphraseVi:
      "some of you'll need to remove your rings and bracelets … they can be a safety hazard",
    acceptedAnswers: ["A", "jewellery", "jewelry"],
    explanationEn:
      "A = rings and bracelets (jewellery) are a safety hazard. Footwear and long hair are already OK.",
    explanationVi:
      "A = rings and bracelets (jewellery) là safety hazard. Giày và tóc dài đã ổn.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "The manager says that the day is likely to be busy for kitchen staff because A it is a public holiday. / B the head chef is absent. / C the restaurant is almost fully booked.",
    questionVi:
      "The manager says that the day is likely to be busy for kitchen staff because A it is a public holiday. / B the head chef is absent. / C the restaurant is almost fully booked.",
    modelParaphraseEn: "we don't have any tables free for this evening, and only a few for lunch",
    modelParaphraseVi: "we don't have any tables free for this evening, and only a few for lunch",
    acceptedAnswers: ["C", "the restaurant is almost fully booked"],
    explanationEn:
      "C = no free tables tonight and only a few at lunch. The Head Chef is back, not absent.",
    explanationVi:
      "C = tối nay hết bàn, trưa chỉ còn vài bàn. Head Chef đã trở lại, không vắng.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn:
      "Only kitchen staff who are 18 or older are allowed to use A the waste disposal unit. / B the electric mixer. / C the meat slicer.",
    questionVi:
      "Only kitchen staff who are 18 or older are allowed to use A the waste disposal unit. / B the electric mixer. / C the meat slicer.",
    modelParaphraseEn: "so for you two, the meat slicer is out of bounds",
    modelParaphraseVi: "so for you two, the meat slicer is out of bounds",
    acceptedAnswers: ["C", "the meat slicer"],
    explanationEn:
      "C = under-18s (Emma and Jake) must not use the meat slicer. Waste disposal and mixer are training restrictions for everyone.",
    explanationVi:
      "C = dưới 18 (Emma và Jake) không được dùng meat slicer. Waste disposal và mixer là hạn chế đào tạo cho tất cả.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn:
      "Which TWO things can make the job stressful? A They have to follow orders immediately. / B The kitchen gets very hot. / C They may not be able to take a break. / D They have to do overtime. / E The work is physically demanding.",
    questionVi:
      "Which TWO things can make the job stressful? A They have to follow orders immediately. / B The kitchen gets very hot. / C They may not be able to take a break. / D They have to do overtime. / E The work is physically demanding.",
    modelParaphraseEn: "when someone tells you to do something you need to do it straightaway",
    modelParaphraseVi: "when someone tells you to do something you need to do it straightaway",
    acceptedAnswers: ["A", "They have to follow orders immediately"],
    explanationEn:
      "A = do it straightaway. Overtime is optional; there is a mid-shift break; air-con is efficient (not hot).",
    explanationVi:
      "A = do it straightaway. Overtime là tuỳ chọn; có break giữa ca; điều hoà hiệu quả (không nóng).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn:
      "Which TWO things can make the job stressful? (second answer) A follow orders immediately / B kitchen very hot / C may not take a break / D have to do overtime / E work is physically demanding",
    questionVi:
      "Which TWO things can make the job stressful? (second answer) A follow orders immediately / B kitchen very hot / C may not take a break / D have to do overtime / E work is physically demanding",
    modelParaphraseEn: "you're on your feet all day long, lifting and carrying",
    modelParaphraseVi: "you're on your feet all day long, lifting and carrying",
    acceptedAnswers: ["E", "The work is physically demanding"],
    explanationEn: "E = on your feet all day, lifting and carrying — physically demanding.",
    explanationVi: "E = đứng cả ngày, lifting and carrying — công việc nặng về thể lực.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn:
      "Joy Parkins — responsibility: A training courses / B food stocks / C first aid / D breakages / E staff discounts / F timetables",
    questionVi:
      "Joy Parkins — responsibility: A training courses / B food stocks / C first aid / D breakages / E staff discounts / F timetables",
    modelParaphraseEn: "I decide who does what during the day and how long they work for",
    modelParaphraseVi: "I decide who does what during the day and how long they work for",
    acceptedAnswers: ["F", "timetables"],
    explanationEn: "F = who does what and how long they work — timetables.",
    explanationVi: "F = ai làm gì và làm bao lâu — timetables.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "David Field — responsibility: A–F",
    questionVi: "David Field — responsibility: A–F",
    modelParaphraseEn:
      "If you injure yourself at all … you must report to him … you get the appropriate treatment",
    modelParaphraseVi:
      "If you injure yourself at all … you must report to him … you get the appropriate treatment",
    acceptedAnswers: ["C", "first aid"],
    explanationEn: "C = injuries reported to him; he gives basic treatment or sends you elsewhere.",
    explanationVi: "C = chấn thương báo cho anh ấy; sơ cứu cơ bản hoặc gửi đi nơi khác.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Dexter Wills — responsibility: A–F",
    questionVi: "Dexter Wills — responsibility: A–F",
    modelParaphraseEn: "he's the person you need to see if you smash a plate or something like that",
    modelParaphraseVi: "he's the person you need to see if you smash a plate or something like that",
    acceptedAnswers: ["D", "breakages"],
    explanationEn: "D = smash a plate — breakages must be noted and replaced.",
    explanationVi: "D = smash a plate — breakages phải ghi nhận và thay.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Mike Smith — responsibility: A–F",
    questionVi: "Mike Smith — responsibility: A–F",
    modelParaphraseEn:
      "takes care of all the stores of perishables … getting low in flour or sugar … put in an order",
    modelParaphraseVi:
      "takes care of all the stores of perishables … getting low in flour or sugar … put in an order",
    acceptedAnswers: ["B", "food stocks"],
    explanationEn: "B = perishables / flour and sugar stocks — food stocks.",
    explanationVi: "B = perishables / bột và đường — food stocks.",
  },
];
