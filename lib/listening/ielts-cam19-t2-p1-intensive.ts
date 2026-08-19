import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd really like to learn myself", "I would really like to learn myself"] },
    { id: "g2", answers: ["Why don't you come along", "Why do you not come along"] },
    { id: "g3", answers: ["I'm sure there's room for another person", "I am sure there is room for another person"] },
    { id: "g4", answers: ["He's called a 'coordinator'", "He is called a 'coordinator'", "He's called a coordinator", "He is called a coordinator"] },
    { id: "g5", answers: ["How do you spell his surname"] },
    { id: "g6", answers: ["he used to play in a lot of bands"] },
    { id: "g7", answers: ["I knew a few chords"] },
    { id: "g8", answers: ["we were all equally hopeless"] },
    { id: "g9", answers: ["Oh, that's reassuring", "Oh, that is reassuring"] },
    { id: "g10", answers: ["as the group got bigger"] },
    { id: "g11", answers: ["I prefer going there"] },
    { id: "g12", answers: ["I used to go to tap dancing classes"] },
    { id: "g13", answers: ["that suited me well"] },
    { id: "g14", answers: ["you can always buy a second-hand one"] },
    { id: "g15", answers: ["Gary goes round and helps them"] },
    { id: "g16", answers: ["that's harder than you think", "that is harder than you think"] },
    { id: "g17", answers: ["people like it because they can really concentrate"] },
    { id: "g18", answers: ["I've got used to it now", "I have got used to it now"] },
  ],
  lines: [
    { speaker: "WOMAN", segments: [{ type: "text", text: "Hi Coleman, how are you?" }] },
    { speaker: "COLEMAN", segments: [{ type: "text", text: "Good, thanks." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I wanted to have a chat with you because our friend Josh told me that you've joined a guitar group and it sounds interesting. ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: "? " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Really? So – who runs the classes?" }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: " – his name's Gary Mathieson." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Let me note that down. Gary. . . . " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "COLEMAN", segments: [{ type: "text", text: "It's M-A-T-H-I-E-S-O-N." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right, thanks." }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "He's retired, actually, but he's a really nice guy and " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Thanks. So how long have you been going?" }] },
    { speaker: "COLEMAN", segments: [{ type: "text", text: "About a month now." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And could you play anything before you started?" }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", but that's all." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "I'm sure everyone will be better than me." }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "That's what I thought, too. When I first spoke to Gary on the phone, he said it was a class for beginners, but I was still worried that everyone would be better than me, but ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". So where do you meet?" },
      ],
    },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "Well, when I joined the group, they were meeting in Gary's home, but " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", he decided to book a room at the college in town. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I know that place. " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " there when I was at secondary school. I haven't been since, though and I can't remember what road it's in… is it Lock Street?",
        },
      ],
    },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "It's just beyond there at the bottom of New Street near the city roundabout.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Yes, of course." }] },
    {
      speaker: "COLEMAN",
      segments: [{ type: "text", text: "The guitar club is on the first floor in Room T347." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Right. And when do you meet? Is it at the weekend?" }],
    },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "We meet on Thursdays. It used to be 10.30 and " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", but now we meet at 11. The class that's in there before us asked if they could have the room for another 30 minutes.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Oh, I see. Well, I'd love to come, but I don't have a guitar." }],
    },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". There's a website called 'The perfect instrument' that sells all kinds of guitars, violins and so on. I'm sure you'll find something there.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "So what's a typical lesson like with Gary?" }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "Well, he always starts by getting us to tune our guitars. That takes about five minutes.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "Some people have an app they use, but others do it by ear. ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". And while he's doing that, he tells us what he's going to do during the lesson.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "COLEMAN",
      segments: [{ type: "text", text: "First, we usually spend about ten minutes doing some strumming." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "So is that using . . . what are they called . . . plectrums?" }],
    },
    { speaker: "COLEMAN", segments: [{ type: "text", text: "No – we just use our thumbs." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Much easier." }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "Gary reminds us where to put our fingers for each chord and then we play them together. Sometimes we all just start laughing because we're so bad at keeping time, so Gary starts clapping to help us.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Do you learn to play any songs?" }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "Yes – we do at least one song with words and chords. I mean " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, I'm sure it is!" }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "That part of the lesson takes about 15 minutes. He often brings a recording of the song and plays it to us first. Then he hands out the song and if there's a new chord in it, we practise that before we play it together – but really slowly.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Do you do any finger picking?" }] },
    {
      speaker: "COLEMAN",
      segments: [
        {
          type: "text",
          text: "That's the last ten minutes of the lesson, when we pick out the individual notes from a tune he's made up. It's always quite simple.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "That must be hard, though." }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "It is, but " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " and if we're all playing well, it sounds quite impressive. The only trouble is that he sometimes gets us to play one at a time – you know, alone.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "That's scary." }] },
    {
      speaker: "COLEMAN",
      segments: [
        { type: "text", text: "It is, but " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". At the end he spends about five minutes telling us what to practise for the following week.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well, thanks Coleman. I'll go and have a look at that website, I think.",
        },
      ],
    },
  ],
};

export const CAM19_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Coordinator: Gary ______",
    questionVi: "Coordinator: Gary ______",
    modelParaphraseEn: "his name's Gary Mathieson – It's M-A-T-H-I-E-S-O-N",
    modelParaphraseVi: "his name's Gary Mathieson – It's M-A-T-H-I-E-S-O-N",
    acceptedAnswers: ["Mathieson"],
    explanationEn: "The coordinator is Gary Mathieson, spelled M-A-T-H-I-E-S-O-N.",
    explanationVi: "Người phụ trách là Gary Mathieson, đánh vần M-A-T-H-I-E-S-O-N.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Level: ______",
    questionVi: "Level: ______",
    modelParaphraseEn: "he said it was a class for beginners",
    modelParaphraseVi: "he said it was a class for beginners",
    acceptedAnswers: ["beginners", "beginner"],
    explanationEn: "Gary told Coleman on the phone that it was a beginners class.",
    explanationVi: "Gary nói trên điện thoại đây là lớp beginners.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Place: the ______",
    questionVi: "Place: the ______",
    modelParaphraseEn: "he decided to book a room at the college in town",
    modelParaphraseVi: "he decided to book a room at the college in town",
    acceptedAnswers: ["college"],
    explanationEn: "They used to meet at Gary's home; now they book a room at the college.",
    explanationVi: "Trước học nhà Gary; nay đặt phòng ở college.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "______ Street",
    questionVi: "______ Street",
    modelParaphraseEn: "at the bottom of New Street near the city roundabout",
    modelParaphraseVi: "at the bottom of New Street near the city roundabout",
    acceptedAnswers: ["New"],
    explanationEn: "Not Lock Street — just beyond that, at the bottom of New Street.",
    explanationVi: "Không phải Lock Street — ngay sau đó, cuối New Street.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Thursday morning at ______",
    questionVi: "Thursday morning at ______",
    modelParaphraseEn: "It used to be 10.30 … but now we meet at 11",
    modelParaphraseVi: "It used to be 10.30 … but now we meet at 11",
    acceptedAnswers: ["11", "eleven", "11 am", "11 a.m.", "eleven am"],
    explanationEn: "They meet on Thursdays at 11, not 10.30 — the previous class needed 30 more minutes.",
    explanationVi: "Thứ Năm lúc 11, không còn 10.30 — lớp trước cần thêm 30 phút.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Recommended website: 'The perfect ______'",
    questionVi: "Recommended website: 'The perfect ______'",
    modelParaphraseEn: "There's a website called 'The perfect instrument'",
    modelParaphraseVi: "There's a website called 'The perfect instrument'",
    acceptedAnswers: ["instrument"],
    explanationEn: "Second-hand guitars: a site called 'The perfect instrument'.",
    explanationVi: "Mua guitar cũ: trang 'The perfect instrument'.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "tuning guitars — using an app or by ______",
    questionVi: "tuning guitars — using an app or by ______",
    modelParaphraseEn: "Some people have an app they use, but others do it by ear",
    modelParaphraseVi: "Some people have an app they use, but others do it by ear",
    acceptedAnswers: ["ear"],
    explanationEn: "Tuning is by app or by ear; Gary goes round and helps.",
    explanationVi: "Lên dây bằng app hoặc by ear; Gary đi quanh giúp.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "keeping time while the teacher is ______",
    questionVi: "keeping time while the teacher is ______",
    modelParaphraseEn: "we're so bad at keeping time, so Gary starts clapping to help us",
    modelParaphraseVi: "we're so bad at keeping time, so Gary starts clapping to help us",
    acceptedAnswers: ["clapping"],
    explanationEn: "They laugh because they cannot keep time, so Gary starts clapping.",
    explanationVi: "Họ không giữ nhịp được nên Gary starts clapping.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "playing songs — often listening to a ______ of a song",
    questionVi: "playing songs — often listening to a ______ of a song",
    modelParaphraseEn: "He often brings a recording of the song and plays it to us first",
    modelParaphraseVi: "He often brings a recording of the song and plays it to us first",
    acceptedAnswers: ["recording"],
    explanationEn: "Before they play, he often plays a recording of the song.",
    explanationVi: "Trước khi chơi, ông thường phát a recording of the song.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "playing together, then ______",
    questionVi: "playing together, then ______",
    modelParaphraseEn: "he sometimes gets us to play one at a time – you know, alone",
    modelParaphraseVi: "he sometimes gets us to play one at a time – you know, alone",
    acceptedAnswers: ["alone"],
    explanationEn: "Finger-picking: they play together, then sometimes one at a time — alone.",
    explanationVi: "Finger-picking: chơi cùng nhau, rồi đôi khi từng người — alone.",
  },
];
