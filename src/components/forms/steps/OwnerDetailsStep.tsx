import { UseFormReturn } from "react-hook-form";
import { UserRound } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { inputClasses } from "@/lib/utils";
import { AppointmentFormValues } from "@/lib/appointmentSchema";

interface StepProps {
  form: UseFormReturn<AppointmentFormValues>;
}

export function OwnerDetailsStep({ form }: StepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
          <UserRound className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">
          Last step — how should we reach you to confirm this appointment?
        </p>
      </div>

      <FormField label="Your Full Name" htmlFor="ownerName" error={errors.ownerName?.message}>
        <input
          id="ownerName"
          type="text"
          placeholder="e.g. Rakesh Sharma"
          className={inputClasses(!!errors.ownerName)}
          {...register("ownerName")}
        />
      </FormField>

      <FormField label="Mobile Number" htmlFor="phone" error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. 9876543210"
          className={inputClasses(!!errors.phone)}
          {...register("phone")}
        />
      </FormField>

      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          placeholder="e.g. rakesh@example.com"
          className={inputClasses(!!errors.email)}
          {...register("email")}
        />
      </FormField>
    </div>
  );
}
