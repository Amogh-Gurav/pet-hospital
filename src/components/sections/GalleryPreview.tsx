import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

// PLACEHOLDER: Swap for real facility photography per Part 4 art-direction briefs once shot.
const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
    alt: "Digital X-ray suite with modern imaging equipment",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=700&auto=format&fit=crop",
    alt: "Sterile operating room prepared for surgery",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=700&auto=format&fit=crop",
    alt: "Recovery ward with comfortable kennels",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=700&auto=format&fit=crop",
    alt: "Golden retriever in outdoor wellness recovery garden",
    span: "",
  },
];

export function GalleryPreview() {
  return (
    <section id="gallery" className="bg-surface-sub py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Radical Operational Transparency"
            title="Step inside before you ever book."
            className="mx-0"
          />
          <ButtonLink href="/gallery" variant="outline" size="md" className="shrink-0">
            View Full Gallery <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-rows-2">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                  decoding="async"
                className="h-full max-h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:max-h-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
