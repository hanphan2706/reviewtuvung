import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["we've planned three concerts", "we have planned three concerts"] },
    { id: "g2", answers: ["the programme has just been finalised"] },
    { id: "g3", answers: ["this is reflected in the music"] },
    {
      id: "g4",
      answers: [
        "won't be familiar with",
        "will not be familiar with",
      ],
    },
    { id: "g5", answers: ["born in Perth"] },
    { id: "g6", answers: ["like so many children"] },
    { id: "g7", answers: ["encouraged her to start composing"] },
    { id: "g8", answers: ["her real strength"] },
    { id: "g9", answers: ["commissions from numerous orchestras"] },
    { id: "g10", answers: ["cultural sources"] },
    { id: "g11", answers: ["audiences and performers alike"] },
    {
      id: "g12",
      answers: [
        "a semi-staged performance",
      ],
    },
    { id: "g13", answers: ["ancient Greek tragedies"] },
    { id: "g14", answers: ["The work lasts around 75 minutes"] },
    { id: "g15", answers: ["came from nature"] },
    { id: "g16", answers: ["on a bird call"] },
    {
      id: "g17",
      answers: [
        "most performed composers",
      ],
    },
    {
      id: "g18",
      answers: ["heard by millions"],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As you all know, the university is planning an arts festival for later this year, and here in the music department ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "These will be public performances, and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The theme of the festival is links between the UK and Australia, and ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ": each concert will feature both British and Australian composers." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'll tell you briefly about the Australian music, as you probably " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " that." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The first concert will include music by Liza Lim, who was " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", Western Australia, in 1966." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As a child, Lim originally learned to play the piano - " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " - and also the violin." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But when she was 11 her teachers " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "She found this was " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", and she studied and later taught composition, both in Australia and in other countries.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As a composer, she has received " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", other performers and festivals in several countries." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Liza Lim's compositions are vibrant and full of energy, and she often explores Asian and Australian Aboriginal " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", including the native instrument, the didgeridoo: this is featured in a work called The Compass.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Her music is very expressive, so although it is complex, it has the power of connecting with " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "In the festival we're going to give " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " of The Oresteia." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is an opera in seven parts, based on the trilogy of " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " by Aeschylus." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lim composed this when she was in her mid-20s, and she also wrote the text, along with Barrie Kosky.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's performed by six singers, a dancer, and an orchestra that, as well as standard orchestral instruments, includes electric guitar, and a traditional Turkish stringed instrument.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lim wrote that because the stories in the tragedies are not easy to tell, the sounds she creates are also disturbing, and they include breathing, sobbing, laughing and whistling.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", and the rest of the concert will consist of orchestral works by the British composers Ralph Vaughan Williams and Frederick Delius.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Moving on now to our second concert, this will begin with instrumental music by British composers - Benjamin Britten and Judith Weir.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After the interval we'll go to Australia for a piece by Ross Edwards: The Tower of Remoteness.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "According to Edwards, the inspiration for this piece " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", when he was sitting alone in the dry bed of a creek, overshadowed by the leaves of palm trees, listening to the birds and insects.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Tower of Remoteness is scored for piano and clarinet.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Edwards says he realised years after writing the piece that he had subconsciously modelled its opening phrase " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Ross Edwards was born in 1943 in Sydney, Australia, and studied at the Sydney Conservatorium of Music and the universities of Adelaide and Sydney.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "He's well known in Australia, and in fact he's one of the country's " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He's written a wide range of music, from symphonies and concertos to some composed specifically for children.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Edwards' music has been described as being 'deeply connected to Australia', and it can be regarded as a celebration of the diversity of cultures that Australia can be proud of.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The last of the three Australian composers to be represented in our festival is Carl Vine.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Born in 1954, Vine, like Liza Lim, comes from Perth, Western Australia.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He took up the cornet at the age of five, switching to the piano five years later.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, he went to university to study physics, before changing to composition.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After graduating he moved to Sydney and worked as a freelance pianist and composer.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Before long he had become prominent in Australia as a composer for dance, and in fact has written 25 scores of that type.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In our third concert, Vine will be represented by his music for the flag hand-over ceremony of the Olympics held in 1996.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This seven-minute orchestral piece was of course " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " of people worldwide, and we'll hear it alongside works written by British composers Edward Elgar and, more recently, Thomas Ades.",
        },
      ],
    },
  ],
};

export const CAM14_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "studied piano and ______ before turning to composition",
    questionVi: "studied piano and ______ before turning to composition",
    modelParaphraseEn: "Lim originally learned to play the piano - like so many children - and also the violin",
    modelParaphraseVi: "Lim originally learned to play the piano - like so many children - and also the violin",
    acceptedAnswers: ["violin"],
    explanationEn: "Piano (like many children) and also the violin, then composition at 11.",
    explanationVi: "Piano (như nhiều trẻ) và violin, rồi composition lúc 11 tuổi.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "compositions show a great deal of ______ and are drawn from various cultural sources",
    questionVi: "compositions show a great deal of ______ and are drawn from various cultural sources",
    modelParaphraseEn: "Liza Lim's compositions are vibrant and full of energy, and she often explores Asian and Australian Aboriginal cultural sources",
    modelParaphraseVi: "Liza Lim's compositions are vibrant and full of energy, and she often explores Asian and Australian Aboriginal cultural sources",
    acceptedAnswers: ["energy"],
    explanationEn: "Vibrant and full of energy; Asian and Aboriginal sources (didgeridoo / The Compass).",
    explanationVi: "Vibrant and full of energy; nguồn Asian và Aboriginal (didgeridoo / The Compass).",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "her music is very expressive and also ______",
    questionVi: "her music is very expressive and also ______",
    modelParaphraseEn: "Her music is very expressive, so although it is complex, it has the power of connecting with audiences and performers alike",
    modelParaphraseVi: "Her music is very expressive, so although it is complex, it has the power of connecting with audiences and performers alike",
    acceptedAnswers: ["complex"],
    explanationEn: "Expressive and complex, but it still connects with audiences and performers.",
    explanationVi: "Expressive và complex, nhưng vẫn kết nối được với audience và performers.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "festival will include her ______ called The Oresteia",
    questionVi: "festival will include her ______ called The Oresteia",
    modelParaphraseEn: "This is an opera in seven parts, based on the trilogy of ancient Greek tragedies by Aeschylus",
    modelParaphraseVi: "This is an opera in seven parts, based on the trilogy of ancient Greek tragedies by Aeschylus",
    acceptedAnswers: ["opera"],
    explanationEn: "The Oresteia is an opera in seven parts (semi-staged performance).",
    explanationVi: "The Oresteia là opera 7 phần (semi-staged performance).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Lim described the sounds in The Oresteia as ______",
    questionVi: "Lim described the sounds in The Oresteia as ______",
    modelParaphraseEn: "the sounds she creates are also disturbing, and they include breathing, sobbing, laughing and whistling",
    modelParaphraseVi: "the sounds she creates are also disturbing, and they include breathing, sobbing, laughing and whistling",
    acceptedAnswers: ["disturbing"],
    explanationEn: "Stories are not easy to tell, so the sounds are disturbing (breathing, sobbing, laughing, whistling).",
    explanationVi: "Câu chuyện khó kể, nên âm thanh disturbing (breathing, sobbing, laughing, whistling).",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "The Tower of Remoteness is performed by piano and ______",
    questionVi: "The Tower of Remoteness is performed by piano and ______",
    modelParaphraseEn: "The Tower of Remoteness is scored for piano and clarinet",
    modelParaphraseVi: "The Tower of Remoteness is scored for piano and clarinet",
    acceptedAnswers: ["clarinet"],
    explanationEn: "Scored for piano and clarinet (inspired by nature / a bird call).",
    explanationVi: "Viết cho piano và clarinet (lấy cảm hứng từ nature / tiếng chim).",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "celebrates Australia's cultural ______",
    questionVi: "celebrates Australia's cultural ______",
    modelParaphraseEn: "a celebration of the diversity of cultures that Australia can be proud of",
    modelParaphraseVi: "a celebration of the diversity of cultures that Australia can be proud of",
    acceptedAnswers: ["diversity"],
    explanationEn: "Edwards' music celebrates the diversity of cultures Australia can be proud of.",
    explanationVi: "Nhạc Edwards celebrate diversity of cultures mà Australia tự hào.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "studied ______ before studying music",
    questionVi: "studied ______ before studying music",
    modelParaphraseEn: "he went to university to study physics, before changing to composition",
    modelParaphraseVi: "he went to university to study physics, before changing to composition",
    acceptedAnswers: ["physics"],
    explanationEn: "University: physics first, then changed to composition. Cornet then piano were earlier.",
    explanationVi: "Đại học: physics trước, rồi mới chuyển sang composition. Cornet rồi piano là trước đó.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "became well known as composer of music for ______",
    questionVi: "became well known as composer of music for ______",
    modelParaphraseEn: "he had become prominent in Australia as a composer for dance, and in fact has written 25 scores of that type",
    modelParaphraseVi: "he had become prominent in Australia as a composer for dance, and in fact has written 25 scores of that type",
    acceptedAnswers: ["dance"],
    explanationEn: "Prominent as a composer for dance; 25 scores of that type.",
    explanationVi: "Nổi tiếng là composer for dance; 25 scores loại này.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "festival will include his music for the 1996 ______",
    questionVi: "festival will include his music for the 1996 ______",
    modelParaphraseEn: "his music for the flag hand-over ceremony of the Olympics held in 1996",
    modelParaphraseVi: "his music for the flag hand-over ceremony of the Olympics held in 1996",
    acceptedAnswers: ["Olympics"],
    explanationEn: "Music for the 1996 Olympics flag hand-over ceremony (seven-minute orchestral piece).",
    explanationVi: "Nhạc cho lễ bàn giao cờ Olympics 1996 (orchestral 7 phút).",
  },
];
