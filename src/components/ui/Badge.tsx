import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "teal" | "green" | "slate";
}

const tones = {
  teal: "bg-secondary-50 text-secondary-700 border-secondary-600/15",
  green: "bg-accent-50 text-accent-600 border-accent-600/20",
  slate: "bg-surface-sub text-ink-muted border-primary-600/10",
};

export function Badge({ children, className, tone = "teal" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-tighter font-display",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
