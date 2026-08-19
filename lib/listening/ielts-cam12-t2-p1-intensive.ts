import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["How can I help you"] },
    {
      id: "g2",
      answers: [
        "I'm coming to Kenton for a few days' holiday next month",
        "I am coming to Kenton for a few days' holiday next month",
      ],
    },
    { id: "g3", answers: ["She gave me this number to find out about it"] },
    { id: "g4", answers: ["Oh, that's great", "Oh, that is great"] },
    { id: "g5", answers: ["So could you tell me the programme, please", "So could you tell me the program, please"] },
    {
      id: "g6",
      answers: [
        "People start gathering around 2 o'clock, to get a good place to see from",
        "People start gathering around 2 o'clock to get a good place to see from",
      ],
    },
    {
      id: "g7",
      answers: [
        "I'll make sure I get there early to get a good spot",
        "I will make sure I get there early to get a good spot",
      ],
    },
    { id: "g8", answers: ["The festival will be officially opened by the mayor"] },
    {
      id: "g9",
      answers: [
        "He'll just speak for a few minutes, welcoming everyone to the festival",
        "He will just speak for a few minutes, welcoming everyone to the festival",
      ],
    },
    {
      id: "g10",
      answers: [
        "I don't know if you've heard of her",
        "I do not know if you have heard of her",
        "I don't know if you have heard of her",
      ],
    },
    {
      id: "g11",
      answers: ["so we're celebrating her centenary", "so we are celebrating her centenary"],
    },
    {
      id: "g12",
      answers: [
        "I'm a biologist, so I've always been interested in her",
        "I am a biologist, so I have always been interested in her",
        "I'm a biologist, so I have always been interested in her",
      ],
    },
    {
      id: "g13",
      answers: [
        "You should go to the park to watch, as you'll get the best view from there",
        "You should go to the park to watch, as you will get the best view from there",
      ],
    },
    {
      id: "g14",
      answers: [
        "It makes a change from children and parents, doesn't it",
        "It makes a change from children and parents, does not it",
      ],
    },
    { id: "g15", answers: ["How do you spell the name"] },
    {
      id: "g16",
      answers: [
        "I'm particularly interested in that as I do it as a hobby",
        "I am particularly interested in that as I do it as a hobby",
      ],
    },
    {
      id: "g17",
      answers: [
        "I presume I'll need tickets for that",
        "I presume I will need tickets for that",
      ],
    },
    { id: "g18", answers: ["I hope you enjoy your stay"] },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Good morning, Kenton Festival box office. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, good morning. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and a friend told me there's a festival. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "That's right, the festival begins on the 16th of May and goes on till the 19th.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". I'll be there from the 15th till the 19th. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, on the first day, there's the opening ceremony, in the town centre. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", and the events will start at 2.45, and finish about 5.30." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK, thanks. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". All the town councillors will be there, and of course lots of other people." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Then there'll be a performance by a band. Most years we have a children's choir, but this year the local army cadets offered to perform, and they're very good.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "After that, a community group from the town will perform a play they've written themselves, just a short one. It's about Helen Tungate. ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "I certainly have. She was a scientist years ago." }],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "That's right. She was born in Kenton exactly 100 years ago, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", I didn't realise she came from Kenton." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes. Well, all that will take place in the afternoon, and later, as the sun sets, there'll be a firework display. ",
        },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", and the display takes place on the opposite side of the river. It's always one of the most popular events in the festival.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Sounds great." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And what's happening on the other days?" }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "There are several events that go on the whole time. For example, the students of the art college have produced a number of videos, all connected with relationships between children and their grandparents.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "That sounds interesting. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Exactly. Because the art college is in use for classes, throughout the festival, the videos are being shown in Handsworth House.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "gap", gapId: "g15" }, { type: "text", text: "?" }],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "H-A-N-D-S-W-O-R-T-H. Handsworth House. It's close to the Town Hall." }],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "Now let me see, what else can I tell you about?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Are there any displays of ballet dancing? " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "There isn't any ballet, I'm afraid, but there'll be a demonstration of traditional dances from all round the country.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Oh, that'd be nice. Where's that being held?" }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "It's in the market in the town centre - the outdoor one, not the covered market. And it's on at 2 and 5 every afternoon of the festival, apart from the first day.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Lovely. I'm interested in all kinds of dancing, so I'm sure I'll enjoy that!",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Mmm. I'm sure you will." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And I'd really like to go to some concerts, if there are any." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, there are several. Three performed by professionals, and one by local children." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "And where is it being held?" }] },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "It's in the library, which is in Part Street. On the 18th, at 6.30 in the evening." }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, you can book online, or you can buy them when you arrive in Kenton, either at the festival box office, or from any shops displaying our logo in the windows.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well, I think that'll keep me busy for the whole of my stay in Kenton. Thank you so much for all your help.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "You're welcome. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Thank you. Goodbye." }] },
  ],
};

export const CAM12_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Opening ceremony (first day): In town centre, starting at ______",
    questionVi: "Opening ceremony (first day): In town centre, starting at ______",
    modelParaphraseEn: "People start gathering around 2 o'clock … and the events will start at 2.45, and finish about 5.30",
    modelParaphraseVi: "People start gathering around 2 o'clock … and the events will start at 2.45, and finish about 5.30",
    acceptedAnswers: ["2.45", "2:45", "14.45", "14:45"],
    explanationEn: "People gather around 2.00 to get a place; the events themselves start at 2.45 (not 5.30, which is the finish time).",
    explanationVi: "Người ta tụ tập khoảng 2.00 để chiếm chỗ; sự kiện bắt đầu lúc 2.45 (5.30 là giờ kết thúc).",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "A ______ will perform",
    questionVi: "A ______ will perform",
    modelParaphraseEn: "Then there'll be a performance by a band. Most years we have a children's choir, but this year the local army cadets offered to perform",
    modelParaphraseVi: "Then there'll be a performance by a band. Most years we have a children's choir, but this year the local army cadets offered to perform",
    acceptedAnswers: ["band"],
    explanationEn: "The performance is by a band. The children's choir is what they usually have; army cadets offered to perform this year, but the notes need band.",
    explanationVi: "Phần trình diễn là by a band. Children's choir là mọi năm; army cadets đề nghị năm nay, nhưng đáp án notes là band.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Performance of a ______ about Helen Tungate",
    questionVi: "Performance of a ______ about Helen Tungate",
    modelParaphraseEn: "a community group from the town will perform a play they've written themselves, just a short one. It's about Helen Tungate",
    modelParaphraseVi: "a community group from the town will perform a play they've written themselves, just a short one. It's about Helen Tungate",
    acceptedAnswers: ["play"],
    explanationEn: "A short play they have written themselves, about Helen Tungate.",
    explanationVi: "Một play ngắn do họ tự viết, về Helen Tungate.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Helen Tungate (a ______)",
    questionVi: "Helen Tungate (a ______)",
    modelParaphraseEn: "She was a scientist years ago",
    modelParaphraseVi: "She was a scientist years ago",
    acceptedAnswers: ["scientist"],
    explanationEn: "Helen Tungate was a scientist. The caller is a biologist; that is not Tungate's job.",
    explanationVi: "Helen Tungate là scientist. Người gọi là biologist; đó không phải nghề của Tungate.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Evening fireworks display situated across the ______",
    questionVi: "Evening fireworks display situated across the ______",
    modelParaphraseEn: "the display takes place on the opposite side of the river",
    modelParaphraseVi: "the display takes place on the opposite side of the river",
    acceptedAnswers: ["river"],
    explanationEn: "Watch from the park for the best view; the fireworks are on the opposite side of the river.",
    explanationVi: "Xem từ park để có view đẹp nhất; pháo hoa ở phía bên kia river.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Video about relationships that children have with their ______",
    questionVi: "Video about relationships that children have with their ______",
    modelParaphraseEn: "videos, all connected with relationships between children and their grandparents",
    modelParaphraseVi: "videos, all connected with relationships between children and their grandparents",
    acceptedAnswers: ["grandparents"],
    explanationEn: "The videos are about children and grandparents, not parents (that is the contrast).",
    explanationVi: "Video về children and grandparents, không phải parents (đó là điểm đối lập).",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Venue: ______ House",
    questionVi: "Venue: ______ House",
    modelParaphraseEn: "the videos are being shown in Handsworth House. H-A-N-D-S-W-O-R-T-H. It's close to the Town Hall",
    modelParaphraseVi: "the videos are being shown in Handsworth House. H-A-N-D-S-W-O-R-T-H. It's close to the Town Hall",
    acceptedAnswers: ["Handsworth"],
    explanationEn: "Spelled H-A-N-D-S-W-O-R-T-H. The art college is in use for classes, so the venue is Handsworth House, near the Town Hall.",
    explanationVi: "Đánh vần H-A-N-D-S-W-O-R-T-H. Art college đang dùng cho lớp, nên venue là Handsworth House, gần Town Hall.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Performance of ______ dances",
    questionVi: "Performance of ______ dances",
    modelParaphraseEn: "there'll be a demonstration of traditional dances from all round the country",
    modelParaphraseVi: "there'll be a demonstration of traditional dances from all round the country",
    acceptedAnswers: ["traditional"],
    explanationEn: "No ballet; instead a demonstration of traditional dances from around the country.",
    explanationVi: "Không có ballet; thay vào đó là traditional dances từ khắp cả nước.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Venue: the ______ market in the town centre",
    questionVi: "Venue: the ______ market in the town centre",
    modelParaphraseEn: "It's in the market in the town centre - the outdoor one, not the covered market",
    modelParaphraseVi: "It's in the market in the town centre - the outdoor one, not the covered market",
    acceptedAnswers: ["outdoor"],
    explanationEn: "The outdoor market, not the covered one. Times: 2 and 5 every afternoon except the first day.",
    explanationVi: "Outdoor market, không phải covered. Giờ: 2 và 5 mỗi buổi chiều trừ ngày đầu.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Tickets available online, from festival box office and from shops which have the festival ______ in their windows",
    questionVi: "Tickets available online, from festival box office and from shops which have the festival ______ in their windows",
    modelParaphraseEn: "book online, or … from any shops displaying our logo in the windows",
    modelParaphraseVi: "book online, or … from any shops displaying our logo in the windows",
    acceptedAnswers: ["logo"],
    explanationEn: "Tickets online, at the festival box office, or shops displaying the festival logo.",
    explanationVi: "Vé online, tại festival box office, hoặc cửa hàng trưng logo lễ hội.",
  },
];
