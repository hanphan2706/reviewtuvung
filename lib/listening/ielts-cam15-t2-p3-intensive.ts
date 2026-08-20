import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "what we're supposed to be doing",
        "what we are supposed to be doing",
      ],
    },
    { id: "g2", answers: ["British life and literature"] },
    { id: "g3", answers: ["we just need to plan it"] },
    {
      id: "g4",
      answers: [
        "have you gathered",
        "Have you gathered",
      ],
    },
    { id: "g5", answers: ["I'm not clear about it", "I am not clear about it"] },
    { id: "g6", answers: ["but it didn't attract many people", "but it did not attract many people"] },
    { id: "g7", answers: ["to raise the university's profile"] },
    {
      id: "g8",
      answers: [
        "we don't have to cover",
        "we do not have to cover",
      ],
    },
    { id: "g9", answers: ["I suggest just using Charles Dickens"] },
    { id: "g10", answers: ["other than writing"] },
    { id: "g11", answers: ["focus on the novels"] },
    {
      id: "g12",
      answers: [
        "I've printed out a list",
        "I have printed out a list",
      ],
    },
    { id: "g13", answers: ["when it came out"] },
    { id: "g14", answers: ["quotations from the novel"] },
    {
      id: "g15",
      answers: ["something less obvious"],
    },
    {
      id: "g16",
      answers: ["only the bad things"],
    },
    { id: "g17", answers: ["The main theme is selfishness"] },
    { id: "g18", answers: ["That's going to be quite hard", "That is going to be quite hard"] },
  ],
  lines: [
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "OK, Graham, so let's check we both know " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "GRAHAM", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "So, for the university's open day, we have to plan a display on " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " in the mid-19th century." },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "That's right. But we'll have some people to help us find the materials and set it up, remember – for the moment, ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "Good. So " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " who's expected to come and see the display? Is it for the people studying English, or students from other departments? ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        { type: "text", text: "Nor me. That was how it used to be, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", so this year it's going to be part of an open day, " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". It'll be publicised in the city, to encourage people to come and find out something of what goes on here. And it's included in the information that's sent to people who are considering applying to study here next year.",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [{ type: "text", text: "Presumably some current students and lecturers will come?" }],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "I would imagine so, but we've been told to concentrate on the other categories of people.",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " the whole range of 19th-century literature, do we?" },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        { type: "text", text: "No, it's entirely up to us. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "That's a good idea. Most people have heard of him, and have probably read some of his novels, or seen films based on them, so that's a good lead-in to life in his time.",
        },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "Exactly. And his novels show the awful conditions that most people had to live in, don't they: he wanted to shock people into doing something about it.",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "Did he do any campaigning, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "Yes, he campaigned for education and other social reforms, and gave talks, but I'm inclined to ignore that and ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CATHY", segments: [{ type: "text", text: "Yes, I agree." }] },
    {
      speaker: "CATHY",
      segments: [{ type: "text", text: "OK, so now shall we think about a topic linked to each novel?" }],
    },
    {
      speaker: "GRAHAM",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " of Dickens's novels in the order they were published, in the hope you'd agree to focus on him!",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "You're lucky I did agree! Let's have a look. OK, the first was The Pickwick Papers, published in 1836. It was very successful ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", wasn't it, and was adapted for the theatre straight away." },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "There's an interesting point, though, that there's a character who keeps falling asleep, and that medical condition was named after the book – Pickwickian Syndrome.",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        { type: "text", text: "Oh, so why don't we use that as the topic, and include some " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "Right. Next is Oliver Twist. There's a lot in the novel about poverty. But maybe ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " …" },
      ],
    },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "Well Oliver is taught how to steal, isn't he? We could use that to illustrate the fact that very few children went to school, particularly not poor children, so they learnt in other ways.",
        },
      ],
    },
    { speaker: "GRAHAM", segments: [{ type: "text", text: "Good idea. What's next?" }] },
    {
      speaker: "CATHY",
      segments: [{ type: "text", text: "Maybe Nicholas Nickleby. Actually he taught in a really cruel school, didn't he?" }],
    },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "That's right. But there's also the company of touring actors that Nicholas joins. We could do something on theatres and other amusements of the time. We don't want ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", do we?" },
      ],
    },
    { speaker: "CATHY", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "GRAHAM",
      segments: [{ type: "text", text: "What about Martin Chuzzlewit? He goes to the USA, doesn't he?" }],
    },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "Yes, and Dickens himself had been there a year before, and drew on his experience there in the novel.",
        },
      ],
    },
    {
      speaker: "GRAHAM",
      segments: [
        { type: "text", text: "I wonder, though … " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", so we could do something on social justice? No, too general, let's keep to your idea – I think it would work well.",
        },
      ],
    },
    {
      speaker: "CATHY",
      segments: [{ type: "text", text: "He wrote Bleak House next – that's my favourite of his novels." }],
    },
    { speaker: "GRAHAM", segments: [{ type: "text", text: "Yes, mine too. His satire of the legal system is pretty powerful." }] },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "That's true, but think about Esther, the heroine. As a child she lives with someone she doesn't know is her aunt, who treats her very badly. Then she's very happy living with her guardian, and he puts her in charge of the household. And at the end she gets married and her guardian gives her and her husband a house, where of course they're very happy.",
        },
      ],
    },
    { speaker: "GRAHAM", segments: [{ type: "text", text: "Yes, I like that." }] },
    {
      speaker: "CATHY",
      segments: [
        {
          type: "text",
          text: "What shall we take next? Little Dorrit? Old Mr Dorrit has been in a debtors' prison for years …",
        },
      ],
    },
    { speaker: "GRAHAM", segments: [{ type: "text", text: "So was Dickens's father, wasn't he?" }] },
    { speaker: "CATHY", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "GRAHAM",
      segments: [
        {
          type: "text",
          text: "What about focusing on the part when Mr Dorrit inherits a fortune, and he starts pretending he's always been rich?",
        },
      ],
    },
    { speaker: "CATHY", segments: [{ type: "text", text: "Good idea." }] },
    {
      speaker: "GRAHAM",
      segments: [
        { type: "text", text: "OK, so next we need to think about what materials we want to illustrate each issue. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM15_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Display primarily intended for (TWO): A English students / B local residents / C teaching staff / D potential new students / E other departments",
    questionVi: "Trưng bày chủ yếu cho (HAI): A SV Anh / B cư dân / C giảng viên / D SV tiềm năng / E khoa khác",
    modelParaphraseEn: "It'll be publicised in the city, to encourage people to come and find out something of what goes on here",
    modelParaphraseVi: "It'll be publicised in the city, to encourage people to come and find out something of what goes on here",
    acceptedAnswers: ["B", "residents of the local area", "people in the city"],
    explanationEn: "B = city publicity for local people. English students / other departments were the old audience; staff may come but are not the focus.",
    explanationVi: "B = quảng bá trong thành phố cho cư dân. SV Anh / khoa khác là đối tượng cũ; giảng viên có thể đến nhưng không phải trọng tâm.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Display primarily intended for (second group): D potential new students",
    questionVi: "Nhóm thứ hai: D sinh viên tiềm năng",
    modelParaphraseEn: "it's included in the information that's sent to people who are considering applying to study here next year",
    modelParaphraseVi: "it's included in the information that's sent to people who are considering applying to study here next year",
    acceptedAnswers: ["D", "potential new students", "considering applying"],
    explanationEn: "D = sent to people considering applying next year. Official pair with Q21 is B, D.",
    explanationVi: "D = gửi cho người đang cân nhắc apply năm sau. Cặp đáp án chính thức với Q21 là B, D.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Reasons for choosing Dickens (TWO): A speeches inspired others / B publications drew attention to social problems / C novels well-known now / D consulted on social issues / E reputation has changed",
    questionVi: "Lý do chọn Dickens (HAI): A bài nói / B ấn phẩm nêu vấn đề xã hội / C tiểu thuyết nổi tiếng / D được hỏi ý / E danh tiếng đổi",
    modelParaphraseEn: "his novels show the awful conditions … he wanted to shock people into doing something about it",
    modelParaphraseVi: "his novels show the awful conditions … he wanted to shock people into doing something about it",
    acceptedAnswers: ["B", "publications", "social problems", "shock people"],
    explanationEn: "B = novels/publications used to highlight social problems. They ignore his talks (not A/D).",
    explanationVi: "B = tiểu thuyết/ấn phẩm nêu vấn đề xã hội. Họ bỏ qua bài nói (không phải A/D).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Second reason for choosing Dickens: C His novels are well-known now",
    questionVi: "Lý do thứ hai: C tiểu thuyết vẫn nổi tiếng",
    modelParaphraseEn: "Most people have heard of him, and have probably read some of his novels, or seen films based on them",
    modelParaphraseVi: "Most people have heard of him, and have probably read some of his novels, or seen films based on them",
    acceptedAnswers: ["C", "well-known now", "heard of him"],
    explanationEn: "C = still well-known (books/films). Official pair with Q23 is B, C. Not E (reputation changed).",
    explanationVi: "C = vẫn nổi tiếng (sách/phim). Cặp với Q23 là B, C. Không phải E (danh tiếng đổi).",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "The Pickwick Papers — G medicine",
    questionVi: "The Pickwick Papers — G y học",
    modelParaphraseEn: "a character who keeps falling asleep, and that medical condition was named after the book – Pickwickian Syndrome",
    modelParaphraseVi: "a character who keeps falling asleep, and that medical condition was named after the book – Pickwickian Syndrome",
    acceptedAnswers: ["G", "medicine", "Pickwickian Syndrome", "medical condition"],
    explanationEn: "G = medicine (Pickwickian Syndrome), not the theatre adaptation.",
    explanationVi: "G = y học (Pickwickian Syndrome), không phải chuyển thể sân khấu.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Oliver Twist — B education",
    questionVi: "Oliver Twist — B giáo dục",
    modelParaphraseEn: "very few children went to school, particularly not poor children, so they learnt in other ways",
    modelParaphraseVi: "very few children went to school, particularly not poor children, so they learnt in other ways",
    acceptedAnswers: ["B", "education", "went to school"],
    explanationEn: "B = education (few children at school). Poverty is mentioned then rejected as too obvious; stealing is only the illustration.",
    explanationVi: "B = giáo dục (ít trẻ đi học). Poverty bị bỏ vì quá hiển nhiên; trộm cắp chỉ là minh họa.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Nicholas Nickleby — D entertainment",
    questionVi: "Nicholas Nickleby — D giải trí",
    modelParaphraseEn: "the company of touring actors that Nicholas joins. We could do something on theatres and other amusements of the time",
    modelParaphraseVi: "the company of touring actors that Nicholas joins. We could do something on theatres and other amusements of the time",
    acceptedAnswers: ["D", "entertainment", "theatres", "amusements"],
    explanationEn: "D = entertainment (touring actors / theatres), not the cruel school.",
    explanationVi: "D = giải trí (đoàn diễn / theatres), không phải ngôi trường tàn nhẫn.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Martin Chuzzlewit — C Dickens's travels",
    questionVi: "Martin Chuzzlewit — C chuyến đi của Dickens",
    modelParaphraseEn: "Dickens himself had been there a year before, and drew on his experience there in the novel",
    modelParaphraseVi: "Dickens himself had been there a year before, and drew on his experience there in the novel",
    acceptedAnswers: ["C", "Dickens's travels", "USA", "been there"],
    explanationEn: "C = Dickens's travels (USA). Social justice is rejected as too general.",
    explanationVi: "C = chuyến đi của Dickens (Mỹ). Social justice bị bỏ vì quá chung.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Bleak House — H a woman's life",
    questionVi: "Bleak House — H đời sống phụ nữ",
    modelParaphraseEn: "think about Esther, the heroine … child … guardian … gets married and her guardian gives her and her husband a house",
    modelParaphraseVi: "think about Esther, the heroine … child … guardian … gets married and her guardian gives her and her husband a house",
    acceptedAnswers: ["H", "a woman's life", "Esther"],
    explanationEn: "H = a woman's life (Esther). Legal satire is acknowledged then set aside.",
    explanationVi: "H = đời sống phụ nữ (Esther). Châm biếm pháp lý được nhắc rồi bỏ.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Little Dorrit — F wealth",
    questionVi: "Little Dorrit — F sự giàu có",
    modelParaphraseEn: "the part when Mr Dorrit inherits a fortune, and he starts pretending he's always been rich",
    modelParaphraseVi: "the part when Mr Dorrit inherits a fortune, and he starts pretending he's always been rich",
    acceptedAnswers: ["F", "wealth", "fortune", "rich"],
    explanationEn: "F = wealth (inherits a fortune / pretends he has always been rich), not the prison itself.",
    explanationVi: "F = sự giàu có (thừa kế fortune / giả vờ vốn giàu), không phải nhà tù.",
  },
];
