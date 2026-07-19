import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-surface-sub py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-32 -top-24 h-[380px] w-[380px] rounded-full bg-accent-50 blur-3xl" />
      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge tone="teal" className="mx-auto">Curated Services Matrix</Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tightest text-primary-600 sm:text-5xl">
            Every specialization your pet could need, under one roof.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted">
            From a routine vaccination to advanced surgery, each service below
            is led by a doctor trained specifically in that discipline —
            not a single generalist stretched across every case.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
