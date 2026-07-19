import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import ScrollToTop from "@/components/shared/ScrollToTop";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { SkipLink } from "@/components/shared/SkipLink";
import { PageLoader } from "@/components/shared/PageLoader";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Doctors = lazy(() => import("@/pages/Doctors"));
const BookAppointment = lazy(() => import("@/pages/BookAppointment"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ErrorBoundary>
            <SkipLink />
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <FloatingWhatsApp />
          </ErrorBoundary>
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
