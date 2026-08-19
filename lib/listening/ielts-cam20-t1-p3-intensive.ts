import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Shall we go through the notes"] },
    { id: "g2", answers: ["It's been a real eye-opener", "It has been a real eye-opener"] },
    { id: "g3", answers: ["The downside of a modern lifestyle"] },
    { id: "g4", answers: ["Did you come to any conclusions"] },
    { id: "g5", answers: ["I'd assumed it was mainly an issue", "I had assumed it was mainly an issue"] },
    { id: "g6", answers: ["far from making me feel isolated"] },
    { id: "g7", answers: ["It definitely does more good than harm"] },
    { id: "g8", answers: ["A more plausible explanation is that"] },
    { id: "g9", answers: ["I'm not sure there's enough evidence", "I am not sure there is enough evidence"] },
    { id: "g10", answers: ["Not exactly reliable, then"] },
    { id: "g11", answers: ["it was hard to reach a judgment"] },
    { id: "g12", answers: ["Unquestionably"] },
    { id: "g13", answers: ["quite convincing"] },
    { id: "g14", answers: ["Survival often depended on"] },
    { id: "g15", answers: ["I don't think so either", "I do not think so either"] },
    { id: "g16", answers: ["too embarrassed to admit to it"] },
    { id: "g17", answers: ["strike up a conversation"] },
    { id: "g18", answers: ["aren't the same thing", "are not the same thing"] },
  ],
  lines: [
    {
      speaker: "TAMARA",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " we've made from our research into loneliness now, Dev?" },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "OK, Tamara. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". I had no idea that loneliness has been increasing steadily for the last 20 years." },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "text", text: "I know. And it's the same all over the world. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", I guess." },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: " about what the reasons for the increase are?" },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " for the elderly, but in fact it's something which affects young people just as much." },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "So nothing really to do with longer lifespans. What about social media? In my case, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", it actually does the opposite." },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". I'd say loneliness has a lot to do with the way cities are designed. People living in high-rise flats with not much opportunity to speak to their neighbours.",
        },
      ],
    },
    { speaker: "DEV", segments: [{ type: "text", text: "I think you're right." }] },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "Another possible reason is that people are having fewer children and don't live in large extended family groups.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "But in this country anyway, that all changed decades ago. And yet loneliness is a more recent problem.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "text", text: "I suppose so. " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " people are having to move around for work and often end up living miles away from their family and friends.",
        },
      ],
    },
    { speaker: "DEV", segments: [{ type: "text", text: "That's true." }] },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "Looking at the studies on health risks and loneliness, there are claims that loneliness has as much impact as smoking 15 cigarettes a day.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "Or similar to the risks caused by obesity. But " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " for some of these claims." },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "Well, what about that one in Finland, which showed that loneliness increased the risk of cancer by about 10%? And those findings have been supported by other studies too.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "You're right about that one. I was actually thinking of the studies on dementia. Some found no association between loneliness and dementia, and others found the opposite.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". There's been a lot of research on cardiovascular disease and whether loneliness contributes to that.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "Yes, I read that " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", as the definition of loneliness varied quite a lot, and the responses from participants were too subjective. But there's no doubt that loneliness contributes to a weakened immune system.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". The data on that is sound." },
      ],
    },
    {
      speaker: "DEV",
      segments: [{ type: "text", text: "What did you think about the evolutionary theory of loneliness?" }],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "text", text: "Well I thought the idea that loneliness evolved because it motivated people to be with other people is " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " group cooperation." },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "But I don't think there is enough evidence to claim that there must be a group of neurons in our brains which influence social behaviour by making us feel bad when we're alone.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "There are a few studies which support the theory, but not conclusively enough. More evidence is needed.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "And anyway, this theory's not really useful when it comes to solving the problem of loneliness today.",
        },
      ],
    },
    { speaker: "TAMARA", segments: [{ type: "text", text: "True." }] },
    {
      speaker: "DEV",
      segments: [{ type: "text", text: "Should we look at the relationship between loneliness and mental health now?" }],
    },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "OK. So, loneliness and depression are clearly related and that's been recognised by various governments around the world. But unlike depression, loneliness has no recognised clinical form.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "There's no available diagnosis or effective treatment and that's not likely to change.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". I was thinking we should start our presentation with an example from our own experience. I'd like to talk about how lonely I was when I started university, being away from home for the first time and all that.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "Good idea. Everyone will be able to relate to that although a lot of students were probably " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "Yeah. We could discuss ways of dealing with loneliness as well, like just talking to strangers.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "Loads of studies have shown that interactions with shop assistants and bar staff make people feel more optimistic and relaxed.",
        },
      ],
    },
    {
      speaker: "TAMARA",
      segments: [
        {
          type: "text",
          text: "I don't know about that, but it must make people feel more connected with their community.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        { type: "text", text: "True, although you need to be a certain kind of person to be able to just " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "TAMARA", segments: [{ type: "text", text: "Good point." }] },
    {
      speaker: "TAMARA",
      segments: [
        { type: "text", text: "We should say something about solitude and how being alone and being lonely " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". It's strange the way some people can't stand being by themselves while others love it.",
        },
      ],
    },
    {
      speaker: "DEV",
      segments: [
        {
          type: "text",
          text: "Yeah, the research shows a certain amount of solitude is beneficial for wellbeing, which I appreciate, but being alone isn't something I actually like. I'd never choose to go on holiday alone, for example.",
        },
      ],
    },
    { speaker: "TAMARA", segments: [{ type: "text", text: "Me neither." }] },
    { speaker: "DEV", segments: [{ type: "text", text: "Well, let's not think." }] },
  ],
};

export const CAM20_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO causes they both believe:  C urban design",
    questionVi: "Hai nguyên nhân cả hai đồng ý:  C quy hoạch đô thị",
    modelParaphraseEn: "loneliness has a lot to do with the way cities are designed. People living in high-rise flats … I think you're right",
    modelParaphraseVi: "loneliness has a lot to do with the way cities are designed. People living in high-rise flats … I think you're right",
    acceptedAnswers: ["C", "urban design", "the way cities are designed"],
    explanationEn: "C = urban design / how cities are designed (high-rise flats, little chance to speak to neighbours). Dev agrees. Social media actually helps them; longer lifespans are rejected.",
    explanationVi: "C = urban design / cách thiết kế thành phố (chung cư cao tầng, ít nói chuyện với hàng xóm). Dev đồng ý. Social media thực ra giúp họ; longer lifespans bị bác.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E a mobile workforce",
    questionVi: "(cùng danh sách) E lực lượng lao động di chuyển",
    modelParaphraseEn: "people are having to move around for work and often end up living miles away from their family and friends. That's true",
    modelParaphraseVi: "people are having to move around for work and often end up living miles away from their family and friends. That's true",
    acceptedAnswers: ["E", "a mobile workforce", "move around for work"],
    explanationEn: "E = mobile workforce (move for work, live far from family/friends). Smaller nuclear families changed decades ago, so they reject that as the recent cause.",
    explanationVi: "E = mobile workforce (chuyển chỗ vì việc, sống xa gia đình/bạn). Gia đình hạt nhân nhỏ đã đổi từ hàng thập kỷ, nên họ bác nguyên nhân đó.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO health risks with solid evidence:  A a weakened immune system",
    questionVi: "Hai rủi ro sức khỏe có bằng chứng vững:  A suy giảm miễn dịch",
    modelParaphraseEn: "there's no doubt that loneliness contributes to a weakened immune system. Unquestionably. The data on that is sound",
    modelParaphraseVi: "there's no doubt that loneliness contributes to a weakened immune system. Unquestionably. The data on that is sound",
    acceptedAnswers: ["A", "a weakened immune system", "the data on that is sound"],
    explanationEn: "A = weakened immune system — both accept the data as sound. Dementia findings conflict; cardiovascular evidence is too subjective; obesity is only a comparison, not solid proof.",
    explanationVi: "A = weakened immune system — cả hai chấp nhận data is sound. Dementia mâu thuẫn; tim mạch quá chủ quan; obesity chỉ là so sánh, không phải bằng chứng vững.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) C cancer",
    questionVi: "(cùng danh sách) C ung thư",
    modelParaphraseEn: "loneliness increased the risk of cancer by about 10%? And those findings have been supported by other studies too. You're right about that one",
    modelParaphraseVi: "loneliness increased the risk of cancer by about 10%? And those findings have been supported by other studies too. You're right about that one",
    acceptedAnswers: ["C", "cancer", "increased the risk of cancer"],
    explanationEn: "C = cancer (Finland study ~10%, supported by other studies). Dev agrees on that one.",
    explanationVi: "C = cancer (nghiên cứu Phần Lan ~10%, được nghiên cứu khác ủng hộ). Dev đồng ý điểm này.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "TWO opinions on evolutionary theory:  A it has little practical relevance",
    questionVi: "Hai quan điểm về lý thuyết tiến hóa:  A ít giá trị thực tiễn",
    modelParaphraseEn: "this theory's not really useful when it comes to solving the problem of loneliness today. True",
    modelParaphraseVi: "this theory's not really useful when it comes to solving the problem of loneliness today. True",
    acceptedAnswers: ["A", "little practical relevance", "not really useful"],
    explanationEn: "A = little practical relevance today. They do not call it misleading or hard to understand, and they do not say it should be more widely accepted.",
    explanationVi: "A = ít giá trị thực tiễn hiện nay. Họ không nói lý thuyết gây hiểu nhầm hay khó hiểu, cũng không bảo nên chấp nhận rộng hơn.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "(same list) B it needs further investigation",
    questionVi: "(cùng danh sách) B cần nghiên cứu thêm",
    modelParaphraseEn: "a few studies which support the theory, but not conclusively enough. More evidence is needed",
    modelParaphraseVi: "a few studies which support the theory, but not conclusively enough. More evidence is needed",
    acceptedAnswers: ["B", "it needs further investigation", "More evidence is needed"],
    explanationEn: "B = needs further investigation / more evidence. The neuron claim is not proven; studies are not conclusive.",
    explanationVi: "B = cần nghiên cứu thêm / more evidence. Giả thuyết về nơ-ron chưa chứng minh; nghiên cứu chưa kết luận.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "When comparing loneliness to depression, the students  A doubt there will ever be a medical cure / B claim the link is overstated / C express frustration it is not taken more seriously",
    questionVi: "Khi so sánh cô đơn với trầm cảm, hai bạn  A nghi ngờ sẽ có cách chữa y học / B cho rằng mối liên hệ bị phóng đại / C bức xúc vì chưa được xem trọng",
    modelParaphraseEn: "There's no available diagnosis or effective treatment and that's not likely to change. I don't think so either",
    modelParaphraseVi: "There's no available diagnosis or effective treatment and that's not likely to change. I don't think so either",
    acceptedAnswers: ["A", "doubt that there will ever be a medical cure", "that's not likely to change"],
    explanationEn: "A = no diagnosis or effective treatment, and that is not likely to change — they doubt a medical cure. They still treat the depression link as clear, not overstated.",
    explanationVi: "A = không có chẩn đoán hay điều trị hiệu quả, và điều đó khó đổi — họ nghi ngờ có medical cure. Họ vẫn coi liên hệ với depression là rõ, không phải overstated.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Why start with a personal example:  A explain how difficult loneliness can be / B highlight a situation most students will recognise / C emphasise it is more common for men",
    questionVi: "Vì sao mở đầu bằng ví dụ cá nhân:  A giải thích cô đơn khó thế nào / B nhấn tình huống hầu hết sinh viên nhận ra / C nhấn nam gặp nhiều hơn",
    modelParaphraseEn: "how lonely I was when I started university … Good idea. Everyone will be able to relate to that",
    modelParaphraseVi: "how lonely I was when I started university … Good idea. Everyone will be able to relate to that",
    acceptedAnswers: ["B", "a situation that most students will recognise", "Everyone will be able to relate"],
    explanationEn: "B = a situation most students recognise (loneliness at university). Not about gender, and not mainly to show how difficult it is.",
    explanationVi: "B = tình huống hầu hết sinh viên nhận ra (cô đơn khi lên đại học). Không nói giới tính, cũng không chủ yếu để kể độ khó.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Talking to strangers helps because  A it creates a sense of belonging / B it builds self-confidence / C it makes people feel more positive",
    questionVi: "Nói chuyện với người lạ giúp vì  A tạo cảm giác thuộc về / B tăng tự tin / C khiến người ta tích cực hơn",
    modelParaphraseEn: "I don't know about that, but it must make people feel more connected with their community",
    modelParaphraseVi: "I don't know about that, but it must make people feel more connected with their community",
    acceptedAnswers: ["A", "a sense of belonging", "more connected with their community"],
    explanationEn: "A = belonging / connected with the community. Tamara does not accept the optimistic/relaxed claim (C); self-confidence is not mentioned.",
    explanationVi: "A = belonging / gắn với community. Tamara không chấp nhận ý optimistic/relaxed (C); không nói self-confidence.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "They find it difficult to understand why solitude is considered  A similar to loneliness / B necessary for mental health / C an enjoyable experience",
    questionVi: "Họ khó hiểu vì sao solitude được coi  A giống cô đơn / B cần cho sức khỏe tâm thần / C trải nghiệm thú vị",
    modelParaphraseEn: "being alone isn't something I actually like. I'd never choose to go on holiday alone … Me neither",
    modelParaphraseVi: "being alone isn't something I actually like. I'd never choose to go on holiday alone … Me neither",
    acceptedAnswers: ["C", "an enjoyable experience", "isn't something I actually like"],
    explanationEn: "C = they cannot see solitude as enjoyable — neither would holiday alone. They do accept some solitude is beneficial for wellbeing, and they distinguish being alone from being lonely.",
    explanationVi: "C = họ không thấy solitude thú vị — không ai chọn đi nghỉ một mình. Họ vẫn thừa nhận solitude có lợi cho wellbeing, và phân biệt being alone với being lonely.",
  },
];
