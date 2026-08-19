import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["let's discuss what we've discovered so far", "let us discuss what we have discovered so far"] },
    { id: "g2", answers: ["I haven't done much research yet", "I have not done much research yet"] },
    { id: "g3", answers: ["I found an interesting article about icehouses"] },
    { id: "g4", answers: ["built in a shady area or underground"] },
    { id: "g5", answers: ["even though they were at quite a distance"] },
    { id: "g6", answers: ["only the wealthy members of society could afford it"] },
    { id: "g7", answers: ["I wouldn't be surprised", "I would not be surprised"] },
    { id: "g8", answers: ["they were too complex for me to understand"] },
    { id: "g9", answers: ["the gases in them are harmful for the environment"] },
    { id: "g10", answers: ["fridges hardly ever break down"] },
    { id: "g11", answers: ["we keep domestic fridges for 11 years on average"] },
    { id: "g12", answers: ["manufacturers encourage people to spend more"] },
    {
      id: "g13",
      answers: [
        "decide who's going to do more research on them",
        "decide who is going to do more research on them",
      ],
    },
    { id: "g14", answers: ["My mind just goes blank when I read anything about chemicals"] },
    { id: "g15", answers: ["I find economics books pretty heavy going"] },
    { id: "g16", answers: ["Don't forget trains, too", "Do not forget trains, too"] },
    { id: "g17", answers: ["I hadn't thought of trains", "I had not thought of trains"] },
    {
      id: "g18",
      answers: [
        "they're something everyone's familiar with",
        "they are something everyone is familiar with",
        "they're something everyone is familiar with",
      ],
    },
  ],
  lines: [
    {
      speaker: "ANNIE",
      segments: [
        { type: "text", text: "OK, Jack. Before we plan our presentation about refrigeration, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Fine, Annie. Though I have to admit " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        { type: "text", text: "Nor me. But " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". I'd seen some 18th- and 19th-century ones here in the UK, so I knew they were often " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", close to lakes that might freeze in the winter. Then blocks of ice could be cut and stored in the icehouse. But I didn't realise that insulating the blocks with straw or sawdust meant they didn't melt for months. The ancient Romans had refrigeration, too.",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "I didn't know that." }] },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "Yes, pits were dug in the ground, and snow was imported from the mountains – ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". The snow was stored in the pits. Ice formed at the bottom of it. Both the ice and the snow were then sold. The ice cost more than the snow and my guess is that ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". I also came across an article about modern domestic fridges. Several different technologies are used, but ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [{ type: "text", text: "You have to wonder what happens when people get rid of old ones." }],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "You mean because " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "Exactly. At least there are now plenty of organisations that will recycle most of the components safely, but of course some people just dump old fridges in the countryside.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "It's hard to see how they can be stopped unfortunately. In the UK we get rid of three million a year altogether!",
        },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        { type: "text", text: "That sounds a lot, especially because " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "That's right. In this country " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", and a lot last for 20 or more. So if you divide the cost by the number of years you can use a fridge, they're not expensive, compared with some household appliances.",
        },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        { type: "text", text: "True. I suppose " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " by making them different colours and designs. I'm sure when my parents bought their first fridge they had hardly any choice!",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "Yes, there's been quite a change." }] },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Right, let's make a list of topics to cover in our presentation, and " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". Then later, we can get together and plan the next step." },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "OK. How about starting with how useful refrigeration is, and the range of goods that are refrigerated nowadays? Because of course it's not just food and drinks.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [{ type: "text", text: "No, I suppose flowers and medicines are refrigerated, too." }],
    },
    {
      speaker: "ANNIE",
      segments: [{ type: "text", text: "And computers. I could do that, unless you particularly want to." }],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "No, that's fine by me. What about the effects of refrigeration on people's health? After all, some of the chemicals used in the 19th century were pretty harmful, but there have been lots of benefits too, like always having access to fresh food. Do you fancy dealing with that?",
        },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [{ type: "text", text: "I'm not terribly keen, to be honest." }],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Nor me. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "Oh, all right then, I'll do you a favour. But you owe me, Jack. What about the effects on food producers, like farmers in poorer countries being able to export their produce to developed countries? Something for you, maybe?",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "I don't mind. It should be quite interesting." }] },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "I think we should also look at how refrigeration has helped whole cities – like Las Vegas, which couldn't exist without refrigeration because it's in the middle of a desert.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Right. I had a quick look at an economics book in the library that's got a chapter about this sort of thing. I could give you the title, if you want to do this section.",
        },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        { type: "text", text: "Not particularly, to be honest. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", as a rule." },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "OK, leave it to me, then." }] },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "Thanks. Then there's transport, and the difference that refrigerated trucks have made. I wouldn't mind having a go at that.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". I read something about milk and butter being transported in refrigerated railroad cars in the USA, right back in the 1840s.",
        },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". Thanks." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Shall we have a separate section on domestic fridges? After all, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ANNIE",
      segments: [
        {
          type: "text",
          text: "What about splitting it into two? You could investigate 19th- and 20th-century fridges, and I'll concentrate on what's available these days, and how manufacturers differentiate their products from those of their competitors.",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "OK, that'd suit me." }] },
  ],
};

export const CAM15_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Annie learned from icehouses: B how the ice was kept frozen",
    questionVi: "Annie học từ icehouses: B cách giữ đá không tan",
    modelParaphraseEn: "insulating the blocks with straw or sawdust meant they didn't melt for months",
    modelParaphraseVi: "insulating the blocks with straw or sawdust meant they didn't melt for months",
    acceptedAnswers: ["straw or sawdust", "didn't melt for months", "B"],
    explanationEn: "B = how ice stayed frozen (straw/sawdust insulation). She already knew they were shady/underground by lakes.",
    explanationVi: "B = cách giữ đá đông (cách nhiệt rơm/mùn cưa). Cô đã biết chúng ở chỗ râm/dưới đất gần hồ.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Refrigeration in ancient Rome: A It became a commercial business",
    questionVi: "Làm lạnh ở Rome cổ: A trở thành việc buôn bán",
    modelParaphraseEn: "Both the ice and the snow were then sold. The ice cost more than the snow",
    modelParaphraseVi: "Both the ice and the snow were then sold. The ice cost more than the snow",
    acceptedAnswers: ["were then sold", "commercial", "A"],
    explanationEn: "A = sold commercially (ice dearer than snow). Mountains were quite a distance, not nearby.",
    explanationVi: "A = bán thương mại (đá đắt hơn tuyết). Núi ở khá xa, không phải gần.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Both worry about modern fridges: B some are disposed of irresponsibly",
    questionVi: "Cả hai lo về tủ lạnh hiện đại: B một số bị thải vô trách nhiệm",
    modelParaphraseEn: "some people just dump old fridges in the countryside. It's hard to see how they can be stopped",
    modelParaphraseVi: "some people just dump old fridges in the countryside. It's hard to see how they can be stopped",
    acceptedAnswers: ["dump old fridges", "countryside", "B"],
    explanationEn: "B = dumped irresponsibly. Technology is complex for Jack only; fridges hardly ever break down.",
    explanationVi: "B = vứt bừa. Công nghệ chỉ phức tạp với Jack; tủ lạnh hầu như không hỏng.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Domestic fridges: A They are generally good value for money",
    questionVi: "Tủ lạnh gia đình: A nhìn chung đáng tiền",
    modelParaphraseEn: "if you divide the cost by the number of years you can use a fridge, they're not expensive",
    modelParaphraseVi: "if you divide the cost by the number of years you can use a fridge, they're not expensive",
    acceptedAnswers: ["not expensive", "divide the cost", "A"],
    explanationEn: "A = good value over 11–20 years. Colours/designs are manufacturers pushing spend, not what they agree.",
    explanationVi: "A = đáng tiền vì dùng 11–20 năm. Màu/kiểu là hãng kích thích mua, không phải điều họ đồng ý.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "the goods that are refrigerated — A Annie",
    questionVi: "hàng được làm lạnh — A Annie",
    modelParaphraseEn: "the range of goods that are refrigerated nowadays … I could do that",
    modelParaphraseVi: "the range of goods that are refrigerated nowadays … I could do that",
    acceptedAnswers: ["I could do that", "Annie", "A"],
    explanationEn: "A = Annie takes goods (food, drinks, flowers, medicines, computers). Jack is fine with that.",
    explanationVi: "A = Annie làm phần hàng hóa. Jack đồng ý.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "the effects on health — A Annie",
    questionVi: "ảnh hưởng tới sức khỏe — A Annie",
    modelParaphraseEn: "I'll do you a favour. But you owe me, Jack",
    modelParaphraseVi: "I'll do you a favour. But you owe me, Jack",
    acceptedAnswers: ["I'll do you a favour", "Annie", "A"],
    explanationEn: "A = Annie takes health reluctantly after both dislike chemicals.",
    explanationVi: "A = Annie nhận phần sức khỏe dù cả hai đều ngại hóa chất.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "the impact on food producers — B Jack",
    questionVi: "tác động tới người sản xuất thực phẩm — B Jack",
    modelParaphraseEn: "Something for you, maybe? I don't mind. It should be quite interesting",
    modelParaphraseVi: "Something for you, maybe? I don't mind. It should be quite interesting",
    acceptedAnswers: ["I don't mind", "Jack", "B"],
    explanationEn: "B = Jack takes food producers / export from poorer countries.",
    explanationVi: "B = Jack nhận phần người sản xuất / xuất khẩu từ nước nghèo.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "the impact on cities — B Jack",
    questionVi: "tác động tới thành phố — B Jack",
    modelParaphraseEn: "I could give you the title, if you want to do this section … OK, leave it to me, then",
    modelParaphraseVi: "I could give you the title, if you want to do this section … OK, leave it to me, then",
    acceptedAnswers: ["leave it to me", "Jack", "B"],
    explanationEn: "B = Jack takes cities (Las Vegas / economics chapter) after Annie refuses.",
    explanationVi: "B = Jack nhận phần thành phố (Las Vegas / sách kinh tế) sau khi Annie từ chối.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "refrigerated transport — A Annie",
    questionVi: "vận tải lạnh — A Annie",
    modelParaphraseEn: "the difference that refrigerated trucks have made. I wouldn't mind having a go at that",
    modelParaphraseVi: "the difference that refrigerated trucks have made. I wouldn't mind having a go at that",
    acceptedAnswers: ["I wouldn't mind having a go", "Annie", "A"],
    explanationEn: "A = Annie takes transport (trucks; Jack only adds trains as a reminder).",
    explanationVi: "A = Annie nhận vận tải (xe tải; Jack chỉ nhắc thêm tàu).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "domestic fridges — C both Annie and Jack",
    questionVi: "tủ lạnh gia đình — C cả hai",
    modelParaphraseEn: "splitting it into two? You could investigate 19th- and 20th-century fridges, and I'll concentrate on what's available these days",
    modelParaphraseVi: "splitting it into two? You could investigate 19th- and 20th-century fridges, and I'll concentrate on what's available these days",
    acceptedAnswers: ["splitting it into two", "both", "C"],
    explanationEn: "C = both: Jack does 19th-/20th-century fridges; Annie does current models.",
    explanationVi: "C = cả hai: Jack làm tủ thế kỷ 19–20; Annie làm model hiện nay.",
  },
];
