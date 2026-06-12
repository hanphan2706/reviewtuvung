import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { listeningIpaChartPage } from "@/lib/listening/ipa-chart-nav";
import { renderListeningIpaChartPage } from "@/lib/listening/ipa-chart-page";

export const dynamic = "force-dynamic";

const page = listeningIpaChartPage();

export const metadata: Metadata = {
  title: `${page.title} | Luyện nghe | ${LANDING.brand}`,
  description: page.description,
};

export default async function ListeningIpaChartPage() {
  return renderListeningIpaChartPage(page);
}
