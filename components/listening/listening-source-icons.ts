import { ClipboardList, Compass, Globe, Headphones, NotebookPen, type LucideIcon } from "lucide-react";
import type { ListeningSourceCategoryId } from "@/lib/listening/listening-source-catalog";

export const LISTENING_SOURCE_ICONS: Record<ListeningSourceCategoryId, LucideIcon> = {
  accents: Globe,
  beginner: Headphones,
  "basic-ielts": NotebookPen,
  ielts: Compass,
  "ielts-exam": ClipboardList,
};
