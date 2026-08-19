import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'll start by examining its early history",
        "I will start by examining its early history",
      ],
    },
    { id: "g2", answers: ["played an important role in many creation myths"] },
    { id: "g3", answers: ["weather was attributed to the whims of the gods"] },
    { id: "g4", answers: ["drawing the correct conclusions"] },
    { id: "g5", answers: ["the first short-range weather forecasts"] },
    {
      id: "g6",
      answers: ["The ancient Greeks were the first to develop a more scientific approach"],
    },
    { id: "g7", answers: ["his ideas held sway for nearly 2,000 years"] },
    {
      id: "g8",
      answers: ["bright circles of light around the sun, the moon and bright stars"],
    },
    { id: "g9", answers: ["Many of his observations were surprisingly accurate"] },
    { id: "g10", answers: ["he also jumped to quite a few wrong conclusions"] },
    { id: "g11", answers: ["Errors like this were rectified from the Renaissance onwards"] },
    { id: "g12", answers: ["accepted as the chief authority on weather theory"] },
    { id: "g13", answers: ["based on very good observations and are accurate"] },
    { id: "g14", answers: ["could only be based on personal observation"] },
    { id: "g15", answers: ["which measured humidity"] },
    { id: "g16", answers: ["pressure decreases with altitude"] },
    { id: "g17", answers: ["they started collecting weather observation data systematically"] },
    {
      id: "g18",
      answers: [
        "we'll continue from that point next week",
        "we will continue from that point next week",
      ],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In this series of lectures about the history of weather forecasting, ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " – that'll be the subject of today's talk." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "OK, so we'll start by going back thousands of years. Most ancient cultures had weather gods, and weather catastrophes, such as floods, ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Generally, " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", as the wide range of weather gods in various cultures shows. For instance, there's the Egyptian sun god Ra, and Thor, the Norse god of thunder and lightning.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Many ancient civilisations developed rites such as dances in order to make the weather gods look kindly on them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the weather was of daily importance: observing the skies and ",
        },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " from these observations was really important, in fact their survival depended on it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It isn't known when people first started to observe the skies, but at around 650 BC, the Babylonians produced ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", based on their observations of clouds and other phenomena.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Chinese also recognised weather patterns, and by 300 BC, astronomers had developed a calendar which divided the year into 24 festivals, each associated with a different weather phenomenon.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " to explaining the weather." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The work of the philosopher and scientist Aristotle, in the fourth century BC, is especially noteworthy, as ",
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
          text: "In 340 BC, he wrote a book in which he attempted to account for the formation of rain, clouds, wind and storms. He also described celestial phenomena such as haloes – that is, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " – and comets." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For example, he believed that heat could cause water to evaporate. But ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", such as that winds are breathed out by the Earth." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "For nearly 2,000 years, Aristotle's work was " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Alongside this, though, in the Middle Ages weather observations were passed on in the form of proverbs, such as 'Red sky at night, shepherd's delight; red sky in the morning, shepherd's warning'. Many of these are ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", as contemporary meteorologists have discovered." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "For centuries, any attempt to forecast the weather " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", but in the fifteenth century scientists began to see the need for instruments.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Until then, the only ones available were weather vanes – to determine the wind direction – and early versions of rain gauges. One of the first, invented in the fifteenth century, was a hygrometer, ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". This was one of many inventions that contributed to the development of weather forecasting.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In 1592, the Italian scientist and inventor Galileo developed the world's first thermometer. His student Torricelli later invented the barometer, which allowed people to measure atmospheric pressure. In 1648, the French philosopher Pascal proved that ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". This discovery was verified by English astronomer Halley in 1686, and Halley was also the first person to map trade winds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This increasing ability to measure factors related to weather helped scientists to understand the atmosphere and its processes better, and ",
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
          text: "In the eighteenth century, the scientist and politician Benjamin Franklin carried out work on electricity and lightning in particular, but he was also very interested in weather and studied it throughout most of his life. It was Franklin who discovered that storms generally travel from west to east.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In addition to new meteorological instruments, other developments contributed to our understanding of the atmosphere. People in different locations began to keep records, and in the mid-nineteenth century, the invention of the telegraph made it possible for these records to be collated. This led, by the end of the nineteenth century, to the first weather services.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It was not until the early twentieth century that mathematics and physics became part of meteorology, and ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM14_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "many cultures invented ______ and other ceremonies to make the weather gods friendly",
    questionVi: "many cultures invented ______ and other ceremonies to make the weather gods friendly",
    modelParaphraseEn: "developed rites such as dances in order to make the weather gods look kindly on them",
    modelParaphraseVi: "developed rites such as dances in order to make the weather gods look kindly on them",
    acceptedAnswers: ["dances"],
    explanationEn: "Rites such as dances to make the weather gods look kindly on them.",
    explanationVi: "Nghi lễ như dances để các thần thời tiết nhìn họ một cách tử tế.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "people needed to observe and interpret the sky to ensure their ______",
    questionVi: "people needed to observe and interpret the sky to ensure their ______",
    modelParaphraseEn:
      "observing the skies and drawing the correct conclusions … was really important, in fact their survival depended on it",
    modelParaphraseVi:
      "observing the skies and drawing the correct conclusions … was really important, in fact their survival depended on it",
    acceptedAnswers: ["survival"],
    explanationEn: "Correct conclusions from sky observations: their survival depended on it.",
    explanationVi: "Kết luận đúng từ quan sát bầu trời: survival phụ thuộc vào điều đó.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "around 650 BC, Babylonians started forecasting, using weather phenomena such as ______",
    questionVi: "around 650 BC, Babylonians started forecasting, using weather phenomena such as ______",
    modelParaphraseEn: "the first short-range weather forecasts, based on their observations of clouds and other phenomena",
    modelParaphraseVi: "the first short-range weather forecasts, based on their observations of clouds and other phenomena",
    acceptedAnswers: ["clouds"],
    explanationEn: "Babylonians: short-range forecasts from clouds and other phenomena (around 650 BC).",
    explanationVi: "Babylon: dự báo ngắn hạn từ clouds và hiện tượng khác (khoảng 650 BC).",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "by 300 BC, the Chinese had a calendar made up of a number of ______ connected with the weather",
    questionVi: "by 300 BC, the Chinese had a calendar made up of a number of ______ connected with the weather",
    modelParaphraseEn:
      "a calendar which divided the year into 24 festivals, each associated with a different weather phenomenon",
    modelParaphraseVi:
      "a calendar which divided the year into 24 festivals, each associated with a different weather phenomenon",
    acceptedAnswers: ["festivals"],
    explanationEn: "Chinese calendar: 24 festivals, each linked to a weather phenomenon (by 300 BC).",
    explanationVi: "Lịch Trung Quốc: 24 festivals, mỗi cái gắn một hiện tượng thời tiết (đến 300 BC).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Aristotle also described haloes and ______",
    questionVi: "Aristotle also described haloes and ______",
    modelParaphraseEn:
      "He also described celestial phenomena such as haloes … and comets",
    modelParaphraseVi:
      "He also described celestial phenomena such as haloes … and comets",
    acceptedAnswers: ["comets"],
    explanationEn: "Haloes (circles of light) and comets. Rain/clouds/wind/storms are formation, not this blank.",
    explanationVi: "Haloes (vòng sáng) và comets. Rain/clouds/wind/storms là sự hình thành, không phải chỗ trống này.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "many proverbs, e.g. about the significance of the colour of the ______, passed on accurate information",
    questionVi: "many proverbs, e.g. about the significance of the colour of the ______, passed on accurate information",
    modelParaphraseEn: "Red sky at night, shepherd's delight; red sky in the morning, shepherd's warning",
    modelParaphraseVi: "Red sky at night, shepherd's delight; red sky in the morning, shepherd's warning",
    acceptedAnswers: ["sky"],
    explanationEn: "Proverb about the colour of the sky. Many such proverbs are accurate.",
    explanationVi: "Tục ngữ về màu của sky. Nhiều tục ngữ kiểu này là chính xác.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "15th century: scientists recognised value of ______ for the first time",
    questionVi: "15th century: scientists recognised value of ______ for the first time",
    modelParaphraseEn:
      "in the fifteenth century scientists began to see the need for instruments. Until then, the only ones available were weather vanes and early rain gauges",
    modelParaphraseVi:
      "in the fifteenth century scientists began to see the need for instruments. Until then, the only ones available were weather vanes and early rain gauges",
    acceptedAnswers: ["instruments"],
    explanationEn: "Need for instruments recognised in the 15th century (beyond vanes and rain gauges).",
    explanationVi: "Nhận ra cần instruments ở thế kỷ 15 (ngoài vanes và rain gauges).",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Galileo invented the ______",
    questionVi: "Galileo invented the ______",
    modelParaphraseEn: "In 1592 … Galileo developed the world's first thermometer",
    modelParaphraseVi: "In 1592 … Galileo developed the world's first thermometer",
    acceptedAnswers: ["thermometer"],
    explanationEn: "Galileo: thermometer (1592). Torricelli: barometer. Hygrometer is earlier (15th century).",
    explanationVi: "Galileo: thermometer (1592). Torricelli: barometer. Hygrometer sớm hơn (thế kỷ 15).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "18th century: Franklin identified the movement of ______",
    questionVi: "18th century: Franklin identified the movement of ______",
    modelParaphraseEn: "It was Franklin who discovered that storms generally travel from west to east",
    modelParaphraseVi: "It was Franklin who discovered that storms generally travel from west to east",
    acceptedAnswers: ["storms"],
    explanationEn: "Franklin: storms generally travel west to east. Lightning/electricity is other work, not this blank.",
    explanationVi: "Franklin: storms thường đi từ tây sang đông. Lightning/electricity là nghiên cứu khác.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "19th century: data from different locations could be sent to the same place by ______",
    questionVi: "19th century: data from different locations could be sent to the same place by ______",
    modelParaphraseEn:
      "in the mid-nineteenth century, the invention of the telegraph made it possible for these records to be collated",
    modelParaphraseVi:
      "in the mid-nineteenth century, the invention of the telegraph made it possible for these records to be collated",
    acceptedAnswers: ["telegraph"],
    explanationEn: "Telegraph let records from different places be collated → first weather services.",
    explanationVi: "Telegraph giúp ghép records từ nhiều nơi → dịch vụ thời tiết đầu tiên.",
  },
];
