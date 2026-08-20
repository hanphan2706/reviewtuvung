import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["another natural food product"],
    },
    { id: "g2", answers: ["looks rather like clear honey"] },
    { id: "g3", answers: ["a very natural product"] },
    {
      id: "g4",
      answers: ["the maple tree itself"],
    },
    {
      id: "g5",
      answers: [
        "they'll grow without fertilizer",
        "they will grow without fertilizer",
        "they'll grow without fertiliser",
        "they will grow without fertiliser",
      ],
    },
    { id: "g6", answers: ["in a minute"] },
    { id: "g7", answers: ["all these conditions"] },
    { id: "g8", answers: ["on the flag since 1964"] },
    { id: "g9", answers: ["maple syrup production begin"] },
    {
      id: "g10",
      answers: ["storage facilities"],
    },
    { id: "g11", answers: ["it has changed very little overall"] },
    { id: "g12", answers: ["well looked after"] },
    { id: "g13", answers: ["This continual movement"] },
    { id: "g14", answers: ["not to cause any damage"] },
    { id: "g15", answers: ["take place immediately"] },
    { id: "g16", answers: ["the sap becomes thicker and denser"] },
    { id: "g17", answers: ["at just the right moment"] },
    { id: "g18", answers: ["how much is needed"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Hello everyone." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Today we're going to look at " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " and that's maple syrup." },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "What is this exactly?" }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, maple syrup " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ", but it's not made by bees; it's produced from the plant fluid – or sap – inside the maple tree and that makes maple syrup " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Maple syrup is a thick, golden, sweet-tasting liquid that can be bought in bottles or jars and poured onto food such as waffles and ice cream or used in the baking of cakes and pastries.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It contains no preservatives or added ingredients, and it provides a healthy alternative to refined sugar.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Let's just talk a bit about " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", which is where maple syrup comes from." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So, there are many species of maple tree, and " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " in areas where there's plenty of moisture in the soil." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, they'll only do this if another important criterion is fulfilled, which is that they must have full or partial sun exposure during the day and very cool nights – and I'll talk more about that " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There are only certain parts of the world that provide " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ": one is Canada, and by that, I mean all parts of Canada, and the other is the north-eastern states of North America.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "In these areas, the climate suits the trees perfectly." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In fact, Canada produces over two-thirds of the world's maple syrup, which is why the five-pointed maple leaf is a Canadian symbol and has featured " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So how did " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, long before Europeans settled in these parts of the world, the indigenous communities had started producing maple sugar.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They bored holes in the trunks of maple trees and used containers made of tree bark to collect the liquid sap as it poured out.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As they were unable to keep the liquid for any length of time – they didn't have " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " in those days – they boiled the liquid by placing pieces of rock that had become scorching hot from the sun into the sap.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They did this until it turned into sugar, and they were then able to use this to sweeten their food and drinks.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Since that time, improvements have been made to the process, but " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So let's look at the production of maple syrup today." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Clearly, the maple forests are a valuable resource in many Canadian and North American communities.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The trees have to be " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " and they cannot be used to make syrup until the trunks reach a diameter of around 25 centimetres.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "This can take anything up to 40 years." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As I've already mentioned, maple trees need the right conditions to grow and also to produce sap.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Why is this?" }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, what happens is that during a cold night, the tree absorbs water from the soil, and that rises through the tree's vascular system.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But then in the warmer daytime, the change in temperature causes the water to be pushed back down to the bottom of the tree.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: " – up and down – leads to the formation of the sap needed for maple syrup production." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When the tree is ready, it can be tapped and this involves drilling a small hole into the trunk and inserting a tube into it that ends in a bucket.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The trees can often take several taps, though the workers take care " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to the healthy growth of the tree itself." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The sap that comes out of the trees consists of 98 percent water and 2 percent sugar and other nutrients.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It has to be boiled so that much of that water evaporates, and this process has to " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", using what are called evaporators." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "These are basically extremely large pans – the sap is poured into these, a fire is built and the pans are then heated until the sap boils.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "As it does this, the water evaporates, and the syrup begins to form." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The evaporation process creates large quantities of steam, and " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", and, " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", when the sap is thick enough to be called maple syrup, the worker removes it from the heat.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After this process, something called 'sugar sand' has to be filtered out as this builds up during the boiling and gives the syrup a cloudy appearance and a slightly gritty taste.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Once this has been done, the syrup is ready to be packaged so that it can be used for a whole variety of products.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It takes 40 litres of sap to produce one litre of maple syrup so you can get an idea of " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So that's the basic process. In places like Quebec where …" }],
    },
  ],
};

export const CAM17_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "colour described as ______",
    questionVi: "colour described as ______",
    modelParaphraseEn: "Maple syrup is a thick, golden, sweet-tasting liquid",
    modelParaphraseVi: "Maple syrup is a thick, golden, sweet-tasting liquid",
    acceptedAnswers: ["golden"],
    explanationEn: "The colour is golden – thick and sweet-tasting, like clear honey in appearance.",
    explanationVi: "Màu là golden – đặc và ngọt, trông giống mật ong trong.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "very ______ compared to refined sugar",
    questionVi: "very ______ compared to refined sugar",
    modelParaphraseEn: "it provides a healthy alternative to refined sugar",
    modelParaphraseVi: "it provides a healthy alternative to refined sugar",
    acceptedAnswers: ["healthy"],
    explanationEn: "No preservatives or added ingredients – a healthy alternative to refined sugar.",
    explanationVi: "Không chất bảo quản hay thành phần thêm – healthy so với đường tinh luyện.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "best growing conditions and ______ are in Canada and North America",
    questionVi: "best growing conditions and ______ are in Canada and North America",
    modelParaphraseEn: "In these areas, the climate suits the trees perfectly",
    modelParaphraseVi: "In these areas, the climate suits the trees perfectly",
    acceptedAnswers: ["climate"],
    explanationEn: "Canada and the north-eastern US have the climate that suits maple trees (moist soil, sun, cool nights).",
    explanationVi: "Canada và đông-bắc Mỹ có climate phù hợp (đất ẩm, nắng, đêm mát).",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "used hot ______ to heat the sap",
    questionVi: "used hot ______ to heat the sap",
    modelParaphraseEn: "they boiled the liquid by placing pieces of rock that had become scorching hot from the sun into the sap",
    modelParaphraseVi: "they boiled the liquid by placing pieces of rock that had become scorching hot from the sun into the sap",
    acceptedAnswers: ["rock", "rocks"],
    explanationEn: "Indigenous producers heated sap with scorching-hot rocks (no storage for liquid sap).",
    explanationVi: "Người bản địa đun nhựa bằng rock nóng cháy (không có chỗ trữ nhựa lỏng).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Tree trunks may not have the correct ______ until they have been growing for 40 years",
    questionVi: "Tree trunks may not have the correct ______ until they have been growing for 40 years",
    modelParaphraseEn: "they cannot be used to make syrup until the trunks reach a diameter of around 25 centimetres. This can take anything up to 40 years",
    modelParaphraseVi: "they cannot be used to make syrup until the trunks reach a diameter of around 25 centimetres. This can take anything up to 40 years",
    acceptedAnswers: ["diameter"],
    explanationEn: "Tapping waits until trunk diameter is about 25 cm – up to 40 years of growth.",
    explanationVi: "Chỉ lấy nhựa khi diameter thân khoảng 25 cm – có thể mất tới 40 năm.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "A tap drilled into the trunk and a ______ carries the sap into a bucket",
    questionVi: "A tap drilled into the trunk and a ______ carries the sap into a bucket",
    modelParaphraseEn: "drilling a small hole into the trunk and inserting a tube into it that ends in a bucket",
    modelParaphraseVi: "drilling a small hole into the trunk and inserting a tube into it that ends in a bucket",
    acceptedAnswers: ["tube"],
    explanationEn: "A tube in the drilled hole carries sap into a bucket.",
    explanationVi: "Một tube gắn vào lỗ khoan dẫn nhựa vào xô.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Large pans of sap called evaporators are heated by means of a ______",
    questionVi: "Large pans of sap called evaporators are heated by means of a ______",
    modelParaphraseEn: "the sap is poured into these, a fire is built and the pans are then heated until the sap boils",
    modelParaphraseVi: "the sap is poured into these, a fire is built and the pans are then heated until the sap boils",
    acceptedAnswers: ["fire"],
    explanationEn: "Evaporators are large pans heated by a fire until the sap boils.",
    explanationVi: "Evaporators là chảo lớn đun bằng fire cho đến khi nhựa sôi.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "A lot of ______ is produced during the evaporation process",
    questionVi: "A lot of ______ is produced during the evaporation process",
    modelParaphraseEn: "The evaporation process creates large quantities of steam",
    modelParaphraseVi: "The evaporation process creates large quantities of steam",
    acceptedAnswers: ["steam"],
    explanationEn: "Boiling evaporates water and produces large quantities of steam.",
    explanationVi: "Đun sôi làm nước bốc hơi và tạo ra nhiều steam.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "'Sugar sand' is removed because it makes the syrup look ______ and affects the taste",
    questionVi: "'Sugar sand' is removed because it makes the syrup look ______ and affects the taste",
    modelParaphraseEn: "gives the syrup a cloudy appearance and a slightly gritty taste",
    modelParaphraseVi: "gives the syrup a cloudy appearance and a slightly gritty taste",
    acceptedAnswers: ["cloudy"],
    explanationEn: "Sugar sand is filtered out because it makes syrup cloudy and slightly gritty.",
    explanationVi: "Lọc 'sugar sand' vì nó làm siro trông cloudy và hơi sạn.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "A huge quantity of sap is needed to make a ______ of maple syrup",
    questionVi: "A huge quantity of sap is needed to make a ______ of maple syrup",
    modelParaphraseEn: "It takes 40 litres of sap to produce one litre of maple syrup",
    modelParaphraseVi: "It takes 40 litres of sap to produce one litre of maple syrup",
    acceptedAnswers: ["litre", "liter"],
    explanationEn: "40 litres of sap → one litre of syrup.",
    explanationVi: "40 lít nhựa mới được one litre siro.",
  },
];
