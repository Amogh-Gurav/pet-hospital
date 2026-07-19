import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { FAQHero } from "@/components/sections/FAQHero";
import { FAQFull } from "@/components/sections/FAQFull";
import { PageCTA } from "@/components/shared/PageCTA";

export default function FAQ() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about appointments, emergency care, pricing, and pet wellness at Bhanwar Pet Hospital."
        path="/faq"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <FAQHero />
        <FAQFull />
        <PageCTA
          title="Still have a question?"
          description="Our front desk team is happy to help over phone or WhatsApp."
        />
      </main>
      <Footer />
    </>
  );
}
