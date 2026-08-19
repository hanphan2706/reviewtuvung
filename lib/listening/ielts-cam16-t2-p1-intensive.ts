import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like a bit more information about what you do", "I would like a bit more information about what you do"] },
    { id: "g2", answers: ["I'd like to get them converted to digital format", "I would like to get them converted to digital format"] },
    { id: "g3", answers: ["are there any restrictions"] },
    { id: "g4", answers: ["that's the minimum we can cope with", "that is the minimum we can cope with"] },
    { id: "g5", answers: ["we can't copy them otherwise", "we cannot copy them otherwise"] },
    { id: "g6", answers: ["that's not a problem", "that is not a problem"] },
    { id: "g7", answers: ["can you give me an idea of"] },
    { id: "g8", answers: ["And does that include the disk"] },
    { id: "g9", answers: ["we won't need anything until we've actually copied the pictures", "we will not need anything until we have actually copied the pictures"] },
    { id: "g10", answers: ["Is there anything else you'd like to ask", "Is there anything else you would like to ask"] },
    { id: "g11", answers: ["according to what they're about", "according to what they are about"] },
    { id: "g12", answers: ["you can suggest a name for each folder"] },
    { id: "g13", answers: ["can you make any improvements"] },
    { id: "g14", answers: ["that can make a big difference"] },
    { id: "g15", answers: ["they won't get damaged in the process", "they will not get damaged in the process"] },
    { id: "g16", answers: ["We do realise how precious these old photos can be", "We do realize how precious these old photos can be"] },
    { id: "g17", answers: ["I might be interested in that"] },
    { id: "g18", answers: ["that's one thing we can't do", "that is one thing we cannot do"] },
  ],
  lines: [
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Hello, Picturerep. Can I help you?" }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Oh, hi. I saw your advertisement about copying pictures to disk and " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Sure. What would you like to know?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well, I've got a box full of old family photos that's been up in the attic for years, some of them must be 50 or 60 years old, and ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Sure, we can do that for you." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Right. And what about size? The photos are all sorts of sizes - " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Well the maximum size of photo we can do with our normal services is 30 centimetres. And each picture must be at least 4 centimetres, ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "That should be fine. And some of them are in a frame - should I take them out before I send them?",
        },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "Yes please, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". And also the photos must all be separate, they mustn't be stuck into an album.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK, " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". So " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " how much this will cost? I've got about 360 photos I think." },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "We charge £195 for 300 to 400 photos for the basic service." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [{ type: "text", text: "Yes, one disk - but you can get extra ones for £5 each." }],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "That's good. So do I need to pay when I send you the photos?" }],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "No, " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". Then we'll let you know how much it is, and once we've received the payment, we'll send the parcel off to you.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: " about our services?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes. I've roughly sorted out the photos into groups, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " - so can you keep them in those groups when you copy them?" },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "Sure. We'll save each group in a different folder on the disk and if you like, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "text", text: "So I could have one called 'Grandparents' for instance?" }],
    },
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Exactly." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "And do you do anything besides scan the photos? Like, " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Yes, in the standard service each photo is checked, and we can sometimes touch up the colour a bit, or improve the contrast - ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. And some of the photos are actually quite fragile - " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", will they?" },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "No, if any look particularly fragile, we'd do them by hand. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "And another thing is we can make changes to a photo if you want - so if you want to remove an object from a photo, or maybe alter the background, we can do that.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Really? " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". I'll have a look through the photos and see. Oh, and talking of fixing photos - I've got a few that aren't properly in focus. Can you do anything to make that better?",
        },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        { type: "text", text: "No, I'm afraid " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK." }] },
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Any other information I can give you?" }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "Er … oh, how long will it all take?" }] },
    {
      speaker: "EMPLOYEE",
      segments: [{ type: "text", text: "We aim to get the copying done in ten days." }],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Fine. Right, well I'll get the photos packed up in a box and post them off to you." },
      ],
    },
    {
      speaker: "EMPLOYEE",
      segments: [
        {
          type: "text",
          text: "Right. If you've got a strong cardboard box, that's best. We've found that plastic ones sometimes break in the post.",
        },
      ],
    },
    { speaker: "WOMAN", segments: [{ type: "text", text: "OK. Right, thanks for your help. Bye." }] },
    { speaker: "EMPLOYEE", segments: [{ type: "text", text: "Bye." }] },
  ],
};

export const CAM16_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Photos must not be in a ______ or an album",
    questionVi: "Photos must not be in a ______ or an album",
    modelParaphraseEn: "some of them are in a frame - should I take them out … we can't copy them otherwise … they mustn't be stuck into an album",
    modelParaphraseVi: "some of them are in a frame - should I take them out … we can't copy them otherwise … they mustn't be stuck into an album",
    acceptedAnswers: ["frame"],
    explanationEn: "Take photos out of a frame; they must not be stuck in an album either.",
    explanationVi: "Phải tháo ảnh khỏi frame; cũng không được dán trong album.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "The cost for 360 photos is £______ (including one disk)",
    questionVi: "The cost for 360 photos is £______ (including one disk)",
    modelParaphraseEn: "We charge £195 for 300 to 400 photos for the basic service. Yes, one disk",
    modelParaphraseVi: "We charge £195 for 300 to 400 photos for the basic service. Yes, one disk",
    acceptedAnswers: ["195"],
    explanationEn: "360 is in the 300–400 band, so the price is £195 including one disk.",
    explanationVi: "360 nằm trong khoảng 300–400 nên giá là £195, gồm một disk.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Before the complete order is sent, ______ is required",
    questionVi: "Before the complete order is sent, ______ is required",
    modelParaphraseEn: "once we've received the payment, we'll send the parcel off to you",
    modelParaphraseVi: "once we've received the payment, we'll send the parcel off to you",
    acceptedAnswers: ["payment"],
    explanationEn: "They copy first, then send the parcel only after payment is received.",
    explanationVi: "Sao chép trước, rồi chỉ gửi khi đã nhận payment.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Photos can be placed in a folder, e.g. with the name ______",
    questionVi: "Photos can be placed in a folder, e.g. with the name ______",
    modelParaphraseEn: "So I could have one called 'Grandparents' for instance? Exactly",
    modelParaphraseVi: "So I could have one called 'Grandparents' for instance? Exactly",
    acceptedAnswers: ["Grandparents"],
    explanationEn: "Each group is saved in a named folder; the example name is Grandparents.",
    explanationVi: "Mỗi nhóm lưu trong folder có tên; ví dụ là Grandparents.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "The ______ and contrast can be improved if necessary",
    questionVi: "The ______ and contrast can be improved if necessary",
    modelParaphraseEn: "we can sometimes touch up the colour a bit, or improve the contrast",
    modelParaphraseVi: "we can sometimes touch up the colour a bit, or improve the contrast",
    acceptedAnswers: ["colour", "color"],
    explanationEn: "Contrast is already on the notes; the other improvement is colour.",
    explanationVi: "Contrast đã có trên đề; phần còn lại là colour.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Photos which are very fragile will be scanned by ______",
    questionVi: "Photos which are very fragile will be scanned by ______",
    modelParaphraseEn: "if any look particularly fragile, we'd do them by hand",
    modelParaphraseVi: "if any look particularly fragile, we'd do them by hand",
    acceptedAnswers: ["hand"],
    explanationEn: "Fragile photos are done by hand so they are not damaged.",
    explanationVi: "Ảnh dễ vỡ được scan by hand để không bị hỏng.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "It may be possible to remove an object from a photo, or change the ______",
    questionVi: "It may be possible to remove an object from a photo, or change the ______",
    modelParaphraseEn: "remove an object from a photo, or maybe alter the background",
    modelParaphraseVi: "remove an object from a photo, or maybe alter the background",
    acceptedAnswers: ["background"],
    explanationEn: "Extra restore work can alter the background (or remove an object).",
    explanationVi: "Dịch vụ restore thêm có thể đổi background (hoặc xóa một vật).",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "A photo which is not correctly in ______ cannot be fixed",
    questionVi: "A photo which is not correctly in ______ cannot be fixed",
    modelParaphraseEn: "I've got a few that aren't properly in focus. Can you do anything …? No, I'm afraid that's one thing we can't do",
    modelParaphraseVi: "I've got a few that aren't properly in focus. Can you do anything …? No, I'm afraid that's one thing we can't do",
    acceptedAnswers: ["focus"],
    explanationEn: "Out-of-focus photos cannot be fixed.",
    explanationVi: "Ảnh không đúng focus thì không sửa được.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Orders are completed within ______",
    questionVi: "Orders are completed within ______",
    modelParaphraseEn: "We aim to get the copying done in ten days",
    modelParaphraseVi: "We aim to get the copying done in ten days",
    acceptedAnswers: ["ten days", "10 days"],
    explanationEn: "Copying is aimed to be done in ten / 10 days.",
    explanationVi: "Sao chép nhằm hoàn tất trong ten / 10 days.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "Send the photos in a box (not ______)",
    questionVi: "Send the photos in a box (not ______)",
    modelParaphraseEn: "If you've got a strong cardboard box, that's best. We've found that plastic ones sometimes break in the post",
    modelParaphraseVi: "If you've got a strong cardboard box, that's best. We've found that plastic ones sometimes break in the post",
    acceptedAnswers: ["plastic"],
    explanationEn: "Use a strong cardboard box — plastic boxes can break in the post.",
    explanationVi: "Dùng hộp cardboard chắc — hộp plastic dễ vỡ khi gửi.",
  },
];
