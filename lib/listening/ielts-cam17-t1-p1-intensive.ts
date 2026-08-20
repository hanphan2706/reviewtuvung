import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Are you the right person"] },
    { id: "g2", answers: ["I'm interested in getting involved", "I am interested in getting involved"] },
    { id: "g3", answers: ["Could you tell me something about"] },
    { id: "g4", answers: ["regular activities and special events"] },
    { id: "g5", answers: ["it's awful how much", "it is awful how much"] },
    { id: "g6", answers: ["I'd be happy to help", "I would be happy to help"] },
    { id: "g7", answers: ["they're banned from the beach itself", "they are banned from the beach itself"] },
    { id: "g8", answers: ["there's a lot to do", "there is a lot to do"] },
    { id: "g9", answers: ["in good condition for walking"] },
    { id: "g10", answers: ["I could certainly help with that"] },
    { id: "g11", answers: ["interested in taking part"] },
    { id: "g12", answers: ["I was involved in something similar"] },
    { id: "g13", answers: ["I'd like to get to know", "I would like to get to know"] },
    { id: "g14", answers: ["the sands are dry enough"] },
    { id: "g15", answers: ["It's also an ideal location", "It is also an ideal location"] },
    { id: "g16", answers: ["is there anything we should bring"] },
    { id: "g17", answers: ["you'll get as much help", "you will get as much help"] },
    { id: "g18", answers: ["too ambitious for one day"] },
  ],
  lines: [
    { speaker: "PETER", segments: [{ type: "text", text: "Hello?" }] },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "Oh hello. My name's Jan. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to talk to about the Buckworth Conservation Group?" },
      ],
    },
    { speaker: "PETER", segments: [{ type: "text", text: "Yes, I'm Peter. I'm the secretary." }] },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "Good. I've just moved to this area, and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". I was in a similar group where I used to live. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " your activities, please?" },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "Of course. Well, we have a mixture of " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". One of the regular ones is trying to keep the beach free of litter. A few of us spend a couple of hours a month on it, and ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " there is to clear. I wish people would be more responsible and take it home with them." },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "I totally agree. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " with that. Is it OK to take dogs?" },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "I'm afraid not, as " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". You can take them along the cliffs, though. And children are welcome." },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "We also manage a nature reserve, and " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " there all year round. For example, because it's a popular place to visit, we spend a lot of time looking after the paths and making sure they're ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAN",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }],
    },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Good. And we have a programme of creating new habitats there. We've just finished making and installing nesting boxes for birds to use, and next we're going to work on encouraging insects – they're important for the biodiversity of the reserve.",
        },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "They certainly are." }] },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Oh, and we're also running a project to identify the different species of butterflies that visit the reserve. You might be ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " in that." },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "Sure. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " where I used to live, counting all the species of moths. I'd enjoy that." },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Another job we're doing at the reserve is replacing the wall on the southern side, between the parking area and our woodshed. It was badly damaged in a storm last month.",
        },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Then as I said, we have a programme of events as well, both at the weekend, and during the week.",
        },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "Right. I presume you have guided walks? " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " the local countryside, as I'm new to the area." },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Yes, we do. The next walk is to Ruston Island, a week on Saturday. We'll be meeting in the car park at Dunsmore Beach at low tide – that's when ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " for us to walk to the island without getting wet." },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "Sounds good." }] },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "The island's a great place to explore. It's quite small, and it's got a range of habitats. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " for seeing seals just off the coast, or even on the beach." },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "OK. And " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", like a picnic, for instance?" },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "Yes, do bring one, as it's a full-day walk. And of course it'll be wet walking across and back, so make sure your boots are waterproof.",
        },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        {
          type: "text",
          text: "I must buy a new pair – there's a hole in one of my current ones! Well, I'd definitely like to come on the walk.",
        },
      ],
    },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "Great. Then later this month we're having a one-day woodwork session in Hopton Wood." },
      ],
    },
    {
      speaker: "JAN",
      segments: [{ type: "text", text: "I've never tried that before. Is it OK for beginners to take part?" }],
    },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "Definitely. There'll be a couple of experts leading the session, and we keep the number of participants down, so " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " as you need." },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "Excellent! I'd love to be able to make chairs." }] },
    {
      speaker: "PETER",
      segments: [
        { type: "text", text: "That's probably " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: "! You'll be starting with wooden spoons, and of course learning how to use the tools. And anything you make is yours to take home with you.",
        },
      ],
    },
    { speaker: "JAN", segments: [{ type: "text", text: "That sounds like fun. When is it?" }] },
    {
      speaker: "PETER",
      segments: [
        {
          type: "text",
          text: "It's on the 17th, from 10 a.m. until 3. There's a charge of £35, including lunch, or £40 if you want to camp in the wood.",
        },
      ],
    },
    {
      speaker: "JAN",
      segments: [
        { type: "text", text: "I should think I'll come home the same day. Well, I'd certainly like to join the group." },
      ],
    },
  ],
};

export const CAM17_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "making sure the beach does not have ______ on it",
    questionVi: "making sure the beach does not have ______ on it",
    modelParaphraseEn: "trying to keep the beach free of litter",
    modelParaphraseVi: "trying to keep the beach free of litter",
    acceptedAnswers: ["litter"],
    explanationEn: "Regular beach work is keeping it free of litter.",
    explanationVi: "Công việc bãi biển thường xuyên là giữ cho không có litter.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "no ______",
    questionVi: "no ______",
    modelParaphraseEn: "Is it OK to take dogs? I'm afraid not, as they're banned from the beach itself",
    modelParaphraseVi: "Is it OK to take dogs? I'm afraid not, as they're banned from the beach itself",
    acceptedAnswers: ["dogs"],
    explanationEn: "Dogs are banned from the beach (cliffs are OK; children are welcome).",
    explanationVi: "Dogs bị cấm trên bãi biển (vách đá thì được; trẻ em được chào đón).",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "next task is taking action to attract ______ to the place",
    questionVi: "next task is taking action to attract ______ to the place",
    modelParaphraseEn: "next we're going to work on encouraging insects",
    modelParaphraseVi: "next we're going to work on encouraging insects",
    acceptedAnswers: ["insects"],
    explanationEn: "Nesting boxes are already done; next they will encourage insects.",
    explanationVi: "Nesting boxes đã xong; việc tiếp theo là thu hút insects.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "identifying types of ______",
    questionVi: "identifying types of ______",
    modelParaphraseEn: "identify the different species of butterflies that visit the reserve",
    modelParaphraseVi: "identify the different species of butterflies that visit the reserve",
    acceptedAnswers: ["butterflies"],
    explanationEn: "The identification project is about butterfly species (Jan used to count moths).",
    explanationVi: "Dự án nhận dạng là về butterflies (Jan từng đếm moths).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "building a new ______",
    questionVi: "building a new ______",
    modelParaphraseEn: "replacing the wall on the southern side, between the parking area and our woodshed",
    modelParaphraseVi: "replacing the wall on the southern side, between the parking area and our woodshed",
    acceptedAnswers: ["wall"],
    explanationEn: "They are replacing the storm-damaged wall on the southern side.",
    explanationVi: "Họ đang thay wall phía nam bị bão làm hỏng.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "walk across the sands and reach the ______",
    questionVi: "walk across the sands and reach the ______",
    modelParaphraseEn: "walk to the island without getting wet",
    modelParaphraseVi: "walk to the island without getting wet",
    acceptedAnswers: ["island"],
    explanationEn: "At low tide they can walk across the sands to Ruston Island.",
    explanationVi: "Khi thủy triều thấp họ đi bộ trên cát tới island.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "wear appropriate ______",
    questionVi: "wear appropriate ______",
    modelParaphraseEn: "make sure your boots are waterproof",
    modelParaphraseVi: "make sure your boots are waterproof",
    acceptedAnswers: ["boots"],
    explanationEn: "Bring a picnic and wear waterproof boots for the wet crossing.",
    explanationVi: "Mang picnic và đi boots chống nước vì đoạn đường ướt.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "suitable for ______ to participate in",
    questionVi: "suitable for ______ to participate in",
    modelParaphraseEn: "Is it OK for beginners to take part? Definitely",
    modelParaphraseVi: "Is it OK for beginners to take part? Definitely",
    acceptedAnswers: ["beginners"],
    explanationEn: "The woodwork session is suitable for beginners; experts will lead it.",
    explanationVi: "Buổi woodwork phù hợp cho beginners; có chuyên gia hướng dẫn.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "making ______ out of wood",
    questionVi: "making ______ out of wood",
    modelParaphraseEn: "You'll be starting with wooden spoons",
    modelParaphraseVi: "You'll be starting with wooden spoons",
    acceptedAnswers: ["spoons"],
    explanationEn: "Chairs are too ambitious for one day; they start with wooden spoons.",
    explanationVi: "Làm ghế thì quá tham vọng trong một ngày; bắt đầu với spoons gỗ.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "cost of session (no camping): £ ______",
    questionVi: "cost of session (no camping): £ ______",
    modelParaphraseEn: "There's a charge of £35, including lunch, or £40 if you want to camp in the wood",
    modelParaphraseVi: "There's a charge of £35, including lunch, or £40 if you want to camp in the wood",
    acceptedAnswers: ["35", "thirty five", "thirty-five"],
    explanationEn: "£35 including lunch (no camping); £40 if camping.",
    explanationVi: "£35 gồm lunch (không cắm trại); £40 nếu cắm trại.",
  },
];
