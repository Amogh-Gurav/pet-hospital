import { motion } from "framer-motion";
import { PawPrint, Home as HomeIcon, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/shared/Seo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="relative overflow-hidden bg-surface-sub py-24 sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-50 blur-3xl" />
          <div className="container relative max-w-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-600 text-white">
                <PawPrint className="h-9 w-9" strokeWidth={2} />
              </span>
              <p className="mt-8 font-display text-7xl font-extrabold tracking-tightest text-primary-600 sm:text-8xl">
                404
              </p>
              <h1 className="mt-3 text-balance font-display text-2xl font-bold text-primary-600 sm:text-3xl">
                Looks like this page wandered off.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-balance text-[15px] leading-relaxed text-ink-muted">
                The page you're looking for doesn't exist or may have
                moved. Let's get you back on track.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/" variant="primary" size="lg">
                  <HomeIcon className="h-4 w-4" /> Back to Homepage
                </ButtonLink>
                <ButtonLink href="tel:+911414000000" variant="outline" size="lg">
                  <Phone className="h-4 w-4" /> Call the Hospital
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
