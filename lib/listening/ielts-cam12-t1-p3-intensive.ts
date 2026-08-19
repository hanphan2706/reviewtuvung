import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["We need to start planning our paper on public libraries"] },
    { id: "g2", answers: ["Have you thought of an angle yet"] },
    {
      id: "g3",
      answers: ["How libraries have changed over the centuries, for instance"],
    },
    {
      id: "g4",
      answers: [
        "or how different countries organise them",
        "or how different countries organize them",
      ],
    },
    { id: "g5", answers: ["Maybe we should concentrate on this country"] },
    {
      id: "g6",
      answers: ["We could include something about changes in the source of funding, too"],
    },
    {
      id: "g7",
      answers: [
        "we're only supposed to write a short paper",
        "we are only supposed to write a short paper",
      ],
    },
    {
      id: "g8",
      answers: [
        "it's probably best if we don't go into funding in any detail",
        "it is probably best if we do not go into funding in any detail",
        "it's probably best if we do not go into funding in any detail",
      ],
    },
    { id: "g9", answers: ["shall we just brainstorm a few ideas, to get started"] },
    {
      id: "g10",
      answers: [
        "We obviously need to look at the impact of new technology, particularly the internet",
      ],
    },
    { id: "g11", answers: ["people can access them from their own computers at home"] },
    { id: "g12", answers: ["And if everyone did that, libraries would be obsolete"] },
    {
      id: "g13",
      answers: [
        "I find it hard to concentrate when I'm reading a long text on a screen",
        "I find it hard to concentrate when I am reading a long text on a screen",
      ],
    },
    {
      id: "g14",
      answers: [
        "I'd much rather read a physical book",
        "I would much rather read a physical book",
      ],
    },
    {
      id: "g15",
      answers: ["I expect that libraries will go on evolving in the next few years"],
    },
    {
      id: "g16",
      answers: [
        "Why don't we make an in-depth study of our local public library as background to our paper",
        "Why do not we make an in-depth study of our local public library as background to our paper",
        "Why don't we make an in-depth study of our local public library as background to our paper",
      ],
    },
    { id: "g17", answers: ["Let's make a list of possible things we could ask about"] },
    { id: "g18", answers: ["I quite fancy finding out what the differences are"] },
  ],
  lines: [
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "OK, Stewart. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Well, there's so much we could look into. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". What do you think, Trudie?" },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", and try and relate the changes in libraries to external developments, like the fact that far more people can read than a century ago, and that the local population may speak lots of different languages.",
        },
      ],
    },
    {
      speaker: "STEWART",
      segments: [{ type: "gap", gapId: "g6" }, { type: "text", text: "." }],
    },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "Yes, but remember " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", so " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Right. Well, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". Now that lots of books have been digitalised, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "STEWART",
      segments: [{ type: "gap", gapId: "g12" }, { type: "text", text: "." }],
    },
    { speaker: "TRUDIE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "STEWART",
      segments: [
        {
          type: "text",
          text: "But the digitalised books that are available online for free are mostly out of copyright, aren't they? And copyright in this country lasts for 70 years after the author dies. So you won't find the latest best-seller or up-to-date information.",
        },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "That's an important point. Anyway, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ". And it takes longer to read on a screen." },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Oh, I prefer it. I suppose it's just a personal preference." },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "Mm. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". Some have already become centres where community activities take place, like local clubs meeting there. I think that'll become even more common.",
        },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        {
          type: "text",
          text: "I'd like to think so, and that they'll still be serving their traditional function, but I'm not so sure. There are financial implications, after all. What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers. They won't look anything like the libraries we're used to.",
        },
      ],
    },
    { speaker: "TRUDIE", segments: [{ type: "text", text: "Well, we'll see." }] },
    {
      speaker: "TRUDIE",
      segments: [
        { type: "text", text: "I've just had an idea. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Yes, that'd be interesting, and raise all sorts of issues. " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", then work out some sort of structure. For instance, um, we could interview some of the staff, and find out whether the library has its own budget, or if that's controlled by the local council.",
        },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        {
          type: "text",
          text: "And what their policies are. I know they don't allow food, but I'd love to find out what types of noise they ban - there always seems to be a lot of talking, but never music. I don't know if that's a policy or it just happens.",
        },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        {
          type: "text",
          text: "Ah, I've often wondered. Then there are things like how the library is affected by employment laws. I suppose there are rules about working hours, facilities for staff, and so on.",
        },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        {
          type: "text",
          text: "Right. Then there are other issues relating to the design of the building and how customers use it. Like what measures does the library take to ensure their safety? They'd need floor coverings that aren't slippery, and emergency exits, for instance. Oh, and another thing - there's the question of the kind of insurance the library needs to have, in case anyone gets injured.",
        },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Yes, that's something else to find out. You know something I've often wondered?" },
      ],
    },
    { speaker: "TRUDIE", segments: [{ type: "text", text: "What's that?" }] },
    {
      speaker: "STEWART",
      segments: [
        {
          type: "text",
          text: "Well, you know they've got an archive of local newspapers going back years? Well, next to it they've got the diary of a well-known politician from the late 19th century. I wonder why it's there. Do you know what his connection was with this area?",
        },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [
        {
          type: "text",
          text: "No idea. Let's add it to our list of things to find out. Oh, I've just thought - you know people might ask in the library about local organisations, like sports clubs? Well, I wonder if they keep a database, or whether they just look online.",
        },
      ],
    },
    {
      speaker: "STEWART",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " between a library that's open to the public and one that's part of a museum, for example - they must be very different.",
        },
      ],
    },
    {
      speaker: "TRUDIE",
      segments: [{ type: "text", text: "Mmm. Then something else I'd like to know is …" }],
    },
  ],
};

export const CAM12_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "What will be the main topic of Trudie and Stewart's paper? A how public library services are organised in different countries / B how changes in society are reflected in public libraries / C how the funding of public libraries has changed",
    questionVi:
      "What will be the main topic of Trudie and Stewart's paper? A how public library services are organised in different countries / B how changes in society are reflected in public libraries / C how the funding of public libraries has changed",
    modelParaphraseEn:
      "concentrate on this country, and try and relate the changes in libraries to external developments, like … far more people can read … local population may speak lots of different languages",
    modelParaphraseVi:
      "concentrate on this country, and try and relate the changes in libraries to external developments, like … far more people can read … local population may speak lots of different languages",
    acceptedAnswers: ["B", "how changes in society are reflected in public libraries"],
    explanationEn:
      "B = relate library changes to external developments (literacy, languages). They reject a detailed look at funding; other countries are only brainstormed.",
    explanationVi:
      "B = gắn thay đổi thư viện với external developments (biết chữ, ngôn ngữ). Họ không đi sâu funding; other countries chỉ là ý brainstorm.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "They agree that one disadvantage of free digitalised books is that A they may take a long time to read. / B they can be difficult to read. / C they are generally old.",
    questionVi:
      "They agree that one disadvantage of free digitalised books is that A they may take a long time to read. / B they can be difficult to read. / C they are generally old.",
    modelParaphraseEn:
      "the digitalised books that are available online for free are mostly out of copyright … you won't find the latest best-seller or up-to-date information",
    modelParaphraseVi:
      "the digitalised books that are available online for free are mostly out of copyright … you won't find the latest best-seller or up-to-date information",
    acceptedAnswers: ["C", "they are generally old"],
    explanationEn:
      "C = out of copyright / no latest best-seller. Screen-reading difficulty is Trudie's preference, not their agreed disadvantage of free e-books.",
    explanationVi:
      "C = out of copyright / không có best-seller mới. Khó đọc trên màn hình là ý thích của Trudie, không phải điểm họ đồng ý.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "Stewart expects that in the future libraries will A maintain their traditional function. / B become centres for local communities. / C no longer contain any books.",
    questionVi:
      "Stewart expects that in the future libraries will A maintain their traditional function. / B become centres for local communities. / C no longer contain any books.",
    modelParaphraseEn:
      "books and magazines will all disappear, and there'll just be rows and rows of computers",
    modelParaphraseVi:
      "books and magazines will all disappear, and there'll just be rows and rows of computers",
    acceptedAnswers: ["C", "no longer contain any books"],
    explanationEn:
      "C = Stewart fears books/magazines will disappear. Community centres is Trudie's hope; he is not sure they will keep a traditional function.",
    explanationVi:
      "C = Stewart sợ sách/tạp chí sẽ biến mất. Community centres là hy vọng của Trudie; anh không chắc chức năng truyền thống còn.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "whether it has a ______ of its own",
    questionVi: "whether it has a ______ of its own",
    modelParaphraseEn:
      "find out whether the library has its own budget, or if that's controlled by the local council",
    modelParaphraseVi:
      "find out whether the library has its own budget, or if that's controlled by the local council",
    acceptedAnswers: ["budget"],
    explanationEn: "Its own budget, or controlled by the local council.",
    explanationVi: "Budget riêng, hay do local council kiểm soát.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "how it's affected by laws regarding all aspects of ______",
    questionVi: "how it's affected by laws regarding all aspects of ______",
    modelParaphraseEn:
      "how the library is affected by employment laws. I suppose there are rules about working hours, facilities for staff, and so on",
    modelParaphraseVi:
      "how the library is affected by employment laws. I suppose there are rules about working hours, facilities for staff, and so on",
    acceptedAnswers: ["employment"],
    explanationEn: "Employment laws — hours, staff facilities, and so on.",
    explanationVi: "Employment laws — giờ làm, cơ sở cho nhân viên, v.v.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "how the design needs to take the ______ of customers into account",
    questionVi: "how the design needs to take the ______ of customers into account",
    modelParaphraseEn:
      "what measures does the library take to ensure their safety? They'd need floor coverings that aren't slippery, and emergency exits",
    modelParaphraseVi:
      "what measures does the library take to ensure their safety? They'd need floor coverings that aren't slippery, and emergency exits",
    acceptedAnswers: ["safety"],
    explanationEn: "Design must consider customer safety (non-slip floors, emergency exits).",
    explanationVi: "Thiết kế phải tính safety của khách (sàn chống trượt, lối thoát hiểm).",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "what ______ is required in case of accidents",
    questionVi: "what ______ is required in case of accidents",
    modelParaphraseEn:
      "the kind of insurance the library needs to have, in case anyone gets injured",
    modelParaphraseVi:
      "the kind of insurance the library needs to have, in case anyone gets injured",
    acceptedAnswers: ["insurance"],
    explanationEn: "Insurance in case anyone gets injured.",
    explanationVi: "Insurance phòng khi có người bị thương.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "why a famous person's ______ is located in the library",
    questionVi: "why a famous person's ______ is located in the library",
    modelParaphraseEn:
      "they've got the diary of a well-known politician from the late 19th century. I wonder why it's there",
    modelParaphraseVi:
      "they've got the diary of a well-known politician from the late 19th century. I wonder why it's there",
    acceptedAnswers: ["diary"],
    explanationEn: "A well-known 19th-century politician's diary is next to the newspaper archive.",
    explanationVi: "Diary của chính trị gia nổi tiếng thế kỷ 19 nằm cạnh kho báo.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "whether it has a ______ of local organisations",
    questionVi: "whether it has a ______ of local organisations",
    modelParaphraseEn:
      "people might ask … about local organisations, like sports clubs? … I wonder if they keep a database, or whether they just look online",
    modelParaphraseVi:
      "people might ask … about local organisations, like sports clubs? … I wonder if they keep a database, or whether they just look online",
    acceptedAnswers: ["database"],
    explanationEn: "A database of local organisations, or just look online.",
    explanationVi: "Database các tổ chức địa phương, hay chỉ tra online.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "how it's different from a library in a ______",
    questionVi: "how it's different from a library in a ______",
    modelParaphraseEn:
      "the differences … between a library that's open to the public and one that's part of a museum",
    modelParaphraseVi:
      "the differences … between a library that's open to the public and one that's part of a museum",
    acceptedAnswers: ["museum"],
    explanationEn: "Compare a public library with one that is part of a museum.",
    explanationVi: "So sánh thư viện công cộng với thư viện trong museum.",
  },
];
