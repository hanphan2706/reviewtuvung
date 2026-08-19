import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'm very pleased to welcome this evening's guest speaker",
        "I am very pleased to welcome this evening's guest speaker",
      ],
    },
    {
      id: "g2",
      answers: [
        "It's been a feature of the city for well over a century",
        "It has been a feature of the city for well over a century",
      ],
    },
    { id: "g3", answers: ["unlike many public parks that started in private ownership"] },
    { id: "g4", answers: ["It was unclear who actually owned the land"] },
    { id: "g5", answers: ["You may have noticed the statue near one of the entrances"] },
    { id: "g6", answers: ["Once the council had become the legal owner"] },
    { id: "g7", answers: ["remember the park is in a densely populated residential area"] },
    { id: "g8", answers: ["which eventually made the council change its mind about the future of the land"] },
    { id: "g9", answers: ["At one stage the army considered taking it over"] },
    {
      id: "g10",
      answers: ["After the war, the park was turned back more or less to how it had been before 1914"],
    },
    { id: "g11", answers: ["Plans for transforming it were drawn up at various times"] },
    { id: "g12", answers: ["and were finished on schedule last year"] },
    {
      id: "g13",
      answers: [
        "If you look at this map, you'll see the familiar outline of the park",
        "If you look at this map, you will see the familiar outline of the park",
      ],
    },
    { id: "g14", answers: ["which makes it much more visible"] },
    { id: "g15", answers: ["There are two areas that are particularly intended for children"] },
    {
      id: "g16",
      answers: ["They've been doubled, from four to eight", "They have been doubled, from four to eight"],
    },
    {
      id: "g17",
      answers: [
        "Something else I'd like to mention is the new fitness area",
        "Something else I would like to mention is the new fitness area",
      ],
    },
    {
      id: "g18",
      answers: ["Now, as you're all gardeners", "Now, as you are all gardeners"],
    },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", Mark Logan, who's going to tell us about the recent transformation of Minster Park. Over to you, Mark.",
        },
      ],
    },
    { speaker: "MARK", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "MARK",
      segments: [{ type: "text", text: "I'm sure you're all familiar with Minster Park." }],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and has been the responsibility of the city council for most of that time." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "text", text: "What perhaps isn't so well known is the origin of the park: " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", as the garden of a large house, for instance, Minster was some waste land, which people living nearby started planting with flowers in 1892.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", and this wasn't settled until 20 years later, when the council took possession of it.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "It's of Diane Gosforth, who played a key role in the history of the park.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", it planned to sell the land for housing." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "Many local people wanted it to remain a place that everyone could go to, to enjoy the fresh air and natural environment – " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "text", text: "Diane Gosforth was one of those people, and she organised petitions and demonstrations, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "Soon after this the First World War broke out, in 1914, and most of the park was dug up and planted with vegetables, which were sold locally.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " for troop exercises and got as far as contacting the city council, then decided the park was too small to be of use.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "There were occasional public meetings during the war, in an area that had been retained as grass.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", and continued almost unchanged until recently." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", most recently in 2013, though they were revised in 2015, before any work had started.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "text", text: "The changes finally got going in 2016, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "OK, let me tell you about some of the changes that have been made – and some things that have been retained.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", with the river forming the northern boundary, and a gate in each of the other three walls.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "The statue of Diane Gosforth has been moved: it used to be close to the south gate, but it's now immediately to the north of the lily pond, almost in the centre of the park, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "There's a new area of wooden sculptures, which are on the river bank, where the path from the east gate makes a sharp bend.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". The playground has been enlarged and improved, and that's between the river and the path that leads from the pond to the river.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "Then there's a new maze, a circular series of paths, separated by low hedges. That's near the west gate – you go north from there towards the river and then turn left to reach it.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "text", text: "There have been tennis courts in the park for many years, and " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        {
          type: "text",
          text: "They're still in the south-west corner of the park, where there's a right-angle bend in the path.",
        },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". This is right next to the lily pond on the same side as the west gate." },
      ],
    },
    {
      speaker: "MARK",
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", I'm sure you'll like to hear about the plants that have been chosen for the park.",
        },
      ],
    },
  ],
};

export const CAM15_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "The park was originally established A as an amenity provided by the city council / B as land belonging to a private house / C as a shared area set up by the local community",
    questionVi: "Công viên ban đầu A tiện ích hội đồng / B đất nhà tư / C khu chung do cộng đồng lập",
    modelParaphraseEn:
      "unlike many public parks that started in private ownership … Minster was some waste land, which people living nearby started planting with flowers in 1892",
    modelParaphraseVi:
      "unlike many public parks that started in private ownership … Minster was some waste land, which people living nearby started planting with flowers in 1892",
    acceptedAnswers: ["C", "shared area", "local community", "people living nearby"],
    explanationEn: "C = waste land planted by nearby residents in 1892, not a private garden or a council amenity at the start.",
    explanationVi: "C = đất hoang do dân gần đó trồng hoa năm 1892, không phải vườn tư hay tiện ích hội đồng ban đầu.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn:
      "Why is there a statue of Diane Gosforth? A resident who helped to lead a campaign / B council member / C senior park worker",
    questionVi: "Tượng Diane Gosforth vì A cư dân dẫn chiến dịch / B thành viên hội đồng / C nhân viên công viên",
    modelParaphraseEn: "she organised petitions and demonstrations, which eventually made the council change its mind",
    modelParaphraseVi: "she organised petitions and demonstrations, which eventually made the council change its mind",
    acceptedAnswers: ["A", "resident", "campaign", "petitions and demonstrations"],
    explanationEn: "A = local resident who organised petitions and demonstrations. Not a councillor or park employee.",
    explanationVi: "A = cư dân tổ chức petitions và demonstrations. Không phải councillor hay nhân viên công viên.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "During the First World War the park was mainly used for A troop exercises / B growing vegetables / C public meetings",
    questionVi: "Thế chiến I công viên chủ yếu A tập quân / B trồng rau / C họp công cộng",
    modelParaphraseEn: "most of the park was dug up and planted with vegetables, which were sold locally",
    modelParaphraseVi: "most of the park was dug up and planted with vegetables, which were sold locally",
    acceptedAnswers: ["B", "growing vegetables", "planted with vegetables"],
    explanationEn: "B = planted with vegetables. The army considered troop exercises but decided the park was too small; meetings were only occasional.",
    explanationVi: "B = trồng vegetables. Quân đội từng xét tập trận nhưng công viên quá nhỏ; họp công cộng chỉ thỉnh thoảng.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "When did the physical transformation of the park begin? A 2013 / B 2015 / C 2016",
    questionVi: "Cải tạo vật lý bắt đầu khi nào? A 2013 / B 2015 / C 2016",
    modelParaphraseEn: "The changes finally got going in 2016, and were finished on schedule last year",
    modelParaphraseVi: "The changes finally got going in 2016, and were finished on schedule last year",
    acceptedAnswers: ["C", "2016"],
    explanationEn: "C = 2016. Plans in 2013, revised 2015, but work had not started until 2016.",
    explanationVi: "C = 2016. Kế hoạch 2013, sửa 2015, nhưng chưa khởi công đến 2016.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "statue of Diane Gosforth — E (immediately north of the lily pond, almost centre)",
    questionVi: "tượng Diane Gosforth — E (ngay phía bắc lily pond, gần giữa)",
    modelParaphraseEn: "it's now immediately to the north of the lily pond, almost in the centre of the park",
    modelParaphraseVi: "it's now immediately to the north of the lily pond, almost in the centre of the park",
    acceptedAnswers: ["E", "north of the lily pond", "centre of the park"],
    explanationEn: "E = moved from the south gate to immediately north of the lily pond, almost centre.",
    explanationVi: "E = dời từ cổng nam đến ngay phía bắc lily pond, gần trung tâm.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "wooden sculptures — C (river bank, sharp bend from the east gate)",
    questionVi: "tượng gỗ — C (bờ sông, khúc cua gắt từ cổng đông)",
    modelParaphraseEn: "on the river bank, where the path from the east gate makes a sharp bend",
    modelParaphraseVi: "on the river bank, where the path from the east gate makes a sharp bend",
    acceptedAnswers: ["C", "river bank", "east gate", "sharp bend"],
    explanationEn: "C = river bank at the sharp bend of the east-gate path.",
    explanationVi: "C = bờ sông, chỗ path từ cổng đông rẽ gắt.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "playground — B (between the river and the path from the pond to the river)",
    questionVi: "sân chơi — B (giữa sông và path từ ao ra sông)",
    modelParaphraseEn: "that's between the river and the path that leads from the pond to the river",
    modelParaphraseVi: "that's between the river and the path that leads from the pond to the river",
    acceptedAnswers: ["B", "between the river and the path", "from the pond to the river"],
    explanationEn: "B = enlarged playground between the river and the pond-to-river path.",
    explanationVi: "B = sân chơi mở rộng, giữa sông và path từ ao ra sông.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "maze — A (near west gate: north towards the river, then left)",
    questionVi: "mê cung — A (gần cổng tây: đi bắc về sông, rồi rẽ trái)",
    modelParaphraseEn: "near the west gate – you go north from there towards the river and then turn left to reach it",
    modelParaphraseVi: "near the west gate – you go north from there towards the river and then turn left to reach it",
    acceptedAnswers: ["A", "west gate", "north", "turn left"],
    explanationEn: "A = circular maze near the west gate: north towards the river, then left.",
    explanationVi: "A = maze hình tròn gần cổng tây: đi bắc về sông rồi rẽ trái.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "tennis courts — G (south-west corner, right-angle bend in the path)",
    questionVi: "sân tennis — G (góc tây nam, path vuông góc)",
    modelParaphraseEn: "They're still in the south-west corner of the park, where there's a right-angle bend in the path",
    modelParaphraseVi: "They're still in the south-west corner of the park, where there's a right-angle bend in the path",
    acceptedAnswers: ["G", "south-west corner", "right-angle bend"],
    explanationEn: "G = doubled to eight courts, still south-west corner at the right-angle path bend.",
    explanationVi: "G = tăng lên 8 sân, vẫn góc tây nam chỗ path vuông góc.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "fitness area — D (right next to the lily pond, west-gate side)",
    questionVi: "khu thể dục — D (sát lily pond, phía cổng tây)",
    modelParaphraseEn: "right next to the lily pond on the same side as the west gate",
    modelParaphraseVi: "right next to the lily pond on the same side as the west gate",
    acceptedAnswers: ["D", "next to the lily pond", "west gate"],
    explanationEn: "D = new fitness area beside the lily pond on the west-gate side.",
    explanationVi: "D = khu thể dục mới sát lily pond về phía cổng tây.",
  },
];
