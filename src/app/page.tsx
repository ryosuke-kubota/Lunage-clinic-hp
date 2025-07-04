import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import MenuSection from "@/components/MenuSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ClinicInterior from "@/components/ClinicInterior";
import TestimonialsSection from "@/components/TestimonialsSection";
import MessageSection from "@/components/MessageSection";
import FAQSection from "@/components/FAQSection";
import InformationSection from "@/components/InformationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <MenuSection />
      {/* <BeforeAfterSection /> */}
      <ClinicInterior />
      {/* <TestimonialsSection /> */}
      <MessageSection />
      {/* <FAQSection /> */}
      <InformationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
