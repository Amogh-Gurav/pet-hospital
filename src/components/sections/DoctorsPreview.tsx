import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

// PLACEHOLDER: Replace names, credentials and photos with real doctor data from the client.
const DOCTORS = [
  {
    name: "Dr. Aditya Bhanwar",
    role: "Chief Veterinary Surgeon, BVSc & AH, MVSc (Surgery)",
    photo:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Kavya Rathore",
    role: "Internal Medicine Specialist, DVM, Cert. Small Animal Cardiology",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Ishaan Mehta",
    role: "Diagnostic Imaging Lead, BVSc & AH, Cert. Veterinary Radiology",
    photo:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop",
  },
];

export function DoctorsPreview() {
  return (
    <section id="doctors" className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="The Authority Anchor"
            title="Meet the doctors behind every diagnosis."
            description="Credentials you can verify, and bedside manner families come back for."
            className="mx-0"
          />
          <ButtonLink href="/doctors" variant="outline" size="md" className="shrink-0">
            Meet the Full Team <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {DOCTORS.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl border border-primary-600/8 bg-surface-sub"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.photo}
                  alt={`Portrait of ${doctor.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary-600">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{doctor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
