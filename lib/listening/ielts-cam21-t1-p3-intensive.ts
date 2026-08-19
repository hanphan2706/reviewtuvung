import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM21_T1_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["was good, wasn't it", "was good, was it not"] },
    { id: "g2", answers: ["I learned a lot from her"] },
    { id: "g3", answers: ["I've already done some reading on it", "I have already done some reading on it"] },
    { id: "g4", answers: ["That impressed me too"] },
    { id: "g5", answers: ["it's hard to see any real solution", "it is hard to see any real solution"] },
    { id: "g6", answers: ["she did point to where policy changes could be made"] },
    { id: "g7", answers: ["Yes, me too"] },
    { id: "g8", answers: ["I'd have thought it was quite unusual", "I would have thought it was quite unusual"] },
    { id: "g9", answers: ["from such different backgrounds"] },
    { id: "g10", answers: ["people are much more aware of that, aren't they", "people are much more aware of that, are they not"] },
    { id: "g11", answers: ["she didn't bombard us with figures", "she did not bombard us with figures"] },
    { id: "g12", answers: ["she focused more on the general points they indicated"] },
    { id: "g13", answers: ["it's been a bit of a rush", "it has been a bit of a rush"] },
    { id: "g14", answers: ["I know what you mean"] },
    { id: "g15", answers: ["I didn't get anything out of it though", "I did not get anything out of it though"] },
    { id: "g16", answers: ["I found it hard going at first"] },
    { id: "g17", answers: ["I gave up reading after the first chapter"] },
    { id: "g18", answers: ["I just couldn't follow it", "I just could not follow it"] },
  ],
  lines: [
    {
      speaker: "PHIL",
      segments: [
        { type: "text", text: "That lecture from the visiting speaker yesterday " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " about ocean biodiversity. " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: ", and I did an assignment on some of the problems associated with it last year, but I especially liked the way her lecture focused on more long-term issues.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Yes, things that aren't currently receiving widespread attention but are likely to be important in the future. ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". It wasn't exactly a feel-good conclusion because " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " for a lot of the problems." },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "No, though " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " to protect our marine and coastal environments." },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Mm. But that's just at a national level. The examples she gave were at a more global level, and they really made it clear to me just how wide-ranging the threats to ocean biodiversity are.",
        },
      ],
    },
    { speaker: "LUCY", segments: [{ type: "gap", gapId: "g7" }, { type: "text", text: "." }] },
    {
      speaker: "PHIL",
      segments: [
        { type: "text", text: "The research project she described was impressive, wasn't it? " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " to have so many experts working together." },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "Yeah, and " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". Must have been a really exciting team to work with. I'd heard of a couple of them before – they were involved in research way back in 2009 warning about the dangers of ocean pollution.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        { type: "text", text: "But now " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "LUCY", segments: [{ type: "text", text: "I suppose so." }] },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Another thing about the research is that the team members came from all round the world. Though I suppose that's not unusual nowadays, now everyone can work remotely.",
        },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "Right. I liked the way " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " – I mean, they were available, but " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Mm. And the description of improvements in systems used for tracking marine animals and things like robots were really interesting.",
        },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        {
          type: "text",
          text: "Yes, and her description of how robotics can be used to investigate threats to biodiversity.",
        },
      ],
    },
    { speaker: "PHIL", segments: [{ type: "text", text: "Absolutely." }] },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "While you're here, can we talk about the list of resources we have to evaluate for the seminar tomorrow. I've had a look at them all, but ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        {
          type: "text",
          text: "Yeah. What did you think of that article on invasive lionfish? The one claiming they were expanding their habitat throughout the Mediterranean Sea.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Well, the writer went on about how dangerous they were in environmental terms, which is probably true, but he didn't really provide much information to explain why.",
        },
      ],
    },
    { speaker: "LUCY", segments: [{ type: "gap", gapId: "g14" }, { type: "text", text: "." }] },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "I watched the documentary on microplastics, at least I started to, but then I found it was made ten years ago so I gave up.",
        },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        {
          type: "text",
          text: "I watched to the end but you're right, it was showing its age. People had hardly heard of microplastics then, whereas now everyone knows about them and how dangerous they are.",
        },
      ],
    },
    { speaker: "PHIL", segments: [{ type: "text", text: "Yeah. Did you listen to the podcast on ocean pollution?" }] },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "Mm. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". Most of it was stating the obvious." },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Yes, it mentioned pesticides and plastic and things, and it clearly made the point that they were a bad thing, but everybody knows that anyway. Did you read that book on coastal ecosystems?",
        },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        { type: "text", text: "The one by John Harper? Yes, " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", it went into a lot of detail about things like the effects of offshore windfarms and fish farms, but actually I ended up with a much better understanding of the issues.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Yes, I agree and I thought it was a well-written summary of those. And the diagrams helped a lot too.",
        },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        {
          type: "text",
          text: "The article on metal toxicity was way above my head, I didn't know anything about how metals from industrial emissions react in the ocean... and I still don't understand it.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " – " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LUCY",
      segments: [
        {
          type: "text",
          text: "That podcast on floating marine cities was interesting, though it presented a rather one-sided picture, I thought.",
        },
      ],
    },
    {
      speaker: "PHIL",
      segments: [
        {
          type: "text",
          text: "Yes, it focused on how this would benefit people and ignored the effects on the environment.",
        },
      ],
    },
    { speaker: "LUCY", segments: [{ type: "text", text: "But anyway, shall we talk?" }] },
  ],
};

export const CAM21_T1_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO features with the greatest impact:  B the broad focus of the examples",
    questionVi: "HAI điểm gây ấn tượng nhất:  B phạm vi rộng của các ví dụ",
    modelParaphraseEn: "The examples she gave were at a more global level, and they really made it clear … how wide-ranging the threats to ocean biodiversity are. Yes, me too",
    modelParaphraseVi: "The examples she gave were at a more global level, and they really made it clear … how wide-ranging the threats to ocean biodiversity are. Yes, me too",
    acceptedAnswers: ["B", "the broad focus of the examples", "more global level", "wide-ranging"],
    explanationEn: "B = broad / global examples (wide-ranging threats). Policy was only national, so not E. Practical solutions are hard to see, so not C. Local problems are not what impressed them (not A).",
    explanationVi: "B = ví dụ broad / global (threats wide-ranging). Policy chỉ ở national nên không phải E. Khó thấy solution thực tế nên không phải C. Không ấn tượng vì vấn đề địa phương (không phải A).",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) D the type of issues discussed",
    questionVi: "(cùng danh sách) D loại vấn đề được bàn",
    modelParaphraseEn: "I especially liked the way her lecture focused on more long-term issues … things that aren't currently receiving widespread attention but are likely to be important in the future. That impressed me too",
    modelParaphraseVi: "I especially liked the way her lecture focused on more long-term issues … things that aren't currently receiving widespread attention but are likely to be important in the future. That impressed me too",
    acceptedAnswers: ["D", "the type of issues discussed", "long-term issues"],
    explanationEn: "D = the type of issues (long-term, not yet widely discussed). Both students say this impressed them.",
    explanationVi: "D = loại vấn đề (long-term, chưa được bàn rộng). Cả hai đều nói điều này gây ấn tượng.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO details about the research that impressed them:  C the use of new technology",
    questionVi: "HAI chi tiết nghiên cứu gây ấn tượng:  C dùng công nghệ mới",
    modelParaphraseEn: "improvements in systems used for tracking marine animals and things like robots were really interesting … how robotics can be used to investigate threats to biodiversity",
    modelParaphraseVi: "improvements in systems used for tracking marine animals and things like robots were really interesting … how robotics can be used to investigate threats to biodiversity",
    acceptedAnswers: ["C", "the use of new technology", "robots", "robotics"],
    explanationEn: "C = new technology (tracking systems, robots / robotics). Figures were available but not the focus (not D). A worldwide team is now usual with remote work (not B). 2009 pollution work is known, not what especially impressed them now (not A).",
    explanationVi: "C = công nghệ mới (tracking, robots / robotics). Số liệu có nhưng không phải trọng tâm (không phải D). Đội toàn cầu giờ đã thường với remote work (không phải B). Nghiên cứu 2009 không phải điều gây ấn tượng lúc này (không phải A).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) E the large range of specialists involved",
    questionVi: "(cùng danh sách) E nhiều chuyên gia đa lĩnh vực",
    modelParaphraseEn: "quite unusual to have so many experts working together. Yeah, and from such different backgrounds",
    modelParaphraseVi: "quite unusual to have so many experts working together. Yeah, and from such different backgrounds",
    acceptedAnswers: ["E", "the large range of specialists involved", "so many experts", "different backgrounds"],
    explanationEn: "E = many specialists from different backgrounds working together. That is what they call impressive / unusual.",
    explanationVi: "E = nhiều chuyên gia từ nhiều backgrounds cùng làm. Đó là điều họ gọi là impressive / unusual.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Article on invasive lionfish — G insufficient evidence for its claims",
    questionVi: "Bài lionfish xâm lấn — G thiếu bằng chứng cho các nhận định",
    modelParaphraseEn: "he didn't really provide much information to explain why. I know what you mean",
    modelParaphraseVi: "he didn't really provide much information to explain why. I know what you mean",
    acceptedAnswers: ["G", "insufficient evidence", "didn't really provide much information"],
    explanationEn: "G = insufficient evidence. The danger claim may be true, but the writer did not explain why.",
    explanationVi: "G = insufficient evidence. Nhận định nguy hiểm có thể đúng, nhưng tác giả không giải thích why.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Documentary on microplastics — B now rather outdated",
    questionVi: "Phim tài liệu vi nhựa — B đã lỗi thời",
    modelParaphraseEn: "it was made ten years ago … it was showing its age. People had hardly heard of microplastics then, whereas now everyone knows about them",
    modelParaphraseVi: "it was made ten years ago … it was showing its age. People had hardly heard of microplastics then, whereas now everyone knows about them",
    acceptedAnswers: ["B", "now rather outdated", "showing its age", "ten years ago"],
    explanationEn: "B = outdated / showing its age (made ten years ago). Microplastics are now widely known.",
    explanationVi: "B = outdated / showing its age (làm mười năm trước). Microplastics giờ ai cũng biết.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Podcast on ocean pollution — F too predictable to be useful",
    questionVi: "Podcast ô nhiễm đại dương — F quá dễ đoán, ít ích",
    modelParaphraseEn: "I didn't get anything out of it … stating the obvious … everybody knows that anyway",
    modelParaphraseVi: "I didn't get anything out of it … stating the obvious … everybody knows that anyway",
    acceptedAnswers: ["F", "too predictable to be useful", "stating the obvious", "everybody knows that anyway"],
    explanationEn: "F = too predictable. Pesticides and plastic are obviously bad — everybody already knows.",
    explanationVi: "F = too predictable. Pesticides và plastic rõ ràng là xấu — ai cũng biết rồi.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Book on coastal ecosystems — H a clear explanation of the problems",
    questionVi: "Sách hệ sinh thái ven biển — H giải thích rõ các vấn đề",
    modelParaphraseEn: "I ended up with a much better understanding of the issues. Yes, I agree and I thought it was a well-written summary of those. And the diagrams helped a lot too",
    modelParaphraseVi: "I ended up with a much better understanding of the issues. Yes, I agree and I thought it was a well-written summary of those. And the diagrams helped a lot too",
    acceptedAnswers: ["H", "a clear explanation of the problems", "better understanding of the issues", "well-written summary"],
    explanationEn: "H = clear explanation (well-written summary + diagrams). Hard going at first, but they understand the issues better — not a list of solutions (not D).",
    explanationVi: "H = giải thích rõ (well-written summary + diagrams). Ban đầu khó đọc, nhưng hiểu issues hơn — không phải danh sách giải pháp (không phải D).",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Article on metal toxicity — A aimed at a very specialist audience",
    questionVi: "Bài độc tính kim loại — A dành cho độc giả rất chuyên",
    modelParaphraseEn: "way above my head … I still don't understand it. I gave up reading after the first chapter – I just couldn't follow it",
    modelParaphraseVi: "way above my head … I still don't understand it. I gave up reading after the first chapter – I just couldn't follow it",
    acceptedAnswers: ["A", "aimed at a very specialist audience", "way above my head", "couldn't follow it"],
    explanationEn: "A = specialist audience — above their heads; they could not follow it. Not a clear explanation (H) and not about a new danger (C).",
    explanationVi: "A = độc giả chuyên — above their heads; không theo nổi. Không phải giải thích rõ (H) và không phải nguy cơ mới (C).",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Podcast on floating marine cities — E does not give a balanced account",
    questionVi: "Podcast thành phố nổi — E không cân bằng",
    modelParaphraseEn: "it presented a rather one-sided picture … it focused on how this would benefit people and ignored the effects on the environment",
    modelParaphraseVi: "it presented a rather one-sided picture … it focused on how this would benefit people and ignored the effects on the environment",
    acceptedAnswers: ["E", "does not give a balanced account", "one-sided picture"],
    explanationEn: "E = not balanced / one-sided — benefits for people only, environment ignored.",
    explanationVi: "E = không cân bằng / one-sided — chỉ lợi cho người, bỏ qua môi trường.",
  },
];
