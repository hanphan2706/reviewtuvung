import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["So how are you getting on with your teaching practice"] },
    {
      id: "g2",
      answers: ["I've been put in charge of", "I have been put in charge of"],
    },
    {
      id: "g3",
      answers: ["I'd like to talk it over with you", "I would like to talk it over with you"],
    },
    {
      id: "g4",
      answers: [
        "You'd better start by giving me a bit of background",
        "You had better start by giving me a bit of background",
      ],
    },
    {
      id: "g5",
      answers: [
        "It's quite a popular activity within the school",
        "It is quite a popular activity within the school",
      ],
    },
    {
      id: "g6",
      answers: [
        "I've never worked with a band of more than 20 before",
        "I have never worked with a band of more than 20 before",
      ],
    },
    {
      id: "g7",
      answers: [
        "They aren't really good enough to enter national band competitions",
        "They are not really good enough to enter national band competitions",
      ],
    },
    {
      id: "g8",
      answers: [
        "hopefully it'll be an incentive for them",
        "hopefully it will be an incentive for them",
      ],
    },
    {
      id: "g9",
      answers: [
        "If you ask me, they aren't really up to it yet",
        "If you ask me, they are not really up to it yet",
      ],
    },
    { id: "g10", answers: ["Have you been doing anything with them"] },
    { id: "g11", answers: ["I thought it was pretty inspiring"] },
    { id: "g12", answers: ["The students seemed to find it interesting, too"] },
    { id: "g13", answers: ["it might make the students realise how much they can achieve"] },
    {
      id: "g14",
      answers: ["That's what I've got in mind", "That is what I have got in mind"],
    },
    { id: "g15", answers: ["It depends on whether I can persuade the school"] },
    {
      id: "g16",
      answers: [
        "I'm finding it quite difficult to cope with",
        "I am finding it quite difficult to cope with",
      ],
    },
    { id: "g17", answers: ["gives me a very plausible reason"] },
    {
      id: "g18",
      answers: ["what I'm up against", "what I am up against"],
    },
  ],
  lines: [
    {
      speaker: "LIZZIE",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " at the High School, Joe?" },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "Well " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " the school marching band, and it's quite a responsibility. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LIZZIE",
      segments: [
        { type: "text", text: "Go ahead. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "OK. Well the band has students in it from all years, so they're aged 11 to 18, and there are about 50 of them altogether. ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", and this is very different." },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "I can imagine." }] },
    {
      speaker: "JOE",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", but they're in a regional one later in the term. Even if they don't win, and I don't expect them to, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " to try and improve." },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "Yes, hopefully." }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Well, now the town council's organising a carnival in the summer, and the band has been asked to perform. ",
        },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", and I need to get them functioning better as a band, and in a very short time.",
        },
      ],
    },
    {
      speaker: "LIZZIE",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: "? Apart from practising the music, I mean." },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "I played a recording I came across, of a drummer talking about how playing in a band had changed his life. I think it was an after-dinner speech. ",
        },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", because being in the band had stopped him from getting involved in crime. ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "That's good." }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "I'm planning to show them that old film from the 1940s 'Strike Up the Band', and talk about it with the students. What do you think?",
        },
      ],
    },
    {
      speaker: "LIZZIE",
      segments: [
        { type: "text", text: "Good idea. As it's about a school band, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " if they work together." },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". I'm hoping I can take some of the band to a parade that's going to take place next month. A couple of marching bands will be performing, and the atmosphere should be quite exciting. ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " to hire a coach or two to take us there." },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "Mmm. They sound like good ideas to me." }] },
    { speaker: "JOE", segments: [{ type: "text", text: "Thanks." }] },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "Can I tell you about a few people in the band who " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "? I'm sure you'll have some ideas about what I can do." },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "Go ahead." }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "There's a flautist who says she loves playing in the band. We rehearse twice a week after school, but she's hardly ever there. Then she looks for me the next day and ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " - she says she had to help her mother, or she's been ill, but to be honest, I don't believe her.",
        },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "Oh dear! Any more students with difficulties?" }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Plenty! There's a trumpeter who thinks she's the best musician in the band, though she certainly isn't. She's always saying what she thinks other people should do, which makes my job pretty difficult.",
        },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "She sounds a bit of a nightmare!" }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "You can say that again. One of the trombonists has got an impressive sense of rhythm, and could be an excellent musician - except that he has breathing difficulties, and he doesn't really have enough breath for the trombone. He'd be much better off playing percussion, for instance, but he refuses to give up. So he ends up only playing half the notes.",
        },
      ],
    },
    {
      speaker: "LIZZIE",
      segments: [{ type: "text", text: "I suppose you have to admire his determination." }],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Maybe. One of the percussionists isn't too bad, but he never seems to interact with other people, and he always rushes off as soon as the rehearsal ends. I don't know if there are family reasons, or what. But it isn't good in a band, where people really need to feel they're part of a group.",
        },
      ],
    },
    { speaker: "LIZZIE", segments: [{ type: "text", text: "Hmm." }] },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "There are others too, but at least that gives you an idea of ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Do you have any thoughts about what I can do, Lizzie?" },
      ],
    },
  ],
};

export const CAM14_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "It consists of around ______ students",
    questionVi: "It consists of around ______ students",
    modelParaphraseEn: "there are about 50 of them altogether",
    modelParaphraseVi: "there are about 50 of them altogether",
    acceptedAnswers: ["50"],
    explanationEn: "About 50 students, aged 11 to 18, from all years.",
    explanationVi: "Khoảng 50 học sinh, 11–18 tuổi, tất cả các khối.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "It is due to play in a ______ band competition",
    questionVi: "It is due to play in a ______ band competition",
    modelParaphraseEn: "They aren't really good enough to enter national band competitions, but they're in a regional one later in the term",
    modelParaphraseVi: "They aren't really good enough to enter national band competitions, but they're in a regional one later in the term",
    acceptedAnswers: ["regional"],
    explanationEn: "Not national; they are in a regional competition later in the term.",
    explanationVi: "Không phải national; họ thi regional later in the term.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "It has been invited to play in the town's ______",
    questionVi: "It has been invited to play in the town's ______",
    modelParaphraseEn: "the town council's organising a carnival in the summer, and the band has been asked to perform",
    modelParaphraseVi: "the town council's organising a carnival in the summer, and the band has been asked to perform",
    acceptedAnswers: ["carnival"],
    explanationEn: "Asked to perform at the town carnival in the summer.",
    explanationVi: "Được mời biểu diễn ở carnival của thị trấn vào mùa hè.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "They have listened to a talk by a ______",
    questionVi: "They have listened to a talk by a ______",
    modelParaphraseEn: "a drummer talking about how playing in a band had changed his life - an after-dinner speech",
    modelParaphraseVi: "a drummer talking about how playing in a band had changed his life - an after-dinner speech",
    acceptedAnswers: ["drummer"],
    explanationEn: "Joe played a recording of a drummer's after-dinner speech.",
    explanationVi: "Joe phát recording bài nói after-dinner của một drummer.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Joe will discuss a ______ with the band",
    questionVi: "Joe will discuss a ______ with the band",
    modelParaphraseEn: "I'm planning to show them that old film from the 1940s 'Strike Up the Band', and talk about it with the students",
    modelParaphraseVi: "I'm planning to show them that old film from the 1940s 'Strike Up the Band', and talk about it with the students",
    acceptedAnswers: ["film"],
    explanationEn: "He will show and discuss the 1940s film Strike Up the Band.",
    explanationVi: "Anh sẽ chiếu và thảo luận film Strike Up the Band thập niên 1940.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Joe hopes the band will attend a ______ next month",
    questionVi: "Joe hopes the band will attend a ______ next month",
    modelParaphraseEn: "I'm hoping I can take some of the band to a parade that's going to take place next month",
    modelParaphraseVi: "I'm hoping I can take some of the band to a parade that's going to take place next month",
    acceptedAnswers: ["parade"],
    explanationEn: "A parade next month, if the school will hire a coach.",
    explanationVi: "Parade tháng tới, nếu nhà trường thuê coach.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "flautist - problem (A-F)",
    questionVi: "flautist - problem (A-F)",
    modelParaphraseEn: "We rehearse twice a week after school, but she's hardly ever there",
    modelParaphraseVi: "We rehearse twice a week after school, but she's hardly ever there",
    acceptedAnswers: ["D", "misses too many rehearsals", "hardly ever there"],
    explanationEn: "D = misses too many rehearsals. Hardly ever there; excuses are not believed.",
    explanationVi: "D = misses too many rehearsals. Hầu như không bao giờ có mặt; lý do không được tin.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "trumpeter - problem (A-F)",
    questionVi: "trumpeter - problem (A-F)",
    modelParaphraseEn: "She's always saying what she thinks other people should do, which makes my job pretty difficult",
    modelParaphraseVi: "She's always saying what she thinks other people should do, which makes my job pretty difficult",
    acceptedAnswers: ["B", "keeps making unhelpful suggestions", "saying what other people should do"],
    explanationEn: "B = keeps making unhelpful suggestions. Always saying what others should do.",
    explanationVi: "B = keeps making unhelpful suggestions. Luôn nói người khác nên làm gì.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "trombonist - problem (A-F)",
    questionVi: "trombonist - problem (A-F)",
    modelParaphraseEn: "he has breathing difficulties, and he doesn't really have enough breath for the trombone",
    modelParaphraseVi: "he has breathing difficulties, and he doesn't really have enough breath for the trombone",
    acceptedAnswers: ["E", "has a health problem", "breathing difficulties"],
    explanationEn: "E = has a health problem. Breathing difficulties; not enough breath for trombone.",
    explanationVi: "E = has a health problem. Khó thở; không đủ hơi cho trombone.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "percussionist - problem (A-F)",
    questionVi: "percussionist - problem (A-F)",
    modelParaphraseEn: "he never seems to interact with other people, and he always rushes off as soon as the rehearsal ends",
    modelParaphraseVi: "he never seems to interact with other people, and he always rushes off as soon as the rehearsal ends",
    acceptedAnswers: ["F", "doesn't mix with other students", "never seems to interact"],
    explanationEn: "F = doesn't mix with other students. Never interacts; rushes off after rehearsal.",
    explanationVi: "F = doesn't mix with other students. Không tương tác; rút ngay sau rehearsal.",
  },
];
