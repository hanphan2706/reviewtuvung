import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["an important creative activity"] },
    { id: "g2", answers: ["with a long history"] },
    { id: "g3", answers: ["It's a homely image", "It is a homely image"] },
    { id: "g4", answers: ["from one generation to another"] },
    { id: "g5", answers: ["is actually rising"] },
    { id: "g6", answers: ["formal instruction in the skill"] },
    { id: "g7", answers: ["readily do the job for them"] },
    { id: "g8", answers: ["has numerous benefits"] },
    { id: "g9", answers: ["what some of these might be"] },
    { id: "g10", answers: ["save you a lot of money"] },
    { id: "g11", answers: ["the financial outlay is minimal"] },
    { id: "g12", answers: ["makes us feel good"] },
    { id: "g13", answers: ["a technological, fast-paced life"] },
    { id: "g14", answers: ["when knitting first began"] },
    { id: "g15", answers: ["for us to think about"] },
    { id: "g16", answers: ["most knitting patterns today"] },
    { id: "g17", answers: ["the dominance of wool"] },
    { id: "g18", answers: ["while doing other tasks"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Good morning everyone." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So today we're going to look at " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " and that's hand knitting." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Ancient knitted garments have been found in many different countries, showing that knitting is a global activity ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When someone says the word 'knitting' we might well picture an elderly person - a grandmother perhaps - sitting by the fire knitting garments for themselves or other members of the family.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", but one that may lead you to feel that knitting is an activity of the past - and, indeed, during the previous decade, it was one of the skills that was predicted to vanish from everyday life.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For although humans have sewn and knitted their own clothing for a very long time, many of these craft-based skills went into decline when industrial machines took over - mainly because they were no longer passed down ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, that's all changing and interest in knitting classes in many countries " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", as more and more people are seeking " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "With that trend, we're also seeing an increase in the sales figures for knitting equipment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So why do people want to be taught to knit at a time when a machine can " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The answer is that knitting, as a handicraft, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " for those doing it." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Let's consider " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "While many people knitted garments in the past because they couldn't afford to buy clothes, it's still true today that knitting can be helpful if you're experiencing economic hardship.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If you have several children who all need warm winter clothes, knitting may " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And the results of knitting your own clothes can be very rewarding, even though the skills you need to get going are really quite basic and ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the more significant benefits in today's world are to do with well-being.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In a world where it's estimated that we spend up to nine hours a day online, doing something with our hands that is craft-based ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It releases us from the stress of " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, let's look back a bit to early knitting activities. In fact, no one really knows " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", but archaeological remains have disclosed plenty of information " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One of the interesting things about knitting is that the earliest pieces of clothing that have been found suggest that most of the items produced were round rather than flat.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Discoveries from the 3rd and 4th centuries in Egypt show that things like socks and gloves, that were needed to keep hands and feet warm, were knitted in one piece using four or five needles.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "That's very different from " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", which only require two." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What's more, the very first needles people used were hand carved out of wood and other natural materials, like bone, whereas today's needles are largely made of steel or plastic and make that characteristic clicking sound when someone's using them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Ancient people knitted using yarns made from linen, hemp, cotton and wool, and these were often very rough on the skin.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The spinning wheel, which allowed people to make finer yarns and produce much greater quantities of them, led to ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " in the knitting industry - often favoured for its warmth." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another interesting fact about knitting is that because it was practised in so many parts of the world for so many purposes, regional differences in style developed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This visual identity has allowed researchers to match bits of knitted clothing that have been unearthed over time to the region from which the wearer came or the job that he or she did.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As I've mentioned, knitting offered people from poor communities a way of making extra money " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For many centuries, it seems, men, women and children took every opportunity to knit, for example, while watching over sheep, walking to market or riding in boats.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "So, let's move on to take a …" }] },
  ],
};

export const CAM16_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "We imagine someone like a ______ knitting",
    questionVi: "We imagine someone like a ______ knitting",
    modelParaphraseEn: "we might well picture an elderly person - a grandmother perhaps - sitting by the fire knitting",
    modelParaphraseVi: "we might well picture an elderly person - a grandmother perhaps - sitting by the fire knitting",
    acceptedAnswers: ["grandmother"],
    explanationEn: "The stereotypical knitter is a grandmother by the fire.",
    explanationVi: "Hình ảnh điển hình là grandmother ngồi bên lửa đan.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "A ______ ago, knitting was expected to disappear",
    questionVi: "A ______ ago, knitting was expected to disappear",
    modelParaphraseEn: "during the previous decade, it was one of the skills that was predicted to vanish from everyday life",
    modelParaphraseVi: "during the previous decade, it was one of the skills that was predicted to vanish from everyday life",
    acceptedAnswers: ["decade"],
    explanationEn: "A decade ago knitting was predicted to vanish / disappear.",
    explanationVi: "Một decade trước, đan len bị dự đoán sẽ biến mất.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "People are buying more ______ for knitting nowadays",
    questionVi: "People are buying more ______ for knitting nowadays",
    modelParaphraseEn: "we're also seeing an increase in the sales figures for knitting equipment",
    modelParaphraseVi: "we're also seeing an increase in the sales figures for knitting equipment",
    acceptedAnswers: ["equipment"],
    explanationEn: "Rising class numbers go with higher sales of knitting equipment.",
    explanationVi: "Lớp học tăng đi cùng doanh số equipment đan len.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "gives support in times of ______ difficulty",
    questionVi: "gives support in times of ______ difficulty",
    modelParaphraseEn: "knitting can be helpful if you're experiencing economic hardship",
    modelParaphraseVi: "knitting can be helpful if you're experiencing economic hardship",
    acceptedAnswers: ["economic"],
    explanationEn: "Knitting still helps in economic hardship (e.g. warm clothes for several children).",
    explanationVi: "Đan len vẫn giúp lúc economic hardship (vd. áo ấm cho nhiều con).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "requires only ______ skills and little money to start",
    questionVi: "requires only ______ skills and little money to start",
    modelParaphraseEn: "the skills you need to get going are really quite basic and the financial outlay is minimal",
    modelParaphraseVi: "the skills you need to get going are really quite basic and the financial outlay is minimal",
    acceptedAnswers: ["basic"],
    explanationEn: "You only need basic skills and minimal money to start.",
    explanationVi: "Chỉ cần kỹ năng basic và ít tiền để bắt đầu.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Findings show early knitted items to be ______ in shape",
    questionVi: "Findings show early knitted items to be ______ in shape",
    modelParaphraseEn: "most of the items produced were round rather than flat",
    modelParaphraseVi: "most of the items produced were round rather than flat",
    acceptedAnswers: ["round"],
    explanationEn: "Early items (socks, gloves) were round, knitted in one piece on four or five needles.",
    explanationVi: "Đồ sớm (tất, găng) có hình round, đan một mảnh bằng 4–5 kim.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "The first needles were made of natural materials such as wood and ______",
    questionVi: "The first needles were made of natural materials such as wood and ______",
    modelParaphraseEn: "hand carved out of wood and other natural materials, like bone",
    modelParaphraseVi: "hand carved out of wood and other natural materials, like bone",
    acceptedAnswers: ["bone"],
    explanationEn: "Early needles: wood and bone. Today's are steel or plastic.",
    explanationVi: "Kim sớm: gỗ và bone. Ngày nay là thép hoặc nhựa.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Early yarns felt ______ to touch",
    questionVi: "Early yarns felt ______ to touch",
    modelParaphraseEn: "yarns made from linen, hemp, cotton and wool, and these were often very rough on the skin",
    modelParaphraseVi: "yarns made from linen, hemp, cotton and wool, and these were often very rough on the skin",
    acceptedAnswers: ["rough"],
    explanationEn: "Early yarns felt rough on the skin; the spinning wheel later made finer wool.",
    explanationVi: "Sợi sớm sờ rough trên da; xe quay sợi sau này làm len mịn hơn.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Geographical areas had their own ______ of knitting",
    questionVi: "Geographical areas had their own ______ of knitting",
    modelParaphraseEn: "regional differences in style developed",
    modelParaphraseVi: "regional differences in style developed",
    acceptedAnswers: ["style"],
    explanationEn: "Each region developed its own knitting style / visual identity.",
    explanationVi: "Mỗi vùng có style đan riêng / nhận diện thị giác riêng.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "Everyday tasks like looking after ______ were done while knitting",
    questionVi: "Everyday tasks like looking after ______ were done while knitting",
    modelParaphraseEn: "while watching over sheep, walking to market or riding in boats",
    modelParaphraseVi: "while watching over sheep, walking to market or riding in boats",
    acceptedAnswers: ["sheep"],
    explanationEn: "People knitted while watching over sheep, going to market or in boats.",
    explanationVi: "Người ta đan khi trông sheep, đi chợ hoặc ngồi thuyền.",
  },
];
