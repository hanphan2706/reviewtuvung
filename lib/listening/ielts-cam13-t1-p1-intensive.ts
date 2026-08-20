import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["how can I help you"] },
    { id: "g2", answers: ["I wanted to find out"] },
    { id: "g3", answers: ["one-day classes for tourists"] },
    { id: "g4", answers: ["open to everyone"] },
    { id: "g5", answers: ["let me give you"] },
    { id: "g6", answers: ["There are several classes"] },
    { id: "g7", answers: ["that sounds good"] },
    { id: "g8", answers: ["How big are the classes"] },
    {
      id: "g9",
      answers: ["I'm not sure exactly", "I am not sure exactly"],
    },
    { id: "g10", answers: ["getting to know one another"] },
    { id: "g11", answers: ["I suppose it must be"] },
    { id: "g12", answers: ["there were several classes"] },
    { id: "g13", answers: ["just opened six months ago"] },
    {
      id: "g14",
      answers: ["I've heard good things", "I have heard good things"],
    },
    {
      id: "g15",
      answers: [
        "I'd be interested in that",
        "I would be interested in that",
      ],
    },
    { id: "g16", answers: ["particularly focus on"] },
    { id: "g17", answers: ["a website I could check"] },
    {
      id: "g18",
      answers: ["it'll come up", "it will come up"],
    },
  ],
  lines: [
    {
      speaker: "OFFICIAL",
      segments: [
        { type: "text", text: "Hello, Tourist Information Centre, Mike speaking, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, hi. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " about cookery classes. I believe there are some " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        { type: "text", text: "Well, they're " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", but tourists are always welcome. OK, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " some details of what's available. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". One very popular one is at the Food Studio." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "They focus on seasonal products, and as well as teaching you how to cook them, they also show you how to choose them.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Right, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", but they'll be quite small." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "And could I get a private lesson there?" }],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "I think so … let me check, yes, they do offer those. Though in fact most of the people who attend the classes find it's a nice way of ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", yes." },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "And this company has a special deal for clients where they offer a discount of 20 percent if you return for a further class.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. But you said " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "That's right. Another one you might be interested in is Bond's Cookery School. They're quite new, they ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", but " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " about them. They concentrate on teaching you to prepare healthy food, and they have quite a lot of specialist staff.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "So is that food for people on a diet and things like that? I don't know if " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        { type: "text", text: "Well, I don't think they " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " low calorie diets or weight loss. It's more to do with recipes that look at specific needs, like including ingredients that will help build up your bones and make them stronger, that sort of thing.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I see. Well, I might be interested, I'm not sure. Do they have " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        { type: "text", text: "Yes, just key in the name of the school - " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". And if you want to know more about them, every Thursday evening they have a lecture at the school. It's free and you don't need to book or anything, just turn up at 7.30. And that might give you an idea of whether you want to go to an actual class.",
        },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "OK, there's one more place you might be interested in. That's got a rather strange name, it's called The Arretsa Centre - that's spelled A-R-R-E-T-S-A.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "They've got a very good reputation. They do a bit of meat and fish cookery but they mostly specialise in vegetarian dishes.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right. That's certainly an area I'd like to learn more about. I've got lots of friends who don't eat meat. In fact, I think I might have seen that school today. Is it just by the market?",
        },
      ],
    },
    {
      speaker: "OFFICIAL",
      segments: [
        {
          type: "text",
          text: "That's right. So they don't have any problem getting their ingredients. They're right next door. And they also offer a special two-hour course in how to use a knife. They cover all the different skills - buying them, sharpening, chopping techniques. It gets booked up quickly though so you'd need to check it was available.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Right, well thank you very much. I'll go and check that out." }],
    },
  ],
};

export const CAM13_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "how to ______ and cook with seasonal products",
    questionVi: "how to ______ and cook with seasonal products",
    modelParaphraseEn: "as well as teaching you how to cook them, they also show you how to choose them",
    modelParaphraseVi: "as well as teaching you how to cook them, they also show you how to choose them",
    acceptedAnswers: ["choose"],
    explanationEn: "Food Studio: they show you how to choose seasonal products as well as cook them.",
    explanationVi: "Food Studio: họ dạy choose seasonal products, không chỉ nấu.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "also offers ______ classes",
    questionVi: "also offers ______ classes",
    modelParaphraseEn: "could I get a private lesson there? … yes, they do offer those",
    modelParaphraseVi: "could I get a private lesson there? … yes, they do offer those",
    acceptedAnswers: ["private"],
    explanationEn: "They also offer private classes / a private lesson.",
    explanationVi: "Họ cũng có lớp private / private lesson.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "clients who return get a ______ discount",
    questionVi: "clients who return get a ______ discount",
    modelParaphraseEn: "they offer a discount of 20 percent if you return for a further class",
    modelParaphraseVi: "they offer a discount of 20 percent if you return for a further class",
    acceptedAnswers: ["20 percent", "20%", "twenty percent", "20 per cent", "twenty per cent"],
    explanationEn: "Returning clients get a 20 / twenty percent discount.",
    explanationVi: "Khách quay lại được giảm 20 / twenty percent.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "food that is ______",
    questionVi: "food that is ______",
    modelParaphraseEn: "They concentrate on teaching you to prepare healthy food",
    modelParaphraseVi: "They concentrate on teaching you to prepare healthy food",
    acceptedAnswers: ["healthy"],
    explanationEn: "Bond's Cookery School focuses on healthy food, not mainly on dieting.",
    explanationVi: "Bond's Cookery School tập trung healthy food, không phải chủ yếu diet.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "includes recipes to strengthen your ______",
    questionVi: "includes recipes to strengthen your ______",
    modelParaphraseEn: "ingredients that will help build up your bones and make them stronger",
    modelParaphraseVi: "ingredients that will help build up your bones and make them stronger",
    acceptedAnswers: ["bones"],
    explanationEn: "Recipes include ingredients to build up / strengthen your bones.",
    explanationVi: "Công thức có nguyên liệu giúp build up / strengthen bones.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "they have a free ______ every Thursday",
    questionVi: "they have a free ______ every Thursday",
    modelParaphraseEn: "every Thursday evening they have a lecture at the school. It's free and you don't need to book",
    modelParaphraseVi: "every Thursday evening they have a lecture at the school. It's free and you don't need to book",
    acceptedAnswers: ["lecture"],
    explanationEn: "A free lecture every Thursday evening at 7.30; no booking needed.",
    explanationVi: "Lecture miễn phí mỗi Thursday evening lúc 7.30; không cần book.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "The ______ Centre",
    questionVi: "The ______ Centre",
    modelParaphraseEn: "it's called The Arretsa Centre - that's spelled A-R-R-E-T-S-A",
    modelParaphraseVi: "it's called The Arretsa Centre - that's spelled A-R-R-E-T-S-A",
    acceptedAnswers: ["Arretsa"],
    explanationEn: "The centre is Arretsa, spelled A-R-R-E-T-S-A. Official spelling wins over ASR (Arezza).",
    explanationVi: "Tên trung tâm là Arretsa, đánh vần A-R-R-E-T-S-A. Chính tả official thắng ASR (Arezza).",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "mainly ______ food",
    questionVi: "mainly ______ food",
    modelParaphraseEn: "They do a bit of meat and fish cookery but they mostly specialise in vegetarian dishes",
    modelParaphraseVi: "They do a bit of meat and fish cookery but they mostly specialise in vegetarian dishes",
    acceptedAnswers: ["vegetarian"],
    explanationEn: "They mostly specialise in vegetarian dishes (some meat and fish as well).",
    explanationVi: "Chủ yếu vegetarian dishes (vẫn có một ít meat and fish).",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "located near the ______",
    questionVi: "located near the ______",
    modelParaphraseEn: "Is it just by the market? That's right. … They're right next door",
    modelParaphraseVi: "Is it just by the market? That's right. … They're right next door",
    acceptedAnswers: ["market"],
    explanationEn: "The Arretsa Centre is just by / next door to the market.",
    explanationVi: "Arretsa Centre ở ngay cạnh the market.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "a special course in skills with a ______ is sometimes available",
    questionVi: "a special course in skills with a ______ is sometimes available",
    modelParaphraseEn: "a special two-hour course in how to use a knife … buying them, sharpening, chopping techniques. It gets booked up quickly",
    modelParaphraseVi: "a special two-hour course in how to use a knife … buying them, sharpening, chopping techniques. It gets booked up quickly",
    acceptedAnswers: ["knife"],
    explanationEn: "A two-hour knife-skills course (buying, sharpening, chopping); it books up quickly.",
    explanationVi: "Khóa hai giờ về knife (mua, mài, chặt); hay hết chỗ.",
  },
];
