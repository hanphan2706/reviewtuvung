import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I want you to discuss"] },
    { id: "g2", answers: ["I had no idea"] },
    { id: "g3", answers: ["in a whole new light"] },
    { id: "g4", answers: ["It was interesting to see"] },
    { id: "g5", answers: ["That's right", "That is right"] },
    { id: "g6", answers: ["much more of a challenge"] },
    { id: "g7", answers: ["Which is a key aim of"] },
    { id: "g8", answers: ["Shall we talk about"] },
    { id: "g9", answers: ["Let's start with", "Let us start with"] },
    { id: "g10", answers: ["He was interesting because"] },
    { id: "g11", answers: ["What did you make of"] },
    { id: "g12", answers: ["She didn't seem satisfied"] },
    { id: "g13", answers: ["Anya was such a star"] },
    { id: "g14", answers: ["I'm sure it was a positive learning experience"] },
    { id: "g15", answers: ["I think it would have taken me ages"] },
    { id: "g16", answers: ["It's strange that", "It is strange that"] },
    { id: "g17", answers: ["That's true", "That is true"] },
    { id: "g18", answers: ["I can see using origami is"] },
  ],
  lines: [
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "So now " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool. Can you all work with the person sitting next to you …",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " that such a simple thing like folding squares of paper to make the shape of something like a bird could be such an amazing tool. It's made me see origami " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        { type: "text", text: "I know. " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " the educational skills the children were developing by doing origami. On the video you could see them really listening hard to make sure they did all the steps in the right order to make the bird.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". In this lesson they were working individually but it would also be interesting to see if the children could work out how to make something simple without being given any direction. That would help with building teamwork as well.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        { type: "text", text: "Yes, but " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". One thing that really stood out for me was that the children were all having fun while being taught something new.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " any lesson with this age group. And although these kids had no problems with folding the paper, with younger children you could do origami to help practise fine motor skills.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        { type: "text", text: "Absolutely. " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " the individual children we saw on the video? I wrote all their names down and took some notes.",
        },
      ],
    },
    { speaker: "SEB", segments: [{ type: "text", text: "Yes, I did too." }] },
    {
      speaker: "LIA",
      segments: [
        { type: "text", text: "OK, good. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " Sid." },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " before they started doing the origami, he was being quite disruptive.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "Yes. He really benefited from having to use his hands – it helped him to settle down and start concentrating.",
        },
      ],
    },
    { speaker: "SEB", segments: [{ type: "text", text: "Yes, I noticed that too. What about Jack? I noticed he seemed to want to work things out for himself." }] },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "Mmm. You could see him trying out different things rather than asking the teacher for help. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " Naomi?" },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        {
          type: "text",
          text: "She seemed to be losing interest at one point but then she decided she wanted her mouse to be the best and that motivated her to try harder.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " with hers in the end, though." },
      ],
    },
    { speaker: "SEB", segments: [{ type: "text", text: "No." }] },
    {
      speaker: "LIA",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". She listened so carefully and then produced the perfect bird with very little effort.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        {
          type: "text",
          text: "Mmm – I think the teacher could have increased the level of difficulty for her.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [{ type: "text", text: "Maybe. I think it was the first time Zara had come across origami." }],
    },
    {
      speaker: "SEB",
      segments: [{ type: "text", text: "She looked as if she didn't really get what was going on." }],
    },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "She seemed unsure about what she was supposed to do, but in the end hers didn't turn out too badly.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " for her." },
      ],
    },
    { speaker: "LIA", segments: [{ type: "text", text: "Mmm." }] },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "I think one reason why the origami activity worked so well in this class was that the teacher was well prepared.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " to prepare examples, showing each of the steps involved in making the bird. But that was a really good idea. The children could see what they were aiming for – and much better for them to be able to hold something, rather than just looking at pictures.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "Mmm – those physical examples supported her verbal explanations really well.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " origami isn't used more widely. Why do you think that is?" },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "Well, teachers may just feel it's not that appealing to children who are used to doing everything on computers, especially boys. Even if they're aware of the benefits.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        {
          type: "text",
          text: "Oh, I don't know. It's no different to any other craft activity. I bet it's because so many teachers are clumsy like me.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " – too much effort required if you're not good with your hands." },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        {
          type: "text",
          text: "Well, anyway, I think we should try it out in our maths teaching practice with Year 3. " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " a really engaging way of reinforcing children's knowledge of geometric shapes, like they were doing in the video, but I think it would also work really well for presenting fractions, which is coming up soon.",
        },
      ],
    },
    {
      speaker: "LIA",
      segments: [
        {
          type: "text",
          text: "Good idea – that's something most of the kids in that class might struggle with. Origami would also be good practice for using symmetry – but I think they did that last term.",
        },
      ],
    },
    {
      speaker: "SEB",
      segments: [
        {
          type: "text",
          text: "OK – well let's try and get some ideas together and plan the lesson next week.",
        },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "OK, if you could all stop …" }] },
  ],
};

export const CAM18_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO educational skills: B following instructions",
    questionVi: "Hai kỹ năng: B làm theo hướng dẫn",
    modelParaphraseEn: "listening hard to make sure they did all the steps in the right order",
    modelParaphraseVi: "listening hard to make sure they did all the steps in the right order",
    acceptedAnswers: ["listening hard", "steps in the right order", "following instructions"],
    explanationEn: "B = following steps in order. Teamwork without direction is only a suggestion, not what the video showed.",
    explanationVi: "B = làm theo từng bước. Làm nhóm không hướng dẫn chỉ là ý đề xuất, không phải những gì video cho thấy.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) D learning through play",
    questionVi: "(cùng danh sách) D học qua chơi",
    modelParaphraseEn: "the children were all having fun while being taught something new",
    modelParaphraseVi: "the children were all having fun while being taught something new",
    acceptedAnswers: ["having fun", "learning through play", "taught something new"],
    explanationEn: "D = learning through play / having fun. Fine motor skills are for younger children, not this video.",
    explanationVi: "D = học qua chơi / vui vẻ. Fine motor là gợi ý cho trẻ nhỏ hơn, không phải video này.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Sid — D seemed to find the activity calming",
    questionVi: "Sid — D hoạt động giúp bình tĩnh",
    modelParaphraseEn: "he was being quite disruptive … using his hands helped him settle down and start concentrating",
    modelParaphraseVi: "he was being quite disruptive … using his hands helped him settle down and start concentrating",
    acceptedAnswers: ["settle down", "concentrating", "calming"],
    explanationEn: "D = calming / settle down after being disruptive.",
    explanationVi: "D = bình tĩnh / settle down sau khi đang phá.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Jack — A demonstrated independence",
    questionVi: "Jack — A thể hiện tính độc lập",
    modelParaphraseEn: "trying out different things rather than asking the teacher for help",
    modelParaphraseVi: "trying out different things rather than asking the teacher for help",
    acceptedAnswers: ["work things out for himself", "rather than asking", "independence"],
    explanationEn: "A = independence — not asking for teacher support.",
    explanationVi: "A = độc lập — không hỏi giáo viên.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Naomi — C developed a competitive attitude",
    questionVi: "Naomi — C có thái độ cạnh tranh",
    modelParaphraseEn: "she wanted her mouse to be the best and that motivated her to try harder",
    modelParaphraseVi: "she wanted her mouse to be the best and that motivated her to try harder",
    acceptedAnswers: ["be the best", "try harder", "competitive"],
    explanationEn: "C = competitive (wanted hers to be the best). She was not satisfied at the end.",
    explanationVi: "C = cạnh tranh (muốn cái của mình đẹp nhất). Cuối cùng cô ấy không hài lòng.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Anya — G seemed to find the activity easy",
    questionVi: "Anya — G thấy hoạt động dễ",
    modelParaphraseEn: "produced the perfect bird with very little effort",
    modelParaphraseVi: "produced the perfect bird with very little effort",
    acceptedAnswers: ["very little effort", "perfect bird", "easy"],
    explanationEn: "G = easy / little effort. Teacher could have made it harder for her.",
    explanationVi: "G = dễ / ít cố gắng. Giáo viên có thể tăng độ khó.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Zara — F seemed confused",
    questionVi: "Zara — F có vẻ bối rối",
    modelParaphraseEn: "didn't really get what was going on – unsure about what she was supposed to do",
    modelParaphraseVi: "didn't really get what was going on – unsure about what she was supposed to do",
    acceptedAnswers: ["didn't really get", "unsure", "confused"],
    explanationEn: "F = confused / unsure (first time with origami).",
    explanationVi: "F = bối rối / không chắc (lần đầu làm origami).",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Before starting: A make models of stages / B check terminology / C tell children not to worry",
    questionVi: "Trước khi bắt đầu: giáo viên nên?",
    modelParaphraseEn: "prepare examples, showing each of the steps – hold something rather than just looking at pictures",
    modelParaphraseVi: "prepare examples, showing each of the steps – hold something rather than just looking at pictures",
    acceptedAnswers: ["prepare examples", "physical examples", "models", "each of the steps"],
    explanationEn: "A = physical stage models. Pictures alone are weaker support.",
    explanationVi: "A = mẫu từng bước cầm được. Chỉ nhìn tranh thì kém hơn.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Teachers unwilling because: A crafts unimportant / B lack skills / C takes too much time",
    questionVi: "Giáo viên ngại dùng vì?",
    modelParaphraseEn: "so many teachers are clumsy like me – too much effort if you're not good with your hands",
    modelParaphraseVi: "so many teachers are clumsy like me – too much effort if you're not good with your hands",
    acceptedAnswers: ["clumsy", "not good with your hands", "skills"],
    explanationEn: "B = lack of necessary skills. Lia's computer-appeal idea is not what they agree on.",
    explanationVi: "B = thiếu kỹ năng cần thiết. Ý Lia về máy tính không phải điều họ đồng ý.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Use origami in maths to: A correct misunderstanding / B set a challenge / C introduce a new concept",
    questionVi: "Dùng origami trong toán để?",
    modelParaphraseEn: "work really well for presenting fractions, which is coming up soon",
    modelParaphraseVi: "work really well for presenting fractions, which is coming up soon",
    acceptedAnswers: ["presenting fractions", "new concept", "fractions"],
    explanationEn: "C = introduce fractions (coming up). Shapes reinforce existing knowledge; symmetry was last term.",
    explanationVi: "C = giới thiệu phân số (sắp học). Hình học là củng cố; đối xứng kỳ trước đã học.",
  },
];
