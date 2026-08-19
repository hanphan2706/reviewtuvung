import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Thank you for choosing us"] },
    { id: "g2", answers: ["I've been the managing director", "I have been the managing director"] },
    { id: "g3", answers: ["Stevenson's is quite an old company"] },
    { id: "g4", answers: ["He was a very determined young man"] },
    { id: "g5", answers: ["although in fact that never came about"] },
    { id: "g6", answers: ["there was a delay of five years before that happened"] },
    { id: "g7", answers: ["we've expanded the premises considerably", "we have expanded the premises considerably"] },
    { id: "g8", answers: ["the layout is far from ideal"] },
    { id: "g9", answers: ["I'd better give you some idea of", "I had better give you some idea of"] },
    { id: "g10", answers: ["so you know what to expect"] },
    { id: "g11", answers: ["your school isn't able to arrange that this year", "your school is not able to arrange that this year"] },
    { id: "g12", answers: ["I'll briefly help you to orientate yourselves around the site", "I will briefly help you to orientate yourselves around the site"] },
    { id: "g13", answers: ["which we try to make attractive and welcoming to visitors"] },
    { id: "g14", answers: ["that'll be where you meet each morning", "that will be where you meet each morning"] },
    { id: "g15", answers: ["I can confidently say that"] },
    { id: "g16", answers: ["I'm afraid there's no natural daylight in the room", "I am afraid there is no natural daylight in the room"] },
    { id: "g17", answers: ["Then you'll need to know where some of the offices are", "Then you will need to know where some of the offices are"] },
    { id: "g18", answers: ["OK, now are there any questions before we"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Good morning, everyone, and welcome to Stevenson's, one of the country's major manufacturers of metal goods.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for your two weeks of work experience." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "My name is Julia Simmons, and since the beginning of this year " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Like me, the founder, Ronald Stevenson, went into the steel industry when he left school - that was in 1923.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He set up this company when he finished his apprenticeship, in 1926, although he actually started making plans two years earlier, in 1924.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "!" }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Stevenson's long-term plan was to manufacture components for the machine tools industry - ",
        },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " - and for the automotive industry, that is, cars and lorries." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", because shortly before the company went into production, Stevenson was given the opportunity to make goods for hospitals and other players in the healthcare industry, so that's what we did for the first five years.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Over the years, " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " - we were lucky that the site is big enough, so moving to a new location has never been necessary.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "However, " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: " for modern machinery and production methods, so we intend to carry out major refurbishment of this site over the next five years.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: " what you'll be doing during your two weeks with us, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Most mornings you'll have a presentation from one of the managers, to learn about their department, starting this morning with research and development.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And you'll all spend some time in each department, observing what's going on and talking to people - as long as you don't stop them from doing their work altogether!",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In the past, a teacher from your school has come in at the end of each week to find out how the group were getting on, but ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, now " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you can see, we're in the reception area, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There's a corridor running left from here, and if you go along that, the door facing you at the end is the entrance to the coffee room.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This looks out onto the main road on one side, and some trees on the other, and " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "The factory is the very big room on the far side of the site." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Next to it is the warehouse, which can be accessed by lorries going up the road to the turning area at the end.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You can get to the warehouse by crossing to the far side of the courtyard, and then the door is on your right.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Somewhere you'll be keen to find is the staff canteen." }],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "This is right next to reception." }],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: " the food's very good, but the view isn't." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The windows on one side look onto a corridor and courtyard, which aren't very attractive at all, and on the other onto the access road, which isn't much better.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You'll be using the meeting room quite often, and you'll find it by walking along the corridor to the left of the courtyard, and continuing along it to the end.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The meeting room is the last one on the right, and " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g17" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The human resources department is at the front of this building, so you head to the left along the corridor from reception, and it's the second room you come to.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "It looks out onto the main road." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And finally, the boardroom, where you'll be meeting sometimes.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "That has quite a pleasant view, as it looks out on to the trees.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Go along the corridor past the courtyard, right to the end.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "The boardroom is on the left, next to the factory." }],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: " …" }],
    },
  ],
};

export const CAM16_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Stevenson's was founded in A 1923 / B 1924 / C 1926",
    questionVi: "Stevenson's was founded in A 1923 / B 1924 / C 1926",
    modelParaphraseEn: "He set up this company when he finished his apprenticeship, in 1926 … started making plans … in 1924",
    modelParaphraseVi: "He set up this company when he finished his apprenticeship, in 1926 … started making plans … in 1924",
    acceptedAnswers: ["C", "1926"],
    explanationEn: "C = 1926 (founded). 1923 is when he left school; 1924 is when he started making plans.",
    explanationVi: "C = 1926 (thành lập). 1923 là lúc ra trường; 1924 là lúc bắt đầu lập kế hoạch.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Originally manufactured goods for A healthcare / B automotive / C machine tools",
    questionVi: "Originally manufactured goods for A healthcare / B automotive / C machine tools",
    modelParaphraseEn: "make goods for hospitals and other players in the healthcare industry, so that's what we did for the first five years",
    modelParaphraseVi: "make goods for hospitals and other players in the healthcare industry, so that's what we did for the first five years",
    acceptedAnswers: ["A", "the healthcare industry", "healthcare"],
    explanationEn: "A = healthcare first. Machine tools never happened; automotive came after a five-year delay.",
    explanationVi: "A = healthcare trước. Machine tools không xảy ra; automotive sau năm năm.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Company premises? A recently moved / B no plans to move / C going to move shortly",
    questionVi: "Company premises? A recently moved / B no plans to move / C going to move shortly",
    modelParaphraseEn: "moving to a new location has never been necessary … major refurbishment of this site over the next five years",
    modelParaphraseVi: "moving to a new location has never been necessary … major refurbishment of this site over the next five years",
    acceptedAnswers: ["B", "The company has no plans to move", "never been necessary"],
    explanationEn: "B = no plans to move. They will refurbish this site, not relocate.",
    explanationVi: "B = không định chuyển. Họ sẽ cải tạo site này, không dời đi.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Work-experience programme includes A time to do research / B meetings with a teacher / C talks by staff",
    questionVi: "Work-experience programme includes A time to do research / B meetings with a teacher / C talks by staff",
    modelParaphraseEn: "Most mornings you'll have a presentation from one of the managers … your school isn't able to arrange that this year",
    modelParaphraseVi: "Most mornings you'll have a presentation from one of the managers … your school isn't able to arrange that this year",
    acceptedAnswers: ["C", "talks by staff", "presentation from one of the managers"],
    explanationEn: "C = talks by staff (managers' presentations). Teacher visits are not happening this year; R&D is the first talk topic, not student research time.",
    explanationVi: "C = talks by staff (presentation của manager). Giáo viên không đến năm nay; R&D là chủ đề buổi nói đầu, không phải giờ nghiên cứu của học sinh.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Map: coffee room",
    questionVi: "Bản đồ: coffee room",
    modelParaphraseEn: "corridor running left … the door facing you at the end is the entrance to the coffee room. This looks out onto the main road … and some trees",
    modelParaphraseVi: "corridor running left … the door facing you at the end is the entrance to the coffee room. This looks out onto the main road … and some trees",
    acceptedAnswers: ["H"],
    explanationEn: "H = coffee room (left corridor, door facing you; main road and trees).",
    explanationVi: "H = coffee room (hành lang trái, cửa đối diện; nhìn ra đường chính và cây).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Map: warehouse",
    questionVi: "Bản đồ: warehouse",
    modelParaphraseEn: "crossing to the far side of the courtyard, and then the door is on your right",
    modelParaphraseVi: "crossing to the far side of the courtyard, and then the door is on your right",
    acceptedAnswers: ["C"],
    explanationEn: "C = warehouse (far side of courtyard; door on the right; next to the factory).",
    explanationVi: "C = warehouse (bên kia courtyard; cửa bên phải; cạnh factory).",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Map: staff canteen",
    questionVi: "Bản đồ: staff canteen",
    modelParaphraseEn: "the staff canteen. This is right next to reception … view isn't … corridor and courtyard … access road",
    modelParaphraseVi: "the staff canteen. This is right next to reception … view isn't … corridor and courtyard … access road",
    acceptedAnswers: ["G"],
    explanationEn: "G = staff canteen (right next to reception; poor view).",
    explanationVi: "G = staff canteen (sát reception; view xấu).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Map: meeting room",
    questionVi: "Bản đồ: meeting room",
    modelParaphraseEn: "corridor to the left of the courtyard … to the end. The meeting room is the last one on the right … no natural daylight",
    modelParaphraseVi: "corridor to the left of the courtyard … to the end. The meeting room is the last one on the right … no natural daylight",
    acceptedAnswers: ["B"],
    explanationEn: "B = meeting room (last on the right; no daylight).",
    explanationVi: "B = meeting room (phòng cuối bên phải; không có ánh sáng tự nhiên).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Map: human resources",
    questionVi: "Bản đồ: human resources",
    modelParaphraseEn: "at the front of this building … left along the corridor from reception … the second room … looks out onto the main road",
    modelParaphraseVi: "at the front of this building … left along the corridor from reception … the second room … looks out onto the main road",
    acceptedAnswers: ["I"],
    explanationEn: "I = human resources (second room along the left corridor; looks onto the main road).",
    explanationVi: "I = human resources (phòng thứ hai dọc hành lang trái; nhìn ra đường chính).",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Map: boardroom",
    questionVi: "Bản đồ: boardroom",
    modelParaphraseEn: "looks out on to the trees … corridor past the courtyard, right to the end. The boardroom is on the left, next to the factory",
    modelParaphraseVi: "looks out on to the trees … corridor past the courtyard, right to the end. The boardroom is on the left, next to the factory",
    acceptedAnswers: ["A"],
    explanationEn: "A = boardroom (on the left at the end, next to the factory; view of trees).",
    explanationVi: "A = boardroom (bên trái cuối hành lang, cạnh factory; nhìn ra cây).",
  },
];
