import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemComparison } from "@/components/ProblemComparison";
import { HowItWorks } from "@/components/HowItWorks";
import { TeoBadge } from "@/components/TeoBadge";
import { Industries } from "@/components/Industries";
import { LiveWorkflow } from "@/components/LiveWorkflow";
import { Metrics } from "@/components/Metrics";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bancada text-grafite font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemComparison />
        <HowItWorks />
        <TeoBadge />
        <Industries />
        <LiveWorkflow />
        <Metrics />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
