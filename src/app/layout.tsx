import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const shippioriMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "表参道の美肌治療専門クリニック｜ルナージュクリニック",
  description: "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
  keywords: "美容クリニック, 表参道, 美肌治療, シミ, しわ, たるみ, ニキビ, ルナージュクリニック",
  authors: [{ name: "ルナージュクリニック" }],
  creator: "ルナージュクリニック",
  publisher: "ルナージュクリニック",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lunage-clinic.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    title: "表参道の美肌治療専門クリニック｜ルナージュクリニック",
    description: "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
    url: "https://lunage-clinic.com",
    siteName: "ルナージュクリニック",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "ルナージュクリニック - 表参道の美肌治療専門クリニック",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "表参道の美肌治療専門クリニック｜ルナージュクリニック",
    description: "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
    images: ["/images/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification (必要に応じて追加)
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${shippioriMincho.variable}`}>
      <head>
        {/* パフォーマンス最適化のメタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* フォント最適化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&display=swap" as="style" />
        
        {/* リソースヒント */}
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://ugc.same-assets.com" />
        
        {/* Critical CSS をインライン化 */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: 250 243 239;
                --foreground: 84 88 95;
                --primary: 194 172 148;
                --primary-foreground: 255 255 255;
                --secondary: 214 198 181;
                --accent: 202 169 175;
                --border: 214 198 181;
                --radius: 0.5rem;
              }
              html { scroll-behavior: smooth; }
              body {
                font-family: var(--font-shippori), serif;
                background: rgb(var(--background));
                color: rgb(var(--foreground));
                line-height: 1.6;
                margin: 0;
                padding: 0;
              }
              h1, h2, h3, h4, h5, h6 {
                font-family: var(--font-shippori), serif;
                line-height: 1.3;
                margin: 0;
              }
              .container {
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding-left: 1rem;
                padding-right: 1rem;
              }
              @media (min-width: 640px) { .container { max-width: 640px; } }
              @media (min-width: 768px) { .container { max-width: 768px; } }
              @media (min-width: 1024px) { .container { max-width: 1024px; } }
              @media (min-width: 1280px) { .container { max-width: 1280px; } }
              .text-center { text-align: center; }
              .flex { display: flex; }
              .items-center { align-items: center; }
              .justify-center { justify-content: center; }
              .justify-between { justify-content: space-between; }
              .relative { position: relative; }
              .absolute { position: absolute; }
              .fixed { position: fixed; }
              .z-10 { z-index: 10; }
              .z-50 { z-index: 50; }
              .hidden { display: none; }
              @media (min-width: 768px) {
                .md\\:block { display: block; }
                .md\\:hidden { display: none; }
              }
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "ルナージュクリニック",
              "description": "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
              "url": "https://lunage-clinic.com",
              "logo": "https://lunage-clinic.com/images/ogp.png",
              "image": "https://lunage-clinic.com/images/ogp.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "神宮前3丁目2番17号 上田ビル2階",
                "addressLocality": "渋谷区",
                "addressRegion": "東京都",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.6704",
                "longitude": "139.7085"
              },
              "medicalSpecialty": [
                "美容皮膚科",
                "美容外科"
              ],
              "serviceType": [
                "シミ治療",
                "しわ治療",
                "たるみ治療",
                "ニキビ治療",
                "美肌治療"
              ],
              "priceRange": "$$",
              "openingHours": [
                "Mo-Su 10:00-19:00"
              ],
              "sameAs": [
                "https://lunage-clinic.com"
              ]
            })
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
