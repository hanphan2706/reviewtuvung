import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["a little information"],
    },
    {
      id: "g2",
      answers: ["over eleven hundred years"],
    },
    { id: "g3", answers: ["for defence against Danish invaders"] },
    { id: "g4", answers: ["a bit run down"] },
    { id: "g5", answers: ["rather than repair the guest rooms"] },
    {
      id: "g6",
      answers: ["destroyed a few years later"],
    },
    { id: "g7", answers: ["made it more comfortable"] },
    { id: "g8", answers: ["they put it on the market"] },
    {
      id: "g9",
      answers: ["retain the original atmosphere"],
    },
    { id: "g10", answers: ["booklets giving information"] },
    {
      id: "g11",
      answers: ["The castle park's quite extensive", "The castle park is quite extensive"],
    },
    { id: "g12", answers: ["was sadly blown down in 1987"] },
    {
      id: "g13",
      answers: [
        "wander around on your own",
      ],
    },
    { id: "g14", answers: ["Don't miss seeing the Great Hall"] },
    { id: "g15", answers: ["a good view"] },
    {
      id: "g16",
      answers: ["there's no way up from there", "there is no way up from there"],
    },
    {
      id: "g17",
      answers: ["ten minutes' walk or so"],
    },
    {
      id: "g18",
      answers: ["lovely gifts and souvenirs"],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll be arriving at Branley Castle in about five minutes, but before we get there I'll give you ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " about the castle and what our visit will include." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So in fact there's been a castle on this site for " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The first building was a fort constructed in 914 AD ",
        },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " by King Alfred the Great's daughter, who ruled England at the time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the following century, after the Normans conquered England, the land was given to a nobleman called Richard de Vere, and he built a castle there that stayed in the de Vere family for over four hundred years.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, when Queen Elizabeth I announced that she was going to visit the castle in 1576 it was beginning to look ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", and it was decided that " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", they'd make a new house for her out of wood next to the main hall.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "She stayed there for four nights and apparently it was very luxurious, but unfortunately it was ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " by fire." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the seventeenth century the castle belonged to the wealthy Fenys family, who enlarged it and ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, by 1982 the Fenys family could no longer afford to maintain the castle, even though they received government support, and ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It was eventually taken over by a company who owned a number of amusement parks, but when we get there I think you'll see that they've managed to ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " of the castle." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When you go inside, you'll find that in the state rooms there are life-like moving wax models dressed in costumes of different periods in the past, which even carry on conversations together.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As well as that, in every room there are " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " about what the room was used for and the history of the objects and furniture it contains.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At one time sheep were kept there, and in the nineteenth century the owners had a little zoo with animals like rabbits and even a baby elephant.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Nowadays the old zoo buildings are used for public displays of painting and sculpture.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The park also has some beautiful trees, though the oldest of all, which dated back 800 years, ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, you're free to " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " until 4.30, but then at the end of our visit we'll all meet together at the bottom of the Great Staircase.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll then go on to the long gallery, where there's a wonderful collection of photographs showing the family who owned the castle a hundred years ago having tea and cakes in the conservatory – and we'll then take you to the same place, where afternoon tea will be served to you.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now if you can take a look at your plans you'll see Branley Castle has four towers, joined together by a high wall, with the river on two sides.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". That's near the river in the main tower, the biggest one, which was extended and redesigned in the eighteenth century.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If you want to get " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " of the whole castle, you can walk around the walls." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The starting point's quite near the main entrance – walk straight down the path until you get to the south gate, and it's just there. Don't go on to the north gate – ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There'll shortly be a show in which you can see archers displaying their skill with a bow and arrow. The quickest way to get there is to take the first left after the main entrance and follow the path past the bridge, then you'll see it in front of you at the end.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you like animals there's also a display of hunting birds – falcons and eagles and so on. If you go from the main entrance in the direction of the south gate, but turn right before you get there instead of going through it, you'll see it on your right past the first tower.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At 3 pm there's a short performance of traditional dancing on the outdoor stage. That's right at the other side of the castle from the entrance, and over the bridge. It's about ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And finally the shop. It's actually inside one of the towers, but the way in is from the outside. Just take the first left after the main entrance, go down the path and take the first right. It's got some ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Right, so we're just arriving …" }] },
  ],
};

export const CAM14_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "Before Queen Elizabeth I visited the castle in 1576, A repairs were carried out to the guest rooms / B a new building was constructed for her / C a fire damaged part of the main hall",
    questionVi:
      "Trước khi Nữ hoàng Elizabeth I thăm năm 1576: A sửa guest rooms / B xây nhà mới cho bà / C cháy main hall",
    modelParaphraseEn:
      "rather than repair the guest rooms, they'd make a new house for her out of wood next to the main hall",
    modelParaphraseVi:
      "rather than repair the guest rooms, they'd make a new house for her out of wood next to the main hall",
    acceptedAnswers: ["B", "a new building was constructed for her", "new house"],
    explanationEn:
      "B = a new wooden house was built for her. Guest rooms were not repaired. The fire destroyed that house a few years later, not the main hall before the visit.",
    explanationVi:
      "B = xây nhà gỗ mới cho bà. Guest rooms không được sửa. Cháy phá ngôi nhà đó vài năm sau, không phải main hall trước chuyến thăm.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "In 1982, the castle was sold to A the government / B the Fenys family / C an entertainment company",
    questionVi: "Năm 1982 lâu đài được bán cho A chính phủ / B gia đình Fenys / C công ty giải trí",
    modelParaphraseEn:
      "the Fenys family could no longer afford to maintain the castle, even though they received government support … taken over by a company who owned a number of amusement parks",
    modelParaphraseVi:
      "the Fenys family could no longer afford to maintain the castle, even though they received government support … taken over by a company who owned a number of amusement parks",
    acceptedAnswers: ["C", "an entertainment company", "amusement parks"],
    explanationEn:
      "C = amusement-park / entertainment company. Government support was not enough; the Fenys family sold it, they did not buy it.",
    explanationVi:
      "C = công ty amusement parks / giải trí. Hỗ trợ chính phủ không đủ; nhà Fenys bán chứ không mua.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "In some of the rooms, visitors can A speak to experts / B interact with actors / C see models of historical figures moving and talking",
    questionVi: "Trong một số phòng khách có thể A nói với chuyên gia / B tương tác với diễn viên / C xem mô hình cử động và nói",
    modelParaphraseEn:
      "life-like moving wax models dressed in costumes of different periods … which even carry on conversations together",
    modelParaphraseVi:
      "life-like moving wax models dressed in costumes of different periods … which even carry on conversations together",
    acceptedAnswers: ["C", "models of historical figures moving and talking", "wax models"],
    explanationEn:
      "C = moving wax models that talk. Information is in booklets, not from experts or live actors.",
    explanationVi:
      "C = mô hình sáp cử động và nói. Thông tin nằm trong booklets, không phải chuyên gia hay diễn viên.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "In the castle park, visitors can A see an 800-year-old tree / B go to an art exhibition / C visit a small zoo",
    questionVi: "Trong công viên lâu đài khách có thể A xem cây 800 năm / B xem triển lãm nghệ thuật / C thăm sở thú nhỏ",
    modelParaphraseEn: "Nowadays the old zoo buildings are used for public displays of painting and sculpture",
    modelParaphraseVi: "Nowadays the old zoo buildings are used for public displays of painting and sculpture",
    acceptedAnswers: ["B", "go to an art exhibition", "painting and sculpture"],
    explanationEn:
      "B = art exhibition in the old zoo buildings. The 800-year-old tree was blown down in 1987; the zoo was in the nineteenth century.",
    explanationVi:
      "B = triển lãm nghệ thuật trong nhà sở thú cũ. Cây 800 năm bị đổ 1987; sở thú là thế kỷ 19.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn:
      "At the end of the visit, the group will have A afternoon tea in the conservatory / B the chance to meet the castle's owners / C a photograph together on the Great Staircase",
    questionVi: "Cuối chuyến thăm nhóm sẽ A trà chiều ở conservatory / B gặp chủ lâu đài / C chụp ảnh ở Great Staircase",
    modelParaphraseEn:
      "meet together at the bottom of the Great Staircase … photographs … having tea and cakes in the conservatory – and we'll then take you to the same place, where afternoon tea will be served",
    modelParaphraseVi:
      "meet together at the bottom of the Great Staircase … photographs … having tea and cakes in the conservatory – and we'll then take you to the same place, where afternoon tea will be served",
    acceptedAnswers: ["A", "afternoon tea in the conservatory"],
    explanationEn:
      "A = afternoon tea in the conservatory. They only meet at the staircase; owners appear in old photographs, not in person.",
    explanationVi:
      "A = trà chiều ở conservatory. Chỉ tập trung ở cầu thang; chủ nhân chỉ có trong ảnh cũ, không gặp trực tiếp.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Starting point for walking the walls — plan letter",
    questionVi: "Điểm bắt đầu đi trên tường — chữ trên sơ đồ",
    modelParaphraseEn:
      "The starting point's quite near the main entrance – walk straight down the path until you get to the south gate, and it's just there",
    modelParaphraseVi:
      "The starting point's quite near the main entrance – walk straight down the path until you get to the south gate, and it's just there",
    acceptedAnswers: ["H"],
    explanationEn: "H = south gate, straight from the main entrance. No way up from the north gate.",
    explanationVi: "H = south gate, đi thẳng từ main entrance. North gate không có lối lên.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Bow and arrow display — plan letter",
    questionVi: "Biểu diễn cung tên — chữ trên sơ đồ",
    modelParaphraseEn:
      "take the first left after the main entrance and follow the path past the bridge, then you'll see it in front of you at the end",
    modelParaphraseVi:
      "take the first left after the main entrance and follow the path past the bridge, then you'll see it in front of you at the end",
    acceptedAnswers: ["D"],
    explanationEn: "D = first left after the main entrance, past the bridge, at the end of the path.",
    explanationVi: "D = rẽ trái đầu tiên sau main entrance, qua cầu, ở cuối đường.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Hunting birds display — plan letter",
    questionVi: "Trưng bày chim săn — chữ trên sơ đồ",
    modelParaphraseEn:
      "go from the main entrance in the direction of the south gate, but turn right before you get there … on your right past the first tower",
    modelParaphraseVi:
      "go from the main entrance in the direction of the south gate, but turn right before you get there … on your right past the first tower",
    acceptedAnswers: ["F"],
    explanationEn: "F = towards the south gate, turn right before it, on the right past the first tower.",
    explanationVi: "F = về phía south gate, rẽ phải trước cổng, bên phải sau tháp đầu tiên.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Traditional dancing — plan letter",
    questionVi: "Múa truyền thống — chữ trên sơ đồ",
    modelParaphraseEn:
      "traditional dancing on the outdoor stage … right at the other side of the castle from the entrance, and over the bridge",
    modelParaphraseVi:
      "traditional dancing on the outdoor stage … right at the other side of the castle from the entrance, and over the bridge",
    acceptedAnswers: ["A"],
    explanationEn: "A = outdoor stage, far side of the castle from the entrance, over the bridge (~10 minutes).",
    explanationVi: "A = outdoor stage, phía kia lâu đài so với lối vào, qua cầu (khoảng 10 phút).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Shop — plan letter",
    questionVi: "Cửa hàng — chữ trên sơ đồ",
    modelParaphraseEn:
      "inside one of the towers, but the way in is from the outside. Just take the first left after the main entrance, go down the path and take the first right",
    modelParaphraseVi:
      "inside one of the towers, but the way in is from the outside. Just take the first left after the main entrance, go down the path and take the first right",
    acceptedAnswers: ["E"],
    explanationEn: "E = inside a tower; enter from outside: first left after the main entrance, then first right.",
    explanationVi: "E = trong một tháp; vào từ ngoài: rẽ trái đầu sau main entrance, rồi rẽ phải đầu tiên.",
  },
];
