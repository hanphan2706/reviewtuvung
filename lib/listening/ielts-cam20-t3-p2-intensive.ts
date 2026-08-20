import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm one of the archaeologists", "I am one of the archaeologists"] },
    { id: "g2", answers: ["most of the people"] },
    { id: "g3", answers: ["where we are today"] },
    { id: "g4", answers: ["Many archaeology projects happen"] },
    { id: "g5", answers: ["hit the news"] },
    { id: "g6", answers: ["there had been a village"] },
    { id: "g7", answers: ["onto something"] },
    { id: "g8", answers: ["than you can count"] },
    { id: "g9", answers: ["as you'll see", "as you will see"] },
    { id: "g10", answers: ["evidence of human activity"] },
    { id: "g11", answers: ["turned out to be"] },
    { id: "g12", answers: ["for sure yet"] },
    { id: "g13", answers: ["keep to the paths"] },
    { id: "g14", answers: ["if you like"] },
    { id: "g15", answers: ["it's really exciting today", "it is really exciting today"] },
    { id: "g16", answers: ["we assumed they were thrown"] },
    { id: "g17", answers: ["an important building"] },
    { id: "g18", answers: ["you've gone too far", "you have gone too far"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hello, I'm Hayden. " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " investigating the site here at Bidcaster. This is the third summer for this community project, and ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " digging here are volunteers." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I'm a full-time archaeologist for the town council, but I was asked to join the project by NHA, a charity which sets up projects like this up and down the country. As you can see, we're next to Bidcaster Castle, which is great because the owners let us use their facilities. So, how did we get to ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " when an ancient object is found, and in our case that object was a gold coin. Coins are often found by people using metal detectors to look for things buried in the ground or coins are uncovered when wild animals like rabbits have been digging tunnels. Here, a walker found it on the ground after a rainstorm washed away some of the earth and sand.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When the story of the gold coin " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", Peter Swift, an amateur historian, contacted me to say he believed " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " on this site, centuries before the castle was built. Just by chance, the team found some old maps and documents in our library, which showed 500-year-old drawings of ruined buildings on the grassy area between the outer stone walls of the castle and the river. ",
        },
        { type: "text", text: "We knew then we were " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Over the three summers the team has been here, we've found the remains of several buildings, and more broken pots ",
        },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". Normally you'd expect to find brooches and other jewellery, but we're still waiting to uncover any such items. The people who once lived here were skilled at making tools from animal bones, ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " when you visit the exhibition." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Besides the discovery of the village, we've also found " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " on the other side of the river. No other houses or huts so far, but we can see the borders of an ancient field system. At one point we found a long wall and thought it was an ancient palace, but ",
        },
        { type: "text", text: "it " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " a modern wall." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This summer's work will end soon, but we'll be back next summer. In the meantime, we're putting on a series of guided tours for school groups this autumn. Oh, and maybe you saw the TV documentary about our project. That suggests the objects we've found are going to the town's museum, but ",
        },
        { type: "text", text: "we don't know that " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When you enter the site, please make sure you " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " at all times. There are a few other things, the highlights of the site " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", that I want to mention. Take a look at the map. Our present location is marked at the bottom.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This year, we've identified the foundations of an ancient bridge, and ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " because a team of divers are in the river searching for lost objects. To reach the bridge, take the main path ahead of you, go straight on, and keep going till the path bends to the left. You'll see a smaller track leading off to the right. Follow that to take you to the river, where the divers are.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You might be interested to see the rubbish pit. This is very near the castle walls in the north-west corner of the site. It actually dates to the time of the castle and not the ancient village. We found oyster shells and fish bones, and ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " from the castle kitchen above." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One area we excavated in the first summer uncovered the site of a meeting hall. We knew it was ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " because it had two rows of post holes, deep enough to support a large roof. It is the largest structure in the central area of the site next to the current excavation area.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Last year we discovered a fish pond in the ancient village. Normally these were beside a river. The pond here is further away, but it's possible the river has moved slightly. Anyway, to get there from here, you turn right at the first information board you come to and follow the path into the trees. Before you come out of the trees, you'll see it on your right. If you reach the river, ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". So, does anyone have…" },
      ],
    },
  ],
};

export const CAM20_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Who started the community project? A castle owners / B a national charity / C the local council",
    questionVi: "Ai khởi xướng dự án cộng đồng?",
    modelParaphraseEn: "I was asked to join the project by NHA, a charity which sets up projects like this up and down the country",
    modelParaphraseVi: "I was asked to join the project by NHA, a charity which sets up projects like this up and down the country",
    acceptedAnswers: ["national charity", "NHA", "charity"],
    explanationEn: "B = NHA, a national charity. Hayden works for the town council but was asked to join by NHA; castle owners only lend facilities.",
    explanationVi: "B = NHA, tổ chức từ thiện quốc gia. Hayden làm cho hội đồng thành phố nhưng được NHA mời; chủ lâu đài chỉ cho mượn cơ sở.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "How was the gold coin found? A heavy rain removed soil / B rabbits dug / C metal detector",
    questionVi: "Đồng xu vàng được tìm thấy thế nào?",
    modelParaphraseEn: "a walker found it on the ground after a rainstorm washed away some of the earth and sand",
    modelParaphraseVi: "a walker found it on the ground after a rainstorm washed away some of the earth and sand",
    acceptedAnswers: ["rainstorm", "washed away", "heavy rain"],
    explanationEn: "A = rain washed away soil. Metal detectors and rabbits are general ways coins are found — not this coin.",
    explanationVi: "A = mưa cuốn đất. Máy dò kim loại và thỏ chỉ là cách tìm xu nói chung — không phải đồng này.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "What suggested an ancient village? A lucky discovery of old records / B bases visible in the grass / C unusual stones",
    questionVi: "Điều gì gợi ý có làng cổ?",
    modelParaphraseEn: "Just by chance, the team found some old maps and documents in our library",
    modelParaphraseVi: "Just by chance, the team found some old maps and documents in our library",
    acceptedAnswers: ["old maps and documents", "old records", "by chance", "library"],
    explanationEn: "A = chance find of old maps/documents. Drawings of ruins were on those records, not stones or visible bases.",
    explanationVi: "A = tình cờ thấy maps/documents cũ. Bản vẽ đống đổ nát nằm trên tài liệu đó, không phải đá hay móng lộ thiên.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Still hoping to find: A pottery / B animal bones / C jewellery",
    questionVi: "Vẫn hy vọng tìm: A đồ gốm / B xương thú / C trang sức",
    modelParaphraseEn: "you'd expect to find brooches and other jewellery, but we're still waiting to uncover any such items",
    modelParaphraseVi: "you'd expect to find brooches and other jewellery, but we're still waiting to uncover any such items",
    acceptedAnswers: ["jewellery", "jewelry", "brooches"],
    explanationEn: "C = jewellery still missing. Broken pots are already plentiful; bone tools are already in the exhibition.",
    explanationVi: "C = jewellery vẫn chưa thấy. Đồ gốm vỡ đã rất nhiều; công cụ xương đã có trong triển lãm.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Other side of the river: A palace remains / B outline of fields / C small huts",
    questionVi: "Bên kia sông: A cung điện / B đường viền ruộng / C túp lều",
    modelParaphraseEn: "No other houses or huts so far, but we can see the borders of an ancient field system",
    modelParaphraseVi: "No other houses or huts so far, but we can see the borders of an ancient field system",
    acceptedAnswers: ["field system", "borders of an ancient field", "outline of fields"],
    explanationEn: "B = field-system outline. A long wall looked like a palace but was modern; no huts yet.",
    explanationVi: "B = đường viền hệ thống ruộng. Tường dài tưởng cung điện hóa ra tường hiện đại; chưa có túp lều.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "After this summer: A museum display / B TV programme / C organise school visits",
    questionVi: "Sau mùa hè này: A trưng bày bảo tàng / B chương trình TV / C tổ chức đoàn trường",
    modelParaphraseEn: "we're putting on a series of guided tours for school groups this autumn",
    modelParaphraseVi: "we're putting on a series of guided tours for school groups this autumn",
    acceptedAnswers: ["school groups", "guided tours", "school visits"],
    explanationEn: "C = school tours this autumn. The TV documentary already happened; a museum move is not confirmed.",
    explanationVi: "C = tour cho học sinh mùa thu. Phim tài liệu TV đã chiếu; đưa hiện vật vào bảo tàng chưa chắc.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "bridge foundations — map letter B",
    questionVi: "móng cầu — chữ B trên bản đồ",
    modelParaphraseEn: "take the main path ahead … till the path bends to the left. You'll see a smaller track leading off to the right. Follow that to the river, where the divers are",
    modelParaphraseVi: "take the main path ahead … till the path bends to the left. You'll see a smaller track leading off to the right. Follow that to the river, where the divers are",
    acceptedAnswers: ["B", "divers", "smaller track", "river"],
    explanationEn: "B = follow the main path, then the smaller right-hand track down to the river / divers.",
    explanationVi: "B = theo lối chính, rồi đường nhỏ bên phải xuống sông / thợ lặn.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "rubbish pit — map letter A",
    questionVi: "hố rác — chữ A trên bản đồ",
    modelParaphraseEn: "very near the castle walls in the north-west corner of the site",
    modelParaphraseVi: "very near the castle walls in the north-west corner of the site",
    acceptedAnswers: ["A", "north-west", "castle walls"],
    explanationEn: "A = north-west corner by the castle walls (oyster shells / fish bones from the kitchen).",
    explanationVi: "A = góc tây-bắc sát tường lâu đài (vỏ hàu / xương cá từ bếp).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "meeting hall — map letter G",
    questionVi: "hội trường — chữ G trên bản đồ",
    modelParaphraseEn: "the largest structure in the central area of the site next to the current excavation area",
    modelParaphraseVi: "the largest structure in the central area of the site next to the current excavation area",
    acceptedAnswers: ["G", "central area", "current excavation"],
    explanationEn: "G = largest central building beside the current excavation (two rows of post holes).",
    explanationVi: "G = công trình lớn nhất khu trung tâm, cạnh hố đang khai quật (hai hàng lỗ cột).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "fish pond — map letter E",
    questionVi: "ao cá — chữ E trên bản đồ",
    modelParaphraseEn: "turn right at the first information board … follow the path into the trees. Before you come out of the trees, you'll see it on your right",
    modelParaphraseVi: "turn right at the first information board … follow the path into the trees. Before you come out of the trees, you'll see it on your right",
    acceptedAnswers: ["E", "first information board", "into the trees"],
    explanationEn: "E = right at the first board, into the trees, on the right before the river.",
    explanationVi: "E = rẽ phải ở bảng đầu, vào rừng, bên phải trước khi tới sông.",
  },
];
