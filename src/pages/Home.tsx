import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { LocalBusinessSchema } from "@/components/shared/LocalBusinessSchema";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { WellnessCTA } from "@/components/sections/WellnessCTA";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Seo
        title="Trusted Veterinary Hospital in Jaipur"
        description="Advanced surgery, diagnostics, 24/7 emergency care, and preventive wellness for your pets, led by board-certified specialists in Jaipur."
        path="/"
      />
      <LocalBusinessSchema />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <WhyChooseUs />
        <ServicesPreview />
        <DoctorsPreview />
        <Stats />
        <Testimonials />
        <WellnessCTA />
        <GalleryPreview />
        <FAQPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
