import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["in some fashion or other"] },
    { id: "g2", answers: ["where birds went to in the winter"] },
    {
      id: "g3",
      answers: ["we now recognize as error-filled", "we now recognise as error-filled"],
    },
    { id: "g4", answers: ["Take hibernation theory for example"] },
    { id: "g5", answers: ["until experiments were done on caged birds"] },
    { id: "g6", answers: ["birds have no hibernation instinct"] },
    { id: "g7", answers: ["the seasonal change of one species into another"] },
    { id: "g8", answers: ["These assumptions are understandable"] },
    { id: "g9", answers: ["an incorrect interpretation based on correct observations"] },
    { id: "g10", answers: ["The most bizarre theory"] },
    { id: "g11", answers: ["a surprisingly well-regarded paper"] },
    { id: "g12", answers: ["This particular stork made history"] },
    { id: "g13", answers: ["this spear was definitely not European"] },
    { id: "g14", answers: ["You can still see the 'arrow stork'", "You can still see the arrow stork"] },
    { id: "g15", answers: ["People gradually became aware"] },
    { id: "g16", answers: ["This is still common practice today"] },
    { id: "g17", answers: ["Huge amounts of data were gathered"] },
    { id: "g18", answers: ["for the first time in history"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Scientists believe that a majority of the earth's bird population migrate " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some travel seasonally for relatively short distances, such as birds that move from their winter habitats in lowlands to mountain tops for the summers. Others, like the Arctic Tern, travel more than 25,000 miles seasonally between the northern and southern poles.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Bird migration has been studied over many centuries through a variety of observations. But until relatively recently, ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " was considered something of a mystery." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The lack of modern science and technology led to many theories that " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " and even somewhat amusing." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " – two thousand years ago, it was commonly believed that when birds left an area, they went underwater to hibernate in the seas and oceans.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another theory for the regular appearance and disappearance of birds was that they spend winter hidden in mud till the weather changed and food became abundant again.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The theory that some birds hibernate persisted " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " in the 1940s which demonstrated that " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One of the earliest naturalists and philosophers from ancient Greece was Aristotle who was the first writer to discuss the disappearance and reappearance of some bird species at certain times of year. He developed the theory of transmutation, ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", by observing redstarts and robins." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He observed that in the autumn, small birds called 'redstarts' began to lose their feathers, which convinced Aristotle that they changed into robins for the winter, and back into redstarts in the summer.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " given that this pair of species are similar in shape, but are a classic example of ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " was put forward by an English amateur scientist, Charles Morton, in the seventeenth century.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "He wrote " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " claiming that birds migrate to the moon and back every year. He came to this conclusion as the only logical explanation for the total disappearance of some species.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One of the key moments in the development of migration theory came in 1822 when a white stork was shot in Germany. ",
        },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " because of the long spear in its neck which incredibly had not killed it – everyone immediately realised ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It turned out to be a spear from a tribe in Central Africa. This was a truly defining moment in the history of ornithology because it was the first evidence that storks spend their winters in sub-Saharan Africa. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " in the Zoological Collection of the University of Rostock in Germany." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " that European birds moved south in autumn and north in summer but didn't know much about it until the practice of catching birds and putting rings on their legs became established.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Before this, very little information was available about the actual destinations of particular species and how they travelled there. People speculated that larger birds provided a kind of taxi service for smaller birds by carrying them on their backs. This idea came about because it seemed impossible that small birds weighing only a few grams could fly over vast oceans. This idea was supported by observations of bird behaviour such as the harassment of larger birds by smaller birds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The development of bird ringing, by a Danish schoolteacher, Hans Christian Cornelius Mortensen, made many discoveries possible. ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " and relies upon what is known as 'recovery' – this is when ringed birds are found dead in the place they have migrated to, and identified.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " in the early part of the twentieth century and " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " people understood where birds actually went to in winter." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In 1931, an atlas was published showing where the most common species of European birds migrated to. More recent theories about bird migration …",
        },
      ],
    },
  ],
};

export const CAM17_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "birds hibernated underwater or buried themselves in ______",
    questionVi: "birds hibernated underwater or buried themselves in ______",
    modelParaphraseEn: "they spend winter hidden in mud till the weather changed and food became abundant again",
    modelParaphraseVi: "they spend winter hidden in mud till the weather changed and food became abundant again",
    acceptedAnswers: ["mud"],
    explanationEn:
      "Hibernation theory: birds went underwater, or spent winter hidden in mud. Caged-bird experiments later showed no hibernation instinct.",
    explanationVi:
      "Lý thuyết ngủ đông: chim xuống nước, hoặc trú trong mud. Thí nghiệm chim lồng sau đó cho thấy không có bản năng ngủ đông.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "in autumn redstarts experience the loss of ______",
    questionVi: "in autumn redstarts experience the loss of ______",
    modelParaphraseEn: "in the autumn, small birds called 'redstarts' began to lose their feathers",
    modelParaphraseVi: "in the autumn, small birds called 'redstarts' began to lose their feathers",
    acceptedAnswers: ["feathers"],
    explanationEn: "Aristotle saw redstarts lose feathers in autumn and thought they turned into robins.",
    explanationVi: "Aristotle thấy redstarts rụng feathers mùa thu và tưởng chúng biến thành robin.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "the two species of birds had a similar ______",
    questionVi: "the two species of birds had a similar ______",
    modelParaphraseEn: "this pair of species are similar in shape",
    modelParaphraseVi: "this pair of species are similar in shape",
    acceptedAnswers: ["shape"],
    explanationEn:
      "The assumption seemed logical because redstarts and robins have a similar shape – but it was the wrong interpretation of correct observations.",
    explanationVi:
      "Giả định nghe hợp lý vì redstart và robin có shape giống nhau – nhưng đó là diễn giải sai từ quan sát đúng.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "Charles Morton popularised the idea that birds fly to the ______ in winter",
    questionVi: "Charles Morton popularised the idea that birds fly to the ______ in winter",
    modelParaphraseEn: "claiming that birds migrate to the moon and back every year",
    modelParaphraseVi: "claiming that birds migrate to the moon and back every year",
    acceptedAnswers: ["moon"],
    explanationEn: "Morton's 17th-century paper said birds fly to the moon – the only explanation he saw for total disappearance.",
    explanationVi: "Bài thế kỷ 17 của Morton nói chim bay lên moon – ông cho đó là cách duy nhất giải thích việc biến mất hoàn toàn.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "a stork was killed in Germany which had an African spear in its ______",
    questionVi: "a stork was killed in Germany which had an African spear in its ______",
    modelParaphraseEn: "the long spear in its neck which incredibly had not killed it",
    modelParaphraseVi: "the long spear in its neck which incredibly had not killed it",
    acceptedAnswers: ["neck"],
    explanationEn: "1822: a white stork in Germany had a Central African spear in its neck (and was then shot).",
    explanationVi: "1822: cò trắng ở Đức có giáo Trung Phi cắm ở neck (rồi bị bắn).",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "previously there had been no ______ that storks migrate to Africa",
    questionVi: "previously there had been no ______ that storks migrate to Africa",
    modelParaphraseEn: "it was the first evidence that storks spend their winters in sub-Saharan Africa",
    modelParaphraseVi: "it was the first evidence that storks spend their winters in sub-Saharan Africa",
    acceptedAnswers: ["evidence"],
    explanationEn: "The spear was the first evidence that storks winter in sub-Saharan Africa.",
    explanationVi: "Chiếc giáo là evidence đầu tiên rằng cò trú đông ở châu Phi cận Sahara.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Little was known about the ______ and journeys of migrating birds until ringing",
    questionVi: "Little was known about the ______ and journeys of migrating birds until ringing",
    modelParaphraseEn: "very little information was available about the actual destinations of particular species and how they travelled there",
    modelParaphraseVi: "very little information was available about the actual destinations of particular species and how they travelled there",
    acceptedAnswers: ["destinations"],
    explanationEn: "Until ringing, little was known about destinations and how species travelled there.",
    explanationVi: "Trước khi đóng vòng, người ta biết rất ít về destinations và đường đi của từng loài.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "small birds were considered incapable of travelling across huge ______",
    questionVi: "small birds were considered incapable of travelling across huge ______",
    modelParaphraseEn: "it seemed impossible that small birds weighing only a few grams could fly over vast oceans",
    modelParaphraseVi: "it seemed impossible that small birds weighing only a few grams could fly over vast oceans",
    acceptedAnswers: ["oceans"],
    explanationEn: "People thought large birds carried small ones because tiny birds could not cross vast oceans.",
    explanationVi: "Người ta nghĩ chim lớn cõng chim nhỏ vì chim nhỏ không thể bay qua oceans rộng.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Ringing depended on what is called the '______' of dead birds",
    questionVi: "Ringing depended on what is called the '______' of dead birds",
    modelParaphraseEn: "relies upon what is known as 'recovery' – ringed birds are found dead in the place they have migrated to, and identified",
    modelParaphraseVi: "relies upon what is known as 'recovery' – ringed birds are found dead in the place they have migrated to, and identified",
    acceptedAnswers: ["recovery"],
    explanationEn: "Ringing depends on recovery: finding ringed birds dead at the migration destination.",
    explanationVi: "Đóng vòng dựa vào recovery: tìm chim đã đeo vòng chết ở nơi di cư.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "In 1931, the first ______ to show the migration of European birds was printed",
    questionVi: "In 1931, the first ______ to show the migration of European birds was printed",
    modelParaphraseEn: "In 1931, an atlas was published showing where the most common species of European birds migrated to",
    modelParaphraseVi: "In 1931, an atlas was published showing where the most common species of European birds migrated to",
    acceptedAnswers: ["atlas"],
    explanationEn: "In 1931 the first atlas of common European bird migration was published.",
    explanationVi: "Năm 1931, atlas đầu tiên về di cư các loài chim châu Âu phổ biến được in.",
  },
];
