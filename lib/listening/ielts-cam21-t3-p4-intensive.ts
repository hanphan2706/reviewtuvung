import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm going to talk about", "I am going to talk about"] },
    { id: "g2", answers: ["Let me start by saying"] },
    { id: "g3", answers: ["It's important to be clear that", "It is important to be clear that"] },
    { id: "g4", answers: ["without posing any threat"] },
    { id: "g5", answers: ["beyond recognition"] },
    { id: "g6", answers: ["which further adds to the problem"] },
    { id: "g7", answers: ["Without a doubt"] },
    { id: "g8", answers: ["This can go very wrong"] },
    { id: "g9", answers: ["in ways that weren't predicted", "in ways that were not predicted"] },
    { id: "g10", answers: ["as a form of biological control"] },
    { id: "g11", answers: ["this number soon grew"] },
    { id: "g12", answers: ["they did reproduce rapidly"] },
    { id: "g13", answers: ["every stage of their life cycle"] },
    { id: "g14", answers: ["have had a devastating impact"] },
    { id: "g15", answers: ["it's so hard to eradicate", "it is so hard to eradicate"] },
    { id: "g16", answers: ["have outcompeted"] },
    { id: "g17", answers: ["An important question for ecologists worldwide"] },
    { id: "g18", answers: ["a vital role to play"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Today " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " invasive species. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " what an invasive species is and what it's not. Invasive species are any animal or plant that is introduced into an environment by humans, and which is then harmful to that environment. " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " not all introduced species are invasive. Many introduced – or non-native – species thrive in new areas " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In some cases, invasive species have changed the natural world ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", so let's look at the different ways they can be problematic. First of all, invasive species may eat native species, or sometimes they may bring a disease with them, which native species have never faced before and therefore have no defences against. Often the invasive species breed very quickly – " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " of native species losing their sources of food. Species invasions are one of the biggest causes of damage in an ecosystem, actually putting its survival at risk.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So, how do invasive species spread? " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", the biggest cause is human activity. This could be intentional, or it could be accidental, such as when people who've been on holiday in another country come back with, say, the seeds of plants on their clothes or shoes. Plants and animals, especially insects, arrive in or on the cargo of ships, and then escape into their new 'home'. But sometimes humans deliberately move animals and plants around the world, for example to use them to control pests on farms, or to be pets. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " if those animals and plants move into wild settings and start breeding or begin growing " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Let's now look at an example of an invasive species here in Australia: Rhinella marina is a species of toad that was deliberately introduced from Hawaii in 1935 ",
        },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". It was hoped that the toads would eat the grey-backed beetles responsible for destroying crops of sugar on many of the plantations. At first, just a handful of toads were released by scientists into Queensland, but " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " as other states followed suit. Within two years, 62,000 young toads had been released into the wild. The toads did nothing to protect the plantations, but " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " and could soon be found all over the northern half of the country. The toads are poisonous at ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", and anything that eats them will die." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My second example regarding invasive species is the United Kingdom. Actually, there are more than three-thousand invasive species there, including some that are extremely common. Some invasive plants, such as Japanese knotweed, ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " on parts of the UK. Gardeners in the nineteenth century considered it a beautiful ornamental plant – which it is, when it's kept under control – but it soon spread into the countryside and remains a problem even to this day as " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another invasive plant is rhododendrons, which can be found in UK parks and woodlands. Their introduction dates back to 1763, but they're now seen as harmful because they block out so much light that native wild flowers can't grow beneath them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And then there are grey squirrels, which are one invasive species almost everyone in the UK will have come across. They were brought to the UK from North America and introduced to private estates around the 1870s but are now found everywhere, from forests to city squares. Grey squirrels ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " the smaller, native red squirrels. They both eat the same food, and the grey squirrels carry a type of virus that is deadly to the red squirrels. Red squirrel populations have collapsed, and there are only a handful of sites left in the UK where they're found.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " is, what can we do to tackle the problem of invasive species? The first step in controlling invasive species is learning about the behaviour of new species coming into the country. Monitoring is an important part of this, so that we can know if the new species begins to have a negative impact in its new environment. One effective way to keep track of invasive species is to create a database for the whole country. That way, all relevant authorities and agencies can share important information and take whatever action's needed. But the public also have " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " in this process. They should be encouraged to photograph harmful species – because this helps with identification – and then to report when and where these were observed. But it's important to tell people not to destroy or even touch what they've found.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Now, I'm going to move on to ..." }],
    },
  ],
};

export const CAM21_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "An invasive species can be a problem when it: introduces a new ______",
    questionVi: "An invasive species can be a problem when it: introduces a new ______",
    modelParaphraseEn: "sometimes they may bring a disease with them, which native species have never faced before and therefore have no defences against",
    modelParaphraseVi: "sometimes they may bring a disease with them, which native species have never faced before and therefore have no defences against",
    acceptedAnswers: ["disease"],
    explanationEn: "Besides eating native species, invaders may bring a new disease that natives cannot defend against.",
    explanationVi: "Ngoài việc ăn loài bản địa, loài xâm lấn có thể mang disease mới mà loài bản địa không có sức đề kháng.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "threatens an entire ______",
    questionVi: "threatens an entire ______",
    modelParaphraseEn: "Species invasions are one of the biggest causes of damage in an ecosystem, actually putting its survival at risk",
    modelParaphraseVi: "Species invasions are one of the biggest causes of damage in an ecosystem, actually putting its survival at risk",
    acceptedAnswers: ["ecosystem"],
    explanationEn: "Invasions can put an entire ecosystem's survival at risk.",
    explanationVi: "Xâm lấn có thể đe dọa sự sống còn của cả một ecosystem.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "accidentally e.g. via people returning from their ______ or on cargo ships",
    questionVi: "accidentally e.g. via people returning from their ______ or on cargo ships",
    modelParaphraseEn: "people who've been on holiday in another country come back with, say, the seeds of plants on their clothes or shoes",
    modelParaphraseVi: "people who've been on holiday in another country come back with, say, the seeds of plants on their clothes or shoes",
    acceptedAnswers: ["holiday", "holidays"],
    explanationEn: "Accidental spread includes travellers returning from holiday with seeds on clothes or shoes, and cargo ships.",
    explanationVi: "Lây lan vô tình gồm người về từ holiday với hạt trên quần áo/giày, và tàu hàng.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "intentionally e.g. for pest control, or as ______",
    questionVi: "intentionally e.g. for pest control, or as ______",
    modelParaphraseEn: "humans deliberately move animals and plants around the world, for example to use them to control pests on farms, or to be pets",
    modelParaphraseVi: "humans deliberately move animals and plants around the world, for example to use them to control pests on farms, or to be pets",
    acceptedAnswers: ["pets"],
    explanationEn: "Intentional introductions include pest control and keeping animals as pets.",
    explanationVi: "Đưa vào có chủ đích gồm kiểm soát sâu bệnh và nuôi làm pets.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Toads were introduced to Australia from Hawaii in 1935 to eat an insect damaging ______ plantations",
    questionVi: "Toads were introduced to Australia from Hawaii in 1935 to eat an insect damaging ______ plantations",
    modelParaphraseEn: "It was hoped that the toads would eat the grey-backed beetles responsible for destroying crops of sugar on many of the plantations",
    modelParaphraseVi: "It was hoped that the toads would eat the grey-backed beetles responsible for destroying crops of sugar on many of the plantations",
    acceptedAnswers: ["sugar"],
    explanationEn: "Rhinella marina toads were brought from Hawaii in 1935 to eat beetles damaging sugar plantations.",
    explanationVi: "Cóc Rhinella marina được đưa từ Hawaii năm 1935 để ăn bọ phá đồn điền sugar.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Rhododendron plants prevent ______ from reaching native plants",
    questionVi: "Rhododendron plants prevent ______ from reaching native plants",
    modelParaphraseEn: "they block out so much light that native wild flowers can't grow beneath them",
    modelParaphraseVi: "they block out so much light that native wild flowers can't grow beneath them",
    acceptedAnswers: ["light"],
    explanationEn: "Rhododendrons (from 1763) block light so native wild flowers cannot grow beneath them.",
    explanationVi: "Đỗ quyên (từ 1763) chắn light nên hoa dại bản địa không mọc được bên dưới.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Grey squirrels reduce food for red squirrels and spread a ______ that kills red squirrels",
    questionVi: "Grey squirrels reduce food for red squirrels and spread a ______ that kills red squirrels",
    modelParaphraseEn: "They both eat the same food, and the grey squirrels carry a type of virus that is deadly to the red squirrels",
    modelParaphraseVi: "They both eat the same food, and the grey squirrels carry a type of virus that is deadly to the red squirrels",
    acceptedAnswers: ["virus"],
    explanationEn: "Grey squirrels from North America compete for food and carry a virus deadly to native red squirrels.",
    explanationVi: "Sóc xám từ Bắc Mỹ tranh thức ăn và mang virus chết người đối với sóc đỏ bản địa.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Monitoring helps us to understand the ______ of invasive species and the impact they have",
    questionVi: "Monitoring helps us to understand the ______ of invasive species and the impact they have",
    modelParaphraseEn: "The first step in controlling invasive species is learning about the behaviour of new species coming into the country. Monitoring is an important part of this",
    modelParaphraseVi: "The first step in controlling invasive species is learning about the behaviour of new species coming into the country. Monitoring is an important part of this",
    acceptedAnswers: ["behaviour", "behavior"],
    explanationEn: "Monitoring helps us understand the behaviour of new species and whether they start to have a negative impact.",
    explanationVi: "Giám sát giúp hiểu behaviour của loài mới và liệu chúng có bắt đầu gây hại.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Setting up a national ______ makes it easier to track them",
    questionVi: "Setting up a national ______ makes it easier to track them",
    modelParaphraseEn: "One effective way to keep track of invasive species is to create a database for the whole country",
    modelParaphraseVi: "One effective way to keep track of invasive species is to create a database for the whole country",
    acceptedAnswers: ["database"],
    explanationEn: "A national database lets authorities share information and take action.",
    explanationVi: "Một database quốc gia giúp các cơ quan chia sẻ thông tin và hành động.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "Asking the public to ______ and report them helps with monitoring",
    questionVi: "Asking the public to ______ and report them helps with monitoring",
    modelParaphraseEn: "They should be encouraged to photograph harmful species – because this helps with identification – and then to report when and where these were observed",
    modelParaphraseVi: "They should be encouraged to photograph harmful species – because this helps with identification – and then to report when and where these were observed",
    acceptedAnswers: ["photograph"],
    explanationEn: "The public should photograph and report sightings — not destroy or even touch what they find.",
    explanationVi: "Công chúng nên photograph và báo cáo — không được hủy hay thậm chí chạm vào thứ tìm thấy.",
  },
];
