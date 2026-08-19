import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Good evening everyone"] },
    {
      id: "g2",
      answers: ["I'm chairman of the Highways Committee", "I am chairman of the Highways Committee"],
    },
    {
      id: "g3",
      answers: [
        "We've called this meeting to inform members of the public",
        "We have called this meeting to inform members of the public",
      ],
    },
    {
      id: "g4",
      answers: [
        "I'll start by summarising these changes before we open the meeting to questions",
        "I will start by summarising these changes before we open the meeting to questions",
      ],
    },
    { id: "g5", answers: ["why do we need to make these changes to traffic systems in Granford"] },
    { id: "g6", answers: ["traffic is becoming an increasing problem"] },
    {
      id: "g7",
      answers: [
        "while they've been building the new hospital",
        "while they have been building the new hospital",
      ],
    },
    {
      id: "g8",
      answers: [
        "that's not something we want to see happen, obviously",
        "that is not something we want to see happen, obviously",
      ],
    },
    { id: "g9", answers: ["We recently carried out a survey of local residents"] },
    { id: "g10", answers: ["their responses were interesting"] },
    {
      id: "g11",
      answers: ["this wasn't top of the list", "this was not top of the list"],
    },
    { id: "g12", answers: ["We think these new traffic regulations would make a lot of difference"] },
    {
      id: "g13",
      answers: [
        "We've managed to keep our proposals within budget, just",
        "We have managed to keep our proposals within budget, just",
      ],
    },
    { id: "g14", answers: ["so they can be covered by the Council"] },
    { id: "g15", answers: ["this slide shows a map of the central area of Granford"] },
    { id: "g16", answers: ["with the High Street in the middle and School Road on the right"] },
    {
      id: "g17",
      answers: [
        "That's a very busy area, so it should help things there",
        "That is a very busy area, so it should help things there",
      ],
    },
    {
      id: "g18",
      answers: [
        "It's not ideal, but probably better than the present arrangement",
        "It is not ideal, but probably better than the present arrangement",
      ],
    },
  ],
  lines: [
    { speaker: null, segments: [{ type: "gap", gapId: "g1" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "My name's Phil Sutton, and " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " about the new regulations for traffic and parking we're proposing for Granford.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Well, we're very aware that " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It's been especially noticeable with the increase in heavy traffic " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But it's the overall rise in the volume of traffic of all kinds that's concerning us.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "To date there's not been any increase in traffic accidents, but " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: ", and " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "People were very concerned about the lack of visibility on some roads due to cars parked along the sides of the roads.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'd expected complaints about the congestion near the school when parents are dropping off their children or picking them up, but ",
        },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", and nor were noise and fumes from trucks and lorries, though they were mentioned by some people.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g12" }, { type: "text", text: "." }],
    },
    { speaker: null, segments: [{ type: "text", text: "But we still have a long way to go." }] },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But, of course, it's no good introducing new regulations if we don't have a way of making sure that everyone obeys them, and that's an area we're still working on with the help of representatives from the police force.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, so " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Now, we already have a set of traffic lights in the High Street at the junction with Station Road, but we're planning to have another set at the other end, at the School Road junction, to regulate the flow of traffic along the High Street.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "We've decided we definitely need a pedestrian crossing." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We considered putting this on School Road, just outside the school, but in the end we decided that could lead to a lot of traffic congestion so we decided to locate it on the High Street, crossing the road in front of the supermarket.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "." }] },
    { speaker: null, segments: [{ type: "text", text: "We're proposing some changes to parking." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "At present, parking isn't allowed on the High Street outside the library, but we're going to change that, and allow parking there, but not at the other end of the High Street near School Road.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There'll be a new 'No Parking' sign on School Road, just by the entrance to the school, forbidding parking for 25 metres.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This should improve visibility for drivers and pedestrians, especially on the bend just to the north of the school.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As far as disabled drivers are concerned, at present they have parking outside the supermarket, but lorries also use those spaces, so we've got two new disabled parking spaces on the side road up towards the bank.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: "." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We also plan to widen the pavement on School Road. We think we can manage to get an extra half-metre on the bend just before you get to the school, on the same side of the road.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Finally, we've introduced new restrictions on loading and unloading for the supermarket, so lorries will only be allowed to stop there before 8 am.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "That's the supermarket on School Road - we kept to the existing arrangements with the High Street supermarket.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "OK. So that's about it." }] },
  ],
};

export const CAM13_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn:
      "Why are changes needed to traffic systems in Granford? A The number of traffic accidents has risen. / B The amount of traffic on the roads has increased. / C The types of vehicles on the roads have changed.",
    questionVi:
      "Why are changes needed to traffic systems in Granford? A The number of traffic accidents has risen. / B The amount of traffic on the roads has increased. / C The types of vehicles on the roads have changed.",
    modelParaphraseEn: "it's the overall rise in the volume of traffic of all kinds that's concerning us. To date there's not been any increase in traffic accidents",
    modelParaphraseVi: "it's the overall rise in the volume of traffic of all kinds that's concerning us. To date there's not been any increase in traffic accidents",
    acceptedAnswers: ["B", "The amount of traffic on the roads has increased"],
    explanationEn: "B = volume of traffic of all kinds has risen. Accidents have not increased; heavy traffic to the hospital is only extra context.",
    explanationVi: "B = volume of traffic of all kinds tăng. Accidents chưa tăng; xe nặng tới bệnh viện chỉ là ngữ cảnh.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn:
      "In a survey, local residents particularly complained about A dangerous driving by parents. / B pollution from trucks and lorries. / C inconvenience from parked cars.",
    questionVi:
      "In a survey, local residents particularly complained about A dangerous driving by parents. / B pollution from trucks and lorries. / C inconvenience from parked cars.",
    modelParaphraseEn: "People were very concerned about the lack of visibility on some roads due to cars parked along the sides of the roads",
    modelParaphraseVi: "People were very concerned about the lack of visibility on some roads due to cars parked along the sides of the roads",
    acceptedAnswers: ["C", "inconvenience from parked cars"],
    explanationEn: "C = parked cars blocking visibility. School congestion and lorry noise/fumes were expected or mentioned, but not top of the list.",
    explanationVi: "C = xe đỗ che tầm nhìn. Ùn tắc trường và khói/ồn xe tải được nhắc nhưng không đứng đầu.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn:
      "According to the speaker, one problem with the new regulations will be A raising money to pay for them. / B finding a way to make people follow them. / C getting the support of the police.",
    questionVi:
      "According to the speaker, one problem with the new regulations will be A raising money to pay for them. / B finding a way to make people follow them. / C getting the support of the police.",
    modelParaphraseEn: "it's no good introducing new regulations if we don't have a way of making sure that everyone obeys them … still working on with the help of representatives from the police force",
    modelParaphraseVi: "it's no good introducing new regulations if we don't have a way of making sure that everyone obeys them … still working on with the help of representatives from the police force",
    acceptedAnswers: ["B", "finding a way to make people follow them"],
    explanationEn: "B = making sure everyone obeys them. The proposals are already just within budget; police are helping, not refusing support.",
    explanationVi: "B = làm sao để mọi người obey. Đề xuất đã vừa trong budget; police đang giúp, không phải thiếu ủng hộ.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "On the map, New traffic lights (A–I)",
    questionVi: "On the map, New traffic lights (A–I)",
    modelParaphraseEn: "we're planning to have another set at the other end, at the School Road junction, to regulate the flow of traffic along the High Street",
    modelParaphraseVi: "we're planning to have another set at the other end, at the School Road junction, to regulate the flow of traffic along the High Street",
    acceptedAnswers: ["E"],
    explanationEn: "E = extra lights at the High Street / School Road junction (existing lights are at Station Road).",
    explanationVi: "E = đèn mới ở ngã High Street / School Road (đèn cũ ở Station Road).",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "On the map, Pedestrian crossing (A–I)",
    questionVi: "On the map, Pedestrian crossing (A–I)",
    modelParaphraseEn: "we decided to locate it on the High Street, crossing the road in front of the supermarket",
    modelParaphraseVi: "we decided to locate it on the High Street, crossing the road in front of the supermarket",
    acceptedAnswers: ["D"],
    explanationEn: "D = High Street in front of the supermarket, not outside the school on School Road (that would cause congestion).",
    explanationVi: "D = High Street trước supermarket, không phải ngoài trường trên School Road (sẽ ùn tắc).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "On the map, Parking allowed (A–I)",
    questionVi: "On the map, Parking allowed (A–I)",
    modelParaphraseEn: "parking isn't allowed on the High Street outside the library, but we're going to change that, and allow parking there",
    modelParaphraseVi: "parking isn't allowed on the High Street outside the library, but we're going to change that, and allow parking there",
    acceptedAnswers: ["B"],
    explanationEn: "B = parking will be allowed on the High Street outside the library, not near School Road.",
    explanationVi: "B = cho đỗ trên High Street ngoài library, không phải đầu gần School Road.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "On the map, New 'No Parking' sign (A–I)",
    questionVi: "On the map, New 'No Parking' sign (A–I)",
    modelParaphraseEn: "There'll be a new 'No Parking' sign on School Road, just by the entrance to the school, forbidding parking for 25 metres",
    modelParaphraseVi: "There'll be a new 'No Parking' sign on School Road, just by the entrance to the school, forbidding parking for 25 metres",
    acceptedAnswers: ["G"],
    explanationEn: "G = School Road by the school entrance; no parking for 25 metres (helps visibility on the bend north of the school).",
    explanationVi: "G = School Road sát cổng trường; cấm đỗ 25 metres (cải thiện tầm nhìn ở khúc cua phía bắc).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "On the map, New disabled parking spaces (A–I)",
    questionVi: "On the map, New disabled parking spaces (A–I)",
    modelParaphraseEn: "we've got two new disabled parking spaces on the side road up towards the bank",
    modelParaphraseVi: "we've got two new disabled parking spaces on the side road up towards the bank",
    acceptedAnswers: ["C"],
    explanationEn: "C = two new disabled spaces on the side road towards the bank (current supermarket spaces are also used by lorries).",
    explanationVi: "C = hai chỗ disabled mới trên side road hướng bank (chỗ supermarket hiện bị xe tải dùng).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "On the map, Widened pavement (A–I)",
    questionVi: "On the map, Widened pavement (A–I)",
    modelParaphraseEn: "an extra half-metre on the bend just before you get to the school, on the same side of the road",
    modelParaphraseVi: "an extra half-metre on the bend just before you get to the school, on the same side of the road",
    acceptedAnswers: ["H"],
    explanationEn: "H = School Road pavement widened by half a metre on the bend just before the school, same side.",
    explanationVi: "H = mở rộng vỉa hè School Road thêm half-metre ở khúc cua ngay trước trường, cùng phía.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "On the map, Lorry loading/unloading restrictions (A–I)",
    questionVi: "On the map, Lorry loading/unloading restrictions (A–I)",
    modelParaphraseEn: "lorries will only be allowed to stop there before 8 am. That's the supermarket on School Road",
    modelParaphraseVi: "lorries will only be allowed to stop there before 8 am. That's the supermarket on School Road",
    acceptedAnswers: ["I"],
    explanationEn: "I = School Road supermarket (before 8 am). High Street supermarket arrangements stay the same.",
    explanationVi: "I = supermarket trên School Road (trước 8 am). High Street supermarket giữ nguyên.",
  },
];
