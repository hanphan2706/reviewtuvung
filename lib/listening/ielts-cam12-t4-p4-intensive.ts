import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["in relation to urban environments such as cities"] },
    {
      id: "g2",
      answers: [
        "I think this is an area where we're likely to see great changes",
        "I think this is an area where we are likely to see great changes",
      ],
    },
    { id: "g3", answers: ["In the past, researching urban soundscapes was simple"] },
    {
      id: "g4",
      answers: [
        "I used to take my sound meter and I measured the noise somewhere",
      ],
    },
    { id: "g5", answers: ["maps of the sound environment"] },
    { id: "g6", answers: ["the highest noise levels are generally on roads"] },
    {
      id: "g7",
      answers: [
        "they can't capture the complex way that sound varies over time",
        "they cannot capture the complex way that sound varies over time",
      ],
    },
    { id: "g8", answers: ["this sort of noise can be quite significant in summer"] },
    { id: "g9", answers: ["people vary in their perceptions of noise"] },
    { id: "g10", answers: ["noise can cause all sorts of problems"] },
    { id: "g11", answers: ["city-dwellers often suffer from interrupted sleep"] },
    {
      id: "g12",
      answers: ["physical changes in the body affecting the composition of the blood"],
    },
    {
      id: "g13",
      answers: [
        "it doesn't differentiate between different types of noise",
        "it does not differentiate between different types of noise",
      ],
    },
    {
      id: "g14",
      answers: [
        "just measuring decibel levels isn't going to help us here",
        "just measuring decibel levels is not going to help us here",
      ],
    },
    { id: "g15", answers: ["results that at first sight seem contradictory"] },
    {
      id: "g16",
      answers: ["they tend to see it as something to be avoided or reduced as far as possible"],
    },
    {
      id: "g17",
      answers: [
        "regarded as an aesthetic quality, as something that has the qualities of an art form",
      ],
    },
    { id: "g18", answers: ["In the future such programs could use realistic sounds"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "This lecture will be about the science of acoustics, the study of sound, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As an acoustic engineer myself, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We measured levels of sound in decibels, so " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", and then I might ask a sample of people to say at what level the sound became annoying.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "With data like this, acoustic engineers have been able to build up what we call noise maps, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But actually these aren't a lot of use." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "What they do show is that " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " - well, that's not really very surprising." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But there's quite a lot going on that these maps don't show, because " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So they ignore important issues such as the noise someone might hear from the open windows or gardens of their neighbours, and ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "We don't have any databases on this sort of information." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As well as that, these records of sound levels take no account of the fact that " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " - so someone like me with years of working in acoustics might be very different from you in that regard.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But anyway, even though these noise maps are fairly crude, they've been useful in providing information and raising awareness that noise matters, we need to deal with it and so it's a political matter.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And that's important - we need rules and regulation because " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Those of you who are city-dwellers know that things go on 24 hours a day, so " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It's also known that noise can lead to a rise in levels of stress, due to " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And there are other problems as well, for instance if schoolchildren don't have a quiet place to study, their work will suffer.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, one problem with decibel measurement is that " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some types of sounds that most people would probably think of as nice and relaxing might well score quite highly in decibel levels - think of the sound made by a fountain in a town square, for example.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "That's not necessarily something that we'd want to control or reduce." }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So maybe researchers should consider these sorts of sounds in urban design." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is going to be tricky because " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Instead, many researchers are using social science techniques, studying people's emotional response to sound by using questionnaires and so on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So what exactly do people want to hear in an urban environment?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some recent interdisciplinary research has come out with ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " - a city needs to have a sense of activity, so it needs to be lively, with sounds like the clack of high heels on a pavement or the hiss of a coffee machine, but these mustn't be too intrusive, because at the same time we need to be able to relax.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One of the major problems in achieving this will be getting architects and town planners to use the research.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Apart from studying the basics of acoustics, these people receive very little training in this area.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But in fact they should be regarding sound as an opportunity to add to the experience of urban living, whereas at present " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", or something that's just a job for engineers like the street drainage system.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "What's needed is for noise in cities to be " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If we acknowledge this, then we urgently need to know what governs it and how designers can work with it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "We need to develop a complex understanding of many factors." }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "What is the relationship between sound and culture?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What can we learn from disciplines such as psychology about the way that sound interacts with human development and social relationships, and the way that sound affects our thought and feelings?",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Can we learn anything from physics about the nature of sound itself?" }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Today's powerful technologies can also help us." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "To show us their ideas and help us to imagine the effect their buildings will have, architects and town planners already use virtual reality - but these programs are silent.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", meaning that soundscapes could be explored before being built." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So hopefully, using the best technology we can lay our hands on, the city of the future will be a pleasure to the ears as well as the eyes.",
        },
      ],
    },
  ],
};

export const CAM12_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn:
      "do not show other sources of noise, e.g. when windows are open or people's neighbours are in their ______",
    questionVi:
      "do not show other sources of noise, e.g. when windows are open or people's neighbours are in their ______",
    modelParaphraseEn: "the noise someone might hear from the open windows or gardens of their neighbours",
    modelParaphraseVi: "the noise someone might hear from the open windows or gardens of their neighbours",
    acceptedAnswers: ["garden", "gardens"],
    explanationEn: "Noise maps miss neighbour noise from open windows or gardens, which can be significant in summer.",
    explanationVi: "Noise maps bỏ sót tiếng ồn hàng xóm từ cửa sổ mở hoặc gardens, đáng kể vào summer.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "have made people realize that the noise is a ______ issue that must be dealt with",
    questionVi: "have made people realize that the noise is a ______ issue that must be dealt with",
    modelParaphraseEn: "raising awareness that noise matters, we need to deal with it and so it's a political matter",
    modelParaphraseVi: "raising awareness that noise matters, we need to deal with it and so it's a political matter",
    acceptedAnswers: ["political"],
    explanationEn: "Crude maps still raised awareness that noise is a political matter needing rules and regulation.",
    explanationVi: "Bản đồ thô vẫn nâng nhận thức: noise là vấn đề political, cần rules and regulation.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "effect on the ______ of schoolchildren",
    questionVi: "effect on the ______ of schoolchildren",
    modelParaphraseEn: "if schoolchildren don't have a quiet place to study, their work will suffer",
    modelParaphraseVi: "if schoolchildren don't have a quiet place to study, their work will suffer",
    acceptedAnswers: ["work", "study"],
    explanationEn: "Without a quiet place to study, children's work suffers. Official key accepts work or study.",
    explanationVi: "Không có chỗ yên để study thì work của trẻ bị ảnh hưởng. Key chấp nhận work hoặc study.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "some noises can be considered pleasant e.g. the sound of a ______ in a town",
    questionVi: "some noises can be considered pleasant e.g. the sound of a ______ in a town",
    modelParaphraseEn: "think of the sound made by a fountain in a town square, for example",
    modelParaphraseVi: "think of the sound made by a fountain in a town square, for example",
    acceptedAnswers: ["fountain"],
    explanationEn: "A fountain can score highly in decibels yet still be pleasant, so we may not want to reduce it.",
    explanationVi: "Fountain có thể đo decibel cao nhưng vẫn dễ chịu, nên chưa chắc muốn giảm.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "researchers may use methods from ______ sciences e.g. questionnaires",
    questionVi: "researchers may use methods from ______ sciences e.g. questionnaires",
    modelParaphraseEn: "many researchers are using social science techniques … by using questionnaires",
    modelParaphraseVi: "many researchers are using social science techniques … by using questionnaires",
    acceptedAnswers: ["social"],
    explanationEn: "To study emotional responses they use social science methods such as questionnaires.",
    explanationVi: "Để nghiên cứu phản ứng cảm xúc họ dùng phương pháp social science như questionnaires.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "plenty of activity in urban environments which are ______, but also allow people to relax",
    questionVi: "plenty of activity in urban environments which are ______, but also allow people to relax",
    modelParaphraseEn: "it needs to be lively … but these mustn't be too intrusive, because … we need to be able to relax",
    modelParaphraseVi: "it needs to be lively … but these mustn't be too intrusive, because … we need to be able to relax",
    acceptedAnswers: ["lively"],
    explanationEn: "People want a lively city (heels, coffee machines) that is still not too intrusive to relax in.",
    explanationVi: "Người ta muốn thành phố lively (gót giày, máy cà phê) nhưng không quá intrusive để vẫn relax.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "architects and town planners do not get much ______ in acoustics",
    questionVi: "architects and town planners do not get much ______ in acoustics",
    modelParaphraseEn: "Apart from studying the basics of acoustics, these people receive very little training in this area",
    modelParaphraseVi: "Apart from studying the basics of acoustics, these people receive very little training in this area",
    acceptedAnswers: ["training"],
    explanationEn: "Beyond basic acoustics, architects and planners get very little training in this area.",
    explanationVi: "Ngoài acoustics cơ bản, architects và planners nhận rất ít training.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "we need to know how sound relates to ______",
    questionVi: "we need to know how sound relates to ______",
    modelParaphraseEn: "What is the relationship between sound and culture?",
    modelParaphraseVi: "What is the relationship between sound and culture?",
    acceptedAnswers: ["culture"],
    explanationEn: "Understanding sound as art means knowing how sound relates to culture.",
    explanationVi: "Hiểu sound như nghệ thuật nghĩa là biết sound liên quan thế nào tới culture.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "whether physics can help us understand the ______ of sound",
    questionVi: "whether physics can help us understand the ______ of sound",
    modelParaphraseEn: "Can we learn anything from physics about the nature of sound itself?",
    modelParaphraseVi: "Can we learn anything from physics about the nature of sound itself?",
    acceptedAnswers: ["nature"],
    explanationEn: "Physics is asked what it can teach about the nature of sound itself.",
    explanationVi: "Physics được hỏi có thể dạy gì về nature of sound.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "current disadvantage of virtual reality programs: they are ______",
    questionVi: "current disadvantage of virtual reality programs: they are ______",
    modelParaphraseEn: "architects and town planners already use virtual reality - but these programs are silent",
    modelParaphraseVi: "architects and town planners already use virtual reality - but these programs are silent",
    acceptedAnswers: ["silent"],
    explanationEn: "VR already predicts building effects, but programs are silent; future ones could use realistic sounds.",
    explanationVi: "VR đã dự đoán hiệu ứng công trình, nhưng programs are silent; tương lai có thể dùng realistic sounds.",
  },
];
