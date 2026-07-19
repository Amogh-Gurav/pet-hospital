import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-surface-sub py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-secondary-50 blur-3xl" />
      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge tone="teal" className="mx-auto">Our Story</Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tightest text-primary-600 sm:text-5xl">
            A hospital-grade standard of care, built for Jaipur&apos;s pets.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted">
            Bhanwar Pet Hospital was founded on a simple belief: pets deserve
            the same clinical rigor, diagnostic precision, and dignity given
            to human patients. Here&apos;s how we live that every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
