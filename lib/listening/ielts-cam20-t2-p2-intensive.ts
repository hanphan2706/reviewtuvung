import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm delighted you're all interested", "I am delighted you are all interested", "I'm delighted you are all interested", "I am delighted you're all interested"] },
    { id: "g2", answers: ["a sense of community"] },
    { id: "g3", answers: ["I'll mention just a few of", "I will mention just a few of"] },
    { id: "g4", answers: ["wearing our volunteer T-shirt"] },
    { id: "g5", answers: ["You'd be surprised how many people", "You would be surprised how many people"] },
    { id: "g6", answers: ["sports clubs or gardeners' associations"] },
    { id: "g7", answers: ["send in articles"] },
    { id: "g8", answers: ["It's free to residents", "It is free to residents"] },
    { id: "g9", answers: ["That's the responsibility of", "That is the responsibility of"] },
    { id: "g10", answers: ["welcome the chance"] },
    { id: "g11", answers: ["as many people as possible"] },
    { id: "g12", answers: ["some practical matters"] },
    { id: "g13", answers: ["a large number of volunteers"] },
    { id: "g14", answers: ["a good idea"] },
    { id: "g15", answers: ["at short notice"] },
    { id: "g16", answers: ["a week's training"] },
    { id: "g17", answers: ["what extra support you need"] },
    { id: "g18", answers: ["sign up"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Good morning everyone. I'm Steve Wainwright from Elmley Town Council and I organise the town's volunteer scheme. ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " in joining the scheme." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Our volunteers help to create " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " among the many people who live in our historic town of Elmley and make residents and visitors feel welcome at local events.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "First, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " the activities that volunteers carry out." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One is to walk around the town centre streets " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". Tourists often ask how to get to a particular shop, and they might also be grateful for recommendations about what to visit.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The town holds a large number of concerts each year and part of the volunteers' role is to get everyone in the audience to the right place as smoothly as possible. ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " buy tickets, then don't check them, and head for the wrong section of the hall.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Volunteers may get involved with community groups, such as " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". Here, the volunteers talk about how groups can help each other. For instance, a writing group might want to travel to another town to hear a talk by a well-known author, but may not know that another club has a coach they could travel in.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The town produces a monthly magazine, and anyone who lives in the town can " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " and is paid for by local businesses. " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " the council's advertising department. We depend on volunteers though to find out what people think of events they've attended and any suggestions they have for the future. The volunteers then send a summary to the editors.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are a number of clubs for retired people and every year the council arranges lunch for all the members. The volunteers welcome the guests and when everyone's sitting down and relaxing after the meal, some volunteers put on a show. Usually around half an hour of songs and short plays, the club members really ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " to chat to the volunteers at these events." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The town council has a website, of course, and volunteers are asked to help by making sure residents know about it. It's updated every day with information about future activities and we want ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " to use it." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, now you know some of the things our volunteers do, I'll go on to " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you probably know, the town arranges three major festivals every year, and they all depend on " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". The book festival lasts three days, and uses several venues which all need volunteers. More are needed for the music festival because that lasts a whole week, and even more help is required for the science festival, even though it's only two days long. It involves quite a lot of venues, though.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It's " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " to help at the festival you're most interested in, because you can attend most of the events for free. We try to use volunteers who are flexible, though, because some festival events are held outdoors and the weather may affect the size of the audience and even whether the event can take place so there can be changes ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". What's essential though is being able to get on well with other people and also to deal with someone who's behaving badly, as occasionally happens.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Our plan is to get you all working in September, after " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " starting on the 2nd, so we'll be timetabling you for duties the following week from the 9th onward. Later in the week beginning September 23rd we have a chat with each of you to find out how you feel about being a volunteer and ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As a thank you to the volunteers we arrange an annual event. In recent years we've had a party in the Town Hall and last year a barbecue in Chamber Park. Our forthcoming event is a trip along the canal from here to Dewhurst and back. It's on Saturday, September the 28th. And if you'd like to attend, you can ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " once you start work. Now, this is the Volunteer's T-shirt." },
      ],
    },
  ],
};

export const CAM20_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "walking around the town centre — D giving advice to visitors",
    questionVi: "đi bộ quanh trung tâm thị trấn — D tư vấn cho du khách",
    modelParaphraseEn: "Tourists often ask how to get to a particular shop … grateful for recommendations about what to visit",
    modelParaphraseVi: "Tourists often ask how to get to a particular shop … grateful for recommendations about what to visit",
    acceptedAnswers: ["D", "giving advice to visitors", "recommendations about what to visit"],
    explanationEn: "D = advice to visitors (directions and what to visit). Not selling tickets or introducing speakers.",
    explanationVi: "D = tư vấn du khách (chỉ đường và nên thăm gì). Không phải bán vé hay giới thiệu diễn giả.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "helping at concerts — I helping people find their seats",
    questionVi: "hòa nhạc — I giúp khán giả tìm chỗ ngồi",
    modelParaphraseEn: "get everyone in the audience to the right place … head for the wrong section of the hall",
    modelParaphraseVi: "get everyone in the audience to the right place … head for the wrong section of the hall",
    acceptedAnswers: ["I", "helping people find their seats", "right place", "wrong section of the hall"],
    explanationEn: "I = find seats / the right place in the hall. People buy tickets but do not check them.",
    explanationVi: "I = tìm chỗ ngồi / đúng khu trong hội trường. Người ta mua vé nhưng không kiểm tra.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "community groups — H encouraging cooperation between local organisations",
    questionVi: "nhóm cộng đồng — H khuyến khích hợp tác giữa tổ chức địa phương",
    modelParaphraseEn: "the volunteers talk about how groups can help each other",
    modelParaphraseVi: "the volunteers talk about how groups can help each other",
    acceptedAnswers: ["H", "encouraging cooperation", "help each other"],
    explanationEn: "H = groups helping each other (e.g. sharing a coach). Not contacting businesses.",
    explanationVi: "H = các nhóm giúp nhau (ví dụ dùng chung xe). Không phải liên hệ doanh nghiệp.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "helping with a magazine — E collecting feedback on events",
    questionVi: "tạp chí — E thu thập phản hồi về sự kiện",
    modelParaphraseEn: "find out what people think of events they've attended and any suggestions they have for the future",
    modelParaphraseVi: "find out what people think of events they've attended and any suggestions they have for the future",
    acceptedAnswers: ["E", "collecting feedback", "what people think of events"],
    explanationEn: "E = collect feedback and send a summary to the editors. Local businesses paying is the advertising department's job (not C).",
    explanationVi: "E = thu thập phản hồi rồi gửi tóm tắt cho biên tập. Doanh nghiệp trả tiền thuộc phòng quảng cáo (không phải C).",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "lunches for retired people — A providing entertainment",
    questionVi: "bữa trưa người về hưu — A cung cấp giải trí",
    modelParaphraseEn: "some volunteers put on a show … half an hour of songs and short plays",
    modelParaphraseVi: "some volunteers put on a show … half an hour of songs and short plays",
    acceptedAnswers: ["A", "providing entertainment", "put on a show", "songs and short plays"],
    explanationEn: "A = a show of songs and short plays. Welcoming guests / chatting is not introducing speakers (G).",
    explanationVi: "A = chương trình hát và tiểu phẩm. Đón khách / trò chuyện không phải giới thiệu diễn giả (G).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "helping with the website — B providing publicity about a council service",
    questionVi: "website — B quảng bá dịch vụ của hội đồng",
    modelParaphraseEn: "making sure residents know about it … updated every day with information about future activities",
    modelParaphraseVi: "making sure residents know about it … updated every day with information about future activities",
    acceptedAnswers: ["B", "providing publicity", "making sure residents know about it"],
    explanationEn: "B = publicise the council website so as many people as possible use it.",
    explanationVi: "B = quảng bá website hội đồng để càng nhiều người dùng càng tốt.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Largest number of volunteers: A music festival / B science festival / C book festival",
    questionVi: "Cần nhiều TNV nhất: A lễ hội nhạc / B khoa học / C sách",
    modelParaphraseEn: "even more help is required for the science festival, even though it's only two days long",
    modelParaphraseVi: "even more help is required for the science festival, even though it's only two days long",
    acceptedAnswers: ["B", "science festival", "even more help is required"],
    explanationEn: "B = science festival needs the most help (many venues). Music lasts a week (more than books) but science needs even more.",
    explanationVi: "B = lễ hội khoa học cần nhiều nhất (nhiều địa điểm). Nhạc dài cả tuần (hơn sách) nhưng khoa học còn cần hơn.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Most important requirement: A interpersonal skills / B personal interest / C flexibility",
    questionVi: "Yêu cầu quan trọng nhất: A kỹ năng giao tiếp / B sở thích / C linh hoạt",
    modelParaphraseEn: "What's essential though is being able to get on well with other people and also to deal with someone who's behaving badly",
    modelParaphraseVi: "What's essential though is being able to get on well with other people and also to deal with someone who's behaving badly",
    acceptedAnswers: ["A", "interpersonal skills", "get on well with other people"],
    explanationEn: "A = interpersonal skills are essential. Interest (free events) and flexibility (weather) are useful but not the key requirement.",
    explanationVi: "A = kỹ năng giao tiếp là essential. Sở thích (xem miễn phí) và linh hoạt (thời tiết) hữu ích nhưng không phải yêu cầu chính.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "New volunteers start working in the week beginning: A 2 September / B 9 September / C 23 September",
    questionVi: "Bắt đầu làm việc tuần: A 2/9 / B 9/9 / C 23/9",
    modelParaphraseEn: "a week's training starting on the 2nd … timetabling you for duties the following week from the 9th onward",
    modelParaphraseVi: "a week's training starting on the 2nd … timetabling you for duties the following week from the 9th onward",
    acceptedAnswers: ["B", "9 September", "from the 9th onward"],
    explanationEn: "B = duties from 9 September. The 2nd is training; the 23rd is a follow-up chat.",
    explanationVi: "B = trực từ 9 tháng 9. Mùng 2 là huấn luyện; 23 là buổi trao đổi sau.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Next annual event: A a boat trip / B a barbecue / C a party",
    questionVi: "Sự kiện tri ân tiếp theo: A đi thuyền / B barbecue / C tiệc",
    modelParaphraseEn: "Our forthcoming event is a trip along the canal from here to Dewhurst and back",
    modelParaphraseVi: "Our forthcoming event is a trip along the canal from here to Dewhurst and back",
    acceptedAnswers: ["A", "a boat trip", "trip along the canal"],
    explanationEn: "A = canal trip (boat). The Town Hall party and Chamber Park barbecue were in recent years / last year.",
    explanationVi: "A = đi thuyền trên kênh. Tiệc Town Hall và barbecue Chamber Park là những năm gần đây / năm ngoái.",
  },
];
