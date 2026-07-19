import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STEPS = [
  {
    title: "Book or walk in",
    description: "Call, WhatsApp, or use our booking form — emergencies are always accepted without an appointment.",
  },
  {
    title: "Pre-registration",
    description: "Complete your pet's health history online so consultation time goes to diagnosis, not paperwork.",
  },
  {
    title: "Diagnosis & consultation",
    description: "A specialist examines your pet and explains findings and options in plain language.",
  },
  {
    title: "Treatment & follow-up",
    description: "Care is delivered on-site, with a clear recovery plan and scheduled follow-up if needed.",
  },
];

// A real four-step operational sequence — the numbering here is functional (it's literally
// the order things happen), which is what justifies using numbered markers per the brief.
export function ServiceProcess() {
  return (
    <section className="bg-surface-sub py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="How It Works" title="From first call to full recovery." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-white p-7 shadow-soft"
            >
              <span className="font-display text-4xl font-extrabold text-primary-600/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-primary-600">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
