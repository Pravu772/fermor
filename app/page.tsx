import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CalculatorHub } from "@/components/sections/CalculatorHub";
import { PhilosophyAndScenarios } from "@/components/sections/PhilosophyAndScenarios";
import { CashflowBlueprint } from "@/components/sections/CashflowBlueprint";
import { ProductRoadmap } from "@/components/sections/ProductRoadmap";
import { EditorialInsights } from "@/components/sections/EditorialInsights";
import { TrustAndCompliance } from "@/components/sections/TrustAndCompliance";
import { FAQSection } from "@/components/sections/FAQSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-[#111A15]">
      {/* 1. Header & Navigation (Solid Canvas, 1px Border, No Glassmorphism) */}
      <Navbar />

      <main id="main-content">
        {/* 2. Editorial Hero with Embedded Live SIP Compounding Engine */}
        <Hero />

        {/* 3. Interactive Calculator Hub (Loan Tenure Optimizer & PPF) */}
        <CalculatorHub />

        {/* 4. The Fermor Framework & Indian Scenarios (Understand · Plan · Act) */}
        <PhilosophyAndScenarios />

        {/* 5. Interactive Monthly Cashflow Blueprint (50/30/20 Rule of Thumb) */}
        <CashflowBlueprint />

        {/* 6. Upcoming App Suite Roadmap (Market, Portfolio, ACT, Ask, For Kids) */}
        <ProductRoadmap />

        {/* 7. Real Editorial & Tax Explainers (fermor.in articles) */}
        <EditorialInsights />

        {/* 8. Trust, Browser-Side Privacy Architecture & SEBI Transparency */}
        <TrustAndCompliance />

        {/* 9. Accessible FAQ Accordion */}
        <FAQSection />

        {/* 10. App Waitlist Form & Conversion */}
        <WaitlistSection />
      </main>

      {/* 11. Complete Footer & Regulatory Disclaimers */}
      <Footer />
    </div>
  );
}
