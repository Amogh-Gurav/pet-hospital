import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { FilterTabs } from "@/components/shared/FilterTabs";
import { cn } from "@/lib/utils";

type Category =
  | "All"
  | "Surgery"
  | "Diagnostics"
  | "Recovery Wards"
  | "Reception & Grounds";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  span: string;
}

const GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000&auto=format&fit=crop",
    alt: "Digital X-ray suite with modern imaging equipment",
    category: "Diagnostics",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop",
    alt: "Sterile operating room prepared for surgery",
    category: "Surgery",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    alt: "Recovery ward with comfortable kennels",
    category: "Recovery Wards",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    alt: "Golden retriever in outdoor wellness recovery garden",
    category: "Reception & Grounds",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1631557776710-89ca7f19f0d5?q=80&w=800&auto=format&fit=crop",
    alt: "Surgical team performing a procedure",
    category: "Surgery",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop",
    alt: "Bright and welcoming clinic reception desk",
    category: "Reception & Grounds",
    span: "sm:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    alt: "Ultrasound diagnostic session with a cat",
    category: "Diagnostics",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=800&auto=format&fit=crop",
    alt: "Post-operative recovery kennel with monitoring equipment",
    category: "Recovery Wards",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=800&auto=format&fit=crop",
    alt: "Outdoor waiting garden for pet owners",
    category: "Reception & Grounds",
    span: "",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Surgery",
  "Diagnostics",
  "Recovery Wards",
  "Reception & Grounds",
];

export function GalleryFull() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (index: number) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    triggerRef.current?.focus();
  };

  const visible = useMemo(
    () =>
      active === "All"
        ? GALLERY
        : GALLERY.filter((img) => img.category === active),
    [active]
  );

  useEffect(() => {
    if (lightboxIndex !== null) closeButtonRef.current?.focus();
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % visible.length));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + visible.length) % visible.length
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, visible.length]);

  return (
    <section id="gallery-full" className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <FilterTabs
          label="Filter gallery by area"
          options={CATEGORIES}
          active={active}
          onChange={setActive}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((img, i) => (
              <motion.button
                layout
                key={img.alt}
                type="button"
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl text-left",
                  img.span
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full max-h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:max-h-none"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary-600/0 opacity-0 transition-all duration-300 group-hover:bg-primary-600/30 group-hover:opacity-100">
                  <Expand className="h-6 w-6 text-white" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-900/90 p-4 sm:p-10"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${visible[lightboxIndex].alt} — image preview`}
          >
            <button
              ref={closeButtonRef}
              aria-label="Close gallery preview"
              onClick={closeLightbox}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) =>
                  i === null ? i : (i - 1 + visible.length) % visible.length
                );
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.img
              key={visible[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={visible[lightboxIndex].src}
              alt={visible[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-lift"
            />

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) =>
                  i === null ? i : (i + 1) % visible.length
                );
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
