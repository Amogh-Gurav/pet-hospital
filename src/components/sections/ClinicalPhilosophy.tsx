import { motion } from "framer-motion";
import { Stethoscope, HandHeart, ScanEye } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const PILLARS = [
  {
    icon: Stethoscope,
    title: "Diagnose Before We Treat",
    description:
      "No prescription without a confirmed diagnosis. Every case begins with a full clinical work-up, not guesswork.",
  },
  {
    icon: HandHeart,
    title: "Comfort Is Not Optional",
    description:
      "Low-stress handling, pain management protocols and calm recovery spaces are built into every procedure, not added on request.",
  },
  {
    icon: ScanEye,
    title: "Radical Transparency",
    description:
      "You see the same charts, scans and treatment options our doctors do — explained in plain language before any decision is made.",
  },
];

// Design rationale: three pillars, each mapped directly to a real operating principle
// rather than generic "we love animals" copy — this is what makes an About page function
// as a trust document instead of filler content the business owner has seen a hundred times.
export function ClinicalPhilosophy() {
  return (
    <section className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Clinical Philosophy"
          title="Three principles behind every appointment."
          description="These aren't values-page platitudes — they're the protocols our doctors are trained and audited against."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-primary-600/8 bg-surface-sub p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <pillar.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-primary-600">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
