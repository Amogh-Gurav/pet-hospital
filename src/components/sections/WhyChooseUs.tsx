import { motion } from "framer-motion";
import { Award, Microscope, HeartPulse, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const REASONS = [
  {
    icon: Award,
    title: "Board-Certified Specialists",
    description:
      "Every senior doctor holds advanced surgical or diagnostic certification, reviewed and renewed annually.",
  },
  {
    icon: Microscope,
    title: "In-House Advanced Diagnostics",
    description:
      "Digital X-ray, ultrasound and full pathology lab on-site — results in hours, not days.",
  },
  {
    icon: HeartPulse,
    title: "Empathy-Led Protocols",
    description:
      "Low-stress handling techniques and dedicated recovery wards designed around patient comfort.",
  },
  {
    icon: Clock,
    title: "True 24/7 Availability",
    description:
      "A resident emergency team on-site every night of the year — never an answering service.",
  },
];

// Design rationale: four cards, not three or six — matches the four distinct trust
// pillars named in the strategy doc (pedigree, diagnostics, empathy, transparency) without
// padding the grid with filler. Icon-forward cards keep scanning fast for stressed users.
export function WhyChooseUs() {
  return (
    <section id="about" className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why Bhanwar Pet Hospital"
          title="Clinical excellence, without the clinical coldness."
          description="We built Bhanwar Pet Hospital around one idea: a hospital-grade standard of medicine delivered with the warmth your pet deserves."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-primary-600/8 bg-surface-sub p-7 transition-all hover:-translate-y-1 hover:border-secondary-600/20 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white transition-transform group-hover:-rotate-6">
                <reason.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary-600">
                {reason.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
