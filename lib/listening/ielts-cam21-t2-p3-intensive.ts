import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["give us some feedback"] },
    { id: "g2", answers: ["like to begin with"] },
    { id: "g3", answers: ["I found really surprising"] },
    { id: "g4", answers: ["in the news a lot"] },
    { id: "g5", answers: ["I'd no idea", "I had no idea"] },
    { id: "g6", answers: ["already aware of that"] },
    { id: "g7", answers: ["that was only mentioned in passing"] },
    { id: "g8", answers: ["I'll bear that in mind", "I will bear that in mind"] },
    { id: "g9", answers: ["the most interesting one"] },
    { id: "g10", answers: ["confident about what they buy"] },
    { id: "g11", answers: ["some problems with that"] },
    { id: "g12", answers: ["any recommendations"] },
    { id: "g13", answers: ["more like a medical topic"] },
    { id: "g14", answers: ["the whole class would be interested"] },
    { id: "g15", answers: ["maybe too specialist"] },
    { id: "g16", answers: ["talk me through the stages"] },
    { id: "g17", answers: ["hadn't done one of these", "had not done one of these"] },
    { id: "g18", answers: ["really good in savoury dishes"] },
  ],
  lines: [
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Thanks for coming along, Nadia and Fergus. So this is a chance for you to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " about different aspects of your course. What would you " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "I've enjoyed the sessions on food safety. There was some information there that ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", although some was stuff I knew already, like the rise in rates of obesity." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "Yeah, that's been " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". But I hadn't realised that unsafe food causes more than 200 different diseases." },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " it was that many. And speaking of diseases, I knew resistance to antibiotics is on the increase, but I didn't know why...",
        },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "...that it's partly because when animals are treated with antibiotics then consumed by humans, the antibiotics get into the food chain. I had no idea about that either.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "Then the sessions provided a lot of information about plastic pollution from food packaging in the ocean, but I think that most of us were ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "Yeah. But I thought we could have done more on how much food is thrown away unnecessarily through fear of it being out of date, ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "OK, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". What did you think about the sessions from visiting lecturers, Fergus?" },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "For me " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " was about that project to prevent companies giving incorrect information to consumers about food.",
        },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "Ah, food fraud, yes." }] },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "I thought it was really good to address a problem that's faced by so many different groups – people with special religious rules, as well as vegetarians and vegans.",
        },
      ],
    },
    { speaker: "NADIA", segments: [{ type: "text", text: "And those with allergies." }] },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "Yeah. And another thing, we've had effective ways of analysing DNA for some time now and these can easily be applied to analysing food. But what the researchers succeeded in doing was to ensure that these tests were carried out at different stages in the food's journey from the producer to the consumer.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "So they knew that the food actually came from the place it was supposed to, and had the ingredients it was meant to.",
        },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "Exactly. So customers can be " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        { type: "text", text: "And the researchers had a good system for publicising their findings too." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "Well, I thought there were " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", actually." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "OK. And do you have " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " for new topics that we could include in the course?" },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "Well, I'm interested in how crop yields can be increased without damaging the environment.",
        },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "But we've already done quite a bit on that – but not so much on the seafood industry, where stocks are in danger of being overexploited as a food source unless we can find ways of keeping stocks up.",
        },
      ],
    },
    { speaker: "NADIA", segments: [{ type: "text", text: "Yes, that'd be a good topic. And I'm interested in the idea of a personalised approach to diet, now we have the technology to analyse exactly what individuals need." }] },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "That sounds " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " than food science." },
      ],
    },
    { speaker: "NADIA", segments: [{ type: "text", text: "OK. What about sessions on the variety of food and eating habits around the world? That's very relevant nowadays." }] },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "Yes, I think " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " in that." },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        { type: "text", text: "Then there's technological stuff, things like 3D printing of food and smart packaging." },
      ],
    },
    { speaker: "FERGUS", segments: [{ type: "text", text: "Mmm – " }, { type: "gap", gapId: "g15" }, { type: "text", text: "." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Now, I'm particularly interested in your project – the one where you developed a new food product. So ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "... first you had to decide on your initial aim." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "We decided we wanted to create something people could eat on the go rather than in a restaurant.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        { type: "text", text: "Yeah so we chose falafel, which was originally a Middle Eastern snack." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "We made up our minds about that pretty quickly. I know some students found it a lot harder to choose, and wasted a lot of time.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        { type: "text", text: "Then we had to do the literature review. We " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " before so the handout with advice for the project was very useful here." },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        {
          type: "text",
          text: "Yes, especially the advice on how to present the information. Then product development, actually deciding what we'd use to make the falafel, and for me the interesting thing about that was that we wanted it to be something a bit different from an ordinary falafel.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "We really made the right choice when we finally decided to use jackfruit, even though it wasn't something that either of us had ever tasted before.",
        },
      ],
    },
    {
      speaker: "FERGUS",
      segments: [
        { type: "text", text: "Yeah, like the name tells you, it's a fruit but actually it's " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". The product production, working out how to make the falafel, was harder than I expected because I'd never made them before.",
        },
      ],
    },
    {
      speaker: "NADIA",
      segments: [{ type: "text", text: "It was mostly trial and error. We started off with the basic recipe and then experimented and when it went wrong..." }],
    },
    { speaker: "FERGUS", segments: [{ type: "text", text: "...which it did a lot of the time..." }] },
    {
      speaker: "NADIA",
      segments: [
        {
          type: "text",
          text: "...we just moved on and kept adapting it and in the end it turned out fine and we had a lot of fun.",
        },
      ],
    },
    { speaker: "FERGUS", segments: [{ type: "text", text: "We did!" }] },
    { speaker: "TUTOR", segments: [{ type: "text", text: "Thank you. Well, your project was a very good ...." }] },
  ],
};

export const CAM21_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO new food-safety facts: B the number of diseases caused by contaminated food",
    questionVi: "HAI sự thật an toàn thực phẩm mới: B số bệnh do thực phẩm nhiễm bẩn",
    modelParaphraseEn: "I hadn't realised that unsafe food causes more than 200 different diseases. … I'd no idea it was that many",
    modelParaphraseVi: "I hadn't realised that unsafe food causes more than 200 different diseases. … I'd no idea it was that many",
    acceptedAnswers: ["B", "more than 200 different diseases", "number of diseases"],
    explanationEn: "B = 200+ diseases from unsafe food was new to both. Obesity was already known / in the news (not D). Plastic in the ocean was already known (not A). Food waste was only mentioned in passing — they wanted more on it, so it was not new information (not C).",
    explanationVi: "B = hơn 200 bệnh do thực phẩm không an toàn là mới với cả hai. Obesity họ đã biết / trên tin (không phải D). Nhựa đại dương đã biết (không phải A). Lãng phí thực phẩm chỉ được nhắc qua — họ muốn nói thêm, nên không phải thông tin mới (không phải C).",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E the result of treating animals with antibiotics",
    questionVi: "(cùng danh sách) E hậu quả khi dùng kháng sinh cho động vật",
    modelParaphraseEn: "when animals are treated with antibiotics then consumed by humans, the antibiotics get into the food chain. I had no idea about that either",
    modelParaphraseVi: "when animals are treated with antibiotics then consumed by humans, the antibiotics get into the food chain. I had no idea about that either",
    acceptedAnswers: ["E", "antibiotics get into the food chain", "treating animals with antibiotics"],
    explanationEn: "E = they knew antibiotic resistance was rising, but not that treating animals puts antibiotics into the food chain.",
    explanationVi: "E = họ biết kháng kháng sinh đang tăng, nhưng không biết việc chữa thú bằng antibiotics đưa thuốc vào chuỗi thức ăn.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO features that impressed Fergus: C the use of multiple tests on food items",
    questionVi: "HAI điểm làm Fergus ấn tượng: C dùng nhiều xét nghiệm trên thực phẩm",
    modelParaphraseEn: "these tests were carried out at different stages in the food's journey from the producer to the consumer",
    modelParaphraseVi: "these tests were carried out at different stages in the food's journey from the producer to the consumer",
    acceptedAnswers: ["C", "different stages", "multiple tests"],
    explanationEn: "C = tests at different stages (producer to consumer). DNA analysis was not new technology (not A). Fergus thought publicity had problems (not B or E).",
    explanationVi: "C = xét nghiệm ở nhiều giai đoạn (từ nhà sản xuất tới người mua). Phân tích DNA không phải công nghệ mới (không phải A). Fergus thấy khâu publicity có vấn đề (không phải B hay E).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) D the variety of dietary requirements included",
    questionVi: "(cùng danh sách) D đa dạng nhu cầu ăn uống được tính đến",
    modelParaphraseEn: "a problem that's faced by so many different groups – people with special religious rules, as well as vegetarians and vegans. And those with allergies",
    modelParaphraseVi: "a problem that's faced by so many different groups – people with special religious rules, as well as vegetarians and vegans. And those with allergies",
    acceptedAnswers: ["D", "different groups", "religious rules", "vegetarians and vegans"],
    explanationEn: "D = the project covered many dietary needs (religion, vegetarians/vegans, allergies).",
    explanationVi: "D = dự án gồm nhiều nhu cầu ăn uống (tôn giáo, vegetarian/vegan, dị ứng).",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "TWO topics both students recommend: A sustainable fishing",
    questionVi: "HAI chủ đề cả hai đều đề xuất: A đánh bắt bền vững",
    modelParaphraseEn: "not so much on the seafood industry, where stocks are in danger of being overexploited … Yes, that'd be a good topic",
    modelParaphraseVi: "not so much on the seafood industry, where stocks are in danger of being overexploited … Yes, that'd be a good topic",
    acceptedAnswers: ["A", "seafood industry", "overexploited", "sustainable fishing"],
    explanationEn: "A = seafood stocks / keeping stocks up (sustainable fishing). Nadia agrees. Crop yields / sustainable agriculture have already been covered (not D).",
    explanationVi: "A = nguồn lợi hải sản / giữ stocks (sustainable fishing). Nadia đồng ý. Năng suất cây trồng / nông nghiệp bền vững đã học rồi (không phải D).",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "(same list) C global differences in consumption",
    questionVi: "(cùng danh sách) C khác biệt tiêu thụ trên thế giới",
    modelParaphraseEn: "sessions on the variety of food and eating habits around the world? … Yes, I think the whole class would be interested in that",
    modelParaphraseVi: "sessions on the variety of food and eating habits around the world? … Yes, I think the whole class would be interested in that",
    acceptedAnswers: ["C", "eating habits around the world", "global differences"],
    explanationEn: "C = food and eating habits around the world — Fergus says the whole class would be interested. Personalised diet sounds medical (not B). 3D printing / smart packaging is too specialist (not E).",
    explanationVi: "C = ẩm thực và thói quen ăn trên thế giới — Fergus nói cả lớp sẽ thích. Chế độ ăn cá nhân hóa mang tính y khoa (không phải B). In 3D / bao bì thông minh quá chuyên biệt (không phải E).",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Initial aim — C This was easy to decide on",
    questionVi: "Initial aim — C Dễ quyết định",
    modelParaphraseEn: "We made up our minds about that pretty quickly. I know some students found it a lot harder to choose, and wasted a lot of time",
    modelParaphraseVi: "We made up our minds about that pretty quickly. I know some students found it a lot harder to choose, and wasted a lot of time",
    acceptedAnswers: ["C", "pretty quickly", "easy to decide"],
    explanationEn: "C = they chose an on-the-go falafel snack quickly; other students wasted time deciding. No disagreement is mentioned (not B).",
    explanationVi: "C = họ chọn falafel ăn dọc đường rất nhanh; sinh viên khác mất thời gian quyết định. Không nói bất đồng (không phải B).",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Literature review — D This was helped by the guidelines provided",
    questionVi: "Literature review — D Được hỗ trợ bởi hướng dẫn",
    modelParaphraseEn: "the handout with advice for the project was very useful here. Yes, especially the advice on how to present the information",
    modelParaphraseVi: "the handout with advice for the project was very useful here. Yes, especially the advice on how to present the information",
    acceptedAnswers: ["D", "handout with advice", "guidelines"],
    explanationEn: "D = the project handout / guidelines helped, especially on presenting information. They do not call this stage unnecessary (not E).",
    explanationVi: "D = handout / guidelines của dự án giúp ích, nhất là cách trình bày. Họ không nói giai đoạn này thừa (không phải E).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Product development — F This involved selecting a new ingredient",
    questionVi: "Product development — F Liên quan đến chọn nguyên liệu mới",
    modelParaphraseEn: "we wanted it to be something a bit different from an ordinary falafel. … we finally decided to use jackfruit",
    modelParaphraseVi: "we wanted it to be something a bit different from an ordinary falafel. … we finally decided to use jackfruit",
    acceptedAnswers: ["F", "jackfruit", "new ingredient"],
    explanationEn: "F = they chose jackfruit, an ingredient neither had tasted, to make the falafel different.",
    explanationVi: "F = họ chọn jackfruit, nguyên liệu cả hai chưa từng nếm, để falafel khác biệt.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Product production — A This was challenging but enjoyable",
    questionVi: "Product production — A Khó nhưng thú vị",
    modelParaphraseEn: "was harder than I expected … trial and error … in the end it turned out fine and we had a lot of fun",
    modelParaphraseVi: "was harder than I expected … trial and error … in the end it turned out fine and we had a lot of fun",
    acceptedAnswers: ["A", "harder than I expected", "a lot of fun"],
    explanationEn: "A = making the falafel was harder than expected (trial and error) but they had a lot of fun.",
    explanationVi: "A = làm falafel khó hơn dự kiến (trial and error) nhưng họ có a lot of fun.",
  },
];
