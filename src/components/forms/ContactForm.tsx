import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/forms/FormField";
import { cn, inputClasses } from "@/lib/utils";
import { contactSchema, ContactFormValues } from "@/lib/contactSchema";

const SUBJECTS = [
  "General Inquiry",
  "Appointment Question",
  "Billing",
  "Feedback",
  "Other",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center rounded-3xl border border-primary-600/8 bg-surface-sub p-10 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-primary-600">
          Message sent
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-balance text-[15px] leading-relaxed text-ink-muted">
          Thanks for reaching out — our team typically replies within one
          business hour.
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="mt-7"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-primary-600/8 bg-surface-sub p-6 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            placeholder="e.g. Rakesh Sharma"
            className={inputClasses(!!errors.name)}
            {...register("name")}
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

        <FormField
          label="Email Address"
          htmlFor="email"
          error={errors.email?.message}
          className="sm:col-span-2"
        >
          <input
            id="email"
            type="email"
            placeholder="e.g. rakesh@example.com"
            className={inputClasses(!!errors.email)}
            {...register("email")}
          />
        </FormField>

        <FormField
          label="Subject"
          htmlFor="subject"
          error={errors.subject?.message}
          className="sm:col-span-2"
        >
          <select
            id="subject"
            className={inputClasses(!!errors.subject)}
            defaultValue=""
            {...register("subject")}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help?"
            className={cn(inputClasses(!!errors.message), "h-auto resize-none py-3")}
            {...register("message")}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="mt-8 w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
