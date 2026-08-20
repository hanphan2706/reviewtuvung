import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["getting on with the reading"] },
    {
      id: "g2",
      answers: ["there's so much of it", "there is so much of it"],
    },
    {
      id: "g3",
      answers: ["popular area of research"],
    },
    { id: "g4", answers: ["no robust evidence"] },
    { id: "g5", answers: ["what previous research has shown"] },
    { id: "g6", answers: ["over a hundred years"] },
    { id: "g7", answers: ["some of the typical traits"] },
    {
      id: "g8",
      answers: [
        "as far as my family goes",
      ],
    },
    {
      id: "g9",
      answers: ["relate to my own experience"],
    },
    { id: "g10", answers: ["nurture versus nature"] },
    { id: "g11", answers: ["That does seem a bit harsh", "that does seem a bit harsh"] },
    { id: "g12", answers: ["how that might be true"] },
    { id: "g13", answers: ["clamouring for special treatment"] },
    { id: "g14", answers: ["most of these studies"] },
    { id: "g15", answers: ["only one sibling per family"] },
    { id: "g16", answers: ["proved to be accurate"] },
    {
      id: "g17",
      answers: ["more opportunities than his younger sisters"],
    },
    { id: "g18", answers: ["a stronger person"] },
  ],
  lines: [
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "Ed, how are you " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for our presentation next week?" },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Well, OK, Ruth – but " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "I know, I hadn't realised birth order was such a " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "But the stuff on birth order and personality is mostly unreliable. From what I've been reading a lot of claims about how your position in the family determines certain personality traits are just stereotypes, with ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " to support them." },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "OK, but that's an interesting point – we could start by outlining " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". There are studies going back " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Yeah – so we could just run through " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". Like the consensus seems to be that oldest children are generally less well-adjusted because they never get over the arrival of a younger sibling.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        {
          type: "text",
          text: "Right, but on a positive note, some studies claimed that they were thought to be good at nurturing – certainly in the past when people had large families they would have been expected to look after the younger ones.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "There isn't such a clear picture for middle children – but one trait that a lot of the studies mention is that they are easier to get on with than older or younger siblings.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "Generally eager to please and helpful – although that's certainly not accurate " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " – my middle brother was a nightmare – always causing fights and envious of whatever I had.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "As I said – none of this seems to " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". I'm the youngest in my family and I don't recognise myself in any of the studies I've read about. I'm supposed to have been a sociable and confident child who made friends easily – but I was actually terribly shy.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "Really? That's funny. There have been hundreds of studies on twins but mostly about " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "…" },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "There was one on personality, which said that a twin is likely to be quite shy in social situations because they always have their twin around to depend on for support.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        {
          type: "text",
          text: "My cousins were like that when they were small – they were only interested in each other and found it hard to engage with other kids. They're fine now though.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "Only children have had a really bad press – a lot of studies have branded them as loners who think the world revolves around them because they've never had to fight for their parents' attention.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". One category I hadn't considered before was children with much older siblings – a couple of studies mentioned that these children grow up more quickly and are expected to do basic things for themselves – like getting dressed.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "I can see " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " – although I expect they're sometimes the exact opposite – playing the baby role and " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "What was the problem with " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", do you think?" },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "I think it was because in a lot of cases data was collected from " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", who rated him or herself and his or her siblings at the same time." },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "Mmm. Some of the old research into the relationship between birth order and academic achievement has been " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " though. Performances in intelligence tests decline slightly from the eldest child to his or her younger siblings. This has been proved in lots of recent studies.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "Yes. Although what many of them didn't take into consideration was family size. The more siblings there are, the likelier the family is to have a low socioeconomic status – which can also account for differences between siblings in academic performance.",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        { type: "text", text: "The oldest boy might be given " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", for example." },
      ],
    },
    { speaker: "ED", segments: [{ type: "text", text: "Exactly." }] },
    {
      speaker: "RUTH",
      segments: [
        {
          type: "text",
          text: "But the main reason for the marginally higher academic performance of oldest children is quite surprising, I think. It's not only that they benefit intellectually from extra attention at a young age – which is what I would have expected. It's that they benefit from being teachers for their younger siblings, by verbalising processes.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "Right, and this gives them status and confidence, which again contribute, in a small way, to better performance. So would you say sibling rivalry has been a useful thing for you?",
        },
      ],
    },
    {
      speaker: "RUTH",
      segments: [
        {
          type: "text",
          text: "I think so – my younger brother was incredibly annoying and we fought a lot but I think this has made me ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". I know how to defend myself. We had some terrible arguments and I would have died rather than apologise to him – but we had to put up with each other and most of the time we co-existed amicably enough.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "Yes, my situation was pretty similar. But I don't think having two older brothers made me any less selfish – I was never prepared to let my brothers use any of my stuff …",
        },
      ],
    },
    { speaker: "RUTH", segments: [{ type: "text", text: "That's perfectly normal, whereas …" }] },
  ],
};

export const CAM15_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "the eldest child — personality trait",
    questionVi: "the eldest child — personality trait",
    modelParaphraseEn: "they were thought to be good at nurturing … expected to look after the younger ones",
    modelParaphraseVi: "they were thought to be good at nurturing … expected to look after the younger ones",
    acceptedAnswers: ["G", "caring", "nurturing"],
    explanationEn: "G = caring. Oldest children were thought to be good at nurturing / looking after younger siblings.",
    explanationVi: "G = caring. Con cả được cho là giỏi nurturing / trông em.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "a middle child — personality trait",
    questionVi: "a middle child — personality trait",
    modelParaphraseEn: "easier to get on with than older or younger siblings. Generally eager to please and helpful",
    modelParaphraseVi: "easier to get on with than older or younger siblings. Generally eager to please and helpful",
    acceptedAnswers: ["F", "co-operative", "cooperative", "eager to please", "helpful"],
    explanationEn: "F = co-operative. Middle children: easier to get on with; eager to please and helpful.",
    explanationVi: "F = co-operative. Con giữa: dễ hòa hợp; eager to please and helpful.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "the youngest child — personality trait",
    questionVi: "the youngest child — personality trait",
    modelParaphraseEn: "a sociable and confident child who made friends easily",
    modelParaphraseVi: "a sociable and confident child who made friends easily",
    acceptedAnswers: ["A", "outgoing", "sociable", "confident"],
    explanationEn: "A = outgoing. Youngest: sociable and confident / made friends easily. Ed was actually shy (stereotype, not his experience).",
    explanationVi: "A = outgoing. Con út: sociable and confident / dễ kết bạn. Ed thực ra nhút nhát (định kiến, không phải trải nghiệm của anh).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "a twin — personality trait",
    questionVi: "a twin — personality trait",
    modelParaphraseEn: "a twin is likely to be quite shy in social situations because they always have their twin around to depend on",
    modelParaphraseVi: "a twin is likely to be quite shy in social situations because they always have their twin around to depend on",
    acceptedAnswers: ["E", "introverted", "shy"],
    explanationEn: "E = introverted. Twins: quite shy in social situations (always have the other twin for support).",
    explanationVi: "E = introverted. Sinh đôi: khá shy trong tình huống xã hội (luôn có twin để dựa).",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "an only child — personality trait",
    questionVi: "an only child — personality trait",
    modelParaphraseEn: "loners who think the world revolves around them because they've never had to fight for their parents' attention",
    modelParaphraseVi: "loners who think the world revolves around them because they've never had to fight for their parents' attention",
    acceptedAnswers: ["B", "selfish", "loners"],
    explanationEn: "B = selfish. Only children branded as loners who think the world revolves around them.",
    explanationVi: "B = selfish. Con một bị gán là loners, nghĩ thế giới xoay quanh mình.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "a child with much older siblings — personality trait",
    questionVi: "a child with much older siblings — personality trait",
    modelParaphraseEn: "grow up more quickly and are expected to do basic things for themselves – like getting dressed",
    modelParaphraseVi: "grow up more quickly and are expected to do basic things for themselves – like getting dressed",
    acceptedAnswers: ["C", "independent", "grow up more quickly"],
    explanationEn: "C = independent. Children with much older siblings grow up more quickly / do basic things like getting dressed.",
    explanationVi: "C = independent. Có anh chị lớn hơn nhiều thì lớn nhanh / tự làm việc cơ bản như mặc đồ.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Evidence on birth order and academic success: A conflicting / B socio-economic status more important / C some studies ignored family size",
    questionVi: "Evidence on birth order and academic success: A conflicting / B socio-economic status more important / C some studies ignored family size",
    modelParaphraseEn: "what many of them didn't take into consideration was family size. The more siblings … low socioeconomic status – which can also account for differences",
    modelParaphraseVi: "what many of them didn't take into consideration was family size. The more siblings … low socioeconomic status – which can also account for differences",
    acceptedAnswers: ["C", "Some studies have neglected to include important factors such as family size"],
    explanationEn: "C = some studies neglected family size. SES is mentioned as another factor, not as clearly more important than birth order.",
    explanationVi: "C = một số nghiên cứu bỏ qua family size. SES được nhắc như yếu tố khác, không phải chắc chắn quan trọng hơn birth order.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Ruth finds it surprising that oldest children's better results are mainly thanks to A being teachers for younger siblings / B only a slight advantage / C extra parental attention making little difference",
    questionVi: "Ruth finds it surprising that oldest children's better results are mainly thanks to A being teachers for younger siblings / B only a slight advantage / C extra parental attention making little difference",
    modelParaphraseEn: "It's not only that they benefit intellectually from extra attention … It's that they benefit from being teachers for their younger siblings, by verbalising processes",
    modelParaphraseVi: "It's not only that they benefit intellectually from extra attention … It's that they benefit from being teachers for their younger siblings, by verbalising processes",
    acceptedAnswers: ["A", "being teachers for their younger siblings", "verbalising processes"],
    explanationEn: "A = mainly thanks to being teachers (verbalising processes). Extra attention is expected, not the surprising part.",
    explanationVi: "A = chủ yếu nhờ vai trò teachers (verbalising processes). Extra attention là điều Ruth vốn đoán, không phải điều bất ngờ.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Valuable sibling-rivalry experience: B learning to stand up for oneself",
    questionVi: "Valuable sibling-rivalry experience: B learning to stand up for oneself",
    modelParaphraseEn: "this has made me a stronger person. I know how to defend myself",
    modelParaphraseVi: "this has made me a stronger person. I know how to defend myself",
    acceptedAnswers: ["B", "learning to stand up for oneself", "defend myself"],
    explanationEn: "B = stand up for oneself (know how to defend myself). Sharing is rejected (Ed never let brothers use his stuff).",
    explanationVi: "B = đứng lên bảo vệ mình (defend myself). Sharing bị bác (Ed không cho anh dùng đồ).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Valuable sibling-rivalry experience: D learning to be tolerant",
    questionVi: "Valuable sibling-rivalry experience: D learning to be tolerant",
    modelParaphraseEn: "we had to put up with each other and most of the time we co-existed amicably enough",
    modelParaphraseVi: "we had to put up with each other and most of the time we co-existed amicably enough",
    acceptedAnswers: ["D", "learning to be tolerant", "put up with each other"],
    explanationEn: "D = learning to be tolerant (had to put up with each other). Saying sorry is rejected (would have died rather than apologise).",
    explanationVi: "D = học cách khoan dung (put up with each other). Xin lỗi bị bác (thà chết còn hơn apologise).",
  },
];
