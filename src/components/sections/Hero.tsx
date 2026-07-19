import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Star, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Design rationale: a split hero (copy left, real facility imagery right) reads as a medical
// institution rather than a pet-shop template — matching the "clinical excellence over cost"
// trigger the strategy doc identifies for high-value pet parents. The floating credential card
// on the image is the trust-signal payload doing the actual conversion work here.
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface-sub">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-secondary-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[320px] w-[320px] rounded-full bg-accent-50 blur-3xl" />

      <div className="container relative grid grid-cols-1 items-center gap-16 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge tone="teal">Jaipur&apos;s Advanced Veterinary Institution</Badge>

          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tightest text-primary-600 sm:text-5xl lg:text-6xl">
            Expert medical care for the ones who can&apos;t ask for it.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-muted">
            Board-certified surgeons, 24/7 emergency response, and diagnostic
            technology on par with human hospitals — trusted by Jaipur
            families across Malviya Nagar, C-Scheme and Vaishali Nagar for
            over a decade.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <ButtonLink href="/book-appointment" variant="primary" size="lg">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="tel:+911414000001" variant="outline" size="lg">
              <Stethoscope className="h-4 w-4" /> Emergency Consult
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-primary-600/8 pt-8">
            <div>
              <p className="font-display text-2xl font-bold text-primary-600">12+ yrs</p>
              <p className="text-sm text-ink-muted">Clinical experience</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-primary-600">18,000+</p>
              <p className="text-sm text-ink-muted">Pets treated</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-accent-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-ink-muted">4.9 (410+ reviews)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-primary-100 shadow-lift">
            {/* PLACEHOLDER: Replace with hero image generated per
                Part 4 §1 "Hero Anchor Media" brief (reception area, natural light, eye-level). */}
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="Veterinarian calmly examining a dog with its owner in a bright, modern clinic"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={1500}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-6 bottom-8 w-64 rounded-2xl border border-primary-600/8 bg-white/95 p-5 shadow-card backdrop-blur-sm sm:-left-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <ShieldCheck className="h-5.5 w-5.5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-primary-600">
                  ISO-Grade Sterile O.R.
                </p>
                <p className="text-xs text-ink-muted">
                  Surgical suite &amp; digital X-ray on-site
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
