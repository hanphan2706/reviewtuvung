import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I haven't seen you for a bit", "I have not seen you for a bit"] },
    { id: "g2", answers: ["I've been busy with my project", "I have been busy with my project"] },
    { id: "g3", answers: ["I had two main aims"] },
    { id: "g4", answers: ["The basic process was quite straightforward"] },
    { id: "g5", answers: ["I had time to play around with"] },
    { id: "g6", answers: ["I was really pleased with"] },
    { id: "g7", answers: ["It must've been a great feeling", "It must have been a great feeling"] },
    { id: "g8", answers: ["I'm going to send them some samples", "I am going to send them some samples"] },
    { id: "g9", answers: ["I came across something on the internet"] },
    { id: "g10", answers: ["It started off as a project"] },
    { id: "g11", answers: ["there's all sorts of possibilities", "there is all sorts of possibilities", "there are all sorts of possibilities"] },
    { id: "g12", answers: ["I was reading an article about"] },
    { id: "g13", answers: ["they need to be more proactive"] },
    { id: "g14", answers: ["The government needs to do something about it"] },
    { id: "g15", answers: ["It's got to change", "It has got to change"] },
    { id: "g16", answers: ["didn't actually taste of anything", "did not actually taste of anything"] },
    { id: "g17", answers: ["it's all kept very quiet", "it is all kept very quiet"] },
    { id: "g18", answers: ["it's hard to know which varieties are safe to eat", "it is hard to know which varieties are safe to eat"] },
  ],
  lines: [
    {
      speaker: "COLIN",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", Marie." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "text", text: "No. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "You're making a vegan alternative to eggs, aren't you? Something that doesn't use animal products?",
        },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "text", text: "Yes. I'm using chickpeas. " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " when I first started looking for an alternative to eggs, but actually I've found chickpeas have got more advantages.",
        },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "But how about your project on reusing waste food – you were looking at bread, weren't you?",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yes. It's been hard work, but I've enjoyed it. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " – breaking the stale bread down to a paste then reforming it." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "But you were using 3-D printing, weren't you, to make the paste into biscuits?",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yeah, I'd used that before, but in this project, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " different patterns for the biscuits and finding how I could add fruit and vegetables to make them a more appetising colour, and ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " what I managed to produce." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " to make something appetising out of bits of old bread that would've been thrown away otherwise.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "It was. And I'm hoping that some of the restaurants in town will be interested in the biscuits. ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " yesterday that might interest you. It was a company that's developed touch-sensitive sensors for food labels.",
        },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Mmm?" }] },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "It's a special sort of label on the food package. When the label's smooth, the food is fresh and then when you can feel bumps on the label, that means the food's gone bad. ",
        },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " to help visually impaired people know whether food was fit to eat or not.",
        },
      ],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "Interesting. So just solid food?" }] },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "No, things like milk and juice as well. But actually, I thought it might be really good for drug storage in hospitals and pharmacies.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Right. And coming back to food, maybe it'd be possible to use it for other things besides freshness. Like how many kilograms a joint of meat is, for example.",
        },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " food trends predicting how eating habits might change in the next few years.",
        },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "Oh – things like more focus on local products? That seems so obvious, but the shops are still full of imported foods.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " to address that." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [{ type: "text", text: "And somehow motivate consumers to change, yes." }],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "One thing everyone's aware of is the need for a reduction in unnecessary packaging – but just about everything you buy in supermarkets is still covered in plastic. ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        { type: "text", text: "Absolutely. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Do you think there'll be more interest in gluten- and lactose-free food?" },
      ],
    },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "For people with allergies or food intolerances? I don't know. Lots of people I know have been buying that type of food for years now.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [{ type: "text", text: "Yes, even if they haven't been diagnosed with an allergy." }],
    },
    { speaker: "MARIE", segments: [{ type: "text", text: "That's right." }] },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "One thing I've noticed is the number of branded products related to celebrity chefs – people watch them cooking on TV and then buy things like spice mixes or frozen foods with the chef's name on . . . I bought something like that once, but I won't again.",
        },
      ],
    },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Yeah – I bought a ready-made spice mix for chicken which was supposed to be used by a chef I'd seen on television, and it ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MARIE",
      segments: [{ type: "text", text: "Mm. Did the article mention 'ghost kitchens' used to produce takeaway food?" }],
    },
    { speaker: "COLIN", segments: [{ type: "text", text: "No. What are they?" }] },
    {
      speaker: "MARIE",
      segments: [
        {
          type: "text",
          text: "Well, they might have the name of a restaurant, but actually they're a cooking facility just for delivery meals – the public don't ever go there. But people aren't aware of that – ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "COLIN",
      segments: [{ type: "text", text: "So people don't realise the food's not actually from the restaurant?" }],
    },
    { speaker: "MARIE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "COLIN",
      segments: [
        {
          type: "text",
          text: "Did you know more and more people are using all sorts of different mushrooms now, to treat different health concerns? Things like heart problems?",
        },
      ],
    },
    { speaker: "MARIE", segments: [{ type: "text", text: "Hmm. They might be taking a big risk there." }] },
    {
      speaker: "COLIN",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Anyway maybe now…" },
      ],
    },
  ],
};

export const CAM19_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO most satisfying things: B finding a good way to prevent waste",
    questionVi: "Hai điều hài lòng nhất: B cách hay để tránh lãng phí",
    modelParaphraseEn: "make something appetising out of bits of old bread that would've been thrown away otherwise",
    modelParaphraseVi: "make something appetising out of bits of old bread that would've been thrown away otherwise",
    acceptedAnswers: ["thrown away otherwise", "prevent waste", "old bread"],
    explanationEn: "B = preventing waste. Restaurants getting samples is only a hope, not something he found satisfying yet. The basic process was straightforward, not a problem he overcame. 3-D printing was something he had used before.",
    explanationVi: "B = tránh lãng phí. Nhà hàng mới là hy vọng, chưa xảy ra. Quy trình cơ bản khá đơn giản, không phải khó khăn. In 3-D anh đã dùng trước đó.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) D experimenting with designs and colours",
    questionVi: "(cùng danh sách) D thử thiết kế và màu sắc",
    modelParaphraseEn: "play around with different patterns for the biscuits and … add fruit and vegetables to make them a more appetising colour",
    modelParaphraseVi: "play around with different patterns for the biscuits and … add fruit and vegetables to make them a more appetising colour",
    acceptedAnswers: ["different patterns", "appetising colour", "designs and colours"],
    explanationEn: "D = patterns / colour. He was really pleased with what he produced.",
    explanationVi: "D = họa tiết / màu. Anh rất hài lòng với sản phẩm.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO future uses they agree on: A medical products",
    questionVi: "Hai hướng tương lai họ đồng ý: A sản phẩm y tế",
    modelParaphraseEn: "I thought it might be really good for drug storage in hospitals and pharmacies",
    modelParaphraseVi: "I thought it might be really good for drug storage in hospitals and pharmacies",
    acceptedAnswers: ["drug storage", "hospitals and pharmacies", "medical products"],
    explanationEn: "A = hospitals / pharmacies (medical). Smooth vs bumps already shows food gone bad; drinks (milk and juice) already work; helping visually impaired people was the original project, not a future development they agree on.",
    explanationVi: "A = bệnh viện / nhà thuốc. Nhãn gồ ghề đã báo thực phẩm hỏng; đồ uống đã dùng được; người khiếm thị là dự án gốc, không phải hướng mới họ đồng ý.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) E indicate the weight of certain foods",
    questionVi: "(cùng danh sách) E hiển thị khối lượng thực phẩm",
    modelParaphraseEn: "use it for other things besides freshness. Like how many kilograms a joint of meat is",
    modelParaphraseVi: "use it for other things besides freshness. Like how many kilograms a joint of meat is",
    acceptedAnswers: ["how many kilograms", "joint of meat", "weight"],
    explanationEn: "E = kilograms / weight of meat. Marie agrees: all sorts of possibilities.",
    explanationVi: "E = kilograms / khối lượng thịt. Marie đồng ý: còn nhiều khả năng.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Use of local products — D retailers should do more to encourage this",
    questionVi: "Sản phẩm địa phương — D nhà bán lẻ nên khuyến khích hơn",
    modelParaphraseEn: "the shops are still full of imported foods … they need to be more proactive to address that",
    modelParaphraseVi: "the shops are still full of imported foods … they need to be more proactive to address that",
    acceptedAnswers: ["more proactive", "shops are still full", "imported foods"],
    explanationEn: "D = shops / retailers should be more proactive. Local food is obvious but not happening yet.",
    explanationVi: "D = cửa hàng / nhà bán lẻ cần chủ động hơn. Thực phẩm địa phương là điều hiển nhiên nhưng chưa xảy ra.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Reduction in unnecessary packaging — G stricter regulations",
    questionVi: "Giảm bao bì thừa — G quy định chặt chẽ hơn",
    modelParaphraseEn: "everything you buy in supermarkets is still covered in plastic. The government needs to do something about it",
    modelParaphraseVi: "everything you buy in supermarkets is still covered in plastic. The government needs to do something about it",
    acceptedAnswers: ["government needs to do something", "covered in plastic", "stricter regulations"],
    explanationEn: "G = government action / stricter rules. People already know packaging should be reduced, but it has not changed.",
    explanationVi: "G = chính phủ cần hành động / quy định chặt. Mọi người đã biết cần giảm bao bì, nhưng vẫn chưa đổi.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Gluten-free and lactose-free food — C already seems to be widespread",
    questionVi: "Thực phẩm không gluten / lactose — C đã phổ biến",
    modelParaphraseEn: "Lots of people I know have been buying that type of food for years now … even if they haven't been diagnosed",
    modelParaphraseVi: "Lots of people I know have been buying that type of food for years now … even if they haven't been diagnosed",
    acceptedAnswers: ["for years now", "lots of people", "widespread"],
    explanationEn: "C = already widespread, including people without a diagnosed allergy. They do not predict a big new surge of interest.",
    explanationVi: "C = đã phổ biến, kể cả người không được chẩn đoán dị ứng. Họ không dự đoán sẽ bùng nổ thêm.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Celebrity-chef branded products — B this may have disappointing results",
    questionVi: "Sản phẩm gắn tên đầu bếp nổi tiếng — B có thể thất vọng",
    modelParaphraseEn: "I bought something like that once, but I won't again … it didn't actually taste of anything",
    modelParaphraseVi: "I bought something like that once, but I won't again … it didn't actually taste of anything",
    acceptedAnswers: ["didn't actually taste of anything", "I won't again", "disappointing"],
    explanationEn: "B = disappointing (no taste). Both students had a poor experience with chef-branded products.",
    explanationVi: "B = thất vọng (không có vị). Cả hai đều mua rồi không muốn mua lại.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Ghost kitchens — F most people know little about this",
    questionVi: "Ghost kitchens — F đa số người biết rất ít",
    modelParaphraseEn: "people aren't aware of that – it's all kept very quiet",
    modelParaphraseVi: "people aren't aware of that – it's all kept very quiet",
    acceptedAnswers: ["aren't aware", "kept very quiet", "know little"],
    explanationEn: "F = people do not realise the food is not from the restaurant; it is kept quiet.",
    explanationVi: "F = người ta không biết đồ ăn không đến từ nhà hàng; bị giữ kín.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Mushrooms for health concerns — H this could be dangerous",
    questionVi: "Nấm cho vấn đề sức khỏe — H có thể nguy hiểm",
    modelParaphraseEn: "They might be taking a big risk there … it's hard to know which varieties are safe to eat",
    modelParaphraseVi: "They might be taking a big risk there … it's hard to know which varieties are safe to eat",
    acceptedAnswers: ["taking a big risk", "which varieties are safe", "dangerous"],
    explanationEn: "H = a big risk / not knowing which mushrooms are safe.",
    explanationVi: "H = rủi ro lớn / khó biết loại nấm nào an toàn.",
  },
];
