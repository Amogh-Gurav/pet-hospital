import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesMatrix } from "@/components/sections/ServicesMatrix";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { PageCTA } from "@/components/shared/PageCTA";

export default function Services() {
  return (
    <>
      <Seo
        title="Veterinary Services"
        description="From surgery and diagnostics to dermatology and dentistry — explore the full range of veterinary services at Bhanwar Pet Hospital."
        path="/services"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <ServicesHero />
        <ServicesMatrix />
        <ServiceProcess />
        <PageCTA
          title="Not sure which service your pet needs?"
          description="Call our team or send us a WhatsApp message — we'll point you to the right specialist, free of charge."
        />
      </main>
      <Footer />
    </>
  );
}
