# PROJECT HANDOFF — Bhanwar Pet Hospital Website

> **Purpose:** This document enables any developer or new Claude session to immediately understand the project, continue work, and make decisions consistent with the established architecture and design intent.

---

## Project Overview

A production-ready React/TypeScript/Vite website for **Bhanwar Pet Hospital**, a specialist veterinary clinic in Jaipur, India. The site is a conversion-focused marketing website with 9 fully implemented pages, a 4-step appointment booking wizard, a gallery lightbox, searchable FAQs, and comprehensive SEO/accessibility.

**Live URL target:** `https://www.bhanwarpethospital.in`  
**Project root:** `d:/TEMPLATES/vet clinic/bhanwar-pet-hospital/`

---

## Business Overview

Bhanwar Pet Hospital is positioned as Jaipur's most clinically advanced veterinary institution — **not** a general pet shop. The site's design deliberately signals medical credibility (split hero with floating credential card, ISO-grade O.R. callouts, specialist credentials, department-based filtering) to attract high-value pet owners who prioritize quality over price.

| Detail | Value |
|---|---|
| Phone | +91 141 400 0000 |
| Emergency | +91 141 400 0001 |
| Email | care@bhanwarpethospital.in |
| Address | Plot 14, Vaishali Nagar Main Road, Jaipur, Rajasthan 302021 |
| WhatsApp | +91 99999 99999 *(placeholder — replace before launch)* |
| Social | instagram.com/bhanwarpethospital · facebook.com/bhanwarpethospital |

---

## Project Goals

1. Establish clinical credibility and trust with Jaipur's high-value pet owners
2. Reduce inbound phone load by routing appointment requests through the online booking form
3. Surface 24/7 emergency access on every single page
4. Provide a fully responsive, accessible, high-performance experience
5. Be deployment-ready on Vercel with zero configuration changes

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | React 18.3.1 | Concurrent features, Suspense |
| Language | TypeScript 5.5.4 | Strict mode |
| Build Tool | Vite 5.4.3 | HMR in dev, manual chunks in prod |
| Routing | React Router DOM 6.26.0 | Client-side SPA routing |
| Styling | Tailwind CSS 3.4.10 | Custom token design system |
| Animation | Framer Motion 11.5.4 | All page/section transitions |
| Forms | React Hook Form 7.53.0 | `mode: "onTouched"` |
| Validation | Zod 3.23.8 | Schema-first validation |
| SEO | react-helmet-async 2.0.5 | Per-page meta + OG + Twitter |
| Icons | lucide-react 0.446.0 | Tree-shaken icon set |
| Utilities | clsx + tailwind-merge | `cn()` helper in `lib/utils.ts` |
| CVA | class-variance-authority | Button variants |
| Fonts | Plus Jakarta Sans + Inter | Loaded in `index.html` |

---

## Folder Structure

```
src/
├── App.tsx                         # Root: providers + lazy routes
├── main.tsx                        # React DOM entry point
├── index.css                       # Global Tailwind + base styles
│
├── pages/                          # One file per route (9 pages)
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Doctors.tsx
│   ├── BookAppointment.tsx
│   ├── Gallery.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── components/
│   ├── layout/                     # Sitewide chrome
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── EmergencyBanner.tsx
│   │
│   ├── sections/                   # Page-specific content blocks
│   │   ├── Hero.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServicesPreview.tsx / ServicesMatrix.tsx / ServicesHero.tsx / ServiceProcess.tsx
│   │   ├── DoctorsPreview.tsx / DoctorsDirectory.tsx / DoctorsDirectoryHero.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── WellnessCTA.tsx
│   │   ├── GalleryPreview.tsx / GalleryFull.tsx / GalleryHero.tsx
│   │   ├── FAQPreview.tsx / FAQFull.tsx / FAQHero.tsx
│   │   ├── ContactCTA.tsx / ContactInfo.tsx / ContactHero.tsx
│   │   ├── AboutHero.tsx / ClinicalPhilosophy.tsx / OurJourney.tsx / InfrastructureShowcase.tsx
│   │   └── BookingHero.tsx
│   │
│   ├── forms/                      # Appointment + contact forms
│   │   ├── AppointmentForm.tsx     # Multi-step wizard controller
│   │   ├── ContactForm.tsx
│   │   ├── FormField.tsx           # Labeled input wrapper
│   │   ├── StepIndicator.tsx
│   │   └── steps/
│   │       ├── PetDetailsStep.tsx
│   │       ├── ServiceDetailsStep.tsx
│   │       ├── ScheduleDetailsStep.tsx
│   │       └── OwnerDetailsStep.tsx
│   │
│   ├── shared/                     # Globally reusable utilities
│   │   ├── Seo.tsx                 # Per-page Helmet tags
│   │   ├── LocalBusinessSchema.tsx # JSON-LD schema.org
│   │   ├── PageHero.tsx            # Reusable inner-page hero
│   │   ├── PageCTA.tsx             # Reusable interior CTA section
│   │   ├── SectionHeading.tsx      # Section title pattern
│   │   ├── FilterTabs.tsx          # Generic filterable tab bar
│   │   ├── Reveal.tsx              # Scroll-triggered fade-up wrapper
│   │   ├── FloatingWhatsApp.tsx    # Fixed bottom-right WhatsApp button
│   │   ├── ScrollToTop.tsx         # Resets scroll on route change
│   │   ├── SkipLink.tsx            # Accessibility skip nav link
│   │   ├── PageLoader.tsx          # Suspense fallback spinner
│   │   └── ErrorBoundary.tsx       # Class-based error boundary
│   │
│   └── ui/                         # Primitive design components
│       ├── Button.tsx              # Button + ButtonLink with CVA variants
│       └── Badge.tsx               # Tonal pill badge
│
└── lib/
    ├── appointmentSchema.ts        # Zod schemas for 4-step form
    ├── contactSchema.ts            # Zod schema for contact form
    ├── motion.ts                   # Shared Framer Motion variants/easings
    └── utils.ts                    # cn() utility (clsx + tailwind-merge)
```

---

## Routing Structure

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home` | Full homepage with all preview sections |
| `/about` | `About` | Hospital story, philosophy, team |
| `/services` | `Services` | Three-pillar services matrix + process |
| `/doctors` | `Doctors` | Filterable specialist directory |
| `/book-appointment` | `BookAppointment` | 4-step appointment wizard |
| `/gallery` | `Gallery` | Filterable masonry gallery + lightbox |
| `/faq` | `FAQ` | Searchable + filterable FAQ accordion |
| `/contact` | `Contact` | Map, info, validated contact form |
| `*` (catch-all) | `NotFound` | Branded 404 with recovery CTAs |

All routes are **lazy-loaded** via `React.lazy()` and wrapped in `<Suspense fallback={<PageLoader />}>`.

---

## Component Architecture

### Provider Hierarchy (`App.tsx`)
```
<HelmetProvider>            ← react-helmet-async context
  <MotionConfig reducedMotion="user">  ← Respects prefers-reduced-motion
    <BrowserRouter>
      <ErrorBoundary>       ← Class-based error boundary
        <SkipLink />        ← Accessibility: skip to main content
        <ScrollToTop />     ← Resets scroll on navigation
        <Suspense>
          <Routes>          ← 9 lazy-loaded pages
        </Suspense>
        <FloatingWhatsApp /> ← Fixed position, always visible
      </ErrorBoundary>
    </BrowserRouter>
  </MotionConfig>
</HelmetProvider>
```

### Page Component Structure (consistent pattern)
```tsx
<>
  <Seo title="..." description="..." path="..." />
  <EmergencyBanner />   ← Always first, above Navbar
  <Navbar />
  <main id="main-content" tabIndex={-1}>
    {/* Page sections */}
  </main>
  <Footer />
</>
```

---

## Shared Components

| Component | Purpose | Props |
|---|---|---|
| `Seo` | Injects `<title>`, `<meta>`, OG, Twitter tags | `title`, `description`, `path`, `image?`, `noindex?` |
| `LocalBusinessSchema` | Injects JSON-LD VeterinaryCare schema | none (data is static) |
| `PageHero` | Hero section for interior pages | `eyebrow`, `title`, `description`, `tone?`, `glow?`, `compact?` |
| `PageCTA` | Bottom CTA section for interior pages | `title`, `description` |
| `SectionHeading` | `eyebrow + h2 + description` pattern | `eyebrow?`, `title`, `description?`, `align?`, `light?` |
| `FilterTabs<T>` | Generic filterable tab row | `options`, `active`, `onChange`, `label` |
| `Reveal` | Scroll-triggered fade-up animation wrapper | `children`, `delay?`, `duration?` |
| `FloatingWhatsApp` | Fixed WhatsApp button with pulse ring | none |
| `ScrollToTop` | Scroll reset on route change | none |
| `SkipLink` | "Skip to main content" accessibility link | none |
| `PageLoader` | Suspense loading spinner | none |
| `ErrorBoundary` | React error boundary with fallback UI | `children` |

---

## Pages Completed

| Page | Status | Sections |
|---|---|---|
| Home | ✅ Complete | EmergencyBanner, Navbar, Hero, WhyChooseUs, ServicesPreview, DoctorsPreview, Stats, Testimonials, WellnessCTA, GalleryPreview, FAQPreview, ContactCTA, Footer |
| About | ✅ Complete | EmergencyBanner, Navbar, AboutHero, ClinicalPhilosophy, OurJourney, InfrastructureShowcase, DoctorsPreview, PageCTA, Footer |
| Services | ✅ Complete | EmergencyBanner, Navbar, ServicesHero, ServicesMatrix, ServiceProcess, PageCTA, Footer |
| Doctors | ✅ Complete | EmergencyBanner, Navbar, DoctorsDirectoryHero, DoctorsDirectory, PageCTA, Footer |
| Book Appointment | ✅ Complete | EmergencyBanner, Navbar, BookingHero, AppointmentForm (4-step wizard), Footer |
| Gallery | ✅ Complete | EmergencyBanner, Navbar, GalleryHero, GalleryFull (lightbox), Footer |
| FAQ | ✅ Complete | EmergencyBanner, Navbar, FAQHero, FAQFull (search + filter), Footer |
| Contact | ✅ Complete | EmergencyBanner, Navbar, ContactHero, ContactInfo, ContactForm, Footer |
| 404 Not Found | ✅ Complete | EmergencyBanner, Navbar, branded 404 section, Footer |

---

## Features Implemented

- ✅ Sticky scroll-aware Navbar (transparent → frosted glass with shadow on scroll)
- ✅ Animated mobile navigation drawer (AnimatePresence height accordion)
- ✅ Emergency banner with live status indicator (normal/busy)
- ✅ 4-step appointment booking wizard with per-step Zod validation and animated step transitions
- ✅ Contact form with Zod validation and mock success state
- ✅ Gallery with category filter tabs, masonry grid, and keyboard-navigable lightbox
- ✅ FAQ accordion with real-time search and category filtering
- ✅ Doctors directory with department filter tabs and animated card layout transitions
- ✅ Animated scroll-triggered counter in Stats section
- ✅ Floating WhatsApp button with pulse ring animation
- ✅ React Error Boundary for graceful failure handling
- ✅ `prefers-reduced-motion` respected via `MotionConfig reducedMotion="user"` + CSS media query
- ✅ Focus management in gallery lightbox (returns focus to trigger on close)
- ✅ Keyboard navigation: Escape to close, Arrow keys to navigate lightbox
- ✅ `aria-expanded` on FAQ and mobile menu toggle buttons
- ✅ `role="dialog"` and `aria-modal` on gallery lightbox
- ✅ `role="tablist"` and `aria-selected` on FilterTabs
- ✅ `aria-label` on all icon-only buttons

---

## Forms

### Appointment Form (`AppointmentForm.tsx`)
- **Type:** Multi-step wizard (4 steps)
- **Controller:** `react-hook-form` with `zodResolver`
- **Mode:** `"onTouched"` — validates each field when blurred
- **Steps and fields:**

| Step | Component | Fields |
|---|---|---|
| 1 — Pet Details | `PetDetailsStep` | `petName`, `species`, `breed`, `age` |
| 2 — Service & Doctor | `ServiceDetailsStep` | `service`, `doctor` |
| 3 — Preferred Schedule | `ScheduleDetailsStep` | `date`, `timeSlot`, `notes` |
| 4 — Your Contact Info | `OwnerDetailsStep` | `ownerName`, `phone`, `email` |

- **Step transition animation:** Slide left/right via Framer Motion `AnimatePresence mode="wait"`
- **Success state:** Inline confirmation with personalised summary (owner name, pet name, service, date, time)

### Contact Form (`ContactForm.tsx`)
- **Fields:** `name`, `phone`, `email`, `subject` (dropdown), `message`
- **Success state:** Inline confirmation card

---

## Validation

All validation is Zod schema-first, defined in `src/lib/`:

```
appointmentSchema.ts   → petDetailsSchema | serviceDetailsSchema | scheduleDetailsSchema | ownerDetailsSchema
contactSchema.ts       → contactSchema
```

Key validation rules:
- Phone: `/^[6-9]\d{9}$/` — Indian mobile number format (starts with 6–9, 10 digits)
- Email: `z.string().email()`
- Age: Must be a number string
- Notes: Max 500 characters (optional)
- Message: Min 10, max 1000 characters

---

## SEO

### Per-page SEO (`Seo.tsx`)
Each page renders a `<Seo>` component that injects via `react-helmet-async`:
- `<title>` — `"Page Title | Bhanwar Pet Hospital"`
- `<meta name="description">`
- `<link rel="canonical">`
- Full OpenGraph tags (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- `noindex/nofollow` on the 404 page

### Root HTML (`index.html`)
- `<meta name="robots" content="index, follow">`
- `<meta name="theme-color" content="#0A2540">`
- `<meta name="format-detection" content="telephone=no">`
- SVG favicon (inline data URI — paw print logo)
- Google Fonts preconnect links

### Structured Data (`LocalBusinessSchema.tsx`)
- Injected on the homepage only
- Schema type: `VeterinaryCare`
- Includes address, telephone, price range, and 24/7 opening hours

---

## Accessibility

| Feature | Implementation |
|---|---|
| Skip navigation | `SkipLink` component — hidden until focused |
| Focus visible | Custom ring style in `index.css` using `focus-visible` |
| ARIA labels | All icon-only buttons have descriptive `aria-label` |
| ARIA expanded | Mobile nav toggle and FAQ items |
| ARIA modal | Gallery lightbox (`role="dialog"`, `aria-modal="true"`) |
| Tab roles | FilterTabs uses `role="tablist"` and `role="tab"` |
| Focus management | Gallery lightbox auto-focuses close button on open; returns focus on close |
| Keyboard nav | Escape closes mobile menu and lightbox; Arrow keys navigate lightbox |
| Reduced motion | `MotionConfig reducedMotion="user"` + CSS `prefers-reduced-motion` |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<figure>`, `<figcaption>`, `<blockquote>` |
| Alt text | All images have descriptive `alt` attributes |

---

## Responsive Design

The layout is **mobile-first** using Tailwind CSS breakpoints:

| Breakpoint | Prefix | Width |
|---|---|---|
| Default (mobile) | none | < 640px |
| Small | `sm:` | ≥ 640px |
| Large | `lg:` | ≥ 1024px |
| 2XL (max container) | `2xl:` | 1280px max |

- Navbar collapses to hamburger menu below `lg:` (1024px)
- Homepage hero switches from single column to 2-column grid at `lg:`
- Doctor cards: 1 → 2 → 4 columns (mobile → sm → lg)
- Gallery grid: 2 → 4 columns (mobile → sm)
- Stats counter: 2 → 4 columns (mobile → lg)
- Footer: 1 → 2 → 4 columns (mobile → sm → lg)

---

## Animations

All animations use **Framer Motion**. Animation variants are centralized in `src/lib/motion.ts`:

| Variant | Effect |
|---|---|
| `fadeUp` | Opacity 0→1, Y 20→0 |
| `fadeIn` | Opacity 0→1 |
| `scaleIn` | Opacity 0→1, Scale 0.96→1 |
| `staggerChildren()` | Container that staggers child animations |

Custom easing: `EASE_OUT = [0.16, 1, 0.3, 1]` (spring-like cubic-bezier)

**Global animation settings:**
- `MotionConfig reducedMotion="user"` — disables all animations for users with `prefers-reduced-motion: reduce`
- `viewport={{ once: true, margin: "-80px" }}` — scroll-triggered animations fire once and start slightly before entering view

**Tailwind-defined animations:**
- `animate-marquee` — horizontal marquee (unused in final build but defined)
- `animate-fade-up` — CSS fade-up (28s linear)
- `animate-pulse-ring` — WhatsApp button pulsing ring

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary.600` | `#0A2540` | Main navy — headings, CTA buttons, Navbar |
| `primary.700` | `#081D33` | Footer background |
| `primary.50` | `#EAF0F6` | Hover background for ghost buttons |
| `secondary.600` | `#0D9488` | Teal — active links, badges, section eyebrows |
| `secondary.400` | `#14B8A9` | Lighter teal accents |
| `secondary.50` | `#E6F6F4` | Teal badge backgrounds |
| `accent.600` | `#22C55E` | Green — CTAs, rating stars, success states |
| `accent.50` | `#E9FBF0` | Green badge backgrounds |
| `surface.main` | `#FFFFFF` | Page backgrounds |
| `surface.sub` | `#F8FAFC` | Section alternate backgrounds |
| `ink.main` | `#0F172A` | Primary body text |
| `ink.muted` | `#475569` | Secondary/supporting text |

---

## Typography

| Token | Font Family | Usage |
|---|---|---|
| `font-display` | Plus Jakarta Sans | Headings, nav, labels, buttons |
| `font-body` | Inter | Body copy, form inputs, descriptive text |

**Key type scales:**
- Hero H1: `text-4xl sm:text-5xl lg:text-6xl font-extrabold`
- Section H2: `text-3xl sm:text-4xl font-bold`
- Card H3: `text-lg font-bold`
- Body: `text-base` / `text-[15px]`
- Caption/Meta: `text-sm` / `text-xs`

---

## Icons

All icons come from **Lucide React** (v0.446.0). Key icons used:

| Icon | Context |
|---|---|
| `PawPrint` | Navbar logo, 404 page, PageLoader |
| `Phone` | Navbar, Footer, CTAs |
| `Siren` | Emergency banner |
| `Menu`, `X` | Mobile nav toggle |
| `ArrowRight`, `ArrowLeft` | CTA buttons, form navigation |
| `CheckCircle2` | Appointment success state |
| `ShieldCheck` | Hero credential card |
| `Stethoscope` | Doctor department badge |
| `GraduationCap` | Doctor credentials display |
| `CalendarCheck` | Book button in doctor cards |
| `Star` | Rating stars (Hero + Testimonials) |
| `Quote` | Testimonial cards |
| `Scissors`, `HeartPulse`, `ShieldPlus` | Services pillar icons |
| `Check` | Services checklist items |
| `Plus` | FAQ accordion toggle |
| `Search` | FAQ search input |
| `Expand` | Gallery hover overlay |
| `ChevronLeft`, `ChevronRight` | Lightbox navigation |
| `MessageCircle` | WhatsApp floating button |
| `Instagram`, `Facebook` | Footer social links |
| `MapPin`, `Mail` | Footer contact info |

---

## Packages Used

| Package | Version | Purpose |
|---|---|---|
| `react` | 18.3.1 | UI library |
| `react-dom` | 18.3.1 | DOM rendering |
| `react-router-dom` | 6.26.0 | SPA routing |
| `framer-motion` | 11.5.4 | Animations and transitions |
| `lucide-react` | 0.446.0 | Icon set |
| `clsx` | 2.1.1 | Conditional class names |
| `tailwind-merge` | 2.5.2 | Resolve Tailwind class conflicts |
| `class-variance-authority` | 0.7.0 | Typed component variants (Button) |
| `react-hook-form` | 7.53.0 | Form state management |
| `@hookform/resolvers` | 3.9.0 | Zod adapter for RHF |
| `zod` | 3.23.8 | Schema validation |
| `react-helmet-async` | 2.0.5 | Per-page `<head>` management |

---

## Development Decisions

1. **CVA for Button variants** — Using `class-variance-authority` keeps all button styles in a single type-safe definition (`Button.tsx`), eliminating style drift across 20+ button usages.

2. **`ButtonLink` smart routing** — A single `ButtonLink` component detects internal paths (`href.startsWith("/")`) and renders as a React Router `<Link>` (no full page reload) or a native `<a>` for tel:, mailto:, and external URLs.

3. **Zod schema-first forms** — Schemas live in `lib/` (not inside components), making them independently testable and reusable across form and API layers.

4. **`motion.ts` centralization** — All Framer Motion variant objects and easings are centralized in `lib/motion.ts` so a design-token change to animation curves propagates everywhere.

5. **`Reveal` wrapper component** — Rather than repeating `initial/whileInView/viewport` props on every animated div, a `<Reveal>` component encapsulates the pattern with optional `delay` and `duration` overrides.

6. **Manual chunk splitting** — Vite's `manualChunks` in `vite.config.ts` ensures React, Framer Motion, and form libraries each land in a separately cacheable file, preventing cache-busting the entire bundle on partial updates.

7. **EmergencyBanner above Navbar** — The emergency banner is always the topmost element, before the sticky Navbar, so it's never hidden or clipped by scrolling behavior.

8. **`mode: "onTouched"` for forms** — Validates fields when the user leaves them (not on every keystroke), reducing noise while still catching errors early.

9. **`FilterTabs` is generic** — `FilterTabs<T extends string>` works with any string union (departments, gallery categories, FAQ topics) without modification.

---

## Reusable Components

These components are designed to be dropped into any page with minimal configuration:

- **`PageHero`** — Used on 7 of 9 pages with different eyebrow, title, description, tone, and glow position
- **`PageCTA`** — Drop-in closing CTA for any interior page
- **`SectionHeading`** — Consistent eyebrow + h2 + description pattern with alignment and light-mode variants
- **`FilterTabs<T>`** — Generic — used in Doctors, Gallery, and FAQ with different string unions
- **`Reveal`** — Scroll-triggered fade-up wrapper — can be wrapped around any element
- **`Badge`** — Three tone variants (teal, green, slate) for categorization labels
- **`Button` / `ButtonLink`** — Five variants (primary, secondary, outline, ghost, emergency) × three sizes

---

## Known Limitations

1. **Forms are frontend-only** — Neither the appointment form nor the contact form send data to a real backend. The success state is simulated client-side. Integration with an email service (Resend, Sendgrid, Formspree) or backend API is required before production.

2. **Emergency status is hardcoded** — `EmergencyBanner.tsx` has `const status = "normal"` hardcoded. It should be wired to a real PMS/Google Sheet feed or CMS field to show accurate live wait times.

3. **WhatsApp number is a placeholder** — `FloatingWhatsApp.tsx` uses `+91 99999 99999`. Must be replaced with the actual WhatsApp Business number before launch.

4. **Photos are Unsplash placeholders** — All doctor portraits and facility photos are Unsplash URLs. Replace with actual photography.

5. **Social links are placeholder URLs** — Footer Instagram/Facebook links use placeholder paths.

6. **Testimonials are placeholder content** — Three testimonials are placeholder text. Replace with verified Google Review excerpts.

7. **No backend / CMS** — There is no content management system. Text content (doctor names, services, FAQ answers, testimonials) is hardcoded in the component files.

8. **No dark mode** — `tailwind.config.ts` has `darkMode: "class"` defined but dark mode is not implemented in any component.

---

## Future Improvements

See `TODO.md` for a full roadmap. Priority items:

1. **Form backend integration** — Connect appointment and contact forms to an email service or API endpoint
2. **Replace Unsplash images** — Commission real photography and swap all placeholder images
3. **Live emergency status feed** — Wire the EmergencyBanner status to a real data source
4. **WhatsApp Business verification** — Replace placeholder number
5. **CMS integration** — Consider Sanity or Contentful for doctor bios, services, testimonials

---

## Notes For Future Developers

- **Do not use `<a>` for internal links** — Always use `<ButtonLink href="/path">` or React Router's `<Link>` for internal navigation to avoid full page reloads.
- **Always add `<Seo>` to new pages** — Every page component must include a `<Seo title="..." description="..." path="...">` as the first child.
- **Always include `<EmergencyBanner />` above `<Navbar />`** — This is a business requirement, not optional.
- **Extend `FilterTabs` generically** — Don't duplicate the tab UI; pass a new string union type to the existing generic component.
- **Use `cn()` for className composition** — Import from `@/lib/utils` — never concatenate strings manually.
- **Add `loading="lazy"` to all images below the fold** — The hero image is the only image that should use `loading="eager"`.
- **Path alias `@` is configured** — `@` maps to `./src` in both `vite.config.ts` and `tsconfig.json`.
- **The `{components` directory in `src/` is a stale artifact** — It contains no files and can be deleted safely.
