import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["how to become a makeup artist"] },
    { id: "g2", answers: ["has lots of useful advice about how to get started"] },
    { id: "g3", answers: ["working as a makeup trainee"] },
    { id: "g4", answers: ["it's often worth it for the experience", "it is often worth it for the experience"] },
    { id: "g5", answers: ["you'll get the most useful experience", "you will get the most useful experience"] },
    { id: "g6", answers: ["you won't need to bring your curling tongs", "you will not need to bring your curling tongs"] },
    { id: "g7", answers: ["don't expect to be offered any practical experience", "do not expect to be offered any practical experience"] },
    { id: "g8", answers: ["it's a high-pressure environment", "it is a high-pressure environment"] },
    { id: "g9", answers: ["Follow your supervisor's lead"] },
    { id: "g10", answers: ["I found it overwhelming"] },
    { id: "g11", answers: ["That's preferable, by the way", "That is preferable, by the way"] },
    { id: "g12", answers: ["don't borrow anything without asking first", "do not borrow anything without asking first"] },
    { id: "g13", answers: ["It's very important to build your portfolio", "It is very important to build your portfolio"] },
    { id: "g14", answers: ["whether you're the right kind of person", "whether you are the right kind of person"] },
    { id: "g15", answers: ["otherwise the makeup artist will get behind schedule"] },
    { id: "g16", answers: ["Trainees play a useful role in continuity"] },
    { id: "g17", answers: ["from getting the teas and coffees to putting on a wash"] },
    { id: "g18", answers: ["It takes quite a lot of confidence"] },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Hello and welcome to the film making podcast. In this week's episode, Claire Lemarre talks to us about ",
        },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ". Claire's been working as a makeup artist in the film industry for over 20 years and ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Thanks Ian. Well, before you can become a makeup artist on films you have to spend about 2 years ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "A good place to get your first job would be on a low budget short film. Of course, this means that you'll be working for free. But ",
        },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". Make sure your transport costs are covered – and remember, there's very unlikely to be any catering provided, so bring plenty of food.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "If you're lucky, you might start out on a big budget film where " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". On productions like this, makeup and hair styling are separate departments – so " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: "! But you're likely to get the opportunity to work with a range of age groups, as well as different ethnicities. Doing makeup for special effects is highly specialised, so ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " in that." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "One problem with working in the makeup department is that " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". There are very few times when you'll be bored or have nothing to do. It can be stressful but you'll see that the top makeup artists are very professional – even when they're having to work with directors who are impatient, or unhappy with the makeup artist's work. ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " and try to remain calm at all times." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I've worked with many very famous actors over the years. At first, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " and could hardly speak, I was so in awe. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", to becoming too excited and asking for selfies. Now meeting the talent is just a normal part of the job and to be honest most actors don't look that special without all the makeup!",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Every makeup trainee will need a makeup kit, which they'll be expected to have with them at all times. Just the essentials will do for the kinds of tasks you'll be given – it won't be anything complicated. It's worth looking at what the other makeup artists have in their kits – but whatever you do, ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". You should take photos of all the work you do and ideally show the different stages of makeup application if you can. But remember you'll need to get approval from the makeup designer in charge of the department. As you'll be sending your portfolio digitally, you won't need to get photos printed.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "So what does a makeup trainee actually do? You need to think about " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " to do the job and whether you'd enjoy it. So, to give you some idea, here are some of the things you might be required to do.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "You may be asked to help prep an actor ready for makeup. Some actors will arrive having already cleansed and moisturized their skin. But sometimes you'll need to step in and get this done without wasting any time, ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". It will be your responsibility to take photos, log them digitally and print out a hard copy to put in each actor's file. This information needs to be kept in good order as a reshoot can mean replicating makeup months later.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "General duties mean doing anything " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". Having a positive attitude and being willing to do whatever is asked of you will help you get your next film job.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "You won't be asked to apply makeup to any of the principal cast, only the extras. If there are dozens of extras involved you'll need to keep up a swift pace and not spend too long on each person. ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " to be able to do this well." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK now about terms and conditions...." }] },
  ],
};

export const CAM21_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Low-budget short films: always expect  A travel expenses / B a minimum wage / C meals",
    questionVi: "Phim ngắn ngân sách thấp: luôn trông đợi  A chi phí đi lại / B lương tối thiểu / C bữa ăn",
    modelParaphraseEn: "you'll be working for free … Make sure your transport costs are covered … very unlikely to be any catering provided, so bring plenty of food",
    modelParaphraseVi: "you'll be working for free … Make sure your transport costs are covered … very unlikely to be any catering provided, so bring plenty of food",
    acceptedAnswers: ["A", "travel expenses", "transport costs"],
    explanationEn: "A = travel expenses (transport costs covered). You work for free, so not a wage (B). Catering is unlikely — bring food, so not meals (C).",
    explanationVi: "A = travel expenses (transport costs được chi). Làm miễn phí nên không phải lương (B). Catering rất hiếm — tự mang đồ ăn, không phải meals (C).",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "On big-budget films trainees may get experience of  A special-effects makeup / B working with different ethnicities / C creating a variety of hair styles",
    questionVi: "Phim ngân sách lớn, trainee có thể được trải nghiệm  A makeup hiệu ứng / B làm với các nhóm sắc tộc / C tạo nhiều kiểu tóc",
    modelParaphraseEn: "makeup and hair styling are separate departments – so you won't need to bring your curling tongs! But you're likely to get the opportunity to work with a range of age groups, as well as different ethnicities",
    modelParaphraseVi: "makeup and hair styling are separate departments – so you won't need to bring your curling tongs! But you're likely to get the opportunity to work with a range of age groups, as well as different ethnicities",
    acceptedAnswers: ["B", "working with different ethnicities", "different ethnicities"],
    explanationEn: "B = different ethnicities (and age groups). Hair is a separate department (not C). Special effects is highly specialised — no practical experience (not A).",
    explanationVi: "B = different ethnicities (và nhiều độ tuổi). Hair là bộ phận riêng (không phải C). Special effects quá chuyên — không có trải nghiệm thực tế (không phải A).",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "A problem for makeup artists is  A dealing with difficult directors / B being shouted at by their supervisor / C waiting around for hours doing nothing",
    questionVi: "Vấn đề với makeup artist là  A làm việc với đạo diễn khó / B bị supervisor la / C ngồi chờ hàng giờ không việc",
    modelParaphraseEn: "even when they're having to work with directors who are impatient, or unhappy with the makeup artist's work. Follow your supervisor's lead and try to remain calm",
    modelParaphraseVi: "even when they're having to work with directors who are impatient, or unhappy with the makeup artist's work. Follow your supervisor's lead and try to remain calm",
    acceptedAnswers: ["A", "dealing with difficult directors", "directors who are impatient"],
    explanationEn: "A = impatient / unhappy directors. You are rarely bored (not C). The supervisor is a model of calm, not someone shouting at you (not B).",
    explanationVi: "A = đạo diễn impatient / unhappy. Hiếm khi bored (không phải C). Supervisor là người bình tĩnh để noi theo, không phải người la (không phải B).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "When she first met famous actors she felt  A very shy / B very proud / C very disappointed",
    questionVi: "Lần đầu gặp diễn viên nổi tiếng cô cảm thấy  A rất nhút nhát / B rất tự hào / C rất thất vọng",
    modelParaphraseEn: "At first, I found it overwhelming and could hardly speak, I was so in awe",
    modelParaphraseVi: "At first, I found it overwhelming and could hardly speak, I was so in awe",
    acceptedAnswers: ["A", "very shy", "could hardly speak", "so in awe"],
    explanationEn: "A = very shy (overwhelming, could hardly speak, in awe). Preferable to getting too excited. Not proud or disappointed.",
    explanationVi: "A = very shy (overwhelming, hardly speak, in awe). Tốt hơn là quá hào hứng. Không phải proud hay disappointed.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Makeup kits:  A Always carry a basic kit with you / B Only buy the best products / C Ask other makeup artists to check your kit",
    questionVi: "Bộ makeup:  A Luôn mang kit cơ bản / B Chỉ mua đồ tốt nhất / C Nhờ người khác kiểm kit",
    modelParaphraseEn: "they'll be expected to have with them at all times. Just the essentials will do … it won't be anything complicated",
    modelParaphraseVi: "they'll be expected to have with them at all times. Just the essentials will do … it won't be anything complicated",
    acceptedAnswers: ["A", "Always carry a basic kit with you", "essentials", "at all times"],
    explanationEn: "A = always carry a basic / essentials kit. Not about buying the best products. Looking at others' kits is useful, but do not borrow without asking — not C.",
    explanationVi: "A = luôn mang kit cơ bản / essentials. Không nói mua đồ tốt nhất. Xem kit người khác thì được, nhưng đừng mượn khi chưa hỏi — không phải C.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Creating a portfolio:  A Keep print and digital photos / B Only include a small selection / C Get permission to use photos",
    questionVi: "Làm portfolio:  A Giữ cả bản in và digital / B Chỉ chọn ít ảnh / C Xin phép dùng ảnh",
    modelParaphraseEn: "you'll need to get approval from the makeup designer … sending your portfolio digitally, you won't need to get photos printed",
    modelParaphraseVi: "you'll need to get approval from the makeup designer … sending your portfolio digitally, you won't need to get photos printed",
    acceptedAnswers: ["C", "Get permission to use photos", "get approval"],
    explanationEn: "C = get approval / permission from the makeup designer. Digital only — no need to print (not A). She does not say to include only a small selection (not B).",
    explanationVi: "C = get approval / xin phép makeup designer. Chỉ gửi digital — không cần in (không phải A). Không nói chỉ chọn ít ảnh (không phải B).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Prepping an actor — ability required:  A well-organised / B flexible / C working quickly",
    questionVi: "Prepping diễn viên — năng lực:  A ngăn nắp / B linh hoạt / C làm nhanh",
    modelParaphraseEn: "you'll need to step in and get this done without wasting any time, otherwise the makeup artist will get behind schedule",
    modelParaphraseVi: "you'll need to step in and get this done without wasting any time, otherwise the makeup artist will get behind schedule",
    acceptedAnswers: ["C", "working quickly", "without wasting any time"],
    explanationEn: "C = working quickly — get cleansing/moisturising done without wasting time so the artist does not fall behind.",
    explanationVi: "C = working quickly — làm cleansing/moisturising ngay, không lãng phí thời gian để artist không bị chậm lịch.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Continuity — ability required:  A well-organised / B flexible / C working quickly",
    questionVi: "Continuity — năng lực:  A ngăn nắp / B linh hoạt / C làm nhanh",
    modelParaphraseEn: "take photos, log them digitally and print out a hard copy … This information needs to be kept in good order as a reshoot can mean replicating makeup months later",
    modelParaphraseVi: "take photos, log them digitally and print out a hard copy … This information needs to be kept in good order as a reshoot can mean replicating makeup months later",
    acceptedAnswers: ["A", "being well-organised", "kept in good order"],
    explanationEn: "A = well-organised — photos logged, printed and kept in good order for possible reshoots months later.",
    explanationVi: "A = well-organised — ảnh được log, in và kept in good order vì có thể reshoot hàng tháng sau.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "General duties — ability required:  A well-organised / B flexible / C working quickly",
    questionVi: "Việc lặt vặt — năng lực:  A ngăn nắp / B linh hoạt / C làm nhanh",
    modelParaphraseEn: "doing anything from getting the teas and coffees to putting on a wash. Having a positive attitude and being willing to do whatever is asked of you",
    modelParaphraseVi: "doing anything from getting the teas and coffees to putting on a wash. Having a positive attitude and being willing to do whatever is asked of you",
    acceptedAnswers: ["B", "being flexible", "willing to do whatever is asked"],
    explanationEn: "B = flexible — teas, coffees, laundry, whatever is asked. Attitude matters for the next job.",
    explanationVi: "B = flexible — pha trà, giặt đồ, làm bất cứ gì được nhờ. Thái độ giúp kiếm job phim tiếp.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Applying makeup — ability required:  A well-organised / B flexible / C working quickly",
    questionVi: "Trang điểm — năng lực:  A ngăn nắp / B linh hoạt / C làm nhanh",
    modelParaphraseEn: "you'll need to keep up a swift pace and not spend too long on each person",
    modelParaphraseVi: "you'll need to keep up a swift pace and not spend too long on each person",
    acceptedAnswers: ["C", "working quickly", "swift pace"],
    explanationEn: "C = working quickly — extras only, dozens of people, a swift pace. Confidence helps you do this well.",
    explanationVi: "C = working quickly — chỉ extras, hàng chục người, phải swift pace. Confidence giúp làm tốt.",
  },
];
