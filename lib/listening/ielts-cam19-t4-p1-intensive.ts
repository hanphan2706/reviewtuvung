import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Welcome to the team"] },
    { id: "g2", answers: ["People often get my name wrong"] },
    { id: "g3", answers: ["in case you ever need to write it"] },
    { id: "g4", answers: ["a few practical things you need to sort out"] },
    { id: "g5", answers: ["where shoppers aren't allowed", "where shoppers are not allowed"] },
    { id: "g6", answers: ["Take whichever one is free"] },
    { id: "g7", answers: ["Try not to lose it"] },
    { id: "g8", answers: ["She's really helpful", "She is really helpful"] },
    { id: "g9", answers: ["I've got to go and sort something else out", "I have got to go and sort something else out"] },
    { id: "g10", answers: ["I'm looking forward to getting started", "I am looking forward to getting started"] },
    { id: "g11", answers: ["in case you can't find me", "in case you cannot find me"] },
    { id: "g12", answers: ["that shouldn't happen", "that should not happen"] },
    { id: "g13", answers: ["For today, you'll just be helping the staff", "For today, you will just be helping the staff"] },
    { id: "g14", answers: ["we run out of those really quickly"] },
    { id: "g15", answers: ["That's important, isn't it", "That is important, isn't it"] },
    { id: "g16", answers: ["before you're allowed to touch sharp objects", "before you are allowed to touch sharp objects"] },
    { id: "g17", answers: ["I don't want to get anything wrong", "I do not want to get anything wrong"] },
    { id: "g18", answers: ["You won't be serving customers directly", "You will not be serving customers directly"] },
  ],
  lines: [
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "Hello Charlotte. I'm Kaeden, one of the supervisors. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Hi Aiden." }] },
    { speaker: "KAEDEN", segments: [{ type: "text", text: "It's Kaeden." }] },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "I'm so sorry." }] },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "Don't worry. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "; they never know how to spell it. It's K-A-E-D-E-N, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "I'll try and remember." }] },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "So, there are " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " this morning. Then I'll show you what you're going to do today." },
      ],
    },
    {
      speaker: "CHARLOTTE",
      segments: [
        {
          type: "text",
          text: "The email I received said to go to the front desk, to show my letter of appointment and pick up my badge.",
        },
      ],
    },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "You'll need that for the staffroom and other areas of the supermarket " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". So, after you've finished at the front desk, I'll take you to the staffroom. Put your coat and rucksack in one of the lockers there. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Will I have a key?" }] },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". At the end of the day, leave it in the door for the next person to use." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Will do." }] },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "You also need to go to the HR department to see Tiffany. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CHARLOTTE",
      segments: [
        {
          type: "text",
          text: "I was told to bring my passport with me. HR need to take a note of the number in it.",
        },
      ],
    },
    { speaker: "KAEDEN", segments: [{ type: "text", text: "That's right. Or you can show your ID card." }] },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "I don't have one of those." }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "OK. Tiffany will give you a uniform. They have lots in different sizes, so you just tell her what you need. I won't come with you to HR – " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". Problem with a bread slicer." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Is the HR office near the staffroom?" }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "The staffroom's on the first floor, and HR are a couple of floors above that, on the third floor. There's a staircase outside the staffroom.",
        },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "KAEDEN",
      segments: [{ type: "text", text: "When you've finished with HR, come and find me in the bakery section of the shop." }],
    },
    {
      speaker: "CHARLOTTE",
      segments: [{ type: "gap", gapId: "g10" }, { type: "text", text: "." }],
    },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "I'll just give you my phone number, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Have you got your phone there?" },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Yes … OK, ready." }] },
    {
      speaker: "KAEDEN",
      segments: [{ type: "text", text: "It's oh-four-one-two double-six-five nine-oh-three." }],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "OK, done." }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "So, Charlotte, your tasks today are in the bakery section, on the sushi counter, and on the meat and fish counters. The first job is to check sell-by dates on the bread and cakes. If any of the dates are today's, put a new price label on the packaging.",
        },
      ],
    },
    {
      speaker: "CHARLOTTE",
      segments: [
        {
          type: "text",
          text: "What if any of the labels are yesterday's dates, or older? Do I throw those items away?",
        },
      ],
    },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "Yes, but " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " – we check the stock every day. When something needs a new price label, put a yellow one on the package, next to the original price.",
        },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "KAEDEN",
      segments: [{ type: "text", text: "After that, you'll go to the sushi takeaway counter." }],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Will I be preparing boxes of food?" }] },
    {
      speaker: "KAEDEN",
      segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Yes, of course." }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "You'll see lots of flat cardboard boxes at one end of the counter. Beneath those is where we keep the plastic boxes – " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", so you should bring more from the storeroom." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Is that my only task on the sushi counter?" }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "No. You also need to clean the area where they prepare the dishes. There are cloths and bottles of spray by the sink. Oh, and please make sure you clean that too.",
        },
      ],
    },
    {
      speaker: "CHARLOTTE",
      segments: [{ type: "text", text: "Sure. " }, { type: "gap", gapId: "g15" }, { type: "text", text: "?" }],
    },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "text", text: "Absolutely. But you mustn't wash up knives. You have to do some training " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "What should I do if there are any?" }] },
    {
      speaker: "KAEDEN",
      segments: [{ type: "text", text: "Ask someone to put them in the dishwasher." }],
    },
    {
      speaker: "CHARLOTTE",
      segments: [
        { type: "text", text: "OK, thanks. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "KAEDEN",
      segments: [{ type: "text", text: "Don't worry. You'll be fine. And I'll be around to help." }],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "Finally, the meat and fish counters. You need to clean the area where staff serve customers, including wiping the weighing scales.",
        },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "OK. Anything else?" }] },
    {
      speaker: "KAEDEN",
      segments: [
        {
          type: "text",
          text: "The fish is laid on ice, but when that starts to melt, you'll need to get more from the cold-room.",
        },
      ],
    },
    {
      speaker: "CHARLOTTE",
      segments: [
        {
          type: "text",
          text: "I know the staff on the food counters wear a hat. Will that be the same for me?",
        },
      ],
    },
    {
      speaker: "KAEDEN",
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", so no. But make sure you put on thermal gloves when you take anything out of the cold-room. The temperature's low enough in there to get frostbite from touching things.",
        },
      ],
    },
    { speaker: "CHARLOTTE", segments: [{ type: "text", text: "Understood." }] },
  ],
};

export const CAM19_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Name of supervisor: ______",
    questionVi: "Name of supervisor: ______",
    modelParaphraseEn: "I'm Kaeden, one of the supervisors … It's K-A-E-D-E-N",
    modelParaphraseVi: "I'm Kaeden, one of the supervisors … It's K-A-E-D-E-N",
    acceptedAnswers: ["Kaeden"],
    explanationEn: "He spells it K-A-E-D-E-N after Charlotte mishears 'Aiden'.",
    explanationVi: "Anh đánh vần K-A-E-D-E-N sau khi Charlotte nghe nhầm 'Aiden'.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Where to leave coat and bag: use ______ in staffroom",
    questionVi: "Where to leave coat and bag: use ______ in staffroom",
    modelParaphraseEn: "Put your coat and rucksack in one of the lockers there. Take whichever one is free",
    modelParaphraseVi: "Put your coat and rucksack in one of the lockers there. Take whichever one is free",
    acceptedAnswers: ["locker", "lockers"],
    explanationEn: "Coat and rucksack go in a free locker; leave the key in the door at the end of the day.",
    explanationVi: "Áo khoác và ba lô để trong locker trống; cuối ngày để chìa trên cửa.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "See Tiffany in HR: to give ______ number",
    questionVi: "See Tiffany in HR: to give ______ number",
    modelParaphraseEn: "bring my passport with me. HR need to take a note of the number in it – or show your ID card",
    modelParaphraseVi: "bring my passport with me. HR need to take a note of the number in it – or show your ID card",
    acceptedAnswers: ["passport"],
    explanationEn: "HR records the passport number (ID card is an alternative she does not have).",
    explanationVi: "HR ghi số passport (thẻ ID là phương án khác nhưng cô không có).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "See Tiffany in HR: to collect ______",
    questionVi: "See Tiffany in HR: to collect ______",
    modelParaphraseEn: "Tiffany will give you a uniform. They have lots in different sizes",
    modelParaphraseVi: "Tiffany will give you a uniform. They have lots in different sizes",
    acceptedAnswers: ["uniform"],
    explanationEn: "Collect a uniform from Tiffany – choose the size you need.",
    explanationVi: "Nhận uniform từ Tiffany – chọn size phù hợp.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Location of HR office: on ______ floor",
    questionVi: "Location of HR office: on ______ floor",
    modelParaphraseEn: "The staffroom's on the first floor, and HR are a couple of floors above that, on the third floor",
    modelParaphraseVi: "The staffroom's on the first floor, and HR are a couple of floors above that, on the third floor",
    acceptedAnswers: ["third", "3rd"],
    explanationEn: "Staffroom = first floor; HR is two floors above = third.",
    explanationVi: "Phòng nhân viên tầng 1; HR cao hơn hai tầng = tầng 3 (third).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Supervisor's mobile number: ______",
    questionVi: "Supervisor's mobile number: ______",
    modelParaphraseEn: "It's oh-four-one-two double-six-five nine-oh-three",
    modelParaphraseVi: "It's oh-four-one-two double-six-five nine-oh-three",
    acceptedAnswers: ["0412 665 903", "0412665903", "0412 665903"],
    explanationEn: "0412 665 903, given in case she cannot find him after HR.",
    explanationVi: "0412 665 903, đưa để cô tìm anh sau khi xong HR.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Bakery: change price labels – use ______ labels",
    questionVi: "Bakery: change price labels – use ______ labels",
    modelParaphraseEn: "put a yellow one on the package, next to the original price",
    modelParaphraseVi: "put a yellow one on the package, next to the original price",
    acceptedAnswers: ["yellow"],
    explanationEn: "Today's sell-by dates get a yellow price label beside the original.",
    explanationVi: "Bánh hết hạn hôm nay dán nhãn giá yellow cạnh giá gốc.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Sushi: re-stock with ______ boxes if needed",
    questionVi: "Sushi: re-stock with ______ boxes if needed",
    modelParaphraseEn: "Beneath those is where we keep the plastic boxes – we run out of those really quickly",
    modelParaphraseVi: "Beneath those is where we keep the plastic boxes – we run out of those really quickly",
    acceptedAnswers: ["plastic"],
    explanationEn: "Cardboard boxes are visible; restock the plastic boxes from the storeroom.",
    explanationVi: "Hộp carton để trên quầy; cần lấy thêm hộp plastic từ kho.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Meat and fish: collect ______ for the fish from the cold-room",
    questionVi: "Meat and fish: collect ______ for the fish from the cold-room",
    modelParaphraseEn: "The fish is laid on ice, but when that starts to melt, you'll need to get more from the cold-room",
    modelParaphraseVi: "The fish is laid on ice, but when that starts to melt, you'll need to get more from the cold-room",
    acceptedAnswers: ["ice"],
    explanationEn: "Replace melting ice from the cold-room.",
    explanationVi: "Lấy thêm ice từ phòng lạnh khi đá tan.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Must wear special ______",
    questionVi: "Must wear special ______",
    modelParaphraseEn: "put on thermal gloves when you take anything out of the cold-room – frostbite",
    modelParaphraseVi: "put on thermal gloves when you take anything out of the cold-room – frostbite",
    acceptedAnswers: ["gloves"],
    explanationEn: "No hat (she is not serving customers); thermal gloves are required in the cold-room.",
    explanationVi: "Không cần mũ (không phục vụ khách); phải đeo thermal gloves trong phòng lạnh.",
  },
];
