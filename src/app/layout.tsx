import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/ui/StickyBar";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — Bygg & renovering i Gävle`,
    template: `%s — ${company.shortName}`,
  },
  description: company.tagline,
  keywords: [
    "byggfirma gävle",
    "renovering gävle",
    "bygg & renovering",
    "snickeri gävle",
    "tillbyggnad",
    "altan",
    "fasadmålning",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — Bygg & renovering i Gävle`,
    description: company.tagline,
    images: [{ url: "/images/hero/hero.jpg", width: 4240, height: 2832 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Bygg & renovering i Gävle`,
    description: company.tagline,
    images: ["/images/hero/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.name,
    slogan: company.tagline,
    description: company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Gävle",
      postalCode: "802 51",
      addressRegion: "Gävleborg",
      addressCountry: "SE",
    },
    areaServed: company.area,
    telephone: "+4626123456",
    email: company.email,
    url: company.url,
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
  };

  return (
    <html lang="sv" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#inledning"
          className="absolute left-4 top-4 z-[320] -translate-y-full rounded-full border border-ochre/40 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform focus:translate-y-0"
        >
          Hoppa till innehåll
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}