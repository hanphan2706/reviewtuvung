import type { Metadata } from "next";
import { WritingDichCauView } from "@/components/writing/writing-dich-cau-view";
import { WritingSkillLoginGate } from "@/components/writing/writing-skill-login-gate";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Dịch câu | ${LANDING.brand}`,
};

export default function WritingDichCauPage() {
  return (
    <WritingSkillLoginGate
      title="Dịch câu (Việt → Anh)"
      description="Đăng nhập để luyện dịch câu tiếng Việt sang tiếng Anh học thuật."
    >
      <WritingDichCauView />
    </WritingSkillLoginGate>
  );
}
