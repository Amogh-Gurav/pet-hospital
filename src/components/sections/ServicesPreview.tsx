import { motion } from "framer-motion";
import {
  Scissors,
  Radar,
  ShieldPlus,
  Bone,
  Syringe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const SERVICES = [
  {
    icon: Scissors,
    title: "Advanced Surgery",
    description: "Soft-tissue, orthopedic and emergency surgical procedures.",
  },
  {
    icon: Radar,
    title: "Diagnostic Imaging",
    description: "Digital X-ray, ultrasound and in-house pathology.",
  },
  {
    icon: ShieldPlus,
    title: "Preventive Wellness",
    description: "Vaccination schedules, deworming and annual health screens.",
  },
  {
    icon: Bone,
    title: "Internal Medicine",
    description: "Chronic condition management for cardiac, renal and endocrine cases.",
  },
  {
    icon: Syringe,
    title: "Emergency & Critical Care",
    description: "24/7 trauma response with on-site ICU monitoring.",
  },
  {
    icon: Sparkles,
    title: "Grooming & Wellness Spa",
    description: "Medicated baths, dental hygiene and coat care.",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="bg-surface-sub py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Specializations"
            title="A full medical pillar, not a single service."
            description="Six specialized pillars, each led by a doctor trained specifically in that discipline."
            className="mx-0"
          />
          <ButtonLink href="/services" variant="outline" size="md" className="shrink-0">
            View All Services <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.a
              href="/services"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600 transition-colors group-hover:bg-secondary-600 group-hover:text-white">
                <service.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary-600">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-secondary-600 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
