import { AdvancedSection } from "./advanced-section";
import { ContactSection } from "./contact-section";
import { DemoShowcaseSection } from "./demo-showcase-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { IndustriesStrip } from "./industries-strip";
import { SiteFooter } from "./site-footer";
import { StickyMobileCta } from "./sticky-mobile-cta";
import { WhyThisWorksSection } from "./why-this-works-section";

export function LandingPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-primary)] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-primary-foreground)]"
      >
        Skip to content
      </a>
      <HeroSection />
      <IndustriesStrip />
      <main id="main-content" className="pb-24 md:pb-0">
        <DemoShowcaseSection />
        <WhyThisWorksSection />
        <HowItWorksSection />
        <AdvancedSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
