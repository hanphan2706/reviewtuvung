import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["They can be completed in less than a day"] },
    { id: "g2", answers: ["a former coal mine now open to the public"] },
    { id: "g3", answers: ["is suitable for all the family"] },
    { id: "g4", answers: ["as there are no strenuous climbs"] },
    { id: "g5", answers: ["a great place for fishing"] },
    { id: "g6", answers: ["The walk covers part of the coastal path trail"] },
    { id: "g7", answers: ["At one point, the route goes inland slightly"] },
    { id: "g8", answers: ["it's a great place to take photos", "it is a great place to take photos"] },
    { id: "g9", answers: ["fascinating information boards show what it once looked like"] },
    { id: "g10", answers: ["If you set off early"] },
    { id: "g11", answers: ["especially of the night sky"] },
    { id: "g12", answers: ["people come here from far and wide"] },
    { id: "g13", answers: ["In the daytime, it's completely different", "In the daytime, it is completely different"] },
    { id: "g14", answers: ["the only things you'll hear are the sound of your own footsteps", "the only things you will hear are the sound of your own footsteps"] },
    { id: "g15", answers: ["has won awards for its visitor experience"] },
    { id: "g16", answers: ["have been converted into display areas"] },
    { id: "g17", answers: ["It's incredible to think", "It is incredible to think"] },
    { id: "g18", answers: ["The other building to mention is"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Here is some information about history and nature walks in the region. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " and also be combined with a visit to Melby, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The Marsden Coastal Walk " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The route begins at Marsden harbour, where there are hourly ferries to and from the beautiful Hooker Island, ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g6" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As there are clear signposts all along the way, you don't even need to take a map with you.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " and passes a castle built in the 1400s near to a now-vanished market town.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The castle's now just a pile of stones but " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", you can be back in time for midday." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The Melby Heritage Walk is a great place to take photos, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "At certain times of the year, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "They climb to the top of the valley and take pictures of the stars." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you hike through the dense woods in the valley bottom, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At the highest point, you can stop to take in the views, and those with lots of energy can climb the tower that's situated where there was once a seventeenth century hunting lodge.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The route continues along the tops of the hills and brings you back down to the starting point – the car park at Melby Coal Mine.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Melby Coal Mine has been open to the public for twenty years and " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Many of the buildings around the mine are still standing and " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Firstly, there's an exhibition showing the history of the mine, with many original black and white photos. To see that, you go from the car park, via a covered walkway to the Main Visitor Centre. Go through the ticket office to an area where there are lockers to leave heavy bags in, and where you can borrow raincoats. Beyond that room is the exhibition.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a small bathhouse where miners used to wash after their shift underground. You can see that in the building directly to the north of the engine house. The boiler has gone from there now, but there are lines of tin baths on the stone floor.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a display of early mining tools from the days before mechanisation. You can find that in a small L-shaped building in the middle of the northern boundary of the site. ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " how miners were able to use hand implements to cut through rock." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The vehicle shed, where you can find wagons of different sizes, along with some of the hi-tech cutting machines that were in use until the mine closed, is in the southwest corner of the site, and can be accessed via a covered walkway.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There is a field with ponies, which are always popular with children, on the north-eastern boundary of the site, not approached via a covered walkway.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " the education centre. This is where school groups go when they visit the mine, but it's also accessible to the public as it contains a library and small gift shop. The centre is connected to the ticket office via a short section of covered walkway.",
        },
      ],
    },
  ],
};

export const CAM21_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Marsden Coastal Walk — TWO pieces of advice: B Don't miss the ruins of a certain building",
    questionVi: "Marsden Coastal Walk — HAI lời khuyên: B Đừng bỏ lỡ đống đổ nát của một tòa nhà",
    modelParaphraseEn: "The castle's now just a pile of stones but it's a great place to take photos",
    modelParaphraseVi: "The castle's now just a pile of stones but it's a great place to take photos",
    acceptedAnswers: ["B", "pile of stones", "ruins", "castle"],
    explanationEn: "B = the 1400s castle is now ruins / a pile of stones, worth stopping for photos. The market town has vanished, so not lunch in an ancient town (A).",
    explanationVi: "B = lâu đài thế kỷ 1400 giờ chỉ còn ruins / pile of stones, đáng dừng chụp ảnh. Thị trấn chợ đã biến mất, không phải ăn trưa ở ancient town (A).",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E Don't worry about getting lost",
    questionVi: "(cùng danh sách) E Đừng lo bị lạc",
    modelParaphraseEn: "As there are clear signposts all along the way, you don't even need to take a map with you",
    modelParaphraseVi: "As there are clear signposts all along the way, you don't even need to take a map with you",
    acceptedAnswers: ["E", "clear signposts", "don't even need to take a map"],
    explanationEn: "E = clear signposts, no map needed — you will not get lost. The walk has no strenuous climbs, so not steep rocky paths (D). Ferries go to Hooker Island, not to the start of the walk (C).",
    explanationVi: "E = biển chỉ đường rõ, không cần bản đồ — không bị lạc. Không có dốc khó, nên không phải đường đá dốc (D). Phà đi Hooker Island, không phải ra điểm bắt đầu walk (C).",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Melby Heritage Walk — TWO things: C This is a circular walk",
    questionVi: "Melby Heritage Walk — HAI ý: C Đây là đường vòng tròn",
    modelParaphraseEn: "brings you back down to the starting point – the car park at Melby Coal Mine",
    modelParaphraseVi: "brings you back down to the starting point – the car park at Melby Coal Mine",
    acceptedAnswers: ["C", "circular", "back down to the starting point"],
    explanationEn: "C = circular: along the hilltops then back to the Melby car park. It is not mostly downhill (A).",
    explanationVi: "C = circular: đi dọc đỉnh đồi rồi về bãi xe Melby. Không phải chủ yếu downhill (A).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) D A tower stands on the site of an older structure",
    questionVi: "(cùng danh sách) D Có tháp trên vị trí công trình cũ",
    modelParaphraseEn: "climb the tower that's situated where there was once a seventeenth century hunting lodge",
    modelParaphraseVi: "climb the tower that's situated where there was once a seventeenth century hunting lodge",
    acceptedAnswers: ["D", "tower", "seventeenth century hunting lodge"],
    explanationEn: "D = the tower stands where a 17th-century hunting lodge once was. Views are at the highest point, not the whole way (E). Daytime in the woods is quiet, not busy paths (B).",
    explanationVi: "D = tháp đứng trên vị trí hunting lodge thế kỷ 17. View ở điểm cao nhất, không phải cả đường (E). Ban ngày trong rừng yên tĩnh, không phải path đông (B).",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Exhibition — map letter",
    questionVi: "Exhibition — chữ trên bản đồ",
    modelParaphraseEn: "from the car park, via a covered walkway to the Main Visitor Centre. Go through the ticket office … lockers … Beyond that room is the exhibition",
    modelParaphraseVi: "from the car park, via a covered walkway to the Main Visitor Centre. Go through the ticket office … lockers … Beyond that room is the exhibition",
    acceptedAnswers: ["F", "beyond that room", "Main Visitor Centre"],
    explanationEn: "F = exhibition beyond the ticket office / locker room, reached from the car park by a covered walkway to the Main Visitor Centre.",
    explanationVi: "F = exhibition phía sau phòng vé / locker, đi từ bãi xe theo mái che tới Main Visitor Centre.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Baths — map letter",
    questionVi: "Baths — chữ trên bản đồ",
    modelParaphraseEn: "You can see that in the building directly to the north of the engine house",
    modelParaphraseVi: "You can see that in the building directly to the north of the engine house",
    acceptedAnswers: ["B", "north of the engine house", "bathhouse"],
    explanationEn: "B = bathhouse directly north of the engine house (tin baths on the stone floor; the boiler has gone).",
    explanationVi: "B = nhà tắm ngay phía bắc engine house (bồn thiếc trên nền đá; nồi hơi đã bị dỡ).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Tools — map letter",
    questionVi: "Tools — chữ trên bản đồ",
    modelParaphraseEn: "in a small L-shaped building in the middle of the northern boundary of the site",
    modelParaphraseVi: "in a small L-shaped building in the middle of the northern boundary of the site",
    acceptedAnswers: ["D", "L-shaped building", "northern boundary"],
    explanationEn: "D = early mining tools in a small L-shaped building mid-way along the northern boundary.",
    explanationVi: "D = dụng cụ mỏ sớm trong nhà chữ L nhỏ giữa ranh giới phía bắc.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Vehicles — map letter",
    questionVi: "Vehicles — chữ trên bản đồ",
    modelParaphraseEn: "The vehicle shed … is in the southwest corner of the site, and can be accessed via a covered walkway",
    modelParaphraseVi: "The vehicle shed … is in the southwest corner of the site, and can be accessed via a covered walkway",
    acceptedAnswers: ["A", "southwest corner", "vehicle shed"],
    explanationEn: "A = vehicle shed in the southwest corner (wagons and cutting machines), via a covered walkway.",
    explanationVi: "A = nhà xe góc tây-nam (toa xe và máy cắt), đi qua mái che.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Ponies — map letter",
    questionVi: "Ponies — chữ trên bản đồ",
    modelParaphraseEn: "a field with ponies … on the north-eastern boundary of the site, not approached via a covered walkway",
    modelParaphraseVi: "a field with ponies … on the north-eastern boundary of the site, not approached via a covered walkway",
    acceptedAnswers: ["H", "north-eastern boundary", "not approached via a covered walkway"],
    explanationEn: "H = pony field on the north-eastern boundary — unlike several other stops, not via a covered walkway.",
    explanationVi: "H = bãi pony ở ranh giới đông-bắc — khác vài điểm khác, không đi mái che.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Education centre — map letter",
    questionVi: "Education centre — chữ trên bản đồ",
    modelParaphraseEn: "The centre is connected to the ticket office via a short section of covered walkway",
    modelParaphraseVi: "The centre is connected to the ticket office via a short section of covered walkway",
    acceptedAnswers: ["E", "connected to the ticket office", "covered walkway"],
    explanationEn: "E = education centre (library and gift shop) linked to the ticket office by a short covered walkway.",
    explanationVi: "E = education centre (thư viện và cửa hàng quà) nối phòng vé bằng một đoạn mái che ngắn.",
  },
];
