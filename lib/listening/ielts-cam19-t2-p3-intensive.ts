import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["did you get"] },
    { id: "g2", answers: ["had a look at"] },
    { id: "g3", answers: ["a good topic"] },
    { id: "g4", answers: ["although it's quite interesting", "although it is quite interesting"] },
    { id: "g5", answers: ["much more to it"] },
    { id: "g6", answers: ["keen to research"] },
    { id: "g7", answers: ["pairs of trainers"] },
    { id: "g8", answers: ["ordinary shoes"] },
    { id: "g9", answers: ["very hard-wearing", "very hard wearing"] },
    { id: "g10", answers: ["scruffy old pair"] },
    { id: "g11", answers: ["a long time"] },
    { id: "g12", answers: ["That didn't surprise me", "That did not surprise me"] },
    { id: "g13", answers: ["That doesn't seem to make sense", "That does not seem to make sense"] },
    { id: "g14", answers: ["find some examples"] },
    { id: "g15", answers: ["Let's start with", "Let us start with"] },
    { id: "g16", answers: ["look the same"] },
    { id: "g17", answers: ["a marathon runner"] },
    { id: "g18", answers: ["we need to discuss"] },
  ],
  lines: [
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "Hi Don – " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the copy of the article on recycling footwear that I emailed you?" },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "Yeah – it's here … I've " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " it." },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "So do you think it's " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " for our presentation?" },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "Well, before I started reading it, I thought recycling footwear, well, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", perhaps there isn't enough to say about it, cos we put shoes in recycling bins, they go to charity shops and that's about it.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "… but there's " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " than that." },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "I realise that now and I'm " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " the topic more." },
      ],
    },
    { speaker: "BELLA", segments: [{ type: "text", text: "That's great." }] },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "One of the things I didn't realise until I read the article was just how many " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " get recycled!" },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "Well, a lot of young people wear them all the time now. They've become more popular than " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "I know. I guess they are " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", but don't they look a bit casual for school uniform? I don't think they're right for that.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "Actually, I think some of them look quite smart on pupils … better than a " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " of shoes." },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "So do you keep shoes " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "Yes. Though I do tend to wear my old pairs for doing dirty jobs like cleaning my bike.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "I must admit, I've recycled some perfectly good shoes, that haven't gone out of fashion and still fit, just because they don't look great on me any more. That's awful isn't it?",
        },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "I think it's common because there's so much choice. The article did say that recent sales of footwear have increased enormously.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "No. But then it said that the amount of recycled footwear has fallen: it's 6 percent now compared to a previous level of 11 percent. ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "That's because not everything goes through the recycling process. Some footwear just isn't good enough to re-sell, for one reason or another, and gets rejected.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "So let's " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " in the article of footwear that was rejected for recycling." },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "OK. I think there are some in the interview with the recycling manager. Yeah – here it is.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        { type: "text", text: "Mmm. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " the ladies' high-heeled shoes. What did he say about those?" },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "He said they were probably expensive – the material was suede and they were beige in colour – it looked like someone had only worn them once, but in a very wet field so the heels were too stained with mud and grass to re-sell them.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [{ type: "text", text: "OK … and the leather ankle boots. What was wrong with them?" }],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "Apparently, the heels were worn – but that wasn't the problem. One of the shoes was a much lighter shade than the other one – it had obviously been left in the sun. I suppose even second-hand shoes should ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "!" },
      ],
    },
    { speaker: "BELLA", segments: [{ type: "text", text: "Sure. Then there were the red baby shoes." }] },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "Oh yes – we're told to tie shoes together when we put them in a recycling bin, but people often don't bother.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "You'd think it would have been easy to find the other, but it wasn't. That was a shame because they were obviously new.",
        },
      ],
    },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "The trainers were interesting. He said they looked like they'd been worn by " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "BELLA", segments: [{ type: "text", text: "Yeah – weren't they split?" }] },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "Not exactly. One of the soles was so worn under the foot that you could put your finger through it.",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "Well, we could certainly use some of those examples in our presentation to explain why 90 percent of shoes that people take to recycling centres or bins get thrown into landfill.",
        },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "Mmm. What did you think about the project his team set up to avoid this by making new shoes out of the good parts of old shoes?",
        },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "It sounded like a good idea. They get so many shoes, they should be able to match parts. I wasn't surprised that it failed, though. I mean who wants to buy second-hand shoes really? Think of all the germs you could catch!",
        },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "Well, people didn't refuse them for that reason, did they? It was because the pairs of shoes weren't identical.",
        },
      ],
    },
    { speaker: "BELLA", segments: [{ type: "text", text: "They still managed to ship them overseas, though." }] },
    {
      speaker: "DON",
      segments: [
        { type: "text", text: "That's another area " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "BELLA",
      segments: [
        {
          type: "text",
          text: "You know I used to consider this topic just from my own perspective, by thinking about my own recycling behaviour without looking at the bigger picture. So much happens once shoes leave the recycling area.",
        },
      ],
    },
    {
      speaker: "DON",
      segments: [
        {
          type: "text",
          text: "It's not as simple as you first think, and we can show that by taking a very different approach to it.",
        },
      ],
    },
    { speaker: "BELLA", segments: [{ type: "text", text: "Absolutely. So let's discuss …" }] },
  ],
};

export const CAM19_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "At first, Don thought recycling footwear might be too: A limited in scope / B hard to research / C boring",
    questionVi: "Ban đầu Don nghĩ đề tài: A quá hẹp / B khó nghiên cứu / C nhàm",
    modelParaphraseEn: "perhaps there isn't enough to say about it, cos we put shoes in recycling bins … and that's about it",
    modelParaphraseVi: "perhaps there isn't enough to say about it, cos we put shoes in recycling bins … and that's about it",
    acceptedAnswers: ["A", "limited in scope", "isn't enough to say", "that's about it"],
    explanationEn: "A = too limited in scope. After reading, he is keen to research more — not hard or boring.",
    explanationVi: "A = phạm vi quá hẹp. Đọc xong anh muốn nghiên cứu thêm — không phải khó hay nhàm.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "They disagree about trainers: A popularity / B suitability for school / C how quickly they wear out",
    questionVi: "Bất đồng về trainers: A độ phổ biến / B phù hợp trường / C mau hỏng",
    modelParaphraseEn: "don't they look a bit casual for school uniform? I don't think they're right for that. Actually, I think some of them look quite smart on pupils",
    modelParaphraseVi: "don't they look a bit casual for school uniform? I don't think they're right for that. Actually, I think some of them look quite smart on pupils",
    acceptedAnswers: ["B", "school uniform", "suitable for school", "casual for school"],
    explanationEn: "B = school uniform. They agree trainers are popular; Don even calls them hard-wearing.",
    explanationVi: "B = đồng phục trường. Cả hai đồng ý trainers phổ biến; Don còn nói chúng bền.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Bella sometimes recycles shoes because: A they no longer fit / B she no longer likes them / C out of fashion",
    questionVi: "Bella tái chế giày vì: A không vừa / B không còn thích / C lỗi mốt",
    modelParaphraseEn: "perfectly good shoes, that haven't gone out of fashion and still fit, just because they don't look great on me any more",
    modelParaphraseVi: "perfectly good shoes, that haven't gone out of fashion and still fit, just because they don't look great on me any more",
    acceptedAnswers: ["B", "no longer likes them", "don't look great", "no longer likes how they look"],
    explanationEn: "B = she no longer likes how they look. They still fit and are not out of fashion.",
    explanationVi: "B = không còn thích vẻ ngoài. Giày vẫn vừa và chưa lỗi mốt.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "What confused Don? A sales have risen / B less footwear is recycled now / C people dispose of more",
    questionVi: "Điều gì làm Don bối rối? A doanh số tăng / B tái chế giảm / C người vứt nhiều hơn",
    modelParaphraseEn: "the amount of recycled footwear has fallen: it's 6 percent now compared to a previous level of 11 percent. That doesn't seem to make sense",
    modelParaphraseVi: "the amount of recycled footwear has fallen: it's 6 percent now compared to a previous level of 11 percent. That doesn't seem to make sense",
    acceptedAnswers: ["B", "less footwear is recycled", "has fallen", "6 percent"],
    explanationEn: "B = recycling has fallen (6% vs 11%). Rising sales did not surprise Bella.",
    explanationVi: "B = tỷ lệ tái chế giảm (6% so với 11%). Doanh số tăng không làm Bella ngạc nhiên.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "High-heeled shoes rejected because: E the shoes were too dirty",
    questionVi: "Giày cao gót bị từ chối vì: E quá bẩn",
    modelParaphraseEn: "the heels were too stained with mud and grass to re-sell them",
    modelParaphraseVi: "the heels were too stained with mud and grass to re-sell them",
    acceptedAnswers: ["E", "too dirty", "stained with mud", "mud and grass"],
    explanationEn: "E = too dirty (mud and grass on the heels), even though they looked barely worn.",
    explanationVi: "E = quá bẩn (bùn và cỏ trên gót), dù trông như mới đi một lần.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Ankle boots rejected because: B the colour of one shoe had faded",
    questionVi: "Boots cổ chân bị từ chối vì: B một chiếc phai màu",
    modelParaphraseEn: "One of the shoes was a much lighter shade than the other one – it had obviously been left in the sun",
    modelParaphraseVi: "One of the shoes was a much lighter shade than the other one – it had obviously been left in the sun",
    acceptedAnswers: ["B", "colour faded", "lighter shade", "left in the sun"],
    explanationEn: "B = one shoe had faded in the sun. Worn heels were mentioned but were not the problem.",
    explanationVi: "B = một chiếc phai nắng. Gót mòn được nhắc nhưng không phải vấn đề.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Baby shoes rejected because: A one shoe was missing",
    questionVi: "Giày em bé bị từ chối vì: A thiếu một chiếc",
    modelParaphraseEn: "You'd think it would have been easy to find the other, but it wasn't",
    modelParaphraseVi: "You'd think it would have been easy to find the other, but it wasn't",
    acceptedAnswers: ["A", "one shoe was missing", "find the other", "missing"],
    explanationEn: "A = one shoe missing. They were obviously new — that is a shame, not the rejection reason.",
    explanationVi: "A = thiếu một chiếc. Chúng trông mới — đáng tiếc, nhưng không phải lý do từ chối.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Trainers rejected because: C one shoe had a hole in it",
    questionVi: "Giày thể thao bị từ chối vì: C một chiếc có lỗ",
    modelParaphraseEn: "One of the soles was so worn under the foot that you could put your finger through it",
    modelParaphraseVi: "One of the soles was so worn under the foot that you could put your finger through it",
    acceptedAnswers: ["C", "hole", "finger through", "sole worn"],
    explanationEn: "C = a hole in the sole. They were not split (stitching broken is F, a distractor).",
    explanationVi: "C = lỗ ở đế. Không phải bị nứt chỉ (F là nhiễu).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Remanufacturing failed because: A unhygienic / B not enough good parts / C pairs were not completely alike",
    questionVi: "Dự án ghép giày thất bại vì: A mất vệ sinh / B thiếu phần tốt / C đôi không giống nhau",
    modelParaphraseEn: "people didn't refuse them for that reason … It was because the pairs of shoes weren't identical",
    modelParaphraseVi: "people didn't refuse them for that reason … It was because the pairs of shoes weren't identical",
    acceptedAnswers: ["C", "not identical", "weren't identical", "not completely alike"],
    explanationEn: "C = pairs were not identical. Germs were Bella's guess; Don says that was not why people refused.",
    explanationVi: "C = các đôi không giống hệt. Germs là đoán của Bella; Don nói không phải lý do từ chối.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "They agree they can present the topic: A from a new angle / B with images / C in a straightforward way",
    questionVi: "Họ đồng ý trình bày: A góc nhìn mới / B kèm hình / C theo cách thẳng",
    modelParaphraseEn: "we can show that by taking a very different approach to it",
    modelParaphraseVi: "we can show that by taking a very different approach to it",
    acceptedAnswers: ["A", "new angle", "different approach", "bigger picture"],
    explanationEn: "A = from a new angle / a very different approach — not just Bella's own recycling habits.",
    explanationVi: "A = góc nhìn mới / cách tiếp cận khác — không chỉ thói quen tái chế của Bella.",
  },
];
