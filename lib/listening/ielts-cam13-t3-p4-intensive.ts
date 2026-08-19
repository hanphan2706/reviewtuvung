import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["we started looking at reptiles, including crocodiles and snakes"] },
    { id: "g2", answers: ["This is commonly known as the sleepy lizard"] },
    { id: "g3", answers: ["spends quite a lot of its time dozing under rocks or lying in the sun"] },
    { id: "g4", answers: ["Sleepy lizards live in Western and South Australia"] },
    { id: "g5", answers: ["Unlike European lizards, which are mostly small, green and fast-moving"] },
    { id: "g6", answers: ["in contrast with the lining of their mouth which is bright pink"] },
    {
      id: "g7",
      answers: [
        "they're much bigger than most European lizards",
        "they are much bigger than most European lizards",
      ],
    },
    { id: "g8", answers: ["including insects and even small animals"] },
    { id: "g9", answers: ["with strong jaws that can crush beetles and snail shells"] },
    { id: "g10", answers: ["Large birds like cassowaries were one of the main ones in the past"] },
    { id: "g11", answers: ["quite a large number of sleepy lizards are killed by cars"] },
    { id: "g12", answers: ["Though they move slowly, they can travel quite long distances"] },
    {
      id: "g13",
      answers: [
        "they didn't need any other landmarks on the ground",
        "they did not need any other landmarks on the ground",
      ],
    },
    { id: "g14", answers: ["their mating habits are quite unusual"] },
    {
      id: "g15",
      answers: ["they're relatively monogamous", "they are relatively monogamous"],
    },
    { id: "g16", answers: ["both before and after the birth of their young"] },
    {
      id: "g17",
      answers: [
        "you'd expect them to have a much better chance of survival",
        "you would expect them to have a much better chance of survival",
      ],
    },
    { id: "g18", answers: ["male lizards in monogamous relationships tend to be bigger and stronger than other males"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Last week, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Today, I'd like us to look at another reptile - the lizard - and in particular at some studies that have been done on a particular type of lizard whose Latin name is Tiliqua rugosa.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ", because it's quite slow in its movements and ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "I'll start with a general description." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", where they're quite common." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", sleepy lizards are brown, but what's particularly distinctive about them is the colour of their tongue, which is dark blue, ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They have quite a varied diet, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", but they mostly eat plants of varying kinds." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Even though they're quite large and powerful, ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", they still have quite a few predators." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", but nowadays they're more likely to be caught and killed by snakes.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Actually, another threat to their survival isn't a predator at all, but is man-made - ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " when they're trying to cross highways." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One study carried out by Michael Freake at Flinders University investigated the methods of navigation of these lizards.",
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
          text: "And he found that even if they were taken some distance away from their home territory, they could usually find their way back home as long as they could see the sky - ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Observations of these lizards in the wild have also revealed that " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Unlike most animals, it seems that " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", returning to the same partner year after year." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And the male and female also stay together for a long time, ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's quite interesting to think about the possible reasons for this.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It could be that it's to do with protecting their young - ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " if they have both parents around." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But in fact observers have noted that once the babies have hatched out of their eggs, they have hardly any contact with their parents.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So, there's not really any evidence to support that idea.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Another suggestion's based on the observation that " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So maybe the male lizards stay around so they can give the female lizards protection from other males.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But again, we're not really sure." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Finally, I'd like to mention another study that involved collecting data by tracking the lizards.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "I was actually involved in this myself." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So we caught some lizards in the wild and we developed a tiny GPS system that would allow us to track them, and we fixed this onto their tails.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Then we set the lizards free again, and we were able to track them for twelve days and gather data, not just about their location, but even about how many steps they took during this period.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One surprising thing we discovered from this is that there were far fewer meetings between lizards than we expected - it seems that they were actually trying to avoid one another.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So why would that be?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, again we have no clear evidence, but one hypothesis is that male lizards can cause quite serious injuries to one another, so maybe this avoidance is a way of preventing this - of self-preservation, if you like.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But we need to collect a lot more data before we can be sure of any of this.",
        },
      ],
    },
  ],
};

export const CAM13_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "They are brown, but recognisable by their blue ______",
    questionVi: "They are brown, but recognisable by their blue ______",
    modelParaphraseEn: "what's particularly distinctive about them is the colour of their tongue, which is dark blue",
    modelParaphraseVi: "what's particularly distinctive about them is the colour of their tongue, which is dark blue",
    acceptedAnswers: ["tongue", "tongues"],
    explanationEn: "The distinctive feature is a dark-blue tongue (mouth lining is bright pink).",
    explanationVi: "Đặc điểm nổi bật là tongue màu xanh đậm (niêm mạc miệng màu hồng).",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "Their diet consists mainly of ______",
    questionVi: "Their diet consists mainly of ______",
    modelParaphraseEn: "They have quite a varied diet, including insects and even small animals, but they mostly eat plants of varying kinds",
    modelParaphraseVi: "They have quite a varied diet, including insects and even small animals, but they mostly eat plants of varying kinds",
    acceptedAnswers: ["plants"],
    explanationEn: "Mainly plants. Insects and small animals are part of a varied diet, not the main food.",
    explanationVi: "Chủ yếu plants. Insects và small animals chỉ là một phần khẩu phần đa dạng.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "Their main predators are large birds and ______",
    questionVi: "Their main predators are large birds and ______",
    modelParaphraseEn: "Large birds like cassowaries were one of the main ones in the past, but nowadays they're more likely to be caught and killed by snakes",
    modelParaphraseVi: "Large birds like cassowaries were one of the main ones in the past, but nowadays they're more likely to be caught and killed by snakes",
    acceptedAnswers: ["snakes"],
    explanationEn: "Main predators: large birds (past) and snakes (now). Cars are a man-made threat, not a predator.",
    explanationVi: "Predator chính: large birds (trước) và snakes (nay). Cars là mối đe dọa do người, không phải predator.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "One study found that lizards can use the ______ to help them navigate",
    questionVi: "One study found that lizards can use the ______ to help them navigate",
    modelParaphraseEn: "they could usually find their way back home as long as they could see the sky - they didn't need any other landmarks on the ground",
    modelParaphraseVi: "they could usually find their way back home as long as they could see the sky - they didn't need any other landmarks on the ground",
    acceptedAnswers: ["sky"],
    explanationEn: "They navigate if they can see the sky; ground landmarks are not needed.",
    explanationVi: "Chúng định hướng nếu nhìn thấy the sky; không cần landmarks trên mặt đất.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "these lizards keep the same ______ for several years",
    questionVi: "these lizards keep the same ______ for several years",
    modelParaphraseEn: "they're relatively monogamous, returning to the same partner year after year",
    modelParaphraseVi: "they're relatively monogamous, returning to the same partner year after year",
    acceptedAnswers: ["partner", "partners"],
    explanationEn: "Relatively monogamous: the same partner year after year.",
    explanationVi: "Tương đối monogamous: cùng partner năm này qua năm khác.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "(but little ______ has been noted between parents and children)",
    questionVi: "(but little ______ has been noted between parents and children)",
    modelParaphraseEn: "once the babies have hatched out of their eggs, they have hardly any contact with their parents",
    modelParaphraseVi: "once the babies have hatched out of their eggs, they have hardly any contact with their parents",
    acceptedAnswers: ["contact"],
    explanationEn: "After hatching, there is hardly any contact with parents — so the 'protect young' idea is not supported.",
    explanationVi: "Sau khi nở, hầu như không có contact với bố mẹ — ý 'bảo vệ con' không được ủng hộ.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "to provide ______ for female lizards",
    questionVi: "to provide ______ for female lizards",
    modelParaphraseEn: "maybe the male lizards stay around so they can give the female lizards protection from other males",
    modelParaphraseVi: "maybe the male lizards stay around so they can give the female lizards protection from other males",
    acceptedAnswers: ["protection"],
    explanationEn: "Males may stay to give females protection from other males. This is still uncertain.",
    explanationVi: "Con đực có thể ở lại để cho con cái protection khỏi con đực khác. Vẫn chưa chắc.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "GPS systems attached to the ______ of the lizards",
    questionVi: "GPS systems attached to the ______ of the lizards",
    modelParaphraseEn: "we developed a tiny GPS system that would allow us to track them, and we fixed this onto their tails",
    modelParaphraseVi: "we developed a tiny GPS system that would allow us to track them, and we fixed this onto their tails",
    acceptedAnswers: ["tail", "tails"],
    explanationEn: "Tiny GPS units were fixed onto their tails.",
    explanationVi: "GPS nhỏ được gắn vào tails.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "information on the lizards' location and even the number of ______ taken",
    questionVi: "information on the lizards' location and even the number of ______ taken",
    modelParaphraseEn: "not just about their location, but even about how many steps they took during this period",
    modelParaphraseVi: "not just about their location, but even about how many steps they took during this period",
    acceptedAnswers: ["steps"],
    explanationEn: "Tracking gave location and the number of steps taken over twelve days.",
    explanationVi: "Theo dõi cho location và số steps trong mười hai ngày.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "This may be in order to reduce chances of ______",
    questionVi: "This may be in order to reduce chances of ______",
    modelParaphraseEn: "male lizards can cause quite serious injuries to one another, so maybe this avoidance is a way of preventing this - of self-preservation",
    modelParaphraseVi: "male lizards can cause quite serious injuries to one another, so maybe this avoidance is a way of preventing this - of self-preservation",
    acceptedAnswers: ["injury", "injuries"],
    explanationEn: "Avoiding one another may reduce serious injuries (self-preservation). Evidence is still limited.",
    explanationVi: "Tránh nhau có thể giảm injuries nghiêm trọng (self-preservation). Bằng chứng vẫn còn hạn chế.",
  },
];
