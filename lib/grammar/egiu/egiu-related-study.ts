import { EGIU_UNITS_BY_NUMBER } from "@/lib/grammar/egiu/egiu-catalog";
import type { GrammarRelatedStudy, GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

type RelatedStudySpec = {
  message: string;
  unitNumbers: readonly number[];
};

/**
 * Companion / contrast units — used to deep-link Unit N mentions in the intro.
 */
const RELATED_STUDY_BY_UNIT: Readonly<Record<number, RelatedStudySpec>> = {
  1: {
    message: "Nên học kèm Unit 2 (present simple) để có đủ hai vế trước khi so sánh trực tiếp ở Unit 3.",
    unitNumbers: [2, 3],
  },
  2: {
    message:
      "Nên học kèm Unit 1 (present continuous) để phân biệt việc đang xảy ra với việc lặp lại, rồi xem Unit 3 khi so sánh trực tiếp hai thời này.",
    unitNumbers: [1, 3],
  },
  3: {
    message: "Nên học kèm Unit 4 để nắm đủ đối chiếu present continuous và present simple.",
    unitNumbers: [4],
  },
  4: {
    message: "Nên học kèm Unit 3 để có bức tranh đầy đủ về đối chiếu continuous và simple.",
    unitNumbers: [3],
  },
  5: {
    message: "Nên học kèm Unit 6 (past continuous) để biết cách kết hợp hai thời này khi kể chuyện.",
    unitNumbers: [6],
  },
  6: {
    message: "Nên học kèm Unit 5 (past simple) để phân biệt việc đã hoàn tất với việc đang diễn ra.",
    unitNumbers: [5],
  },
  7: {
    message:
      "Nên học kèm Unit 8 (kinh nghiệm sống) và Unit 9 (present perfect continuous) để nắm trọn nhóm thời present perfect.",
    unitNumbers: [8, 9],
  },
  8: {
    message: "Nên học kèm Unit 7 (present perfect 1) và Unit 9 (present perfect continuous) để nắm trọn nhóm thời này.",
    unitNumbers: [7, 9],
  },
  9: {
    message:
      "Nên học kèm Unit 7 và Unit 8 (present perfect 1–2) để thấy sự khác nhau giữa continuous và simple trong nhóm thời present perfect.",
    unitNumbers: [7, 8],
  },
  10: {
    message: "Nên học kèm Unit 9 (continuous) và Units 7–8 (simple) để thấy rõ sự khác biệt giữa hai dạng.",
    unitNumbers: [9, 7, 8],
  },
  11: {
    message: "Nên học kèm Unit 10 (continuous và simple) và Unit 12 (for and since) để nắm trọn cụm present perfect chỉ khoảng thời gian.",
    unitNumbers: [10, 12],
  },
  12: {
    message: "Nên học kèm Unit 11 (how long have you been) để ôn lại present perfect chỉ khoảng thời gian trước khi đi sâu vào for và since.",
    unitNumbers: [11],
  },
  13: {
    message: "Nên học kèm Unit 14 để nắm trọn bộ khi nào dùng present perfect và khi nào dùng past simple.",
    unitNumbers: [14],
  },
  14: {
    message: "Nên học kèm Unit 13 để hoàn thiện quy tắc chọn giữa present perfect và past simple.",
    unitNumbers: [13],
  },
  15: {
    message: "Nên học kèm Unit 16 (past perfect continuous) và Units 13–14 (present perfect and past) để phân biệt các mốc thời gian trong quá khứ.",
    unitNumbers: [16, 13, 14],
  },
  16: {
    message: "Nên học kèm Unit 15 (past perfect) trước khi học dạng tiếp diễn của thời này.",
    unitNumbers: [15],
  },
  18: {
    message: "Nên học kèm Unit 61 (be/get used to) để phân biệt used to do và am/is/are used to doing.",
    unitNumbers: [61],
  },
  19: {
    message:
      "Xem thêm I'm going to (Units 20, 23), will (Units 21–22) và present simple sau when/if (Unit 25); ôn lại present continuous/simple ở Units 1–4.",
    unitNumbers: [1, 2, 3, 4, 20, 21, 22, 23, 25],
  },
  20: {
    message: "Nên học kèm Unit 19 (present tenses for the future) và Unit 23 (I will and I'm going to).",
    unitNumbers: [19, 23],
  },
  21: {
    message:
      "Nên học kèm Unit 22 để phân biệt will dùng cho quyết định tức thời (Unit 21) và will dùng để dự đoán/tin tưởng về tương lai (Unit 22).",
    unitNumbers: [22],
  },
  22: {
    message: "Nên học kèm Unit 21 (will and shall 1 — quyết định tức thời) để nắm trọn cách dùng will/shall.",
    unitNumbers: [21],
  },
  23: {
    message: "Nên học kèm Units 20–22 để nắm trọn will và going to trước khi so sánh hai dạng.",
    unitNumbers: [20, 21, 22],
  },
  24: {
    message: "Nên học kèm Units 21–22 (will/shall) và Unit 120 (by then / by the time).",
    unitNumbers: [21, 22, 120],
  },
  25: {
    message:
      "Nên học kèm Unit 19 (present tenses cho tương lai) và Unit 7 (present perfect) trước khi kết hợp với when/if; so sánh với Unit 38 (if I do và if I did) để phân biệt if thật với if giả định.",
    unitNumbers: [19, 7, 38],
  },
  26: {
    message: "Nên học kèm Unit 27 (could / could have) và Unit 37 (can/could you…?) để mở rộng cách dùng can/could.",
    unitNumbers: [27, 37],
  },
  27: {
    message: "Nên học kèm Unit 26 trước, rồi Unit 29 để so sánh could với may/might.",
    unitNumbers: [26, 29],
  },
  28: {
    message:
      "Nên học kèm Unit 26 (can't khả năng), Unit 27 (couldn't have), Unit 31 (must / have to bắt buộc) và Unit 32 (mustn't / needn't).",
    unitNumbers: [26, 27, 31, 32],
  },
  29: {
    message: "Nên học kèm Unit 30 (may/might với tương lai) và Unit 27 (could) để so sánh khả năng.",
    unitNumbers: [30, 27],
  },
  30: {
    message: "Nên học kèm Unit 29 (may/might 1 — khả năng hiện tại/quá khứ) để có bức tranh đầy đủ.",
    unitNumbers: [29],
  },
  31: {
    message:
      "Nên học kèm Unit 32 (mustn't / needn't) và nhớ Unit 28 dùng must theo nghĩa suy đoán, không phải bắt buộc.",
    unitNumbers: [32, 28],
  },
  32: {
    message: "Nên học kèm Unit 31 (have to / must) để phân biệt mustn't (cấm) và don't have to / needn't (không cần).",
    unitNumbers: [31],
  },
  33: {
    message: "Nên học kèm Unit 34 (should 2) và Unit 35 (I'd better / it's time) để nắm các mẫu khuyên nhủ liên quan.",
    unitNumbers: [34, 35],
  },
  34: {
    message: "Nên học kèm Unit 33 (should 1 — lời khuyên và should have) trước khi học các mẫu that … should.",
    unitNumbers: [33],
  },
  35: {
    message: "Nên học kèm Unit 33 để so sánh I'd better với should khi đưa lời khuyên.",
    unitNumbers: [33],
  },
  36: {
    message: "Nên học kèm Units 38–41 (if & wish) để nắm would trong câu điều kiện và ước muốn.",
    unitNumbers: [38, 39, 40, 41],
  },
  37: {
    message: "Nên học kèm Unit 26 để ôn lại can/could trước khi luyện yêu cầu, đề nghị và xin phép.",
    unitNumbers: [26],
  },
  38: {
    message:
      "Nên học kèm Unit 39 (if I knew), Unit 40 (if I had known); so với Unit 25 (if/when) và Unit 36 (would).",
    unitNumbers: [39, 40, 25, 36],
  },
  39: {
    message:
      "Nên học kèm Unit 38 (if I do / if I did), Unit 40 (if I had known) và Unit 41 (wish + would) để phân biệt các lớp điều kiện và ước muốn.",
    unitNumbers: [38, 40, 41],
  },
  40: {
    message: "Nên học kèm Unit 39 (hiện tại giả định) và Unit 41 (wish) để đối chiếu would / would have và ước muốn quá khứ.",
    unitNumbers: [39, 41],
  },
  41: {
    message:
      "Nên học kèm Unit 39 (I wish I knew) và Unit 40 (I wish I had known) để phân biệt wish + quá khứ và wish + would.",
    unitNumbers: [39, 40],
  },
  42: {
    message: "Nên học kèm Units 43–44 để nắm trọn các dạng passive (be done / been done / being done / get).",
    unitNumbers: [43, 44],
  },
  43: {
    message: "Nên học kèm Unit 42 (passive cơ bản) và Unit 44 (các mẫu passive nâng cao).",
    unitNumbers: [42, 44],
  },
  44: {
    message: "Nên học kèm Units 42–43 trước khi học các dạng passive phức hơn.",
    unitNumbers: [42, 43],
  },
  45: {
    message: "Nên học kèm Units 42–44 (passive) trước khi học it is said that / he is said to / supposed to.",
    unitNumbers: [42, 43, 44],
  },
  46: {
    message: "Nên học kèm Unit 42 (passive cơ bản) để đối chiếu is done với have something done.",
    unitNumbers: [42],
  },
  47: {
    message: "Nên học kèm Unit 48 (say/tell) và Unit 50B (câu hỏi tường thuật).",
    unitNumbers: [48, 50],
  },
  48: {
    message: "Nên học kèm Unit 47 (reported speech 1) trước khi mở rộng các mẫu tường thuật.",
    unitNumbers: [47],
  },
  49: {
    message: "Nên học kèm Unit 50 (Do you know where…?) và Unit 52 (question tags).",
    unitNumbers: [50, 52],
  },
  50: {
    message: "Nên học kèm Unit 49 và Units 47–48 (reported speech).",
    unitNumbers: [49, 47, 48],
  },
  51: {
    message: "Nên học kèm Units 49–50 (câu hỏi) và Unit 52 (question tags).",
    unitNumbers: [49, 50, 52],
  },
  52: {
    message: "Nên học kèm Unit 51 (trợ động từ) và Units 49–50 (câu hỏi).",
    unitNumbers: [51, 49, 50],
  },
  53: {
    message: "Nên học kèm Unit 54 (verb + to) và Units 56–58 (khi -ing và to đổi nghĩa).",
    unitNumbers: [54, 56, 57, 58],
  },
  54: {
    message: "Nên học kèm Unit 53 (-ing) và Units 55–58 (verb + to / -ing or to).",
    unitNumbers: [53, 55, 56, 57, 58],
  },
  55: {
    message: "Nên học kèm Unit 54 (verb + to).",
    unitNumbers: [54],
  },
  56: {
    message: "Nên học kèm Units 53–54 và 57–58.",
    unitNumbers: [53, 54, 57, 58],
  },
  57: {
    message: "Nên học kèm Units 53–54, 56 và 58.",
    unitNumbers: [53, 54, 56, 58],
  },
  58: {
    message: "Nên học kèm Units 53–57 và Unit 59 (prefer / would rather).",
    unitNumbers: [53, 54, 55, 56, 57, 59],
  },
  59: {
    message: "Nên học kèm Unit 58 (would like / like patterns).",
    unitNumbers: [58],
  },
  60: {
    message: "Nên học kèm Unit 53 (Verb + -ing).",
    unitNumbers: [53],
  },
  61: {
    message: "Nên học kèm Unit 18 (used to do) để phân biệt used to và be/get used to.",
    unitNumbers: [18],
  },
  62: {
    message: "Nên học kèm Unit 60 (preposition + -ing).",
    unitNumbers: [60],
  },
  65: {
    message: "Nên học kèm Unit 66 (afraid to / afraid of).",
    unitNumbers: [66],
  },
  66: {
    message: "Nên học kèm Unit 62 (verb + prep + -ing) và Unit 65 (adjective + to).",
    unitNumbers: [62, 65],
  },
  67: {
    message: "Nên học kèm Units 5–6 (past simple / past continuous).",
    unitNumbers: [5, 6],
  },
  68: {
    message: "Nên học kèm Unit 60 (preposition + -ing) và Units 92–97 (relative / -ing clauses).",
    unitNumbers: [60, 92, 93, 94, 95, 96, 97],
  },
  69: {
    message: "Nên học kèm Unit 70 và Unit 71 để nắm trọn countable / uncountable và a/an / some.",
    unitNumbers: [70, 71],
  },
  70: {
    message: "Nên học kèm Unit 69 (countable / uncountable 1) và Unit 71 (a/an and some).",
    unitNumbers: [69, 71],
  },
  71: {
    message: "Nên học kèm Units 69–70 (countable / uncountable) và Unit 72 (a/an and the).",
    unitNumbers: [69, 70, 72],
  },
  72: {
    message: "Nên học kèm Unit 71 và Units 73–76 (the 1–4) để nắm trọn mạo từ.",
    unitNumbers: [71, 73, 74, 75, 76],
  },
  73: {
    message: "Nên học kèm Unit 72 và Units 74–76 để nắm trọn chuỗi the.",
    unitNumbers: [72, 74, 75, 76],
  },
  74: {
    message: "Nên học kèm Unit 72 và Units 73, 75–76 để nắm trọn chuỗi the.",
    unitNumbers: [72, 73, 75, 76],
  },
  75: {
    message: "Nên học kèm Unit 72 và Units 73–74, 76 để nắm trọn chuỗi the.",
    unitNumbers: [72, 73, 74, 76],
  },
  76: {
    message: "Nên học kèm Unit 72 và Units 73–75; xem tiếp Units 77–78 về tên riêng.",
    unitNumbers: [72, 73, 74, 75, 77, 78],
  },
  77: {
    message: "Nên học kèm Unit 76 (the 4) và Unit 78 để nắm tên riêng có/không có the.",
    unitNumbers: [76, 78],
  },
  78: {
    message: "Nên học kèm Unit 76 và Unit 77.",
    unitNumbers: [76, 77],
  },
  81: {
    message: "Nên học kèm Unit 80 (noun + noun) để đối chiếu 's / of với cụm danh từ.",
    unitNumbers: [80],
  },
  82: {
    message: "Nên học kèm Unit 83 (a friend of mine / my own / on my own).",
    unitNumbers: [83],
  },
  83: {
    message: "Nên học kèm Unit 82 (myself / yourself / themselves).",
    unitNumbers: [82],
  },
  85: {
    message: "Nên học kèm Unit 86 (no/none/any / nothing/nobody) để đối chiếu some/any và phủ định.",
    unitNumbers: [86],
  },
  86: {
    message: "Nên học kèm Unit 85 (some and any) trước khi học no/none/any.",
    unitNumbers: [85],
  },
  88: {
    message: "Nên học kèm Unit 90 (all / every / whole).",
    unitNumbers: [90],
  },
  90: {
    message: "Nên học kèm Unit 88 (all of) và Unit 91 (each/every).",
    unitNumbers: [88, 91],
  },
  91: {
    message: "Nên học kèm Unit 90 (all / every / whole).",
    unitNumbers: [90],
  },
  92: {
    message: "Nên học kèm Units 93–96 để nắm trọn relative clauses.",
    unitNumbers: [93, 94, 95, 96],
  },
  93: {
    message: "Nên học kèm Unit 92 và Units 94–96 để nắm trọn relative clauses.",
    unitNumbers: [92, 94, 95, 96],
  },
  94: {
    message: "Nên học kèm Units 92–93 và Units 95–96 để nắm trọn relative clauses.",
    unitNumbers: [92, 93, 95, 96],
  },
  95: {
    message: "Nên học kèm Units 92–94 và Unit 96 để phân biệt mệnh đề xác định và mệnh đề thêm thông tin.",
    unitNumbers: [92, 93, 94, 96],
  },
  96: {
    message: "Nên học kèm Units 92–95 trước khi học các cấu trúc relative clause nâng cao.",
    unitNumbers: [92, 93, 94, 95],
  },
  97: {
    message: "Nên học kèm Unit 92 (relative) và Unit 98 (-ing/-ed adjectives) để phân biệt mệnh đề rút gọn và tính từ.",
    unitNumbers: [92, 98],
  },
  98: {
    message: "Nên học kèm Unit 97 (mệnh đề -ing/-ed).",
    unitNumbers: [97],
  },
  99: {
    message: "Nên học kèm Units 100–101 (adjectives and adverbs).",
    unitNumbers: [100, 101],
  },
  100: {
    message: "Nên học kèm Unit 101 (adjectives and adverbs 2).",
    unitNumbers: [101],
  },
  101: {
    message: "Nên học kèm Unit 100 (adjectives and adverbs 1).",
    unitNumbers: [100],
  },
  102: {
    message: "Nên học kèm Units 103–104 (enough/too và quite/pretty/rather/fairly).",
    unitNumbers: [103, 104],
  },
  103: {
    message: "Nên học kèm Units 102 và 104.",
    unitNumbers: [102, 104],
  },
  104: {
    message: "Nên học kèm Units 102–103.",
    unitNumbers: [102, 103],
  },
  105: {
    message: "Nên học kèm Units 106–108 (comparative 2–3 và superlative).",
    unitNumbers: [106, 107, 108],
  },
  106: {
    message: "Nên học kèm Unit 105 và Units 107–108 để nắm trọn comparative và superlative.",
    unitNumbers: [105, 107, 108],
  },
  107: {
    message: "Nên học kèm Units 105–106 và Unit 108 để nắm trọn comparative và superlative.",
    unitNumbers: [105, 106, 108],
  },
  108: {
    message: "Nên học kèm Units 105–107 trước khi học superlative.",
    unitNumbers: [105, 106, 107],
  },
  109: {
    message: "Nên học kèm Unit 110 (word order 2 — vị trí trạng từ).",
    unitNumbers: [110],
  },
  110: {
    message: "Nên học kèm Unit 109 (word order 1).",
    unitNumbers: [109],
  },
  111: {
    message: "Nên học kèm Unit 110 (word order 2).",
    unitNumbers: [110],
  },
  112: {
    message: "Nên học kèm Unit 113 (although / though / even though).",
    unitNumbers: [113],
  },
  113: {
    message: "Nên học kèm Units 114–115 và câu điều kiện.",
    unitNumbers: [114, 115],
  },
  114: {
    message: "Nên học kèm Units 113, 115 và if.",
    unitNumbers: [113, 115],
  },
  115: {
    message: "Nên học kèm Units 113–114 và if.",
    unitNumbers: [113, 114],
  },
  116: {
    message: "Nên học kèm Unit 117 (like and as).",
    unitNumbers: [117],
  },
  117: {
    message: "Nên học kèm Unit 116 (as) và Unit 118 (like / as if) để phân biệt like và as.",
    unitNumbers: [116, 118],
  },
  118: {
    message: "Nên học kèm Unit 117 (like and as).",
    unitNumbers: [117],
  },
  119: {
    message: "Nên học kèm for/while và Unit 12 (for and since).",
    unitNumbers: [12],
  },
  120: {
    message: "Nên học kèm Unit 128 (by khác nghĩa).",
    unitNumbers: [128],
  },
  121: {
    message: "Nên học kèm Unit 122 (on time / in time · at the end / in the end).",
    unitNumbers: [122],
  },
  122: {
    message: "Nên học kèm Unit 121 (at/on/in — time).",
    unitNumbers: [121],
  },
  123: {
    message: "Nên học kèm Units 124–125 để nắm trọn in/at/on (position).",
    unitNumbers: [124, 125],
  },
  124: {
    message: "Nên học kèm Units 123, 125.",
    unitNumbers: [123, 125],
  },
  125: {
    message: "Nên học kèm Units 123–124, 126.",
    unitNumbers: [123, 124, 126],
  },
  126: {
    message: "Nên học kèm Units 123–125.",
    unitNumbers: [123, 124, 125],
  },
  127: {
    message: "Nên học kèm Units 121, 123–125.",
    unitNumbers: [121, 123, 124, 125],
  },
  128: {
    message: "Nên học kèm Unit 120 (by and until / by the time).",
    unitNumbers: [120],
  },
};

function buildRelatedStudy(spec: RelatedStudySpec): GrammarRelatedStudy | undefined {
  const units = spec.unitNumbers
    .map((unitNumber) => {
      const record = EGIU_UNITS_BY_NUMBER[unitNumber];
      if (!record) return null;
      return {
        unitNumber,
        slug: record.id,
        title: record.title,
      };
    })
    .filter((unit): unit is NonNullable<typeof unit> => Boolean(unit));

  if (units.length === 0) return undefined;
  return { message: spec.message, units };
}

/** Attach related-unit link targets used to bold/underline Unit N mentions in the intro. */
export function enrichTopicWithRelatedStudy(
  detail: GrammarTopicDetail,
  unitNumber: number | undefined,
): GrammarTopicDetail {
  if (!unitNumber) return detail;
  const spec = RELATED_STUDY_BY_UNIT[unitNumber];
  if (!spec) return detail;

  const relatedStudy = buildRelatedStudy(spec);
  if (!relatedStudy) return detail;

  const alreadyMentionsRelated = relatedStudy.units.some((unit) =>
    new RegExp(`\\bUnits?\\s+${unit.unitNumber}\\b`, "i").test(detail.intro),
  );
  const intro = alreadyMentionsRelated
    ? detail.intro
    : `${detail.intro.trim()} ${relatedStudy.message}`.trim();

  return {
    ...detail,
    intro,
    relatedStudy,
  };
}

export function relatedStudyUnitNumbers(): number[] {
  return Object.keys(RELATED_STUDY_BY_UNIT).map(Number);
}
