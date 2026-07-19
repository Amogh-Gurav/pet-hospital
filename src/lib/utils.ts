import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const inputClasses = (hasError?: boolean) =>
  cn(
    "h-12 rounded-xl border bg-white px-4 text-[15px] text-ink-main placeholder:text-ink-muted/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-400",
    hasError ? "border-red-400" : "border-primary-600/12"
  );
