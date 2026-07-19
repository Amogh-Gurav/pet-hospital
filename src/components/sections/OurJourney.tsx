import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

// PLACEHOLDER: Replace milestones with the clinic's real founding history and dates.
const MILESTONES = [
  {
    year: "2014",
    title: "Founded in Vaishali Nagar",
    description: "Opened as a two-doctor general practice focused on preventive care.",
  },
  {
    year: "2018",
    title: "Surgical Suite Commissioned",
    description: "Added an ISO-grade operating theatre and resident surgical team.",
  },
  {
    year: "2021",
    title: "24/7 Emergency Wing Launched",
    description: "Became one of Jaipur's few hospitals offering round-the-clock trauma response.",
  },
  {
    year: "2024",
    title: "Digital Diagnostics Upgrade",
    description: "In-house digital X-ray, ultrasound and full pathology lab went live.",
  },
];

// A left-rail timeline: the sequence itself carries real information here (the clinic's
// actual growth), which is the one case the design skill flags as a legitimate use of
// numbered/chronological markers rather than decoration.
export function OurJourney() {
  return (
    <section className="bg-surface-sub py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Journey" title="A decade of growing with Jaipur's pets." />

        <div className="mx-auto mt-16 max-w-2xl">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-600 font-display text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < MILESTONES.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-primary-600/10" />
                )}
              </div>
              <div className="flex-1 rounded-2xl border border-primary-600/8 bg-white p-6 shadow-soft">
                <p className="font-display text-sm font-bold text-secondary-600">{m.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-primary-600">
                  {m.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
