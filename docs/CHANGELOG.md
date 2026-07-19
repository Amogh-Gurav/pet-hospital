# CHANGELOG — Bhanwar Pet Hospital Website

All notable changes to this project are documented in this file.

---

## [1.0.0] — 2026 · Initial Production Release

### Project Initialization

- Initialized Vite + React + TypeScript project with `@vitejs/plugin-react`
- Configured Tailwind CSS with PostCSS and Autoprefixer
- Established TypeScript configuration with strict mode
- Set up `@` path alias in both `vite.config.ts` and `tsconfig.json`
- Configured ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-plugin-jsx-a11y` for accessibility linting
- Installed all core dependencies: React Router DOM, Framer Motion, Lucide React, React Hook Form, Zod, react-helmet-async, clsx, tailwind-merge, class-variance-authority

---

### Planning & Design System

- Established brand color palette: Navy (`#0A2540`), Teal (`#0D9488`), Green (`#22C55E`), and surface/ink neutrals
- Configured complete Tailwind design token system in `tailwind.config.ts` including custom colors, fonts, shadows, border radii, letter spacings, keyframes, and animations
- Chosen typography stack: **Plus Jakarta Sans** (display/headings) + **Inter** (body)
- Defined three custom shadow levels: `shadow-soft`, `shadow-card`, `shadow-lift`
- Defined three custom CSS animations: `marquee`, `fade-up`, `pulse-ring`
- Set up Google Fonts preconnect links in `index.html` for performance
- Established custom easing curve `[0.16, 1, 0.3, 1]` (spring-like) as the global animation easing
- Created `src/lib/motion.ts` with centralized Framer Motion variants: `fadeUp`, `fadeIn`, `scaleIn`, `staggerChildren`

---

### Global Infrastructure

- Created `src/index.css` with global base styles: smooth scroll, antialiasing, heading defaults, `focus-visible` ring, `text-balance` utility, and `prefers-reduced-motion` media query
- Created `src/lib/utils.ts` with `cn()` helper combining `clsx` and `tailwind-merge`
- Implemented root `App.tsx` with full provider hierarchy: `HelmetProvider`, `MotionConfig reducedMotion="user"`, `BrowserRouter`, `ErrorBoundary`, `SkipLink`, `ScrollToTop`, `Suspense` with `PageLoader`, and `FloatingWhatsApp`
- Set up lazy loading for all 9 page components via `React.lazy()`
- Configured Vite build with `manualChunks` splitting into `react-vendor`, `motion-vendor`, and `form-vendor`
- Added SVG favicon (paw print logo) as inline data URI in `index.html`

---

### UI Component Library

- Built `Badge` component with three tone variants: `teal`, `green`, `slate`
- Built `Button` component with CVA (class-variance-authority) — 5 variants (primary, secondary, outline, ghost, emergency) × 3 sizes (sm, md, lg) — fully type-safe
- Built `ButtonLink` component: smart router-aware — renders as React Router `<Link>` for internal paths, native `<a>` for external/tel/mailto
- Built `SectionHeading` component with optional eyebrow, title, description, alignment, and light-mode support
- Built `PageHero` reusable inner-page hero with configurable tone, glow position, and compact mode
- Built `PageCTA` reusable closing CTA section for interior pages
- Built `FilterTabs<T>` generic tab bar component with ARIA tablist/tab roles
- Built `Reveal` scroll-triggered fade-up animation wrapper
- Built `FormField` labeled form input wrapper component

---

### Shared Utility Components

- Implemented `Seo.tsx` with `react-helmet-async` — per-page title, description, canonical, OpenGraph, Twitter Card tags
- Implemented `LocalBusinessSchema.tsx` — JSON-LD `VeterinaryCare` schema with address, phone, hours
- Implemented `ErrorBoundary.tsx` — class-based error boundary with friendly fallback UI and recovery CTAs
- Implemented `ScrollToTop.tsx` — resets window scroll on every route change
- Implemented `SkipLink.tsx` — keyboard-accessible "skip to main content" link
- Implemented `PageLoader.tsx` — animated spinner for Suspense fallback
- Implemented `FloatingWhatsApp.tsx` — fixed bottom-right button with pulse-ring animation and `whileHover`/`whileTap` micro-animations

---

### Layout Components

- Built `EmergencyBanner.tsx` — top-of-page strip with 24/7 emergency number, live status indicator (normal/busy mode), and animated ping dot
- Built `Navbar.tsx` — sticky scroll-aware navbar (transparent → frosted glass on scroll), desktop nav with active-link highlighting, phone number, Book Appointment CTA, animated mobile drawer using `AnimatePresence`, keyboard Escape support, and auto-close on route change
- Built `Footer.tsx` — 4-column layout with branding, sitemap links, patient center links, and full contact details; social links (Instagram, Facebook); dynamic copyright year

---

### Homepage

- Built `Hero.tsx` — split-layout hero with animated entry (Framer Motion), floating credential card, Badge component, primary and emergency CTA buttons, and three trust stats (12+ years, 18,000+ pets, 4.9 rating)
- Built `WhyChooseUs.tsx` — 4-point differentiator grid
- Built `ServicesPreview.tsx` — preview card grid linking to Services page
- Built `DoctorsPreview.tsx` — 3-doctor preview cards with Book CTA
- Built `Stats.tsx` — animated number counter section (18,000+ pets, 12 years, 24/7, 98%) using Framer Motion `animate()` and `useInView`
- Built `Testimonials.tsx` — 3-card testimonial grid with quote icon, 5-star rating, blockquote, and figcaption
- Built `WellnessCTA.tsx` — mid-page wellness CTA section
- Built `GalleryPreview.tsx` — 6-image preview grid with link to full gallery
- Built `FAQPreview.tsx` — preview of 4 top FAQ questions linking to full FAQ page
- Built `ContactCTA.tsx` — contact section with map embed, address, hours, and phone

---

### About Page

- Built `AboutHero.tsx` — page hero using `PageHero` shared component
- Built `ClinicalPhilosophy.tsx` — clinical values and approach section with icon grid
- Built `OurJourney.tsx` — timeline-style story of the hospital's history and growth
- Built `InfrastructureShowcase.tsx` — facility and equipment highlights section
- Composed `About.tsx` page with `DoctorsPreview` and `PageCTA` as closing sections

---

### Services Page

- Built `ServicesHero.tsx` — services page hero
- Built `ServicesMatrix.tsx` — 3-pillar layout (Advanced Surgery, Internal Medicine, Preventive Care) each with icon, description, and 5-item checklist grid; scroll-triggered stagger animation
- Built `ServiceProcess.tsx` — 4-step patient journey process section
- Composed `Services.tsx` page with `PageCTA` closing section

---

### Doctors Page

- Built `DoctorsDirectoryHero.tsx` — doctors directory page hero
- Built `DoctorsDirectory.tsx` — 8-specialist filterable directory with department tabs (Surgery, Internal Medicine, Diagnostic Imaging, Dermatology, Dentistry); animated card layout transitions using `AnimatePresence mode="popLayout"`; hover scale effect on doctor portraits; individual Book CTA on each card
- Composed `Doctors.tsx` page with `PageCTA` closing section

---

### Appointment Booking Page

- Defined `appointmentSchema.ts` — 4 Zod sub-schemas merged into one unified schema; `STEP_FIELDS` and `STEP_TITLES` constants
- Built `PetDetailsStep.tsx` — pet name, species (enum select), breed, age
- Built `ServiceDetailsStep.tsx` — service type (7 options), doctor preference (6 named doctors + No Preference)
- Built `ScheduleDetailsStep.tsx` — date picker, time slot (6 slots), optional notes
- Built `OwnerDetailsStep.tsx` — owner name, Indian mobile number, email
- Built `StepIndicator.tsx` — visual step progress indicator with completed/active/pending states
- Built `AppointmentForm.tsx` — wizard controller with per-step field validation via `form.trigger()`, animated step transitions (slide left/right), personalized success confirmation state
- Built `BookingHero.tsx` — booking page hero
- Composed `BookAppointment.tsx` page

---

### Gallery Page

- Built `GalleryHero.tsx` — gallery page hero
- Built `GalleryFull.tsx` — 9-image masonry grid with category filter tabs (Surgery, Diagnostics, Recovery Wards, Reception & Grounds); animated filter transitions via `AnimatePresence mode="popLayout"`; full-screen lightbox with keyboard navigation (Arrow keys + Escape), focus management (auto-focus close button, return focus to trigger), ARIA dialog attributes, and previous/next navigation buttons
- Composed `Gallery.tsx` page

---

### FAQ Page

- Built `FAQHero.tsx` — FAQ page hero
- Built `FAQFull.tsx` — full FAQ page with real-time search input, category filter tabs (Appointments, Emergency Care, Pricing & Payments, Pet Wellness), animated accordion items with ARIA `aria-expanded`, height-animated open/close via Framer Motion `AnimatePresence`, empty state when no results match, 10 fully written FAQ entries
- Built `FAQPreview.tsx` — 4-item preview for homepage with link to full FAQ
- Composed `FAQ.tsx` page

---

### Contact Page

- Built `ContactHero.tsx` — contact page hero
- Built `ContactInfo.tsx` — address, phone, email, hours, embedded map iframe
- Defined `contactSchema.ts` — Zod schema for contact form
- Built `ContactForm.tsx` — 5-field form (name, phone, email, subject dropdown, message) with Zod validation, mock success state
- Composed `Contact.tsx` page

---

### 404 Page

- Built `NotFound.tsx` — branded 404 page with animated PawPrint icon, large "404" display, friendly copy, recovery CTAs (Back to Homepage + Call Hospital)
- Configured as catch-all route (`path="*"`) in React Router
- SEO: `noindex` meta tag applied

---

### SEO Improvements

- Added per-page unique `<title>` and `<meta name="description">` for all 9 pages
- Implemented OpenGraph and Twitter Card tags on all pages via `Seo.tsx`
- Implemented `<link rel="canonical">` on all pages
- Added `LocalBusinessSchema` JSON-LD structured data on homepage
- Set `noindex` on 404 page
- Added `<meta name="robots" content="index, follow">` in root HTML
- Added `<meta name="theme-color">` for mobile browser chrome
- Configured favicon as inline SVG data URI

---

### Performance Optimization

- Configured Vite `manualChunks` to split `react-vendor`, `motion-vendor`, and `form-vendor` into separate cacheable bundles
- Implemented `React.lazy()` and `Suspense` for all 9 pages (route-level code splitting)
- Set `loading="eager"` and `fetchPriority="high"` on hero image
- Set `loading="lazy"` and `decoding="async"` on all below-fold images
- Added `<link rel="preconnect">` for Google Fonts in HTML
- Disabled source maps in production build

---

### Responsive Optimization

- Verified all 9 pages at 375px, 640px, 768px, 1024px, 1280px+ breakpoints
- Navbar: hamburger menu on mobile/tablet, full links on desktop (lg+)
- Hero: stacked single column on mobile, 50/50 grid on desktop
- Doctor cards: 1 → 2 → 4 columns
- Gallery: 2 → 4 columns with masonry row spans
- Stats counter: 2 → 4 columns
- Services matrix: stacked → side-by-side on desktop
- Footer: 1 → 2 → 4 columns
- All CTAs: stacked column on mobile → inline row on sm+

---

### Accessibility Improvements

- Added `<SkipLink>` component for keyboard users to bypass navigation
- Applied `focus-visible` ring to all interactive elements globally
- Added `aria-label` to all icon-only buttons (hamburger toggle, gallery nav, lightbox close)
- Added `aria-expanded` to FAQ accordion buttons and mobile menu toggle
- Added `aria-controls="mobile-nav"` on mobile menu button
- Added `role="dialog"` and `aria-modal="true"` to gallery lightbox
- Added `role="tablist"` and `role="tab"` with `aria-selected` to FilterTabs
- Implemented focus management in gallery lightbox (focus trap on open, restore on close)
- Added keyboard navigation: Escape closes mobile nav and lightbox; Arrow keys navigate lightbox images
- Used semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<figure>`, `<figcaption>`, `<blockquote>`
- All images have meaningful `alt` text

---

### Production Readiness

- Disabled source maps in production build (`sourcemap: false`)
- Verified TypeScript compiles with zero errors (`tsc -b`)
- Verified ESLint passes with zero errors
- Verified all routes render without runtime errors
- Confirmed `prefers-reduced-motion` support via both `MotionConfig` and CSS media query
- Confirmed Vercel deployment compatibility (standard Vite output, SPA routing note documented)
- All placeholder items documented (WhatsApp number, emergency status feed, photography, testimonials, social links)

---

*Generated: 2026 · Version 1.0.0*
