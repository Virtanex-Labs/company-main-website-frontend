import Navbar from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { GenAIShowcase } from "@/components/App Components/GenAIShowcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Metrics } from "@/components/sections/Metrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Services />
        <div className="py-12 bg-muted/20">
          <GenAIShowcase
            buttonHref="/contact"
            buttonText="Build Your AI Solution"
          />
        </div>
        <WhyUs />
        <Process />
        <Metrics />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
