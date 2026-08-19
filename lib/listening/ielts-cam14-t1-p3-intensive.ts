import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like you to share your ideas", "I would like you to share your ideas"] },
    { id: "g2", answers: ["I'm glad we chose quite a specific topic", "I am glad we chose quite a specific topic"] },
    { id: "g3", answers: ["It made it much easier to find relevant information"] },
    { id: "g4", answers: ["more than half the world's population lives in cities now"] },
    { id: "g5", answers: ["I'd not realised that before", "I had not realised that before", "I'd not realized that before"] },
    { id: "g6", answers: ["a lot of them are built at places where rivers come out into the sea"] },
    { id: "g7", answers: ["as the city expands, agriculture and industry tend to spread further inland"] },
    { id: "g8", answers: ["Did you read that article about Miami"] },
    { id: "g9", answers: ["they spent quite a lot of money on them"] },
    { id: "g10", answers: ["The whole design was faulty"] },
    {
      id: "g11",
      answers: [
        "they're aiming to stop disposing of waste into the ocean over the next ten years",
        "they are aiming to stop disposing of waste into the ocean over the next ten years",
      ],
    },
    { id: "g12", answers: ["in the long term they need to consider the whole ecosystem"] },
    {
      id: "g13",
      answers: [
        "coastal cities can't deal with their problems on their own",
        "coastal cities cannot deal with their problems on their own",
      ],
    },
    {
      id: "g14",
      answers: [
        "it's going to be a long time before countries come to a decision",
        "it is going to be a long time before countries come to a decision",
      ],
    },
    { id: "g15", answers: ["It's only fifteen minutes", "It is only fifteen minutes"] },
    { id: "g16", answers: ["the other students will already know a bit about it"] },
    { id: "g17", answers: ["We could have some maps of different cities"] },
    {
      id: "g18",
      answers: ["That'd be interesting, if we have time", "That would be interesting, if we have time"],
    },
  ],
  lines: [
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "OK, so what I'd like you to do now is to talk to your partner about your presentations on urban planning. You should have done most of the reading now, so ",
        },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", and talk about the structure of your presentation and what you need to do next.",
        },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        { type: "text", text: "OK Rob. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " – cities built next to the sea. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "Yeah. And cities are growing so quickly – I mean, we know that " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        {
          type: "text",
          text: "Yeah, though that's all cities, not just ones on the coast. But most of the biggest cities are actually built by the sea. ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "Nor me. And what's more, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". But apparently this can be a problem." },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "Why?" }] },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " along the rivers, and so agriculture moves even further inland up the river. That's not necessarily a problem, except it means more and more pollutants are discharged into the rivers.",
        },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "So these are brought downstream to the cities?" }] },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "Right. Hmm. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", on the east coast of the USA?" },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "No." }] },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "Well, apparently back in the 1950s they built channels to drain away the water in case of flooding.",
        },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "Sounds sensible." }] },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". But what they didn't take into account was global warming. So they built the drainage channels too close to sea level, and now sea levels are rising, they're more or less useless. If there's a lot of rain, the water can't run away, there's nowhere for it to go. ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "So what are the authorities doing about it now?" }] },
    {
      speaker: "ROB",
      segments: [
        { type: "text", text: "I don't know. I did read that " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CARLA",
      segments: [{ type: "text", text: "But that won't help with flood prevention now, will it?" }],
    },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "No. Really they just need to find the money for something to replace the drainage channels, in order to protect against flooding now. But ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        { type: "text", text: "Right. Really, though, " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", can they? I mean, they've got to start acting together at an international level instead of just doing their own thing.",
        },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "Absolutely. The thing is, everyone knows what the problems are and environmentalists have a pretty good idea of what we should be doing about them, so they should be able to work together to some extent. But ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " on what principles they're prepared to abide by." },
      ],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "Yes, if they ever do." }] },
    {
      speaker: "CARLA",
      segments: [
        { type: "text", text: "So I think we've probably got enough for our presentation. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "OK. So I suppose we'll begin with some general historical background about why coastal cities were established. But we don't want to spend too long on that, ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". It's all to do with communications and so on." },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        {
          type: "text",
          text: "Yes. We should mention some geographical factors, things like wetlands and river estuaries and coastal erosion and so on. ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " with these features marked." },
      ],
    },
    {
      speaker: "ROB",
      segments: [{ type: "text", text: "On a handout you mean? Or some slides everyone can see?" }],
    },
    { speaker: "CARLA", segments: [{ type: "text", text: "Yeah, that would be better." }] },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "It'd be good to go into past mistakes in a bit more detail. Did you read that case study of the problems there were in New Orleans with flooding a few years ago?",
        },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        {
          type: "text",
          text: "Yes. We could use that as the basis for that part of the talk. I don't think the other students will have read it, but they'll remember hearing about the flooding at the time.",
        },
      ],
    },
    { speaker: "ROB", segments: [{ type: "text", text: "OK. So that's probably enough background." }] },
    {
      speaker: "CARLA",
      segments: [
        {
          type: "text",
          text: "So then we'll go on to talk about what action's being taken to deal with the problems of coastal cities.",
        },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        {
          type: "text",
          text: "OK. What else do we need to talk about? Maybe something on future risks, looking more at the long term, if populations continue to grow.",
        },
      ],
    },
    {
      speaker: "CARLA",
      segments: [
        { type: "text", text: "Yeah. We'll need to do a bit of work there, I haven't got much information, have you?" },
      ],
    },
    {
      speaker: "ROB",
      segments: [{ type: "text", text: "No. We'll need to look at some websites. Shouldn't take too long." }],
    },
    {
      speaker: "CARLA",
      segments: [
        {
          type: "text",
          text: "OK. And I think we should end by talking about international implications. Maybe we could ask people in the audience. We've got people from quite a lot of different places.",
        },
      ],
    },
    {
      speaker: "ROB",
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". So now shall we …" },
      ],
    },
  ],
};

export const CAM14_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Carla and Rob were surprised to learn that coastal cities A contain nearly half the world’s population / B include most of the world’s largest cities / C are growing twice as fast as other cities",
    questionVi: "Carla and Rob were surprised to learn that coastal cities A contain nearly half the world’s population / B include most of the world’s largest cities / C are growing twice as fast as other cities",
    modelParaphraseEn: "most of the biggest cities are actually built by the sea. I'd not realised that before. Nor me",
    modelParaphraseVi: "most of the biggest cities are actually built by the sea. I'd not realised that before. Nor me",
    acceptedAnswers: ["B", "include most of the world’s largest cities"],
    explanationEn: "B = most of the biggest cities are by the sea (they had not realised). A is all cities, not only coastal.",
    explanationVi: "B = hầu hết thành phố lớn nhất nằm ven biển (họ chưa biết). A là mọi thành phố, không chỉ ven biển.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "According to Rob, building coastal cities near to rivers A may bring pollution to the cities / B may reduce the land available for agriculture / C may mean the countryside is spoiled by industry",
    questionVi: "According to Rob, building coastal cities near to rivers A may bring pollution to the cities / B may reduce the land available for agriculture / C may mean the countryside is spoiled by industry",
    modelParaphraseEn: "more and more pollutants are discharged into the rivers … So these are brought downstream to the cities?",
    modelParaphraseVi: "more and more pollutants are discharged into the rivers … So these are brought downstream to the cities?",
    acceptedAnswers: ["A", "may bring pollution to the cities"],
    explanationEn: "A = pollutants go downstream into the cities. Agriculture moving inland is mentioned, not as lost farmland (B).",
    explanationVi: "A = pollutants trôi xuống thành phố. Nông nghiệp dời sâu hơn không phải mất đất (B).",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Miami drainage channels in the 1950s: A not enough of them / B unsuitable materials / C did not allow for climate change",
    questionVi: "Miami drainage channels in the 1950s: A not enough of them / B unsuitable materials / C did not allow for climate change",
    modelParaphraseEn: "what they didn't take into account was global warming. So they built the drainage channels too close to sea level",
    modelParaphraseVi: "what they didn't take into account was global warming. So they built the drainage channels too close to sea level",
    acceptedAnswers: ["C", "They did not allow for the effects of climate change."],
    explanationEn: "C = they ignored global warming / sea-level rise, so the channels are now useless.",
    explanationVi: "C = không tính global warming / mực nước biển, nên kênh hiện vô dụng.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "What should Miami authorities do immediately? A restore ecosystems / B pay for a new flood prevention system / C stop disposing of waste into the ocean",
    questionVi: "What should Miami authorities do immediately? A restore ecosystems / B pay for a new flood prevention system / C stop disposing of waste into the ocean",
    modelParaphraseEn: "they just need to find the money for something to replace the drainage channels, in order to protect against flooding now",
    modelParaphraseVi: "they just need to find the money for something to replace the drainage channels, in order to protect against flooding now",
    acceptedAnswers: ["B", "pay for a new flood prevention system"],
    explanationEn: "B = pay to replace the drainage channels now. Stopping ocean waste won't help flooding now; ecosystems are long-term.",
    explanationVi: "B = bỏ tiền thay hệ thống chống lụt ngay. Ngừng xả rác không giúp lụt; ecosystem là dài hạn.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Priority for international action: A greater coordination of activities / B more sharing of information / C agreement on shared policies",
    questionVi: "Priority for international action: A greater coordination of activities / B more sharing of information / C agreement on shared policies",
    modelParaphraseEn: "they've got to start acting together at an international level … they should be able to work together to some extent",
    modelParaphraseVi: "they've got to start acting together at an international level … they should be able to work together to some extent",
    acceptedAnswers: ["A", "greater coordination of activities"],
    explanationEn: "A = work together / act together. Shared principles (C) will take a long time, if ever.",
    explanationVi: "A = hành động cùng nhau. Thỏa thuận nguyên tắc chung (C) còn lâu, nếu có.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Historical background: A use visuals / B keep it short / C involve other students / F focus on one example / G do online research",
    questionVi: "Historical background: A use visuals / B keep it short / C involve other students / F focus on one example / G do online research",
    modelParaphraseEn: "we don't want to spend too long on that, the other students will already know a bit about it",
    modelParaphraseVi: "we don't want to spend too long on that, the other students will already know a bit about it",
    acceptedAnswers: ["B", "keep it short"],
    explanationEn: "B = keep it short — others already know some of the historical background.",
    explanationVi: "B = keep it short — bạn khác đã biết một phần historical background.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Geographical factors: A use visuals / E provide a handout",
    questionVi: "Geographical factors: A use visuals / E provide a handout",
    modelParaphraseEn: "We could have some maps of different cities with these features marked. On a handout you mean? Or some slides everyone can see? Yeah, that would be better",
    modelParaphraseVi: "We could have some maps of different cities with these features marked. On a handout you mean? Or some slides everyone can see? Yeah, that would be better",
    acceptedAnswers: ["A", "use visuals"],
    explanationEn: "A = slides / maps everyone can see (better than a handout).",
    explanationVi: "A = slides / maps mọi người đều thấy (hơn handout).",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Past mistakes: F focus on one example",
    questionVi: "Past mistakes: F focus on one example",
    modelParaphraseEn: "case study of the problems there were in New Orleans … We could use that as the basis for that part of the talk",
    modelParaphraseVi: "case study of the problems there were in New Orleans … We could use that as the basis for that part of the talk",
    acceptedAnswers: ["F", "focus on one example"],
    explanationEn: "F = use the New Orleans flooding case study as the basis (one example).",
    explanationVi: "F = dùng case study lụt New Orleans làm cơ sở (một ví dụ).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Future risks: G do online research",
    questionVi: "Future risks: G do online research",
    modelParaphraseEn: "I haven't got much information, have you? No. We'll need to look at some websites",
    modelParaphraseVi: "I haven't got much information, have you? No. We'll need to look at some websites",
    acceptedAnswers: ["G", "do online research"],
    explanationEn: "G = look at some websites (they lack information on future risks).",
    explanationVi: "G = xem websites (thiếu thông tin về future risks).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "International implications: C involve other students",
    questionVi: "International implications: C involve other students",
    modelParaphraseEn: "Maybe we could ask people in the audience. We've got people from quite a lot of different places",
    modelParaphraseVi: "Maybe we could ask people in the audience. We've got people from quite a lot of different places",
    acceptedAnswers: ["C", "involve other students"],
    explanationEn: "C = ask people in the audience from different places (if they have time).",
    explanationVi: "C = hỏi audience từ nhiều nơi (nếu còn thời gian).",
  },
];
