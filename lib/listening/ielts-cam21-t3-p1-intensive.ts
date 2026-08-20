import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["part of the holiday"] },
    { id: "g2", answers: ["How frequent are they"] },
    { id: "g3", answers: ["The service is pretty limited"] },
    { id: "g4", answers: ["I quite like that idea"] },
    { id: "g5", answers: ["book in advance"] },
    { id: "g6", answers: ["they get booked up quite quickly"] },
    { id: "g7", answers: ["not 100% sure"] },
    { id: "g8", answers: ["make up our minds"] },
    { id: "g9", answers: ["book a cabin too"] },
    { id: "g10", answers: ["I think it's worth paying for", "I think it is worth paying for"] },
    { id: "g11", answers: ["quite limited"] },
    { id: "g12", answers: ["Is that any good"] },
    { id: "g13", answers: ["quite an adventure"] },
    { id: "g14", answers: ["keeping a lookout for"] },
    { id: "g15", answers: ["hang around at the port"] },
    { id: "g16", answers: ["I've never heard of it", "I have never heard of it"] },
    { id: "g17", answers: ["It's really worth visiting", "It is really worth visiting"] },
    { id: "g18", answers: ["check the name of it"] },
  ],
  lines: [
    {
      speaker: "TAMMY",
      segments: [
        {
          type: "text",
          text: "You know when you went to the Shetland Islands last year, Paul? Did you go by ferry or did you fly?",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "We went by ferry, Tammy. I prefer driving to flying – the journey feels like " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Mmm. Which ferry company did you use?" }] },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "There's only one – it's called Northern Ferries. The ferries all leave from Aberdeen.",
        },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [{ type: "gap", gapId: "g2" }, { type: "text", text: "?" }],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " – there's only one ferry leaving every evening in summer anyway, seven days a week – I'm not sure about the winter months. They may only run on four or five days then.",
        },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [
        { type: "text", text: "OK. So it's an overnight trip. " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". Leaving at night and waking up as you arrive on the island. Can you remember how much you paid for your tickets?",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "They were really cheap and four people and a car worked out at just under £250.",
        },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [
        { type: "text", text: "Really? I was expecting it to be more like £400 during the peak season." },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "So was I. It's great value. It's a good idea to " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " because I think " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " – especially during the school holidays." },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [
        { type: "text", text: "Yes, I suppose so. I'm just " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " of our plans yet. What if I had to cancel?" },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "That could be a problem. I don't think it's their policy to give refunds – just a voucher – which you can use at a later date. But you have to cancel a month in advance to get that.",
        },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [
        { type: "text", text: "Right. Well we need to " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " quickly then." },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "You'd want to " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". We booked too late to get a cabin with a window. They're more expensive but much nicer than the inner cabins. You don't have to book a cabin at all but " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". They also have luxury cabins, which are only for two people and have a TV – but I wouldn't bother with those.",
        },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "No, I agree." }] },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "The only other thing I can think of is to make sure you bring snacks for the kids. The selection on board is " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " and not that healthy either." },
      ],
    },
    {
      speaker: "TAMMY",
      segments: [
        { type: "text", text: "Mmm. What about wifi on board? " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "PAUL",
      segments: [{ type: "text", text: "Not really. So it's best to bring some books for them." }],
    },
    {
      speaker: "TAMMY",
      segments: [
        {
          type: "text",
          text: "OK. We may need to bring the dog if I can't get anyone to look after him.",
        },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "We brought ours and it was fine. The kennels on board are OK – they're quite big – you just need to provide a blanket.",
        },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Uhuh. Sounds good." }] },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "It was all very easy really – and it was " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " for the kids. They loved being on the sea at night and in the morning " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " dolphins – we saw loads." },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Oh, the kids would love that!" }] },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "One other thing. We arrived in Aberdeen hours before the ferry was due to leave so we decided to go somewhere else rather than " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " for so long." },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Where did you go?" }] },
    { speaker: "PAUL", segments: [{ type: "text", text: "Drum Castle." }] },
    {
      speaker: "TAMMY",
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". Is that spelt like the instrument?" },
      ],
    },
    {
      speaker: "PAUL",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". It's got an impressive tower and beautiful gardens and ancient woodland." },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Sounds lovely. Does it have a restaurant?" }] },
    {
      speaker: "PAUL",
      segments: [
        {
          type: "text",
          text: "It's only got a coffee shop – no restaurant. We looked up restaurants in the area and found an Italian one in a village nearby. I can " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " for you if you're interested." },
      ],
    },
    { speaker: "TAMMY", segments: [{ type: "text", text: "Oh thanks Paul that would be ...." }] },
  ],
};

export const CAM21_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Name of ferry company: ______ Ferries",
    questionVi: "Name of ferry company: ______ Ferries",
    modelParaphraseEn: "There's only one – it's called Northern Ferries. The ferries all leave from Aberdeen",
    modelParaphraseVi: "There's only one – it's called Northern Ferries. The ferries all leave from Aberdeen",
    acceptedAnswers: ["Northern"],
    explanationEn: "Only one company: Northern Ferries, departing from Aberdeen.",
    explanationVi: "Chỉ một hãng: Northern Ferries, xuất phát từ Aberdeen.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Ferries depart seven times per ______ in summer",
    questionVi: "Ferries depart seven times per ______ in summer",
    modelParaphraseEn: "there's only one ferry leaving every evening in summer anyway, seven days a week",
    modelParaphraseVi: "there's only one ferry leaving every evening in summer anyway, seven days a week",
    acceptedAnswers: ["week"],
    explanationEn: "In summer: one ferry every evening, seven days a week. Winter may be only four or five days.",
    explanationVi: "Mùa hè: mỗi tối một chuyến, seven days a week. Mùa đông có thể chỉ bốn–năm ngày.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Cost for four people with car: a little less than £ ______",
    questionVi: "Cost for four people with car: a little less than £ ______",
    modelParaphraseEn: "four people and a car worked out at just under £250",
    modelParaphraseVi: "four people and a car worked out at just under £250",
    acceptedAnswers: ["250", "two hundred and fifty"],
    explanationEn: "Just under £250 for four people plus a car — cheaper than the expected £400 peak-season price.",
    explanationVi: "Just under £250 cho bốn người kèm xe — rẻ hơn mức £400 tưởng tượng mùa cao điểm.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Cancellation policy: receive a ______ (if cancelled a month in advance)",
    questionVi: "Cancellation policy: receive a ______ (if cancelled a month in advance)",
    modelParaphraseEn: "I don't think it's their policy to give refunds – just a voucher – which you can use at a later date. But you have to cancel a month in advance",
    modelParaphraseVi: "I don't think it's their policy to give refunds – just a voucher – which you can use at a later date. But you have to cancel a month in advance",
    acceptedAnswers: ["voucher"],
    explanationEn: "No refunds — only a voucher if you cancel a month in advance.",
    explanationVi: "Không hoàn tiền — chỉ voucher nếu hủy trước một tháng.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Cabins: book one with a ______",
    questionVi: "Cabins: book one with a ______",
    modelParaphraseEn: "We booked too late to get a cabin with a window. They're more expensive but much nicer than the inner cabins",
    modelParaphraseVi: "We booked too late to get a cabin with a window. They're more expensive but much nicer than the inner cabins",
    acceptedAnswers: ["window"],
    explanationEn: "Book a cabin with a window — nicer than inner cabins. Luxury cabins have a TV but he would not bother.",
    explanationVi: "Đặt cabin có window — dễ chịu hơn cabin trong. Luxury có TV nhưng anh ấy không khuyên.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Bring snacks and ______ for the children",
    questionVi: "Bring snacks and ______ for the children",
    modelParaphraseEn: "wifi on board? Not really. So it's best to bring some books for them",
    modelParaphraseVi: "wifi on board? Not really. So it's best to bring some books for them",
    acceptedAnswers: ["books"],
    explanationEn: "Onboard food is limited; wifi is poor, so bring books for the children.",
    explanationVi: "Đồ ăn trên tàu hạn chế; wifi kém, nên mang books cho trẻ.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "A ______ is required for the dog kennels",
    questionVi: "A ______ is required for the dog kennels",
    modelParaphraseEn: "The kennels on board are OK – they're quite big – you just need to provide a blanket",
    modelParaphraseVi: "The kennels on board are OK – they're quite big – you just need to provide a blanket",
    acceptedAnswers: ["blanket"],
    explanationEn: "Kennels are fine and quite big; you must provide a blanket.",
    explanationVi: "Chuồng chó ổn và khá rộng; cần mang blanket.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Try to see ______ in the morning",
    questionVi: "Try to see ______ in the morning",
    modelParaphraseEn: "in the morning keeping a lookout for dolphins – we saw loads",
    modelParaphraseVi: "in the morning keeping a lookout for dolphins – we saw loads",
    acceptedAnswers: ["dolphins"],
    explanationEn: "In the morning they kept a lookout for dolphins and saw lots.",
    explanationVi: "Buổi sáng họ lookout for dolphins và thấy rất nhiều.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "If time, visit ______ Castle",
    questionVi: "If time, visit ______ Castle",
    modelParaphraseEn: "Drum Castle. Is that spelt like the instrument? Yeah",
    modelParaphraseVi: "Drum Castle. Is that spelt like the instrument? Yeah",
    acceptedAnswers: ["Drum"],
    explanationEn: "They visited Drum Castle (spelt like the instrument) instead of waiting at the port.",
    explanationVi: "Họ thăm Drum Castle (viết như nhạc cụ) thay vì chờ ở cảng.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "The ______ restaurant in a nearby village is recommended",
    questionVi: "The ______ restaurant in a nearby village is recommended",
    modelParaphraseEn: "It's only got a coffee shop – no restaurant. We looked up restaurants in the area and found an Italian one in a village nearby",
    modelParaphraseVi: "It's only got a coffee shop – no restaurant. We looked up restaurants in the area and found an Italian one in a village nearby",
    acceptedAnswers: ["Italian"],
    explanationEn: "The castle has only a coffee shop; an Italian restaurant in a nearby village is recommended.",
    explanationVi: "Lâu đài chỉ có coffee shop; họ gợi ý nhà hàng Italian ở làng gần đó.",
  },
];
