import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "it's important to be aware of how the market's changing and developing",
        "it is important to be aware of how the market is changing and developing",
        "it's important to be aware of how the market is changing and developing",
      ],
    },
    { id: "g2", answers: ["The fewest holidays are taken by the 31 to 42-year-olds"] },
    { id: "g3", answers: ["that figure shows no sign of rising"] },
    {
      id: "g4",
      answers: [
        "we haven't seen the increase we expected",
        "we have not seen the increase we expected",
      ],
    },
    {
      id: "g5",
      answers: [
        "I'm not talking here about adventure holidays",
        "I am not talking here about adventure holidays",
      ],
    },
    { id: "g6", answers: ["just for the thrill of it"] },
    {
      id: "g7",
      answers: [
        "They're not necessarily cheaper than ordinary holidays, often the opposite, in fact",
        "They are not necessarily cheaper than ordinary holidays, often the opposite, in fact",
      ],
    },
    { id: "g8", answers: ["the chance to develop a new skill or talent"] },
    {
      id: "g9",
      answers: [
        "they're very popular with clients of all abilities from beginners onwards",
        "they are very popular with clients of all abilities from beginners onwards",
      ],
    },
    {
      id: "g10",
      answers: [
        "We've got an excellent team of artists to lead the classes",
        "We have got an excellent team of artists to lead the classes",
      ],
    },
    {
      id: "g11",
      answers: [
        "that's more or less a given nowadays",
        "that is more or less a given nowadays",
      ],
    },
    { id: "g12", answers: ["there are generally some meat-free recipes included"] },
    { id: "g13", answers: ["clients have the opportunity to see some stunning scenery"] },
    { id: "g14", answers: ["Groups are small, no more than eight"] },
    { id: "g15", answers: ["receive valuable feedback from the tutor"] },
    { id: "g16", answers: ["together they draw up an individual programme"] },
    {
      id: "g17",
      answers: [
        "People say it's far preferable to being in a gym",
        "People say it is far preferable to being in a gym",
      ],
    },
    {
      id: "g18",
      answers: [
        "Bikes are provided and there are different routes according to people's ability",
        "Bikes are provided and there are different routes according to peoples ability",
      ],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In this session in your training day we're going to look at some of the more specialised holidays we offer at BC Travel.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, the travel business is very competitive and " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In terms of age groups, the over-65s are an important market, and one that's increasing steadily year on year.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The biggest market at present is still the youngest group, the 16 to 30s, but this group's also seen the biggest drop over the last few years, whereas there's a noticeable growth in the number of holidays taken by the 55 to 64-year-olds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As far as the 43 to 54-year-olds are concerned, bookings there are steady, but I have to say ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One trend we're noticing with nearly all age groups is the growing popularity of holidays in which clients do some kind of specialised activity.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", where clients take part in high-risk activities like white water rafting ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Activity holidays usually involve rather less high-risk sports, or things like art and music.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But they do often take place outside the main tourist centres, which gives an opportunity for clients to find out more about the local people and customs, and many say this is one of the most positive features of these holidays.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Of course, they offer " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", but clients often say that more than this, it's the chance to create lasting relationships with other like-minded people that's the main draw.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Let me give you some examples of BC Travel activity holidays." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Our painting holidays take place in four different centres in France and Italy and ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " - some of them have been with us from the start, and five additional ones will be joining us this year so that we can offer a greater number of classes in each centre.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As far as cooking holidays are concerned, I know a lot of agents offer holidays where clients cook recipes related to one particular country, usually the one they're staying in, but we focus on dishes from a great many different ones.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Apart from that you'll find the usual emphasis on good quality, organic ingredients - " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " - and " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Our photography holidays take place in a wide range of countries from Iceland to Vietnam, and " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", so clients can have one-on-one tuition during the holiday, and excursions are arranged with fully-trained guides.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At the end of each holiday an exhibition is held of the photographs taken so that clients can see one another's work and ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Finally, let me tell you about our fitness holidays." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In Ireland and Italy we run one-week general fitness classes for all ages and levels of fitness.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Clients start the course with a consultation with a trainer, and ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As well as improving general fitness, clients find that they end up losing much of the stress they've built up in their daily lives.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In Greece, we have a two-week holiday for clients who want to do something about their weight.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This has all the features you'd expect, like a personalised diet programme, but one of its most popular features is that the exercise classes are all held on the beach.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Finally, we offer several holidays in Morocco." }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "One very popular one is the mountain biking holiday." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We offer one which is tailored to the needs of families, which is particularly popular.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "OK, so that's about all the time I have today, so thank you very much …",
        },
      ],
    },
  ],
};

export const CAM12_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
    questionVi: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
    modelParaphraseEn:
      "the over-65s are an important market, and one that's increasing steadily year on year",
    modelParaphraseVi:
      "the over-65s are an important market, and one that's increasing steadily year on year",
    acceptedAnswers: ["E", "over 65 years", "over-65s"],
    explanationEn:
      "E = over 65. The over-65s are increasing year on year. Pair with D (55-64). 16-30 is still biggest but dropping; 31-42 is fewest; 43-54 is only steady.",
    explanationVi:
      "E = over 65. Over-65s tăng đều year on year. Cặp với D (55-64). 16-30 vẫn lớn nhất nhưng đang giảm.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
    questionVi: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
    modelParaphraseEn:
      "there's a noticeable growth in the number of holidays taken by the 55 to 64-year-olds",
    modelParaphraseVi:
      "there's a noticeable growth in the number of holidays taken by the 55 to 64-year-olds",
    acceptedAnswers: ["D", "55-64 years", "55 to 64-year-olds"],
    explanationEn: "D = 55-64 years. Official pair with Q11 is D and E.",
    explanationVi: "D = 55-64 years. Cặp official với Q11 là D và E.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Which TWO are the main reasons given for the popularity of activity holidays?",
    questionVi: "Which TWO are the main reasons given for the popularity of activity holidays?",
    modelParaphraseEn:
      "they do often take place outside the main tourist centres, which gives an opportunity for clients to find out more about the local people and customs",
    modelParaphraseVi:
      "they do often take place outside the main tourist centres, which gives an opportunity for clients to find out more about the local people and customs",
    acceptedAnswers: ["C", "Clients learn about a different culture.", "local people and customs"],
    explanationEn:
      "C = learn about a different culture (local people and customs). Pair with A (new friends). Skill is mentioned but not the main draw; risk and cheapness are rejected.",
    explanationVi:
      "C = tìm hiểu culture khác (local people and customs). Cặp với A (new friends). Skill không phải main draw; risk và giá rẻ bị loại.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Which TWO are the main reasons given for the popularity of activity holidays?",
    questionVi: "Which TWO are the main reasons given for the popularity of activity holidays?",
    modelParaphraseEn:
      "it's the chance to create lasting relationships with other like-minded people that's the main draw",
    modelParaphraseVi:
      "it's the chance to create lasting relationships with other like-minded people that's the main draw",
    acceptedAnswers: ["A", "Clients make new friends.", "lasting relationships", "like-minded people"],
    explanationEn: "A = make new friends. Official pair with Q13 is A and C.",
    explanationVi: "A = make new friends. Cặp official với Q13 là A và C.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "How does BC Travel plan to expand the painting holidays?",
    questionVi: "How does BC Travel plan to expand the painting holidays?",
    modelParaphraseEn:
      "five additional ones will be joining us this year so that we can offer a greater number of classes in each centre",
    modelParaphraseVi:
      "five additional ones will be joining us this year so that we can offer a greater number of classes in each centre",
    acceptedAnswers: ["C", "by employing more teachers", "five additional ones"],
    explanationEn:
      "C = employing more teachers (five extra artists). Locations stay at four centres; all abilities already included.",
    explanationVi:
      "C = thuê thêm teachers (five additional artists). Vẫn bốn centres; all abilities đã có sẵn.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Why are BC Travel's cooking holidays unusual?",
    questionVi: "Why are BC Travel's cooking holidays unusual?",
    modelParaphraseEn:
      "a lot of agents offer holidays where clients cook recipes related to one particular country … but we focus on dishes from a great many different ones",
    modelParaphraseVi:
      "a lot of agents offer holidays where clients cook recipes related to one particular country … but we focus on dishes from a great many different ones",
    acceptedAnswers: ["B", "They have an international focus.", "dishes from a great many different ones"],
    explanationEn:
      "B = international focus (many countries' dishes). Organic food is a given; meat-free recipes are only some, not mainly vegetarian.",
    explanationVi:
      "B = international focus (món từ nhiều nước). Organic là given; meat-free chỉ một phần, không phải mainly vegetarian.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "What does the speaker say about the photography holidays?",
    questionVi: "What does the speaker say about the photography holidays?",
    modelParaphraseEn: "clients can have one-on-one tuition during the holiday",
    modelParaphraseVi: "clients can have one-on-one tuition during the holiday",
    acceptedAnswers: ["A", "Clients receive individual tuition.", "one-on-one tuition"],
    explanationEn:
      "A = individual / one-on-one tuition. Guides are fully trained, not the tutors; feedback is on the photos, not selling them.",
    explanationVi:
      "A = individual / one-on-one tuition. Guides được train, không phải tutors; feedback về ảnh, không phải bán ảnh.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Ireland and Italy: also reduces ______",
    questionVi: "Ireland and Italy: also reduces ______",
    modelParaphraseEn: "they end up losing much of the stress they've built up in their daily lives",
    modelParaphraseVi: "they end up losing much of the stress they've built up in their daily lives",
    acceptedAnswers: ["stress"],
    explanationEn: "Besides general fitness, clients lose much of the stress from daily life.",
    explanationVi: "Ngoài general fitness, khách mất bớt stress từ đời sống hàng ngày.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Greece: ______ control",
    questionVi: "Greece: ______ control",
    modelParaphraseEn: "a two-week holiday for clients who want to do something about their weight",
    modelParaphraseVi: "a two-week holiday for clients who want to do something about their weight",
    acceptedAnswers: ["weight"],
    explanationEn: "The Greece holiday is for clients who want to do something about their weight.",
    explanationVi: "Kỳ nghỉ Greece dành cho khách muốn làm gì đó về weight.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Morocco mountain biking: one holiday that is specially designed for ______",
    questionVi: "Morocco mountain biking: one holiday that is specially designed for ______",
    modelParaphraseEn: "We offer one which is tailored to the needs of families",
    modelParaphraseVi: "We offer one which is tailored to the needs of families",
    acceptedAnswers: ["families"],
    explanationEn: "One mountain-biking holiday is tailored to the needs of families.",
    explanationVi: "Một holiday mountain biking được tailored cho families.",
  },
];
