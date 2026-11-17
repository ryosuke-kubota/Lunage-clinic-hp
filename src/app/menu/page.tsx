import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuNavigation from "@/components/menu/MenuNavigation";
import MenuSection from "@/components/menu/MenuSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "施術・料金案内｜表参道の美容医療",
  description: "ルナージュクリニック（表参道）の施術メニューと料金をご案内します。たるみ・シミ・毛穴・ニキビ跡・薄毛・脱毛・点滴など、お悩みから施術と税込料金をお探しいただけます。",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "施術・料金案内｜表参道の美容医療 | ルナージュクリニック",
    description: "ルナージュクリニック（表参道）の施術メニューと料金をご案内します。たるみ・シミ・毛穴・ニキビ跡・薄毛・脱毛・点滴など、お悩みから施術と税込料金をお探しいただけます。",
    url: "https://lunage-clinic.com/menu",
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
    title: "施術・料金案内｜表参道の美容医療 | ルナージュクリニック",
    description: "ルナージュクリニック（表参道）の施術メニューと料金をご案内します。たるみ・シミ・毛穴・ニキビ跡・薄毛・脱毛・点滴など、お悩みから施術と税込料金をお探しいただけます。",
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
