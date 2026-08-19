import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm due to move in", "I am due to move in"] },
    { id: "g2", answers: ["I'll most probably need to rent", "I will most probably need to rent"] },
    { id: "g3", answers: ["I could give you some information"] },
    { id: "g4", answers: ["I've recommended them to other people", "I have recommended them to other people"] },
    { id: "g5", answers: ["have always heard positive reports"] },
    { id: "g6", answers: ["Could you give me an idea"] },
    { id: "g7", answers: ["It's just to get a general idea", "It is just to get a general idea"] },
    { id: "g8", answers: ["once you place an order"] },
    { id: "g9", answers: ["That would be really helpful"] },
    { id: "g10", answers: ["there's a special offer at the moment", "there is a special offer at the moment"] },
    { id: "g11", answers: ["more than I was hoping to pay"] },
    { id: "g12", answers: ["I'd have to do the math carefully", "I would have to do the math carefully"] },
    { id: "g13", answers: ["I probably won't need that", "I probably will not need that"] },
    { id: "g14", answers: ["I'm not bringing much with me", "I am not bringing much with me"] },
    { id: "g15", answers: ["That wouldn't be too hard", "That would not be too hard"] },
    { id: "g16", answers: ["Sorry to interrupt"] },
    { id: "g17", answers: ["I don't have any information about", "I do not have any information about"] },
    { id: "g18", answers: ["That sounds really great"] },
  ],
  lines: [
    { speaker: "MAN", segments: [{ type: "text", text: "Good morning." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Hi, this is Michelin Meyer. I'm renting your house on Archwood Avenue. ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " next week." },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Oh, yes. Hello, Ms. Meyer. What can I do for you?" }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "When I viewed the house, I told you " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " some furniture, at least until I know whether my temporary work contract is going to be made permanent.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, of course. I remember. And I said " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " about furniture rental companies in the city." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, the biggest company is called Peak Rentals. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " and " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " about them." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " of their costs?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Sure. I actually have one of their brochures here. It says the monthly price per room starts at $105 and goes up to $239. That depends on which rooms you need furniture for, of course.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Sure. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " of how much it's going to cost. And you said you had some positive feedback about this company?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes. People have mentioned that the furniture from Peak Rentals is more modern than any of the other companies. And also, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", the furniture will be delivered to you in just one or two days." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh, and the brochure says that " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". If you rent living room furniture, I believe that's a set of chairs and a TV table, you'll also get a lamp at no extra cost.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Okay, but you know, that price range you gave is " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Then you could try Aaron and Oliver." }],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Sorry, what and Oliver?" }] },
    { speaker: "MAN", segments: [{ type: "text", text: "Aaron, double A, A-R-O-N." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK, are they cheaper?" }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "I'd say they're a mid-price company. But if you chose them, you need to be aware that they charge an extra 12% every month in case of damage.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, I see. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " then." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Right. But one helpful thing is that they also do cleaning for customers.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "For the furniture?" }] },
    { speaker: "MAN", segments: [{ type: "text", text: "For the house." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, I see. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "There's another company called Larch Furniture. It's quite new, and it has the lowest prices in town. That's for both furniture and also electronic equipment.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Well, that would be good. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", and I won't have much time to go shopping after I start my job.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "There are two things you need to know about Larch Furniture. First of all, you have to take out insurance on the furniture and you need to organize that yourself.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Also, you can't take out a contract for less than six months, but I figure that might not be a problem for you. You're renting the house for 12 months after all, aren't you?",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Yes, okay. Well, I…" }] },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". I just thought of another furniture rental company. It's called Space Rentals, and it's located very near to the house.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Okay." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " their charges, so it's best to use their app to find out what it would cost you to use them.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Okay, thanks. I'll do that." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "One good thing about that company is that if you don't like the furniture once it's delivered, you can request exchanges, as long as you do that within a week of receiving it.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Okay, well, thanks very much. That's so helpful." },
      ],
    },
  ],
};

export const CAM20_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Prices range from $105 to $______ per room per month",
    questionVi: "Giá từ $105 đến $______ mỗi phòng mỗi tháng",
    modelParaphraseEn: "the monthly price per room starts at $105 and goes up to $239",
    modelParaphraseVi: "the monthly price per room starts at $105 and goes up to $239",
    acceptedAnswers: ["239", "two hundred and thirty-nine", "two hundred thirty-nine"],
    explanationEn: "The top of Peak Rentals' range is $239 per room per month.",
    explanationVi: "Mức cao nhất của Peak Rentals là $239 mỗi phòng mỗi tháng.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "The furniture is very ______",
    questionVi: "Nội thất rất ______",
    modelParaphraseEn: "the furniture from Peak Rentals is more modern than any of the other companies",
    modelParaphraseVi: "the furniture from Peak Rentals is more modern than any of the other companies",
    acceptedAnswers: ["modern"],
    explanationEn: "Positive feedback: Peak Rentals' furniture is more modern than rivals.",
    explanationVi: "Phản hồi tốt: nội thất Peak Rentals modern hơn các công ty khác.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Special offer: free ______ with every living room set",
    questionVi: "Ưu đãi: tặng ______ với mỗi bộ phòng khách",
    modelParaphraseEn: "a set of chairs and a TV table, you'll also get a lamp at no extra cost",
    modelParaphraseVi: "a set of chairs and a TV table, you'll also get a lamp at no extra cost",
    acceptedAnswers: ["lamp"],
    explanationEn: "A living-room set (chairs + TV table) includes a free lamp.",
    explanationVi: "Bộ phòng khách (ghế + bàn TV) được tặng kèm lamp miễn phí.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "______ and Oliver",
    questionVi: "______ and Oliver",
    modelParaphraseEn: "Then you could try Aaron and Oliver – double A, A-R-O-N",
    modelParaphraseVi: "Then you could try Aaron and Oliver – double A, A-R-O-N",
    acceptedAnswers: ["Aaron"],
    explanationEn: "The mid-price company is Aaron and Oliver (spelled A-A-R-O-N).",
    explanationVi: "Công ty tầm trung là Aaron and Oliver (đánh vần A-A-R-O-N).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "12% monthly fee for ______",
    questionVi: "Phí 12% mỗi tháng cho ______",
    modelParaphraseEn: "they charge an extra 12% every month in case of damage",
    modelParaphraseVi: "they charge an extra 12% every month in case of damage",
    acceptedAnswers: ["damage"],
    explanationEn: "The extra 12% is in case of damage — not a cleaning fee.",
    explanationVi: "Khoản 12% thêm là phòng trường hợp damage — không phải phí dọn dẹp.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "cheapest prices for renting furniture and ______ items",
    questionVi: "giá rẻ nhất cho thuê nội thất và đồ ______",
    modelParaphraseEn: "the lowest prices in town – for both furniture and also electronic equipment",
    modelParaphraseVi: "the lowest prices in town – for both furniture and also electronic equipment",
    acceptedAnswers: ["electronic"],
    explanationEn: "Larch is cheapest for furniture and electronic items/equipment.",
    explanationVi: "Larch rẻ nhất cho nội thất và đồ electronic.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Must have own ______",
    questionVi: "Phải tự có ______",
    modelParaphraseEn: "you have to take out insurance on the furniture and you need to organize that yourself",
    modelParaphraseVi: "you have to take out insurance on the furniture and you need to organize that yourself",
    acceptedAnswers: ["insurance"],
    explanationEn: "Customers must arrange their own insurance on the furniture.",
    explanationVi: "Khách phải tự mua insurance cho nội thất.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "______ Rentals",
    questionVi: "______ Rentals",
    modelParaphraseEn: "It's called Space Rentals, and it's located very near to the house",
    modelParaphraseVi: "It's called Space Rentals, and it's located very near to the house",
    acceptedAnswers: ["Space", "space"],
    explanationEn: "The nearby company is Space Rentals.",
    explanationVi: "Công ty gần nhà là Space Rentals.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "See the ______ for the most up-to-date prices",
    questionVi: "Xem ______ để biết giá mới nhất",
    modelParaphraseEn: "it's best to use their app to find out what it would cost you to use them",
    modelParaphraseVi: "it's best to use their app to find out what it would cost you to use them",
    acceptedAnswers: ["app"],
    explanationEn: "He has no printed charges — check the app for current prices.",
    explanationVi: "Ông không có bảng giá — xem app để biết giá hiện tại.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "______ are allowed within 7 days of delivery",
    questionVi: "Được phép ______ trong 7 ngày sau khi giao",
    modelParaphraseEn: "you can request exchanges, as long as you do that within a week of receiving it",
    modelParaphraseVi: "you can request exchanges, as long as you do that within a week of receiving it",
    acceptedAnswers: ["exchanges"],
    explanationEn: "Exchanges are allowed within a week / 7 days of delivery.",
    explanationVi: "Được exchanges trong vòng một tuần / 7 ngày sau khi nhận hàng.",
  },
];
