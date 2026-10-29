# DESIGN SYSTEM SPECIFICATION
## Brand: Makeover by Rashmi Mishra — Luxury Bridal Lookbook & Academy Admissions Portal
**Aesthetic Benchmark:** Charlotte Tilbury Editorial Artistry × The Row Minimalist Restraint (100% Daylight Luxury)

---

### 1. Design Philosophy & Daylight Luxury Standard
The design language rejects loud, tacky wedding marketing, plastic gold accents, and neon crypto aesthetics.
Instead, it evokes the serene elegance of high-fashion bridal atelier ateliers: ivory raw silk, warm unpolished travertine stone, crisp French typography, and editorial hairline framing.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DAYLIGHT LUXURY COLOR SYSTEM                          │
├───────────────────────┬──────────────────────────┬──────────────────────────┤
│ Token Name            │ HEX Code                 │ Semantic Application     │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Mulmul Ivory          │ #FDFBF7                  │ Primary Page Canvas      │
│ Rosewater Alabaster   │ #FBF8F5                  │ Secondary Cards/Sections │
│ Warm Travertine       │ #F5EFEB                  │ Card Background & Modals │
│ Deep Charcoal Ink     │ #1C1917                  │ Primary Editorial Text   │
│ Warm Espresso         │ #57534E                  │ Secondary Subtitles      │
│ Raw Umber             │ #8C827A                  │ Muted Meta/Timestamps    │
│ Hairline Border       │ #EAE3DA                  │ 1px Architectural Rules  │
│ Border Emphasis       │ #DFD7CD                  │ Active State Outlines    │
│ Rose Dust Neutral     │ #E8DDD3                  │ Soft Editorial Hover     │
│ Velvet Charcoal Ink   │ #141210                  │ Primary Buttons & Badges │
└───────────────────────┴──────────────────────────┴──────────────────────────┘
```

> **NON-NEGOTIABLE COLOR RULES:**
> - Strictly NO dark mode (`dark:` classes are forbidden).
> - Strictly NO tacky yellows or artificial gold gradients (`#FFD700`, `#D4AF37`, `yellow-*` are banned).
> - Warmth is conveyed through organic bridal tones: Mulmul Ivory, Alabaster, and Travertine.

---

### 2. Geometry & Spatial System
- **Corner Radius:** `rounded-none` (0px sharp 90-degree architectural cuts across cards, images, inputs, and buttons).
- **Hairline Framing:** All containers are defined by `border border-[#EAE3DA]` rather than soft spread drop shadows.
- **Elevation:** Zero blurry drop shadows (`shadow-lg`, `shadow-xl` are banned). Depth is created purely through tone contrast (`#FDFBF7` vs `#F5EFEB`) and crisp 1px borders.
- **Grid Layout:** Asymmetric editorial grid (50/50 split hero, 4-column lookbook gallery with alternating heights, 60/40 academy overview).
- **Whitespace Discipline:**
  - Section vertical padding: `py-24` to `py-36` on desktop, `py-16` on mobile.
  - Component spacing: strict 8px increment multiples (`gap-4`, `gap-8`, `gap-12`, `gap-16`).

---

### 3. Typography Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            TYPOGRAPHY SPECIFICATION                         │
├─────────────────┬──────────────────────┬─────────────┬──────────┬───────────┤
│ Element         │ Font Family          │ Size        │ Weight   │ Tracking  │
├─────────────────┼──────────────────────┼─────────────┼──────────┼───────────┤
│ Display Hero    │ Cormorant Garamond   │ 48px – 76px │ 400/500  │ -0.02em   │
│ Section Title   │ Cormorant Garamond   │ 36px – 52px │ 400      │ -0.01em   │
│ Subheading      │ Cormorant Garamond   │ 24px – 32px │ 400 Italic│ Normal   │
│ Body Primary    │ Plus Jakarta Sans    │ 15px – 16px │ 400      │ +0.01em   │
│ Body Small      │ Plus Jakarta Sans    │ 13px – 14px │ 400/500  │ +0.02em   │
│ Monospace Meta  │ JetBrains Mono       │ 10px – 12px │ 500      │ +0.15em   │
│ Button / CTA    │ Plus Jakarta Sans    │ 12px – 13px │ 600      │ +0.12em   │
└─────────────────┴──────────────────────┴─────────────┴──────────┴───────────┘
```

- Display headers use classic serif phrasing with selective italic emphasis for high-fashion editorial texture.
- Technical information (dates, module codes, batch numbers) uses uppercase monospace text with wide tracking.

---

### 4. Component Anatomy

#### 4.1 Primary Buttons
- **Style:** Razor-sharp rectangular box (`rounded-none`).
- **Primary (Charcoal):**
  - Background: `#1C1917` (Deep Charcoal Ink)
  - Text: `#FDFBF7` (Mulmul Ivory)
  - Hover: Background `#383531`, smooth border outline.
  - Typography: 12px, Uppercase, Tracking `+0.12em`, Semibold.
- **Secondary (Editorial Outline):**
  - Background: `transparent`
  - Border: `1px solid #1C1917`
  - Text: `#1C1917`
  - Hover: Background `#F5EFEB`, border `#1C1917`.

#### 4.2 Lookbook Image Cards
- **Geometry:** `border border-[#EAE3DA] bg-[#FBF8F5] p-3 rounded-none`.
- **Aspect Ratios:** `aspect-[4/5]` for portraits, `aspect-[1/1]` for detail frames.
- **Skeleton State:** `#F5EFEB` background with a calm hairline shimmer pulse.
- **Overlay:** Bottom informational bar displaying Function Title, Look Tags, and a subtle `"Inspect Look & Availability"` trigger.

#### 4.3 Academy Course Cards
- **Structure:** 2-column comprehensive course blocks.
- **Header:** Course code (`DIPLOMA-01`, `DIPLOMA-02`), duration badge (`30-DAY MASTERCLASS`), and batch alert (`SEATS OPEN: NOV & DEC 2026`).
- **Curriculum Overview:** Key modules listed in clean numbered lists with checkmarks.
- **Action Group:** Dual buttons: `Download Syllabus & Fee` and `Reserve Seat on WhatsApp`.

#### 4.4 Modals (Date Check, Syllabus, DPDP Privacy)
- **Backdrop:** `rgba(28, 25, 23, 0.6)` with crisp focus on the active modal window.
- **Modal Container:** `bg-[#FDFBF7] border border-[#1C1917] p-8 max-w-xl w-full rounded-none shadow-none`.
- **Close Action:** Top-right `×` in hairline box. Accessible via `Esc` key and backdrop click.

---

### 5. Mobile Responsiveness (390px Viewport Benchmark)
- Verified on iPhone 12/13/14/15/16 Pro viewports (390px × 844px).
- Navigation switches to a clean full-screen editorial drawer with oversized serif links.
- Grid switches from 4-columns to single or 2-column asymmetric lookbook layout.
- Buttons span full width (`w-full`) for effortless thumb reachability.
- Touch targets strictly maintain 44px minimum tap size.
