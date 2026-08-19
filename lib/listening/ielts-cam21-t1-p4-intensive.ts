import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["this has only become possible"] },
    { id: "g2", answers: ["without which industry could not exist"] },
    { id: "g3", answers: ["we'd have no machines and no transportation", "we would have no machines and no transportation"] },
    { id: "g4", answers: ["there's a third resource that's essential", "there is a third resource that is essential"] },
    { id: "g5", answers: ["concern's been growing", "concern has been growing"] },
    { id: "g6", answers: ["don't just spring up overnight", "do not just spring up overnight"] },
    { id: "g7", answers: ["they can easily change what crop they produce"] },
    { id: "g8", answers: ["that's much harder", "that is much harder"] },
    { id: "g9", answers: ["the rubber tree's very choosy about where it grows", "the rubber tree is very choosy about where it grows"] },
    { id: "g10", answers: ["It's very labour-intensive", "It is very labour-intensive"] },
    { id: "g11", answers: ["this is also possible with rubber"] },
    { id: "g12", answers: ["very little genetic diversity among the trees"] },
    { id: "g13", answers: ["which in turn makes them very vulnerable to disease"] },
    { id: "g14", answers: ["easier and more profitable for them"] },
    { id: "g15", answers: ["this looks likely to continue in the future"] },
    { id: "g16", answers: ["it's also possible to make rubber synthetically", "it is also possible to make rubber synthetically"] },
    { id: "g17", answers: ["it can't replace natural rubber", "it cannot replace natural rubber"] },
    { id: "g18", answers: ["they're very adaptable", "they are very adaptable"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Much of the world now lives in an industrial civilisation. But " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " because we have the necessary natural resources. There are three types of natural resource " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One of these is metal – without that " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". Another is fossil fuels, which we need to power those machines. But " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " to connect the different parts of a machine together with belts and pipes and shock absorbers, and that is rubber. It's now used in over 40,000 products, from waterproof footwear to surgical gloves.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At present, we have two types of rubber in common use. One is natural rubber, which nearly all comes from the Pará rubber tree. This was originally native to Brazil, but is now cultivated on plantations in South-East Asia. Recently, however, ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " that supplies may soon be insufficient for the world's needs. So what exactly is limiting the supply of natural rubber?",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, for one thing, rubber trees " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". It can take eight to ten years for a tree to start producing rubber, so cultivating them's a slow process.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And this leads to another problem. With most crops, farmers don't have to think very far ahead, so ",
        },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", or how much of a crop they produce, if they find the demand for that crop is rising or falling. But if you have to plant eight or ten years ahead, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And also " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". It needs the right temperature, the right amount of rainfall, and the right altitude – not too high and not too low. The result is that it can't be grown in the northern or southern parts of the globe, only around the equator.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another problem is that the rubber is basically extracted in the same way as it's been done for hundreds of years, and that's by hand, by making small cuts in the trunk of the tree, and putting a little cup there to catch the latex, as the rubber is called. ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And it's not just the initial production that's limiting supplies. With other resources such as water and glass, when we've finished using them we can recycle them, but although ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", it's very difficult, so that also reduces the amount we have available." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And in the last few years, there have been new threats to the supply of natural rubber. One problem is linked to the fact that nearly all the rubber trees in South-East Asia are descended from just a small number of seeds brought from Brazil in the nineteenth century. This means that there's ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". The most dangerous threat is a fungus, which destroyed large numbers of rubber trees in Brazil, and which could cause devastation to plantations worldwide.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another problem is that farmers in South-East Asia are increasingly turning to the cultivation of palm oil, which is ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". And finally, in recent years South-East Asia, like other parts of the world, has been repeatedly hit by extreme types of weather, and ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, as well as using natural rubber, " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". This works very well for some purposes, for example, making engine parts, or silicone pots and pans used for cooking. But compared with natural rubber, it's not anything like as strong, and this means ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " in other products. For example, while a mixture of natural rubber and synthetic rubber works well in car tyres, only natural rubber can stand up to the extreme speeds of aircraft tyres during take-off and landing.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So for some time, scientists have been looking for alternative sources of natural rubber. One that's been known about for some time seems initially to be a rather unlikely source. It's a wild plant with yellow flowers that we normally regard as a weed when we see it in our gardens. But when it's pulled up and its roots cut open, they're found to contain rubber.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now, compared to the rubber tree, dandelions produce relatively small amounts of rubber, but unlike rubber trees, ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". They'll grow in all sorts of places, and they don't need rich soil. So at present there are several projects underway investigating the possibility of using dandelions as a source of rubber.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another possibility is a desert shrub grown in Mexico and Texas, which is also...",
        },
      ],
    },
  ],
};

export const CAM21_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "Three essential resources: ______, fossil fuels, rubber",
    questionVi: "Ba tài nguyên thiết yếu: ______, fossil fuels, rubber",
    modelParaphraseEn: "One of these is metal – without that we'd have no machines and no transportation. Another is fossil fuels … and that is rubber",
    modelParaphraseVi: "One of these is metal – without that we'd have no machines and no transportation. Another is fossil fuels … and that is rubber",
    acceptedAnswers: ["metal", "metals"],
    explanationEn: "The three industrial resources are metal(s), fossil fuels and rubber.",
    explanationVi: "Ba tài nguyên công nghiệp là metal(s), fossil fuels và rubber.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "the growth of the tree is ______",
    questionVi: "the growth of the tree is ______",
    modelParaphraseEn: "It can take eight to ten years for a tree to start producing rubber, so cultivating them's a slow process",
    modelParaphraseVi: "It can take eight to ten years for a tree to start producing rubber, so cultivating them's a slow process",
    acceptedAnswers: ["slow"],
    explanationEn: "Rubber trees take eight to ten years to produce — growth / cultivation is slow.",
    explanationVi: "Cây cao su mất 8–10 năm mới cho mủ — growth / cultivation is slow.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "production cannot easily be adjusted because of increasing or decreasing ______",
    questionVi: "production cannot easily be adjusted because of increasing or decreasing ______",
    modelParaphraseEn: "they can easily change what crop they produce … if they find the demand for that crop is rising or falling. But if you have to plant eight or ten years ahead, that's much harder",
    modelParaphraseVi: "they can easily change what crop they produce … if they find the demand for that crop is rising or falling. But if you have to plant eight or ten years ahead, that's much harder",
    acceptedAnswers: ["demand"],
    explanationEn: "Other crops can follow rising or falling demand; rubber cannot, because you plant 8–10 years ahead.",
    explanationVi: "Cây khác có thể theo demand tăng/giảm; cao su thì không, vì phải trồng trước 8–10 năm.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "the tree only grows near the ______",
    questionVi: "the tree only grows near the ______",
    modelParaphraseEn: "it can't be grown in the northern or southern parts of the globe, only around the equator",
    modelParaphraseVi: "it can't be grown in the northern or southern parts of the globe, only around the equator",
    acceptedAnswers: ["equator"],
    explanationEn: "It needs the right temperature, rainfall and altitude, so it only grows around the equator.",
    explanationVi: "Cần nhiệt độ, mưa và độ cao phù hợp, nên chỉ mọc quanh equator.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "it is very difficult to ______ rubber after production",
    questionVi: "it is very difficult to ______ rubber after production",
    modelParaphraseEn: "we can recycle them, but although this is also possible with rubber, it's very difficult",
    modelParaphraseVi: "we can recycle them, but although this is also possible with rubber, it's very difficult",
    acceptedAnswers: ["recycle"],
    explanationEn: "Water and glass can be recycled easily; rubber can be recycled but it is very difficult.",
    explanationVi: "Nước và thủy tinh dễ recycle; cao su cũng recycle được nhưng rất khó.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "lack of genetic diversity, leading to danger of disease caused by a ______",
    questionVi: "lack of genetic diversity, leading to danger of disease caused by a ______",
    modelParaphraseEn: "The most dangerous threat is a fungus, which destroyed large numbers of rubber trees in Brazil",
    modelParaphraseVi: "The most dangerous threat is a fungus, which destroyed large numbers of rubber trees in Brazil",
    acceptedAnswers: ["fungus"],
    explanationEn: "Little genetic diversity (few Brazilian seeds) makes trees vulnerable; the worst disease threat is a fungus.",
    explanationVi: "Ít đa dạng gene (ít hạt từ Brazil) khiến cây dễ bệnh; mối đe dọa nguy hiểm nhất là fungus.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "extreme ______ events",
    questionVi: "extreme ______ events",
    modelParaphraseEn: "has been repeatedly hit by extreme types of weather, and this looks likely to continue in the future",
    modelParaphraseVi: "has been repeatedly hit by extreme types of weather, and this looks likely to continue in the future",
    acceptedAnswers: ["weather"],
    explanationEn: "New threats also include a shift to palm oil and extreme weather events.",
    explanationVi: "Đe dọa mới còn gồm chuyển sang palm oil và extreme weather events.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "synthetic rubber is less ______ than natural rubber",
    questionVi: "synthetic rubber is less ______ than natural rubber",
    modelParaphraseEn: "it's not anything like as strong, and this means it can't replace natural rubber … only natural rubber can stand up to the extreme speeds of aircraft tyres",
    modelParaphraseVi: "it's not anything like as strong, and this means it can't replace natural rubber … only natural rubber can stand up to the extreme speeds of aircraft tyres",
    acceptedAnswers: ["strong"],
    explanationEn: "Synthetic rubber is less strong than natural rubber — fine for engine parts and silicone cookware, not for aircraft tyres.",
    explanationVi: "Cao su tổng hợp less strong hơn cao su tự nhiên — dùng được cho engine parts và nồi silicone, không dùng cho lốp máy bay.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "a wild flower (a type of dandelion) has rubber in its ______",
    questionVi: "a wild flower (a type of dandelion) has rubber in its ______",
    modelParaphraseEn: "when it's pulled up and its roots cut open, they're found to contain rubber",
    modelParaphraseVi: "when it's pulled up and its roots cut open, they're found to contain rubber",
    acceptedAnswers: ["roots"],
    explanationEn: "The yellow-flowered weed (dandelion) has rubber in its roots.",
    explanationVi: "Cỏ dại hoa vàng (dandelion) có cao su trong roots.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "It can be grown in many locations and does not require good ______",
    questionVi: "It can be grown in many locations and does not require good ______",
    modelParaphraseEn: "They'll grow in all sorts of places, and they don't need rich soil",
    modelParaphraseVi: "They'll grow in all sorts of places, and they don't need rich soil",
    acceptedAnswers: ["soil"],
    explanationEn: "Dandelions are adaptable: they grow in many places and do not need rich soil.",
    explanationVi: "Bồ công anh thích nghi tốt: mọc nhiều nơi và không cần rich soil.",
  },
];
