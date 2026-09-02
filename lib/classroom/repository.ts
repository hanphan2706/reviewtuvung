import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";
import { normalizeMemberEmail } from "@/lib/classroom/normalize-email";
import type {
  ClassroomAssignmentRow,
  ClassroomAssignmentWithMeta,
  ClassroomClassDetail,
  ClassroomClassRow,
  ClassroomMemberRow,
  ClassroomSubmissionRow,
} from "@/lib/classroom/types";

export class ClassroomRepositoryError extends Error {
  constructor(
    message: string,
    readonly status = 400,
  ) {
    super(message);
    this.name = "ClassroomRepositoryError";
  }
}

function db(): SupabaseClient {
  const client = createServiceRoleSupabaseClient();
  if (!client) {
    throw new ClassroomRepositoryError("Thiếu SUPABASE_SERVICE_ROLE_KEY trên server.", 503);
  }
  return client;
}

export async function syncMemberUserId(email: string, userId: string): Promise<void> {
  const normalized = normalizeMemberEmail(email);
  await db()
    .from("classroom_members")
    .update({ user_id: userId })
    .eq("email", normalized)
    .is("user_id", null);
}

export async function isClassroomMember(email: string, userId: string): Promise<boolean> {
  const normalized = normalizeMemberEmail(email);
  await syncMemberUserId(normalized, userId);
  const { count, error } = await db()
    .from("classroom_members")
    .select("id", { count: "exact", head: true })
    .or(`user_id.eq.${userId},email.eq.${normalized}`);
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return (count ?? 0) > 0;
}

export async function listClassesForAdmin(): Promise<ClassroomClassDetail[]> {
  const { data: classes, error } = await db()
    .from("classroom_classes")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  if (!classes?.length) return [];

  const classIds = classes.map((row) => row.id);
  const [{ data: members }, { data: assignments }] = await Promise.all([
    db().from("classroom_members").select("class_id").in("class_id", classIds),
    db().from("classroom_assignments").select("class_id").in("class_id", classIds),
  ]);

  const memberCounts = new Map<string, number>();
  const assignmentCounts = new Map<string, number>();
  for (const row of members ?? []) {
    memberCounts.set(row.class_id, (memberCounts.get(row.class_id) ?? 0) + 1);
  }
  for (const row of assignments ?? []) {
    assignmentCounts.set(row.class_id, (assignmentCounts.get(row.class_id) ?? 0) + 1);
  }

  return classes.map((row) => ({
    ...(row as ClassroomClassRow),
    member_count: memberCounts.get(row.id) ?? 0,
    assignment_count: assignmentCounts.get(row.id) ?? 0,
  }));
}

export async function getClassById(classId: string): Promise<ClassroomClassRow | null> {
  const { data, error } = await db().from("classroom_classes").select("*").eq("id", classId).maybeSingle();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return (data as ClassroomClassRow | null) ?? null;
}

export async function createClass(input: {
  name: string;
  description: string;
  createdBy: string;
}): Promise<ClassroomClassRow> {
  const { data, error } = await db()
    .from("classroom_classes")
    .insert({
      name: input.name.trim(),
      description: input.description.trim(),
      created_by: input.createdBy,
    })
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomClassRow;
}

export async function updateClass(
  classId: string,
  input: { name?: string; description?: string },
): Promise<ClassroomClassRow> {
  const patch: Record<string, string> = { updated_at: new Date().toISOString() };
  if (input.name !== undefined) patch.name = input.name.trim();
  if (input.description !== undefined) patch.description = input.description.trim();

  const { data, error } = await db()
    .from("classroom_classes")
    .update(patch)
    .eq("id", classId)
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomClassRow;
}

export async function deleteClass(classId: string): Promise<void> {
  const { error } = await db().from("classroom_classes").delete().eq("id", classId);
  if (error) throw new ClassroomRepositoryError(error.message, 500);
}

export async function listMembers(classId: string): Promise<ClassroomMemberRow[]> {
  const { data, error } = await db()
    .from("classroom_members")
    .select("*")
    .eq("class_id", classId)
    .order("added_at", { ascending: true });
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return (data as ClassroomMemberRow[]) ?? [];
}

export async function addMember(classId: string, email: string): Promise<ClassroomMemberRow> {
  const normalized = normalizeMemberEmail(email);
  const { data, error } = await db()
    .from("classroom_members")
    .insert({ class_id: classId, email: normalized })
    .select("*")
    .single();
  if (error) {
    if (error.code === "23505") {
      throw new ClassroomRepositoryError("Email đã có trong lớp này.", 409);
    }
    throw new ClassroomRepositoryError(error.message, 500);
  }
  return data as ClassroomMemberRow;
}

export async function removeMember(classId: string, memberId: string): Promise<void> {
  const { error } = await db().from("classroom_members").delete().eq("id", memberId).eq("class_id", classId);
  if (error) throw new ClassroomRepositoryError(error.message, 500);
}

export async function listAssignments(classId: string): Promise<ClassroomAssignmentRow[]> {
  const { data, error } = await db()
    .from("classroom_assignments")
    .select("*")
    .eq("class_id", classId)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return (data as ClassroomAssignmentRow[]) ?? [];
}

export async function createAssignment(input: {
  classId: string;
  title: string;
  instructions?: string;
  kind: ClassroomAssignmentRow["kind"];
  payload?: ClassroomAssignmentRow["payload"];
  sortOrder?: number;
}): Promise<ClassroomAssignmentRow> {
  const { data, error } = await db()
    .from("classroom_assignments")
    .insert({
      class_id: input.classId,
      title: input.title.trim(),
      instructions: (input.instructions ?? "").trim(),
      kind: input.kind,
      payload: input.payload ?? {},
      sort_order: input.sortOrder ?? 0,
    })
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomAssignmentRow;
}

export async function updateAssignment(
  assignmentId: string,
  input: Partial<Pick<ClassroomAssignmentRow, "title" | "instructions" | "kind" | "payload" | "sort_order">>,
): Promise<ClassroomAssignmentRow> {
  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (input.title !== undefined) patch.title = input.title.trim();
  if (input.instructions !== undefined) patch.instructions = input.instructions.trim();
  if (input.kind !== undefined) patch.kind = input.kind;
  if (input.payload !== undefined) patch.payload = input.payload;
  if (input.sort_order !== undefined) patch.sort_order = input.sort_order;

  const { data, error } = await db()
    .from("classroom_assignments")
    .update(patch)
    .eq("id", assignmentId)
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomAssignmentRow;
}

export async function deleteAssignment(assignmentId: string): Promise<void> {
  const { error } = await db().from("classroom_assignments").delete().eq("id", assignmentId);
  if (error) throw new ClassroomRepositoryError(error.message, 500);
}

export async function getAssignmentById(assignmentId: string): Promise<ClassroomAssignmentRow | null> {
  const { data, error } = await db()
    .from("classroom_assignments")
    .select("*")
    .eq("id", assignmentId)
    .maybeSingle();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return (data as ClassroomAssignmentRow | null) ?? null;
}

async function assertMemberAccess(classId: string, email: string, userId: string): Promise<void> {
  const normalized = normalizeMemberEmail(email);
  await syncMemberUserId(normalized, userId);
  const { count, error } = await db()
    .from("classroom_members")
    .select("id", { count: "exact", head: true })
    .eq("class_id", classId)
    .or(`user_id.eq.${userId},email.eq.${normalized}`);
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  if (!count) throw new ClassroomRepositoryError("Bạn không thuộc lớp này.", 403);
}

export async function listAssignmentsForStudent(
  email: string,
  userId: string,
): Promise<ClassroomAssignmentWithMeta[]> {
  const normalized = normalizeMemberEmail(email);
  await syncMemberUserId(normalized, userId);

  const { data: memberships, error: memberError } = await db()
    .from("classroom_members")
    .select("class_id")
    .or(`user_id.eq.${userId},email.eq.${normalized}`);
  if (memberError) throw new ClassroomRepositoryError(memberError.message, 500);
  const classIds = [...new Set((memberships ?? []).map((row) => row.class_id))];
  if (!classIds.length) return [];

  const [{ data: classes }, { data: assignments }] = await Promise.all([
    db().from("classroom_classes").select("id, name").in("id", classIds),
    db()
      .from("classroom_assignments")
      .select("*")
      .in("class_id", classIds)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true }),
  ]);
  if (!assignments?.length) return [];

  const classNameById = new Map((classes ?? []).map((row) => [row.id, row.name as string]));
  const assignmentIds = assignments.map((row) => row.id);
  const { data: submissions, error: submissionError } = await db()
    .from("classroom_submissions")
    .select("*")
    .eq("user_id", userId)
    .in("assignment_id", assignmentIds);
  if (submissionError) throw new ClassroomRepositoryError(submissionError.message, 500);

  const submissionByAssignment = new Map(
    (submissions as ClassroomSubmissionRow[] | null)?.map((row) => [row.assignment_id, row]) ?? [],
  );

  return assignments.map((row) => {
    const assignment = row as ClassroomAssignmentRow;
    return {
      ...assignment,
      class_id: assignment.class_id,
      class_name: classNameById.get(assignment.class_id) ?? "",
      submission: submissionByAssignment.get(assignment.id) ?? null,
    };
  });
}

export async function getAssignmentForStudent(
  assignmentId: string,
  email: string,
  userId: string,
): Promise<ClassroomAssignmentWithMeta> {
  const assignment = await getAssignmentById(assignmentId);
  if (!assignment) throw new ClassroomRepositoryError("Không tìm thấy bài tập.", 404);
  await assertMemberAccess(assignment.class_id, email, userId);

  const { data: classroom, error: classError } = await db()
    .from("classroom_classes")
    .select("name")
    .eq("id", assignment.class_id)
    .single();
  if (classError) throw new ClassroomRepositoryError(classError.message, 500);

  const { data: submission, error: submissionError } = await db()
    .from("classroom_submissions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("user_id", userId)
    .maybeSingle();
  if (submissionError) throw new ClassroomRepositoryError(submissionError.message, 500);

  return {
    ...assignment,
    class_name: classroom.name as string,
    submission: (submission as ClassroomSubmissionRow | null) ?? null,
  };
}

export async function getOrCreateSubmission(
  assignmentId: string,
  userId: string,
): Promise<ClassroomSubmissionRow> {
  const { data: existing, error: readError } = await db()
    .from("classroom_submissions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("user_id", userId)
    .maybeSingle();
  if (readError) throw new ClassroomRepositoryError(readError.message, 500);
  if (existing) return existing as ClassroomSubmissionRow;

  const { data, error } = await db()
    .from("classroom_submissions")
    .insert({ assignment_id: assignmentId, user_id: userId })
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomSubmissionRow;
}

export async function attachGoogleDocToSubmission(
  submissionId: string,
  doc: { id: string; url: string },
): Promise<ClassroomSubmissionRow> {
  const { data, error } = await db()
    .from("classroom_submissions")
    .update({
      google_doc_id: doc.id,
      google_doc_url: doc.url,
      updated_at: new Date().toISOString(),
    })
    .eq("id", submissionId)
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomSubmissionRow;
}

export async function submitAssignment(
  assignmentId: string,
  userId: string,
): Promise<ClassroomSubmissionRow> {
  const { data, error } = await db()
    .from("classroom_submissions")
    .update({
      status: "submitted",
      submitted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("assignment_id", assignmentId)
    .eq("user_id", userId)
    .select("*")
    .single();
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  return data as ClassroomSubmissionRow;
}

export async function listSubmissionsForAssignment(assignmentId: string): Promise<
  Array<
    ClassroomSubmissionRow & {
      student_email: string | null;
    }
  >
> {
  const { data, error } = await db()
    .from("classroom_submissions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .order("updated_at", { ascending: false });
  if (error) throw new ClassroomRepositoryError(error.message, 500);
  const rows = (data as ClassroomSubmissionRow[]) ?? [];
  if (!rows.length) return [];

  const userIds = rows.map((row) => row.user_id);
  const { data: authData, error: authError } = await db().auth.admin.listUsers({ perPage: 1000 });
  if (authError) throw new ClassroomRepositoryError(authError.message, 500);
  const emailByUserId = new Map(authData.users.map((user) => [user.id, user.email ?? null]));

  return rows.map((row) => ({
    ...row,
    student_email: emailByUserId.get(row.user_id) ?? null,
  }));
}
