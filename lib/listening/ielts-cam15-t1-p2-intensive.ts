import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I hope to interest you in what we have to offer"] },
    { id: "g2", answers: ["we believe in the importance of the personal touch"] },
    {
      id: "g3",
      answers: [
        "we don't aim to compete with other companies on the number of customers",
        "we do not aim to compete with other companies on the number of customers",
      ],
    },
    {
      id: "g4",
      answers: ["which we've got to know extremely well", "which we have got to know extremely well"],
    },
    { id: "g5", answers: ["This is a fascinating island in the Irish Sea"] },
    { id: "g6", answers: ["Some people prefer to fly from Luton instead"] },
    { id: "g7", answers: ["another popular option is to go by train to Liverpool and take a ferry from there"] },
    { id: "g8", answers: ["we try to make booking our holidays as simple and fair as possible"] },
    {
      id: "g9",
      answers: ["the price is the same whether you book six months in advance or at the last minute"],
    },
    {
      id: "g10",
      answers: [
        "there's no supplement for single rooms in hotels",
        "there is no supplement for single rooms in hotels",
      ],
    },
    { id: "g11", answers: ["for a small administrative fee"] },
    { id: "g12", answers: ["followed by dinner in the hotel"] },
    {
      id: "g13",
      answers: ["there's usually plenty of activity going on", "there is usually plenty of activity going on"],
    },
    {
      id: "g14",
      answers: [
        "It's claimed that this is the world's oldest parliament that's still functioning",
        "It is claimed that this is the world's oldest parliament that is still functioning",
      ],
    },
    { id: "g15", answers: ["This begins with a leisurely ride along the promenade"] },
    { id: "g16", answers: ["Then you board an electric train"] },
    { id: "g17", answers: ["or you might just want to take it easy in Douglas"] },
    {
      id: "g18",
      answers: ["Now I'd like to tell you", "Now I would like to tell you"],
    },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Good morning." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My name's Erica Matthews, and I'm the owner of Matthews Island Holidays, a company set up by my parents.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Thank you for coming to this presentation, in which " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We're a small, family-run company, and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", so " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What we do is build on our many years' experience – more than almost any other rail holiday company – to ensure we provide perfect holidays in a small number of destinations, ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "I'll start with our six-day Isle of Man holiday." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", with Wales to the south, England to the east, Scotland to the north and Northern Ireland to the west.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Our holiday starts in Heysham, where your tour manager will meet you, then you'll travel by ferry to the Isle of Man.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You have five nights in the hotel, and the price covers five breakfasts and dinners, and lunch on the three days when there are organised trips: day four is free, and most people have lunch in a café or restaurant in Douglas.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The price of the holiday includes the ferry to the Isle of Man, all travel on the island, the hotel, and the meals I've mentioned.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Incidentally, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", so unlike with many companies, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you make a booking then need to change the start date, for example because of illness, you're welcome to change to an alternative date or a different tour, ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "OK, so what does the holiday consist of?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, on day one you'll arrive in time for a short introduction by your tour manager, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The dining room looks out at the river, close to where it flows into the harbour, and " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On day two you'll take the coach to the small town of Peel, on the way calling in at the Tynwald Exhibition.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Isle of Man isn't part of the United Kingdom, and it has its own parliament, called Tynwald.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", and that it dates back to 979." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, the earliest surviving reference to it is from 1422, so perhaps it isn't quite as old as it claims!",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Day three we have a trip to the mountain Snaefell." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: " in Douglas in a horse-drawn tram." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " which takes you to the fishing village of Laxey." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "From there it's an eight-kilometre ride in the Snaefell Mountain Railway to the top.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lunch will be in the café, giving you spectacular views of the island.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Day four is free for you to explore, using the pass which we'll give you.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So you won't have to pay for travel on local transport, or for entrance to the island's heritage sites.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " and perhaps do a little light shopping." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The last full day, day five, is for some people the highlight of the holiday, with a ride on the steam railway, from Douglas to Port Erin.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After some time to explore, a coach will take you to the headland that overlooks the Calf of Man, a small island just off the coast.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "From there you continue to Castletown, which used to be the capital of the Isle of Man, and its mediaeval castle.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And on day six it's back to the ferry – or the airport, if you flew to the island – and time to go home.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: " …" }],
    },
  ],
};

export const CAM15_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "According to the speaker, the company A has been in business longer than most competitors / B arranges holidays to more destinations / C has more customers",
    questionVi: "According to the speaker, the company A has been in business longer than most competitors / B arranges holidays to more destinations / C has more customers",
    modelParaphraseEn: "build on our many years' experience – more than almost any other rail holiday company … we don't aim to compete … on the number of customers … a small number of destinations",
    modelParaphraseVi: "build on our many years' experience – more than almost any other rail holiday company … we don't aim to compete … on the number of customers … a small number of destinations",
    acceptedAnswers: ["A", "has been in business for longer than most of its competitors"],
    explanationEn: "A = longer in business than most competitors. They do not compete on customer numbers and only cover a small number of destinations.",
    explanationVi: "A = hoạt động lâu hơn hầu hết đối thủ. Không cạnh tranh số khách; chỉ một số ít điểm đến.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Where can customers meet the tour manager before travelling to the Isle of Man? A Liverpool / B Heysham / C Luton",
    questionVi: "Where can customers meet the tour manager before travelling to the Isle of Man? A Liverpool / B Heysham / C Luton",
    modelParaphraseEn: "Our holiday starts in Heysham, where your tour manager will meet you, then you'll travel by ferry",
    modelParaphraseVi: "Our holiday starts in Heysham, where your tour manager will meet you, then you'll travel by ferry",
    acceptedAnswers: ["B", "Heysham"],
    explanationEn: "B = Heysham (meet the tour manager). Luton is flying; Liverpool is train then ferry – neither is the meeting point.",
    explanationVi: "B = Heysham (gặp tour manager). Luton là bay; Liverpool là tàu rồi phà – không phải điểm gặp.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "How many lunches are included in the price of the holiday? A three / B four / C five",
    questionVi: "How many lunches are included in the price of the holiday? A three / B four / C five",
    modelParaphraseEn: "the price covers five breakfasts and dinners, and lunch on the three days when there are organised trips: day four is free",
    modelParaphraseVi: "the price covers five breakfasts and dinners, and lunch on the three days when there are organised trips: day four is free",
    acceptedAnswers: ["A", "three"],
    explanationEn: "A = three lunches (on organised-trip days). Five is breakfasts/dinners; day four lunch is not included.",
    explanationVi: "A = three bữa trưa (ngày có trip). Five là breakfasts/dinners; ngày 4 không gồm lunch.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Customers have to pay extra for A a larger room / B booking at short notice / C transferring to another date",
    questionVi: "Customers have to pay extra for A a larger room / B booking at short notice / C transferring to another date",
    modelParaphraseEn: "the price is the same whether you book six months in advance or at the last minute, and there's no supplement for single rooms … change to an alternative date … for a small administrative fee",
    modelParaphraseVi: "the price is the same whether you book six months in advance or at the last minute, and there's no supplement for single rooms … change to an alternative date … for a small administrative fee",
    acceptedAnswers: ["C", "transferring to another date"],
    explanationEn: "C = transferring to another date (small administrative fee). No extra for last-minute booking or single rooms.",
    explanationVi: "C = chuyển sang ngày khác (phí hành chính nhỏ). Đặt sát ngày và phòng đơn không phụ thu.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Hotel dining room has view of the ______",
    questionVi: "Hotel dining room has view of the ______",
    modelParaphraseEn: "The dining room looks out at the river, close to where it flows into the harbour",
    modelParaphraseVi: "The dining room looks out at the river, close to where it flows into the harbour",
    acceptedAnswers: ["river"],
    explanationEn: "The dining room looks out at the river (near the harbour).",
    explanationVi: "Phòng ăn nhìn ra river (gần harbour).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Tynwald may have been founded in ______ not 979",
    questionVi: "Tynwald may have been founded in ______ not 979",
    modelParaphraseEn: "dates back to 979. However, the earliest surviving reference to it is from 1422",
    modelParaphraseVi: "dates back to 979. However, the earliest surviving reference to it is from 1422",
    acceptedAnswers: ["1422"],
    explanationEn: "Claimed 979; earliest surviving reference is 1422.",
    explanationVi: "Họ tuyên bố 979; tài liệu sớm nhất còn lại là 1422.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "train to the ______ of Snaefell",
    questionVi: "train to the ______ of Snaefell",
    modelParaphraseEn: "an eight-kilometre ride in the Snaefell Mountain Railway to the top",
    modelParaphraseVi: "an eight-kilometre ride in the Snaefell Mountain Railway to the top",
    acceptedAnswers: ["top"],
    explanationEn: "The mountain railway goes to the top of Snaefell.",
    explanationVi: "Tàu leo núi đi lên top of Snaefell.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Company provides a ______ for local transport and heritage sites",
    questionVi: "Company provides a ______ for local transport and heritage sites",
    modelParaphraseEn: "using the pass which we'll give you. So you won't have to pay for travel on local transport, or for entrance to the island's heritage sites",
    modelParaphraseVi: "using the pass which we'll give you. So you won't have to pay for travel on local transport, or for entrance to the island's heritage sites",
    acceptedAnswers: ["pass"],
    explanationEn: "A pass covers local transport and heritage-site entrance.",
    explanationVi: "Pass gồm local transport và vào heritage sites.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Take the ______ railway train from Douglas to Port Erin",
    questionVi: "Take the ______ railway train from Douglas to Port Erin",
    modelParaphraseEn: "a ride on the steam railway, from Douglas to Port Erin",
    modelParaphraseVi: "a ride on the steam railway, from Douglas to Port Erin",
    acceptedAnswers: ["steam"],
    explanationEn: "Day five: steam railway from Douglas to Port Erin.",
    explanationVi: "Ngày 5: steam railway từ Douglas đến Port Erin.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Castletown – former ______ has old castle",
    questionVi: "Castletown – former ______ has old castle",
    modelParaphraseEn: "Castletown, which used to be the capital of the Isle of Man, and its mediaeval castle",
    modelParaphraseVi: "Castletown, which used to be the capital of the Isle of Man, and its mediaeval castle",
    acceptedAnswers: ["capital"],
    explanationEn: "Castletown used to be the capital; it has a medieval castle.",
    explanationVi: "Castletown từng là capital; có lâu đài trung cổ.",
  },
];
