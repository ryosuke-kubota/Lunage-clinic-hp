import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
import PaymentSection from "@/components/PaymentSection";

export const metadata: Metadata = {
  title: "料金一覧（機械別）｜表参道の美容医療",
  description: "ルナージュクリニック（表参道）の機械別の施術料金を一覧でご確認いただけます。表示はすべて税込価格です。",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "料金一覧（機械別）｜表参道の美容医療 | ルナージュクリニック",
    description: "ルナージュクリニック（表参道）の機械別の施術料金を一覧でご確認いただけます。表示はすべて税込価格です。",
    url: "https://lunage-clinic.com/pricing",
    siteName: "ルナージュクリニック",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "ルナージュクリニック 料金一覧表",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "料金一覧（機械別）｜表参道の美容医療 | ルナージュクリニック",
    description: "ルナージュクリニック（表参道）の機械別の施術料金を一覧でご確認いただけます。表示はすべて税込価格です。",
    images: ["/images/ogp.png"],
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      <div className="pb-8 pt-[65px] md:pt-[80px] sm:py-16 bg-[#faf3ef]">
        <div className="max-w-7xl mt-8 md:mt-12 mx-auto px-3 sm:px-6 lg:px-8">
          {/* ヘッダー */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-1">
              <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">料金一覧表</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-shippori font-normal text-[#54585f] mb-4">
              Pricing
              <span className="sr-only">｜料金一覧（機械別・ルナージュクリニック 表参道）</span>
            </h1>
            <p className="text-[#54585f] text-sm max-w-2xl mx-auto">
              機械別に全施術の料金を一覧でご確認いただけます
            </p>
          </div>
        </div>
      </div>
      <PaymentSection />
      <PricingTable />
      <Footer />
    </main>
  );
}