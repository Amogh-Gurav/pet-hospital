import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

interface PageCTAProps {
  title: string;
  description: string;
}

// Shared closing banner for interior pages — keeps the "book now" moment consistent
// site-wide without re-implementing the full ContactCTA (map, address, hours) on every page.
export function PageCTA({ title, description }: PageCTAProps) {
  return (
    <section className="bg-primary-600 py-16 sm:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="max-w-xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-lg text-balance text-white/75">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/book-appointment"
              variant="primary"
              size="lg"
              className="bg-accent-600 hover:bg-accent-600/90"
            >
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="tel:+911414000001"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Emergency Line
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
