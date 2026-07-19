import { PageHero } from "@/components/shared/PageHero";

export function BookingHero() {
  return (
    <PageHero
      eyebrow="Book an Appointment"
      title="Four short steps to your pet's next visit."
      description="Tell us about your pet, pick a service and doctor, choose a time that works, and we'll take it from there."
      tone="green"
      glow="left"
      compact
    />
  );
}
