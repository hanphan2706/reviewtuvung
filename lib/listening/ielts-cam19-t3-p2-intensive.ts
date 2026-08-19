import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["is coming up again soon"] },
    { id: "g2", answers: ["here to tell us all about it"] },
    { id: "g3", answers: ["what we can expect this year"] },
    { id: "g4", answers: ["as usual we've got", "as usual we have got"] },
    { id: "g5", answers: ["Just to give you an idea of"] },
    { id: "g6", answers: ["first of all"] },
    { id: "g7", answers: ["This is a chance for"] },
    { id: "g8", answers: ["led by the well-known illustrator"] },
    { id: "g9", answers: ["as many of you will know"] },
    { id: "g10", answers: ["This is bound to be very popular"] },
    { id: "g11", answers: ["please book as soon as possible"] },
    { id: "g12", answers: ["That all sounds really interesting"] },
    { id: "g13", answers: ["I'm just wondering if", "I am just wondering if"] },
    { id: "g14", answers: ["It's hard to choose", "It is hard to choose"] },
    { id: "g15", answers: ["is definitely worth mentioning"] },
    { id: "g16", answers: ["which is really impressive"] },
    { id: "g17", answers: ["this is something I get asked about a lot"] },
    { id: "g18", answers: ["I think that's really useful", "I think that is really useful"] },
  ],
  lines: [
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "The children's book festival " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " and " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " is the festival's organiser, Jenny Morgan. So tell us " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", Jenny." },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " five days of action-packed exciting events for children, with writers coming from all over the country getting involved.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: " what's on offer in the workshops, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", there's a very special event called Superheroes. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " deaf children to share their reading experiences with author Madeleine Gordon, who is herself hearing impaired.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "text", text: "'Just do it' is a practical workshop " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " Mark Keane. He'll take participants on a magical journey to faraway lands with an opportunity for aspiring actors to do some role play.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        {
          type: "text",
          text: "'Count on me' is an inspiring and entertaining look at the issues of friendship for 13–14-year-olds. It looks at some of the friendships described in popular books and asks participants to compare these with their own experiences.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        {
          type: "text",
          text: "'Speak up' is part of a series of workshops on the subject of mental health. This is a creative writing workshop encouraging children to describe situations where young people experience loneliness. A recent survey revealed that children can be lonely even when they're at home with their families.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "text", text: "'Jump for joy', " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", is the heart-warming, best-selling story by Nina Karan about a young girl's trip to visit her relatives in India. It recently received the gold medal at the Waterford Awards. Nina will get children to celebrate the word 'joy' by writing a poem.",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        {
          type: "text",
          text: "'Sticks and stones' is the beautifully illustrated picture book for young readers about a community who organise an African-Caribbean festival to help local children learn about their Jamaican roots. This will be a musical event where children will have the chance to play steel drums. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", so " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "Thanks Jenny. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " you have a favourite book you could recommend for our readers?" },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", but Alive and Kicking " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". You won't have heard of the writer as it's her first book – " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". It's basically the teenage diary of a boy from Somalia who comes to live in the UK. It deals with the serious issue of immigration and all the challenges the boy has to face at school and with the language barrier, etc. Usually, books like this are quite sad, but this one actually made me cry with laughter. On each page, there are simple but hilarious black and white stick drawings of the boy with his friends and teachers. At the end of each diary entry, there are new English words the boy learns each day, which may help develop some children's vocabulary.",
        },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        {
          type: "text",
          text: "I think my kids would enjoy that. What about any advice for parents on how to encourage their children to read more?",
        },
      ],
    },
    {
      speaker: "JENNY",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". There are so many distractions for kids these days that it can be hard to find time for reading. One thing I'd say is to make time to sit down with your child and share books with them. A lot of parents give up reading aloud to their children as soon as they learn to read independently, but this is a mistake. It's good to read more advanced books to them as it helps to develop their vocabulary. If you don't have time for this, then let them listen to audio books. Often, they'll want to read books they've listened to for themselves. I think it's a good idea to make a mental note of the type of books your child is reading – often they just read the same genre all the time, which can get a bit boring. You can introduce new authors and genres to them. Librarians should be able to help you with this.",
        },
      ],
    },
    {
      speaker: "PRESENTER",
      segments: [
        { type: "text", text: "Well Jenny, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "…" },
      ],
    },
  ],
};

export const CAM19_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Superheroes — C is aimed at children with a disability",
    questionVi: "Superheroes — C dành cho trẻ khuyết tật",
    modelParaphraseEn: "a chance for deaf children to share their reading experiences with author Madeleine Gordon, who is herself hearing impaired",
    modelParaphraseVi: "a chance for deaf children to share their reading experiences with author Madeleine Gordon, who is herself hearing impaired",
    acceptedAnswers: ["deaf children", "hearing impaired", "disability"],
    explanationEn: "C = for children with a disability (deaf / hearing impaired). Not a drama or painting workshop.",
    explanationVi: "C = dành cho trẻ khuyết tật (khiếm thính). Không phải kịch hay vẽ.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Just do it — D involves a drama activity",
    questionVi: "Just do it — D có hoạt động kịch",
    modelParaphraseEn: "an opportunity for aspiring actors to do some role play",
    modelParaphraseVi: "an opportunity for aspiring actors to do some role play",
    acceptedAnswers: ["role play", "aspiring actors", "drama"],
    explanationEn: "D = role play / drama. Mark Keane is an illustrator, but the activity is acting, not painting.",
    explanationVi: "D = nhập vai / kịch. Mark Keane là họa sĩ minh họa, nhưng hoạt động là diễn, không phải vẽ.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Count on me — F is aimed at a specific age group",
    questionVi: "Count on me — F dành cho một nhóm tuổi cụ thể",
    modelParaphraseEn: "an inspiring and entertaining look at the issues of friendship for 13–14-year-olds",
    modelParaphraseVi: "an inspiring and entertaining look at the issues of friendship for 13–14-year-olds",
    acceptedAnswers: ["13–14-year-olds", "13-14-year-olds", "specific age group"],
    explanationEn: "F = a named age group (13–14). Friendship is the theme, but the matching key is the age.",
    explanationVi: "F = nhóm tuổi cụ thể (13–14). Chủ đề là tình bạn, nhưng đáp án matching là độ tuổi.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Speak up — G explores an unhappy feeling",
    questionVi: "Speak up — G khám phá một cảm xúc buồn",
    modelParaphraseEn: "describe situations where young people experience loneliness – children can be lonely even at home",
    modelParaphraseVi: "describe situations where young people experience loneliness – children can be lonely even at home",
    acceptedAnswers: ["loneliness", "lonely", "unhappy feeling"],
    explanationEn: "G = loneliness (an unhappy feeling). Mental-health writing, not a new-relationships focus.",
    explanationVi: "G = cô đơn (cảm xúc buồn). Workshop viết về sức khỏe tâm thần, không phải quan hệ mới.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Jump for joy — B will be led by a prize-winning author",
    questionVi: "Jump for joy — B do tác giả đoạt giải dẫn",
    modelParaphraseEn: "It recently received the gold medal at the Waterford Awards. Nina will get children to celebrate the word 'joy' by writing a poem",
    modelParaphraseVi: "It recently received the gold medal at the Waterford Awards. Nina will get children to celebrate the word 'joy' by writing a poem",
    acceptedAnswers: ["gold medal", "Waterford Awards", "prize-winning"],
    explanationEn: "B = prize-winning author (gold medal). The poem is the activity, not the matching answer.",
    explanationVi: "B = tác giả đoạt giải (huy chương vàng). Viết thơ là hoạt động, không phải đáp án matching.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Sticks and stones — H raises awareness of a particular culture",
    questionVi: "Sticks and stones — H nâng cao nhận thức về một nền văn hóa",
    modelParaphraseEn: "an African-Caribbean festival to help local children learn about their Jamaican roots",
    modelParaphraseVi: "an African-Caribbean festival to help local children learn about their Jamaican roots",
    acceptedAnswers: ["Jamaican roots", "African-Caribbean", "particular culture"],
    explanationEn: "H = Jamaican / African-Caribbean culture. Steel drums make it musical, but the key is culture.",
    explanationVi: "H = văn hóa Jamaica / Afro-Caribbean. Trống thép là hoạt động nhạc, đáp án chính là văn hóa.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Alive and Kicking: TWO reasons — D it is funny",
    questionVi: "Alive and Kicking: hai lý do — D hài hước",
    modelParaphraseEn: "Usually books like this are quite sad, but this one actually made me cry with laughter",
    modelParaphraseVi: "Usually books like this are quite sad, but this one actually made me cry with laughter",
    acceptedAnswers: ["cry with laughter", "funny", "hilarious"],
    explanationEn: "D = funny (cry with laughter). Illustrations are black-and-white stick drawings, not colourful.",
    explanationVi: "D = hài (cười ra nước mắt). Minh họa là hình que đen trắng, không phải nhiều màu.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) E it deals with an important topic",
    questionVi: "(cùng danh sách) E đề cập chủ đề quan trọng",
    modelParaphraseEn: "It deals with the serious issue of immigration and all the challenges the boy has to face",
    modelParaphraseVi: "It deals with the serious issue of immigration and all the challenges the boy has to face",
    acceptedAnswers: ["immigration", "serious issue", "important topic"],
    explanationEn: "E = important topic (immigration). The author is unknown — her first book — so not 'well known'.",
    explanationVi: "E = chủ đề quan trọng (nhập cư). Tác giả chưa nổi tiếng — đây là sách đầu tay.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Advice for parents: TWO — B allow children to listen to audio books",
    questionVi: "Lời khuyên phụ huynh: hai ý — B cho con nghe sách nói",
    modelParaphraseEn: "If you don't have time for this, then let them listen to audio books",
    modelParaphraseVi: "If you don't have time for this, then let them listen to audio books",
    acceptedAnswers: ["audio books", "listen to audio books"],
    explanationEn: "B = audio books. She says giving up reading aloud after independent reading is a mistake — so not E.",
    explanationVi: "B = sách nói. Bỏ đọc to khi con tự đọc được là sai — nên không phải E.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) C get recommendations from librarians",
    questionVi: "(cùng danh sách) C hỏi thủ thư để được gợi ý",
    modelParaphraseEn: "You can introduce new authors and genres to them. Librarians should be able to help you with this",
    modelParaphraseVi: "You can introduce new authors and genres to them. Librarians should be able to help you with this",
    acceptedAnswers: ["Librarians", "librarians", "new authors and genres"],
    explanationEn: "C = librarians can recommend new authors/genres. Vocabulary lists are in the diary, not parent advice.",
    explanationVi: "C = thủ thư gợi ý tác giả/thể loại mới. Từ vựng ở cuối nhật ký không phải lời khuyên cho phụ huynh.",
  },
];
