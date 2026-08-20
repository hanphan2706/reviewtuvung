import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["a great time here"] },
    { id: "g2", answers: ["some of the excursions"] },
    {
      id: "g3",
      answers: [
        "while you're here",
        "while you are here",
      ],
    },
    {
      id: "g4",
      answers: [
        "free of charge",
      ],
    },
    { id: "g5", answers: ["for just 35 euros"] },
    {
      id: "g6",
      answers: [
        "I'd recommend our forest walk",
        "I would recommend our forest walk",
      ],
    },
    { id: "g7", answers: ["fairly steep climbs"] },
    { id: "g8", answers: ["reasonably fit"] },
    { id: "g9", answers: ["fun of biking without the effort"] },
    {
      id: "g10",
      answers: [
        "this isn't really for inexperienced cyclists",
        "this is not really for inexperienced cyclists",
      ],
    },
    {
      id: "g11",
      answers: ["you'll have fantastic views", "you will have fantastic views"],
    },
    { id: "g12", answers: ["traditional activities in the island"] },
    {
      id: "g13",
      answers: [
        "entirely up to you",
      ],
    },
    {
      id: "g14",
      answers: ["observe the night sky"],
    },
    {
      id: "g15",
      answers: ["shown the huge telescopes"],
    },
    { id: "g16", answers: ["Equestrian Centre"] },
    { id: "g17", answers: ["unlimited free drinks"] },
    {
      id: "g18",
      answers: [
        "It's held in a twelfth-century castle",
        "It is held in a twelfth-century castle",
      ],
    },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Hello everyone." }] },
    {
      speaker: null,
      segments: [{ type: "text", text: "I'm Jake Stevens and I'm your rep here at the hotel." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'm sure you'll all have " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So let me tell you a bit about what's on offer." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'll start by telling you about " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " that are available for guests." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One thing you have to do " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " is go dolphin watching." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On our boat trips, we pretty well guarantee you'll see dolphins – if you don't you can repeat the trip ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We organise daily trips " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Unfortunately there aren't any places left for this afternoon's trip, but come and see me to book for later in the week.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If you're energetic, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "It's a guided walk of about seven kilometres." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There'll be a stop half way, and you'll be provided with a drink and sandwiches.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There's some " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " up the hills, so you need to be " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " for this one, with good shoes, and bring a waterproof in case it rains.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's just 25 euros all inclusive, and it's every Wednesday.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then on Thursdays we organise a cycle trip, which will give you all the ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll take you and your bike up to the top of Mount Larna, and leave you to bike back – it's a 700-metre drop in just 20 kilometres so ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " as you'll be going pretty fast." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And if it's a clear day, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "On our local craft tour you can find out about the " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And the best thing about this trip is that it's completely free.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll be taken to a factory where jewellery is made, and also a ceramics centre.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you want, you can buy some of the products but that's ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The trip starts after lunch on Thursday, and you'll return by 6 pm.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you're interested in astronomy you may already know that the island's one of the best places in the world to ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We can offer trips to the observatory on Friday for those who are interested.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "They cost 90 euros per person and you'll be " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " and have a talk from an expert, who'll explain all about how they work." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Afterwards we'll head down to Sunset Beach, where you can have a dip in the ocean if you want before we head off back to the hotel.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Finally, there's horse riding." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is organised by the " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " over near Playa Cortino and it's a great experience if you're a keen horseback rider, or even if you've never been on a horse before.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They take you down to the beach, and you can canter along the sand and through the waves.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "It costs 35 euros and it's available every day." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So there's plenty to do in the daytime, but what about night life?",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, the number one attraction's called 'Musical Favourites'.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Guests enjoy a three-course meal and " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", and watch a fantastic show, starting with musicals set in Paris and then crossing the Atlantic to Las Vegas and finally Copacabana.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At the end the cast members come down from the stage, still in their stunning costumes, and you'll have a chance to chat with them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's hugely popular, so let me know now if you're interested because it's no good leaving it until the last minute.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "It's on Friday night." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Tickets are just 50 euros each, but for an extra 10 euros you can have a table right by the stage.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you'd like to go back in time, there's the Castle Feast on Saturday evening.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", and you eat in the great courtyard, with ladies in long gowns serving your food.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You're given a whole chicken each, which you eat in the medieval way, using your hands instead of cutlery, and you're entertained by competitions where the horseback riders attempt to knock one another off their horses.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then you can watch the dancers in the ballroom and join in as well if you want.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "OK, so now if anyone …" }] },
  ],
};

export const CAM14_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "dolphin watching — A all downhill / B beginners / C good weather only / D food included / E no charge / F swimming possible / G fully booked today / H transport not included",
    questionVi: "dolphin watching — G fully booked today",
    modelParaphraseEn: "there aren't any places left for this afternoon's trip",
    modelParaphraseVi: "there aren't any places left for this afternoon's trip",
    acceptedAnswers: ["G", "fully booked today", "aren't any places left"],
    explanationEn: "G = fully booked today. A later-week booking is still possible; a free repeat is only if no dolphins are seen.",
    explanationVi: "G = hôm nay hết chỗ. Vẫn đặt được ngày sau trong tuần; miễn phí chỉ khi không thấy cá heo.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "forest walk — matching information",
    questionVi: "forest walk — thông tin khớp",
    modelParaphraseEn: "you'll be provided with a drink and sandwiches",
    modelParaphraseVi: "you'll be provided with a drink and sandwiches",
    acceptedAnswers: ["D", "food included", "drink and sandwiches"],
    explanationEn: "D = food included (drink and sandwiches at the halfway stop). Fitness is required; weather is not a booking limit.",
    explanationVi: "D = gồm đồ ăn (drink and sandwiches lúc nghỉ giữa đường). Cần sức khoẻ; thời tiết không phải điều kiện đặt chỗ.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "cycle trip — matching information",
    questionVi: "cycle trip — thông tin khớp",
    modelParaphraseEn: "it's a 700-metre drop in just 20 kilometres … you'll be going pretty fast",
    modelParaphraseVi: "it's a 700-metre drop in just 20 kilometres … you'll be going pretty fast",
    acceptedAnswers: ["A", "all downhill", "700-metre drop"],
    explanationEn: "A = all downhill (700-metre drop). Not for inexperienced cyclists — B beginners is horse riding.",
    explanationVi: "A = toàn dốc xuống (700-metre drop). Không dành cho người chưa có kinh nghiệm — B beginners là horse riding.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "local craft tour — matching information",
    questionVi: "local craft tour — thông tin khớp",
    modelParaphraseEn: "the best thing about this trip is that it's completely free",
    modelParaphraseVi: "the best thing about this trip is that it's completely free",
    acceptedAnswers: ["E", "no charge", "completely free"],
    explanationEn: "E = no charge. Buying jewellery or ceramics is optional, not required.",
    explanationVi: "E = không mất phí. Mua jewellery/ceramics là tuỳ chọn.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "observatory trip — matching information",
    questionVi: "observatory trip — thông tin khớp",
    modelParaphraseEn: "we'll head down to Sunset Beach, where you can have a dip in the ocean if you want",
    modelParaphraseVi: "we'll head down to Sunset Beach, where you can have a dip in the ocean if you want",
    acceptedAnswers: ["F", "swimming possible", "dip in the ocean"],
    explanationEn: "F = swimming possible after the observatory, at Sunset Beach. The trip is not free (90 euros).",
    explanationVi: "F = có thể bơi sau observatory, tại Sunset Beach. Tour không miễn phí (90 euros).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "horse riding — matching information",
    questionVi: "horse riding — thông tin khớp",
    modelParaphraseEn: "even if you've never been on a horse before",
    modelParaphraseVi: "even if you've never been on a horse before",
    acceptedAnswers: ["B", "suitable for beginners", "never been on a horse"],
    explanationEn: "B = suitable for beginners (even if you have never ridden). Keen riders are welcome too.",
    explanationVi: "B = phù hợp người mới (chưa từng cưỡi ngựa). Người đã cưỡi cũng được.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Musical Favourites (TWO): B You must book it in advance",
    questionVi: "Musical Favourites (HAI ý): B Phải đặt trước",
    modelParaphraseEn: "it's no good leaving it until the last minute",
    modelParaphraseVi: "it's no good leaving it until the last minute",
    acceptedAnswers: ["B", "book it in advance", "last minute"],
    explanationEn: "B = must book in advance (no good leaving it until the last minute). Drinks are unlimited and free, so A is wrong.",
    explanationVi: "B = phải đặt trước (không để last minute). Đồ uống unlimited free nên A sai.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Musical Favourites (TWO): D You can meet the performers",
    questionVi: "Musical Favourites (HAI ý): D Gặp được diễn viên",
    modelParaphraseEn: "the cast members come down from the stage … you'll have a chance to chat with them",
    modelParaphraseVi: "the cast members come down from the stage … you'll have a chance to chat with them",
    acceptedAnswers: ["D", "meet the performers", "chat with them"],
    explanationEn: "D = meet the performers. Extra 10 euros is only for a stage-side table, not a two-ticket discount; taking part in the show is not mentioned.",
    explanationVi: "D = gặp diễn viên. Thêm 10 euros chỉ để ngồi sát sân khấu, không phải giảm giá hai vé; không nói khách tham gia show.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Castle Feast (TWO): A Visitors can dance after the meal",
    questionVi: "Castle Feast (HAI ý): A Khách có thể nhảy sau bữa ăn",
    modelParaphraseEn: "you can watch the dancers in the ballroom and join in as well if you want",
    modelParaphraseVi: "you can watch the dancers in the ballroom and join in as well if you want",
    acceptedAnswers: ["A", "dance after the meal", "join in"],
    explanationEn: "A = visitors can dance after the meal. Costume is worn by serving ladies, not guests; there is no food choice (a whole chicken each).",
    explanationVi: "A = khách có thể nhảy sau bữa. Trang phục lịch sử là của người phục vụ, không phải khách; không chọn món (mỗi người một con gà).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Castle Feast (TWO): D Knives and forks are not used",
    questionVi: "Castle Feast (HAI ý): D Không dùng dao nĩa",
    modelParaphraseEn: "using your hands instead of cutlery",
    modelParaphraseVi: "using your hands instead of cutlery",
    acceptedAnswers: ["D", "knives and forks are not used", "hands instead of cutlery"],
    explanationEn: "D = no cutlery (eat with hands). Entertainment is knocking riders off horses, not horse races.",
    explanationVi: "D = không dùng dao nĩa (ăn bằng tay). Giải trí là hất nhau khỏi ngựa, không phải đua ngựa.",
  },
];
