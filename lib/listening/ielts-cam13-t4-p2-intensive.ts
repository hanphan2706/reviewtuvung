import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["enjoyed the bus trip"] },
    {
      id: "g2",
      answers: ["premier snow and ski centre"],
    },
    {
      id: "g3",
      answers: ["fairly flat ground"],
    },
    { id: "g4", answers: ["rather than going down steep mountainsides"] },
    {
      id: "g5",
      answers: ["great aerobic exercise"],
    },
    { id: "g6", answers: ["sit back in the sled"] },
    {
      id: "g7",
      answers: ["you're all welcome to join in", "you are all welcome to join in"],
    },
    { id: "g8", answers: ["rather than winning"] },
    { id: "g9", answers: ["four laps of the course"] },
    {
      id: "g10",
      answers: ["special snow shoes"],
    },
    { id: "g11", answers: ["searched for gold"] },
    {
      id: "g12",
      answers: ["carpeted in flowers and plants"],
    },
    {
      id: "g13",
      answers: ["package for the stay"],
    },
    {
      id: "g14",
      answers: ["ten dollars a person"],
    },
    {
      id: "g15",
      answers: [
        "they'll probably not be running anyway",
        "they will probably not be running anyway",
      ],
    },
    {
      id: "g16",
      answers: ["a real emergency"],
    },
    { id: "g17", answers: ["looking right down"] },
    {
      id: "g18",
      answers: [
        "we'll get started",
        "we will get started",
      ],
    },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Hi everyone, welcome to the Snow Centre." }] },
    { speaker: null, segments: [{ type: "text", text: "My name's Annie." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I hope you " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " from the airport - we've certainly got plenty of snow today!" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, you've come to New Zealand's " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ", and we've a whole load of activities for you during your week here.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Most visitors come here for the cross-country skiing, where you're on " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " for most of the time, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are marked trails, but you can also leave these and go off on your own and that's an experience not to be missed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You can go at your own speed - it's " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " if you really push yourself, or if you prefer you can just glide gently along and enjoy the beautiful scenery.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "This afternoon, you'll be going on a dog-sled trip." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You may have seen our dogs on TV recently racing in the winter sled festival.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you want, you can have your own team for the afternoon and learn how to drive them, following behind our leader on the trail.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Or if you'd prefer, you can just " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " and enjoy the ride as a passenger." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "At the weekend, we have the team relay event, and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We have a local school coming along, and a lot of the teachers are taking part too.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Participation " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " is the main focus, and there's a medal for everyone who takes part." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Participants are in teams of two to four, and each team must complete " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "For your final expedition, you'll head off to Mount Frenner wearing a pair of " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " which allow you to walk on top of the snow." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is an area where miners once " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", though there are very few traces of their work left now." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When the snow melts in summer, the mountain slopes are ",
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
          text: "It's a long ascent, though not too steep, and walkers generally take a couple of days to get to the summit and return.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You'll spend the night in our hut half-way up the mountain. That's included in your " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's got cooking facilities, firewood and water for drinking.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For washing, we recommend you use melted snow, though, to conserve supplies.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We can take your luggage up on our snowmobile for you for just ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The hut has cooking facilities so you can make a hot meal in the evening and morning, but you need to take your own food.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "The weather on Mount Frenner can be very stormy." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In that case, stay in the hut - generally the storms don't last long.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Don't stress about getting back here to the centre in time to catch the airport bus - ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We do have an emergency locator beacon in the hut but only use that if it's " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", like if someone's ill or injured." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now, let me tell you something about the different ski trails you can follow during your stay here.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Highland Trail's directly accessible from where we are now." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This trail's been designed to give first-timers an experience they'll enjoy regardless of their age or skill, but it's also ideal for experts to practise their technique.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then there's Pine Trail … if you're nervous about skiing, leave this one to the experts!",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You follow a steep valley " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " on the river below - scary!" },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But if you've fully mastered the techniques needed for hills, it's great fun.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stony Trail's a good choice once you've got a general idea of the basics.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are one or two tricky sections, but nothing too challenging.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a shelter half-way where you can sit and take a break and enjoy the afternoon sunshine.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "And finally, Loser's Trail." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This starts off following a gentle river valley but the last part is quite exposed so the snow conditions can be challenging - if it's snowing or windy, check with us before you set out to make sure the trail's open that day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Right, so now if you'd like to follow me, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " …" },
      ],
    },
  ],
};

export const CAM13_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "Annie recommends that when cross-country skiing, the visitors should A get away from the regular trails / B stop to enjoy views of the scenery / C go at a slow speed at the beginning",
    questionVi:
      "Annie recommends that when cross-country skiing, the visitors should A get away from the regular trails / B stop to enjoy views of the scenery / C go at a slow speed at the beginning",
    modelParaphraseEn:
      "There are marked trails, but you can also leave these and go off on your own and that's an experience not to be missed",
    modelParaphraseVi:
      "There are marked trails, but you can also leave these and go off on your own and that's an experience not to be missed",
    acceptedAnswers: ["A", "get away from the regular trails", "leave these and go off on your own"],
    explanationEn:
      "A = leave the marked trails and go off on your own. Scenery and speed are options, not her recommendation.",
    explanationVi:
      "A = rời marked trails và đi một mình. Scenery và speed chỉ là lựa chọn, không phải lời khuyên chính.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn:
      "What does Annie tell the group about this afternoon's dog-sled trip? A Those who want to can take part in a race / B Anyone has the chance to drive a team of dogs / C One group member will be chosen to lead the trail",
    questionVi:
      "What does Annie tell the group about this afternoon's dog-sled trip? A Those who want to can take part in a race / B Anyone has the chance to drive a team of dogs / C One group member will be chosen to lead the trail",
    modelParaphraseEn:
      "If you want, you can have your own team for the afternoon and learn how to drive them, following behind our leader on the trail",
    modelParaphraseVi:
      "If you want, you can have your own team for the afternoon and learn how to drive them, following behind our leader on the trail",
    acceptedAnswers: ["B", "Anyone has the chance to drive a team of dogs", "learn how to drive them"],
    explanationEn:
      "B = anyone who wants can drive a team. The TV race is background; the leader is staff, not a guest.",
    explanationVi:
      "B = ai muốn cũng có thể drive a team. Race trên TV chỉ là background; leader là nhân viên, không phải khách.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "What does Annie say about the team relay event? A All participants receive a medal / B The course is 4 km long / C Each team is led by a teacher",
    questionVi:
      "What does Annie say about the team relay event? A All participants receive a medal / B The course is 4 km long / C Each team is led by a teacher",
    modelParaphraseEn: "there's a medal for everyone who takes part",
    modelParaphraseVi: "there's a medal for everyone who takes part",
    acceptedAnswers: ["A", "All participants receive a medal", "medal for everyone who takes part"],
    explanationEn:
      "A = a medal for everyone who takes part. Four laps, not 4 km; teachers take part, they do not lead each team.",
    explanationVi:
      "A = medal cho mọi người tham gia. Four laps, không phải 4 km; teachers tham gia chứ không lead từng đội.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn:
      "On the snow-shoe trip, the visitors will A visit an old gold mine / B learn about unusual flowers / C climb to the top of a mountain",
    questionVi:
      "On the snow-shoe trip, the visitors will A visit an old gold mine / B learn about unusual flowers / C climb to the top of a mountain",
    modelParaphraseEn: "walkers generally take a couple of days to get to the summit and return",
    modelParaphraseVi: "walkers generally take a couple of days to get to the summit and return",
    acceptedAnswers: ["C", "climb to the top of a mountain", "get to the summit"],
    explanationEn:
      "C = get to the summit. Gold-mine traces are almost gone; flowers appear in summer, not on this trip.",
    explanationVi:
      "C = lên summit. Dấu vết gold mine gần như không còn; hoa chỉ có vào summer, không phải chuyến này.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn:
      "The cost of accommodation in the mountain hut includes A a supply of drinking water / B transport of visitors' luggage / C cooked meals",
    questionVi:
      "The cost of accommodation in the mountain hut includes A a supply of drinking water / B transport of visitors' luggage / C cooked meals",
    modelParaphraseEn: "It's got cooking facilities, firewood and water for drinking",
    modelParaphraseVi: "It's got cooking facilities, firewood and water for drinking",
    acceptedAnswers: ["A", "a supply of drinking water", "water for drinking"],
    explanationEn:
      "A = drinking water is included. Luggage on the snowmobile costs ten dollars; food is not provided.",
    explanationVi:
      "A = nước uống đã gồm. Luggage trên snowmobile mất ten dollars; food phải tự mang.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn:
      "If there is a storm while the visitors are in the hut, they should A contact the bus driver / B wait until the weather improves / C use the emergency locator beacon",
    questionVi:
      "If there is a storm while the visitors are in the hut, they should A contact the bus driver / B wait until the weather improves / C use the emergency locator beacon",
    modelParaphraseEn: "stay in the hut - generally the storms don't last long",
    modelParaphraseVi: "stay in the hut - generally the storms don't last long",
    acceptedAnswers: ["B", "wait until the weather improves", "stay in the hut"],
    explanationEn:
      "B = stay in the hut until the storm passes. The airport bus will probably not run; the beacon is only for a real emergency.",
    explanationVi:
      "B = ở lại hut đến khi bão tan. Airport bus có thể không chạy; beacon chỉ dùng khi real emergency.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Highland Trail ______ (A-F)",
    questionVi: "Highland Trail ______ (A-F)",
    modelParaphraseEn:
      "designed to give first-timers an experience they'll enjoy regardless of their age or skill, but it's also ideal for experts",
    modelParaphraseVi:
      "designed to give first-timers an experience they'll enjoy regardless of their age or skill, but it's also ideal for experts",
    acceptedAnswers: ["B", "It is suitable for all abilities", "regardless of their age or skill"],
    explanationEn: "B = suitable for all abilities. First-timers and experts can both use Highland Trail.",
    explanationVi: "B = phù hợp mọi trình độ. First-timers và experts đều dùng được Highland Trail.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Pine Trail ______ (A-F)",
    questionVi: "Pine Trail ______ (A-F)",
    modelParaphraseEn:
      "if you're nervous about skiing, leave this one to the experts! … if you've fully mastered the techniques needed for hills, it's great fun",
    modelParaphraseVi:
      "if you're nervous about skiing, leave this one to the experts! … if you've fully mastered the techniques needed for hills, it's great fun",
    acceptedAnswers: ["D", "It demands a lot of skill", "leave this one to the experts"],
    explanationEn: "D = demands a lot of skill. Nervous skiers should leave Pine Trail to the experts.",
    explanationVi: "D = đòi hỏi nhiều kỹ năng. Người nervous nên để Pine Trail cho experts.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Stony Trail ______ (A-F)",
    questionVi: "Stony Trail ______ (A-F)",
    modelParaphraseEn:
      "There's a shelter half-way where you can sit and take a break and enjoy the afternoon sunshine",
    modelParaphraseVi:
      "There's a shelter half-way where you can sit and take a break and enjoy the afternoon sunshine",
    acceptedAnswers: ["A", "It has a good place to stop and rest", "shelter half-way"],
    explanationEn: "A = a good place to stop and rest. There is a shelter half-way along Stony Trail.",
    explanationVi: "A = chỗ nghỉ tốt. Có shelter half-way trên Stony Trail.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Loser's Trail ______ (A-F)",
    questionVi: "Loser's Trail ______ (A-F)",
    modelParaphraseEn:
      "if it's snowing or windy, check with us before you set out to make sure the trail's open that day",
    modelParaphraseVi:
      "if it's snowing or windy, check with us before you set out to make sure the trail's open that day",
    acceptedAnswers: ["E", "It may be closed in bad weather", "make sure the trail's open that day"],
    explanationEn:
      "E = may be closed in bad weather. Check before setting out if it is snowing or windy.",
    explanationVi:
      "E = có thể đóng khi thời tiết xấu. Nếu snowing or windy thì check trước khi đi.",
  },
];
