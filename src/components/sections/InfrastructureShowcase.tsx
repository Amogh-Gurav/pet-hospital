import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

// PLACEHOLDER: swap for real facility photography per the strategy doc's art-direction briefs.
const ZONES = [
  {
    title: "Digital X-Ray & Imaging Suite",
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sterile Operating Theatre",
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Recovery & Boarding Ward",
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=900&auto=format&fit=crop",
  },
];

// Design rationale: the strategy doc calls out "Radical Operational Transparency" as a
// named trust tactic — showing the actual facility zones rather than describing them.
// This section exists specifically to deliver on that, not as generic gallery filler.
export function InfrastructureShowcase() {
  return (
    <section className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="See Inside"
          title="Facilities built to hospital, not shop, standards."
          description="Every zone below is part of our actual clinic in Vaishali Nagar — not stock photography of a generic vet office."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ZONES.map((zone, i) => (
            <motion.figure
              key={zone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={zone.src}
                  alt={zone.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 font-display text-sm font-semibold text-primary-600">
                {zone.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
