import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["How are you getting on with"] },
    { id: "g2", answers: ["It's harder than I expected", "It is harder than I expected"] },
    { id: "g3", answers: ["I'm really struggling with", "I am really struggling with"] },
    { id: "g4", answers: ["Are they hard to control"] },
    { id: "g5", answers: ["I don't have discipline problems as such", "I do not have discipline problems as such"] },
    { id: "g6", answers: ["I was wondering about"] },
    { id: "g7", answers: ["Have you thought about"] },
    { id: "g8", answers: ["Wouldn't that be upsetting for the children", "Would not that be upsetting for the children"] },
    { id: "g9", answers: ["it's quite straightforward", "it is quite straightforward"] },
    { id: "g10", answers: ["I suppose so"] },
    { id: "g11", answers: ["That might be rather broad"] },
    { id: "g12", answers: ["I might think about that some more"] },
    { id: "g13", answers: ["So can I talk through"] },
    { id: "g14", answers: ["I did a similar experiment"] },
    { id: "g15", answers: ["that wouldn't hurt them", "that would not hurt them"] },
    { id: "g16", answers: ["I suppose you can buy that"] },
    { id: "g17", answers: ["It sounds complicated"] },
    { id: "g18", answers: ["That sounds cool"] },
  ],
  lines: [
    {
      speaker: "CLARE",
      segments: [
        { type: "text", text: "Hi Jake. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the practical teaching?" },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", but I've got some great classes. How about you?" },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        { type: "text", text: "Not brilliant. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " my Year 12 science class." },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "?" }] },
    {
      speaker: "CLARE",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". It's just that they don't seem to think that science has anything to do with their lives. It's depressing. They listen to what I say, and I gave them a test last week and the results weren't too bad, but there's no real engagement.",
        },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "And as part of my teaching practice, I have to design an experiment for them to do. " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " something on the children's diets… you know, asking them to record what they eat and maybe linking it to their state of health.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Mmm. Let's think. So your methodology would involve the children recording what they eat. OK, but you'd also need to have access to the children's medical records and I don't think people would be happy about that; confidentiality would be an issue. If you could get the right data, the conclusions might be significant, but I suspect it's just not going to be easy.",
        },
      ],
    },
    { speaker: "CLARE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "JAKE",
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: " doing an experiment using animals?" },
      ],
    },
    { speaker: "CLARE", segments: [{ type: "gap", gapId: "g8" }, { type: "text", text: "?" }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Well, the animals don't have to be harmed in any way. It could just be an experiment where they're given a certain diet and the effects are observed.",
        },
      ],
    },
    { speaker: "CLARE", segments: [{ type: "text", text: "Would I have to get permission to use animals?" }] },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Yes, you'd have to submit an outline of the experiment and fill in a form, but " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "But if we found out that, say, a particular diet affects the health of animals, the same thing wouldn't necessarily be true for people, would it?",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "No that's true, but the findings for any experiment are going to be limited. It's inevitable.",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". So what animals could I use to investigate the effects of diet? Mice?",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Yes. You'd need experimental mice – ones that have been specially bred for experiments. OK, so what will your experiment be investigating exactly?",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "Well, something to do with nutrition. So maybe we could look at food supplements… things like extra iron and extra protein, and their impact on health.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Mmm. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". Maybe just look at the effects of one supplement, like sugar, on the health of the mice?",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "In fact, maybe the focus could be on whether mice can control their own diet.",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "So, what happens when they have access to more sugar, that they don't really need?",
        },
      ],
    },
    { speaker: "CLARE", segments: [{ type: "text", text: "Exactly. Do they eat it or do they decide to leave it?" }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Great. Then later on, you could do a follow-up experiment adding another variable. Like, you could give some of the mice the chance to be more active, running on a wheel or something, and the others just sit around and don't do much.",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "Or I could repeat the experiment but change the type of food I provided … or use mice with a different genetic structure. But I think your idea would be more interesting, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " a possible procedure for the experiment where mice are given a sugar supplement?",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "Sure. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " in college actually." },
      ],
    },
    { speaker: "CLARE", segments: [{ type: "text", text: "Great. So how many mice would I need?" }] },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "I'd say about 12. And all young ones, not a mixture of old and young.",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "OK. And I'd need two groups of equal sizes, so six in each group. And how would I tell them apart? I suppose I could put some sort of tag on one group… or just mark them in some way?",
        },
      ],
    },
    {
      speaker: "JAKE",
      segments: [
        { type: "text", text: "You could use food colouring, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "Perfect. Then each group would go into a separate cage, and one group, let's call them group A, would be the control group. So they'd just have ordinary mouse food. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "Yes, it comes in dry pellets." }] },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "And the other group would have the same as the first group, but they'd also have the extra sugar.",
        },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "Would you just give them straight sugar?" }] },
    {
      speaker: "CLARE",
      segments: [{ type: "text", text: "I might be better to give them something like cereal with it." }],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Hmm. Then you'd need to weigh the mice, I should think once a week. And you'd need an electronic balance.",
        },
      ],
    },
    {
      speaker: "CLARE",
      segments: [{ type: "text", text: "But we can't hold them on the balance, or it'd affect the reading." }],
    },
    {
      speaker: "JAKE",
      segments: [
        {
          type: "text",
          text: "Exactly. So you need something called a weighing chamber to stop the mice from running away. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", but actually you can just use a plastic box with holes in the top." },
      ],
    },
    {
      speaker: "CLARE",
      segments: [
        {
          type: "text",
          text: "OK. So once we've measured the weight gain of each mouse we can work out the average for each group, as well as the standard deviation. And then see where we go from there. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", I think the students will enjoy it." },
      ],
    },
    { speaker: "JAKE", segments: [{ type: "text", text: "Yes. One thing…" }] },
  ],
};

export const CAM19_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Clare's Year 12 class — C frustrated at their lack of interest",
    questionVi: "Lớp Year 12 của Clare — C bực vì học sinh thiếu hứng thú",
    modelParaphraseEn: "they don't seem to think that science has anything to do with their lives … there's no real engagement",
    modelParaphraseVi: "they don't seem to think that science has anything to do with their lives … there's no real engagement",
    acceptedAnswers: ["no real engagement", "lack of interest", "nothing to do with their lives"],
    explanationEn: "C = frustrated by lack of interest. Tests were not too bad; behaviour is not the problem.",
    explanationVi: "C = bực vì thiếu hứng thú. Điểm kiểm tra không tệ; không phải vấn đề kỷ luật.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Children's diet experiment — B some data might be difficult to obtain",
    questionVi: "Thí nghiệm chế độ ăn trẻ — B một số dữ liệu khó lấy",
    modelParaphraseEn: "you'd also need access to the children's medical records … confidentiality would be an issue … it's just not going to be easy",
    modelParaphraseVi: "you'd also need access to the children's medical records … confidentiality would be an issue … it's just not going to be easy",
    acceptedAnswers: ["medical records", "confidentiality", "not going to be easy"],
    explanationEn: "B = medical data would be hard to get. He says conclusions might be significant if they had the data.",
    explanationVi: "B = dữ liệu y tế khó lấy. Ông nói kết luận có thể có ý nghĩa nếu có dữ liệu.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Animal experiment problem — A results may not apply to humans",
    questionVi: "Vấn đề thí nghiệm động vật — A kết quả có thể không áp dụng cho người",
    modelParaphraseEn: "the same thing wouldn't necessarily be true for people, would it? No that's true",
    modelParaphraseVi: "the same thing wouldn't necessarily be true for people, would it? No that's true",
    acceptedAnswers: ["wouldn't necessarily be true for people", "not apply to humans"],
    explanationEn: "A = they agree animal results may not transfer to humans. Permission is straightforward, not the agreed problem.",
    explanationVi: "A = họ đồng ý kết quả trên động vật chưa chắc đúng với người. Xin phép thì khá đơn giản.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Research question — A are mice capable of controlling their food intake?",
    questionVi: "Câu hỏi nghiên cứu — A chuột có tự kiểm soát lượng ăn không?",
    modelParaphraseEn: "maybe the focus could be on whether mice can control their own diet – Do they eat it or do they decide to leave it?",
    modelParaphraseVi: "maybe the focus could be on whether mice can control their own diet – Do they eat it or do they decide to leave it?",
    acceptedAnswers: ["control their own diet", "food intake", "leave it"],
    explanationEn: "A = can mice control intake of extra sugar. Multiple supplements / sugar-and-health were narrowed or set aside.",
    explanationVi: "A = chuột có tự kiểm soát đường thừa không. Nhiều loại bổ sung / đường-và-sức-khỏe bị thu hẹp.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Follow-up experiment — C varying amounts of exercise",
    questionVi: "Thí nghiệm tiếp — C thay đổi lượng vận động",
    modelParaphraseEn: "give some of the mice the chance to be more active, running on a wheel … the others just sit around",
    modelParaphraseVi: "give some of the mice the chance to be more active, running on a wheel … the others just sit around",
    acceptedAnswers: ["more active", "running on a wheel", "exercise"],
    explanationEn: "C = exercise / activity as a second variable. Clare prefers Jake's idea over other foods or genetic strains.",
    explanationVi: "C = vận động là biến thứ hai. Clare thích ý Jake hơn đổi loại thức ăn hay giống chuột.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Choose mice which are all the same ______ — C age",
    questionVi: "Chọn chuột cùng ______ — C tuổi",
    modelParaphraseEn: "all young ones, not a mixture of old and young",
    modelParaphraseVi: "all young ones, not a mixture of old and young",
    acceptedAnswers: ["age", "young ones", "not a mixture of old and young"],
    explanationEn: "C = age (all young). Group size is equal (six each), but the matching word is age.",
    explanationVi: "C = tuổi (toàn chuột non). Số lượng mỗi nhóm bằng nhau, nhưng từ matching là age.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Two groups, each with a different ______ — H colour",
    questionVi: "Hai nhóm, mỗi nhóm một ______ khác — H màu",
    modelParaphraseEn: "You could use food colouring, that wouldn't hurt them",
    modelParaphraseVi: "You could use food colouring, that wouldn't hurt them",
    acceptedAnswers: ["colour", "color", "food colouring"],
    explanationEn: "H = colour (food colouring to tell groups apart), not a tag.",
    explanationVi: "H = màu (phẩm màu thực phẩm để phân nhóm), không phải thẻ đeo.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Group B: sugar contained in ______ — E cereal",
    questionVi: "Nhóm B: đường trong ______ — E ngũ cốc",
    modelParaphraseEn: "I might be better to give them something like cereal with it",
    modelParaphraseVi: "I might be better to give them something like cereal with it",
    acceptedAnswers: ["cereal"],
    explanationEn: "E = cereal with the extra sugar, not straight sugar or water.",
    explanationVi: "E = cereal kèm đường thêm, không phải đường nguyên hay nước.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Weighing chamber to prevent ______ — B escape",
    questionVi: "Buồng cân để ngăn ______ — B chạy thoát",
    modelParaphraseEn: "a weighing chamber to stop the mice from running away – a plastic box with holes in the top",
    modelParaphraseVi: "a weighing chamber to stop the mice from running away – a plastic box with holes in the top",
    acceptedAnswers: ["escape", "running away"],
    explanationEn: "B = escape / running away. Holding them on the balance would affect the reading.",
    explanationVi: "B = chạy thoát. Giữ chuột trên cân sẽ làm sai số liệu.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Do all necessary ______ — F calculations",
    questionVi: "Làm các ______ cần thiết — F phép tính",
    modelParaphraseEn: "work out the average for each group, as well as the standard deviation",
    modelParaphraseVi: "work out the average for each group, as well as the standard deviation",
    acceptedAnswers: ["calculations", "average", "standard deviation"],
    explanationEn: "F = calculations (mean and standard deviation of weight gain).",
    explanationVi: "F = phép tính (trung bình và độ lệch chuẩn của tăng cân).",
  },
];
