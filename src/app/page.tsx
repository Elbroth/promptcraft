import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { UseCases } from "@/components/sections/use-cases";
import { Features } from "@/components/sections/features";
import { Examples } from "@/components/sections/examples";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <UseCases />
      <Features />
      <Examples />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}