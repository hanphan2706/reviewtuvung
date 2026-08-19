import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T2_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: [
        "we'll be continuing the series of lectures on memory",
        "we will be continuing the series of lectures on memory",
      ],
    },
    { id: "g2", answers: ["what can happen if this is not working properly"] },
    { id: "g3", answers: ["allow us to mentally travel back in time"] },
    { id: "g4", answers: ["try to remember the last time you ate dinner at a restaurant"] },
    { id: "g5", answers: ["This is the type of factual memory that we have in common with everyone else"] },
    { id: "g6", answers: ["remembering where you parked your car is an example of episodic memory"] },
    { id: "g7", answers: ["can be thought of as a process with several different steps"] },
    { id: "g8", answers: ["the process of receiving and registering information"] },
    { id: "g9", answers: ["Being distracted can make effective encoding very difficult"] },
    { id: "g10", answers: ["Encoding of episodic memories is also influenced by how you process the event"] },
    {
      id: "g11",
      answers: [
        "memories of encoded information are strengthened, stabilised and stored",
        "memories of encoded information are strengthened, stabilized and stored",
      ],
    },
    { id: "g12", answers: ["to facilitate later retrieval"] },
    {
      id: "g13",
      answers: [
        "Memories can fade or become harder to retrieve if they aren't used very often",
        "Memories can fade or become harder to retrieve if they are not used very often",
      ],
    },
    { id: "g14", answers: ["the conscious recollection of encoded information"] },
    { id: "g15", answers: ["These help episodic memory retrieval by acting as a prompt"] },
    { id: "g16", answers: ["You actually have to mentally travel back to the moment you parked"] },
    { id: "g17", answers: ["can have a profound effect on individuals' lives"] },
    { id: "g18", answers: ["they are often unable to return to university or work"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Today, " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " by focusing on what is called episodic memory and ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Episodic memory refers to the memory of an event or 'episode'. Episodic memories ",
        },
        { type: "gap", gapId: "g3" },
        {
          type: "text",
          text: " to an event from the past. Episodic memories include various details about these events, for example, when an event happened and other information such as the location. To help understand this concept, ",
        },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ". The ability to remember where you ate, who you were with and the items you ordered are all features of an episodic memory.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Episodic memory is distinct from another type of memory called semantic memory. ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " - that is your general knowledge of the world. To build upon a previous example, ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", but your understanding of what a car is and how an engine works are examples of semantic memory. Unlike episodic memory, semantic memory isn't dependent on recalling personal experiences.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Episodic memory " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " of memory processing: encoding, consolidation and retrieval." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The initial step is called encoding. This involves ",
        },
        { type: "gap", gapId: "g8" },
        {
          type: "text",
          text: ", which is necessary for creating memories of information or events that you experience. The degree to which you can successfully encode information depends on the level of attention you give to an event while it's actually happening. ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: ". For example, if you were introduced to someone called Charlie, you might make the connection that your uncle has the same name. Future recollection of Charlie's name is much easier if you have a strategy to help you encode it.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Memory consolidation, the next step in forming an episodic memory, is the process by which ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: ". Consolidation is most effective when the information being stored can be linked to an existing network of information. Consolidation makes it possible for you to store memories for later retrieval indefinitely. Forming strong memories depends on the frequency with which you try to retrieve them. ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The last step in forming episodic memories is called retrieval, which is ",
        },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". Retrieving information from episodic memory depends upon semantic, olfactory, auditory and visual factors. ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ". For example, when recalling where you parked your car you may use the colour of a sign close to where you parked. ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "There are a wide range of neurological diseases and conditions that can affect episodic memory. These range from Alzheimer's to schizophrenia to autism. An impairment of episodic memory ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: ". For example, the symptoms of schizophrenia can be reasonably well controlled by medication; however, patients' episodic memory may still be impaired and so ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". Recent studies have shown that computer-assisted games designed to keep the brain active can help improve their episodic memory.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Episodic memories can help people connect with others, for instance by sharing intimate details about their past; something individuals with autism often have problems with. This may be caused by an absence of a sense of self. This is essential for the storage of episodic memory, and has been found to be impaired in children with autism. Research has shown that treatments that improve memory may also have a positive impact on children's social development.",
        },
      ],
    },
  ],
};

export const CAM13_T2_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "the ability to recall details, e.g. the time and ______ of past events",
    questionVi: "the ability to recall details, e.g. the time and ______ of past events",
    modelParaphraseEn: "when an event happened and other information such as the location",
    modelParaphraseVi: "when an event happened and other information such as the location",
    acceptedAnswers: ["location"],
    explanationEn: "Episodic memories include when an event happened and the location.",
    explanationVi: "Episodic memory gồm thời điểm sự kiện xảy ra và location.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn:
      "different to semantic memory – the ability to remember general information about the ______",
    questionVi:
      "different to semantic memory – the ability to remember general information about the ______",
    modelParaphraseEn: "that is your general knowledge of the world",
    modelParaphraseVi: "that is your general knowledge of the world",
    acceptedAnswers: ["world"],
    explanationEn: "Semantic memory is general knowledge of the world, shared with everyone else.",
    explanationVi: "Semantic memory là kiến thức chung về the world, dùng chung với mọi người.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "which does not involve recalling ______ information",
    questionVi: "which does not involve recalling ______ information",
    modelParaphraseEn: "semantic memory isn't dependent on recalling personal experiences",
    modelParaphraseVi: "semantic memory isn't dependent on recalling personal experiences",
    acceptedAnswers: ["personal"],
    explanationEn: "Semantic memory does not depend on recalling personal experiences.",
    explanationVi: "Semantic memory không phụ thuộc vào việc nhớ personal experiences.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "the more ______ given to an event, the more successfully it can be encoded",
    questionVi: "the more ______ given to an event, the more successfully it can be encoded",
    modelParaphraseEn:
      "depends on the level of attention you give to an event while it's actually happening",
    modelParaphraseVi:
      "depends on the level of attention you give to an event while it's actually happening",
    acceptedAnswers: ["attention"],
    explanationEn: "Successful encoding depends on the attention given while the event is happening.",
    explanationVi: "Encode thành công phụ thuộc vào attention lúc sự kiện đang xảy ra.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "to remember a ______, it is useful to have a strategy for encoding such information",
    questionVi: "to remember a ______, it is useful to have a strategy for encoding such information",
    modelParaphraseEn:
      "Future recollection of Charlie's name is much easier if you have a strategy to help you encode it",
    modelParaphraseVi:
      "Future recollection of Charlie's name is much easier if you have a strategy to help you encode it",
    acceptedAnswers: ["name"],
    explanationEn: "A strategy helps you encode a name (e.g. linking Charlie to your uncle).",
    explanationVi: "Chiến lược giúp encode a name (ví dụ gắn Charlie với uncle).",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "most effective when memories can be added to a ______ of related information",
    questionVi: "most effective when memories can be added to a ______ of related information",
    modelParaphraseEn:
      "Consolidation is most effective when the information being stored can be linked to an existing network of information",
    modelParaphraseVi:
      "Consolidation is most effective when the information being stored can be linked to an existing network of information",
    acceptedAnswers: ["network"],
    explanationEn: "Consolidation works best when new memories join an existing network of information.",
    explanationVi: "Consolidation hiệu quả nhất khi nhớ mới gắn vào network thông tin sẵn có.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "the ______ of retrieval affects the strength of memories",
    questionVi: "the ______ of retrieval affects the strength of memories",
    modelParaphraseEn: "Forming strong memories depends on the frequency with which you try to retrieve them",
    modelParaphraseVi: "Forming strong memories depends on the frequency with which you try to retrieve them",
    acceptedAnswers: ["frequency"],
    explanationEn: "How often you retrieve a memory (frequency) affects how strong it stays.",
    explanationVi: "Tần suất retrieve (frequency) ảnh hưởng độ bền của trí nhớ.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn:
      "memory retrieval often depends on using a prompt, e.g. the ______ of an object near where you left your car",
    questionVi:
      "memory retrieval often depends on using a prompt, e.g. the ______ of an object near where you left your car",
    modelParaphraseEn: "you may use the colour of a sign close to where you parked",
    modelParaphraseVi: "you may use the colour of a sign close to where you parked",
    acceptedAnswers: ["colour", "color"],
    explanationEn: "A prompt such as the colour of a nearby sign helps you recall where you parked.",
    explanationVi: "Prompt như colour của biển gần chỗ đỗ giúp nhớ nơi đỗ xe.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "games which stimulate the ______ have been found to help people with schizophrenia",
    questionVi: "games which stimulate the ______ have been found to help people with schizophrenia",
    modelParaphraseEn:
      "computer-assisted games designed to keep the brain active can help improve their episodic memory",
    modelParaphraseVi:
      "computer-assisted games designed to keep the brain active can help improve their episodic memory",
    acceptedAnswers: ["brain"],
    explanationEn: "Computer-assisted games that keep the brain active can improve episodic memory in schizophrenia.",
    explanationVi: "Game trên máy tính giữ cho brain hoạt động có thể cải thiện episodic memory ở schizophrenia.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn:
      "children with autism may have difficulty forming episodic memories – possibly because their concept of the ______ may be absent",
    questionVi:
      "children with autism may have difficulty forming episodic memories – possibly because their concept of the ______ may be absent",
    modelParaphraseEn: "This may be caused by an absence of a sense of self",
    modelParaphraseVi: "This may be caused by an absence of a sense of self",
    acceptedAnswers: ["self"],
    explanationEn: "An absent sense of self may explain why children with autism struggle to form episodic memories.",
    explanationVi: "Thiếu sense of self có thể giải thích vì sao trẻ autism khó tạo episodic memories.",
  },
];
