import type { Metadata } from "next";
import { WritingSuaLoiView } from "@/components/writing/writing-sua-loi-view";
import { WritingSkillLoginGate } from "@/components/writing/writing-skill-login-gate";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Sửa lỗi câu | ${LANDING.brand}`,
};

export default function WritingSuaLoiPage() {
  return (
    <WritingSkillLoginGate
      title="Sửa lỗi câu"
      description="Đăng nhập để luyện tìm và sửa lỗi ngữ pháp, từ vựng hoặc chính tả."
    >
      <WritingSuaLoiView />
    </WritingSkillLoginGate>
  );
}
