import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Next on the agenda we have"] },
    { id: "g2", answers: ["results of the survey"] },
    { id: "g3", answers: ["People were generally satisfied with"] },
    { id: "g4", answers: ["complaints about potholes"] },
    {
      id: "g5",
      answers: ["affected people too much"],
    },
    { id: "g6", answers: ["was improved last year"] },
    {
      id: "g7",
      answers: ["in the immediate future"],
    },
    { id: "g8", answers: ["put on hold"] },
    {
      id: "g9",
      answers: ["this financial year"],
    },
    {
      id: "g10",
      answers: ["staying where they are"],
    },
    { id: "g11", answers: ["So that'll need some more thought", "So that will need some more thought"] },
    { id: "g12", answers: ["breathe in car fumes"] },
    { id: "g13", answers: ["provide bike racks there"] },
    { id: "g14", answers: ["So next on the agenda is"] },
    { id: "g15", answers: ["attractive and useful space"] },
    { id: "g16", answers: ["look at the map"] },
    { id: "g17", answers: ["a more attractive location"] },
    { id: "g18", answers: ["football and cricket pitches"] },
  ],
  lines: [
    {
      speaker: "CHAIRPERSON",
      segments: [
        { type: "text", text: "Right. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " traffic and highways. Councillor Thornton." },
      ],
    },
    { speaker: "THORNTON", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "Well, we now have the " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " carried out last month about traffic and road transport in the town." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: " the state of the roads." }],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "There were one or two " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " which will be addressed, but a significant number of people complained about the increasing number of heavy vehicles using our local roads to avoid traffic elsewhere.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "We'd expected more complaints by commuters about the reduction in the train service, but it doesn't seem to have ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "The cycle path that runs alongside the river is very well used by both cyclists and pedestrians since the surface ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", but overtaking can be a problem so we're going to add a bit on the side to make it wider.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "At some stage, we'd like to extend the path so that it goes all the way through the town, but that won't be happening ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "The plans to have a pedestrian crossing next to the Post Office have unfortunately had to be " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " for the time being." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "We'd budgeted for this to be done " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", but then there were rumours that the Post Office was going to move, which would have meant there wasn't really a need for a crossing.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "Now they've confirmed that they're " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ", but the Highways Department have told us that it would be dangerous to have a pedestrian crossing where we'd originally planned it as there's a bend in the road there.",
        },
      ],
    },
    { speaker: "THORNTON", segments: [{ type: "gap", gapId: "g11" }, { type: "text", text: "." }] },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "On Station Road near the station and level crossing, drivers can face quite long waits if the level crossing's closed, and we've now got signs up requesting them not to leave their engines running at that time.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "This means pedestrians waiting on the pavement to cross the railway line don't have to " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "We've had some problems with cyclists leaving their bikes chained to the railings outside the ticket office, but the station has agreed to ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "CHAIRPERSON",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " 'Proposals for improvements to the recreation ground'. Councillor Thornton again." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "Well, since we managed to extend the recreation ground, we've spent some time talking to local people about how it could be made a more ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "If you have a " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " up on the screen, you can see the river up in the north, and the Community Hall near the entrance from the road." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "At present, cars can park between the Community Hall and that line of trees to the east, but this is quite dangerous for pedestrians so we're suggesting a new car park on the opposite side of the Community Hall, right next to it.",
        },
      ],
    },
    { speaker: "THORNTON", segments: [{ type: "text", text: "We also have a new location for the cricket pitch." }] },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "As we've now purchased additional space to the east of the recreation ground, beyond the trees, we plan to move it away from its current location, which is rather near the road, into this new area beyond the line of trees.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "This means there's less danger of stray balls hitting cars or pedestrians." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "We've got plans for a children's playground which will be accessible by a footpath from the Community Hall and will be alongside the river.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "We'd originally thought of having it close to the road, but we think this will be " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "The skateboard ramp is very popular with both younger and older children – we had considered moving this up towards the river, but in the end we decided to have it in the southeast corner near the road.",
        },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        { type: "text", text: "The pavilion is very well used at present by both football players and cricketers." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "It will stay where it is now – to the left of the line of trees and near to the river – handy for both the ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "THORNTON",
      segments: [
        {
          type: "text",
          text: "And finally, we'll be getting a new notice board for local information, and that will be directly on people's right as they go from the road into the recreation ground.",
        },
      ],
    },
  ],
};

export const CAM16_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Main traffic concern: A cuts to public transport / B poor road maintenance / C changes in the type of traffic",
    questionVi: "Lo ngại giao thông chính: A cắt phương tiện công cộng / B đường kém bảo trì / C thay đổi loại xe",
    modelParaphraseEn: "a significant number of people complained about the increasing number of heavy vehicles using our local roads",
    modelParaphraseVi: "a significant number of people complained about the increasing number of heavy vehicles using our local roads",
    acceptedAnswers: ["heavy vehicles", "type of traffic", "C"],
    explanationEn: "C = more heavy vehicles (type of traffic). Potholes will be addressed; fewer train complaints than expected.",
    explanationVi: "C = nhiều xe tải nặng hơn (loại phương tiện). Ổ gà sẽ được xử lý; ít phàn nàn về tàu hơn dự kiến.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Cycle path by the river: A widened / B extended / C resurfaced",
    questionVi: "Đường xe đạp ven sông: A mở rộng / B kéo dài / C trải lại mặt",
    modelParaphraseEn: "overtaking can be a problem so we're going to add a bit on the side to make it wider",
    modelParaphraseVi: "overtaking can be a problem so we're going to add a bit on the side to make it wider",
    acceptedAnswers: ["wider", "widened", "add a bit on the side", "A"],
    explanationEn: "A = widened now. Extension through town is later, not immediate; the surface was already improved last year.",
    explanationVi: "A = mở rộng ngay. Kéo dài qua thị trấn là sau này; mặt đường đã cải thiện năm ngoái.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Pedestrian crossing postponed because: A Post Office moved / B location unsafe / C no funding",
    questionVi: "Vạch sang đường hoãn vì: A bưu điện chuyển / B vị trí không an toàn / C hết kinh phí",
    modelParaphraseEn: "it would be dangerous to have a pedestrian crossing where we'd originally planned it as there's a bend in the road there",
    modelParaphraseVi: "it would be dangerous to have a pedestrian crossing where we'd originally planned it as there's a bend in the road there",
    acceptedAnswers: ["dangerous", "bend in the road", "unsafe", "B"],
    explanationEn: "B = unsafe location (bend). The Post Office is staying; money had already been budgeted.",
    explanationVi: "B = vị trí không an toàn (khúc cua). Bưu điện ở lại; kinh phí đã được lên.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Station Road notices: A don't chain bikes / B switch off engines / C leave time to cross",
    questionVi: "Biển Station Road: A đừng khóa xe đạp / B tắt máy / C chừa thời gian băng qua",
    modelParaphraseEn: "we've now got signs up requesting them not to leave their engines running at that time",
    modelParaphraseVi: "we've now got signs up requesting them not to leave their engines running at that time",
    acceptedAnswers: ["engines running", "switch off", "B"],
    explanationEn: "B = switch off engines at the level crossing. Bike racks are a station plan, not the notices.",
    explanationVi: "B = tắt máy khi chờ barie. Giá xe đạp là kế hoạch nhà ga, không phải biển báo.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "New car park — C (opposite side of Community Hall)",
    questionVi: "Bãi xe mới — C (phía đối diện Community Hall)",
    modelParaphraseEn: "a new car park on the opposite side of the Community Hall, right next to it",
    modelParaphraseVi: "a new car park on the opposite side of the Community Hall, right next to it",
    acceptedAnswers: ["opposite side", "right next to it", "C"],
    explanationEn: "C = opposite the current park-between-hall-and-trees spot, still next to the hall.",
    explanationVi: "C = phía đối diện chỗ đỗ cũ giữa hội trường và hàng cây, vẫn sát hội trường.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "New cricket pitch — F (east, beyond the trees)",
    questionVi: "Sân cricket mới — F (phía đông, sau hàng cây)",
    modelParaphraseEn: "additional space to the east of the recreation ground, beyond the trees ... into this new area beyond the line of trees",
    modelParaphraseVi: "additional space to the east of the recreation ground, beyond the trees ... into this new area beyond the line of trees",
    acceptedAnswers: ["beyond the trees", "east", "F"],
    explanationEn: "F = new land east of the trees, away from the road.",
    explanationVi: "F = đất mới phía đông sau hàng cây, xa đường hơn.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Children's playground — A (by the river, from Community Hall)",
    questionVi: "Sân chơi trẻ em — A (ven sông, từ Community Hall)",
    modelParaphraseEn: "accessible by a footpath from the Community Hall and will be alongside the river",
    modelParaphraseVi: "accessible by a footpath from the Community Hall and will be alongside the river",
    acceptedAnswers: ["alongside the river", "footpath from the Community Hall", "A"],
    explanationEn: "A = by the river via a hall footpath, not close to the road.",
    explanationVi: "A = ven sông, đi bộ từ hội trường, không sát đường.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Skateboard ramp — I (southeast, near the road)",
    questionVi: "Ramp ván trượt — I (đông nam, sát đường)",
    modelParaphraseEn: "in the end we decided to have it in the southeast corner near the road",
    modelParaphraseVi: "in the end we decided to have it in the southeast corner near the road",
    acceptedAnswers: ["southeast corner", "near the road", "I"],
    explanationEn: "I = stays/moves to the southeast corner by the road, not up towards the river.",
    explanationVi: "I = góc đông nam sát đường, không dời lên phía sông.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Pavilion — E (left of the trees, near the river)",
    questionVi: "Pavilion — E (trái hàng cây, gần sông)",
    modelParaphraseEn: "It will stay where it is now – to the left of the line of trees and near to the river",
    modelParaphraseVi: "It will stay where it is now – to the left of the line of trees and near to the river",
    acceptedAnswers: ["left of the line of trees", "near to the river", "E"],
    explanationEn: "E = pavilion stays put, left of the trees and near the river.",
    explanationVi: "E = pavilion giữ nguyên, bên trái hàng cây và gần sông.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Notice board — H (on the right as you enter from the road)",
    questionVi: "Bảng thông báo — H (bên phải khi vào từ đường)",
    modelParaphraseEn: "directly on people's right as they go from the road into the recreation ground",
    modelParaphraseVi: "directly on people's right as they go from the road into the recreation ground",
    acceptedAnswers: ["on people's right", "from the road", "H"],
    explanationEn: "H = immediately on the right at the road entrance.",
    explanationVi: "H = ngay bên phải khi đi từ đường vào khu vui chơi.",
  },
];
