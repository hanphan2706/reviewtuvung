import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to become a volunteer", "I would like to become a volunteer"] },
    { id: "g2", answers: ["I gather you co-ordinate", "I gather you coordinate"] },
    { id: "g3", answers: ["What sort of thing could I do"] },
    { id: "g4", answers: ["The times are pretty flexible"] },
    { id: "g5", answers: ["I'm used to working on a computer", "I am used to working on a computer"] },
    { id: "g6", answers: ["I presume they're computerised", "I presume they are computerised", "I presume they're computerized"] },
    { id: "g7", answers: ["Is the library purpose-built", "Is the library purpose built"] },
    { id: "g8", answers: ["I know a lot of places do"] },
    { id: "g9", answers: ["we're always in need of more drivers", "we are always in need of more drivers"] },
    { id: "g10", answers: ["I'll find out where we need help", "I will find out where we need help"] },
    { id: "g11", answers: ["we do it as a one-off", "we do it as a one off"] },
    { id: "g12", answers: ["we're struggling to find someone", "we are struggling to find someone"] },
    { id: "g13", answers: ["It would take the whole morning"] },
    { id: "g14", answers: ["as he isn't healthy enough to do it himself", "as he is not healthy enough to do it himself"] },
    { id: "g15", answers: ["which is a great way to meet other people"] },
    { id: "g16", answers: ["because of the number of people"] },
    { id: "g17", answers: ["it can be quite a bottleneck"] },
    { id: "g18", answers: ["that's right up my street", "that is right up my street"] },
  ],
  lines: [
    { speaker: "JANE", segments: [{ type: "text", text: "Hello, Jane Fairbanks speaking." }] },
    {
      speaker: "FRANK",
      segments: [
        { type: "text", text: "Oh, good morning. My name's Frank Pritchard. I've just retired and moved to Southoe. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " voluntary work in the village." },
      ],
    },
    { speaker: "JANE", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "FRANK",
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "?" }],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Well, we need help with the village library. We borrow books from the town library, and individuals also donate them. So, one thing you could do is get involved in collecting them – if you've got a car, that is.",
        },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "Yes, that's no problem." }] },
    {
      speaker: "JANE",
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " so we can arrange it to suit you. Another thing is the records that we keep of the books we're given, and those we borrow and need to return to the town library. It would be very useful to have another person to help keep them up to date.",
        },
      ],
    },
    {
      speaker: "FRANK",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " – " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "JANE", segments: [{ type: "text", text: "Oh yes." }] },
    {
      speaker: "FRANK",
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: "? I haven't noticed it when I've walked round the village." },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "No, we simply have the use of a room in the village hall, the West Room. It's on the left as you go in.",
        },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "I must go and have a look inside the hall." }] },
    { speaker: "JANE", segments: [{ type: "text", text: "Yes, it's a nice building." }] },
    {
      speaker: "FRANK",
      segments: [
        { type: "text", text: "Do you run a lunch club in the village for elderly people? " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JANE", segments: [{ type: "text", text: "Yes, we have a very successful club." }] },
    {
      speaker: "FRANK",
      segments: [{ type: "text", text: "I could help with transport, if that's of any use." }],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Ooo definitely. People come to the club from neighbouring villages, and " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "FRANK",
      segments: [
        {
          type: "text",
          text: "And does the club have groups that focus on a particular hobby, too? I could get involved in one or two, particularly if there are any art groups.",
        },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Excellent. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " and get back to you." },
      ],
    },
    {
      speaker: "FRANK",
      segments: [{ type: "text", text: "Fine. What about help for individual residents. Do you arrange that at all?" }],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". In fact, there's Mrs Carroll. She needs a lift to the hospital next week, and " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "When's her appointment?" }] },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "On Tuesday. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "I could do that." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Oh, that would be great. Thank you. And also, next week, we're arranging to have some work done to Mr Selsbury's house before he moves, " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". We've got some people to decorate his kitchen, but if you could do some weeding in his garden, that would be wonderful.",
        },
      ],
    },
    {
      speaker: "FRANK",
      segments: [{ type: "text", text: "OK. I'd enjoy that. And presumably the day and time are flexible." }],
    },
    {
      speaker: "JANE",
      segments: [{ type: "text", text: "Oh yes. Just say when would suit you best, and we'll let Mr Selsbury know." }],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "Good." }] },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "The volunteers group also organises monthly social events, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", of course." },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "So next month, on the 19th of October, we're holding a quiz – a couple of residents are great at planning unusual ones, and we always fill the village hall.",
        },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "That sounds like fun. Can I do anything to help?" }] },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", we need plenty of refreshments for halfway through. So, if you could provide any, we'd be grateful.",
        },
      ],
    },
    {
      speaker: "FRANK",
      segments: [{ type: "text", text: "I'm sure I could. I'll think about what to make, and let you know." }],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Thank you. Then on November the 18th, we're holding a dance, also in the village hall. We've booked a band that specialises in music of the 1930s – they've been before, and we've had a lot of requests to bring them back.",
        },
      ],
    },
    {
      speaker: "FRANK",
      segments: [{ type: "text", text: "I'm not really a dancer, but I'd like to do something to help." }],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Well, we sell tickets in advance, and having an extra person to check them at the door, as people arrive, would be good – " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " if everyone arrives at once!" },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "OK, I'm happy with that." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "We're also arranging a New Year's Eve party. We're expecting that to be a really big event, so instead of the village hall, it'll be held in the Mountfort Hotel.",
        },
      ],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "The …?" }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Mountfort. M-O-U-N-T-F-O-R-T Hotel. It isn't in Southoe itself, but it's only a couple of miles away. The hotel will be providing dinner and we've booked a band. The one thing we haven't got yet is a poster. That isn't something you could do, by any chance, is it?",
        },
      ],
    },
    {
      speaker: "FRANK",
      segments: [
        { type: "text", text: "Well actually, yes. Before I retired I was a graphic designer, so " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JANE",
      segments: [{ type: "text", text: "Oh perfect! I'll give you the details, and then perhaps you could send me a draft …" }],
    },
    { speaker: "FRANK", segments: [{ type: "text", text: "Of course." }] },
  ],
};

export const CAM17_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Help with ______ books (times to be arranged)",
    questionVi: "Help with ______ books (times to be arranged)",
    modelParaphraseEn: "one thing you could do is get involved in collecting them – if you've got a car",
    modelParaphraseVi: "one thing you could do is get involved in collecting them – if you've got a car",
    acceptedAnswers: ["collecting"],
    explanationEn: "Library help is collecting donated and borrowed books; times are flexible.",
    explanationVi: "Việc thư viện là collecting sách tặng/mượn; giờ linh hoạt.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Help needed to keep ______ of books up to date",
    questionVi: "Help needed to keep ______ of books up to date",
    modelParaphraseEn: "the records that we keep of the books we're given … help keep them up to date",
    modelParaphraseVi: "the records that we keep of the books we're given … help keep them up to date",
    acceptedAnswers: ["records"],
    explanationEn: "They need someone to keep the book records up to date (computerised).",
    explanationVi: "Cần người cập nhật records sách (đã tin học hoá).",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Library is in the ______ Room in the village hall",
    questionVi: "Library is in the ______ Room in the village hall",
    modelParaphraseEn: "a room in the village hall, the West Room. It's on the left as you go in",
    modelParaphraseVi: "a room in the village hall, the West Room. It's on the left as you go in",
    acceptedAnswers: ["West"],
    explanationEn: "Not a purpose-built library – it is the West Room of the village hall.",
    explanationVi: "Không phải thư viện riêng – là West Room trong hội trường làng.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Help by providing ______",
    questionVi: "Help by providing ______",
    modelParaphraseEn: "I could help with transport … always in need of more drivers",
    modelParaphraseVi: "I could help with transport … always in need of more drivers",
    acceptedAnswers: ["transport"],
    explanationEn: "Lunch-club help is transport/drivers from neighbouring villages – not the food itself.",
    explanationVi: "Giúp câu lạc bộ ăn trưa bằng transport/lái xe, không phải đồ ăn.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Help with hobbies such as ______",
    questionVi: "Help with hobbies such as ______",
    modelParaphraseEn: "groups that focus on a particular hobby … particularly if there are any art groups",
    modelParaphraseVi: "groups that focus on a particular hobby … particularly if there are any art groups",
    acceptedAnswers: ["art"],
    explanationEn: "The hobby he offers is art groups.",
    explanationVi: "Sở thích ông đề nghị giúp là art.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Taking Mrs Carroll to ______",
    questionVi: "Taking Mrs Carroll to ______",
    modelParaphraseEn: "She needs a lift to the hospital next week … On Tuesday. It would take the whole morning",
    modelParaphraseVi: "She needs a lift to the hospital next week … On Tuesday. It would take the whole morning",
    acceptedAnswers: ["hospital"],
    explanationEn: "One-off help: a lift for Mrs Carroll to hospital on Tuesday.",
    explanationVi: "Việc một lần: đưa Mrs Carroll tới hospital vào Tuesday.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Work in the ______ at Mr Selsbury's house",
    questionVi: "Work in the ______ at Mr Selsbury's house",
    modelParaphraseEn: "if you could do some weeding in his garden, that would be wonderful",
    modelParaphraseVi: "if you could do some weeding in his garden, that would be wonderful",
    acceptedAnswers: ["garden"],
    explanationEn: "Others decorate the kitchen; Frank is asked to weed the garden.",
    explanationVi: "Người khác sơn bếp; Frank được nhờ làm vườn (garden).",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "19 Oct — ______ — Village hall — providing refreshments",
    questionVi: "19 Oct — ______ — Village hall — providing refreshments",
    modelParaphraseEn: "on the 19th of October, we're holding a quiz … we always fill the village hall",
    modelParaphraseVi: "on the 19th of October, we're holding a quiz … we always fill the village hall",
    acceptedAnswers: ["quiz"],
    explanationEn: "19 October event is a quiz; refreshments are the help needed, not the event name.",
    explanationVi: "Sự kiện 19/10 là quiz; refreshments là việc cần giúp, không phải tên sự kiện.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "18 Nov dance — checking ______",
    questionVi: "18 Nov dance — checking ______",
    modelParaphraseEn: "we sell tickets in advance, and having an extra person to check them at the door",
    modelParaphraseVi: "we sell tickets in advance, and having an extra person to check them at the door",
    acceptedAnswers: ["tickets"],
    explanationEn: "Help at the dance is checking tickets at the door (sold in advance).",
    explanationVi: "Việc giúp buổi nhảy là kiểm tickets ở cửa (bán trước).",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "31 Dec New Year's Eve party — designing the ______",
    questionVi: "31 Dec New Year's Eve party — designing the ______",
    modelParaphraseEn: "The one thing we haven't got yet is a poster … I was a graphic designer",
    modelParaphraseVi: "The one thing we haven't got yet is a poster … I was a graphic designer",
    acceptedAnswers: ["poster"],
    explanationEn: "The hotel provides dinner and a band; they still need a poster designed.",
    explanationVi: "Khách sạn lo dinner và band; còn thiếu poster để thiết kế.",
  },
];
