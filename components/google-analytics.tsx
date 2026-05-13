import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/** GA4: bật khi đặt `NEXT_PUBLIC_GA_MEASUREMENT_ID` (dạng `G-XXXXXXXX`) trên Vercel / `.env.local`. */
export function GoogleAnalytics() {
  if (!gaId || !gaId.startsWith("G-")) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-gtag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${gaId}");`}
      </Script>
    </>
  );
}
