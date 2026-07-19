import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const DETAILS = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Plot 14, Vaishali Nagar Main Road", "Jaipur, Rajasthan 302021"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["General: +91 141 400 0000", "Emergency: +91 141 400 0001"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["OPD: Mon–Sun, 9 AM – 9 PM", "Emergency: 24/7, all days"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["care@bhanwarpethospital.in"],
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {DETAILS.map((detail, i) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-primary-600/8 bg-surface-sub p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
              <detail.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display font-semibold text-primary-600">
              {detail.title}
            </p>
            {detail.lines.map((line) => (
              <p key={line} className="mt-1 text-[15px] text-ink-muted">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="aspect-[16/10] overflow-hidden rounded-3xl border border-primary-600/8 shadow-soft"
      >
        <iframe
          title="Bhanwar Pet Hospital Location"
          className="h-full w-full"
          loading="lazy"
          src="https://www.google.com/maps?q=Vaishali+Nagar,Jaipur&output=embed"
        />
      </motion.div>
    </div>
  );
}
