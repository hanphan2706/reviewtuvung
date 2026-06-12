import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";

export const LISTENING_IPA_CHART_HREF = `${LISTENING_HUB_HREF}/bang-ipa`;

export type ListeningIpaChartPageConfig = {
  title: string;
  description: string;
};

export function listeningIpaChartPage(): ListeningIpaChartPageConfig {
  return {
    title: "Bảng IPA tiếng Anh Mỹ",
    description:
      "Bảng âm vị General American tương tác — bấm vào từng ký hiệu để nghe phát âm mẫu. Phù hợp luyện nghe và phát âm cho IELTS.",
  };
}
