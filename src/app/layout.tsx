import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const shippioriMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
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
  metadataBase: new URL("https://runaju-clinic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "表参道の美肌治療専門クリニック｜ルナージュクリニック",
    description: "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
    url: "https://runaju-clinic.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "ルナージュクリニック",
              "description": "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
              "url": "https://runaju-clinic.com",
              "logo": "https://runaju-clinic.com/images/ogp.png",
              "image": "https://runaju-clinic.com/images/ogp.png",
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
                "https://runaju-clinic.com"
              ]
            })
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
