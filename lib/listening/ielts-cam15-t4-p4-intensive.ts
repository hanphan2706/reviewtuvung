import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["the social history of Britain", "social history of Britain"],
    },
    { id: "g2", answers: ["ordinary lives were affected"] },
    { id: "g3", answers: ["buying and selling goods"] },
    { id: "g4", answers: ["very few possessions"] },
    { id: "g5", answers: ["triggered massive social changes"] },
    { id: "g6", answers: ["steam engines and coal"] },
    { id: "g7", answers: ["an important shift away", "important shift away"] },
    { id: "g8", answers: ["made available to everyone", "available to everyone"] },
    { id: "g9", answers: ["in small workshops"] },
    { id: "g10", answers: ["on a larger scale"] },
    { id: "g11", answers: ["from villages into towns"] },
    { id: "g12", answers: ["the growth of consumerism", "growth of consumerism"] },
    { id: "g13", answers: ["the numerous canals", "numerous canals"] },
    {
      id: "g14",
      answers: ["from one end of the country"],
    },
    { id: "g15", answers: ["far more efficient"] },
    { id: "g16", answers: ["customers flocked to"] },
    { id: "g17", answers: ["new in the 19th century"] },
    { id: "g18", answers: ["it created choice", "created choice"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hi everyone. In this session I'll be presenting my research about " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " during the Industrial Revolution. I particularly looked at how " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " by changes that happened at that time." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This was a time that saw the beginning of a new phenomenon: consumerism – where ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " became a major part of ordinary people's lives." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In fact, it was in the 19th century that the quantity and quality of people's possessions was used as an indication of the wealth of the country. Before this, the vast majority of people had ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", but all that was changed by the Industrial Revolution." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This was the era from the mid-18th to the late 19th century, when improvements in how goods were made as well as in technology ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " that transformed life for just about everybody in several key areas." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "First let's look at manufacturing. When it comes to manufacturing, we tend to think of the Industrial Revolution in images of " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And it's true that the Industrial Revolution couldn't have taken place at all if it weren't for these new sources of power. They marked ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " from the traditional watermills and windmills that had dominated before this." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The most advanced industry for much of the 19th century was textiles. This meant that fashionable fabrics, and lace and ribbons were ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Before the Industrial Revolution, most people made goods to sell " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", often in their own homes." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But enormous new machines were now being created that could produce the goods faster and " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", and these required a lot more space." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So large factories were built, replacing the workshops, and forcing workers to travel to work. In fact, large numbers of people migrated ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " as a result." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As well as manufacturing, there were new technologies in transport, contributing to ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The horse-drawn stagecoaches and carts of the 18th century, which carried very few people and goods, and travelled slowly along poorly surfaced roads, were gradually replaced by ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " that were constructed. These were particularly important for the transportation of goods." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The canals gradually fell out of use, though, as railways were developed, becoming the main way of moving goods and people ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to the other." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And the goods they moved weren't just coal, iron, clothes, and so on – significantly, they included newspapers, which meant that thousands of people were not only more knowledgeable about what was going on in the country, but could also read about what was available in the shops. And that encouraged them to buy more.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So faster forms of transport resulted in distribution becoming " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " – goods could now be sold all over the country, instead of just in the local market.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The third main area that saw changes that contributed to consumerism was retailing. The number and quality of shops grew rapidly, and in particular, small shops suffered as ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " the growing number of department stores – a form of retailing that was " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The entrepreneurs who opened these found new ways to stock them with goods, and to attract customers: for instance, improved lighting inside greatly increased the visibility of the goods for sale.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another development that made goods more visible from outside resulted from the use of plate glass, which made it possible for windows to be much larger than previously.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "New ways of promoting goods were introduced, too. Previously, the focus had been on informing potential customers about the availability of goods; now there was an explosion in advertising trying to persuade people to go shopping.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Flanders claims that one of the great effects of the Industrial Revolution was that " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". All sorts of things that had previously been luxuries – from sugar to cutlery – became conveniences, and before long they'd turned into necessities: life without sugar or cutlery was unimaginable. Rather like mobile phones these days!",
        },
      ],
    },
  ],
};

export const CAM15_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "people's possessions were used to measure Britain's ______",
    questionVi: "tài sản được dùng để đo ______ của nước Anh",
    modelParaphraseEn: "the quantity and quality of people's possessions was used as an indication of the wealth of the country",
    modelParaphraseVi: "the quantity and quality of people's possessions was used as an indication of the wealth of the country",
    acceptedAnswers: ["wealth"],
    explanationEn: "19th-century possessions indicated national wealth (not population or happiness).",
    explanationVi: "Tài sản thế kỷ 19 cho thấy wealth của quốc gia.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "Developments in production of goods and in ______ greatly changed lives",
    questionVi: "Phát triển sản xuất và ______ làm đổi đời sống",
    modelParaphraseEn: "improvements in how goods were made as well as in technology triggered massive social changes",
    modelParaphraseVi: "improvements in how goods were made as well as in technology triggered massive social changes",
    acceptedAnswers: ["technology"],
    explanationEn: "Production methods plus technology transformed everyday life.",
    explanationVi: "Cách sản xuất cộng với technology làm đổi đời sống.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "would not have happened without the new types of ______",
    questionVi: "sẽ không xảy ra nếu không có các loại ______ mới",
    modelParaphraseEn: "couldn't have taken place at all if it weren't for these new sources of power",
    modelParaphraseVi: "couldn't have taken place at all if it weren't for these new sources of power",
    acceptedAnswers: ["power"],
    explanationEn: "Steam and coal = new sources of power, replacing watermills and windmills.",
    explanationVi: "Hơi nước và than = nguồn power mới, thay cối nước và cối xay gió.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "The leading industry was ______ (products widely available)",
    questionVi: "Ngành hàng đầu là ______ (sản phẩm phổ biến)",
    modelParaphraseEn: "The most advanced industry for much of the 19th century was textiles",
    modelParaphraseVi: "The most advanced industry for much of the 19th century was textiles",
    acceptedAnswers: ["textiles", "textile"],
    explanationEn: "Textiles led: fashionable fabrics, lace and ribbons for everyone.",
    explanationVi: "Textiles dẫn đầu: vải thời trang, ren và ruy băng cho mọi người.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "New ______ made factories necessary and so more people moved into towns",
    questionVi: "______ mới khiến cần nhà máy và dân chuyển vào thành",
    modelParaphraseEn: "enormous new machines were now being created that could produce the goods faster and on a larger scale",
    modelParaphraseVi: "enormous new machines were now being created that could produce the goods faster and on a larger scale",
    acceptedAnswers: ["machines"],
    explanationEn: "Huge machines needed space → factories → migration into towns.",
    explanationVi: "Máy khổng lồ cần chỗ → nhà máy → dân chuyển vào thị trấn.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "greater access to ______ made people more aware of what they could buy",
    questionVi: "tiếp cận ______ nhiều hơn khiến người ta biết có gì để mua",
    modelParaphraseEn: "they included newspapers, which meant thousands of people could also read about what was available in the shops",
    modelParaphraseVi: "they included newspapers, which meant thousands of people could also read about what was available in the shops",
    acceptedAnswers: ["newspapers"],
    explanationEn: "Railways carried newspapers, so shop goods became widely known.",
    explanationVi: "Đường sắt chở newspapers, nên hàng trong cửa hàng được biết rộng.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "when shopping, people were not limited to buying ______ goods",
    questionVi: "khi mua sắm, người ta không còn chỉ mua hàng ______",
    modelParaphraseEn: "goods could now be sold all over the country, instead of just in the local market",
    modelParaphraseVi: "goods could now be sold all over the country, instead of just in the local market",
    acceptedAnswers: ["local"],
    explanationEn: "Faster transport meant shopping was no longer limited to local goods.",
    explanationVi: "Vận tải nhanh hơn nên không còn chỉ mua hàng local.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "inside stores displays were more visible because of better ______",
    questionVi: "trong cửa hàng hàng dễ thấy hơn vì ______ tốt hơn",
    modelParaphraseEn: "improved lighting inside greatly increased the visibility of the goods for sale",
    modelParaphraseVi: "improved lighting inside greatly increased the visibility of the goods for sale",
    acceptedAnswers: ["lighting"],
    explanationEn: "Better indoor lighting made stock easier to see.",
    explanationVi: "Lighting trong nhà tốt hơn giúp thấy hàng rõ hơn.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "outside stores, because ______ were bigger",
    questionVi: "bên ngoài cửa hàng, vì ______ lớn hơn",
    modelParaphraseEn: "plate glass … made it possible for windows to be much larger than previously",
    modelParaphraseVi: "plate glass … made it possible for windows to be much larger than previously",
    acceptedAnswers: ["windows"],
    explanationEn: "Plate glass allowed much larger shop windows.",
    explanationVi: "Kính tấm cho phép windows cửa hàng lớn hơn nhiều.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "______ that was persuasive became much more common",
    questionVi: "______ mang tính thuyết phục trở nên phổ biến hơn",
    modelParaphraseEn: "there was an explosion in advertising trying to persuade people to go shopping",
    modelParaphraseVi: "there was an explosion in advertising trying to persuade people to go shopping",
    acceptedAnswers: ["advertising", "Advertising"],
    explanationEn: "Shift from informing about availability to persuasive advertising.",
    explanationVi: "Từ chỉ thông tin hàng có sẵn sang advertising thuyết phục đi mua.",
  },
];
