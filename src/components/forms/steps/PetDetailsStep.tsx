import { UseFormReturn } from "react-hook-form";
import { PawPrint } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { inputClasses } from "@/lib/utils";
import { AppointmentFormValues } from "@/lib/appointmentSchema";

const SPECIES = ["Dog", "Cat", "Bird", "Rabbit", "Other"] as const;

interface StepProps {
  form: UseFormReturn<AppointmentFormValues>;
}

export function PetDetailsStep({ form }: StepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex items-center gap-3 sm:col-span-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
          <PawPrint className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">
          Tell us about your pet so the right specialist is ready when you
          arrive.
        </p>
      </div>

      <FormField label="Pet's Name" htmlFor="petName" error={errors.petName?.message}>
        <input
          id="petName"
          type="text"
          placeholder="e.g. Simba"
          className={inputClasses(!!errors.petName)}
          {...register("petName")}
        />
      </FormField>

      <FormField label="Species" htmlFor="species" error={errors.species?.message}>
        <select
          id="species"
          className={inputClasses(!!errors.species)}
          defaultValue=""
          {...register("species")}
        >
          <option value="" disabled>
            Select species
          </option>
          {SPECIES.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Breed" htmlFor="breed" error={errors.breed?.message}>
        <input
          id="breed"
          type="text"
          placeholder="e.g. Labrador, Mixed"
          className={inputClasses(!!errors.breed)}
          {...register("breed")}
        />
      </FormField>

      <FormField
        label="Approximate Age (years)"
        htmlFor="age"
        error={errors.age?.message}
      >
        <input
          id="age"
          type="text"
          inputMode="decimal"
          placeholder="e.g. 3"
          className={inputClasses(!!errors.age)}
          {...register("age")}
        />
      </FormField>
    </div>
  );
}
