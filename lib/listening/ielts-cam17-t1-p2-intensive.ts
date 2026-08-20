import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["your tour guide today"] },
    { id: "g2", answers: ["Before we set off"] },
    { id: "g3", answers: ["a few things about our journey"] },
    { id: "g4", answers: ["Our boats aren't huge", "Our boats are not huge"] },
    { id: "g5", answers: ["on top of that"] },
    { id: "g6", answers: ["a rather unique appearance"] },
    { id: "g7", answers: ["don't you think", "do you not think"] },
    { id: "g8", answers: ["I don't have to ask you", "I do not have to ask you"] },
    { id: "g9", answers: ["makes quite a lot of noise"] },
    { id: "g10", answers: ["before we head off"] },
    { id: "g11", answers: ["famous for its ancient lighthouse"] },
    { id: "g12", answers: ["right on top of the cliffs"] },
    { id: "g13", answers: ["in a very isolated spot"] },
    { id: "g14", answers: ["what creatures we can expect"] },
    { id: "g15", answers: ["they're very shy and", "they are very shy and"] },
    { id: "g16", answers: ["spotting one of these is rare"] },
    { id: "g17", answers: ["lost for words when they see"] },
    { id: "g18", answers: ["see more than we're able", "see more than we are able"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "So, hello everyone." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "My name's Lou Miller and I'm going to be " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " as we take this fantastic boat trip around the Tasmanian coast." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", I just want to tell you " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: " as you can see." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We already have three staff members on board and " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", we can transport a further fifteen people – that's you – around the coastline.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But please note if there are more than nine people on either side of the boat, we'll move some of you over, otherwise all eighteen of us will end up in the sea!",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We've recently upgraded all our boats. They used to be jet black, but our new ones now have these comfortable dark red seats and a light-green exterior in order to stand out from others and help promote our company. This gives our boats ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We offer you a free lunchbox during the trip and we have three types. Lunchbox 1 contains ham and tomato sandwiches. Lunchbox 2 contains a cheddar cheese roll and Lunchbox 3 is salad-based and also contains eggs and tuna. All three lunchboxes also have a packet of crisps and chocolate bar inside. Please let staff know which lunchbox you prefer.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'm sure " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " not to throw anything into the sea." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We don't have any bins to put litter in, but Jess, myself or Ray, our other guide, will collect it from you after lunch and put it all in a large plastic sack.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The engine on the boat " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " so " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", let me tell you a few things about what you're going to see." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This area is " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", which you'll see from the boat as we turn past the first little island.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It was built in 1838 to protect sailors as a number of shipwrecks had led to significant loss of life. The construction itself was complicated as some of the original drawings kept by the local council show. It sits ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the nineteenth century there were many jobs there, such as polishing the brass lamps, chopping firewood and cleaning windows, that kept lighthouse keepers busy. These workers were mainly prison convicts until the middle of that century when ordinary families willing to live in such circumstances took over.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Some of you have asked me " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to see." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I know everyone loves the penguins, but " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", unfortunately, tend to hide from passing boats, but you might see birds in the distance, such as sea eagles, flying around the cliff edges where they nest.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When we get to the rocky area inhabited by fur seals, we'll stop and watch them swimming around the coast. They're inquisitive creatures so don't be surprised if one pops up right in front of you. Their predators, orca whales, hunt along the coastline too, but ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". Dolphins, on the other hand, can sometimes approach on their own or in groups as they ride the waves beside us.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lastly, I want to mention the caves. Tasmania is famous for its caves and the ones we'll pass by are so amazing that people are ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " them." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They can only be approached by sea, but if you feel that you want to ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " to show you, then you can take a kayak into the area on another day and one of our staff will give you more information on that.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What we'll do is to go through a narrow channel, past some incredible rock formations and from there we'll be able to see the openings to the caves, and at that point we'll talk to you about what lies beyond.",
        },
      ],
    },
  ],
};

export const CAM17_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Maximum people on each side of the boat? A 9 / B 15 / C 18",
    questionVi: "Tối đa bao nhiêu người mỗi bên thuyền? A 9 / B 15 / C 18",
    modelParaphraseEn: "if there are more than nine people on either side of the boat, we'll move some of you over",
    modelParaphraseVi: "if there are more than nine people on either side of the boat, we'll move some of you over",
    acceptedAnswers: ["A", "9", "nine"],
    explanationEn: "A = 9 per side. 15 is the passenger capacity; 18 is everyone including staff.",
    explanationVi: "A = 9 mỗi bên. 15 là sức chứa hành khách; 18 gồm cả nhân viên.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "What colour are the tour boats? A dark red / B jet black / C light green",
    questionVi: "Thuyền tour màu gì? A dark red / B jet black / C light green",
    modelParaphraseEn: "used to be jet black, but our new ones now have these comfortable dark red seats and a light-green exterior",
    modelParaphraseVi: "used to be jet black, but our new ones now have these comfortable dark red seats and a light-green exterior",
    acceptedAnswers: ["C", "light green", "light-green"],
    explanationEn: "C = light-green exterior. Dark red is the seats; jet black is the old boats.",
    explanationVi: "C = thân thuyền light green. Dark red là ghế; jet black là thuyền cũ.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Lunchbox for someone who doesn't eat meat or fish? A 1 / B 2 / C 3",
    questionVi: "Hộp cơm cho người không ăn thịt/cá? A 1 / B 2 / C 3",
    modelParaphraseEn: "Lunchbox 2 contains a cheddar cheese roll",
    modelParaphraseVi: "Lunchbox 2 contains a cheddar cheese roll",
    acceptedAnswers: ["B", "Lunchbox 2", "Lunch box 2", "cheddar cheese roll"],
    explanationEn: "B = Lunchbox 2 (cheese roll). Box 1 has ham; box 3 has eggs and tuna.",
    explanationVi: "B = Lunchbox 2 (bánh mì phô mai). Hộp 1 có ham; hộp 3 có trứng và tuna.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "What should people do with their litter? A take it home / B hand it to staff / C put it in bins",
    questionVi: "Rác thì làm gì? A mang về / B đưa nhân viên / C bỏ thùng",
    modelParaphraseEn: "We don't have any bins … Jess, myself or Ray … will collect it from you after lunch",
    modelParaphraseVi: "We don't have any bins … Jess, myself or Ray … will collect it from you after lunch",
    acceptedAnswers: ["B", "hand it to a member of staff", "collect it from you"],
    explanationEn: "B = hand litter to staff. There are no bins on the boat.",
    explanationVi: "B = đưa rác cho nhân viên. Thuyền không có thùng rác.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "TWO lighthouse features: A why it was built",
    questionVi: "Hai đặc điểm hải đăng: A lý do xây",
    modelParaphraseEn: "built in 1838 to protect sailors as a number of shipwrecks had led to significant loss of life",
    modelParaphraseVi: "built in 1838 to protect sailors as a number of shipwrecks had led to significant loss of life",
    acceptedAnswers: ["A", "why it was built", "protect sailors", "shipwrecks"],
    explanationEn: "A = why it was built (protect sailors after shipwrecks). Drawings are mentioned, not who built it or materials.",
    explanationVi: "A = lý do xây (bảo vệ thủy thủ sau đắm tàu). Có nhắc drawings, không phải ai xây hay vật liệu.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "(same list) D who staffed it",
    questionVi: "(cùng danh sách) D ai làm việc ở đó",
    modelParaphraseEn: "workers were mainly prison convicts until the middle of that century when ordinary families … took over",
    modelParaphraseVi: "workers were mainly prison convicts until the middle of that century when ordinary families … took over",
    acceptedAnswers: ["D", "who staffed it", "prison convicts", "ordinary families"],
    explanationEn: "D = who staffed it (convicts, then ordinary families). How long it took is not given.",
    explanationVi: "D = ai làm việc (tù nhân, rồi gia đình thường). Không nói mất bao lâu để xây.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "TWO creatures that might come close: B fur seals",
    questionVi: "Hai loài có thể lại gần thuyền: B fur seals",
    modelParaphraseEn: "They're inquisitive creatures so don't be surprised if one pops up right in front of you",
    modelParaphraseVi: "They're inquisitive creatures so don't be surprised if one pops up right in front of you",
    acceptedAnswers: ["B", "fur seals"],
    explanationEn: "B = fur seals may pop up in front of you. Penguins hide; sea eagles stay in the distance; whales are rare.",
    explanationVi: "B = fur seals có thể nổi lên trước mặt. Penguin trốn; sea eagles ở xa; whale thì hiếm.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) C dolphins",
    questionVi: "(cùng danh sách) C dolphins",
    modelParaphraseEn: "Dolphins … can sometimes approach on their own or in groups as they ride the waves beside us",
    modelParaphraseVi: "Dolphins … can sometimes approach on their own or in groups as they ride the waves beside us",
    acceptedAnswers: ["C", "dolphins"],
    explanationEn: "C = dolphins may approach beside the boat. Orca whales hunt nearby but are rarely spotted.",
    explanationVi: "C = dolphins có thể bơi sát thuyền. Orca săn gần đó nhưng ít khi thấy.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "TWO points about the caves: D Someone will explain what is inside them",
    questionVi: "Hai điểm về hang: D Có người giải thích bên trong",
    modelParaphraseEn: "we'll be able to see the openings to the caves, and at that point we'll talk to you about what lies beyond",
    modelParaphraseVi: "we'll be able to see the openings to the caves, and at that point we'll talk to you about what lies beyond",
    acceptedAnswers: ["D", "Someone will explain what is inside them", "talk to you about what lies beyond"],
    explanationEn: "D = staff will explain what lies beyond the openings. Kayaks are for another day, not this large-boat-only visit.",
    explanationVi: "D = nhân viên sẽ giải thích phía trong. Kayak là ngày khác, không phải chỉ thuyền lớn mới vào được.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) E They cannot be reached on foot",
    questionVi: "(cùng danh sách) E Không đi bộ tới được",
    modelParaphraseEn: "They can only be approached by sea",
    modelParaphraseVi: "They can only be approached by sea",
    acceptedAnswers: ["E", "They cannot be reached on foot", "only be approached by sea"],
    explanationEn: "E = only by sea (not on foot). Entrances are not blocked; individuals can kayak later.",
    explanationVi: "E = chỉ tiếp cận bằng biển (không đi bộ). Cửa hang không bị chặn; cá nhân có thể kayak sau.",
  },
];
