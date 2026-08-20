import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["where she lives"] },
    { id: "g2", answers: ["for a few hours"] },
    { id: "g3", answers: ["the idea caught on"] },
    { id: "g4", answers: ["still a toddler"] },
    { id: "g5", answers: ["two years of campaigning"] },
    {
      id: "g6",
      answers: ["close our road for longer"],
    },
    { id: "g7", answers: ["The council have provided special signs"] },
    {
      id: "g8",
      answers: ["get the police involved"],
    },
    {
      id: "g9",
      answers: [
        "completely closed to cars",
      ],
    },
    { id: "g10", answers: ["only residents' cars are allowed", "only residents cars are allowed"] },
    {
      id: "g11",
      answers: ["just give it a go"],
    },
    {
      id: "g12",
      answers: ["positive reaction of residents"],
    },
    { id: "g13", answers: ["they're a tiny minority", "they are a tiny minority"] },
    { id: "g14", answers: ["getting fresh air"] },
    { id: "g15", answers: ["without being supervised by their parents"] },
    { id: "g16", answers: ["a related project"] },
    { id: "g17", answers: ["not to use their cars"] },
    { id: "g18", answers: ["really unpopular"] },
  ],
  lines: [
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "My guest on the show today is Alice Riches who started the Street Play Scheme " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " in Beechwood Road." },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        {
          type: "text",
          text: "For those of you that don't already know – Street Play involves local residents closing off their street ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " so that children have a chance to play in the street safely." },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "She started it in her own street, Beechwood Road, and " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", and there are now Street Play Schemes all over the city." },
      ],
    },
    { speaker: "PRESENTER", segments: [{ type: "text", text: "So when did you actually start the scheme, Alice?" }] },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "Well, I first had the idea when my oldest child was " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", so that's about six years ago now – but it took at least " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " before we were actually able to make it happen." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "So the scheme's been up and running for three years now. We'd love to be able to " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " – for the whole weekend, from Saturday morning until Sunday evening, for example.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "At the moment it's just once a week. But when we started it was only once a month. But we're working on it.",
        },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [{ type: "text", text: "So what actually happens when Beechwood Road is closed?" }],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "We have volunteer wardens, mostly parents but some elderly residents too, who block off our road at either end. ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " but there's always a volunteer there to explain what's happening to any motorists." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "Generally, they're fine about it – we've only had to " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " once or twice." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "Now I should explain that the road isn't " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". But " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "If people really need to get in or out of Beechwood Road, it's not a problem – as long as they drive at under 20 kilometres per hour. But most people just decide not to use their cars during this time, or they park in another street. The wardens are only there to stop through traffic.",
        },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [{ type: "text", text: "So can anyone apply to get involved in Street Play?" }],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Absolutely – we want to include all kids in the city – especially those who live on busy roads. It's here that demand is greatest.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Obviously, there isn't such demand in wealthier areas where the children have access to parks or large gardens – or in the suburbs where there are usually more places for children to play outside. I'd recommend that anyone listening who likes the idea should ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "We've been surprised by the " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " all over the city. And that's not just parents." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "There are always a few who complain but " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". On the whole everyone is very supportive and say they're very happy to see children out on the street – even if it does get quite noisy.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "There have been so many benefits of Street Play for the kids. Parents really like the fact that the kids are ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " instead of sitting staring at a computer screen, even if they're not doing anything particularly energetic.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "And of course it's great that kids can play with their friends outside " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " – but for me the biggest advantage is that kids develop confidence in themselves to be outside without their parents.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "The other really fantastic thing is that children get to know the adults in the street – it's like having a big extended family.",
        },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "It certainly does have a lot of benefits. I want to move on now and ask you about " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " in King Street." },
      ],
    },
    { speaker: "ALICE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Well this was an experiment I was involved in where local residents decided to try and reduce the traffic along King Street, which is the busiest main road in our area, by persuading people ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " for one day." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "We thought about making people pay more for parking – but we decided that would be " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " – so instead we just stopped people from parking on King Street but left the other car parks open.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "It was surprising how much of a difference all this made. As we'd predicted, air quality was significantly better but what I hadn't expected was how much quieter it would be – even with the buses still running.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Of course everyone said they felt safer but we were actually amazed that sales in the shops went up considerably that day – we thought there'd be fewer people out shopping – not more.",
        },
      ],
    },
    { speaker: "PRESENTER", segments: [{ type: "text", text: "That's really interesting so the fact that …" }] },
  ],
};

export const CAM15_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "When did the Street Play Scheme first take place? A two years ago / B three years ago / C six years ago",
    questionVi: "When did the Street Play Scheme first take place?",
    modelParaphraseEn: "the scheme's been up and running for three years now",
    modelParaphraseVi: "the scheme's been up and running for three years now",
    acceptedAnswers: ["B", "three years ago", "three years"],
    explanationEn: "B = three years ago. Six years is when Alice first had the idea; two years was the campaigning wait.",
    explanationVi: "B = three years ago. Sáu năm là lúc nảy ra ý tưởng; hai năm là thời gian vận động.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "How often is Beechwood Road closed now? A once a week / B Saturdays and Sundays / C once a month",
    questionVi: "How often is Beechwood Road closed now?",
    modelParaphraseEn: "At the moment it's just once a week. But when we started it was only once a month",
    modelParaphraseVi: "At the moment it's just once a week. But when we started it was only once a month",
    acceptedAnswers: ["A", "once a week"],
    explanationEn: "A = once a week now. The whole weekend is a wish; once a month was the original frequency.",
    explanationVi: "A = once a week hiện nay. Cả weekend là mong muốn; once a month là lúc mới bắt đầu.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Who is responsible for closing the road? A a council official / B the police / C local wardens",
    questionVi: "Who is responsible for closing the road?",
    modelParaphraseEn: "volunteer wardens, mostly parents but some elderly residents too, who block off our road at either end",
    modelParaphraseVi: "volunteer wardens, mostly parents but some elderly residents too, who block off our road at either end",
    acceptedAnswers: ["C", "local wardens", "wardens"],
    explanationEn: "C = local volunteer wardens. The council only supplies signs; police were involved once or twice.",
    explanationVi: "C = local volunteer wardens. Hội đồng chỉ cung cấp biển; police chỉ can thiệp một-hai lần.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Residents who want to use their cars: A park in another street / B must drive very slowly / C need a warden's permission",
    questionVi: "Residents who want to use their cars",
    modelParaphraseEn: "it's not a problem – as long as they drive at under 20 kilometres per hour",
    modelParaphraseVi: "it's not a problem – as long as they drive at under 20 kilometres per hour",
    acceptedAnswers: ["B", "must drive very slowly", "under 20 kilometres per hour"],
    explanationEn: "B = drive very slowly (under 20 km/h). Parking elsewhere is optional; no warden permission is required.",
    explanationVi: "B = lái rất chậm (under 20 km/h). Đỗ phố khác là tuỳ chọn; không cần phép warden.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Street Play Schemes are most needed in: A wealthy areas / B quiet suburban areas / C areas with heavy traffic",
    questionVi: "Street Play Schemes are most needed in",
    modelParaphraseEn: "especially those who live on busy roads. It's here that demand is greatest",
    modelParaphraseVi: "especially those who live on busy roads. It's here that demand is greatest",
    acceptedAnswers: ["C", "areas with heavy traffic", "busy roads"],
    explanationEn: "C = busy / heavy-traffic roads. Wealthy areas and suburbs have parks or other places to play.",
    explanationVi: "C = busy / heavy-traffic roads. Khu giàu và ngoại ô đã có công viên hoặc chỗ chơi khác.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Reaction of residents who are not parents: A unhappy at first / B like seeing children play / C surprised by lack of noise",
    questionVi: "Reaction of residents who are not parents",
    modelParaphraseEn: "they're very happy to see children out on the street – even if it does get quite noisy",
    modelParaphraseVi: "they're very happy to see children out on the street – even if it does get quite noisy",
    acceptedAnswers: ["B", "like seeing children play", "happy to see children"],
    explanationEn: "B = they like seeing children play. Complainers are a tiny minority; noise is acknowledged, not lacking.",
    explanationVi: "B = thích thấy trẻ chơi. Người phàn nàn là thiểu số; có ồn chứ không phải thiếu tiếng ồn.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "TWO most important benefits for children: B increased sense of independence",
    questionVi: "Hai lợi ích quan trọng nhất: B increased sense of independence",
    modelParaphraseEn: "the biggest advantage is that kids develop confidence in themselves to be outside without their parents",
    modelParaphraseVi: "the biggest advantage is that kids develop confidence in themselves to be outside without their parents",
    acceptedAnswers: ["B", "independence", "confidence"],
    explanationEn: "B = independence / confidence outside without parents. Fresh air is liked but not Alice's top benefit.",
    explanationVi: "B = independence / confidence khi ở ngoài không có bố mẹ. Fresh air được thích nhưng không phải lợi ích hàng đầu của Alice.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) D opportunity to be part of a community",
    questionVi: "(cùng danh sách) D opportunity to be part of a community",
    modelParaphraseEn: "children get to know the adults in the street – it's like having a big extended family",
    modelParaphraseVi: "children get to know the adults in the street – it's like having a big extended family",
    acceptedAnswers: ["D", "community", "extended family"],
    explanationEn: "D = community / extended family. Playing with friends is mentioned, but the key extra is knowing street adults.",
    explanationVi: "D = community / extended family. Chơi với bạn được nhắc, nhưng điểm then chốt là biết người lớn trên phố.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "TWO surprising King Street results: A more shoppers",
    questionVi: "Hai kết quả King Street gây bất ngờ: A more shoppers",
    modelParaphraseEn: "we were actually amazed that sales in the shops went up considerably that day",
    modelParaphraseVi: "we were actually amazed that sales in the shops went up considerably that day",
    acceptedAnswers: ["A", "more shoppers", "sales went up"],
    explanationEn: "A = more shoppers / sales went up — they had expected fewer shoppers.",
    explanationVi: "A = more shoppers / sales went up — họ tưởng sẽ ít người mua hơn.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) E less noise pollution",
    questionVi: "(cùng danh sách) E less noise pollution",
    modelParaphraseEn: "what I hadn't expected was how much quieter it would be – even with the buses still running",
    modelParaphraseVi: "what I hadn't expected was how much quieter it would be – even with the buses still running",
    acceptedAnswers: ["E", "less noise", "quieter"],
    explanationEn: "E = quieter / less noise. Better air and feeling safer were predicted, not surprising.",
    explanationVi: "E = quieter / less noise. Không khí tốt hơn và cảm giác an toàn đã được dự đoán, không bất ngờ.",
  },
];
