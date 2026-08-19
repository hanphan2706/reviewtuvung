import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["we have to do something on sleep and dreams"] },
    { id: "g2", answers: ["why we tend to forget most of our dreams soon after we wake up"] },
    { id: "g3", answers: ["I hadn't heard that idea before", "I had not heard that idea before"] },
    { id: "g4", answers: ["What do you think about the idea"] },
    { id: "g5", answers: ["It's a belief that you get all over the world", "It is a belief that you get all over the world"] },
    { id: "g6", answers: ["Something else I read about"] },
    { id: "g7", answers: ["It just didn't fit in with my lifestyle", "It just did not fit in with my lifestyle"] },
    { id: "g8", answers: ["I struggled a bit with the action plan too"] },
    { id: "g9", answers: ["that's where I really lost marks", "that is where I really lost marks"] },
    { id: "g10", answers: ["So shall we plan what we have to do"] },
    { id: "g11", answers: ["First, we have to decide on our research question"] },
    { id: "g12", answers: ["Let's use people from a different department", "Let us use people from a different department"] },
    { id: "g13", answers: ["they might have interesting dreams"] },
    { id: "g14", answers: ["that doesn't seem appropriate", "that does not seem appropriate"] },
    { id: "g15", answers: ["it needs to be self-reporting I think"] },
    { id: "g16", answers: ["while they're still half-asleep", "while they are still half-asleep"] },
    { id: "g17", answers: ["Let's hope they don't have any bad dreams", "Let us hope they do not have any bad dreams"] },
    { id: "g18", answers: ["So that seems quite straightforward"] },
  ],
  lines: [
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "So Luke, for our next psychology assignment " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "Right. I've just read an article suggesting " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ". I mean, most of my dreams aren't that interesting anyway, but what it said was that if we remembered everything, we might get mixed up about what actually happened and what we dreamed. So it's a sort of protection. ",
        },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". I'd always assumed that it was just that we didn't have room in our memories for all that stuff.",
        },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Me too. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " that our dreams may predict the future?" },
      ],
    },
    {
      speaker: "LUKE",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Yeah, lots of people have a story of it happening to them, but the explanation I've read is that for each dream that comes true, we have thousands that don't, but we don't notice those, we don't even remember them. We just remember the ones where something in the real world, like a view or an action, happens to trigger a dream memory.",
        },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "Right. So it's just a coincidence really. " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " is what they call segmented sleeping. That's a theory that hundreds of years ago, people used to get up in the middle of the night and have a chat or something to eat, then go back to bed. So I tried it myself.",
        },
      ],
    },
    { speaker: "SUSIE", segments: [{ type: "text", text: "Why?" }] },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "Well it's meant to make you more creative. I don't know why. But I gave it up after a week. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "But most pre-school children have a short sleep in the day don't they? There was an experiment some students did here last term to see at what age kids should stop having naps. But they didn't really find an answer. They spent a lot of time working out the most appropriate methodology, but the results didn't seem to show any obvious patterns.",
        },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        {
          type: "text",
          text: "Right. Anyway, let's think about our assignment. Last time I had problems with the final stage, where we had to describe and justify how successful we thought we'd been. ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "I was OK with the planning, but I got marked down for the self-assessment as well. And I had big problems with the statistical stuff, ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "LUKE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "SUSIE",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: " for this assignment?" },
      ],
    },
    { speaker: "LUKE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "SUSIE",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". So how about 'Is there a relationship between hours of sleep and number of dreams?'" },
      ],
    },
    {
      speaker: "LUKE",
      segments: [{ type: "text", text: "OK. Then we need to think about who we'll do the study on. About 12 people?" }],
    },
    { speaker: "SUSIE", segments: [{ type: "text", text: "Right. And shall we use other psychology students?" }] },
    {
      speaker: "LUKE",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". What about history?" },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "! Or literature students?" },
      ],
    },
    { speaker: "LUKE", segments: [{ type: "text", text: "I don't really know any." }] },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "OK, forget that idea. Then we have to think about our methodology. So we could use observation, but " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". And we could ask them to answer questions online." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "But in this case, paper might be better as they'll be doing it straight after they wake up … in fact " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "Right. And we'll have to check the ethical guidelines for this sort of research." },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [
        { type: "text", text: "Mm, because our experiment involves humans, so there are special regulations." },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        {
          type: "text",
          text: "Yes, I had a look at those for another assignment I did. There's a whole section on risk assessment, and another section on making sure they aren't put under any unnecessary stress.",
        },
      ],
    },
    {
      speaker: "SUSIE",
      segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "!" }],
    },
    { speaker: "LUKE", segments: [{ type: "text", text: "Yeah." }] },
    {
      speaker: "SUSIE",
      segments: [
        {
          type: "text",
          text: "Then when we've collected all our data we have to analyse it and calculate the correlation between our two variables, that's time sleeping and number of dreams and then present our results visually in a graph.",
        },
      ],
    },
    {
      speaker: "LUKE",
      segments: [
        { type: "text", text: "Right. And the final thing is to think about our research and evaluate it. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "SUSIE", segments: [{ type: "text", text: "Yeah. So now let's …" }] },
  ],
};

export const CAM16_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Luke read that one reason why we often forget dreams is that A memories cannot cope / B we might otherwise be confused about what is real / C we do not think they are important",
    questionVi: "Luke đọc rằng ta hay quên giấc mơ vì A trí nhớ không chứa nổi / B dễ nhầm thật-mơ / C thấy chúng không quan trọng",
    modelParaphraseEn: "if we remembered everything, we might get mixed up about what actually happened and what we dreamed. So it's a sort of protection",
    modelParaphraseVi: "if we remembered everything, we might get mixed up about what actually happened and what we dreamed. So it's a sort of protection",
    acceptedAnswers: ["B", "we might otherwise be confused about what is real", "mixed up"],
    explanationEn: "B = protection against mixing dreams with reality. Luke used to assume A (no room in memory), but that is not what the article said.",
    explanationVi: "B = để khỏi nhầm mơ với thật. Luke từng nghĩ A (trí nhớ không đủ chỗ) nhưng đó không phải ý bài báo.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "What do Luke and Susie agree about dreams predicting the future? A It may just be due to chance / B only certain types of event / C it happens more often than some people think",
    questionVi: "Luke và Susie đồng ý về mơ báo trước tương lai? A có thể chỉ là trùng hợp / B chỉ một số sự kiện / C xảy ra nhiều hơn người ta nghĩ",
    modelParaphraseEn: "for each dream that comes true, we have thousands that don't … So it's just a coincidence really",
    modelParaphraseVi: "for each dream that comes true, we have thousands that don't … So it's just a coincidence really",
    acceptedAnswers: ["A", "It may just be due to chance", "coincidence"],
    explanationEn: "A = chance / coincidence. They remember the rare matches, not the thousands that do not come true.",
    explanationVi: "A = coincidence. Họ nhớ những giấc mơ trùng, không nhớ hàng nghìn giấc không thành.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Susie says that a study on pre-school children having a short nap in the day A had controversial results / B used faulty research methodology / C failed to reach any clear conclusions",
    questionVi: "Nghiên cứu ngủ trưa trẻ mẫu giáo A kết quả gây tranh cãi / B phương pháp lỗi / C không ra kết luận rõ",
    modelParaphraseEn: "they didn't really find an answer … the results didn't seem to show any obvious patterns",
    modelParaphraseVi: "they didn't really find an answer … the results didn't seem to show any obvious patterns",
    acceptedAnswers: ["C", "failed to reach any clear conclusions", "didn't really find an answer"],
    explanationEn: "C = no clear conclusions. They spent time on methodology; Susie does not say it was faulty (not B), nor that results were controversial (not A).",
    explanationVi: "C = không kết luận rõ. Họ mất thời gian cho methodology; Susie không nói phương pháp lỗi (không phải B) hay gây tranh cãi (không phải A).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "In their last assignment, both students had problems with A statistical analysis / B making an action plan / C self-assessment",
    questionVi: "Bài trước, cả hai đều khó ở A thống kê / B action plan / C self-assessment",
    modelParaphraseEn: "I had problems with the final stage, where we had to describe and justify how successful we thought we'd been … I got marked down for the self-assessment as well",
    modelParaphraseVi: "I had problems with the final stage, where we had to describe and justify how successful we thought we'd been … I got marked down for the self-assessment as well",
    acceptedAnswers: ["C", "self-assessment"],
    explanationEn: "C = both struggled with self-assessment. Only Luke mentions the action plan; only Susie lost marks on statistics.",
    explanationVi: "C = cả hai yếu self-assessment. Chỉ Luke nhắc action plan; chỉ Susie mất điểm thống kê.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Twelve students from the ______ department",
    questionVi: "Twelve students from the ______ department",
    modelParaphraseEn: "Let's use people from a different department. What about history?",
    modelParaphraseVi: "Let's use people from a different department. What about history?",
    acceptedAnswers: ["history"],
    explanationEn: "They reject other psychology students and literature (Luke knows none); they choose history.",
    explanationVi: "Họ không dùng sinh viên psychology hay literature (Luke không quen ai); chọn history.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Answers on ______",
    questionVi: "Answers on ______",
    modelParaphraseEn: "we could ask them to answer questions online. But in this case, paper might be better as they'll be doing it straight after they wake up",
    modelParaphraseVi: "we could ask them to answer questions online. But in this case, paper might be better as they'll be doing it straight after they wake up",
    acceptedAnswers: ["paper"],
    explanationEn: "Paper, not online — they will be half-asleep just after waking.",
    explanationVi: "Dùng paper, không phải online — làm ngay lúc vừa thức, còn half-asleep.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Check ethical guidelines for working with ______",
    questionVi: "Check ethical guidelines for working with ______",
    modelParaphraseEn: "we'll have to check the ethical guidelines … because our experiment involves humans",
    modelParaphraseVi: "we'll have to check the ethical guidelines … because our experiment involves humans",
    acceptedAnswers: ["humans", "people"],
    explanationEn: "Guidelines are needed because the experiment involves humans / people.",
    explanationVi: "Cần guideline vì thí nghiệm liên quan humans / people.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Ensure that risk is assessed and ______ is kept to a minimum",
    questionVi: "Ensure that risk is assessed and ______ is kept to a minimum",
    modelParaphraseEn: "a whole section on risk assessment, and another section on making sure they aren't put under any unnecessary stress",
    modelParaphraseVi: "a whole section on risk assessment, and another section on making sure they aren't put under any unnecessary stress",
    acceptedAnswers: ["stress"],
    explanationEn: "Risk assessment plus keeping unnecessary stress to a minimum.",
    explanationVi: "Đánh giá rủi ro và giảm stress không cần thiết xuống mức tối thiểu.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Calculate the correlation and make a ______",
    questionVi: "Calculate the correlation and make a ______",
    modelParaphraseEn: "calculate the correlation between our two variables … and then present our results visually in a graph",
    modelParaphraseVi: "calculate the correlation between our two variables … and then present our results visually in a graph",
    acceptedAnswers: ["graph"],
    explanationEn: "After the correlation they present results visually in a graph.",
    explanationVi: "Sau khi tính tương quan, họ trình bày kết quả bằng graph.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "______ the research",
    questionVi: "______ the research",
    modelParaphraseEn: "the final thing is to think about our research and evaluate it",
    modelParaphraseVi: "the final thing is to think about our research and evaluate it",
    acceptedAnswers: ["evaluate"],
    explanationEn: "The last step is to evaluate the research.",
    explanationVi: "Bước cuối là evaluate nghiên cứu.",
  },
];
