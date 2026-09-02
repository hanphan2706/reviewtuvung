import type { ClassroomAssignmentKind } from "@/lib/classroom/types";

export function assignmentKindLabel(kind: ClassroomAssignmentKind): string {
  switch (kind) {
    case "writing":
      return "Writing (Google Docs)";
    case "self_study":
      return "Bài Tự học";
    case "external_link":
      return "Link ngoài";
    default:
      return kind;
  }
}
