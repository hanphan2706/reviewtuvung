import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["enjoying the course so far"] },
    { id: "g2", answers: ["study sports science"] },
    {
      id: "g3",
      answers: ["a professional athlete"],
    },
    { id: "g4", answers: ["a nice feeling"] },
    { id: "g5", answers: ["run faster than me"] },
    { id: "g6", answers: ["What makes you say that"] },
    { id: "g7", answers: ["out of loads of kids"] },
    { id: "g8", answers: ["I'm over it now", "I am over it now"] },
    { id: "g9", answers: ["a variety of sports-related areas"] },
    { id: "g10", answers: ["the discussion session"] },
    {
      id: "g11",
      answers: ["more than one sport"],
    },
    { id: "g12", answers: ["past developments"] },
    { id: "g13", answers: ["early types of equipment"] },
    { id: "g14", answers: ["protect themselves from getting hurt"] },
    { id: "g15", answers: ["original helmet designs"] },
    { id: "g16", answers: ["an upside-down bowl"] },
    {
      id: "g17",
      answers: ["no wood at all"],
    },
    { id: "g18", answers: ["put together some useful ideas"] },
  ],
  lines: [
    {
      speaker: "JEANNE",
      segments: [
        { type: "text", text: "Hi Thomas, how are you " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "THOMAS", segments: [{ type: "text", text: "Yeah, I think it's good." }] },
    {
      speaker: "JEANNE",
      segments: [
        { type: "text", text: "Remind me – why did you decide to " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "? Didn't you want to be " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " when you were at school?" },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        {
          type: "text",
          text: "Yeah – that was my goal, and all my classmates assumed I would achieve it; they thought I was brilliant.",
        },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        { type: "text", text: "That must have been " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "Mm, I thought I could win anything. There was no one who could " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "Exactly – so what happened? Did your mum and dad want you to be more 'academic'?",
        },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [{ type: "text", text: "Not at all. Perhaps they should have pushed me harder, though." }],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "What do you mean?" }] },
    { speaker: "THOMAS", segments: [{ type: "text", text: "I think I should have practised more." }] },
    {
      speaker: "JEANNE",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "THOMAS", segments: [{ type: "text", text: "Well, I went out to Kenya for a couple of weeks to train …" }] },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Really! I didn't know that." }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "I was chosen to go there " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " and run with some of the top teenage athletes in the world. And … I was so calm about it. I just kept thinking how fortunate I was. What a great chance this was! Everyone back home was so proud of me. But once we started competing, I very quickly realised I wasn't good enough.",
        },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "That must have been a huge shock." }] },
    {
      speaker: "THOMAS",
      segments: [{ type: "text", text: "I thought 'this can't be happening'! I was used to winning." }],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "I'm sorry to hear that." }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "It's OK. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " and I think it's much better to do a university course and this one has such " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". It's going to be good." },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Oh, I agree – I chose it because of that." }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "So Jeanne – have you thought of any ideas for " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " next week on technology and sport?" },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        { type: "text", text: "We have to cover " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", don't we?" },
      ],
    },
    { speaker: "THOMAS", segments: [{ type: "text", text: "Yeah." }] },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "You know – we always think technology is about the future, but we could gather some ideas about " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " in sport." },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "Look at " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " perhaps? Uh, I remember reading something about table tennis bats once – how they ended up being covered with pimpled rubber.",
        },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Cos they were just wooden at first, I'd imagine." }] },
    {
      speaker: "THOMAS",
      segments: [
        {
          type: "text",
          text: "Yeah. In about the 1920s, a factory was making rolls of the rubber in bulk for something like horse harnesses.",
        },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Really!" }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "Yeah – and someone realised that it'd make a perfect covering for the wooden bats." },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "So what about cricket – that's had a few innovative changes. Maybe the pads they wear on their legs?",
        },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        {
          type: "text",
          text: "I don't think they've changed much but, I'm just looking on the internet … and it says that when the first cricket helmet came in, in 1978, the Australian batsman who first wore it was booed and jeered by people watching because it was so ugly!",
        },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        { type: "text", text: "Wow, players have to " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "! I mean everyone wears one now." },
      ],
    },
    { speaker: "THOMAS", segments: [{ type: "text", text: "Mm, unlike the cycle helmet." }] },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "Well, unless you're a professional, but you're right, many ordinary bikers don't wear a helmet.",
        },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "Hey, look at these pictures of " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". This one looks like " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [{ type: "text", text: "Yet, the woman's laughing – she's so proud to be wearing it!" }],
    },
    {
      speaker: "THOMAS",
      segments: [{ type: "text", text: "It says serious cyclists ended up with wet hair from all the hard exercise." }],
    },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "I guess that's why they have large air vents in them now so that the skin can breathe more easily.",
        },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        {
          type: "text",
          text: "OK, so we've done helmets. What about golf balls or better still golf clubs – they've changed a lot.",
        },
      ],
    },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "Yeah – I remember my great grandfather telling me that because a club was made entirely of wood, it would easily break and players had to get another.",
        },
      ],
    },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "There's " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " in them now, is there?" },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "No – they're much more powerful." }] },
    { speaker: "THOMAS", segments: [{ type: "text", text: "The same must be true of hockey sticks." }] },
    {
      speaker: "JEANNE",
      segments: [
        {
          type: "text",
          text: "I don't think so because players still use wooden sticks today. What it does say here, though, is that when the game started you had to produce a stick yourself.",
        },
      ],
    },
    { speaker: "THOMAS", segments: [{ type: "text", text: "I guess they just weren't being manufactured. So, one more perhaps. What about football?" }] },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Well, I know the first balls were made of animal skin." }] },
    {
      speaker: "THOMAS",
      segments: [
        {
          type: "text",
          text: "Yeah, they covered them with pieces of leather that were stitched together, but … the balls let in water when it rained.",
        },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "Oh, that would have made them much heavier." }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "That's right. You can imagine the damage to players' necks when the ball was headed." },
      ],
    },
    { speaker: "JEANNE", segments: [{ type: "text", text: "How painful that must have been!" }] },
    {
      speaker: "THOMAS",
      segments: [
        { type: "text", text: "Yeah, well, I think we can " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " …" },
      ],
    },
  ],
};

export const CAM17_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO points about Thomas's school sport: C He could have worked harder at them",
    questionVi: "TWO points about Thomas's school sport: C He could have worked harder at them",
    modelParaphraseEn: "Perhaps they should have pushed me harder … I think I should have practised more",
    modelParaphraseVi: "Perhaps they should have pushed me harder … I think I should have practised more",
    acceptedAnswers: ["practised more", "practiced more", "pushed me harder", "worked harder", "C"],
    explanationEn: "C = he could have worked harder. Parents were not disappointed; they did not push him to be more academic.",
    explanationVi: "C = đáng lẽ phải tập nhiều hơn. Bố mẹ không thất vọng; họ không ép theo hướng học thuật.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E His fellow students admired him",
    questionVi: "(same list) E His fellow students admired him",
    modelParaphraseEn: "all my classmates assumed I would achieve it; they thought I was brilliant",
    modelParaphraseVi: "all my classmates assumed I would achieve it; they thought I was brilliant",
    acceptedAnswers: ["classmates assumed", "thought I was brilliant", "admired", "E"],
    explanationEn: "E = classmates admired him / thought he was brilliant. Training in Kenya was later, not 'too challenging at school'.",
    explanationVi: "E = bạn cùng lớp ngưỡng mộ / nghĩ cậu xuất sắc. Việc tập ở Kenya xảy ra sau, không phải 'quá khó ở trường'.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO feelings in Kenya: A disbelief",
    questionVi: "TWO feelings in Kenya: A disbelief",
    modelParaphraseEn: "I thought 'this can't be happening'! I was used to winning",
    modelParaphraseVi: "I thought 'this can't be happening'! I was used to winning",
    acceptedAnswers: ["this can't be happening", "disbelief", "huge shock", "A"],
    explanationEn: "A = disbelief when he realised he wasn't good enough. Homesickness and stress are not stated.",
    explanationVi: "A = disbelief khi nhận ra mình không đủ giỏi. Không nói homesick hay stress.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) D gratitude",
    questionVi: "(same list) D gratitude",
    modelParaphraseEn: "I just kept thinking how fortunate I was. What a great chance this was",
    modelParaphraseVi: "I just kept thinking how fortunate I was. What a great chance this was",
    acceptedAnswers: ["fortunate", "great chance", "gratitude", "D"],
    explanationEn: "D = gratitude / feeling fortunate about the chance, before the shock of competing.",
    explanationVi: "D = biết ơn / cảm thấy may mắn về cơ hội, trước cú sốc khi thi đấu.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "the table tennis bat — B The material was being mass produced for another purpose",
    questionVi: "the table tennis bat — B The material was being mass produced for another purpose",
    modelParaphraseEn: "a factory was making rolls of the rubber in bulk for something like horse harnesses",
    modelParaphraseVi: "a factory was making rolls of the rubber in bulk for something like horse harnesses",
    acceptedAnswers: ["rubber in bulk", "horse harnesses", "mass produced", "B"],
    explanationEn: "B = pimpled rubber was mass-produced for horse harnesses, then used to cover wooden bats.",
    explanationVi: "B = cao su gai được sản xuất hàng loạt cho dây cương ngựa, rồi mới bọc vợt gỗ.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "the cricket helmet — F It was unpopular among spectators",
    questionVi: "the cricket helmet — F It was unpopular among spectators",
    modelParaphraseEn: "the Australian batsman who first wore it was booed and jeered by people watching because it was so ugly",
    modelParaphraseVi: "the Australian batsman who first wore it was booed and jeered by people watching because it was so ugly",
    acceptedAnswers: ["booed and jeered", "people watching", "unpopular among spectators", "F"],
    explanationEn: "F = spectators booed because it looked ugly – not that it caused injuries.",
    explanationVi: "F = khán giả buýt vì xấu – không phải vì gây chấn thương.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "the cycle helmet — A It could cause excessive sweating",
    questionVi: "the cycle helmet — A It could cause excessive sweating",
    modelParaphraseEn: "serious cyclists ended up with wet hair from all the hard exercise … large air vents … so that the skin can breathe",
    modelParaphraseVi: "serious cyclists ended up with wet hair from all the hard exercise … large air vents … so that the skin can breathe",
    acceptedAnswers: ["wet hair", "excessive sweating", "air vents", "A"],
    explanationEn: "A = early helmets left hair wet from sweat; vents were added later. Ordinary bikers not wearing one is a different point.",
    explanationVi: "A = mũ sớm làm ướt tóc vì mồ hôi; sau mới có lỗ thoáng. Việc người đi xe đạp thường không đội mũ là ý khác.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "the golf club — D It often had to be replaced",
    questionVi: "the golf club — D It often had to be replaced",
    modelParaphraseEn: "because a club was made entirely of wood, it would easily break and players had to get another",
    modelParaphraseVi: "because a club was made entirely of wood, it would easily break and players had to get another",
    acceptedAnswers: ["easily break", "get another", "replaced", "D"],
    explanationEn: "D = wooden clubs broke easily so players needed another. Modern clubs have no wood and are more powerful.",
    explanationVi: "D = gậy gỗ dễ gãy nên phải lấy cái khác. Gậy hiện đại không còn gỗ và mạnh hơn.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "the hockey stick — C People often needed to make their own",
    questionVi: "the hockey stick — C People often needed to make their own",
    modelParaphraseEn: "when the game started you had to produce a stick yourself. I guess they just weren't being manufactured",
    modelParaphraseVi: "when the game started you had to produce a stick yourself. I guess they just weren't being manufactured",
    acceptedAnswers: ["produce a stick yourself", "weren't being manufactured", "make their own", "C"],
    explanationEn: "C = early players made their own sticks. Hockey sticks are still wood, unlike golf clubs.",
    explanationVi: "C = lúc đầu phải tự làm gậy. Gậy hockey vẫn là gỗ, khác gậy golf.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "the football — G It caused injuries",
    questionVi: "the football — G It caused injuries",
    modelParaphraseEn: "the balls let in water … much heavier … the damage to players' necks when the ball was headed",
    modelParaphraseVi: "the balls let in water … much heavier … the damage to players' necks when the ball was headed",
    acceptedAnswers: ["damage to players' necks", "headed", "injuries", "G"],
    explanationEn: "G = waterlogged leather balls became heavy and injured players' necks when headed.",
    explanationVi: "G = bóng da ngấm nước nặng hơn và gây tổn thương cổ khi đánh đầu.",
  },
];
