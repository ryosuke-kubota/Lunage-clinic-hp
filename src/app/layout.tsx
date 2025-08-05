import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const shippioriMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 実際に使用するウェイトのみ（normal, medium, bold）
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
        
        {/* Hero画像のpreload - FCPパフォーマンス向上 */}
        <link rel="preload" href="/images/hero/hero.webp" as="image" type="image/webp" media="(min-width: 768px)" fetchPriority="high" />
        <link rel="preload" href="/images/hero/hero_sp.webp" as="image" type="image/webp" media="(max-width: 767px)" fetchPriority="high" />
        
        {/* リソースヒント */}
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://ugc.same-assets.com" />
        
        {/* Critical CSS をインライン化 - Above the fold content */}
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
              * { box-sizing: border-box; }
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
              /* Essential layout classes */
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
              /* Critical utility classes */
              .text-center { text-align: center; }
              .text-white { color: rgb(255 255 255); }
              .text-primary { color: rgb(var(--primary)); }
              .flex { display: flex; }
              .items-center { align-items: center; }
              .justify-center { justify-content: center; }
              .justify-between { justify-content: space-between; }
              .relative { position: relative; }
              .absolute { position: absolute; }
              .fixed { position: fixed; }
              .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
              .z-10 { z-index: 10; }
              .z-50 { z-index: 50; }
              .hidden { display: none; }
              .block { display: block; }
              .w-full { width: 100%; }
              .h-full { height: 100%; }
              .min-h-screen { min-height: 100vh; }
              .p-4 { padding: 1rem; }
              .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
              .px-4 { padding-left: 1rem; padding-right: 1rem; }
              .mb-4 { margin-bottom: 1rem; }
              .mb-8 { margin-bottom: 2rem; }
              .opacity-90 { opacity: 0.9; }
              .bg-white { background-color: rgb(255 255 255); }
              .bg-primary { background-color: rgb(var(--primary)); }
              .rounded { border-radius: 0.25rem; }
              .shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
              /* Critical responsive utilities */
              @media (min-width: 768px) {
                .md\\:block { display: block; }
                .md\\:hidden { display: none; }
                .md\\:flex { display: flex; }
                .md\\:text-left { text-align: left; }
                .md\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
              }
              @media (min-width: 1024px) {
                .lg\\:px-12 { padding-left: 3rem; padding-right: 3rem; }
              }
              /* Critical header styles */
              .header-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 50;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(214, 198, 181, 0.2);
              }
              /* Critical hero styles */
              .hero-container {
                position: relative;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, rgba(194, 172, 148, 0.1), rgba(202, 169, 175, 0.1));
              }
              .hero-image {
                width: 100%;
                height: auto;
                object-fit: cover;
                will-change: auto;
              }
              .hero-image-container {
                position: relative;
                width: 100%;
                height: auto;
                contain: layout style paint;
              }
              .hero-text-overlay {
                position: absolute;
                bottom: 0.5rem;
                left: 0;
                right: 0;
                z-index: 20;
                display: flex;
                justify-content: center;
                padding: 0 1rem;
              }
              .hero-gradient {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 9rem;
                background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6), transparent);
                z-index: 10;
              }
            `
          }}
        />
        
        {/* CSS非同期読み込みスクリプト - レンダリングブロッキングを回避 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // CSS非同期読み込み関数（最適化版）
                function loadCSS(href, before, media, attributes) {
                  var doc = window.document;
                  var ss = doc.createElement("link");
                  var ref;
                  if (before) {
                    ref = before;
                  } else {
                    var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
                    ref = refs[refs.length - 1];
                  }
                  var sheets = doc.styleSheets;
                  if (attributes) {
                    for (var attributeName in attributes) {
                      if (attributes.hasOwnProperty(attributeName)) {
                        ss.setAttribute(attributeName, attributes[attributeName]);
                      }
                    }
                  }
                  ss.rel = "stylesheet";
                  ss.href = href;
                  ss.media = "only x";
                  function ready(cb) {
                    if (doc.body) {
                      return cb();
                    }
                    setTimeout(function() {
                      ready(cb);
                    });
                  }
                  ready(function() {
                    ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
                  });
                  var onloadcssdefined = function(cb) {
                    var resolvedHref = ss.href;
                    var i = sheets.length;
                    while (i--) {
                      if (sheets[i].href === resolvedHref) {
                        return cb();
                      }
                    }
                    setTimeout(function() {
                      onloadcssdefined(cb);
                    });
                  };
                  function loadCB() {
                    if (ss.addEventListener) {
                      ss.removeEventListener("load", loadCB);
                    }
                    ss.media = media || "all";
                  }
                  if (ss.addEventListener) {
                    ss.addEventListener("load", loadCB);
                  }
                  ss.onloadcssdefined = onloadcssdefined;
                  onloadcssdefined(loadCB);
                  return ss;
                }
                
                // CSS非同期読み込み実行
                function asyncLoadCSS() {
                  var links = document.querySelectorAll('link[rel="stylesheet"]');
                  var processedHrefs = new Set();
                  
                  links.forEach(function(link) {
                    if (link.href.includes('_next/static/css/') && !processedHrefs.has(link.href)) {
                      processedHrefs.add(link.href);
                      var href = link.href;
                      // 元のリンクを削除
                      link.parentNode.removeChild(link);
                      // 非同期で再読み込み
                      loadCSS(href, null, "all");
                    }
                  });
                }
                
                // 即座に実行してレンダリングブロッキングを回避
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', asyncLoadCSS);
                } else {
                  asyncLoadCSS();
                }
                
                // フォールバック: ページ読み込み完了後にも実行
                window.addEventListener('load', function() {
                  setTimeout(asyncLoadCSS, 50);
                });
              })();
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
