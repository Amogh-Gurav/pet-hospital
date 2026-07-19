# 🐾 Bhanwar Pet Hospital — Official Website

> Advanced veterinary care website for Bhanwar Pet Hospital, Jaipur's premier veterinary institution. Built for clinical credibility, high conversion, and production-grade performance.

---

## Project Description

A full-featured, production-ready marketing and appointment website for **Bhanwar Pet Hospital**, located in Vaishali Nagar, Jaipur, Rajasthan. The website positions the clinic as an advanced, specialist-led veterinary institution — not a generic pet shop — and converts first-time visitors into booked appointments through clear trust signals, a seamless 4-step booking form, and 24/7 emergency accessibility on every page.

---

## Business Overview

| Detail | Info |
|---|---|
| **Business Name** | Bhanwar Pet Hospital |
| **Type** | Advanced Veterinary Hospital |
| **Location** | Plot 14, Vaishali Nagar Main Road, Jaipur, Rajasthan 302021 |
| **Phone** | +91 141 400 0000 |
| **Emergency Line** | +91 141 400 0001 |
| **Email** | care@bhanwarpethospital.in |
| **Website** | https://www.bhanwarpethospital.in |
| **Founded** | 12+ years of clinical experience |
| **Specialties** | Surgery, Internal Medicine, Diagnostic Imaging, Dermatology, Dentistry |

---

## Features

### Core Pages
- **Homepage** — Split hero, why-choose-us grid, services preview, doctors preview, animated stats counter, testimonials, wellness CTA, gallery preview, FAQ preview, contact CTA
- **About** — Story, clinical philosophy, timeline/journey, infrastructure showcase, team preview
- **Services** — Three-pillar services matrix (Surgery, Internal Medicine, Preventive Care) + process steps
- **Doctors** — Filterable directory of 8 specialists across 5 departments
- **Book Appointment** — Animated 4-step wizard form with Zod validation
- **Gallery** — Filterable masonry grid with full-screen lightbox viewer
- **FAQ** — Searchable, filterable accordion with 10 categorized questions
- **Contact** — Map embed, contact info, validated contact form
- **404 Not Found** — Branded error page with recovery CTAs

### Technical Features
- ⚡ Code-split lazy-loaded pages via React Suspense
- 🎨 Design system via Tailwind CSS custom tokens
- 🔒 Form validation using React Hook Form + Zod schemas
- 🔍 Full SEO with per-page meta, OpenGraph, Twitter Cards, and canonical URLs
- 🗺️ JSON-LD `VeterinaryCare` structured data schema on homepage
- ♿ Accessibility: skip links, ARIA labels, keyboard navigation, focus management
- 📱 Fully responsive — mobile-first across all breakpoints
- 🎬 Framer Motion animations with `prefers-reduced-motion` support
- 🟢 Floating WhatsApp CTA button with pulse animation
- 🚨 Emergency banner with live-status indicator on every page
- 🛡️ React Error Boundary for graceful failure handling
- 📦 Manual chunk splitting for optimized bundle sizes

---

## Technologies Used

| Category | Technology | Version |
|---|---|---|
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.5.4 |
| Build Tool | Vite | 5.4.3 |
| Routing | React Router DOM | 6.26.0 |
| Animation | Framer Motion | 11.5.4 |
| Styling | Tailwind CSS | 3.4.10 |
| Form Management | React Hook Form | 7.53.0 |
| Form Validation | Zod | 3.23.8 |
| Hook Form Resolvers | @hookform/resolvers | 3.9.0 |
| SEO | react-helmet-async | 2.0.5 |
| Icons | lucide-react | 0.446.0 |
| Utility | clsx + tailwind-merge | 2.1.1 / 2.5.2 |
| Variant Styling | class-variance-authority | 0.7.0 |
| Linting | ESLint + typescript-eslint | 9.9.1 / 8.3.0 |
| Accessibility Linting | eslint-plugin-jsx-a11y | 6.9.0 |
| Fonts | Plus Jakarta Sans, Inter | via Google Fonts |

---

## Folder Structure

```
bhanwar-pet-hospital/
├── public/                    # Static assets (favicons, OG images)
├── src/
│   ├── components/
│   │   ├── forms/             # Multi-step appointment form
│   │   │   ├── steps/         # Individual step components (4 steps)
│   │   │   ├── AppointmentForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── FormField.tsx
│   │   │   └── StepIndicator.tsx
│   │   ├── layout/            # Site-wide layout components
│   │   │   ├── EmergencyBanner.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Page-specific content sections (26 files)
│   │   ├── shared/            # Reusable utility components (12 files)
│   │   └── ui/                # Primitive design system components
│   │       ├── Badge.tsx
│   │       └── Button.tsx
│   ├── lib/                   # Business logic, schemas, utilities
│   │   ├── appointmentSchema.ts
│   │   ├── contactSchema.ts
│   │   ├── motion.ts
│   │   └── utils.ts
│   ├── pages/                 # Route-level page components (9 pages)
│   ├── App.tsx                # Root router with lazy loading
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles + Tailwind directives
├── index.html                 # Root HTML with fonts and SEO defaults
├── tailwind.config.ts         # Design token configuration
├── vite.config.ts             # Build config with manual chunks
├── tsconfig.json              # TypeScript configuration
└── package.json
```

---

## Installation Instructions

### Prerequisites
- **Node.js** 18.x or later
- **npm** 9.x or later

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-org/bhanwar-pet-hospital.git
cd bhanwar-pet-hospital

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Type-check and build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## Production Build Commands

```bash
# Build for production
npm run build

# Preview the production build locally before deploying
npm run preview
```

The production build outputs to the `dist/` directory and includes:
- Minified HTML, CSS, and JavaScript
- Manual chunk splitting: `react-vendor`, `motion-vendor`, `form-vendor`
- Source maps disabled for production security

---

## Deployment Instructions (Vercel)

### Method 1 — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Method 2 — Vercel Dashboard (Recommended)

1. Push the repository to GitHub
2. Log in to [vercel.com](https://vercel.com)
3. Click **"Add New Project"** → import your GitHub repository
4. Vercel will auto-detect Vite — no build settings changes needed
5. Click **Deploy**

### Vercel Configuration

The default Vite settings work out-of-the-box with Vercel. The following settings are auto-detected:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

> **SPA Routing Note:** Add a `vercel.json` file at the project root to handle client-side routing:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/" }]
> }
> ```

---

## Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Chrome | 90+ |
| Mobile Safari | 14+ |

---

## Performance Notes

- **Code Splitting:** All 9 pages are lazy-loaded via `React.lazy()` + `Suspense`, reducing initial bundle size significantly.
- **Manual Chunks:** Vite is configured with `manualChunks` to split heavy dependencies (`react-vendor`, `motion-vendor`, `form-vendor`) into separate cacheable files.
- **Image Optimization:** Hero image uses `loading="eager"` and `fetchPriority="high"`. All other images use `loading="lazy"` and `decoding="async"`.
- **Font Loading:** Google Fonts are loaded via `<link rel="preconnect">` for faster DNS resolution.
- **Animation Performance:** All Framer Motion animations use GPU-composited properties (`opacity`, `transform`) only. Respects `prefers-reduced-motion` globally via `MotionConfig reducedMotion="user"`.
- **No Source Maps:** Source maps are disabled in production builds.

---

## Credits

- **Design & Development:** Built using React, TypeScript, Vite, Tailwind CSS, and Framer Motion
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Photography:** Unsplash (placeholder — replace with actual clinic photography before launch)

---

*© 2025 Bhanwar Pet Hospital. All rights reserved.*
