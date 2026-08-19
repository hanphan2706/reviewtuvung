import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Thanks for coming in to see us here at the agency"] },
    {
      id: "g2",
      answers: ["I think we spoke on the phone, didn't we", "I think we spoke on the phone, did not we"],
    },
    { id: "g3", answers: ["we have two jobs that might be suitable for you"] },
    {
      id: "g4",
      answers: [
        "They're looking for an administrative assistant",
        "They are looking for an administrative assistant",
      ],
    },
    { id: "g5", answers: ["it does look as if you fit quite a few of the requirements"] },
    {
      id: "g6",
      answers: ["I'd suggest you add it to your CV", "I would suggest you add it to your CV"],
    },
    { id: "g7", answers: ["they particularly mention spreadsheets"] },
    {
      id: "g8",
      answers: [
        "which would be something they'd check with your references",
        "which would be something they would check with your references",
      ],
    },
    { id: "g9", answers: ["it would be quite a long commute for me"] },
    { id: "g10", answers: ["the second position might suit you better as far as the location goes"] },
    {
      id: "g11",
      answers: ["You've got to keep track of stuff", "You have got to keep track of stuff"],
    },
    {
      id: "g12",
      answers: [
        "they want someone who's computer literate",
        "they want someone who is computer literate",
      ],
    },
    { id: "g13", answers: ["they want someone who can communicate well both orally and in writing"] },
    { id: "g14", answers: ["one of the things I enjoyed most"] },
    { id: "g15", answers: ["I found that was really essential for the job"] },
    { id: "g16", answers: ["what sorts of items were you dealing with"] },
    { id: "g17", answers: ["so you can cope with the traffic and so on"] },
    { id: "g18", answers: ["Can you tell me a bit more about that, please"] },
  ],
  lines: [
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Good morning. " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", Joe. I'm one of the agency representatives, and my name's Sally Baker.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [{ type: "text", text: "Hi Sally. " }, { type: "gap", gapId: "g2" }, { type: "text", text: "?" }],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "That's right, we did. So thank you for sending in your CV. We've had quite a careful look at it and I think " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "The first one is in a company based in North London. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "OK. What sort of company is it?" }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "They're called Home Solutions and they design and make furniture.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [{ type: "text", text: "Oh, I don't know much about that, but it sounds interesting." }],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Yes, well as I said, they want someone in their office, and looking at your past experience " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". So on your CV it appears you've done some data entry?" },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "So that's one skill they want. Then they expect the person they appoint to attend meetings and take notes there …",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "OK. I've done that before, yes." }] },
    {
      speaker: "SALLY",
      segments: [{ type: "text", text: "And you'd need to be able to cope with general admin." }],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "Filing, and keeping records and so on? That should be OK. And in my last job I also had to manage the diary.",
        },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Excellent. That's something they want here too. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " – I don't think you mentioned that, did you?" },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "No." }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "So as far as the requirements go, they want good computer skills, of course, and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "That should be fine." }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "And interpersonal skills – " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "I think that should be OK, yes." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Then they mention that they want someone who is careful and takes care with details – just looking at your CV, I'd say you're probably alright there.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [{ type: "text", text: "I think so, yes. Do they want any special experience?" }],
    },
    {
      speaker: "SALLY",
      segments: [{ type: "text", text: "I think they wanted some experience of teleconferencing." }],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "I've got three years' experience of that." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Let's see, yes, good. In fact they're only asking for at least one year, so that's great. So is that something that might interest you?",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "It is, yes. The only thing is, you said they were in North London so " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SALLY", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "So " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "; that's for a warehouse assistant and that's in South London." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes, that would be a lot closer." }] },
    {
      speaker: "SALLY",
      segments: [{ type: "text", text: "And you've worked in a warehouse before, haven't you?" }],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "So as far as the responsibilities for this position go, they want someone who can manage the stock, obviously, and also deliveries.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "That should be OK. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", but I've always been quite good with numbers." },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Good, that's their first requirement. And " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", which we know you are." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Then they mention organisational skills. They want someone who's well organised.",
        },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes, I think I am." }] },
    { speaker: "SALLY", segments: [{ type: "text", text: "And tidy?" }] },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes, they go together really, don't they?" }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Sure. Then the usual stuff; " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "OK. And for the last warehouse job I had, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " was being part of a team. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Excellent. Yes, they do mention that they want someone who's used to that, yes. Now when you were working in a warehouse last time, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        {
          type: "text",
          text: "It was mostly bathroom and kitchen equipment, sinks and stoves and fridges.",
        },
      ],
    },
    { speaker: "SALLY", segments: [{ type: "text", text: "So you're OK moving heavy things?" }] },
    { speaker: "JOE", segments: [{ type: "text", text: "Sure. I'm quite strong, and I've had the training." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Good. Now as far as experience goes, they mention they want someone with a licence, and that you have experience of driving in London – " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JOE", segments: [{ type: "text", text: "Yes, no problem." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "And you've got experience of warehouse work … and the final thing they mention is customer service. I think looking at your CV you're OK there.",
        },
      ],
    },
    {
      speaker: "JOE",
      segments: [
        { type: "text", text: "Right. So what about pay? " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " …" },
      ],
    },
  ],
};

export const CAM15_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Administrative assistant in a company that produces ______ (North London)",
    questionVi: "Administrative assistant in a company that produces ______ (North London)",
    modelParaphraseEn: "They're called Home Solutions and they design and make furniture",
    modelParaphraseVi: "They're called Home Solutions and they design and make furniture",
    acceptedAnswers: ["furniture"],
    explanationEn: "Home Solutions designs and makes furniture — that is what the company produces.",
    explanationVi: "Home Solutions thiết kế và làm furniture — đó là sản phẩm của công ty.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "go to ______ and take notes",
    questionVi: "go to ______ and take notes",
    modelParaphraseEn: "they expect the person they appoint to attend meetings and take notes there",
    modelParaphraseVi: "they expect the person they appoint to attend meetings and take notes there",
    acceptedAnswers: ["meetings", "meeting"],
    explanationEn: "Attend meetings = go to meetings and take notes.",
    explanationVi: "Attend meetings = go to meetings và ghi chép.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "management of ______",
    questionVi: "management of ______",
    modelParaphraseEn: "in my last job I also had to manage the diary",
    modelParaphraseVi: "in my last job I also had to manage the diary",
    acceptedAnswers: ["diary"],
    explanationEn: "Joe already managed the diary; Sally asks him to add it to his CV.",
    explanationVi: "Joe đã manage the diary; Sally bảo thêm vào CV.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "attention to ______",
    questionVi: "attention to ______",
    modelParaphraseEn: "they want someone who is careful and takes care with details",
    modelParaphraseVi: "they want someone who is careful and takes care with details",
    acceptedAnswers: ["detail", "details"],
    explanationEn: "Takes care with details = attention to detail(s).",
    explanationVi: "Takes care with details = attention to detail(s).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "need a minimum of ______ of experience of teleconferencing",
    questionVi: "need a minimum of ______ of experience of teleconferencing",
    modelParaphraseEn: "they're only asking for at least one year",
    modelParaphraseVi: "they're only asking for at least one year",
    acceptedAnswers: ["1 year", "one year", "1", "one"],
    explanationEn: "Joe has three years; the employer only requires at least one year.",
    explanationVi: "Joe có 3 năm; nhà tuyển dụng chỉ cần at least one year.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "managing ______",
    questionVi: "managing ______",
    modelParaphraseEn: "they want someone who can manage the stock, obviously, and also deliveries",
    modelParaphraseVi: "they want someone who can manage the stock, obviously, and also deliveries",
    acceptedAnswers: ["deliveries", "delivery"],
    explanationEn: "Besides stock, the warehouse role includes managing deliveries.",
    explanationVi: "Ngoài stock, việc kho còn gồm managing deliveries.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "very organised and ______",
    questionVi: "very organised and ______",
    modelParaphraseEn: "They want someone who's well organised. And tidy?",
    modelParaphraseVi: "They want someone who's well organised. And tidy?",
    acceptedAnswers: ["tidy"],
    explanationEn: "Organised is already on the notes; the matching quality is tidy.",
    explanationVi: "Organised đã có trên đề; phẩm chất đi kèm là tidy.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "used to working in a ______",
    questionVi: "used to working in a ______",
    modelParaphraseEn: "one of the things I enjoyed most was being part of a team",
    modelParaphraseVi: "one of the things I enjoyed most was being part of a team",
    acceptedAnswers: ["team"],
    explanationEn: "Joe enjoyed being part of a team; they want someone used to that.",
    explanationVi: "Joe thích being part of a team; họ muốn người đã quen làm việc đó.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "able to cope with items that are ______",
    questionVi: "able to cope with items that are ______",
    modelParaphraseEn: "So you're OK moving heavy things?",
    modelParaphraseVi: "So you're OK moving heavy things?",
    acceptedAnswers: ["heavy"],
    explanationEn: "Bathroom and kitchen equipment means he must move heavy items.",
    explanationVi: "Thiết bị phòng tắm/bếp nghĩa là phải chuyển đồ heavy.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "______ service",
    questionVi: "______ service",
    modelParaphraseEn: "the final thing they mention is customer service",
    modelParaphraseVi: "the final thing they mention is customer service",
    acceptedAnswers: ["customer"],
    explanationEn: "The last experience they want is customer service.",
    explanationVi: "Kinh nghiệm cuối họ nêu là customer service.",
  },
];
