import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm going to be talking about", "I am going to be talking about"] },
    { id: "g2", answers: ["Recently there's been a greater awareness", "Recently there has been a greater awareness"] },
    { id: "g3", answers: ["has received widespread attention"] },
    { id: "g4", answers: ["far less is known about"] },
    { id: "g5", answers: ["via a number of different sources"] },
    { id: "g6", answers: ["find their way into"] },
    { id: "g7", answers: ["over a period of time"] },
    { id: "g8", answers: ["On a larger scale"] },
    { id: "g9", answers: ["some of the impacts"] },
    { id: "g10", answers: ["in a variety of ways"] },
    { id: "g11", answers: ["Surprisingly perhaps"] },
    { id: "g12", answers: ["What's more", "What is more"] },
    { id: "g13", answers: ["it's important to underline that", "it is important to underline that"] },
    { id: "g14", answers: ["there is not yet conclusive proof"] },
    { id: "g15", answers: ["very difficult to accurately estimate"] },
    { id: "g16", answers: ["an essential component of"] },
    { id: "g17", answers: ["The short answer was"] },
    { id: "g18", answers: ["To summarise", "To summarize"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "In today's lecture, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " microplastics." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Microplastics are tiny pieces of plastic smaller than five millimetres in size. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " that there are large quantities of plastic waste – big and small – in the environment. The amount of plastic waste in the oceans " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", but " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " the effects of microplastics in freshwater and particularly in soil." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Microplastics can enter the environment " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". Threads and microfibres detach from synthetic clothing every time they're put in a washing machine, and these " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " the water system. Other sources include big pieces of plastic waste that are already in the environment, and these break down into microscopic particles " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", factory waste is another route, as are tyres which wear down as cars, lorries and so on travel along road surfaces.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We already understand " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " of microplastics from studies involving fish and other animals. There is evidence that microplastics harm small creatures " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", such as by damaging their mouths, or by impairing their ability to feed, for example when microplastics get lodged in their digestive system.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", it is likely that humans consume microplastics, as these have been detected in a wide range of food and drink products, including bottled water, as well as in water that comes direct from the tap. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", salt and many kinds of seafood have also been found to contain microplastics." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " that microplastics cause significant harm to people. In many countries, including here in the UK, there is legislation which prevents manufacturers from adding plastic microbeads to shower gels, facial cleansers and toothpaste.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It is " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " the total amount of microplastic particles in the soil as they can be hard to detect, but we do know they are carried in the air and deposited in the soil by rain. What's more, many of the fertilisers used by both farmers and gardeners contain microplastics.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A team from the Anglia Ruskin University in Cambridge has carried out a study of the effects of microplastics on the digestive tracts of earthworms. These worms, which live in topsoil, are " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " our agricultural system. By feeding on soil, they mix nutrients into it, thereby making it more fertile.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The researchers set out to discover whether the introduction of microplastics into the soil – and the subsequent ingestion of these by earthworms – would impact soil quality and ultimately inhibit plant growth. " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ", yes, it did. After placing three different types of microplastic particles into the soil, they planted perennial rye grass. The particles of microplastic, which included biodegradable PLA and conventional high-density polyethylene, or HDPE, were then ingested by the earthworms in the soil. The result was that the worms lost weight rapidly. What's more, a lower percentage than normal of the rye grass seeds germinated, and the researchers concluded that this was a direct result of the earthworms being unable to fulfil their normal role in making soil more fertile. The team also discovered that there was an increase in the amount of acid found in the soil, and this was attributed mainly to the microplastic particles from conventional HDPE plastic.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The conclusions of the study make for very interesting reading – I've included the reference in the notes to give you at the end of this session. " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", the authors proposed the idea that we need to regard soil as we would regard any other process in nature. This means we should accept the implications of soil being dependent on decaying and dead matter constantly being passed through the bodies of earthworms. That is, when soil becomes impoverished by the presence of microplastics, not only ecosystems but also the whole of society are negatively impacted.",
        },
      ],
    },
  ],
};

export const CAM19_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "fibres from some ______ during washing",
    questionVi: "sợi từ một số ______ khi giặt",
    modelParaphraseEn: "Threads and microfibres detach from synthetic clothing every time they're put in a washing machine",
    modelParaphraseVi: "Threads and microfibres detach from synthetic clothing every time they're put in a washing machine",
    acceptedAnswers: ["clothing"],
    explanationEn: "Microfibres come off synthetic clothing in the wash.",
    explanationVi: "Sợi vi bong từ clothing tổng hợp khi giặt.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "injuries to the ______ of wildlife",
    questionVi: "tổn thương ______ của động vật hoang dã",
    modelParaphraseEn: "harm small creatures … by damaging their mouths, or by impairing their ability to feed",
    modelParaphraseVi: "harm small creatures … by damaging their mouths, or by impairing their ability to feed",
    acceptedAnswers: ["mouths"],
    explanationEn: "Mouths are damaged; digestive systems are also mentioned on the notes.",
    explanationVi: "Mouths bị tổn thương; hệ tiêu hóa cũng được nêu trên đề.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "in bottled and tap water, ______ and seafood",
    questionVi: "trong nước chai và nước máy, ______ và hải sản",
    modelParaphraseEn: "salt and many kinds of seafood have also been found to contain microplastics",
    modelParaphraseVi: "salt and many kinds of seafood have also been found to contain microplastics",
    acceptedAnswers: ["salt"],
    explanationEn: "Bottled/tap water are on the notes; the extra food-chain example is salt (plus seafood).",
    explanationVi: "Nước chai/máy đã có trên đề; ví dụ thêm trong chuỗi thực phẩm là salt.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "banned in skin cleaning products and ______",
    questionVi: "bị cấm trong sản phẩm làm sạch da và ______",
    modelParaphraseEn: "legislation which prevents manufacturers from adding plastic microbeads to shower gels, facial cleansers and toothpaste",
    modelParaphraseVi: "legislation which prevents manufacturers from adding plastic microbeads to shower gels, facial cleansers and toothpaste",
    acceptedAnswers: ["toothpaste"],
    explanationEn: "Skin products (shower gels / facial cleansers) plus toothpaste.",
    explanationVi: "Mỹ phẩm da (sữa tắm / sữa rửa mặt) và toothpaste.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "enter the soil through the air, rain and ______",
    questionVi: "vào đất qua không khí, mưa và ______",
    modelParaphraseEn: "carried in the air and deposited in the soil by rain. What's more, many of the fertilisers used by both farmers and gardeners contain microplastics",
    modelParaphraseVi: "carried in the air and deposited in the soil by rain. What's more, many of the fertilisers used by both farmers and gardeners contain microplastics",
    acceptedAnswers: ["fertilisers", "fertilizers"],
    explanationEn: "Air and rain are on the notes; the third route is fertilisers.",
    explanationVi: "Không khí và mưa đã có trên đề; đường thứ ba là fertilisers.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Earthworms add ______ to the soil",
    questionVi: "Giun đất bổ sung ______ vào đất",
    modelParaphraseEn: "By feeding on soil, they mix nutrients into it, thereby making it more fertile",
    modelParaphraseVi: "By feeding on soil, they mix nutrients into it, thereby making it more fertile",
    acceptedAnswers: ["nutrients"],
    explanationEn: "Earthworms mix nutrients into soil when they feed on it.",
    explanationVi: "Giun đất trộn nutrients vào đất khi ăn đất.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "whether microplastics in earthworms affect the ______ of plants",
    questionVi: "vi nhựa trong giun đất có ảnh hưởng ______ của cây không",
    modelParaphraseEn: "would impact soil quality and ultimately inhibit plant growth",
    modelParaphraseVi: "would impact soil quality and ultimately inhibit plant growth",
    acceptedAnswers: ["growth"],
    explanationEn: "The study asked if ingestion by earthworms would inhibit plant growth.",
    explanationVi: "Nghiên cứu hỏi việc giun nuốt vi nhựa có ức chế growth của cây không.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "______ loss in earthworms",
    questionVi: "mất ______ ở giun đất",
    modelParaphraseEn: "The result was that the worms lost weight rapidly",
    modelParaphraseVi: "The result was that the worms lost weight rapidly",
    acceptedAnswers: ["weight"],
    explanationEn: "After ingesting microplastics, worms lost weight rapidly.",
    explanationVi: "Sau khi nuốt vi nhựa, giun mất weight rất nhanh.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "a rise in the level of ______ in the soil",
    questionVi: "tăng lượng ______ trong đất",
    modelParaphraseEn: "there was an increase in the amount of acid found in the soil – attributed mainly to HDPE",
    modelParaphraseVi: "there was an increase in the amount of acid found in the soil – attributed mainly to HDPE",
    acceptedAnswers: ["acid"],
    explanationEn: "Soil acid rose, mainly from conventional HDPE particles.",
    explanationVi: "Acid trong đất tăng, chủ yếu từ hạt HDPE thông thường.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "changes to soil damage both ecosystems and ______",
    questionVi: "thay đổi đất gây hại hệ sinh thái và ______",
    modelParaphraseEn: "not only ecosystems but also the whole of society are negatively impacted",
    modelParaphraseVi: "not only ecosystems but also the whole of society are negatively impacted",
    acceptedAnswers: ["society"],
    explanationEn: "Impoverished soil harms ecosystems and society.",
    explanationVi: "Đất nghèo dinh dưỡng hại ecosystems và society.",
  },
];
