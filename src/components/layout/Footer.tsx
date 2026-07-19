import { Link } from "react-router-dom";
import { PawPrint, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const SITEMAP = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
];

const PATIENT_CENTER = [
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Pre-Registration", href: "/book-appointment" },
  { label: "FAQs", href: "/faq" },
  { label: "Emergency Care", href: "tel:+911414000001" },
];

export function Footer() {
  return (
    <footer className="bg-primary-700 pt-16 text-white/70">
      <div className="container grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              Bhanwar Pet Hospital
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Advanced veterinary medicine and 24/7 emergency care for Jaipur's
            pet families.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com/bhanwarpethospital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary-600"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/bhanwarpethospital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary-600"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-tighter text-white">
            Sitemap
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {SITEMAP.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-tighter text-white">
            Patient Center
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {PATIENT_CENTER.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-tighter text-white">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
              Vaishali Nagar, Jaipur, Rajasthan 302021
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-secondary-400" />
              +91 141 400 0000
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-secondary-400" />
              care@bhanwarpethospital.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Bhanwar Pet Hospital. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
