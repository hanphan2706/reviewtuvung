export type PremiumFeature = {
  label: string;
  included: boolean;
  /** Render © exclusive mark right after this substring in the label. */
  exclusiveAfter?: string;
};

export type PremiumPlan = {
  id: "free" | "chuyen-sau" | "toan-dien";
  name: string;
  description: string;
  /** Main price line on the card, e.g. "59.000đ / 1 tháng". */
  priceLabel: string;
  /** Amount shown on checkout, e.g. "59.000đ". Null for free. */
  priceDisplay: string | null;
  /** Integer VND for QR / transfer amount. Null for free. */
  amountVnd: number | null;
  /** Days added after payment is confirmed. */
  durationDays: number | null;
  /** Short code embedded in transfer content, e.g. CS / TD. */
  transferCode: string | null;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
  features: PremiumFeature[];
};

/** Plus: 89.000đ/tháng × 3 tháng − 10%, làm tròn 240.000đ. */
const TOAN_DIEN_AMOUNT_VND = 240_000;

function formatVndLabel(amount: number): string {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

/** Shared Pro / Plus benefits (Plus = same as Pro, billed for 3 months). */
const PRO_FEATURES: PremiumFeature[] = [
  { label: "Toàn bộ nội dung gói Basic", included: true },
  { label: "Thư viện Cambridge và đề thi thật không giới hạn", included: true },
  { label: "Thư viện bài mẫu writing và speaking đầy đủ", included: true },
  {
    label: "Khám phá toàn bộ thư viện và học từ vựng với tính năng Active learning cùng AI",
    included: true,
    exclusiveAfter: "Active learning",
  },
  { label: "Phản hồi AI cá nhân hoá cho kỹ năng nói và viết", included: true },
  { label: "Ưu tiên hỗ trợ từ đội ngũ anthichtuhoc", included: true },
];

const PLUS_FEATURES: PremiumFeature[] = [
  { label: "Toàn bộ nội dung gói Pro với chi phí tiết kiệm hơn", included: true },
  ...PRO_FEATURES.slice(1),
];

export const PREMIUM_PLANS: PremiumPlan[] = [
  {
    id: "free",
    name: "Basic",
    description: "Bắt đầu tự học với các công cụ nền tảng — đủ để tạo thói quen mỗi ngày.",
    priceLabel: "Miễn phí",
    priceDisplay: null,
    amountVnd: null,
    durationDays: null,
    transferCode: null,
    ctaLabel: "Bắt đầu",
    features: [
      { label: "Luyện 4 kỹ năng và học ngữ pháp với giới hạn hằng ngày", included: true },
      { label: "Sổ học từ vựng cá nhân hoá", included: true },
      { label: "Flashcard SRS giúp tăng cường khả năng ghi nhớ và truy xuất từ vựng", included: true },
      { label: "Thư viện Cambridge và đề thi thật không giới hạn", included: false },
      { label: "Thư viện bài mẫu writing và speaking đầy đủ", included: false },
      { label: "Phản hồi AI cá nhân hoá", included: false },
    ],
  },
  {
    id: "chuyen-sau",
    name: "Pro",
    description: "Mở khóa thư viện đầy đủ và luyện tập cá nhân hoá khi bạn sẵn sàng tăng tốc.",
    priceLabel: "59.000đ / 1\u00A0tháng",
    priceDisplay: "59.000đ",
    amountVnd: 59_000,
    durationDays: 30,
    transferCode: "CS",
    ctaLabel: "Thanh toán ngay",
    featured: true,
    badge: "Phổ biến nhất",
    features: PRO_FEATURES,
  },
  {
    id: "toan-dien",
    name: "Plus",
    description: "Mở khóa thư viện đầy đủ với giá tiết kiệm hơn so với thanh toán từng tháng.",
    priceLabel: `${formatVndLabel(TOAN_DIEN_AMOUNT_VND)} / 3\u00A0tháng`,
    priceDisplay: formatVndLabel(TOAN_DIEN_AMOUNT_VND),
    amountVnd: TOAN_DIEN_AMOUNT_VND,
    durationDays: 90,
    transferCode: "TD",
    ctaLabel: "Thanh toán ngay",
    badge: "Giảm 10%",
    features: PLUS_FEATURES,
  },
];

/** Builds a mock transfer note. Later this will include a real order / user id. */
export function buildPremiumTransferContent(plan: PremiumPlan, orderSuffix = "DEMO01"): string {
  if (!plan.transferCode) return "";
  return `ATH ${plan.transferCode} ${orderSuffix}`;
}
