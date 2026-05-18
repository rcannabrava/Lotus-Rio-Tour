import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tours } from "@/components/sections/Tours";
import { WhyLotus } from "@/components/sections/WhyLotus";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Luxury Private Tours in Rio | Lotus Rio Tour",
      },

      {
        name: "description",
        content:
          "Luxury private tours and bespoke experiences in Rio de Janeiro with multilingual local guidance.",
      },

      {
        name: "keywords",
        content:
          "Rio de Janeiro private tours, luxury tours Rio, Christ the Redeemer tour, Sugarloaf Mountain tour, private guide Rio de Janeiro, Private tour in Rio de Janeiro",
      },

      // OPEN GRAPH

      {
        property: "og:title",
        content: "Luxury Private Tours in Rio | Lotus Rio Tour",
      },

      {
        property: "og:description",
        content: "Private, elegant and tailor-made experiences in Rio de Janeiro.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://lotusriotour.com",
      },

      {
        property: "og:image",
        content: "https://lotusriotour.com/og-image.jpg",
      },

      // TWITTER

      {
        name: "twitter:title",
        content: "Luxury Private Tours in Rio | Lotus Rio Tour",
      },

      {
        name: "twitter:description",
        content: "Private luxury experiences in Rio de Janeiro.",
      },

      {
        name: "twitter:image",
        content: "https://lotusriotour.com/og-image.jpg",
      },

      // GEO

      {
        name: "geo.region",
        content: "BR-RJ",
      },

      {
        name: "geo.placename",
        content: "Rio de Janeiro",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://lotusriotour.com",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",

        children: JSON.stringify({
          "@context": "https://schema.org",

          "@type": "TravelAgency",

          name: "Lotus Rio Tour",

          url: "https://lotusriotour.com",

          image: "https://lotusriotour.com/og-image.jpg",

          description: "Luxury private tours and bespoke experiences in Rio de Janeiro.",

          areaServed: {
            "@type": "City",
            name: "Rio de Janeiro",
          },

          availableLanguage: ["English", "Portuguese", "Spanish"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <WhyLotus />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
