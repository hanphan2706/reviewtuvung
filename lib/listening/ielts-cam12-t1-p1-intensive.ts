import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'd like to find out if you have any excursions suitable for families",
        "I would like to find out if you have any excursions suitable for families",
      ],
    },
    { id: "g2", answers: ["How about taking your family for a cruise"] },
    {
      id: "g3",
      answers: ["it's over 100 years old", "it is over 100 years old"],
    },
    { id: "g4", answers: ["How long is the trip"] },
    { id: "g5", answers: ["About an hour and a half"] },
    { id: "g6", answers: ["to make a day of it"] },
    {
      id: "g7",
      answers: [
        "You're met off the boat by the farmer",
        "You are met off the boat by the farmer",
      ],
    },
    {
      id: "g8",
      answers: ["It's suitable for complete beginners", "It is suitable for complete beginners"],
    },
    { id: "g9", answers: ["as long as they take care to close gates and so on"] },
    { id: "g10", answers: ["You could easily spend an hour or two there"] },
    { id: "g11", answers: ["You pay when you get there"] },
    {
      id: "g12",
      answers: ["take a bike over on the ship and then go on a cycling trip"],
    },
    { id: "g13", answers: ["Quite challenging in places"] },
    { id: "g14", answers: ["That might work out quite well"] },
    {
      id: "g15",
      answers: [
        "It's just by the cruise ship terminal",
        "It is just by the cruise ship terminal",
      ],
    },
    {
      id: "g16",
      answers: ["That shouldn't be a problem", "That should not be a problem"],
    },
    { id: "g17", answers: ["you need to get back in time for the last boat"] },
    {
      id: "g18",
      answers: [
        "how old did you say your daughter was",
        "How old did you say your daughter was",
      ],
    },
  ],
  lines: [
    { speaker: "TC EMPLOYEE", segments: [{ type: "text", text: "Hi. Can I help you?" }] },
    {
      speaker: "VISITOR",
      segments: [{ type: "gap", gapId: "g1" }, { type: "text", text: "." }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "text", text: "Sure. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: "? We have a steamship that takes passengers out several times a day - ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [
        { type: "text", text: "That sounds interesting. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". And don't forget to take pictures of the mountains. They're all around you when you're on the boat and they look fantastic.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "OK. And I assume there's a café or something on board?" }],
    },
    { speaker: "TC EMPLOYEE", segments: [{ type: "text", text: "Sure. How old are your children?" }] },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "Er, my daughter's fifteen and my son's seven." }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Right. Well there are various things you can do once you've crossed the lake, ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". One thing that's very popular is a visit to the Country Farm. ",
        },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " and he'll take you to the holding pens, where the sheep are kept. Children love feeding them!",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "My son would love that. He really likes animals." }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Well, there's also a 40-minute trek round the farm on a horse, if he wants.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [
        { type: "text", text: "Do you think he'd manage it? He hasn't done that before." },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "text", text: "Sure. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "VISITOR", segments: [{ type: "text", text: "Ah, good." }] },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "And again, visitors are welcome to explore the farm on their own, ",
        },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". There are some very beautiful gardens along the side of the lake which also belong to the farm - they'll be just at their best now. ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [
        { type: "text", text: "OK. Well that all sounds good. And can we get lunch there?" },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "You can, and it's very good, though it's not included in the basic cost. ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "VISITOR", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "VISITOR",
      segments: [
        { type: "text", text: "So is there anything else to do over on that side of the lake?" },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "text", text: "Well, what you can do is " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". There's a trail there called the Back Road - you could easily spend three or four hours exploring it, and the scenery's wonderful. They'll give you a map when you get your ticket for the cruise - there's no extra charge.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "What's the trail like in terms of difficulty?" }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". It wouldn't be suitable for your seven-year-old. It needs someone who's got a bit more experience.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [
        {
          type: "text",
          text: "Hmm. Well, my daughter loves cycling and so do I, so maybe the two of us could go, and my wife and son could stay on the farm. ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". But we don't have bikes here… is there somewhere we could rent them?",
        },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "text", text: "Yes, there's a place here in the city. It's called Ratchesons." },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "I'll just make a note of that - er, how do you spell it?" }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        { type: "text", text: "R-A-T-C-H-E-S-O-N-S. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "VISITOR", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "You'd also need to pick up a repair kit for the bike from there to take along with you, and you'd need to take along a snack and some water - it'd be best to get those in the city.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [
        { type: "text", text: "Fine. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". And I assume I can rent a helmet from the bike place?" },
      ],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Sure, you should definitely get that. It's a great ride, but you want to be well prepared because it's very remote - you won't see any shops round there, or anywhere to stay, so ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "Yeah. So what sort of prices are we looking at here?" }],
    },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Let's see, that'd be one adult and one child for the cruise with farm tour, that's $117, and an adult and a child for the cruise only so that's $214 dollars altogether. Oh, wait a minute, ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "VISITOR", segments: [{ type: "text", text: "Fifteen." }] },
    {
      speaker: "TC EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Then I'm afraid it's $267 because she has to pay the adult fare, which is $75 instead of the child fare which is $22 - sorry about that.",
        },
      ],
    },
    {
      speaker: "VISITOR",
      segments: [{ type: "text", text: "That's OK. Er, so how do we find that?" }],
    },
  ],
};

export const CAM12_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Can take photos of the ______ that surround the lake",
    questionVi: "Can take photos of the ______ that surround the lake",
    modelParaphraseEn:
      "don't forget to take pictures of the mountains. They're all around you when you're on the boat",
    modelParaphraseVi:
      "don't forget to take pictures of the mountains. They're all around you when you're on the boat",
    acceptedAnswers: ["mountains"],
    explanationEn: "Photos of the mountains that surround the lake.",
    explanationVi: "Chụp mountains bao quanh hồ.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Visit can include a 40-minute ride on a ______",
    questionVi: "Visit can include a 40-minute ride on a ______",
    modelParaphraseEn: "there's also a 40-minute trek round the farm on a horse",
    modelParaphraseVi: "there's also a 40-minute trek round the farm on a horse",
    acceptedAnswers: ["horse"],
    explanationEn: "A 40-minute horse trek / ride around the farm.",
    explanationVi: "Đi horse 40 phút quanh nông trại.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Visitors can walk in the farm's ______ by the lake",
    questionVi: "Visitors can walk in the farm's ______ by the lake",
    modelParaphraseEn:
      "There are some very beautiful gardens along the side of the lake which also belong to the farm",
    modelParaphraseVi:
      "There are some very beautiful gardens along the side of the lake which also belong to the farm",
    acceptedAnswers: ["garden", "gardens"],
    explanationEn: "The farm's gardens by the lake.",
    explanationVi: "Garden(s) của nông trại cạnh hồ.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "______ is available at extra cost",
    questionVi: "______ is available at extra cost",
    modelParaphraseEn:
      "And can we get lunch there? You can … though it's not included in the basic cost",
    modelParaphraseVi:
      "And can we get lunch there? You can … though it's not included in the basic cost",
    acceptedAnswers: ["lunch"],
    explanationEn: "Lunch is available but not in the basic cost — pay there.",
    explanationVi: "Lunch có nhưng không gồm trong giá cơ bản — trả tại chỗ.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "A ______ is provided",
    questionVi: "A ______ is provided",
    modelParaphraseEn:
      "They'll give you a map when you get your ticket for the cruise - there's no extra charge",
    modelParaphraseVi:
      "They'll give you a map when you get your ticket for the cruise - there's no extra charge",
    acceptedAnswers: ["map"],
    explanationEn: "A map is given with the cruise ticket, no extra charge.",
    explanationVi: "Được phát map khi lấy vé cruise, không phụ phí.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Only suitable for cyclists who have some ______",
    questionVi: "Only suitable for cyclists who have some ______",
    modelParaphraseEn:
      "Quite challenging in places … It needs someone who's got a bit more experience",
    modelParaphraseVi:
      "Quite challenging in places … It needs someone who's got a bit more experience",
    acceptedAnswers: ["experience"],
    explanationEn: "The Back Road is not for a seven-year-old; cyclists need some experience.",
    explanationVi: "Back Road không hợp trẻ 7 tuổi; cần có experience.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Bikes can be hired from ______ (near the Cruise Ship Terminal)",
    questionVi: "Bikes can be hired from ______ (near the Cruise Ship Terminal)",
    modelParaphraseEn:
      "It's called Ratchesons … R-A-T-C-H-E-S-O-N-S. It's just by the cruise ship terminal",
    modelParaphraseVi:
      "It's called Ratchesons … R-A-T-C-H-E-S-O-N-S. It's just by the cruise ship terminal",
    acceptedAnswers: ["Ratchesons"],
    explanationEn: "Hire bikes from Ratchesons, spelled out, by the terminal.",
    explanationVi: "Thuê xe tại Ratchesons, được đánh vần, sát terminal.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Cyclists need: a ______ (can be hired)",
    questionVi: "Cyclists need: a ______ (can be hired)",
    modelParaphraseEn:
      "And I assume I can rent a helmet from the bike place? Sure, you should definitely get that",
    modelParaphraseVi:
      "And I assume I can rent a helmet from the bike place? Sure, you should definitely get that",
    acceptedAnswers: ["helmet"],
    explanationEn: "A helmet can be hired from the bike place.",
    explanationVi: "Có thể thuê helmet tại chỗ cho thuê xe.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "There are no ______ or accommodation in the area",
    questionVi: "There are no ______ or accommodation in the area",
    modelParaphraseEn:
      "it's very remote - you won't see any shops round there, or anywhere to stay",
    modelParaphraseVi:
      "it's very remote - you won't see any shops round there, or anywhere to stay",
    acceptedAnswers: ["shops"],
    explanationEn: "No shops or accommodation — get back for the last boat.",
    explanationVi: "Không có shops hay chỗ ở — phải về kịp chuyến thuyền cuối.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Total cost for whole family of cruise and farm visit: $______",
    questionVi: "Total cost for whole family of cruise and farm visit: $______",
    modelParaphraseEn:
      "Then I'm afraid it's $267 because she has to pay the adult fare, which is $75 instead of the child fare which is $22",
    modelParaphraseVi:
      "Then I'm afraid it's $267 because she has to pay the adult fare, which is $75 instead of the child fare which is $22",
    acceptedAnswers: ["267", "$267"],
    explanationEn: "Daughter is 15 so she pays the adult fare; family total is $267.",
    explanationVi: "Con gái 15 tuổi nên trả vé người lớn; tổng gia đình $267.",
  },
];
