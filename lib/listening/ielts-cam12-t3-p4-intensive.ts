import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "we've been looking at how man-made changes in our environment can affect wildlife",
        "we have been looking at how man-made changes in our environment can affect wildlife",
      ],
    },
    {
      id: "g2",
      answers: [
        "Mercury's one of the 120 or so elements that make up all matter",
        "Mercury is one of the 120 or so elements that make up all matter",
      ],
    },
    {
      id: "g3",
      answers: ["It's a shiny, silvery substance", "It is a shiny, silvery substance"],
    },
    {
      id: "g4",
      answers: [
        "it's not used much for domestic purposes now because it's highly toxic",
        "it is not used much for domestic purposes now because it is highly toxic",
      ],
    },
    {
      id: "g5",
      answers: [
        "the amount of mercury in the environment's increasing",
        "the amount of mercury in the environment is increasing",
      ],
    },
    { id: "g6", answers: ["The main source of energy that most of them use is still coal"] },
    {
      id: "g7",
      answers: [
        "when it's burned it releases mercury into the atmosphere",
        "when it is burned it releases mercury into the atmosphere",
      ],
    },
    {
      id: "g8",
      answers: [
        "she's looking for more subtle sub-effects",
        "she is looking for more subtle sub-effects",
      ],
    },
    {
      id: "g9",
      answers: [
        "And she's particularly focusing on the effects of mercury on bird song",
        "And she is particularly focusing on the effects of mercury on bird song",
      ],
    },
    {
      id: "g10",
      answers: ["the process of song learning happens at a particular stage in the birds' development"],
    },
    {
      id: "g11",
      answers: [
        "they're less attractive to female birds",
        "they are less attractive to female birds",
      ],
    },
    {
      id: "g12",
      answers: [
        "Now the way she's carrying out this research is worth thinking about",
        "Now the way she is carrying out this research is worth thinking about",
      ],
    },
    {
      id: "g13",
      answers: [
        "She's using a mixture of studies using birds kept in laboratories, and studies carried out outdoors in the wild",
        "She is using a mixture of studies using birds kept in laboratories, and studies carried out outdoors in the wild",
      ],
    },
    {
      id: "g14",
      answers: [
        "they don't have to worry about going out and finding the birds in order to observe them",
        "they do not have to worry about going out and finding the birds in order to observe them",
      ],
    },
    { id: "g15", answers: ["they may be transporting mercury far from contaminated sites"] },
    {
      id: "g16",
      answers: ["these birds likely had mercury levels high enough to warrant concern for human consumption"],
    },
    {
      id: "g17",
      answers: [
        "this process is very similar in the brain regions it involves and even the genes that are involved",
      ],
    },
    {
      id: "g18",
      answers: [
        "whether more value is placed on human economic wellbeing or environmental wellbeing",
        "whether more value is placed on human economic well-being or environmental well-being",
      ],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, so " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Now I'll discuss a particular example." }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Let's take a look at mercury." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and it has the symbol Hg." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You may have seen it in old-fashioned thermometers, but " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But the problem is that " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The main reason for this is the power plants used to produce electricity.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some of this gets deposited into lakes and rivers, and if it's ingested by a fish it's not excreted, it stays in the fish's body and it enters the food chain.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So it's been known for some time that birds which eat fish may be affected, but what wasn't known until quite recently is that those that eat insects can also be affected.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So a woman called Claire Varian-Ramos is doing some research on how this is affecting birds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And rather than looking at how many birds are actually killed by mercury poisoning, ",
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
          text: "And these may be to do with the behaviour of the birds, or with the effect of mercury on the way their brain works, so whether it leads to problems with memory, for example.",
        },
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
        { type: "text", text: "Now, " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", and what you may not know is that a young bird seems to acquire this skill by listening to the songs produced by its father, rather than by any other bird.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And Varian-Ramos has already found in her research that if young male birds are exposed to mercury, if they eat food contaminated with mercury, then the songs they produce aren't as complex as those produced by other birds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So quite low-level exposure to mercury is likely to have an impact on male birds in a natural situation, because it can mean that ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", and so it can affect their chances of reproduction." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The lab-based studies have the advantage that you don't get all the variables you would in a natural setting, so the experimenter has a much higher level of control, and that means they can be more confident about their results in some ways.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And of course " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So what are the implications here for humans?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, because many birds are migratory, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For example, it's been found that ducks who'd been feeding at a contaminated site were later shot by hunters over a thousand kilometres away, and presumably eaten.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In addition, going back to song learning by birds, we saw that this may be affected by mercury contamination.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, we also know that in humans, mercury causes developmental delays in the acquisition of language, and in fact ",
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
          text: "But mercury contamination has other important implications for humans as well.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's now known that an unborn child can be affected if the food eaten by its mother contains high levels of mercury, and these effects can be quite substantial.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "In the end, it comes down to " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's true there are new regulations for mercury emissions from power plants, but these will need billions of dollars to implement, and increase costs for everyone.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Some argue that's too much to pay to protect wildlife." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But as we've seen, the issues go beyond that, and I think it's an issue we need to consider very carefully.",
        },
      ],
    },
  ],
};

export const CAM12_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "It has also recently been found to affect birds which feed on ______",
    questionVi: "It has also recently been found to affect birds which feed on ______",
    modelParaphraseEn:
      "what wasn't known until quite recently is that those that eat insects can also be affected",
    modelParaphraseVi:
      "what wasn't known until quite recently is that those that eat insects can also be affected",
    acceptedAnswers: ["insects"],
    explanationEn: "Fish-eating birds were already known; insect-eating birds are the recent finding.",
    explanationVi: "Chim ăn cá đã biết từ trước; phát hiện mới là chim ăn insects.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "the effects on birds' ______ or mental processes, e.g. memory",
    questionVi: "the effects on birds' ______ or mental processes, e.g. memory",
    modelParaphraseEn:
      "these may be to do with the behaviour of the birds, or with the effect of mercury on the way their brain works",
    modelParaphraseVi:
      "these may be to do with the behaviour of the birds, or with the effect of mercury on the way their brain works",
    acceptedAnswers: ["behaviour", "behavior"],
    explanationEn: "Subtle effects on behaviour or mental processes such as memory.",
    explanationVi: "Ảnh hưởng tinh vi lên behaviour hoặc mental processes như memory.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "the effects on bird song (usually learned from a bird's ______)",
    questionVi: "the effects on bird song (usually learned from a bird's ______)",
    modelParaphraseEn:
      "a young bird seems to acquire this skill by listening to the songs produced by its father, rather than by any other bird",
    modelParaphraseVi:
      "a young bird seems to acquire this skill by listening to the songs produced by its father, rather than by any other bird",
    acceptedAnswers: ["father"],
    explanationEn: "Song is learned from the father, not from any other bird.",
    explanationVi: "Bird song học từ father, không phải chim khác.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "songs learned by birds exposed to mercury are less ______",
    questionVi: "songs learned by birds exposed to mercury are less ______",
    modelParaphraseEn: "the songs they produce aren't as complex as those produced by other birds",
    modelParaphraseVi: "the songs they produce aren't as complex as those produced by other birds",
    acceptedAnswers: ["complex", "complicated"],
    explanationEn: "Mercury-exposed young males produce songs that are less complex / complicated.",
    explanationVi: "Chim đực non nhiễm mercury hát kém complex / complicated hơn.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "this may have a negative effect on birds' ______",
    questionVi: "this may have a negative effect on birds' ______",
    modelParaphraseEn:
      "they're less attractive to female birds, and so it can affect their chances of reproduction",
    modelParaphraseVi:
      "they're less attractive to female birds, and so it can affect their chances of reproduction",
    acceptedAnswers: ["reproduction", "breeding"],
    explanationEn: "Less attractive songs can affect chances of reproduction / breeding.",
    explanationVi: "Bài hát kém hấp dẫn ảnh hưởng chances of reproduction / breeding.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Lab-based studies allow more ______ for the experimenter",
    questionVi: "Lab-based studies allow more ______ for the experimenter",
    modelParaphraseEn:
      "you don't get all the variables you would in a natural setting, so the experimenter has a much higher level of control",
    modelParaphraseVi:
      "you don't get all the variables you would in a natural setting, so the experimenter has a much higher level of control",
    acceptedAnswers: ["control"],
    explanationEn: "Labs cut natural variables, so the experimenter has a much higher level of control.",
    explanationVi: "Lab giảm biến số tự nhiên, experimenter có higher level of control.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Migrating birds such as ______ containing mercury may be eaten by humans",
    questionVi: "Migrating birds such as ______ containing mercury may be eaten by humans",
    modelParaphraseEn:
      "ducks who'd been feeding at a contaminated site were later shot by hunters over a thousand kilometres away, and presumably eaten",
    modelParaphraseVi:
      "ducks who'd been feeding at a contaminated site were later shot by hunters over a thousand kilometres away, and presumably eaten",
    acceptedAnswers: ["ducks", "duck"],
    explanationEn: "The example of migratory birds carrying mercury is ducks shot by hunters far away.",
    explanationVi: "Ví dụ chim di cư mang mercury là ducks bị hunters bắn ở rất xa.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "Mercury also causes problems in learning ______",
    questionVi: "Mercury also causes problems in learning ______",
    modelParaphraseEn: "in humans, mercury causes developmental delays in the acquisition of language",
    modelParaphraseVi: "in humans, mercury causes developmental delays in the acquisition of language",
    acceptedAnswers: ["language"],
    explanationEn: "In humans mercury delays the acquisition of language.",
    explanationVi: "Ở người mercury làm chậm acquisition of language.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Mercury in a mother's body from ______ may affect the unborn child",
    questionVi: "Mercury in a mother's body from ______ may affect the unborn child",
    modelParaphraseEn:
      "an unborn child can be affected if the food eaten by its mother contains high levels of mercury",
    modelParaphraseVi:
      "an unborn child can be affected if the food eaten by its mother contains high levels of mercury",
    acceptedAnswers: ["food"],
    explanationEn: "The unborn child is affected if the mother's food contains high mercury.",
    explanationVi: "Thai nhi bị ảnh hưởng nếu food của mẹ chứa mercury cao.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "New regulations for mercury emissions will affect everyone's energy ______",
    questionVi: "New regulations for mercury emissions will affect everyone's energy ______",
    modelParaphraseEn:
      "these will need billions of dollars to implement, and increase costs for everyone",
    modelParaphraseVi:
      "these will need billions of dollars to implement, and increase costs for everyone",
    acceptedAnswers: ["costs", "cost", "price", "prices", "bills", "bill"],
    explanationEn: "New power-plant rules need billions to implement and increase costs for everyone.",
    explanationVi: "Quy định nhà máy điện cần billions để thực thi và tăng costs cho mọi người.",
  },
];
