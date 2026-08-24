import "server-only";

import type { WritingSample } from "@/lib/ielts-samples/writing-sample-types";
import { WRITING_FEATURED_SAMPLE } from "@/lib/writing/writing-hub-data";

/** Featured sample trên hub — chỉ load server/API, không bundle vào client. */
export const WRITING_FEATURED_SAMPLE_DEMO: WritingSample = {
  id: "digitalization",
  title: WRITING_FEATURED_SAMPLE.title,
  task: "task2",
  type: "discussion",
  topic: "education",
  band: "8.5",
  promptHtml:
    "<p>Some people believe that digital technologies have made traditional classroom teaching obsolete, while others argue that face-to-face instruction remains essential. Discuss both views and give your own opinion.</p><p>Write at least 250 words.</p>",
  modelAnswer: `In the contemporary epoch, the proliferation of digital technologies has profoundly transformed the pedagogical landscape, rendering traditional chalk-and-talk methodologies increasingly contested. While online platforms expand access and personalise pacing, the ubiquity of screens alone cannot stymie the need for guided social learning.

Proponents of digitalisation emphasise flexibility and scale. Learners can revisit recorded lectures, practise through adaptive drills, and join communities beyond geographic constraints. For adult professionals in particular, asynchronous study can be the only feasible route to advanced qualifications.

Nevertheless, critics correctly note that deep academic discourse still thrives in shared physical spaces. A skilled teacher can diagnose misconceptions in real time, cultivate debate, and model scholarly habits that algorithms rarely capture. Isolation, uneven connectivity, and shallow engagement remain tangible risks when instruction is entirely mediated by devices.

In my view, the most convincing path is hybrid: digital tools should amplify—not replace—human teaching. Institutions that integrate carefully curated platforms with rigorous seminar culture are best placed to elevate both equity and excellence.`,
  wordCount: 198,
  usefulLanguage: [
    { phrase: "profoundly transformed", glossVi: "đã biến đổi sâu sắc" },
    { phrase: "pedagogical landscape", glossVi: "bối cảnh sư phạm" },
    { phrase: "the ubiquity of", glossVi: "sự phổ biến của" },
    { phrase: "stymie the need", glossVi: "cản trở / làm giảm nhu cầu" },
    { phrase: "asynchronous study", glossVi: "học không đồng bộ" },
    { phrase: "diagnose misconceptions", glossVi: "phát hiện hiểu sai" },
  ],
  sourceUrl: WRITING_FEATURED_SAMPLE.href,
  syncedAt: "2026-08-12T00:00:00.000Z",
};
