import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["persuade one or two of you"] },
    { id: "g2", answers: ["Let me start by briefly explaining"] },
    { id: "g3", answers: ["spend some time, unpaid"] },
    { id: "g4", answers: ["two or three hours"] },
    { id: "g5", answers: ["their own abilities and interests"] },
    {
      id: "g6",
      answers: [
        "a family that's struggling",
        "a family that is struggling",
      ],
    },
    { id: "g7", answers: ["tips on cooking"] },
    { id: "g8", answers: ["the people being helped"] },
    { id: "g9", answers: ["employers usually look favourably on someone"] },
    {
      id: "g10",
      answers: ["they're lucky in that respect", "they are lucky in that respect"],
    },
    { id: "g11", answers: ["the range of ways"] },
    { id: "g12", answers: ["signs of dementia"] },
    {
      id: "g13",
      answers: ["she doesn't let that stop her", "she does not let that stop her"],
    },
    { id: "g14", answers: ["By using herself as an example"] },
    { id: "g15", answers: ["a professional dressmaker"] },
    { id: "g16", answers: ["a lot of pleasure"] },
    { id: "g17", answers: ["great for their self-esteem"] },
    { id: "g18", answers: ["though there are plenty more"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Good morning." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My name's Lucy Crittenden, and I'm the Director of Operations for an organisation that arranges volunteering in this part of the country.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'm hoping I can " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to become volunteers yourselves." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: " what we mean by volunteering." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Volunteers are teenagers and adults who choose to " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", helping other people in some way." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Most volunteers devote " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " to this every week, while a few do much more." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The people they help may have physical or behavioural difficulties, for example.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Volunteers can do all sorts of things, depending on " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If they're supporting " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", for example, they may be able to give them " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", or recommend how to plan their budget or how to shop sensibly on their income.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They might even do some painting or wallpapering, perhaps alongside any members of the family who are able to do it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Or even do some babysitting so that parents can go out for a while.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The benefit from volunteering isn't only for ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Volunteers also gain from it: they're using their skills to cope with somebody's mental or physical ill health, and volunteering may be a valuable element of their CV when they're applying for jobs: ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " who's given up time to help others." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Significantly, most volunteers feel that what they're doing gives them a purpose in their lives.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And in my opinion, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", as many people don't have that feeling." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now I'd like to tell you what some of our volunteers have said about what they do, to give you an idea of ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " in which they can help people." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Habib supports an elderly lady who's beginning to show " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Once a week they, along with other elderly people, go to the local community centre, where a group of people come in and sing.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The songs take the listeners back to their youth, and for a little while they can forget the difficulties that they face now.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Our volunteer Consuela is an amazing woman." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "She has difficulty walking herself, but " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "She helps a couple of people with similar difficulties, who had almost stopped walking altogether.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", Consuela encourages them to walk more and more." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Minh visits a young man who lives alone and can't leave his home on his own, so he hardly ever saw anyone.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But together they go out to the cinema, or to see friends the young man hadn't been able to visit for a long time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Tanya visits an elderly woman once a week." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When the woman found out that Tanya is " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", she got interested." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Tanya showed her some soft toys she'd made, and the woman decided to try it herself.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And now she really enjoys it, and spends hours making toys." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "They're not perhaps up to Tanya's standard yet, but she gains " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " from doing it." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Alexei is a volunteer with a family that faces a number of difficulties.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "By calmly talking over possible solutions with family members, he's helping them to realise that they aren't helpless, and that they can do something themselves to improve their situation.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This has been " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And the last volunteer I'll mention, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", is Juba." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "She volunteers with a teenage girl with learning difficulties, who wasn't very good at talking to other people.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Juba's worked very patiently with her, and now the girl is far better at expressing herself, and at understanding other people.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "OK, I hope that's given you an idea of what volunteering is all about. Now I'd like ...",
        },
      ],
    },
  ],
};

export const CAM14_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Which TWO activities that volunteers do are mentioned? A decorating / B cleaning / C delivering meals / D shopping / E childcare",
    questionVi: "Which TWO activities that volunteers do are mentioned? A decorating / B cleaning / C delivering meals / D shopping / E childcare",
    modelParaphraseEn: "They might even do some painting or wallpapering, perhaps alongside any members of the family who are able to do it",
    modelParaphraseVi: "They might even do some painting or wallpapering, perhaps alongside any members of the family who are able to do it",
    acceptedAnswers: ["A", "decorating", "painting", "wallpapering"],
    explanationEn: "A = decorating. Painting or wallpapering = decorating. Shopping is only advice, not doing the shopping.",
    explanationVi: "A = decorating. Painting/wallpapering = decorating. Shopping chỉ là lời khuyên, không phải đi chợ hộ.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E childcare",
    questionVi: "(same list) E childcare",
    modelParaphraseEn: "Or even do some babysitting so that parents can go out for a while",
    modelParaphraseVi: "Or even do some babysitting so that parents can go out for a while",
    acceptedAnswers: ["E", "childcare", "babysitting"],
    explanationEn: "E = childcare. Babysitting so parents can go out = childcare.",
    explanationVi: "E = childcare. Babysitting để bố mẹ đi ra ngoài = childcare.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Which TWO ways that volunteers can benefit? A learning to be part of a team / B having a sense of purpose / C realising how lucky they are / D improved time management / E boosting employment prospects",
    questionVi: "Which TWO ways that volunteers can benefit? A learning to be part of a team / B having a sense of purpose / C realising how lucky they are / D improved time management / E boosting employment prospects",
    modelParaphraseEn: "most volunteers feel that what they're doing gives them a purpose in their lives",
    modelParaphraseVi: "most volunteers feel that what they're doing gives them a purpose in their lives",
    acceptedAnswers: ["B", "having a sense of purpose", "purpose in their lives"],
    explanationEn: "B = sense of purpose. Lucky is the speaker's comment about volunteers, not a benefit they gain.",
    explanationVi: "B = sense of purpose. Lucky là nhận xét của diễn giả, không phải lợi ích tình nguyện viên nhận được.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) E boosting their employment prospects",
    questionVi: "(same list) E boosting their employment prospects",
    modelParaphraseEn: "volunteering may be a valuable element of their CV when they're applying for jobs: employers usually look favourably on someone who's given up time to help others",
    modelParaphraseVi: "volunteering may be a valuable element of their CV when they're applying for jobs: employers usually look favourably on someone who's given up time to help others",
    acceptedAnswers: ["E", "boosting their employment prospects", "CV", "applying for jobs"],
    explanationEn: "E = employment prospects. Valuable on a CV; employers look favourably on volunteers.",
    explanationVi: "E = employment prospects. Có ích trên CV; nhà tuyển dụng đánh giá cao tình nguyện viên.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Habib has helped someone to ______ (A–G)",
    questionVi: "Habib has helped someone to ______ (A–G)",
    modelParaphraseEn: "The songs take the listeners back to their youth, and for a little while they can forget the difficulties that they face now",
    modelParaphraseVi: "The songs take the listeners back to their youth, and for a little while they can forget the difficulties that they face now",
    acceptedAnswers: ["F", "remember past times", "back to their youth"],
    explanationEn: "F = remember past times. Songs take listeners back to their youth.",
    explanationVi: "F = remember past times. Bài hát đưa người nghe về tuổi trẻ.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Consuela has helped someone to ______ (A–G)",
    questionVi: "Consuela has helped someone to ______ (A–G)",
    modelParaphraseEn: "She helps a couple of people with similar difficulties, who had almost stopped walking altogether. By using herself as an example, Consuela encourages them to walk more and more",
    modelParaphraseVi: "She helps a couple of people with similar difficulties, who had almost stopped walking altogether. By using herself as an example, Consuela encourages them to walk more and more",
    acceptedAnswers: ["A", "overcome physical difficulties", "walk more"],
    explanationEn: "A = overcome physical difficulties. People who had almost stopped walking now walk more.",
    explanationVi: "A = overcome physical difficulties. Người gần như bỏ đi bộ nay đi nhiều hơn.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Minh has helped someone to ______ (A–G)",
    questionVi: "Minh has helped someone to ______ (A–G)",
    modelParaphraseEn: "he hardly ever saw anyone. But together they go out to the cinema, or to see friends the young man hadn't been able to visit for a long time",
    modelParaphraseVi: "he hardly ever saw anyone. But together they go out to the cinema, or to see friends the young man hadn't been able to visit for a long time",
    acceptedAnswers: ["E", "escape isolation", "hardly ever saw anyone"],
    explanationEn: "E = escape isolation. He hardly ever saw anyone; now they go out to the cinema or visit friends.",
    explanationVi: "E = escape isolation. Trước gần như không gặp ai; nay đi cinema hoặc thăm bạn.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Tanya has helped someone to ______ (A–G)",
    questionVi: "Tanya has helped someone to ______ (A–G)",
    modelParaphraseEn: "the woman decided to try it herself. And now she really enjoys it, and spends hours making toys",
    modelParaphraseVi: "the woman decided to try it herself. And now she really enjoys it, and spends hours making toys",
    acceptedAnswers: ["G", "start a new hobby", "try it herself", "making toys"],
    explanationEn: "G = start a new hobby. The woman tries making soft toys and now spends hours on it.",
    explanationVi: "G = start a new hobby. Bà thử làm thú nhồi bông và giờ dành hàng giờ.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Alexei has helped someone to ______ (A–G)",
    questionVi: "Alexei has helped someone to ______ (A–G)",
    modelParaphraseEn: "he's helping them to realise that they aren't helpless, and that they can do something themselves to improve their situation",
    modelParaphraseVi: "he's helping them to realise that they aren't helpless, and that they can do something themselves to improve their situation",
    acceptedAnswers: ["D", "solve problems independently", "do something themselves"],
    explanationEn: "D = solve problems independently. They can do something themselves to improve their situation.",
    explanationVi: "D = solve problems independently. Họ có thể tự làm gì đó để cải thiện tình hình.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Juba has helped someone to ______ (A–G)",
    questionVi: "Juba has helped someone to ______ (A–G)",
    modelParaphraseEn: "now the girl is far better at expressing herself, and at understanding other people",
    modelParaphraseVi: "now the girl is far better at expressing herself, and at understanding other people",
    acceptedAnswers: ["C", "improve their communication skills", "expressing herself"],
    explanationEn: "C = improve communication skills. Better at expressing herself and understanding other people.",
    explanationVi: "C = improve communication skills. Giỏi hơn ở expressing herself và understanding other people.",
  },
];
