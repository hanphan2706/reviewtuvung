import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to illustrate this by telling you about", "I would like to illustrate this by telling you about"] },
    { id: "g2", answers: ["that I've been involved in recently", "that I have been involved in recently"] },
    { id: "g3", answers: ["these birds of prey provide important social and ecological benefits to them"] },
    { id: "g4", answers: ["And the predatory habits of these birds also protect farmers in other ways"] },
    { id: "g5", answers: ["whose bite may be dangerous or even fatal"] },
    { id: "g6", answers: ["keeping their populations under control"] },
    { id: "g7", answers: ["the birds played a key role in the culture of the region"] },
    { id: "g8", answers: ["after a relatively slow start"] },
    { id: "g9", answers: ["although these birds of prey are protected by the government"] },
    { id: "g10", answers: ["Some of these deaths are accidental"] },
    { id: "g11", answers: ["Drivers in Zambia have to take special care at night"] },
    { id: "g12", answers: ["And local farmers also pose a threat to these birds"] },
    { id: "g13", answers: ["which is illegal but understandable"] },
    { id: "g14", answers: ["which again is illegal and can have negative effects on the ecosystem"] },
    { id: "g15", answers: ["this is counterproductive"] },
    { id: "g16", answers: ["but this would cost far too much to be a practical solution"] },
    { id: "g17", answers: ["without actually harming them"] },
    { id: "g18", answers: ["these birds of prey remain a major threat to the chickens' survival"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We've been looking at different types of conflicts that may arise between wildlife and humans at the boundaries of protected areas, such as national parks and animal sanctuaries. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " some research " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " in the Central African country of Zambia in the area around the Chembe Bird Sanctuary, which contains over 300 of the listed birds of Zambia. These include a number of birds of prey such as eagles, hawks and owls that live by hunting and killing other birds and animals. Now most of the people living in the local communities near to the bird sanctuary are small-scale farmers and " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For example, a lot of damage can be caused to farmers' crops by rodents, such as rats, which would consume the crops as they grow in the fields, as well as after harvesting if they weren't hunted and killed by the birds.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". For example, a major danger to rural workers is snakes, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", and birds of prey have a major role in " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Local people have always been aware of these benefits and for years, even before the sanctuary was opened in 1973, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "However, more recently, the sanctuary and its birds have also become increasingly important to the community in economic terms, because at present, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", tourism has become an important source of revenue for them." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", their numbers are falling. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Fatalities occur when birds alight on roads to catch and eat their prey, and are hit by fast-moving traffic. " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: ", as birds may regard the quieter roads as safe places to sleep." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Accidental deaths may also occur if these birds fly close to high power lines as they may be electrocuted. This is a particular danger in the heavy rain which can occur in the region in the months from December to April. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As well as growing crops, small-scale farmers in the area also rear chickens. These provide food for the farmers' families, as well as being an important source of income. But they're also an easy target for birds of prey, and so farmers may shoot these birds, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", or they may poison the birds, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So how else can farmers protect their chickens from birds of prey? Some people believe that to prevent the predators from settling near the area where the chickens are kept, it's best to keep this area free from vegetation. But in fact, " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", as it means the chickens have no cover to hide in and they'll be easier for the birds to see.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Another possibility would be to prevent the chickens from going outside at all and to keep them safe from predators inside a building, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Nearly all the farmers reported that they spent a lot of time and effort trying to frighten off the birds of prey " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". Most of the farmers had at least one dog and said this was a big help at scaring away the predators.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some of the farmers also reported that during the breeding season, when the chickens were particularly vulnerable, they encouraged their children to watch over the chickens and to hit pans with a metal spoon so that the resulting noise would succeed in driving away birds that were trying to seize the young chicks. None of these methods was 100% effective, so as a result the village people told us that rather than just using one method, they were forced to use a combination for them to have any effect.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And even so, " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and cause considerable economic loss to farmers. So we looked at the possibility of a longer-term solution to…",
        },
      ],
    },
  ],
};

export const CAM20_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "They destroy ______ and other rodents",
    questionVi: "They destroy ______ and other rodents",
    modelParaphraseEn: "damage can be caused to farmers' crops by rodents, such as rats, which would consume the crops",
    modelParaphraseVi: "damage can be caused to farmers' crops by rodents, such as rats, which would consume the crops",
    acceptedAnswers: ["rats"],
    explanationEn: "Rats are the named rodents that eat crops in the fields and after harvest unless the birds hunt them.",
    explanationVi: "Rats là loài gặm nhấm được nêu — phá mùa trên đồng và sau thu hoạch nếu chim không săn.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "They help to prevent farmers from being bitten by ______",
    questionVi: "They help to prevent farmers from being bitten by ______",
    modelParaphraseEn: "a major danger to rural workers is snakes, whose bite may be dangerous or even fatal",
    modelParaphraseVi: "a major danger to rural workers is snakes, whose bite may be dangerous or even fatal",
    acceptedAnswers: ["snakes"],
    explanationEn: "Birds of prey keep snake populations under control, reducing dangerous bites.",
    explanationVi: "Chim săn mồi kiểm soát số lượng snakes, giảm nguy cơ bị cắn.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "They now support the economy by encouraging ______ in the area",
    questionVi: "They now support the economy by encouraging ______ in the area",
    modelParaphraseEn: "after a relatively slow start, tourism has become an important source of revenue for them",
    modelParaphraseVi: "after a relatively slow start, tourism has become an important source of revenue for them",
    acceptedAnswers: ["tourism"],
    explanationEn: "Culture was already important; the newer economic benefit is tourism.",
    explanationVi: "Văn hóa vốn đã quan trọng; lợi ích kinh tế mới hơn là tourism.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "accidentally killed by ______ when they are hunting or sleeping",
    questionVi: "accidentally killed by ______ when they are hunting or sleeping",
    modelParaphraseEn: "birds alight on roads to catch and eat their prey, and are hit by fast-moving traffic … quieter roads as safe places to sleep",
    modelParaphraseVi: "birds alight on roads to catch and eat their prey, and are hit by fast-moving traffic … quieter roads as safe places to sleep",
    acceptedAnswers: ["traffic"],
    explanationEn: "Hunting or sleeping on roads — they are hit by traffic.",
    explanationVi: "Săn mồi hoặc ngủ trên đường — bị traffic đụng.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "electrocution from power lines, especially when there is a lot of ______",
    questionVi: "electrocution from power lines, especially when there is a lot of ______",
    modelParaphraseEn: "fly close to high power lines as they may be electrocuted. This is a particular danger in the heavy rain",
    modelParaphraseVi: "fly close to high power lines as they may be electrocuted. This is a particular danger in the heavy rain",
    acceptedAnswers: ["rain"],
    explanationEn: "Power-line electrocution is especially dangerous in heavy rain (December to April).",
    explanationVi: "Điện giật từ đường dây nguy hiểm nhất khi mưa nặng (tháng 12–4).",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "farmers may illegally shoot them or ______ them",
    questionVi: "farmers may illegally shoot them or ______ them",
    modelParaphraseEn: "farmers may shoot these birds, which is illegal but understandable, or they may poison the birds",
    modelParaphraseVi: "farmers may shoot these birds, which is illegal but understandable, or they may poison the birds",
    acceptedAnswers: ["poison"],
    explanationEn: "Shooting is already on the notes; the other illegal action is poisoning, which also harms the ecosystem.",
    explanationVi: "Bắn đã có trên đề; hành vi trái phép kia là poison — còn hại hệ sinh thái.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "providing a ______ for chickens (expensive)",
    questionVi: "providing a ______ for chickens (expensive)",
    modelParaphraseEn: "keep them safe from predators inside a building, but this would cost far too much to be a practical solution",
    modelParaphraseVi: "keep them safe from predators inside a building, but this would cost far too much to be a practical solution",
    acceptedAnswers: ["building"],
    explanationEn: "Keeping chickens inside a building would work but is far too expensive. Clearing vegetation is unhelpful.",
    explanationVi: "Nhốt gà trong building thì an toàn nhưng quá đắt. Phát quang thực vật thì phản tác dụng.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "frightening birds of prey by keeping a ______",
    questionVi: "frightening birds of prey by keeping a ______",
    modelParaphraseEn: "Most of the farmers had at least one dog and said this was a big help at scaring away the predators",
    modelParaphraseVi: "Most of the farmers had at least one dog and said this was a big help at scaring away the predators",
    acceptedAnswers: ["dog"],
    explanationEn: "A dog helps scare predators away without harming them.",
    explanationVi: "Nuôi dog giúp xua chim săn mồi mà không làm hại chúng.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "making a ______ – e.g. with metal objects",
    questionVi: "making a ______ – e.g. with metal objects",
    modelParaphraseEn: "hit pans with a metal spoon so that the resulting noise would succeed in driving away birds",
    modelParaphraseVi: "hit pans with a metal spoon so that the resulting noise would succeed in driving away birds",
    acceptedAnswers: ["noise"],
    explanationEn: "Children hit pans with a metal spoon — the noise drives birds away from chicks.",
    explanationVi: "Trẻ đập chảo bằng thìa kim loại — noise xua chim khỏi gà con.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "A ______ of methods is usually most effective",
    questionVi: "A ______ of methods is usually most effective",
    modelParaphraseEn: "rather than just using one method, they were forced to use a combination for them to have any effect",
    modelParaphraseVi: "rather than just using one method, they were forced to use a combination for them to have any effect",
    acceptedAnswers: ["combination"],
    explanationEn: "No single method was 100% effective — a combination was needed.",
    explanationVi: "Không phương pháp nào hiệu quả 100% — cần combination.",
  },
];
