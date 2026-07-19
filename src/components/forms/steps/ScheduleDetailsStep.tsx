import { UseFormReturn } from "react-hook-form";
import { CalendarClock } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { AppointmentFormValues } from "@/lib/appointmentSchema";
import { cn, inputClasses } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
  "7:00 PM",
] as const;

interface StepProps {
  form: UseFormReturn<AppointmentFormValues>;
}

export function ScheduleDetailsStep({ form }: StepProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const selectedSlot = watch("timeSlot");
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
          <CalendarClock className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">
          Pick a preferred date and time — we'll confirm availability by
          phone within the hour.
        </p>
      </div>

      <FormField label="Preferred Date" htmlFor="date" error={errors.date?.message}>
        <input
          id="date"
          type="date"
          min={today}
          className={inputClasses(!!errors.date)}
          {...register("date")}
        />
      </FormField>

      <FormField label="Preferred Time Slot" htmlFor="timeSlot" error={errors.timeSlot?.message}>
        <div className="grid grid-cols-3 gap-2.5">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() =>
                setValue("timeSlot", slot, { shouldValidate: true })
              }
              className={cn(
                "rounded-xl border px-3 py-3 font-display text-sm font-semibold transition-colors duration-200",
                selectedSlot === slot
                  ? "border-primary-600 bg-primary-600 text-white"
                  : "border-primary-600/12 bg-white text-ink-main hover:border-primary-600/30"
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </FormField>

      <FormField
        label="Anything the doctor should know? (optional)"
        htmlFor="notes"
        error={errors.notes?.message}
      >
        <textarea
          id="notes"
          rows={4}
          placeholder="e.g. Limping on the left front paw since yesterday"
          className={cn(inputClasses(!!errors.notes), "h-auto resize-none py-3")}
          {...register("notes")}
        />
      </FormField>
    </div>
  );
}
