import { motion } from "framer-motion";
import { CalendarHeart, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

// Design rationale: this surfaces the "Automated Preventive Vaccination Planner" value-add
// from the strategy doc as its own mid-page CTA rather than a footnote — it's a concrete,
// interactive-feeling promise that differentiates the site from a static brochure, which is
// exactly the kind of feature that helps justify premium pricing to the business owner.
export function WellnessCTA() {
  return (
    <section className="bg-surface-main py-6 sm:py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-secondary-600 px-8 py-12 sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <CalendarHeart className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-balance font-display text-2xl font-bold text-white sm:text-3xl">
                Not sure what your pet needs next? Get a free wellness roadmap.
              </h2>
              <p className="mt-3 text-balance text-white/85">
                Tell us your pet&apos;s age and breed — our planner instantly
                builds a personalized vaccination and check-up schedule.
              </p>
            </div>
            <ButtonLink
              href="/book-appointment"
              variant="primary"
              size="lg"
              className="shrink-0 bg-white text-secondary-700 hover:bg-white/90"
            >
              Build My Pet&apos;s Plan <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
