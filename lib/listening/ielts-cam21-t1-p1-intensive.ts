import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to find out about", "I would like to find out about"] },
    { id: "g2", answers: ["you might be interested in"] },
    { id: "g3", answers: ["who've never sailed before", "who have never sailed before"] },
    { id: "g4", answers: ["whether you enjoy it"] },
    { id: "g5", answers: ["if there are two of you"] },
    { id: "g6", answers: ["And are there any other suitable courses"] },
    { id: "g7", answers: ["These are two-day weekend courses"] },
    { id: "g8", answers: ["a mix of theory and practical skills"] },
    { id: "g9", answers: ["which is obviously really important"] },
    { id: "g10", answers: ["It sounds like hard work"] },
    { id: "g11", answers: ["You've got plenty of time to decide", "You have got plenty of time to decide"] },
    { id: "g12", answers: ["everything's included", "everything is included"] },
    { id: "g13", answers: ["I'm pretty confident in the water", "I am pretty confident in the water"] },
    { id: "g14", answers: ["The other thing I should tell you"] },
    { id: "g15", answers: ["you might want to bring"] },
    { id: "g16", answers: ["I know absolutely nothing about"] },
    { id: "g17", answers: ["They'll give you an idea of what to expect", "They will give you an idea of what to expect"] },
    { id: "g18", answers: ["I'll be cycling to the club", "I will be cycling to the club"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Hello, Oyster Bay Sailing Club. How can I help you?" }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh hi. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " sailing courses for beginners." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "No problem. Is it for yourself?" }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes. I had a look online but I'm not sure which course would be best.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. Well " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " our Taster Days?" },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Possibly." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "So these are for people " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " – it's basically an introduction to sailing to find out " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " and want to carry on with it." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "And how much is that?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "It's £120 for the day - but it's reduced to £110 each " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "No, it would just be me." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Oh that's fine. You'd be in a small group, usually about eight people but no more than ten – and everyone's always very friendly.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Uh huh. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "The other option is the Level 1 course. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " and we run those all year round." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "OK. And what do you learn on that course?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "This is " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". So you learn about things like the weather, " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " and also the tides, as well as learning basic sailing skills. You go out into the harbour in special training dinghies for beginners, two people in each dinghy and an instructor. He or she will make sure you understand everything you need to know about safety.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "!" }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Yes, but you'll have a lot of fun too." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "And the cost of that one is... ?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "£200. But it's a bit cheaper if you decide to join the club. There's a discount for members.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Well, I'm not sure about that yet." }] },
    {
      speaker: "WOMAN",
      segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "And does the cost include everything?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " and you also get a really good dictionary explaining all the sailing terminology. A lot of people struggle with this at first. It's got lots of pictures, so I'm sure you'd find it really helpful. And on completion of the course you get a certificate. Then you're ready to move on to the Level 2 course.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Sounds good." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I think that's all the info you need for now. Just a couple of general things. For example, it's really important that you know how to swim.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Great. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " is that we provide wetsuits and life jackets but you need to bring swimming trunks and some old trainers.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "And a towel?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes definitely. And " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " your own toiletries, things like shampoo." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. What about food and drink? Do I need to bring that or is there a café at the club?",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes, you can get sandwiches, cakes and snacks there. The food's pretty reasonable.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "OK good. Well I think I'm interested in the Level 1 course. But " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " sailing so is there anything I can do to prepare myself a bit?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I recommend you watch some videos we use for training. They're available online. I can send you the link. ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Perfect, thanks. That would be very helpful. Oh and just one other thing - " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and will need somewhere to put valuables. I'm just wondering if there are lockers for people to use?",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Yes, there are plenty in the changing rooms." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "Great. OK well could you book me onto..." }] },
  ],
};

export const CAM21_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "small groups (max ______ people)",
    questionVi: "small groups (max ______ people)",
    modelParaphraseEn: "You'd be in a small group, usually about eight people but no more than ten",
    modelParaphraseVi: "You'd be in a small group, usually about eight people but no more than ten",
    acceptedAnswers: ["10", "ten"],
    explanationEn: "Taster Days are in small groups — usually about eight, but the maximum is ten.",
    explanationVi: "Taster Days theo nhóm nhỏ — thường khoảng tám, nhưng tối đa là ten / 10.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "basic theory e.g. understanding the ______ and tides",
    questionVi: "basic theory e.g. understanding the ______ and tides",
    modelParaphraseEn: "you learn about things like the weather, which is obviously really important and also the tides",
    modelParaphraseVi: "you learn about things like the weather, which is obviously really important and also the tides",
    acceptedAnswers: ["weather"],
    explanationEn: "Level 1 theory covers the weather and the tides.",
    explanationVi: "Lý thuyết Level 1 gồm weather và tides.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "basic sailing skills including ______ information",
    questionVi: "basic sailing skills including ______ information",
    modelParaphraseEn: "He or she will make sure you understand everything you need to know about safety",
    modelParaphraseVi: "He or she will make sure you understand everything you need to know about safety",
    acceptedAnswers: ["safety"],
    explanationEn: "On the water, the instructor covers everything you need to know about safety.",
    explanationVi: "Trên mặt nước, instructor bảo đảm bạn hiểu mọi thông tin về safety.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "______ available for club members",
    questionVi: "______ available for club members",
    modelParaphraseEn: "it's a bit cheaper if you decide to join the club. There's a discount for members",
    modelParaphraseVi: "it's a bit cheaper if you decide to join the club. There's a discount for members",
    acceptedAnswers: ["discount"],
    explanationEn: "Club members get a discount on the £200 Level 1 fee.",
    explanationVi: "Hội viên được discount trên học phí £200 của Level 1.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "all inclusive (plus a useful ______)",
    questionVi: "all inclusive (plus a useful ______)",
    modelParaphraseEn: "everything's included and you also get a really good dictionary explaining all the sailing terminology",
    modelParaphraseVi: "everything's included and you also get a really good dictionary explaining all the sailing terminology",
    acceptedAnswers: ["dictionary"],
    explanationEn: "The fee is all-inclusive, plus a useful dictionary of sailing terms (with pictures).",
    explanationVi: "Học phí all inclusive, cộng thêm một dictionary thuật ngữ thuyền buồm (có hình).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "a ______ at the end of the course for all participants",
    questionVi: "a ______ at the end of the course for all participants",
    modelParaphraseEn: "on completion of the course you get a certificate",
    modelParaphraseVi: "on completion of the course you get a certificate",
    acceptedAnswers: ["certificate"],
    explanationEn: "Everyone who completes the course gets a certificate, then can move on to Level 2.",
    explanationVi: "Ai hoàn thành khóa đều nhận certificate, rồi có thể lên Level 2.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Bring suitable clothing, a ______ and toiletries (e.g. shampoo)",
    questionVi: "Bring suitable clothing, a ______ and toiletries (e.g. shampoo)",
    modelParaphraseEn: "And a towel? Yes definitely. And you might want to bring your own toiletries",
    modelParaphraseVi: "And a towel? Yes definitely. And you might want to bring your own toiletries",
    acceptedAnswers: ["towel"],
    explanationEn: "The club provides wetsuits and life jackets; you bring trunks, old trainers, a towel and toiletries.",
    explanationVi: "CLB cho wetsuit và áo phao; bạn mang quần bơi, giày cũ, towel và đồ vệ sinh.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "There is a ______ at the club",
    questionVi: "There is a ______ at the club",
    modelParaphraseEn: "is there a café at the club? Yes, you can get sandwiches, cakes and snacks there",
    modelParaphraseVi: "is there a café at the club? Yes, you can get sandwiches, cakes and snacks there",
    acceptedAnswers: ["cafe", "café"],
    explanationEn: "There is a café at the club — sandwiches, cakes and snacks, reasonably priced. You do not have to bring food.",
    explanationVi: "Có café / cafe tại CLB — sandwich, bánh, snacks, giá phải chăng. Không bắt buộc mang đồ ăn.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Online training ______ are recommended",
    questionVi: "Online training ______ are recommended",
    modelParaphraseEn: "I recommend you watch some videos we use for training. They're available online",
    modelParaphraseVi: "I recommend you watch some videos we use for training. They're available online",
    acceptedAnswers: ["videos"],
    explanationEn: "She recommends watching the club's online training videos before the course.",
    explanationVi: "Cô ấy khuyên xem videos đào tạo online của CLB trước khóa học.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "______ are available for course participants",
    questionVi: "______ are available for course participants",
    modelParaphraseEn: "I'm just wondering if there are lockers for people to use? Yes, there are plenty in the changing rooms",
    modelParaphraseVi: "I'm just wondering if there are lockers for people to use? Yes, there are plenty in the changing rooms",
    acceptedAnswers: ["lockers", "Lockers"],
    explanationEn: "There are plenty of lockers in the changing rooms for valuables.",
    explanationVi: "Có nhiều lockers trong phòng thay đồ để gửi đồ quý.",
  },
];
