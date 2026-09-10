import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: company.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.short,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Hero />
      <Trust />
      <Services />
      <Projects />
      <About />
      <Process />
      <Faq />
      <Gallery />
      <Contact />
    </>
  );
}