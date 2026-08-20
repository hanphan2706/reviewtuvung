import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I wanted to ask your advice"] },
    { id: "g2", answers: ["I'd thoroughly recommend it", "I would thoroughly recommend it"] },
    { id: "g3", answers: ["it's great for all ages", "it is great for all ages"] },
    { id: "g4", answers: ["quite physically demanding"] },
    { id: "g5", answers: ["You'll certainly learn more quickly", "You will certainly learn more quickly"] },
    { id: "g6", answers: ["which people don't always realise", "which people do not always realise"] },
    { id: "g7", answers: ["quite a few"] },
    { id: "g8", answers: ["The waves aren't too challenging", "The waves are not too challenging"] },
    { id: "g9", answers: ["I've forgotten the name of them", "I have forgotten the name of them"] },
    { id: "g10", answers: ["I can look them up"] },
    { id: "g11", answers: ["which is less well-known for surfing"] },
    { id: "g12", answers: ["we had a really good time"] },
    { id: "g13", answers: ["it rained practically every day"] },
    { id: "g14", answers: ["It doesn't have the same appeal", "It does not have the same appeal"] },
    { id: "g15", answers: ["it tends to rain more"] },
    { id: "g16", answers: ["it doesn't get too hot", "it does not get too hot"] },
    { id: "g17", answers: ["That's not too bad", "That is not too bad"] },
    { id: "g18", answers: ["get too cold"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Jack, I'm thinking of taking the kids to the seaside on a surfing holiday this summer and ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " – as I know you're such an expert." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Well, I don't know about that, but yes, I've done a bit of surfing over the years. ",
        },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ". I think it's the kind of holiday all the family can enjoy together. The thing about surfing is that ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " and all abilities. My youngest started when he was only three!" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Wow! But it's " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", isn't it? I've heard you need to be pretty fit." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " and won't tire as easily." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well – that should be OK for us. You've been surfing a few times in Ireland, haven't you?",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Yes. There's some great surfing there, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "And which locations would you recommend? – there seem to be " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yes, there are loads. Last year we went to County Donegal. There are several great places to surf there.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "What about in County Clare? I read that's also really good for surfing.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yes, it is. I've been there a few times. Most people go to Lahinch. My kids love it there. ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " and the town is very lively." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Are there good hotels there?" }],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yes – some very nice ones and there are also a few basic hostels and campsites. It's great if you need lessons as the surf schools are excellent.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Sounds good." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yes and there's lots to see in the area – like those well-known cliffs – … ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " …" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh don't worry – " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "I've also been surfing in County Mayo, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", but " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". That was a few years ago when the kids were younger. There's a good surf school at Carrowniskey beach.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "How do you spell that?" }] },
    {
      speaker: "JACK",
      segments: [{ type: "text", text: "C-A-double R-O-W-N-I-S-K-E-Y" }],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "I put the kids into the surf camp they run during the summer for 10-16 year olds.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh right. How long was that for?" }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Three hours every day for a week. It was perfect – they were so tired out after that.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "I can imagine." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "One thing we did while the kids were surfing was to rent some kayaks to have a look around the bay which is nearby. It's really beautiful.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, I'd love to do that." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Now the only time I went to Ireland " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Mmm yes – that can be a problem – but you can surf in the rain, you know.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", somehow." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Well, the weather's been fine the last couple of years when I've been there, but actually, ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " in August than in the spring or autumn. September's my favourite month because the water is warmer then.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "The only problem is that the kids are back to school then." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "I know. But one good thing about Irish summers is that " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". The average temperature is about 19 degrees and it usually doesn't go above 25 degrees.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "That sounds alright. Now what about costs?" }],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Surfing is a pretty cheap holiday really – the only cost is the hire of equipment. You can expect to pay a daily rate of about 30 euros for the hire of a wetsuit and board – but you can save about 40 euros if you hire by the week.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "No. It's important to make sure you get good quality wetsuits – you'll all " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " if you don't. And make sure you also get boots. They keep your feet warm and it's easier to surf with them on too.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK. Well, thanks very much …" }] },
  ],
};

export const CAM17_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Recommends surfing for ______ holidays in the summer",
    questionVi: "Recommends surfing for ______ holidays in the summer",
    modelParaphraseEn: "it's the kind of holiday all the family can enjoy together",
    modelParaphraseVi: "it's the kind of holiday all the family can enjoy together",
    acceptedAnswers: ["family"],
    explanationEn: "Jack recommends surfing as a family holiday that all ages can enjoy together.",
    explanationVi: "Jack khuyên surfing như kỳ nghỉ family – cả nhà mọi lứa tuổi đều chơi được.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Need to be quite ______",
    questionVi: "Need to be quite ______",
    modelParaphraseEn: "it's quite physically demanding … you need to be pretty fit",
    modelParaphraseVi: "it's quite physically demanding … you need to be pretty fit",
    acceptedAnswers: ["fit"],
    explanationEn: "You need to be quite / pretty fit because surfing is physically demanding.",
    explanationVi: "Cần khá fit vì lướt sóng đòi hỏi thể lực.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Lahinch has some good quality ______ and surf schools",
    questionVi: "Lahinch has some good quality ______ and surf schools",
    modelParaphraseEn: "Are there good hotels there? Yes – some very nice ones",
    modelParaphraseVi: "Are there good hotels there? Yes – some very nice ones",
    acceptedAnswers: ["hotels"],
    explanationEn: "Lahinch has good-quality hotels (plus hostels, campsites and excellent surf schools).",
    explanationVi: "Lahinch có hotels chất lượng (cùng hostel, campsite và trường dạy sóng).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Good surf school at ______ beach",
    questionVi: "Good surf school at ______ beach",
    modelParaphraseEn: "There's a good surf school at Carrowniskey beach – C-A-double R-O-W-N-I-S-K-E-Y",
    modelParaphraseVi: "There's a good surf school at Carrowniskey beach – C-A-double R-O-W-N-I-S-K-E-Y",
    acceptedAnswers: ["Carrowniskey"],
    explanationEn: "County Mayo: the surf school is at Carrowniskey beach (spelled out).",
    explanationVi: "County Mayo: trường dạy sóng ở bãi Carrowniskey (đánh vần).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Surf camp lasts for one ______",
    questionVi: "Surf camp lasts for one ______",
    modelParaphraseEn: "Three hours every day for a week",
    modelParaphraseVi: "Three hours every day for a week",
    acceptedAnswers: ["week"],
    explanationEn: "The summer surf camp for 10–16 year olds lasts one week (three hours a day).",
    explanationVi: "Surf camp hè cho 10–16 tuổi kéo dài một week (ba giờ mỗi ngày).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Can also explore the local ______ by kayak",
    questionVi: "Can also explore the local ______ by kayak",
    modelParaphraseEn: "rent some kayaks to have a look around the bay which is nearby",
    modelParaphraseVi: "rent some kayaks to have a look around the bay which is nearby",
    acceptedAnswers: ["bay"],
    explanationEn: "While the children surf, adults can kayak around the nearby bay.",
    explanationVi: "Khi trẻ lướt sóng, người lớn có thể kayak quanh bay gần đó.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Best month to go: ______",
    questionVi: "Best month to go: ______",
    modelParaphraseEn: "September's my favourite month because the water is warmer then",
    modelParaphraseVi: "September's my favourite month because the water is warmer then",
    acceptedAnswers: ["September"],
    explanationEn: "September is best – warmer water; August tends to be rainier than spring or autumn.",
    explanationVi: "September là tháng tốt nhất – nước ấm hơn; August thường mưa hơn spring/autumn.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Average temperature in summer: approx. ______ degrees",
    questionVi: "Average temperature in summer: approx. ______ degrees",
    modelParaphraseEn: "The average temperature is about 19 degrees and it usually doesn't go above 25 degrees",
    modelParaphraseVi: "The average temperature is about 19 degrees and it usually doesn't go above 25 degrees",
    acceptedAnswers: ["19", "nineteen"],
    explanationEn: "Irish summers average about 19 degrees (rarely above 25).",
    explanationVi: "Hè Ireland trung bình khoảng 19 độ (hiếm khi trên 25).",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Wetsuit and surfboard: ______ euros per day",
    questionVi: "Wetsuit and surfboard: ______ euros per day",
    modelParaphraseEn: "a daily rate of about 30 euros for the hire of a wetsuit and board",
    modelParaphraseVi: "a daily rate of about 30 euros for the hire of a wetsuit and board",
    acceptedAnswers: ["30", "thirty"],
    explanationEn: "Hire is about 30 euros a day for wetsuit and board (about 40 euros cheaper by the week).",
    explanationVi: "Thuê khoảng 30 euro/ngày cho wetsuit và ván (thuê theo tuần rẻ hơn khoảng 40 euro).",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Also advisable to hire ______ for warmth",
    questionVi: "Also advisable to hire ______ for warmth",
    modelParaphraseEn: "make sure you also get boots. They keep your feet warm and it's easier to surf with them on too",
    modelParaphraseVi: "make sure you also get boots. They keep your feet warm and it's easier to surf with them on too",
    acceptedAnswers: ["boots"],
    explanationEn: "Hire boots as well – they keep your feet warm and make surfing easier.",
    explanationVi: "Nên thuê boots luôn – giữ ấm chân và lướt dễ hơn.",
  },
];
