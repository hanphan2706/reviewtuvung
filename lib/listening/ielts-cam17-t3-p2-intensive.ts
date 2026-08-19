import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I hope you've had a chance", "I hope you have had a chance"] },
    { id: "g2", answers: ["I'll go through the main details now", "I will go through the main details now"] },
    { id: "g3", answers: ["find this service invaluable"] },
    { id: "g4", answers: ["safe in the knowledge that"] },
    { id: "g5", answers: ["we've come a long way", "we have come a long way"] },
    { id: "g6", answers: ["We try to keep our costs as low as we can"] },
    { id: "g7", answers: ["very good value for money"] },
    { id: "g8", answers: ["Please inform us of any allergies"] },
    {
      id: "g9",
      answers: [
        "we'll make sure they're offered a suitable alternative",
        "we will make sure they are offered a suitable alternative",
      ],
    },
    {
      id: "g10",
      answers: [
        "we don't want them to feel as if they are still at school",
        "we do not want them to feel as if they are still at school",
      ],
    },
    {
      id: "g11",
      answers: ["I'm afraid we're unable to do this", "I am afraid we are unable to do this"],
    },
    { id: "g12", answers: ["So now let me tell you about"] },
    { id: "g13", answers: ["We're very lucky that", "We are very lucky that"] },
    { id: "g14", answers: ["we'd be delighted", "we would be delighted"] },
    { id: "g15", answers: ["one of the most popular activities"] },
    { id: "g16", answers: ["we finally gave in"] },
    { id: "g17", answers: ["we'll see how this goes", "we will see how this goes"] },
    { id: "g18", answers: ["they are better able to clean up after themselves"] },
  ],
  lines: [
    { speaker: null, segments: [{ type: "text", text: "Good afternoon." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My name's Mrs Carter and I run the before and after school extended hours childcare service.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " to have a good look around the school and talk to staff and pupils.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I know that many of you are interested in using our childcare service when your child joins the school, and perhaps you already know something about it, but for those that don't, ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We offer childcare for children from the ages of four to eleven both before and after school. I know that many parents who work ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You can leave your child with us " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " they will be extremely well cared for." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We are insured to provide care for up to 70 children, although we rarely have this many attending at any one session. I think we generally expect around 50-60 children for the afternoon sessions and about half that number for the breakfast sessions. Although we currently do have 70 children registered with us, not all of these attend every day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It's ten years since we began offering an extended hours service and " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " during that time. When we first opened, we only had about 20 children attending regularly.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " and we think we provide " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For the afternoon sessions, which run from 3.30 until 6 p.m., it's £7.20. But if you prefer, you can pay for one hour only, which costs £3.50, or two hours which costs £5.70.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The cost of the childcare includes food and snacks. They'll be given breakfast in the morning and in the afternoon, a healthy snack as soon as they finish school. At 5 p.m. children are given something more substantial, such as pasta or a casserole.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: " that your child might have and " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As you may know, the childcare service runs through the school holidays from 8 a.m. to 6 p.m. We offer a really varied and exciting programme to keep the children entertained – ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It will also feel different because they'll get the chance to make new friends with children from other schools – spaces are available for them because a lot of our term-time children don't always attend during the holiday.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the past, parents have asked if children over the age of 11 are allowed to come with their younger brothers and sisters – but ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " because of the type of insurance we have." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " some of the activities that your child can do during the after-school sessions.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As well as being able to use the playground equipment, computers and the library, there is usually at least one 'special' activity that children can do each day. For example, Spanish. We have a specialist teacher coming in every Thursday to give a basic introduction to the language through games and songs. She does two sessions: one for the over 8s and one for the younger children. This is the only activity which we have to make an extra charge for – but it's well worth it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Once a week the children have the opportunity to do some music. ",
        },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " one of our staff is a member of a folk band. On Mondays, she teaches singing and percussion to groups of children. We do rely on parental support for this, so if any of you sing or play an instrument and would be prepared to help out at these sessions, ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Painting continues to be " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". To begin with we weren't keen on offering this because of the extra mess involved, but children kept asking if they could do some art and so ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". Art is great for helping the children to relax after working hard at school all day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Yoga is something that we've been meaning to introduce for some time but haven't been able to find anyone available to teach it – until now that is. So ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". Hopefully, children will benefit in all sorts of ways from this." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Cooking is another popular activity. They make a different sort of cake, or pizza or bread each week. Although the younger children love doing it, we found that the mess was just too much, so we've decided to restrict this to the over 8s, as ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM17_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO facts about the service: B More children attend after school than before school",
    questionVi: "HAI sự thật về dịch vụ: B Nhiều trẻ học buổi chiều hơn buổi sáng",
    modelParaphraseEn:
      "around 50-60 children for the afternoon sessions and about half that number for the breakfast sessions",
    modelParaphraseVi:
      "around 50-60 children for the afternoon sessions and about half that number for the breakfast sessions",
    acceptedAnswers: [
      "B",
      "More children attend after school than before school",
      "about half that number for the breakfast sessions",
    ],
    explanationEn:
      "B = more after school than before: ~50–60 in the afternoon, about half that at breakfast. Not C (50 in the mornings).",
    explanationVi:
      "B = chiều đông hơn sáng: ~50–60 buổi chiều, breakfast khoảng một nửa. Không phải C (50 buổi sáng).",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E The maximum number of children who can attend is 70",
    questionVi: "(cùng danh sách) E Số trẻ tối đa được nhận là 70",
    modelParaphraseEn: "We are insured to provide care for up to 70 children, although we rarely have this many",
    modelParaphraseVi: "We are insured to provide care for up to 70 children, although we rarely have this many",
    acceptedAnswers: ["E", "The maximum number of children who can attend is 70", "up to 70 children"],
    explanationEn:
      "E = maximum 70 (insurance). It started ten years ago, not recently (not A). Children can use both sessions.",
    explanationVi:
      "E = tối đa 70 (bảo hiểm). Dịch vụ đã 10 năm, không phải mới (không phải A). Trẻ có thể học cả hai buổi.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "How much does childcare cost for a complete afternoon session per child? C £7.20",
    questionVi: "Buổi chiều trọn vẹn hết bao nhiêu một trẻ? C £7.20",
    modelParaphraseEn: "For the afternoon sessions, which run from 3.30 until 6 p.m., it's £7.20",
    modelParaphraseVi: "For the afternoon sessions, which run from 3.30 until 6 p.m., it's £7.20",
    acceptedAnswers: ["C", "£7.20", "7.20"],
    explanationEn: "C = £7.20 for the full afternoon (3.30–6). £3.50 is one hour; £5.70 is two hours.",
    explanationVi: "C = £7.20 cho cả buổi chiều (3.30–6). £3.50 là một giờ; £5.70 là hai giờ.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "What does the manager say about food? C Children are given a proper meal at 5 p.m.",
    questionVi: "Quản lý nói gì về đồ ăn? C Trẻ được bữa ăn đàng hoàng lúc 5 giờ",
    modelParaphraseEn: "At 5 p.m. children are given something more substantial, such as pasta or a casserole",
    modelParaphraseVi: "At 5 p.m. children are given something more substantial, such as pasta or a casserole",
    acceptedAnswers: ["C", "Children are given a proper meal at 5 p.m.", "something more substantial"],
    explanationEn:
      "C = a proper meal at 5 p.m. (pasta/casserole). Allergies get an alternative, not packed food. Snacks are provided, not brought in.",
    explanationVi:
      "C = bữa ăn đàng hoàng lúc 5 giờ (pasta/casserole). Dị ứng thì có món thay, không phải tự mang. Snack do trường phát, không phải mang theo.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "What is different about arrangements in the school holidays? A Children from other schools can attend",
    questionVi: "Kỳ nghỉ khác gì? A Trẻ trường khác cũng được tham gia",
    modelParaphraseEn:
      "they'll get the chance to make new friends with children from other schools – spaces are available for them",
    modelParaphraseVi:
      "they'll get the chance to make new friends with children from other schools – spaces are available for them",
    acceptedAnswers: ["A", "Children from other schools can attend", "children from other schools"],
    explanationEn:
      "A = other schools can attend in the holidays. Over-11s cannot come (insurance). Capacity is not increased.",
    explanationVi:
      "A = kỳ nghỉ nhận trẻ trường khác. Trẻ trên 11 không được (bảo hiểm). Không tăng số chỗ.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Spanish — E involves an additional fee",
    questionVi: "Spanish — E có phụ phí",
    modelParaphraseEn: "This is the only activity which we have to make an extra charge for – but it's well worth it",
    modelParaphraseVi: "This is the only activity which we have to make an extra charge for – but it's well worth it",
    acceptedAnswers: ["E", "involves an additional fee", "extra charge"],
    explanationEn: "E = Spanish is the only activity with an extra charge (Thursday specialist teacher).",
    explanationVi: "E = Spanish là hoạt động duy nhất tính phụ phí (giáo viên chuyên thứ Năm).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Music — D requires help from parents",
    questionVi: "Music — D cần phụ huynh hỗ trợ",
    modelParaphraseEn: "We do rely on parental support for this … prepared to help out at these sessions, we'd be delighted",
    modelParaphraseVi: "We do rely on parental support for this … prepared to help out at these sessions, we'd be delighted",
    acceptedAnswers: ["D", "requires help from parents", "parental support"],
    explanationEn: "D = music relies on parental support (Monday singing and percussion).",
    explanationVi: "D = âm nhạc dựa vào parental support (thứ Hai hát và percussion).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Painting — G was requested by children",
    questionVi: "Painting — G do trẻ đề nghị",
    modelParaphraseEn: "children kept asking if they could do some art and so we finally gave in",
    modelParaphraseVi: "children kept asking if they could do some art and so we finally gave in",
    acceptedAnswers: ["G", "was requested by children", "children kept asking"],
    explanationEn: "G = children kept asking for art, so painting was added despite the mess.",
    explanationVi: "G = trẻ cứ xin vẽ, nên mới có painting dù bẩn.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Yoga — F is a new activity",
    questionVi: "Yoga — F là hoạt động mới",
    modelParaphraseEn:
      "we've been meaning to introduce for some time but haven't been able to find anyone available to teach it – until now that is",
    modelParaphraseVi:
      "we've been meaning to introduce for some time but haven't been able to find anyone available to teach it – until now that is",
    acceptedAnswers: ["F", "is a new activity", "until now"],
    explanationEn: "F = yoga is new – they only just found a teacher. We'll see how this goes.",
    explanationVi: "F = yoga mới – vừa tìm được giáo viên. We'll see how this goes.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Cooking — C is for over 8s only",
    questionVi: "Cooking — C chỉ dành cho trẻ trên 8 tuổi",
    modelParaphraseEn: "we've decided to restrict this to the over 8s, as they are better able to clean up after themselves",
    modelParaphraseVi: "we've decided to restrict this to the over 8s, as they are better able to clean up after themselves",
    acceptedAnswers: ["C", "is for over 8s only", "restrict this to the over 8s"],
    explanationEn: "C = cooking is restricted to over 8s because of the mess (younger children still love it).",
    explanationVi: "C = nấu ăn chỉ over 8s vì bẩn (trẻ nhỏ vẫn thích làm).",
  },
];
