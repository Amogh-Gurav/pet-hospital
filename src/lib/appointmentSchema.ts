import { z } from "zod";

export const petDetailsSchema = z.object({
  petName: z.string().min(2, "Please enter your pet's name"),
  species: z.enum(["Dog", "Cat", "Bird", "Rabbit", "Other"], {
    required_error: "Please select a species",
  }),
  breed: z.string().min(2, "Please enter a breed, or write 'Mixed'"),
  age: z
    .string()
    .min(1, "Please enter an approximate age")
    .refine((val) => !Number.isNaN(Number(val)), "Age must be a number"),
});

export const serviceDetailsSchema = z.object({
  service: z.enum(
    [
      "General Checkup",
      "Vaccination",
      "Surgery Consultation",
      "Dental Care",
      "Diagnostic Imaging",
      "Dermatology",
      "Emergency Visit",
    ],
    { required_error: "Please select a service" }
  ),
  doctor: z.enum(
    ["No Preference", "Dr. Aditya Bhanwar", "Dr. Kavya Rathore", "Dr. Ishaan Mehta", "Dr. Naina Choudhary", "Dr. Rohan Deshmukh", "Dr. Priya Sharma"],
    { required_error: "Please select a doctor" }
  ),
});

export const scheduleDetailsSchema = z.object({
  date: z.string().min(1, "Please choose a preferred date"),
  timeSlot: z.enum(
    ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"],
    { required_error: "Please choose a time slot" }
  ),
  notes: z.string().max(500, "Please keep notes under 500 characters").optional(),
});

export const ownerDetailsSchema = z.object({
  ownerName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
});

export const appointmentSchema = petDetailsSchema
  .merge(serviceDetailsSchema)
  .merge(scheduleDetailsSchema)
  .merge(ownerDetailsSchema);

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const STEP_FIELDS = [
  Object.keys(petDetailsSchema.shape),
  Object.keys(serviceDetailsSchema.shape),
  Object.keys(scheduleDetailsSchema.shape),
  Object.keys(ownerDetailsSchema.shape),
] as const;

export const STEP_TITLES = [
  "Pet Details",
  "Service & Doctor",
  "Preferred Schedule",
  "Your Contact Info",
];
