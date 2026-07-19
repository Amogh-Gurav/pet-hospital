import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Stethoscope, CalendarCheck } from "lucide-react";
import { FilterTabs } from "@/components/shared/FilterTabs";
import { ButtonLink } from "@/components/ui/Button";

type Department =
  | "All"
  | "Surgery"
  | "Internal Medicine"
  | "Diagnostic Imaging"
  | "Dermatology"
  | "Dentistry";

interface Doctor {
  name: string;
  department: Exclude<Department, "All">;
  role: string;
  credentials: string;
  experience: string;
  photo: string;
}

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Aditya Bhanwar",
    department: "Surgery",
    role: "Chief Veterinary Surgeon",
    credentials: "BVSc & AH, MVSc (Surgery)",
    experience: "16 years experience",
    photo:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Kavya Rathore",
    department: "Internal Medicine",
    role: "Internal Medicine Specialist",
    credentials: "DVM, Cert. Small Animal Cardiology",
    experience: "11 years experience",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Ishaan Mehta",
    department: "Diagnostic Imaging",
    role: "Diagnostic Imaging Lead",
    credentials: "BVSc & AH, Cert. Veterinary Radiology",
    experience: "9 years experience",
    photo:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Naina Choudhary",
    department: "Surgery",
    role: "Orthopedic Surgeon",
    credentials: "MVSc (Surgery & Radiology)",
    experience: "8 years experience",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Rohan Deshmukh",
    department: "Dermatology",
    role: "Veterinary Dermatologist",
    credentials: "BVSc & AH, Cert. Dermatology",
    experience: "7 years experience",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Priya Sharma",
    department: "Dentistry",
    role: "Veterinary Dental Surgeon",
    credentials: "BVSc & AH, Cert. Veterinary Dentistry",
    experience: "6 years experience",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Arjun Rathi",
    department: "Internal Medicine",
    role: "Renal & Endocrine Specialist",
    credentials: "DVM, MVSc (Medicine)",
    experience: "10 years experience",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Simran Kaur",
    department: "Diagnostic Imaging",
    role: "Ultrasonography Specialist",
    credentials: "BVSc & AH, Cert. Diagnostic Ultrasound",
    experience: "5 years experience",
    photo:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop",
  },
];

const DEPARTMENTS: Department[] = [
  "All",
  "Surgery",
  "Internal Medicine",
  "Diagnostic Imaging",
  "Dermatology",
  "Dentistry",
];

export function DoctorsDirectory() {
  const [active, setActive] = useState<Department>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? DOCTORS
        : DOCTORS.filter((doctor) => doctor.department === active),
    [active]
  );

  return (
    <section id="doctors-directory" className="bg-surface-main py-20 sm:py-28">
      <div className="container">
        <FilterTabs
          label="Filter doctors by department"
          options={DEPARTMENTS}
          active={active}
          onChange={setActive}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((doctor, i) => (
              <motion.div
                layout
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary-600/8 bg-surface-sub"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.photo}
                    alt={`Portrait of ${doctor.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-tighter text-secondary-700">
                    <Stethoscope className="h-3 w-3" />
                    {doctor.department}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-primary-600">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink-main">
                    {doctor.role}
                  </p>
                  <p className="mt-2 flex items-start gap-1.5 text-[13px] leading-relaxed text-ink-muted">
                    <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {doctor.credentials}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-ink-muted">
                    {doctor.experience}
                  </p>
                  <ButtonLink
                    href="/book-appointment"
                    variant="outline"
                    size="sm"
                    className="mt-5 w-full"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" /> Book with{" "}
                    {doctor.name.split(" ")[1]}
                  </ButtonLink>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
