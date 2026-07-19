import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-primary-600 py-20 sm:py-28">
      <div className="container grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Visit Or Call Us"
            title="Your pet's next check-up starts with one call."
            light
            className="mx-0"
          />

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-semibold text-white">Our Location</p>
                {/* PLACEHOLDER: Confirm exact clinic address */}
                <p className="text-white/70">
                  Plot 14, Vaishali Nagar Main Road, Jaipur, Rajasthan 302021
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-semibold text-white">Phone</p>
                <p className="text-white/70">General: +91 141 400 0000</p>
                <p className="text-white/70">Emergency: +91 141 400 0001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-semibold text-white">Hours</p>
                <p className="text-white/70">OPD: Mon–Sun, 9 AM – 9 PM</p>
                <p className="text-white/70">Emergency: 24/7, all days</p>
              </div>
            </div>
          </div>

          <ButtonLink
            href="/book-appointment"
            variant="primary"
            size="lg"
            className="mt-9 bg-accent-600 hover:bg-accent-600/90"
          >
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-lift"
        >
          {/* PLACEHOLDER: replace with real embedded Google Maps iframe using clinic's place ID */}
          <iframe
            title="Bhanwar Pet Hospital Location"
            className="h-full w-full grayscale invert-[0.92] contrast-[1.05]"
            loading="lazy"
            src="https://www.google.com/maps?q=Vaishali+Nagar,Jaipur&output=embed"
          />
        </motion.div>
      </div>
    </section>
  );
}
