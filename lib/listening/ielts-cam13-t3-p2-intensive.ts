import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "who hasn't found the perfect physical activity yet",
        "who has not found the perfect physical activity yet",
      ],
    },
    { id: "g2", answers: ["whether you would enjoy training in a gym"] },
    { id: "g3", answers: ["Many people are put off by the idea"] },
    { id: "g4", answers: ["some gyms can get very crowded"] },
    { id: "g5", answers: ["Running has become incredibly popular in recent years"] },
    {
      id: "g6",
      answers: [
        "It's worth investing in a high-quality pair",
        "It is worth investing in a high-quality pair",
      ],
    },
    {
      id: "g7",
      answers: ["they don't come cheap", "they do not come cheap"],
    },
    { id: "g8", answers: ["The only thing that may stop you is snow and ice"] },
    { id: "g9", answers: ["it can be quite boring or solitary"] },
    {
      id: "g10",
      answers: [
        "It's hard to chat to people while you're swimming lengths",
        "It is hard to chat to people while you are swimming lengths",
        "It's hard to chat to people while you are swimming lengths",
      ],
    },
    { id: "g11", answers: ["Cycling has become almost as popular as running"] },
    { id: "g12", answers: ["Only fanatics go out in the wind and rain"] },
    { id: "g13", answers: ["which focuses on developing both a healthy mind and body"] },
    { id: "g14", answers: ["It can be surprisingly challenging"] },
    { id: "g15", answers: ["Obviously there can be significant costs involved"] },
    {
      id: "g16",
      answers: [
        "Make sure you get someone with a recognised qualification though",
        "Make sure you get someone with a recognized qualification though",
      ],
    },
    { id: "g17", answers: ["So many people waste lots of money by signing up for membership"] },
    { id: "g18", answers: ["Some people advise writing goals down"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "So if you are one of those people " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", here are some things to think about which might help you make the right decision for you.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The first question to ask yourself is " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " of having to fit a visit to the gym into their busy day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You often have to go very early or late as " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " but with regular training you'll see a big difference in a relatively short space of time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "That's probably got a lot to do with the fact that it's a very accessible form of exercise - anyone can run, even if you could only run a few metres to begin with.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But make sure you get the right shoes." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " and " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another great thing about running is that you can do it at any time of day or night. ",
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
          text: "Swimming is another really good way to build fitness.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "What attracts many people is that you can swim in an indoor pool at any time of year.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "On the other hand, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: " in recent years." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "That's probably because as well as improving their fitness many people say being out in the fresh air in a park or in the countryside can be fun, provided the conditions are right of course.",
        },
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
        {
          type: "text",
          text: "Yoga is a good choice for those of you looking for exercise ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's a good way of building strength and with the right instructor there's less chance of hurting yourself than with other more active sports.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But don't expect to find it easy." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", especially for people who aren't very flexible." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Getting a personal trainer is a good way to start your fitness programme.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But if you've got someone there to encourage you and help you achieve your goals, you're less likely to give up.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Or you could do yourself permanent damage." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Whatever you do, don't join a gym unless you're sure you'll make good use of it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " and then hardly ever go." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "What happens to their good intentions?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I don't think people suddenly stop caring about improving their fitness or decide they have more important things to do.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I think people lose interest when they don't think they're making enough progress.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "That's when they give up hope and stop believing they'll ever achieve their goals.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Also, what people sometimes don't realise when they start is that it takes a lot of determination and hard work to keep training week after week and lots of people don't have that kind of commitment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One thing you can do to help yourself is to set manageable goals.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Be realistic and don't push yourself too far." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: " but I think it's better to have a flexible approach." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Give yourself a really nice treat every time you reach one of your goals.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And don't get too upset if you experience setbacks.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's a journey. There are bound to be difficulties along the way.",
        },
      ],
    },
  ],
};

export const CAM13_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "using a gym — advantage (A–G)",
    questionVi: "using a gym — advantage (A–G)",
    modelParaphraseEn: "with regular training you'll see a big difference in a relatively short space of time",
    modelParaphraseVi: "with regular training you'll see a big difference in a relatively short space of time",
    acceptedAnswers: ["F", "fast results", "big difference in a relatively short space of time"],
    explanationEn: "F = fast results. Crowds and early/late visits are drawbacks, not the advantage.",
    explanationVi: "F = fast results. Đông người và giờ sớm/muộn là nhược điểm, không phải lợi ích.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "running — advantage (A–G)",
    questionVi: "running — advantage (A–G)",
    modelParaphraseEn: "it's a very accessible form of exercise - anyone can run, even if you could only run a few metres to begin with",
    modelParaphraseVi: "it's a very accessible form of exercise - anyone can run, even if you could only run a few metres to begin with",
    acceptedAnswers: ["D", "fitness level unimportant", "anyone can run"],
    explanationEn: "D = fitness level unimportant. Anyone can run, even a few metres at first. Day/night is extra; snow/ice is a limit.",
    explanationVi: "D = fitness level unimportant. Ai cũng chạy được, dù mới được vài mét. Ngày/đêm là chi tiết thêm.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "swimming — advantage (A–G)",
    questionVi: "swimming — advantage (A–G)",
    modelParaphraseEn: "you can swim in an indoor pool at any time of year",
    modelParaphraseVi: "you can swim in an indoor pool at any time of year",
    acceptedAnswers: ["A", "not dependent on season", "at any time of year"],
    explanationEn: "A = not dependent on season. Indoor pool all year. Boring/solitary is a drawback (not E sociable).",
    explanationVi: "A = not dependent on season. Bể trong nhà quanh năm. Boring/solitary là nhược điểm (không phải E sociable).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "cycling — advantage (A–G)",
    questionVi: "cycling — advantage (A–G)",
    modelParaphraseEn: "being out in the fresh air in a park or in the countryside can be fun, provided the conditions are right",
    modelParaphraseVi: "being out in the fresh air in a park or in the countryside can be fun, provided the conditions are right",
    acceptedAnswers: ["B", "enjoyable", "can be fun"],
    explanationEn: "B = enjoyable. Fresh air in a park/countryside can be fun if conditions are right.",
    explanationVi: "B = enjoyable. Không khí trong lành ở công viên/nông thôn can be fun nếu thời tiết ổn.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "doing yoga — advantage (A–G)",
    questionVi: "doing yoga — advantage (A–G)",
    modelParaphraseEn: "with the right instructor there's less chance of hurting yourself than with other more active sports",
    modelParaphraseVi: "with the right instructor there's less chance of hurting yourself than with other more active sports",
    acceptedAnswers: ["C", "low risk of injury", "less chance of hurting yourself"],
    explanationEn: "C = low risk of injury. It can still be surprisingly challenging if you are not flexible.",
    explanationVi: "C = low risk of injury. Vẫn có thể surprisingly challenging nếu không dẻo.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "training with a personal trainer — advantage (A–G)",
    questionVi: "training with a personal trainer — advantage (A–G)",
    modelParaphraseEn: "if you've got someone there to encourage you and help you achieve your goals, you're less likely to give up",
    modelParaphraseVi: "if you've got someone there to encourage you and help you achieve your goals, you're less likely to give up",
    acceptedAnswers: ["G", "motivating", "encourage you", "less likely to give up"],
    explanationEn: "G = motivating. Costs and the need for a recognised qualification are caveats, not the advantage.",
    explanationVi: "G = motivating. Chi phí và cần recognised qualification là lưu ý, không phải lợi ích.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Why people give up the gym (TWO from A–E): ______",
    questionVi: "Why people give up the gym (TWO from A–E): ______",
    modelParaphraseEn: "people lose interest when they don't think they're making enough progress. That's when they give up hope",
    modelParaphraseVi: "people lose interest when they don't think they're making enough progress. That's when they give up hope",
    acceptedAnswers: ["B", "loss of confidence", "give up hope", "not making enough progress"],
    explanationEn: "B = loss of confidence. They do not suddenly lack time (A) or find costs too high (D).",
    explanationVi: "B = loss of confidence. Không phải đột nhiên thiếu thời gian (A) hay chi phí quá cao (D).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Why people give up the gym (TWO from A–E): ______",
    questionVi: "Why people give up the gym (TWO from A–E): ______",
    modelParaphraseEn: "it takes a lot of determination and hard work to keep training week after week and lots of people don't have that kind of commitment",
    modelParaphraseVi: "it takes a lot of determination and hard work to keep training week after week and lots of people don't have that kind of commitment",
    acceptedAnswers: ["C", "too much effort required", "determination and hard work", "commitment"],
    explanationEn: "C = too much effort required. Official pair with Q17 is B and C.",
    explanationVi: "C = too much effort required. Cặp official với Q17 là B và C.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Advice for setting goals (TWO from A–E): ______",
    questionVi: "Advice for setting goals (TWO from A–E): ______",
    modelParaphraseEn: "set manageable goals. Be realistic and don't push yourself too far",
    modelParaphraseVi: "set manageable goals. Be realistic and don't push yourself too far",
    acceptedAnswers: ["B", "have achievable aims", "manageable goals", "be realistic"],
    explanationEn: "B = have achievable aims. Writing goals down is mentioned but the speaker prefers a flexible approach (not A).",
    explanationVi: "B = have achievable aims. Viết mục tiêu ra giấy được nhắc nhưng speaker thích cách linh hoạt (không phải A).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Advice for setting goals (TWO from A–E): ______",
    questionVi: "Advice for setting goals (TWO from A–E): ______",
    modelParaphraseEn: "Give yourself a really nice treat every time you reach one of your goals",
    modelParaphraseVi: "Give yourself a really nice treat every time you reach one of your goals",
    acceptedAnswers: ["D", "give yourself rewards", "nice treat"],
    explanationEn: "D = give yourself rewards. Official pair with Q19 is B and D. E (challenge yourself) is the opposite of don't push too far.",
    explanationVi: "D = give yourself rewards. Cặp official với Q19 là B và D. E (challenge yourself) trái với don't push too far.",
  },
];
