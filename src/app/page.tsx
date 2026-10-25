import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AutomationSection from "@/components/AutomationSection";
import MethodologySection from "@/components/MethodologySection";
import TechnologiesSection from "@/components/TechnologiesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <AutomationSection />
      <MethodologySection />
      <TechnologiesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
