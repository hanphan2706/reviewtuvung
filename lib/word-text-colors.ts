/**
 * Bảng màu chữ kiểu Notion (8 ô + trắng) — dùng cho toolbar và foreColor.
 * Thứ tự giống tham chiếu UI: trắng → xám → nâu → cam → vàng → xanh lá → xanh dương → tím.
 */
export const WORD_NOTION_TEXT_COLORS = [
  { id: "white", hex: "#ffffff" },
  { id: "gray", hex: "#787774" },
  { id: "brown", hex: "#9f6b53" },
  { id: "orange", hex: "#d9730d" },
  { id: "yellow", hex: "#cb912f" },
  { id: "green", hex: "#448361" },
  { id: "blue", hex: "#0b6e99" },
  { id: "purple", hex: "#9065b0" },
] as const;

export type WordTextColorId = (typeof WORD_NOTION_TEXT_COLORS)[number]["id"];

/** Màu chữ mặc định (gần ink) khi cần reset trong code khác. */
export const DEFAULT_WORD_TEXT_HEX = "#18181b";
