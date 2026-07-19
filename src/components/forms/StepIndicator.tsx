import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <ol className="grid grid-cols-4 gap-2">
      {steps.map((label, i) => {
        const state =
          i < currentStep ? "done" : i === currentStep ? "active" : "upcoming";

        return (
          <li key={label} className="flex flex-col items-center gap-2">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold transition-colors duration-300",
                state === "done" && "bg-accent-600 text-white",
                state === "active" && "bg-primary-600 text-white",
                state === "upcoming" && "bg-surface-sub text-ink-muted"
              )}
            >
              {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "hidden text-center text-[11px] font-semibold uppercase tracking-tighter sm:block",
                state === "upcoming" ? "text-ink-muted" : "text-primary-600"
              )}
            >
              {label}
            </span>
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface-sub">
              <motion.div
                className="h-full bg-accent-600"
                initial={false}
                animate={{ width: state === "upcoming" ? "0%" : "100%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
