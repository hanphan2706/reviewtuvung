import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'll give you a brief introduction", "I will give you a brief introduction"] },
    { id: "g2", answers: ["while you're sitting down", "while you are sitting down"] },
    { id: "g3", answers: ["dates back to"] },
    { id: "g4", answers: ["a large number of owners"] },
    { id: "g5", answers: ["have left their mark"] },
    { id: "g6", answers: ["much as it's always done", "much as it has always done"] },
    { id: "g7", answers: ["escape from the world of politics"] },
    { id: "g8", answers: ["broke off contact"] },
    { id: "g9", answers: ["as long as they had talent"] },
    { id: "g10", answers: ["what their working lives were like"] },
    { id: "g11", answers: ["don't give much of an idea", "do not give much of an idea"] },
    { id: "g12", answers: ["We've just introduced this feature", "We have just introduced this feature"] },
    { id: "g13", answers: ["will probably want to play"] },
    { id: "g14", answers: ["step back into"] },
    { id: "g15", answers: ["Until recently"] },
    { id: "g16", answers: ["The big stone building"] },
    { id: "g17", answers: ["enjoy having it done"] },
    { id: "g18", answers: ["We're helping to preserve them", "We are helping to preserve them"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Good morning, and welcome to Oniton Hall, one of the largest estates in the area. My name's Nick, and I'm one of the guides. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to the estate " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", and then we'll walk round." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The estate consists of the house, gardens, parkland and farm, and it " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " the fourteenth century." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The original house was replaced in the late seventeenth century, and of course it has had " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Almost all of them " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", generally by adding new rooms, like the ballroom and conservatory, or by demolishing others.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The farm looks " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", although the current owner has done a great deal of work to the flower beds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the seventeenth century, the estate was owned by a very wealthy man called Sir Edward Downes. His intention was to " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", after years as an active politician, and to build a new house worthy of his big collection of books, paintings and sculptures.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "He " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " with his former political allies, and hosted meetings of creative and literary people, like painters and poets.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Unusually for his time, he didn't care whether his guests were rich or poor, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Big houses like Oniton had dozens of servants until the 1920s or 30s, and we've tried to show " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Photographs of course " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", so instead, as you go round the house, you'll see volunteers dressed up as nineteenth-century servants, going about their work.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They'll explain what they're doing, and tell you their recipes, or what tools they're using. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " to replace the audio guide we used to have available." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "I see there are a number of children here with you today." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, we have several activities specially for children, like dressing up in the sorts of clothes that children wore in the past, and as it's a fine day, some of you " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " in the adventure playground." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Our latest addition is child-sized tractors, that you can drive around the grounds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll also be going into the farm that's part of the estate, where there's plenty to do. Most of the buildings date from the eighteenth century, so you can really " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " an agricultural past." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", the dairy was where milk from the cows was turned into cheese. It's now the place to go for lunch, or afternoon tea, or just a cup of coffee and a slice of homemade cake.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " that dominates the farm is the large barn, and in here is our collection of agricultural tools." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "These were used in the past to plough the earth, sow seeds, make gates, and much more.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a small barn, also made of stone, where you can groom the donkeys and horses, to keep their coats clean. They really seem to " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", and children love grooming them." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The horses no longer live in the stables, which instead is the place to go to buy gifts, books, our own jams and pickles, and clothes and blankets made of wool from our sheep.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Outside the shed, which is the only brick building, you can climb into a horse-drawn carriage for a lovely, relaxing tour of the park and farm. The carriages are well over a hundred years old.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And finally, the parkland, which was laid out in the eighteenth century, with a lake and trees that are now well established.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll see types of cattle and sheep that are hardly ever found on farms these days. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", to stop their numbers falling further." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "OK, well if you'd like to come with me …" }],
    },
  ],
};

export const CAM17_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Many past owners made changes to: A gardens / B the house / C the farm",
    questionVi: "Nhiều chủ cũ thay đổi: A vườn / B nhà / C nông trại",
    modelParaphraseEn: "generally by adding new rooms, like the ballroom and conservatory, or by demolishing others",
    modelParaphraseVi: "generally by adding new rooms, like the ballroom and conservatory, or by demolishing others",
    acceptedAnswers: ["B", "the house", "adding new rooms"],
    explanationEn: "B = the house. The farm looks as it always has; flower beds are the current owner's work.",
    explanationVi: "B = the house. Farm gần như không đổi; luống hoa là việc của chủ hiện tại.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Sir Edward Downes built Oniton Hall because he wanted: A politics / B display wealth / C artists and writers",
    questionVi: "Sir Edward Downes xây vì: A chính trị / B khoe giàu / C nghệ sĩ và nhà văn",
    modelParaphraseEn: "hosted meetings of creative and literary people, like painters and poets",
    modelParaphraseVi: "hosted meetings of creative and literary people, like painters and poets",
    acceptedAnswers: ["C", "artists and writers", "painters and poets"],
    explanationEn: "C = a place for artists and writers. He left politics; guests could be rich or poor if they had talent.",
    explanationVi: "C = nơi cho nghệ sĩ và nhà văn. Ông rời chính trị; khách giàu hay nghèo cũng được nếu có tài.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Visitors can learn about servants from: A audio guides / B photographs / C people in costume",
    questionVi: "Khách tìm hiểu người hầu từ: A audio / B ảnh / C người mặc đồ xưa",
    modelParaphraseEn: "volunteers dressed up as nineteenth-century servants, going about their work",
    modelParaphraseVi: "volunteers dressed up as nineteenth-century servants, going about their work",
    acceptedAnswers: ["C", "people in costume", "volunteers dressed up"],
    explanationEn: "C = people in costume. Photos are weak; this feature replaced the old audio guide.",
    explanationVi: "C = people in costume. Ảnh không đủ; tính năng này thay audio guide cũ.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "What is new for children: A dressing up / B mini tractors / C adventure playground",
    questionVi: "Cái mới cho trẻ: A hóa trang / B máy kéo mini / C sân chơi",
    modelParaphraseEn: "Our latest addition is child-sized tractors, that you can drive around the grounds",
    modelParaphraseVi: "Our latest addition is child-sized tractors, that you can drive around the grounds",
    acceptedAnswers: ["B", "mini tractors", "child-sized tractors"],
    explanationEn: "B = mini tractors (latest addition). Dressing-up and the playground already exist.",
    explanationVi: "B = mini tractors (mới thêm). Hóa trang và sân chơi đã có sẵn.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "dairy — activity A–H",
    questionVi: "dairy — hoạt động A–H",
    modelParaphraseEn: "It's now the place to go for lunch, or afternoon tea, or just a cup of coffee and a slice of homemade cake",
    modelParaphraseVi: "It's now the place to go for lunch, or afternoon tea, or just a cup of coffee and a slice of homemade cake",
    acceptedAnswers: ["D", "eating and drinking", "lunch"],
    explanationEn: "D = eating and drinking. Cheese-making was until recently – not watching cows being milked.",
    explanationVi: "D = eating and drinking. Làm phô mai là trước đây – không phải xem vắt sữa.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "large barn — activity A–H",
    questionVi: "large barn — hoạt động A–H",
    modelParaphraseEn: "in here is our collection of agricultural tools",
    modelParaphraseVi: "in here is our collection of agricultural tools",
    acceptedAnswers: ["C", "seeing old farming equipment", "agricultural tools"],
    explanationEn: "C = seeing old farming equipment. Tools were used in the past – visitors look, they do not use them (H).",
    explanationVi: "C = seeing old farming equipment. Dụng cụ xưa để xem, không phải để dùng (H).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "small barn — activity A–H",
    questionVi: "small barn — hoạt động A–H",
    modelParaphraseEn: "you can groom the donkeys and horses, to keep their coats clean",
    modelParaphraseVi: "you can groom the donkeys and horses, to keep their coats clean",
    acceptedAnswers: ["G", "helping to look after animals", "groom"],
    explanationEn: "G = helping to look after animals (grooming). Children love doing it.",
    explanationVi: "G = helping to look after animals (chải lông). Trẻ rất thích.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "stables — activity A–H",
    questionVi: "stables — hoạt động A–H",
    modelParaphraseEn: "the place to go to buy gifts, books, our own jams and pickles, and clothes and blankets",
    modelParaphraseVi: "the place to go to buy gifts, books, our own jams and pickles, and clothes and blankets",
    acceptedAnswers: ["A", "shopping", "buy gifts"],
    explanationEn: "A = shopping. Horses no longer live in the stables.",
    explanationVi: "A = shopping. Ngựa không còn ở stables.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "shed — activity A–H",
    questionVi: "shed — hoạt động A–H",
    modelParaphraseEn: "you can climb into a horse-drawn carriage for a lovely, relaxing tour of the park and farm",
    modelParaphraseVi: "you can climb into a horse-drawn carriage for a lovely, relaxing tour of the park and farm",
    acceptedAnswers: ["E", "starting a trip", "carriage", "tour"],
    explanationEn: "E = starting a trip (carriage tour). The shed is the only brick building.",
    explanationVi: "E = starting a trip (tour xe ngựa). Shed là công trình gạch duy nhất.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "parkland — activity A–H",
    questionVi: "parkland — hoạt động A–H",
    modelParaphraseEn: "types of cattle and sheep that are hardly ever found on farms these days",
    modelParaphraseVi: "types of cattle and sheep that are hardly ever found on farms these days",
    acceptedAnswers: ["F", "seeing rare breeds of animals", "cattle and sheep"],
    explanationEn: "F = seeing rare breeds. They preserve them so numbers do not fall further.",
    explanationVi: "F = seeing rare breeds. Họ bảo tồn để đàn không giảm thêm.",
  },
];
