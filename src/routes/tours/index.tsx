import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { Tours } from "@/components/sections/Tours";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tours/")({
  component: ToursPage,
});

function ToursPage() {
  return (
    <main>
      <Navbar />
      <Tours />
      <FAQ />
      <Footer />
    </main>
  );
}
