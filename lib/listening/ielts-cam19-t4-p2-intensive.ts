import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm here to help", "I am here to help"] },
    { id: "g2", answers: ["build up to"] },
    { id: "g3", answers: ["they're easy to follow", "they are easy to follow"] },
    { id: "g4", answers: ["they don't work for everyone", "they do not work for everyone"] },
    { id: "g5", answers: ["a couple of simple tips"] },
    { id: "g6", answers: ["that can prevent progress"] },
    { id: "g7", answers: ["run a bit faster"] },
    { id: "g8", answers: ["it takes your mind off things"] },
    { id: "g9", answers: ["the time of day"] },
    { id: "g10", answers: ["you need to be consistent"] },
    { id: "g11", answers: ["New members often say to me"] },
    { id: "g12", answers: ["made to feel so welcome"] },
    { id: "g13", answers: ["he hasn't looked back", "he has not looked back"] },
    { id: "g14", answers: ["He never misses a training session"] },
    { id: "g15", answers: ["feels much more relaxed"] },
    { id: "g16", answers: ["a sporty person"] },
    { id: "g17", answers: ["I never dreamed"] },
    { id: "g18", answers: ["something to work towards"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My name's Liz Fuller and I'm a running coach with Compton Park Runners Club. Welcome to my podcast. If you're thinking about taking up running – " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There are many training programmes available online which aim to help people " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " running 5 kilometres. Some of them are great and thousands of people of all ages are taking part in 5-kilometre races across the country as a result. People like them because " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " and don't push them too hard. However, " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " – especially if you suffer from something like a heart condition or asthma, because they're aimed at people with average fitness and running ability. Another thing is that everyone is different – and if you have any specific questions related to your needs, there's no one to provide any answers.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I have " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " I always give to new runners. I expect you've been told to run very slowly until your fitness increases – well, I find " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". You should run at a speed that feels comfortable, but time yourself and try to " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " each time. Listening to music can be very helpful – " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " and helps your body get into a rhythm. I'd say that is better than running with a friend – especially as most people are competitive and that's not what you want when you're just starting. I don't think " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " is especially important – some people are better in the evening, while others are morning people – but " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", so aim to train regularly – twice a week is enough to begin with." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " that they've been put off running either because they lack confidence, or they don't have time, or they think they dislike running. Ceri, for example, joined the club two years ago at the age of 40. She'd always enjoyed running at school but wasn't sure if she'd be able to do it. She was worried about being left behind and being the slowest runner. But she says she was " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " she soon forgot all about that." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "James had always hated the idea of running but a friend encouraged him to come along for a taster session and " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " despite having a really demanding job." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Leo was worried about having to commit himself to training sessions every week and wasn't sure he'd be able to fit training into his busy schedule. But after experiencing a lot of stress at work he came along to us and gave it a go. Now he says he " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " and he looks forward to his weekly run." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Mark is quite typical of our new members. He's never considered himself to be " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " and it was only when he retired that he decided to take up the challenge of trying to run 5 kilometres. It took him months to find the courage to contact us but felt reassured immediately as there were other people his age who were only just taking up running for the first time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "My own journey hasn't been easy. I did my first marathon when I was 37, after having had two kids. My husband had been running marathons for years, but " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " I'd be doing one with him. I managed to complete it in four hours, but I felt like giving up halfway through – it was only the support of the spectators that kept me going.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I do think signing up for a race of whatever length is motivating – whether it's 5K or 25K – because it's good to have " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and it gives you a sense of achievement. I did my first 10K after only six months, which was certainly very challenging and not something I'd necessarily recommend. But after you've been training for a few weeks, it's worth putting your name down for a 5K – some people find they only need a few practice runs before taking part in a race, but I'd give yourself a couple of months at least.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Well, I hope that's given . . ." }],
    },
  ],
};

export const CAM19_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO problems with training programmes: C unsuitable for people with health issues",
    questionVi: "Hai vấn đề chương trình tập: C không phù hợp người có vấn đề sức khỏe",
    modelParaphraseEn: "they don't work for everyone – especially if you suffer from something like a heart condition or asthma",
    modelParaphraseVi: "they don't work for everyone – especially if you suffer from something like a heart condition or asthma",
    acceptedAnswers: ["health issues", "heart condition", "asthma", "C"],
    explanationEn: "C = health issues. Programmes target average fitness; age and injury are not the problems she names.",
    explanationVi: "C = vấn đề sức khỏe. Chương trình nhắm người thể lực trung bình; tuổi và chấn thương không phải điều cô nêu.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E there is a lack of individual support",
    questionVi: "(cùng danh sách) E thiếu hỗ trợ cá nhân",
    modelParaphraseEn: "if you have any specific questions related to your needs, there's no one to provide any answers",
    modelParaphraseVi: "if you have any specific questions related to your needs, there's no one to provide any answers",
    acceptedAnswers: ["no one to provide any answers", "individual support", "specific questions", "E"],
    explanationEn: "E = no one answers personal questions. Motivation is not mentioned as a programme problem.",
    explanationVi: "E = không ai trả lời câu hỏi cá nhân. Motivation không được nêu là vấn đề của chương trình.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "TWO tips for new runners: A doing two runs a week",
    questionVi: "Hai lời khuyên: A chạy hai buổi mỗi tuần",
    modelParaphraseEn: "you need to be consistent, so aim to train regularly – twice a week is enough to begin with",
    modelParaphraseVi: "you need to be consistent, so aim to train regularly – twice a week is enough to begin with",
    acceptedAnswers: ["twice a week", "two runs a week", "train regularly", "A"],
    explanationEn: "A = twice a week. Evening running is optional; very slow running actually prevents progress.",
    explanationVi: "A = hai buổi/tuần. Chạy tối chỉ là lựa chọn; chạy quá chậm còn cản tiến bộ.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) D listening to music during runs",
    questionVi: "(cùng danh sách) D nghe nhạc khi chạy",
    modelParaphraseEn: "Listening to music can be very helpful – it takes your mind off things and helps your body get into a rhythm",
    modelParaphraseVi: "Listening to music can be very helpful – it takes your mind off things and helps your body get into a rhythm",
    acceptedAnswers: ["listening to music", "get into a rhythm", "D"],
    explanationEn: "D = music. Running with a friend is worse because people become competitive.",
    explanationVi: "D = nghe nhạc. Chạy với bạn còn kém hơn vì dễ đua tranh.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Ceri — A a lack of confidence",
    questionVi: "Ceri — A thiếu tự tin",
    modelParaphraseEn: "wasn't sure if she'd be able to do it – worried about being left behind and being the slowest runner",
    modelParaphraseVi: "wasn't sure if she'd be able to do it – worried about being left behind and being the slowest runner",
    acceptedAnswers: ["wasn't sure", "left behind", "slowest runner", "lack of confidence", "A"],
    explanationEn: "A = lack of confidence. She had enjoyed running at school; welcome from the club removed the worry.",
    explanationVi: "A = thiếu tự tin. Cô từng thích chạy ở trường; sự chào đón của CLB khiến cô quên lo.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "James — B a dislike of running",
    questionVi: "James — B không thích chạy",
    modelParaphraseEn: "James had always hated the idea of running but a friend encouraged him to come along for a taster session",
    modelParaphraseVi: "James had always hated the idea of running but a friend encouraged him to come along for a taster session",
    acceptedAnswers: ["hated the idea of running", "dislike of running", "B"],
    explanationEn: "B = dislike of running. His demanding job did not stop him once he tried a taster.",
    explanationVi: "B = ghét ý tưởng chạy. Việc bận không cản ông sau buổi thử.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Leo — C a lack of time",
    questionVi: "Leo — C thiếu thời gian",
    modelParaphraseEn: "wasn't sure he'd be able to fit training into his busy schedule",
    modelParaphraseVi: "wasn't sure he'd be able to fit training into his busy schedule",
    acceptedAnswers: ["busy schedule", "fit training", "lack of time", "C"],
    explanationEn: "C = lack of time / busy schedule. After work stress he joined and now looks forward to the weekly run.",
    explanationVi: "C = thiếu thời gian / lịch bận. Sau stress công việc anh tham gia và mong buổi chạy hàng tuần.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Mark — A a lack of confidence",
    questionVi: "Mark — A thiếu tự tin",
    modelParaphraseEn: "It took him months to find the courage to contact us – never considered himself to be a sporty person",
    modelParaphraseVi: "It took him months to find the courage to contact us – never considered himself to be a sporty person",
    acceptedAnswers: ["find the courage", "not a sporty person", "lack of confidence", "A"],
    explanationEn: "A = lack of confidence (months to find the courage). Seeing other beginners his age reassured him.",
    explanationVi: "A = thiếu tự tin (mất nhiều tháng mới dám liên hệ). Thấy người cùng tuổi mới bắt đầu khiến ông yên tâm.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "First marathon: A always her ambition / B husband persuaded her / C she nearly gave up",
    questionVi: "Marathon đầu: A vốn là hoài bão / B chồng thuyết phục / C gần bỏ cuộc",
    modelParaphraseEn: "I felt like giving up halfway through – it was only the support of the spectators that kept me going",
    modelParaphraseVi: "I felt like giving up halfway through – it was only the support of the spectators that kept me going",
    acceptedAnswers: ["giving up halfway", "nearly gave up", "spectators", "C"],
    explanationEn: "C = nearly gave up. She never dreamed she would run with her husband; spectators kept her going.",
    explanationVi: "C = gần bỏ cuộc. Cô không mơ sẽ chạy cùng chồng; khán giả giúp cô tiếp tục.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Sign up for a race: A every six months / B within a few weeks / C after several practice runs",
    questionVi: "Đăng ký giải: A mỗi sáu tháng / B trong vài tuần / C sau vài lần tập",
    modelParaphraseEn: "after you've been training for a few weeks, it's worth putting your name down for a 5K",
    modelParaphraseVi: "after you've been training for a few weeks, it's worth putting your name down for a 5K",
    acceptedAnswers: ["a few weeks", "putting your name down", "B"],
    explanationEn: "B = within a few weeks. A 10K after six months is not recommended; she would still give yourself a couple of months at least.",
    explanationVi: "B = trong vài tuần. 10K sau sáu tháng không khuyến nghị; cô vẫn khuyên ít nhất vài tháng.",
  },
];
