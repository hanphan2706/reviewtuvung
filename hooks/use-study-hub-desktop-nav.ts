"use client";

import { useEffect, useState } from "react";

/** Khớp `xl:` — menu ngang header; dưới ngưỡng này mới đưa điều hướng vào curtain. */
export const STUDY_HUB_DESKTOP_NAV_MEDIA = "(min-width: 1280px)";

export function useStudyHubDesktopNav(): boolean {
  const [desktopNav, setDesktopNav] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(STUDY_HUB_DESKTOP_NAV_MEDIA);
    const sync = () => setDesktopNav(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return desktopNav;
}
