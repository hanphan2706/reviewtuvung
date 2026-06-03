import {
  BookOpen,
  Brain,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  CloudCheck,
  Flag,
  GraduationCap,
  Headphones,
  Languages,
  ListChecks,
  Mic,
  Mic2,
  Newspaper,
  PenLine,
  ShieldCheck,
  User,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

/** Map tên icon Material (trong stitch data) → Lucide — tránh font 3.8MB. */
const STITCH_ICON_MAP: Record<string, LucideIcon> = {
  mic: Mic,
  record_voice_over: Mic2,
  menu_book: BookOpen,
  translate: Languages,
  school: GraduationCap,
  flag: Flag,
  videocam: Video,
  groups: Users,
  schedule: Calendar,
  assignment: ClipboardList,
  cloud_done: CloudCheck,
  calendar_month: Calendar,
  quiz: ClipboardCheck,
  headphones: Headphones,
  psychology: Brain,
  verified_user: ShieldCheck,
  person: User,
  edit_note: PenLine,
  fact_check: ListChecks,
  newspaper: Newspaper,
};

type CourseStitchIconProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function CourseStitchIcon({ name, size = "md", className = "" }: CourseStitchIconProps) {
  const Icon = STITCH_ICON_MAP[name] ?? BookOpen;
  const sizeClass = size === "lg" ? "ps-icon-lg" : size === "sm" ? "ps-icon-sm" : "";
  return (
    <Icon
      className={`pinball-stitch-icon ${sizeClass} ${className}`.trim()}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
