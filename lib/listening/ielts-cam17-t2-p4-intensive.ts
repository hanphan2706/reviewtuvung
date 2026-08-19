import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["let's make a start", "let us make a start"] },
    { id: "g2", answers: ["I'm going to introduce another factor", "I am going to introduce another factor"] },
    { id: "g3", answers: ["In order to illustrate its effect"] },
    { id: "g4", answers: ["most of whom live in Iceland"] },
    { id: "g5", answers: ["even though this number is small"] },
    { id: "g6", answers: ["they tend to create one"] },
    { id: "g7", answers: ["rather than borrowing from another language"] },
    { id: "g8", answers: ["it's changed very little in the past millennium", "it has changed very little in the past millennium"] },
    { id: "g9", answers: ["I can't think of a more appropriate term", "I cannot think of a more appropriate term"] },
    { id: "g10", answers: ["that's exactly what you do mentally", "that is exactly what you do mentally"] },
    { id: "g11", answers: ["young Icelanders spend a great deal of time"] },
    { id: "g12", answers: ["this world is predominantly English"] },
    { id: "g13", answers: ["They didn't even exist until comparatively recently", "They did not even exist until comparatively recently"] },
    { id: "g14", answers: ["the extent of the influence of English"] },
    { id: "g15", answers: ["it's all happening really fast", "it is all happening really fast"] },
    { id: "g16", answers: ["the outcome is a little troubling"] },
    { id: "g17", answers: ["at risk of losing its mother tongue"] },
    { id: "g18", answers: ["this is going to be an uphill struggle"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right, everyone, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Over the past few sessions, we've been considering the reasons why some world languages are in decline, and today " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " that affects languages, and the speakers of those languages, and that's technology and, in particular, digital technology.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", I'm going to focus on the Icelandic language, which is spoken by around 321,000 people, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " – an island in the North Atlantic Ocean." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The problem for this language is not the number of speakers – " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Nor is it about losing words to other languages, such as English." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In fact, the vocabulary of Icelandic is continually increasing because when speakers need a new word for something, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "All this makes Icelandic quite a special language – " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", yet it can handle twenty-first-century concepts related to the use of computers and digital technology.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Take, for example, the word for web browser … this is vafri in Icelandic, which comes from the verb 'to wander'. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " because " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " when you browse the internet." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then there's an Icelandic word for podcast – which is too hard to pronounce! And so on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Icelandic, then, is alive and growing, but – and it's a big but – " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " in the digital world and " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Think about smartphones." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", but today young people use them all the time to read books, watch TV or films, play games, listen to music, and so on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Obviously, this is a good thing in many respects because it promotes their bilingual skills, but " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " in the virtual world is staggering and " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For their parents and grandparents, the change is less concerning because they already have their native-speaker skills in Icelandic.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But for young speakers – well, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For example, teachers have found that playground conversations in Icelandic secondary schools can be conducted entirely in English, while teachers of much younger children have reported situations where their classes find it easier to say what is in a picture using English, rather than Icelandic.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The very real and worrying consequence of all this is that the young generation in Iceland is " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Of course, this is happening to other European languages too, but while internet companies might be willing to offer, say, French options in their systems, it's much harder for them to justify the expense of doing the same for a language that has a population the size of a French town, such as Nice.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The other drawback of Icelandic is the grammar, which is significantly more complex than in most languages.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "At the moment, the tech giants are simply not interested in tackling this." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So, what is the Icelandic government doing about this?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, large sums of money are being allocated to a language technology fund that it is hoped will lead to the development of Icelandic sourced apps and other social media and digital systems, but clearly " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On the positive side, they know that Icelandic is still the official language of education and government.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It has survived for well over a thousand years and the experts predict that its future in this nation state is sound and will continue to be so.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, there's no doubt that it's becoming an inevitable second choice in young people's lives.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "This raises important questions." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When you consider how much of the past is tied up in a language, will young Icelanders lose their sense of their own identity?",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Another issue that concerns the government of Iceland is this." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If children are learning two languages through different routes, neither of which they are fully fluent in, will they be able to express themselves properly?",
        },
      ],
    },
  ],
};

export const CAM17_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "has approximately ______ speakers",
    questionVi: "has approximately ______ speakers",
    modelParaphraseEn: "spoken by around 321,000 people, most of whom live in Iceland",
    modelParaphraseVi: "spoken by around 321,000 people, most of whom live in Iceland",
    acceptedAnswers: ["321,000", "321000", "321 000"],
    explanationEn: "Around 321,000 speakers; the problem is not the small number itself.",
    explanationVi: "Khoảng 321,000 người nói; vấn đề không phải số lượng nhỏ.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "has a ______ that is still growing",
    questionVi: "has a ______ that is still growing",
    modelParaphraseEn: "the vocabulary of Icelandic is continually increasing",
    modelParaphraseVi: "the vocabulary of Icelandic is continually increasing",
    acceptedAnswers: ["vocabulary"],
    explanationEn: "Speakers create new words instead of borrowing, so vocabulary keeps growing.",
    explanationVi: "Người nói tạo từ mới thay vì vay mượn, nên vocabulary vẫn tăng.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "own words for computer-based concepts, such as web browser and ______",
    questionVi: "own words for computer-based concepts, such as web browser and ______",
    modelParaphraseEn: "Then there's an Icelandic word for podcast – which is too hard to pronounce",
    modelParaphraseVi: "Then there's an Icelandic word for podcast – which is too hard to pronounce",
    acceptedAnswers: ["podcast"],
    explanationEn: "Web browser is already on the notes (vafri); the other example is podcast.",
    explanationVi: "Web browser đã có trên đề (vafri); ví dụ kia là podcast.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "are big users of digital technology, such as ______",
    questionVi: "are big users of digital technology, such as ______",
    modelParaphraseEn: "Think about smartphones. … today young people use them all the time",
    modelParaphraseVi: "Think about smartphones. … today young people use them all the time",
    acceptedAnswers: ["smartphones"],
    explanationEn: "Young Icelanders use smartphones constantly to read, watch, play and listen.",
    explanationVi: "Giới trẻ Iceland dùng smartphones liên tục để đọc, xem, chơi, nghe.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "are becoming ______ very quickly",
    questionVi: "are becoming ______ very quickly",
    modelParaphraseEn: "it promotes their bilingual skills … the influence of English in the virtual world is staggering and it's all happening really fast",
    modelParaphraseVi: "it promotes their bilingual skills … the influence of English in the virtual world is staggering and it's all happening really fast",
    acceptedAnswers: ["bilingual"],
    explanationEn: "Digital English use is making them bilingual very quickly.",
    explanationVi: "Dùng tiếng Anh trên môi trường số khiến họ bilingual rất nhanh.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "are having discussions using only English while they are in the ______ at school",
    questionVi: "are having discussions using only English while they are in the ______ at school",
    modelParaphraseEn: "playground conversations in Icelandic secondary schools can be conducted entirely in English",
    modelParaphraseVi: "playground conversations in Icelandic secondary schools can be conducted entirely in English",
    acceptedAnswers: ["playground"],
    explanationEn: "Secondary-school playground talk can be entirely in English.",
    explanationVi: "Nói chuyện ở playground trường cấp 2 có thể hoàn toàn bằng tiếng Anh.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "are better able to identify the content of a ______ in English than Icelandic",
    questionVi: "are better able to identify the content of a ______ in English than Icelandic",
    modelParaphraseEn: "their classes find it easier to say what is in a picture using English, rather than Icelandic",
    modelParaphraseVi: "their classes find it easier to say what is in a picture using English, rather than Icelandic",
    acceptedAnswers: ["picture"],
    explanationEn: "Younger children name what is in a picture more easily in English.",
    explanationVi: "Trẻ nhỏ nói nội dung picture bằng tiếng Anh dễ hơn tiếng Iceland.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "write very little in Icelandic because of the small number of speakers and because of how complicated its ______ is",
    questionVi: "write very little in Icelandic because of the small number of speakers and because of how complicated its ______ is",
    modelParaphraseEn: "The other drawback of Icelandic is the grammar, which is significantly more complex than in most languages",
    modelParaphraseVi: "The other drawback of Icelandic is the grammar, which is significantly more complex than in most languages",
    acceptedAnswers: ["grammar"],
    explanationEn: "Tech firms skip Icelandic because of speaker numbers and complex grammar.",
    explanationVi: "Công ty công nghệ bỏ qua tiếng Iceland vì ít người nói và grammar phức tạp.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "worried that young Icelanders may lose their ______ as Icelanders",
    questionVi: "worried that young Icelanders may lose their ______ as Icelanders",
    modelParaphraseEn: "will young Icelanders lose their sense of their own identity?",
    modelParaphraseVi: "will young Icelanders lose their sense of their own identity?",
    acceptedAnswers: ["identity"],
    explanationEn: "Language carries the past; the fear is losing Icelandic identity.",
    explanationVi: "Ngôn ngữ gắn với quá khứ; nỗi lo là mất identity người Iceland.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "worried about the consequences of children not being ______ in either Icelandic or English",
    questionVi: "worried about the consequences of children not being ______ in either Icelandic or English",
    modelParaphraseEn: "neither of which they are fully fluent in, will they be able to express themselves properly?",
    modelParaphraseVi: "neither of which they are fully fluent in, will they be able to express themselves properly?",
    acceptedAnswers: ["fluent"],
    explanationEn: "Two incomplete routes may leave children not fully fluent in either language.",
    explanationVi: "Hai đường học dở có thể khiến trẻ không fluent ở cả hai ngôn ngữ.",
  },
];
