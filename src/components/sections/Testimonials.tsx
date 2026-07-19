import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

// PLACEHOLDER: Replace with verified Google Review excerpts once client provides access.
const TESTIMONIALS = [
  {
    quote:
      "Our Labrador needed emergency surgery at 1 AM and the team was ready before we even arrived. The follow-up care was just as thorough.",
    name: "Ritika Sharma",
    context: "Malviya Nagar, Owner of Bruno",
  },
  {
    quote:
      "Dr. Rathore caught a cardiac issue during a routine checkup that our previous vet had missed twice. Genuinely grateful.",
    name: "Arjun Singhvi",
    context: "C-Scheme, Owner of Simba",
  },
  {
    quote:
      "The vaccination planner alone saved me three phone calls. Everything about this clinic feels organized and modern.",
    name: "Priya Kothari",
    context: "Vaishali Nagar, Owner of Coco",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface-sub py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Trusted By Jaipur Families"
          title="What pet parents say after their first visit."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
            >
              <Quote className="h-6 w-6 text-secondary-600/30" />
              <div className="mt-3 flex text-accent-600">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-main">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-primary-600/8 pt-4">
                <p className="font-display text-sm font-bold text-primary-600">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
