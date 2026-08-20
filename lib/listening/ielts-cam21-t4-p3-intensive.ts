import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["we've got to do", "we have got to do"] },
    { id: "g2", answers: ["I'm a bit concerned", "I am a bit concerned"] },
    { id: "g3", answers: ["more a matter of"] },
    { id: "g4", answers: ["we mustn't be too general", "we must not be too general"] },
    { id: "g5", answers: ["too much of a rush"] },
    { id: "g6", answers: ["We'd better decide now", "We had better decide now"] },
    { id: "g7", answers: ["That's likely to become more important", "That is likely to become more important"] },
    { id: "g8", answers: ["let's go with that", "let us go with that"] },
    { id: "g9", answers: ["one way of meeting that demand"] },
    { id: "g10", answers: ["Let's think of", "Let us think of"] },
    { id: "g11", answers: ["greatly improve how you feel"] },
    { id: "g12", answers: ["instead of just having"] },
    { id: "g13", answers: ["travel to an office"] },
    { id: "g14", answers: ["adapted over time"] },
    { id: "g15", answers: ["not so sure"] },
    { id: "g16", answers: ["charge them up"] },
    { id: "g17", answers: ["a pedestrianised area", "a pedestrianized area"] },
    { id: "g18", answers: ["doing something together's always more enjoyable", "doing something together is always more enjoyable"] },
  ],
  lines: [
    {
      speaker: "MIA",
      segments: [
        { type: "text", text: "You know that joint presentation " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " this semester, Leo?" },
      ],
    },
    { speaker: "LEO", segments: [{ type: "text", text: "On houses of the future?" }] },
    {
      speaker: "MIA",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " – are we meant to come up with creative new suggestions for these houses?" },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "I don't think so. It's " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " reporting and evaluating possible developments. But " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", we've got to support our points by referring to specific cases. So that'll need a lot of work.",
        },
      ],
    },
    {
      speaker: "MIA",
      segments: [{ type: "text", text: "I'm afraid so. When's it got to be done by?" }],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "In about 6 weeks, so that's not " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        { type: "text", text: "Good. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " what type of housing we're going to focus on." },
      ],
    },
    {
      speaker: "LEO",
      segments: [{ type: "text", text: "How about housing for different generations living together?" }],
    },
    {
      speaker: "MIA",
      segments: [{ type: "text", text: "We could do. Or accommodation for one person?" }],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "I think someone else is doing that. I was wondering about housing for the elderly? " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yeah that's true. But I think your suggestion about intergenerational living might be more interesting – " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        {
          type: "text",
          text: "OK. Now I think the future demand is mainly going to be for accommodation in urban areas. So " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " might be to use existing commercial buildings and adapt them to form accommodation..." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "... or come up with original ways of organising space so that people can live in smaller homes. But I think the solution is to design multi-storey apartment blocks.",
        },
      ],
    },
    {
      speaker: "LEO",
      segments: [{ type: "text", text: "Building up rather than out, yes." }],
    },
    {
      speaker: "MIA",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: " some specific developments for houses of the future." }],
    },
    {
      speaker: "LEO",
      segments: [{ type: "text", text: "OK. How about increased use of roof space on high-rise buildings for gardens." }],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yes. In fact it doesn't have to be high-rise, you can do it on a one-storey building in a suburb, but it would " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " if you live in an urban high-rise." },
      ],
    },
    {
      speaker: "LEO",
      segments: [{ type: "text", text: "Especially if you don't have a balcony." }],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yes. I think homes of the future will all need access to a shared working space, somewhere in the same building or group of houses, where people can go and work " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " a laptop on the kitchen table." },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "Yes, so they aren't having to " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " but can still interact with others. That's often how new ideas get generated – by chatting to someone from a different profession.",
        },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yeah. I read about a type of design where the internal walls of an apartment are moveable, so the space can be " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " as people's needs change." },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        {
          type: "text",
          text: "Like when children leave school and start working but still continue to live with their parents for many years? Or when an elderly relative moves in with the family... it would mean they could still have their own space, specially designed for their needs.",
        },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yes. Have you heard about those smart bathroom mirrors which can monitor people's health? They recognise signs of illness and contact a doctor automatically?",
        },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "Hmm, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " they're a good idea." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        { type: "text", text: "Nor am I. People might worry about conditions which aren't serious at all." },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        {
          type: "text",
          text: "What about transport? Wouldn't it be good if there were bike sheds with charging points, so people could store their electric bikes securely and " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " at the same time." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Yes. That would encourage more people to cycle, instead of using their car. Much better for the planet.",
        },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        {
          type: "text",
          text: "I read about one housing development where cars had to be left just outside it, so the centre was all " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". Great for families with children." },
      ],
    },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "Maybe. But what if you're disabled or elderly, and can't walk far? It wouldn't be so good for people like that.",
        },
      ],
    },
    { speaker: "LEO", segments: [{ type: "text", text: "No." }] },
    {
      speaker: "MIA",
      segments: [
        {
          type: "text",
          text: "I saw a scheme for communal vegetable plots, where neighbours could decide what to grow together. That'd be a great way for older people to get to know one another, especially if they're no longer going out to work.",
        },
      ],
    },
    {
      speaker: "LEO",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", isn't it? Do you think..." },
      ],
    },
  ],
};

export const CAM21_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Both concerned about: B finding suitable examples",
    questionVi: "Cả hai lo: B tìm ví dụ phù hợp",
    modelParaphraseEn: "we mustn't be too general, we've got to support our points by referring to specific cases. So that'll need a lot of work. I'm afraid so",
    modelParaphraseVi: "we mustn't be too general, we've got to support our points by referring to specific cases. So that'll need a lot of work. I'm afraid so",
    acceptedAnswers: ["specific cases", "that'll need a lot of work", "B"],
    explanationEn: "B = both worry about supporting points with specific cases. The deadline is 6 weeks, not a rush (not A). Creative new suggestions are not required (not C).",
    explanationVi: "B = cả hai lo phải lấy specific cases. Deadline 6 tuần, không gấp (không phải A). Không bắt buộc ý tưởng sáng tạo mới (không phải C).",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Focus the assignment on housing for: A family groups",
    questionVi: "Tập trung bài tập vào nhà cho: A nhóm gia đình",
    modelParaphraseEn: "housing for different generations living together? … your suggestion about intergenerational living might be more interesting – let's go with that",
    modelParaphraseVi: "housing for different generations living together? … your suggestion about intergenerational living might be more interesting – let's go with that",
    acceptedAnswers: ["intergenerational living", "different generations", "family groups", "A"],
    explanationEn: "A = they choose intergenerational / different generations living together (family groups). Housing for the elderly is set aside; one-person accommodation is already taken (not B, C).",
    explanationVi: "A = họ chọn sống liên thế hệ / nhiều thế hệ (nhóm gia đình). Nhà cho người già bị gác lại; nhà một người đã có nhóm khác làm (không phải B, C).",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Urban demand should be met by: B constructing tall buildings",
    questionVi: "Nhu cầu đô thị nên đáp ứng bằng: B xây nhà cao tầng",
    modelParaphraseEn: "the solution is to design multi-storey apartment blocks. Building up rather than out, yes",
    modelParaphraseVi: "the solution is to design multi-storey apartment blocks. Building up rather than out, yes",
    acceptedAnswers: ["multi-storey apartment blocks", "Building up rather than out", "B"],
    explanationEn: "B = they agree on multi-storey blocks (building up). Adapting commercial buildings and smaller homes are mentioned then rejected as the solution (not A, C).",
    explanationVi: "B = họ thống nhất chung cư nhiều tầng (xây lên). Cải tạo tòa thương mại và nhà nhỏ hơn được nêu rồi không chọn làm giải pháp (không phải A, C).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "use of roof space for gardens — B especially beneficial for city residents",
    questionVi: "vườn trên mái — B đặc biệt có lợi cho cư dân thành phố",
    modelParaphraseEn: "it doesn't have to be high-rise … but it would greatly improve how you feel if you live in an urban high-rise. Especially if you don't have a balcony",
    modelParaphraseVi: "it doesn't have to be high-rise … but it would greatly improve how you feel if you live in an urban high-rise. Especially if you don't have a balcony",
    acceptedAnswers: ["urban high-rise", "greatly improve how you feel", "B"],
    explanationEn: "B = roof gardens help most if you live in an urban high-rise, especially without a balcony.",
    explanationVi: "B = vườn mái giúp nhiều nhất khi sống ở chung cư cao tầng đô thị, nhất là không có ban công.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "shared working spaces — E This could encourage creativity",
    questionVi: "không gian làm việc chung — E Có thể khuyến khích sáng tạo",
    modelParaphraseEn: "still interact with others. That's often how new ideas get generated – by chatting to someone from a different profession",
    modelParaphraseVi: "still interact with others. That's often how new ideas get generated – by chatting to someone from a different profession",
    acceptedAnswers: ["new ideas get generated", "different profession", "E"],
    explanationEn: "E = chatting across professions generates new ideas — creativity, not just avoiding the commute.",
    explanationVi: "E = trò chuyện với nghề khác sinh ý tưởng mới — sáng tạo, không chỉ tránh đi làm xa.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "moveable internal walls — I would suit both existing and new members of a household",
    questionVi: "tường trong nhà di chuyển được — I phù hợp cả thành viên sẵn có và thành viên mới",
    modelParaphraseEn: "children … still continue to live with their parents … Or when an elderly relative moves in … they could still have their own space, specially designed for their needs",
    modelParaphraseVi: "children … still continue to live with their parents … Or when an elderly relative moves in … they could still have their own space, specially designed for their needs",
    acceptedAnswers: ["own space", "elderly relative moves in", "I"],
    explanationEn: "I = grown children staying on and an elderly relative moving in both get space designed for their needs.",
    explanationVi: "I = con ở lại và người già dọn vào đều có không gian thiết kế theo nhu cầu.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "smart mirrors in bathrooms — A This could cause unnecessary anxiety",
    questionVi: "gương thông minh phòng tắm — A Có thể gây lo âu không cần thiết",
    modelParaphraseEn: "not so sure they're a good idea. Nor am I. People might worry about conditions which aren't serious at all",
    modelParaphraseVi: "not so sure they're a good idea. Nor am I. People might worry about conditions which aren't serious at all",
    acceptedAnswers: ["worry about conditions", "aren't serious", "A"],
    explanationEn: "A = both doubt the mirrors because people might worry about conditions that are not serious.",
    explanationVi: "A = cả hai nghi ngờ gương vì người ta có thể lo bệnh không nghiêm trọng.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "bike sheds with charging points — D This would have environmental benefits",
    questionVi: "nhà xe đạp có sạc — D Có lợi cho môi trường",
    modelParaphraseEn: "That would encourage more people to cycle, instead of using their car. Much better for the planet",
    modelParaphraseVi: "That would encourage more people to cycle, instead of using their car. Much better for the planet",
    acceptedAnswers: ["encourage more people to cycle", "better for the planet", "D"],
    explanationEn: "D = cycling instead of driving is better for the planet — environmental benefits.",
    explanationVi: "D = đạp xe thay vì lái xe thì tốt hơn cho hành tinh — lợi môi trường.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "restriction of cars to certain areas — H would help some people but cause problems for others",
    questionVi: "hạn chế xe vào một số khu — H giúp một số người nhưng gây khó cho người khác",
    modelParaphraseEn: "Great for families with children. Maybe. But what if you're disabled or elderly, and can't walk far? It wouldn't be so good for people like that",
    modelParaphraseVi: "Great for families with children. Maybe. But what if you're disabled or elderly, and can't walk far? It wouldn't be so good for people like that",
    acceptedAnswers: ["Great for families with children", "disabled or elderly", "H"],
    explanationEn: "H = good for families with children, but not for disabled or elderly people who cannot walk far.",
    explanationVi: "H = tốt cho gia đình có trẻ, nhưng không tốt cho người khuyết tật hoặc già đi bộ không xa.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "communal vegetable plots — G This could enable retired people to share a project",
    questionVi: "luống rau chung — G Giúp người nghỉ hưu cùng làm một dự án",
    modelParaphraseEn: "a great way for older people to get to know one another, especially if they're no longer going out to work",
    modelParaphraseVi: "a great way for older people to get to know one another, especially if they're no longer going out to work",
    acceptedAnswers: ["older people", "no longer going out to work", "G"],
    explanationEn: "G = older people who no longer go out to work get to know one another by growing vegetables together.",
    explanationVi: "G = người lớn tuổi không còn đi làm làm quen nhau nhờ trồng rau chung.",
  },
];
