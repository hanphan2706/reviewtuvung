import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import { IELTS_CAM18_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam18-t1-flow-content";
import { IELTS_CAM18_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam18-t2-flow-content";
import { IELTS_CAM18_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam18-t3-flow-content";
import { IELTS_CAM18_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam18-t4-flow-content";
import { IELTS_CAM19_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam19-t1-flow-content";
import { IELTS_CAM19_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam19-t2-flow-content";
import { IELTS_CAM19_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam19-t3-flow-content";
import { IELTS_CAM19_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam19-t4-flow-content";
import { IELTS_CAM20_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam20-t1-flow-content";
import { IELTS_CAM20_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam20-t2-flow-content";
import { IELTS_CAM20_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam20-t3-flow-content";
import { IELTS_CAM20_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam20-t4-flow-content";
import { IELTS_CAM16_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam16-t1-flow-content";
import { IELTS_CAM16_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam16-t2-flow-content";
import { IELTS_CAM16_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam16-t3-flow-content";
import { IELTS_CAM16_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam16-t4-flow-content";
import { IELTS_CAM15_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam15-t1-flow-content";
import { IELTS_CAM15_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam15-t2-flow-content";
import { IELTS_CAM15_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam15-t3-flow-content";
import { IELTS_CAM15_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam15-t4-flow-content";
import { IELTS_CAM14_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam14-t1-flow-content";
import { IELTS_CAM14_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam14-t2-flow-content";
import { IELTS_CAM14_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam14-t3-flow-content";
import { IELTS_CAM14_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam14-t4-flow-content";
import { IELTS_CAM17_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam17-t1-flow-content";
import { IELTS_CAM17_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam17-t2-flow-content";
import { IELTS_CAM17_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam17-t3-flow-content";
import { IELTS_CAM17_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam17-t4-flow-content";
import { IELTS_CAM21_T1_FLOW_CONTENT } from "@/lib/listening/ielts-cam21-t1-flow-content";
import { IELTS_CAM21_T2_FLOW_CONTENT } from "@/lib/listening/ielts-cam21-t2-flow-content";
import { IELTS_CAM21_T3_FLOW_CONTENT } from "@/lib/listening/ielts-cam21-t3-flow-content";
import { IELTS_CAM21_T4_FLOW_CONTENT } from "@/lib/listening/ielts-cam21-t4-flow-content";

const FLOW_BY_PART_ID: Record<string, ListeningFlowLessonContent> = {
  ...IELTS_CAM18_T1_FLOW_CONTENT,
  ...IELTS_CAM18_T2_FLOW_CONTENT,
  ...IELTS_CAM18_T3_FLOW_CONTENT,
  ...IELTS_CAM18_T4_FLOW_CONTENT,
  ...IELTS_CAM19_T1_FLOW_CONTENT,
  ...IELTS_CAM19_T2_FLOW_CONTENT,
  ...IELTS_CAM19_T3_FLOW_CONTENT,
  ...IELTS_CAM19_T4_FLOW_CONTENT,
  ...IELTS_CAM20_T1_FLOW_CONTENT,
  ...IELTS_CAM20_T2_FLOW_CONTENT,
  ...IELTS_CAM20_T3_FLOW_CONTENT,
  ...IELTS_CAM20_T4_FLOW_CONTENT,
  ...IELTS_CAM21_T1_FLOW_CONTENT,
  ...IELTS_CAM21_T2_FLOW_CONTENT,
  ...IELTS_CAM21_T3_FLOW_CONTENT,
  ...IELTS_CAM21_T4_FLOW_CONTENT,
  ...IELTS_CAM17_T1_FLOW_CONTENT,
  ...IELTS_CAM17_T2_FLOW_CONTENT,
  ...IELTS_CAM17_T3_FLOW_CONTENT,
  ...IELTS_CAM17_T4_FLOW_CONTENT,
  ...IELTS_CAM16_T1_FLOW_CONTENT,
  ...IELTS_CAM16_T2_FLOW_CONTENT,
  ...IELTS_CAM16_T3_FLOW_CONTENT,
  ...IELTS_CAM16_T4_FLOW_CONTENT,
  ...IELTS_CAM15_T1_FLOW_CONTENT,
  ...IELTS_CAM15_T2_FLOW_CONTENT,
  ...IELTS_CAM15_T3_FLOW_CONTENT,
  ...IELTS_CAM15_T4_FLOW_CONTENT,
  ...IELTS_CAM14_T1_FLOW_CONTENT,
  ...IELTS_CAM14_T2_FLOW_CONTENT,
  ...IELTS_CAM14_T3_FLOW_CONTENT,
  ...IELTS_CAM14_T4_FLOW_CONTENT,
};

export function getIeltsFlowLessonContent(partId: string): ListeningFlowLessonContent | undefined {
  return FLOW_BY_PART_ID[partId];
}
