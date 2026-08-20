import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm looking for a cleaning service", "I am looking for a cleaning service"] },
    { id: "g2", answers: ["do you do domestic cleaning"] },
    { id: "g3", answers: ["looking at about two hours"] },
    { id: "g4", answers: ["a thorough clean of all surfaces"] },
    { id: "g5", answers: ["Does your apartment have carpets"] },
    { id: "g6", answers: ["we have some additional services"] },
    { id: "g7", answers: ["I hardly ever use that"] },
    { id: "g8", answers: ["like that done every week"] },
    { id: "g9", answers: ["there's no need for that", "there is no need for that"] },
    { id: "g10", answers: ["a bit less often"] },
    { id: "g11", answers: ["get a bit grubby"] },
    { id: "g12", answers: ["we could arrange for your curtains"] },
    { id: "g13", answers: ["it could do with a wash"] },
    { id: "g14", answers: ["get the pressure washer onto that"] },
    { id: "g15", answers: ["in touch with a reliable one"] },
    { id: "g16", answers: ["I'll bear it in mind", "I will bear it in mind"] },
    { id: "g17", answers: ["very carefully selected"] },
    { id: "g18", answers: ["organise it that way", "organize it that way"] },
  ],
  lines: [
    {
      speaker: "JACINTA",
      segments: [{ type: "text", text: "Hello, Easy Life Cleaning Services, Jacinta speaking." }],
    },
    {
      speaker: "CLIENT",
      segments: [
        { type: "text", text: "Oh hello. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for my apartment – " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "JACINTA", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "CLIENT",
      segments: [
        {
          type: "text",
          text: "Well, it's just a one-bedroom flat. Do you have a basic cleaning package?",
        },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Yes. For a one-bedroom flat we're probably " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " for a clean. So we'd do " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " in each room, and polish them where necessary. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [{ type: "text", text: "No, I don't have any, but the floor would need cleaning." }],
    },
    {
      speaker: "JACINTA",
      segments: [
        {
          type: "text",
          text: "Of course – we'd do that in every room. And we'd do a thorough clean of the kitchen and bathroom.",
        },
      ],
    },
    { speaker: "CLIENT", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Then " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " which you can request if you want – so for example, we can clean your oven for you every week.",
        },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        { type: "text", text: "Actually, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", but can you do the fridge?" },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Sure. Would you " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        {
          type: "text",
          text: "Yes, definitely. And would ironing clothes be an additional service you can do?",
        },
      ],
    },
    { speaker: "JACINTA", segments: [{ type: "text", text: "Yes, of course." }] },
    {
      speaker: "CLIENT",
      segments: [{ type: "text", text: "It wouldn't be much, just my shirts for work that week." }],
    },
    {
      speaker: "JACINTA",
      segments: [{ type: "text", text: "That's fine. And we could also clean your microwave if you want." }],
    },
    {
      speaker: "CLIENT",
      segments: [
        { type: "text", text: "No, I wipe that out pretty regularly so " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "We also offer additional services that you might want " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", say every month. So for example, if the inside of your windows need cleaning, we could do that.",
        },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        {
          type: "text",
          text: "Yes, that'd be good. I'm on the fifteenth floor, so the outside gets done regularly by specialists, but the inside does " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " to get cleaned if necessary." },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        {
          type: "text",
          text: "No, they're OK. But would you be able to do something about the balcony? It's quite small and I don't use it much, but " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " every month or so." },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Yes, we can " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        {
          type: "text",
          text: "Now if you're interested, we do offer some other possibilities to do with general maintenance. For example, if you have a problem with water and you need a plumber in a hurry, we can put you " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " who can come out straightaway. And the same thing if you need an electrician.",
        },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        {
          type: "text",
          text: "Right. That's good to know. I've only just moved here so I don't have any of those sorts of contacts.",
        },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        {
          type: "text",
          text: "And I don't know if this is of interest to you, but we also offer a special vacuum cleaning system which can improve the indoor air quality of your home by capturing up to 99% of all the dust in the air. So if you're troubled by allergies, this can make a big difference.",
        },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        { type: "text", text: "Right. In fact, I don't have that sort of problem, but " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". Now can you tell me a bit about your cleaning staff?" },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Of course. So all our cleaners are " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". When they apply to us, they have to undergo a security check with the police to make sure they don't have any sort of criminal background, and, of course, they have to provide references as well. Then if we think they might be suitable for the job, we give them training for it. That lasts for two weeks so it's very thorough, and at the end of it, they have a test. If they pass that, we take them on, but we monitor them very carefully – we ask all our clients to complete a review of their performance after every visit and to email it to us. So we can pick up any problems straightaway and deal with them.",
        },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [
        { type: "text", text: "OK, well that all sounds good. And will I always have the same cleaner?" },
      ],
    },
    {
      speaker: "JACINTA",
      segments: [
        { type: "text", text: "Yes, we do our best to " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", and we usually manage it." },
      ],
    },
    {
      speaker: "CLIENT",
      segments: [{ type: "text", text: "Good. That's fine. Right, so I'd like to go ahead and …" }],
    },
  ],
};

export const CAM17_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Cleaning the ______ throughout the apartment",
    questionVi: "Cleaning the ______ throughout the apartment",
    modelParaphraseEn: "the floor would need cleaning – we'd do that in every room",
    modelParaphraseVi: "the floor would need cleaning – we'd do that in every room",
    acceptedAnswers: ["floor", "floors"],
    explanationEn: "No carpets; the floor needs cleaning in every room.",
    explanationVi: "Không có thảm; floor cần lau ở mọi phòng.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Every week – cleaning the ______",
    questionVi: "Every week – cleaning the ______",
    modelParaphraseEn: "can you do the fridge? Sure. Would you like that done every week? Yes, definitely",
    modelParaphraseVi: "can you do the fridge? Sure. Would you like that done every week? Yes, definitely",
    acceptedAnswers: ["fridge"],
    explanationEn: "The oven is unused; the weekly extra is the fridge.",
    explanationVi: "Lò nướng hầu như không dùng; dịch vụ thêm hàng tuần là fridge.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Ironing clothes – ______ only",
    questionVi: "Ironing clothes – ______ only",
    modelParaphraseEn: "It wouldn't be much, just my shirts for work that week",
    modelParaphraseVi: "It wouldn't be much, just my shirts for work that week",
    acceptedAnswers: ["shirts"],
    explanationEn: "Only work shirts that week, not all clothes.",
    explanationVi: "Chỉ ủi shirts đi làm trong tuần, không phải tất cả quần áo.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Every month – cleaning all the ______ from the inside",
    questionVi: "Every month – cleaning all the ______ from the inside",
    modelParaphraseEn: "if the inside of your windows need cleaning, we could do that",
    modelParaphraseVi: "if the inside of your windows need cleaning, we could do that",
    acceptedAnswers: ["windows"],
    explanationEn: "Monthly extra: inside of the windows (fifteenth floor; outside is done by specialists).",
    explanationVi: "Hàng tháng: lau windows phía trong (tầng 15; phía ngoài đã có chuyên gia).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Washing down the ______",
    questionVi: "Washing down the ______",
    modelParaphraseEn: "would you be able to do something about the balcony? … we can get the pressure washer onto that",
    modelParaphraseVi: "would you be able to do something about the balcony? … we can get the pressure washer onto that",
    acceptedAnswers: ["balcony"],
    explanationEn: "The balcony could do with a wash every month; they use a pressure washer.",
    explanationVi: "Balcony cần rửa mỗi tháng; họ dùng máy xịt áp lực.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "They can organise a plumber or an ______ if necessary",
    questionVi: "They can organise a plumber or an ______ if necessary",
    modelParaphraseEn: "we can put you in touch with a reliable plumber … And the same thing if you need an electrician",
    modelParaphraseVi: "we can put you in touch with a reliable plumber … And the same thing if you need an electrician",
    acceptedAnswers: ["electrician"],
    explanationEn: "Maintenance contacts: plumber or electrician.",
    explanationVi: "Liên hệ bảo trì: plumber hoặc electrician.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "A special cleaning service is available for customers who are allergic to ______",
    questionVi: "A special cleaning service is available for customers who are allergic to ______",
    modelParaphraseEn: "capturing up to 99% of all the dust in the air. So if you're troubled by allergies",
    modelParaphraseVi: "capturing up to 99% of all the dust in the air. So if you're troubled by allergies",
    acceptedAnswers: ["dust"],
    explanationEn: "The special vacuum captures dust – useful if you have allergies.",
    explanationVi: "Máy hút đặc biệt bắt dust – hữu ích nếu bị dị ứng.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Before being hired, all cleaners have a background check carried out by the ______",
    questionVi: "Before being hired, all cleaners have a background check carried out by the ______",
    modelParaphraseEn: "they have to undergo a security check with the police",
    modelParaphraseVi: "they have to undergo a security check with the police",
    acceptedAnswers: ["police"],
    explanationEn: "Security / background check is done by the police (plus references).",
    explanationVi: "Kiểm tra lý lịch do police thực hiện (cộng thêm references).",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "All cleaners are given ______ for two weeks",
    questionVi: "All cleaners are given ______ for two weeks",
    modelParaphraseEn: "we give them training for it. That lasts for two weeks so it's very thorough",
    modelParaphraseVi: "we give them training for it. That lasts for two weeks so it's very thorough",
    acceptedAnswers: ["training"],
    explanationEn: "Two weeks of thorough training, then a test.",
    explanationVi: "Training hai tuần rất kỹ, rồi mới thi.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Customers send a ______ after each visit",
    questionVi: "Customers send a ______ after each visit",
    modelParaphraseEn: "we ask all our clients to complete a review of their performance after every visit and to email it to us",
    modelParaphraseVi: "we ask all our clients to complete a review of their performance after every visit and to email it to us",
    acceptedAnswers: ["review"],
    explanationEn: "After every visit, clients email a performance review.",
    explanationVi: "Sau mỗi lần dọn, khách email một review về hiệu suất.",
  },
];
