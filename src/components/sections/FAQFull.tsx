import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { FilterTabs } from "@/components/shared/FilterTabs";
import { cn } from "@/lib/utils";

type Category =
  | "Appointments"
  | "Emergency Care"
  | "Pricing & Payments"
  | "Pet Wellness";

interface FAQEntry {
  q: string;
  a: string;
  category: Category;
}

const FAQS: FAQEntry[] = [
  {
    category: "Emergency Care",
    q: "Do I need an appointment for emergencies?",
    a: "No. Our emergency line is staffed 24/7 and walk-ins are always accepted — call ahead only if you'd like our team to prepare for a specific condition.",
  },
  {
    category: "Appointments",
    q: "What should I bring for a first visit?",
    a: "Any previous medical records or vaccination history, and your pet on a secure leash or in a carrier. We handle the rest, including a full intake exam.",
  },
  {
    category: "Appointments",
    q: "Do you offer at-home consultations?",
    a: "We currently operate from our Jaipur facility only, but our pre-registration portal lets you complete most paperwork before you arrive.",
  },
  {
    category: "Pet Wellness",
    q: "How do I know which vaccinations my pet needs?",
    a: "Use our booking flow to select 'Vaccination' as the service — enter your pet's age and breed and our medical team will confirm a personalized schedule.",
  },
  {
    category: "Appointments",
    q: "Can I request a specific doctor?",
    a: "Yes. Our booking form lets you pick a preferred doctor for any service, or leave it as 'No Preference' and we'll match you to the best fit for your pet's condition.",
  },
  {
    category: "Emergency Care",
    q: "What counts as a pet emergency?",
    a: "Difficulty breathing, uncontrolled bleeding, suspected poisoning, seizures, bloat, or any sudden collapse. When in doubt, call our emergency line rather than wait.",
  },
  {
    category: "Pricing & Payments",
    q: "Do you accept insurance or offer payment plans?",
    a: "We accept most major Indian pet insurance providers directly at billing, and offer instalment plans for surgical procedures above a certain cost threshold.",
  },
  {
    category: "Pricing & Payments",
    q: "Is there a consultation fee?",
    a: "A flat consultation fee applies to first-time visits and covers a full intake exam. Follow-up visits for the same condition within 14 days are complimentary.",
  },
  {
    category: "Pet Wellness",
    q: "How often should my pet have a wellness checkup?",
    a: "Once yearly for adult pets, twice yearly for seniors (age 7+) or pets with chronic conditions, and per-vaccination schedule for puppies and kittens.",
  },
  {
    category: "Pet Wellness",
    q: "Do you provide nutrition or weight management advice?",
    a: "Yes, our internal medicine team runs dedicated nutrition and weight consultations, bookable as a service in our appointment form.",
  },
];

const CATEGORIES: (Category | "All")[] = [
  "All",
  "Appointments",
  "Emergency Care",
  "Pricing & Payments",
  "Pet Wellness",
];

function FAQItem({ faq, index }: { faq: FAQEntry; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="rounded-2xl border border-primary-600/8 bg-white"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-semibold text-primary-600">
          {faq.q}
        </span>
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
            <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-muted">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQFull() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        q.length === 0 ||
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="faq-full" className="bg-surface-main py-20 sm:py-28">
      <div className="container max-w-3xl">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question..."
            className="h-13 w-full rounded-xl border border-primary-600/12 bg-white pl-11 pr-4 text-[15px] text-ink-main placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-secondary-400"
          />
        </div>

        <div className="mt-5">
          <FilterTabs
            label="Filter FAQs by topic"
            options={CATEGORIES}
            active={category}
            onChange={setCategory}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((faq, i) => (
                <FAQItem key={faq.q} faq={faq} index={i} />
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-10 text-center text-[15px] text-ink-muted"
              >
                No questions match "{query}". Try a different search or
                topic.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
