import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import BudgetEstimator from "@/components/BudgetEstimator";
import AutomationSection from "@/components/AutomationSection";
import MethodologySection from "@/components/MethodologySection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CompanyVideoSection from "@/components/CompanyVideoSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <BudgetEstimator />
      <AutomationSection />
      <MethodologySection />
      <TechnologiesSection />
      <CompanyVideoSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
