import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'm going to talk about marine archaeology",
        "I am going to talk about marine archaeology",
      ],
    },
    {
      id: "g2",
      answers: [
        "I'll give you an example",
        "I will give you an example",
      ],
    },
    { id: "g3", answers: ["which seems to have been thriving until around 7,000 BC"] },
    { id: "g4", answers: ["The residents kept cattle, caught fish and stored grain"] },
    { id: "g5", answers: ["that might have been used for ceremonial purposes"] },
    { id: "g6", answers: ["it now lies ten metres below the surface of the Mediterranean"] },
    {
      id: "g7",
      answers: [
        "It's been described as the largest and best preserved prehistoric settlement",
        "It has been described as the largest and best preserved prehistoric settlement",
      ],
    },
    { id: "g8", answers: ["For a fuller picture, researchers need more sunken settlements"] },
    {
      id: "g9",
      answers: ["Underwater research used to require divers to find shipwrecks or artefacts"],
    },
    {
      id: "g10",
      answers: [
        "which means they don't need to be operated by a person",
        "which means they do not need to be operated by a person",
      ],
    },
    { id: "g11", answers: ["To navigate they use sensors, such as compasses and sonar"] },
    { id: "g12", answers: ["they can be launched from the shore or a small ship"] },
    { id: "g13", answers: ["can communicate with each other"] },
    { id: "g14", answers: ["work out the most efficient way to survey a site"] },
    { id: "g15", answers: ["Creating an internet in the sea for AUVs to communicate is no easy matter"] },
    { id: "g16", answers: ["Wifi networks on land use electromagnetic waves"] },
    {
      id: "g17",
      answers: [
        "There's also a system that enables AUVs to share information from seabed scans",
        "There is also a system that enables AUVs to share information from seabed scans",
      ],
    },
    { id: "g18", answers: ["Marine archaeologists are excited about the huge potential of these AUVs"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", the branch of archaeology focusing on human interaction with the sea, lakes and rivers.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's the study of ships, cargoes, shipping facilities, and other physical remains.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ", then go on to show how this type of research is being transformed by the use of the latest technology.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Atlit-Yam was a village on the coast of the eastern Mediterranean, ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They had wells for fresh water, many of their houses were built around a courtyard and were constructed of stone.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The village contained an impressive monument: seven half-tonne stones standing in a semicircle around a spring, ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Atlit-Yam may have been destroyed swiftly by a tsunami, or climate change may have caused glaciers to melt and sea levels to rise, flooding the village gradually.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Whatever the cause, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", buried under sand at the bottom of the sea." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: " ever found on the seabed." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "For marine archaeologists, Atlit-Yam is a treasure trove." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Research on the buildings, tools and the human remains has revealed how the bustling village once functioned, and even what diseases some of its residents suffered from.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But of course this is only one small village, one window into a lost world.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", but the hard part is finding them." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", but in the second half of the twentieth century, various types of underwater vehicles were developed, some controlled from a ship on the surface, and some of them autonomous, ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Autonomous underwater vehicles, or AUVs, are used in the oil industry, for instance, to create maps of the seabed before rigs and pipelines are installed.",
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
          text: "Until relatively recently they were very expensive, and so heavy that they had to be launched from a large vessel with a winch.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the latest AUVs are much easier to manoeuvre – ",
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
          text: "And they're much cheaper, which makes them more accessible to research teams.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "They're also very sophisticated." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "They " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " and, for example, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", or to find particular objects on the seabed." },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Field tests show the approach can work." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For example, in a trial in 2015, three AUVs searched for wrecks at Marzamemi, off the coast of Sicily.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The site is the final resting place of an ancient Roman ship, which sank in the sixth century AD while ferrying prefabricated marble elements for the construction of an early church.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The AUVs mapped the area in detail, finding other ships carrying columns of the same material.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g15" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", but in water these will only travel a few centimetres." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Instead, a more complex mix of technologies is required.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For short distances, AUVs can share data using light, while acoustic waves are used to communicate over long distances.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But more creative solutions are also being developed, where an AUV working on the seabed offloads data to a second AUV, which then surfaces and beams the data home to the research team using a satellite.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: ", and other data." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So if an AUV surveying the seabed finds an intriguing object, it can share the coordinates of the object – that is, its position – with a nearby AUV that carries superior cameras, and arrange for that AUV to make a closer inspection of the object.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: " for their discipline." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One site where they're going to be deployed is the Gulf of Baratti, off the Italian coast.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In 1974, a 2,000-year-old Roman vessel was discovered here, in 18 metres of water.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When it sank, it was carrying medical goods, in wooden or tin receptacles.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Its cargo gives us insight into the treatments available all those years ago, including tablets that are thought to have been dissolved to form a cleansing liquid for the eyes.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Other Roman ships went down nearby, taking their cargoes with them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Some held huge pots made of terracotta." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some were used for transporting cargoes of olive oil, and others held wine.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In many cases it's only these containers that remain, while the wooden ships have been buried under silt on the seabed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Another project that's about to …" }],
    },
  ],
};

export const CAM14_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "had a semicircle of large stones round a ______",
    questionVi: "có vòng cung đá lớn quanh ______",
    modelParaphraseEn: "seven half-tonne stones standing in a semicircle around a spring",
    modelParaphraseVi: "seven half-tonne stones standing in a semicircle around a spring",
    acceptedAnswers: ["spring"],
    explanationEn: "The monument is seven large stones in a semicircle around a spring (possibly ceremonial).",
    explanationVi: "Đài tưởng niệm là bảy tảng đá lớn xếp bán nguyệt quanh spring (có thể ceremonial).",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "research carried out into structures, ______ and human remains",
    questionVi: "nghiên cứu cấu trúc, ______ và di cốt người",
    modelParaphraseEn: "Research on the buildings, tools and the human remains",
    modelParaphraseVi: "Research on the buildings, tools and the human remains",
    acceptedAnswers: ["tools"],
    explanationEn: "Research covered buildings (structures), tools and human remains — diseases as well as how the village functioned.",
    explanationVi: "Nghiên cứu gồm buildings (structures), tools và human remains — cả bệnh tật lẫn cách làng vận hành.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "traditional AUVs used in the oil industry, e.g. to make ______",
    questionVi: "AUV truyền thống dùng trong dầu khí, ví dụ để lập ______",
    modelParaphraseEn: "to create maps of the seabed before rigs and pipelines are installed",
    modelParaphraseVi: "to create maps of the seabed before rigs and pipelines are installed",
    acceptedAnswers: ["maps"],
    explanationEn: "Oil-industry AUVs create maps of the seabed before installing rigs and pipelines.",
    explanationVi: "AUV ngành dầu tạo maps đáy biển trước khi lắp rigs và pipelines.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "problems: they were expensive and ______",
    questionVi: "vấn đề: đắt và ______",
    modelParaphraseEn: "so heavy that they had to be launched from a large vessel with a winch",
    modelParaphraseVi: "so heavy that they had to be launched from a large vessel with a winch",
    acceptedAnswers: ["heavy"],
    explanationEn: "Old AUVs were expensive and heavy (needed a large vessel and a winch). Latest ones launch from the shore or a small ship.",
    explanationVi: "AUV cũ đắt và heavy (cần tàu lớn và tời). AUV mới phóng từ bờ hoặc tàu nhỏ.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Marzamemi, Sicily: Roman ships carrying architectural elements made of ______",
    questionVi: "Marzamemi, Sicily: tàu La Mã chở chi tiết kiến trúc bằng ______",
    modelParaphraseEn: "ferrying prefabricated marble elements for the construction of an early church",
    modelParaphraseVi: "ferrying prefabricated marble elements for the construction of an early church",
    acceptedAnswers: ["marble"],
    explanationEn: "The sixth-century Roman ship carried prefabricated marble church elements; other ships had columns of the same material.",
    explanationVi: "Tàu La Mã thế kỷ 6 chở chi tiết marble đúc sẵn cho nhà thờ; tàu khác chở cột cùng chất liệu.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "______ is used for short-distance communication, acoustic waves for long distance",
    questionVi: "______ dùng liên lạc cự ly ngắn, sóng âm cho cự ly dài",
    modelParaphraseEn: "For short distances, AUVs can share data using light, while acoustic waves are used to communicate over long distances",
    modelParaphraseVi: "For short distances, AUVs can share data using light, while acoustic waves are used to communicate over long distances",
    acceptedAnswers: ["light"],
    explanationEn: "Light for short distance; acoustic waves for long distance. Electromagnetic WiFi only travels a few centimetres in water.",
    explanationVi: "Light cho cự ly ngắn; acoustic waves cho cự ly dài. WiFi điện từ trong nước chỉ đi vài centimet.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "an AUV can send data to another AUV that has better ______, for example",
    questionVi: "một AUV có thể gửi dữ liệu cho AUV khác có ______ tốt hơn",
    modelParaphraseEn: "share the coordinates … with a nearby AUV that carries superior cameras",
    modelParaphraseVi: "share the coordinates … with a nearby AUV that carries superior cameras",
    acceptedAnswers: ["camera", "cameras"],
    explanationEn: "Official key: camera(s). A nearby AUV with superior cameras inspects an intriguing object more closely.",
    explanationVi: "Đáp án chính thức: camera(s). AUV gần đó có cameras tốt hơn sẽ kiểm tra vật thể kỹ hơn.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Gulf of Baratti: one wreck carrying ______ supplies",
    questionVi: "Gulf of Baratti: một xác tàu chở hàng ______",
    modelParaphraseEn: "it was carrying medical goods, in wooden or tin receptacles",
    modelParaphraseVi: "it was carrying medical goods, in wooden or tin receptacles",
    acceptedAnswers: ["medical"],
    explanationEn: "The 2,000-year-old Roman vessel was carrying medical goods / supplies.",
    explanationVi: "Tàu La Mã 2,000 năm chở medical goods / supplies.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "tables may have been used for cleaning the ______",
    questionVi: "viên thuốc có thể dùng để rửa ______",
    modelParaphraseEn: "tablets that are thought to have been dissolved to form a cleansing liquid for the eyes",
    modelParaphraseVi: "tablets that are thought to have been dissolved to form a cleansing liquid for the eyes",
    acceptedAnswers: ["eyes"],
    explanationEn: "Tablets dissolved into a cleansing liquid for the eyes (the notes say 'tables' as a prompt for tablets).",
    explanationVi: "Tablets hoà thành dung dịch rửa eyes (đề ghi 'tables' gợi tablets).",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "others carrying containers of olive oil or ______",
    questionVi: "tàu khác chở thùng dầu ô liu hoặc ______",
    modelParaphraseEn: "Some were used for transporting cargoes of olive oil, and others held wine",
    modelParaphraseVi: "Some were used for transporting cargoes of olive oil, and others held wine",
    acceptedAnswers: ["wine"],
    explanationEn: "Terracotta pots: some olive oil, others wine. Often only the containers survive under silt.",
    explanationVi: "Vò terracotta: một số olive oil, số khác wine. Thường chỉ còn thùng dưới lớp bùn.",
  },
];
