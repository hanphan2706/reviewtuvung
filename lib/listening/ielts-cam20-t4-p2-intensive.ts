import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T4_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["some useful information"] },
    { id: "g2", answers: ["that are open to visitors"] },
    { id: "g3", answers: ["mums and dads"] },
    { id: "g4", answers: ["don't want any accidents", "do not want any accidents"] },
    { id: "g5", answers: ["Cameras are permitted everywhere"] },
    { id: "g6", answers: ["won't be too long", "will not be too long"] },
    { id: "g7", answers: ["some features of the tour"] },
    { id: "g8", answers: ["over the years"] },
    { id: "g9", answers: ["we'd welcome those too", "we would welcome those too"] },
    { id: "g10", answers: ["they can be booked online"] },
    { id: "g11", answers: ["as part of"] },
    { id: "g12", answers: ["at the ground of"] },
    { id: "g13", answers: ["the start of"] },
    { id: "g14", answers: ["hard to imagine"] },
    { id: "g15", answers: ["here and abroad"] },
    { id: "g16", answers: ["interested to discover"] },
    { id: "g17", answers: ["this sometimes caused huge arguments"] },
    { id: "g18", answers: ["the modern professional game"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Good morning and welcome to City Football Club. I'd like to give you " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " about your visit to the stadium today and then we'll start the tour of the areas of the stadium " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I can see lots of children here today, so just to let " },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " know a few things before we start. The stadium has lots of stairs and the players' tunnel is very dark. Please don't let your children wander off on their own, even for a minute. We " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " or anyone getting frightened." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " and you can take pictures of your child shooting a penalty. Assistants are helping to organise this and hopefully the queue " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's very hot and sunny out on the pitch today. You can get food and drink at the cafe and I really recommend the healthy lunch boxes for children. Also in the cafe children are invited to do a football drawing. We pick the best one at the end of the afternoon so don't forget to put your name and contact details on the back. That way if you've left the stadium before then, we'll send your prize, but sadly we can't return drawings.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'd like to mention " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: ". We'll start with the 360 cinema experience, which has been very popular " },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", and then I'll take you to the players' dressing rooms, before going outside to the seating area and the pitch.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I should say, if you'd prefer your visit to be self-guided, please collect headphones from the reception, and then you can listen to the pre-recorded information at your own speed. We've only just introduced this feature and would appreciate your feedback. We're thinking of offering tours in other languages in future, so if you have any thoughts on that, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "If you plan to return another time, you might like to book one of our VIP tours. We've only just started offering these and " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, the stadium you see today was built in 1989 " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " a three-year redevelopment project. While that project was going on, the team had to play its matches " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " another club. Apart from that, the club has been here on this site since 1870." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As some of you may know, that was " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " a really important decade in the history of football in this country. For example, 1870 was also the year that football teams started to include a player whose role it was to guard the goal. It's " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " what the game must have been like without someone in that position, isn't it?" },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "In 1872 and 73, many other clubs were established, both " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". And the following year, in 1874, referees were allowed to send players off if they committed certain offences, and also in that year teams started having to swap ends at half-time.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One fact I was " },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: " was that in early football games the aim was for the scorer to get the ball between two flag posts and later between sticks joined at the top with a piece of tape. In 1875, that tape was replaced with the solid crossbar that we're familiar with today.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "1877 saw the founding of further new clubs and the history books tell us that in the same year all the clubs decided to set a limit of 90 minutes for each match. Before that it was a more casual arrangement and " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " and sometimes fights during matches when one team called the end of the game and the other team wanted to play on to try and score a winning goal.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "By 1878, the number of teams in the Football League increased again. In addition, referees started using whistles and electric lamps were installed on certain pitches. This was a significant change, as games could then be played in the evenings all year round.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In 1880, clubs began to charge fans for admission to games, even though players were still amateurs and had other proper jobs. That's hard to imagine in " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", where top players earn significant sums of money from both playing and commercial activities.",
        },
      ],
    },
  ],
};

export const CAM20_T4_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Visiting with children: B There is a competition for children today",
    questionVi: "Tham quan cùng trẻ: B Có cuộc thi cho trẻ hôm nay",
    modelParaphraseEn: "in the cafe children are invited to do a football drawing. We pick the best one at the end of the afternoon",
    modelParaphraseVi: "in the cafe children are invited to do a football drawing. We pick the best one at the end of the afternoon",
    acceptedAnswers: ["football drawing", "competition", "pick the best one", "B"],
    explanationEn: "B = drawing competition in the cafe. Photos are of a penalty, not with a player (A). Lunch boxes are recommended, not a special meal offer (E).",
    explanationVi: "B = cuộc thi vẽ ở quán cà phê. Ảnh là sút penalty, không chụp với cầu thủ (A). Hộp lunch được gợi ý, không phải ưu đãi bữa ăn (E).",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Visiting with children: C Parents must stay with their children at all times",
    questionVi: "Tham quan cùng trẻ: C Phụ huynh phải ở cạnh trẻ mọi lúc",
    modelParaphraseEn: "Please don't let your children wander off on their own, even for a minute",
    modelParaphraseVi: "Please don't let your children wander off on their own, even for a minute",
    acceptedAnswers: ["wander off", "even for a minute", "stay with", "C"],
    explanationEn: "C = supervise at all times (stairs and a dark tunnel). Sunhats/drinks are not required even though it is hot (D).",
    explanationVi: "C = giám sát mọi lúc (cầu thang và đường hầm tối). Không bắt buộc mũ/nước dù trời nóng (D).",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "New tour features: A VIP tour",
    questionVi: "Tính năng tour mới: A tour VIP",
    modelParaphraseEn: "you might like to book one of our VIP tours. We've only just started offering these and they can be booked online",
    modelParaphraseVi: "you might like to book one of our VIP tours. We've only just started offering these and they can be booked online",
    acceptedAnswers: ["VIP tours", "only just started offering", "A"],
    explanationEn: "A = VIP tours are new this year. The 360 cinema has been popular for years (not B).",
    explanationVi: "A = tour VIP mới năm nay. Rạp 360 đã nổi tiếng nhiều năm (không phải B).",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "New tour features: C audio guide",
    questionVi: "Tính năng tour mới: C audio guide",
    modelParaphraseEn: "if you'd prefer your visit to be self-guided, please collect headphones … We've only just introduced this feature",
    modelParaphraseVi: "if you'd prefer your visit to be self-guided, please collect headphones … We've only just introduced this feature",
    acceptedAnswers: ["self-guided", "headphones", "audio guide", "C"],
    explanationEn: "C = new self-guided headphones / audio guide. Other languages are only being considered (not E). Dressing rooms are a regular stop (not D).",
    explanationVi: "C = tai nghe tự tham quan / audio guide mới. Tour ngôn ngữ khác mới đang cân nhắc (không phải E). Phòng thay đồ là điểm thường lệ (không phải D).",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "1870 — D the introduction of goalkeepers",
    questionVi: "1870 — D bắt đầu có thủ môn",
    modelParaphraseEn: "1870 was also the year that football teams started to include a player whose role it was to guard the goal",
    modelParaphraseVi: "1870 was also the year that football teams started to include a player whose role it was to guard the goal",
    acceptedAnswers: ["guard the goal", "goalkeepers", "D"],
    explanationEn: "D = goalkeepers introduced in 1870. The club has been on this site since then; playing at another ground was during the 1989 rebuild.",
    explanationVi: "D = thủ môn xuất hiện năm 1870. CLB ở đây từ đó; đá sân khác là lúc xây lại 1989.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "1874 — F two changes to the rules of the game",
    questionVi: "1874 — F hai thay đổi luật",
    modelParaphraseEn: "referees were allowed to send players off … and also in that year teams started having to swap ends at half-time",
    modelParaphraseVi: "referees were allowed to send players off … and also in that year teams started having to swap ends at half-time",
    acceptedAnswers: ["send players off", "swap ends", "two changes", "F"],
    explanationEn: "F = two rule changes in the same year (send-offs and swapping ends). New clubs abroad were 1872–73.",
    explanationVi: "F = hai thay đổi luật cùng năm (đuổi người và đổi sân). CLB mới ở nước ngoài là 1872–73.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "1875 — B a change to the design of the goal",
    questionVi: "1875 — B thay đổi thiết kế khung thành",
    modelParaphraseEn: "that tape was replaced with the solid crossbar that we're familiar with today",
    modelParaphraseVi: "that tape was replaced with the solid crossbar that we're familiar with today",
    acceptedAnswers: ["solid crossbar", "tape was replaced", "design of the goal", "B"],
    explanationEn: "B = tape between posts replaced by a solid crossbar — a change to the goal's design.",
    explanationVi: "B = dây giữa cột được thay bằng xà ngang cứng — đổi thiết kế khung thành.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "1877 — H an agreement on the length of a game",
    questionVi: "1877 — H thống nhất thời lượng trận đấu",
    modelParaphraseEn: "all the clubs decided to set a limit of 90 minutes for each match",
    modelParaphraseVi: "all the clubs decided to set a limit of 90 minutes for each match",
    acceptedAnswers: ["90 minutes", "limit", "length of a game", "H"],
    explanationEn: "H = 90-minute limit agreed. Before that, ending the game caused arguments and fights.",
    explanationVi: "H = thống nhất giới hạn 90 phút. Trước đó, kết thúc trận gây cãi vã, đánh nhau.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "1878 — C the first use of lights for matches",
    questionVi: "1878 — C lần đầu dùng đèn cho trận đấu",
    modelParaphraseEn: "referees started using whistles and electric lamps were installed on certain pitches … games could then be played in the evenings",
    modelParaphraseVi: "referees started using whistles and electric lamps were installed on certain pitches … games could then be played in the evenings",
    acceptedAnswers: ["electric lamps", "evenings", "lights", "C"],
    explanationEn: "C = electric lamps on pitches (evening games). Whistles arrived the same year but are not in the box; the league also grew.",
    explanationVi: "C = đèn điện trên sân (đá buổi tối). Còi cùng năm nhưng không có trong hộp; giải cũng tăng số đội.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "1880 — G the introduction of fee for spectators",
    questionVi: "1880 — G bắt đầu thu vé khán giả",
    modelParaphraseEn: "clubs began to charge fans for admission to games, even though players were still amateurs",
    modelParaphraseVi: "clubs began to charge fans for admission to games, even though players were still amateurs",
    acceptedAnswers: ["charge fans", "admission", "fee for spectators", "G"],
    explanationEn: "G = spectators paid for admission. Players were still amateurs — not pay for players (A).",
    explanationVi: "G = khán giả phải trả tiền vào cửa. Cầu thủ vẫn nghiệp dư — không phải trả lương cầu thủ (A).",
  },
];
