import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm calling for some information about", "I am calling for some information about"] },
    { id: "g2", answers: ["I'm thinking of sending my son", "I am thinking of sending my son"] },
    { id: "g3", answers: ["basic cycling skills and safety"] },
    { id: "g4", answers: ["He can ride a bike"] },
    { id: "g5", answers: ["best in Level 5"] },
    { id: "g6", answers: ["practising on the site here", "practicing on the site here"] },
    { id: "g7", answers: ["riding on the road"] },
    { id: "g8", answers: ["stand in for me"] },
    { id: "g9", answers: ["responsible for each class"] },
    { id: "g10", answers: ["They do a great job"] },
    { id: "g11", answers: ["What size will Charlie's class be"] },
    { id: "g12", answers: ["gets to know them well"] },
    { id: "g13", answers: ["put us off"] },
    { id: "g14", answers: ["How about a drink"] },
    { id: "g15", answers: ["shoes, not sandals"] },
    { id: "g16", answers: ["12.30 as usual", "12:30 as usual"] },
    { id: "g17", answers: ["you can't miss it", "you cannot miss it"] },
    { id: "g18", answers: ["filling up quite quickly"] },
  ],
  lines: [
    { speaker: "JAKE", segments: [{ type: "text", text: "Hello, Junior Cycle camp, Jake speaking." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Hi. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the cycle camp - " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Great. Well, it's held every weekday morning over the summer vacation and we focus on " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". We have eight levels for children from three years upwards. How old's your son?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Charlie? He's seven. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", but he needs a little more training before he's safe to go on the road." },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "He'd probably be " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". They start off " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", and we aim to get them " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ", but first they're taken to ride in the park, away from the traffic." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "Right. And can you tell me a bit about the instructors?" }],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Well, all our staff wear different coloured shirts. So, we have three supervisors, and they have red shirts. They support the instructors, and they also ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " if I'm not around. Then the instructors themselves are in blue shirts, and one of these is " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "In order to be accepted, all our instructors have to submit a reference from someone who's seen them work with children - like if they've worked as a babysitter, for example. Then they have to complete our training course, including how to do lesson plans, and generally care for the well-being of the kids in their class. ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", I have to say." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Right. And tell me a bit about the classes. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "We have a limit of eight children in each class, so their instructor really " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". They're out riding most of the time but they have quiet times too, where their instructor might tell them a story that's got something to do with cycling, or get them to play a game together. It's a lot of fun.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "It must be. Now, what happens if there's rain? Do the classes still run?" }],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Oh yes. We don't let that " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " - we just put on our waterproofs and keep cycling." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "And is there anything special Charlie should bring along with him?" }],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Well, maybe some spare clothes, especially if the weather's not so good. And a snack for break time.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "?" }],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "No, we'll provide that. And make sure he has " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Sure. And just at present Charlie has to take medication every few hours, so I'll make sure he has that.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Absolutely. Just give us details of when he has to take it and we'll make sure he does.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Thanks." }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Now, there are a few things you should know about Day 1 of the camp. The classes normally start at 9.30 every morning, but on Day 1 you should aim to get Charlie here by 9.20. The finishing time will be ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". We need the additional time because there are a few extra things to do. The most important is that we have a very careful check to make sure that every child's helmet fits properly. If it doesn't fit, we'll try to adjust it, or we'll find him another one - but he must wear it all the time he's on the bike.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Of course." }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Then after that, all the instructors will be waiting to meet their classes, and they'll meet up in the tent - ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". And each instructor will take their class away and get started." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "OK. Well that all sounds good. Now can you tell me how much the camp costs a week?",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "One hundred ninety-nine dollars. We've managed to keep the price more or less the same as last year - it was one hundred ninety then. But the places are ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right. OK, well I'd like to book for …" }] },
  ],
};

export const CAM16_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "First of all, children at this level are taken to practise in a ______",
    questionVi: "First of all, children at this level are taken to practise in a ______",
    modelParaphraseEn: "first they're taken to ride in the park, away from the traffic",
    modelParaphraseVi: "first they're taken to ride in the park, away from the traffic",
    acceptedAnswers: ["park"],
    explanationEn: "Level 5 starts on site, then rides in the park before the road.",
    explanationVi: "Level 5 tập tại chỗ, rồi đạp trong park trước khi ra đường.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Instructors wear ______ shirts",
    questionVi: "Instructors wear ______ shirts",
    modelParaphraseEn: "the instructors themselves are in blue shirts",
    modelParaphraseVi: "the instructors themselves are in blue shirts",
    acceptedAnswers: ["blue"],
    explanationEn: "Supervisors wear red; instructors wear blue.",
    explanationVi: "Supervisors mặc đỏ; instructors mặc blue.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "A ______ is required and training is given",
    questionVi: "A ______ is required and training is given",
    modelParaphraseEn: "all our instructors have to submit a reference from someone who's seen them work with children",
    modelParaphraseVi: "all our instructors have to submit a reference from someone who's seen them work with children",
    acceptedAnswers: ["reference"],
    explanationEn: "A reference is required, then they complete the training course.",
    explanationVi: "Cần reference, rồi mới hoàn thành khóa training.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "There are quiet times during the morning for a ______ or a game",
    questionVi: "There are quiet times during the morning for a ______ or a game",
    modelParaphraseEn: "their instructor might tell them a story that's got something to do with cycling, or get them to play a game together",
    modelParaphraseVi: "their instructor might tell them a story that's got something to do with cycling, or get them to play a game together",
    acceptedAnswers: ["story"],
    explanationEn: "Quiet times: a cycling-related story or a game.",
    explanationVi: "Giờ yên: story liên quan xe đạp hoặc game.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Classes are held even if there is ______",
    questionVi: "Classes are held even if there is ______",
    modelParaphraseEn: "what happens if there's rain? Do the classes still run? Oh yes. We don't let that put us off",
    modelParaphraseVi: "what happens if there's rain? Do the classes still run? Oh yes. We don't let that put us off",
    acceptedAnswers: ["rain"],
    explanationEn: "Rain does not cancel class — they wear waterproofs and keep cycling.",
    explanationVi: "Rain không hủy lớp — mặc áo mưa và vẫn đạp.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "a change of clothing; a ______",
    questionVi: "a change of clothing; a ______",
    modelParaphraseEn: "maybe some spare clothes … And a snack for break time",
    modelParaphraseVi: "maybe some spare clothes … And a snack for break time",
    acceptedAnswers: ["snack"],
    explanationEn: "Bring spare clothes and a snack; drinks are provided.",
    explanationVi: "Mang đồ thay và snack; nước do trại cung cấp.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Charlie's ______",
    questionVi: "Charlie's ______",
    modelParaphraseEn: "Charlie has to take medication every few hours, so I'll make sure he has that",
    modelParaphraseVi: "Charlie has to take medication every few hours, so I'll make sure he has that",
    acceptedAnswers: ["medication"],
    explanationEn: "Bring Charlie's medication; staff will give it on schedule.",
    explanationVi: "Mang medication của Charlie; nhân viên sẽ cho đúng giờ.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Before the class, his ______ will be checked",
    questionVi: "Before the class, his ______ will be checked",
    modelParaphraseEn: "we have a very careful check to make sure that every child's helmet fits properly",
    modelParaphraseVi: "we have a very careful check to make sure that every child's helmet fits properly",
    acceptedAnswers: ["helmet"],
    explanationEn: "Day 1 extra time is mainly to check that the helmet fits.",
    explanationVi: "Ngày 1 đến sớm chủ yếu để kiểm tra helmet vừa đầu.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "He should then go to the ______ to meet his class instructor",
    questionVi: "He should then go to the ______ to meet his class instructor",
    modelParaphraseEn: "they'll meet up in the tent - you can't miss it",
    modelParaphraseVi: "they'll meet up in the tent - you can't miss it",
    acceptedAnswers: ["tent"],
    explanationEn: "Instructors meet their classes in the tent.",
    explanationVi: "Giảng viên gặp lớp ở tent.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "The course costs $______ per week",
    questionVi: "The course costs $______ per week",
    modelParaphraseEn: "One hundred ninety-nine dollars … last year it was one hundred ninety",
    modelParaphraseVi: "One hundred ninety-nine dollars … last year it was one hundred ninety",
    acceptedAnswers: ["199"],
    explanationEn: "This year is $199 (last year $190).",
    explanationVi: "Năm nay $199 (năm ngoái $190).",
  },
];
