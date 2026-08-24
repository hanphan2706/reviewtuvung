import type { Metadata } from "next";
import { WritingClozeView } from "@/components/writing/writing-cloze-view";
import { WritingSkillLoginGate } from "@/components/writing/writing-skill-login-gate";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Hoàn thành câu | ${LANDING.brand}`,
};

export default function WritingClozePage() {
  return (
    <WritingSkillLoginGate
      title="Hoàn thành câu (Cloze)"
      description="Đăng nhập để luyện collocation và từ vựng học thuật trong ngữ cảnh."
    >
      <WritingClozeView />
    </WritingSkillLoginGate>
  );
}
