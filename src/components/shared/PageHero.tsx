import { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  tone?: "teal" | "green" | "slate";
  glow?: "left" | "right" | "center";
  compact?: boolean;
}

const glowPosition = {
  left: "-left-32 -top-24",
  right: "-right-32 -top-24",
  center: "left-1/2 top-0 -translate-x-1/2",
};

const glowColor = {
  teal: "bg-secondary-50",
  green: "bg-accent-50",
  slate: "bg-primary-50",
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "teal",
  glow = "right",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-surface-sub",
        compact ? "py-16 sm:py-20" : "py-16 sm:py-24"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute h-[380px] w-[380px] rounded-full blur-3xl",
          glowPosition[glow],
          glowColor[tone]
        )}
      />
      <div
        className={cn(
          "container relative text-center",
          compact ? "max-w-2xl" : "max-w-3xl"
        )}
      >
        <Reveal>
          <Badge tone={tone} className="mx-auto">
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tightest text-primary-600 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
