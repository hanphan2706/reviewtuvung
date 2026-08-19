import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I've done as much as I can", "I have done as much as I can"] },
    { id: "g2", answers: ["How's your research coming along", "How is your research coming along"] },
    { id: "g3", answers: ["I'm glad we picked this subject", "I am glad we picked this subject"] },
    { id: "g4", answers: ["That might actually put some people off"] },
    { id: "g5", answers: ["I hadn't realised there are actually companies", "I had not realised there are actually companies", "I hadn't realized there are actually companies", "I had not realized there are actually companies"] },
    { id: "g6", answers: ["Contrary to what many people think"] },
    { id: "g7", answers: ["It must be easier for theatres"] },
    { id: "g8", answers: ["I hadn't realised that", "I had not realised that", "I hadn't realized that", "I had not realized that"] },
    { id: "g9", answers: ["We should definitely include that information"] },
    { id: "g10", answers: ["I couldn't imagine that happening now either", "I could not imagine that happening now either"] },
    { id: "g11", answers: ["There's also an interesting comparison to make", "There is also an interesting comparison to make"] },
    { id: "g12", answers: ["personally I think 18th century programmes were superior"] },
    { id: "g13", answers: ["the dramatic change they underwent"] },
    { id: "g14", answers: ["What I don't really get is that", "What I do not really get is that"] },
    { id: "g15", answers: ["I got some pictures of programmes we could include"] },
    { id: "g16", answers: ["Let's go through and see what we think", "Let us go through and see what we think"] },
    { id: "g17", answers: ["I thought this was a good programme to show"] },
    { id: "g18", answers: ["Wish I'd known about it while I was doing my research", "Wish I had known about it while I was doing my research"] },
  ],
  lines: [
    {
      speaker: "MAYA",
      segments: [
        { type: "text", text: "So, Finn, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for our project on theatre programmes. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        {
          type: "text",
          text: "OK, Maya. I didn't know theatre programmes are called playbills in the USA till I started looking into the topic. Even though I struggled to find many useful websites, ",
        },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". No one else on the course is doing the same as us, although it is one of the research areas of the module convener.",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "I suppose so. Anyway " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " specialising in creating theatre programmes." },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "text", text: "Yes, they are quite common nowadays. " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", theatres don't hire people to do the programmes. In fact, companies buy the rights to publish programmes on the theatre's behalf and then make their money selling advertising space within the programme booklet.",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: " to do it that way." },
      ],
    },
    { speaker: "MAYA", segments: [{ type: "text", text: "Yes." }] },
    {
      speaker: "FINN",
      segments: [
        {
          type: "text",
          text: "I remember reading something about programmes in early British theatre. It said that the cast was always very important.",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Yeah, audiences were very familiar with leading actors and big names would draw huge crowds.",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "But " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " if the programme named a famous actor, that's who the public expected to perform. And if that didn't happen, people accused the theatre of breaking their agreement with the audience. They would demand refunds and if they didn't get them, there were riots.",
        },
      ],
    },
    { speaker: "MAYA", segments: [{ type: "text", text: "Outrageous! That'd never happen now." }] },
    {
      speaker: "FINN",
      segments: [
        {
          type: "text",
          text: "No, people are too polite, even when they're disappointed if the star of the show misses a performance.",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " about early audiences in our project. I also think it's important to mention that lots of ordinary people at that time were illiterate, so theatre programmes were of limited value in advertising plays. When a company of actors arrived in a town, they'd parade around the streets in their costumes, beating drums and announcing their upcoming performances.",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "Interesting. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: " between 18th and 19th century programmes." },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        {
          type: "text",
          text: "Wasn't it in the 19th century that theatre programmes started to resemble programmes today?",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Yes, and unlike programmes from the 18th century they always used colour.",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "And there was a greater variety of designs. But " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " because they told the theatregoers so many things, including about the actors." },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "text", text: "And about the writer, the plot and sometimes the history of the play." },
      ],
    },
    {
      speaker: "FINN",
      segments: [{ type: "text", text: "That's right. What should we say about theatre programmes in the 20th century?" }],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "text", text: "I reckon the most important thing is " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " during World War II." },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "When the government imposed restrictions on the use of paper." },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Yeah, but that was only in the UK. In the USA, programmes, or rather playbills, continued to be published in the same format.",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        {
          type: "text",
          text: "While here in the UK, programmes became merely a single sheet of paper folded to create four pages for text.",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " after the war they didn't go back to being more than one sheet or change in any way for over 25 years. I know there were paper shortages after the war, but only for five or ten years.",
        },
      ],
    },
    { speaker: "FINN", segments: [{ type: "text", text: "Strange." }] },
    {
      speaker: "MAYA",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: " on the slides for our presentation." },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "I found a couple too, Maya. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAYA",
      segments: [{ type: "text", text: "Um, oh, this is an old one for a play called Ruy Blas." }],
    },
    {
      speaker: "FINN",
      segments: [{ type: "text", text: "Never heard of that. But the programme looks very decorative." }],
    },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Good enough to put in a frame on the wall. The images are just beautiful. Finn, what did you find?",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "I've got some pages from a programme for Man of La Mancha. " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", not because of the pictures, but because it contains articles written by members of the theatre company, so we can learn how the production was created and the thoughts and feelings of the cast.",
        },
      ],
    },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Good. I've got a copy of a programme that's now in a museum. It's for The Tragedy of Jane Shore and it's said to be the earliest surviving document to have been printed on Australia's first printing press.",
        },
      ],
    },
    { speaker: "FINN", segments: [{ type: "text", text: "Fantastic!" }] },
    {
      speaker: "MAYA",
      segments: [
        {
          type: "text",
          text: "Another programme to talk about is for The Sailors' Festival. It comes from the British Library's digitised collection of programmes that was started a few years ago. It already comprises over 200,000 programmes which is amazing!",
        },
      ],
    },
    {
      speaker: "FINN",
      segments: [
        { type: "text", text: "Huh. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM20_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Finn was pleased that their topic A was unfamiliar to the module leader / B had not been chosen by other students / C was not hard to research",
    questionVi: "Finn vui vì đề tài A người hướng dẫn chưa biết / B chưa ai chọn / C không khó nghiên cứu",
    modelParaphraseEn: "No one else on the course is doing the same as us, although it is one of the research areas of the module convener",
    modelParaphraseVi: "No one else on the course is doing the same as us, although it is one of the research areas of the module convener",
    acceptedAnswers: ["no one else", "not been chosen", "other students"],
    explanationEn: "B = nobody else chose it. The convener does research this area, and Finn struggled to find useful websites.",
    explanationVi: "B = không ai khác chọn. Convener đúng là nghiên cứu lĩnh vực này, và Finn khó tìm website hữu ích.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Mistaken belief: A theatres pay companies to produce them / B few people buy them / C they contain more adverts",
    questionVi: "Quan niệm sai: A nhà hát trả tiền công ty / B ít người mua / C nhiều quảng cáo hơn",
    modelParaphraseEn: "Contrary to what many people think, theatres don't hire people to do the programmes – companies buy the rights and sell advertising space",
    modelParaphraseVi: "Contrary to what many people think, theatres don't hire people to do the programmes – companies buy the rights and sell advertising space",
    acceptedAnswers: ["don't hire", "theatres don't hire", "buy the rights"],
    explanationEn: "A = people wrongly think theatres hire/pay producers. Firms buy publishing rights and fund them with ads.",
    explanationVi: "A = nhiều người lầm là nhà hát thuê/trả tiền làm chương trình. Công ty mua quyền xuất bản và sống bằng quảng cáo.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Finn was surprised that early programmes A were hard to obtain / B were free / C were seen as a contract",
    questionVi: "Finn ngạc nhiên vì chương trình sớm A khó lấy / B miễn phí / C như hợp đồng",
    modelParaphraseEn: "people accused the theatre of breaking their agreement with the audience – demand refunds … there were riots",
    modelParaphraseVi: "people accused the theatre of breaking their agreement with the audience – demand refunds … there were riots",
    acceptedAnswers: ["agreement", "contract", "breaking their agreement"],
    explanationEn: "C = named star = a kind of contract/agreement; missing the star caused refunds and riots.",
    explanationVi: "C = ghi tên ngôi sao = một dạng hợp đồng; vắng mặt dẫn tới hoàn tiền và bạo loạn.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Why companies of actors A promoted their own plays / B performed outdoors / C had to tour",
    questionVi: "Vì sao gánh hát A tự quảng bá / B diễn ngoài trời / C phải lưu diễn",
    modelParaphraseEn: "ordinary people were illiterate, so programmes were of limited value – they'd parade around the streets in their costumes, beating drums",
    modelParaphraseVi: "ordinary people were illiterate, so programmes were of limited value – they'd parade around the streets in their costumes, beating drums",
    acceptedAnswers: ["illiterate", "parade", "promoted their own plays"],
    explanationEn: "A = street parades promoted the plays because programmes were little use to illiterate audiences.",
    explanationVi: "A = diễu hành trên phố tự quảng bá vì chương trình giấy ít ích với người mù chữ.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Compared with 19th-century programmes, 18th-century ones A were more original / B more colourful / C more informative",
    questionVi: "So với thế kỷ 19, chương trình thế kỷ 18 A độc đáo hơn / B nhiều màu hơn / C nhiều thông tin hơn",
    modelParaphraseEn: "18th century programmes were superior because they told the theatregoers so many things, including about the actors, the writer, the plot and sometimes the history",
    modelParaphraseVi: "18th century programmes were superior because they told the theatregoers so many things, including about the actors, the writer, the plot and sometimes the history",
    acceptedAnswers: ["more informative", "so many things", "superior"],
    explanationEn: "C = more informative. Colour and variety of designs belong to the 19th century.",
    explanationVi: "C = nhiều thông tin hơn. Màu sắc và đa dạng thiết kế thuộc thế kỷ 19.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Maya doesn't understand why A few US programmes were printed / B British programmes failed to develop / C Britain copied the USA",
    questionVi: "Maya không hiểu vì sao A Mỹ in ít / B Anh không phát triển / C Anh bắt chước Mỹ",
    modelParaphraseEn: "after the war they didn't go back to being more than one sheet or change in any way for over 25 years",
    modelParaphraseVi: "after the war they didn't go back to being more than one sheet or change in any way for over 25 years",
    acceptedAnswers: ["over 25 years", "didn't go back", "failed to develop"],
    explanationEn: "B = UK programmes stayed a single folded sheet for 25+ years, longer than post-war paper shortages.",
    explanationVi: "B = chương trình Anh vẫn một tờ gấp hơn 25 năm, lâu hơn thời thiếu giấy sau chiến tranh.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Ruy Blas — F it resembles an artwork",
    questionVi: "Ruy Blas — F giống một tác phẩm nghệ thuật",
    modelParaphraseEn: "the programme looks very decorative – good enough to put in a frame on the wall. The images are just beautiful",
    modelParaphraseVi: "the programme looks very decorative – good enough to put in a frame on the wall. The images are just beautiful",
    acceptedAnswers: ["decorative", "frame on the wall", "artwork"],
    explanationEn: "F = decorative enough to frame; beautiful images, not historical significance.",
    explanationVi: "F = trang trí đẹp đến mức treo khung; hình đẹp, không phải ý nghĩa lịch sử.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Man of La Mancha — E it contains insights into the show",
    questionVi: "Man of La Mancha — E chứa góc nhìn về vở diễn",
    modelParaphraseEn: "articles written by members of the theatre company … how the production was created and the thoughts and feelings of the cast",
    modelParaphraseVi: "articles written by members of the theatre company … how the production was created and the thoughts and feelings of the cast",
    acceptedAnswers: ["thoughts and feelings", "articles", "insights"],
    explanationEn: "E = cast/company articles give insights — not chosen for the pictures.",
    explanationVi: "E = bài của đoàn/diễn viên cho insight — không chọn vì hình.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "The Tragedy of Jane Shore — B historically significant for a country",
    questionVi: "The Tragedy of Jane Shore — B có ý nghĩa lịch sử với một quốc gia",
    modelParaphraseEn: "the earliest surviving document to have been printed on Australia's first printing press",
    modelParaphraseVi: "the earliest surviving document to have been printed on Australia's first printing press",
    acceptedAnswers: ["Australia's first printing press", "Australia", "historically significant"],
    explanationEn: "B = historically significant for Australia (first printing press). Being in a museum is extra detail.",
    explanationVi: "B = ý nghĩa lịch sử với Australia (nhà in đầu tiên). Việc nằm trong bảo tàng chỉ là chi tiết thêm.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "The Sailors' Festival — D it is included in a recent project",
    questionVi: "The Sailors' Festival — D nằm trong một dự án gần đây",
    modelParaphraseEn: "the British Library's digitised collection of programmes that was started a few years ago – over 200,000 programmes",
    modelParaphraseVi: "the British Library's digitised collection of programmes that was started a few years ago – over 200,000 programmes",
    acceptedAnswers: ["digitised collection", "British Library", "recent project"],
    explanationEn: "D = part of the British Library's recent digitisation project.",
    explanationVi: "D = thuộc dự án số hóa gần đây của British Library.",
  },
];
