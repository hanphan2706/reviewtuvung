import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T4_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["talk about the course"] },
    {
      id: "g2",
      answers: ["doing it next year"],
    },
    {
      id: "g3",
      answers: ["find out more"],
    },
    {
      id: "g4",
      answers: [
        "It's divided into six modules",
        "It is divided into six modules",
      ],
    },
    { id: "g5", answers: ["take all of them"] },
    {
      id: "g6",
      answers: ["just entertain children"],
    },
    {
      id: "g7",
      answers: [
        "What's fascinating is that",
        "What is fascinating is that",
      ],
    },
    { id: "g8", answers: ["I see what you mean"] },
    { id: "g9", answers: ["significant effect on children"] },
    { id: "g10", answers: ["Is that covered in the course"] },
    {
      id: "g11",
      answers: ["central to the story"],
    },
    { id: "g12", answers: ["vividly in my mind"] },
    {
      id: "g13",
      answers: [
        "I'm not convinced of their value",
        "I am not convinced of their value",
      ],
    },
    {
      id: "g14",
      answers: ["use your imagination"],
    },
    { id: "g15", answers: ["children's stories"] },
    {
      id: "g16",
      answers: ["late seventeenth century"],
    },
    {
      id: "g17",
      answers: [
        "favourite children's story",
        "favorite children's story",
      ],
    },
    {
      id: "g18",
      answers: ["it's been very successful", "it has been very successful"],
    },
  ],
  lines: [
    {
      speaker: "TREVOR",
      segments: [
        { type: "text", text: "You said you wanted to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " I'm taking." },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        { type: "text", text: "That's right. I'm thinking of " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", but I'd like to " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " about it first." },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        { type: "text", text: "OK. Well, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ", and you have to " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "One of the most interesting ones, for me at least, was about the purpose of children's literature.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        { type: "text", text: "You mean, whether it should " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " or should be educational." },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "Right, and whether the teaching should be factual – giving them information about the world – or ethical, teaching them values.",
        },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " the writer isn't necessarily conscious of the message they're conveying. For instance, a story might show a child who has a problem as a result of not doing what an adult has told them to do, implying that children should always obey adults.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [{ type: "gap", gapId: "g8" }, { type: "text", text: "." }],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "That module made me realise how important stories are – they can have a ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " as they grow up." },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "Actually, it inspired me to have a go at it myself, just for my own interest. I know I can't compete with the really popular stories, like the Harry Potter books – they're very good, and even young kids like my seven-year-old niece love reading them.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        { type: "text", text: "Mm. I'm very interested in illustrations in stories. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        { type: "text", text: "Yes, there's a module on pictures, and how they're sometimes " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "That's good. I remember some frightening ones I saw as a child and I can still see them ",
        },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", years later! Pictures can be so powerful, just as powerful as words. I've always enjoyed drawing, so that's the field I want to go into when I finish the course. I bet that module will be really helpful.",
        },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        { type: "text", text: "I'm sure it will. We also studied comics in that module, but " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", not compared with books. One of the great things about words is that you " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", but with a comic you don't have to." },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "But children are so used to visual input – on TV, video games, and so on. There are plenty of kids who wouldn't even try to read a book, so I think comics can serve a really useful purpose.",
        },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "You mean, it's better to read a comic than not to read at all? Yes, I suppose you're right. I just think it's sad when children don't read books.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "What about books for girls and books for boys? Does the course go into that?",
        },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "Yes, there's a module on it. For years, lots of stories, in English, at least, assumed that boys went out and did adventurous things and girls stayed at home and played with dolls. I was amazed how many books were targeted at just one sex or the other. Of course this reflects society as it is when the books are written.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [{ type: "text", text: "That's true. So it sounds as though you think it's a good course." }],
    },
    { speaker: "TREVOR", segments: [{ type: "text", text: "Definitely." }] },
    {
      speaker: "TREVOR",
      segments: [
        { type: "text", text: "Have you been reading lots of " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", to help you decide whether to take the course?" },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        { type: "text", text: "Yeah. I've gone as far back as the " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", though I know there were earlier children's stories." },
      ],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "So does that mean you've read Perrault's fairy tales? Cinderella, The Sleeping Beauty, and so on.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "Yes. They must be important, because no stories of that type had been written before, they were the first. Then there's The Swiss Family Robinson.",
        },
      ],
    },
    { speaker: "TREVOR", segments: [{ type: "text", text: "I haven't read that." }] },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "The English name makes it sound as though Robinson is the family's surname, but a more accurate translation would be The Swiss Robinsons, because it's about a Swiss family who are shipwrecked, like Robinson Crusoe in the novel of a century earlier.",
        },
      ],
    },
    { speaker: "TREVOR", segments: [{ type: "text", text: "Well I never knew that!" }] },
    {
      speaker: "STEPHANIE",
      segments: [{ type: "text", text: "Have you read Hoffmann's The Nutcracker and the Mouse King?" }],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "Wasn't that the basis for Tchaikovsky's ballet The Nutcracker?",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [{ type: "text", text: "That's right. It has some quite bizarre elements." }],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "I hope you've read Oscar Wilde's The Happy Prince. It's probably my ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " of all time." },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "Mine too! And it's so surprising, because Wilde is best known for his plays, and most of them are very witty, but The Happy Prince is really moving. I struggled with Tolkien's The Lord of the Rings – they're long books, and I gave up after one.",
        },
      ],
    },
    { speaker: "TREVOR", segments: [{ type: "text", text: "It's extremely popular, though." }] },
    {
      speaker: "STEPHANIE",
      segments: [
        {
          type: "text",
          text: "Yeah, but whereas something like The Happy Prince just carried me along with it, The Lord of the Rings took more effort than I was prepared to give it.",
        },
      ],
    },
    { speaker: "TREVOR", segments: [{ type: "text", text: "I didn't find that – I love it." }] },
    {
      speaker: "STEPHANIE",
      segments: [{ type: "text", text: "Another one I've read is War Horse." }],
    },
    {
      speaker: "TREVOR",
      segments: [
        {
          type: "text",
          text: "Oh yes. It's about the First World War, isn't it? Hardly what you'd expect for a children's story.",
        },
      ],
    },
    {
      speaker: "STEPHANIE",
      segments: [
        { type: "text", text: "Exactly, but " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ". Have you read any …" },
      ],
    },
  ],
};

export const CAM14_T4_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn:
      "What does Trevor find interesting about the purpose of children's literature? A authors may not realise what values they're teaching / B entertaining and educational at once / C adults expect children to imitate characters",
    questionVi: "Trevor thấy thú vị điều gì về mục đích văn học thiếu nhi?",
    modelParaphraseEn: "the writer isn't necessarily conscious of the message they're conveying",
    modelParaphraseVi: "the writer isn't necessarily conscious of the message they're conveying",
    acceptedAnswers: ["A", "authors may not realise", "isn't necessarily conscious"],
    explanationEn: "A = authors may not realise the values they teach (not necessarily conscious of the message). Entertaining vs educational is Stephanie's prompt, not what fascinates him.",
    explanationVi: "A = tác giả có thể không nhận ra giá trị mình dạy (không nhất thiết ý thức message). Entertaining vs educational là gợi ý của Stephanie, không phải điều khiến Trevor fascinate.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn:
      "The purpose module made Trevor A analyse stories his niece reads / B wonder if popularity = quality / C decide to start writing children's stories",
    questionVi: "Module mục đích khiến Trevor…",
    modelParaphraseEn: "it inspired me to have a go at it myself, just for my own interest",
    modelParaphraseVi: "it inspired me to have a go at it myself, just for my own interest",
    acceptedAnswers: ["C", "start writing", "have a go at it myself"],
    explanationEn: "C = decide to start writing. Harry Potter / his niece are examples of popular books, not what the module made him do.",
    explanationVi: "C = quyết định bắt đầu viết. Harry Potter / cháu gái chỉ là ví dụ sách nổi tiếng, không phải điều module khiến anh làm.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn:
      "Stephanie is interested in the Pictures module because A she intends to become an illustrator / B she remembers beautiful childhood illustrations / C illustrations matter more than words",
    questionVi: "Stephanie thích Pictures module vì…",
    modelParaphraseEn: "that's the field I want to go into when I finish the course",
    modelParaphraseVi: "that's the field I want to go into when I finish the course",
    acceptedAnswers: ["A", "become an illustrator", "field I want to go into"],
    explanationEn: "A = she intends to become an illustrator (drawing is the field she wants). Childhood pictures she remembers were frightening, not beautiful; she says pictures can be as powerful as words, not more important.",
    explanationVi: "A = cô muốn làm illustrator. Tranh hồi nhỏ cô nhớ là frightening, không phải beautiful; cô nói tranh mạnh ngang words, không phải quan trọng hơn.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Trevor and Stephanie agree that comics A are inferior to books / B have the potential for being useful / C discourage imagination",
    questionVi: "Trevor và Stephanie đồng ý comics…",
    modelParaphraseEn: "comics can serve a really useful purpose … it's better to read a comic than not to read at all? Yes, I suppose you're right",
    modelParaphraseVi: "comics can serve a really useful purpose … it's better to read a comic than not to read at all? Yes, I suppose you're right",
    acceptedAnswers: ["B", "potential for being useful", "useful purpose"],
    explanationEn: "B = useful potential. Trevor first doubts comics vs books, then agrees with Stephanie that reading a comic is better than not reading.",
    explanationVi: "B = có tiềm năng hữu ích. Trevor ban đầu nghi ngờ comics so với sách, rồi đồng ý với Stephanie rằng đọc comic còn hơn không đọc.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn:
      "Books aimed at only boys or only girls: Trevor was surprised A how long the distinction went unquestioned / B how few books were aimed at both / C how many children enjoyed the opposite sex's books",
    questionVi: "Sách chỉ cho trai hoặc gái: Trevor ngạc nhiên…",
    modelParaphraseEn: "I was amazed how many books were targeted at just one sex or the other",
    modelParaphraseVi: "I was amazed how many books were targeted at just one sex or the other",
    acceptedAnswers: ["B", "how few books were aimed at both", "targeted at just one sex"],
    explanationEn: "B = how few were aimed at both (amazed how many targeted just one sex). He does not mention how long it went unquestioned, or children enjoying the opposite sex's books.",
    explanationVi: "B = rất ít sách nhắm cả hai (ngạc nhiên vì nhiều sách chỉ nhắm một giới). Không nói distinction tồn tại bao lâu, cũng không nói trẻ thích sách giới kia.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Perrault's fairy tales — A many languages / B hard to read / C inspired other art / D more popular than author's other works / E original title refers to another book / F started a new genre / G unlikely topic",
    questionVi: "Perrault's fairy tales — F started a new genre",
    modelParaphraseEn: "no stories of that type had been written before, they were the first",
    modelParaphraseVi: "no stories of that type had been written before, they were the first",
    acceptedAnswers: ["F", "started a new genre", "they were the first"],
    explanationEn: "F = started a new genre (first stories of that type). Cinderella / Sleeping Beauty are examples, not the comment.",
    explanationVi: "F = mở ra thể loại mới (câu chuyện kiểu đó đầu tiên). Cinderella / Sleeping Beauty chỉ là ví dụ.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "The Swiss Family Robinson — comment",
    questionVi: "The Swiss Family Robinson — nhận xét",
    modelParaphraseEn: "a more accurate translation would be The Swiss Robinsons … like Robinson Crusoe in the novel of a century earlier",
    modelParaphraseVi: "a more accurate translation would be The Swiss Robinsons … like Robinson Crusoe in the novel of a century earlier",
    acceptedAnswers: ["E", "original title refers to another book", "Robinson Crusoe"],
    explanationEn: "E = original title refers to another book (Robinson Crusoe). Robinson is not the family's surname.",
    explanationVi: "E = tựa gốc ám chỉ sách khác (Robinson Crusoe). Robinson không phải họ của gia đình.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "The Nutcracker and the Mouse King — comment",
    questionVi: "The Nutcracker and the Mouse King — nhận xét",
    modelParaphraseEn: "Wasn't that the basis for Tchaikovsky's ballet The Nutcracker?",
    modelParaphraseVi: "Wasn't that the basis for Tchaikovsky's ballet The Nutcracker?",
    acceptedAnswers: ["C", "inspired a work in a different area of art", "Tchaikovsky's ballet"],
    explanationEn: "C = inspired a work in another art form (Tchaikovsky's ballet). Bizarre elements are extra colour, not the matching comment.",
    explanationVi: "C = gợi cảm hứng cho tác phẩm nghệ thuật khác (ballet Tchaikovsky). Bizarre elements chỉ là chi tiết phụ.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "The Lord of the Rings — comment",
    questionVi: "The Lord of the Rings — nhận xét",
    modelParaphraseEn: "I struggled with Tolkien's The Lord of the Rings – they're long books, and I gave up after one",
    modelParaphraseVi: "I struggled with Tolkien's The Lord of the Rings – they're long books, and I gave up after one",
    acceptedAnswers: ["B", "hard to read", "struggled", "long books"],
    explanationEn: "B = hard to read (struggled; took more effort than she was prepared to give). Popularity is Trevor's point, not the comment she makes.",
    explanationVi: "B = khó đọc (struggled; tốn sức hơn cô muốn). Popularity là ý Trevor, không phải comment của Stephanie.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "War Horse — comment",
    questionVi: "War Horse — nhận xét",
    modelParaphraseEn: "It's about the First World War … Hardly what you'd expect for a children's story",
    modelParaphraseVi: "It's about the First World War … Hardly what you'd expect for a children's story",
    acceptedAnswers: ["G", "unlikely topic", "Hardly what you'd expect"],
    explanationEn: "G = unlikely topic (First World War is hardly what you'd expect for a children's story). Success is mentioned after, not the matching comment.",
    explanationVi: "G = chủ đề khó ngờ (World War I khó coi là chuyện thiếu nhi). Success được nhắc sau, không phải comment khớp.",
  },
];
