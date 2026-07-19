import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { StepIndicator } from "@/components/forms/StepIndicator";
import { PetDetailsStep } from "@/components/forms/steps/PetDetailsStep";
import { ServiceDetailsStep } from "@/components/forms/steps/ServiceDetailsStep";
import { ScheduleDetailsStep } from "@/components/forms/steps/ScheduleDetailsStep";
import { OwnerDetailsStep } from "@/components/forms/steps/OwnerDetailsStep";
import {
  appointmentSchema,
  AppointmentFormValues,
  STEP_FIELDS,
  STEP_TITLES,
} from "@/lib/appointmentSchema";

const STEP_COMPONENTS = [
  PetDetailsStep,
  ServiceDetailsStep,
  ScheduleDetailsStep,
  OwnerDetailsStep,
];

export function AppointmentForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState<AppointmentFormValues | null>(
    null
  );

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    mode: "onTouched",
  });

  const isLastStep = step === STEP_COMPONENTS.length - 1;
  const StepComponent = STEP_COMPONENTS[step];

  const goNext = async () => {
    const fields = STEP_FIELDS[step] as (keyof AppointmentFormValues)[];
    const valid = await form.trigger(fields);
    if (!valid) return;

    if (isLastStep) {
      form.handleSubmit((values) => setSubmitted(values))();
      return;
    }

    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-primary-600/8 bg-surface-sub p-8 text-center sm:p-12"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold text-primary-600 sm:text-3xl">
          Appointment request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-balance text-[15px] leading-relaxed text-ink-muted">
          We'll call {submitted.ownerName} at {submitted.phone} within the
          hour to confirm {submitted.petName}'s {submitted.service.toLowerCase()}{" "}
          on {submitted.date} at {submitted.timeSlot}.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="tel:+911414000000" variant="outline" size="md">
            <Phone className="h-4 w-4" /> Call Us Instead
          </ButtonLink>
          <ButtonLink href="/" variant="primary" size="md">
            Return to Homepage
          </ButtonLink>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl border border-primary-600/8 bg-surface-sub p-6 sm:p-10">
      <StepIndicator steps={STEP_TITLES} currentStep={step} />

      <div className="relative mt-10 min-h-[320px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepComponent form={form} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-primary-600/8 pt-6">
        <Button
          type="button"
          variant="ghost"
          size="md"
          onClick={goBack}
          disabled={step === 0}
          className="disabled:invisible"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button type="button" variant="primary" size="md" onClick={goNext}>
          {isLastStep ? "Confirm Appointment" : "Continue"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
