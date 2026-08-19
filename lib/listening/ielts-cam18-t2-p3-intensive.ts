import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["shall we make a start"] },
    { id: "g2", answers: ["We haven't got that much time left", "We have not got that much time left"] },
    { id: "g3", answers: ["I'd never even heard of", "I had never even heard of"] },
    { id: "g4", answers: ["a long time ago"] },
    { id: "g5", answers: ["such devastating consequences"] },
    { id: "g6", answers: ["It was great there were", "it was great there were"] },
    { id: "g7", answers: ["That's right", "That is right"] },
    { id: "g8", answers: ["the main focus of"] },
    { id: "g9", answers: ["pretty consistent account"] },
    { id: "g10", answers: ["I was surprised"] },
    { id: "g11", answers: ["that's true", "that is true"] },
    { id: "g12", answers: ["Must have been very weird"] },
    { id: "g13", answers: ["Oh right"] },
    { id: "g14", answers: ["You'd expect that", "You would expect that"] },
    { id: "g15", answers: ["I found all that hard to believe too"] },
    { id: "g16", answers: ["We should run through"] },
    { id: "g17", answers: ["That was horrible"] },
    { id: "g18", answers: ["Astonishing, really", "Astonishing really"] },
  ],
  lines: [
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "So, Michelle, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " on our presentation? " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "text", text: "No, Adam. But at least we've done all the background reading. I found it really interesting – " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " the Laki eruption before this." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Me neither. I suppose 1783 is " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "text", text: "But it was a huge eruption and it had " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " so many primary sources to look at. It really gives you a sense of how catastrophic the volcano was. People were really trying to make sense of the science for the first time.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". But what I found more significant was how it impacted directly and indirectly on political events, as well as having massive social and economic consequences.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "I know. That should be " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " our presentation." },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "The observations made by people at the time were interesting, weren't they? I mean, they all gave a " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " of what happened, even if they didn't always use the same terminology." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " there were so many weather stations established by that time – so, you know, you can see how the weather changed, often by the hour.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "Right. Writers at the time talked about the Laki haze to describe the volcanic fog that spread across Europe. They all realised that this wasn't the sort of fog they were used to – and of course this was in pre-industrial times – so they hadn't experienced sulphur-smelling fog before.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "Reports from the period blamed the haze for an increase in headaches, respiratory issues and asthma attacks. And they all describe how it covered the sun and made it look a strange red colour.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [{ type: "gap", gapId: "g12" }, { type: "text", text: "." }],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "It's interesting that Benjamin Franklin wrote about the haze. Did you read that? He was the American ambassador in Paris at the time.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "Yeah. At first no one realised that the haze was caused by the volcanic eruption in Iceland.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "It was Benjamin Franklin who realised that before anyone else.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "He's often credited with that, apparently. But a French naturalist beat him to it – I can't remember his name. I'd have to look it up. Then other naturalists had the same idea – all independently of each other.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". We should talk about the immediate impact of the eruption, which was obviously enormous – especially in Iceland, where so many people died.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Mmm. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " – and the fact that the volcanic ash drifted so swiftly – but not that the effects would go on for so long. Or that two years after the eruption, strange weather events were being reported as far away as North America and North Africa.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "text", text: "No. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". It must have been terrible – and there was nothing anyone could do about it, even if they knew the ash cloud was coming in their direction.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " some of the terrible consequences of the eruption experienced in different countries. There's quite a varied range.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "Starting with Iceland, where the impact on farming was devastating.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "Mmm. One of the most dramatic things there was the effect on livestock as they grazed in the fields. They were poisoned because they ate vegetation that had been contaminated with fluorine as a result of the volcanic fallout.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". In Egypt, the bizarre weather patterns led to a severe drought and as a result the Nile didn't flood, which meant the crops all failed.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "It's so far from where the eruption happened and yet the famine there led to more people dying than any other country. It was worse than the plague.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "OK. Then in the UK the mortality rate went up a lot – presumably from respiratory illnesses. According to one report it was about double the usual number and included an unusually high percentage of people under the age of 25.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        {
          type: "text",
          text: "Mmm. I think people will be surprised to hear that the weather in the USA was badly affected too. George Washington even makes a note in his diary that they were snowbound until March in Virginia. That was before he became president.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "Yes, and there was ice floating down the Mississippi, which was unprecedented.",
        },
      ],
    },
    {
      speaker: "MICHELLE",
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Anyway, what do you think …" },
      ],
    },
  ],
};

export const CAM18_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Why is the 1783 Laki eruption so important? A most severe / B led to formal study / C profound effect on society",
    questionVi: "Vì sao Laki 1783 quan trọng?",
    modelParaphraseEn: "it impacted on political events, as well as having massive social and economic consequences",
    modelParaphraseVi: "it impacted on political events, as well as having massive social and economic consequences",
    acceptedAnswers: ["political events", "social and economic", "profound", "society"],
    explanationEn: "C = political + social + economic impact is “more significant” than first-time science. Not that it was the most severe, nor that it founded volcanology.",
    explanationVi: "C = tác động chính trị + xã hội + kinh tế “quan trọng hơn” việc lần đầu nghiên cứu khoa học.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "What surprised Adam about observations? A number of places / B contradictions / C lack of scientific data",
    questionVi: "Điều gì ở quan sát thời đó khiến Adam ngạc nhiên?",
    modelParaphraseEn: "I was surprised there were so many weather stations established by that time",
    modelParaphraseVi: "I was surprised there were so many weather stations established by that time",
    acceptedAnswers: ["so many weather stations", "number of places", "by the hour"],
    explanationEn: "A = many weather stations (lots of places recording). Accounts were consistent, not contradictory.",
    explanationVi: "A = nhiều trạm khí tượng (nhiều nơi ghi). Ghi chép thống nhất, không mâu thuẫn.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Contemporary sources on the Laki haze: A like ordinary fog / B health issues / C blocked the sun for weeks",
    questionVi: "Nguồn thời đó nói gì về khói Laki?",
    modelParaphraseEn: "blamed the haze for an increase in headaches, respiratory issues and asthma attacks",
    modelParaphraseVi: "blamed the haze for an increase in headaches, respiratory issues and asthma attacks",
    acceptedAnswers: ["headaches", "respiratory", "asthma", "health issues"],
    explanationEn: "B = health problems. They said it was NOT ordinary fog; the sun looked red, but it was not blocked for weeks.",
    explanationVi: "B = vấn đề sức khỏe. Họ nói đây KHÔNG phải sương mù thường; mặt trời đỏ, không phải bị che hàng tuần.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Adam corrects Michelle: Franklin A wrong conclusion / B first to identify the cause / C supported other observers",
    questionVi: "Adam sửa Michelle về Franklin:",
    modelParaphraseEn: "He's often credited with that, but a French naturalist beat him to it",
    modelParaphraseVi: "He's often credited with that, but a French naturalist beat him to it",
    acceptedAnswers: ["beat him to it", "French naturalist", "not the first"],
    explanationEn: "B = Michelle said Franklin realised it first; Adam says a French naturalist got there earlier. Franklin's conclusion was correct.",
    explanationVi: "B = Michelle nói Franklin nhận ra trước; Adam bảo nhà tự nhiên học Pháp làm trước. Kết luận của Franklin đúng.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "TWO surprising issues: A how widespread / B how long-lasting",
    questionVi: "Hai điều bất ngờ: A lan rộng / B kéo dài",
    modelParaphraseEn: "not that the effects would go on for so long",
    modelParaphraseVi: "not that the effects would go on for so long",
    acceptedAnswers: ["go on for so long", "long-lasting", "two years after"],
    explanationEn: "B = effects lasting so long (still reported two years later). Deaths in Iceland and the speed of the ash were expected.",
    explanationVi: "B = hậu quả kéo dài (hai năm sau vẫn ghi nhận). Số chết ở Iceland và tốc độ tro thì họ đã đoán được.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "(same list) A how widespread the effects were",
    questionVi: "(cùng danh sách) A tác động lan rộng",
    modelParaphraseEn: "strange weather events as far away as North America and North Africa",
    modelParaphraseVi: "strange weather events as far away as North America and North Africa",
    acceptedAnswers: ["as far away as", "North America", "North Africa", "widespread"],
    explanationEn: "A = effects reached North America and North Africa — surprisingly far from Iceland.",
    explanationVi: "A = tác động tới Bắc Mỹ và Bắc Phi — xa Iceland một cách bất ngờ.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Iceland — A most deaths / D animals suffered from a sickness / B impact on agriculture predictable",
    questionVi: "Iceland — nhận xét nào?",
    modelParaphraseEn: "livestock were poisoned because they ate vegetation contaminated with fluorine",
    modelParaphraseVi: "livestock were poisoned because they ate vegetation contaminated with fluorine",
    acceptedAnswers: ["livestock", "poisoned", "fluorine", "sickness"],
    explanationEn: "D = animals got sick from poisoned grazing. Farming damage is mentioned, but the distinctive comment is livestock poisoning.",
    explanationVi: "D = gia súc bị bệnh vì ăn cây nhiễm fluorine. Nông nghiệp bị hại, nhưng điểm đặc trưng là gia súc bị độc.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Egypt — A most severe loss of life",
    questionVi: "Ai Cập — A thiệt hại nhân mạng nặng nhất",
    modelParaphraseEn: "the famine there led to more people dying than any other country – worse than the plague",
    modelParaphraseVi: "the famine there led to more people dying than any other country – worse than the plague",
    acceptedAnswers: ["more people dying", "any other country", "famine", "most severe"],
    explanationEn: "A = Egypt had the highest death toll from famine, even though it was far from the eruption.",
    explanationVi: "A = Ai Cập chết nhiều nhất vì đói, dù rất xa nơi phun trào.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "UK — C significant increase in deaths of young people",
    questionVi: "Anh — C tăng tử vong ở người trẻ",
    modelParaphraseEn: "mortality rate about double – an unusually high percentage of people under the age of 25",
    modelParaphraseVi: "mortality rate about double – an unusually high percentage of people under the age of 25",
    acceptedAnswers: ["under the age of 25", "mortality rate", "young people", "double"],
    explanationEn: "C = deaths roughly doubled, with an unusually high share under 25.",
    explanationVi: "C = tử vong khoảng gấp đôi, tỷ lệ người dưới 25 bất thường.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "USA — F a particularly harsh winter",
    questionVi: "Mỹ — F mùa đông đặc biệt khắc nghiệt",
    modelParaphraseEn: "snowbound until March in Virginia – ice floating down the Mississippi, which was unprecedented",
    modelParaphraseVi: "snowbound until March in Virginia – ice floating down the Mississippi, which was unprecedented",
    acceptedAnswers: ["snowbound", "ice", "Mississippi", "harsh winter"],
    explanationEn: "F = unusually harsh winter (snow till March; ice on the Mississippi).",
    explanationVi: "F = mùa đông khắc nghiệt (tuyết đến tháng 3; băng trên sông Mississippi).",
  },
];
