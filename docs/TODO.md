# TODO — Bhanwar Pet Hospital Website

> **Roadmap for future improvements.**  
> Items are ordered by priority and implementation complexity. Items marked `[MUST]` are required before the site goes live with real patients.

---

## 🔴 Pre-Launch (Must Complete Before Go-Live)

### [MUST] Replace Placeholder Contact Information
- [ ] Update WhatsApp Business number in `FloatingWhatsApp.tsx` (currently `+91 99999 99999`)
- [ ] Verify emergency line number in `EmergencyBanner.tsx` (`+91 141 400 0001`)
- [ ] Verify main phone number in `Navbar.tsx` and `Footer.tsx` (`+91 141 400 0000`)
- [ ] Update Instagram and Facebook URLs in `Footer.tsx`
- [ ] Update email address in `Footer.tsx` (`care@bhanwarpethospital.in`)

### [MUST] Replace Placeholder Photography
- [ ] Commission professional photography of the clinic (reception, operating theatre, recovery wards, outdoor area)
- [ ] Commission professional headshots for all 8 doctors
- [ ] Replace all Unsplash image URLs in `Hero.tsx`, `DoctorsDirectory.tsx`, `DoctorsPreview.tsx`, `GalleryFull.tsx`, `GalleryPreview.tsx`
- [ ] Optimize all images with WebP format and appropriate sizes
- [ ] Generate and place a real `og-image.jpg` in the `/public` directory for social sharing

### [MUST] Add Vercel SPA Routing Config
- [ ] Create `vercel.json` at project root with SPA rewrite rule:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
  ```

### [MUST] Form Backend Integration
- [ ] Connect `AppointmentForm.tsx` to a real backend (email service, API, or CMS)
- [ ] Connect `ContactForm.tsx` to a real backend
- [ ] Consider: Resend, Sendgrid, Formspree, or a Next.js API route
- [ ] Add real form submission loading states and error handling
- [ ] Send confirmation email to the pet owner upon appointment request

### [MUST] Replace Placeholder Testimonials
- [ ] Obtain verified Google Review excerpts from the client
- [ ] Replace placeholder testimonials in `Testimonials.tsx`

---

## 🟡 Near-Term Improvements (Within 1–3 Months)

### Admin Dashboard
- [ ] Build a simple admin panel to view and manage appointment requests
- [ ] Display new appointment submissions in a table with status tracking (pending/confirmed/cancelled)
- [ ] Basic authentication for clinic staff
- [ ] Consider: Next.js App Router + Prisma + Postgres, or a no-code tool like Notion/Airtable as a stopgap

### Email Notifications
- [ ] Automatic confirmation email to pet owner on appointment request submission
- [ ] Notification email to clinic staff on each new submission
- [ ] Appointment reminder email sent 24 hours before the scheduled time
- [ ] Integrate with Resend or Sendgrid

### Live Emergency Status Feed
- [ ] Wire the `EmergencyBanner` `status` variable to a real data source
- [ ] Options: Google Sheets integration, clinic PMS API, or a simple admin toggle in a CMS
- [ ] Display accurate wait time status ("Normal" / "High Volume") dynamically

### Online Appointment Confirmation
- [ ] Allow clinic staff to confirm or reschedule appointments from the admin dashboard
- [ ] Send a confirmation SMS/WhatsApp to the pet owner when appointment is confirmed
- [ ] Add a cancellation flow

### Blog / Pet Health Articles
- [ ] Create a `/blog` page with educational pet health articles
- [ ] Articles improve SEO with long-tail keywords (e.g., "how often should I vaccinate my dog in Jaipur")
- [ ] Integrate with a headless CMS (Sanity or Contentful) for editorial control

---

## 🟢 Medium-Term Improvements (3–6 Months)

### CMS Integration
- [ ] Integrate Sanity.io or Contentful to allow clinic staff to manage:
  - Doctor profiles (name, credentials, photo, bio)
  - Services and descriptions
  - FAQ entries
  - Gallery images
  - Testimonials
  - Blog posts
- [ ] This removes the need for a developer to update content

### Pet Health Records Portal
- [ ] Patient login portal for pet owners to view:
  - Vaccination history
  - Past visit summaries
  - Upcoming appointments
  - Prescribed medications
- [ ] This requires backend integration with the clinic's PMS (Practice Management System)

### Online Payments
- [ ] Accept consultation fee payments online at the time of booking
- [ ] Integrate Razorpay (recommended for India) or PayU
- [ ] Show payment confirmation and receipt
- [ ] Update admin dashboard to show paid/unpaid status

### Multi-Language Support
- [ ] Add Hindi language support (`/hi/...` routes) for Jaipur's Hindi-speaking demographic
- [ ] Consider using `react-i18next` or `@formatjs/intl`
- [ ] Priority pages: Homepage, Services, Contact

### Reviews Integration
- [ ] Embed live Google Reviews on the homepage or a dedicated testimonials section
- [ ] Automate testimonial updates using Google Places API or a service like Trustmary
- [ ] Display aggregate rating prominently

---

## 🔵 Long-Term / Future Enhancements

### Analytics Dashboard
- [ ] Integrate Google Analytics 4 or Plausible Analytics
- [ ] Track key conversion events: appointment form completions, phone link clicks, WhatsApp button clicks, emergency line clicks
- [ ] Build a client-facing monthly report showing traffic, enquiries, and top pages

### Dark Mode
- [ ] Implement dark mode using `tailwind.config.ts` `darkMode: "class"` (already configured)
- [ ] Define dark-mode variants for all color tokens
- [ ] Add a theme toggle button in the Navbar

### Appointment Booking Dashboard (Patient-Facing)
- [ ] Allow pet owners to log in and see all upcoming and past appointments
- [ ] Allow rescheduling and cancellation online
- [ ] Pet health timeline view

### WhatsApp Business API Integration
- [ ] Replace the simple `wa.me` link with WhatsApp Business API for automated appointment confirmations
- [ ] Send automated reminders and post-visit follow-ups via WhatsApp

### Progressive Web App (PWA)
- [ ] Add a service worker and `manifest.json` so the site can be installed as a home screen app on mobile
- [ ] Cache key pages for offline access

### Performance Monitoring
- [ ] Set up Vercel Analytics or Sentry for real-time performance and error monitoring
- [ ] Establish Core Web Vitals benchmarks and alert thresholds

### Accessibility Audit
- [ ] Commission a formal WCAG 2.1 AA accessibility audit
- [ ] Address any issues found
- [ ] Add an accessibility statement page

### Sitemap & Robots.txt
- [ ] Generate `sitemap.xml` and place in `/public`
- [ ] Add `robots.txt` with sitemap reference
- [ ] Submit sitemap to Google Search Console after launch

---

## 🧹 Code Quality & Technical Debt

- [ ] Remove the `{components` stale artifact directory from `src/` (empty directory created during development)
- [ ] Add unit tests for Zod schemas (`appointmentSchema`, `contactSchema`)
- [ ] Add integration tests for the 4-step appointment form wizard
- [ ] Upgrade to `react-helmet-async` v3 when stable (v2 is current)
- [ ] Consider migrating to `framer-motion` v12 when stable (v11 is current)
- [ ] Add `aria-describedby` linking form inputs to their error messages for enhanced screen reader support
