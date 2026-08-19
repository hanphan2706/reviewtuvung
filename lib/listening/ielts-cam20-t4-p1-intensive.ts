import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I seem to remember you had"] },
    { id: "g2", answers: ["I've no idea where to take them", "I have no idea where to take them"] },
    { id: "g3", answers: ["There wouldn't be room", "There would not be room"] },
    { id: "g4", answers: ["so nice and central"] },
    { id: "g5", answers: ["Oh, that's not too bad", "Oh, that is not too bad"] },
    { id: "g6", answers: ["Those bus tours are quite expensive"] },
    { id: "g7", answers: ["It gives you a much better feel for the city"] },
    { id: "g8", answers: ["The whole trip takes half a day"] },
    { id: "g9", answers: ["That's a really good idea", "That is a really good idea"] },
    { id: "g10", answers: ["And it won't be so crowded then", "And it will not be so crowded then"] },
    { id: "g11", answers: ["That's a shame", "That is a shame"] },
    { id: "g12", answers: ["I'll mention that to my cousin", "I will mention that to my cousin"] },
    { id: "g13", answers: ["there'll be loads of choices for the kids too", "there will be loads of choices for the kids too"] },
    { id: "g14", answers: ["It's all going to need careful planning", "It is all going to need careful planning"] },
    { id: "g15", answers: ["No need to spend a fortune"] },
    { id: "g16", answers: ["It's always a family-friendly event", "It is always a family-friendly event"] },
    { id: "g17", answers: ["I've been meaning to do that for ages", "I have been meaning to do that for ages"] },
    { id: "g18", answers: ["it's really worth the effort", "it is really worth the effort"] },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Sandra, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " some family visitors staying with you recently." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah that's right. My brother and his family were here a couple of months ago.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK, good. Well, I wanted to ask for your advice. I got my cousin and her family visiting next month and as I don't have kids, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. What about accommodation? Are they going to stay with you in your flat?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "No, thankfully. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". My cousin wants me to recommend a hotel. Do you know anywhere?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes, I do actually. I always recommend people stay at the King's Hotel.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Where's that near?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "It's about a five minutes walk from Murray Station, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". It's actually on George Street." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Oh yes, I know." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I think they're on quite a tight budget, so how much roughly is it to stay there? If you book a family room, it's about £125 per night. My brother paid for two double rooms in the end, and I think that was around £95 for each room.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "So how old are your cousins' kids?" }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Twelve and nine. So I want to organise some trips while they're here. I was thinking of doing a bus tour of the city centre, as none of them have been here before.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". I think it's better to do a walking tour. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". There's one that starts from Colton Square. It takes a couple of hours and doesn't cost that much.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Sounds good. I'll look that up. Thanks." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "If the weather's nice, one thing you could do is visit the old fort. You could get there by boat. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". I'd like to do that myself. And if the weather's bad I was thinking they could go to the Science Museum. But maybe they could do that when I'm at work.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Yeah, don't forget it's closed on Mondays." }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "They're here from Saturday for four nights so Tuesday would be best I think.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". Saturdays are terrible. I took my kids to the exhibition on old computers there and it was far too crowded. I wanted to go back but it's finished now.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". My cousin's kids would have enjoyed that." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "There's another one starting soon on space, which looks really good too.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "OK, well, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Have you thought about where to take them to eat?" }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Well, I really like all the food stalls at Clacton Market. My cousin's vegetarian. I know it's one of the best places for that kind of food.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Definitely, and " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". You need to get there quite early, though. At the weekend, most of the stores stop serving lunch at 2.30.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Good point. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". My cousin said she'd love to take the kids to a show at the theatre, but tickets are so expensive.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I know. But you can get some good deals if you book online with Bargain Tickets for the following day. On some seats there's a 75% discount.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Really. I must try and get some." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yeah. There are lots of things you can do for free as well. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Like what?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "They're coming next month, right? Well, check and see if it's the same weekend as the Roots Music Festival in Blakewell Gardens.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "R-O-O-T-S?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yeah, check it out online. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " and there's no entry charge." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "That sounds perfect." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "And if you're in Blakewell Gardens, climb Telegraph Hill. You'll be able to look right down on the port. Everyone's always really impressed because it's so huge.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh yeah, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". I've heard the view's amazing." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Well, that's given me loads of ideas. Thanks so much." }],
    },
  ],
};

export const CAM20_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "______ Hotel on George Street",
    questionVi: "______ Hotel on George Street",
    modelParaphraseEn: "I always recommend people stay at the King's Hotel … It's actually on George Street",
    modelParaphraseVi: "I always recommend people stay at the King's Hotel … It's actually on George Street",
    acceptedAnswers: ["Kings", "King's"],
    explanationEn: "Sandra always recommends the King's Hotel, a five-minute walk from Murray Station on George Street.",
    explanationVi: "Sandra luôn gợi ý King's Hotel, đi bộ năm phút từ Murray Station, trên George Street.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "cost of family room per night: £ ______ (approx.)",
    questionVi: "cost of family room per night: £ ______ (approx.)",
    modelParaphraseEn: "If you book a family room, it's about £125 per night",
    modelParaphraseVi: "If you book a family room, it's about £125 per night",
    acceptedAnswers: ["125", "one hundred and twenty-five", "one hundred twenty-five"],
    explanationEn: "A family room is about £125. Two doubles were around £95 each — that is not the family-room price.",
    explanationVi: "Phòng gia đình khoảng £125. Hai phòng đôi khoảng £95 mỗi phòng — không phải giá family room.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "a ______ tour of the city centre (starts in Carlton Square)",
    questionVi: "a ______ tour of the city centre (starts in Carlton Square)",
    modelParaphraseEn: "Those bus tours are quite expensive. I think it's better to do a walking tour … starts from Colton Square",
    modelParaphraseVi: "Those bus tours are quite expensive. I think it's better to do a walking tour … starts from Colton Square",
    acceptedAnswers: ["walking"],
    explanationEn: "Reject the bus tour as expensive; she recommends a walking tour of the centre.",
    explanationVi: "Tour xe buýt đắt; cô gợi ý walking tour quanh trung tâm.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "a trip by ______ to the old fort",
    questionVi: "a trip by ______ to the old fort",
    modelParaphraseEn: "visit the old fort. You could get there by boat. The whole trip takes half a day",
    modelParaphraseVi: "visit the old fort. You could get there by boat. The whole trip takes half a day",
    acceptedAnswers: ["boat"],
    explanationEn: "In good weather, reach the old fort by boat — half a day.",
    explanationVi: "Trời đẹp thì tới pháo đài cổ bằng boat — mất nửa ngày.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Science Museum — best day to visit: ______",
    questionVi: "Science Museum — best day to visit: ______",
    modelParaphraseEn: "don't forget it's closed on Mondays … They're here from Saturday for four nights so Tuesday would be best",
    modelParaphraseVi: "don't forget it's closed on Mondays … They're here from Saturday for four nights so Tuesday would be best",
    acceptedAnswers: ["Tuesday"],
    explanationEn: "Closed Mondays; Saturday is too crowded. Four nights from Saturday makes Tuesday the best day.",
    explanationVi: "Đóng cửa thứ Hai; thứ Bảy quá đông. Ở bốn đêm từ thứ Bảy nên Tuesday là ngày tốt nhất.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "see the exhibition about ______ which opens soon",
    questionVi: "see the exhibition about ______ which opens soon",
    modelParaphraseEn: "There's another one starting soon on space, which looks really good too",
    modelParaphraseVi: "There's another one starting soon on space, which looks really good too",
    acceptedAnswers: ["space"],
    explanationEn: "The old-computers exhibition has finished; the new one is on space.",
    explanationVi: "Triển lãm máy tính cũ đã hết; triển lãm mới là về space.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Clacton Market: good for ______ food",
    questionVi: "Clacton Market: good for ______ food",
    modelParaphraseEn: "My cousin's vegetarian. I know it's one of the best places for that kind of food",
    modelParaphraseVi: "My cousin's vegetarian. I know it's one of the best places for that kind of food",
    acceptedAnswers: ["vegetarian"],
    explanationEn: "Clacton Market is strong for vegetarian food — and there are lots of choices for the kids too.",
    explanationVi: "Chợ Clacton hợp vegetarian — và cũng nhiều lựa chọn cho trẻ.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "need to have lunch before ______ p.m.",
    questionVi: "need to have lunch before ______ p.m.",
    modelParaphraseEn: "You need to get there quite early … most of the stores stop serving lunch at 2.30",
    modelParaphraseVi: "You need to get there quite early … most of the stores stop serving lunch at 2.30",
    acceptedAnswers: ["2.30", "2:30", "two thirty"],
    explanationEn: "Weekend stalls stop serving lunch at 2.30, so arrive early.",
    explanationVi: "Cuối tuần quầy ngừng phục vụ lunch lúc 2.30, nên tới sớm.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "save up to ______ % on ticket prices at bargaintickets.com",
    questionVi: "save up to ______ % on ticket prices at bargaintickets.com",
    modelParaphraseEn: "good deals if you book online with Bargain Tickets for the following day. On some seats there's a 75% discount",
    modelParaphraseVi: "good deals if you book online with Bargain Tickets for the following day. On some seats there's a 75% discount",
    acceptedAnswers: ["75", "seventy-five"],
    explanationEn: "Online Bargain Tickets for the following day: up to 75% off some seats.",
    explanationVi: "Đặt online Bargain Tickets cho ngày hôm sau: một số ghế giảm tới 75%.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "climb Telegraph Hill to see a view of the ______",
    questionVi: "climb Telegraph Hill to see a view of the ______",
    modelParaphraseEn: "You'll be able to look right down on the port. Everyone's always really impressed because it's so huge",
    modelParaphraseVi: "You'll be able to look right down on the port. Everyone's always really impressed because it's so huge",
    acceptedAnswers: ["port"],
    explanationEn: "From Telegraph Hill in Blakewell Gardens you look down on the huge port.",
    explanationVi: "Từ Telegraph Hill ở Blakewell Gardens nhìn xuống port rất lớn.",
  },
];
