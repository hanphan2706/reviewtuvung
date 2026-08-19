import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["we're delighted to welcome", "we are delighted to welcome"] },
    { id: "g2", answers: ["I need to start by"] },
    { id: "g3", answers: ["Having said that", "having said that"] },
    { id: "g4", answers: ["it's really worth doing", "it is really worth doing"] },
    { id: "g5", answers: ["always remember that"] },
    { id: "g6", answers: ["for obvious reasons"] },
    { id: "g7", answers: ["nothing beats the taste of"] },
    { id: "g8", answers: ["it's important to be aware of", "it is important to be aware of"] },
    { id: "g9", answers: ["this is completely untrue"] },
    { id: "g10", answers: ["Personally, I prefer"] },
    { id: "g11", answers: ["Another thing you should remember"] },
    { id: "g12", answers: ["if you haven't got a car", "if you have not got a car"] },
    { id: "g13", answers: ["If you're a complete beginner", "If you are a complete beginner"] },
    { id: "g14", answers: ["If possible", "if possible"] },
    { id: "g15", answers: ["you must follow"] },
    { id: "g16", answers: ["Be very careful that"] },
    { id: "g17", answers: ["a word of advice"] },
    { id: "g18", answers: ["you'll be surprised by", "you will be surprised by"] },
  ],
  lines: [
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "This evening " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " Dan Beagle, who's just written a book on looking for and finding food in the wild. He's going to tell us everything we need to know about picking wild mushrooms.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Thank you very much. Well, " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " talking about safety. You really need to know what you're doing because some mushrooms are extremely poisonous.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", once you know what to look for, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " for the amazing variety of mushrooms available – which you can't get in the shops.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "But of course, you have to be very careful and that's why I always say you should never consume mushrooms picked by friends or neighbours – " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " some poisonous mushrooms look very similar to edible ones and it's easy for people to get confused.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "The other thing to avoid is mushrooms growing beside busy roads " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "But " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " freshly picked mushrooms – don't forget that the ones in the shops are often several days old and past their best.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "There are certain ideas about wild mushrooms that " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Don't listen to people who tell you that it's only OK to eat mushrooms that are pale or dull – " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". Some edible mushrooms are bright red, for example." },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " mushrooms cooked but it won't do you any harm to eat them uncooked in salads – it's not necessary to peel them.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " is that you can't tell if a mushroom is safe to eat by its smell – some of the most deadly mushrooms have no smell and taste quite nice, apparently.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Finally, just because deer or squirrels eat a particular mushroom doesn't mean that you can.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Of course, mushroom picking is associated with the countryside but " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", your local park can be a great place to start. There are usually a range of habitats where mushrooms grow, such as playing fields and wooded areas.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "But you need to be there first thing in the morning, as there's likely to be a lot of competition – not just from people but wildlife too. The deer often get the best mushrooms in my local park.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", I wouldn't recommend going alone or relying on photos in a book, even the one I've written! There are some really good phone apps for identifying mushrooms, but you can't always rely on getting a good signal in the middle of a wood.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ", you should go with a group led by an expert – you'll stay safe and learn a lot that way.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Conservation is a really important consideration and " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " a few basic rules. You should never pick all the mushrooms in one area – collect only enough for your own needs.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " you don't trample on young mushrooms or other plants. And make sure you don't pick any mushrooms that are endangered and protected by law.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "There's been a decline in some varieties of wild mushrooms in this part of the country. Restaurants are becoming more interested in locally sourced food like wild mushrooms, but the biggest problem is that so many new houses have been built in this area in the last ten years. And more water is being taken from rivers and reservoirs because of this, and mushroom habitats have been destroyed.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Anyway, " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " on storing mushrooms. Collect them in a brown paper bag and as soon as you get home, put them in the fridge. They'll be fine for a couple of days, but it's best to cook them as soon as possible – after washing them really carefully first, of course.",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "So everybody knows what a mushroom tastes like, right? Well, " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " the huge variety of wild mushrooms there are. Be adventurous! They're great in so many dishes – stir fries, risottos, pasta. But just be aware that some people can react badly to certain varieties so it's a good idea not to eat huge quantities to begin with.",
        },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "OK, so now I'm going to show you …" }] },
  ],
};

export const CAM18_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO warnings: B don't pick mushrooms near busy roads",
    questionVi: "Hai cảnh báo: B đừng hái gần đường đông",
    modelParaphraseEn: "avoid mushrooms growing beside busy roads for obvious reasons",
    modelParaphraseVi: "avoid mushrooms growing beside busy roads for obvious reasons",
    acceptedAnswers: ["busy roads", "beside busy roads"],
    explanationEn: "B = don't pick by busy roads. Old shop mushrooms are past their best, but that is not a picking warning.",
    explanationVi: "B = đừng hái sát đường đông. Nấm siêu thị cũ chỉ là so sánh vị, không phải cảnh báo khi hái.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) C don't eat mushrooms given to you",
    questionVi: "(cùng danh sách) C đừng ăn nấm người khác cho",
    modelParaphraseEn: "never consume mushrooms picked by friends or neighbours – poisonous ones look similar",
    modelParaphraseVi: "never consume mushrooms picked by friends or neighbours – poisonous ones look similar",
    acceptedAnswers: ["friends or neighbours", "picked by friends", "don't eat mushrooms given"],
    explanationEn: "C = don't eat mushrooms other people have picked. Not 'don't pick more than one variety'.",
    explanationVi: "C = đừng ăn nấm người khác hái. Không phải 'đừng hái nhiều loại cùng lúc'.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "TWO correct ideas: D brightly coloured mushrooms can be edible",
    questionVi: "Hai ý đúng: D nấm màu sáng vẫn có thể ăn được",
    modelParaphraseEn: "it's only OK to eat pale or dull mushrooms – this is completely untrue. Some edible mushrooms are bright red",
    modelParaphraseVi: "it's only OK to eat pale or dull mushrooms – this is completely untrue. Some edible mushrooms are bright red",
    acceptedAnswers: ["bright red", "brightly coloured", "pale or dull is untrue"],
    explanationEn: "D = bright colour does not mean poisonous. Peeling is unnecessary; smell is not a safety test.",
    explanationVi: "D = màu sáng không có nghĩa là độc. Không cần gọt vỏ; mùi không chứng minh an toàn.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) B mushrooms eaten by animals may be unsafe",
    questionVi: "(cùng danh sách) B nấm thú ăn vẫn có thể độc",
    modelParaphraseEn: "just because deer or squirrels eat a particular mushroom doesn't mean that you can",
    modelParaphraseVi: "just because deer or squirrels eat a particular mushroom doesn't mean that you can",
    acceptedAnswers: ["deer or squirrels", "doesn't mean that you can", "animals"],
    explanationEn: "B = animal-safe ≠ human-safe. Cooking is preferred but raw salad is also OK.",
    explanationVi: "B = thú ăn được không có nghĩa người ăn được. Ông thích nấm chín nhưng salad sống cũng được.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Picking in parks: A wooded areas / B don't disturb wildlife / C get there early",
    questionVi: "Hái trong công viên: lời khuyên nào?",
    modelParaphraseEn: "you need to be there first thing in the morning – a lot of competition from people and wildlife",
    modelParaphraseVi: "you need to be there first thing in the morning – a lot of competition from people and wildlife",
    acceptedAnswers: ["first thing in the morning", "get there early", "competition"],
    explanationEn: "C = arrive early. Woods and fields are both habitats, not a preference.",
    explanationVi: "C = đến sớm. Rừng và sân chơi đều là nơi nấm mọc, không phải chọn một.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Beginners should: A mushroom app / B join a group / C take a reference book",
    questionVi: "Người mới nên: A app / B đi nhóm / C mang sách",
    modelParaphraseEn: "go with a group led by an expert – you'll stay safe and learn a lot",
    modelParaphraseVi: "go with a group led by an expert – you'll stay safe and learn a lot",
    acceptedAnswers: ["group led by an expert", "join a group", "not alone"],
    explanationEn: "B = go with an expert group. Don't go alone; books and apps are unreliable.",
    explanationVi: "B = đi nhóm có chuyên gia. Đừng đi một mình; sách và app không đáng tin.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Conservation: A only fully grown / B limited amount / C avoid rare-species areas",
    questionVi: "Bảo tồn: điều quan trọng?",
    modelParaphraseEn: "never pick all the mushrooms in one area – collect only enough for your own needs",
    modelParaphraseVi: "never pick all the mushrooms in one area – collect only enough for your own needs",
    acceptedAnswers: ["only enough", "never pick all", "limited amount"],
    explanationEn: "B = take a limited amount. Don't pick endangered species, but the key rule here is quantity.",
    explanationVi: "B = chỉ hái vừa đủ. Có nhắc loài được bảo vệ, nhưng quy tắc chính là số lượng.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Decline because: A restaurant demand / B lack of rain / C rise in building",
    questionVi: "Nấm giảm vì: A nhà hàng / B thiếu mưa / C xây nhà",
    modelParaphraseEn: "the biggest problem is that so many new houses have been built – habitats have been destroyed",
    modelParaphraseVi: "the biggest problem is that so many new houses have been built – habitats have been destroyed",
    acceptedAnswers: ["new houses", "building", "habitats have been destroyed"],
    explanationEn: "C = housing development is the biggest problem. Restaurants are interested, but not the main cause.",
    explanationVi: "C = xây nhà là vấn đề lớn nhất. Nhà hàng có nhu cầu, nhưng không phải nguyên nhân chính.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Storing: A fridge no more than two days / B brown bag in a dark room / C leave after washing",
    questionVi: "Bảo quản nấm: cách nào?",
    modelParaphraseEn: "put them in the fridge. They'll be fine for a couple of days, but cook them as soon as possible",
    modelParaphraseVi: "put them in the fridge. They'll be fine for a couple of days, but cook them as soon as possible",
    acceptedAnswers: ["fridge", "couple of days", "two days"],
    explanationEn: "A = fridge for a couple of days. The brown bag is for collecting, not storing in a dark room.",
    explanationVi: "A = tủ lạnh khoảng hai ngày. Túi giấy nâu là lúc hái, không phải cất trong phòng tối.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Trying new varieties: A experiment with recipes / B strong taste / C cook a long time",
    questionVi: "Thử loại mới: lời khuyên?",
    modelParaphraseEn: "Be adventurous! They're great in so many dishes – stir fries, risottos, pasta",
    modelParaphraseVi: "Be adventurous! They're great in so many dishes – stir fries, risottos, pasta",
    acceptedAnswers: ["Be adventurous", "so many dishes", "recipes"],
    explanationEn: "A = try them in many dishes. Start with small quantities in case of a reaction — not because of strong taste.",
    explanationVi: "A = thử nhiều món. Ăn ít lúc đầu vì dị ứng — không phải vì vị mạnh.",
  },
];
