import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM15_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "I'd like to bring you up to date on some of the changes",
        "I would like to bring you up to date on some of the changes",
      ],
    },
    { id: "g2", answers: ["let's begin with a general overview", "let us begin with a general overview"] },
    { id: "g3", answers: ["it still has two gates, north and south, and a lake in the middle"] },
    { id: "g4", answers: ["The café continues to serve an assortment of drinks and snacks"] },
    {
      id: "g5",
      answers: ["We're hoping to change the location of the toilets", "We are hoping to change the location of the toilets"],
    },
    { id: "g6", answers: ["they're a bit out of the way at present", "they are a bit out of the way at present"] },
    { id: "g7", answers: ["The formal gardens have been replanted"] },
    { id: "g8", answers: ["which is already proving very popular"] },
    {
      id: "g9",
      answers: [
        "You have to look for it as it's a bit hidden in the trees",
        "You have to look for it as it is a bit hidden in the trees",
      ],
    },
    { id: "g10", answers: ["It's in constant use during the evenings and holidays", "It is in constant use during the evenings and holidays"] },
    { id: "g11", answers: ["to attract bees and butterflies"] },
    { id: "g12", answers: ["we had nowhere for children to let off steam"] },
    { id: "g13", answers: ["It's open year-round", "It is open year-round"] },
    { id: "g14", answers: ["irrespective of their age"] },
    { id: "g15", answers: ["There are plenty of seats where parents can relax"] },
    { id: "g16", answers: ["Over £80,000 was spent on replacing the glass walls"] },
    { id: "g17", answers: ["too expensive to replace up to now"] },
    {
      id: "g18",
      answers: ["We're grateful to all those who helped us", "We are grateful to all those who helped us"],
    },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As chair of the town council subcommittee on park facilities, ",
        },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " that have been made recently to Croft Valley Park." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So if you could just take a look at the map I handed out, " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So the basic arrangement of the park hasn't changed – " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " and is still in the same place, looking out over the lake and next to the old museum.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", and bring them nearer to the centre of the park as " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", near the adventure playground, in the corner of your map." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: " and should be at their best in a month or two." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They used to be behind the old museum, but we've now used the space near the south gate – between the park boundary and the path that goes past the lake towards the old museum.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We have a new outdoor gym for adults and children, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's by the glass houses, just to the right of the path from the south gate. ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One very successful introduction has been our skateboard ramp. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's near the old museum, at the end of a little path that leads off from the main path between the lake and the museum.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We've also introduced a new area for wild flowers, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's on a bend in the path that goes round the east side of the lake, just south of the adventure playground.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now let me tell you a bit more about some of the changes to Croft Valley Park.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One of our most exciting developments has been the adventure playground. We were aware that " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", and decided to use our available funds to set up a completely new facility in a large space to the north of the park.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ", though it closes early in the winter months, and entrance is completely free.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Children can choose whatever activities they want to do, " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", but we do ask adults not to leave them on their own there." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: " and keep an eye on their children at the same time." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lastly, the glass houses. A huge amount of work has been done on them to repair the damage following the disastrous fire that recently destroyed their western side.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " and the metal supports, as well as the plants that had been destroyed, although unfortunately the collection of tropical palm trees has proved ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At present the glass houses are open from 10am to 3pm Mondays to Thursdays, and it's hoped to extend this to the weekend soon.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        { type: "text", text: " by contributing their time and money to this achievement." },
      ],
    },
  ],
};

export const CAM15_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "café — map letter",
    questionVi: "café — chữ trên bản đồ",
    modelParaphraseEn: "still in the same place, looking out over the lake and next to the old museum",
    modelParaphraseVi: "still in the same place, looking out over the lake and next to the old museum",
    acceptedAnswers: ["D", "looking out over the lake", "next to the old museum"],
    explanationEn: "D = café by the lake, beside the old museum (not moved).",
    explanationVi: "D = quán café nhìn ra hồ, cạnh old museum (không dời).",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "toilets — map letter",
    questionVi: "toilets — chữ trên bản đồ",
    modelParaphraseEn: "near the adventure playground, in the corner of your map",
    modelParaphraseVi: "near the adventure playground, in the corner of your map",
    acceptedAnswers: ["C", "near the adventure playground", "in the corner"],
    explanationEn: "C = toilets still in the corner by the adventure playground (move is only a hope).",
    explanationVi: "C = toilet vẫn ở góc gần adventure playground (chỉ mới hy vọng dời).",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "formal gardens — map letter",
    questionVi: "formal gardens — chữ trên bản đồ",
    modelParaphraseEn: "near the south gate – between the park boundary and the path that goes past the lake towards the old museum",
    modelParaphraseVi: "near the south gate – between the park boundary and the path that goes past the lake towards the old museum",
    acceptedAnswers: ["G", "near the south gate", "between the park boundary"],
    explanationEn: "G = replanted formal gardens near the south gate, not behind the museum any more.",
    explanationVi: "G = formal gardens trồng lại gần cổng nam, không còn sau museum.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "outdoor gym — map letter",
    questionVi: "outdoor gym — chữ trên bản đồ",
    modelParaphraseEn: "by the glass houses, just to the right of the path from the south gate",
    modelParaphraseVi: "by the glass houses, just to the right of the path from the south gate",
    acceptedAnswers: ["H", "by the glass houses", "right of the path"],
    explanationEn: "H = outdoor gym hidden in the trees, right of the south-gate path by the glass houses.",
    explanationVi: "H = outdoor gym khuất trong cây, bên phải đường từ cổng nam, cạnh glass houses.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "skateboard ramp — map letter",
    questionVi: "skateboard ramp — chữ trên bản đồ",
    modelParaphraseEn: "near the old museum, at the end of a little path that leads off from the main path between the lake and the museum",
    modelParaphraseVi: "near the old museum, at the end of a little path that leads off from the main path between the lake and the museum",
    acceptedAnswers: ["A", "near the old museum", "little path"],
    explanationEn: "A = skateboard ramp down a side path between the lake and the museum.",
    explanationVi: "A = skateboard ramp ở cuối lối nhỏ giữa hồ và museum.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "wild flowers — map letter",
    questionVi: "wild flowers — chữ trên bản đồ",
    modelParaphraseEn: "on a bend in the path that goes round the east side of the lake, just south of the adventure playground",
    modelParaphraseVi: "on a bend in the path that goes round the east side of the lake, just south of the adventure playground",
    acceptedAnswers: ["E", "east side of the lake", "south of the adventure playground"],
    explanationEn: "E = wild flowers on a bend, east of the lake and south of the playground.",
    explanationVi: "E = hoa dại ở khúc cua, phía đông hồ và nam adventure playground.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Adventure playground (TWO): A Children must be supervised",
    questionVi: "Sân chơi mạo hiểm (HAI ý): A Trẻ phải có người trông",
    modelParaphraseEn: "we do ask adults not to leave them on their own there",
    modelParaphraseVi: "we do ask adults not to leave them on their own there",
    acceptedAnswers: ["A", "not to leave them on their own", "supervised"],
    explanationEn: "A = adults must stay with children. Activities are for any age; it is a new facility, not an expansion.",
    explanationVi: "A = người lớn không được để trẻ một mình. Mọi lứa tuổi đều chơi được; đây là cơ sở mới, không phải mở rộng.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Adventure playground (TWO): D No payment is required",
    questionVi: "Sân chơi mạo hiểm (HAI ý): D Không phải trả tiền",
    modelParaphraseEn: "entrance is completely free",
    modelParaphraseVi: "entrance is completely free",
    acceptedAnswers: ["D", "completely free", "no payment"],
    explanationEn: "D = free entry. It only closes early in winter — it does not cost more then.",
    explanationVi: "D = vào cửa miễn phí. Mùa đông chỉ đóng sớm hơn — không đắt hơn.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Glass houses (TWO): A They are closed at weekends",
    questionVi: "Nhà kính (HAI ý): A Đóng cửa cuối tuần",
    modelParaphraseEn: "open from 10am to 3pm Mondays to Thursdays, and it's hoped to extend this to the weekend soon",
    modelParaphraseVi: "open from 10am to 3pm Mondays to Thursdays, and it's hoped to extend this to the weekend soon",
    acceptedAnswers: ["A", "Mondays to Thursdays", "extend this to the weekend"],
    explanationEn: "A = closed at weekends for now (Mon–Thu only). Volunteers already helped; they are not still being recruited.",
    explanationVi: "A = hiện đóng cuối tuần (chỉ T2–T5). Tình nguyện viên đã giúp rồi, không phải đang tuyển.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Glass houses (TWO): C They were badly damaged by fire",
    questionVi: "Nhà kính (HAI ý): C Bị cháy hư nặng",
    modelParaphraseEn: "the disastrous fire that recently destroyed their western side",
    modelParaphraseVi: "the disastrous fire that recently destroyed their western side",
    acceptedAnswers: ["C", "disastrous fire", "destroyed their western side"],
    explanationEn: "C = fire damaged the western side. Glass was already replaced (£80,000); tropical palms have not been replaced.",
    explanationVi: "C = cháy phá phía tây. Kính đã thay (£80,000); cọ nhiệt đới chưa thay lại.",
  },
];
