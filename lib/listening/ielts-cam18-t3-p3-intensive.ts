import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["That seminar yesterday"] },
    { id: "g2", answers: ["a real eye-opener"] },
    { id: "g3", answers: ["I didn't know that", "I did not know that"] },
    { id: "g4", answers: ["that's true", "that is true"] },
    { id: "g5", answers: ["didn't seem a positive thing", "did not seem a positive thing"] },
    { id: "g6", answers: ["for a change"] },
    { id: "g7", answers: ["Normally, you only hear"] },
    { id: "g8", answers: ["Bit too optimistic, don't you think", "Bit too optimistic don't you think"] },
    { id: "g9", answers: ["all the evidence shows"] },
    { id: "g10", answers: ["in the long term"] },
    { id: "g11", answers: ["That's already happening", "That is already happening"] },
    { id: "g12", answers: ["Yeah, incredible"] },
    { id: "g13", answers: ["I'd never have thought", "I would never have thought"] },
    { id: "g14", answers: ["thanks to technology"] },
    { id: "g15", answers: ["I'd expected there to be", "I had expected there to be"] },
    { id: "g16", answers: ["I'd have assumed", "I would have assumed"] },
    { id: "g17", answers: ["They barely existed"] },
    { id: "g18", answers: ["It's very hard to predict", "It is very hard to predict"] },
  ],
  lines: [
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " on automation and the future of work was really good wasn't it? Looking at the first industrial revolution in Britain in the 19th century and seeing how people reacted to massive change was " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes. It was interesting to hear how people felt about automation then and what challenges they faced. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " first started with workers in the textile industry." },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        {
          type: "text",
          text: "With those protesting workers called the Luddites destroying their knitting machines because they were so worried about losing their jobs.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes, and ultimately, they didn't achieve anything. And anyway, industrialisation created more jobs than it destroyed.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " – but it probably " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " at the time. I can see why the Luddites felt so threatened." },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "I know. I'm sure I would have felt the same. The discussion about the future of work was really optimistic " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". I like the idea that work won't involve doing boring, repetitive tasks, as robots will do all that. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " negative stuff about the future." },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: "? For example, I can't see how people are about to have more leisure time, when " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " people are spending longer than ever at work." },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "No – that's true. And what about lower unemployment? I'm not so sure about that.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "text", text: "Perhaps " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " – but not in the foreseeable future." },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Mmm. And I expect most people will be expected to work until they're much older – as everyone's living much longer.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "I enjoyed all that stuff on how technology has changed some jobs and how they're likely to change in the near future.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". Like accountants. You might think all the technological innovations would have put them out of a job, but in fact there are more of them than ever. They're still really in demand and have become far more efficient.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. That was amazing. Twenty times more accountants in this country compared to the 19th century.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " that demand for hairdressing would have gone up so much in the last hundred years. One hairdresser for every 287 people now, compared to one for over 1,500.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah because people's earning power has gone up so they can afford to spend more on personal services like that.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [{ type: "text", text: "But technology hasn't changed the actual job that much." }],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "No, they've got hairdryers, etc. but it's one job where you don't depend on a computer … The kind of work that administrative staff do has changed enormously, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ". Even 20 years ago there were secretaries doing dictation and typing." },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        {
          type: "text",
          text: "Yes. Really boring compared to these days, when they're given much more responsibility and higher status.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        { type: "text", text: "Mmm. A lot of graduates go in for this kind of work now … " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " a much bigger change in the number of agricultural workers in the 19th century. But the 1871 census showed that roughly 25% of the population worked on the land.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " it would be more than 50%. Now it's less than 0.2%." },
      ],
    },
    { speaker: "YOUNG WOMAN", segments: [{ type: "text", text: "What about care workers?" }] },
    {
      speaker: "YOUNG MAN",
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " in the 19th century as people's lifespan was so much shorter. But now of course this sector will see huge growth.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah – and it's hard enough to meet current demand. The future looks quite bleak for bank clerks. They've been in decline since ATMs were introduced in the eighties.",
        },
      ],
    },
    {
      speaker: "YOUNG MAN",
      segments: [
        {
          type: "text",
          text: "And technology will certainly make most of the jobs they do now redundant, I think.",
        },
      ],
    },
    {
      speaker: "YOUNG WOMAN",
      segments: [
        { type: "text", text: "I agree, although the situation may change. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " what will happen." },
      ],
    },
  ],
};

export const CAM18_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO opinions on the Luddites: A their actions were ineffective",
    questionVi: "Hai ý về Luddites: A hành động không hiệu quả",
    modelParaphraseEn: "ultimately, they didn't achieve anything",
    modelParaphraseVi: "ultimately, they didn't achieve anything",
    acceptedAnswers: ["didn't achieve anything", "ineffective"],
    explanationEn: "A = they achieved nothing. Industrialisation actually created more jobs, so they were not 'proved right'.",
    explanationVi: "A = họ chẳng đạt gì. Công nghiệp hóa tạo thêm việc, nên không phải 'họ đúng'.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E their attitude is understandable",
    questionVi: "(cùng danh sách) E thái độ của họ là dễ hiểu",
    modelParaphraseEn: "I can see why the Luddites felt so threatened – I'm sure I would have felt the same",
    modelParaphraseVi: "I can see why the Luddites felt so threatened – I'm sure I would have felt the same",
    acceptedAnswers: ["felt so threatened", "would have felt the same", "understandable"],
    explanationEn: "E = their fear made sense at the time. Not that they are still influential today.",
    explanationVi: "E = nỗi sợ lúc đó là dễ hiểu. Không phải họ vẫn có ảnh hưởng hôm nay.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO doubtful predictions: D working hours will be shorter",
    questionVi: "Hai dự đoán họ nghi ngờ: D giờ làm sẽ ngắn hơn",
    modelParaphraseEn: "I can't see how people are about to have more leisure time – people are spending longer than ever at work",
    modelParaphraseVi: "I can't see how people are about to have more leisure time – people are spending longer than ever at work",
    acceptedAnswers: ["more leisure time", "longer than ever at work", "shorter hours"],
    explanationEn: "D = more leisure / shorter hours looks false; evidence shows longer hours. Robots doing boring tasks is the optimistic idea they like.",
    explanationVi: "D = thêm thời gian rảnh / giờ ngắn thì họ không tin; thực tế làm lâu hơn. Robot làm việc nhàm thì họ thích.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) B unemployment will fall",
    questionVi: "(cùng danh sách) B thất nghiệp sẽ giảm",
    modelParaphraseEn: "what about lower unemployment? I'm not so sure about that – not in the foreseeable future",
    modelParaphraseVi: "what about lower unemployment? I'm not so sure about that – not in the foreseeable future",
    acceptedAnswers: ["lower unemployment", "not so sure", "foreseeable future"],
    explanationEn: "B = they doubt unemployment will fall soon. Later retirement is already happening, not something they doubt.",
    explanationVi: "B = họ không tin thất nghiệp sẽ giảm sớm. Nghỉ hưu muộn thì đang xảy ra rồi, không phải điều họ nghi.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Accountants — G both employment and productivity have risen",
    questionVi: "Kế toán — G cả số việc và năng suất đều tăng",
    modelParaphraseEn: "there are more of them than ever – still really in demand and have become far more efficient",
    modelParaphraseVi: "there are more of them than ever – still really in demand and have become far more efficient",
    acceptedAnswers: ["more of them than ever", "far more efficient", "in demand"],
    explanationEn: "G = more accountants (employment) and far more efficient (productivity).",
    explanationVi: "G = nhiều kế toán hơn (employment) và hiệu quả hơn (productivity).",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Hairdressers — E higher disposable income has led to a huge increase in jobs",
    questionVi: "Thợ làm tóc — E thu nhập khả dụng tăng nên việc làm tăng mạnh",
    modelParaphraseEn: "people's earning power has gone up so they can afford to spend more on personal services",
    modelParaphraseVi: "people's earning power has gone up so they can afford to spend more on personal services",
    acceptedAnswers: ["earning power", "personal services", "disposable income"],
    explanationEn: "E = higher earnings → more hairdressing jobs. The actual job itself has not changed much.",
    explanationVi: "E = thu nhập tăng → nhiều thợ tóc hơn. Bản chất công việc thì ít đổi.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Administrative staff — B their role has become more interesting",
    questionVi: "Nhân viên hành chính — B công việc thú vị hơn",
    modelParaphraseEn: "Really boring compared to these days, when they're given much more responsibility and higher status",
    modelParaphraseVi: "Really boring compared to these days, when they're given much more responsibility and higher status",
    acceptedAnswers: ["more responsibility", "higher status", "more interesting"],
    explanationEn: "B = the role is more interesting now (responsibility + status), versus old dictation/typing.",
    explanationVi: "B = công việc thú vị hơn (trách nhiệm + địa vị), so với thời đánh máy/ghi chép.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Agricultural workers — C numbers have fallen dramatically",
    questionVi: "Nông dân — C số người giảm mạnh",
    modelParaphraseEn: "1871: roughly 25% worked on the land – I'd have assumed more than 50%. Now it's less than 0.2%",
    modelParaphraseVi: "1871: roughly 25% worked on the land – I'd have assumed more than 50%. Now it's less than 0.2%",
    acceptedAnswers: ["less than 0.2%", "25%", "fallen dramatically"],
    explanationEn: "C = from ~25% (even less than they expected) down to under 0.2%.",
    explanationVi: "C = từ ~25% (thấp hơn họ tưởng) xuống dưới 0.2%.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Care workers — F a significant rise in demand for this service",
    questionVi: "Nhân viên chăm sóc — F nhu cầu sẽ tăng mạnh",
    modelParaphraseEn: "this sector will see huge growth – it's hard enough to meet current demand",
    modelParaphraseVi: "this sector will see huge growth – it's hard enough to meet current demand",
    acceptedAnswers: ["huge growth", "meet current demand", "rise in demand"],
    explanationEn: "F = demand / the sector will grow a lot. They barely existed in the 19th century.",
    explanationVi: "F = nhu cầu / ngành sẽ tăng mạnh. Thế kỷ 19 gần như chưa có nghề này.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Bank clerks — A these jobs are likely to be at risk",
    questionVi: "Giao dịch viên ngân hàng — A nghề này có nguy cơ mất",
    modelParaphraseEn: "the future looks quite bleak – technology will make most of the jobs they do now redundant",
    modelParaphraseVi: "the future looks quite bleak – technology will make most of the jobs they do now redundant",
    acceptedAnswers: ["bleak", "redundant", "at risk"],
    explanationEn: "A = at risk / redundant (decline since ATMs in the 80s).",
    explanationVi: "A = có nguy cơ / dư thừa (giảm từ khi có ATM thập niên 80).",
  },
];
