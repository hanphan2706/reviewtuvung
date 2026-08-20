import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["there's never been a better time", "there has never been a better time"] },
    { id: "g2", answers: ["grow in popularity"] },
    { id: "g3", answers: ["a reaction against fast food"] },
    { id: "g4", answers: ["it's not particularly good for you", "it is not particularly good for you"] },
    { id: "g5", answers: ["People always think"] },
    { id: "g6", answers: ["the cost of renting a space"] },
    { id: "g7", answers: ["really interested in food"] },
    { id: "g8", answers: ["Once you get established"] },
    { id: "g9", answers: ["has become quite fashionable too"] },
    { id: "g10", answers: ["costs a lot less"] },
    { id: "g11", answers: ["if your business takes off"] },
    { id: "g12", answers: ["you'll end up spending more money", "you will end up spending more money"] },
    { id: "g13", answers: ["I expect you've done some research", "I expect you have done some research"] },
    { id: "g14", answers: ["easy to eat"] },
    { id: "g15", answers: ["be prepared for"] },
    { id: "g16", answers: ["Their work-life balance was non-existent"] },
    { id: "g17", answers: ["make a profit"] },
    { id: "g18", answers: ["It was a complicated process"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Good evening everyone. My name's Jon and I run Veg Out, a street food business selling vegan food. Since 2012 I've been travelling all around the country cooking vegan food in my converted van and selling it at all kinds of outdoor events. I'm here to give you some advice based on my experience.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The good news is that " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to start your own street food business. Street food continues to " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". I think there are a couple of reasons for this. The first is that street food is " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ". Street food ranges from high quality burgers to vegan curries and everything in between. But while fast food is cheap and easy to find, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". It's also the same everywhere. What you get with street food on the other hand is something different. People like the idea of trying something they can't get anywhere else. They also like seeing food prepared in front of them and which hasn't come straight out of a freezer.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You need to think about the best place to sell your street food. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " music festivals are an obvious place to start but " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " can be huge. And there's always a lot of competition. Food markets, on the other hand, are great because customers are always " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " and give great feedback. And if you can get a spot in your local park – fantastic. Usually very relaxed but with lots of customers passing by. " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " you'll start getting asked to do parties – which can be really challenging but lots of fun. Having street food at weddings " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " – but you need to really know what you're doing as everything needs to be perfect." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Setting up a street food business " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " than opening a restaurant or café but you'll have to buy some basic equipment. I'd try to get things like hobs and fridges second hand if you can. You can replace them with better quality stuff " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ". Renting is another option but " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " rather than saving it." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You've probably got a good idea about the food you're planning to sell. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " to find out if anyone else is selling a similar product. And you'll have thought about any possible allergies to nuts or eggs etc. But there's one thing people don't always think about and that's how you're going to serve it. On a plate? In a bag? Will you provide a fork? Will it all be easily recyclable or reusable? It's got to be " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " and look attractive or customers won't come back." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Once you get started, you should " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " things to go wrong. Every business faces problems and here are a few examples from street food businesses that I know. My friends who run Thai Basil started by juggling their street food business with their day jobs in a restaurant. " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " as they were working til midnight in the restaurant all week and then took their food truck to markets on their days off.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The owners of Basque found it was hard to " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " because the price of fish – essential for some of their dishes – was so high. And it was hard to charge customers a lot more for those dishes. So they had to stop focussing on fish dishes and include more vegetarian food.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The owners of Lou's kitchen were making salads to order from their van and some of their dishes were quite complicated. At one of their first events they ended up with people standing in a long queue for more than 15 minutes – and many of them lost patience. So make sure whatever you offer can be served quickly and efficiently.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The owners of Chip Chop had found a perfect venue near a beach where there weren't any other street food trucks. But what they hadn't realised was that they'd need a special licence – which individual businesses don't need at markets or festivals. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " and in the end they gave up." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So I hope that's given you a flavour of ...." }],
    },
  ],
};

export const CAM21_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO explanations for popularity: C freshly made",
    questionVi: "Hai lý do phổ biến: C được làm tươi",
    modelParaphraseEn: "They also like seeing food prepared in front of them and which hasn't come straight out of a freezer",
    modelParaphraseVi: "They also like seeing food prepared in front of them and which hasn't come straight out of a freezer",
    acceptedAnswers: ["C", "freshly made", "prepared in front of them", "hasn't come straight out of a freezer"],
    explanationEn: "C = freshly made (prepared in front of them, not from a freezer). Cheap / convenient describes fast food, not street food here.",
    explanationVi: "C = freshly made (làm trước mặt, không lấy từ tủ đông). Rẻ / tiện là mô tả fast food, không phải street food ở đây.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E unusual food",
    questionVi: "(cùng danh sách) E món lạ",
    modelParaphraseEn: "People like the idea of trying something they can't get anywhere else",
    modelParaphraseVi: "People like the idea of trying something they can't get anywhere else",
    acceptedAnswers: ["E", "unusual food", "can't get anywhere else", "something different"],
    explanationEn: "E = unusual / something they cannot get anywhere else. Fast food is 'the same everywhere'. Locally sourced is not mentioned.",
    explanationVi: "E = unusual / món không tìm được chỗ khác. Fast food thì 'giống nhau khắp nơi'. Locally sourced không được nhắc.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "TWO places for new businesses: B food markets",
    questionVi: "Hai địa điểm cho quán mới: B chợ ẩm thực",
    modelParaphraseEn: "Food markets, on the other hand, are great because customers are always really interested in food and give great feedback",
    modelParaphraseVi: "Food markets, on the other hand, are great because customers are always really interested in food and give great feedback",
    acceptedAnswers: ["B", "food markets", "interested in food", "great feedback"],
    explanationEn: "B = food markets (interested customers, useful feedback). Music festivals are expensive and competitive — not recommended for starters.",
    explanationVi: "B = food markets (khách quan tâm, feedback tốt). Music festivals đắt và cạnh tranh — không khuyên cho người mới.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) E parks",
    questionVi: "(cùng danh sách) E công viên",
    modelParaphraseEn: "if you can get a spot in your local park – fantastic. Usually very relaxed but with lots of customers passing by",
    modelParaphraseVi: "if you can get a spot in your local park – fantastic. Usually very relaxed but with lots of customers passing by",
    acceptedAnswers: ["E", "parks", "local park", "customers passing by"],
    explanationEn: "E = parks (relaxed, passing customers). Parties and weddings come later, once you are established / experienced.",
    explanationVi: "E = parks (thoải mái, nhiều khách đi ngang). Parties và weddings là sau khi đã đứng vững / có kinh nghiệm.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Getting equipment: A high quality is a good investment / B buy second-hand / C renting can be cheap",
    questionVi: "Mua thiết bị: A chất lượng cao là đầu tư tốt / B mua đồ cũ / C thuê có thể rẻ",
    modelParaphraseEn: "I'd try to get things like hobs and fridges second hand if you can. You can replace them with better quality stuff if your business takes off. Renting … you'll end up spending more money",
    modelParaphraseVi: "I'd try to get things like hobs and fridges second hand if you can. You can replace them with better quality stuff if your business takes off. Renting … you'll end up spending more money",
    acceptedAnswers: ["B", "second-hand", "second hand"],
    explanationEn: "B = buy second-hand first. Better quality comes later if the business takes off. Renting costs more, not less.",
    explanationVi: "B = mua đồ cũ trước. Đồ chất lượng hơn chỉ khi quán đã phát. Thuê tốn nhiều hơn, không rẻ hơn.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Creating a product: A information about ingredients / B an original product / C presentation is important",
    questionVi: "Tạo sản phẩm: A thông tin nguyên liệu / B món độc đáo / C cách trình bày quan trọng",
    modelParaphraseEn: "one thing people don't always think about … how you're going to serve it. It's got to be easy to eat and look attractive",
    modelParaphraseVi: "one thing people don't always think about … how you're going to serve it. It's got to be easy to eat and look attractive",
    acceptedAnswers: ["C", "presentation", "how you're going to serve it", "look attractive"],
    explanationEn: "C = presentation (how you serve it, easy to eat, attractive). Allergies/ingredients and checking similar products are already assumed, not the key advice.",
    explanationVi: "C = presentation (cách phục vụ, dễ ăn, bắt mắt). Dị ứng/nguyên liệu và khảo sát món giống đã được coi là đã nghĩ, không phải lời khuyên chính.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Thai Basil — F They worked very long hours",
    questionVi: "Thai Basil — F Họ làm việc rất nhiều giờ",
    modelParaphraseEn: "Their work-life balance was non-existent as they were working til midnight in the restaurant all week and then took their food truck to markets on their days off",
    modelParaphraseVi: "Their work-life balance was non-existent as they were working til midnight in the restaurant all week and then took their food truck to markets on their days off",
    acceptedAnswers: ["F", "long hours", "work-life balance was non-existent", "working til midnight"],
    explanationEn: "F = very long hours (restaurant till midnight plus markets on days off).",
    explanationVi: "F = làm rất nhiều giờ (nhà hàng đến nửa đêm rồi mang xe đi chợ ngày nghỉ).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Basque — A Some ingredients were too expensive",
    questionVi: "Basque — A Một số nguyên liệu quá đắt",
    modelParaphraseEn: "it was hard to make a profit because the price of fish – essential for some of their dishes – was so high",
    modelParaphraseVi: "it was hard to make a profit because the price of fish – essential for some of their dishes – was so high",
    acceptedAnswers: ["A", "ingredients were too expensive", "price of fish", "so high"],
    explanationEn: "A = fish (an essential ingredient) was too expensive, so they added more vegetarian dishes.",
    explanationVi: "A = cá (nguyên liệu thiết yếu) quá đắt, nên họ thêm món chay.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Lou's kitchen — B The meals took a long time to prepare",
    questionVi: "Lou's kitchen — B Món ăn mất nhiều thời gian chuẩn bị",
    modelParaphraseEn: "making salads to order … dishes were quite complicated … people standing in a long queue for more than 15 minutes",
    modelParaphraseVi: "making salads to order … dishes were quite complicated … people standing in a long queue for more than 15 minutes",
    acceptedAnswers: ["B", "took a long time to prepare", "complicated", "long queue", "15 minutes"],
    explanationEn: "B = slow to prepare (salads to order, complicated dishes, 15-minute queue).",
    explanationVi: "B = chuẩn bị lâu (salad làm theo đơn, món phức tạp, xếp hàng hơn 15 phút).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Chip Chop — D It was difficult to get a permit to sell food",
    questionVi: "Chip Chop — D Khó xin giấy phép bán đồ ăn",
    modelParaphraseEn: "they'd need a special licence – which individual businesses don't need at markets or festivals. It was a complicated process and in the end they gave up",
    modelParaphraseVi: "they'd need a special licence – which individual businesses don't need at markets or festivals. It was a complicated process and in the end they gave up",
    acceptedAnswers: ["D", "difficult to get a permit", "special licence", "complicated process"],
    explanationEn: "D = special licence / permit was hard to get, so they gave up. The beach site itself was otherwise perfect.",
    explanationVi: "D = special licence / giấy phép khó xin nên họ bỏ cuộc. Địa điểm gần biển vốn rất hợp.",
  },
];
