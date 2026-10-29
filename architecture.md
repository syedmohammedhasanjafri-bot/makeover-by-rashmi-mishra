# SYSTEM ARCHITECTURE SPECIFICATION
## Project: Makeover by Rashmi Mishra — Luxury Bridal Lookbook & Academy Admissions Portal
**Version:** 1.0.0 | **Framework:** Next.js 15 (App Router) + Tailwind CSS + Lenis

---

### 1. Technology Stack & Edge Infrastructure

```
┌────────────────────────────────────────────────────────────────────────┐
│                        USER BROWSER / CLIENT                           │
│     (390px Mobile Viewport → 1440px+ High-Resolution Desktop)          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP/2, TLS 1.3
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        VERCEL EDGE NETWORK                             │
│   - Global Edge Caching & Compression (Brotli / Gzip)                  │
│   - Header Security: HSTS, X-Content-Type-Options, CSP, Referrer-Policy│
│   - Zero Cold-Start Static Generation (SSG) with Edge Delivery         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS 15 APP ROUTER                             │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Root Layout (app/layout.tsx)                                   │   │
│   │   ├── Google Fonts Preload (Cormorant Garamond + Plus Jakarta) │   │
│   │   ├── Lenis Smooth Scroll Provider (Smooth Inertial Scroll)    │   │
│   │   ├── Cookie Consent Provider & DPDP Compliance Manager        │   │
│   │   └── Global Modals (Date Check, Syllabus, Privacy, Terms)     │   │
│   └────────────────────────────────────────────────────────────────┘   │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Page View (app/page.tsx)                                       │   │
│   │   ├── Luxury Navigation Bar (Dual Identity Anchor)             │   │
│   │   ├── Editorial Hero Section (Dual CTA Triggers)               │   │
│   │   ├── Brand Legacy & Metric Ticker                             │   │
│   │   ├── Filterable Bridal Lookbook Grid + Image Skeletons        │   │
│   │   ├── Rashmi Mishra Signature Artistry Philosophy              │   │
│   │   ├── Academy & Diploma Wing (30-Day Masterclass & Nails)      │   │
│   │   ├── Student Hands-On Experience & Curriculum Matrix          │   │
│   │   ├── Client & Student Testimonial Archive                     │   │
│   │   ├── Kurla Studio Location & Trust Architecture               │   │
│   │   ├── Interactive Booking & Admissions Ledger Form             │   │
│   │   └── Haute Couture Footer + DPDP Legal Modals                 │   │
│   └────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  DYNAMIC WHATSAPP ROUTING ENGINE                       │
│                       (lib/whatsappRouter.ts)                          │
│   Endpoint: https://wa.link/grbesm or https://wa.me/91XXXXXXXXXX       │
│   Payloads:                                                            │
│     - Type A: Bridal Date Availability Inquiries                       │
│     - Type B: Specific Lookbook Style Inquiries                        │
│     - Type C: Academy Masterclass Admissions 2026                      │
│     - Type D: Nail Art Diploma Syllabus & Fee Request                  │
│     - Type E: Custom Studio Visit & Direction Inquiries                │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Directory & Component Structure

```
rashmi-mishra/
├── .cursorrules                   # Strict architectural & design rules
├── PRD.md                         # Product requirements & user journeys
├── architecture.md                # Technical topology & edge specs
├── design.md                      # Daylight luxury tokens & typography
├── phases.md                      # 4-phase verification checklist
├── package.json                   # Next.js 15, React 19, Tailwind, Lenis
├── tsconfig.json                  # Strict TypeScript configuration
├── next.config.ts                 # Image domains, security headers
├── tailwind.config.ts             # Bespoke daylight luxury theme
├── postcss.config.mjs             # PostCSS nesting & Tailwind engine
├── public/                        # Static assets, lookbook images, icons
└── src/
    ├── app/
    │   ├── globals.css            # Base styles, hairline borders, typography
    │   ├── layout.tsx             # Root layout, fonts, Lenis provider
    │   ├── page.tsx               # Primary single-page luxury portal
    │   ├── sitemap.ts             # Dynamic XML sitemap
    │   └── robots.ts              # Search engine crawling rules
    ├── components/
    │   ├── navigation/
    │   │   ├── Navbar.tsx         # Minimalist dual-identity header
    │   │   └── MobileMenu.tsx     # Fullscreen clean daylight drawer
    │   ├── hero/
    │   │   ├── HeroSection.tsx    # Editorial typography + dual CTAs
    │   │   └── TrustStrip.tsx     # 5+ Yrs, 10.1K community, Kurla badge
    │   ├── lookbook/
    │   │   ├── LookbookGrid.tsx   # Filterable gallery (Traditional, Engagement, Dewy, Nauvari)
    │   │   ├── LookbookCard.tsx   # High-res frame with razor corners & skeleton loader
    │   │   └── LookbookSkeleton.tsx # Shimmering travertine skeleton loader
    │   ├── academy/
    │   │   ├── AcademySection.tsx # Dual diploma cards (30-Day Masterclass & Nail Art)
    │   │   ├── CurriculumAccordion.tsx # In-depth daily syllabus modules
    │   │   └── BatchSchedule.tsx  # November & December 2026 seat indicator
    │   ├── trust/
    │   │   ├── ArtistBio.tsx      # Rashmi Mishra's background & international accreditation
    │   │   ├── StudioLocation.tsx # Kurla Mumbai address, landmark, Google Maps CTA
    │   │   └── Testimonials.tsx   # Verified brides & graduated students
    │   ├── inquiry/
    │   │   └── AdmissionsLedger.tsx # Form with DPDP Act checkbox & WhatsApp generator
    │   ├── modals/
    │   │   ├── DateCheckModal.tsx # Quick bridal wedding date availability modal
    │   │   ├── SyllabusModal.tsx  # Academy syllabus & fee download modal
    │   │   ├── PrivacyModal.tsx   # DPDP Act 2023 compliant privacy terms
    │   │   └── TermsModal.tsx     # Bridal booking & student enrollment policies
    │   ├── compliance/
    │   │   └── CookieBanner.tsx   # Non-intrusive daylight cookie consent banner
    │   └── ui/
    │       ├── Button.tsx         # Razor-cornered magnetic editorial button
    │       ├── Input.tsx          # Underline luxury input fields
    │       └── Badge.tsx          # Monospace hairline badge
    ├── data/
    │   ├── lookbookData.ts        # Categorized portfolio looks with specs
    │   ├── coursesData.ts         # Full 30-Day & Nail Art curriculum modules
    │   └── testimonialsData.ts   # Real bridal & student reviews
    ├── hooks/
    │   └── useLenis.ts            # Smooth scroll instance hook
    ├── lib/
    │   └── whatsappRouter.ts      # Structured WhatsApp URL builder
    └── types/
        └── index.ts               # Complete TypeScript interface definitions
```

---

### 3. Dynamic WhatsApp Routing Engine

All lead capture converges through a robust, type-safe routing utility (`lib/whatsappRouter.ts`).
Instead of opening a blank chat, every user action compiles a pre-formatted, polite business ledger message:

```typescript
export interface BridalDateInquiry {
  brideName: string;
  weddingDate: string;
  functionType: 'Traditional Bridal' | 'Engagement Glam' | 'Reception Dewy' | 'Maharashtrian Regal' | 'Complete Bridal Package';
  location: string;
  guestCount?: string;
}

export interface AcademyInquiry {
  studentName: string;
  courseSelected: '30-Day Basic to International Bridal Masterclass' | 'Professional Nail Art & Extension Diploma' | 'Both Diplomas';
  preferredBatch: 'November 2026' | 'December 2026';
  city: string;
  priorExperience: 'Beginner' | 'Practicing Artist / Salon Owner';
}
```

The router serializes the object into a structured human-readable text block with standard URL encoding and appends it to `https://wa.link/grbesm` (or fallback `https://wa.me/91...`).

---

### 4. Fast Skeleton Loader & Media Pipeline
1. **Zero CLS Image Geometry:**
   - Every lookbook image uses explicit aspect ratios (`aspect-[4/5]` for portraits, `aspect-[16/10]` for editorial landscape).
2. **Daylight Travertine Skeleton Loader:**
   - During image load, a clean `#F5EFEB` background with a subtle shimmer gradient (`#F5EFEB` → `#EAE3DA` → `#F5EFEB`) maintains layout integrity.
   - Smooth CSS fade-in (`opacity-0` to `opacity-100` in 400ms) upon asset ready state.
3. **SVG & Curated Photography:**
   - Hand-crafted luxury SVG patterns and curated high-resolution editorial portrait photography depicting authentic Indian bridal attire, gold jewelry, and polished nail artistry.

---

### 5. Legal & DPDP Compliance Architecture
- In accordance with the **Digital Personal Data Protection (DPDP) Act, 2023 (India)**:
  - Any form requesting user details (name, phone, date, course) mandates an active consent checkbox:
    `"I consent to Makeover by Rashmi Mishra processing my inquiry details and contacting me via WhatsApp/Phone for bridal consultation or academy admissions."`
  - Cookie consent is persisted in `localStorage` under `rm_cookie_consent_v1`.
  - Privacy policy and terms modals provide unambiguous contact details and deletion request methods.
