import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["have a good time"] },
    { id: "g2", answers: ["It's a universal response to music", "It is a universal response to music"] },
    { id: "g3", answers: ["extremely good for our health"] },
    { id: "g4", answers: ["make us feel relaxed and happy"] },
    { id: "g5", answers: ["Dancing is also a sociable activity"] },
    { id: "g6", answers: ["whereas those dancing alone did not"] },
    { id: "g7", answers: ["cognitive tasks to perform"] },
    { id: "g8", answers: ["suffering from mental health problems"] },
    { id: "g9", answers: ["It's well established that", "It is well established that"] },
    { id: "g10", answers: ["in their sixties and beyond"] },
    { id: "g11", answers: ["there are no barriers to participation"] },
    { id: "g12", answers: ["Anyone can have a go"] },
    { id: "g13", answers: ["helps to promote a healthy heart"] },
    { id: "g14", answers: ["There are some less obvious benefits"] },
    { id: "g15", answers: ["a lot of concentration"] },
    { id: "g16", answers: ["up to a week"] },
    { id: "g17", answers: ["Latin American dance moves"] },
    { id: "g18", answers: ["a fun way to keep fit"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Dancing is something that humans do when they want to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", found in all cultures." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "But what's only been discovered recently is that dancing not only makes us feel good, it's also " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Dancing, like other forms of exercise, releases hormones, such as dopamine, which " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". And it also reduces feelings of stress or anxiety." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g5" },
        { type: "text", text: ", which is another reason it makes us feel good." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One study compared people's enjoyment of dancing at home in front of a video with dancing in a group in a studio.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The people dancing in a group reported feeling happier, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "In another experiment, university researchers at York and Sheffield took a group of students and sent each of them into a lab where music was played for five minutes.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Each had to choose from three options: to sit and listen quietly to the music, to cycle on an exercise bike while they listened, or to get up and dance.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "All were given " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " before and after." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The result showed that those who chose to dance showed much more creativity when doing problem-solving tasks.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Doctor Lovatt at the University of Hertfordshire believes dance could be a very useful way to help people " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "He thinks dance should be prescribed as therapy to help people overcome issues such as depression.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " dance is a good way of encouraging adolescent girls to take exercise but what about older people?",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Studies have shown that there are enormous benefits for people " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One of the great things about dance is that " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", even those whose standard of fitness is quite low." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Dance can be especially beneficial for older adults who can't run or do more intense workouts, or for those who don't want to.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "One 2015 study found that even a gentle dance workout " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "And there's plenty of evidence which suggests that dancing lowers the risk of falls, which could result in a broken hip, for example, by helping people to improve their balance.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " of dance for older people too." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "One thing I hadn't realised before researching this topic was that dance isn't just a physical challenge.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "It also requires " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " because you need to remember different steps and routines." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "For older people, this kind of activity is especially important because it forces their brain to process things more quickly and to retain more information.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Current research also shows that dance promotes a general sense of well-being in older participants, which can last " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " after a class." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Participants report feeling less tired and having greater motivation to be more active and do daily activities such as gardening or walking to the shops or a park.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Ballroom or country dancing, both popular with older people, have to be done in groups.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They require collaboration and often involve touching a dance partner, all of which encourages interaction on the dance floor.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "This helps to develop new relationships and can reduce older people's sense of isolation, which is a huge problem in many countries.",
        },
      ],
    },
    { speaker: null, segments: [{ type: "text", text: "I also looked at the benefits of Zumba." }] },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Fifteen million people in 180 countries now regularly take a Zumba class, an aerobic workout based on " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "John Porcari, a professor of exercise and sport science at the University of Wisconsin, analysed a group of women who were Zumba regulars and found that a class lasting 40 minutes burns about 370 calories.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "This is similar to moderately intense exercises like step aerobics or kickboxing." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A study in the American Journal of Health Behavior showed that when women with obesity did Zumba three times a week for 16 weeks, they lost an average of 1.2 kilos and lowered their percentage of body fat by 1%.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "More importantly, the women enjoyed the class so much that they made it a habit and continued to attend classes at least once a week - very unusual for an aerobic exercise programme.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Dance is never going to compete with high-intensity workouts when it comes to physical fitness gains, but its popularity is likely to keep on rising because it's such " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
  ],
};

export const CAM16_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "An experiment on university students suggested that dance increases ______",
    questionVi: "An experiment on university students suggested that dance increases ______",
    modelParaphraseEn: "those who chose to dance showed much more creativity when doing problem-solving tasks",
    modelParaphraseVi: "those who chose to dance showed much more creativity when doing problem-solving tasks",
    acceptedAnswers: ["creativity"],
    explanationEn: "Students who danced scored higher on creative problem-solving than those who sat or cycled.",
    explanationVi: "Sinh viên chọn nhảy ghi điểm creativity cao hơn nhóm ngồi nghe hoặc đạp xe.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "For those with mental illness, dance could be used as a form of ______",
    questionVi: "For those with mental illness, dance could be used as a form of ______",
    modelParaphraseEn: "dance should be prescribed as therapy to help people overcome issues such as depression",
    modelParaphraseVi: "dance should be prescribed as therapy to help people overcome issues such as depression",
    acceptedAnswers: ["therapy"],
    explanationEn: "Doctor Lovatt says dance could be prescribed as therapy for mental-health issues.",
    explanationVi: "Doctor Lovatt cho rằng dance có thể kê như therapy cho vấn đề sức khỏe tâm thần.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "accessible for people with low levels of ______",
    questionVi: "accessible for people with low levels of ______",
    modelParaphraseEn: "Anyone can have a go, even those whose standard of fitness is quite low",
    modelParaphraseVi: "Anyone can have a go, even those whose standard of fitness is quite low",
    acceptedAnswers: ["fitness"],
    explanationEn: "No barriers to participation — even people with low fitness can join.",
    explanationVi: "Không rào cản tham gia — cả người fitness thấp cũng nhảy được.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "better ______ reduces the risk of accidents",
    questionVi: "better ______ reduces the risk of accidents",
    modelParaphraseEn: "dancing lowers the risk of falls, which could result in a broken hip, for example, by helping people to improve their balance",
    modelParaphraseVi: "dancing lowers the risk of falls, which could result in a broken hip, for example, by helping people to improve their balance",
    acceptedAnswers: ["balance"],
    explanationEn: "Better balance lowers the risk of falls / accidents (e.g. a broken hip).",
    explanationVi: "Balance tốt hơn giảm té ngã / tai nạn (ví dụ gãy hông).",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "improves ______ function by making it work faster",
    questionVi: "improves ______ function by making it work faster",
    modelParaphraseEn: "it forces their brain to process things more quickly and to retain more information",
    modelParaphraseVi: "it forces their brain to process things more quickly and to retain more information",
    acceptedAnswers: ["brain"],
    explanationEn: "Remembering steps makes the brain process faster and retain more.",
    explanationVi: "Nhớ bước nhảy buộc brain xử lý nhanh hơn và giữ thông tin tốt hơn.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "gives people more ______ to take exercise",
    questionVi: "gives people more ______ to take exercise",
    modelParaphraseEn: "having greater motivation to be more active and do daily activities such as gardening or walking to the shops or a park",
    modelParaphraseVi: "having greater motivation to be more active and do daily activities such as gardening or walking to the shops or a park",
    acceptedAnswers: ["motivation"],
    explanationEn: "Participants feel less tired and have more motivation to be active.",
    explanationVi: "Người tham gia bớt mệt và có thêm motivation để vận động.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "can lessen the feeling of ______, very common in older people",
    questionVi: "can lessen the feeling of ______, very common in older people",
    modelParaphraseEn: "can reduce older people's sense of isolation, which is a huge problem in many countries",
    modelParaphraseVi: "can reduce older people's sense of isolation, which is a huge problem in many countries",
    acceptedAnswers: ["isolation"],
    explanationEn: "Group dances (ballroom / country) build relationships and reduce isolation.",
    explanationVi: "Nhảy nhóm (ballroom / country) tạo quan hệ và giảm isolation.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "doing Zumba for 40 minutes uses up as many ______ as other quite intense forms of exercise",
    questionVi: "doing Zumba for 40 minutes uses up as many ______ as other quite intense forms of exercise",
    modelParaphraseEn: "a class lasting 40 minutes burns about 370 calories. This is similar to moderately intense exercises like step aerobics or kickboxing",
    modelParaphraseVi: "a class lasting 40 minutes burns about 370 calories. This is similar to moderately intense exercises like step aerobics or kickboxing",
    acceptedAnswers: ["calories"],
    explanationEn: "40 minutes of Zumba burns about 370 calories — similar to step aerobics or kickboxing.",
    explanationVi: "Zumba 40 phút đốt khoảng 370 calories — tương đương step aerobics hoặc kickboxing.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "women suffering from ______ benefited from doing Zumba",
    questionVi: "women suffering from ______ benefited from doing Zumba",
    modelParaphraseEn: "when women with obesity did Zumba three times a week for 16 weeks, they lost an average of 1.2 kilos",
    modelParaphraseVi: "when women with obesity did Zumba three times a week for 16 weeks, they lost an average of 1.2 kilos",
    acceptedAnswers: ["obesity"],
    explanationEn: "The Health Behavior study was on women with obesity (weight and body-fat fell).",
    explanationVi: "Nghiên cứu Health Behavior làm trên phụ nữ obesity (giảm cân và mỡ).",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "Zumba became a ______ for the participants",
    questionVi: "Zumba became a ______ for the participants",
    modelParaphraseEn: "they made it a habit and continued to attend classes at least once a week",
    modelParaphraseVi: "they made it a habit and continued to attend classes at least once a week",
    acceptedAnswers: ["habit"],
    explanationEn: "They enjoyed it enough to make Zumba a habit (at least once a week).",
    explanationVi: "Họ thích đến mức biến Zumba thành habit (ít nhất một buổi/tuần).",
  },
];
