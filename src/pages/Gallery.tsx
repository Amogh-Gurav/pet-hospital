import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { GalleryHero } from "@/components/sections/GalleryHero";
import { GalleryFull } from "@/components/sections/GalleryFull";
import { PageCTA } from "@/components/shared/PageCTA";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Facility Gallery"
        description="Take a look inside Bhanwar Pet Hospital — our surgery suites, diagnostic labs, recovery wards, and grounds."
        path="/gallery"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <GalleryHero />
        <GalleryFull />
        <PageCTA
          title="Liked what you saw?"
          description="Book a first visit and experience the facility in person."
        />
      </main>
      <Footer />
    </>
  );
}
