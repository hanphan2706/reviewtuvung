import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T4_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["don't mind me calling you", "do not mind me calling you"],
    },
    {
      id: "g2",
      answers: ["need a bit of advice"],
    },
    { id: "g3", answers: ["Best thing I ever did"] },
    { id: "g4", answers: ["customer services department"] },
    { id: "g5", answers: ["pretty nervous to begin with"] },
    {
      id: "g6",
      answers: ["But it didn't actually matter", "But it did not actually matter"],
    },
    {
      id: "g7",
      answers: ["wish I'd done that one", "wish I had done that one"],
    },
    { id: "g8", answers: ["get on with them"] },
    { id: "g9", answers: ["loads of different areas"] },
    { id: "g10", answers: ["which isn't great", "which is not great"] },
    { id: "g11", answers: ["And the pay goes up massively"] },
    {
      id: "g12",
      answers: ["will be really useful"],
    },
    {
      id: "g13",
      answers: ["most useful part about it"],
    },
    {
      id: "g14",
      answers: ["I didn't even mind the studying", "I did not even mind the studying"],
    },
    { id: "g15", answers: ["lots of support"] },
    {
      id: "g16",
      answers: ["nothing to worry about"],
    },
    {
      id: "g17",
      answers: ["skirt or trousers"],
    },
    { id: "g18", answers: ["respond better to you"] },
  ],
  lines: [
    {
      speaker: "MARTHA",
      segments: [
        { type: "text", text: "Hi Alex. It's Martha Clines here. James White gave me your number. I hope you " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "ALEX", segments: [{ type: "text", text: "Of course not. How are you, Martha?" }] },
    {
      speaker: "MARTHA",
      segments: [
        { type: "text", text: "Good thanks. I'm ringing because I " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "ALEX", segments: [{ type: "text", text: "Oh yeah. What about?" }] },
    {
      speaker: "MARTHA",
      segments: [
        {
          type: "text",
          text: "The training you did at JPNW a few years ago. I'm applying for the same thing.",
        },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Oh right. Yes, I did mine in 2014. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". I'm still working there." },
      ],
    },
    { speaker: "MARTHA", segments: [{ type: "text", text: "Really? What are you doing?" }] },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Well, now I work in the " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " but I did my initial training in Finance. I stayed there for the first two years and then moved to where I am now.",
        },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [{ type: "text", text: "That's the same department I'm applying for. Did you enjoy it?" }],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "I was " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". I didn't do well in my exams at school and I was really worried because I failed Maths. ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " because I did lots of courses on the job." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [
        {
          type: "text",
          text: "Did you get a diploma at the end of your trainee period? I'm hoping to do the one in business skills.",
        },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Yes. That sounds good. I took the one on IT skills but I " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " instead." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [
        { type: "text", text: "OK, that's good to know. What about the other trainees? How did you " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        {
          type: "text",
          text: "There were about 20 of us who started at the same time and we were all around the same age - I was 18 and there was only one person younger than me, who was 17. The rest were between 18 and 20. I made some good friends.",
        },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [
        {
          type: "text",
          text: "I've heard lots of good things about the training at JPNW. It seems like there are a lot of opportunities there.",
        },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Yeah, definitely. Because of its size you can work in " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " within the organisation." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [
        {
          type: "text",
          text: "What about pay? I know you get a lower minimum wage than regular employees.",
        },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "That's right - " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". But you get the same number of days' holiday as everyone else. ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " if they offer you a job at the end of the training period." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [
        { type: "text", text: "Yeah, but I'm not doing it for the money - it's the experience I think " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". Everyone says by the end of the year you gain so much confidence.",
        },
      ],
    },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "You're right. That's the " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: ". There's a lot of variety too. You're given lots of different things to do. I enjoyed it all - ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MARTHA", segments: [{ type: "text", text: "Do you have to spend any time in college?" }] },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Yes, one day each month. So you get " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " from both your tutor and your manager." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [{ type: "text", text: "That's good. And the company is easy to get to, isn't it?" }],
    },
    {
      speaker: "ALEX",
      segments: [
        {
          type: "text",
          text: "Yes, it's very close to the train station so the location's a real advantage.",
        },
      ],
    },
    { speaker: "ALEX", segments: [{ type: "text", text: "Have you got a date for your interview yet?" }] },
    { speaker: "MARTHA", segments: [{ type: "text", text: "Yes, it's on the 23rd of this month." }] },
    {
      speaker: "ALEX",
      segments: [
        {
          type: "text",
          text: "So long as you're well prepared there's ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ". Everyone's very friendly." },
      ],
    },
    {
      speaker: "MARTHA",
      segments: [{ type: "text", text: "I am not sure what I should wear. What do you think?" }],
    },
    {
      speaker: "ALEX",
      segments: [
        {
          type: "text",
          text: "Nothing too casual - like jeans, for example. If you've got a nice jacket, wear that with a ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MARTHA", segments: [{ type: "text", text: "OK. Thanks. Any other tips?" }] },
    {
      speaker: "ALEX",
      segments: [
        {
          type: "text",
          text: "Erm, well I know it's really obvious but arrive in plenty of time. They hate people who are late. So make sure you know exactly where you have to get to. And one other useful piece of advice my manager told me before I had the interview for this job - is to smile. Even if you feel terrified. It makes people ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MARTHA", segments: [{ type: "text", text: "I'll have to practise doing that in the mirror!" }] },
    {
      speaker: "ALEX",
      segments: [
        { type: "text", text: "Yeah - well, good luck. Let me know if you need any more information." },
      ],
    },
    { speaker: "MARTHA", segments: [{ type: "text", text: "Thanks very much." }] },
  ],
};

export const CAM13_T4_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "At first, Alex did his training in the ______ department",
    questionVi: "At first, Alex did his training in the ______ department",
    modelParaphraseEn: "I did my initial training in Finance",
    modelParaphraseVi: "I did my initial training in Finance",
    acceptedAnswers: ["Finance"],
    explanationEn: "He now works in customer services, but his initial training was in Finance.",
    explanationVi: "Hiện anh làm customer services, nhưng đào tạo ban đầu là ở Finance.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Alex didn't have a qualification from school in ______",
    questionVi: "Alex didn't have a qualification from school in ______",
    modelParaphraseEn: "I was really worried because I failed Maths",
    modelParaphraseVi: "I was really worried because I failed Maths",
    acceptedAnswers: ["Maths", "Math", "Mathematics", "maths", "math", "mathematics"],
    explanationEn: "He failed Maths at school; it did not actually matter because of on-the-job courses.",
    explanationVi: "Anh trượt Maths ở trường; thực ra không sao vì học nhiều khóa on the job.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Alex thinks he should have done the diploma in ______ skills",
    questionVi: "Alex thinks he should have done the diploma in ______ skills",
    modelParaphraseEn: "I took the one on IT skills but I wish I'd done that one instead",
    modelParaphraseVi: "I took the one on IT skills but I wish I'd done that one instead",
    acceptedAnswers: ["business"],
    explanationEn: "Martha hopes to do business skills; Alex took IT and wishes he had done that one instead.",
    explanationVi: "Martha muốn diploma business skills; Alex học IT và ước đã học cái đó.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Age of other trainees: the youngest was ______",
    questionVi: "Age of other trainees: the youngest was ______",
    modelParaphraseEn: "I was 18 and there was only one person younger than me, who was 17",
    modelParaphraseVi: "I was 18 and there was only one person younger than me, who was 17",
    acceptedAnswers: ["17", "seventeen"],
    explanationEn: "Alex was 18; only one trainee was younger — 17. The rest were 18–20.",
    explanationVi: "Alex 18 tuổi; chỉ một người trẻ hơn — 17. Số còn lại 18–20.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Trainees receive the same amount of ______ as permanent staff",
    questionVi: "Trainees receive the same amount of ______ as permanent staff",
    modelParaphraseEn: "But you get the same number of days' holiday as everyone else",
    modelParaphraseVi: "But you get the same number of days' holiday as everyone else",
    acceptedAnswers: ["holiday", "holidays", "vacation", "vacations"],
    explanationEn: "Pay is lower, but holiday entitlement matches permanent staff.",
    explanationVi: "Lương thấp hơn, nhưng số ngày holiday bằng nhân viên chính thức.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Trainees go to ______ one day per month",
    questionVi: "Trainees go to ______ one day per month",
    modelParaphraseEn: "Do you have to spend any time in college? Yes, one day each month",
    modelParaphraseVi: "Do you have to spend any time in college? Yes, one day each month",
    acceptedAnswers: ["college"],
    explanationEn: "One day each month at college, with support from tutor and manager.",
    explanationVi: "Một ngày mỗi tháng ở college, có hỗ trợ từ tutor và manager.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "The company is in a convenient ______",
    questionVi: "The company is in a convenient ______",
    modelParaphraseEn: "it's very close to the train station so the location's a real advantage",
    modelParaphraseVi: "it's very close to the train station so the location's a real advantage",
    acceptedAnswers: ["location"],
    explanationEn: "Close to the train station — location is a real advantage.",
    explanationVi: "Gần ga tàu — location là lợi thế thật sự.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Don't wear ______",
    questionVi: "Don't wear ______",
    modelParaphraseEn: "Nothing too casual - like jeans, for example",
    modelParaphraseVi: "Nothing too casual - like jeans, for example",
    acceptedAnswers: ["jeans"],
    explanationEn: "Avoid casual clothes such as jeans; wear a jacket with a skirt or trousers.",
    explanationVi: "Tránh đồ casual như jeans; mặc jacket với skirt hoặc trousers.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Don't be ______",
    questionVi: "Don't be ______",
    modelParaphraseEn: "arrive in plenty of time. They hate people who are late",
    modelParaphraseVi: "arrive in plenty of time. They hate people who are late",
    acceptedAnswers: ["late"],
    explanationEn: "Arrive in plenty of time — they hate people who are late.",
    explanationVi: "Đến sớm — họ ghét người late.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Make sure you ______",
    questionVi: "Make sure you ______",
    modelParaphraseEn: "one other useful piece of advice … is to smile. Even if you feel terrified",
    modelParaphraseVi: "one other useful piece of advice … is to smile. Even if you feel terrified",
    acceptedAnswers: ["smile"],
    explanationEn: "Smile even if you feel terrified — people respond better to you.",
    explanationVi: "Hãy smile dù cảm thấy terrified — người khác sẽ phản ứng tốt hơn.",
  },
];
