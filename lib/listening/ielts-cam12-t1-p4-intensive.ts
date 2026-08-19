import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["In public discussion of business, we take certain values for granted"],
    },
    {
      id: "g2",
      answers: [
        "Today I'm going to talk about four of them",
        "Today I am going to talk about four of them",
      ],
    },
    {
      id: "g3",
      answers: [
        "Most people would say they're all 'good things'",
        "Most people would say they are all 'good things'",
        "Most people would say they're all good things",
      ],
    },
    {
      id: "g4",
      answers: [
        "I'm going to suggest that's an over-simple view",
        "I am going to suggest that is an over-simple view",
        "I'm going to suggest that is an over-simple view",
      ],
    },
    {
      id: "g5",
      answers: [
        "they're theoretical concepts, removed from the reality of day-to-day business",
        "they are theoretical concepts, removed from the reality of day-to-day business",
      ],
    },
    {
      id: "g6",
      answers: ["Pursue values by all means, but be prepared for what may happen as a result"],
    },
    { id: "g7", answers: ["Business leaders generally try to do the right thing"] },
    {
      id: "g8",
      answers: [
        "The values can easily get in the way of what's actually intended",
        "The values can easily get in the way of what is actually intended",
      ],
    },
    {
      id: "g9",
      answers: [
        "So the first value I'm going to discuss is collaboration",
        "So the first value I am going to discuss is collaboration",
      ],
    },
    { id: "g10", answers: ["This was intended to encourage teamwork"] },
    { id: "g11", answers: ["But it was really a job best done by one person"] },
    { id: "g12", answers: ["Our team leader solved the challenge brilliantly"] },
    { id: "g13", answers: ["We finished before any other team"] },
    {
      id: "g14",
      answers: ["Teamwork can also lead to inconsistency - a common cause of poor sales"],
    },
    {
      id: "g15",
      answers: [
        "It's easy to mock people who say they work hard",
        "It is easy to mock people who say they work hard",
      ],
    },
    {
      id: "g16",
      answers: [
        "after all, a hamster running around in a wheel is working hard - and getting nowhere",
      ],
    },
    {
      id: "g17",
      answers: [
        "they possess intellectual clarity, and they don't rush into making decisions",
        "they possess intellectual clarity, and they do not rush into making decisions",
      ],
    },
    {
      id: "g18",
      answers: [
        "the 'just-get-started' approach is likely to be more successful",
        "the just-get-started approach is likely to be more successful",
      ],
    },
  ],
  lines: [
    { speaker: null, segments: [{ type: "gap", gapId: "g1" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ": collaboration, hard work, creativity and excellence." },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The trouble with these values is that " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g6" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They can actually cause damage, which is not at all the intention.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g7" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But all too often the right thing backfires, if those leaders adopt values without understanding and managing the side effects that arise.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g8" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "text", text: "OK." }] },
    { speaker: null, segments: [{ type: "gap", gapId: "g9" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "text", text: "Er, let me give you an example." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "On a management training course I once attended, we were put into groups and had to construct a bridge across a stream, using building blocks that we were given.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The rule was that everyone in the team had to move at least one building block during the construction.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The other teams tried to collaborate on building the structure, and descended into confusion, with everyone getting in each other's way.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g12" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "She simply asked everyone in the team to move a piece a few centimetres, to comply with the rule, and then let the person in the team with an aptitude for puzzles like this build it alone.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My point is that the task wasn't really suited to teamworking, so why make it one?",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the case of a smartphone that a certain company launched, one director wanted to target the business market, and another demanded it was aimed at consumers.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The company wanted both directors to be involved, so gave the product a consumer-friendly name, but marketed it to companies.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The result was that it met the needs of neither group." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It would have been better to let one director or the other have his way, not both.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Now industriousness, or hard work." }] },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: ": " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Of course hard work is valuable, but only when properly targeted." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Otherwise it wastes the resources that companies value most - time and energy.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "And that's bad for the organisation." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a management model that groups people according to four criteria: clever, hard-working, stupid and lazy.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Here 'lazy' means having a rational determination not to carry out unnecessary tasks.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It doesn't mean trying to avoid work altogether." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Most people display two of these characteristics, and the most valuable people are those who are both clever and lazy: ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They come up with solutions to save the time and energy spent by the stupid and hard-working group.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Instead of throwing more man-hours at a problem, the clever and lazy group looks for a more effective solution.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "Next we come to creativity." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This often works well - creating an attention-grabbing TV commercial, for example, might lead to increased sales.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "But it isn't always a good thing." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some advertising campaigns are remembered for their creativity, without having any effect on sales.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This happened a few years ago with the launch of a chocolate bar: subsequent research showed that plenty of consumers remembered the adverts, but had no idea what was being advertised.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The trouble is that the creator derives pleasure from coming up with the idea, and wrongly assumes the audience for the campaign will share that feeling.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A company that brings out thousands of new products may seem more creative than a company that only has a few, but it may be too creative, and make smaller profits.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Creativity needs to be targeted, to solve a problem that the company has identified.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Just coming up with more and more novel products isn't necessarily a good thing.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "And finally, excellence." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We all know companies that claim they 'strive for excellence', but it takes a long time to achieve excellence.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In business, being first with a product is more profitable than having the best product.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A major study of company performance compared pioneers - that is, companies bringing out the first version of a particular product - with followers, the companies that copied and improved on that product.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The study found that the pioneers commanded an average market share of 29 percent, while the followers achieved less than half that, only 13 percent - even though their product might have been better.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Insisting on excellence in everything we do is time-consuming, wastes energy and leads to losing out on opportunities.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Sometimes, second-rate work is more worthwhile than excellence.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "'Make sure it's excellent' sounds like a good approach to business, but ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM12_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "Many business values can result in ______",
    questionVi: "Many business values can result in ______",
    modelParaphraseEn: "They can actually cause damage, which is not at all the intention",
    modelParaphraseVi: "They can actually cause damage, which is not at all the intention",
    acceptedAnswers: ["damage"],
    explanationEn: "Pursuing theoretical values can cause damage, not the intended good.",
    explanationVi: "Theo đuổi giá trị lý thuyết có thể gây damage, không phải điều định hướng tới.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "Senior managers need to understand and deal with the potential ______ that may result",
    questionVi: "Senior managers need to understand and deal with the potential ______ that may result",
    modelParaphraseEn:
      "if those leaders adopt values without understanding and managing the side effects that arise",
    modelParaphraseVi:
      "if those leaders adopt values without understanding and managing the side effects that arise",
    acceptedAnswers: ["side effects"],
    explanationEn: "Leaders must understand and manage the side effects of values.",
    explanationVi: "Lãnh đạo phải hiểu và quản lý side effects của các giá trị.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "During a training course, the speaker was in a team that had to build a ______",
    questionVi: "During a training course, the speaker was in a team that had to build a ______",
    modelParaphraseEn:
      "we were put into groups and had to construct a bridge across a stream, using building blocks",
    modelParaphraseVi:
      "we were put into groups and had to construct a bridge across a stream, using building blocks",
    acceptedAnswers: ["bridge"],
    explanationEn: "The training task was to construct a bridge across a stream.",
    explanationVi: "Bài tập đào tạo là dựng một bridge băng qua suối.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "Other teams experienced ______ from trying to collaborate",
    questionVi: "Other teams experienced ______ from trying to collaborate",
    modelParaphraseEn:
      "The other teams tried to collaborate … and descended into confusion, with everyone getting in each other's way",
    modelParaphraseVi:
      "The other teams tried to collaborate … and descended into confusion, with everyone getting in each other's way",
    acceptedAnswers: ["confusion"],
    explanationEn: "Forced collaboration produced confusion — people got in each other's way.",
    explanationVi: "Bắt buộc cộng tác dẫn tới confusion — mọi người cản nhau.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Sales of a ______ were poor because of collaboration",
    questionVi: "Sales of a ______ were poor because of collaboration",
    modelParaphraseEn:
      "In the case of a smartphone that a certain company launched … it met the needs of neither group",
    modelParaphraseVi:
      "In the case of a smartphone that a certain company launched … it met the needs of neither group",
    acceptedAnswers: ["smartphone"],
    explanationEn: "Two directors pulled the smartphone both ways; it satisfied neither market.",
    explanationVi: "Hai giám đốc kéo smartphone hai hướng; không đáp ứng thị trường nào.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Hard work may be a bad use of various company ______",
    questionVi: "Hard work may be a bad use of various company ______",
    modelParaphraseEn: "Otherwise it wastes the resources that companies value most - time and energy",
    modelParaphraseVi: "Otherwise it wastes the resources that companies value most - time and energy",
    acceptedAnswers: ["resources"],
    explanationEn: "Untargeted hard work wastes company resources, especially time and energy.",
    explanationVi: "Làm việc chăm chỉ không đúng đích lãng phí resources, nhất là time and energy.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "The word 'lazy' in this context refers to people who avoid doing tasks that are ______",
    questionVi: "The word 'lazy' in this context refers to people who avoid doing tasks that are ______",
    modelParaphraseEn:
      "Here 'lazy' means having a rational determination not to carry out unnecessary tasks",
    modelParaphraseVi:
      "Here 'lazy' means having a rational determination not to carry out unnecessary tasks",
    acceptedAnswers: ["unnecessary", "not necessary"],
    explanationEn: "Lazy = a rational choice not to do unnecessary tasks, not avoiding work altogether.",
    explanationVi: "Lazy = chủ động không làm việc unnecessary, không phải trốn việc.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "An advertising campaign for a ______ was memorable but failed to boost sales",
    questionVi: "An advertising campaign for a ______ was memorable but failed to boost sales",
    modelParaphraseEn:
      "the launch of a chocolate bar: … plenty of consumers remembered the adverts, but had no idea what was being advertised",
    modelParaphraseVi:
      "the launch of a chocolate bar: … plenty of consumers remembered the adverts, but had no idea what was being advertised",
    acceptedAnswers: ["chocolate bar"],
    explanationEn: "The chocolate-bar ads were memorable but people did not know the product.",
    explanationVi: "Quảng cáo chocolate bar dễ nhớ nhưng người ta không biết sản phẩm là gì.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "Creativity should be used as a response to a particular ______",
    questionVi: "Creativity should be used as a response to a particular ______",
    modelParaphraseEn:
      "Creativity needs to be targeted, to solve a problem that the company has identified",
    modelParaphraseVi:
      "Creativity needs to be targeted, to solve a problem that the company has identified",
    acceptedAnswers: ["problem"],
    explanationEn: "Creativity should answer a problem the company has identified, not endless novelty.",
    explanationVi: "Sáng tạo phải nhằm giải một problem công ty đã xác định, không phải sản phẩm mới vô hạn.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn:
      "According to one study, on average, pioneers had a ______ that was far higher than that of followers",
    questionVi:
      "According to one study, on average, pioneers had a ______ that was far higher than that of followers",
    modelParaphraseEn:
      "the pioneers commanded an average market share of 29 percent, while the followers achieved … only 13 percent",
    modelParaphraseVi:
      "the pioneers commanded an average market share of 29 percent, while the followers achieved … only 13 percent",
    acceptedAnswers: ["market share"],
    explanationEn: "Pioneers averaged 29% market share vs 13% for followers.",
    explanationVi: "Pioneers trung bình 29% market share, followers chỉ 13%.",
  },
];
