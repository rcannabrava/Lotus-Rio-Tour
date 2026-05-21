import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyLotus } from "@/components/sections/WhyLotus";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Private Tours in Rio | Lotus Rio Tour",
      },

      {
        name: "description",
        content:
          "Private tours in Rio de Janeiro with a local multilingual guide. Explore Christ the Redeemer, Sugarloaf Mountain, beaches, nature and exclusive experiences with personalized service.",
      },

      {
        name: "keywords",
        content:
          "private tours in Rio, private tours Rio de Janeiro, Rio de Janeiro private tours, private tour Rio de Janeiro, private guide Rio de Janeiro, luxury tours Rio de Janeiro, Rio sightseeing tour, custom tours Rio, tailor made tours Rio de Janeiro, Christ the Redeemer private tour, Sugarloaf Mountain private tour, Tijuca Forest tour, Rio helicopter tour, Rio boat tour, Carnival experience Rio, Maracana tour, English speaking guide Rio, Spanish speaking guide Rio, VIP tours Rio de Janeiro, personalized tours Rio, exclusive tours Rio de Janeiro, best private tours in Rio, day tours Rio de Janeiro, local tour guide Rio, tourism in Rio de Janeiro",
      },

      // OPEN GRAPH

      {
        property: "og:title",
        content: "Private Tours in Rio | Lotus Rio Tour",
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
        content: "Private Tour in Rio | Lotus Rio Tour",
      },

      {
        name: "twitter:description",
        content: "Private tour in Rio de Janeiro.",
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

          description: "Private tours and bespoke experiences in Rio de Janeiro.",

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
      <WhyLotus />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
