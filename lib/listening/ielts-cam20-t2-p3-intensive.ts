import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm really struggling to think of", "I am really struggling to think of"] },
    { id: "g2", answers: ["narrow the topic down"] },
    { id: "g3", answers: ["Lots of facts and statistics"] },
    { id: "g4", answers: ["I'd never thought about the links", "I had never thought about the links"] },
    { id: "g5", answers: ["a physician used street plans"] },
    { id: "g6", answers: ["something more general"] },
    { id: "g7", answers: ["best to avoid it"] },
    { id: "g8", answers: ["I hardly took any notes"] },
    { id: "g9", answers: ["It didn't seem worth it", "It did not seem worth it"] },
    { id: "g10", answers: ["a global problem"] },
    { id: "g11", answers: ["for political reasons"] },
    { id: "g12", answers: ["That's really important", "That is really important"] },
    { id: "g13", answers: ["living in a big city"] },
    { id: "g14", answers: ["some positive developments"] },
    { id: "g15", answers: ["are closing down"] },
    { id: "g16", answers: ["doing any harm"] },
    { id: "g17", answers: ["aren't the buildings architecturally significant", "are not the buildings architecturally significant"] },
    { id: "g18", answers: ["a sort of plan"] },
  ],
  lines: [
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "Colin, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " a topic for our human geography assignment." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Me too, Rosie. I'll tell you what, let's think about the different aspects of human geography and see if we can ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " a bit to help us decide." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "OK. So one aspect is population. That would be all about population density and migration and so on. ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". Maybe a bit boring?" },
      ],
    },
    {
      speaker: "COLIN",
      segments: [{ type: "text", text: "Yeah, but quite straightforward to find on the internet." }],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "Suppose so." }] },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "How about health? " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " between that and geography until Professor Lee gave us that lecture on cholera. How in the 19th century, ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " and plans of water supplies to find the source of a cholera epidemic." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yes, fascinating, wasn't it? Or we could do " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " like economies." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "So how financial and commercial factors are linked to the physical environment." },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Yeah." }] },
    {
      speaker: "ROSIE",
      segments: [{ type: "text", text: "I thought that had been taken off the syllabus for this year." }],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Has it?" }] },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "I'm not sure but it might be " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "OK. Maybe we could do something on culture. We had that lecture about culture and geography last week.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "I didn't get much out of that. It was all so general and the lecturer didn't give any useful examples.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "Me neither." }] },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "We could focus on poverty. That's something that's " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "The trouble is, Dr Lee was saying, that you have to be careful with some of the figures relating to poverty. They're sometimes deliberately manipulated.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "You mean the information gets changed " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "That sort of thing, yes." }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "So what are we going to do our assignment on? I'll tell you what. One of the possibilities we have discussed is urbanisation and now over half the world population lives in cities. ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "OK, good idea Rosie. Let's do that." }] },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "I love " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " but of course there are problems." },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Things like theft and robbery?" }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Yes, but where I come from, that's linked to another more serious issue, which is that a lot of people don't have jobs. That's getting worse and worse. And we also still have quite a lot of people who are homeless, though that's not quite so bad as it was.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "It would be nice to talk about " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", like some of the new developments on the outskirts of cities." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [{ type: "text", text: "Yeah, they've opened some massive new shopping centres outside my city." }],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yeah, the same with mine, but it means a lot of the shops in the city centre " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". But the outskirts are ideal for buildings that need a lot of space, like for conferences. They've opened a couple of big ones.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Yes, we've got some too. It'd be nicer to have more facilities for things like football too, but that's not happening where I live.",
        },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Same in my area." }] },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "We could include something about developing disused industrial sites. It seems like a good idea because you're not " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " to the natural environment." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yeah, but " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Not really. And what people forget is that they often used quite dangerous materials, chemicals and things, which haven't been properly cleared away, so the whole site has to be made safe.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [{ type: "text", text: "Hmm, that can't be cheap. And I bet it's often not budgeted for." }],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "You're right." }] },
    { speaker: "COLIN", segments: [{ type: "text", text: "Have you read about Masdar City?" }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "In Abu Dhabi? Yes. It was designed to be a green city, wasn't it? That might be a good example of a city which set out to depend entirely on renewable energy.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Yes, we should say something about that. It was designed to be totally pedestrianised too, wasn't it, with the transport underground.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Yes, and they had big plans for recycling to reduce waste to the lowest possible level. But let's stick to talking about power sources.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Then there's that ecotown in England, Greenhill Abbotts. It set out to conform to the usual principles, sustainability and so on. A lot of people were against it at first. They said the plans were unrealistic. I'm not sure how far they've got with it. I'll check.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "Right. So it looks as if we have " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM20_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Population — D It will be easy to find facts about this",
    questionVi: "Dân số — D Dễ tìm thông tin",
    modelParaphraseEn: "quite straightforward to find on the internet",
    modelParaphraseVi: "quite straightforward to find on the internet",
    acceptedAnswers: ["D", "easy to find facts", "straightforward to find"],
    explanationEn: "D = easy to find facts. Rosie calls it a bit boring — that is not an option.",
    explanationVi: "D = dễ tìm số liệu. Rosie nói hơi chán — không có lựa chọn đó.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Health — G The information provided about this was interesting",
    questionVi: "Sức khỏe — G Thông tin được cung cấp thú vị",
    modelParaphraseEn: "Yes, fascinating, wasn't it?",
    modelParaphraseVi: "Yes, fascinating, wasn't it?",
    acceptedAnswers: ["G", "interesting", "fascinating"],
    explanationEn: "G = the cholera lecture / maps were fascinating. Not too vague.",
    explanationVi: "G = bài giảng dịch tả / bản đồ thú vị. Không phải quá mơ hồ.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Economies — B This may not be relevant to their course",
    questionVi: "Kinh tế — B Có thể không liên quan khóa học",
    modelParaphraseEn: "I thought that had been taken off the syllabus for this year … it might be best to avoid it",
    modelParaphraseVi: "I thought that had been taken off the syllabus for this year … it might be best to avoid it",
    acceptedAnswers: ["B", "not be relevant", "taken off the syllabus", "best to avoid it"],
    explanationEn: "B = may not be on this year's syllabus, so they should avoid it.",
    explanationVi: "B = có thể đã bị bỏ khỏi syllabus năm nay, nên tránh.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Culture — A The information given about this was too vague",
    questionVi: "Văn hóa — A Thông tin quá mơ hồ",
    modelParaphraseEn: "It was all so general and the lecturer didn't give any useful examples",
    modelParaphraseVi: "It was all so general and the lecturer didn't give any useful examples",
    acceptedAnswers: ["A", "too vague", "all so general", "didn't give any useful examples"],
    explanationEn: "A = too vague / general, no useful examples — they hardly took notes.",
    explanationVi: "A = quá chung chung, không có ví dụ hữu ích — hầu như không ghi chép.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Poverty — E The facts about this may not be reliable",
    questionVi: "Nghèo đói — E Số liệu có thể không đáng tin",
    modelParaphraseEn: "figures relating to poverty … sometimes deliberately manipulated",
    modelParaphraseVi: "figures relating to poverty … sometimes deliberately manipulated",
    acceptedAnswers: ["E", "may not be reliable", "deliberately manipulated", "changed for political reasons"],
    explanationEn: "E = figures may be manipulated for political reasons. Not 'no useful research' (F).",
    explanationVi: "E = số liệu có thể bị thao túng vì lý do chính trị. Không phải F (chưa có nghiên cứu hữu ích).",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Main problem in Rosie's city: A crime / B housing / C unemployment",
    questionVi: "Vấn đề chính ở thành phố Rosie: A tội phạm / B nhà ở / C thất nghiệp",
    modelParaphraseEn: "that's linked to another more serious issue, which is that a lot of people don't have jobs",
    modelParaphraseVi: "that's linked to another more serious issue, which is that a lot of people don't have jobs",
    acceptedAnswers: ["C", "unemployment", "don't have jobs"],
    explanationEn: "C = unemployment is more serious than crime. Homelessness is less bad than it was (not B).",
    explanationVi: "C = thất nghiệp nghiêm trọng hơn tội phạm. Homeless ít tệ hơn trước (không phải B).",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Outskirts additions both are happy about: A conference centres / B sports centres / C retail centres",
    questionVi: "Cơ sở ven đô cả hai hài lòng: A trung tâm hội nghị / B thể thao / C bán lẻ",
    modelParaphraseEn: "the outskirts are ideal for buildings that need a lot of space, like for conferences",
    modelParaphraseVi: "the outskirts are ideal for buildings that need a lot of space, like for conferences",
    acceptedAnswers: ["A", "conference centres", "conferences"],
    explanationEn: "A = conference centres. Shopping centres make city-centre shops close; football facilities are not happening.",
    explanationVi: "A = trung tâm hội nghị. Trung tâm mua sắm làm cửa hàng trung tâm đóng; sân bóng thì chưa có.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Developing disused industrial sites may: A have unexpected costs / B damage the urban environment / C destroy valuable historical buildings",
    questionVi: "Khu công nghiệp bỏ hoang có thể: A phát sinh chi phí bất ngờ / B hại môi trường đô thị / C phá công trình lịch sử",
    modelParaphraseEn: "that can't be cheap. And I bet it's often not budgeted for",
    modelParaphraseVi: "that can't be cheap. And I bet it's often not budgeted for",
    acceptedAnswers: ["A", "unexpected costs", "not budgeted for", "can't be cheap"],
    explanationEn: "A = making the site safe (dangerous chemicals) is often not budgeted. Rosie says the buildings are not architecturally significant (not C) and you are not harming the natural environment (not B).",
    explanationVi: "A = làm sạch hóa chất thường không được tính vào ngân sách. Rosie nói nhà không có giá trị kiến trúc (không phải C) và không hại môi trường tự nhiên (không phải B).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Masdar City as an attempt to achieve: A waste recycling / B sustainable energy use / C free transport",
    questionVi: "Masdar City là ví dụ nỗ lực: A tái chế rác / B năng lượng bền vững / C giao thông miễn phí",
    modelParaphraseEn: "a city which set out to depend entirely on renewable energy … let's stick to talking about power sources",
    modelParaphraseVi: "a city which set out to depend entirely on renewable energy … let's stick to talking about power sources",
    acceptedAnswers: ["B", "sustainable energy use", "renewable energy", "power sources"],
    explanationEn: "B = renewable / sustainable energy. Pedestrianised underground transport and recycling are mentioned, but they stick to power sources.",
    explanationVi: "B = năng lượng tái tạo / bền vững. Có nhắc đi bộ, tàu ngầm và tái chế, nhưng họ chỉ nói power sources.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Colin is uncertain about Greenhill Abbotts: A its objectives / B why there was opposition / C how much of it has actually been built",
    questionVi: "Colin không chắc về Greenhill Abbotts: A mục tiêu / B vì sao bị phản đối / C đã xây được bao nhiêu",
    modelParaphraseEn: "I'm not sure how far they've got with it. I'll check",
    modelParaphraseVi: "I'm not sure how far they've got with it. I'll check",
    acceptedAnswers: ["C", "how much of it has actually been built", "how far they've got"],
    explanationEn: "C = how far it has got / how much is built. He already knows the sustainability aims and that people said the plans were unrealistic.",
    explanationVi: "C = dự án đã tiến tới đâu / xây được bao nhiêu. Ông đã biết mục tiêu bền vững và việc bị cho là không thực tế.",
  },
];
