import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["How are you getting on with"] },
    { id: "g2", answers: ["I hadn't realised that children benefit in so many ways", "I had not realised that children benefit in so many ways"] },
    { id: "g3", answers: ["That seems pretty obvious when you think about it"] },
    { id: "g4", answers: ["What's less obvious is how it helps", "What is less obvious is how it helps"] },
    { id: "g5", answers: ["that aspect of handwriting had never occurred to me before"] },
    { id: "g6", answers: ["I'm not sure I understand how it improves", "I am not sure I understand how it improves"] },
    { id: "g7", answers: ["as I'd always assumed", "as I had always assumed"] },
    { id: "g8", answers: ["It's good there are lots of things you can do in the classroom", "It is good there are lots of things you can do in the classroom"] },
    { id: "g9", answers: ["It takes a lot of patience"] },
    { id: "g10", answers: ["That seems like a really simple solution"] },
    { id: "g11", answers: ["I'm not sure there's much you can do about", "I am not sure there is much you can do about", "I'm not sure there is much you can do about"] },
    { id: "g12", answers: ["that's more important for legibility than", "that is more important for legibility than"] },
    { id: "g13", answers: ["They often really struggle with handwriting"] },
    { id: "g14", answers: ["But I read that developing fluency isn't any faster", "But I read that developing fluency is not any faster"] },
    { id: "g15", answers: ["Teachers' attitudes have changed"] },
    { id: "g16", answers: ["I was right to worry"] },
    { id: "g17", answers: ["It's a basic life skill", "It is a basic life skill"] },
    { id: "g18", answers: ["I think you can put that down to lack of practice"] },
  ],
  lines: [
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the assignment on handwriting?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Not too bad. You know, " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " from learning to write. It's such an important skill, and yet most people think handwriting is less important than in the past, because people hardly ever write by hand these days.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Yes, and all the evidence suggests children should learn to write by hand before they learn to type, not least because it helps their memory.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "That's right. The physical act of writing helps children to remember letters. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: " develop their concentration. They have to sit still and focus on one thing." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yeah, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Same here. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " children's imagination, though." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well, there was that study which showed that primary-age children generated more ideas when they were writing by hand than using a keyboard. I would have guessed that would be the case.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Hmm, yeah, I never associated spatial awareness with handwriting either. I thought spatial awareness was more to do with knowing where you are in relation to objects or other people.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I thought that too. But good spatial awareness is essential for writing because you have to space words correctly. It's not just fine motor skills that improve through writing, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Handwriting is so much harder for children with dyspraxia, who have problems coordinating movement. " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " to help them. They need so much more support with letter formation. You need to play lots of games to help them distinguish letter shapes. " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah, I like the idea of using one of those pens that lights up if you press too hard. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes, absolutely. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " children with dyspraxia writing very slowly. It's more important to focus on accuracy and as they get more confident, I think they eventually speed up.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "One quite simple thing you can do is to use grid paper. So they write each letter in a box and that trains them to space the letters correctly.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Indeed, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " trying to get them to write in a straight line." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "For some children, it might be better to teach them to write on a laptop rather than by hand, like children with dyslexia. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " and some just give up." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yeah, it's not as frustrating for them if they get things wrong. On a keyboard, they can be more willing to have a go. " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "That's right. Did you read that article on the benefits of teaching print rather than cursive handwriting, where the letters are joined up?",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes. Well, in the past, cursive writing was certainly considered more stylish and educated, but not anymore. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " because it's been proved that cursive is more difficult to learn, especially for children with learning difficulties who find joining up letters really challenging.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "I agree. I was always worried that my poor handwriting affected my exam results, and now research shows that " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". I'm sure a lot of students think it's unfair that they're being judged on their handwriting, not just their knowledge.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Marks are definitely affected if examiners can't read the script. That is why it has always been so important to teach children to write legibly. Do you think the role of handwriting will change in the future?",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "I can't see that changing much. Touch typing still isn't taught in most schools, which is a shame. But maybe that won't be necessary in the future, because people will also be able to write by hand on digital devices. Anyway, teachers understand the value of handwriting. " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "True. However, the fact is that people are writing by hand less and less and relying on digital devices. That does cause some problems.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "You mean like note-taking. There are lots of apps for that." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "And for reading historical documents, apparently. But my mum is shocked by my awful spelling and the fact that my punctuation is really inconsistent. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "I expect so. Personally, I miss writing by hand. I hardly ever write anything now. I remember my grandparents had such beautiful handwriting and it was so individual. Nobody I know would be able to identify my handwriting now. It's a shame.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "I know. I feel the same way. I used to write a diary by hand and now I do that digitally. It just seems less effort to do it that way. So it's not just a problem…",
        },
      ],
    },
  ],
};

export const CAM20_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Surprising benefits: C improved concentration",
    questionVi: "Lợi ích bất ngờ: C tập trung tốt hơn",
    modelParaphraseEn: "What's less obvious is how it helps develop their concentration … that aspect of handwriting had never occurred to me before. Same here",
    modelParaphraseVi: "What's less obvious is how it helps develop their concentration … that aspect of handwriting had never occurred to me before. Same here",
    acceptedAnswers: ["concentration", "never occurred to me", "C"],
    explanationEn: "C = both are surprised by concentration. Memory and fine motor skills seemed obvious / assumed — not surprising (B, A).",
    explanationVi: "C = cả hai ngạc nhiên về concentration. Memory và vận động tinh thì hiển nhiên / đã giả định — không bất ngờ (B, A).",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Surprising benefits: E improved spatial awareness",
    questionVi: "Lợi ích bất ngờ: E nhận thức không gian tốt hơn",
    modelParaphraseEn: "I never associated spatial awareness with handwriting either. I thought that too",
    modelParaphraseVi: "I never associated spatial awareness with handwriting either. I thought that too",
    acceptedAnswers: ["spatial awareness", "never associated", "E"],
    explanationEn: "E = both never linked spatial awareness with writing. Imagination had a study she would have guessed — not a shared surprise (D).",
    explanationVi: "E = cả hai chưa từng gắn spatial awareness với viết. Imagination có nghiên cứu cô vốn đoán được — không phải bất ngờ chung (D).",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Dyspraxia — easiest to correct: A not spacing letters correctly",
    questionVi: "Dyspraxia — dễ sửa nhất: A không cách chữ đúng",
    modelParaphraseEn: "use grid paper … that trains them to space the letters correctly. Indeed, that's more important for legibility than trying to get them to write in a straight line",
    modelParaphraseVi: "use grid paper … that trains them to space the letters correctly. Indeed, that's more important for legibility than trying to get them to write in a straight line",
    acceptedAnswers: ["grid paper", "space the letters", "A"],
    explanationEn: "A = spacing is trainable with grid paper. A straight line is less important (not B). Slow writing is not easily fixed (not E). Letter-shape games take patience (not D as 'easiest').",
    explanationVi: "A = khoảng cách chữ luyện được bằng giấy ô. Viết thẳng hàng kém quan trọng hơn (không phải B). Viết chậm khó sửa (không phải E). Phân biệt hình chữ cần kiên nhẫn (không phải D 'dễ nhất').",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Dyspraxia — easiest to correct: C applying too much pressure when writing",
    questionVi: "Dyspraxia — dễ sửa nhất: C viết quá mạnh tay",
    modelParaphraseEn: "pens that lights up if you press too hard. That seems like a really simple solution",
    modelParaphraseVi: "pens that lights up if you press too hard. That seems like a really simple solution",
    acceptedAnswers: ["press too hard", "simple solution", "C"],
    explanationEn: "C = a light-up pen is a simple fix for too much pressure.",
    explanationVi: "C = bút sáng khi ấn mạnh là cách sửa đơn giản cho viết quá mạnh tay.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Laptops for dyslexia: C Children react more positively if they make a mistake",
    questionVi: "Laptop cho dyslexia: C Trẻ phản ứng tích cực hơn khi gõ sai",
    modelParaphraseEn: "it's not as frustrating for them if they get things wrong. On a keyboard, they can be more willing to have a go",
    modelParaphraseVi: "it's not as frustrating for them if they get things wrong. On a keyboard, they can be more willing to have a go",
    acceptedAnswers: ["not as frustrating", "more willing to have a go", "C"],
    explanationEn: "C = mistakes feel less frustrating, so they try. Fluency is not faster (not B). Motivation is better, not lacking (not A).",
    explanationVi: "C = sai thì ít nản nên trẻ dám thử. Fluency không nhanh hơn (không phải B). Động lực tốt hơn, không thiếu (không phải A).",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Cursive vs print: A cursive writing disadvantages a certain group of children",
    questionVi: "Chữ liền nét vs in: A chữ liền nét bất lợi cho một nhóm trẻ",
    modelParaphraseEn: "cursive is more difficult to learn, especially for children with learning difficulties who find joining up letters really challenging",
    modelParaphraseVi: "cursive is more difficult to learn, especially for children with learning difficulties who find joining up letters really challenging",
    acceptedAnswers: ["learning difficulties", "joining up letters", "A"],
    explanationEn: "A = cursive is harder for children with learning difficulties. It is no longer seen as more stylish/educated; teachers have changed (not C).",
    explanationVi: "A = chữ liền nét khó hơn với trẻ khó học. Không còn bị coi là sang hay học thức; giáo viên đã đổi thái độ (không phải C).",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Exam impact: A There is evidence that grades are affected by poor handwriting",
    questionVi: "Ảnh hưởng thi: A Có bằng chứng điểm bị ảnh hưởng bởi chữ xấu",
    modelParaphraseEn: "research shows that I was right to worry. Marks are definitely affected if examiners can't read the script",
    modelParaphraseVi: "research shows that I was right to worry. Marks are definitely affected if examiners can't read the script",
    acceptedAnswers: ["right to worry", "Marks are definitely affected", "can't read the script", "A"],
    explanationEn: "A = research plus 'marks are definitely affected' if the script is unreadable. They still stress teaching legible writing — not that neatness matters less (B).",
    explanationVi: "A = nghiên cứu và 'điểm chắc chắn bị ảnh hưởng' nếu giám khảo không đọc được. Họ vẫn nhấn mạnh dạy viết rõ — không phải neatness kém quan trọng hơn (B).",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Future of handwriting: B Children will continue to learn to write by hand",
    questionVi: "Tương lai viết tay: B Trẻ vẫn sẽ học viết tay",
    modelParaphraseEn: "I can't see that changing much … people will also be able to write by hand on digital devices. Anyway, teachers understand the value of handwriting. It's a basic life skill",
    modelParaphraseVi: "I can't see that changing much … people will also be able to write by hand on digital devices. Anyway, teachers understand the value of handwriting. It's a basic life skill",
    acceptedAnswers: ["can't see that changing", "basic life skill", "B"],
    explanationEn: "B = handwriting will still be taught. Touch typing is not taught first (A). Handwriting on devices is presented as useful, not disliked (C).",
    explanationVi: "B = vẫn dạy viết tay. Touch typing không được dạy trước (A). Viết tay trên thiết bị được nói là hữu ích, không phải bị ghét (C).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Digital devices: B spell and punctuate",
    questionVi: "Thiết bị số: B chính tả và dấu câu",
    modelParaphraseEn: "my mum is shocked by my awful spelling and the fact that my punctuation is really inconsistent",
    modelParaphraseVi: "my mum is shocked by my awful spelling and the fact that my punctuation is really inconsistent",
    acceptedAnswers: ["spelling", "punctuation", "B"],
    explanationEn: "B = spelling and punctuation. Note-taking and old documents have apps — those are not her worry (A, C).",
    explanationVi: "B = spelling và punctuation. Ghi chép và tài liệu cổ có app — không phải lo của cô (A, C).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Their own handwriting: C regretful that they have lost the habit",
    questionVi: "Chữ của họ: C tiếc vì đã mất thói quen",
    modelParaphraseEn: "I miss writing by hand. I hardly ever write anything now … Nobody I know would be able to identify my handwriting now. It's a shame. I know. I feel the same way",
    modelParaphraseVi: "I miss writing by hand. I hardly ever write anything now … Nobody I know would be able to identify my handwriting now. It's a shame. I know. I feel the same way",
    acceptedAnswers: ["miss writing by hand", "hardly ever write", "It's a shame", "C"],
    explanationEn: "C = they miss handwriting and feel it is a shame they lost the habit. Speed and embarrassment from comments are not what they say (A, B).",
    explanationVi: "C = họ nhớ viết tay và thấy tiếc vì mất thói quen. Không nói về tốc độ hay xấu hổ vì bị nhận xét (A, B).",
  },
];
