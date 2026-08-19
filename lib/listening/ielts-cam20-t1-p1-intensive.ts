import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I've been meaning to ask you", "I have been meaning to ask you"] },
    { id: "g2", answers: ["I'd definitely recommend that", "I would definitely recommend that"] },
    { id: "g3", answers: ["that's not necessarily why I'd recommend it", "that is not necessarily why I'd recommend it", "that's not necessarily why I would recommend it"] },
    { id: "g4", answers: ["Is it really expensive"] },
    { id: "g5", answers: ["for a special occasion I think it's fine", "for a special occasion I think it is fine"] },
    { id: "g6", answers: ["So that's definitely a possibility then", "So that is definitely a possibility then"] },
    { id: "g7", answers: ["If you want somewhere a bit less formal"] },
    { id: "g8", answers: ["it's got a great reputation already", "it has got a great reputation already"] },
    { id: "g9", answers: ["I was really impressed"] },
    { id: "g10", answers: ["which always works really well"] },
    { id: "g11", answers: ["Worth thinking about"] },
    { id: "g12", answers: ["The only thing is that"] },
    { id: "g13", answers: ["I've just thought of another idea", "I have just thought of another idea"] },
    { id: "g14", answers: ["I don't tend to pay much attention", "I do not tend to pay much attention"] },
    { id: "g15", answers: ["That would be a memorable place"] },
    { id: "g16", answers: ["Obviously it's worth going there", "Obviously it is worth going there"] },
    { id: "g17", answers: ["That's quite reasonable", "That is quite reasonable"] },
    { id: "g18", answers: ["I'm sure everyone would enjoy it", "I am sure everyone would enjoy it"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " for some advice about restaurants. I need to book somewhere to celebrate my sister's 30th birthday, and I liked the sound of that place you went to for your mum's 50th.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "The Junction. Yeah, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " for a special occasion. We had a great time there. Everyone really enjoyed it." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Where is it again? I can't remember." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "It's on Grayson Street, only about a two-minute walk from the station.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Oh that's good. I'd prefer not to have to drive anywhere but I don't want to have to walk too far either.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, the location's perfect, but " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". The food's amazing. If you like fish, it's probably the best restaurant in town for that. It's always really fresh and there are lots of interesting dishes to choose from. But all the food is good there.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "?" }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "It's certainly not cheap, but " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". It's got a great atmosphere and before dinner you can go up on the roof and have a drink. It's really nice up there, but you need to book. It's very popular as the views are spectacular.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Sounds good. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". Is there anywhere else you can think of?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", then you could try Paloma." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Where's that? I haven't heard of it." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "No, it's quite new. It's only been open a few months, but " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". It's in a really beautiful old building on Bow Street." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Oh, I think I know where you mean. Right beside the cinema." }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, that's it. I've only been there a couple of times, but " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". The chef used to work at Don Felipe's, apparently. I was really sorry when that closed down.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "So is all the food they serve Spanish, then?" }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yeah. You can get lots of small dishes to share, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " if you're in a group." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yeah. There's a lively atmosphere and the waiters are really friendly. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " you need to pay a £50 deposit to book a table." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "A lot of restaurants are doing that these days. I should have a look at the menu to check if there is a good choice of vegetarian dishes. A couple of my friends have stopped eating meat.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Not sure. I'd say the selection of those would be quite limited." }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". Have you been to the Audley?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "No, don't think I've heard of it. How's it spelt?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "A-U-D-L-E-Y. You must have heard of it. There's been a lot about it in the press.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to that kind of thing. So where is it exactly?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "It's in that hotel near Baxter Bridge, on the top floor." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Oh, the views would be incredible from up there." }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yeah, I'd love to go. I can't think of the chef's name, but she was a judge on that TV cookery show recently. And she's written a couple of cookery books.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, Angela Frayne." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "That's the one. Anyway, it had excellent reviews from all the newspapers.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: " for a celebration." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Definitely. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " just for the view, but the food is supposed to be really special." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "She only likes cooking with local products, doesn't she?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes. Everything at the restaurant has to be sourced within a short distance, and absolutely nothing flown in from abroad.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "I imagine it's really expensive, though." }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, you could go for the set lunch. " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " for a top-class restaurant. 30 pounds a head. In the evening, I think it would be more like 50 pounds.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "At least that, I should think. But " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". It's not the kind of place you leave feeling hungry, though, is it? With tiny portions?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "No, the reviews I've read didn't mention that. I imagine they'd be average.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Well, that's all great." }] },
  ],
};

export const CAM20_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Good for people who are especially keen on ______",
    questionVi: "Good for people who are especially keen on ______",
    modelParaphraseEn: "If you like fish, it's probably the best restaurant in town for that",
    modelParaphraseVi: "If you like fish, it's probably the best restaurant in town for that",
    acceptedAnswers: ["fish"],
    explanationEn: "The Junction is recommended especially for people who like fish — the best in town for that.",
    explanationVi: "The Junction được gợi ý đặc biệt cho người thích fish — best in town cho món đó.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "The ______ is a good place for a drink",
    questionVi: "The ______ is a good place for a drink",
    modelParaphraseEn: "before dinner you can go up on the roof and have a drink",
    modelParaphraseVi: "before dinner you can go up on the roof and have a drink",
    acceptedAnswers: ["roof"],
    explanationEn: "Before dinner you can go up on the roof for a drink (book — views are spectacular).",
    explanationVi: "Trước bữa tối có thể lên roof uống — cần book, view rất đẹp.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "______ food, good for sharing",
    questionVi: "______ food, good for sharing",
    modelParaphraseEn: "So is all the food they serve Spanish, then? Yeah. You can get lots of small dishes to share",
    modelParaphraseVi: "So is all the food they serve Spanish, then? Yeah. You can get lots of small dishes to share",
    acceptedAnswers: ["Spanish"],
    explanationEn: "Paloma serves Spanish food — small dishes to share, good for a group.",
    explanationVi: "Paloma phục vụ món Spanish — nhiều món nhỏ để share, hợp nhóm.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "A limited selection of ______ food on the menu",
    questionVi: "A limited selection of ______ food on the menu",
    modelParaphraseEn: "a good choice of vegetarian dishes … I'd say the selection of those would be quite limited",
    modelParaphraseVi: "a good choice of vegetarian dishes … I'd say the selection of those would be quite limited",
    acceptedAnswers: ["vegetarian"],
    explanationEn: "Vegetarian dishes are on the menu but the selection is quite limited.",
    explanationVi: "Có món vegetarian nhưng lựa chọn khá limited.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "The ______",
    questionVi: "The ______",
    modelParaphraseEn: "Have you been to the Audley? A-U-D-L-E-Y",
    modelParaphraseVi: "Have you been to the Audley? A-U-D-L-E-Y",
    acceptedAnswers: ["Audley"],
    explanationEn: "The third restaurant is the Audley, spelled A-U-D-L-E-Y.",
    explanationVi: "Nhà hàng thứ ba là the Audley, đánh vần A-U-D-L-E-Y.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "At the top of a ______",
    questionVi: "At the top of a ______",
    modelParaphraseEn: "It's in that hotel near Baxter Bridge, on the top floor",
    modelParaphraseVi: "It's in that hotel near Baxter Bridge, on the top floor",
    acceptedAnswers: ["hotel"],
    explanationEn: "The Audley is on the top floor of a hotel near Baxter Bridge.",
    explanationVi: "The Audley ở tầng trên cùng của một hotel gần Baxter Bridge.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "All the ______ are very good",
    questionVi: "All the ______ are very good",
    modelParaphraseEn: "it had excellent reviews from all the newspapers",
    modelParaphraseVi: "it had excellent reviews from all the newspapers",
    acceptedAnswers: ["reviews"],
    explanationEn: "All the newspaper reviews are excellent / very good.",
    explanationVi: "Mọi reviews trên báo đều excellent / very good.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Only uses ______ ingredients",
    questionVi: "Only uses ______ ingredients",
    modelParaphraseEn: "She only likes cooking with local products … sourced within a short distance, and absolutely nothing flown in from abroad",
    modelParaphraseVi: "She only likes cooking with local products … sourced within a short distance, and absolutely nothing flown in from abroad",
    acceptedAnswers: ["local"],
    explanationEn: "The chef only uses local ingredients — sourced nearby, nothing flown in.",
    explanationVi: "Đầu bếp chỉ dùng nguyên liệu local — lấy gần, không bay từ nước ngoài.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Set lunch costs £ ______ per person",
    questionVi: "Set lunch costs £ ______ per person",
    modelParaphraseEn: "you could go for the set lunch … 30 pounds a head. In the evening … more like 50 pounds",
    modelParaphraseVi: "you could go for the set lunch … 30 pounds a head. In the evening … more like 50 pounds",
    acceptedAnswers: ["30", "thirty"],
    explanationEn: "Set lunch is £30 / thirty pounds a head; evening is more like £50.",
    explanationVi: "Set lunch £30 / thirty mỗi người; buổi tối khoảng £50.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Portions probably of ______ size",
    questionVi: "Portions probably of ______ size",
    modelParaphraseEn: "It's not the kind of place you leave feeling hungry … With tiny portions? No … I imagine they'd be average",
    modelParaphraseVi: "It's not the kind of place you leave feeling hungry … With tiny portions? No … I imagine they'd be average",
    acceptedAnswers: ["average"],
    explanationEn: "Portions are not tiny — he imagines they would be of average size.",
    explanationVi: "Phần ăn không nhỏ — ông đoán là average size.",
  },
];
