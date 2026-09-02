"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  AdminPanel,
  AdminShell,
  adminInputClassName,
  adminPrimaryButtonClass,
} from "@/components/classroom/admin/admin-shell";
import { assignmentKindLabel } from "@/lib/classroom/assignment-labels";
import type {
  ClassroomAssignmentKind,
  ClassroomAssignmentRow,
  ClassroomClassRow,
  ClassroomMemberRow,
  ClassroomSubmissionRow,
} from "@/lib/classroom/types";

type SelfStudyItem = {
  id: string;
  skill: string;
  label: string;
  href: string;
  group: string;
};

type Props = {
  classroom: ClassroomClassRow;
  initialMembers: ClassroomMemberRow[];
  initialAssignments: ClassroomAssignmentRow[];
};

export function AdminClassDetail({ classroom, initialMembers, initialAssignments }: Props) {
  const [className, setClassName] = useState(classroom.name);
  const [description, setDescription] = useState(classroom.description);
  const [members, setMembers] = useState(initialMembers);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [memberEmail, setMemberEmail] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentInstructions, setAssignmentInstructions] = useState("");
  const [assignmentKind, setAssignmentKind] = useState<ClassroomAssignmentKind>("writing");
  const [externalUrl, setExternalUrl] = useState("");
  const [catalogQuery, setCatalogQuery] = useState("");
  const [catalogItems, setCatalogItems] = useState<SelfStudyItem[]>([]);
  const [selectedCatalog, setSelectedCatalog] = useState<SelfStudyItem | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedAssignmentId, setExpandedAssignmentId] = useState<string | null>(null);
  const [submissionsByAssignment, setSubmissionsByAssignment] = useState<
    Record<string, Array<ClassroomSubmissionRow & { student_email: string | null }>>
  >({});

  const sortedAssignments = useMemo(
    () => [...assignments].sort((a, b) => a.sort_order - b.sort_order || a.created_at.localeCompare(b.created_at)),
    [assignments],
  );

  async function saveClassMeta() {
    setBusy("class");
    setError(null);
    try {
      const response = await fetch(`/api/admin/classes/${classroom.id}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: className, description }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không lưu được.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Không lưu được.");
    } finally {
      setBusy(null);
    }
  }

  async function addMember(event: React.FormEvent) {
    event.preventDefault();
    setBusy("member");
    setError(null);
    try {
      const response = await fetch(`/api/admin/classes/${classroom.id}/members`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: memberEmail }),
      });
      const data = (await response.json()) as { member?: ClassroomMemberRow; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không thêm được học viên.");
      setMembers((current) => [...current, data.member!]);
      setMemberEmail("");
    } catch (memberError) {
      setError(memberError instanceof Error ? memberError.message : "Không thêm được học viên.");
    } finally {
      setBusy(null);
    }
  }

  async function removeMember(memberId: string) {
    setBusy(`member-${memberId}`);
    setError(null);
    try {
      const response = await fetch(`/api/admin/classes/${classroom.id}/members/${memberId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không xóa được học viên.");
      setMembers((current) => current.filter((member) => member.id !== memberId));
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "Không xóa được học viên.");
    } finally {
      setBusy(null);
    }
  }

  async function searchCatalog(query: string) {
    setCatalogQuery(query);
    if (!query.trim()) {
      setCatalogItems([]);
      return;
    }
    const response = await fetch(`/api/admin/self-study-catalog?q=${encodeURIComponent(query)}`, {
      credentials: "include",
    });
    const data = (await response.json()) as { items?: SelfStudyItem[] };
    setCatalogItems(data.items ?? []);
  }

  async function createAssignment(event: React.FormEvent) {
    event.preventDefault();
    setBusy("assignment");
    setError(null);
    try {
      const payload =
        assignmentKind === "external_link"
          ? { url: externalUrl.trim(), label: assignmentTitle.trim() }
          : assignmentKind === "self_study" && selectedCatalog
            ? {
                skill: selectedCatalog.skill,
                href: selectedCatalog.href,
                label: selectedCatalog.label,
              }
            : {};

      const response = await fetch(`/api/admin/classes/${classroom.id}/assignments`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: assignmentTitle,
          instructions: assignmentInstructions,
          kind: assignmentKind,
          payload,
        }),
      });
      const data = (await response.json()) as { assignment?: ClassroomAssignmentRow; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không tạo được bài tập.");
      setAssignments((current) => [...current, data.assignment!]);
      setAssignmentTitle("");
      setAssignmentInstructions("");
      setExternalUrl("");
      setSelectedCatalog(null);
      setCatalogQuery("");
      setCatalogItems([]);
    } catch (assignmentError) {
      setError(assignmentError instanceof Error ? assignmentError.message : "Không tạo được bài tập.");
    } finally {
      setBusy(null);
    }
  }

  async function deleteAssignment(assignmentId: string) {
    setBusy(`assignment-${assignmentId}`);
    setError(null);
    try {
      const response = await fetch(`/api/admin/assignments/${assignmentId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không xóa được bài tập.");
      setAssignments((current) => current.filter((assignment) => assignment.id !== assignmentId));
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Không xóa được bài tập.");
    } finally {
      setBusy(null);
    }
  }

  async function toggleSubmissions(assignmentId: string) {
    if (expandedAssignmentId === assignmentId) {
      setExpandedAssignmentId(null);
      return;
    }
    setExpandedAssignmentId(assignmentId);
    if (submissionsByAssignment[assignmentId]) return;
    const response = await fetch(`/api/admin/assignments/${assignmentId}/submissions`, {
      credentials: "include",
    });
    const data = (await response.json()) as {
      submissions?: Array<ClassroomSubmissionRow & { student_email: string | null }>;
    };
    setSubmissionsByAssignment((current) => ({
      ...current,
      [assignmentId]: data.submissions ?? [],
    }));
  }

  return (
    <AdminShell title={className} subtitle={description || "Chưa có mô tả lớp."} backHref="/admin">
      {error ? <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

      <div className="grid gap-6">
        <AdminPanel title="Thông tin lớp">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Tên lớp
              </span>
              <input
                className={adminInputClassName()}
                value={className}
                onChange={(event) => setClassName(event.target.value)}
              />
            </label>
            <div className="md:col-span-2">
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Mô tả
                </span>
                <textarea
                  className={`${adminInputClassName()} min-h-28 resize-y`}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
            </div>
          </div>
          <button
            type="button"
            className={`${adminPrimaryButtonClass(busy === "class")} mt-4`}
            disabled={busy === "class"}
            onClick={() => void saveClassMeta()}
          >
            {busy === "class" ? "Đang lưu..." : "Lưu thông tin lớp"}
          </button>
        </AdminPanel>

        <div className="grid gap-6 lg:grid-cols-2">
          <AdminPanel title="Học viên">
            <form className="mb-4 flex flex-col gap-3 sm:flex-row" onSubmit={addMember}>
              <input
                className={adminInputClassName()}
                type="email"
                value={memberEmail}
                onChange={(event) => setMemberEmail(event.target.value)}
                placeholder="email.hocvien@gmail.com"
                required
              />
              <button type="submit" disabled={busy === "member"} className={adminPrimaryButtonClass(busy === "member")}>
                Thêm
              </button>
            </form>
            {members.length === 0 ? (
              <p className="text-sm text-ink-muted">Chưa có học viên.</p>
            ) : (
              <ul className="divide-y divide-zinc-200/90">
                {members.map((member) => (
                  <li key={member.id} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="text-sm text-ink">{member.email}</span>
                    <button
                      type="button"
                      className="text-xs font-medium text-red-600 hover:underline"
                      disabled={busy === `member-${member.id}`}
                      onClick={() => void removeMember(member.id)}
                    >
                      Xóa
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </AdminPanel>

          <AdminPanel title="Giao bài mới">
            <form className="space-y-3" onSubmit={createAssignment}>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Loại bài
                </span>
                <select
                  className={adminInputClassName()}
                  value={assignmentKind}
                  onChange={(event) => setAssignmentKind(event.target.value as ClassroomAssignmentKind)}
                >
                  <option value="writing">Writing (Google Docs)</option>
                  <option value="self_study">Bài Tự học</option>
                  <option value="external_link">Link ngoài</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Tiêu đề
                </span>
                <input
                  className={adminInputClassName()}
                  value={assignmentTitle}
                  onChange={(event) => setAssignmentTitle(event.target.value)}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Hướng dẫn (tuỳ chọn)
                </span>
                <textarea
                  className={`${adminInputClassName()} min-h-20 resize-y`}
                  value={assignmentInstructions}
                  onChange={(event) => setAssignmentInstructions(event.target.value)}
                />
              </label>

              {assignmentKind === "external_link" ? (
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    URL
                  </span>
                  <input
                    className={adminInputClassName()}
                    value={externalUrl}
                    onChange={(event) => setExternalUrl(event.target.value)}
                    placeholder="https://youtube.com/..."
                    required
                  />
                </label>
              ) : null}

              {assignmentKind === "self_study" ? (
                <div className="space-y-2">
                  <input
                    className={adminInputClassName()}
                    value={catalogQuery}
                    onChange={(event) => void searchCatalog(event.target.value)}
                    placeholder="Tìm bài Tự học..."
                  />
                  {selectedCatalog ? (
                    <p className="rounded-lg bg-[#ebe6f4] px-3 py-2 text-sm text-ink">
                      Đã chọn: <strong>{selectedCatalog.label}</strong>
                    </p>
                  ) : null}
                  {catalogItems.length > 0 ? (
                    <ul className="max-h-48 overflow-y-auto rounded-xl border border-zinc-200">
                      {catalogItems.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            className="w-full px-3 py-2 text-left text-sm hover:bg-zinc-50"
                            onClick={() => setSelectedCatalog(item)}
                          >
                            <span className="font-medium text-ink">{item.label}</span>
                            <span className="mt-0.5 block text-xs text-ink-muted">
                              {item.group} · {item.href}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={busy === "assignment"}
                className={adminPrimaryButtonClass(busy === "assignment")}
              >
                {busy === "assignment" ? "Đang tạo..." : "Thêm bài tập"}
              </button>
            </form>
          </AdminPanel>
        </div>

        <AdminPanel title="Danh sách bài tập">
          {sortedAssignments.length === 0 ? (
            <p className="text-sm text-ink-muted">Chưa có bài tập trong lớp này.</p>
          ) : (
            <ul className="divide-y divide-zinc-200/90">
              {sortedAssignments.map((assignment) => (
                <li key={assignment.id} className="py-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{assignment.title}</p>
                      <p className="mt-1 text-xs text-ink-muted">{assignmentKindLabel(assignment.kind)}</p>
                      {assignment.instructions ? (
                        <p className="mt-2 text-sm text-ink-muted">{assignment.instructions}</p>
                      ) : null}
                      {assignment.kind === "self_study" && assignment.payload && "href" in assignment.payload ? (
                        <p className="mt-2 text-xs text-[#4b2876]">{assignment.payload.href as string}</p>
                      ) : null}
                      {assignment.kind === "external_link" && assignment.payload && "url" in assignment.payload ? (
                        <p className="mt-2 text-xs text-[#4b2876]">{assignment.payload.url as string}</p>
                      ) : null}
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2">
                      <button
                        type="button"
                        className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-ink hover:bg-zinc-50"
                        onClick={() => void toggleSubmissions(assignment.id)}
                      >
                        {expandedAssignmentId === assignment.id ? "Ẩn bài nộp" : "Xem bài nộp"}
                      </button>
                      <button
                        type="button"
                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                        disabled={busy === `assignment-${assignment.id}`}
                        onClick={() => void deleteAssignment(assignment.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                  {expandedAssignmentId === assignment.id ? (
                    <div className="mt-3 rounded-xl bg-zinc-50 px-4 py-3">
                      {(submissionsByAssignment[assignment.id] ?? []).length === 0 ? (
                        <p className="text-sm text-ink-muted">Chưa có bài nộp.</p>
                      ) : (
                        <ul className="space-y-2">
                          {(submissionsByAssignment[assignment.id] ?? []).map((submission) => (
                            <li key={submission.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                              <span>{submission.student_email ?? submission.user_id}</span>
                              <span className="text-ink-muted">
                                {submission.status === "submitted" ? "Đã nộp" : "Đang làm"}
                              </span>
                              {submission.google_doc_url ? (
                                <Link
                                  href={submission.google_doc_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#4b2876] hover:underline"
                                >
                                  Mở Google Doc →
                                </Link>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
      </div>
    </AdminShell>
  );
}
