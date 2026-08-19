import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "Today we're going to be looking at animals in urban environments",
        "Today we are going to be looking at animals in urban environments",
      ],
    },
    {
      id: "g2",
      answers: [
        "how they're affected by these environments",
        "how they are affected by these environments",
      ],
    },
    { id: "g3", answers: ["urban environments represent huge upheavals"] },
    { id: "g4", answers: ["the sorts of massive changes that usually happen over millions of years"] },
    { id: "g5", answers: ["only a few species could adapt to this"] },
    {
      id: "g6",
      answers: [
        "there've been various studies about how they manage to learn",
        "there have been various studies about how they manage to learn",
      ],
    },
    {
      id: "g7",
      answers: [
        "they're able to perch on ledges on the walls of city buildings",
        "they are able to perch on ledges on the walls of city buildings",
      ],
    },
    { id: "g8", answers: ["these early immigrants were just the start of a more general movement of animals into cities"] },
    {
      id: "g9",
      answers: [
        "we're not talking about gradual evolution here",
        "we are not talking about gradual evolution here",
      ],
    },
    { id: "g10", answers: ["Let me tell you about some of the studies that have been carried out in this area"] },
    { id: "g11", answers: ["which is a very short time in evolutionary terms"] },
    {
      id: "g12",
      answers: [
        "we can't be sure this means they're more intelligent",
        "we cannot be sure this means they are more intelligent",
        "we can't be sure this means they are more intelligent",
      ],
    },
    {
      id: "g13",
      answers: [
        "the sizes of other parts of the body didn't change",
        "the sizes of other parts of the body did not change",
      ],
    },
    {
      id: "g14",
      answers: [
        "she's been looking not at their anatomy",
        "she has been looking not at their anatomy",
      ],
    },
    {
      id: "g15",
      answers: [
        "they're prepared to face up to a lot of threats",
        "they are prepared to face up to a lot of threats",
      ],
    },
    {
      id: "g16",
      answers: [
        "that's quite sensible for a bird living in the city",
        "that is quite sensible for a bird living in the city",
      ],
    },
    {
      id: "g17",
      answers: ["It's a sensible-seeming adaptation", "It is a sensible-seeming adaptation"],
    },
    {
      id: "g18",
      answers: [
        "A rat that gets scared every time a subway train rolls past won't be very successful",
        "A rat that gets scared every time a subway train rolls past will not be very successful",
      ],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hi. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " and I'm going to be telling you about some research on " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, in evolutionary terms, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And we used to think that " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " new environment." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One species which is well known as being highly adaptable is the crow, and " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " new skills." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Another successful species is the pigeon, because " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", just like they once perched on cliffs by the sea." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But in fact, we're now finding that " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", and of adaptation by these animals to city life." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And one thing that researchers are finding especially interesting is the speed with which they're doing this - ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " - these animals are changing fast." },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So, in the University of Minnesota, a biologist called Emilie Snell-Rood and her colleagues looked at specimens of urbanised small mammals such as mice and gophers that had been collected in Minnesota, and that are now kept in museums there.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And she looked at specimens that had been collected over the last hundred years, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And she found that during that time, these small mammals had experienced a jump in brain size when compared to rural mammals.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", but since " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", it does suggest that something cognitive was going on." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And Snell-Rood thinks that this change might reflect the cognitive demands of adjusting to city life - having to look in different places to find food, for example, and coping with a whole new set of dangers.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then over in Germany at the Max Planck Institute, there's another biologist called Catarina Miranda who's done some experiments with blackbirds living in urban and rural areas.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " but at their behaviour." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So as you might expect, she's found that the urban blackbirds tend to be quite bold - " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " that would frighten away their country counterparts." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But there's one type of situation that does seem to frighten the urban blackbirds, and that's anything new - anything they haven't experienced before.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And if you think about it, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Jonathan Atwell, in Indiana University, is looking at how a range of animals respond to urban environments.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He's found that when they're under stress, their endocrine systems react by reducing the amount of hormones such as corticosterone into their blood.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's just one more study I'd like to mention which is by Sarah Partan and her team, and they've been looking at how squirrels communicate in an urban environment, and they've found that a routine part of their communication is carried out by waving their tails.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You do also see this in the country, but it's much more prevalent in cities, possibly because it's effective in a noisy environment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So what are the long-term implications of this?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One possibility is that we may see completely new species developing in cities." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But on the other hand, it's possible that not all of these adaptations will be permanent.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Once the animal's got accustomed to its new environment, it may no longer need the features it's developed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So, now we've had a look at adaptation." }],
    },
  ],
};

export const CAM13_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "the ______ – because of its general adaptability",
    questionVi: "the ______ – because of its general adaptability",
    modelParaphraseEn: "One species which is well known as being highly adaptable is the crow",
    modelParaphraseVi: "One species which is well known as being highly adaptable is the crow",
    acceptedAnswers: ["crow"],
    explanationEn: "The crow is well known as highly adaptable (studies of how they learn new skills).",
    explanationVi: "The crow nổi tiếng highly adaptable (nghiên cứu cách chúng học skill mới).",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "the pigeon – because walls of city buildings are similar to ______",
    questionVi: "the pigeon – because walls of city buildings are similar to ______",
    modelParaphraseEn: "they're able to perch on ledges on the walls of city buildings, just like they once perched on cliffs by the sea",
    modelParaphraseVi: "they're able to perch on ledges on the walls of city buildings, just like they once perched on cliffs by the sea",
    acceptedAnswers: ["cliffs"],
    explanationEn: "City building walls are like sea cliffs the pigeons once perched on.",
    explanationVi: "Tường nhà trong thành phố giống cliffs ven biển nơi bồ câu từng đậu.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "many urban animals are adapting with unusual ______",
    questionVi: "many urban animals are adapting with unusual ______",
    modelParaphraseEn:
      "one thing that researchers are finding especially interesting is the speed with which they're doing this - we're not talking about gradual evolution here - these animals are changing fast",
    modelParaphraseVi:
      "one thing that researchers are finding especially interesting is the speed with which they're doing this - we're not talking about gradual evolution here - these animals are changing fast",
    acceptedAnswers: ["speed"],
    explanationEn: "They are adapting with unusual speed — changing fast, not gradual evolution.",
    explanationVi: "Chúng thích nghi với speed bất thường — changing fast, không phải evolution từ từ.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "She found the size of their ______ had increased",
    questionVi: "She found the size of their ______ had increased",
    modelParaphraseEn: "these small mammals had experienced a jump in brain size when compared to rural mammals",
    modelParaphraseVi: "these small mammals had experienced a jump in brain size when compared to rural mammals",
    acceptedAnswers: ["brain", "brains"],
    explanationEn: "Museum specimens over 100 years: urban small mammals had a jump in brain size versus rural ones.",
    explanationVi: "Mẫu bảo tàng 100 năm: thú nhỏ đô thị tăng brain size so với thú nông thôn.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "the need to locate new sources of ______ and to deal with new dangers",
    questionVi: "the need to locate new sources of ______ and to deal with new dangers",
    modelParaphraseEn: "having to look in different places to find food, for example, and coping with a whole new set of dangers",
    modelParaphraseVi: "having to look in different places to find food, for example, and coping with a whole new set of dangers",
    acceptedAnswers: ["food"],
    explanationEn: "Bigger brains may reflect finding food in new places and coping with new dangers.",
    explanationVi: "Não lớn hơn có thể vì phải tìm food chỗ mới và đối phó dangers mới.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Catarina Miranda focused on the ______ of urban and rural blackbirds",
    questionVi: "Catarina Miranda focused on the ______ of urban and rural blackbirds",
    modelParaphraseEn: "she's been looking not at their anatomy but at their behaviour",
    modelParaphraseVi: "she's been looking not at their anatomy but at their behaviour",
    acceptedAnswers: ["behaviour", "behaviours", "behavior", "behaviors"],
    explanationEn: "Miranda studied behaviour, not anatomy, of urban vs rural blackbirds.",
    explanationVi: "Miranda nghiên cứu behaviour, không phải anatomy, của blackbirds đô thị và nông thôn.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "urban birds were often braver, but were afraid of situations that were ______",
    questionVi: "urban birds were often braver, but were afraid of situations that were ______",
    modelParaphraseEn: "that's anything new - anything they haven't experienced before",
    modelParaphraseVi: "that's anything new - anything they haven't experienced before",
    acceptedAnswers: ["new"],
    explanationEn: "Urban blackbirds are bold with threats, but frightened by anything new / not experienced before.",
    explanationVi: "Blackbird đô thị táo bạo với mối đe dọa, nhưng sợ bất cứ gì new / chưa trải qua.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "He found that some animals respond to ______ by producing lower levels of hormones",
    questionVi: "He found that some animals respond to ______ by producing lower levels of hormones",
    modelParaphraseEn:
      "when they're under stress, their endocrine systems react by reducing the amount of hormones such as corticosterone into their blood",
    modelParaphraseVi:
      "when they're under stress, their endocrine systems react by reducing the amount of hormones such as corticosterone into their blood",
    acceptedAnswers: ["stress"],
    explanationEn: "Under stress, animals release less corticosterone — a sensible city adaptation.",
    explanationVi: "Khi under stress, chúng tiết ít corticosterone hơn — thích nghi hợp lý ở thành phố.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "urban squirrels use their ______ to help them communicate",
    questionVi: "urban squirrels use their ______ to help them communicate",
    modelParaphraseEn: "a routine part of their communication is carried out by waving their tails",
    modelParaphraseVi: "a routine part of their communication is carried out by waving their tails",
    acceptedAnswers: ["tail", "tails"],
    explanationEn: "Urban squirrels often communicate by waving their tails, especially in noisy cities.",
    explanationVi: "Sóc đô thị thường giao tiếp bằng cách vẫy tail, nhất là trong thành phố ồn.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "some changes may not be ______",
    questionVi: "some changes may not be ______",
    modelParaphraseEn: "it's possible that not all of these adaptations will be permanent",
    modelParaphraseVi: "it's possible that not all of these adaptations will be permanent",
    acceptedAnswers: ["permanent"],
    explanationEn: "New city species are possible, but some adaptations may not be permanent once animals are used to city life.",
    explanationVi: "Có thể xuất hiện loài mới trong thành phố, nhưng một số thích nghi có thể không permanent khi đã quen môi trường.",
  },
];
