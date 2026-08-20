import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["a short summary of our work"] },
    { id: "g2", answers: ["miles away and I don't drive", "miles away and I do not drive"] },
    { id: "g3", answers: ["let me stay on the farm"] },
    { id: "g4", answers: ["through a friend of my mother's"] },
    { id: "g5", answers: ["helping out with them"] },
    { id: "g6", answers: ["stagger to its feet"] },
    { id: "g7", answers: ["talked me through"] },
    { id: "g8", answers: ["their wool's really sought after", "their wool is really sought after"] },
    { id: "g9", answers: ["they use it for carpets"] },
    { id: "g10", answers: ["the amount of supplements they add"] },
    { id: "g11", answers: ["And they're not cheap", "And they are not cheap"] },
    { id: "g12", answers: ["are all basically the same"] },
    { id: "g13", answers: ["I made a really embarrassing mistake"] },
    { id: "g14", answers: ["wasn't too happy with me", "was not too happy with me"] },
    { id: "g15", answers: ["the livestock's health is being affected"] },
    { id: "g16", answers: ["my heart sank when I saw"] },
    { id: "g17", answers: ["the module that really impressed me"] },
    { id: "g18", answers: ["I hadn't thought about before", "I had not thought about before"] },
  ],
  lines: [
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "So, Tim, we have to do " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " experience on a farm." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Right. My farm was great, but arranging the work experience was hard. One problem was it was " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". And also, I'd really wanted a placement for a month, but I could only get one for two weeks." },
      ],
    },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "I was lucky, the farmer " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " so I didn't have to travel. But finding the right sort of farm to apply to wasn't easy." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "No, they don't seem to have websites, do they. I found mine " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", but it wasn't easy." },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "No." }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "My farm was mostly livestock, especially sheep. I really enjoyed " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". I was up most of one night helping a sheep deliver a lamb …" },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "On your own?" }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "No, the farmer was there, and he told me what to do. It wasn't a straightforward birth, but I managed. It was a great feeling to see the lamb ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " and start feeding almost straightaway, and to know that it was OK." },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "Mm." }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Then another time a lamb had broken its leg, and they got the vet in to set it, and he " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " what he was doing. That was really useful." },
      ],
    },
    {
      speaker: "DIANA",
      segments: [
        {
          type: "text",
          text: "Yes, my farm had sheep too. The farm was in a valley and they had a lowland breed called Suffolks, although the farmer said they'd had other breeds in the past.",
        },
      ],
    },
    { speaker: "TIM", segments: [{ type: "text", text: "So were they bred for their meat?" }] },
    { speaker: "DIANA", segments: [{ type: "text", text: "Mostly, yes. They're quite big and solid." }] },
    {
      speaker: "TIM",
      segments: [{ type: "text", text: "My farm was up in the hills and they had a different breed of sheep, they were Cheviots." }],
    },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Oh, I heard " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "Yes. It's very hardwearing and " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "I was interested in " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " to animals' feed nowadays. Like, even the chickens got extra vitamins and electrolytes in their feed." },
      ],
    },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Yes, I found that too. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". But my farmer said some are overpriced for what they are. And he didn't give them as a matter of routine, just at times when the chickens seemed to particularly require them.",
        },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Yes, mine said the same. He said certain breeds of chickens might need more supplements than the others, but the cheap and expensive ones ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "Mm." }] },
    { speaker: "TIM", segments: [{ type: "text", text: "So did your farm have any other livestock, Diana?" }] },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Yes, dairy cows. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " when I was working in the milk shed. Some cows had been treated with antibiotics, so their milk wasn't suitable for human consumption, and it had to be put in a separate container. But I got mixed up, and I poured some milk from the wrong cow in with the milk for humans, so the whole lot had to be thrown away. The farmer ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        { type: "text", text: "I asked my farmer how much he depended on the vet to deal with health problems. I'd read reports that " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " as farmers are under pressure to increase production. Well, he didn't agree with that, but he said that actually some of the stuff the vets do, like minor operations, he'd be quite capable of doing himself.",
        },
      ],
    },
    {
      speaker: "DIANA",
      segments: [{ type: "text", text: "Yeah. My farmer said the same. But he reckons vets' skills are still needed." }],
    },
    {
      speaker: "DIANA",
      segments: [
        {
          type: "text",
          text: "Now we've got to give a bit of feedback about last term's modules – just short comments, apparently. Shall we do that now?",
        },
      ],
    },
    { speaker: "TIM", segments: [{ type: "text", text: "OK. So medical terminology." }] },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " that, especially right at the beginning of the course. And I did struggle with it." },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "I'd thought it'd be hard, but actually I found it all quite straightforward. What did you think about diet and nutrition?",
        },
      ],
    },
    { speaker: "DIANA", segments: [{ type: "text", text: "OK, I suppose." }] },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Do you remember what they told us about pet food and the fact that there's such limited checking into whether or not it's contaminated? I mean in comparison with the checks on food for humans – I thought that was terrible.",
        },
      ],
    },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Mm. I think " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " was the animal disease one, when we looked at domesticated animals in different parts of the world, like camels and water buffalo and alpaca. The economies of so many countries depend on these, but scientists don't know much about the diseases that affect them.",
        },
      ],
    },
    {
      speaker: "TIM",
      segments: [
        {
          type: "text",
          text: "Yes, I thought they'd know a lot about ways of controlling and eradicating those diseases, but that's not the case at all. I loved the wildlife medication unit. Things like helping birds that have been caught in oil spills. That's something ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DIANA",
      segments: [
        { type: "text", text: "Yeah, I thought I might write my dissertation on something connected with that." },
      ],
    },
    {
      speaker: "TIM",
      segments: [{ type: "text", text: "Right. So actually I was thinking something along the same line." }],
    },
  ],
};

export const CAM17_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Problem both had arranging work experience? A make initial contact / B transport / C length of placement",
    questionVi: "Khó khăn chung khi sắp xếp thực tập? A liên hệ ban đầu / B đi lại / C thời lượng",
    modelParaphraseEn: "finding the right sort of farm to apply to wasn't easy. No, they don't seem to have websites, do they",
    modelParaphraseVi: "finding the right sort of farm to apply to wasn't easy. No, they don't seem to have websites, do they",
    acceptedAnswers: ["A", "make initial contact with suitable farms", "don't seem to have websites"],
    explanationEn: "A = contacting farms was hard (no websites). Transport and length were Tim's problems only.",
    explanationVi: "A = liên hệ trang trại khó (không có website). Đi lại và thời lượng chỉ là vấn đề của Tim.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Tim was pleased to help: A lamb with a broken leg / B sheep having a difficult birth / C lamb that couldn't feed",
    questionVi: "Tim vui vì giúp: A cừu non gãy chân / B cừu mẹ đẻ khó / C cừu non bú kém",
    modelParaphraseEn: "helping a sheep deliver a lamb … It wasn't a straightforward birth, but I managed",
    modelParaphraseVi: "helping a sheep deliver a lamb … It wasn't a straightforward birth, but I managed",
    acceptedAnswers: ["B", "a sheep that was having difficult giving birth", "wasn't a straightforward birth"],
    explanationEn: "B = difficult birth. The broken-leg lamb was useful to watch, but the vet set it. The newborn fed almost straightaway.",
    explanationVi: "B = ca đẻ khó. Cừu gãy chân thì vet xử lý. Cừu mới sinh bú được ngay.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Diana's sheep: A various varieties / B mainly reared for meat / C better wool than hill sheep",
    questionVi: "Cừu của Diana: A nhiều giống / B chủ yếu nuôi lấy thịt / C lông tốt hơn cừu đồi",
    modelParaphraseEn: "So were they bred for their meat? Mostly, yes. They're quite big and solid",
    modelParaphraseVi: "So were they bred for their meat? Mostly, yes. They're quite big and solid",
    acceptedAnswers: ["B", "were mainly reared for their meat", "bred for their meat"],
    explanationEn: "B = mainly for meat (Suffolks). Other breeds were in the past, not now. Sought-after wool is Tim's Cheviots.",
    explanationVi: "B = chủ yếu lấy thịt (Suffolks). Giống khác là trước đây. Lông được ưa chuộng thuộc Cheviots của Tim.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Chicken-feed supplements: A only if specially needed / B pay extra for effective ones / C limit the amount",
    questionVi: "Thức ăn bổ sung gà: A chỉ khi thật sự cần / B trả thêm cho loại hiệu quả / C hạn chế lượng",
    modelParaphraseEn: "he didn't give them as a matter of routine, just at times when the chickens seemed to particularly require them",
    modelParaphraseVi: "he didn't give them as a matter of routine, just at times when the chickens seemed to particularly require them",
    acceptedAnswers: ["A", "These should only be given if specially needed", "not … as a matter of routine"],
    explanationEn: "A = only when needed. Cheap and expensive supplements are basically the same, so paying extra is not worth it.",
    explanationVi: "A = chỉ khi cần. Loại rẻ và đắt cơ bản giống nhau, không đáng trả thêm.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Diana with dairy cows: A identified cows incorrectly / B accidentally threw milk away / C mistake storing milk",
    questionVi: "Diana với bò sữa: A nhận nhầm bò / B vô tình đổ sữa / C lỗi khi cất sữa",
    modelParaphraseEn: "I poured some milk from the wrong cow in with the milk for humans, so the whole lot had to be thrown away",
    modelParaphraseVi: "I poured some milk from the wrong cow in with the milk for humans, so the whole lot had to be thrown away",
    acceptedAnswers: ["C", "She made a mistake when storing milk", "poured some milk from the wrong cow"],
    explanationEn: "C = storing mistake (wrong milk mixed in). The milk was then thrown away as a result, not as her action. She mixed containers, not cow IDs.",
    explanationVi: "C = lỗi khi cất sữa (đổ nhầm vào sữa dùng cho người). Sữa bị đổ bỏ là hệ quả, không phải hành động cố ý. Không phải nhận nhầm bò.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Both farmers on vets: A failing on animal health / B change vet training / C some jobs the farmer could do",
    questionVi: "Cả hai nông dân về vet: A không xử lý nổi sức khỏe / B đổi đào tạo / C nông dân làm được một số việc",
    modelParaphraseEn: "some of the stuff the vets do, like minor operations, he'd be quite capable of doing himself. Yeah. My farmer said the same",
    modelParaphraseVi: "some of the stuff the vets do, like minor operations, he'd be quite capable of doing himself. Yeah. My farmer said the same",
    acceptedAnswers: ["C", "Some jobs could be done by the farmer rather than by a vet", "minor operations"],
    explanationEn: "C = farmer can do some vet jobs (minor operations). Tim's farmer disagreed that livestock health is failing. Vet skills are still needed.",
    explanationVi: "C = nông dân làm được một số việc vet (phẫu thuật nhỏ). Nông dân của Tim không đồng ý là sức khỏe vật nuôi đang kém. Kỹ năng vet vẫn cần.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Medical terminology — A Tim found this easier than expected",
    questionVi: "Medical terminology — A Tim thấy dễ hơn dự kiến",
    modelParaphraseEn: "I'd thought it'd be hard, but actually I found it all quite straightforward",
    modelParaphraseVi: "I'd thought it'd be hard, but actually I found it all quite straightforward",
    acceptedAnswers: ["A", "Tim found this easier than expected", "quite straightforward"],
    explanationEn: "A = easier than expected (Tim). Diana struggled; it was not that both found the reading hard.",
    explanationVi: "A = dễ hơn Tim nghĩ. Diana thì vật lộn; không phải cả hai thấy đọc khó.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Diet and nutrition — E Tim was shocked at something he learned",
    questionVi: "Diet and nutrition — E Tim sốc vì điều học được",
    modelParaphraseEn: "there's such limited checking into whether or not it's contaminated … I thought that was terrible",
    modelParaphraseVi: "there's such limited checking into whether or not it's contaminated … I thought that was terrible",
    acceptedAnswers: ["E", "Tim was shocked at something he learned on this module", "I thought that was terrible"],
    explanationEn: "E = Tim shocked at limited checks on pet-food contamination versus human food.",
    explanationVi: "E = Tim sốc vì kiểm tra nhiễm bẩn thức ăn thú cưng rất hạn chế so với đồ ăn người.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Animal disease — F both surprised how little is known",
    questionVi: "Animal disease — F cả hai ngạc nhiên vì biết quá ít",
    modelParaphraseEn: "scientists don't know much about the diseases that affect them. … I thought they'd know a lot … but that's not the case at all",
    modelParaphraseVi: "scientists don't know much about the diseases that affect them. … I thought they'd know a lot … but that's not the case at all",
    acceptedAnswers: ["F", "They were both surprised how little is known about some aspects of this", "don't know much"],
    explanationEn: "F = both surprised how little is known about diseases of camels, buffalo, alpaca, etc.",
    explanationVi: "F = cả hai ngạc nhiên vì biết rất ít về bệnh của lạc đà, trâu, alpaca, v.v.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Wildlife medication — C Diana may do some further study on this",
    questionVi: "Wildlife medication — C Diana có thể nghiên cứu thêm",
    modelParaphraseEn: "I thought I might write my dissertation on something connected with that",
    modelParaphraseVi: "I thought I might write my dissertation on something connected with that",
    acceptedAnswers: ["C", "Diana may do some further study on this", "dissertation"],
    explanationEn: "C = Diana may write her dissertation on wildlife medication (e.g. birds in oil spills). Tim loved the unit but does not claim further study.",
    explanationVi: "C = Diana có thể viết dissertation về wildlife medication (ví dụ chim dính dầu). Tim thích module nhưng không nói sẽ nghiên cứu thêm.",
  },
];
