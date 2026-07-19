# DESIGN SYSTEM — Bhanwar Pet Hospital

> This document is the authoritative reference for all visual and interactive design decisions used throughout the website. Any new component or page must adhere to these specifications.

---

## Color Palette

The palette is configured in `tailwind.config.ts` as custom design tokens and is available as Tailwind utility classes throughout the project.

### Primary — Navy Blue
The brand's dominant color, communicating clinical authority and trust.

| Token | Class | Hex | Usage |
|---|---|---|---|
| `primary.DEFAULT` | `bg-primary` | `#0A2540` | Default primary |
| `primary.50` | `bg-primary-50` | `#EAF0F6` | Ghost button hover backgrounds |
| `primary.100` | `bg-primary-100` | `#CBD9E7` | Hero image placeholder background |
| `primary.400` | `bg-primary-400` | `#274768` | Mid-tone navy |
| `primary.600` | `bg-primary-600` | `#0A2540` | Main navy — headings, primary buttons, Navbar logo |
| `primary.700` | `bg-primary-700` | `#081D33` | Footer background, Emergency banner background |
| `primary.900` | `bg-primary-900` | `#050F1A` | Gallery lightbox overlay background |

### Secondary — Teal
Used for interactive elements, active states, and section eyebrows.

| Token | Class | Hex | Usage |
|---|---|---|---|
| `secondary.DEFAULT` | `bg-secondary` | `#0D9488` | Default teal |
| `secondary.50` | `bg-secondary-50` | `#E6F6F4` | Teal badge backgrounds |
| `secondary.400` | `bg-secondary-400` | `#14B8A9` | Lighter teal for icon accents |
| `secondary.600` | `bg-secondary-600` | `#0D9488` | Active nav links, section eyebrows, secondary buttons |
| `secondary.700` | `bg-secondary-700` | `#0B786E` | Hovered secondary buttons |

### Accent — Green
Used for success states, positive CTAs, and rating indicators.

| Token | Class | Hex | Usage |
|---|---|---|---|
| `accent.DEFAULT` | `bg-accent` | `#22C55E` | Default green |
| `accent.50` | `bg-accent-50` | `#E9FBF0` | Green badge backgrounds, success icon backgrounds |
| `accent.400` | `bg-accent-400` | `#4ADE80` | Emergency banner ping dot |
| `accent.600` | `bg-accent-600` | `#22C55E` | Star ratings, appointment success, emergency CTA |

### Surface
Page and section backgrounds.

| Token | Class | Hex | Usage |
|---|---|---|---|
| `surface.main` | `bg-surface-main` | `#FFFFFF` | Default page background |
| `surface.sub` | `bg-surface-sub` | `#F8FAFC` | Alternate section backgrounds, form containers, doctor cards |

### Ink
Text color tokens.

| Token | Class | Hex | Usage |
|---|---|---|---|
| `ink.main` | `text-ink-main` | `#0F172A` | Primary body text, card titles |
| `ink.muted` | `text-ink-muted` | `#475569` | Supporting text, captions, placeholders |

---

## Typography

### Font Families

| Token | Font | Import | Usage |
|---|---|---|---|
| `font-display` | Plus Jakarta Sans | Google Fonts | All headings (h1–h4), nav links, buttons, labels, eyebrows |
| `font-body` | Inter | Google Fonts | Body copy, paragraphs, form inputs, descriptions |

Both fonts are loaded via `<link rel="preconnect">` in `index.html` for optimized loading.

### Type Scale

| Role | Classes | Size |
|---|---|---|
| Hero H1 | `text-4xl sm:text-5xl lg:text-6xl font-extrabold` | 36px / 48px / 60px |
| Inner Page H1 | `text-4xl sm:text-5xl font-extrabold` | 36px / 48px |
| Section H2 | `text-3xl sm:text-4xl font-bold` | 30px / 36px |
| Card H3 | `text-lg font-bold` | 18px |
| Body Large | `text-lg leading-relaxed` | 18px |
| Body Base | `text-base` / `text-[15px] leading-relaxed` | 16px / 15px |
| Body Small | `text-sm` | 14px |
| Caption/Meta | `text-xs` / `text-[11px]` | 12px / 11px |

### Letter Spacing

| Token | Value | Usage |
|---|---|---|
| `tracking-tightest` | `-0.02em` | Hero H1, display numerals, 404 page |
| `tracking-tighter` | `-0.01em` | Section H2, card headings |
| `tracking-tighter` (CSS) | Used on eyebrow labels and footer nav headers |

---

## Button Styles

Defined via `class-variance-authority` in `src/components/ui/Button.tsx`.

### Base Styles
All buttons share:
```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50
```

### Variants

| Variant | Background | Text | Hover | Use Case |
|---|---|---|---|---|
| `primary` | `bg-primary-600` | White | `bg-primary-700`, shadow lift, `-translate-y-0.5` | Main CTAs (Book Appointment) |
| `secondary` | `bg-secondary-600` | White | `bg-secondary-700`, shadow lift, `-translate-y-0.5` | Secondary CTAs |
| `outline` | Transparent | `text-primary-600` | `bg-primary-50`, stronger border | Tertiary actions, Cancel, Call |
| `ghost` | Transparent | `text-primary-600` | `bg-primary-50` | Back navigation in forms |
| `emergency` | `bg-accent-600` | White | Slightly lighter green, `-translate-y-0.5` | Emergency line CTAs |

### Sizes

| Size | Height | Padding | Font Size |
|---|---|---|---|
| `sm` | `h-9` (36px) | `px-4` | `text-sm` (14px) |
| `md` | `h-11` (44px) | `px-6` | `text-[15px]` |
| `lg` | `h-14` (56px) | `px-8` | `text-base` (16px) |

### `ButtonLink` Smart Routing
- `href` starting with `/` → renders as React Router `<Link>` (no page reload)
- `href` starting with `tel:`, `mailto:`, `https://`, `//` → renders as native `<a>`

---

## Cards

Cards are not built as a single component but follow a consistent pattern:

### Standard Card Pattern
```css
rounded-2xl border border-primary-600/8 bg-surface-sub
/* or */
rounded-2xl bg-white shadow-soft
```

### Doctor Card
```css
group flex flex-col overflow-hidden rounded-2xl border border-primary-600/8 bg-surface-sub
/* Photo section: aspect-[4/5] with group-hover:scale-105 on image */
/* Content section: flex-1 flex-col p-6 */
```

### Testimonial Card
```css
flex flex-col rounded-2xl bg-white p-7 shadow-soft
```

### Services Matrix Pillar Card
```css
grid grid-cols-1 rounded-3xl border border-primary-600/8 bg-surface-sub p-8 sm:p-10
```

### Gallery Card (hover state)
```css
group relative overflow-hidden rounded-2xl
/* Hover overlay: bg-primary-600/30 with Expand icon */
```

### Floating Credential Card (Hero)
```css
absolute rounded-2xl border border-primary-600/8 bg-white/95 p-5 shadow-card backdrop-blur-sm
```

---

## Icons

All icons are from **Lucide React** (v0.446.0). Consistent sizing rules:

| Context | Size Class |
|---|---|
| Navigation icons | `h-4 w-4` |
| Section/card icons (inline) | `h-4 w-4` to `h-5 w-5` |
| Large section icon containers | `h-6 w-6` (icon), `h-14 w-14` (container) |
| Hero/CTA primary icons | `h-5 w-5` to `h-6 w-6` |
| Status/indicator icons | `h-3 w-3` to `h-4 w-4` |
| 404 / large display icons | `h-9 w-9` |

Default `strokeWidth` is the Lucide default (1.5) unless explicitly set. Exceptions:
- Navbar PawPrint logo: `strokeWidth={2.25}`
- 404 PawPrint: `strokeWidth={2}`
- Services checklist Check: `strokeWidth={2.5}`

---

## Shadows

Three shadow levels are defined in `tailwind.config.ts`:

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-soft` | `0 2px 20px -4px rgba(10,37,64,0.08)` | Cards on white backgrounds, subtle elevation |
| `shadow-card` | `0 8px 30px -8px rgba(10,37,64,0.12)` | Doctor cards, floating elements on hover |
| `shadow-lift` | `0 20px 50px -12px rgba(10,37,64,0.25)` | Hero image, lightbox images, WhatsApp button |

All shadows use the brand navy (`#0A2540`) as the shadow color for visual coherence.

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | Buttons, badges, avatar circles, tab pills |
| `rounded-xl` | `1rem` (16px) | Form inputs, small cards, mobile nav items |
| `rounded-2xl` | `1.5rem` (24px) | Doctor cards, gallery images, testimonial cards, FAQ items |
| `rounded-3xl` | `2rem` (32px) | Hero image, services matrix rows, form container, booking form |
| `rounded-lg` | Default (8px) | Mobile nav hover states |

---

## Spacing System

Built on Tailwind's default 4px base unit. Key page-level spacing:

| Usage | Class |
|---|---|
| Section vertical padding (standard) | `py-20 sm:py-28` |
| Section vertical padding (lighter) | `py-16 sm:py-20` |
| Container horizontal padding | `px-6` (via `container` config: `padding: "1.5rem"`) |
| Max container width | 1280px (via `screens: { "2xl": "1280px" }`) |
| Section heading to content gap | `mt-14` |
| Card internal padding | `p-6` to `p-10` |
| Form container padding | `p-6 sm:p-10` |

---

## Grid System

The layout uses Tailwind CSS Grid. Key grid patterns:

| Section | Mobile | Tablet (sm) | Desktop (lg) |
|---|---|---|---|
| Homepage Hero | 1 col | 1 col | 2 col (`lg:grid-cols-2`) |
| Services Matrix | 1 col | 1 col | `lg:grid-cols-[minmax(0,320px)_1fr]` |
| Doctor Cards | 1 col | 2 col | 4 col |
| Gallery Grid | 2 col | 4 col with `auto-rows-[220px]` | 4 col |
| Stats | 2 col | 2 col | 4 col |
| Testimonials | 1 col | 1 col | 3 col |
| Footer | 1 col | 2 col | 4 col |

---

## Responsive Breakpoints

| Prefix | Min Width | Typical usage |
|---|---|---|
| *(none)* | 0px | Mobile — 375px+ |
| `sm:` | 640px | Tablet portrait — layout shifts |
| `lg:` | 1024px | Desktop — nav, hero grid, multi-column |
| `2xl:` | 1280px | Container max-width cap |

> `md:` (768px) is used sparingly — primarily for the Testimonials 3-column grid.

---

## Animation Principles

### Philosophy
- Animations exist to communicate state changes and guide attention — not for decoration
- All animations use GPU-composited properties only (`opacity`, `transform`)
- Never animate `height`, `width`, or `margin` without wrapping in a layout-aware Framer Motion container
- Respect `prefers-reduced-motion` — all animations are globally disabled when user preference is set

### Core Easing
```typescript
EASE_OUT = [0.16, 1, 0.3, 1]  // Spring-like cubic-bezier
```

This easing is used for: all page entrances, section reveals, form step transitions, card hover lifts, mobile nav drawer, and gallery lightbox.

### Animation Variants (from `src/lib/motion.ts`)

| Variant | Effect | Typical Duration |
|---|---|---|
| `fadeUp` | Y: 20→0, opacity: 0→1 | 0.6s |
| `fadeIn` | opacity: 0→1 | 0.5s–0.6s |
| `scaleIn` | scale: 0.96→1, opacity: 0→1 | 0.4s |
| `staggerChildren` | Container for staggered child animations | configurable |

### Scroll Trigger Configuration
```typescript
viewport={{ once: true, margin: "-80px" }}
```
Animations trigger once (no repeat) and start 80px before the element enters the viewport.

### Stagger Timing
- Section cards: `delay: i * 0.08` (80ms between cards)
- Stats: `delay: i * 0.08`
- Gallery filter: `delay: i * 0.04` (faster for larger grids)

### Specific Animation Timings

| Element | Duration | Notes |
|---|---|---|
| Hero copy | 0.7s | Enters on page load, no scroll trigger |
| Hero image | 0.8s, delay 0.15s | Slightly delayed to follow copy |
| Hero credential card | 0.6s, delay 0.6s | Last to appear — reinforces trust |
| Mobile nav drawer | 0.3s | Height 0→auto accordion |
| Gallery step transition | 0.4s | `AnimatePresence mode="popLayout"` |
| Form step slide | 0.35s | Horizontal slide ±32px |
| FAQ accordion | 0.3s | Height 0→auto |
| Stat counter | 1.6s | Number counting animation |
| WhatsApp button | 0.4s, delay 1s | Loads last, not to distract on entry |

---

## Component Styling Rules

1. **Never write raw color hex values in JSX** — always use the design token class (e.g., `bg-primary-600`, not `bg-[#0A2540]`)
2. **Never concatenate class strings manually** — always use `cn()` from `@/lib/utils`
3. **All interactive elements must have a transition** — minimum `transition-colors duration-200` on color-changing elements
4. **Hover states must provide visual feedback** — no interactive element should change without a perceptible hover state
5. **`rounded-full` for pill shapes, `rounded-2xl/3xl` for containers** — never mix radii within the same visual grouping
6. **Always apply `text-balance`** to headings and short descriptive paragraphs
7. **Use `leading-relaxed`** on paragraph text for readability
8. **Borders use fractional opacity** — `border-primary-600/8` (very subtle) or `border-primary-600/20` (visible) — never solid opaque borders on light backgrounds

---

## UI Consistency Guidelines

### Sections
- Sections alternate between `bg-surface-main` (white) and `bg-surface-sub` (near-white) to create visual separation without hard dividers
- Full-bleed brand color (`bg-primary-600`) is used for high-priority CTA sections (Stats, PageCTA, WellnessCTA)
- Each section gets a `py-20 sm:py-28` vertical rhythm (or `py-16 sm:py-20` for lighter sections)
- All sections use `<div className="container">` for horizontal containment

### Glows
Soft blurred circles are used as decorative background glows in hero sections:
```css
pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-secondary-50 blur-3xl
```
- Never block pointer events (`pointer-events-none`)
- Always placed absolutely within a `relative overflow-hidden` container
- Used in 2–3 hero sections maximum per page to avoid visual noise

### Eyebrow Labels
Section eyebrows above H2 headings follow this pattern:
```tsx
<p className="mb-3 font-display text-xs font-bold uppercase tracking-tighter text-secondary-600">
  Eyebrow Text
</p>
```
Or via the `Badge` component for hero sections and page heroes.

### CTAs
- Every page ends with a `PageCTA` or `ContactCTA` section — no page is dead-end
- Every interior page header (`EmergencyBanner`) provides direct access to the emergency line
- The `FloatingWhatsApp` button provides persistent alternative contact from any page

### Forms
- All form containers: `rounded-3xl border border-primary-600/8 bg-surface-sub`
- All form inputs: `rounded-xl border border-primary-600/12 bg-white focus:ring-2 focus:ring-secondary-400`
- Error text uses red (`text-red-500`) via React Hook Form's `fieldState.error`
- Success state: green icon (`text-accent-600`) on `bg-accent-50` background
