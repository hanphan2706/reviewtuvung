import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["have been meaning to"] },
    {
      id: "g2",
      answers: ["It doesn't cost anything", "It does not cost anything"],
    },
    {
      id: "g3",
      answers: ["It's not just a place", "It is not just a place"],
    },
    { id: "g4", answers: ["Wish I had"] },
    { id: "g5", answers: ["pretty busy at present"] },
    { id: "g6", answers: ["hoping to get away"] },
    { id: "g7", answers: ["that sort of thing"] },
    { id: "g8", answers: ["a really nice quiet room"] },
    {
      id: "g9",
      answers: ["It's hard to find", "It is hard to find"],
    },
    { id: "g10", answers: ["a bit young for that"] },
    { id: "g11", answers: ["after the end of term"] },
    { id: "g12", answers: ["instead of getting bored"] },
    {
      id: "g13",
      answers: ["We're not free on Friday", "We are not free on Friday"],
    },
    { id: "g14", answers: ["get up to speed"] },
    {
      id: "g15",
      answers: ["you wouldn't expect", "you would not expect"],
    },
    {
      id: "g16",
      answers: ["so you wouldn't qualify", "so you would not qualify"],
    },
    { id: "g17", answers: ["which is really useful"] },
    { id: "g18", answers: ["bring the children round"] },
  ],
  lines: [
    { speaker: "SUSIE", segments: [{ type: "text", text: "Hello?" }] },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "Hi, Susie, it's Paul here. How are you? Enjoying your new job? You're working at the library, aren't you?",
        },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Yes. I started when the library re-opened a month ago. It's great.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Actually Carol and I " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " join for a while." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Oh, you should. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and the new library has all sorts of facilities. " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " where you borrow books. For instance, there's an area with comfortable seats where you can sit and read the magazines they have there. Some people spend the whole morning there.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Mmm. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " that amount of time to spend!" },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Yes, you must be " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", with the children and everything?" },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "We are, yes. But we're " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " this summer. We're thinking of going to Greece." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Well, we've got a much larger section of the library devoted to travel books now, so you should come and have a look. I can't remember if there's anything specifically on Greece, but I should think so.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "OK. Now Carol's organising a project for the history class she teaches at school - it's about life in the town a hundred years ago. Do you have anything that might be useful?",
        },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Yes, actually we've now got a new section with materials on the history of the town and surrounding region.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Right. I'll tell her. You can't always find " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " on the internet. Now in the old library there used to be a separate room with reference books. It was ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Yes. We've put those books in the main part of the library now, but we do have a room called the community room. It can be hired out for meetings, but at other times people can use it to study.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "I might use that. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " anywhere quiet at home sometimes." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "I can't remember how old your son and daughter are … we've introduced a special section of fiction written specially for teenagers, but they might be ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "PAUL", segments: [{ type: "text", text: "Yes, they would be." }] },
    {
      speaker: "SUSIE",
      segments: [{ type: "text", text: "Well, we do have lots of activities for younger children." }],
    },
    { speaker: "PAUL", segments: [{ type: "text", text: "Yes?" }] },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "For example we have a Science Club. At the next meeting, they're going to be doing experiments with stuff that everyone has in the kitchen - sugar and flour and so on.",
        },
      ],
    },
    { speaker: "PAUL", segments: [{ type: "text", text: "They might be interested, yes." }] },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "And we have a competition for children called Reading Challenge. That doesn't begin until " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". They have to read six books, and they get a certificate if they manage it.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "So that gives them something to do while they're on holiday, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "That's the idea. And there's special activities for adults too. On Friday we have a local author called Tanya Streep who's going to be talking about her new novel. It's called 'Catch the Mouse' and she based the story on a crime that actually took place here years ago.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", but I'll look out for the book." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Now this probably isn't for you, but we do have IT support available for members. We get quite a few older people coming along who are wanting to ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " with computer technology. It's on Tuesday mornings - they don't need to make an appointment or anything, they just turn up.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [{ type: "text", text: "Well, my mother might be interested, I'll let her know." }],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "OK. And there's another service which " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " from a library, which is a free medical check-up. The hospital arranges for someone to come along and measure the level of sugar in your blood, and they check cholesterol levels at the same time.",
        },
      ],
    },
    { speaker: "PAUL", segments: [{ type: "text", text: "Really?" }] },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Yes, but that's only for the over-60s, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "PAUL",
      segments: [{ type: "text", text: "OK. Well, I'll tell my mother, she might be interested." }],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "What other information … well, we do have a little shop with things like wallcharts and greetings cards, and also stamps so you can post the cards straightaway, ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Yeah. Well, I'll " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " at the weekend and we'll join. Oh, one more thing - I'll be bringing the car, is there parking available?" },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [{ type: "text", text: "Yes, and it's free in the evening and at weekends." }],
    },
    {
      speaker: "PAUL",
      segments: [{ type: "text", text: "Perfect. Well, thanks, Susie see you …" }],
    },
  ],
};

export const CAM12_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "an expanded section for books on ______",
    questionVi: "an expanded section for books on ______",
    modelParaphraseEn: "we've got a much larger section of the library devoted to travel books now",
    modelParaphraseVi: "we've got a much larger section of the library devoted to travel books now",
    acceptedAnswers: ["travel", "travelling", "traveling"],
    explanationEn: "A much larger section is devoted to travel books — not a new building or magazines.",
    explanationVi: "Phần sách lớn hơn dành cho travel books — không phải toà nhà mới hay magazines.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "a new section on local ______",
    questionVi: "a new section on local ______",
    modelParaphraseEn: "we've now got a new section with materials on the history of the town and surrounding region",
    modelParaphraseVi: "we've now got a new section with materials on the history of the town and surrounding region",
    acceptedAnswers: ["history"],
    explanationEn: "The new section is local history of the town and surrounding region.",
    explanationVi: "Khu mới là local history của thị trấn và vùng xung quanh.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "a community room for meetings (also possible to ______ there)",
    questionVi: "a community room for meetings (also possible to ______ there)",
    modelParaphraseEn: "It can be hired out for meetings, but at other times people can use it to study",
    modelParaphraseVi: "It can be hired out for meetings, but at other times people can use it to study",
    acceptedAnswers: ["study"],
    explanationEn: "Meetings are already on the notes; the extra use is to study.",
    explanationVi: "Meetings đã có trên đề; công dụng thêm là study.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "a new section of books for ______",
    questionVi: "a new section of books for ______",
    modelParaphraseEn: "we've introduced a special section of fiction written specially for teenagers",
    modelParaphraseVi: "we've introduced a special section of fiction written specially for teenagers",
    acceptedAnswers: ["teenagers"],
    explanationEn: "Special fiction for teenagers — Paul's children would be a bit young for it.",
    explanationVi: "Fiction dành riêng cho teenagers — con Paul còn hơi nhỏ.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "the next Science Club meeting: experiments using things from your ______",
    questionVi: "the next Science Club meeting: experiments using things from your ______",
    modelParaphraseEn: "they're going to be doing experiments with stuff that everyone has in the kitchen - sugar and flour and so on",
    modelParaphraseVi: "they're going to be doing experiments with stuff that everyone has in the kitchen - sugar and flour and so on",
    acceptedAnswers: ["kitchen"],
    explanationEn: "Experiments use everyday kitchen stuff such as sugar and flour.",
    explanationVi: "Thí nghiệm dùng đồ trong kitchen như sugar and flour.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "this Friday: a local author talks about a novel based on a real ______",
    questionVi: "this Friday: a local author talks about a novel based on a real ______",
    modelParaphraseEn: "she based the story on a crime that actually took place here years ago",
    modelParaphraseVi: "she based the story on a crime that actually took place here years ago",
    acceptedAnswers: ["crime"],
    explanationEn: "Catch the Mouse is based on a real crime that happened locally.",
    explanationVi: "Catch the Mouse dựa trên một crime có thật ở địa phương.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "IT support is available on Tuesday – no ______ is necessary",
    questionVi: "IT support is available on Tuesday – no ______ is necessary",
    modelParaphraseEn: "they don't need to make an appointment or anything, they just turn up",
    modelParaphraseVi: "they don't need to make an appointment or anything, they just turn up",
    acceptedAnswers: ["appointment", "booking"],
    explanationEn: "Tuesday mornings; no appointment or booking — people just turn up.",
    explanationVi: "Sáng Tuesday; không cần appointment/booking — cứ đến.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "free check of blood ______ and cholesterol levels (over 60s only)",
    questionVi: "free check of blood ______ and cholesterol levels (over 60s only)",
    modelParaphraseEn: "measure the level of sugar in your blood, and they check cholesterol levels at the same time",
    modelParaphraseVi: "measure the level of sugar in your blood, and they check cholesterol levels at the same time",
    acceptedAnswers: ["sugar"],
    explanationEn: "They measure blood sugar and cholesterol. Over-60s only.",
    explanationVi: "Đo blood sugar và cholesterol. Chỉ over-60s.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "the library shop sells wall-charts, cards and ______",
    questionVi: "the library shop sells wall-charts, cards and ______",
    modelParaphraseEn: "wallcharts and greetings cards, and also stamps so you can post the cards straightaway",
    modelParaphraseVi: "wallcharts and greetings cards, and also stamps so you can post the cards straightaway",
    acceptedAnswers: ["stamps"],
    explanationEn: "The shop also sells stamps so cards can be posted at once.",
    explanationVi: "Cửa hàng còn bán stamps để gửi thiệp ngay.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "evenings and weekends: free ______ is available",
    questionVi: "evenings and weekends: free ______ is available",
    modelParaphraseEn: "is there parking available? Yes, and it's free in the evening and at weekends",
    modelParaphraseVi: "is there parking available? Yes, and it's free in the evening and at weekends",
    acceptedAnswers: ["parking"],
    explanationEn: "Parking is free in the evening and at weekends.",
    explanationVi: "Parking miễn phí buổi tối và cuối tuần.",
  },
];
