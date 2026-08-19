import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm going to talk about", "I am going to talk about"] },
    { id: "g2", answers: ["In other words", "in other words"] },
    { id: "g3", answers: ["We already have"] },
    { id: "g4", answers: ["The aim of such a system"] },
    { id: "g5", answers: ["In order to do this"] },
    { id: "g6", answers: ["But unfortunately"] },
    { id: "g7", answers: ["for one thing"] },
    { id: "g8", answers: ["compared with how they were"] },
    { id: "g9", answers: ["So there's a lot more of them", "So there is a lot more of them"] },
    { id: "g10", answers: ["But in spite of this"] },
    { id: "g11", answers: ["one thing you may be surprised to learn"] },
    { id: "g12", answers: ["And it isn't just", "And it is not just"] },
    { id: "g13", answers: ["A greater threat is"] },
    { id: "g14", answers: ["In addition", "in addition"] },
    { id: "g15", answers: ["And even if"] },
    { id: "g16", answers: ["So those are some of the problems"] },
    { id: "g17", answers: ["Let's consider now", "Let us consider now"] },
    { id: "g18", answers: ["As we continue to push forward"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "In today's astronomy lecture, " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " the need for a system to manage the movement of satellites and other objects in orbit around the Earth. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", a Space Traffic Management system." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " effective Air Traffic Control systems that are used internationally to ensure that planes navigate our skies safely. Well, Space Traffic Management is a similar concept, but focusing on the control of satellites.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " would be to prevent the danger of collisions in space between the objects in orbit around the Earth. " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", we'd need to have a set of legal measures, and we'd also have to develop the technical systems to enable us to prevent such accidents.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", at present we don't actually have a Space Traffic Management system that works. So why not? What are the problems in developing such a system?",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", satellites are relatively cheap these days, " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " in the past, meaning that more people can afford to put them into space.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " out there, and people aren't just launching single satellites but whole constellations, consisting of thousands of them designed to work together. So space is getting more crowded every day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " is that you can launch a satellite into space and, once it's out there, it doesn't have to send back any information to Earth to allow its identification.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So while we have international systems for ensuring we know where the planes in our skies are, and to prevent them from colliding with one another, when it comes to the safety of satellites, at present we don't have anything like enough proper ways of tracking them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " entire satellites that we need to consider. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " the huge amount of space debris in orbit around the Earth – broken bits of satellite and junk from space stations and so on. And some of these are so small that they can be very hard to identify, but they can still be very dangerous.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", some operators may be unwilling to share information about the satellites they've launched. For example, a satellite may be designed for military purposes, or it may have been launched for commercial reasons, and the operators don't want competitors to have information about it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " the operators are willing to provide it, the information isn't easy to collect. Details are needed about the object itself, as well as about its location at a particular time – and remember that a satellite isn't very big, and it's likely to be moving at thousands of kilometres an hour.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We don't have any sensors that can constantly follow something moving so fast, so all that the scientists can do is to put forward a prediction concerning where the satellite is heading next.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " that we're facing. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " some of the solutions that have been suggested." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One key issue is the way in which information is dealt with. We need more information, but it also needs to be accessible at a global level, so we need to establish shared standards that we can all agree on for the way in which this information is presented. We already do this in other areas of science, so although this is a challenge, it's not an impossible task.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then, as all this information's collected, it needs to be put together so it can be used, and that will involve creating a single database on which it can be entered.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " new developments, congestion of the space environment is only going to increase. To cope with this, we need to develop a system like the one I've described to coordinate the work of the numerous spacecraft operators, but it's also essential that this system is one that establishes trust in the people that use it, both nationally and at a global level.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "One interesting development …" }],
    },
  ],
};

export const CAM18_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "would aim to set up legal and ______ ways of improving safety",
    questionVi: "would aim to set up legal and ______ ways of improving safety",
    modelParaphraseEn: "a set of legal measures, and we'd also have to develop the technical systems",
    modelParaphraseVi: "a set of legal measures, and we'd also have to develop the technical systems",
    acceptedAnswers: ["technical", "technical systems"],
    explanationEn: "Legal is already on the notes; the other half is technical systems.",
    explanationVi: "Legal đã có trên đề; phần còn lại là technical systems.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "Satellites are now quite ______ and therefore more widespread",
    questionVi: "Satellites are now quite ______ and therefore more widespread",
    modelParaphraseEn: "satellites are relatively cheap these days compared with how they were in the past",
    modelParaphraseVi: "satellites are relatively cheap these days compared with how they were in the past",
    acceptedAnswers: ["cheap"],
    explanationEn: "Cheaper than before → more people can launch them.",
    explanationVi: "Rẻ hơn trước → nhiều người phóng được.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "constellations made up of ______ of satellites",
    questionVi: "constellations made up of ______ of satellites",
    modelParaphraseEn: "whole constellations, consisting of thousands of them designed to work together",
    modelParaphraseVi: "whole constellations, consisting of thousands of them designed to work together",
    acceptedAnswers: ["thousands"],
    explanationEn: "Not one satellite but constellations of thousands.",
    explanationVi: "Không phải một vệ tinh mà cả chòm gồm thousands.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "not required to transmit information to help with their ______",
    questionVi: "not required to transmit information to help with their ______",
    modelParaphraseEn: "it doesn't have to send back any information to Earth to allow its identification",
    modelParaphraseVi: "it doesn't have to send back any information to Earth to allow its identification",
    acceptedAnswers: ["identification"],
    explanationEn: "No duty to send data that would allow identification.",
    explanationVi: "Không bắt buộc gửi dữ liệu để identification.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "There are few systems for ______ satellites",
    questionVi: "There are few systems for ______ satellites",
    modelParaphraseEn: "we don't have anything like enough proper ways of tracking them",
    modelParaphraseVi: "we don't have anything like enough proper ways of tracking them",
    acceptedAnswers: ["tracking"],
    explanationEn: "Unlike planes, there are not enough ways of tracking satellites.",
    explanationVi: "Khác máy bay, chưa có đủ hệ thống tracking vệ tinh.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "unwilling to share details of satellites used for ______ or commercial reasons",
    questionVi: "unwilling to share details of satellites used for ______ or commercial reasons",
    modelParaphraseEn: "designed for military purposes, or launched for commercial reasons",
    modelParaphraseVi: "designed for military purposes, or launched for commercial reasons",
    acceptedAnswers: ["military", "military purposes"],
    explanationEn: "Commercial is already on the notes; the other reason is military.",
    explanationVi: "Commercial đã có trên đề; lý do kia là military.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "hard to collect details of the object's ______ at a given time",
    questionVi: "hard to collect details of the object's ______ at a given time",
    modelParaphraseEn: "Details are needed about the object itself, as well as about its location at a particular time",
    modelParaphraseVi: "Details are needed about the object itself, as well as about its location at a particular time",
    acceptedAnswers: ["location"],
    explanationEn: "Need the object's location at a particular time – it moves thousands of km/h.",
    explanationVi: "Cần location của vật thể tại một thời điểm – nó bay hàng nghìn km/h.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Scientists can only make a ______ about where the satellite will go",
    questionVi: "Scientists can only make a ______ about where the satellite will go",
    modelParaphraseEn: "all that the scientists can do is to put forward a prediction concerning where the satellite is heading next",
    modelParaphraseVi: "all that the scientists can do is to put forward a prediction concerning where the satellite is heading next",
    acceptedAnswers: ["prediction"],
    explanationEn: "No sensors can follow it constantly, so only a prediction of its path.",
    explanationVi: "Không có cảm biến theo sát liên tục, chỉ còn prediction quỹ đạo.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "The information should be combined in one ______",
    questionVi: "The information should be combined in one ______",
    modelParaphraseEn: "that will involve creating a single database on which it can be entered",
    modelParaphraseVi: "that will involve creating a single database on which it can be entered",
    acceptedAnswers: ["database"],
    explanationEn: "Put the collected information together in one database.",
    explanationVi: "Gộp thông tin đã thu vào một database.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "a coordinated system must be designed to create ______ in its users",
    questionVi: "a coordinated system must be designed to create ______ in its users",
    modelParaphraseEn: "a system that establishes trust in the people that use it, both nationally and at a global level",
    modelParaphraseVi: "a system that establishes trust in the people that use it, both nationally and at a global level",
    acceptedAnswers: ["trust"],
    explanationEn: "Coordination is not enough; the system must create trust among users.",
    explanationVi: "Không chỉ phối hợp; hệ thống phải tạo trust cho người dùng.",
  },
];
