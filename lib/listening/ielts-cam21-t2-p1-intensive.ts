import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm ringing to find out about", "I am ringing to find out about"] },
    { id: "g2", answers: ["filling up fast"] },
    { id: "g3", answers: ["which one you were considering"] },
    { id: "g4", answers: ["put you on the waiting list"] },
    { id: "g5", answers: ["I'm quite interested in", "I am quite interested in"] },
    { id: "g6", answers: ["register for that"] },
    { id: "g7", answers: ["How much is it"] },
    { id: "g8", answers: ["very fashionable at present"] },
    { id: "g9", answers: ["I'd definitely be interested in that", "I would definitely be interested in that"] },
    { id: "g10", answers: ["learn how to do that"] },
    { id: "g11", answers: ["The teacher's great", "The teacher is great"] },
    { id: "g12", answers: ["see what you're doing", "see what you are doing"] },
    { id: "g13", answers: ["Let me check"] },
    { id: "g14", answers: ["It's filling up fast", "It is filling up fast"] },
    { id: "g15", answers: ["really good presents"] },
    { id: "g16", answers: ["have you heard about"] },
    { id: "g17", answers: ["really good value"] },
    { id: "g18", answers: ["household repairs"] },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Hello, Steynford College external course registration, can I help you?" }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " one-day classes next year. I got a leaflet about them in the post but I lost it, and I understand some of the classes are ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", so I might need to book quite soon if I want to go ahead." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Sure. Can you remember " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "There were a few actually. I remember there was one on how to make Vietnamese food that sounded good. I think that was on the 13th of January. It cost about 60 pounds.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, you're right about the date, but it's 59 pounds actually. It's a very popular class, and among other things the teacher explains how Vietnamese food includes lots of different herbs. I'm afraid that all the places are taken at present, but I can ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " if you want?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "No, that's OK. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " the bread making class. That's in March sometime, isn't it?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yeah, the 20th of March. Would you like to " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I'm not sure. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "The actual cost is £48 but then there's an extra charge as well as that for the ingredients – I'm not sure how much that is, no more than twenty pounds I think.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "So what sorts of things do they make in the class?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Oh, various types of bread; I think they make white bread and then they make sourdough, that seems to be ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", and they learn how to make pizza, which is apparently really good." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Well " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", but there were also a few other classes that sounded interesting. I think there was one on face massage? ",
        },
        { type: "text", text: "I'd love to " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yeah, that's on the 23rd of February and it costs just £35 for the day. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", the type of massage done is a traditional technique used in India and she actually did her training there. The massage is meant to relax you and get rid of lines and wrinkles. You practise it on yourself so you have to take a mirror to the class, so you can ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "And I think there was a class in candle making?" }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes that's sometime in April, I think. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " ... yes, it's on the 6th. It was on the 23rd of January but they had to change the date. It's just £52. That's a popular course too. I think one reason why people like it is because the candles are all made out of natural products. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " but there's still a few places left." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes one of my friends did that class. She said the candles make " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". In fact she gave me one." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "By the way, " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " the class on silk painting? That's being held on the 18th of May. You learn how to create designs on silk fabric and colour them using special dyes. Apparently people can produce beautiful artworks that way, either to put on the wall as a picture or to use for something like a scarf. It's £67.50, which is ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " I think – there's a similar class I've seen that was £110." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "That sounds interesting. Would I need to bring the silk?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "No, the only thing is everyone has to bring something to protect their clothing, like an apron if you've got one, or a shirt that you don't use any more, because the dye can really stain your clothes.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. Then the last class I was considering was a bit different, that was on DIY for beginners. I'd like to learn how to do ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Are there any places left on that?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "That's on the 24th of February – yes, there are a few places. It's a bit more expensive – it's £125 – but it's a very popular class. You learn how to use an electric drill and a saw.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah, that would be really useful, and I even need to learn how to use a hammer because I always end up hitting my fingers.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, you'll do that too. And when you've learned how to use the basic tools, you do a practical job which is fixing a shelf to a wall.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Great. Just what I need to know. Right, well I'd like to enrol for that and also for ...",
        },
      ],
    },
  ],
};

export const CAM21_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Vietnamese food — Date: ______",
    questionVi: "Vietnamese food — Date: ______",
    modelParaphraseEn: "I think that was on the 13th of January. … Yes, you're right about the date",
    modelParaphraseVi: "I think that was on the 13th of January. … Yes, you're right about the date",
    acceptedAnswers: ["13th of January", "the 13th of January", "13 January", "13.01", "13.1"],
    explanationEn: "She recalls 13 January; he confirms the date (the fee is £59, not 60).",
    explanationVi: "Cô nhớ 13 January; anh xác nhận ngày (học phí là £59, không phải 60).",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Bread making — Cost: £ ______",
    questionVi: "Bread making — Cost: £ ______",
    modelParaphraseEn: "The actual cost is £48 but then there's an extra charge as well as that for the ingredients",
    modelParaphraseVi: "The actual cost is £48 but then there's an extra charge as well as that for the ingredients",
    acceptedAnswers: ["48", "forty-eight"],
    explanationEn: "The class fee is £48; ingredients are an extra charge (up to about £20), not part of this gap.",
    explanationVi: "Học phí lớp là £48; nguyên liệu tính thêm (khoảng tối đa £20), không phải chỗ trống này.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Participants make white bread, sourdough and ______",
    questionVi: "Participants make white bread, sourdough and ______",
    modelParaphraseEn: "they make white bread and then they make sourdough … and they learn how to make pizza",
    modelParaphraseVi: "they make white bread and then they make sourdough … and they learn how to make pizza",
    acceptedAnswers: ["pizza"],
    explanationEn: "White bread and sourdough are already on the notes; the third thing they make is pizza.",
    explanationVi: "White bread và sourdough đã có trên đề; món thứ ba là pizza.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "The teacher trained in ______",
    questionVi: "The teacher trained in ______",
    modelParaphraseEn: "a traditional technique used in India and she actually did her training there",
    modelParaphraseVi: "a traditional technique used in India and she actually did her training there",
    acceptedAnswers: ["India"],
    explanationEn: "The face-massage teacher trained in India, where the traditional technique is used.",
    explanationVi: "Giáo viên face massage được đào tạo ở India, nơi dùng kỹ thuật truyền thống.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Bring a ______",
    questionVi: "Bring a ______",
    modelParaphraseEn: "You practise it on yourself so you have to take a mirror to the class",
    modelParaphraseVi: "You practise it on yourself so you have to take a mirror to the class",
    acceptedAnswers: ["mirror"],
    explanationEn: "Because students practise on themselves, they must bring a mirror.",
    explanationVi: "Vì học viên tự massage trên mặt mình nên phải mang mirror.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Candle making — Date: ______",
    questionVi: "Candle making — Date: ______",
    modelParaphraseEn: "sometime in April … yes, it's on the 6th. It was on the 23rd of January but they had to change the date",
    modelParaphraseVi: "sometime in April … yes, it's on the 6th. It was on the 23rd of January but they had to change the date",
    acceptedAnswers: ["6th of April", "the 6th of April", "6 April", "06.04", "6.4"],
    explanationEn: "Moved from 23 January; the candle class is now on 6 April (£52).",
    explanationVi: "Đổi từ 23 January; lớp nến giờ là 6 April (£52).",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Only ______ ingredients are used",
    questionVi: "Only ______ ingredients are used",
    modelParaphraseEn: "the candles are all made out of natural products",
    modelParaphraseVi: "the candles are all made out of natural products",
    acceptedAnswers: ["natural"],
    explanationEn: "People like the class because the candles use only natural products/ingredients.",
    explanationVi: "Người ta thích lớp này vì nến chỉ dùng nguyên liệu natural.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Silk painting — Cost: £ ______",
    questionVi: "Silk painting — Cost: £ ______",
    modelParaphraseEn: "It's £67.50, which is really good value I think – there's a similar class I've seen that was £110",
    modelParaphraseVi: "It's £67.50, which is really good value I think – there's a similar class I've seen that was £110",
    acceptedAnswers: ["67.50", "sixty-seven fifty"],
    explanationEn: "Silk painting on 18 May costs £67.50 — cheaper than a similar class at £110.",
    explanationVi: "Lớp vẽ lụa ngày 18 May giá £67.50 — rẻ hơn lớp tương tự £110.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Bring an apron or old ______",
    questionVi: "Bring an apron or old ______",
    modelParaphraseEn: "bring something to protect their clothing, like an apron if you've got one, or a shirt that you don't use any more",
    modelParaphraseVi: "bring something to protect their clothing, like an apron if you've got one, or a shirt that you don't use any more",
    acceptedAnswers: ["shirt"],
    explanationEn: "Do not bring the silk; bring an apron or an old shirt because the dye stains clothes.",
    explanationVi: "Không cần mang lụa; mang tạp dề hoặc áo shirt cũ vì thuốc nhuộm làm bẩn quần áo.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Learn how to use a drill, saw and ______",
    questionVi: "Learn how to use a drill, saw and ______",
    modelParaphraseEn: "You learn how to use an electric drill and a saw. … I even need to learn how to use a hammer … Yes, you'll do that too",
    modelParaphraseVi: "You learn how to use an electric drill and a saw. … I even need to learn how to use a hammer … Yes, you'll do that too",
    acceptedAnswers: ["hammer"],
    explanationEn: "Drill and saw are mentioned first; he confirms they also learn to use a hammer, then put up a shelf.",
    explanationVi: "Drill và saw được nói trước; anh xác nhận còn học dùng hammer, rồi lắp kệ.",
  },
];
