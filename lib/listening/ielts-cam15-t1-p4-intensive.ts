import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["called the gum tree"],
    },
    {
      id: "g2",
      answers: ["problems it faces at present"],
    },
    { id: "g3", answers: ["depend on it for food"] },
    { id: "g4", answers: ["So it supports biodiversity", "so it supports biodiversity"] },
    { id: "g5", answers: ["The eucalyptus grows all over Australia", "the eucalyptus grows all over Australia"] },
    { id: "g6", answers: ["up to four hundred years"] },
    { id: "g7", answers: ["dying off prematurely"] },
    {
      id: "g8",
      answers: ["gradually turn yellow"],
    },
    { id: "g9", answers: ["proper chemical name"] },
    { id: "g10", answers: ["sucking up the iron"] },
    { id: "g11", answers: ["they immediately recovered"] },
    { id: "g12", answers: ["a relatively small number"] },
    { id: "g13", answers: ["high populations of bell-miners"] },
    { id: "g14", answers: ["keep away other creatures"] },
    { id: "g15", answers: ["start looking sick"] },
    {
      id: "g16",
      answers: ["type of vegetation"],
    },
    {
      id: "g17",
      answers: ["not too frequent"],
    },
    { id: "g18", answers: ["to low levels"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [{ type: "text", text: "Today I'm going to talk about the eucalyptus tree." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is a very common tree here in Australia, where it's also sometimes " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "First I'm going to talk about why it's important, then I'm going to describe some " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Right, well the eucalyptus tree is an important tree for lots of reasons." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "For example, it gives shelter to creatures like birds and bats, and these and other species also " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", particularly the nectar from its flowers." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's useful to us humans too, because we can kill germs with a disinfectant made from oil extracted from eucalyptus leaves.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: " and the trees can live for " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So it's alarming that all across the country, numbers of eucalyptus are falling because the trees are " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So what are the reasons for this?" }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "One possible reason is disease." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As far back as the 1970s the trees started getting a disease called Mundulla Yellows.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The trees' leaves would " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", then the tree would die." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It wasn't until 2004 that they found the cause of the problem was lime, or calcium hydroxide to give it its ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", which was being used in the construction of roads." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The lime was being washed away into the ground and affecting the roots of the eucalyptus trees nearby.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "What it was doing was preventing the trees from " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " they needed for healthy growth." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When this was injected back into the affected trees, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But this problem only affected " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " of trees." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "By 2000, huge numbers of eucalyptus were dying along Australia's East Coast, of a disease known as Bell-miner Associated Die-back.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The bell-miner is a bird, and the disease seems to be common where there are " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Again it's the leaves of the trees that are affected." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What happens is that insects settle on the leaves and eat their way round them, destroying them as they go, and at the same time they secrete a solution which has sugar in it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The bell-miner birds really like this solution, and in order to get as much as possible, they " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " that might try to get it." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So these birds and insects flourish at the expense of other species, and eventually so much damage is done to the leaves that the tree dies.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But experts say that trees can " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " before any sign of Bell-miner Associated Die-back." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So it looks as if the problem might have another explanation." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One possibility is that it's to do with the huge bushfires that we have in Australia.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "A theory proposed over 40 years ago by ecologist William Jackson is that the frequency of bushfires in a particular region affects the " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " that grows there." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If there are very frequent bushfires in a region, this encourages grass to grow afterwards, while if the bushfires are rather less frequent, this results in the growth of eucalyptus forests.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So why is this?" }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Why do fairly frequent bushfires actually support the growth of eucalyptus?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, one reason is that the fire stops the growth of other species which would consume water needed by eucalyptus trees.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "And there's another reason." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If these other quick-growing species of bushes and plants are allowed to proliferate, they harm the eucalyptus in another way, by affecting the composition of the soil, and removing nutrients from it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Some bushfires are actually essential for the eucalyptus to survive as long as they are " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In fact there's evidence that Australia's indigenous people practised regular burning of bush land for thousands of years before the arrival of the Europeans.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But since Europeans arrived on the continent, the number of bushfires has been strictly controlled.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now scientists believe that this reduced frequency of bushfires " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " has led to what's known as 'dry rainforest', which seems an odd name as usually we associate tropical rainforest with wet conditions.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "And what's special about this type of rainforest?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, unlike tropical rainforest which is a rich ecosystem, this type of ecosystem is usually a simple one.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It has very thick, dense vegetation, but not much variety of species.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The vegetation provides lots of shade, so one species that does find it ideal is the bell-miner bird, which builds its nests in the undergrowth there.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But again that's not helpful for the eucalyptus tree." }],
    },
  ],
};

export const CAM15_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "it provides ______ and food for a wide range of species",
    questionVi: "it provides ______ and food for a wide range of species",
    modelParaphraseEn: "it gives shelter to creatures like birds and bats, and these and other species also depend on it for food",
    modelParaphraseVi: "it gives shelter to creatures like birds and bats, and these and other species also depend on it for food",
    acceptedAnswers: ["shelter"],
    explanationEn: "Shelter and food (nectar) for birds, bats and other species.",
    explanationVi: "Shelter và food (nectar) cho chim, dơi và loài khác.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "its leaves provide ______ which is used to make a disinfectant",
    questionVi: "its leaves provide ______ which is used to make a disinfectant",
    modelParaphraseEn: "we can kill germs with a disinfectant made from oil extracted from eucalyptus leaves",
    modelParaphraseVi: "we can kill germs with a disinfectant made from oil extracted from eucalyptus leaves",
    acceptedAnswers: ["oil"],
    explanationEn: "Oil from the leaves is used to make a disinfectant.",
    explanationVi: "Oil từ lá dùng làm disinfectant.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "Mundulla Yellows: lime used for making ______ was absorbed",
    questionVi: "Mundulla Yellows: lime used for making ______ was absorbed",
    modelParaphraseEn: "lime, or calcium hydroxide … which was being used in the construction of roads",
    modelParaphraseVi: "lime, or calcium hydroxide … which was being used in the construction of roads",
    acceptedAnswers: ["roads"],
    explanationEn: "Lime (calcium hydroxide) used in constructing roads was washed into the ground.",
    explanationVi: "Lime (calcium hydroxide) dùng làm roads bị rửa trôi xuống đất.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "Bell-miner Associated Die-back: ______ feed on eucalyptus leaves",
    questionVi: "Bell-miner Associated Die-back: ______ feed on eucalyptus leaves",
    modelParaphraseEn: "insects settle on the leaves and eat their way round them, destroying them as they go",
    modelParaphraseVi: "insects settle on the leaves and eat their way round them, destroying them as they go",
    acceptedAnswers: ["insects"],
    explanationEn: "Insects feed on the leaves and secrete a sugary solution that bell-miners guard.",
    explanationVi: "Insects ăn lá và tiết dung dịch đường; bell-miner bảo vệ dung dịch đó.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "high-frequency bushfires result in the growth of ______",
    questionVi: "high-frequency bushfires result in the growth of ______",
    modelParaphraseEn: "If there are very frequent bushfires in a region, this encourages grass to grow afterwards",
    modelParaphraseVi: "If there are very frequent bushfires in a region, this encourages grass to grow afterwards",
    acceptedAnswers: ["grass", "grasses"],
    explanationEn: "Very frequent bushfires encourage grass / grasses afterwards.",
    explanationVi: "Bushfire rất thường xuyên khuyến khích grass / grasses mọc sau đó.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "mid-frequency bushfires make more ______ available to the trees",
    questionVi: "mid-frequency bushfires make more ______ available to the trees",
    modelParaphraseEn: "the fire stops the growth of other species which would consume water needed by eucalyptus trees",
    modelParaphraseVi: "the fire stops the growth of other species which would consume water needed by eucalyptus trees",
    acceptedAnswers: ["water"],
    explanationEn: "Fire stops other species that would consume water the eucalyptus needs.",
    explanationVi: "Lửa ngăn loài khác tiêu thụ water mà eucalyptus cần.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "mid-frequency bushfires maintain the quality of the ______",
    questionVi: "mid-frequency bushfires maintain the quality of the ______",
    modelParaphraseEn: "they harm the eucalyptus … by affecting the composition of the soil, and removing nutrients from it",
    modelParaphraseVi: "they harm the eucalyptus … by affecting the composition of the soil, and removing nutrients from it",
    acceptedAnswers: ["soil"],
    explanationEn: "Without fire, other plants affect soil composition and remove nutrients.",
    explanationVi: "Không có lửa, cây khác làm thay đổi soil và lấy mất nutrients.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "low-frequency bushfires result in the growth of '______ rainforest'",
    questionVi: "low-frequency bushfires result in the growth of '______ rainforest'",
    modelParaphraseEn: "this reduced frequency of bushfires to low levels has led to what's known as 'dry rainforest'",
    modelParaphraseVi: "this reduced frequency of bushfires to low levels has led to what's known as 'dry rainforest'",
    acceptedAnswers: ["dry"],
    explanationEn: "Low-frequency bushfires lead to 'dry rainforest' (odd name vs wet tropical rainforest).",
    explanationVi: "Bushfire ít dẫn đến 'dry rainforest' (tên lạ so với rainforest ẩm).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "this type of rainforest is a ______ ecosystem",
    questionVi: "this type of rainforest is a ______ ecosystem",
    modelParaphraseEn: "unlike tropical rainforest which is a rich ecosystem, this type of ecosystem is usually a simple one",
    modelParaphraseVi: "unlike tropical rainforest which is a rich ecosystem, this type of ecosystem is usually a simple one",
    acceptedAnswers: ["simple"],
    explanationEn: "Dry rainforest is usually a simple ecosystem (dense but little species variety).",
    explanationVi: "Dry rainforest thường là ecosystem simple (rậm nhưng ít loài).",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "an ideal environment for the ______ of the bell-miner",
    questionVi: "an ideal environment for the ______ of the bell-miner",
    modelParaphraseEn: "the bell-miner bird, which builds its nests in the undergrowth there",
    modelParaphraseVi: "the bell-miner bird, which builds its nests in the undergrowth there",
    acceptedAnswers: ["nests", "nest"],
    explanationEn: "Shade makes it ideal for bell-miner nests in the undergrowth.",
    explanationVi: "Bóng râm lý tưởng cho nests của bell-miner trong undergrowth.",
  },
];
