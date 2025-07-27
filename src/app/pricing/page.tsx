import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "料金一覧表 | 表参道の美肌治療専門クリニック ルナージュクリニック",
  description: "ルナージュクリニックの全施術料金を一覧でご確認いただけます。メンバー価格と通常価格を分かりやすく表示しています。",
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