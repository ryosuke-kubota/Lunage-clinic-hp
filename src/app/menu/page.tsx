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
  keywords: "美容施術, 料金案内, 二重, 目元, 輪郭形成, スキンケア, 表参道, ルナージュクリニック",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "施術・料金案内 | ルナージュクリニック",
    description: "ルナージュクリニックの施術メニューと料金をご案内します。二重・目元施術、輪郭形成、スキンケアなど、豊富なメニューをご用意しております。",
    url: "https://runaju-clinic.com/menu",
    siteName: "ルナージュクリニック",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "ルナージュクリニック 施術・料金案内",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "施術・料金案内 | ルナージュクリニック",
    description: "ルナージュクリニックの施術メニューと料金をご案内します。二重・目元施術、輪郭形成、スキンケアなど、豊富なメニューをご用意しております。",
    images: ["/images/ogp.png"],
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      <MenuHero />
      <MenuNavigation />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
