import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["for some advice"] },
    {
      id: "g2",
      answers: ["how to go about it"],
    },
    { id: "g3", answers: ["a particular story"] },
    { id: "g4", answers: ["I really enjoyed writing it"] },
    { id: "g5", answers: ["done it last year"] },
    { id: "g6", answers: ["how important the editor thinks"] },
    {
      id: "g7",
      answers: ["attracting the reader's attention"],
    },
    { id: "g8", answers: ["a big effect on"] },
    { id: "g9", answers: ["beyond the first paragraph"] },
    { id: "g10", answers: ["wrong or misleading information"] },
    {
      id: "g11",
      answers: [
        "what's true and what isn't",
        "what is true and what is not",
        "what's true and what is not",
      ],
    },
    { id: "g12", answers: ["to inform the public"] },
    { id: "g13", answers: ["without feeling patronised", "without feeling patronized"] },
    {
      id: "g14",
      answers: [
        "something you're interested in",
        "something you are interested in",
      ],
    },
    { id: "g15", answers: ["I'm quite keen on politics", "I am quite keen on politics"] },
    {
      id: "g16",
      answers: ["on the same topic"],
    },
    {
      id: "g17",
      answers: ["I won't even bother to look", "I will not even bother to look"],
    },
    { id: "g18", answers: ["raise quite strong feelings"] },
  ],
  lines: [
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "Tom, could I ask you " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", please?" },
      ],
    },
    {
      speaker: "TOM",
      segments: [{ type: "text", text: "Yes of course, if you think I can help. What's it about?" }],
    },
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "It's my first media studies assignment, and I'm not sure " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". You must have " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Is that the one comparing the coverage of " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " in a range of newspapers?" },
      ],
    },
    { speaker: "HAZEL", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "TOM",
      segments: [{ type: "text", text: "Oh yes, " }, { type: "gap", gapId: "g4" }, { type: "text", text: "." }],
    },
    { speaker: "HAZEL", segments: [{ type: "text", text: "So what sort of things do I need to compare?" }] },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "Well, there are several things. For example, there's the question of which page of the newspaper the item appears on.",
        },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        {
          type: "text",
          text: "You mean, because there's a big difference between having it on the front page and the bottom of page ten, for instance?",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Exactly. And that shows " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " the story is. Then there's the size – how many column inches the story is given, how many columns it spreads over.",
        },
      ],
    },
    { speaker: "HAZEL", segments: [{ type: "text", text: "And I suppose that includes the headline." }] },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "It certainly does. It's all part of " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        {
          type: "text",
          text: "What about graphics – whether there's anything visual in addition to the text?",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Yes, you need to consider those, too, because they can have " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " the reader's understanding of the story – sometimes a bigger effect than the text itself. Then you'll need to look at how the item is put together: what structure is it given? Bear in mind that not many people read ",
        },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", so what has the journalist put at the beginning? And if, say, there are conflicting opinions about something, does one appear near the end, where people probably won't read it?",
        },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "And newspapers sometimes give " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", don't they? Either deliberately or by accident. Should I be looking at that, too?" },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Yes, if you can. Compare what's in different versions, and as far as possible, try and work out " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". And that relates to a very important point: what's the writer's purpose, or at least the most important one, if they have several. It may seem to be ",
        },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", but often it's that they want to create fear, or controversy, or to make somebody look ridiculous.",
        },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        {
          type: "text",
          text: "Gosh, I see what you mean. And I suppose the writer may make assumptions about the reader.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "That's right – about their knowledge of the subject, their attitudes, and their level of education, which means writing so that the readers understand ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". All of that will make a difference to how the story is presented." },
      ],
    },
    { speaker: "HAZEL", segments: [{ type: "text", text: "Does it matter what type of story I write about?" }] },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "No – national or international politics, the arts … Anything, as long as it's covered in two or three newspapers. Though of course it'll be easier and more fun if it's ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " and know something about." },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "And on that basis a national news item would be worth analysing – " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", so I'll try and find a suitable topic. What did you choose for your analysis, Tom?" },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "I was interested in how newspapers express their opinions explicitly, so I wanted to compare editorials in different papers, but when I started looking I couldn't find two ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " that I felt like analysing." },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "In that case, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "So in the end I chose a human interest story – a terribly emotional story about a young girl who was very ill, and lots of other people – mostly strangers – raised money so she could go abroad for treatment. Actually, I was surprised – some papers just wrote about how wonderful everyone was, but others considered the broader picture, like why treatment wasn't available here.",
        },
      ],
    },
    {
      speaker: "HAZEL",
      segments: [
        { type: "text", text: "I usually find stories like that " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " in me! I'll avoid that. Perhaps I'll choose an arts topic, like different reviews of a film, or something about funding for the arts – I'll think about that.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Yes, that might be interesting." }] },
    {
      speaker: "HAZEL",
      segments: [{ type: "text", text: "OK, well thanks a lot for your help, Tom. It's been really useful." }],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "You're welcome. Good luck with the assignment, Hazel." }] },
  ],
};

export const CAM15_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "which ______ the item appears on",
    questionVi: "which ______ the item appears on",
    modelParaphraseEn: "which page of the newspaper the item appears on",
    modelParaphraseVi: "which page of the newspaper the item appears on",
    acceptedAnswers: ["page"],
    explanationEn: "Front page vs bottom of page ten shows how important the editor thinks the story is.",
    explanationVi: "Trang nhất so với cuối page ten cho thấy editor đánh giá câu chuyện quan trọng thế nào.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "the ______ of the item, including the headline",
    questionVi: "the ______ of the item, including the headline",
    modelParaphraseEn: "the size – how many column inches the story is given, how many columns it spreads over",
    modelParaphraseVi: "the size – how many column inches the story is given, how many columns it spreads over",
    acceptedAnswers: ["size"],
    explanationEn: "Size includes column inches, columns, and the headline.",
    explanationVi: "Size gồm số cột, column inches và cả headline.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "any ______ accompanying the item",
    questionVi: "any ______ accompanying the item",
    modelParaphraseEn: "graphics – whether there's anything visual in addition to the text",
    modelParaphraseVi: "graphics – whether there's anything visual in addition to the text",
    acceptedAnswers: ["graphic", "graphics"],
    explanationEn: "Visuals / graphics can affect understanding even more than the text.",
    explanationVi: "Hình / graphics có thể ảnh hưởng hiểu bài còn hơn cả text.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "the ______ of the item, e.g. what's made prominent",
    questionVi: "the ______ of the item, e.g. what's made prominent",
    modelParaphraseEn: "how the item is put together: what structure is it given?",
    modelParaphraseVi: "how the item is put together: what structure is it given?",
    acceptedAnswers: ["structure"],
    explanationEn: "Structure = what is put first; few people read beyond the first paragraph.",
    explanationVi: "Structure = cái gì đặt đầu; ít người đọc quá đoạn đầu.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "the writer's main ______",
    questionVi: "the writer's main ______",
    modelParaphraseEn: "what's the writer's purpose, or at least the most important one",
    modelParaphraseVi: "what's the writer's purpose, or at least the most important one",
    acceptedAnswers: ["purpose"],
    explanationEn: "It may seem to inform, but often the purpose is fear, controversy or ridicule.",
    explanationVi: "Có vẻ là thông tin, nhưng purpose thường là gây sợ, tranh cãi hoặc chế giễu.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "the ______ the writer may make about the reader",
    questionVi: "the ______ the writer may make about the reader",
    modelParaphraseEn: "the writer may make assumptions about the reader",
    modelParaphraseVi: "the writer may make assumptions about the reader",
    acceptedAnswers: ["assumption", "assumptions"],
    explanationEn: "Assumptions about knowledge, attitudes and education shape how the story is written.",
    explanationVi: "Assumptions về kiến thức, thái độ và học vấn định hình cách viết.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "national news item — A definitely look / B may look / C definitely won't",
    questionVi: "national news item — A definitely look / B may look / C definitely won't",
    modelParaphraseEn:
      "a national news item would be worth analysing – I'm quite keen on politics, so I'll try and find a suitable topic",
    modelParaphraseVi:
      "a national news item would be worth analysing – I'm quite keen on politics, so I'll try and find a suitable topic",
    acceptedAnswers: ["A", "definitely look", "will try and find"],
    explanationEn: "A = she will definitely look; she is keen on politics and will try to find a topic.",
    explanationVi: "A = chắc chắn sẽ tìm; cô ấy thích politics và sẽ cố tìm topic.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "editorial — A definitely look / B may look / C definitely won't",
    questionVi: "editorial — A definitely look / B may look / C definitely won't",
    modelParaphraseEn: "In that case, I won't even bother to look",
    modelParaphraseVi: "In that case, I won't even bother to look",
    acceptedAnswers: ["C", "definitely won't", "won't even bother"],
    explanationEn: "C = she definitely won't look, after Tom could not find two editorials on the same topic.",
    explanationVi: "C = chắc chắn không tìm, sau khi Tom không tìm được hai editorial cùng topic.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "human interest — A definitely look / B may look / C definitely won't",
    questionVi: "human interest — A definitely look / B may look / C definitely won't",
    modelParaphraseEn: "I usually find stories like that raise quite strong feelings in me! I'll avoid that",
    modelParaphraseVi: "I usually find stories like that raise quite strong feelings in me! I'll avoid that",
    acceptedAnswers: ["C", "definitely won't", "I'll avoid that"],
    explanationEn: "C = she'll avoid human-interest stories because they raise strong feelings.",
    explanationVi: "C = tránh human interest vì chúng gợi cảm xúc mạnh.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "arts — A definitely look / B may look / C definitely won't",
    questionVi: "arts — A definitely look / B may look / C definitely won't",
    modelParaphraseEn: "Perhaps I'll choose an arts topic … I'll think about that",
    modelParaphraseVi: "Perhaps I'll choose an arts topic … I'll think about that",
    acceptedAnswers: ["B", "may look", "I'll think about that"],
    explanationEn: "B = she may look: 'perhaps' and 'I'll think about that', not a definite yes or no.",
    explanationVi: "B = có thể tìm: 'perhaps' và 'I'll think about that', không phải chắc chắn có/không.",
  },
];
