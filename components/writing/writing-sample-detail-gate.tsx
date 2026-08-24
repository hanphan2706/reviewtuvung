"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { WritingSampleDetailView } from "@/components/writing/writing-sample-detail-view";
import { WritingStudentOnlyPrompt } from "@/components/writing/writing-student-only-prompt";
import type { WritingSample } from "@/lib/ielts-samples/writing-sample-types";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import { WRITING_HUB_HREF } from "@/lib/writing/writing-hub-nav";
import { isWritingSampleLibraryUnlockedClient } from "@/lib/writing/writing-sample-access";

export function WritingSampleDetailGate({
  sampleId,
  title,
}: {
  sampleId: string;
  title: string;
}) {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(true);
  const [accessChecked, setAccessChecked] = useState(false);
  const [sample, setSample] = useState<WritingSample | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "forbidden">("idle");

  useEffect(() => {
    setUnlocked(isWritingSampleLibraryUnlockedClient());
    setAccessChecked(true);
  }, []);

  useEffect(() => {
    if (!accessChecked || !unlocked || !loggedIn) {
      setSample(null);
      setStatus("idle");
      return;
    }

    let cancelled = false;
    setStatus("loading");
    void fetch(`/api/writing/samples/${encodeURIComponent(sampleId)}`, {
      credentials: "include",
      cache: "no-store",
    })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) return { kind: "forbidden" as const };
        if (res.status === 404) return { kind: "error" as const };
        if (!res.ok) return { kind: "error" as const };
        const data = (await res.json()) as { sample?: WritingSample };
        if (!data.sample) return { kind: "error" as const };
        return { kind: "ok" as const, sample: data.sample };
      })
      .then((result) => {
        if (cancelled) return;
        if (result.kind === "ok") {
          setSample(result.sample);
          setStatus("idle");
          return;
        }
        setSample(null);
        setStatus(result.kind);
      })
      .catch(() => {
        if (cancelled) return;
        setSample(null);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [accessChecked, loggedIn, sampleId, unlocked]);

  if (!accessChecked) {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Đang tải…</p>
      </main>
    );
  }

  if (!unlocked) {
    return (
      <>
        <main className={`${studyHubSubpageContentClass} max-w-3xl`}>
          <h1 className="font-serif text-2xl font-bold text-[#000001]">
            {formatWritingSampleTitle(title, sampleId)}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
            Tính năng bài mẫu writing hiện chỉ dành cho học viên của anthichtuhoc.
          </p>
        </main>
        <WritingStudentOnlyPrompt onClose={() => router.push(WRITING_HUB_HREF)} />
      </>
    );
  }

  if (!loggedIn) {
    return (
      <>
        <main className={`${studyHubSubpageContentClass} max-w-3xl`}>
          <h1 className="font-serif text-2xl font-bold text-[#000001]">
            {formatWritingSampleTitle(title, sampleId)}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
            Đăng nhập để đọc bài mẫu, xem model answer và key vocabulary.
          </p>
        </main>
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài mẫu"
          description="Bạn có thể duyệt thư viện khi chưa đăng nhập. Đăng nhập để mở bài viết đầy đủ."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(`${WRITING_HUB_HREF}/thu-vien-mau`)}
        />
      </>
    );
  }

  if (status === "loading" || (!sample && status === "idle")) {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Đang tải bài mẫu…</p>
      </main>
    );
  }

  if (status === "forbidden") {
    return (
      <StudyLoginPrompt
        title="Đăng nhập để đọc bài mẫu"
        description="Phiên đăng nhập đã hết hạn. Đăng nhập lại để mở bài viết."
        oauthNext={pathname}
        supabaseConfigured={supabaseConfigured}
        onClose={() => router.push(`${WRITING_HUB_HREF}/thu-vien-mau`)}
      />
    );
  }

  if (status === "error" || !sample) {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Không tải được bài mẫu. Thử tải lại trang.</p>
      </main>
    );
  }

  return <WritingSampleDetailView sample={sample} />;
}
