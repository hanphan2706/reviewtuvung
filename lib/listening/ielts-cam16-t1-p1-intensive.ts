import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T1_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I wanted some information about"] },
    { id: "g2", answers: ["do you take children as young as that"] },
    { id: "g3", answers: ["What sorts of activities do they do"] },
    { id: "g4", answers: ["that's part of the fun", "that is part of the fun"] },
    { id: "g5", answers: ["Is there any opportunity for her to do that"] },
    { id: "g6", answers: ["You'd be amazed how high they can go", "You would be amazed how high they can go"] },
    { id: "g7", answers: ["all this sounds perfect"] },
    { id: "g8", answers: ["so presumably she'd be in a different group", "so presumably she would be in a different group"] },
    { id: "g9", answers: ["a bit more advanced"] },
    { id: "g10", answers: ["They pick it up really quickly"] },
    { id: "g11", answers: ["they learn from one another too"] },
    { id: "g12", answers: ["I wouldn't mind doing that myself", "I would not mind doing that myself"] },
    { id: "g13", answers: ["You'd be amazed what they come up with", "You would be amazed what they come up with"] },
    { id: "g14", answers: ["It's just a bit more", "It is just a bit more"] },
    { id: "g15", answers: ["That's better for me actually", "That is better for me actually"] },
    { id: "g16", answers: ["Where exactly are the workshops held"] },
    { id: "g17", answers: ["you can't miss it", "you cannot miss it"] },
    { id: "g18", answers: ["So would you like to enrol Lydia and Carly now"] },
  ],
  lines: [
    { speaker: "SARAH", segments: [{ type: "text", text: "Hello. Children's Engineering Workshops." }] },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "Oh hello. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " the workshops in the school holidays." },
      ],
    },
    { speaker: "SARAH", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "I have two daughters who are interested. The younger one's Lydia, she's four - " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "SARAH",
      segments: [{ type: "text", text: "Yes, our Tiny Engineers workshop is for four to five-year-olds." }],
    },
    {
      speaker: "FATHER",
      segments: [{ type: "gap", gapId: "g3" }, { type: "text", text: "?" }],
    },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "All sorts. For example, they work together to design a special cover that goes round an egg, so that when it's inside they can drop it from a height and it doesn't break. Well, sometimes it does break but ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "Right. And Lydia loves building things. " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "SARAH",
      segments: [
        { type: "text", text: "Well, they have a competition to see who can make the highest tower. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "But they're learning all the time as well as having fun. For example, one thing they do is to design and build a car that's attached to a balloon, and the force of the air in that actually powers the car and makes it move along. They go really fast too.",
        },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "OK, well, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "Now Carly, that's my older daughter, has just had her seventh birthday, " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "Yes, she'd be in the Junior Engineers. That's for children from six to eight.",
        },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "And do they do the same sorts of activities?" }] },
    {
      speaker: "SARAH",
      segments: [
        { type: "text", text: "Some are the same, but " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". So they work out how to build model vehicles, things like cars and trucks, but also how to construct animals using the same sorts of material and technique, and then they learn how they can program them and make them move.",
        },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "So they learn a bit of coding?" }] },
    {
      speaker: "SARAH",
      segments: [
        { type: "text", text: "They do. " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". We're there to help if they need it, but " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "Right. And do they have competition too?" }] },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "Yes, with the Junior Engineers, it's to use recycled materials like card and wood to build a bridge, and the longest one gets a prize.",
        },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "That sounds fun. " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "Then they have something a bit different, which is to think up an idea for a five-minute movie and then film it, using special animation software. ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        {
          type: "text",
          text: "And of course, that's something they can put on their phone and take home to show all their friends.",
        },
      ],
    },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "Exactly. And then they also build a robot in the shape of a human, and they decorate it and program it so that it can move its arms and legs.",
        },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "Perfect. So, is it the same price as the Tiny Engineers?" }] },
    {
      speaker: "SARAH",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: ": £50 for the five weeks." },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "And are the classes on a Monday, too?" }] },
    {
      speaker: "SARAH",
      segments: [
        {
          type: "text",
          text: "They used to be, but we found it didn't give our staff enough time to clear up after the first workshop, so we moved them to Wednesdays. The classes are held in the morning from ten to eleven.",
        },
      ],
    },
    {
      speaker: "FATHER",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ". And what about the location? " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "SARAH",
      segments: [
        { type: "text", text: "They're in building 10A - there's a big sign on the door, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", and that's in Fradstone Industrial Estate." },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "Sorry?" }] },
    { speaker: "SARAH", segments: [{ type: "text", text: "Fradstone - that's F-R-A-D-S-T-O-N-E." }] },
    { speaker: "FATHER", segments: [{ type: "text", text: "And that's in Grasford, isn't it?" }] },
    { speaker: "SARAH", segments: [{ type: "text", text: "Yes, up past the station." }] },
    { speaker: "FATHER", segments: [{ type: "text", text: "And will I have any parking problems there?" }] },
    {
      speaker: "SARAH",
      segments: [
        { type: "text", text: "No, there's always plenty available. " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "FATHER", segments: [{ type: "text", text: "OK." }] },
    { speaker: "SARAH", segments: [{ type: "text", text: "So can I have your full name …" }] },
  ],
};

export const CAM16_T1_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Create a cover for an ______ so they can drop it from a height without breaking it",
    questionVi: "Create a cover for an ______ so they can drop it from a height without breaking it",
    modelParaphraseEn: "design a special cover that goes round an egg … drop it from a height and it doesn't break",
    modelParaphraseVi: "design a special cover that goes round an egg … drop it from a height and it doesn't break",
    acceptedAnswers: ["egg"],
    explanationEn: "Tiny Engineers design a cover around an egg so it can be dropped without breaking.",
    explanationVi: "Tiny Engineers làm cover bọc egg để thả từ trên cao mà không vỡ.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Take part in a competition to build the tallest ______",
    questionVi: "Take part in a competition to build the tallest ______",
    modelParaphraseEn: "a competition to see who can make the highest tower",
    modelParaphraseVi: "a competition to see who can make the highest tower",
    acceptedAnswers: ["tower"],
    explanationEn: "Highest / tallest tower competition.",
    explanationVi: "Cuộc thi xây tower cao nhất.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Make a ______ powered by a balloon",
    questionVi: "Make a ______ powered by a balloon",
    modelParaphraseEn: "design and build a car that's attached to a balloon, and the force of the air … powers the car",
    modelParaphraseVi: "design and build a car that's attached to a balloon, and the force of the air … powers the car",
    acceptedAnswers: ["car"],
    explanationEn: "A balloon-powered car.",
    explanationVi: "Xe car chạy bằng bóng bay.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Build model cars, trucks and ______ and learn how to program them so they can move",
    questionVi: "Build model cars, trucks and ______ and learn how to program them so they can move",
    modelParaphraseEn: "build model vehicles, things like cars and trucks, but also how to construct animals … program them and make them move",
    modelParaphraseVi: "build model vehicles, things like cars and trucks, but also how to construct animals … program them and make them move",
    acceptedAnswers: ["animals"],
    explanationEn: "Junior Engineers also construct animals and program them to move.",
    explanationVi: "Junior Engineers còn làm animals và lập trình cho chúng di chuyển.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Take part in a competition to build the longest ______ using card and wood",
    questionVi: "Take part in a competition to build the longest ______ using card and wood",
    modelParaphraseEn: "use recycled materials like card and wood to build a bridge, and the longest one gets a prize",
    modelParaphraseVi: "use recycled materials like card and wood to build a bridge, and the longest one gets a prize",
    acceptedAnswers: ["bridge"],
    explanationEn: "Longest bridge from card and wood.",
    explanationVi: "Cuộc thi bridge dài nhất bằng bìa và gỗ.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Create a short ______ with special software",
    questionVi: "Create a short ______ with special software",
    modelParaphraseEn: "think up an idea for a five-minute movie and then film it, using special animation software",
    modelParaphraseVi: "think up an idea for a five-minute movie and then film it, using special animation software",
    acceptedAnswers: ["movie", "film"],
    explanationEn: "A five-minute movie / film with animation software.",
    explanationVi: "Movie / film 5 phút bằng phần mềm animation.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Build, ______ and program a humanoid robot",
    questionVi: "Build, ______ and program a humanoid robot",
    modelParaphraseEn: "build a robot in the shape of a human, and they decorate it and program it so that it can move its arms and legs",
    modelParaphraseVi: "build a robot in the shape of a human, and they decorate it and program it so that it can move its arms and legs",
    acceptedAnswers: ["decorate"],
    explanationEn: "They decorate the humanoid robot as well as programming it.",
    explanationVi: "Họ decorate robot hình người rồi lập trình.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Held on ______ from 10 am to 11 am",
    questionVi: "Held on ______ from 10 am to 11 am",
    modelParaphraseEn: "we moved them to Wednesdays. The classes are held in the morning from ten to eleven",
    modelParaphraseVi: "we moved them to Wednesdays. The classes are held in the morning from ten to eleven",
    acceptedAnswers: ["Wednesdays"],
    explanationEn: "Junior classes used to be Mondays; they are now on Wednesdays.",
    explanationVi: "Lớp Junior trước là Monday; giờ là Wednesdays.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Building 10A, ______ Industrial Estate, Grasford",
    questionVi: "Building 10A, ______ Industrial Estate, Grasford",
    modelParaphraseEn: "that's in Fradstone Industrial Estate – F-R-A-D-S-T-O-N-E",
    modelParaphraseVi: "that's in Fradstone Industrial Estate – F-R-A-D-S-T-O-N-E",
    acceptedAnswers: ["Fradstone"],
    explanationEn: "Spelled F-R-A-D-S-T-O-N-E: Fradstone.",
    explanationVi: "Đánh vần F-R-A-D-S-T-O-N-E: Fradstone.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Plenty of ______ is available",
    questionVi: "Plenty of ______ is available",
    modelParaphraseEn: "will I have any parking problems there? No, there's always plenty available",
    modelParaphraseVi: "will I have any parking problems there? No, there's always plenty available",
    acceptedAnswers: ["parking"],
    explanationEn: "Plenty of parking is available.",
    explanationVi: "Có nhiều parking.",
  },
];
