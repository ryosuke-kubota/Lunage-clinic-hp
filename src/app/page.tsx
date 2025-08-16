import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PickupSection from "@/components/PickupSection";
import PhilosophySection from "@/components/PhilosophySection";
import KodawariSection from "@/components/KodawariSection";
import MenuSection from "@/components/MenuSection";
import PaymentSection from "@/components/PaymentSection";
import InstagramSection from "@/components/InstagramSection";
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
        <PickupSection />
      </div>
      <div className="lazy-load">
        <InstagramSection />
      </div>
      {/* <div className="lazy-load">
        <PhilosophySection />
      </div> */}
      <div className="lazy-load">
        <KodawariSection />
      </div>
      <div className="lazy-load">
        <MenuSection />
      </div>
      {/* <div className="lazy-load">
        <PaymentSection />
      </div> */}
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
      <div className="lazy-load">
        <InstagramSection />
      </div>
      <Footer />
    </main>
  );
}
