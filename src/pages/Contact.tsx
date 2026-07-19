import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Bhanwar Pet Hospital by phone, WhatsApp, or our contact form — or find us on the map in Vaishali Nagar, Jaipur."
        path="/contact"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <ContactHero />
        <section className="bg-surface-main py-16 sm:py-20">
          <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
