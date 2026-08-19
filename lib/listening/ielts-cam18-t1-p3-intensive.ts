import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["What did you think of", "what did you think of"] },
    { id: "g2", answers: ["once I'd moved seats", "once I had moved seats"] },
    { id: "g3", answers: ["or something"] },
    { id: "g4", answers: ["I went early so that", "I went early so I'd"] },
    { id: "g5", answers: ["Anyway, to answer your question", "Anyway to answer your question"] },
    { id: "g6", answers: ["it's obvious that", "it is obvious that"] },
    { id: "g7", answers: ["we can't all have", "we cannot all have"] },
    { id: "g8", answers: ["I wasn't expecting", "I was not expecting"] },
    { id: "g9", answers: ["quite a strong message"] },
    { id: "g10", answers: ["how it really is"] },
    { id: "g11", answers: ["a bit narrow-minded", "narrow-minded"] },
    { id: "g12", answers: ["none of them were very inspiring"] },
    { id: "g13", answers: ["after all"] },
    { id: "g14", answers: ["we'll just have to differ", "we will just have to differ"] },
    { id: "g15", answers: ["One thing's for certain", "One thing is for certain"] },
    { id: "g16", answers: ["I'm not going to accept that view", "I am not going to accept that view"] },
    { id: "g17", answers: ["That doesn't mean", "That does not mean"] },
    { id: "g18", answers: ["picked herself up"] },
  ],
  lines: [
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Hi Chantal. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the talk, then?" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Hi Hugo. I thought it was good " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Oh – were the people beside you chatting " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "It wasn't that. " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " I'd get a seat and not have to stand, but then this guy sat right in front of me and he was so tall!" },
      ],
    },
    {
      speaker: "HUGO",
      segments: [{ type: "text", text: "It's hard to see through people's heads, isn't it?" }],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Impossible! " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", I thought it was really interesting, especially what the speaker said about the job market." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Me too. I mean we know we're going into a really competitive field so " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " we may struggle to get work." },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "That's right – and we know " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " that 'dream job'." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        {
          type: "text",
          text: "Yeah, but it looks like there's a whole range of … areas of work that we hadn't even thought of – like fashion journalism, for instance.",
        },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Yeah – " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " so many career options." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Mmm. Overall, she had " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", didn't she?" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "She did. She kept saying things like 'I know you all think this, but …' and then she'd tell us " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Perhaps she thinks students are " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " about the industry." },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [{ type: "text", text: "It was a bit harsh, though! We know it's a tough industry." }],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Yeah – and we're only first years, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". We've got a lot to learn." },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [{ type: "text", text: "Exactly. Do you think our secondary-school education should have been more career-focused?" }],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Well, we had numerous talks on careers, which was good, but " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". They could have asked more people like today's speaker to talk to us." },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        {
          type: "text",
          text: "I agree. We were told about lots of different careers – just when we needed to be, but not by the experts who really know stuff.",
        },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "So did today's talk influence your thoughts on what career you'd like to take up in the future?" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Well. I promised myself that I'd go through this course and keep an open mind till the end." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "But I think it's better to pick an area of the industry now and then aim to get better and better at it." },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Well, I think " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " on that issue!" },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", though. From what she said, we'll be unpaid assistants in the industry for quite a long time." },
      ],
    },
    { speaker: "CHANTAL", segments: [{ type: "text", text: "Mmm." }] },
    {
      speaker: "HUGO",
      segments: [{ type: "text", text: "I'm prepared for that, aren't you?" }],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Actually, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [{ type: "text", text: "Really? But she knows it's the case – and everyone else says the same." }],
    },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " it has to be true for me." },
      ],
    },
    { speaker: "HUGO", segments: [{ type: "text", text: "OK. Well – I hope you're right!" }] },
    {
      speaker: "CHANTAL",
      segments: [{ type: "text", text: "I thought the speaker's account of her first job was fascinating." }],
    },
    {
      speaker: "HUGO",
      segments: [
        {
          type: "text",
          text: "Yeah – she admitted she was lucky to get work being a personal dresser for a musician. She didn't even apply for the job and there she was getting paid to choose all his clothes.",
        },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        {
          type: "text",
          text: "It must have felt amazing – though she said all she was looking for back then was experience, not financial reward.",
        },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "Mmm. And then he was so mean, telling her she was more interested in her own appearance than his!" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        {
          type: "text",
          text: "But – she did realise he was right about that, which really made me think. I'm always considering my own clothes but now I can see you should be focusing on your client!",
        },
      ],
    },
    { speaker: "HUGO", segments: [{ type: "text", text: "She obviously regretted losing the job." }] },
    {
      speaker: "CHANTAL",
      segments: [
        { type: "text", text: "Well, as she said, she should have hidden her negative feelings about him, but she didn't." },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        { type: "text", text: "It was really brave the way she " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " and took that job in retail. Fancy working in a shop after that!" },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [
        {
          type: "text",
          text: "Yeah – well, she recommended we all do it at some point. I guess as a designer you'd get to find out some useful information, like how big or small the average shopper is.",
        },
      ],
    },
    {
      speaker: "HUGO",
      segments: [
        {
          type: "text",
          text: "I think that's an issue for manufacturers, not designers. However, it would be useful to know if there's a gap in the market – you know, an item that no one's stocking but that consumers are looking for.",
        },
      ],
    },
    {
      speaker: "CHANTAL",
      segments: [{ type: "text", text: "Yeah, people don't give up searching. They also take things back to the store if they aren't right." }],
    },
    {
      speaker: "HUGO",
      segments: [
        {
          type: "text",
          text: "Yeah. Imagine you worked in an expensive shop and you found out the garments sold there were being returned because they … fell apart in the wash!",
        },
      ],
    },
    { speaker: "CHANTAL", segments: [{ type: "text", text: "Yeah, it would be good to know that kind of thing." }] },
    { speaker: "HUGO", segments: [{ type: "text", text: "Yeah." }] },
  ],
};

export const CAM18_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "What problem did Chantal have at the start of the talk? A view blocked / B no empty seat / C students talking",
    questionVi: "Chantal gặp vấn đề gì lúc đầu buổi nói?",
    modelParaphraseEn: "this guy sat right in front of me and he was so tall — hard to see through people's heads",
    modelParaphraseVi: "this guy sat right in front of me and he was so tall — hard to see through people's heads",
    acceptedAnswers: ["so tall", "in front of me", "blocked", "see through"],
    explanationEn: "She did get a seat; the problem was a tall person blocking her view — not chatting neighbours.",
    explanationVi: "Cô ấy có ghế; vấn đề là người cao chắn tầm nhìn — không phải hàng xóm nói chuyện.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "What were they surprised to hear about the job market? A more competitive / B more variety / C some areas more exciting",
    questionVi: "Họ ngạc nhiên điều gì về thị trường việc làm?",
    modelParaphraseEn: "a whole range of areas of work that we hadn't even thought of — I wasn't expecting so many career options",
    modelParaphraseVi: "a whole range of areas of work that we hadn't even thought of — I wasn't expecting so many career options",
    acceptedAnswers: ["whole range", "hadn't even thought of", "so many career options", "variety"],
    explanationEn: "They already knew it was competitive; the surprise is more variety than they realised.",
    explanationVi: "Họ đã biết ngành cạnh tranh; cái bất ngờ là nhiều lựa chọn hơn họ nghĩ.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "They agree the speaker's message was A unfair to them / B hard to follow / C critical of the industry",
    questionVi: "Họ đồng ý thông điệp diễn giả là gì?",
    modelParaphraseEn: "It was a bit harsh, though — we're only first years after all",
    modelParaphraseVi: "It was a bit harsh, though — we're only first years after all",
    acceptedAnswers: ["harsh", "unfair", "first years", "narrow-minded"],
    explanationEn: "“Unfair to them” = “a bit harsh” toward students / first years — not that the industry itself was criticised.",
    explanationVi: "“Unfair to them” = “a bit harsh” với sinh viên năm nhất — không phải chê ngành.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "What do they criticise about school careers advice? A when / B how much / C who gave it",
    questionVi: "Họ chê tư vấn nghề ở trường ở điểm nào?",
    modelParaphraseEn: "not by the experts who really know stuff — they could have asked more people like today's speaker",
    modelParaphraseVi: "not by the experts who really know stuff — they could have asked more people like today's speaker",
    acceptedAnswers: ["experts", "who", "today's speaker", "not very inspiring"],
    explanationEn: "Timing and amount were OK (“just when we needed”); the problem is who gave the talks.",
    explanationVi: "Thời điểm và lượng tư vấn ổn; vấn đề là ai nói (không phải chuyên gia).",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "When discussing their future they disagree on A which career / B when to choose / C why they want it",
    questionVi: "Họ bất đồng về điều gì khi bàn tương lai?",
    modelParaphraseEn: "keep an open mind till the end vs pick an area of the industry now",
    modelParaphraseVi: "keep an open mind till the end vs pick an area of the industry now",
    acceptedAnswers: ["open mind", "till the end", "pick now", "when"],
    explanationEn: "The disagreement is when to specialise — now vs after the course — not which job or why.",
    explanationVi: "Bất đồng là khi nào chọn hướng — now vs hết khoá — không phải nghề nào hay vì sao.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "How does Hugo feel about being an unpaid assistant? A realistic / B dishonest / C others want to change it",
    questionVi: "Hugo nghĩ sao về làm trợ lý không lương?",
    modelParaphraseEn: "I'm prepared for that, aren't you?",
    modelParaphraseVi: "I'm prepared for that, aren't you?",
    acceptedAnswers: ["prepared", "realistic", "unpaid assistants"],
    explanationEn: "Hugo accepts unpaid work as likely; Chantal refuses that view.",
    explanationVi: "Hugo chấp nhận làm không lương; Chantal thì không.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Which TWO mistakes in her first job? A dishonest / B too much attention to how she looked / C fame / D money / E openly disliking her client",
    questionVi: "Hai sai lầm trong công việc đầu?",
    modelParaphraseEn: "more interested in her own appearance than his",
    modelParaphraseVi: "more interested in her own appearance than his",
    acceptedAnswers: ["own appearance", "how she looked", "her own clothes"],
    explanationEn: "B = she focused on her own look instead of the client. She wanted experience, not money or fame.",
    explanationVi: "B = lo ngoại hình mình hơn khách. Cô ấy tìm experience, không phải tiền hay nổi tiếng.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "(same list) E openly disliking her client",
    questionVi: "(cùng danh sách) E thể hiện ghét khách",
    modelParaphraseEn: "she should have hidden her negative feelings about him, but she didn't",
    modelParaphraseVi: "she should have hidden her negative feelings about him, but she didn't",
    acceptedAnswers: ["negative feelings", "hidden", "openly"],
    explanationEn: "E = she showed dislike instead of hiding negative feelings.",
    explanationVi: "E = cô ấy không giấu negative feelings về khách.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Which TWO pieces of retail information would be useful? A why people return items / C designs people want but can't find",
    questionVi: "Hai thông tin bán lẻ nào hữu ích?",
    modelParaphraseEn: "a gap in the market — an item that no one's stocking but that consumers are looking for",
    modelParaphraseVi: "a gap in the market — an item that no one's stocking but that consumers are looking for",
    acceptedAnswers: ["gap in the market", "no one's stocking", "looking for"],
    explanationEn: "C = products people want but shops don't stock.",
    explanationVi: "C = món người ta tìm nhưng shop không bán.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "(same list) A the reasons people return fashion items",
    questionVi: "(cùng danh sách) A lý do trả hàng",
    modelParaphraseEn: "garments were being returned because they fell apart in the wash",
    modelParaphraseVi: "garments were being returned because they fell apart in the wash",
    acceptedAnswers: ["returned", "fell apart", "reasons people return"],
    explanationEn: "A = return reasons, e.g. clothes falling apart in the wash — not sizes or shopping time.",
    explanationVi: "A = lý do trả hàng, ví dụ đồ giặt là hỏng — không phải size hay thời điểm mua.",
  },
];
