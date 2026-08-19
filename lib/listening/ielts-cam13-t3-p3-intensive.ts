import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["You wanted to see me about your textile design project"] },
    { id: "g2", answers: ["Why did you choose that topic"] },
    { id: "g3", answers: ["I got a lot of useful ideas from the museum"] },
    {
      id: "g4",
      answers: [
        "I've always been interested in anything to do with colour",
        "I have always been interested in anything to do with colour",
        "I've always been interested in anything to do with color",
      ],
    },
    { id: "g5", answers: ["They might not all have been natural dyes"] },
    {
      id: "g6",
      answers: [
        "a botanic garden in California that specialises in plants used for dyes",
        "a botanic garden in California that specializes in plants used for dyes",
      ],
    },
    { id: "g7", answers: ["you had to include a practical investigation"] },
    {
      id: "g8",
      answers: [
        "At first I couldn't decide on my variables",
        "At first I could not decide on my variables",
      ],
    },
    {
      id: "g9",
      answers: [
        "including some that weren't natural, for comparison",
        "including some that were not natural, for comparison",
      ],
    },
    { id: "g10", answers: ["I used some ready-made natural dyes"] },
    { id: "g11", answers: ["That must have taken quite a bit of time"] },
    { id: "g12", answers: ["One possibility is to use food colourings", "One possibility is to use food colorings"] },
    { id: "g13", answers: ["That was a yellow dye, an artificial one"] },
    {
      id: "g14",
      answers: [
        "I'd been going to try it out on nylon, but I abandoned that idea",
        "I had been going to try it out on nylon, but I abandoned that idea",
      ],
    },
    { id: "g15", answers: ["Were you worried about health issues"] },
    { id: "g16", answers: ["it can occasionally cause allergic reactions"] },
    {
      id: "g17",
      answers: [
        "It's generally used in dishes like curry",
        "It is generally used in dishes like curry",
      ],
    },
    { id: "g18", answers: ["I had to prepare the fabric so the dye would take"] },
  ],
  lines: [
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "That's right. I've been looking at how a range of natural dyes can be used to colour fabrics like cotton and wool.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", you know, at that exhibition of textiles. But " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". Years ago, I went to a carpet shop with my parents when we were on holiday in Turkey, and I remember all the amazing colours.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Maybe not, but for the project I decided to follow it up. And I found a great book about ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "OK. So, in your project, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". I was going to just look at one type of fibre for example, like cotton …",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "… and see how different types of dyes affected it?" },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Yes. Then I decided to include others as well, so I looked at cotton and wool and nylon.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [{ type: "text", text: "With just one type of dye?" }],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Various types, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "So, I did the experiments last week. " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". I found a website which supplied them, they came in just a few days, but I also made some of my own.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Yes, I'd thought it'd just be a matter of a teaspoon or so of dye, and actually that wasn't the case at all. Like I was using one vegetable, beetroot, for a red dye, and I had to chop up a whole pile of it. So it all took longer than I'd expected.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "I did use one. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "Tartrazine?" }] },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Yeah. I used it on cotton first. It came out a great colour, but when I rinsed the material, the colour just washed away. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "I'd thought if it's a legal food colouring, it must be safe." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", I believe." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [{ type: "text", text: "So what natural dyes did you look at?" }],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Well, one was turmeric. The colour's great, it's a really strong yellow. ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "It's meant to be quite good for your health when eaten, but you might find it's not permanent when it's used as a dye - a few washes, and it's gone.",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Right. I used beetroot as a dye for wool. When I chop up beetroot to eat I always end up with bright red hands, but the wool ended up just a sort of watery cream shade. Disappointing.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "There's a natural dye called Tyrian purple. Have you heard of that?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Yes. It comes from a shellfish, and it was worn in ancient times but only by important people as it was so rare. I didn't use it.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "It fell out of use centuries ago, though one researcher managed to get hold of some recently. But that shade of purple can be produced by chemical dyes nowadays. Did you use any black dyes?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        { type: "text", text: "Logwood. That was quite complicated. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [{ type: "text", text: "I hope you were careful to wear gloves." }],
    },
    {
      speaker: "JIM",
      segments: [{ type: "text", text: "Yes. I know the danger with that dye." }],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Good. It can be extremely dangerous if it's ingested. Now, presumably you had a look at an insect-based dye? Like cochineal, for example?",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "Yes. I didn't actually make that, I didn't have time to start crushing up insects to get the red colour and anyway they're not available here, but I managed to get the dye quite easily from a website. But it cost a fortune. I can see why it's generally just used in cooking, and in small quantities.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Yes, it's very effective, but that's precisely why it's not used as a dye.",
        },
      ],
    },
    {
      speaker: "JIM",
      segments: [
        {
          type: "text",
          text: "I also read about using metal oxide. Apparently you can allow iron to rust while it's in contact with the fabric, and that colours it.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Yes, that works well for dyeing cotton. But you have to be careful as the metal can actually affect the fabric and so you can't expect to get a lot of wear out of fabrics treated in this way. And the colours are quite subtle, not everyone likes them. Anyway, it looks as if you've done a lot of work …",
        },
      ],
    },
  ],
};

export const CAM13_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "What first inspired Jim to choose this project?",
    questionVi: "What first inspired Jim to choose this project?",
    modelParaphraseEn: "Years ago, I went to a carpet shop with my parents when we were on holiday in Turkey, and I remember all the amazing colours",
    modelParaphraseVi: "Years ago, I went to a carpet shop with my parents when we were on holiday in Turkey, and I remember all the amazing colours",
    acceptedAnswers: ["C", "carpets he saw on holiday"],
    explanationEn: "C = carpets he saw on holiday. The museum exhibition and the California book came later / as extra sources.",
    explanationVi: "C = carpets he saw on holiday. Exhibition ở museum và sách California là nguồn phụ / sau đó.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Jim's practical investigation involved",
    questionVi: "Jim's practical investigation involved",
    modelParaphraseEn: "Then I decided to include others as well, so I looked at cotton and wool and nylon. Various types, including some that weren't natural, for comparison",
    modelParaphraseVi: "Then I decided to include others as well, so I looked at cotton and wool and nylon. Various types, including some that weren't natural, for comparison",
    acceptedAnswers: ["A", "using a range of dyes with different fibres"],
    explanationEn: "A = a range of dyes with different fibres. He rejected one fibre + many dyes, and one dye + many fibres.",
    explanationVi: "A = nhiều loại dyes với các fibres khác nhau. Ông từ bỏ một fibre + nhiều dyes, và một dye + nhiều fibres.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "When doing his experiments, Jim was surprised by",
    questionVi: "When doing his experiments, Jim was surprised by",
    modelParaphraseEn: "I'd thought it'd just be a matter of a teaspoon or so of dye … I had to chop up a whole pile of it",
    modelParaphraseVi: "I'd thought it'd just be a matter of a teaspoon or so of dye … I had to chop up a whole pile of it",
    acceptedAnswers: ["A", "how much natural material was needed to make the dye"],
    explanationEn: "A = how much natural material was needed. Website delivery was easy; the surprise was the quantity of beetroot.",
    explanationVi: "A = cần bao nhiêu nguyên liệu tự nhiên. Website giao nhanh; cái bất ngờ là lượng beetroot.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "What problem did Jim have with using tartrazine as a fabric dye?",
    questionVi: "What problem did Jim have with using tartrazine as a fabric dye?",
    modelParaphraseEn: "I used it on cotton first. It came out a great colour, but when I rinsed the material, the colour just washed away",
    modelParaphraseVi: "I used it on cotton first. It came out a great colour, but when I rinsed the material, the colour just washed away",
    acceptedAnswers: ["B", "It was not a permanent dye on cotton"],
    explanationEn: "B = not a permanent dye on cotton. He never tried nylon. Allergic reactions are only a tutor comment, not Jim's problem.",
    explanationVi: "B = không bền trên cotton. Ông không thử nylon. Allergic reactions chỉ là nhận xét của tutor.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "turmeric — problem (A–H)",
    questionVi: "turmeric — problem (A–H)",
    modelParaphraseEn: "you might find it's not permanent when it's used as a dye - a few washes, and it's gone",
    modelParaphraseVi: "you might find it's not permanent when it's used as a dye - a few washes, and it's gone",
    acceptedAnswers: ["C", "The colour is not long-lasting"],
    explanationEn: "C = the colour is not long-lasting. Health benefits when eaten are a distractor.",
    explanationVi: "C = màu không bền. Lợi ích sức khỏe khi ăn là distractor.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "beetroot — problem (A–H)",
    questionVi: "beetroot — problem (A–H)",
    modelParaphraseEn: "When I chop up beetroot to eat I always end up with bright red hands, but the wool ended up just a sort of watery cream shade",
    modelParaphraseVi: "When I chop up beetroot to eat I always end up with bright red hands, but the wool ended up just a sort of watery cream shade",
    acceptedAnswers: ["F", "The colour may be unexpected"],
    explanationEn: "F = the colour may be unexpected. Hands go bright red, but wool went watery cream.",
    explanationVi: "F = màu có thể không như mong đợi. Tay đỏ tươi, nhưng len thành watery cream.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Tyrian purple — problem (A–H)",
    questionVi: "Tyrian purple — problem (A–H)",
    modelParaphraseEn: "it was worn in ancient times but only by important people as it was so rare. I didn't use it. It fell out of use centuries ago",
    modelParaphraseVi: "it was worn in ancient times but only by important people as it was so rare. I didn't use it. It fell out of use centuries ago",
    acceptedAnswers: ["H", "It is not generally available"],
    explanationEn: "H = not generally available. So rare / fell out of use. Cochineal insects 'not available here' is a distractor for Q29.",
    explanationVi: "H = không phổ biến. So rare / fell out of use. Côn trùng cochineal 'not available here' là distractor cho Q29.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "logwood — problem (A–H)",
    questionVi: "logwood — problem (A–H)",
    modelParaphraseEn: "It can be extremely dangerous if it's ingested",
    modelParaphraseVi: "It can be extremely dangerous if it's ingested",
    acceptedAnswers: ["D", "It is very poisonous"],
    explanationEn: "D = very poisonous. Preparing the fabric so the dye would take is complexity, not the identified problem.",
    explanationVi: "D = rất độc. Chuẩn bị vải để dye bám là độ phức tạp, không phải problem được hỏi.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "cochineal — problem (A–H)",
    questionVi: "cochineal — problem (A–H)",
    modelParaphraseEn: "I managed to get the dye quite easily from a website. But it cost a fortune",
    modelParaphraseVi: "I managed to get the dye quite easily from a website. But it cost a fortune",
    acceptedAnswers: ["A", "It is expensive"],
    explanationEn: "A = expensive. Insects not available here is why he bought the dye; the identified problem is the cost.",
    explanationVi: "A = đắt. Insects không có ở đây là lý do mua dye; problem được hỏi là giá.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "metal oxide — problem (A–H)",
    questionVi: "metal oxide — problem (A–H)",
    modelParaphraseEn: "the metal can actually affect the fabric and so you can't expect to get a lot of wear out of fabrics treated in this way",
    modelParaphraseVi: "the metal can actually affect the fabric and so you can't expect to get a lot of wear out of fabrics treated in this way",
    acceptedAnswers: ["E", "It can damage the fabric"],
    explanationEn: "E = it can damage the fabric. Subtle colours not everyone likes are extra, not the listed problem.",
    explanationVi: "E = có thể làm hỏng vải. Màu subtle không phải ai cũng thích chỉ là chi tiết thêm.",
  },
];
