import {
  AMERICAN_IPA_CHART_PNG_URL,
  AMERICAN_IPA_CHART_SITE_URL,
  AMERICAN_IPA_CHART_SVG_PATH,
} from "@/lib/listening/american-ipa-chart";

const CHART_TITLE = "American IPA chart — General English phonemic symbols with audio";

export function AmericanIpaChartEmbed() {
  return (
    <div className="max-h-[min(80vh,3200px)] overflow-y-auto overscroll-contain rounded-xl border border-[#E4E4E7] bg-[#f5f5f7] shadow-sm">
      <object
        type="image/svg+xml"
        data={AMERICAN_IPA_CHART_SVG_PATH}
        title={CHART_TITLE}
        aria-label={CHART_TITLE}
        className="block w-full max-w-[770px] mx-auto"
      >
        <div className="px-4 py-8 text-center text-sm text-[#47464b]">
          <p className="mb-4">Trình duyệt không hiển thị bảng tương tác.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AMERICAN_IPA_CHART_PNG_URL}
            alt="American IPA chart"
            width={770}
            height={5219}
            className="mx-auto w-full max-w-[770px]"
          />
          <p className="mt-4">
            <a
              href={AMERICAN_IPA_CHART_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#4B2876] underline decoration-[#4B2876]/30 underline-offset-2"
            >
              Mở bảng tương tác trên americanipachart.com
            </a>
          </p>
        </div>
      </object>
    </div>
  );
}
