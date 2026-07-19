import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-display text-xs font-bold uppercase tracking-tighter",
            light ? "text-white/70" : "text-secondary-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tightest sm:text-4xl",
          light ? "text-white" : "text-primary-600"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
