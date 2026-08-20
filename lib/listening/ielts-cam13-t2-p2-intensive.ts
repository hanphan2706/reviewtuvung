import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["this meeting is for new staff"] },
    { id: "g2", answers: ["some of their work time"] },
    { id: "g3", answers: ["to help on various charity projects"] },
    {
      id: "g4",
      answers: [
        "for the last five years",
      ],
    },
    {
      id: "g5",
      answers: [
        "a huge time commitment",
      ],
    },
    { id: "g6", answers: ["It's completely up to you", "It is completely up to you"] },
    { id: "g7", answers: ["overwhelmingly positive"] },
    { id: "g8", answers: ["they also liked building relationships"] },
    { id: "g9", answers: ["get back to work"] },
    { id: "g10", answers: ["look for in job applicants"] },
    {
      id: "g11",
      answers: [
        "exciting new project",
      ],
    },
    { id: "g12", answers: ["getting your hands dirty"] },
    { id: "g13", answers: ["keep up with technology"] },
    { id: "g14", answers: ["hold far more people"] },
    {
      id: "g15",
      answers: [
        "paired with an experienced volunteer",
      ],
    },
    {
      id: "g16",
      answers: [
        "don't forget to tell your manager",
        "do not forget to tell your manager",
      ],
    },
    { id: "g17", answers: ["The majority were in their seventies"] },
    { id: "g18", answers: ["going out to the shops"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Thanks for coming everyone." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, so " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " and staff who haven't been involved with our volunteering projects yet.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So basically, the idea is that we allow staff to give up " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " to benefit the local community. We've been doing this " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " and it's been very successful." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Participating doesn't necessarily involve " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". The company will pay for eight hours of your time. That can be used over one or two days all at once, or spread over several months throughout the year. There are some staff who enjoy volunteering so much they also give up their own free time for a couple of hours every week. ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". Obviously, many people will have family commitments and aren't as available as other members of staff.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Feedback from staff has been " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". Because they felt they were doing something really useful, nearly everyone agreed that volunteering made them feel more motivated at work. ",
        },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " with the people in the local community and felt valued by them. One or two people also said it was a good thing to have on their CVs.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One particularly successful project last year was the Get Working Project. This was aimed at helping unemployed people in the area ",
        },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". Our staff were able to help them improve their telephone skills, such as writing down messages and speaking with confidence to potential customers, which they had found quite difficult. This is something many employers ",
        },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " - and something we all do without even thinking about, every day at work.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We've got an " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " starting this year. Up until now, we've mainly focused on projects to do with education and training. And we'll continue with our reading project in schools and our work with local charities. But we've also agreed to help out on a conservation project in Redfern Park. So if any of you fancy being outside and ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", this is the project for you." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I also want to mention the annual Digital Inclusion Day, which is coming up next month. The aim of this is to help older people ",
        },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". And this year, instead of hosting the event in our own training facility, we're using the ICT suite at Hill College, as it can ",
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
          text: "We've invited over 60 people from the Silver Age Community Centre to take part, so we'll need a lot of volunteers to help with this event.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you're interested in taking part, please go to the volunteering section of our website and complete the relevant form. We won't be providing any training for this but you'll be ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " if you've never done it before. By the way, ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " about any volunteering activities you decide to do." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The participants on the Digital Inclusion Day really benefited. ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", though some were younger and a few were even in their nineties! Quite a few owned both a computer and a mobile phone, but these tended to be outdated models. They generally knew how to do simple things, like send texts, but weren't aware of recent developments in mobile phone technology. A few were keen to learn but most were quite dismissive at first - they couldn't see the point of updating their skills. But that soon changed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The feedback was very positive. The really encouraging thing was that participants all said they felt much more confident about using social media to keep in touch with their grandchildren, who prefer this form of communication to phoning or sending emails. A lot of them also said playing online games would help them make new friends and keep their brains active. They weren't that impressed with being able to order their groceries online, as they liked ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", but some said it would come in handy if they were ill or the weather was really bad. One thing they asked about was using tablets for things like reading newspapers - some people had been given tablets as presents but had never used them, so that's something we'll make sure we include this time.",
        },
      ],
    },
  ],
};

export const CAM13_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "How much time for volunteering does the company allow per employee?",
    questionVi: "How much time for volunteering does the company allow per employee?",
    modelParaphraseEn:
      "The company will pay for eight hours of your time. That can be used over one or two days all at once, or spread over several months throughout the year",
    modelParaphraseVi:
      "The company will pay for eight hours of your time. That can be used over one or two days all at once, or spread over several months throughout the year",
    acceptedAnswers: ["C", "8 hours per year", "eight hours per year"],
    explanationEn:
      "C = 8 hours per year. Extra unpaid hours are optional; two hours a week / one day a month are distractors.",
    explanationVi:
      "C = 8 hours per year. Giờ thêm không lương là tuỳ chọn; two hours a week / one day a month là nhiễu.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "In feedback almost all employees said that volunteering improved their",
    questionVi: "In feedback almost all employees said that volunteering improved their",
    modelParaphraseEn: "nearly everyone agreed that volunteering made them feel more motivated at work",
    modelParaphraseVi: "nearly everyone agreed that volunteering made them feel more motivated at work",
    acceptedAnswers: ["B", "job satisfaction", "motivated at work"],
    explanationEn:
      "B = job satisfaction. Motivated at work = job satisfaction. CVs and community relationships are only mentioned by a few people.",
    explanationVi:
      "B = job satisfaction. Motivated at work = job satisfaction. CV và quan hệ cộng đồng chỉ một vài người nhắc.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Last year some staff helped unemployed people with their",
    questionVi: "Last year some staff helped unemployed people with their",
    modelParaphraseEn:
      "help them improve their telephone skills, such as writing down messages and speaking with confidence to potential customers",
    modelParaphraseVi:
      "help them improve their telephone skills, such as writing down messages and speaking with confidence to potential customers",
    acceptedAnswers: ["C", "communication skills", "telephone skills"],
    explanationEn:
      "C = communication skills. Telephone skills (messages, speaking to customers) = communication, not literacy or job applications.",
    explanationVi:
      "C = communication skills. Telephone skills (ghi tin nhắn, nói với khách) = communication, không phải literacy hay job applications.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "This year the company will start a new volunteering project with a local",
    questionVi: "This year the company will start a new volunteering project with a local",
    modelParaphraseEn: "we've also agreed to help out on a conservation project in Redfern Park",
    modelParaphraseVi: "we've also agreed to help out on a conservation project in Redfern Park",
    acceptedAnswers: ["B", "park", "Redfern Park"],
    explanationEn:
      "B = park. New project is conservation in Redfern Park. Schools and charities are continuing, not new.",
    explanationVi:
      "B = park. Dự án mới là conservation ở Redfern Park. Schools và charities là việc tiếp tục, không phải mới.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Where will the Digital Inclusion Day be held?",
    questionVi: "Where will the Digital Inclusion Day be held?",
    modelParaphraseEn:
      "instead of hosting the event in our own training facility, we're using the ICT suite at Hill College",
    modelParaphraseVi:
      "instead of hosting the event in our own training facility, we're using the ICT suite at Hill College",
    acceptedAnswers: ["B", "at a college", "Hill College"],
    explanationEn:
      "B = at a college. Hill College ICT suite, not the company's training facility or the community centre (that's who is invited).",
    explanationVi:
      "B = at a college. ICT suite ở Hill College, không phải training facility của công ty hay community centre (đó là người được mời).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "What should staff do if they want to take part in the Digital Inclusion Day?",
    questionVi: "What should staff do if they want to take part in the Digital Inclusion Day?",
    modelParaphraseEn:
      "please go to the volunteering section of our website and complete the relevant form",
    modelParaphraseVi:
      "please go to the volunteering section of our website and complete the relevant form",
    acceptedAnswers: ["A", "fill in a form", "complete the relevant form"],
    explanationEn:
      "A = fill in a form. No training is provided; telling the manager is extra, not how to sign up.",
    explanationVi:
      "A = fill in a form. Không có training; báo manager là thêm, không phải cách đăng ký.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn:
      "What TWO things are mentioned about the participants on the last Digital Inclusion Day? (A–E)",
    questionVi:
      "What TWO things are mentioned about the participants on the last Digital Inclusion Day? (A–E)",
    modelParaphraseEn:
      "Quite a few owned both a computer and a mobile phone, but these tended to be outdated models",
    modelParaphraseVi:
      "Quite a few owned both a computer and a mobile phone, but these tended to be outdated models",
    acceptedAnswers: ["C", "Their phones were mostly old-fashioned", "outdated models"],
    explanationEn:
      "C = phones mostly old-fashioned. Not all over 70; they did use computers/phones (texts), so A/B/D are wrong.",
    explanationVi:
      "C = phones mostly old-fashioned. Không phải tất cả trên 70; họ có dùng máy/điện thoại (nhắn tin), nên A/B/D sai.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) E They initially showed little interest",
    questionVi: "(same list) E They initially showed little interest",
    modelParaphraseEn:
      "A few were keen to learn but most were quite dismissive at first - they couldn't see the point of updating their skills",
    modelParaphraseVi:
      "A few were keen to learn but most were quite dismissive at first - they couldn't see the point of updating their skills",
    acceptedAnswers: ["E", "They initially showed little interest", "dismissive at first"],
    explanationEn:
      "E = initially showed little interest. Dismissive at first; they couldn't see the point of updating their skills.",
    explanationVi:
      "E = initially showed little interest. Dismissive at first; không thấy ích lợi của việc cập nhật kỹ năng.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn:
      "What TWO activities on the last Digital Inclusion Day did participants describe as useful? (A–E)",
    questionVi:
      "What TWO activities on the last Digital Inclusion Day did participants describe as useful? (A–E)",
    modelParaphraseEn:
      "they felt much more confident about using social media to keep in touch with their grandchildren",
    modelParaphraseVi:
      "they felt much more confident about using social media to keep in touch with their grandchildren",
    acceptedAnswers: ["B", "communicating with family", "keep in touch with their grandchildren"],
    explanationEn:
      "B = communicating with family. Social media with grandchildren. Emails are what grandchildren prefer less; tablets are for this time, not last time.",
    explanationVi:
      "B = communicating with family. Social media với cháu. Emails là thứ cháu ít thích hơn; tablets là lần này, không phải lần trước.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) D playing online games",
    questionVi: "(same list) D playing online games",
    modelParaphraseEn:
      "playing online games would help them make new friends and keep their brains active",
    modelParaphraseVi:
      "playing online games would help them make new friends and keep their brains active",
    acceptedAnswers: ["D", "playing online games", "online games"],
    explanationEn:
      "D = playing online games. Online shopping was not impressive; they liked going out to the shops.",
    explanationVi:
      "D = playing online games. Mua sắm online không ấn tượng; họ thích ra cửa hàng.",
  },
];
