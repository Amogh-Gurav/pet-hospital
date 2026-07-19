import { motion } from "framer-motion";
import { Scissors, HeartPulse, ShieldPlus, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

// Grouped per the strategy doc's "Curated Services Matrix" — three specialized pillars
// rather than a flat list of a dozen services, so the information architecture itself
// communicates expertise instead of overwhelming a first-time visitor.
const PILLARS = [
  {
    icon: Scissors,
    tone: "primary",
    title: "Advanced Surgery",
    description:
      "Soft-tissue, orthopedic and emergency surgical procedures performed in our ISO-grade operating theatre.",
    items: [
      "Spay, neuter & sterilization",
      "Orthopedic & fracture repair",
      "Tumor removal & biopsy",
      "Emergency trauma surgery",
      "Dental & oral surgery",
    ],
  },
  {
    icon: HeartPulse,
    tone: "secondary",
    title: "Internal Medicine",
    description:
      "Diagnosis and long-term management of complex and chronic conditions, backed by in-house lab and imaging.",
    items: [
      "Cardiac & respiratory care",
      "Renal & endocrine management",
      "Digital X-ray & ultrasound",
      "In-house pathology & lab work",
      "Chronic condition monitoring",
    ],
  },
  {
    icon: ShieldPlus,
    tone: "accent",
    title: "Preventative Care",
    description:
      "The wellness foundation that keeps most conditions from becoming emergencies in the first place.",
    items: [
      "Core & lifestyle vaccinations",
      "Annual wellness screening",
      "Deworming & parasite control",
      "Nutrition & weight consultations",
      "Senior pet health panels",
    ],
  },
];

const TONE_CLASSES: Record<string, { badge: string; icon: string }> = {
  primary: { badge: "bg-primary-600", icon: "text-primary-600" },
  secondary: { badge: "bg-secondary-600", icon: "text-secondary-600" },
  accent: { badge: "bg-accent-600", icon: "text-accent-600" },
};

export function ServicesMatrix() {
  return (
    <section id="services" className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Three Pillars"
          title="Structured by specialization, not by guesswork."
        />

        <div className="mt-14 flex flex-col gap-8">
          {PILLARS.map((pillar, i) => {
            const tone = TONE_CLASSES[pillar.tone];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-8 rounded-3xl border border-primary-600/8 bg-surface-sub p-8 sm:p-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12"
              >
                <div>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${tone.badge}`}>
                    <pillar.icon className="h-6.5 w-6.5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-primary-600">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {pillar.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft"
                    >
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-sub ${tone.icon}`}>
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-ink-main">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
