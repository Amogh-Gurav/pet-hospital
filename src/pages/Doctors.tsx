import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { DoctorsDirectoryHero } from "@/components/sections/DoctorsDirectoryHero";
import { DoctorsDirectory } from "@/components/sections/DoctorsDirectory";
import { PageCTA } from "@/components/shared/PageCTA";

export default function Doctors() {
  return (
    <>
      <Seo
        title="Our Doctors"
        description="Browse our team of specialist veterinarians by department — surgery, internal medicine, diagnostic imaging, dermatology, and dentistry."
        path="/doctors"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <DoctorsDirectoryHero />
        <DoctorsDirectory />
        <PageCTA
          title="Ready to put a name to the care your pet gets?"
          description="Book an appointment with the specialist best suited to your pet's needs."
        />
      </main>
      <Footer />
    </>
  );
}
