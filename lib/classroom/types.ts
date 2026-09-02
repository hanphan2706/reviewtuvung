export type ClassroomAssignmentKind = "writing" | "self_study" | "external_link";

export type SelfStudyPayload = {
  skill: "vocabulary" | "grammar" | "listening" | "reading" | "writing";
  href: string;
  label: string;
};

export type ExternalLinkPayload = {
  url: string;
  label?: string;
};

export type WritingPayload = Record<string, never>;

export type ClassroomAssignmentPayload = SelfStudyPayload | ExternalLinkPayload | WritingPayload;

export type ClassroomClassRow = {
  id: string;
  name: string;
  description: string;
  created_by: string;
  created_at: string;
  updated_at: string;
};

export type ClassroomMemberRow = {
  id: string;
  class_id: string;
  email: string;
  user_id: string | null;
  added_at: string;
};

export type ClassroomAssignmentRow = {
  id: string;
  class_id: string;
  title: string;
  instructions: string;
  kind: ClassroomAssignmentKind;
  payload: ClassroomAssignmentPayload;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type ClassroomSubmissionRow = {
  id: string;
  assignment_id: string;
  user_id: string;
  status: "in_progress" | "submitted";
  google_doc_id: string | null;
  google_doc_url: string | null;
  submitted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ClassroomAssignmentWithMeta = ClassroomAssignmentRow & {
  class_name: string;
  class_id: string;
  submission: ClassroomSubmissionRow | null;
};

export type ClassroomClassDetail = ClassroomClassRow & {
  member_count: number;
  assignment_count: number;
};
