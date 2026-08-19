import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["This is Greg Preston"] },
    { id: "g2", answers: ["which might interest you"] },
    { id: "g3", answers: ["I believe you've done that sort of work before", "I believe you have done that sort of work before"] },
    { id: "g4", answers: ["so not too far away for you"] },
    { id: "g5", answers: ["So where exactly is that"] },
    { id: "g6", answers: ["It's quite near the station"] },
    { id: "g7", answers: ["So what would the work involve"] },
    { id: "g8", answers: ["that shouldn't be a problem", "that should not be a problem"] },
    { id: "g9", answers: ["I immediately thought of you"] },
    { id: "g10", answers: ["Is there anything else they're looking for", "Is there anything else they are looking for"] },
    { id: "g11", answers: ["they're always very busy", "they are always very busy"] },
    { id: "g12", answers: ["I reckon I can cope with that"] },
    { id: "g13", answers: ["So you'd be interested in following this up", "So you would be interested in following this up"] },
    { id: "g14", answers: ["I should tell you that"] },
    { id: "g15", answers: ["could you manage that"] },
    { id: "g16", answers: ["That should work out all right"] },
    { id: "g17", answers: ["it's good to know that", "it is good to know that"] },
    { id: "g18", answers: ["where do I go from here"] },
  ],
  lines: [
    { speaker: "JULIE", segments: [{ type: "text", text: "Hello?" }] },
    {
      speaker: "GREG",
      segments: [{ type: "text", text: "Oh, hello. Is that Julie Davison?" }],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "GREG",
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " from the Employment Agency. We met last week when you came in to enquire about office work.",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Oh, that's right." }] },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Now we've just had some details come in of a job " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "So this is a position for a receptionist – " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yes, I have, I worked in a sports centre for a couple of years before I got married and had the children.",
        },
      ],
    },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Right. Well, this job's in Fordham, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", and it's at the medical centre there." },
      ],
    },
    {
      speaker: "JULIE",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "?" }],
    },
    {
      speaker: "GREG",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", on Chastons Road." },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Sorry?" }] },
    {
      speaker: "GREG",
      segments: [{ type: "text", text: "Chastons Road – that's C-H-A-S-T-O-N-S." }],
    },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "OK, thanks. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "? Dealing with enquiries from patients?" },
      ],
    },
    {
      speaker: "GREG",
      segments: [
        {
          type: "text",
          text: "Yes, and you'd also be involved in making appointments, whether face to face or on the phone. And rescheduling them if necessary.",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "Fine, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "GREG",
      segments: [
        {
          type: "text",
          text: "And another of your duties would be keeping the centre's database up-to-date. Then you might have other general administrative duties as well, but those would be the main ones.",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Now when the details came in, " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " because one thing they do require is someone with experience, and you did mention your work at the sports centre when you came in to see us.",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "Yes, in fact I enjoyed that job. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Well, they say it's quite a high-pressure environment, " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", and patients are often under stress, so they want someone who can cope with that and stay calm, and at the same time be confident when interacting with the public.",
        },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "Well, after dealing with three children all under five, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "GREG", segments: [{ type: "text", text: "I'm sure you can." }] },
    {
      speaker: "GREG",
      segments: [
        {
          type: "text",
          text: "And then another thing they mention is that they're looking for someone with good IT skills …",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Not a problem." }] },
    {
      speaker: "GREG",
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "?" }],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Sure. When would it start?" }] },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Well, they're looking for someone from the beginning of next month, but " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " this isn't a permanent job, it's temporary, so the contract would be just to the end of September. But they do say that there could be further opportunities after that.",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "OK. And what would the hours be?" }] },
    {
      speaker: "GREG",
      segments: [
        { type: "text", text: "Well, they want someone who can start at a quarter to eight in the morning – " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JULIE",
      segments: [
        {
          type: "text",
          text: "Yes, my husband would have to get the kids up and off to my mother's – she's going to be looking after them while I'm at work. What time would I finish?",
        },
      ],
    },
    { speaker: "GREG", segments: [{ type: "text", text: "One fifteen." }] },
    {
      speaker: "JULIE",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". I can pick the kids up on my way home, and then I'll have the afternoon with them. Oh, one thing … is there parking available for staff at the centre?",
        },
      ],
    },
    {
      speaker: "GREG",
      segments: [{ type: "text", text: "Yes, there is, and it's also on a bus route." }],
    },
    {
      speaker: "JULIE",
      segments: [
        { type: "text", text: "Right. Well, I expect I'll have the car but " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". OK, so " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "GREG",
      segments: [
        {
          type: "text",
          text: "Well, if you're happy for me to do so, I'll forward your CV and references, and then the best thing would probably be for you to phone them so they can arrange for an interview.",
        },
      ],
    },
    { speaker: "JULIE", segments: [{ type: "text", text: "Great. Well thank you very much." }] },
    { speaker: "GREG", segments: [{ type: "text", text: "You're welcome. Bye now." }] },
    { speaker: "JULIE", segments: [{ type: "text", text: "Bye." }] },
  ],
};

export const CAM18_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Role ______",
    questionVi: "Role ______",
    modelParaphraseEn: "this is a position for a receptionist",
    modelParaphraseVi: "this is a position for a receptionist",
    acceptedAnswers: ["receptionist"],
    explanationEn: "The role is receptionist — she has done that sort of work before.",
    explanationVi: "Vị trí là receptionist — cô ấy đã làm loại việc này.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Location: Fordham ______ Centre",
    questionVi: "Location: Fordham ______ Centre",
    modelParaphraseEn: "it's at the medical centre there",
    modelParaphraseVi: "it's at the medical centre there",
    acceptedAnswers: ["Medical", "medical"],
    explanationEn: "Fordham Medical Centre.",
    explanationVi: "Fordham Medical Centre.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "______ Road, Fordham",
    questionVi: "______ Road, Fordham",
    modelParaphraseEn: "on Chastons Road – C-H-A-S-T-O-N-S",
    modelParaphraseVi: "on Chastons Road – C-H-A-S-T-O-N-S",
    acceptedAnswers: ["Chastons"],
    explanationEn: "The street is spelled: Chastons.",
    explanationVi: "Tên đường được đánh vần: Chastons.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "making ______ and reorganising them",
    questionVi: "making ______ and reorganising them",
    modelParaphraseEn: "making appointments, whether face to face or on the phone. And rescheduling them if necessary",
    modelParaphraseVi: "making appointments, whether face to face or on the phone. And rescheduling them if necessary",
    acceptedAnswers: ["appointments"],
    explanationEn: "Making and rescheduling appointments.",
    explanationVi: "Đặt và sắp xếp lại appointments.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "maintaining the internal ______",
    questionVi: "maintaining the internal ______",
    modelParaphraseEn: "keeping the centre's database up-to-date",
    modelParaphraseVi: "keeping the centre's database up-to-date",
    acceptedAnswers: ["database"],
    explanationEn: "Keeping the internal database up to date.",
    explanationVi: "Cập nhật database nội bộ.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "______ (essential)",
    questionVi: "______ (essential)",
    modelParaphraseEn: "one thing they do require is someone with experience",
    modelParaphraseVi: "one thing they do require is someone with experience",
    acceptedAnswers: ["experience"],
    explanationEn: "Experience is essential — her sports-centre work counts.",
    explanationVi: "Experience là bắt buộc — việc ở sports centre được tính.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "a calm and ______ manner",
    questionVi: "a calm and ______ manner",
    modelParaphraseEn: "stay calm, and at the same time be confident when interacting with the public",
    modelParaphraseVi: "stay calm, and at the same time be confident when interacting with the public",
    acceptedAnswers: ["confident"],
    explanationEn: "Calm is already on the notes; the other quality is confident.",
    explanationVi: "Calm đã có trên đề; phẩm chất kia là confident.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "a ______ job – further opportunities may be available",
    questionVi: "a ______ job – further opportunities may be available",
    modelParaphraseEn: "this isn't a permanent job, it's temporary – contract to the end of September",
    modelParaphraseVi: "this isn't a permanent job, it's temporary – contract to the end of September",
    acceptedAnswers: ["temporary"],
    explanationEn: "Temporary until end of September; further opportunities possible after that.",
    explanationVi: "Temporary đến hết tháng 9; sau đó có thể có cơ hội tiếp.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "hours: 7.45 a.m. to ______ p.m.",
    questionVi: "hours: 7.45 a.m. to ______ p.m.",
    modelParaphraseEn: "start at a quarter to eight … finish at One fifteen",
    modelParaphraseVi: "start at a quarter to eight … finish at One fifteen",
    acceptedAnswers: ["1.15", "1:15", "One fifteen"],
    explanationEn: "Finish time is 1.15 / One fifteen.",
    explanationVi: "Giờ tan là 1.15 / One fifteen.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "______ is available onsite",
    questionVi: "______ is available onsite",
    modelParaphraseEn: "is there parking available for staff at the centre? Yes, there is",
    modelParaphraseVi: "is there parking available for staff at the centre? Yes, there is",
    acceptedAnswers: ["parking"],
    explanationEn: "Staff parking is available onsite (also on a bus route).",
    explanationVi: "Có parking cho nhân viên tại chỗ (cũng có xe buýt).",
  },
];
