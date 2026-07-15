import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 29 exercises — may and might 1 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover may/might near-synonyms where natural.
 */
export const U29_MAY_AND_MIGHT_1_EXERCISES: readonly GrammarExercise[] = [
  // 29.1 — choose from box
  grammarCloze(
    "u29-1-2",
    "29.1 · may / might …",
    "'Is there a bookshop near here?' 'I'm not sure, but ask Anna. She __________.'",
    "might know",
    {
      alternatives: ["may know"],
      explanation: "Có lẽ Anna biết → might/may know.",
    },
  ),
  grammarCloze(
    "u29-1-3",
    "29.1 · may / might …",
    "'Where are those people from?' 'I don't know. They __________.'",
    "might be Brazilian",
    {
      alternatives: ["may be Brazilian"],
      explanation: "Có lẽ họ là người Brazil → might be Brazilian.",
    },
  ),
  grammarCloze(
    "u29-1-4",
    "29.1 · may / might …",
    "'I hope you can help me.' 'I'll try, but it __________.'",
    "may not be possible",
    {
      alternatives: ["might not be possible"],
      explanation: "Có lẽ không thể → may not be possible.",
    },
  ),
  grammarCloze(
    "u29-1-5",
    "29.1 · may / might …",
    "'Whose phone is this?' 'It's not mine. It __________.'",
    "may be Tom's",
    {
      alternatives: ["might be Tom's", "may be Toms", "might be Toms"],
      explanation: "Có lẽ của Tom → may be Tom's.",
    },
  ),
  grammarCloze(
    "u29-1-6",
    "29.1 · may / might …",
    "'Why doesn't George answer his phone?' 'He __________.'",
    "might be driving",
    {
      alternatives: ["may be driving"],
      explanation: "Có lẽ đang lái xe → might be driving.",
    },
  ),
  grammarCloze(
    "u29-1-7",
    "29.1 · may / might …",
    "'Do you know anyone who has a key to this cupboard?' 'Rachel __________, but I'm not sure.'",
    "might have one",
    {
      alternatives: ["may have one"],
      explanation: "Có lẽ Rachel có chìa → might have one.",
    },
  ),
  grammarCloze(
    "u29-1-8",
    "29.1 · may / might …",
    "'Gary is in a strange mood today.' 'Yes, he is. He __________.'",
    "may not be feeling well",
    {
      alternatives: ["might not be feeling well"],
      explanation: "Có lẽ đang không khỏe → may not be feeling well.",
    },
  ),

  // 29.2 — verb form after may/might
  grammarCloze(
    "u29-2-2",
    "29.2 · may/might + verb",
    "'Who was the guy we saw with Anna yesterday?' 'I'm not sure. It may __________ her brother.'",
    "have been",
    {
      explanation: "Suy đoán quá khứ → may have been her brother.",
    },
  ),
  grammarCloze(
    "u29-2-3",
    "29.2 · may/might + verb",
    "'Is Ellie here?' 'I can't see her. She may not __________ yet.'",
    "have arrived",
    {
      explanation: "Có lẽ chưa đến → may not have arrived yet.",
    },
  ),
  grammarCloze(
    "u29-2-4",
    "29.2 · may/might + verb",
    "'Gary said he would meet us in the cafe, but he isn't here.' 'He might __________ outside.'",
    "be waiting",
    {
      explanation: "Có lẽ đang đợi bên ngoài → might be waiting.",
    },
  ),
  grammarCloze(
    "u29-2-5",
    "29.2 · may/might + verb",
    "'How did John know that I'd lost my job?' 'I suppose Sam may __________ him.'",
    "have told",
    {
      explanation: "Có lẽ Sam đã nói → may have told him.",
    },
  ),
  grammarCloze(
    "u29-2-6",
    "29.2 · may/might + verb",
    "'Do you know where Jeff is? Is he still in the office?' 'He was here earlier, but he might __________ home.'",
    "have gone",
    {
      explanation: "Có lẽ đã về nhà → might have gone home.",
    },
  ),
  grammarCloze(
    "u29-2-7",
    "29.2 · may/might + verb",
    "'Where's Emma? What's she doing?' 'I'm not sure. She might __________ TV.'",
    "be watching",
    {
      explanation: "Có lẽ đang xem TV → might be watching TV.",
    },
  ),
  grammarCloze(
    "u29-2-8",
    "29.2 · may/might + verb",
    "'Does Max have any brothers or sisters?' 'I'm not sure. I think he may __________ a younger sister.'",
    "have",
    {
      explanation: "may + V → may have a younger sister.",
    },
  ),
  grammarCloze(
    "u29-2-9",
    "29.2 · may/might + verb",
    "'I can't find my umbrella.' 'You may __________ it in the restaurant last night.'",
    "have left",
    {
      explanation: "Có lẽ đã để quên → may have left it.",
    },
  ),
  grammarCloze(
    "u29-2-10",
    "29.2 · may/might + verb",
    "'I rang Dan's doorbell, but he didn't answer.' 'He might not __________ the doorbell.'",
    "have heard",
    {
      explanation: "Có lẽ không nghe thấy chuông → might not have heard.",
    },
  ),
  grammarCloze(
    "u29-2-11",
    "29.2 · may/might + verb",
    "'Hannah is supposed to meet us here, and she's already 20 minutes late.' 'She may __________. She's always forgetting things.'",
    "have forgotten",
    {
      explanation: "Có lẽ đã quên → may have forgotten.",
    },
  ),

  // 29.3 — might not have vs couldn't have
  grammarCloze(
    "u29-3-2",
    "29.3 · might not have / couldn't have",
    "'I wonder why Tom didn't come to the party. Perhaps he didn't want to come.' 'It's possible. He __________ to come.'",
    "might not have wanted",
    {
      explanation: "Có lẽ không muốn đến → might not have wanted (không chắc).",
    },
  ),
  grammarCloze(
    "u29-3-3",
    "29.3 · might not have / couldn't have",
    "'I wonder how the fire started. Was it an accident?' 'No, the police say it __________ an accident. It was deliberate.'",
    "couldn't have been",
    {
      explanation: "Cảnh sát kết luận cố ý → chắc chắn không phải tai nạn → couldn't have been.",
    },
  ),
  grammarCloze(
    "u29-3-4",
    "29.3 · might not have / couldn't have",
    "'Mike says he tried to find you yesterday.' 'Well, he __________ very hard. I was in my office all day.'",
    "couldn't have tried",
    {
      explanation: "Mình ở văn phòng cả ngày → anh ấy chắc chắn không tìm kỹ → couldn't have tried.",
    },
  ),
];
