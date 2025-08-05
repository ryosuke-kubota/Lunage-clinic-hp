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
      <div className="critical-content">
        <HeroSection />
      </div>
      <div className="lazy-load">
        <PhilosophySection />
      </div>
      <div className="lazy-load">
        <MenuSection />
      </div>
      {/* <BeforeAfterSection /> */}
      {/* <ClinicInterior /> */}
      {/* <TestimonialsSection /> */}
      {/* <MessageSection /> */}
      {/* <FAQSection /> */}
      <div className="lazy-load">
        <InformationSection />
      </div>
      <div className="lazy-load">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
