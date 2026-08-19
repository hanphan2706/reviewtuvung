import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'm going to report on a case study of a programme",
        "I am going to report on a case study of a programme",
      ],
    },
    { id: "g2", answers: ["a largely agricultural country in South-East Africa"] },
    { id: "g3", answers: ["This is a dry and arid region, with unpredictable rainfall"] },
    { id: "g4", answers: ["mainly by selling charcoal"] },
    { id: "g5", answers: ["as they were rapidly using up this resource"] },
    { id: "g6", answers: ["The programme worked closely with the district government"] },
    { id: "g7", answers: ["it was decided to set up two more of these"] },
    { id: "g8", answers: ["These associations planned and carried out activities"] },
    { id: "g9", answers: ["in order to keep the crops safe from animals, both wild and domestic"] },
    { id: "g10", answers: ["The community was responsible for creating these fences"] },
    { id: "g11", answers: ["Once the area had been fenced off, it could be cultivated"] },
    { id: "g12", answers: ["The programme also provided pumps"] },
    { id: "g13", answers: ["Once the programme had been set up, its development was monitored carefully"] },
    { id: "g14", answers: ["not just for their own needs, but also to sell"] },
    { id: "g15", answers: ["this resulted in large amounts of produce, especially vegetables, being spoiled"] },
    { id: "g16", answers: ["There was also an additional initiative that had not been originally planned"] },
    { id: "g17", answers: ["First of all, it tells us that in dry, arid regions"] },
    { id: "g18", answers: ["there was a marked improvement in agricultural production"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " which has been set up to help rural populations in Mozambique, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The programme worked with three communities in Chicualacuala district, near the Limpopo River.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Because of this, people in the area were unable to support themselves through agriculture and instead they used the forest as a means of providing themselves with an income, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, this was not a sustainable way of living in the long term, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "To support agriculture in this dry region, the programme focused primarily on making use of existing water resources from the Limpopo River by setting up systems of irrigation, which would provide a dependable water supply for crops and animals.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " in order to find the best way of implementing this." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The region already had one farmers' association, and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " including water management, livestock breeding and agriculture, and it was notable that in general, women formed the majority of the workforce.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It was decided that " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", special areas should be fenced off where the crops could be grown." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", but the programme provided the necessary wire for making them." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The land was dug, so that vegetables and cereals appropriate to the climate could be grown, and the programme provided the necessary seeds for this.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " so that water could be brought from the river in pipes to the fields." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, the labour was all provided by local people, and they also provided and put up the posts that supported the fences around the fields.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The farmers were able to grow enough produce " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, getting the produce to places where it could be marketed was sometimes a problem, as the farmers did not have access to transport, and " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This problem was discussed with the farmers' associations and it was decided that in order to prevent food from being spoiled, the farmers needed to learn techniques for its preservation.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g16" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This was when farmers started to dig holes for tanks in the fenced-off areas and to fill these with water and use them for breeding fish – an important source of protein.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After a time, another suggestion was made by local people which hadn't been part of the programme's original proposal, but which was also adopted later on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They decided to try setting up colonies of bees, which would provide honey both for their own consumption and to sell.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So what lessons can be learned from this programme?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", if there is access to a reliable source of water, there is great potential for the development of agriculture.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "In Chicualacuala, " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", which improved food security and benefited local people by providing them with both food and income.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, it's important to set realistic timelines for each phase of the programme, especially for its design, as mistakes made at this stage may be hard to correct later on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The programme demonstrates that sustainable development is possible in areas where …",
        },
      ],
    },
  ],
};

export const CAM15_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "______ was seen as the main priority to ensure the supply of water",
    questionVi: "______ được xem là ưu tiên chính để đảm bảo nguồn nước",
    modelParaphraseEn: "setting up systems of irrigation, which would provide a dependable water supply for crops and animals",
    modelParaphraseVi: "setting up systems of irrigation, which would provide a dependable water supply for crops and animals",
    acceptedAnswers: ["Irrigation", "irrigation"],
    explanationEn: "Main water priority = irrigation from the Limpopo, not charcoal or new rivers.",
    explanationVi: "Ưu tiên nước = irrigation từ sông Limpopo, không phải than củi hay sông mới.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "Most of the work organised by farmers' associations was done by ______",
    questionVi: "Phần lớn việc của hội nông dân do ______ làm",
    modelParaphraseEn: "it was notable that in general, women formed the majority of the workforce",
    modelParaphraseVi: "it was notable that in general, women formed the majority of the workforce",
    acceptedAnswers: ["women"],
    explanationEn: "Women were the majority of the association workforce.",
    explanationVi: "Women chiếm đa số lực lượng lao động của hội.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "The programme provided ______ for the fences",
    questionVi: "Chương trình cung cấp ______ cho hàng rào",
    modelParaphraseEn: "the programme provided the necessary wire for making them",
    modelParaphraseVi: "the programme provided the necessary wire for making them",
    acceptedAnswers: ["wire", "wires"],
    explanationEn: "Programme supplied wire; the community built the fences. Official key: wire(s).",
    explanationVi: "Chương trình cấp wire; cộng đồng dựng hàng rào. Đáp án chính thức: wire(s).",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "The programme provided ______ for suitable crops",
    questionVi: "Chương trình cung cấp ______ cho cây trồng phù hợp",
    modelParaphraseEn: "the programme provided the necessary seeds for this",
    modelParaphraseVi: "the programme provided the necessary seeds for this",
    acceptedAnswers: ["seeds", "seed"],
    explanationEn: "Seeds for climate-appropriate vegetables and cereals. Official key: seed(s).",
    explanationVi: "Seeds cho rau và ngũ cốc phù hợp khí hậu. Đáp án chính thức: seed(s).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "The farmers provided ______ for the fences on their land",
    questionVi: "Nông dân cung cấp ______ cho hàng rào trên đất họ",
    modelParaphraseEn: "they also provided and put up the posts that supported the fences around the fields",
    modelParaphraseVi: "they also provided and put up the posts that supported the fences around the fields",
    acceptedAnswers: ["posts"],
    explanationEn: "Farmers provided labour and fence posts; pumps came from the programme.",
    explanationVi: "Nông dân cung cấp labour và posts; pumps do chương trình cấp.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Marketing of produce was sometimes difficult due to lack of ______",
    questionVi: "Tiếp thị nông sản đôi khi khó vì thiếu ______",
    modelParaphraseEn: "the farmers did not have access to transport, and this resulted in large amounts of produce … being spoiled",
    modelParaphraseVi: "the farmers did not have access to transport, and this resulted in large amounts of produce … being spoiled",
    acceptedAnswers: ["transport"],
    explanationEn: "Lack of transport made marketing hard and produce spoiled.",
    explanationVi: "Thiếu transport khiến tiếp thị khó và nông sản hỏng.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Training was therefore provided in methods of food ______",
    questionVi: "Vì vậy có đào tạo phương pháp ______ thực phẩm",
    modelParaphraseEn: "the farmers needed to learn techniques for its preservation",
    modelParaphraseVi: "the farmers needed to learn techniques for its preservation",
    acceptedAnswers: ["preservation"],
    explanationEn: "Training in food preservation to stop produce spoiling without transport.",
    explanationVi: "Đào tạo preservation để nông sản không hỏng khi thiếu vận chuyển.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Farmers made special places where ______ could be kept",
    questionVi: "Nông dân làm chỗ đặc biệt để nuôi ______",
    modelParaphraseEn: "use them for breeding fish – an important source of protein",
    modelParaphraseVi: "use them for breeding fish – an important source of protein",
    acceptedAnswers: ["fish", "fishes"],
    explanationEn: "Unplanned tanks in fenced areas for breeding fish. Official key: fish(es).",
    explanationVi: "Bể không nằm trong kế hoạch ban đầu để nuôi fish. Đáp án chính thức: fish(es).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Local people later suggested keeping ______",
    questionVi: "Người dân sau đó đề xuất nuôi ______",
    modelParaphraseEn: "They decided to try setting up colonies of bees, which would provide honey",
    modelParaphraseVi: "They decided to try setting up colonies of bees, which would provide honey",
    acceptedAnswers: ["bees"],
    explanationEn: "Local suggestion: colonies of bees for honey to eat and sell.",
    explanationVi: "Đề xuất của dân: colonies of bees lấy mật ăn và bán.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "Enough time must be allowed, particularly for the ______ phase of the programme",
    questionVi: "Cần đủ thời gian, đặc biệt cho giai đoạn ______",
    modelParaphraseEn: "set realistic timelines for each phase of the programme, especially for its design",
    modelParaphraseVi: "set realistic timelines for each phase of the programme, especially for its design",
    acceptedAnswers: ["design"],
    explanationEn: "Especially the design phase – mistakes then are hard to correct later.",
    explanationVi: "Đặc biệt giai đoạn design – sai lúc này khó sửa về sau.",
  },
];
