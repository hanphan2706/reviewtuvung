import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "We've got to choose a topic for our experiment, haven't we, Jack",
        "We have got to choose a topic for our experiment, haven't we, Jack",
      ],
    },
    { id: "g2", answers: ["Were you thinking of something to do with seeds"] },
    { id: "g3", answers: ["I thought we could look at seed germination"] },
    { id: "g4", answers: ["how a seed begins to grow"] },
    {
      id: "g5",
      answers: [
        "I know you're hoping to work in plant science eventually",
        "I know you are hoping to work in plant science eventually",
      ],
    },
    { id: "g6", answers: ["practically everything we do is going to feed into that"] },
    {
      id: "g7",
      answers: [
        "If I choose that option, I don't have to do a dissertation module",
        "If I choose that option, I do not have to do a dissertation module",
      ],
    },
    { id: "g8", answers: ["That should be fine if we start now"] },
    { id: "g9", answers: ["A lot of the other possible experiments need quite a bit longer"] },
    {
      id: "g10",
      answers: [
        "we're not doing chemical analysis or anything",
        "we are not doing chemical analysis or anything",
      ],
    },
    {
      id: "g11",
      answers: [
        "we've got plenty of equipment in the laboratory",
        "we have got plenty of equipment in the laboratory",
      ],
    },
    {
      id: "g12",
      answers: [
        "We need to have a word with the tutor if we're going to go ahead with it",
        "We need to have a word with the tutor if we are going to go ahead with it",
      ],
    },
    {
      id: "g13",
      answers: ["It's not very ambitious", "It is not very ambitious"],
    },
    { id: "g14", answers: ["Did you read that book on seed germination on our reading list"] },
    {
      id: "g15",
      answers: [
        "I'd been hoping for something more practical",
        "I had been hoping for something more practical",
      ],
    },
    { id: "g16", answers: ["Yes, that was interesting"] },
    { id: "g17", answers: ["I think those diagrams were in another article"] },
    {
      id: "g18",
      answers: [
        "We'll need to get going with it quite soon",
        "We will need to get going with it quite soon",
      ],
    },
  ],
  lines: [
    {
      speaker: "EMMA",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: "? " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " - " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        { type: "text", text: "OK. Any particular reason? " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " …" },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Yeah, but " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". No, there's an optional module on seed structure and function in the third year that I might do, so I thought it might be useful for that. ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "EMMA", segments: [{ type: "text", text: "Good idea." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Well, I thought for this experiment we could look at the relationship between seed size and the way the seeds are planted. So, we could plant different sized seeds in different ways, and see which grow best.",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [{ type: "text", text: "OK. We'd need to allow time for the seeds to come up." }],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        { type: "text", text: "So that'd make it a good one to choose. And I don't suppose it'd need much equipment; " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". Though that's not really an issue, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " though. I'm sure our aim's OK. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " but the assignment's only ten percent of our final mark, isn't it? But we need to be sure we're the only ones doing it.",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        {
          type: "text",
          text: "Yeah, it's only five percent actually, but it'd be a bit boring if everyone was doing it.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "?" }],
    },
    {
      speaker: "EMMA",
      segments: [
        {
          type: "text",
          text: "The one by Graves? I looked through it for my last experiment, though it wasn't all that relevant there. It would be for this experiment, though. I found it quite hard to follow - lots about the theory, which I hadn't expected.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". It does include references to the recent findings on genetically-modified seeds, though.",
        },
      ],
    },
    { speaker: "EMMA", segments: [{ type: "gap", gapId: "g16" }, { type: "text", text: "." }] },
    {
      speaker: "JACK",
      segments: [{ type: "text", text: "I read an article about seed germination by Lee Hall." }],
    },
    {
      speaker: "EMMA",
      segments: [
        { type: "text", text: "About seeds that lie in the ground for ages and only germinate after a fire?" },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "That's the one. I knew a bit about it already, but not about this research. His analysis of figures comparing the times of the fires and the proportion of seeds that germinated was done in a lot of detail - very impressive.",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        {
          type: "text",
          text: "Was that the article with the illustrations of early stages of plant development? They were very clear.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "." }],
    },
    {
      speaker: "EMMA",
      segments: [
        { type: "text", text: "Anyway, shall we have a look at the procedure for our experiment? " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Right. So the first thing we have to do is find our seeds. I think vegetable seeds would be best. And obviously they mustn't all be the same size. So, how many sorts do we need? About four different ones?",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        { type: "text", text: "I think that would be enough. There'll be quite a large number of seeds for each one." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Then, for each seed we need to find out how much it weighs, and also measure its dimensions, and we need to keep a careful record of all that.",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        {
          type: "text",
          text: "That'll be quite time-consuming. And we also need to decide how deep we're going to plant the seeds - right on the surface, a few millimetres down, or several centimetres.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "OK. So then we get planting. Do you think we can plant several seeds together in the same plant pot?",
        },
      ],
    },
    { speaker: "EMMA", segments: [{ type: "text", text: "No, I think we need a different one for each seed." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Right. And we'll need to label them - we can use different coloured labels. Then we wait for the seeds to germinate - I reckon that'll be about three weeks, depending on what the weather's like. Then we see if our plants have come up, and write down how tall they've grown.",
        },
      ],
    },
    {
      speaker: "EMMA",
      segments: [
        {
          type: "text",
          text: "Then all we have to do is look at our numbers, and see if there's any relation between them.",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "That's right." }] },
  ],
};

export const CAM13_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "Why is Jack interested in investigating seed germination? A He may do a module on a related topic later on. / B He wants to have a career in plant science. / C He is thinking of choosing this topic for his dissertation.",
    questionVi:
      "Why is Jack interested in investigating seed germination? A He may do a module on a related topic later on. / B He wants to have a career in plant science. / C He is thinking of choosing this topic for his dissertation.",
    modelParaphraseEn:
      "there's an optional module on seed structure and function in the third year that I might do, so I thought it might be useful for that. If I choose that option, I don't have to do a dissertation module",
    modelParaphraseVi:
      "there's an optional module on seed structure and function in the third year that I might do, so I thought it might be useful for that. If I choose that option, I don't have to do a dissertation module",
    acceptedAnswers: ["A", "He may do a module on a related topic later on"],
    explanationEn:
      "A = optional third-year module on seed structure and function. Plant science is his long-term plan for everything, not the reason for this topic; the option means he would not do a dissertation.",
    explanationVi:
      "A = optional module năm 3 về seed structure and function. Plant science là hướng lâu dài cho mọi thứ, không phải lý do chọn đề; chọn option này thì không làm dissertation.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "Jack and Emma agree the main advantage of their present experiment is that it can be A described very easily. / B carried out inside the laboratory. / C completed in the time available.",
    questionVi:
      "Jack and Emma agree the main advantage of their present experiment is that it can be A described very easily. / B carried out inside the laboratory. / C completed in the time available.",
    modelParaphraseEn:
      "We'd need to allow time for the seeds to come up. That should be fine if we start now. A lot of the other possible experiments need quite a bit longer. So that'd make it a good one to choose",
    modelParaphraseVi:
      "We'd need to allow time for the seeds to come up. That should be fine if we start now. A lot of the other possible experiments need quite a bit longer. So that'd make it a good one to choose",
    acceptedAnswers: ["C", "completed in the time available"],
    explanationEn:
      "C = they have enough time if they start now; other experiments take longer. Equipment is not an issue because the lab already has plenty.",
    explanationVi:
      "C = đủ thời gian nếu bắt đầu ngay; thí nghiệm khác lâu hơn. Equipment không thành vấn đề vì lab đã có nhiều.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "What do they decide to check with their tutor? A whether their aim is appropriate / B whether anyone else has chosen this topic / C whether the assignment contributes to their final grade",
    questionVi:
      "What do they decide to check with their tutor? A whether their aim is appropriate / B whether anyone else has chosen this topic / C whether the assignment contributes to their final grade",
    modelParaphraseEn:
      "We need to have a word with the tutor … I'm sure our aim's OK. … But we need to be sure we're the only ones doing it",
    modelParaphraseVi:
      "We need to have a word with the tutor … I'm sure our aim's OK. … But we need to be sure we're the only ones doing it",
    acceptedAnswers: ["B", "whether anyone else has chosen this topic"],
    explanationEn:
      "B = make sure they are the only ones doing it. Jack is already sure the aim is OK. The grade is 5%, not 10% — they are not checking that with the tutor.",
    explanationVi:
      "B = chắc là chỉ họ làm đề này. Jack đã chắc aim OK. Điểm là 5% chứ không phải 10% — không hỏi tutor điều đó.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn:
      "They agree that Graves' book on seed germination is disappointing because A it fails to cover recent advances in seed science. / B the content is irrelevant for them. / C its focus is very theoretical.",
    questionVi:
      "They agree that Graves' book on seed germination is disappointing because A it fails to cover recent advances in seed science. / B the content is irrelevant for them. / C its focus is very theoretical.",
    modelParaphraseEn:
      "I found it quite hard to follow - lots about the theory, which I hadn't expected. Yes, I'd been hoping for something more practical. It does include references to the recent findings on genetically-modified seeds, though",
    modelParaphraseVi:
      "I found it quite hard to follow - lots about the theory, which I hadn't expected. Yes, I'd been hoping for something more practical. It does include references to the recent findings on genetically-modified seeds, though",
    acceptedAnswers: ["C", "its focus is very theoretical"],
    explanationEn:
      "C = lots about the theory; they wanted something more practical. It does mention recent GM-seed findings, and it would be relevant for this experiment.",
    explanationVi:
      "C = nhiều theory; họ muốn practical hơn. Sách có đề cập phát hiện GM seeds gần đây, và sẽ relevant cho thí nghiệm này.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn:
      "What does Jack say about the article on seed germination by Lee Hall? A The diagrams of plant development are useful. / B The analysis of seed germination statistics is thorough. / C The findings on seed germination after fires are surprising.",
    questionVi:
      "What does Jack say about the article on seed germination by Lee Hall? A The diagrams of plant development are useful. / B The analysis of seed germination statistics is thorough. / C The findings on seed germination after fires are surprising.",
    modelParaphraseEn:
      "His analysis of figures comparing the times of the fires and the proportion of seeds that germinated was done in a lot of detail - very impressive. I think those diagrams were in another article",
    modelParaphraseVi:
      "His analysis of figures comparing the times of the fires and the proportion of seeds that germinated was done in a lot of detail - very impressive. I think those diagrams were in another article",
    acceptedAnswers: ["B", "The analysis of seed germination statistics is thorough"],
    explanationEn:
      "B = analysis of figures in a lot of detail. Jack already knew about post-fire germination; the diagrams were in another article.",
    explanationVi:
      "B = phân tích số liệu rất chi tiết. Jack đã biết nảy mầm sau cháy; diagrams nằm ở bài khác.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Select seeds of different ______ and sizes. (A–H)",
    questionVi: "Select seeds of different ______ and sizes. (A–H)",
    modelParaphraseEn: "they mustn't all be the same size. So, how many sorts do we need? About four different ones?",
    modelParaphraseVi: "they mustn't all be the same size. So, how many sorts do we need? About four different ones?",
    acceptedAnswers: ["G", "types", "sorts"],
    explanationEn: "G = types. Four different sorts / types of seeds, not all the same size.",
    explanationVi: "G = types. Khoảng bốn sorts / types hạt, không cùng size.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Measure and record the ______ and size of each one. (A–H)",
    questionVi: "Measure and record the ______ and size of each one. (A–H)",
    modelParaphraseEn: "for each seed we need to find out how much it weighs, and also measure its dimensions, and we need to keep a careful record of all that",
    modelParaphraseVi: "for each seed we need to find out how much it weighs, and also measure its dimensions, and we need to keep a careful record of all that",
    acceptedAnswers: ["C", "weight"],
    explanationEn: "C = weight. Record how much each seed weighs plus its dimensions / size.",
    explanationVi: "C = weight. Ghi how much it weighs và dimensions / size.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Decide on the ______ to be used. (A–H)",
    questionVi: "Decide on the ______ to be used. (A–H)",
    modelParaphraseEn:
      "we also need to decide how deep we're going to plant the seeds - right on the surface, a few millimetres down, or several centimetres",
    modelParaphraseVi:
      "we also need to decide how deep we're going to plant the seeds - right on the surface, a few millimetres down, or several centimetres",
    acceptedAnswers: ["H", "depths"],
    explanationEn: "H = depths. Surface, a few millimetres, or several centimetres.",
    explanationVi: "H = depths. Mặt đất, vài millimetres, hoặc several centimetres.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Use a different ______ for each seed and label it. (A–H)",
    questionVi: "Use a different ______ for each seed and label it. (A–H)",
    modelParaphraseEn:
      "Do you think we can plant several seeds together in the same plant pot? No, I think we need a different one for each seed. … we'll need to label them",
    modelParaphraseVi:
      "Do you think we can plant several seeds together in the same plant pot? No, I think we need a different one for each seed. … we'll need to label them",
    acceptedAnswers: ["A", "container"],
    explanationEn: "A = container. A different plant pot / container for each seed, then labelled.",
    explanationVi: "A = container. Mỗi hạt một plant pot / container riêng, rồi dán nhãn.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "After about 3 weeks, record the plant's ______. (A–H)",
    questionVi: "After about 3 weeks, record the plant's ______. (A–H)",
    modelParaphraseEn:
      "that'll be about three weeks … Then we see if our plants have come up, and write down how tall they've grown",
    modelParaphraseVi:
      "that'll be about three weeks … Then we see if our plants have come up, and write down how tall they've grown",
    acceptedAnswers: ["E", "height"],
    explanationEn: "E = height. After about three weeks, record how tall the plants have grown.",
    explanationVi: "E = height. Sau khoảng three weeks, ghi how tall they've grown.",
  },
];
