import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T1_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["talking or lecturing"] },
    { id: "g2", answers: ["their greatest triumphs"] },
    { id: "g3", answers: ["therefore the most appealing"] },
    { id: "g4", answers: ["still have access to"] },
    { id: "g5", answers: ["Cato definitely didn't", "Cato definitely did not"] },
    { id: "g6", answers: ["anything but personal"] },
    { id: "g7", answers: ["a note-taking student"] },
    { id: "g8", answers: ["the key to achieving this"] },
    { id: "g9", answers: ["learn to control them"] },
    { id: "g10", answers: ["Using this definition as a model"] },
    { id: "g11", answers: ["were inspired by the philosophy"] },
    { id: "g12", answers: ["beside his bed"] },
    { id: "g13", answers: ["his \"consoling religion\""] },
    { id: "g14", answers: ["Today's political leaders are no different"] },
    { id: "g15", answers: ["he travels with"] },
    { id: "g16", answers: ["It's most commonly used to treat", "It is most commonly used to treat"] },
    { id: "g17", answers: ["needs to learn"] },
    { id: "g18", answers: ["as easy as it sounds"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Ancient philosophy is not just about " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: ", or even reading long, dense books." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "In fact, it is something people have used throughout history – to solve their problems and to achieve " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Specifically, I am referring to Stoicism, which, in my opinion, is the most practical of all philosophies and ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stoicism was founded in Ancient Greece by Zeno of Citium in the early 3rd century BC, but was practised by the likes of Epictetus, Cato, Seneca and Marcus Aurelius.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Amazingly, we " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " these ideas, despite the fact that the most famous Stoics never wrote anything down for publication.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Marcus Aurelius never intended his Meditations to be " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Seneca's letters were, well, letters and Epictetus' thoughts come to us by way of " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stoic principles were based on the idea that its followers could have an unshakable happiness in this life and ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " was virtue." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The road to virtue, in turn, lay in understanding that destructive emotions, like anger and jealousy, are under our conscious control – they don't have to control us, because we can ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the words of Epictetus: \"external events I cannot control, but the choices I make with regard to them, I do control\".",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The modern day philosopher and writer Nassim Nicholas Taleb defines a Stoic as someone who has a different perspective on experience which most of us would see as wholly negative; a Stoic \"transforms fear into caution, pain into transformation, mistakes into initiation and desire into undertaking\".",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", we can see that throughout the centuries Stoicism has been practised in more recent history by kings, presidents, artists, writers and entrepreneurs.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The founding fathers of the United States " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "George Washington was introduced to Stoicism by his neighbours at age seventeen, and later, put on a play based on the life of Cato to inspire his men.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Thomas Jefferson kept a copy of Seneca " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Writers and artists have also been inspired by the stoics." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Eugène Delacroix, the renowned French Romantic artist (known best for his painting Liberty Leading the People) was an ardent Stoic, referring to it as ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", with many finding their inspiration from the ancient texts." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Former US president Bill Clinton rereads Marcus Aurelius every single year, and many have compared former President Obama's calm leadership style to that of Cato.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Wen Jiabao, the former prime minister of China, claims that Meditations is one of two books " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " and that he has read it more than one hundred times over the course of his life." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stoicism had a profound influence on Albert Ellis, who invented Cognitive Behaviour Therapy, which is used to help people manage their problems by changing the way that they think and behave.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        { type: "text", text: " depression." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The idea is that we can take control of our lives by challenging the irrational beliefs that create our faulty thinking, symptoms and behaviours by using logic instead.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Stoicism has also become popular in the world of business." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stoic principles can build the resilience and state of mind required to overcome setbacks because Stoics teach turning obstacles into opportunity.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "A lesson every business entrepreneur " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I would argue that studying Stoicism is as relevant today as it was 2,000 years ago, thanks to its brilliant insights into how to lead a good life.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At the very root of the thinking, there is a very simple way of living – control what you can and accept what you can't.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is not " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and will require considerable practice – it can take a lifetime to master.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Stoics also believed the most important foundation for a good and happy life is not money, fame, power or pleasure, but having a disciplined and principled character – something which seems to resonate with many people today.",
        },
      ],
    },
  ],
};

export const CAM16_T1_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "Stoicism is still relevant today because of its ______ appeal",
    questionVi: "Stoicism is still relevant today because of its ______ appeal",
    modelParaphraseEn: "the most practical of all philosophies and therefore the most appealing",
    modelParaphraseVi: "the most practical of all philosophies and therefore the most appealing",
    acceptedAnswers: ["practical"],
    explanationEn: "Its appeal is practical — the most practical of all philosophies.",
    explanationVi: "Sức hấp dẫn là practical — triết lý thực tiễn nhất.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "ideas are surprisingly well known, despite not being intended for ______",
    questionVi: "ideas are surprisingly well known, despite not being intended for ______",
    modelParaphraseEn: "the most famous Stoics never wrote anything down for publication",
    modelParaphraseVi: "the most famous Stoics never wrote anything down for publication",
    acceptedAnswers: ["publication"],
    explanationEn: "Not intended for publication (Cato wrote nothing; Meditations were personal; letters and student notes).",
    explanationVi: "Không nhằm publication (Cato không viết; Meditations là riêng; thư và ghi chép của học trò).",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "external events cannot be controlled but the ______ people make in response can be",
    questionVi: "external events cannot be controlled but the ______ people make in response can be",
    modelParaphraseEn: "external events I cannot control, but the choices I make with regard to them, I do control",
    modelParaphraseVi: "external events I cannot control, but the choices I make with regard to them, I do control",
    acceptedAnswers: ["choices"],
    explanationEn: "Epictetus: we control the choices we make in response, not external events.",
    explanationVi: "Epictetus: kiểm soát được choices khi phản ứng, không kiểm soát sự kiện bên ngoài.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "experiences which others would consider as ______",
    questionVi: "experiences which others would consider as ______",
    modelParaphraseEn: "a different perspective on experience which most of us would see as wholly negative",
    modelParaphraseVi: "a different perspective on experience which most of us would see as wholly negative",
    acceptedAnswers: ["negative"],
    explanationEn: "Taleb: a Stoic sees as different what others see as wholly negative.",
    explanationVi: "Taleb: người Stoic nhìn khác những trải nghiệm mà người khác thấy là negative.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "George Washington organised a ______ about Cato to motivate his men",
    questionVi: "George Washington organised a ______ about Cato to motivate his men",
    modelParaphraseEn: "put on a play based on the life of Cato to inspire his men",
    modelParaphraseVi: "put on a play based on the life of Cato to inspire his men",
    acceptedAnswers: ["play"],
    explanationEn: "He put on a play about Cato to inspire his men.",
    explanationVi: "Ông dựng một play về Cato để truyền cảm hứng cho binh sĩ.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Adam Smith's ideas on ______ were influenced by Stoicism",
    questionVi: "Adam Smith's ideas on ______ were influenced by Stoicism",
    modelParaphraseEn: "Adam Smith's theories on capitalism were significantly influenced by the Stoicism that he studied as a schoolboy",
    modelParaphraseVi: "Adam Smith's theories on capitalism were significantly influenced by the Stoicism that he studied as a schoolboy",
    acceptedAnswers: ["capitalism"],
    explanationEn: "Smith's theories on capitalism were influenced by schoolboy Stoicism.",
    explanationVi: "Lý thuyết capitalism của Smith chịu ảnh hưởng Stoicism từ thời đi học.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "the treatment for ______ is based on ideas from Stoicism",
    questionVi: "the treatment for ______ is based on ideas from Stoicism",
    modelParaphraseEn: "Cognitive Behaviour Therapy … It's most commonly used to treat depression",
    modelParaphraseVi: "Cognitive Behaviour Therapy … It's most commonly used to treat depression",
    acceptedAnswers: ["depression"],
    explanationEn: "CBT, influenced by Stoicism, is most commonly used to treat depression.",
    explanationVi: "CBT, chịu ảnh hưởng Stoicism, thường dùng để trị depression.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "people learn to base their thinking on ______",
    questionVi: "people learn to base their thinking on ______",
    modelParaphraseEn: "challenging the irrational beliefs … by using logic instead",
    modelParaphraseVi: "challenging the irrational beliefs … by using logic instead",
    acceptedAnswers: ["logic"],
    explanationEn: "CBT: challenge irrational beliefs by using logic instead.",
    explanationVi: "CBT: thách thức niềm tin phi lý bằng logic.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "in business, people benefit by identifying obstacles as ______",
    questionVi: "in business, people benefit by identifying obstacles as ______",
    modelParaphraseEn: "Stoics teach turning obstacles into opportunity",
    modelParaphraseVi: "Stoics teach turning obstacles into opportunity",
    acceptedAnswers: ["opportunity"],
    explanationEn: "Turn obstacles into opportunity.",
    explanationVi: "Biến chướng ngại thành opportunity.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "It requires a lot of ______ but Stoicism can help people to lead a good life",
    questionVi: "It requires a lot of ______ but Stoicism can help people to lead a good life",
    modelParaphraseEn: "This is not as easy as it sounds and will require considerable practice – it can take a lifetime to master",
    modelParaphraseVi: "This is not as easy as it sounds and will require considerable practice – it can take a lifetime to master",
    acceptedAnswers: ["practice", "practise"],
    explanationEn: "Leading a good life needs considerable practice (UK practise also accepted).",
    explanationVi: "Sống tốt đòi hỏi nhiều practice / practise.",
  },
];
