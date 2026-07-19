import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PawPrint, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-primary-600/8 bg-white/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex h-20 items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white transition-transform group-hover:-rotate-6">
            <PawPrint className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-bold leading-none text-primary-600">
            Bhanwar Pet
            <span className="block text-[11px] font-semibold tracking-tighter text-secondary-600">
              HOSPITAL &middot; JAIPUR
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "font-display text-[14.5px] font-medium transition-colors hover:text-secondary-600",
                    isActive ? "text-secondary-600" : "text-ink-main/80"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+911414000000"
            className="flex items-center gap-2 font-display text-sm font-semibold text-primary-600"
          >
            <Phone className="h-4 w-4 text-secondary-600" aria-hidden="true" />
            +91 141 400 0000
          </a>
          <ButtonLink href="/book-appointment" variant="primary" size="md">
            Book Appointment
          </ButtonLink>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-600 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-primary-600/8 bg-white lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-lg px-3 py-3 font-display text-[15px] font-medium hover:bg-surface-sub",
                        isActive
                          ? "bg-surface-sub text-secondary-600"
                          : "text-ink-main"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3 px-3">
                <ButtonLink href="tel:+911414000000" variant="outline" size="md">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call Hospital
                </ButtonLink>
                <ButtonLink href="/book-appointment" variant="primary" size="md">
                  Book Appointment
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
