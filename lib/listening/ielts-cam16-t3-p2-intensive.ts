import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T3_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm a recruitment consultant at", "I am a recruitment consultant at"] },
    { id: "g2", answers: ["our company specialises in positions that involve", "our company specializes in positions that involve"] },
    { id: "g3", answers: ["these sectors do provide some very special career opportunities"] },
    { id: "g4", answers: ["although we can't guarantee that", "although we cannot guarantee that"] },
    { id: "g5", answers: ["although there's a lot of variety here", "although there is a lot of variety here"] },
    { id: "g6", answers: ["not everyone is keen to do it"] },
    { id: "g7", answers: ["working outdoors does have its challenges"] },
    { id: "g8", answers: ["that's not as important as it once was", "that is not as important as it once was"] },
    { id: "g9", answers: ["so there are fewer work-related accidents"] },
    { id: "g10", answers: ["this usually turns out fine"] },
    { id: "g11", answers: ["some of the exciting jobs that we have on our books right now"] },
    { id: "g12", answers: ["supplying a range of top supermarkets"] },
    { id: "g13", answers: ["advising farmers on issues such as"] },
    { id: "g14", answers: ["a deep knowledge of the agricultural sector is expected of applicants"] },
    { id: "g15", answers: ["and in return will receive a very competitive salary"] },
    { id: "g16", answers: ["This post is only suitable for someone who is prepared to live in the region"] },
    { id: "g17", answers: ["Candidates must have a clean driving licence", "Candidates must have a clean driving license"] },
    { id: "g18", answers: ["A driving licence and tractor driving experience are essential", "A driving license and tractor driving experience are essential"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hello everyone. My name's Megan Baker and " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " AVT Recruitment specialists." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: " working in the agriculture and horticulture sectors, so that's fresh food production, garden and park maintenance and so on.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For a start, they often offer opportunities for those who don't want to be stuck with a 40-hour week, but need to juggle work with other responsibilities such as child care - and this is very important for many of our recruits.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Some people like working in a rural setting, surrounded by plants and trees instead of buildings, ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But there are certainly health benefits, especially in jobs where you're not sitting all day looking at a screen - a big plus for many people.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Salaries can sometimes be good too, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And you may have the opportunity in some types of jobs for travel overseas, although that obviously depends on the job, and ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Of course, " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It's fine in summer, but can be extremely unpleasant when it's cold and windy.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "You may need to be pretty fit for some jobs, though with modern technology " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And standards of health and safety are much higher now than they used to be, ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But if you like a lively city environment surrounded by lots of people, these jobs are probably not for you - they're often in pretty remote areas.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "And some people worry about finding a suitable place to live, but in our experience, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now let me tell you about " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One is for a fresh food commercial manager." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Our client here is a very large fresh food producer " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They operate in a very fast-paced environment with low profit margins - the staff there work hard, but they play hard as well, so if you've a sociable personality this may be for you.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We have an exciting post as an agronomist " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " crop nutrition, protection against pests, and the latest legislation on farming and agricultural practices.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are good opportunities for the right person to quickly make their way up the career ladder, but ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A leading supermarket is looking for a fresh produce buyer who is available for a 12-month maternity cover contract.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You need to have experience in administration, planning and buying in the fresh produce industry, ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "We have also received a request for a sales manager for a chain of garden centres." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "You will be visiting centres in the region to ensure their high levels of customer service are maintained.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g16" }, { type: "text", text: "." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There is also a vacancy for a tree technician to carry out tree cutting, forestry and conservation work.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " and have training in safety procedures." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A year's experience would be preferred but the company might be prepared to consider someone who has just completed an appropriate training course.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "Finally, we have a position for a farm worker." }],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This will involve a wide range of farm duties including crop sowing and harvesting, machine maintenance and animal care.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Perks of the job include the possibility of renting a small cottage on the estate, and the chance to earn a competitive salary.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "gap", gapId: "g18" }, { type: "text", text: "." }],
    },
  ],
};

export const CAM16_T3_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "TWO main advantages: A the active lifestyle",
    questionVi: "Hai lợi thế chính: A lối sống năng động",
    modelParaphraseEn: "health benefits, especially in jobs where you're not sitting all day looking at a screen - a big plus",
    modelParaphraseVi: "health benefits, especially in jobs where you're not sitting all day looking at a screen - a big plus",
    acceptedAnswers: ["A", "the active lifestyle", "not sitting all day"],
    explanationEn: "A = active lifestyle (not sitting at a screen). Rural setting is not guaranteed; salaries and overseas travel are only sometimes true.",
    explanationVi: "A = lối sống năng động (không ngồi nhìn màn hình cả ngày). Môi trường nông thôn không đảm bảo; lương và đi nước ngoài chỉ đôi khi đúng.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "(same list) C the flexible working opportunities",
    questionVi: "(cùng danh sách) C cơ hội làm việc linh hoạt",
    modelParaphraseEn: "don't want to be stuck with a 40-hour week, but need to juggle work with other responsibilities such as child care",
    modelParaphraseVi: "don't want to be stuck with a 40-hour week, but need to juggle work with other responsibilities such as child care",
    acceptedAnswers: ["C", "the flexible working opportunities", "juggle work", "child care"],
    explanationEn: "C = flexible hours (not a fixed 40-hour week; can juggle childcare).",
    explanationVi: "C = giờ linh hoạt (không kẹt 40 giờ/tuần; có thể sắp xếp trông con).",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "TWO disadvantages outdoors: B being in a very quiet location",
    questionVi: "Hai nhược điểm ngoài trời: B nơi rất yên tĩnh",
    modelParaphraseEn: "if you like a lively city environment … these jobs are probably not for you - they're often in pretty remote areas",
    modelParaphraseVi: "if you like a lively city environment … these jobs are probably not for you - they're often in pretty remote areas",
    acceptedAnswers: ["B", "being in a very quiet location", "remote areas"],
    explanationEn: "B = remote / very quiet location. Housing usually turns out fine; accidents are fewer now.",
    explanationVi: "B = vùng remote / rất yên. Nhà ở thường ổn; tai nạn giờ ít hơn.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "(same list) C difficult weather conditions at times",
    questionVi: "(cùng danh sách) C thời tiết khó chịu lúc này lúc khác",
    modelParaphraseEn: "fine in summer, but can be extremely unpleasant when it's cold and windy",
    modelParaphraseVi: "fine in summer, but can be extremely unpleasant when it's cold and windy",
    acceptedAnswers: ["C", "difficult weather conditions at times", "cold and windy"],
    explanationEn: "C = difficult weather (cold and windy). Fitness is less important than it once was.",
    explanationVi: "C = thời tiết khó (lạnh và gió). Thể lực không còn quan trọng như trước.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Fresh food commercial manager — D intensive work but also fun",
    questionVi: "Fresh food commercial manager — D việc căng nhưng cũng vui",
    modelParaphraseEn: "fast-paced environment … the staff there work hard, but they play hard as well",
    modelParaphraseVi: "fast-paced environment … the staff there work hard, but they play hard as well",
    acceptedAnswers: ["D", "intensive work but also fun", "work hard, but they play hard", "fast-paced"],
    explanationEn: "D = intensive but fun (work hard / play hard in a fast-paced environment).",
    explanationVi: "D = căng nhưng vui (work hard / play hard trong môi trường fast-paced).",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Agronomist — F chance for rapid promotion",
    questionVi: "Agronomist — F cơ hội thăng tiến nhanh",
    modelParaphraseEn: "good opportunities for the right person to quickly make their way up the career ladder",
    modelParaphraseVi: "good opportunities for the right person to quickly make their way up the career ladder",
    acceptedAnswers: ["F", "chance for rapid promotion", "career ladder"],
    explanationEn: "F = rapid promotion (up the career ladder). Deep agricultural knowledge is expected, so experience is essential.",
    explanationVi: "F = thăng tiến nhanh (career ladder). Cần hiểu sâu ngành nông, nên kinh nghiệm là bắt buộc.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "Fresh produce buyer — A not a permanent job",
    questionVi: "Fresh produce buyer — A không phải việc lâu dài",
    modelParaphraseEn: "available for a 12-month maternity cover contract",
    modelParaphraseVi: "available for a 12-month maternity cover contract",
    acceptedAnswers: ["A", "not a permanent job", "maternity cover", "12-month"],
    explanationEn: "A = not permanent (12-month maternity cover). Competitive salary is mentioned, not overtime.",
    explanationVi: "A = không lâu dài (hợp đồng maternity cover 12 tháng). Có lương cạnh tranh, không nói overtime.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "Garden centre sales manager — H local travel involved",
    questionVi: "Garden centre sales manager — H có đi lại trong vùng",
    modelParaphraseEn: "You will be visiting centres in the region to ensure their high levels of customer service are maintained",
    modelParaphraseVi: "You will be visiting centres in the region to ensure their high levels of customer service are maintained",
    acceptedAnswers: ["H", "local travel involved", "visiting centres in the region"],
    explanationEn: "H = local travel (visiting centres in the region). You must live in the region.",
    explanationVi: "H = đi lại địa phương (thăm các centre trong vùng). Phải sống trong vùng.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "Tree technician — C experience not essential",
    questionVi: "Tree technician — C kinh nghiệm không bắt buộc",
    modelParaphraseEn: "A year's experience would be preferred but the company might be prepared to consider someone who has just completed an appropriate training course",
    modelParaphraseVi: "A year's experience would be preferred but the company might be prepared to consider someone who has just completed an appropriate training course",
    acceptedAnswers: ["C", "experience not essential", "just completed an appropriate training course"],
    explanationEn: "C = experience not essential (training course may be enough). A clean licence and safety training are required.",
    explanationVi: "C = không bắt buộc kinh nghiệm (khóa training có thể đủ). Cần bằng lái sạch và training an toàn.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "Farm worker — G accommodation available",
    questionVi: "Farm worker — G có chỗ ở",
    modelParaphraseEn: "the possibility of renting a small cottage on the estate",
    modelParaphraseVi: "the possibility of renting a small cottage on the estate",
    acceptedAnswers: ["G", "accommodation available", "cottage on the estate"],
    explanationEn: "G = accommodation available (cottage on the estate). Licence and tractor experience are essential.",
    explanationVi: "G = có chỗ ở (cottage trên estate). Bằng lái và kinh nghiệm máy kéo là bắt buộc.",
  },
];
