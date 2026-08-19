import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["It's good to see that", "It is good to see that"] },
    { id: "g2", answers: ["I'll start by giving you", "I will start by giving you"] },
    { id: "g3", answers: ["one thing I'm sure you'll want to know", "one thing I am sure you will want to know"] },
    { id: "g4", answers: ["At present", "at present"] },
    { id: "g5", answers: ["Of course", "of course"] },
    { id: "g6", answers: ["it wasn't one of our major criteria", "it was not one of our major criteria"] },
    { id: "g7", answers: ["We were more interested in the fact that", "we were more interested in the fact that"] },
    { id: "g8", answers: ["One drawback to the site", "one drawback to the site"] },
    { id: "g9", answers: ["we've taken account of", "we have taken account of"] },
    { id: "g10", answers: ["We've had a lot of positive feedback", "We have had a lot of positive feedback"] },
    { id: "g11", answers: ["We were particularly pleased"] },
    { id: "g12", answers: ["and we'll look at that", "and we will look at that"] },
    { id: "g13", answers: ["So I'll put a map", "So I will put a map"] },
    { id: "g14", answers: ["You'll see it's bounded", "You will see it is bounded"] },
    { id: "g15", answers: ["If you look at", "if you look at"] },
    { id: "g16", answers: ["Can you see the lake"] },
    { id: "g17", answers: ["We haven't forgotten about", "We have not forgotten about"] },
    { id: "g18", answers: ["It's planned to have", "It is planned to have"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hello everyone. " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston. I'm Mark Reynolds and I'm Communications Manager at the development.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: " a brief overview of our plans for the development. So " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " is why we've selected this particular site for a housing development." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " it's being used for farming, like much of the land around Nunston. But because of the new industrial centre in Nunston, there's a lot of demand for housing for employees in the region, as many employees are having to commute long distances at present.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", there's also the fact that we have an international airport just 20 minutes' drive away, but although that's certainly convenient, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " for choosing the site." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " there's an excellent hospital just 15 kilometres away, and a large secondary school even closer than that.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: " is that it's on quite a steep slope, but " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " that in our planning so it shouldn't be a major problem." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " about the plans. People like the wide variety of accommodation types and prices, and the fact that it's only a short drive to get out into the countryside from the development.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " that so many people liked the designs for the layout of the development, with the majority of people saying it generally made a good impression and blended in well with the natural features of the landscape, with provision made for protecting trees and wildlife on the site.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some people have mentioned that they'd like to see more facilities for cyclists, " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ", but the overall feedback has been that the design and facilities of the development make it seem a place where people of all ages can live together happily.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " of the proposed development up on the screen. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " on the south side by the main road, which then goes on to Nunston. Another boundary is formed by London Road, on the western side of the development. Inside the development there'll be about 400 houses and 3 apartment blocks.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There'll also be a school for children up to 11 years old. " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " the South Entrance at the bottom of the map, there's a road from there that goes right up through the development. The school will be on that road, at the corner of the second turning to the left.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A large sports centre is planned with facilities for indoor and outdoor activities. This will be on the western side of the development, just below the road that branches off from London Road.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "There'll be a clinic where residents can go if they have any health problems. " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " towards the top of the map? The clinic will be just below this, to the right of a street of houses.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There'll also be a community centre for people of all ages. On the northeast side of the development, there'll be a row of specially designed houses specifically for residents over 65, and the community centre will be adjoining this.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " shopping. There'll be a supermarket between the two entrances to the development. We're planning to leave the three large trees near London Road, and it'll be just to the south of these.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " a playground for younger children. If you look at the road that goes up from the South Entrance, you'll see it curves round to the left at the top, and the playground will be in that curve, with nice views of the lake.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "OK, so now does anyone …" }],
    },
  ],
};

export const CAM18_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO main reasons for choosing the site: B easy access to local facilities",
    questionVi: "Hai lý do chọn đất: B dễ tiếp cận tiện ích địa phương",
    modelParaphraseEn: "an excellent hospital just 15 kilometres away, and a large secondary school even closer",
    modelParaphraseVi: "an excellent hospital just 15 kilometres away, and a large secondary school even closer",
    acceptedAnswers: ["hospital", "secondary school", "local facilities"],
    explanationEn: "B = hospital + secondary school nearby — not the airport (explicitly not a major criterion) or the slope.",
    explanationVi: "B = bệnh viện + trường cấp 2 gần — không phải sân bay (không phải tiêu chí chính) hay dốc.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) E it will be convenient for workers",
    questionVi: "(cùng danh sách) E thuận tiện cho người lao động",
    modelParaphraseEn: "demand for housing for employees in the region – many have to commute long distances",
    modelParaphraseVi: "demand for housing for employees in the region – many have to commute long distances",
    acceptedAnswers: ["employees", "commute", "industrial centre", "workers"],
    explanationEn: "E = housing is needed for industrial-centre employees who currently commute a long way.",
    explanationVi: "E = cần nhà cho nhân viên khu công nghiệp đang phải đi làm xa.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "TWO positive aspects: B the impact on the environment",
    questionVi: "Hai điểm khen: B tác động môi trường",
    modelParaphraseEn: "blended in well with the natural features of the landscape – protecting trees and wildlife",
    modelParaphraseVi: "blended in well with the natural features of the landscape – protecting trees and wildlife",
    acceptedAnswers: ["blended in", "landscape", "trees and wildlife", "environment"],
    explanationEn: "B = the layout blends with the landscape and protects trees and wildlife — cyclists were a request, not praise.",
    explanationVi: "B = quy hoạch hòa với cảnh quan, bảo vệ cây và động vật — xe đạp chỉ là đề nghị, không phải lời khen.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) C encouragement of good relations between residents",
    questionVi: "(cùng danh sách) C khuyến khích quan hệ tốt giữa cư dân",
    modelParaphraseEn: "a place where people of all ages can live together happily",
    modelParaphraseVi: "a place where people of all ages can live together happily",
    acceptedAnswers: ["all ages", "live together happily", "relations"],
    explanationEn: "C = all ages living together happily. Variety of prices is mentioned, but not that all housing is cheap.",
    explanationVi: "C = mọi lứa tuổi sống chung vui vẻ. Có nhiều mức giá, không phải nhà nào cũng rẻ.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "School (map A–I)",
    questionVi: "School (bản đồ A–I)",
    modelParaphraseEn: "on the road from the South Entrance, at the corner of the second turning to the left",
    modelParaphraseVi: "on the road from the South Entrance, at the corner of the second turning to the left",
    acceptedAnswers: ["G", "second turning to the left", "South Entrance"],
    explanationEn: "From the South Entrance, go up; the school is at the second left-hand corner (G).",
    explanationVi: "Từ cổng Nam đi lên; trường ở góc rẽ trái thứ hai (G).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Sports centre (map A–I)",
    questionVi: "Sports centre (bản đồ A–I)",
    modelParaphraseEn: "on the western side, just below the road that branches off from London Road",
    modelParaphraseVi: "on the western side, just below the road that branches off from London Road",
    acceptedAnswers: ["C", "western side", "below the road", "London Road"],
    explanationEn: "Western side of the site, just under the road branching from London Road (C).",
    explanationVi: "Phía tây khu, ngay dưới đường nhánh từ London Road (C).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Clinic (map A–I)",
    questionVi: "Clinic (bản đồ A–I)",
    modelParaphraseEn: "just below the lake, to the right of a street of houses",
    modelParaphraseVi: "just below the lake, to the right of a street of houses",
    acceptedAnswers: ["D", "below the lake", "right of a street"],
    explanationEn: "Find the lake at the top; the clinic is just below it, to the right of houses (D).",
    explanationVi: "Tìm hồ phía trên; phòng khám ngay dưới hồ, bên phải dãy nhà (D).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Community centre (map A–I)",
    questionVi: "Community centre (bản đồ A–I)",
    modelParaphraseEn: "on the northeast side, adjoining the row of houses for residents over 65",
    modelParaphraseVi: "on the northeast side, adjoining the row of houses for residents over 65",
    acceptedAnswers: ["B", "northeast", "adjoining", "over 65"],
    explanationEn: "Northeast: next to the specially designed houses for over-65s (B).",
    explanationVi: "Phía đông bắc: sát dãy nhà cho người trên 65 (B).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Supermarket (map A–I)",
    questionVi: "Supermarket (bản đồ A–I)",
    modelParaphraseEn: "between the two entrances, just to the south of the three large trees near London Road",
    modelParaphraseVi: "between the two entrances, just to the south of the three large trees near London Road",
    acceptedAnswers: ["H", "between the two entrances", "south of the trees"],
    explanationEn: "Between the two entrances, immediately south of the three trees by London Road (H).",
    explanationVi: "Giữa hai lối vào, ngay phía nam ba cây gần London Road (H).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Playground (map A–I)",
    questionVi: "Playground (bản đồ A–I)",
    modelParaphraseEn: "in the curve at the top of the road from the South Entrance, with views of the lake",
    modelParaphraseVi: "in the curve at the top of the road from the South Entrance, with views of the lake",
    acceptedAnswers: ["A", "in that curve", "views of the lake"],
    explanationEn: "The South Entrance road curves left at the top; the playground sits in that bend (A).",
    explanationVi: "Đường từ cổng Nam cong trái ở đỉnh; sân chơi nằm trong khúc cong đó (A).",
  },
];
