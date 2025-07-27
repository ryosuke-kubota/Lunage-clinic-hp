import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "料金一覧表 | 表参道の美肌治療専門クリニック ルナージュクリニック",
  description: "ルナージュクリニックの全施術料金を一覧でご確認いただけます。メンバー価格と通常価格を分かりやすく表示しています。",
  keywords: "料金一覧, 美容施術料金, メンバー価格, 表参道, ルナージュクリニック",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "料金一覧表 | ルナージュクリニック",
    description: "ルナージュクリニックの全施術料金を一覧でご確認いただけます。メンバー価格と通常価格を分かりやすく表示しています。",
    url: "https://runaju-clinic.com/pricing",
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
    title: "料金一覧表 | ルナージュクリニック",
    description: "ルナージュクリニックの全施術料金を一覧でご確認いただけます。メンバー価格と通常価格を分かりやすく表示しています。",
    images: ["/images/ogp.png"],
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      <PricingTable />
      <Footer />
    </main>
  );
}