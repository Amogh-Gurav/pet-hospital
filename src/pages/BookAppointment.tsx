import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { BookingHero } from "@/components/sections/BookingHero";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export default function BookAppointment() {
  return (
    <>
      <Seo
        title="Book an Appointment"
        description="Book your pet's next visit in four quick steps — choose a service, a doctor, and a time that works for you."
        path="/book-appointment"
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <BookingHero />
        <section className="bg-surface-main py-16 sm:py-20">
          <div className="container max-w-2xl">
            <AppointmentForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
