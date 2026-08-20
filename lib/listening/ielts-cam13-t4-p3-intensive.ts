import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["loads to do"],
    },
    { id: "g2", answers: ["your own shopping habits"] },
    { id: "g3", answers: ["because of my allergy"] },
    { id: "g4", answers: ["much more carefully"] },
    { id: "g5", answers: ["claims on packaging"] },
    { id: "g6", answers: ["Ready meals are the worst"] },
    { id: "g7", answers: ["a real eye-opener"] },
    { id: "g8", answers: ["Not exactly transparent is it"] },
    { id: "g9", answers: ["makes a big difference"] },
    { id: "g10", answers: ["Which one did you prefer"] },
    {
      id: "g11",
      answers: ["easiest for people to use"],
    },
    { id: "g12", answers: ["more consistency"] },
    { id: "g13", answers: ["change people's behaviour"] },
    { id: "g14", answers: ["more research has to be done"] },
    { id: "g15", answers: ["Why do you suppose that is"] },
    { id: "g16", answers: ["Pressure from the food manufacturers"] },
    { id: "g17", answers: ["low literacy levels"] },
    { id: "g18", answers: ["chose that method"] },
  ],
  lines: [
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "I've still got " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for our report on nutritional food labels." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "Me too. What did you learn from doing the project about " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "Well, I've always had to check labels for traces of peanuts in everything I eat " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". But beyond that I've never really been concerned enough to check how healthy a product is.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "This project has actually taught me to read the labels " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". I tended to believe " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " like 'low in fat'. But I now realise that the 'healthy' yoghurt I've bought for years is full of sugar and that it's actually quite high in calories.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " … comparing the labels on supermarket pizzas was " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". Did you have any idea how many calories they contain? I was amazed." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Yes, because unless you read the label really carefully, you wouldn't know that the nutritional values given are for half a pizza.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "When most people eat the whole pizza. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ALICE",
      segments: [{ type: "text", text: "Not at all. But I expect it won't stop you from buying pizza?" }],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Probably not, no! I thought comparing the different labelling systems used by food manufacturers was interesting. I think the kind of labelling system used ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "?" }],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "I liked the traditional daily value system best - the one which tells you what proportion of your required daily intake of each ingredient the product contains. I'm not sure it's the ",
        },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " but at least you get the full story. I like to know all the ingredients in a product - not just how much fat, salt and sugar they contain.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "But it's good supermarkets have been making an effort to provide reliable information for customers.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "There just needs to be " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " between labelling systems used by different supermarkets, in terms of portion sizes, etc." },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "Mmm. The labels on the different brands of chicken flavour crisps were quite revealing too, weren't they?",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yeah. I don't understand how they can get away with calling them chicken flavour when they only contain artificial additives.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "I know. I'd at least have expected them to contain a small percentage of real chicken.",
        },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "Absolutely." }] },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "I think having nutritional food labeling has been a good idea, don't you? I think it will ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " and stop mothers, in particular, buying the wrong things." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "But didn't that study kind of prove the opposite? People didn't necessarily stop buying unhealthy products.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "They only said that might be the case. Those findings weren't that conclusive and it was quite a small-scale study. I think ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "JACK", segments: [{ type: "text", text: "Yes, I think you're probably right." }] },
    { speaker: "JACK", segments: [{ type: "text", text: "What do you think of the traffic-light system?" }] },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "I think supermarkets like the idea of having a colour-coded system - red, orange or green - for levels of fat, sugar and salt in a product.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        { type: "text", text: "But it's not been adopted universally. And not on all products. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". Hardly surprising that some of them are opposed to flagging up how unhealthy their products are.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "I'd have thought it would have been compulsory. It seems ridiculous it isn't.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "I know. And what I couldn't get over is the fact that it was brought in without enough consultation - a lot of experts had deep reservations about it.",
        },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "That is a bit weird. I suppose there's an argument for doing the research now when consumers are familiar with this system.",
        },
      ],
    },
    { speaker: "ALICE", segments: [{ type: "text", text: "Yeah, maybe." }] },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "The participants in the survey were quite positive about the traffic-light system.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        { type: "text", text: "Mmm. But I don't think they targeted the right people. They should have focused on people with " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " because these labels are designed to be accessible to them." },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Yeah. But it's good to get feedback from all socio-economic groups. And there wasn't much variation in their responses.",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "No. But if they hadn't interviewed participants face-to-face, they could have used a much bigger sample size. I wonder why they ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "JACK",
      segments: [
        {
          type: "text",
          text: "Dunno. How were they selected? Did they volunteer or were they approached?",
        },
      ],
    },
    {
      speaker: "ALICE",
      segments: [
        {
          type: "text",
          text: "I think they volunteered. The thing that wasn't stated was how often they bought packaged food - all we know is how frequently they used the supermarket.",
        },
      ],
    },
  ],
};

export const CAM13_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "What was Jack's attitude to nutritional food labels before this project? A He didn't read everything on them / B He didn't think they were important / C He thought they were too complicated",
    questionVi:
      "What was Jack's attitude to nutritional food labels before this project? A He didn't read everything on them / B He didn't think they were important / C He thought they were too complicated",
    modelParaphraseEn:
      "I've always had to check labels for traces of peanuts … But beyond that I've never really been concerned enough to check how healthy a product is",
    modelParaphraseVi:
      "I've always had to check labels for traces of peanuts … But beyond that I've never really been concerned enough to check how healthy a product is",
    acceptedAnswers: ["A", "He didn't read everything on them", "never really been concerned enough"],
    explanationEn:
      "A = he only checked for peanuts, not how healthy a product is. He did not say labels were unimportant or too complicated.",
    explanationVi:
      "A = anh chỉ check peanuts, không check độ healthy. Không nói labels không quan trọng hay quá phức tạp.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "Alice says that before doing this project, A she was unaware of what certain foods contained / B she was too lazy to read food labels / C she was only interested in the number of calories",
    questionVi:
      "Alice says that before doing this project, A she was unaware of what certain foods contained / B she was too lazy to read food labels / C she was only interested in the number of calories",
    modelParaphraseEn:
      "I tended to believe claims on packaging like 'low in fat'. But I now realise that the 'healthy' yoghurt I've bought for years is full of sugar",
    modelParaphraseVi:
      "I tended to believe claims on packaging like 'low in fat'. But I now realise that the 'healthy' yoghurt I've bought for years is full of sugar",
    acceptedAnswers: [
      "A",
      "she was unaware of what certain foods contained",
      "yoghurt … is full of sugar",
    ],
    explanationEn:
      "A = she did not know her 'healthy' yoghurt was full of sugar. Lazy and calories-only are not what she says.",
    explanationVi:
      "A = cô không biết yoghurt 'healthy' đầy sugar. Lazy và chỉ quan tâm calories không phải điều cô nói.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "When discussing supermarket brands of pizza, Jack agrees with Alice that A the list of ingredients is shocking / B he will hesitate before buying pizza again / C the nutritional label is misleading",
    questionVi:
      "When discussing supermarket brands of pizza, Jack agrees with Alice that A the list of ingredients is shocking / B he will hesitate before buying pizza again / C the nutritional label is misleading",
    modelParaphraseEn:
      "the nutritional values given are for half a pizza. When most people eat the whole pizza. Not exactly transparent is it?",
    modelParaphraseVi:
      "the nutritional values given are for half a pizza. When most people eat the whole pizza. Not exactly transparent is it?",
    acceptedAnswers: ["C", "the nutritional label is misleading", "Not exactly transparent"],
    explanationEn:
      "C = values are for half a pizza, so the label is misleading. Jack will probably still buy pizza.",
    explanationVi:
      "C = giá trị dinh dưỡng cho nửa pizza, nên nhãn gây hiểu lầm. Jack vẫn sẽ mua pizza.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn:
      "Jack prefers the daily value system to other labelling systems because it is A more accessible / B more logical / C more comprehensive",
    questionVi:
      "Jack prefers the daily value system to other labelling systems because it is A more accessible / B more logical / C more comprehensive",
    modelParaphraseEn:
      "I'm not sure it's the easiest for people to use but at least you get the full story",
    modelParaphraseVi:
      "I'm not sure it's the easiest for people to use but at least you get the full story",
    acceptedAnswers: ["C", "more comprehensive", "you get the full story"],
    explanationEn:
      "C = the full story / all ingredients. He is not sure it is the easiest, so not more accessible.",
    explanationVi:
      "C = full story / tất cả ingredients. Anh không chắc nó dễ nhất, nên không phải more accessible.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn:
      "What surprised both students about one flavour of crisps? A The percentage of artificial additives given was incorrect / B The products did not contain any meat / C The labels did not list all the ingredients",
    questionVi:
      "What surprised both students about one flavour of crisps? A The percentage of artificial additives given was incorrect / B The products did not contain any meat / C The labels did not list all the ingredients",
    modelParaphraseEn:
      "calling them chicken flavour when they only contain artificial additives. I'd at least have expected them to contain a small percentage of real chicken",
    modelParaphraseVi:
      "calling them chicken flavour when they only contain artificial additives. I'd at least have expected them to contain a small percentage of real chicken",
    acceptedAnswers: ["B", "The products did not contain any meat", "only contain artificial additives"],
    explanationEn:
      "B = chicken flavour with no real chicken, only artificial additives. Not a wrong percentage or missing list.",
    explanationVi:
      "B = vị chicken nhưng không có thịt gà thật, chỉ artificial additives. Không phải sai percentage hay thiếu list.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn:
      "What do the students think about research into the impact of nutritional food labelling? A It did not produce clear results / B It focused on the wrong people / C It made unrealistic recommendations",
    questionVi:
      "What do the students think about research into the impact of nutritional food labelling? A It did not produce clear results / B It focused on the wrong people / C It made unrealistic recommendations",
    modelParaphraseEn:
      "Those findings weren't that conclusive and it was quite a small-scale study. I think more research has to be done",
    modelParaphraseVi:
      "Those findings weren't that conclusive and it was quite a small-scale study. I think more research has to be done",
    acceptedAnswers: ["A", "It did not produce clear results", "weren't that conclusive"],
    explanationEn:
      "A = findings were not conclusive. Wrong people is about the later traffic-light survey, not this study.",
    explanationVi:
      "A = findings không conclusive. Wrong people thuộc survey traffic-light sau đó, không phải nghiên cứu này.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn:
      "Which TWO things surprised the students about the traffic-light system? B the fact that it is voluntary for supermarkets",
    questionVi:
      "Which TWO things surprised the students about the traffic-light system? B the fact that it is voluntary for supermarkets",
    modelParaphraseEn:
      "But it's not been adopted universally … I'd have thought it would have been compulsory",
    modelParaphraseVi:
      "But it's not been adopted universally … I'd have thought it would have been compulsory",
    acceptedAnswers: ["B", "the fact that it is voluntary for supermarkets", "not been adopted universally"],
    explanationEn:
      "B = it is voluntary / not compulsory. Manufacturer pressure is mentioned, but unpopularity is not one of the two answers.",
    explanationVi:
      "B = voluntary / không compulsory. Manufacturer pressure được nhắc, nhưng unpopularity không phải một trong hai đáp án.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn:
      "(same list) C how little research was done before its introduction",
    questionVi:
      "(same list) C how little research was done before its introduction",
    modelParaphraseEn:
      "it was brought in without enough consultation - a lot of experts had deep reservations about it",
    modelParaphraseVi:
      "it was brought in without enough consultation - a lot of experts had deep reservations about it",
    acceptedAnswers: [
      "C",
      "how little research was done before its introduction",
      "without enough consultation",
    ],
    explanationEn:
      "C = brought in without enough consultation / experts had deep reservations. That is little prior research.",
    explanationVi:
      "C = đưa vào without enough consultation / experts có deep reservations. Tức là ít nghiên cứu trước khi áp dụng.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn:
      "Which TWO things are true about the participants in the study on the traffic-light system? D They were from all socio-economic groups",
    questionVi:
      "Which TWO things are true about the participants in the study on the traffic-light system? D They were from all socio-economic groups",
    modelParaphraseEn: "it's good to get feedback from all socio-economic groups",
    modelParaphraseVi: "it's good to get feedback from all socio-economic groups",
    acceptedAnswers: ["D", "They were from all socio-economic groups", "all socio-economic groups"],
    explanationEn:
      "D = all socio-economic groups. Low literacy is who they should have focused on, not who they actually studied.",
    explanationVi:
      "D = all socio-economic groups. Low literacy là nhóm lẽ ra nên focus, không phải nhóm thực sự được nghiên cứu.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "(same list) E They were interviewed face-to-face",
    questionVi: "(same list) E They were interviewed face-to-face",
    modelParaphraseEn:
      "if they hadn't interviewed participants face-to-face, they could have used a much bigger sample size",
    modelParaphraseVi:
      "if they hadn't interviewed participants face-to-face, they could have used a much bigger sample size",
    acceptedAnswers: ["E", "They were interviewed face-to-face", "interviewed participants face-to-face"],
    explanationEn:
      "E = interviewed face-to-face. They volunteered (not randomly selected); packaged-food frequency was not stated.",
    explanationVi:
      "E = phỏng vấn face-to-face. Họ volunteer (không random); tần suất mua packaged food không được nêu.",
  },
];
