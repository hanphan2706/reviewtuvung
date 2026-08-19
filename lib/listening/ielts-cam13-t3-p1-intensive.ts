import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["This is Matt Brooks"] },
    { id: "g2", answers: ["Alex White gave me your number"] },
    { id: "g3", answers: ["How can I help"] },
    { id: "g4", answers: ["which area to live in"] },
    { id: "g5", answers: ["which is a really nice suburb"] },
    {
      id: "g6",
      answers: ["That's what people typically pay", "That is what people typically pay"],
    },
    {
      id: "g7",
      answers: ["That doesn't include bills or anything", "That does not include bills or anything"],
    },
    { id: "g8", answers: ["Are the transport links easy from where you live"] },
    {
      id: "g9",
      answers: ["I don't have to use public transport", "I do not have to use public transport"],
    },
    { id: "g10", answers: ["Is it safe to cycle around the city"] },
    { id: "g11", answers: ["And it keeps me fit"] },
    { id: "g12", answers: ["driving to work in the city centre would be a nightmare"] },
    {
      id: "g13",
      answers: ["I'd be working from home", "I would be working from home"],
    },
    { id: "g14", answers: ["Getting to London is no problem"] },
    { id: "g15", answers: ["they run quite late at night"] },
    {
      id: "g16",
      answers: ["They're always doing engineering work", "They are always doing engineering work"],
    },
    { id: "g17", answers: ["We want to make some appointments with estate agents"] },
    {
      id: "g18",
      answers: ["Let me know which train you're catching", "Let me know which train you are catching"],
    },
  ],
  lines: [
    { speaker: "LINDA", segments: [{ type: "text", text: "Hello, Linda speaking." }] },
    {
      speaker: "MATT",
      segments: [
        { type: "text", text: "Oh hi, Linda. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ". He said you'd be able to give me some advice about moving to Banford.",
        },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Yes, Alex did mention you. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        { type: "text", text: "Well, first of all - " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Well, I live in Dalton, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " - not too expensive, and there's a nice park." },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        {
          type: "text",
          text: "Sounds good. Do you know how much it would be to rent a two bedroom flat there?",
        },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        {
          type: "text",
          text: "Yeah, you should be able to get something reasonable for 850 pounds per month. ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". You certainly wouldn't want to pay more than 900 pounds. ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        { type: "text", text: "No. That sounds alright. I'll definitely have a look there. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Well, I'm very lucky. I work in the city centre so " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". I go by bike." },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        { type: "text", text: "Oh, I wish I could do that. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Yes, it's fine. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Anyway, " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " because there's hardly any parking. And the traffic during the rush hour can be bad.",
        },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: " but I'd have to go to London one or two days a week." },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Oh, that's perfect. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ". There's a fast train every 30 minutes which only takes 45 minutes." },
      ],
    },
    { speaker: "MATT", segments: [{ type: "text", text: "That's good." }] },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Yeah, the train service isn't bad during the week. And " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". It's weekends that are a problem. ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " and you have to take a bus to Hadham and pick up the train there, which is really slow. But other than that, Banford's a great place to live. I've never been happier.",
        },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        {
          type: "text",
          text: "There are some nice restaurants in the city centre and a brand new cinema which has only been open a couple of months. There's a good arts centre too.",
        },
      ],
    },
    {
      speaker: "MATT",
      segments: [{ type: "text", text: "Sounds like Banford's got it all." }],
    },
    {
      speaker: "LINDA",
      segments: [
        {
          type: "text",
          text: "Yes! We're really lucky. There are lots of really good aspects to living here. The schools are good and the hospital here is one of the best in the country. Everyone I know who's been there's had a positive experience. Oh, I can give you the name of my dentist too in Bridge Street, if you're interested. I've been going to him for years and I've never had any problems.",
        },
      ],
    },
    { speaker: "MATT", segments: [{ type: "text", text: "Oh, OK. Thanks!" }] },
    {
      speaker: "LINDA",
      segments: [{ type: "text", text: "I'll find his number and send it to you." }],
    },
    {
      speaker: "MATT",
      segments: [{ type: "text", text: "Thanks, that would be really helpful." }],
    },
    {
      speaker: "LINDA",
      segments: [{ type: "text", text: "Are you planning to visit Banford soon?" }],
    },
    {
      speaker: "MATT",
      segments: [
        { type: "text", text: "Yes. My wife and I are both coming next week. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LINDA",
      segments: [{ type: "text", text: "I could meet you if you like and show you around." }],
    },
    {
      speaker: "MATT",
      segments: [{ type: "text", text: "Are you sure? We'd really appreciate that." }],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Either a Tuesday or Thursday is good for me, after 5.30." },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        {
          type: "text",
          text: "Thursday's preferable - Tuesday I need to get home before 6 pm.",
        },
      ],
    },
    {
      speaker: "LINDA",
      segments: [
        { type: "text", text: "Okay great. " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and I'll meet you in the cafe outside. You can't miss it. It's opposite the station and next to the museum.",
        },
      ],
    },
    {
      speaker: "MATT",
      segments: [
        {
          type: "text",
          text: "Brilliant. I'll text you next week then. Thanks so much for all the advice.",
        },
      ],
    },
    { speaker: "LINDA", segments: [{ type: "text", text: "No problem. I'll see you next week." }] },
  ],
};

export const CAM13_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Average rent: £______ a month",
    questionVi: "Average rent: £______ a month",
    modelParaphraseEn: "you should be able to get something reasonable for 850 pounds per month. That's what people typically pay",
    modelParaphraseVi: "you should be able to get something reasonable for 850 pounds per month. That's what people typically pay",
    acceptedAnswers: ["850"],
    explanationEn: "Typical rent is £850 a month; more than £900 is too much. Bills are extra.",
    explanationVi: "Tiền thuê điển hình là £850/tháng; hơn £900 là quá cao. Bills tính riêng.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Linda travels to work by ______",
    questionVi: "Linda travels to work by ______",
    modelParaphraseEn: "I work in the city centre so I don't have to use public transport. I go by bike",
    modelParaphraseVi: "I work in the city centre so I don't have to use public transport. I go by bike",
    acceptedAnswers: ["bike", "bicycle"],
    explanationEn: "She cycles to work — she does not use public transport.",
    explanationVi: "Cô ấy đi làm bằng bike — không dùng public transport.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Limited ______ in city centre",
    questionVi: "Limited ______ in city centre",
    modelParaphraseEn: "driving to work in the city centre would be a nightmare because there's hardly any parking",
    modelParaphraseVi: "driving to work in the city centre would be a nightmare because there's hardly any parking",
    acceptedAnswers: ["parking"],
    explanationEn: "Hardly any parking in the city centre (plus bad rush-hour traffic).",
    explanationVi: "Hầu như không có parking ở trung tâm (cộng thêm kẹt giờ cao điểm).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Trains to London every ______ minutes",
    questionVi: "Trains to London every ______ minutes",
    modelParaphraseEn: "There's a fast train every 30 minutes which only takes 45 minutes",
    modelParaphraseVi: "There's a fast train every 30 minutes which only takes 45 minutes",
    acceptedAnswers: ["30", "thirty"],
    explanationEn: "Frequency is every 30 minutes. The 45-minute journey time is a distractor.",
    explanationVi: "Tần suất là every 30 minutes. 45 phút là thời gian đi, không phải đáp án.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Poor train service at ______",
    questionVi: "Poor train service at ______",
    modelParaphraseEn: "the train service isn't bad during the week … It's weekends that are a problem",
    modelParaphraseVi: "the train service isn't bad during the week … It's weekends that are a problem",
    acceptedAnswers: ["weekend", "weekends"],
    explanationEn: "Weekday trains are fine and run late; weekends have engineering work.",
    explanationVi: "Tàu ngày thường ổn và chạy muộn; weekends có engineering work.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "New ______ opened recently",
    questionVi: "New ______ opened recently",
    modelParaphraseEn: "a brand new cinema which has only been open a couple of months",
    modelParaphraseVi: "a brand new cinema which has only been open a couple of months",
    acceptedAnswers: ["cinema"],
    explanationEn: "A brand-new cinema opened a couple of months ago. Restaurants and arts centre are extra detail.",
    explanationVi: "Cinema mới mở vài tháng. Restaurants và arts centre chỉ là chi tiết thêm.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "______ has excellent reputation",
    questionVi: "______ has excellent reputation",
    modelParaphraseEn: "the hospital here is one of the best in the country",
    modelParaphraseVi: "the hospital here is one of the best in the country",
    acceptedAnswers: ["hospital"],
    explanationEn: "The hospital is one of the best in the country. Schools are only 'good'.",
    explanationVi: "Hospital là one of the best in the country. Schools chỉ 'good'.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Good ______ on Bridge Street",
    questionVi: "Good ______ on Bridge Street",
    modelParaphraseEn: "I can give you the name of my dentist too in Bridge Street",
    modelParaphraseVi: "I can give you the name of my dentist too in Bridge Street",
    acceptedAnswers: ["dentist"],
    explanationEn: "Her dentist is on Bridge Street — she has gone for years with no problems.",
    explanationVi: "Dentist của cô ấy ở Bridge Street — đi nhiều năm không vấn đề.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Meet Linda on ______ after 5.30 pm",
    questionVi: "Meet Linda on ______ after 5.30 pm",
    modelParaphraseEn: "Either a Tuesday or Thursday is good for me, after 5.30. Thursday's preferable",
    modelParaphraseVi: "Either a Tuesday or Thursday is good for me, after 5.30. Thursday's preferable",
    acceptedAnswers: ["Thursday"],
    explanationEn: "Linda offers Tuesday or Thursday; Matt prefers Thursday because Tuesday he must be home before 6.",
    explanationVi: "Linda rảnh Tuesday hoặc Thursday; Matt chọn Thursday vì Tuesday phải về trước 6.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "In the ______ opposite the station",
    questionVi: "In the ______ opposite the station",
    modelParaphraseEn: "I'll meet you in the cafe outside. You can't miss it. It's opposite the station and next to the museum",
    modelParaphraseVi: "I'll meet you in the cafe outside. You can't miss it. It's opposite the station and next to the museum",
    acceptedAnswers: ["cafe", "café", "Cafe"],
    explanationEn: "Meet in the cafe opposite the station (next to the museum is extra location detail).",
    explanationVi: "Gặp ở cafe đối diện station (next to the museum chỉ là chi tiết vị trí).",
  },
];
