import { cn } from "@/lib/utils";

interface FilterTabsProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  label: string;
}

export function FilterTabs<T extends string>({
  options,
  active,
  onChange,
  label,
}: FilterTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="flex flex-wrap justify-center gap-2.5"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={active === option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors duration-200",
            active === option
              ? "bg-primary-600 text-white shadow-soft"
              : "bg-surface-sub text-ink-muted hover:bg-primary-50 hover:text-primary-600"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
