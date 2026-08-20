import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to give you", "I would like to give you"] },
    { id: "g2", answers: ["where we're standing at the moment", "where we are standing at the moment"] },
    { id: "g3", answers: ["It was later sold"] },
    { id: "g4", answers: ["It's a shame", "It is a shame"] },
    { id: "g5", answers: ["we've managed to keep", "we have managed to keep"] },
    { id: "g6", answers: ["feel free to give"] },
    { id: "g7", answers: ["Unlike other museums"] },
    { id: "g8", answers: ["I'd like to tell you about", "I would like to tell you about"] },
    { id: "g9", answers: ["It was designed especially for"] },
    { id: "g10", answers: ["well, self-explanatory"] },
    { id: "g11", answers: ["you can go in two directions"] },
    { id: "g12", answers: ["a good place to stop"] },
    { id: "g13", answers: ["It's surprising how much", "It is surprising how much"] },
    { id: "g14", answers: ["make your way back to"] },
    { id: "g15", answers: ["You can still buy"] },
    { id: "g16", answers: ["all kinds of interesting wildlife"] },
    { id: "g17", answers: ["it's perfectly safe for children", "it is perfectly safe for children"] },
    { id: "g18", answers: ["there's a fence around it", "there is a fence around it"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Good morning everyone, and welcome to the Museum of Farming Life. I understand it's your first visit here, so " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " some background information about the museum and then explain a little about what you can see during your visit.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So, " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " is the entrance to a large building that was constructed in 1880 as the home of a local businessman, Alfred Palmer, of the Palmer biscuit factory.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " and became a hall of residence for students in 1911, and a museum in 1951. In 2005, a modern extension was built to accommodate the museum's collections.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The museum's owned by the university, and apart from two rooms that are our offices, the university uses the main part of the building. You may see students going into the building for lessons, but it's not open to museum visitors, I'm afraid. " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " because the interior architectural features are outstanding, especially the room that used to be the library.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Luckily, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " entry to the museum free. This includes access to all the galleries, outdoor areas and the rooms for special exhibitions. We run activities for children and students, such as the museum club, for which there's no charge. We do have a donation box just over there so " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " whatever amount you consider appropriate." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We do have a cloakroom, if you'd like to leave your coats and bags somewhere. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", photography is allowed here, so you might like to keep your cameras with you. You might be more comfortable not carrying around heavy rucksacks, though keep your coats and jackets on as it's quite cold in the museum garden today.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: " the different areas of the museum." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Just inside, and outside the main gallery, we have an area called Four Seasons. Here you can watch a four-minute animation of a woodland scene. " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " the museum by a group of young people on a film studies course, and it's beautiful. Children absolutely love it, but then, so do adults.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The main gallery's called Town and Country. It includes a photographic collection of prize-winning sheep and shepherds. Leaving Town and Country, you enter Farmhouse Kitchen, which is … " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". Here we have the oldest collection of equipment for making butter and cheese in the country. And this morning, a specialist cheesemaker will be giving demonstrations of how it's produced. You may even get to try some.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "After that, " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". To the right is a staircase that takes you up to a landing from where you can look down on the galleries. To the left is a room called A Year on the Farm. There's lots of seating here as sometimes we use the room for school visits, so it's " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " for a rest. If you're feeling competitive, you can take our memory test in which you answer questions about things you've seen in the museum.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The next area's called Wagon Walk. This contains farm carts from nearly every part of the country. " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " regional variation there was. Beside the carts are display boards with information about each one. The carts are old and fragile, so we ask you to keep your children close to you and ensure they don't climb on the carts.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "From Wagon Walk, you can either " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " reception or go out into the garden – or even go back to take another look in the galleries. In the far corner of the garden is Bees are Magic, but we're redeveloping this area so you can't visit that at the moment. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " our honey in the shop, though." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Finally, there's The Pond, which contains " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". There are baby ducks that are only a few days old, as well as tiny frogs. The Pond isn't deep and " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: ", so " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM18_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "The museum building was originally A a factory / B a private home / C a hall of residence",
    questionVi: "Tòa nhà bảo tàng vốn là gì?",
    modelParaphraseEn: "constructed in 1880 as the home of a local businessman, Alfred Palmer",
    modelParaphraseVi: "constructed in 1880 as the home of a local businessman, Alfred Palmer",
    acceptedAnswers: ["home", "private home", "businessman"],
    explanationEn: "B = private home of Alfred Palmer. Later hall of residence (1911), then museum — biscuit factory is his business, not this building.",
    explanationVi: "B = nhà riêng của Alfred Palmer. Sau mới thành ký túc xá (1911), rồi bảo tàng — nhà máy bánh là nghề của ông, không phải tòa này.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "The university uses part of the building as A teaching rooms / B research library / C admin offices",
    questionVi: "Đại học dùng một phần tòa nhà làm gì?",
    modelParaphraseEn: "the university uses the main part of the building – students going in for lessons",
    modelParaphraseVi: "the university uses the main part of the building – students going in for lessons",
    acceptedAnswers: ["lessons", "teaching rooms", "main part"],
    explanationEn: "A = teaching rooms / lessons. Museum offices are only two rooms; the former library is not open to visitors.",
    explanationVi: "A = phòng học / lessons. Văn phòng bảo tàng chỉ hai phòng; thư viện cũ không mở cho khách.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Entrance fee: A visitors decide whether to pay / B discount for children / C extra for special exhibitions",
    questionVi: "Phí vào cửa?",
    modelParaphraseEn: "we've managed to keep entry free – donation box, give whatever amount you consider appropriate",
    modelParaphraseVi: "we've managed to keep entry free – donation box, give whatever amount you consider appropriate",
    acceptedAnswers: ["donation box", "whatever amount", "free", "visitors decide"],
    explanationEn: "A = voluntary donation. Entry is free including special exhibitions; children's activities are also free.",
    explanationVi: "A = quyên góp tự nguyện. Vào cửa miễn phí kể cả triển lãm đặc biệt; hoạt động trẻ em cũng miễn phí.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "Leave in the cloakroom: A cameras / B coats / C bags",
    questionVi: "Nên để gì ở cloakroom?",
    modelParaphraseEn: "leave your coats and bags – keep your cameras with you; keep coats and jackets on as it's cold",
    modelParaphraseVi: "leave your coats and bags – keep your cameras with you; keep coats and jackets on as it's cold",
    acceptedAnswers: ["bags", "rucksacks", "heavy rucksacks"],
    explanationEn: "C = bags / heavy rucksacks. Cameras stay with you; coats stay on because the garden is cold.",
    explanationVi: "C = túi / balo nặng. Máy ảnh giữ bên mình; áo khoác mặc vì vườn lạnh.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Four Seasons — F something created by students",
    questionVi: "Four Seasons — F do sinh viên tạo",
    modelParaphraseEn: "designed especially for the museum by a group of young people on a film studies course",
    modelParaphraseVi: "designed especially for the museum by a group of young people on a film studies course",
    acceptedAnswers: ["film studies course", "young people", "created by students"],
    explanationEn: "F = animation made by film-studies students.",
    explanationVi: "F = animation do sinh viên điện ảnh làm.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Farmhouse Kitchen — G an expert is here today",
    questionVi: "Farmhouse Kitchen — G hôm nay có chuyên gia",
    modelParaphraseEn: "this morning, a specialist cheesemaker will be giving demonstrations",
    modelParaphraseVi: "this morning, a specialist cheesemaker will be giving demonstrations",
    acceptedAnswers: ["cheesemaker", "demonstrations", "expert"],
    explanationEn: "G = specialist cheesemaker demonstrating today.",
    explanationVi: "G = thợ làm phô mai chuyên nghiệp biểu diễn hôm nay.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "A Year on the Farm — E there is a quiz for visitors",
    questionVi: "A Year on the Farm — E có quiz cho khách",
    modelParaphraseEn: "you can take our memory test in which you answer questions about things you've seen",
    modelParaphraseVi: "you can take our memory test in which you answer questions about things you've seen",
    acceptedAnswers: ["memory test", "quiz", "answer questions"],
    explanationEn: "E = memory test / quiz for visitors (not only school groups).",
    explanationVi: "E = memory test / quiz cho khách (không chỉ đoàn trường).",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Wagon Walk — A parents must supervise their children",
    questionVi: "Wagon Walk — A phụ huynh phải trông trẻ",
    modelParaphraseEn: "keep your children close to you and ensure they don't climb on the carts",
    modelParaphraseVi: "keep your children close to you and ensure they don't climb on the carts",
    acceptedAnswers: ["keep your children close", "don't climb", "supervise"],
    explanationEn: "A = supervise children — carts are old and fragile.",
    explanationVi: "A = trông trẻ — xe ngựa cũ và dễ vỡ.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Bees are Magic — C it is closed today",
    questionVi: "Bees are Magic — C hôm nay đóng cửa",
    modelParaphraseEn: "we're redeveloping this area so you can't visit that at the moment",
    modelParaphraseVi: "we're redeveloping this area so you can't visit that at the moment",
    acceptedAnswers: ["redeveloping", "can't visit", "closed"],
    explanationEn: "C = closed for redevelopment; honey is still sold in the shop.",
    explanationVi: "C = đóng để cải tạo; mật ong vẫn bán ở shop.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "The Pond — B there are new things to see",
    questionVi: "The Pond — B có thứ mới để xem",
    modelParaphraseEn: "baby ducks that are only a few days old, as well as tiny frogs",
    modelParaphraseVi: "baby ducks that are only a few days old, as well as tiny frogs",
    acceptedAnswers: ["baby ducks", "few days old", "tiny frogs", "new things"],
    explanationEn: "B = new baby ducks / tiny frogs. Safety (fence, not deep) is mentioned, but supervision warning is for Wagon Walk.",
    explanationVi: "B = vịt con mới / ếch nhỏ. Có nhắc an toàn, nhưng cảnh báo trông trẻ thuộc Wagon Walk.",
  },
];
