import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "we need to think about how we're going to organise our report",
        "we need to think about how we are going to organise our report",
        "we need to think about how we're going to organize our report",
        "we need to think about how we are going to organize our report",
      ],
    },
    { id: "g2", answers: ["I think we should start by talking about the benefits"] },
    { id: "g3", answers: ["It makes riding a bike very convenient for people"] },
    { id: "g4", answers: ["that puts people on low incomes off"] },
    { id: "g5", answers: ["it's good for their health", "it is good for their health"] },
    { id: "g6", answers: ["But isn't that of less importance", "But is that not of less importance"] },
    { id: "g7", answers: ["Which is the main point"] },
    {
      id: "g8",
      answers: [
        "I'd say it's had less of an impact on noise pollution",
        "I would say it's had less of an impact on noise pollution",
        "I'd say it has had less of an impact on noise pollution",
        "I would say it has had less of an impact on noise pollution",
      ],
    },
    { id: "g9", answers: ["Shall we quickly discuss the recommendations"] },
    {
      id: "g10",
      answers: ["I wouldn't say they're absolutely necessary", "I would not say they are absolutely necessary"],
    },
    {
      id: "g11",
      answers: [
        "Places which haven't invested in that have really struggled",
        "Places which have not invested in that have really struggled",
      ],
    },
    {
      id: "g12",
      answers: [
        "but in some really big cities, competition's beneficial",
        "but in some really big cities, competition is beneficial",
      ],
    },
    { id: "g13", answers: ["Deciding how much to invest is a big question"] },
    { id: "g14", answers: ["People need a lot of persuasion to stop using their cars"] },
    { id: "g15", answers: ["Shall we look at some examples now"] },
    { id: "g16", answers: ["There was already a strong culture of cycling here"] },
    {
      id: "g17",
      answers: ["And yet it's one of the best-used schemes", "And yet it is one of the best-used schemes"],
    },
    {
      id: "g18",
      answers: [
        "I think the organisers lacked vision and ambition there",
        "I think the organizers lacked vision and ambition there",
      ],
    },
  ],
  lines: [
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Now that we've done all the research into bike-sharing schemes in cities around the world, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ". I mean it's great that so many cities have introduced these schemes where anyone can pick up a bike from dozens of different locations and hire it for a few hours. ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Yes, but the costs can add up and " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " in some places." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "I suppose so, but if it means more people in general are cycling rather than driving, then because they're increasing the amount of physical activity they do, ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: "? I mean, doesn't the impact of reduced emissions on air pollution have a more significant effect on people's health?",
        },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "Certainly, in some cities bike-sharing had made a big contribution to that. And also helped to cut the number of cars on the road significantly.",
        },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "gap", gapId: "g7" }, { type: "text", text: "." }] },
    {
      speaker: "AMY",
      segments: [
        { type: "text", text: "Exactly. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " because there are still loads of buses and lorries around." },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "AMY",
      segments: [{ type: "gap", gapId: "g9" }, { type: "text", text: " we're going to make?" }],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "In order to ensure bike-sharing schemes are successful?" }] },
    { speaker: "AMY", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "OK. Well, while I think it's nice to have really state-of-the art bikes with things like GPS, ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "But some technical things are really important – like a fully functional app – so people can make payments and book bikes easily. ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Good point ... Some people say there shouldn't be competing companies offering separate bike-sharing schemes, ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " and anyway one company might not be able to manage the whole thing." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". Cities which have opened loads of new bike lanes at the same time as introducing bike-sharing schemes have generally been more successful – but there are examples of successful schemes where this hasn't happened ... What does matter though – is having a big publicity campaign.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Definitely. If people don't know how to use the scheme or don't understand its benefits, they won't use it. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: "? And say what we think is good or bad about them." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "I suppose we should start with Amsterdam as this was one of the first cities to have a bike-sharing scheme." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". In a way it's strange that there was such a demand for bike-sharing because you'd have thought most people would have used their own bikes.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: " ... Dublin's an interesting example of a success story." }],
    },
    {
      speaker: "AMY",
      segments: [{ type: "text", text: "It must be because the public transport system's quite limited." }],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Not really – there's no underground, but there are trams and a good bus network. I'd say price has a lot to do with it. It's one of the cheapest schemes in Europe to join.",
        },
      ],
    },
    {
      speaker: "AMY",
      segments: [{ type: "text", text: "But the buses are really slow – anyway the weather certainly can't be a factor!" }],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "No – definitely not. The London scheme's been quite successful." }] },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "Yes – it's been a really good thing for the city. The bikes are popular and the whole system is well maintained but it isn't expanding quickly enough.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Basically, not enough's been spent on increasing the number of cycle lanes. Hopefully that'll change.",
        },
      ],
    },
    { speaker: "AMY", segments: [{ type: "text", text: "Yes. Now what about outside Europe?" }] },
    {
      speaker: "JAKE",
      segments: [{ type: "text", text: "Well bike-sharing schemes have taken off in places like Buenos Aires." }],
    },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "Mmm. They built a huge network of cycle lanes to support the introduction of the scheme there, didn't they? It attracted huge numbers of cyclists where previously there were hardly any.",
        },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "An example of good planning." }] },
    { speaker: "AMY", segments: [{ type: "text", text: "Absolutely. New York is a good example of how not to introduce a scheme. When they launched it, it was more than ten times the price of most other schemes." }] },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "More than it costs to take a taxi, Crazy. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "AMY",
      segments: [
        {
          type: "text",
          text: "I think so too. Sydney would be a good example to use. I would have expected it to have grown pretty quickly here.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Yes. I can't quite work out why it hasn't been an instant success like some of the others. It's a shame really.",
        },
      ],
    },
    { speaker: "AMY", segments: [{ type: "text", text: "I know. OK so now we've thought about ..." }] },
  ],
};

export const CAM16_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO most important benefits: B reducing traffic congestion",
    questionVi: "Hai lợi ích quan trọng nhất: B giảm ùn tắc",
    modelParaphraseEn: "helped to cut the number of cars on the road significantly – Which is the main point",
    modelParaphraseVi: "helped to cut the number of cars on the road significantly – Which is the main point",
    acceptedAnswers: ["cut the number of cars", "traffic congestion", "B"],
    explanationEn: "B = fewer cars / congestion. They agree this is the main point.",
    explanationVi: "B = ít xe hơn / giảm ùn tắc. Họ đồng ý đây là điểm chính.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) C improving air quality",
    questionVi: "(cùng danh sách) C cải thiện chất lượng không khí",
    modelParaphraseEn: "doesn't the impact of reduced emissions on air pollution have a more significant effect on people's health?",
    modelParaphraseVi: "doesn't the impact of reduced emissions on air pollution have a more significant effect on people's health?",
    acceptedAnswers: ["reduced emissions", "air pollution", "air quality", "C"],
    explanationEn: "C = air quality / reduced emissions. Fitness matters less; noise still high because of buses and lorries; cost puts some people off.",
    explanationVi: "C = chất lượng không khí / giảm khí thải. Sức khỏe thể chất kém quan trọng hơn; ồn vẫn còn vì xe buýt và xe tải.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO necessities: B The app should be easy to use",
    questionVi: "Hai điều cần thiết: B app phải dễ dùng",
    modelParaphraseEn: "a fully functional app – so people can make payments and book bikes easily",
    modelParaphraseVi: "a fully functional app – so people can make payments and book bikes easily",
    acceptedAnswers: ["fully functional app", "book bikes easily", "B"],
    explanationEn: "B = easy app. GPS is nice but not necessary.",
    explanationVi: "B = app dễ dùng. GPS thì hay nhưng không bắt buộc.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) C Public awareness should be raised",
    questionVi: "(cùng danh sách) C cần tăng nhận thức cộng đồng",
    modelParaphraseEn: "What does matter though – is having a big publicity campaign",
    modelParaphraseVi: "What does matter though – is having a big publicity campaign",
    acceptedAnswers: ["publicity campaign", "public awareness", "C"],
    explanationEn: "C = publicity / awareness. Cycle lanes help but are not always required; competing schemes can work in big cities.",
    explanationVi: "C = chiến dịch truyền thông. Làn xe đạp hữu ích nhưng không luôn bắt buộc; nhiều hãng vẫn được ở thành phố lớn.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Amsterdam — C they are surprised it has been so successful",
    questionVi: "Amsterdam — C họ ngạc nhiên vì thành công",
    modelParaphraseEn: "it's strange that there was such a demand ... And yet it's one of the best-used schemes",
    modelParaphraseVi: "it's strange that there was such a demand ... And yet it's one of the best-used schemes",
    acceptedAnswers: ["strange that there was such a demand", "best-used schemes", "surprised", "C"],
    explanationEn: "C = surprise at success, because people already had their own bikes.",
    explanationVi: "C = ngạc nhiên vì thành công, dù người dân đã có xe riêng.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Dublin — F they disagree about the reasons for its success",
    questionVi: "Dublin — F họ không thống nhất lý do thành công",
    modelParaphraseEn: "It must be because the public transport system's quite limited. Not really ... I'd say price has a lot to do with it",
    modelParaphraseVi: "It must be because the public transport system's quite limited. Not really ... I'd say price has a lot to do with it",
    acceptedAnswers: ["Not really", "disagree", "F"],
    explanationEn: "F = they disagree: Amy says limited public transport; Jake says cheap price (and a good bus network).",
    explanationVi: "F = bất đồng: Amy nói giao thông công cộng hạn chế; Jake nói giá rẻ (và mạng xe buýt tốt).",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "London — D they agree that more investment is required",
    questionVi: "London — D họ đồng ý cần đầu tư thêm",
    modelParaphraseEn: "it isn't expanding quickly enough ... not enough's been spent on increasing the number of cycle lanes",
    modelParaphraseVi: "it isn't expanding quickly enough ... not enough's been spent on increasing the number of cycle lanes",
    acceptedAnswers: ["not enough's been spent", "more investment", "D"],
    explanationEn: "D = more investment needed (cycle lanes). The scheme is already popular and well maintained.",
    explanationVi: "D = cần đầu tư thêm (làn xe đạp). Hệ thống đã phổ biến và được bảo trì tốt.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Buenos Aires — E they think the system has been well designed",
    questionVi: "Buenos Aires — E họ nghĩ hệ thống được thiết kế tốt",
    modelParaphraseEn: "They built a huge network of cycle lanes to support the introduction of the scheme ... An example of good planning",
    modelParaphraseVi: "They built a huge network of cycle lanes to support the introduction of the scheme ... An example of good planning",
    acceptedAnswers: ["good planning", "well designed", "E"],
    explanationEn: "E = well designed / good planning (lanes built to support the scheme).",
    explanationVi: "E = thiết kế tốt / quy hoạch tốt (làm làn xe đạp để hỗ trợ scheme).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "New York — B they think it should be cheaper",
    questionVi: "New York — B họ nghĩ nên rẻ hơn",
    modelParaphraseEn: "it was more than ten times the price of most other schemes ... More than it costs to take a taxi",
    modelParaphraseVi: "it was more than ten times the price of most other schemes ... More than it costs to take a taxi",
    acceptedAnswers: ["ten times the price", "take a taxi", "cheaper", "B"],
    explanationEn: "B = should be cheaper. How-not-to example because launch price was far too high.",
    explanationVi: "B = nên rẻ hơn. Ví dụ không nên làm vì giá lúc ra mắt quá cao.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Sydney — A they agree it has been disappointing",
    questionVi: "Sydney — A họ đồng ý là thất vọng",
    modelParaphraseEn: "I would have expected it to have grown pretty quickly ... I can't quite work out why it hasn't been an instant success",
    modelParaphraseVi: "I would have expected it to have grown pretty quickly ... I can't quite work out why it hasn't been an instant success",
    acceptedAnswers: ["hasn't been an instant success", "disappointing", "A"],
    explanationEn: "A = disappointing – expected fast growth, but it was not an instant success.",
    explanationVi: "A = thất vọng – lẽ ra phải tăng nhanh, nhưng không thành công ngay.",
  },
];
