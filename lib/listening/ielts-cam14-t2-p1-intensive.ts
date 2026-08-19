import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["come and take a seat"] },
    {
      id: "g2",
      answers: [
        "I hope you'll be very happy with the service you receive here",
        "I hope you will be very happy with the service you receive here",
      ],
    },
    {
      id: "g3",
      answers: [
        "I'll take a few details to help me give you the best possible service",
        "I will take a few details to help me give you the best possible service",
      ],
    },
    {
      id: "g4",
      answers: ["can I check first of all that we have the correct personal details for you"],
    },
    {
      id: "g5",
      answers: ["I'll just correct that now", "I will just correct that now"],
    },
    {
      id: "g6",
      answers: ["do you have an occupation, either full-time or part-time"],
    },
    { id: "g7", answers: ["I started off as a waitress there a few years ago"] },
    { id: "g8", answers: ["I just love their salads"] },
    { id: "g9", answers: ["That's good to hear", "That is good to hear"] },
    {
      id: "g10",
      answers: [
        "before we talk about why you're here",
        "before we talk about why you are here",
      ],
    },
    {
      id: "g11",
      answers: [
        "That's certainly the right decision",
        "That is certainly the right decision",
      ],
    },
    { id: "g12", answers: ["It came on quite gradually though"] },
    {
      id: "g13",
      answers: ["I don't like to keep taking it", "I do not like to keep taking it"],
    },
    { id: "g14", answers: ["Have you tried applying heat at all"] },
    {
      id: "g15",
      answers: [
        "I'm quite competitive so I enjoy that side of it as well as the exercise",
        "I am quite competitive so I enjoy that side of it as well as the exercise",
      ],
    },
    { id: "g16", answers: ["So your legs are getting quite a pounding"] },
    {
      id: "g17",
      answers: ["none that I'm aware of", "none that I am aware of"],
    },
    {
      id: "g18",
      answers: [
        "let's have a closer look and see what might be causing this problem",
        "let us have a closer look and see what might be causing this problem",
      ],
    },
  ],
  lines: [
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "Hi, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "CARL",
      segments: [
        {
          type: "text",
          text: "My name's Carl Rogers and I'm one of the doctors here at the Total Health Clinic. So I understand this is your first visit to the clinic?",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Yes, it is." }] },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "OK, well " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". So if it's alright with you " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "So " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "? So your full name is Julie Anne Garcia?" },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "That's correct." }] },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "Perfect. And can I have a contact phone number?" }],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "It's 219 442 9785." }] },
    {
      speaker: "CARL",
      segments: [
        {
          type: "text",
          text: "OK, and then can I just check that we have the correct date of birth?",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "October tenth, 1992." }] },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "Oh, I actually have 1991, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". Right, so that's all good. Now I just need just a few more personal details … ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yes, I work full-time in Esterhazy's – you know, the restaurant chain. ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " and I'm a manager now." },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        {
          type: "text",
          text: "Oh I know them, yeah, they're down on 114th Street, aren't they?",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "Yeah, I've been there a few times. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JULIE",
      segments: [{ type: "gap", gapId: "g9" }, { type: "text", text: "." }],
    },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "Right, so one more thing I need to know " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", Julie, and that's the name of your insurance company.",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "It's Cawley Life Insurance, that's C-A-W-L-E-Y.",
        },
      ],
    },
    { speaker: "CARL", segments: [{ type: "text", text: "Excellent, thank you so much." }] },
    {
      speaker: "CARL",
      segments: [
        {
          type: "text",
          text: "Now Julie, let's look at how we can help you. So tell me a little about what brought you here today.",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Well, I've been getting a pain in my knee, the left one. Not very serious at first, but it's gotten worse, so I thought I ought to see someone about it.",
        },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". So how long have you been aware of this pain? Is it just a few days, or is it longer than that?",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Longer. It's been worse for the last couple of days, but it's three weeks since I first noticed it. ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", so I kind of ignored it at first." },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        {
          type: "text",
          text: "And have you taken any medication yourself, or treated it in anyway?",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yeah, I've been taking medication to deal with the pain. Tylenol, and that works OK for a few hours. But ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "OK. And what about heat treatment? " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "No, but I have been using ice on it for the last few days.",
        },
      ],
    },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "And does that seem to help the pain at all?" }],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "A little, yes." }] },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "Good. Now you look as if you're quite fit normally?" }],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "I am, yes." }] },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "So do you do any sport on a regular basis?" }],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yes, I play a lot of tennis. I belong to a club so I go there a lot. ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". But I haven't gone since this started." },
      ],
    },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "Sure. And do you do any other types of exercise?" }],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yeah, I sometimes do a little swimming, but usually just when I'm on vacation. But normally I go running a few times a week, maybe three or four times.",
        },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "Hmm. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". But you haven't had any problems up to now?" },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "No, not with my legs. I did have an accident last year when I slipped and hurt my shoulder, but that's better now.",
        },
      ],
    },
    { speaker: "CARL", segments: [{ type: "text", text: "Excellent. And do you have any allergies?" }] },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CARL",
      segments: [{ type: "text", text: "And do you take any medication on a regular basis?" }],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Well, I take vitamins but that's all. I'm generally very healthy.",
        },
      ],
    },
    {
      speaker: "CARL",
      segments: [
        { type: "text", text: "OK, well " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". If you can just get up …" },
      ],
    },
  ],
};

export const CAM14_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Contact phone ______",
    questionVi: "Contact phone ______",
    modelParaphraseEn: "can I have a contact phone number? It's 219 442 9785",
    modelParaphraseVi: "can I have a contact phone number? It's 219 442 9785",
    acceptedAnswers: ["219 442 9785", "2194429785"],
    explanationEn: "Julie gives 219 442 9785 as the contact number.",
    explanationVi: "Julie đưa số liên lạc 219 442 9785.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Date of birth ______, 1992",
    questionVi: "Date of birth ______, 1992",
    modelParaphraseEn: "October tenth, 1992 – he had 1991 and corrects it",
    modelParaphraseVi: "October tenth, 1992 – he had 1991 and corrects it",
    acceptedAnswers: ["10(th) October", "10th October", "10 October", "October tenth", "October 10", "October 10th"],
    explanationEn: "Official key: 10(th) October. She says October tenth, 1992 (not 1991).",
    explanationVi: "Đáp án chính thức: 10(th) October. Cô nói October tenth, 1992 (không phải 1991).",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Occupation: works as a ______",
    questionVi: "Occupation: works as a ______",
    modelParaphraseEn: "I started off as a waitress … and I'm a manager now",
    modelParaphraseVi: "I started off as a waitress … and I'm a manager now",
    acceptedAnswers: ["manager"],
    explanationEn: "She is a manager now at Esterhazy's (used to be a waitress).",
    explanationVi: "Hiện là manager tại Esterhazy's (trước là waitress).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Insurance company ______ Life Insurance",
    questionVi: "Insurance company ______ Life Insurance",
    modelParaphraseEn: "It's Cawley Life Insurance, that's C-A-W-L-E-Y",
    modelParaphraseVi: "It's Cawley Life Insurance, that's C-A-W-L-E-Y",
    acceptedAnswers: ["Cawley"],
    explanationEn: "Spelled C-A-W-L-E-Y: Cawley. Notes already include Life Insurance.",
    explanationVi: "Đánh vần C-A-W-L-E-Y: Cawley. Đề đã có Life Insurance.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Type of problem: pain in her left ______",
    questionVi: "Type of problem: pain in her left ______",
    modelParaphraseEn: "I've been getting a pain in my knee, the left one",
    modelParaphraseVi: "I've been getting a pain in my knee, the left one",
    acceptedAnswers: ["knee"],
    explanationEn: "Pain in the left knee (got worse, so she came in).",
    explanationVi: "Đau left knee (nặng hơn nên mới đến khám).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "When it began: ______ ago",
    questionVi: "When it began: ______ ago",
    modelParaphraseEn: "it's three weeks since I first noticed it – worse for the last couple of days",
    modelParaphraseVi: "it's three weeks since I first noticed it – worse for the last couple of days",
    acceptedAnswers: ["3 weeks", "three weeks"],
    explanationEn: "Official key: 3 weeks. Worse for a couple of days, but first noticed three weeks ago.",
    explanationVi: "Đáp án: 3 weeks. Nặng vài ngày gần đây, nhưng phát hiện first three weeks ago.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Sports: belongs to a ______ club",
    questionVi: "Sports: belongs to a ______ club",
    modelParaphraseEn: "I play a lot of tennis. I belong to a club so I go there a lot",
    modelParaphraseVi: "I play a lot of tennis. I belong to a club so I go there a lot",
    acceptedAnswers: ["tennis"],
    explanationEn: "She belongs to a tennis club (hasn't gone since the pain started).",
    explanationVi: "Cô thuộc tennis club (chưa chơi kể từ khi đau).",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "goes ______ regularly",
    questionVi: "goes ______ regularly",
    modelParaphraseEn: "normally I go running a few times a week, maybe three or four times",
    modelParaphraseVi: "normally I go running a few times a week, maybe three or four times",
    acceptedAnswers: ["running"],
    explanationEn: "Running a few times a week. Swimming is only on vacation.",
    explanationVi: "Running vài lần một tuần. Swimming chỉ khi đi vacation.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Medical history: injured her ______ last year",
    questionVi: "Medical history: injured her ______ last year",
    modelParaphraseEn: "I did have an accident last year when I slipped and hurt my shoulder",
    modelParaphraseVi: "I did have an accident last year when I slipped and hurt my shoulder",
    acceptedAnswers: ["shoulder"],
    explanationEn: "Slipped and hurt her shoulder last year; that's better now. No problems with her legs before.",
    explanationVi: "Trượt ngã làm đau shoulder năm ngoái; đã khỏi. Chân trước đó không sao.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "no regular medication apart from ______",
    questionVi: "no regular medication apart from ______",
    modelParaphraseEn: "I take vitamins but that's all. I'm generally very healthy",
    modelParaphraseVi: "I take vitamins but that's all. I'm generally very healthy",
    acceptedAnswers: ["vitamins"],
    explanationEn: "Only regular medication is vitamins. No allergies.",
    explanationVi: "Thuốc đều đặn chỉ có vitamins. Không dị ứng.",
  },
];
