import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to bring you up to date", "I would like to bring you up to date"] },
    { id: "g2", answers: ["date from various times"] },
    { id: "g3", answers: ["over a century old"] },
    { id: "g4", answers: ["he died before it was completed"] },
    { id: "g5", answers: ["through lack of money"] },
    { id: "g6", answers: ["which is separated from the main site by a road"] },
    { id: "g7", answers: ["Planning permission has been granted"] },
    { id: "g8", answers: ["should start within the next few months"] },
    { id: "g9", answers: ["A more imminent change concerns"] },
    { id: "g10", answers: ["it's often full to capacity", "it is often full to capacity"] },
    { id: "g11", answers: ["This is obviously unsatisfactory"] },
    { id: "g12", answers: ["this will come into use next week"] },
    { id: "g13", answers: ["There won't be any junk food", "There will not be any junk food"] },
    { id: "g14", answers: ["You may be wondering what will happen"] },
    { id: "g15", answers: ["Eventually we may use part of the canteen for storage"] },
    { id: "g16", answers: ["which will all have side dishes, desserts and drinks on sale"] },
    { id: "g17", answers: ["There'll be plenty of variety", "There will be plenty of variety"] },
    { id: "g18", answers: ["I'm delighted that dozens of pupils make use of the chance", "I am delighted that dozens of pupils make use of the chance"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Good morning and thank you for coming here today. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " with changes in the school that will affect your children." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you know, the school buildings " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ": some from the 1970s, some from the last five years, and of course Dartfield House is " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It was commissioned by a businessman, Neville Richards, and intended as his family home, but ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "His heir chose to sell it to the local council, who turned it into offices." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A later plan to convert it into a tourist information centre didn't come about, ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", and instead it formed the nucleus of this school when it opened 40 years ago.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The school has grown as the local population has increased, and I can now give you some news about the lower school site, ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        { type: "text", text: " for development of both sites." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The lower school will move to new buildings that will be constructed on the main site.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Developers will construct houses on the existing lower school site." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Work on the new school buildings " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: " the catering facilities and the canteen." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The canteen is always very busy throughout the lunch period - in fact ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ", because a lot of our pupils like the food that's on offer there." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But there's only one serving point, so most pupils have to wait a considerable time to be served.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ", as they may have hardly finished their lunch before afternoon lessons start.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So we've had a new Food Hall built, and " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It'll have several serving areas, and I'll give you more details about those in a minute, but one thing we ask you to do, to help in the smooth running of the Food Hall, is to discuss with your children each morning which type of food they want to eat that day, so they can go straight to the relevant serving point.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " - everything on offer will be healthy - and there's no change to the current system of paying for lunches by topping up your child's electronic payment card online.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " to the old canteen." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll still have tables and chairs in there, and pupils can eat food from the Food Hall or lunch they've brought from home.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", but first we'll see how many pupils go in there at lunchtime." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "OK, back to the serving points in the Food Hall, " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", as well as main courses." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "One serving point we call World Adventures." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This will serve a different country's cuisine each day, maybe Chinese one day and Lebanese the next.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The menus will be planned for a week at a time, so pupils will know what's going to be available the whole of the week.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Street Life is also international, with food from three particular cultures." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We'll ask pupils to make suggestions, so perhaps sometimes there'll be food from Thailand, Ethiopia and Mexico, and then one of them will be replaced by Jamaican food for a week or two.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The Speedy Italian serving point will cater particularly for the many pupils who don't eat meat or fish: they can be sure that all the food served there is suitable for them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", so they shouldn't get bored with the food." },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "OK, that's all on the new Food Hall." }] },
    { speaker: null, segments: [{ type: "text", text: "Now after-school lessons." }] },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "These are very popular with pupils, particularly swimming - in fact there's a waiting list for lessons.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Cycling is another favourite, and " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " to learn to ride in off-road conditions." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It means that more and more cycle to and from school every day." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As you know, we have a well-equipped performance centre, and we're going to start drama classes in there, too.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Pupils will be able to join in just for fun or work up to taking part in a play - we hope to put on at least one a year.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We already teach a number of pupils to use the sound and lighting systems in the centre." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And a former pupil has given a magnificent grand piano to the school, so a few pupils will be able to learn at the school instead of going to the local college, as many of them do at the moment.",
        },
      ],
    },
  ],
};

export const CAM16_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Dartfield House school used to be A a tourist information centre / B a private home / C a local council building",
    questionVi: "Dartfield House từng là A trung tâm thông tin du lịch / B nhà riêng / C công trình hội đồng địa phương",
    modelParaphraseEn: "His heir chose to sell it to the local council, who turned it into offices",
    modelParaphraseVi: "His heir chose to sell it to the local council, who turned it into offices",
    acceptedAnswers: ["C", "a local council building", "offices"],
    explanationEn: "C = council offices. It was intended as a private home but the owner died first; the tourist-centre plan never happened.",
    explanationVi: "C = nhà hội đồng (offices). Định làm nhà riêng nhưng chủ mất trước khi xong; kế hoạch tourist centre không thành.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "What is planned with regard to the lower school? A improve all main-site buildings / B lower school site used for new homes / C extra buildings on the lower school site",
    questionVi: "Kế hoạch lower school? A cải tạo toàn bộ khu chính / B khu lower school làm nhà ở / C xây thêm trên khu lower school",
    modelParaphraseEn: "The lower school will move to new buildings … on the main site. Developers will construct houses on the existing lower school site",
    modelParaphraseVi: "The lower school will move to new buildings … on the main site. Developers will construct houses on the existing lower school site",
    acceptedAnswers: ["B", "The lower school site will be used for new homes", "houses"],
    explanationEn: "B = houses on the old lower-school site. New school buildings go on the main site, not extra classrooms on the lower site.",
    explanationVi: "B = nhà ở trên khu lower school cũ. Tòa trường mới xây trên khu chính, không phải thêm phòng trên khu lower school.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "The catering has been changed because of A long queuing times / B changes to the school timetable / C dissatisfaction with the menus",
    questionVi: "Catering đổi vì A xếp hàng lâu / B đổi thời khóa biểu / C không hài lòng thực đơn",
    modelParaphraseEn: "there's only one serving point, so most pupils have to wait a considerable time to be served",
    modelParaphraseVi: "there's only one serving point, so most pupils have to wait a considerable time to be served",
    acceptedAnswers: ["A", "long queuing times", "wait a considerable time"],
    explanationEn: "A = queues. Pupils like the food (not C). Afternoon lessons are the result of slow service, not a timetable change (not B).",
    explanationVi: "A = xếp hàng. Học sinh thích đồ ăn (không phải C). Buổi chiều bắt đầu khi chưa ăn xong là hệ quả phục vụ chậm, không phải đổi TKB (không phải B).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Parents are asked to A help children decide in advance which serving point / B make sure children have enough money / C advise children on healthy food",
    questionVi: "Phụ huynh được nhờ A giúp con chọn quầy trước / B đảm bảo đủ tiền / C khuyên đồ ăn lành mạnh",
    modelParaphraseEn: "discuss with your children each morning which type of food they want to eat that day, so they can go straight to the relevant serving point",
    modelParaphraseVi: "discuss with your children each morning which type of food they want to eat that day, so they can go straight to the relevant serving point",
    acceptedAnswers: ["A", "help their children to decide in advance which serving point to use"],
    explanationEn: "A = choose the serving point in advance. Payment is still the same e-card (not B). Food will be healthy anyway (not C as a parent task).",
    explanationVi: "A = chọn quầy trước. Thanh toán vẫn thẻ điện tử (không phải B). Đồ ăn vốn đã healthy (không phải việc phụ huynh như C).",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "What does the speaker say about the existing canteen? A Food will still be served there / B Only staff will have access / C Pupils can take their food into it",
    questionVi: "Căn tin cũ? A vẫn phục vụ đồ ăn / B chỉ nhân viên / C học sinh mang đồ ăn vào được",
    modelParaphraseEn: "We'll still have tables and chairs in there, and pupils can eat food from the Food Hall or lunch they've brought from home",
    modelParaphraseVi: "We'll still have tables and chairs in there, and pupils can eat food from the Food Hall or lunch they've brought from home",
    acceptedAnswers: ["C", "Pupils can take their food into it"],
    explanationEn: "C = eat Food Hall / packed lunches there. Food is not served in the old canteen (not A). Storage is only a later possibility.",
    explanationVi: "C = ăn đồ Food Hall / cơm nhà ở đó. Căn tin cũ không còn phục vụ (không phải A). Dùng làm kho chỉ là khả năng sau này.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "World Adventures — A pupils help plan menus / B only vegetarian / C different food every week / D daily change in menu",
    questionVi: "World Adventures — A học sinh góp ý thực đơn / B chỉ chay / C đổi theo tuần / D đổi theo ngày",
    modelParaphraseEn: "This will serve a different country's cuisine each day, maybe Chinese one day and Lebanese the next",
    modelParaphraseVi: "This will serve a different country's cuisine each day, maybe Chinese one day and Lebanese the next",
    acceptedAnswers: ["D", "daily change in menu", "different country's cuisine each day"],
    explanationEn: "D = daily change. Menus are planned a week ahead so pupils know the week's options — that is not 'different food every week' as the comment.",
    explanationVi: "D = đổi món mỗi ngày. Thực đơn lên kế hoạch cả tuần để học sinh biết trước — không phải comment 'đổi mỗi tuần'.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Street Life — A pupils help to plan menus",
    questionVi: "Street Life — A học sinh góp ý thực đơn",
    modelParaphraseEn: "We'll ask pupils to make suggestions, so perhaps sometimes there'll be food from Thailand, Ethiopia and Mexico",
    modelParaphraseVi: "We'll ask pupils to make suggestions, so perhaps sometimes there'll be food from Thailand, Ethiopia and Mexico",
    acceptedAnswers: ["A", "pupils help to plan menus", "make suggestions"],
    explanationEn: "A = pupils suggest the three cultures (and later replacements). Not a daily-change stall.",
    explanationVi: "A = học sinh đề xuất ba nền ẩm thực (và món thay sau đó). Không phải quầy đổi món mỗi ngày.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Speedy Italian — B only vegetarian food",
    questionVi: "Speedy Italian — B chỉ đồ chay",
    modelParaphraseEn: "will cater particularly for the many pupils who don't eat meat or fish: they can be sure that all the food served there is suitable for them",
    modelParaphraseVi: "will cater particularly for the many pupils who don't eat meat or fish: they can be sure that all the food served there is suitable for them",
    acceptedAnswers: ["B", "only vegetarian food", "don't eat meat or fish"],
    explanationEn: "B = vegetarian (no meat or fish). Variety is promised so they do not get bored — that is not the matching comment.",
    explanationVi: "B = đồ chay (không thịt/cá). Có variety để không chán — đó không phải comment cần khớp.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "TWO new after-school lessons: B piano",
    questionVi: "Hai lớp ngoại khóa mới: B piano",
    modelParaphraseEn: "a former pupil has given a magnificent grand piano … a few pupils will be able to learn at the school instead of going to the local college",
    modelParaphraseVi: "a former pupil has given a magnificent grand piano … a few pupils will be able to learn at the school instead of going to the local college",
    acceptedAnswers: ["B", "piano"],
    explanationEn: "B = piano is new (gifted grand piano). Swimming and cycling already exist; sound and lighting are already taught.",
    explanationVi: "B = piano là mới (tặng grand piano). Bơi và xe đạp đã có; âm thanh/ánh sáng đã dạy.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) C acting",
    questionVi: "(cùng danh sách) C diễn xuất",
    modelParaphraseEn: "we're going to start drama classes in there, too. Pupils will be able to join in just for fun or work up to taking part in a play",
    modelParaphraseVi: "we're going to start drama classes in there, too. Pupils will be able to join in just for fun or work up to taking part in a play",
    acceptedAnswers: ["C", "acting", "drama classes"],
    explanationEn: "C = acting / drama classes are starting. Sound and lighting are already taught, so E is not new.",
    explanationVi: "C = acting / drama classes sắp mở. Âm thanh và ánh sáng đã dạy, nên E không phải lớp mới.",
  },
];
