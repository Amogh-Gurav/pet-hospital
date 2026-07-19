import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  subject: z.enum(
    ["General Inquiry", "Appointment Question", "Billing", "Feedback", "Other"],
    { required_error: "Please select a subject" }
  ),
  message: z
    .string()
    .min(10, "Please add a few more details")
    .max(1000, "Please keep your message under 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
