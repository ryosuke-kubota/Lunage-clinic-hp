import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuNavigation from "@/components/menu/MenuNavigation";
import MenuSection from "@/components/menu/MenuSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "施術・料金案内 | 表参道の美肌治療専門クリニック ルナージュクリニック",
  description: "ルナージュクリニックの施術メニューと料金をご案内します。二重・目元施術、輪郭形成、スキンケアなど、豊富なメニューをご用意しております。",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      <MenuHero />
      {/* <MenuNavigation /> */}
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
