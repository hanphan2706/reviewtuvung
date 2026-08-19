import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I kept getting too involved in the play"] },
    { id: "g2", answers: ["I ended up not taking notes"] },
    { id: "g3", answers: ["Do you mind if I check a few things with you"] },
    { id: "g4", answers: ["it's good to talk things through", "it is good to talk things through"] },
    { id: "g5", answers: ["I don't think we need to describe what happens", "I do not think we need to describe what happens"] },
    { id: "g6", answers: ["that isn't really relevant in a review", "that is not really relevant in a review"] },
    { id: "g7", answers: ["We're supposed to focus on", "We are supposed to focus on"] },
    { id: "g8", answers: ["We should say what made it a success or a failure"] },
    { id: "g9", answers: ["I think that's important", "I think that is important"] },
    { id: "g10", answers: ["That all sounds quite straightforward"] },
    { id: "g11", answers: ["I thought some things worked really well"] },
    { id: "g12", answers: ["I'd say that was probably the most memorable thing", "I would say that was probably the most memorable thing"] },
    { id: "g13", answers: ["I didn't dislike it", "I did not dislike it"] },
    { id: "g14", answers: ["That's a good point", "That is a good point"] },
    { id: "g15", answers: ["I think it worked well"] },
    { id: "g16", answers: ["that was a shame"] },
    { id: "g17", answers: ["It's made me realise how relevant the play still is", "It has made me realise how relevant the play still is", "It's made me realize how relevant the play still is"] },
    { id: "g18", answers: ["I expected to find it more challenging"] },
  ],
  lines: [
    {
      speaker: "ED",
      segments: [{ type: "text", text: "Did you make notes while you were watching the performances of Romeo and Juliet, Gemma?" }],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "Yes, I did. I found it quite hard though. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Me too. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". I wrote down my impressions when I got home. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "? In case I've missed anything. And I've also got some questions about our assignment." },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". I may have missed things too." },
      ],
    },
    {
      speaker: "ED",
      segments: [{ type: "text", text: "OK great. So first of all, I'm not sure how much information we should include in our reviews." }],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "Right. Well, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ". Especially as Romeo and Juliet is one of Shakespeare's most well-known plays." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Yeah, everyone knows the story. In an essay we'd focus on the poetry and Shakespeare's use of imagery etc., but " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " how effective this particular production is." },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "Mmm. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "And part of that means talking about the emotional impact the performance had on us. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "Yes. And we should definitely mention how well the director handled important bits of the play – like when Romeo climbs onto Juliet's balcony.",
        },
      ],
    },
    { speaker: "ED", segments: [{ type: "text", text: "And the fight between Mercutio and Tybalt." }] },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "Yes. It would also be interesting to mention the theatre space and how the director used it but I don't think we'll have space in 800 words.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "No. OK. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [{ type: "text", text: "So what about The Emporium Theatre's production of the play?" }],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: " but there were some problems too." },
      ],
    },
    { speaker: "ED", segments: [{ type: "text", text: "Yeah. What about the set, for example?" }] },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "I think it was visually really stunning. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " about this production." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "You're right. The set design was really amazing, but actually I have seen similar ideas used in other productions.",
        },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [{ type: "text", text: "What about the lighting? Some of the scenes were so dimly lit it was quite hard to see." }],
    },
    {
      speaker: "ED",
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". It helped to change the mood of the quieter scenes." },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "." }],
    },
    { speaker: "ED", segments: [{ type: "text", text: "What did you think of the costumes?" }] },
    {
      speaker: "GEMMA",
      segments: [{ type: "text", text: "I was a bit surprised by the contemporary dress, I must say." }],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Yeah – " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", but I had assumed it would be more conventional." },
      ],
    },
    { speaker: "GEMMA", segments: [{ type: "text", text: "Me too." }] },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "I liked the music at the beginning and I thought the musicians were brilliant, but I thought they were wasted because the music didn't have much impact in Acts 2 and 3.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        { type: "text", text: "Yes – " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "One problem with this production was that the actors didn't deliver the lines that well. They were speaking too fast.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "It was a problem I agree, but I thought it was because they weren't speaking loudly enough – especially at key points in the play.",
        },
      ],
    },
    { speaker: "GEMMA", segments: [{ type: "text", text: "I actually didn't have a problem with that." }] },
    {
      speaker: "ED",
      segments: [{ type: "text", text: "It's been an interesting experience watching different versions of Romeo and Juliet, hasn't it?" }],
    },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "Definitely. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "Right. I mean a lot's changed since Shakespeare's time, but in many ways nothing's changed. There are always disagreements and tension between teenagers and their parents.",
        },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "Yes, that's something all young people can relate to – more than the violence and the extreme emotions in the play.",
        },
      ],
    },
    { speaker: "ED", segments: [{ type: "text", text: "How did you find watching it in translation?" }] },
    {
      speaker: "GEMMA",
      segments: [
        { type: "text", text: "Really interesting. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", but I could follow the story pretty well." },
      ],
    },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "I stopped worrying about not being able to understand all the words and focused on the actors' expressions. The ending was pretty powerful.",
        },
      ],
    },
    { speaker: "GEMMA", segments: [{ type: "text", text: "Yes. That somehow intensified the emotion for me." }] },
    {
      speaker: "ED",
      segments: [{ type: "text", text: "Did you know Shakespeare's been translated into more languages than any other writer?" }],
    },
    { speaker: "GEMMA", segments: [{ type: "text", text: "What's the reason for his international appeal, do you think?" }] },
    {
      speaker: "ED",
      segments: [
        {
          type: "text",
          text: "I was reading that it's because his plays are about basic themes that people everywhere are familiar with.",
        },
      ],
    },
    {
      speaker: "GEMMA",
      segments: [
        {
          type: "text",
          text: "Yeah, and they can also be understood on different levels. The characters have such depth.",
        },
      ],
    },
    {
      speaker: "ED",
      segments: [{ type: "text", text: "Right – which allows directors to experiment and find new angles." }],
    },
    { speaker: "GEMMA", segments: [{ type: "text", text: "That's really important because …" }] },
  ],
};

export const CAM17_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO things to include in the review: D a personal reaction",
    questionVi: "Hai điều cần đưa vào review: D phản ứng cá nhân",
    modelParaphraseEn: "talking about the emotional impact the performance had on us. I think that's important",
    modelParaphraseVi: "talking about the emotional impact the performance had on us. I think that's important",
    acceptedAnswers: ["D", "a personal reaction", "emotional impact"],
    explanationEn: "D = a personal reaction (emotional impact). Not a plot summary – everyone knows the story.",
    explanationVi: "D = personal reaction (tác động cảm xúc). Không tóm tắt cốt truyện – ai cũng biết.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) E a reference to particular scenes",
    questionVi: "(cùng danh sách) E đề cập cảnh cụ thể",
    modelParaphraseEn: "how well the director handled important bits of the play – like when Romeo climbs onto Juliet's balcony. And the fight between Mercutio and Tybalt",
    modelParaphraseVi: "how well the director handled important bits of the play – like when Romeo climbs onto Juliet's balcony. And the fight between Mercutio and Tybalt",
    acceptedAnswers: ["E", "a reference to particular scenes", "important bits"],
    explanationEn: "E = particular scenes (balcony; Mercutio and Tybalt). No room for the theatre-space description; poetry belongs in an essay, not a review.",
    explanationVi: "E = cảnh cụ thể (ban công; Mercutio và Tybalt). Không đủ chỗ tả nhà hát; thơ/imagery là cho essay.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "the set — opinion A–G",
    questionVi: "the set — ý kiến A–G",
    modelParaphraseEn: "visually really stunning … the most memorable thing about this production. The set design was really amazing",
    modelParaphraseVi: "visually really stunning … the most memorable thing about this production. The set design was really amazing",
    acceptedAnswers: ["D", "a major strength", "stunning", "amazing"],
    explanationEn: "D = a major strength. Ed has seen similar ideas, so it is not original (B).",
    explanationVi: "D = a major strength. Ed đã thấy ý tương tự, nên không phải original (B).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "the lighting — opinion A–G",
    questionVi: "the lighting — ý kiến A–G",
    modelParaphraseEn: "I didn't dislike it. It helped to change the mood of the quieter scenes. That's a good point",
    modelParaphraseVi: "I didn't dislike it. It helped to change the mood of the quieter scenes. That's a good point",
    acceptedAnswers: ["C", "created the right atmosphere", "change the mood"],
    explanationEn: "C = created the right atmosphere. Gemma found it dim; they still agree it set the mood.",
    explanationVi: "C = created the right atmosphere. Gemma thấy tối; họ vẫn đồng ý tạo mood.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "the costume design — opinion A–G",
    questionVi: "the costume design — ý kiến A–G",
    modelParaphraseEn: "surprised by the contemporary dress … I had assumed it would be more conventional. Me too",
    modelParaphraseVi: "surprised by the contemporary dress … I had assumed it would be more conventional. Me too",
    acceptedAnswers: ["A", "expected this to be more traditional", "more conventional"],
    explanationEn: "A = both expected it to be more traditional. Contemporary dress worked, but that was not what they had assumed.",
    explanationVi: "A = cả hai nghĩ sẽ truyền thống hơn. Đồ hiện đại ổn, nhưng không phải điều họ đoán.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "the music — opinion A–G",
    questionVi: "the music — ý kiến A–G",
    modelParaphraseEn: "the musicians were brilliant, but … wasted because the music didn't have much impact in Acts 2 and 3. Yes – that was a shame",
    modelParaphraseVi: "the musicians were brilliant, but … wasted because the music didn't have much impact in Acts 2 and 3. Yes – that was a shame",
    acceptedAnswers: ["E", "disappointed", "didn't have much impact", "a shame"],
    explanationEn: "E = both disappointed. Opening music was fine; later acts had little impact.",
    explanationVi: "E = both disappointed. Nhạc đầu ổn; các màn sau ít tác động.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "the actors' delivery — opinion A–G",
    questionVi: "the actors' delivery — ý kiến A–G",
    modelParaphraseEn: "They were speaking too fast. … I thought it was because they weren't speaking loudly enough",
    modelParaphraseVi: "They were speaking too fast. … I thought it was because they weren't speaking loudly enough",
    acceptedAnswers: ["F", "disagree about why this was an issue", "too fast", "not loudly enough"],
    explanationEn: "F = they disagree about why it was a problem (speed vs volume). Gemma had no issue with volume.",
    explanationVi: "F = không đồng ý vì sao là vấn đề (nhanh vs nhỏ tiếng). Gemma không thấy vấn đề âm lượng.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Still relevant because: A conflict starts easily / B family problems / C teaches about relationships",
    questionVi: "Vẫn hợp thời vì: A xung đột dễ nảy / B vấn đề gia đình / C dạy về quan hệ",
    modelParaphraseEn: "disagreements and tension between teenagers and their parents … something all young people can relate to",
    modelParaphraseVi: "disagreements and tension between teenagers and their parents … something all young people can relate to",
    acceptedAnswers: ["B", "problems that families experience", "teenagers and their parents"],
    explanationEn: "B = family problems. They mention this more than violence or extreme emotions.",
    explanationVi: "B = vấn đề gia đình. Họ nhấn mạnh hơn bạo lực hay cảm xúc cực đoan.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Watching in another language: A frustrating / B demanding / C moving",
    questionVi: "Xem bản dịch: A bực / B khó / C cảm động",
    modelParaphraseEn: "The ending was pretty powerful. That somehow intensified the emotion for me",
    modelParaphraseVi: "The ending was pretty powerful. That somehow intensified the emotion for me",
    acceptedAnswers: ["C", "moving", "intensified the emotion", "powerful"],
    explanationEn: "C = moving. She expected it to be more challenging but could follow; not frustrating.",
    explanationVi: "C = moving. Cô tưởng sẽ khó hơn nhưng theo được; không phải frustrating.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "International appeal: A exciting stories / B recognisable characters / C interpreted in many ways",
    questionVi: "Sức hút quốc tế: A cốt truyện hấp dẫn / B nhân vật quen / C diễn giải nhiều cách",
    modelParaphraseEn: "they can also be understood on different levels … which allows directors to experiment and find new angles",
    modelParaphraseVi: "they can also be understood on different levels … which allows directors to experiment and find new angles",
    acceptedAnswers: ["C", "interpreted in many ways", "different levels", "new angles"],
    explanationEn: "C = interpreted in many ways. Basic themes are mentioned, but they settle on levels/angles.",
    explanationVi: "C = interpreted in many ways. Có nhắc theme cơ bản, nhưng họ chốt ở nhiều tầng/góc.",
  },
];
