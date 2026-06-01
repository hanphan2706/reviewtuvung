import type { CourseTuitionPanel } from "@/lib/course-stitch-types";

const IN_CLASS_INTERACTION_TITLE = "Tương tác trên lớp";

/** Panel mở sẵn khi vào trang — ưu tiên «Tương tác trên lớp» (GE). */
export function resolveTuitionDefaultOpenId(
  panels: readonly CourseTuitionPanel[],
  configuredId?: string,
): string | null {
  if (configuredId && panels.some((p) => p.id === configuredId)) {
    return configuredId;
  }
  const interaction = panels.find((p) => p.title === IN_CLASS_INTERACTION_TITLE);
  return interaction?.id ?? null;
}
