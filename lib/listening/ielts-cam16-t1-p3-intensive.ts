import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["How are you getting on with"] },
    { id: "g2", answers: ["all that interested in"] },
    { id: "g3", answers: ["I'm starting to get into it", "I am starting to get into it"] },
    { id: "g4", answers: ["pretty well finished"] },
    { id: "g5", answers: ["I was really put off"] },
    { id: "g6", answers: ["the more interested I got"] },
    { id: "g7", answers: ["What a letdown"] },
    { id: "g8", answers: ["I wish we could've seen", "I wish we could have seen"] },
    { id: "g9", answers: ["do our own thing"] },
    { id: "g10", answers: ["I need to amend some parts"] },
    { id: "g11", answers: ["look at that too"] },
    { id: "g12", answers: ["I quite enjoyed that"] },
    { id: "g13", answers: ["I didn't realise", "I did not realise"] },
    { id: "g14", answers: ["go back to my proposal"] },
    { id: "g15", answers: ["I'll change that too then", "I will change that too then"] },
    { id: "g16", answers: ["I'm unsure about", "I am unsure about"] },
    { id: "g17", answers: ["a bit scary"] },
    { id: "g18", answers: ["a personal link"] },
  ],
  lines: [
    {
      speaker: "JESS",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " your art project, Tom?" },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "OK. Like, they gave us the theme of birds to base our project on, and I'm not really " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " wildlife. But " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". I've " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " the introductory stage." },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "So have I. When they gave us all those handouts with details of books and websites to look at, ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", but the more I read, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "Me too. I found I could research so many different aspects of birds in art – colour, movement, texture. So I was looking forward to the Bird Park visit.",
        },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: "! It poured with rain and we hardly saw a single bird. Much less use than the trip to the Natural History Museum.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "Yeah, I liked all the stuff about evolution there. The workshop sessions with Dr Fletcher were good too, especially the brainstorming sessions.",
        },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        { type: "text", text: "I missed those because I was ill. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " the projects last year's students did." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Mm. I suppose they want us to " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", not copy." },
      ],
    },
    { speaker: "JESS", segments: [{ type: "text", text: "Have you drafted your proposal yet?" }] },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Yes, but I haven't handed it in. " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". I've realised the notes from my research are almost all just descriptions, I haven't actually evaluated anything. So I'll have to fix that.",
        },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        { type: "text", text: "Oh, I didn't know we had to do that. I'll have to " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Did you do a timeline for the project?" },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Yes, and a mind map." }] },
    {
      speaker: "JESS",
      segments: [
        { type: "text", text: "Yeah, so did I. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". But it was hard having to explain the basis for my decisions in my action plan." },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "What?" }] },
    { speaker: "JESS", segments: [{ type: "text", text: "You know, give a rationale." }] },
    {
      speaker: "TOM",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " we had to do that. OK, I can add it now. And I've done the video diary presentation, and worked out what I want my outcome to be in the project.",
        },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "Someone told me it's best not to be too precise about your actual outcome at this stage, so you have more scope to explore your ideas later on. So I'm going to ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to make it a bit more vague." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "Really? OK, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "One part of the project " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " is where we choose some paintings of birds and say what they mean to us. Like, I chose a painting of a falcon by Landseer. I like it because the bird's standing there with his head turned to one side, but he seems to be staring straight at you. But I can't just say it's ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", can I?" },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        { type: "text", text: "You could talk about the possible danger suggested by the bird's look." },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Oh, OK." }] },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "There's a picture of a fish hawk by Audubon I like. It's swooping over the water with a fish in its talons, and with great black wings which take up most of the picture.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "So you could discuss it in relation to predators and food chains?" }] },
    {
      speaker: "JESS",
      segments: [
        { type: "text", text: "Well actually I think I'll concentrate on the impression of rapid motion it gives." },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "Do you know that picture of a kingfisher by van Gogh – it's perching on a reed growing near a stream.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Yes, it's got these beautiful blue and red and black shades." }] },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "Mm hm. I've actually chosen it because I saw a real kingfisher once when I was little, I was out walking with my grandfather, and I've never forgotten it.",
        },
      ],
    },
    {
      speaker: "TOM",
      segments: [
        { type: "text", text: "So we can use " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "JESS", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "TOM",
      segments: [
        {
          type: "text",
          text: "OK. There's a portrait called William Wells. I can't remember the artist but it's a middle-aged man who's just shot a bird. And his expression, and the way he's holding the bird in his hand suggests he's not sure about what he's done. To me it's about how ambiguous people are in the way they exploit the natural world.",
        },
      ],
    },
    {
      speaker: "JESS",
      segments: [
        {
          type: "text",
          text: "Interesting. There's Gauguin's picture Vairumati. He did it in Tahiti. It's a woman with a white bird behind her that is eating a lizard, and what I'm interested in is what idea this bird refers to. Apparently, it's a reference to the never-ending cycle of existence.",
        },
      ],
    },
    { speaker: "TOM", segments: [{ type: "text", text: "Wow. I chose a portrait of a little boy, Giovanni de Medici. He's holding a tiny bird in one fist. I like the way he's holding it carefully so he doesn't hurt it." }] },
    { speaker: "JESS", segments: [{ type: "text", text: "Ah right." }] },
  ],
};

export const CAM16_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO useful intro parts: C the Natural History Museum visit",
    questionVi: "Hai phần intro hữu ích: C chuyến Natural History Museum",
    modelParaphraseEn: "Much less use than the trip to the Natural History Museum. Yeah, I liked all the stuff about evolution there",
    modelParaphraseVi: "Much less use than the trip to the Natural History Museum. Yeah, I liked all the stuff about evolution there",
    acceptedAnswers: ["C", "the Natural History Museum visit"],
    explanationEn: "C = both like the Natural History Museum visit. The Bird Park was a letdown; Jess missed the workshops.",
    explanationVi: "C = cả hai thích Natural History Museum. Bird Park thất vọng; Jess bỏ lỡ workshop.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E the handouts with research sources",
    questionVi: "(cùng danh sách) E handouts nguồn nghiên cứu",
    modelParaphraseEn: "handouts with details of books and websites … I was really put off, but the more I read, the more interested I got. Me too",
    modelParaphraseVi: "handouts with details of books and websites … I was really put off, but the more I read, the more interested I got. Me too",
    acceptedAnswers: ["E", "the handouts with research sources", "handouts"],
    explanationEn: "E = both found the research handouts useful once they started reading. Last year's projects were not shown.",
    explanationVi: "E = cả hai thấy handouts hữu ích khi đọc. Dự án năm trước không được xem.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO proposal changes: B by being less specific about the outcome",
    questionVi: "Hai thay đổi proposal: B bớt cụ thể về outcome",
    modelParaphraseEn: "it's best not to be too precise about your actual outcome … make it a bit more vague. Really? OK, I'll change that too then",
    modelParaphraseVi: "it's best not to be too precise about your actual outcome … make it a bit more vague. Really? OK, I'll change that too then",
    acceptedAnswers: ["B", "by being less specific about the outcome", "more vague"],
    explanationEn: "B = both will make the outcome less specific / more vague. Timeline, mind map and video diary are already done.",
    explanationVi: "B = cả hai sẽ làm outcome bớt cụ thể / mơ hồ hơn. Timeline, mind map và video diary đã xong.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) E by making their notes more evaluative",
    questionVi: "(cùng danh sách) E notes mang tính đánh giá hơn",
    modelParaphraseEn: "notes … are almost all just descriptions, I haven't actually evaluated anything. So I'll have to fix that. … I'll have to look at that too",
    modelParaphraseVi: "notes … are almost all just descriptions, I haven't actually evaluated anything. So I'll have to fix that. … I'll have to look at that too",
    acceptedAnswers: ["E", "by making their notes more evaluative", "evaluated"],
    explanationEn: "E = both will make notes more evaluative. Only Tom had missed the rationale; adding it is not a shared change.",
    explanationVi: "E = cả hai sẽ làm notes mang tính đánh giá hơn. Chỉ Tom thiếu rationale; thêm cái đó không phải thay đổi chung.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Falcon (Landseer) — D a potential threat",
    questionVi: "Falcon (Landseer) — D mối đe dọa tiềm ẩn",
    modelParaphraseEn: "You could talk about the possible danger suggested by the bird's look",
    modelParaphraseVi: "You could talk about the possible danger suggested by the bird's look",
    acceptedAnswers: ["D", "a potential threat", "possible danger"],
    explanationEn: "D = potential threat / possible danger in the falcon's stare. 'A bit scary' is too vague on its own.",
    explanationVi: "D = potential threat / possible danger từ ánh nhìn của falcon. Chỉ nói 'scary' thì quá chung.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Fish hawk (Audubon) — C fast movement",
    questionVi: "Fish hawk (Audubon) — C chuyển động nhanh",
    modelParaphraseEn: "I'll concentrate on the impression of rapid motion it gives",
    modelParaphraseVi: "I'll concentrate on the impression of rapid motion it gives",
    acceptedAnswers: ["C", "fast movement", "rapid motion"],
    explanationEn: "C = fast movement / rapid motion. Predators and food chains are rejected.",
    explanationVi: "C = fast movement / rapid motion. Predators và food chains bị bác.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Kingfisher (van Gogh) — A a childhood memory",
    questionVi: "Kingfisher (van Gogh) — A ký ức tuổi thơ",
    modelParaphraseEn: "I saw a real kingfisher once when I was little, I was out walking with my grandfather, and I've never forgotten it",
    modelParaphraseVi: "I saw a real kingfisher once when I was little, I was out walking with my grandfather, and I've never forgotten it",
    acceptedAnswers: ["A", "a childhood memory"],
    explanationEn: "A = childhood memory (walk with grandfather). Colour is mentioned but is not the chosen meaning.",
    explanationVi: "A = childhood memory (đi bộ với ông). Có nhắc màu sắc nhưng không phải nghĩa được chọn.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Portrait of William Wells — H a confused attitude to nature",
    questionVi: "Portrait of William Wells — H thái độ mâu thuẫn với thiên nhiên",
    modelParaphraseEn: "he's not sure about what he's done. To me it's about how ambiguous people are in the way they exploit the natural world",
    modelParaphraseVi: "he's not sure about what he's done. To me it's about how ambiguous people are in the way they exploit the natural world",
    acceptedAnswers: ["H", "a confused attitude to nature", "ambiguous"],
    explanationEn: "H = a confused / ambiguous attitude to exploiting nature.",
    explanationVi: "H = thái độ confused / ambiguous khi khai thác thiên nhiên.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Vairumati (Gauguin) — F the continuity of life",
    questionVi: "Vairumati (Gauguin) — F sự liên tục của sự sống",
    modelParaphraseEn: "it's a reference to the never-ending cycle of existence",
    modelParaphraseVi: "it's a reference to the never-ending cycle of existence",
    acceptedAnswers: ["F", "the continuity of life", "never-ending cycle of existence"],
    explanationEn: "F = continuity of life (never-ending cycle of existence).",
    explanationVi: "F = continuity of life (chu trình tồn tại không dứt).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Portrait of Giovanni de Medici — G protection of nature",
    questionVi: "Portrait of Giovanni de Medici — G bảo vệ thiên nhiên",
    modelParaphraseEn: "holding a tiny bird in one fist. I like the way he's holding it carefully so he doesn't hurt it",
    modelParaphraseVi: "holding a tiny bird in one fist. I like the way he's holding it carefully so he doesn't hurt it",
    acceptedAnswers: ["G", "protection of nature", "holding it carefully"],
    explanationEn: "G = protection of nature (holding the bird carefully so as not to hurt it).",
    explanationVi: "G = protection of nature (cầm chim cẩn thận để không làm đau).",
  },
];
