import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["a 20th-century development"] },
    { id: "g2", answers: ["date back to prehistoric times"] },
    { id: "g3", answers: ["its cleansing properties"] },
    { id: "g4", answers: ["as early as 2800 BC"] },
    { id: "g5", answers: ["no reference to the purpose"] },
    {
      id: "g6",
      answers: ["for aesthetic reasons"],
    },
    { id: "g7", answers: ["without soap in streams"] },
    { id: "g8", answers: ["according to an ancient Roman legend"] },
    { id: "g9", answers: ["the effort required"] },
    { id: "g10", answers: ["so did bathing"] },
    { id: "g11", answers: ["became very popular"] },
    { id: "g12", answers: ["medicinal and cleaning purposes"] },
    { id: "g13", answers: ["impact of filth"] },
    { id: "g14", answers: ["guarded their trade secrets"] },
    { id: "g15", answers: ["for shaving and shampooing"] },
    { id: "g16", answers: ["large-scale commercial soapmaking"] },
    { id: "g17", answers: ["some 20 years later"] },
    { id: "g18", answers: ["a luxury item"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Nowadays, we use different products for personal cleanliness, laundry, dishwashing and household cleaning, but this is very much ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The origins of cleanliness " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Since water is essential for life, the earliest people lived near water and knew something about ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " – at least that it rinsed mud off their hands." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "During the excavation of ancient Babylon, evidence was found that soapmaking was known " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Archaeologists discovered cylinders made of clay, with inscriptions on them saying that fats were boiled with ashes. This is a method of making soap, though there's ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " of this material." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The early Greeks bathed " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " and apparently didn't use soap.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Instead, they cleaned their bodies with blocks of sand, pumice and ashes, then anointed themselves with oil, and scraped off the oil and dirt with a metal instrument known as a strigil. They also used oil mixed with ashes. Clothes were washed ",
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
          text: "The ancient Germans and Gauls are also credited with discovering how to make a substance called 'soap', made of melted animal fat and ashes. They used this mixture to tint their hair red.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Soap got its name, " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", from Mount Sapo, where animals were sacrificed, leaving deposits of animal fat. Rain washed these deposits, along with wood ashes, down into the clay soil along the River Tiber. Women found that this mixture greatly reduced ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " to wash their clothes." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As Roman civilisation advanced, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The first of the famous Roman baths, supplied with water from their aqueducts, was built around 312 BC. The baths were luxurious, and bathing ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And by the second century AD, the Greek physician Galen recommended soap for both ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After the fall of Rome in 467 AD and the resulting decline in bathing habits, much of Europe felt the ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " on public health." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This lack of personal cleanliness and related unsanitary living conditions were major factors in the outbreaks of disease in the Middle Ages, and especially the Black Death of the 14th century.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Nevertheless, soapmaking became an established craft in Europe, and associations of soapmakers ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " closely. Vegetable and animal oils were used with ashes of plants, along with perfume, apparently for the first time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Gradually more varieties of soap became available ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", as well as bathing and laundering." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "A major step toward " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " occurred in 1791, when a French chemist, Nicholas Leblanc, patented a process for turning salt into soda ash, or sodium carbonate.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Soda ash is the alkali obtained from ashes that combines with fat to form soap. The Leblanc process yielded quantities of good-quality, inexpensive soda ash.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Modern soapmaking was born " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", in the early 19th century, with the discovery by Michel Eugène Chevreul, another French chemist, of the chemical nature and relationship of fats, glycerine and fatty acids.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "His studies established the basis for both fat and soap chemistry, and soapmaking became a science. Further developments during the 19th century made it easier and cheaper to manufacture soap.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Until the 19th century, soap was regarded as " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", and was heavily taxed in several countries." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As it became more readily available, it became an everyday necessity, a development that was reinforced when the high tax was removed. Soap was then something ordinary people could afford, and cleanliness standards improved.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "With this widespread use came the development of milder soaps for bathing and soaps for use in the washing machines that were available to consumers by the turn of the 20th century.",
        },
      ],
    },
  ],
};

export const CAM15_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "water was used to wash off ______",
    questionVi: "water was used to wash off ______",
    modelParaphraseEn: "at least that it rinsed mud off their hands",
    modelParaphraseVi: "at least that it rinsed mud off their hands",
    acceptedAnswers: ["mud"],
    explanationEn: "Earliest people knew water rinsed mud off their hands.",
    explanationVi: "Người sớm nhất biết nước rinsed mud off their hands.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "soap-like material found in ______ cylinders",
    questionVi: "soap-like material found in ______ cylinders",
    modelParaphraseEn: "Archaeologists discovered cylinders made of clay",
    modelParaphraseVi: "Archaeologists discovered cylinders made of clay",
    acceptedAnswers: ["clay"],
    explanationEn: "Babylon: clay cylinders with inscriptions about boiling fats with ashes.",
    explanationVi: "Babylon: cylinders bằng clay, khắc việc đun mỡ với tro.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "used a strigil – scraper made of ______",
    questionVi: "used a strigil – scraper made of ______",
    modelParaphraseEn: "scraped off the oil and dirt with a metal instrument known as a strigil",
    modelParaphraseVi: "scraped off the oil and dirt with a metal instrument known as a strigil",
    acceptedAnswers: ["metal"],
    explanationEn: "The strigil was a metal scraper, not sand or pumice (those cleaned the body first).",
    explanationVi: "Strigil là dụng cụ cạo bằng metal, không phải cát/pumice (dùng để làm sạch trước).",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "used soap to colour their ______",
    questionVi: "used soap to colour their ______",
    modelParaphraseEn: "They used this mixture to tint their hair red",
    modelParaphraseVi: "They used this mixture to tint their hair red",
    acceptedAnswers: ["hair"],
    explanationEn: "Germans and Gauls tinted their hair red with fat-and-ash 'soap'.",
    explanationVi: "Người Đức và Gaul nhuộm hair đỏ bằng 'soap' mỡ-tro.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "from about 312 BC, water carried to Roman ______ by aqueducts",
    questionVi: "from about 312 BC, water carried to Roman ______ by aqueducts",
    modelParaphraseEn: "The first of the famous Roman baths, supplied with water from their aqueducts, was built around 312 BC",
    modelParaphraseVi: "The first of the famous Roman baths, supplied with water from their aqueducts, was built around 312 BC",
    acceptedAnswers: ["bath", "baths"],
    explanationEn: "Aqueducts supplied water to Roman baths from about 312 BC.",
    explanationVi: "Aqueducts dẫn nước tới Roman baths từ khoảng 312 BC.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "decline in bathing contributed to occurrence of ______",
    questionVi: "decline in bathing contributed to occurrence of ______",
    modelParaphraseEn: "major factors in the outbreaks of disease in the Middle Ages",
    modelParaphraseVi: "major factors in the outbreaks of disease in the Middle Ages",
    acceptedAnswers: ["disease", "diseases"],
    explanationEn: "Poor cleanliness after Rome's fall contributed to disease, including the Black Death.",
    explanationVi: "Vệ sinh kém sau khi Rome sụp đổ góp phần gây disease, gồm Black Death.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "______ began to be added to soap",
    questionVi: "______ began to be added to soap",
    modelParaphraseEn: "along with perfume, apparently for the first time",
    modelParaphraseVi: "along with perfume, apparently for the first time",
    acceptedAnswers: ["perfume"],
    explanationEn: "European soapmakers first added perfume with plant ashes and oils.",
    explanationVi: "Thợ xà phòng châu Âu lần đầu thêm perfume cùng tro thực vật và dầu.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "1791: Leblanc invented a way of making soda ash from ______",
    questionVi: "1791: Leblanc invented a way of making soda ash from ______",
    modelParaphraseEn: "patented a process for turning salt into soda ash, or sodium carbonate",
    modelParaphraseVi: "patented a process for turning salt into soda ash, or sodium carbonate",
    acceptedAnswers: ["salt"],
    explanationEn: "Leblanc turned salt into soda ash (not the other way round).",
    explanationVi: "Leblanc biến salt thành soda ash (không phải chiều ngược).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "early 1800s: Chevreul turned soapmaking into a ______",
    questionVi: "early 1800s: Chevreul turned soapmaking into a ______",
    modelParaphraseEn: "soapmaking became a science",
    modelParaphraseVi: "soapmaking became a science",
    acceptedAnswers: ["science"],
    explanationEn: "Chevreul's chemistry of fats, glycerine and fatty acids made soapmaking a science.",
    explanationVi: "Hoá học chất béo, glycerine và fatty acids của Chevreul biến soapmaking thành science.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "from 1800s, there was no longer a ______ on soap",
    questionVi: "from 1800s, there was no longer a ______ on soap",
    modelParaphraseEn: "a development that was reinforced when the high tax was removed",
    modelParaphraseVi: "a development that was reinforced when the high tax was removed",
    acceptedAnswers: ["tax"],
    explanationEn: "Soap had been a taxed luxury; removing the tax made it an everyday necessity.",
    explanationVi: "Soap từng là xa xỉ bị đánh tax; bỏ thuế khiến nó thành nhu cầu hàng ngày.",
  },
];
