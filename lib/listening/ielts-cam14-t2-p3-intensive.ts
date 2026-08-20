import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "what you've got for your presentation",
        "what you have got for your presentation",
      ],
    },
    {
      id: "g2",
      answers: ["we've got a short outline here", "we have got a short outline here"],
    },
    { id: "g3", answers: ["our modern elephant"] },
    {
      id: "g4",
      answers: ["that'd be a bit childish", "that would be a bit childish"],
    },
    {
      id: "g5",
      answers: ["let's go with your last suggestion", "let us go with your last suggestion"],
    },
    {
      id: "g6",
      answers: ["from the animal's jawbone"],
    },
    { id: "g7", answers: ["this was really amazing"] },
    { id: "g8", answers: ["it was connected to the mainland"] },
    {
      id: "g9",
      answers: ["roam around the whole area"],
    },
    { id: "g10", answers: ["No one's sure", "No one is sure"] },
    {
      id: "g11",
      answers: ["nearly two years to do"],
    },
    {
      id: "g12",
      answers: [
        "once we've prepared that we're done",
        "once we have prepared that we are done",
      ],
    },
    { id: "g13", answers: ["begin the presentation"] },
    {
      id: "g14",
      answers: [
        "we don't have that much information",
        "we do not have that much information",
      ],
    },
    {
      id: "g15",
      answers: ["make it interesting"],
    },
    { id: "g16", answers: ["a bit of variety"] },
    {
      id: "g17",
      answers: ["a bit muddled at present"],
    },
    {
      id: "g18",
      answers: ["you've got some good ideas", "you have got some good ideas"],
    },
  ],
  lines: [
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "So, Rosie and Martin, let's look at " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " on woolly mammoths." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [{ type: "text", text: "OK, " }, { type: "gap", gapId: "g2" }, { type: "text", text: "." }],
    },
    {
      speaker: "TUTOR",
      segments: [{ type: "text", text: "Thanks. So it's about a research project in North America?" }],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "Yes. But we thought we needed something general about woolly mammoths in our introduction, to establish that they were related to ",
        },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", and they lived thousands of years ago in the last ice age.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Maybe we could show a video clip of a cartoon about mammoths. But ",
        },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". Or we could have a diagram, it could be a timeline to show when they lived, with illustrations?",
        },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        { type: "text", text: "Or we could just show a drawing of them walking in the ice? No, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "Good." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Then you're describing the discovery of the mammoth tooth on St Paul's Island in Alaska, and why it was significant.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Yes. The tooth was found by a man called Russell Graham. He picked it up from under a rock in a cave. He knew it was special – for a start it was in really good condition, as if it had just been extracted ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". Anyway, they found it was 6,500 years old." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "So why was that significant?" }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Well the mammoth bones previously found on the North American mainland were much less recent than that. So ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "Then we're making an animated diagram to show the geography of the area in prehistoric times. So originally, St Paul's Island wasn't an island, ",
        },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", and mammoths and other animals like bears were able to ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Then the climate warmed up and the sea level began to rise, and the island got cut off from the mainland. So those mammoths on the island couldn't escape; they had to stay on the island.",
        },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "And in fact the species survived there for thousands of years after they'd become extinct on the mainland.",
        },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "So why do you think they died out on the mainland?" }] },
    {
      speaker: "ROSIE",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "Anyway, next we'll explain how Graham and his team identified the date when the mammoths became extinct on the island. They concluded that the extinction happened 5,600 years ago, which is a very precise time for a prehistoric extinction. It's based on samples they took from mud at the bottom of a lake on the island. They analysed it to find out what had fallen in over time – bits of plants, volcanic ash and even DNA from the mammoths themselves. It's standard procedure, but it took ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "So why don't you quickly go through the main sections of your presentation and discuss what action's needed for each part?",
        },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        { type: "text", text: "OK. So for the introduction, we're using a visual, so " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "I'm not sure. I think we need to write down all the ideas we want to include here, not just rely on memory. How we ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " is so important …" },
      ],
    },
    { speaker: "MARTIN", segments: [{ type: "text", text: "You're right." }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "The discovery of the mammoth tooth is probably the most dramatic part, but ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", only what we got from the online article. I thought maybe we could get in touch with the researcher who led the team and ask him to tell us a bit more.",
        },
      ],
    },
    { speaker: "MARTIN", segments: [{ type: "text", text: "Great idea." }] },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "What about the section with the initial questions asked by the researchers? We've got a lot on that but we need to ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "We could ask the audience to suggest some questions about it and then see how many of them we can answer. I don't think it would take too long.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Yes that would add " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "Then the section on further research carried out on the island – analysing the mud in the lake. I wonder if we've actually got too much information here, should we cut some?",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "I don't think so, but it's all " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [
        {
          type: "text",
          text: "Yes, maybe it would be better if it followed a chronological pattern.",
        },
      ],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "I think so." }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "The findings and possible explanations section is just about ready, but we need to practise it so we're sure it won't overrun.",
        },
      ],
    },
    {
      speaker: "MARTIN",
      segments: [{ type: "text", text: "I think it should be OK, but yes, let's make sure." }],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "In the last section, relevance to the present day, " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " but this is where you need to move away from the ideas of others and give your own viewpoint.",
        },
      ],
    },
    { speaker: "MARTIN", segments: [{ type: "text", text: "OK, we'll think about that. Now shall we …" }] },
  ],
};

export const CAM14_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "How will Rosie and Martin introduce their presentation? A with a drawing of woolly mammoths in their habitat / B with a timeline showing when woolly mammoths lived / C with a video clip about woolly mammoths",
    questionVi:
      "Rosie và Martin sẽ mở bài như thế nào? A hình voi ma mút trong môi trường / B timeline khi chúng sống / C video clip",
    modelParaphraseEn:
      "a video clip of a cartoon … that'd be a bit childish. Or a diagram, a timeline to show when they lived … a drawing of them walking in the ice? No, let's go with your last suggestion",
    modelParaphraseVi:
      "a video clip of a cartoon … that'd be a bit childish. Or a diagram, a timeline to show when they lived … a drawing of them walking in the ice? No, let's go with your last suggestion",
    acceptedAnswers: ["B", "timeline", "when they lived"],
    explanationEn:
      "B = timeline with illustrations. Cartoon video is childish; the ice drawing is rejected in favour of Rosie's last suggestion (timeline).",
    explanationVi:
      "B = timeline kèm minh họa. Video cartoon bị chê childish; hình đi trên băng bị bác, chọn gợi ý cuối của Rosie (timeline).",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "What was surprising about the mammoth tooth found by Russell Graham? A still in the jawbone / B unknown species / C not as old as mammoth remains from elsewhere",
    questionVi:
      "Điểm bất ngờ về răng voi ma mút Russell Graham tìm được? A còn trong hàm / B loài lạ / C không cổ bằng xương nơi khác",
    modelParaphraseEn:
      "in really good condition, as if it had just been extracted from the animal's jawbone … 6,500 years old … bones previously found on the North American mainland were much less recent than that",
    modelParaphraseVi:
      "in really good condition, as if it had just been extracted from the animal's jawbone … 6,500 years old … bones previously found on the North American mainland were much less recent than that",
    acceptedAnswers: ["C", "not as old", "much less recent", "more recent than mainland"],
    explanationEn:
      "C = younger / more recent than mainland remains (6,500 years). Good condition like a jawbone extraction is why it looked special, not the surprising scientific point. Not an unknown species.",
    explanationVi:
      "C = trẻ / gần đây hơn xương mainland (6,500 năm). Tình trạng tốt như vừa rút khỏi hàm chỉ khiến nó trông đặc biệt, không phải điểm khoa học bất ngờ. Không phải loài lạ.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "The students will use an animated diagram to demonstrate how the mammoths A became isolated on the island / B spread from the island / C coexisted with other animals",
    questionVi:
      "Sơ đồ động sẽ cho thấy voi ma mút A bị cô lập trên đảo / B lan từ đảo / C sống cùng loài khác",
    modelParaphraseEn:
      "originally … connected to the mainland … then the sea level began to rise, and the island got cut off … those mammoths on the island couldn't escape",
    modelParaphraseVi:
      "originally … connected to the mainland … then the sea level began to rise, and the island got cut off … those mammoths on the island couldn't escape",
    acceptedAnswers: ["A", "became isolated", "couldn't escape", "cut off"],
    explanationEn:
      "A = became isolated when sea level rose and the island was cut off. Bears roaming with them is background, not what the animation is for. They did not spread from the island.",
    explanationVi:
      "A = bị cô lập khi mực nước biển dâng, đảo bị cắt. Gấu đi cùng chỉ là bối cảnh, không phải mục đích animation. Chúng không lan từ đảo.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn:
      "According to Martin, what is unusual about the date of the mammoths' extinction on the island? A how exact it is / B how early it is / C how it was established",
    questionVi:
      "Martin thấy gì bất thường ở ngày tuyệt chủng trên đảo? A độ chính xác / B sớm thế nào / C cách xác định",
    modelParaphraseEn:
      "the extinction happened 5,600 years ago, which is a very precise time for a prehistoric extinction",
    modelParaphraseVi:
      "the extinction happened 5,600 years ago, which is a very precise time for a prehistoric extinction",
    acceptedAnswers: ["A", "how exact it is", "precise", "very precise time"],
    explanationEn:
      "A = how exact / precise the date is. The mud-sample method is standard procedure (took two years), not what is unusual. Surviving later than the mainland is a different point.",
    explanationVi:
      "A = ngày tuyệt chủng rất exact / precise. Phương pháp mẫu bùn là standard procedure (mất hai năm), không phải điều bất thường. Sống lâu hơn mainland là ý khác.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Introduction — action: A more interactive / D contact a researcher / E make detailed notes",
    questionVi: "Introduction — việc cần làm: A tương tác hơn / D liên hệ nhà nghiên cứu / E ghi chú chi tiết",
    modelParaphraseEn:
      "we're using a visual, so once we've prepared that we're done … I think we need to write down all the ideas we want to include here, not just rely on memory",
    modelParaphraseVi:
      "we're using a visual, so once we've prepared that we're done … I think we need to write down all the ideas we want to include here, not just rely on memory",
    acceptedAnswers: ["E", "make detailed notes", "write down all the ideas"],
    explanationEn:
      "E = write down all the ideas / detailed notes. Martin thought the visual was enough; Rosie disagrees and he accepts that.",
    explanationVi:
      "E = viết hết ý / detailed notes. Martin nghĩ visual là đủ; Rosie không đồng ý và anh chấp nhận.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Discovery of the mammoth tooth — action: D contact one of the researchers / F find information online",
    questionVi: "Phát hiện răng voi ma mút — D liên hệ nhà nghiên cứu / F tìm online",
    modelParaphraseEn:
      "we don't have that much information, only what we got from the online article. I thought maybe we could get in touch with the researcher who led the team",
    modelParaphraseVi:
      "we don't have that much information, only what we got from the online article. I thought maybe we could get in touch with the researcher who led the team",
    acceptedAnswers: ["D", "contact one of the researchers", "get in touch with the researcher"],
    explanationEn:
      "D = contact the lead researcher. They already have an online article and it is not enough.",
    explanationVi:
      "D = liên hệ researcher đứng đầu. Bài online đã có nhưng chưa đủ.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Initial questions asked by the researchers — action: A make it more interactive",
    questionVi: "Câu hỏi ban đầu của các nhà nghiên cứu — A làm tương tác hơn",
    modelParaphraseEn:
      "We've got a lot on that but we need to make it interesting … ask the audience to suggest some questions … that would add a bit of variety",
    modelParaphraseVi:
      "We've got a lot on that but we need to make it interesting … ask the audience to suggest some questions … that would add a bit of variety",
    acceptedAnswers: ["A", "make it more interactive", "ask the audience"],
    explanationEn: "A = more interactive (audience suggests questions). They already have plenty of content.",
    explanationVi: "A = tương tác hơn (audience gợi ý câu hỏi). Nội dung đã có nhiều.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn:
      "Further research carried out on the island — action: B reduce visual input / H organise the content more clearly",
    questionVi: "Nghiên cứu thêm trên đảo — B giảm visual / H sắp xếp nội dung rõ hơn",
    modelParaphraseEn:
      "should we cut some? I don't think so, but it's all a bit muddled at present … maybe it would be better if it followed a chronological pattern",
    modelParaphraseVi:
      "should we cut some? I don't think so, but it's all a bit muddled at present … maybe it would be better if it followed a chronological pattern",
    acceptedAnswers: ["H", "organise the content more clearly", "chronological pattern"],
    explanationEn:
      "H = organise more clearly / chronological order. They reject cutting information.",
    explanationVi:
      "H = sắp xếp rõ hơn / chronological. Họ không cắt bớt thông tin.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Findings and possible explanations — action: G check timing",
    questionVi: "Findings and possible explanations — G kiểm tra thời gian",
    modelParaphraseEn: "just about ready, but we need to practise it so we're sure it won't overrun",
    modelParaphraseVi: "just about ready, but we need to practise it so we're sure it won't overrun",
    acceptedAnswers: ["G", "check timing", "won't overrun", "practise"],
    explanationEn: "G = check timing / practise so it will not overrun. Content is already nearly ready.",
    explanationVi: "G = check timing / luyện để không overrun. Nội dung gần như sẵn sàng.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Relevance to the present day — action: C add personal opinions",
    questionVi: "Relevance to the present day — C thêm ý kiến cá nhân",
    modelParaphraseEn:
      "you've got some good ideas but this is where you need to move away from the ideas of others and give your own viewpoint",
    modelParaphraseVi:
      "you've got some good ideas but this is where you need to move away from the ideas of others and give your own viewpoint",
    acceptedAnswers: ["C", "add personal opinions", "own viewpoint"],
    explanationEn: "C = give their own viewpoint / personal opinions, not only other people's ideas.",
    explanationVi: "C = nêu own viewpoint / ý kiến cá nhân, không chỉ ý của người khác.",
  },
];
