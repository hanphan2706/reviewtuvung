import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["please call me Beth"] },
    {
      id: "g2",
      answers: [
        "I'd like to find out something about you",
        "I would like to find out something about you",
      ],
    },
    { id: "g3", answers: ["Why did you decide to take this course"] },
    {
      id: "g4",
      answers: [
        "she used to talk about her home a lot, and that made me want to visit Denmark",
      ],
    },
    {
      id: "g5",
      answers: [
        "I can get by when I talk to people, though I'm not terribly accurate",
        "I can get by when I talk to people, though I am not terribly accurate",
      ],
    },
    {
      id: "g6",
      answers: [
        "I'd love to spend the time in Iceland",
        "I would love to spend the time in Iceland",
      ],
    },
    { id: "g7", answers: ["A lot of students go on to take a master's degree"] },
    {
      id: "g8",
      answers: [
        "I think the four years of the undergraduate course will be enough for me",
      ],
    },
    {
      id: "g9",
      answers: [
        "I'd find that more creative than translating, which I suppose most graduates do",
        "I would find that more creative than translating, which I suppose most graduates do",
      ],
    },
    {
      id: "g10",
      answers: [
        "I'm really enjoying the one on Swedish cinema",
        "I am really enjoying the one on Swedish cinema",
      ],
    },
    {
      id: "g11",
      answers: [
        "if you're interested in watching Danish television programmes",
        "if you are interested in watching Danish television programmes",
        "if you're interested in watching Danish television programs",
      ],
    },
    {
      id: "g12",
      answers: [
        "it can be difficult to get hold of the books you'll need",
        "it can be difficult to get hold of the books you will need",
      ],
    },
    {
      id: "g13",
      answers: [
        "I've read or seen several plays in translation, so that would be a good idea",
        "I have read or seen several plays in translation, so that would be a good idea",
      ],
    },
    {
      id: "g14",
      answers: ["So what would you advise me to aim at in the paper"],
    },
    {
      id: "g15",
      answers: [
        "First I suggest you avoid taking one writer and going into a great deal of detail",
      ],
    },
    {
      id: "g16",
      answers: [
        "I also think that's more fruitful than placing it within the history of the genre",
        "I also think that is more fruitful than placing it within the history of the genre",
      ],
    },
    {
      id: "g17",
      answers: [
        "I have to do that this week, and I'm a bit stuck",
        "I have to do that this week, and I am a bit stuck",
      ],
    },
    {
      id: "g18",
      answers: [
        "I'd ignore it - it's more fantasy than reality",
        "I would ignore it - it is more fantasy than reality",
        "I'd ignore it - it is more fantasy than reality",
      ],
    },
  ],
  lines: [
    {
      speaker: "BETH",
      segments: [
        { type: "text", text: "Oh good morning. You must be James. I'm Beth Cartwright - " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "BETH",
      segments: [
        { type: "text", text: "Now as this is your first tutorial since you started on the Scandinavian Studies course, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JAMES",
      segments: [
        { type: "text", text: "Well, my mother is Danish, and although we always lived in England, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". We hardly ever did, though - my mother usually went on her own. But whenever her relations or friends were in England they always came to see us.",
        },
      ],
    },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "I see. So I assume you already speak Danish, one of the languages you'll be studying.",
        },
      ],
    },
    {
      speaker: "JAMES",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "Now you probably know that you'll spend the third year of the course abroad. Have you had any thoughts about that?",
        },
      ],
    },
    {
      speaker: "JAMES",
      segments: [
        { type: "text", text: "I'm really looking forward to it. And although Denmark seems the obvious place to go, because of my family connections, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BETH",
      segments: [
        { type: "text", text: "Oh, I'm sure it can be arranged. Do you have any plans for when you graduate? " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAMES",
      segments: [
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". I'm interested in journalism, and I quite like the idea of moving to Scandinavia and writing for magazines. ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BETH",
      segments: [{ type: "text", text: "OK. Now how are you finding the courses you're taking this term, James?" }],
    },
    {
      speaker: "JAMES",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "That'll continue next term, but the one on Scandinavian literature that's running at the moment will be replaced by more specialised courses. Oh, and by the way, ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " - there's going to be a course on that the term after next." },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "That sounds good." }] },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "Have you started thinking about the literature paper that you have to write in the next few weeks?",
        },
      ],
    },
    {
      speaker: "JAMES",
      segments: [{ type: "text", text: "Yes, my first choice would be to do something on the Icelandic sagas." }],
    },
    {
      speaker: "BETH",
      segments: [
        { type: "text", text: "Hmm. The trouble with that is that a lot of people choose that topic, and " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". Why not leave that for another time?" },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "BETH",
      segments: [{ type: "text", text: "You might find modern novels or 19th century playwrights interesting." }],
    },
    {
      speaker: "JAMES",
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }],
    },
    { speaker: "BETH", segments: [{ type: "text", text: "Fine. I'll put you down for that topic." }] },
    {
      speaker: "JAMES",
      segments: [{ type: "text", text: "Right. " }, { type: "gap", gapId: "g14" }, { type: "text", text: "?" }],
    },
    {
      speaker: "BETH",
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". That approach certainly has its place, but I think you first need to get an understanding of the literature in the context of the society in which it was produced - who it was written for, how it was published, and so on. ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "OK, that sounds reasonable." }] },
    {
      speaker: "JAMES",
      segments: [
        { type: "text", text: "Could I ask for some advice about writing the paper I'm working on about the Vikings? " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "BETH", segments: [{ type: "text", text: "Of course. Have you decided yet what to write about?" }] },
    {
      speaker: "JAMES",
      segments: [
        {
          type: "text",
          text: "No, I haven't. There's so much that seems interesting - Viking settlement in other countries, trade, mythology ...",
        },
      ],
    },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "Well, what I suggest is that you read an assignment a student wrote last year, which is kept in the library. It's short and well focused, and I'm sure you'll find it helpful. I'll give you the details in a moment. Textbooks usually cover so many topics, it can be very difficult to choose just one.",
        },
      ],
    },
    {
      speaker: "JAMES",
      segments: [
        {
          type: "text",
          text: "OK. I've got a DVD of the film about the Vikings that came out earlier this year. Should I watch that again?",
        },
      ],
    },
    {
      speaker: "BETH",
      segments: [
        { type: "text", text: "If it's the one I am thinking of, hmm, " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". But I've got a recording of a documentary that you should watch. It makes some interesting and provocative points, which I think will help you to focus your topic.",
        },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "Right. So then should I work out an outline?" }] },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "Yes. Just headings for different sections, at this stage. And then you should start looking for suitable articles and books to draw on, and take notes which you organise according to those headings.",
        },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "I see." }] },
    {
      speaker: "BETH",
      segments: [
        {
          type: "text",
          text: "Then put short phrases and sentences as bullet points under each heading. Make sure that this skeleton makes sense and flows properly, before writing up the paper in full.",
        },
      ],
    },
    { speaker: "JAMES", segments: [{ type: "text", text: "OK. Thanks, that's very helpful." }] },
  ],
};

export const CAM12_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "James chose to take Scandinavian Studies because when he was a child A he was often taken to Denmark. / B his mother spoke to him in Danish. / C a number of Danish people visited his family.",
    questionVi:
      "James chose to take Scandinavian Studies because when he was a child A he was often taken to Denmark. / B his mother spoke to him in Danish. / C a number of Danish people visited his family.",
    modelParaphraseEn:
      "We hardly ever did, though - my mother usually went on her own. But whenever her relations or friends were in England they always came to see us",
    modelParaphraseVi:
      "We hardly ever did, though - my mother usually went on her own. But whenever her relations or friends were in England they always came to see us",
    acceptedAnswers: ["C", "a number of Danish people visited his family"],
    explanationEn:
      "C = Danish relations or friends always came to see them. They hardly ever visited Denmark; she talked about home, but not that she spoke to him in Danish.",
    explanationVi:
      "C = người Đan Mạch (họ hàng/bạn) luôn đến thăm. Họ hầu như không đi Denmark; mẹ nói về quê, không phải nói Danish với James.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "When he graduates, James would like to A take a postgraduate course. / B work in the media. / C become a translator.",
    questionVi:
      "When he graduates, James would like to A take a postgraduate course. / B work in the media. / C become a translator.",
    modelParaphraseEn:
      "the four years of the undergraduate course will be enough for me. I'm interested in journalism, and I quite like the idea of moving to Scandinavia and writing for magazines. I'd find that more creative than translating",
    modelParaphraseVi:
      "the four years of the undergraduate course will be enough for me. I'm interested in journalism, and I quite like the idea of moving to Scandinavia and writing for magazines. I'd find that more creative than translating",
    acceptedAnswers: ["B", "work in the media"],
    explanationEn:
      "B = journalism / writing for magazines. Undergraduate study is enough (not a master's). Translating is what most graduates do, and he finds it less creative.",
    explanationVi:
      "B = journalism / viết magazines. Bốn năm đại học là đủ (không học master's). Translating là việc đa số graduates làm, anh thấy kém sáng tạo hơn.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "Which course will end this term? A Swedish cinema / B Danish television programmes / C Scandinavian literature",
    questionVi:
      "Which course will end this term? A Swedish cinema / B Danish television programmes / C Scandinavian literature",
    modelParaphraseEn:
      "That'll continue next term, but the one on Scandinavian literature that's running at the moment will be replaced by more specialised courses … a course on [Danish television programmes] the term after next",
    modelParaphraseVi:
      "That'll continue next term, but the one on Scandinavian literature that's running at the moment will be replaced by more specialised courses … a course on [Danish television programmes] the term after next",
    acceptedAnswers: ["C", "Scandinavian literature"],
    explanationEn:
      "C = Scandinavian literature ends this term. Swedish cinema continues next term; Danish TV is the term after next.",
    explanationVi:
      "C = Scandinavian literature kết thúc kỳ này. Swedish cinema tiếp tục kỳ sau; Danish TV là kỳ sau nữa.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn:
      "They agree that James's literature paper this term will be on A 19th century playwrights / B the Icelandic sagas / C modern Scandinavian novels.",
    questionVi:
      "They agree that James's literature paper this term will be on A 19th century playwrights / B the Icelandic sagas / C modern Scandinavian novels.",
    modelParaphraseEn:
      "You might find modern novels or 19th century playwrights interesting. I've read or seen several plays in translation, so that would be a good idea. Fine. I'll put you down for that topic",
    modelParaphraseVi:
      "You might find modern novels or 19th century playwrights interesting. I've read or seen several plays in translation, so that would be a good idea. Fine. I'll put you down for that topic",
    acceptedAnswers: ["A", "19th century playwrights"],
    explanationEn:
      "A = 19th century playwrights. Icelandic sagas are too popular / hard to get books. He chooses plays, not modern novels.",
    explanationVi:
      "A = 19th century playwrights. Icelandic sagas quá đông / khó mượn sách. Anh chọn plays, không phải modern novels.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn:
      "Beth recommends that James's paper should be A a historical overview of the genre. / B an in-depth analysis of a single writer. / C a study of the social background to the literature.",
    questionVi:
      "Beth recommends that James's paper should be A a historical overview of the genre. / B an in-depth analysis of a single writer. / C a study of the social background to the literature.",
    modelParaphraseEn:
      "avoid taking one writer and going into a great deal of detail … get an understanding of the literature in the context of the society in which it was produced … more fruitful than placing it within the history of the genre",
    modelParaphraseVi:
      "avoid taking one writer and going into a great deal of detail … get an understanding of the literature in the context of the society in which it was produced … more fruitful than placing it within the history of the genre",
    acceptedAnswers: ["C", "a study of the social background to the literature"],
    explanationEn:
      "C = literature in the context of the society. Not one writer in detail, and not the history of the genre.",
    explanationVi:
      "C = văn học trong bối cảnh xã hội. Không đi sâu một writer, cũng không phải history of the genre.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn:
      "He'll read a ______ and choose his topic. (A bullet points / B film / C notes / D structure / E student paper / F textbook / G documentary)",
    questionVi:
      "He'll read a ______ and choose his topic. (A–G)",
    modelParaphraseEn:
      "read an assignment a student wrote last year, which is kept in the library. Textbooks usually cover so many topics, it can be very difficult to choose just one",
    modelParaphraseVi:
      "read an assignment a student wrote last year, which is kept in the library. Textbooks usually cover so many topics, it can be very difficult to choose just one",
    acceptedAnswers: ["E", "student paper"],
    explanationEn: "E = student assignment / paper from last year. Textbooks cover too many topics to help him choose one.",
    explanationVi: "E = bài assignment / paper của sinh viên năm trước. Textbook phủ quá nhiều chủ đề nên khó chọn một.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "He'll borrow a ______ from Beth. (A–G)",
    questionVi: "He'll borrow a ______ from Beth. (A–G)",
    modelParaphraseEn:
      "I'd ignore [the film] - it's more fantasy than reality. But I've got a recording of a documentary that you should watch",
    modelParaphraseVi:
      "I'd ignore [the film] - it's more fantasy than reality. But I've got a recording of a documentary that you should watch",
    acceptedAnswers: ["G", "documentary"],
    explanationEn: "G = documentary recording from Beth. Ignore the film (fantasy, not reality).",
    explanationVi: "G = documentary Beth cho mượn. Bỏ film (fantasy, không phải reality).",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "He'll plan the ______ of the paper. (A–G)",
    questionVi: "He'll plan the ______ of the paper. (A–G)",
    modelParaphraseEn: "So then should I work out an outline? Yes. Just headings for different sections, at this stage",
    modelParaphraseVi: "So then should I work out an outline? Yes. Just headings for different sections, at this stage",
    acceptedAnswers: ["D", "structure"],
    explanationEn: "D = structure. Outline = headings for different sections at this stage.",
    explanationVi: "D = structure. Outline = headings cho từng phần ở giai đoạn này.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "He'll read some source material and write ______. (A–G)",
    questionVi: "He'll read some source material and write ______. (A–G)",
    modelParaphraseEn:
      "start looking for suitable articles and books to draw on, and take notes which you organise according to those headings",
    modelParaphraseVi:
      "start looking for suitable articles and books to draw on, and take notes which you organise according to those headings",
    acceptedAnswers: ["C", "notes"],
    explanationEn: "C = notes from articles and books, organised under the outline headings.",
    explanationVi: "C = notes từ articles and books, sắp theo headings của outline.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "He'll write the paper using ______. (A–G)",
    questionVi: "He'll write the paper using ______. (A–G)",
    modelParaphraseEn:
      "Then put short phrases and sentences as bullet points under each heading. Make sure that this skeleton makes sense and flows properly, before writing up the paper in full",
    modelParaphraseVi:
      "Then put short phrases and sentences as bullet points under each heading. Make sure that this skeleton makes sense and flows properly, before writing up the paper in full",
    acceptedAnswers: ["A", "bullet points"],
    explanationEn: "A = bullet points under each heading (the skeleton) before writing the paper in full.",
    explanationVi: "A = bullet points dưới mỗi heading (skeleton) trước khi viết full paper.",
  },
];
