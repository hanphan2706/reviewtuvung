import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["you'll be off to Denmark soon", "you will be off to Denmark soon"] },
    { id: "g2", answers: ["I've just started packing up all my books", "I have just started packing up all my books"] },
    { id: "g3", answers: ["I hope they don't get spoilt", "I hope they do not get spoilt"] },
    { id: "g4", answers: ["he told me how to pack them"] },
    { id: "g5", answers: ["Oh, that's helpful", "Oh, that is helpful"] },
    { id: "g6", answers: ["a lot of people just can't be bothered", "a lot of people just cannot be bothered"] },
    { id: "g7", answers: ["it's such a shame that publishers don't use better-quality paper", "it is such a shame that publishers do not use better-quality paper"] },
    { id: "g8", answers: ["I'd regret just throwing them away", "I would regret just throwing them away"] },
    { id: "g9", answers: ["I hate seeing students force open the pages"] },
    { id: "g10", answers: ["I still don't think people value hardbacks like they used to", "I still do not think people value hardbacks like they used to"] },
    { id: "g11", answers: ["book covers can be a work of art in themselves"] },
    { id: "g12", answers: ["I've always been taught to handle books carefully", "I have always been taught to handle books carefully"] },
    { id: "g13", answers: ["The smell of new books"] },
    { id: "g14", answers: ["I'd love to have a bookshop like your grandfather", "I would love to have a bookshop like your grandfather"] },
    { id: "g15", answers: ["That would prevent any thefts"] },
    { id: "g16", answers: ["He particularly likes to encourage kids to read"] },
    { id: "g17", answers: ["He hardly ever throws anything away"] },
    { id: "g18", answers: ["You'll have to take me there some time", "You will have to take me there some time"] },
  ],
  lines: [
    {
      speaker: "KIERAN",
      segments: [
        { type: "text", text: "So Jane – " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to do your work placement." },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Yes, I'm really looking forward to it and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " to put in storage." },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "text", text: "Well, " }, { type: "gap", gapId: "g3" }, { type: "text", text: "." }],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "It's OK – my grandfather works in a bookshop and " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "He says you have to support the spine otherwise the paper can come away from the cover.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Yeah – that's obvious." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "He also told me to pack them flat in the box not on their side – again because they can bend and if you leave them like that for, say, a year, it's quite hard to get them back to their normal shape.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "text", text: "Well, it's pretty clear that ruins them, but " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " to protect their books." },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "He always says " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "text", text: "It's the acid in the paper that causes the problem, isn't it?" }],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Yeah – that's why old books go yellow. You know some of the books my grandfather's given me are like that already.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Oh . . ." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "I should dump them really if they're going to deteriorate further, but I'd feel bad. They'll always remind me of him. He's quite a collector, you know.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Well, if they're important to you . . ." }] },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "Yeah – " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "text", text: "You know, maybe it's because I was taught to treasure books . . . but " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " – of paperbacks. They press so hard they end up breaking the spine." },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "I know, but unfortunately, paperbacks aren't designed to last a long time and people know that. Hardbacks aren't quite as weak.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "text", text: "Yeah, they're different, I suppose. But " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Well, they aren't decorative, are they, like other objects. Plus, nowadays, people don't keep them out on shelves as much as they used to.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        {
          type: "text",
          text: "That's such a pity. When I visit someone – if they have, say, a colorful book on a table, it's the first thing I'm drawn to.",
        },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "I agree – and " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Some are really eye-catching." },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". If you watch someone take a book off a shelf, well, they usually do it wrong.",
        },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Ah, my grandfather says, you should put your hand right over the top of the book . . . or if you can't do that, pull the other books on the shelf aside so that you can hold the whole cover.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "When did you learn all this?" }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "He watched me pull a heavy book off the shelf when I was small, and it fell on the floor and broke apart.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Oh dear!" }] },
    { speaker: "JANE", segments: [{ type: "text", text: "I can still remember it!" }] },
    { speaker: "JANE", segments: [{ type: "text", text: "You know what I really like?" }] },
    { speaker: "KIERAN", segments: [{ type: "text", text: "What?" }] },
    {
      speaker: "JANE",
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Me too." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "My parents used to laugh at me when I was a kid because I loved putting books up to my nose. Almost as much as reading them!",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "New books aren't cheap, though, are they?" }] },
    { speaker: "JANE", segments: [{ type: "text", text: "I guess we're lucky we can buy them." }] },
    {
      speaker: "KIERAN",
      segments: [
        {
          type: "text",
          text: "My grandfather stocks second-hand books as well as new ones and they don't smell quite as good.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ". What's it like?" },
      ],
    },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Well, it's quite big – it's got two floors and an attic, and he stocks all kinds of books really.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "text", text: "I guess he treasures things like first editions and other rare books." }],
    },
    {
      speaker: "JANE",
      segments: [{ type: "text", text: "Yeah – you might think he'd keep those in the attic or somewhere." }],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: ". . . so they'd be hidden?" }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Yeah. But he likes people to know that he has them. So, he puts them out in the shop but makes sure you need a ladder to get them.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "text", text: "Right. " }, { type: "gap", gapId: "g15" }, { type: "text", text: "!" }],
    },
    { speaker: "JANE", segments: [{ type: "text", text: "Uhuh." }] },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Does he stock books for children?" }] },
    {
      speaker: "JANE",
      segments: [
        { type: "text", text: "He does. " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: "; he always says that he used to sit under the stairs as a child with a pile of books and read them all.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Is that where he keeps them, then?" }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Not exactly – he's got a dedicated area on the ground floor with cushions so that parents can enter with their toddlers, go there and spend some time reading to them.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Oh cool." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "And then there's a place for pushchairs by the front door. And a café if anyone needs refreshments.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "That's good to know." }] },
    {
      speaker: "JANE",
      segments: [{ type: "text", text: "As I said, it's a big shop and there's a storage area out the back as well." }],
    },
    {
      speaker: "KIERAN",
      segments: [{ type: "text", text: "Oh, what does he keep there? Books he wants to throw away?" }],
    },
    {
      speaker: "JANE",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " – he just leaves unwanted books by the front door for customers to take." },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Well, that's very nice." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Yeah – and books people or institutions have requested, they all go at the far end.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Oh." }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "He thinks it's best to keep these out of the main shopping area as they're boxed and new.",
        },
      ],
    },
    { speaker: "KIERAN", segments: [{ type: "text", text: "Did you get your coursebooks from him?" }] },
    {
      speaker: "JANE",
      segments: [
        {
          type: "text",
          text: "Naturally. He stocks books for a lot of the colleges. He used to keep these books on the first floor, but now there's a new university in my hometown, he's moved them downstairs to attract the students. They're actually part of the coffee shop, on low shelves all around it.",
        },
      ],
    },
    {
      speaker: "KIERAN",
      segments: [
        { type: "text", text: "Pretty central then. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "!" },
      ],
    },
  ],
};

export const CAM19_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Grandfather's packing advice is: A common sense / B hard to follow / C over-protective",
    questionVi: "Lời khuyên đóng gói: A lẽ thường / B khó làm theo / C quá bảo vệ",
    modelParaphraseEn: "you have to support the spine … Yeah – that's obvious",
    modelParaphraseVi: "you have to support the spine … Yeah – that's obvious",
    acceptedAnswers: ["that's obvious", "common sense", "A"],
    explanationEn: "A = common sense. Kieran calls the spine-support advice obvious; packing flat is also clearly needed.",
    explanationVi: "A = lẽ thường. Kieran nói chống gáy là điều hiển nhiên; xếp phẳng cũng rõ là cần.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Jane feels the books: A not worth keeping / B should go to a collector / C have sentimental value",
    questionVi: "Jane thấy sách: A không đáng giữ / B nên đưa người sưu tầm / C có giá trị tình cảm",
    modelParaphraseEn: "I'd feel bad. They'll always remind me of him … I'd regret just throwing them away",
    modelParaphraseVi: "I'd feel bad. They'll always remind me of him … I'd regret just throwing them away",
    acceptedAnswers: ["remind me of him", "sentimental", "regret throwing them away", "C"],
    explanationEn: "C = sentimental value. She knows they yellow and deteriorate but cannot dump them.",
    explanationVi: "C = giá trị tình cảm. Cô biết sách ố và hỏng thêm nhưng không nỡ vứt.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Hardbacks should be: A put out on display / B given as gifts / C more attractively designed",
    questionVi: "Sách bìa cứng nên: A trưng bày / B làm quà / C thiết kế bắt mắt hơn",
    modelParaphraseEn: "people don't keep them out on shelves as much … a colorful book on a table, it's the first thing I'm drawn to",
    modelParaphraseVi: "people don't keep them out on shelves as much … a colorful book on a table, it's the first thing I'm drawn to",
    acceptedAnswers: ["on shelves", "drawn to", "on display", "A"],
    explanationEn: "A = put out on display. They agree covers can be art and books on a table attract visitors.",
    explanationVi: "A = trưng bày. Họ đồng ý bìa sách có thể là nghệ thuật và sách trên bàn thu hút khách.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Taking a book from a shelf, Jane: A describes others' mistakes / B reflects on a childhood experience / C explains why some books are easier",
    questionVi: "Lấy sách khỏi kệ, Jane: A mô tả lỗi người khác / B nhớ trải nghiệm thuở nhỏ / C giải thích sách nào dễ lấy",
    modelParaphraseEn: "He watched me pull a heavy book off the shelf when I was small, and it fell on the floor and broke apart",
    modelParaphraseVi: "He watched me pull a heavy book off the shelf when I was small, and it fell on the floor and broke apart",
    acceptedAnswers: ["when I was small", "broke apart", "childhood", "B"],
    explanationEn: "B = childhood experience. Kieran mentions other people doing it wrong; Jane's story is her own accident as a child.",
    explanationVi: "B = trải nghiệm thuở nhỏ. Kieran nói người khác lấy sai; chuyện của Jane là tai nạn khi còn nhỏ.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "New books: A parents liked them as presents / B they would like to buy more / C not everyone can afford them",
    questionVi: "Sách mới: A bố mẹ thích làm quà / B họ muốn mua thêm / C không phải ai cũng mua nổi",
    modelParaphraseEn: "New books aren't cheap, though, are they? I guess we're lucky we can buy them",
    modelParaphraseVi: "New books aren't cheap, though, are they? I guess we're lucky we can buy them",
    acceptedAnswers: ["aren't cheap", "lucky we can buy them", "not everyone can afford", "C"],
    explanationEn: "C = not everyone can afford them. Parents laughed at Jane smelling books; buying more is not what they suggest.",
    explanationVi: "C = không phải ai cũng mua nổi. Bố mẹ cười vì Jane ngửi sách; họ không nói muốn mua thêm.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Rare books — D on a high shelf",
    questionVi: "Sách hiếm — D trên kệ cao",
    modelParaphraseEn: "he puts them out in the shop but makes sure you need a ladder to get them",
    modelParaphraseVi: "he puts them out in the shop but makes sure you need a ladder to get them",
    acceptedAnswers: ["need a ladder", "high shelf", "D"],
    explanationEn: "D = high shelf. Not hidden in the attic – he wants people to know he has them.",
    explanationVi: "D = kệ cao. Không giấu trên gác – ông muốn khách biết ông có sách hiếm.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Children's books — F in a specially designed space",
    questionVi: "Sách trẻ em — F ở không gian thiết kế riêng",
    modelParaphraseEn: "a dedicated area on the ground floor with cushions so that parents can enter with their toddlers",
    modelParaphraseVi: "a dedicated area on the ground floor with cushions so that parents can enter with their toddlers",
    acceptedAnswers: ["dedicated area", "cushions", "specially designed space", "F"],
    explanationEn: "F = specially designed space (cushions, toddlers). Not under the stairs – that was only his childhood memory.",
    explanationVi: "F = không gian thiết kế riêng (gối, trẻ nhỏ). Không phải dưới cầu thang – đó chỉ là ký ức thuở nhỏ của ông.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Unwanted books — A near the entrance",
    questionVi: "Sách không muốn giữ — A gần cửa vào",
    modelParaphraseEn: "he just leaves unwanted books by the front door for customers to take",
    modelParaphraseVi: "he just leaves unwanted books by the front door for customers to take",
    acceptedAnswers: ["by the front door", "near the entrance", "A"],
    explanationEn: "A = near the entrance / front door. He hardly ever throws books away.",
    explanationVi: "A = gần cửa / front door. Ông hầu như không vứt sách.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Requested books — C at the back of the shop",
    questionVi: "Sách đặt trước — C phía sau tiệm",
    modelParaphraseEn: "books people or institutions have requested, they all go at the far end – out of the main shopping area",
    modelParaphraseVi: "books people or institutions have requested, they all go at the far end – out of the main shopping area",
    acceptedAnswers: ["at the far end", "out of the main shopping area", "back of the shop", "C"],
    explanationEn: "C = at the back. Boxed and new, so kept out of the main shopping area – not the storage people guessed.",
    explanationVi: "C = phía sau. Sách đóng hộp, mới, nên để ngoài khu mua chính – không phải kho như người ta đoán.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Coursebooks — G within the café",
    questionVi: "Sách giáo trình — G trong quán cà phê",
    modelParaphraseEn: "he's moved them downstairs to attract the students. They're actually part of the coffee shop, on low shelves all around it",
    modelParaphraseVi: "he's moved them downstairs to attract the students. They're actually part of the coffee shop, on low shelves all around it",
    acceptedAnswers: ["coffee shop", "café", "low shelves", "G"],
    explanationEn: "G = within the café. They used to be on the first floor; now downstairs around the coffee shop.",
    explanationVi: "G = trong quán cà phê. Trước để tầng 1; nay chuyển xuống, kệ thấp quanh coffee shop.",
  },
];
