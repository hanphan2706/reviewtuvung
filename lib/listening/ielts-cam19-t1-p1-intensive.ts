import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm one of the rangers", "I am one of the rangers"] },
    { id: "g2", answers: ["I've been asked to arrange", "I have been asked to arrange"] },
    { id: "g3", answers: ["perhaps you could tell me something about"] },
    { id: "g4", answers: ["Altogether the park covers"] },
    { id: "g5", answers: ["There are three main types of habitat"] },
    { id: "g6", answers: ["The woods are well established and varied"] },
    { id: "g7", answers: ["Once this work was completed"] },
    { id: "g8", answers: ["I suppose with these different habitats"] },
    { id: "g9", answers: ["There certainly is"] },
    { id: "g10", answers: ["We can organise a wide range of activities", "We can organize a wide range of activities"] },
    { id: "g11", answers: ["adapt them to suit all ages"] },
    { id: "g12", answers: ["Can you give me some examples"] },
    { id: "g13", answers: ["Do you do anything connected with"] },
    { id: "g14", answers: ["how the use of the land has changed over time"] },
    { id: "g15", answers: ["Learning outside the classroom"] },
    { id: "g16", answers: ["We invoice you afterwards"] },
    { id: "g17", answers: ["I'll need to discuss it with my colleagues", "I will need to discuss it with my colleagues"] },
    { id: "g18", answers: ["We'll look forward to hearing from you", "We will look forward to hearing from you"] },
  ],
  lines: [
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Good morning. Hinchingbrooke Country Park, Sally speaking. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        {
          type: "text",
          text: "Oh hello. My name's John Chapman, and I'm a teaching assistant at a local primary school. ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " a visit to the park for two of our classes." },
      ],
    },
    { speaker: "SALLY", segments: [{ type: "text", text: "OK. What would you like to know?" }] },
    {
      speaker: "JOHN",
      segments: [
        { type: "text", text: "Well, I'm new to this area, so " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " the park first, please." },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Of course. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " 170 acres, that's 69 hectares. " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ": wetland, grassland and woodland. ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", with an oak plantation, and other areas of mixed species." },
      ],
    },
    { speaker: "JOHN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "The wetland is quite varied, too. The original farmland was dug up around 40 years ago to extract gravel. ",
        },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", the gravel pits filled with water, forming the two large lakes. There are also several smaller ones, ponds and a stream that flows through the park.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        { type: "text", text: "OK, so " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " there's quite a variety of wildlife." },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " – a lot of different species of birds and insects, and also animals like deer and rabbits.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [{ type: "text", text: "And I understand you organise educational visits for school parties." }],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " and " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " of the activities?" },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Well, one focus is on science, where we help children to discover and study plants, trees and insects. They also collect and analyse data about the things they see.",
        },
      ],
    },
    { speaker: "JOHN", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Another focus is on geography. The park is a great environment to learn and practice reading a map and using a compass to navigate around the park.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: " history?" },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "Yes, we do. For instance, the children can explore " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ". Then there's leisure and tourism." },
      ],
    },
    {
      speaker: "JOHN",
      segments: [{ type: "text", text: "That focuses on your visitors, I would imagine." }],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "Yes, mostly. The children find out about them, their requirements, the problems they may cause and how we manage these. And another subject we cover is music: here the children experiment with natural materials to create sounds and explore rhythm and tempo.",
        },
      ],
    },
    { speaker: "JOHN", segments: [{ type: "text", text: "That must be fun!" }] },
    { speaker: "SALLY", segments: [{ type: "text", text: "Most children really enjoy it." }] },
    {
      speaker: "SALLY",
      segments: [
        { type: "text", text: "And of course, all the activities are educational, too. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " encourages children to be creative, and to explore and discover for themselves.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        {
          type: "text",
          text: "I would imagine they get a sense of freedom that might not be a normal part of their lives.",
        },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "That's right. And very often the children discover that they can do things they didn't know they could do, and they develop new skills. This gives them greater self-confidence.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        {
          type: "text",
          text: "It sounds great. So, what about the practical side of it? How much does it cost for a full-day visit? We would expect to bring between 30 and 40 children.",
        },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        {
          type: "text",
          text: "If there are over 30, it costs £4.95 for each child who attends on the day. ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", so you don't pay for children who can't come because of sickness, for example. There's no charge for leaders and other adults – as many as you want to bring.",
        },
      ],
    },
    {
      speaker: "JOHN",
      segments: [
        { type: "text", text: "That sounds very fair. Well, thanks for all the information. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", and I hope to get back to you soon to make a booking." },
      ],
    },
    {
      speaker: "SALLY",
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Goodbye." },
      ],
    },
    { speaker: "JOHN", segments: [{ type: "text", text: "Goodbye, and thank you." }] },
  ],
};

export const CAM19_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Area: ______ hectares",
    questionVi: "Area: ______ hectares",
    modelParaphraseEn: "Altogether the park covers 170 acres, that's 69 hectares",
    modelParaphraseVi: "Altogether the park covers 170 acres, that's 69 hectares",
    acceptedAnswers: ["69", "sixty-nine"],
    explanationEn: "The park is 170 acres, which is 69 hectares.",
    explanationVi: "Công viên rộng 170 acres, tức 69 hectares.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Wetland: lakes, ponds and a ______",
    questionVi: "Wetland: lakes, ponds and a ______",
    modelParaphraseEn: "several smaller ones, ponds and a stream that flows through the park",
    modelParaphraseVi: "several smaller ones, ponds and a stream that flows through the park",
    acceptedAnswers: ["stream"],
    explanationEn: "Besides lakes and ponds there is a stream flowing through the park.",
    explanationVi: "Ngoài hồ và ao còn có stream chảy qua công viên.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Science: children look at ______ about plants, etc.",
    questionVi: "Science: children look at ______ about plants, etc.",
    modelParaphraseEn: "They also collect and analyse data about the things they see",
    modelParaphraseVi: "They also collect and analyse data about the things they see",
    acceptedAnswers: ["data"],
    explanationEn: "In science they collect and analyse data on plants, trees and insects.",
    explanationVi: "Môn science: trẻ collect and analyse data về cây và côn trùng.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Geography: learning to use a ______ and compass",
    questionVi: "Geography: learning to use a ______ and compass",
    modelParaphraseEn: "reading a map and using a compass to navigate around the park",
    modelParaphraseVi: "reading a map and using a compass to navigate around the park",
    acceptedAnswers: ["map"],
    explanationEn: "Geography includes reading a map and using a compass.",
    explanationVi: "Geography gồm đọc map và dùng compass.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Leisure and tourism: mostly concentrates on the park's ______",
    questionVi: "Leisure and tourism: mostly concentrates on the park's ______",
    modelParaphraseEn: "That focuses on your visitors … Yes, mostly",
    modelParaphraseVi: "That focuses on your visitors … Yes, mostly",
    acceptedAnswers: ["visitors"],
    explanationEn: "Leisure and tourism mostly concentrates on the park's visitors.",
    explanationVi: "Leisure and tourism chủ yếu tập trung vào visitors của công viên.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Music: children make ______ with natural materials",
    questionVi: "Music: children make ______ with natural materials",
    modelParaphraseEn: "experiment with natural materials to create sounds and explore rhythm and tempo",
    modelParaphraseVi: "experiment with natural materials to create sounds and explore rhythm and tempo",
    acceptedAnswers: ["sounds"],
    explanationEn: "Children create sounds with natural materials (rhythm and tempo / speed).",
    explanationVi: "Trẻ tạo sounds bằng vật liệu tự nhiên (rhythm and tempo).",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "They give children a feeling of ______",
    questionVi: "They give children a feeling of ______",
    modelParaphraseEn: "they get a sense of freedom that might not be a normal part of their lives",
    modelParaphraseVi: "they get a sense of freedom that might not be a normal part of their lives",
    acceptedAnswers: ["freedom"],
    explanationEn: "Outdoor visits give a feeling / sense of freedom they may not have elsewhere.",
    explanationVi: "Học ngoài trời mang feeling / sense of freedom mà ở nơi khác trẻ có thể không có.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Children learn new ______ and gain self-confidence",
    questionVi: "Children learn new ______ and gain self-confidence",
    modelParaphraseEn: "they develop new skills. This gives them greater self-confidence",
    modelParaphraseVi: "they develop new skills. This gives them greater self-confidence",
    acceptedAnswers: ["skills"],
    explanationEn: "Children develop new skills and greater self-confidence.",
    explanationVi: "Trẻ phát triển skills mới và tự tin hơn.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Cost per child: £______",
    questionVi: "Cost per child: £______",
    modelParaphraseEn: "If there are over 30, it costs £4.95 for each child who attends on the day",
    modelParaphraseVi: "If there are over 30, it costs £4.95 for each child who attends on the day",
    acceptedAnswers: ["4.95"],
    explanationEn: "Over 30 children: £4.95 each for those who attend; invoiced afterwards.",
    explanationVi: "Trên 30 trẻ: £4.95 mỗi em đến thật; xuất hóa đơn sau.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Adults, such as ______, free",
    questionVi: "Adults, such as ______, free",
    modelParaphraseEn: "There's no charge for leaders and other adults – as many as you want to bring",
    modelParaphraseVi: "There's no charge for leaders and other adults – as many as you want to bring",
    acceptedAnswers: ["leaders"],
    explanationEn: "Leaders and other accompanying adults attend free of charge.",
    explanationVi: "Leaders và người lớn đi kèm được miễn phí.",
  },
];
