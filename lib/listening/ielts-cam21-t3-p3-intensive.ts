import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Shall we go through our research"] },
    { id: "g2", answers: ["done enough reading"] },
    { id: "g3", answers: ["I didn't really appreciate the difference", "I did not really appreciate the difference"] },
    { id: "g4", answers: ["the difference is quite distinct"] },
    { id: "g5", answers: ["why people get confused"] },
    { id: "g6", answers: ["It was interesting to read about"] },
    { id: "g7", answers: ["It's generally considered to be sustainable", "It is generally considered to be sustainable"] },
    { id: "g8", answers: ["All very positive"] },
    { id: "g9", answers: ["I wasn't convinced by the argument", "I was not convinced by the argument"] },
    { id: "g10", answers: ["I couldn't find any evidence for", "I could not find any evidence for"] },
    { id: "g11", answers: ["anything wrong with it"] },
    { id: "g12", answers: ["Shall we talk about some of"] },
    { id: "g13", answers: ["Let's start with", "Let us start with"] },
    { id: "g14", answers: ["really impressive"] },
    { id: "g15", answers: ["we're all familiar with", "we are all familiar with"] },
    { id: "g16", answers: ["which is becoming really popular"] },
    { id: "g17", answers: ["no downsides to"] },
    { id: "g18", answers: ["I'm sure that'll change", "I am sure that will change", "I'm sure that will change"] },
  ],
  lines: [
    {
      speaker: "MADDY",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for our sustainable fashion project?" },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "Good idea. I think I've " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " now." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        { type: "text", text: "Me too. I've learnt such a lot about what sustainability actually means." },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "Mmm, same for me with ethical fashion. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " between that and sustainable fashion before doing this research." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        { type: "text", text: "I know – most people use these terms interchangeably – but in fact " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " when you think about it. Sustainable relates to the environment and ethical relates more to the way workers or animals are treated.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "I totally understand " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", though. There are so many other terms used – like 'eco-friendly', which is actually quite meaningless.",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "And the way companies use these terms when describing their products doesn't help. They're often deliberately vague, I think, and don't provide enough information about how their products are made.",
        },
      ],
    },
    { speaker: "RYAN", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "MADDY",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " the debates surrounding wool production and how ethical and sustainable that is. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " because it's a natural product." },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "And it also lasts a long time and can be recycled. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". But " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " that wool production is sustainable because it doesn't use many chemicals – what about all the fungicides and insecticides used in sheep farming?",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        { type: "text", text: "Good point. And " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " the claim about sheep farming being better for the environment than cattle farming." },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        {
          type: "text",
          text: "No – they're both really bad. I read different reports about how unethical it is to even shear sheep. Some people say it's cruel but as long as the sheep are kept in good condition I can't see " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MADDY", segments: [{ type: "text", text: "Me neither." }] },
    {
      speaker: "RYAN",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " the semi-synthetic new fabrics now?" },
      ],
    },
    { speaker: "MADDY", segments: [{ type: "text", text: "OK, let's do that." }] },
    {
      speaker: "RYAN",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: " Lyocell, I've been reading about that." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        { type: "text", text: "Yeah, that's the one produced from the pulp of eucalyptus trees, isn't it?" },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "Yes, and what happens with that is " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". Over 99% of dissolving agents used in the manufacturing process are used again.",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "Yeah. Now, there are a few semi-synthetic fabrics that I'd never heard of. Like Cupro, for example.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        {
          type: "text",
          text: "Made from byproducts of the cotton industry to create a kind of vegan silk. But I'm not sure how sustainable this really is as there are so many reports of pollution caused by the manufacturing process.",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "Mmm. It doesn't compare favourably with all the other sustainable fabrics we've looked at, no.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "Bamboo is one fabric " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". But I didn't know that it was only organic bamboo that's truly sustainable." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "Me neither. Apparently, the manufacturing process for a significant proportion of bamboo is chemically quite intensive – which obviously can be quite damaging.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "EcoVero is an example of a semi-synthetic fabric " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "Probably because manufacturing causes 50 percent fewer emissions and takes up half as much energy as conventional fabrics. That saves production costs as well as being better for the environment.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        {
          type: "text",
          text: "That's true. I think demand for cork will continue to grow. It works really well in vegan shoes and bags.",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "Mmm and it's the only fabric that's fundamentally sustainable – the cork trees it comes from are renewable and the product itself is both recyclable and biodegradable – which is unique.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [
        { type: "text", text: "And the harvesting process is actually good for the trees. There are " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " using this source at all." },
      ],
    },
    {
      speaker: "MADDY",
      segments: [{ type: "text", text: "Hemp is another really good sustainable fabric from a natural source." }],
    },
    {
      speaker: "RYAN",
      segments: [
        {
          type: "text",
          text: "Yes. Did you know that clothes made from hemp protect the wearer from the sun and it's also antibacterial?",
        },
      ],
    },
    {
      speaker: "MADDY",
      segments: [
        {
          type: "text",
          text: "No, I didn't. But I did read that it's quite hard to grow, so perhaps that's why it's not as common as you'd think.",
        },
      ],
    },
    {
      speaker: "RYAN",
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: "." }],
    },
  ],
};

export const CAM21_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO points about 'ethical' and 'sustainable': B People think they mean the same thing",
    questionVi: "Hai ý về ethical / sustainable: B Người ta nghĩ hai từ cùng nghĩa",
    modelParaphraseEn: "most people use these terms interchangeably – but in fact the difference is quite distinct",
    modelParaphraseVi: "most people use these terms interchangeably – but in fact the difference is quite distinct",
    acceptedAnswers: ["B", "mean the same thing", "interchangeably"],
    explanationEn: "B = people use the terms interchangeably (think they mean the same). Sustainable = environment; ethical = workers/animals.",
    explanationVi: "B = mọi người dùng hai từ interchangeably (tưởng cùng nghĩa). Sustainable = môi trường; ethical = công nhân/động vật.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) D They are often used imprecisely",
    questionVi: "(cùng danh sách) D Thường dùng không chính xác",
    modelParaphraseEn: "They're often deliberately vague … and don't provide enough information about how their products are made",
    modelParaphraseVi: "They're often deliberately vague … and don't provide enough information about how their products are made",
    acceptedAnswers: ["D", "used imprecisely", "deliberately vague", "don't provide enough information"],
    explanationEn: "D = companies use the terms vaguely / imprecisely. 'Eco-friendly' is called meaningless — not preferable. Labels are not banned.",
    explanationVi: "D = công ty dùng từ mơ hồ / imprecisely. 'Eco-friendly' bị gọi là vô nghĩa — không phải lựa chọn tốt hơn. Không bảo cấm gắn nhãn.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO claims they disagree with: D Wool production involves few chemicals",
    questionVi: "Hai nhận định họ không đồng ý: D Sản xuất len dùng ít hóa chất",
    modelParaphraseEn: "I wasn't convinced by the argument that wool production is sustainable because it doesn't use many chemicals – what about all the fungicides and insecticides",
    modelParaphraseVi: "I wasn't convinced by the argument that wool production is sustainable because it doesn't use many chemicals – what about all the fungicides and insecticides",
    acceptedAnswers: ["D", "few chemicals", "doesn't use many chemicals", "fungicides and insecticides"],
    explanationEn: "D = they reject the 'few chemicals' claim (fungicides and insecticides in sheep farming). They do accept that wool lasts and can be recycled.",
    explanationVi: "D = họ bác nhận định 'ít hóa chất' (fungicides và insecticides trong chăn cừu). Họ vẫn chấp nhận len bền và tái chế được.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) E Sheep do less environmental damage than other livestock",
    questionVi: "(cùng danh sách) E Cừu hại môi trường ít hơn gia súc khác",
    modelParaphraseEn: "I couldn't find any evidence for the claim about sheep farming being better for the environment than cattle farming. No – they're both really bad",
    modelParaphraseVi: "I couldn't find any evidence for the claim about sheep farming being better for the environment than cattle farming. No – they're both really bad",
    acceptedAnswers: ["E", "less environmental damage", "better for the environment than cattle", "both really bad"],
    explanationEn: "E = no evidence that sheep are better than cattle — both are really bad. Shearing is OK if sheep are kept in good condition (they do not disagree with A).",
    explanationVi: "E = không có bằng chứng cừu tốt hơn bò — cả hai đều rất hại. Xén lông vẫn ổn nếu cừu được chăm sóc (họ không bác A).",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Lyocell — G Chemicals required for production can be reused",
    questionVi: "Lyocell — G Hóa chất sản xuất có thể tái sử dụng",
    modelParaphraseEn: "Over 99% of dissolving agents used in the manufacturing process are used again",
    modelParaphraseVi: "Over 99% of dissolving agents used in the manufacturing process are used again",
    acceptedAnswers: ["G", "chemicals can be reused", "dissolving agents", "used again", "99%"],
    explanationEn: "G = dissolving agents are reused (over 99%). Lyocell comes from eucalyptus pulp.",
    explanationVi: "G = dissolving agents được dùng lại (hơn 99%). Lyocell làm từ bột gỗ bạch đàn.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Cupro — B It is the least sustainable of alternative fabrics",
    questionVi: "Cupro — B Ít bền vững nhất trong các vải thay thế",
    modelParaphraseEn: "so many reports of pollution caused by the manufacturing process. It doesn't compare favourably with all the other sustainable fabrics we've looked at",
    modelParaphraseVi: "so many reports of pollution caused by the manufacturing process. It doesn't compare favourably with all the other sustainable fabrics we've looked at",
    acceptedAnswers: ["B", "least sustainable", "doesn't compare favourably", "pollution"],
    explanationEn: "B = least sustainable of the alternatives (pollution; does not compare favourably). Cupro is vegan silk from cotton byproducts.",
    explanationVi: "B = kém bền vững nhất trong các vải thay thế (ô nhiễm; không sánh được). Cupro là lụa chay từ phụ phẩm cotton.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Bamboo — F It needs to be produced in a certain way to be sustainable",
    questionVi: "Bamboo — F Phải sản xuất theo cách nhất định mới bền vững",
    modelParaphraseEn: "it was only organic bamboo that's truly sustainable. … the manufacturing process for a significant proportion of bamboo is chemically quite intensive",
    modelParaphraseVi: "it was only organic bamboo that's truly sustainable. … the manufacturing process for a significant proportion of bamboo is chemically quite intensive",
    acceptedAnswers: ["F", "produced in a certain way", "only organic bamboo", "chemically quite intensive"],
    explanationEn: "F = only organic bamboo is truly sustainable; much bamboo production is chemically intensive.",
    explanationVi: "F = chỉ organic bamboo mới thực sự bền vững; nhiều quy trình tre dùng hóa chất dày đặc.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "EcoVero — A The production process is fuel efficient",
    questionVi: "EcoVero — A Quy trình sản xuất tiết kiệm nhiên liệu",
    modelParaphraseEn: "manufacturing causes 50 percent fewer emissions and takes up half as much energy as conventional fabrics",
    modelParaphraseVi: "manufacturing causes 50 percent fewer emissions and takes up half as much energy as conventional fabrics",
    acceptedAnswers: ["A", "fuel efficient", "fewer emissions", "half as much energy"],
    explanationEn: "A = fuel efficient (50% fewer emissions, half the energy). Lower production costs are a bonus, not option C as the chosen comment.",
    explanationVi: "A = tiết kiệm nhiên liệu (giảm 50% khí thải, còn nửa năng lượng). Chi phí thấp hơn chỉ là lợi thêm, không phải đáp án C được chọn.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Cork — H This is from a wholly sustainable source",
    questionVi: "Cork — H Đến từ nguồn hoàn toàn bền vững",
    modelParaphraseEn: "it's the only fabric that's fundamentally sustainable – the cork trees it comes from are renewable and the product itself is both recyclable and biodegradable",
    modelParaphraseVi: "it's the only fabric that's fundamentally sustainable – the cork trees it comes from are renewable and the product itself is both recyclable and biodegradable",
    acceptedAnswers: ["H", "wholly sustainable source", "fundamentally sustainable", "renewable", "recyclable and biodegradable"],
    explanationEn: "H = wholly / fundamentally sustainable source (renewable trees; recyclable and biodegradable). Harvesting even helps the trees.",
    explanationVi: "H = nguồn hoàn toàn / fundamentally sustainable (cây tái tạo; tái chế và phân hủy sinh học). Thu hoạch còn tốt cho cây.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Hemp — D It provides additional health benefits",
    questionVi: "Hemp — D Mang thêm lợi ích sức khỏe",
    modelParaphraseEn: "clothes made from hemp protect the wearer from the sun and it's also antibacterial",
    modelParaphraseVi: "clothes made from hemp protect the wearer from the sun and it's also antibacterial",
    acceptedAnswers: ["D", "additional health benefits", "protect the wearer from the sun", "antibacterial"],
    explanationEn: "D = extra health benefits (sun protection and antibacterial). It is quite hard to grow, which may explain why it is less common.",
    explanationVi: "D = thêm lợi ích sức khỏe (chống nắng và kháng khuẩn). Khá khó trồng, nên ít phổ biến hơn.",
  },
];
