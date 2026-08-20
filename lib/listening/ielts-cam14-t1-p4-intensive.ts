import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["meet our needs"] },
    { id: "g2", answers: ["seriously damages the environment"] },
    {
      id: "g3",
      answers: ["they'll eventually run out", "they will eventually run out"],
    },
    { id: "g4", answers: ["without causing pollution"] },
    { id: "g5", answers: ["movement of the oceans"] },
    { id: "g6", answers: ["a few words about"] },
    { id: "g7", answers: ["a really efficient method"] },
    { id: "g8", answers: ["plenty of potential"] },
    {
      id: "g9",
      answers: ["using a reservoir"],
    },
    { id: "g10", answers: ["creating efficient technology"] },
    { id: "g11", answers: ["lead to environmental problems"] },
    { id: "g12", answers: ["for years to come"] },
    { id: "g13", answers: ["about forty places"] },
    { id: "g14", answers: ["separated from the sea"] },
    {
      id: "g15",
      answers: ["U-shaped breakwater"],
    },
    {
      id: "g16",
      answers: ["turn a generator"],
    },
    { id: "g17", answers: ["over 150,000 homes"] },
    { id: "g18", answers: ["depend on the weather"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Producing enough energy to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " has become a serious problem." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Demand is rising rapidly, because of the world's increasing population and expanding industry.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Burning fossil fuels, like gas, coal and oil, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " and " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For a number of years now, scientists have been working out how we can derive energy from renewable sources, such as the sun and wind, ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Today I'll outline marine renewable energy – also called ocean energy – which harnesses the ",
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
          text: "Marine renewable energy can be divided into three main categories: wave energy, tidal energy and ocean thermal energy conversion, and I'll say ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " each one." },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "First, wave energy." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Numerous devices have been invented to harvest wave energy, with names such as Wave Dragon, the Penguin and Mighty Whale, and research is going on to try and come up with ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This form of energy has " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", as the source is constant, and there's no danger of waves coming to a standstill.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Electricity can be generated using onshore systems, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", or offshore systems." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the problem with ocean waves is that they're erratic, with the wind making them travel in every direction.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This adds to the difficulty of " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ": ideally all the waves would travel smoothly and regularly along the same straight line.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another drawback is that sand and other sediment on the ocean floor might be stopped from flowing normally, which can ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The second category of marine energy that I'll mention is tidal energy." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One major advantage of using the tide, rather than waves, as a source of energy is that it's predictable: we know the exact time of high and low tides ",
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
          text: "For tidal energy to be effective, the difference between high and low tides needs to be at least five metres, and this occurs naturally in only ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " on Earth." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the right conditions can be created by constructing a tidal lagoon, an area of sea water ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One current plan is to create a tidal lagoon on the coast of Wales." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This will be an area of water within a bay at Swansea, sheltered by a ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", or dam, built out from the coast." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The breakwater will contain sixteen hydro turbines, and as the tide rises, water rushes through the breakwater, activating the turbines, which ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " to produce electricity." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then, for three hours as the tide goes out, the water is held back within the breakwater, increasing the difference in water level, until it's several metres higher within the lagoon than in the open sea.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then, in order to release the stored water, gates in the breakwater are opened.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It pours powerfully out of the lagoon, driving the turbines in the breakwater in the opposite direction and again generating thousands of megawatts of electricity.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As there are two high tides a day, this lagoon scheme would generate electricity four times a day, every day, for a total of around 14 hours in every 24 – and enough electricity for ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This system has quite a lot in its favour: unlike solar and wind energy it doesn't " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: "; the turbines are operated without the need for fuel, so it doesn't create any greenhouse gas emissions; and very little maintenance is needed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's estimated that electricity generated in this way will be relatively cheap, and that manufacturing the components would create more than 2,000 jobs, a big boost to the local economy.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On the other hand, there are fears that lagoons might harm both fish and birds, for example by disturbing migration patterns, and causing a build-up of silt, affecting local ecosystems.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are other forms of tidal energy, but I'll go on to the third category of marine energy: ocean thermal energy conversion.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This depends on there being a big difference in temperature between surface water and the water a couple of kilometres below the surface, and this occurs in tropical coastal areas.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The idea is to bring cold water up to the surface using a submerged pipe.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "The concept dates back to 1881, when …" }],
    },
  ],
};

export const CAM14_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "More energy required because of growth in population and ______",
    questionVi: "More energy required because of growth in population and ______",
    modelParaphraseEn: "because of the world's increasing population and expanding industry",
    modelParaphraseVi: "because of the world's increasing population and expanding industry",
    acceptedAnswers: ["industry"],
    explanationEn: "Demand rises because of population growth and expanding industry.",
    explanationVi: "Nhu cầu tăng vì dân số và industry mở rộng.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "waves provide a ______ source of renewable energy",
    questionVi: "waves provide a ______ source of renewable energy",
    modelParaphraseEn: "the source is constant, and there's no danger of waves coming to a standstill",
    modelParaphraseVi: "the source is constant, and there's no danger of waves coming to a standstill",
    acceptedAnswers: ["constant"],
    explanationEn: "Waves are a constant source — they will not come to a standstill.",
    explanationVi: "Sóng là nguồn constant — không bị đứng yên.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "waves can move in any ______",
    questionVi: "waves can move in any ______",
    modelParaphraseEn: "they're erratic, with the wind making them travel in every direction",
    modelParaphraseVi: "they're erratic, with the wind making them travel in every direction",
    acceptedAnswers: ["direction"],
    explanationEn: "Wind makes waves travel in every direction (erratic).",
    explanationVi: "Gió làm sóng đi mọi direction (erratic).",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "movement of sand, etc. on the ______ of the ocean may be affected",
    questionVi: "movement of sand, etc. on the ______ of the ocean may be affected",
    modelParaphraseEn: "sand and other sediment on the ocean floor might be stopped from flowing normally",
    modelParaphraseVi: "sand and other sediment on the ocean floor might be stopped from flowing normally",
    acceptedAnswers: ["floor"],
    explanationEn: "Sediment on the ocean floor may be stopped from flowing normally.",
    explanationVi: "Cát/trầm tích trên ocean floor có thể bị cản.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Tides are more ______ than waves",
    questionVi: "Tides are more ______ than waves",
    modelParaphraseEn: "it's predictable: we know the exact time of high and low tides for years to come",
    modelParaphraseVi: "it's predictable: we know the exact time of high and low tides for years to come",
    acceptedAnswers: ["predictable"],
    explanationEn: "Tides are more predictable than waves — times of high/low tide are known years ahead.",
    explanationVi: "Thủy triều predictable hơn sóng — biết giờ nước lớn/ròng trước nhiều năm.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "will be created in a ______ at Swansea",
    questionVi: "will be created in a ______ at Swansea",
    modelParaphraseEn: "an area of water within a bay at Swansea, sheltered by a U-shaped breakwater",
    modelParaphraseVi: "an area of water within a bay at Swansea, sheltered by a U-shaped breakwater",
    acceptedAnswers: ["bay"],
    explanationEn: "The tidal lagoon will be in a bay at Swansea.",
    explanationVi: "Tidal lagoon sẽ nằm trong một bay ở Swansea.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "stored water is released through ______, driving the turbines in the reverse direction",
    questionVi: "stored water is released through ______, driving the turbines in the reverse direction",
    modelParaphraseEn: "in order to release the stored water, gates in the breakwater are opened",
    modelParaphraseVi: "in order to release the stored water, gates in the breakwater are opened",
    acceptedAnswers: ["gates"],
    explanationEn: "Gates in the breakwater open to release stored water and drive turbines in reverse.",
    explanationVi: "Gates trên đê mở để xả nước trữ, quay turbine ngược chiều.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "no ______ is required to make it work",
    questionVi: "no ______ is required to make it work",
    modelParaphraseEn: "the turbines are operated without the need for fuel, so it doesn't create any greenhouse gas emissions",
    modelParaphraseVi: "the turbines are operated without the need for fuel, so it doesn't create any greenhouse gas emissions",
    acceptedAnswers: ["fuel"],
    explanationEn: "No fuel is needed to operate the turbines (no greenhouse gases).",
    explanationVi: "Không cần fuel để chạy turbine (không phát thải).",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "likely to create a number of ______",
    questionVi: "likely to create a number of ______",
    modelParaphraseEn: "manufacturing the components would create more than 2,000 jobs, a big boost to the local economy",
    modelParaphraseVi: "manufacturing the components would create more than 2,000 jobs, a big boost to the local economy",
    acceptedAnswers: ["jobs"],
    explanationEn: "Manufacturing components would create more than 2,000 jobs.",
    explanationVi: "Sản xuất linh kiện sẽ tạo hơn 2,000 jobs.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "may harm fish and birds, e.g. by affecting ______ and building up silt",
    questionVi: "may harm fish and birds, e.g. by affecting ______ and building up silt",
    modelParaphraseEn: "by disturbing migration patterns, and causing a build-up of silt",
    modelParaphraseVi: "by disturbing migration patterns, and causing a build-up of silt",
    acceptedAnswers: ["migration"],
    explanationEn: "Lagoons may disturb migration patterns of fish and birds, and build up silt.",
    explanationVi: "Lagoon có thể làm rối migration của cá/chim, và bồi lắng silt.",
  },
];
