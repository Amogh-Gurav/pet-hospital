import { UseFormReturn } from "react-hook-form";
import { Stethoscope } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { inputClasses } from "@/lib/utils";
import { AppointmentFormValues } from "@/lib/appointmentSchema";

const SERVICES = [
  "General Checkup",
  "Vaccination",
  "Surgery Consultation",
  "Dental Care",
  "Diagnostic Imaging",
  "Dermatology",
  "Emergency Visit",
] as const;

const DOCTORS = [
  "No Preference",
  "Dr. Aditya Bhanwar",
  "Dr. Kavya Rathore",
  "Dr. Ishaan Mehta",
  "Dr. Naina Choudhary",
  "Dr. Rohan Deshmukh",
  "Dr. Priya Sharma",
] as const;

interface StepProps {
  form: UseFormReturn<AppointmentFormValues>;
}

export function ServiceDetailsStep({ form }: StepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex items-center gap-3 sm:col-span-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
          <Stethoscope className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">
          Choose the service your pet needs and a doctor, if you have a
          preference.
        </p>
      </div>

      <FormField label="Service Needed" htmlFor="service" error={errors.service?.message}>
        <select
          id="service"
          className={inputClasses(!!errors.service)}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Preferred Doctor" htmlFor="doctor" error={errors.doctor?.message}>
        <select
          id="doctor"
          className={inputClasses(!!errors.doctor)}
          defaultValue=""
          {...register("doctor")}
        >
          <option value="" disabled>
            Select a doctor
          </option>
          {DOCTORS.map((doctor) => (
            <option key={doctor} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
      </FormField>
    </div>
  );
}
