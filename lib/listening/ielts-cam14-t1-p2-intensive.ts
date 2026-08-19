import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["We're very happy to welcome you to your new apprenticeship", "We are very happy to welcome you to your new apprenticeship"] },
    { id: "g2", answers: ["I hope that the next six months will be a positive and enjoyable experience for you"] },
    { id: "g3", answers: ["I'd like to start with some general advice", "I would like to start with some general advice"] },
    { id: "g4", answers: ["the first week or so may be quite challenging"] },
    {
      id: "g5",
      answers: [
        "don't worry too much about trying to remember everything",
        "do not worry too much about trying to remember everything",
      ],
    },
    {
      id: "g6",
      answers: [
        "you'll find your supervisor is very approachable",
        "you will find your supervisor is very approachable",
      ],
    },
    {
      id: "g7",
      answers: [
        "You're here to learn so make the most of that opportunity",
        "You are here to learn so make the most of that opportunity",
      ],
    },
    { id: "g8", answers: ["you'll each be assigned a mentor", "you will each be assigned a mentor"] },
    { id: "g9", answers: ["you'll meet with them on a weekly basis", "you will meet with them on a weekly basis"] },
    { id: "g10", answers: ["Their role is to provide help and support throughout your apprenticeship"] },
    {
      id: "g11",
      answers: [
        "this doesn't mean they'll actually do any of your work for you",
        "this does not mean they will actually do any of your work for you",
      ],
    },
    { id: "g12", answers: ["Now I just want to run through a few company policies"] },
    { id: "g13", answers: ["you'll have unlimited access for that", "you will have unlimited access for that"] },
    { id: "g14", answers: ["some of you will be eligible for this"] },
    {
      id: "g15",
      answers: [
        "please don't assume you'll automatically be permitted to do this",
        "please do not assume you will automatically be permitted to do this",
      ],
    },
    { id: "g16", answers: ["Time off should only be taken if you are unwell"] },
    { id: "g17", answers: ["we understand that people do have commitments outside work"] },
    { id: "g18", answers: ["This is partly to encourage healthy eating at work"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Good morning everyone." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My name's Janet Parker and I'm the human resources manager.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        { type: "text", text: " about being an apprentice." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Most of you have very little or no experience of working for a big organisation and ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There will be a lot of new information to take in but " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The important thing is to check with someone if you're not sure what to do – ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " and won't mind explaining things or helping you out." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll be spending time in different departments during your first week so make an effort to talk to as many people as possible about their work – you'll make some new friends and find out lots of useful information.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As well as having a supervisor, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This person will be someone who's recently completed an apprenticeship and ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Of course, " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " – instead they'll be asking you about what goals you've achieved so far, as well as helping you to identify any areas for improvement.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You can also discuss your more long-term ambitions with them as well.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " for our apprenticeship scheme with you." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Most importantly, the internet." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As part of your job you'll be doing some research online so obviously ",
        },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " but please don't use it for personal use – you'll have your own phones for that.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Some of you have already asked me about flexible working." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "After your probationary three-month period – " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " – but it will depend on which department you're in and what your personal circumstances are.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I want to make sure there's no confusion about our holiday policy.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Apart from any statutory public holidays we ask that you don't book any holidays until after your six-month apprenticeship has finished.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Please speak to your supervisor if this is going to be a problem." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll be expected to work a 40-hour week but there may be opportunities to do overtime during busy periods.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Although you're not required to do this, it can be a valuable experience – so we advise you to take it up if possible.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Obviously, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", so don't worry if there are times when you are unavailable." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As you know, we don't have a formal dress code here – you may wear casual clothes as long as they're practical – and the only restriction for shoes we have is on high heels for health and safety reasons.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Comfortable shoes like trainers are preferable." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a heavily subsidised canteen on site where you can get hot meals or salads cheaply.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Snacks and drinks are also provided – so we've decided to introduce a no packed lunch policy.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and partly to stop people from eating at their workstation, which is unhygienic.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "OK moving on to …" }] },
  ],
};

export const CAM14_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "Which TWO pieces of advice for the first week does the manager give? A get to know colleagues / B learn from any mistakes / C ask lots of questions / D react positively to feedback / E enjoy new challenges",
    questionVi:
      "Which TWO pieces of advice for the first week does the manager give? A get to know colleagues / B learn from any mistakes / C ask lots of questions / D react positively to feedback / E enjoy new challenges",
    modelParaphraseEn:
      "check with someone if you're not sure what to do … make an effort to talk to as many people as possible about their work",
    modelParaphraseVi:
      "check with someone if you're not sure what to do … make an effort to talk to as many people as possible about their work",
    acceptedAnswers: ["A", "C", "get to know colleagues", "ask lots of questions"],
    explanationEn:
      "A + C. Ask if unsure (supervisor is approachable); talk to as many people as possible in different departments. Not B/D/E.",
    explanationVi:
      "A + C. Hỏi nếu không chắc; nói chuyện với càng nhiều người càng tốt. Không phải B/D/E.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Advice (second of TWO): get to know colleagues / ask lots of questions",
    questionVi: "Advice (second of TWO): get to know colleagues / ask lots of questions",
    modelParaphraseEn: "talk to as many people as possible about their work – you'll make some new friends",
    modelParaphraseVi: "talk to as many people as possible about their work – you'll make some new friends",
    acceptedAnswers: ["A", "get to know colleagues"],
    explanationEn: "Talking to people in different departments = get to know colleagues (A). Pair with C for Q11.",
    explanationVi: "Nói chuyện với người ở các phòng = get to know colleagues (A). Đi cùng C ở câu 11.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "Which TWO things can mentors help with? A confidence-building / B making career plans / C completing difficult tasks / D making a weekly timetable / E reviewing progress",
    questionVi:
      "Which TWO things can mentors help with? A confidence-building / B making career plans / C completing difficult tasks / D making a weekly timetable / E reviewing progress",
    modelParaphraseEn:
      "asking you about what goals you've achieved so far, as well as helping you to identify any areas for improvement",
    modelParaphraseVi:
      "asking you about what goals you've achieved so far, as well as helping you to identify any areas for improvement",
    acceptedAnswers: ["E", "reviewing progress"],
    explanationEn: "E = reviewing progress (goals achieved so far / areas for improvement). Mentors will not do the work (not C).",
    explanationVi: "E = reviewing progress (mục tiêu đã đạt / chỗ cần cải thiện). Mentor không làm hộ việc (không phải C).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Mentors (second of TWO): making career plans / reviewing progress",
    questionVi: "Mentors (second of TWO): making career plans / reviewing progress",
    modelParaphraseEn: "You can also discuss your more long-term ambitions with them as well",
    modelParaphraseVi: "You can also discuss your more long-term ambitions with them as well",
    acceptedAnswers: ["B", "making career plans"],
    explanationEn: "B = making career plans (long-term ambitions). Pair with E for Q13.",
    explanationVi: "B = making career plans (long-term ambitions). Đi cùng E ở câu 13.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Using the internet: A encouraged / B some restrictions / C against the rules",
    questionVi: "Using the internet: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn: "unlimited access for that but please don't use it for personal use – you'll have your own phones for that",
    modelParaphraseVi: "unlimited access for that but please don't use it for personal use – you'll have your own phones for that",
    acceptedAnswers: ["B", "There are some restrictions."],
    explanationEn: "B = restrictions: research is allowed; personal use is not.",
    explanationVi: "B = hạn chế: dùng cho research được; personal use thì không.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Flexible working: A encouraged / B some restrictions / C against the rules",
    questionVi: "Flexible working: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn:
      "some of you will be eligible … but it will depend on which department you're in and what your personal circumstances are",
    modelParaphraseVi:
      "some of you will be eligible … but it will depend on which department you're in and what your personal circumstances are",
    acceptedAnswers: ["B", "There are some restrictions."],
    explanationEn: "B = restrictions: possible after three months, but only depending on department and circumstances.",
    explanationVi: "B = hạn chế: có thể sau 3 tháng, nhưng tùy phòng ban và hoàn cảnh.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Booking holidays: A encouraged / B some restrictions / C against the rules",
    questionVi: "Booking holidays: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn: "we ask that you don't book any holidays until after your six-month apprenticeship has finished",
    modelParaphraseVi: "we ask that you don't book any holidays until after your six-month apprenticeship has finished",
    acceptedAnswers: ["C", "It is against the rules."],
    explanationEn: "C = against the rules until the six-month apprenticeship finishes (except public holidays / illness).",
    explanationVi: "C = cấm đặt holiday trước khi hết 6 tháng (trừ lễ / ốm).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Working overtime: A encouraged / B some restrictions / C against the rules",
    questionVi: "Working overtime: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn: "it can be a valuable experience – so we advise you to take it up if possible",
    modelParaphraseVi: "it can be a valuable experience – so we advise you to take it up if possible",
    acceptedAnswers: ["A", "It is encouraged."],
    explanationEn: "A = encouraged (not required, but they advise taking overtime if possible).",
    explanationVi: "A = khuyến khích (không bắt buộc, nhưng khuyên nhận overtime nếu được).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Wearing trainers: A encouraged / B some restrictions / C against the rules",
    questionVi: "Wearing trainers: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn: "the only restriction for shoes … is on high heels … Comfortable shoes like trainers are preferable",
    modelParaphraseVi: "the only restriction for shoes … is on high heels … Comfortable shoes like trainers are preferable",
    acceptedAnswers: ["A", "It is encouraged."],
    explanationEn: "A = trainers are preferable. High heels are the restriction, not trainers.",
    explanationVi: "A = trainers được khuyến khích. Hạn chế là high heels, không phải trainers.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Bringing food to work: A encouraged / B some restrictions / C against the rules",
    questionVi: "Bringing food to work: A encouraged / B some restrictions / C against the rules",
    modelParaphraseEn: "we've decided to introduce a no packed lunch policy",
    modelParaphraseVi: "we've decided to introduce a no packed lunch policy",
    acceptedAnswers: ["C", "It is against the rules."],
    explanationEn: "C = no packed lunch policy (canteen / snacks provided; eating at the desk is unhygienic).",
    explanationVi: "C = cấm packed lunch (đã có canteen / snacks; ăn tại bàn là unhygienic).",
  },
];
