import { Phone, Siren } from "lucide-react";

// Design rationale: strategy doc calls for a "Live Operational Capacity Indicator" as a
// trust-building value-add. Surfacing a lightweight version of it directly in the emergency
// banner (rather than burying it on a dashboard) does two things a generic "we're open 24/7"
// bar can't: it gives anxious pet parents an immediate, concrete signal ("Normal Wait") instead
// of a vague promise, and it doubles as a live demo of the paid feature during the sales pitch.
// [PLACEHOLDER: wire "status" to a real backend / Google Sheet / clinic PMS feed]
export function EmergencyBanner() {
  const status: "normal" | "busy" = "normal";

  return (
    <div className="bg-primary-700 text-white">
      <div className="container flex flex-col items-center justify-between gap-2.5 py-2.5 text-sm sm:flex-row">
        <div className="flex items-center gap-2 font-display font-semibold">
          <Siren className="h-4 w-4 shrink-0 text-accent-400" />
          <span>24/7 Emergency &amp; Trauma Care</span>
          <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className={
                  status === "normal"
                    ? "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"
                    : "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"
                }
              />
              <span
                className={
                  status === "normal"
                    ? "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400"
                    : "relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"
                }
              />
            </span>
            {status === "normal" ? "Normal wait time" : "High patient volume"}
          </span>
        </div>
        <a
          href="tel:+911414000001"
          className="flex items-center gap-1.5 font-display font-bold text-accent-400 hover:text-accent-400/80"
        >
          <Phone className="h-3.5 w-3.5" />
          Emergency Line: +91 141 400 0001
        </a>
      </div>
    </div>
  );
}
