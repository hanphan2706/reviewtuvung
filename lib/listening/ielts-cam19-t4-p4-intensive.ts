import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T4_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["as an easy answer to the climate crisis"] },
    { id: "g2", answers: ["tree planting isn't as straightforward", "tree planting is not as straightforward"] },
    { id: "g3", answers: ["it can do considerably more damage than good"] },
    { id: "g4", answers: ["it's crucial that the right trees are selected", "it is crucial that the right trees are selected"] },
    { id: "g5", answers: ["A mix of species should always be planted"] },
    { id: "g6", answers: ["It's important to avoid non-native species", "It is important to avoid non-native species"] },
    { id: "g7", answers: ["Restoring biodiversity that will maximise carbon capture", "Restoring biodiversity that will maximize carbon capture"] },
    { id: "g8", answers: ["the sign of a highly successful tree-planting scheme"] },
    { id: "g9", answers: ["Choosing the right location for reforestation projects"] },
    { id: "g10", answers: ["It's better to avoid non-forested landscapes", "It is better to avoid non-forested landscapes"] },
    { id: "g11", answers: ["Large-scale reforestation projects require careful planning"] },
    { id: "g12", answers: ["Drone technology is a useful tool"] },
    { id: "g13", answers: ["A good example of where the right trees were picked"] },
    { id: "g14", answers: ["Figs are a keystone species"] },
    { id: "g15", answers: ["Unlike the majority of fruit trees"] },
    { id: "g16", answers: ["local communities are consulted and involved"] },
    { id: "g17", answers: ["an example of a project which has succeeded"] },
    { id: "g18", answers: ["the local economy is more stable"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Tree planting now dominates political and popular agendas and is often presented " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ", as well as a way for business corporations to offset their carbon emissions. But unfortunately, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " as some people think. When the wrong trees are planted in the wrong place, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", failing to help either people or the environment." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Reforestation projects are currently being undertaken on a huge scale in many countries and " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", typical of the local natural forest ecosystem and including rare and endangered species in order to create a rich ecosystem. " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " that could become invasive. Invasive species are a significant contributor to the current global biodiversity crisis and are often in competition with native species and may threaten their long-term survival.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " is key when reforesting an area, but ideally any reforestation project should have several goals. These could include selecting trees that can contribute to wildlife conservation, improve the availability of food for the local community and maintain the stability of soil systems. Meeting as many of these goals as possible, whilst doing no harm to local communities, native ecosystems and vulnerable species, is " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ". To ensure the survival and resilience of a planted forest, it's vital to use tree seeds with appropriate levels of genetic diversity: the amount of genetic variation found within a species essential for their survival. Using seeds with low genetic diversity generally lowers the resilience of restored forests, which can make them vulnerable to disease and unable to adapt to climate change.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " is as important as choosing the right trees. Ultimately, the best area for planting trees would be in formerly forested areas that are in poor condition. " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " such as natural grasslands, savannas or wetlands as these ecosystems already contribute greatly to capturing carbon. It would also be advantageous to choose an area where trees could provide other benefits, such as recreational spaces. Reforesting areas which are currently exploited for agriculture should be avoided as this often leads to other areas being deforested.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". Making the right decisions about where to plant trees depends on having the right information. Having detailed and up-to-date maps identifying high-priority areas for intervention is essential. " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " in helping to prioritise and monitor areas of degraded forest for restoration. In Brazil, it's being used to identify and quantify how parts of the Amazon are being devastated by human activities such as rearing cattle and illegal logging.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " is in Lampang Province in Northern Thailand. A previously forested site which had been degraded through mining was reforested by a cement company together with Chiang Mai University. After spreading 60 cm of topsoil, they planted 14 different native tree species which included several species of fig. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " because of the critical role they play in maintaining wildlife populations. They are central to tropical reforestation projects as they accelerate the speed of the recovery process by attracting animals and birds which act as natural seed dispersers. This helps to promote diversity through the healthy regrowth of a wide range of plant species. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", figs bear fruit all year round, providing a reliable food source for many species. At this site, for example, after only three rainy seasons, monkeys started visiting to eat the fig fruits, naturally dispersing seeds through defecation.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Reforestation projects should always aim to make sure that " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " in the decision-making process." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The restoration of mangrove forests in Madagascar is " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " in creating real benefits for the community. Destruction of the mangrove forests had a terrible impact on plant and animal life, and also badly affected the fishing industry, which was a major source of employment for local people living in coastal areas. The reforestation project involved hiring local people to plant and care for the new mangrove trees. Millions of mangrove trees have now been planted which has resulted in the return of a healthy aquatic ecosystem. The mangroves also act as a defence against the increased threat of flooding caused by climate change. What's more, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " and thousands more Madagascans are now able to send their children to school." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "One other important point to consider …" }],
    },
  ],
};

export const CAM19_T4_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "not include invasive species because of possible ______ with native species",
    questionVi: "not include invasive species because of possible ______ with native species",
    modelParaphraseEn: "are often in competition with native species and may threaten their long-term survival",
    modelParaphraseVi: "are often in competition with native species and may threaten their long-term survival",
    acceptedAnswers: ["competition"],
    explanationEn: "Invasives compete with natives and can threaten their survival.",
    explanationVi: "Loài xâm lấn cạnh tranh (competition) với loài bản địa và đe dọa sự tồn tại của chúng.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "provide sustainable sources of ______ for local people",
    questionVi: "provide sustainable sources of ______ for local people",
    modelParaphraseEn: "improve the availability of food for the local community",
    modelParaphraseVi: "improve the availability of food for the local community",
    acceptedAnswers: ["food"],
    explanationEn: "Goals include wildlife conservation, food for locals, and soil stability – plus carbon capture.",
    explanationVi: "Mục tiêu gồm bảo tồn động vật, food cho dân địa phương và ổn định đất – cùng hấp thụ carbon.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "high genetic diversity to increase resistance to ______ and climate change",
    questionVi: "high genetic diversity to increase resistance to ______ and climate change",
    modelParaphraseEn: "low genetic diversity … can make them vulnerable to disease and unable to adapt to climate change",
    modelParaphraseVi: "low genetic diversity … can make them vulnerable to disease and unable to adapt to climate change",
    acceptedAnswers: ["disease"],
    explanationEn: "Low diversity lowers resilience – forests become vulnerable to disease and climate change.",
    explanationVi: "Đa dạng gen thấp làm giảm sức chống chịu – rừng dễ bị disease và biến đổi khí hậu.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "not select land which is being used for ______",
    questionVi: "not select land which is being used for ______",
    modelParaphraseEn: "Reforesting areas which are currently exploited for agriculture should be avoided as this often leads to other areas being deforested",
    modelParaphraseVi: "Reforesting areas which are currently exploited for agriculture should be avoided as this often leads to other areas being deforested",
    acceptedAnswers: ["agriculture"],
    explanationEn: "Avoid farmland – planting there often just pushes deforestation elsewhere. Prefer degraded former forest.",
    explanationVi: "Tránh đất agriculture – trồng ở đó thường đẩy phá rừng sang chỗ khác. Nên chọn rừng cũ đã suy thoái.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "Base planning decisions on information from accurate ______",
    questionVi: "Base planning decisions on information from accurate ______",
    modelParaphraseEn: "Having detailed and up-to-date maps identifying high-priority areas for intervention is essential",
    modelParaphraseVi: "Having detailed and up-to-date maps identifying high-priority areas for intervention is essential",
    acceptedAnswers: ["maps"],
    explanationEn: "Planning needs detailed, up-to-date maps of high-priority areas.",
    explanationVi: "Quy hoạch cần maps chi tiết, cập nhật cho vùng ưu tiên.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "Drones identify Amazon areas endangered by keeping ______ and illegal logging",
    questionVi: "Drones identify Amazon areas endangered by keeping ______ and illegal logging",
    modelParaphraseEn: "devastated by human activities such as rearing cattle and illegal logging",
    modelParaphraseVi: "devastated by human activities such as rearing cattle and illegal logging",
    acceptedAnswers: ["cattle"],
    explanationEn: "Illegal logging is already on the notes; the other threat is rearing cattle.",
    explanationVi: "Khai thác gỗ trái phép đã có trên đề; mối đe dọa kia là chăn cattle.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "fig trees: increasing the ______ of recovery by attracting animals and birds",
    questionVi: "fig trees: increasing the ______ of recovery by attracting animals and birds",
    modelParaphraseEn: "they accelerate the speed of the recovery process by attracting animals and birds which act as natural seed dispersers",
    modelParaphraseVi: "they accelerate the speed of the recovery process by attracting animals and birds which act as natural seed dispersers",
    acceptedAnswers: ["speed"],
    explanationEn: "Figs are a keystone species; animals/birds disperse seeds and speed recovery.",
    explanationVi: "Sung là loài then chốt; động vật/chim phát tán hạt và tăng speed phục hồi.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "e.g. ______ were soon attracted to the area",
    questionVi: "e.g. ______ were soon attracted to the area",
    modelParaphraseEn: "after only three rainy seasons, monkeys started visiting to eat the fig fruits",
    modelParaphraseVi: "after only three rainy seasons, monkeys started visiting to eat the fig fruits",
    acceptedAnswers: ["monkeys"],
    explanationEn: "Monkeys arrived after three rainy seasons to eat figs and disperse seeds.",
    explanationVi: "Monkeys tới sau ba mùa mưa để ăn sung và phát tán hạt.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "mangrove destruction made it difficult to make a living from ______",
    questionVi: "mangrove destruction made it difficult to make a living from ______",
    modelParaphraseEn: "badly affected the fishing industry, which was a major source of employment for local people",
    modelParaphraseVi: "badly affected the fishing industry, which was a major source of employment for local people",
    acceptedAnswers: ["fishing"],
    explanationEn: "Mangrove loss hit plant/animal life and the local fishing industry.",
    explanationVi: "Mất rừng ngập mặn ảnh hưởng động thực vật và ngành fishing địa phương.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "the mangrove project protects against the higher risk of ______",
    questionVi: "the mangrove project protects against the higher risk of ______",
    modelParaphraseEn: "The mangroves also act as a defence against the increased threat of flooding caused by climate change",
    modelParaphraseVi: "The mangroves also act as a defence against the increased threat of flooding caused by climate change",
    acceptedAnswers: ["flooding"],
    explanationEn: "Besides jobs and a healthy ecosystem, mangroves defend against climate-driven flooding.",
    explanationVi: "Ngoài việc làm và hệ sinh thái khỏe, rừng ngập mặn chống flooding do khí hậu.",
  },
];
