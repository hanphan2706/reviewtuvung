import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I've now almost succeeded in finalising plans for our tour",
        "I have now almost succeeded in finalising plans for our tour",
        "I've now almost succeeded in finalizing plans for our tour",
      ],
    },
    {
      id: "g2",
      answers: [
        "so I'll bring you up to date with what I know",
        "so I will bring you up to date with what I know",
      ],
    },
    {
      id: "g3",
      answers: [
        "we're flying first to Munich, on Monday the 4th",
        "we are flying first to Munich, on Monday the 4th",
      ],
    },
    {
      id: "g4",
      answers: [
        "so it's too early to have lunch at the airport",
        "so it is too early to have lunch at the airport",
      ],
    },
    {
      id: "g5",
      answers: [
        "which should give us plenty of time for breakfast before we leave home",
      ],
    },
    {
      id: "g6",
      answers: [
        "he'll look after us for the time we'll be in Germany",
        "he will look after us for the time we will be in Germany",
        "he'll look after us for the time we will be in Germany",
      ],
    },
    { id: "g7", answers: ["He's already liaised with the managers of the theatres we're going to visit", "He has already liaised with the managers of the theatres we are going to visit"] },
    {
      id: "g8",
      answers: [
        "I didn't have the precise cost for hotel rooms, but now I have",
        "I did not have the precise cost for hotel rooms, but now I have",
      ],
    },
    { id: "g9", answers: ["The normal rate at the hotel where we're staying is 150 euros a night for a double room", "The normal rate at the hotel where we are staying is 150 euros a night for a double room"] },
    {
      id: "g10",
      answers: [
        "That'll be reflected in the final payment which you'll need to make by the end of this week",
        "That will be reflected in the final payment which you will need to make by the end of this week",
      ],
    },
    {
      id: "g11",
      answers: [
        "I had hoped we could sit in on a rehearsal at one of the theatres",
      ],
    },
    {
      id: "g12",
      answers: [
        "so instead we'll have a coach trip to one of the amazing castles in the mountains south of Munich",
        "so instead we will have a coach trip to one of the amazing castles in the mountains south of Munich",
      ],
    },
    {
      id: "g13",
      answers: [
        "it was clear that a typical local restaurant would be too meat-oriented for some of you",
      ],
    },
    {
      id: "g14",
      answers: [
        "as we have plenty of opportunities to go to an Italian restaurant at home",
      ],
    },
    {
      id: "g15",
      answers: [
        "She'll describe the whole process of producing a play",
        "She will describe the whole process of producing a play",
      ],
    },
    {
      id: "g16",
      answers: [
        "partly because it might influence your choice of clothes to take with you",
      ],
    },
    {
      id: "g17",
      answers: [
        "so it'll be quite a dressy occasion, though of course you don't have to dress formally",
        "so it will be quite a dressy occasion, though of course you do not have to dress formally",
      ],
    },
    {
      id: "g18",
      answers: [
        "though unfortunately the playwright is ill and is unlikely to be able to attend",
      ],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you know, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The flight is at 11.30, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". I suggest we meet there for coffee at 10, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When we arrive in Munich, we'll be met at the airport by Claus Bauer." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Claus works for a tour operator, and " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", and he's also arranged for an officer of the National Theatre in Munich to show us round the theatre one afternoon during our stay.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now last time we discussed this trip, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g9" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I'd hoped to get that down to 120 euros, but in fact I've been able to negotiate a rate of 110.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "On Tuesday, the day after our arrival, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", but unfortunately that's proved very difficult to arrange, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "On Tuesday evening, we'll all have dinner together in a restaurant near our hotel." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "From talking to you all about your preferences, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Some of you suggested an Italian restaurant, but I must confess that I decided to book a Lebanese one, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On Wednesday afternoon, the director of the play we're going to see that evening will talk to us at the theatre.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", including how she chose the actors, and, as the play we're going to see is a modern one, how she worked with the playwright.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right. Now I'd just like to make a few points about the plays we're going to see, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The play we're seeing on Wednesday evening is a modern one, and we're going to the premiere, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I gather it's rather a multimedia production, with amazing lighting effects and a soundtrack of electronic music, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On Thursday we're seeing a play that was first performed last year, when it was commissioned to mark a hundred years since the birth in the town of a well-known scientist.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We're going to see a revival of that production, which aroused a lot of interest." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Friday's play will really make you think hard about what clothes to pack, as it'll be in the garden of a palace.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's a beautiful setting, but I'd better warn you, there won't be much protection from the wind.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On Saturday, we're going by coach to a theatre in another town, not far from Munich.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This will be the opening of a drama festival, and the mayor and all the other dignitaries of the town will be attending.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After the performance, the mayor is hosting a reception for all the audience, and there'll be a band playing traditional music of the region.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And after having a day off on Sunday, our final play is on Monday, and it's in the stunning setting of the old Town Hall, which dates back to the 14th century.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The performance marks the fifty years that the lead actor has been on stage, and the play is the one where he made his first professional appearance, all those years ago.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And the day after that, we'll be flying back home. Now have you got any questions before I …" },
      ],
    },
  ],
};

export const CAM12_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "When the group meet at the airport they will have A breakfast. / B coffee. / C lunch.",
    questionVi:
      "When the group meet at the airport they will have A breakfast. / B coffee. / C lunch.",
    modelParaphraseEn:
      "The flight is at 11.30, so it's too early to have lunch at the airport. I suggest we meet there for coffee at 10, which should give us plenty of time for breakfast before we leave home",
    modelParaphraseVi:
      "The flight is at 11.30, so it's too early to have lunch at the airport. I suggest we meet there for coffee at 10, which should give us plenty of time for breakfast before we leave home",
    acceptedAnswers: ["B", "coffee"],
    explanationEn:
      "B = coffee at 10 at the airport. Lunch is too early for an 11.30 flight; breakfast is at home before they leave.",
    explanationVi:
      "B = coffee lúc 10 tại sân bay. Lunch thì sớm với chuyến 11.30; breakfast ăn ở nhà trước khi đi.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn:
      "The group will be met at Munich Airport by A an employee at the National Theatre. / B a theatre manager. / C a tour operator.",
    questionVi:
      "The group will be met at Munich Airport by A an employee at the National Theatre. / B a theatre manager. / C a tour operator.",
    modelParaphraseEn: "we'll be met at the airport by Claus Bauer. Claus works for a tour operator",
    modelParaphraseVi: "we'll be met at the airport by Claus Bauer. Claus works for a tour operator",
    acceptedAnswers: ["C", "a tour operator"],
    explanationEn:
      "C = Claus Bauer works for a tour operator. A National Theatre officer will show them round later; theatre managers were only liaised with.",
    explanationVi:
      "C = Claus Bauer làm cho tour operator. Nhân viên National Theatre chỉ dẫn quanh nhà hát sau; theatre managers chỉ được liên hệ.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "How much will they pay per night for a double room at the hotel? A 110 euros / B 120 euros / C 150 euros",
    questionVi:
      "How much will they pay per night for a double room at the hotel? A 110 euros / B 120 euros / C 150 euros",
    modelParaphraseEn:
      "The normal rate … is 150 euros … I'd hoped to get that down to 120 euros, but in fact I've been able to negotiate a rate of 110",
    modelParaphraseVi:
      "The normal rate … is 150 euros … I'd hoped to get that down to 120 euros, but in fact I've been able to negotiate a rate of 110",
    acceptedAnswers: ["A", "110 euros", "110"],
    explanationEn: "A = negotiated 110. 150 is the normal rate; 120 was only what he had hoped for.",
    explanationVi: "A = thương lượng được 110. 150 là giá thường; 120 chỉ là mức anh ấy từng hy vọng.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn:
      "What type of restaurant will they go to on Tuesday evening? A an Italian restaurant / B a Lebanese restaurant / C a typical restaurant of the region",
    questionVi:
      "What type of restaurant will they go to on Tuesday evening? A an Italian restaurant / B a Lebanese restaurant / C a typical restaurant of the region",
    modelParaphraseEn:
      "a typical local restaurant would be too meat-oriented … Some of you suggested an Italian restaurant, but I must confess that I decided to book a Lebanese one",
    modelParaphraseVi:
      "a typical local restaurant would be too meat-oriented … Some of you suggested an Italian restaurant, but I must confess that I decided to book a Lebanese one",
    acceptedAnswers: ["B", "a Lebanese restaurant", "Lebanese"],
    explanationEn:
      "B = Lebanese. A typical local restaurant is too meat-oriented; Italian was suggested but they can do that at home.",
    explanationVi:
      "B = Lebanese. Nhà hàng địa phương điển hình quá thiên thịt; Italian được gợi ý nhưng ở nhà đã có nhiều.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn:
      "Who will they meet on Wednesday afternoon? A an actor / B a playwright / C a theatre director",
    questionVi:
      "Who will they meet on Wednesday afternoon? A an actor / B a playwright / C a theatre director",
    modelParaphraseEn:
      "the director of the play we're going to see that evening will talk to us at the theatre. She'll describe the whole process of producing a play, including how she chose the actors … how she worked with the playwright",
    modelParaphraseVi:
      "the director of the play we're going to see that evening will talk to us at the theatre. She'll describe the whole process of producing a play, including how she chose the actors … how she worked with the playwright",
    acceptedAnswers: ["C", "a theatre director", "director"],
    explanationEn:
      "C = the director talks to them. She mentions how she chose the actors and worked with the playwright — those people are not who the group meets.",
    explanationVi:
      "C = director nói chuyện với nhóm. Bà ấy kể cách chọn actors và làm việc với playwright — không phải những người nhóm sẽ gặp.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn:
      "Wednesday — comments on the play (A–G): A The playwright will be present. / B The play was written to celebrate an anniversary. / C The play will be performed inside a historic building. / D The play will be accompanied by live music. / E The play will be performed outdoors. / F The play will be performed for the first time. / G The performance will be attended by officials from the town.",
    questionVi:
      "Wednesday — comments on the play (A–G)",
    modelParaphraseEn: "we're going to the premiere, so it'll be quite a dressy occasion … unfortunately the playwright is ill and is unlikely to be able to attend",
    modelParaphraseVi: "we're going to the premiere, so it'll be quite a dressy occasion … unfortunately the playwright is ill and is unlikely to be able to attend",
    acceptedAnswers: ["F", "The play will be performed for the first time"],
    explanationEn:
      "F = premiere = first performance. The playwright will not be present (ill). Electronic soundtrack, not live music.",
    explanationVi:
      "F = premiere = diễn lần đầu. Playwright không có mặt (ốm). Nhạc nền electronic, không phải live music.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Thursday — comments on the play (A–G)",
    questionVi: "Thursday — comments on the play (A–G)",
    modelParaphraseEn:
      "first performed last year, when it was commissioned to mark a hundred years since the birth in the town of a well-known scientist. We're going to see a revival of that production",
    modelParaphraseVi:
      "first performed last year, when it was commissioned to mark a hundred years since the birth in the town of a well-known scientist. We're going to see a revival of that production",
    acceptedAnswers: ["B", "The play was written to celebrate an anniversary"],
    explanationEn: "B = commissioned to mark 100 years since a scientist's birth. This is a revival, not a first performance.",
    explanationVi: "B = được đặt viết để kỷ niệm 100 năm ngày sinh nhà khoa học. Đây là revival, không phải lần đầu.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Friday — comments on the play (A–G)",
    questionVi: "Friday — comments on the play (A–G)",
    modelParaphraseEn: "it'll be in the garden of a palace … there won't be much protection from the wind",
    modelParaphraseVi: "it'll be in the garden of a palace … there won't be much protection from the wind",
    acceptedAnswers: ["E", "The play will be performed outdoors"],
    explanationEn: "E = garden of a palace = outdoors. Pack clothes for wind; it is not a historic indoor building.",
    explanationVi: "E = garden of a palace = outdoors. Chú ý gió; không phải toà nhà lịch sử trong nhà.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Saturday — comments on the play (A–G)",
    questionVi: "Saturday — comments on the play (A–G)",
    modelParaphraseEn:
      "the opening of a drama festival, and the mayor and all the other dignitaries of the town will be attending",
    modelParaphraseVi:
      "the opening of a drama festival, and the mayor and all the other dignitaries of the town will be attending",
    acceptedAnswers: ["G", "The performance will be attended by officials from the town"],
    explanationEn:
      "G = mayor and other dignitaries. A band plays after the show at the reception, not as accompaniment during the play.",
    explanationVi:
      "G = mayor và dignitaries. Band chơi sau buổi diễn ở reception, không phải nhạc đệm trong vở.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Monday — comments on the play (A–G)",
    questionVi: "Monday — comments on the play (A–G)",
    modelParaphraseEn: "it's in the stunning setting of the old Town Hall, which dates back to the 14th century",
    modelParaphraseVi: "it's in the stunning setting of the old Town Hall, which dates back to the 14th century",
    acceptedAnswers: ["C", "The play will be performed inside a historic building"],
    explanationEn:
      "C = 14th-century Town Hall = historic building. The anniversary here is the actor's 50 years on stage, not why the play was written.",
    explanationVi:
      "C = Town Hall thế kỷ 14 = historic building. Kỷ niệm ở đây là 50 năm diễn viên, không phải lý do vở được viết.",
  },
];
