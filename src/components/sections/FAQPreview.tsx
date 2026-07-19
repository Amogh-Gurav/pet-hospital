import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Do I need an appointment for emergencies?",
    a: "No. Our emergency line is staffed 24/7 and walk-ins are always accepted — call ahead only if you'd like our team to prepare for a specific condition.",
  },
  {
    q: "What should I bring for a first visit?",
    a: "Any previous medical records or vaccination history, and your pet on a secure leash or in a carrier. We handle the rest, including a full intake exam.",
  },
  {
    q: "Do you offer at-home consultations?",
    a: "We currently operate from our Jaipur facility only, but our pre-registration portal lets you complete most paperwork before you arrive.",
  },
  {
    q: "How do I know which vaccinations my pet needs?",
    a: "Use our free wellness planner above — enter your pet's age and breed for an instant, personalized schedule reviewed by our medical team.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl border border-primary-600/8 bg-white"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-semibold text-primary-600">{q}</span>
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-secondary-600 transition-transform duration-300",
            open && "rotate-45"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQPreview() {
  return (
    <section id="faq" className="bg-surface-main py-20 sm:py-28">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Answers before you even have to call."
        />
        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/faq" variant="ghost" size="md">
            View all frequently asked questions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
