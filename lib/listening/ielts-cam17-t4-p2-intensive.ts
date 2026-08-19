import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm sure you have experienced", "I am sure you have experienced"] },
    { id: "g2", answers: ["everything runs smoothly"] },
    { id: "g3", answers: ["it can make life difficult for everyone"] },
    {
      id: "g4",
      answers: [
        "what they don't realise is that",
        "what they do not realise is that",
        "what they don't realize is that",
        "what they do not realize is that",
      ],
    },
    { id: "g5", answers: ["can be very time-consuming"] },
    { id: "g6", answers: ["less immediate problems"] },
    { id: "g7", answers: ["severely affect the colleagues they leave behind"] },
    { id: "g8", answers: ["leave their staff feeling upset and resentful"] },
    {
      id: "g9",
      answers: ["they'll be more likely to step in and help", "they will be more likely to step in and help"],
    },
    { id: "g10", answers: ["other tangible benefits for the business"] },
    { id: "g11", answers: ["which is going really well"] },
    { id: "g12", answers: ["I'd like to look at some ways", "I would like to look at some ways"] },
    { id: "g13", answers: ["This situation has changed"] },
    { id: "g14", answers: ["Fun is an important element in the trips"] },
    {
      id: "g15",
      answers: [
        "there's also the opportunity to learn something useful",
        "there is also the opportunity to learn something useful",
      ],
    },
    { id: "g16", answers: ["To make life easier for staff"] },
    { id: "g17", answers: ["one of the best staff retention rates in the business"] },
    { id: "g18", answers: ["For her, the staff are part of a large family"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "As many of you here today have worked in the hotel industry for some time, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the problem of high staff turnover in your hotels." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Every hotel relies on having loyal and experienced members of staff who make sure that " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If staff are constantly changing, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "But why do staff leave frequently in many hotels?" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Of course, many hotel jobs, such as cleaning, are low-skilled and are not well-paid.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A lot of managers think it's this and the long hours that are the main causes of high staff turnover – but " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " it's the lack of training in many hotel jobs which is a huge factor." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So, what kind of problems does a high turnover of staff cause?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, having to recruit new staff all the time " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", and managers may have to cover some duties while waiting for new staff to arrive.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This means they don't have time to think about " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " such as how to improve their service." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When staff leave, it can also " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It has a negative effect on remaining staff, who may start to feel that they too should be thinking about leaving.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So, what can be done to change this situation?" }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Firstly, managers should stop making basic errors which " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When organising shifts, for example, make sure you never give certain staff preferential treatment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "All staff should be given some choice about when they work, and everyone should have to work some evening and weekend shifts.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "If you treat staff fairly, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " when extra staff are needed." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Keeping staff happy has " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Take the Dunwich Hotel as an example." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It had been experiencing a problem with staff complaints and in order to deal with this, invested in staff training and improved staff conditions.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Not only did the level of complaints fall, but they also noticed a significant increase in the amount each customer spent during their stay.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "They have now introduced a customer loyalty scheme " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " you can reduce staff turnover in your hotels, and I'll do this by giving some examples of hotels where I've done some training recently.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Sun Club received feedback which showed that staff thought managers didn't value their opinions.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They weren't made to feel they were partners who were contributing to the success of the business as a whole.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Junior staff at all levels are regularly invited to meetings where their ideas are welcomed.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A year ago, The Portland recognised the need to invest in staff retention.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Their first step was to introduce a scheme for recognising talent amongst their employees.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The hope is that organising training for individuals with management potential will encourage them to stay with the business.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At Bluewater, managers decided to recognise 50 high achievers from across the company's huge hotel chain.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As a reward, they're sent on an all-expenses-paid trip abroad every year.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", but " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This year's trip included a visit to a brewery, where staff learned about the new beer that would be served in the hotel.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Pentlow Hotels identified that retention of junior reception staff was an issue.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In order to encourage them to see that working in a hotel could be worthwhile and rewarding, with good prospects, they introduced a management programme.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "These staff were given additional responsibilities and the chance to work in various roles in the hotel.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Green Planet wanted to be seen as a caring employer." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", many of whom had childcare responsibilities, the hotel began issuing vouchers to help cover the cost of childcare.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Louise Marsh at The Amesbury has " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Since she joined the company, she has made a huge effort to achieve this by creating a co-operative and supportive environment.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: " where everyone is valued." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "OK, now I'd like to …" }],
    },
  ],
};

export const CAM17_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Many hotel managers are unaware that their staff often leave because of A a lack of training / B long hours / C low pay",
    questionVi: "Many hotel managers are unaware that their staff often leave because of A a lack of training / B long hours / C low pay",
    modelParaphraseEn: "managers think it's this and the long hours … but what they don't realise is that it's the lack of training … which is a huge factor",
    modelParaphraseVi: "managers think it's this and the long hours … but what they don't realise is that it's the lack of training … which is a huge factor",
    acceptedAnswers: ["lack of training", "training", "A"],
    explanationEn: "A = lack of training. Low pay and long hours are what managers already assume – not the overlooked cause.",
    explanationVi: "A = thiếu training. Lương thấp và giờ dài là điều quản lý đã nghĩ – không phải nguyên nhân họ bỏ qua.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "What is the impact of high staff turnover on managers? A an increased workload / B low morale / C an inability to meet targets",
    questionVi: "What is the impact of high staff turnover on managers? A an increased workload / B low morale / C an inability to meet targets",
    modelParaphraseEn: "recruit new staff all the time can be very time-consuming, and managers may have to cover some duties while waiting for new staff",
    modelParaphraseVi: "recruit new staff all the time can be very time-consuming, and managers may have to cover some duties while waiting for new staff",
    acceptedAnswers: ["increased workload", "cover some duties", "time-consuming", "A"],
    explanationEn: "A = extra work for managers (covering duties). Low morale is about remaining colleagues, not managers.",
    explanationVi: "A = khối lượng việc tăng (phải cover duties). Sĩ khí thấp là về đồng nghiệp còn lại, không phải managers.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "What mistake should managers always avoid? A failing to treat staff equally / B reorganising shifts without warning / C neglecting to have enough staff during busy periods",
    questionVi: "What mistake should managers always avoid? A failing to treat staff equally / B reorganising shifts without warning / C neglecting to have enough staff during busy periods",
    modelParaphraseEn: "never give certain staff preferential treatment. All staff should be given some choice about when they work",
    modelParaphraseVi: "never give certain staff preferential treatment. All staff should be given some choice about when they work",
    acceptedAnswers: ["treat staff equally", "preferential treatment", "equally", "A"],
    explanationEn: "A = treat staff equally. Fair shifts mean no preferential treatment; helping in busy periods is a result of fairness, not the mistake.",
    explanationVi: "A = đối xử công bằng. Ca làm không thiên vị; giúp lúc đông là hệ quả của sự công bằng, không phải lỗi cần tránh.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates? A a fall in customer complaints / B an increase in loyalty club membership / C a rise in spending per customer",
    questionVi: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates? A a fall in customer complaints / B an increase in loyalty club membership / C a rise in spending per customer",
    modelParaphraseEn: "Not only did the level of complaints fall, but they also noticed a significant increase in the amount each customer spent during their stay",
    modelParaphraseVi: "Not only did the level of complaints fall, but they also noticed a significant increase in the amount each customer spent during their stay",
    acceptedAnswers: ["rise in spending per customer", "amount each customer spent", "spending", "C"],
    explanationEn: "C = more spent per customer. Complaints falling was the intended result; the loyalty scheme came afterwards.",
    explanationVi: "C = khách chi nhiều hơn. Giảm complaints là kết quả chủ đích; chương trình loyalty được giới thiệu sau.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "The Sun Club — A improving relationships and teamwork",
    questionVi: "The Sun Club — A improving relationships and teamwork",
    modelParaphraseEn: "Junior staff at all levels are regularly invited to meetings where their ideas are welcomed",
    modelParaphraseVi: "Junior staff at all levels are regularly invited to meetings where their ideas are welcomed",
    acceptedAnswers: ["meetings", "ideas are welcomed", "relationships", "teamwork", "A"],
    explanationEn: "A = relationships / teamwork. Staff become partners whose opinions are valued in meetings.",
    explanationVi: "A = quan hệ / teamwork. Nhân viên được coi là partners và ý kiến được chào đón trong meetings.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "The Portland — C providing career opportunities",
    questionVi: "The Portland — C providing career opportunities",
    modelParaphraseEn: "a scheme for recognising talent … training for individuals with management potential will encourage them to stay",
    modelParaphraseVi: "a scheme for recognising talent … training for individuals with management potential will encourage them to stay",
    acceptedAnswers: ["recognising talent", "management potential", "career opportunities", "C"],
    explanationEn: "C = career path via talent recognition and management training – not a cash reward.",
    explanationVi: "C = lộ trình nghề nghiệp qua nhận diện tài năng và training quản lý – không phải thưởng tiền.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Bluewater Hotels — B offering incentives and financial benefits",
    questionVi: "Bluewater Hotels — B offering incentives and financial benefits",
    modelParaphraseEn: "50 high achievers … sent on an all-expenses-paid trip abroad every year",
    modelParaphraseVi: "50 high achievers … sent on an all-expenses-paid trip abroad every year",
    acceptedAnswers: ["all-expenses-paid trip", "trip abroad", "incentives", "B"],
    explanationEn: "B = paid trip abroad as a reward / incentive for high achievers.",
    explanationVi: "B = chuyến đi nước ngoài trả hết chi phí – incentive cho high achievers.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Pentlow Hotels — C providing career opportunities",
    questionVi: "Pentlow Hotels — C providing career opportunities",
    modelParaphraseEn: "they introduced a management programme. These staff were given additional responsibilities and the chance to work in various roles",
    modelParaphraseVi: "they introduced a management programme. These staff were given additional responsibilities and the chance to work in various roles",
    acceptedAnswers: ["management programme", "additional responsibilities", "various roles", "C"],
    explanationEn: "C = career opportunities: a management programme with extra roles for junior reception staff.",
    explanationVi: "C = cơ hội nghề nghiệp: management programme với thêm trách nhiệm cho lễ tân trẻ.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Green Planet — B offering incentives and financial benefits",
    questionVi: "Green Planet — B offering incentives and financial benefits",
    modelParaphraseEn: "issuing vouchers to help cover the cost of childcare",
    modelParaphraseVi: "issuing vouchers to help cover the cost of childcare",
    acceptedAnswers: ["childcare", "vouchers", "financial benefits", "B"],
    explanationEn: "B = financial help (childcare vouchers), not career development.",
    explanationVi: "B = hỗ trợ tài chính (voucher trông trẻ), không phải lộ trình nghề nghiệp.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "The Amesbury — A improving relationships and teamwork",
    questionVi: "The Amesbury — A improving relationships and teamwork",
    modelParaphraseEn: "creating a co-operative and supportive environment … the staff are part of a large family where everyone is valued",
    modelParaphraseVi: "creating a co-operative and supportive environment … the staff are part of a large family where everyone is valued",
    acceptedAnswers: ["co-operative", "supportive environment", "family", "relationships", "A"],
    explanationEn: "A = family-style teamwork / relationships. Louise Marsh values everyone equally.",
    explanationVi: "A = teamwork kiểu gia đình / quan hệ. Louise Marsh coi mọi người đều có giá trị.",
  },
];
