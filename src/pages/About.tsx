import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { AboutHero } from "@/components/sections/AboutHero";
import { ClinicalPhilosophy } from "@/components/sections/ClinicalPhilosophy";
import { OurJourney } from "@/components/sections/OurJourney";
import { InfrastructureShowcase } from "@/components/sections/InfrastructureShowcase";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { PageCTA } from "@/components/shared/PageCTA";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet the team and philosophy behind Bhanwar Pet Hospital — Jaipur's advanced veterinary facility built on clinical rigor and compassionate care."
        path="/about"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <AboutHero />
        <ClinicalPhilosophy />
        <OurJourney />
        <InfrastructureShowcase />
        <DoctorsPreview />
        <PageCTA
          title="Ready to meet the team in person?"
          description="Book a first visit and see why Jaipur families trust us with their pets' health."
        />
      </main>
      <Footer />
    </>
  );
}
