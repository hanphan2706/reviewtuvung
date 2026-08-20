import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["chose to study"] },
    { id: "g2", answers: ["or to be more precise"] },
    { id: "g3", answers: ["well over a thousand"] },
    { id: "g4", answers: ["which belong to the phylum Tardigrada"] },
    { id: "g5", answers: ["'Moss piglet' is another name", "Moss piglet is another name"] },
    { id: "g6", answers: ["who coined the name Tardigrada"] },
    { id: "g7", answers: ["too many to describe here"] },
    { id: "g8", answers: ["similar physical traits"] },
    { id: "g9", answers: ["a bit like a barrel"] },
    { id: "g10", answers: ["which isn't exactly very scientific", "which is not exactly very scientific"] },
    { id: "g11", answers: ["every part of the world"] },
    { id: "g12", answers: ["which is incredibly hot"] },
    { id: "g13", answers: ["in the event of"] },
    { id: "g14", answers: ["If conditions become too extreme"] },
    { id: "g15", answers: ["by retracting their head and legs"] },
    { id: "g16", answers: ["in a matter of"] },
    { id: "g17", answers: ["never been repeated"] },
    { id: "g18", answers: ["come as no surprise"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "For my project on invertebrates, I " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " tardigrades." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "These are microscopic — " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " — near-microscopic animals." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There are " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " known species of these tiny animals, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Most tardigrades range in length from 0.05 to 1 millimetre, though the largest species can grow to be 1.2 millimetres in length. They are also sometimes called 'water bears': 'water' because that's where they thrive best, and 'bear' because of the way they move. ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " for tardigrades because of the way they look when viewed from the front. They were first discovered in Germany in 1773 by Johann Goeze, ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As I say, there are many different species of tardigrade — " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " — but, generally speaking, the different species share " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They have a body which is short, and also rounded — ",
        },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " — and the body comprises four segments. Each segment has a pair of legs, at the end of which are between four and eight sharp claws.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I should also say that some species don't have any claws: what they have are discs, and these work by means of suction. They enable the tardigrade to cling to surfaces or to grip its prey. Within the body, there are no lungs, or any organs for breathing at all. Instead, oxygen and also blood are transported in a fluid that fills the cavity of the body.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As far as the tardigrade's head is concerned, the best way I can describe this is that it looks rather strange — a bit squashed even — though many of the websites I looked at described its appearance as cute, ",
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
          text: "The tardigrade's mouth is a kind of tube that can open outwards to reveal teeth-like structures known as 'stylets'. These are sharp enough to pierce plant or animal cells.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So, where are tardigrades found? Well, they live in " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", in a variety of habitats: most commonly, on the bed of a lake, or on many kinds of plants or in very wet environments.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's been some interesting research which has found that tardigrades are capable of surviving radiation and very high pressure, and they're also able to withstand temperatures as low as minus 200 degrees centigrade, or highs of more than 148 degrees centigrade, ",
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
          text: "It has been said that tardigrades could survive long after human beings have been wiped out, even ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " an asteroid hitting the earth." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " and tardigrades are at risk of drying out, they enter a state called cryptobiosis.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They form a little ball, called a tun — that's T-U-N — ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", and their metabolism drops to less than one percent of normal levels.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They can stay in this state for decades, and if re-introduced to water, when they will come back to life ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " a few hours." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "While in this state of cryptobiosis, tardigrades produce a protein that protects their DNA. In 2016, scientists revived two tardigrades that had been tuns for more than 30 years. There was a report that, in 1948, a 120-year-old tun was revived, but this experiment has ",
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
          text: "There are currently several tests taking place in space, to determine how long tardigrades might be able to survive there. I believe the record so far is 10 days.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So, erm, moving on. In terms of their diet, tardigrades consume liquids in order to survive. Although they have teeth, they don't use these for chewing. They suck the juices from moss, or extract fluid from seaweed, but some species prey on other tardigrades, from other species or within their own. I suppose this isn't surprising, given that tardigrades are mainly comprised of liquid and are coated with a type of gel.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Finally, I'd like to mention the conservation status of tardigrades. It is estimated that they have been in existence for approximately half a billion years and, in that time, they have survived five mass extinctions. So, it will probably ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " to you, that tardigrades have not been evaluated by the International Union for Conservation of Nature and are not on any endangered list. Some researchers have described them as thriving.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Does anyone have any questions they'd like to ask?" }],
    },
  ],
};

export const CAM19_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "also known as water 'bears' (due to how they ______)",
    questionVi: "also known as water 'bears' (due to how they ______)",
    modelParaphraseEn: "'bear' because of the way they move",
    modelParaphraseVi: "'bear' because of the way they move",
    acceptedAnswers: ["move"],
    explanationEn: "'Water' is habitat; 'bear' is from the way they move — not from looking like a bear.",
    explanationVi: "'Water' là môi trường sống; 'bear' vì cách chúng move — không phải vì trông giống gấu.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "a ______ round body and four pairs of legs",
    questionVi: "a ______ round body and four pairs of legs",
    modelParaphraseEn: "They have a body which is short, and also rounded — a bit like a barrel",
    modelParaphraseVi: "They have a body which is short, and also rounded — a bit like a barrel",
    acceptedAnswers: ["short"],
    explanationEn: "The notes already have round; the missing shape word is short (barrel-shaped).",
    explanationVi: "Đề đã có round; từ còn thiếu là short (hình thùng).",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "claws or ______ for gripping",
    questionVi: "claws or ______ for gripping",
    modelParaphraseEn: "some species don't have any claws: what they have are discs, and these work by means of suction",
    modelParaphraseVi: "some species don't have any claws: what they have are discs, and these work by means of suction",
    acceptedAnswers: ["discs", "disks"],
    explanationEn: "Instead of claws, some species have suction discs for gripping.",
    explanationVi: "Một số loài không có claws mà có discs hút để bám.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "body filled with a liquid that carries both ______ and blood",
    questionVi: "body filled with a liquid that carries both ______ and blood",
    modelParaphraseEn: "oxygen and also blood are transported in a fluid that fills the cavity of the body",
    modelParaphraseVi: "oxygen and also blood are transported in a fluid that fills the cavity of the body",
    acceptedAnswers: ["oxygen"],
    explanationEn: "No lungs — a body fluid carries oxygen and blood.",
    explanationVi: "Không có phổi — dịch cơ thể vận chuyển oxygen và blood.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "mouth shaped like a ______ with teeth called stylets",
    questionVi: "mouth shaped like a ______ with teeth called stylets",
    modelParaphraseEn: "The tardigrade's mouth is a kind of tube that can open outwards to reveal … 'stylets'",
    modelParaphraseVi: "The tardigrade's mouth is a kind of tube that can open outwards to reveal … 'stylets'",
    acceptedAnswers: ["tube"],
    explanationEn: "The mouth is tube-shaped; stylets are the teeth-like structures.",
    explanationVi: "Miệng hình tube; stylets là cấu trúc giống răng.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "very resilient and can exist in very low or high ______",
    questionVi: "very resilient and can exist in very low or high ______",
    modelParaphraseEn: "able to withstand temperatures as low as minus 200 degrees … or highs of more than 148 degrees",
    modelParaphraseVi: "able to withstand temperatures as low as minus 200 degrees … or highs of more than 148 degrees",
    acceptedAnswers: ["temperatures", "temperature"],
    explanationEn: "Radiation and pressure are also mentioned, but the notes gap is temperatures.",
    explanationVi: "Có nhắc bức xạ và áp suất, nhưng chỗ trống trên đề là temperatures.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "A type of ______ ensures their DNA is not damaged",
    questionVi: "A type of ______ ensures their DNA is not damaged",
    modelParaphraseEn: "tardigrades produce a protein that protects their DNA",
    modelParaphraseVi: "tardigrades produce a protein that protects their DNA",
    acceptedAnswers: ["protein"],
    explanationEn: "In cryptobiosis they produce a protein that protects DNA.",
    explanationVi: "Trong cryptobiosis chúng tạo protein bảo vệ DNA.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "how many days they can stay alive in ______",
    questionVi: "how many days they can stay alive in ______",
    modelParaphraseEn: "several tests taking place in space, to determine how long tardigrades might be able to survive there",
    modelParaphraseVi: "several tests taking place in space, to determine how long tardigrades might be able to survive there",
    acceptedAnswers: ["space"],
    explanationEn: "Research is testing survival time in space (record so far: 10 days).",
    explanationVi: "Nghiên cứu thử sống bao lâu trong space (kỷ lục: 10 ngày).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "consume liquids, e.g., those found in moss or ______",
    questionVi: "consume liquids, e.g., those found in moss or ______",
    modelParaphraseEn: "They suck the juices from moss, or extract fluid from seaweed",
    modelParaphraseVi: "They suck the juices from moss, or extract fluid from seaweed",
    acceptedAnswers: ["seaweed"],
    explanationEn: "Moss is already on the notes; the other liquid source is seaweed.",
    explanationVi: "Moss đã có trên đề; nguồn dịch kia là seaweed.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "They are not considered to be ______",
    questionVi: "They are not considered to be ______",
    modelParaphraseEn: "have not been evaluated by the IUCN and are not on any endangered list",
    modelParaphraseVi: "have not been evaluated by the IUCN and are not on any endangered list",
    acceptedAnswers: ["endangered"],
    explanationEn: "Not evaluated / not on any endangered list — some researchers say they are thriving.",
    explanationVi: "Chưa được IUCN đánh giá / không nằm danh sách endangered — một số nhà nghiên cứu nói chúng đang thịnh.",
  },
];
