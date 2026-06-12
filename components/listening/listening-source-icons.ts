import { ClipboardList, Compass, Globe, Headphones, type LucideIcon } from "lucide-react";
import type { ListeningSourceCategoryId } from "@/lib/listening/listening-source-catalog";

export const LISTENING_SOURCE_ICONS: Record<ListeningSourceCategoryId, LucideIcon> = {
  accents: Globe,
  beginner: Headphones,
  ielts: Compass,
  "ielts-exam": ClipboardList,
};
