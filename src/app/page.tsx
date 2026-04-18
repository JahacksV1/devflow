import { LandingPage } from "@/components/landing";
import { FAQ_ITEMS } from "@/content/landing";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "[Brand Name]",
  description:
    "We rebuild outdated service-business websites into modern, mobile-first experiences that convert visitors into calls.",
  areaServed: "United States",
  url: "https://example.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const structuredData = [organizationSchema, faqSchema];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
