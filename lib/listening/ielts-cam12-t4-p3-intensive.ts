import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "in our film studies class next week",
      ],
    },
    {
      id: "g2",
      answers: [
        "I could do with getting someone else's opinion",
        "I could do with getting the opinion of someone else",
      ],
    },
    { id: "g3", answers: ["What are you going to talk about"] },
    {
      id: "g4",
      answers: [
        "I've got very interested in all the different approaches that film directors take",
        "I have got very interested in all the different approaches that film directors take",
      ],
    },
    {
      id: "g5",
      answers: ["who's professor of film and literature", "who is professor of film and literature"],
    },
    { id: "g6", answers: ["based on how faithful they are to the original plays and novels"] },
    { id: "g7", answers: ["I just need to sort those out"] },
    { id: "g8", answers: ["That should be more fun than having their favourite versions"] },
    { id: "g9", answers: ["I came across something on the internet about her work on film adaptations"] },
    { id: "g10", answers: ["I was thinking of showing some film clips to illustrate her ideas"] },
    { id: "g11", answers: ["Will you have enough time, though"] },
    {
      id: "g12",
      answers: [
        "I doubt if you'll be able to find all the clips you want",
        "I doubt if you will be able to find all the clips you want",
      ],
    },
    { id: "g13", answers: ["That should encourage discussion"] },
    { id: "g14", answers: ["You mean things like patriotism, or the role of governments"] },
    {
      id: "g15",
      answers: [
        "I've got a few ideas I'd like to discuss",
        "I have got a few ideas I would like to discuss",
      ],
    },
    {
      id: "g16",
      answers: [
        "You'd expect it would sound really bizarre, but I found I soon got used to it",
        "You would expect it would sound really bizarre, but I found I soon got used to it",
      ],
    },
    { id: "g17", answers: ["All show and no substance"] },
    {
      id: "g18",
      answers: ["And that'll be where I finish", "And that will be where I finish"],
    },
  ],
  lines: [
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "Joe, you know I'm giving a presentation " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "Well, could we discuss it? " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "Of course, Katie. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "It's about film adaptations of Shakespeare's plays. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "So I thought I'd start with Giannetti, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", and in one of his books he came up with a straightforward classification of film adaptations ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "I've already made some notes on that, so " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " before the presentation." },
      ],
    },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "I thought that next I'd ask the class to come up with the worst examples of Shakespeare adaptations that they've seen, and to say why. ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes, I can certainly think of a couple!" }] },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "Right. Next I want to talk about Rachel Malchow. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KATIE",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: "? Both to prepare and during the presentation? After all, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "Hmm. Perhaps you're right. OK, well, I'd better do some slides instead, saying how various films relate to what she says. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Mmm." }] },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "Next I want to say something about how plays may be chosen for adaptation because they're concerned with issues of the time when the film is made.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "?" }],
    },
    {
      speaker: "KATIE",
      segments: [
        { type: "text", text: "Exactly. It's quite tricky, but " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "And finally I want to talk about a few adaptations that I think illustrate a range of approaches, and make some comments on them. Do you know the Japanese film Ran?",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [{ type: "text", text: "I haven't seen it. It was based on Shakespeare's King Lear, wasn't it?" }],
    },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "That's right. It was a very loose adaptation, using the same situation and story, but moving it to 16th century Japan instead of 16th century Britain. So for example the king's daughters become sons, because in Japanese culture at that time, women couldn't succeed to the throne.",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "OK. I hope you're going to talk about the 1993 film of Much Ado About Nothing. I think that's one of the best Shakespeare films. It really brings the play to life, doesn't it?" }] },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "Yes, I agree. And I think filming it in Italy, where the play is set, makes you see what life was like at the time of the play.",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Absolutely. Right, what's next?" }] },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "Er, next, I thought Romeo & Juliet, the 1996 film, which moves the action into the present day.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Yes, it worked really well, I thought - changing the two feuding families in the original to two competing business empires, even though they're speaking in the English of the original play.",
        },
      ],
    },
    {
      speaker: "KATIE",
      segments: [{ type: "gap", gapId: "g16" }, { type: "text", text: "." }],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Me too." }] },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "Then I thought I'd include a real Hollywood film, one that's intended to appeal to a mass commercial audience.",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "There must be quite a number of those." }] },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "Yes, but I've picked the 1996 film of Hamlet. It included every line of the text, but it's more like a typical action hero movie - there are loads of special effects, but no unifying interpretation of the play.",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "." }] },
    { speaker: "KATIE", segments: [{ type: "text", text: "Exactly. Then there's Prospero's Books, based on The Tempest. That was really innovative, from a stylistic point of view." }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Didn't it include dance and singing and animation, as well as live actors?",
        },
      ],
    },
    { speaker: "KATIE", segments: [{ type: "text", text: "Yes, it did. I also want to mention Looking for Richard. Did you ever see it?" }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "No, but I've read about it. It was a blend of a documentary with a few scenes from Richard III, wasn't it?",
        },
      ],
    },
    {
      speaker: "KATIE",
      segments: [
        {
          type: "text",
          text: "That's right. It's more a way of looking into how people nowadays connect with the playwright - the play is really just the starting point. ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Well, it sounds as though it'll be very interesting." }] },
  ],
};

export const CAM12_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Introduce Giannetti's book containing a ______ of adaptations",
    questionVi: "Introduce Giannetti's book containing a ______ of adaptations",
    modelParaphraseEn:
      "he came up with a straightforward classification of film adaptations based on how faithful they are to the original plays and novels",
    modelParaphraseVi:
      "he came up with a straightforward classification of film adaptations based on how faithful they are to the original plays and novels",
    acceptedAnswers: ["classification"],
    explanationEn: "Giannetti's book has a classification of adaptations by how faithful they are.",
    explanationVi: "Sách Giannetti có classification các bản chuyển thể theo mức độ faithful.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Ask class to suggest the ______ adaptations",
    questionVi: "Ask class to suggest the ______ adaptations",
    modelParaphraseEn:
      "ask the class to come up with the worst examples of Shakespeare adaptations that they've seen",
    modelParaphraseVi:
      "ask the class to come up with the worst examples of Shakespeare adaptations that they've seen",
    acceptedAnswers: ["worst"],
    explanationEn: "They will ask for the worst adaptations, not the class's favourite versions.",
    explanationVi: "Sẽ hỏi bản worst, không phải favourite versions của lớp.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Present Rachel Malchow's ideas — prepare some ______",
    questionVi: "Present Rachel Malchow's ideas — prepare some ______",
    modelParaphraseEn: "I'd better do some slides instead, saying how various films relate to what she says",
    modelParaphraseVi: "I'd better do some slides instead, saying how various films relate to what she says",
    acceptedAnswers: ["slides"],
    explanationEn: "Clips would take too long and may not all be found, so she will prepare slides instead.",
    explanationVi: "Clips tốn thời gian và khó tìm đủ, nên cô sẽ chuẩn bị slides.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Discuss relationship between adaptations and ______ at the time of making the film",
    questionVi: "Discuss relationship between adaptations and ______ at the time of making the film",
    modelParaphraseEn:
      "plays may be chosen for adaptation because they're concerned with issues of the time when the film is made",
    modelParaphraseVi:
      "plays may be chosen for adaptation because they're concerned with issues of the time when the film is made",
    acceptedAnswers: ["issues"],
    explanationEn: "Adaptations can reflect issues of the film's own time, such as patriotism or the role of governments.",
    explanationVi: "Chuyển thể có thể phản ánh issues của thời điểm làm phim, như patriotism hay vai trò chính phủ.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Ran ______ (A-G)",
    questionVi: "Ran ______ (A-G)",
    modelParaphraseEn:
      "moving it to 16th century Japan instead of 16th century Britain",
    modelParaphraseVi:
      "moving it to 16th century Japan instead of 16th century Britain",
    acceptedAnswers: ["F", "sets the original in a different country", "moving it to 16th century Japan"],
    explanationEn: "F = a different country (Japan), still the 16th century. Daughters become sons.",
    explanationVi: "F = đặt ở nước khác (Japan), vẫn thế kỷ 16. Daughters thành sons.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Much Ado About Nothing ______ (A-G)",
    questionVi: "Much Ado About Nothing ______ (A-G)",
    modelParaphraseEn:
      "filming it in Italy, where the play is set, makes you see what life was like at the time of the play",
    modelParaphraseVi:
      "filming it in Italy, where the play is set, makes you see what life was like at the time of the play",
    acceptedAnswers: ["A", "clearly shows the historical period", "what life was like at the time of the play"],
    explanationEn: "A = filmed in Italy, where the play is set, so you see the historical period. Not a new country or period.",
    explanationVi: "A = quay ở Italy, nơi kịch được đặt, nên thấy historical period. Không phải nước hay thời khác.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Romeo & Juliet ______ (A-G)",
    questionVi: "Romeo & Juliet ______ (A-G)",
    modelParaphraseEn: "the 1996 film, which moves the action into the present day",
    modelParaphraseVi: "the 1996 film, which moves the action into the present day",
    acceptedAnswers: ["E", "presents the play in a different period from the original", "moves the action into the present day"],
    explanationEn: "E = present day (feuding families become business empires). They still speak the original English.",
    explanationVi: "E = present day (gia tộc thành business empires). Vẫn nói English nguyên tác.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Hamlet ______ (A-G)",
    questionVi: "Hamlet ______ (A-G)",
    modelParaphraseEn: "it's more like a typical action hero movie - there are loads of special effects",
    modelParaphraseVi: "it's more like a typical action hero movie - there are loads of special effects",
    acceptedAnswers: ["C", "is too similar to another kind of film", "more like a typical action hero movie"],
    explanationEn: "C = like an action-hero movie. It includes every line, so not only parts of the play.",
    explanationVi: "C = giống action-hero movie. Có đủ mọi câu, nên không phải chỉ một phần kịch.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Prospero's Books ______ (A-G)",
    questionVi: "Prospero's Books ______ (A-G)",
    modelParaphraseEn: "Didn't it include dance and singing and animation, as well as live actors?",
    modelParaphraseVi: "Didn't it include dance and singing and animation, as well as live actors?",
    acceptedAnswers: ["G", "incorporates a variety of art forms", "dance and singing and animation"],
    explanationEn: "G = dance, singing, animation and live actors — a variety of art forms. Stylistically innovative.",
    explanationVi: "G = dance, singing, animation và live actors — nhiều loại hình nghệ thuật. Đổi mới về style.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Looking for Richard ______ (A-G)",
    questionVi: "Looking for Richard ______ (A-G)",
    modelParaphraseEn: "It was a blend of a documentary with a few scenes from Richard III",
    modelParaphraseVi: "It was a blend of a documentary with a few scenes from Richard III",
    acceptedAnswers: ["B", "contains only parts of the play", "a few scenes from Richard III"],
    explanationEn: "B = only a few scenes from the play; a documentary blend about how people connect with Shakespeare now.",
    explanationVi: "B = chỉ a few scenes từ kịch; kết hợp documentary về cách người nay kết nối với Shakespeare.",
  },
];
