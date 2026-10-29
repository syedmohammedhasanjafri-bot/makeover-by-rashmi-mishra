# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Makeover by Rashmi Mishra — Luxury Bridal Lookbook & Academy Admissions Portal
**Version:** 1.0.0 | **Author:** Studio Engineering & Editorial Strategy | **Standard:** Charlotte Tilbury & The Row Daylight Luxury Standard

---

### 1. Executive Summary & Brand Overview
**Makeover by Rashmi Mishra** is a prestigious luxury bridal beauty studio and vocational beauty academy headquartered in Kurla, Mumbai, led by International Certified Celebrity Makeup Artist & Academy Founder **Rashmi Mishra**.

- **Brand Statement:** *"Timeless Bridal Glamour & Professional Artistry Education."*
- **Heritage & Credibility:** 5+ Years Industry Experience, 10,100+ Thriving Beauty Community, 600+ Luxury Brides Styled, 250+ Certified Academy Alumni.
- **Location:** Kurla, Mumbai (Central Suburbs with easy access from BKC, Bandra, Chembur, and Navi Mumbai).
- **Primary Channels:**
  - Direct WhatsApp Concierge: `https://wa.link/grbesm`
  - Studio Location: Kurla, Mumbai (Google Maps integrated)
  - Community: 10.1K+ Followers on Instagram (`@makeoverbyrashmimishra`)

---

### 2. Dual Business Persona Architecture

#### Persona A: The Discerning Luxury Bride
- **Profile:** Brides-to-be from Mumbai (Kurla, BKC, Bandra, Powai, South Mumbai) and destination weddings (Goa, Udaipur, Alibaug).
- **Core Psychology:** Anxious about cakey, over-dramatized makeup; demands radiant, skin-first dewy finish that endures 12+ hours of ceremonies, flash photography, and 4K videography.
- **Key Desires:**
  - Authentic portfolio images (unfiltered, authentic HD skin texture, no blur filter distortion).
  - Categorized looks matching specific wedding functions: Traditional Bridal (Vedic red / lehenga), Engagement Glam (chic contemporary), Reception Dewy (couture evening gown), Maharashtrian Regal (Nauvari saree with authentic Peshwai jewelry drape).
  - Frictionless date verification: Wants to know immediately if Rashmi is free on their auspicious wedding date.
- **Conversion Journey:**
  1. Lands on editorial hero canvas.
  2. Filters lookbook by function (e.g., *Maharashtrian Regal* or *Reception Dewy*).
  3. Clicks `"Check Date Availability"`.
  4. Modal captures Wedding Date, Event Function, Location/Venue, and Guest Count.
  5. One-tap triggers WhatsApp routing with clean pre-filled bridal booking docket.

#### Persona B: The Aspiring Artistry & Nail Tech Student
- **Profile:** Women and young professionals seeking financial independence, aspiring makeup artists, salon owners upgrading skills, and bridal hairstylists wanting international certification.
- **Core Psychology:** Frustrated by theoretical classes with no real client hands-on training; wants personalized mentorship from Rashmi Mishra, vanity vanity kits guidance, vanity practice on live models, portfolio photoshoot creation, and client acquisition coaching.
- **Key Desires:**
  - Transparent curriculum breakdown and practical hours ratio (80% hands-on, 20% theory).
  - Clear batch schedules: Upcoming winter batches in November 2026 and December 2026.
  - Tangible certificate credentials (International Certification + Portfolio Shoot included).
  - Immediate syllabus breakdown and fee structure inquiry.
- **Conversion Journey:**
  1. Discovers the Academy & Diploma Wing section.
  2. Compares Course 1 (30-Day Masterclass) vs. Course 2 (Professional Nail Art & Extension Diploma).
  3. Inspects curriculum syllabus modules (Skin Prep, Color Theory, 8 Bridal Drapes, Airbrush, Nail Extensions, Ombre French, Salon Management).
  4. Clicks `"Download Course Syllabus & Fee Structure"` or `"Enroll in Upcoming Batch"`.
  5. DPDP-compliant WhatsApp redirect sends formal student admissions inquiry.

---

### 3. Core Feature Specification & Information Architecture

#### 3.1 Hero Section
- **Editorial Headline:** *"Timeless Bridal Glamour & Professional Artistry Education."*
- **Sub-headline:** *"Led by International Certified Artist Rashmi Mishra — Kurla, Mumbai."*
- **Dual Action Triggers:**
  - Primary CTA: `Explore Bridal Looks →` (Smooth scroll to Lookbook)
  - Secondary CTA: `Academy Admissions 2026 ↓` (Smooth scroll to Academy Wing)
- **Trust Strip Indicators:**
  - 5+ Years Mastery
  - 10.1K+ Beauty Community
  - Kurla, Mumbai Studio
  - International Certified Mentorship

#### 3.2 Curated Bridal Lookbook (Filterable High-Definition Grid)
- Filterable Function Categories:
  1. `All Looks`
  2. `Traditional Bridal` (Classic crimson lehenga, intricate mathapatti, waterproof HD drape)
  3. `Engagement Glam` (Soft shimmer, sculpted cheekbones, romantic Hollywood waves)
  4. `Reception Dewy` (Luminous glass skin, smoky couture eye, champagne elegance)
  5. `Maharashtrian Regal` (Authentic Nauvari, Chandrakor bindi, traditional Khopa floral styling)
- **Interactive Capabilities:**
  - Ultra-crisp editorial cards with razor-sharp 90-degree corners (`rounded-none`).
  - Skeleton loader fallback ensuring zero content jumps during asset retrieval.
  - Detail overlay with function name, artist notes, and instant `"Book This Look"` button.

#### 3.3 The Academy & Diploma Wing (High-Ticket Courses)
- **Course 1: 30-Day Basic to International Bridal Makeup & Hairstyle Masterclass Diploma**
  - Duration: 30 Days (Mon–Fri, Intensive Hands-on)
  - Upcoming Batches: November 2026 & December 2026
  - Curriculum Modules:
    - *Module 01:* Advanced Skin Anatomy, Prep & Priming for 18h Longevity
    - *Module 02:* Color Wheel Mastery, Pigmentation Neutralization & Foundation Formulation
    - *Module 03:* 7 signature eye looks (Classic Smokey, Brazilian Cut Crease, Soft Glam, Halos)
    - *Module 04:* Traditional & Contemporary Saree / Dupatta Draping (Gujarati, South Indian, Nauvari)
    - *Module 05:* Luxury Bridal Hairstyling (Textured buns, Russian braids, Mermaid curls)
    - *Module 06:* Live Model Assessment, Portfolio Shoot with Studio Lighting & Certificate Convocations
- **Course 2: Professional Nail Art & Extension Diploma**
  - Duration: 10 Days Intensive
  - Upcoming Batches: November 2026 & December 2026
  - Curriculum Modules:
    - *Module 01:* Nail Anatomy, Hygiene, Sanitization & Cuticle Preparation
    - *Module 02:* Gel & Acrylic Extension Systems, Tip Placement, Dual Forms
    - *Module 03:* Advanced Nail Artistry (3D Acrylic flowers, Marble, Chrome, Foil, Ombre, French)
    - *Module 04:* Nail Infill, Safe Removal, Troubleshooting & Client Pricing
- **Admissions Ledger & Syllabus Inquiry Modal:**
  - Enables user to request official fee structure and syllabus PDF docket over WhatsApp.

#### 3.4 Client & Student Trust Architecture
- **Location Pinpoint:** Kurla, Mumbai Studio with interactive location preview & `"Get Directions via Google Maps"` button.
- **Direct WhatsApp Concierge:** Dynamic message generator hooked to `https://wa.link/grbesm`.
- **Testimonial Ledger:** Authentic verified bride & academy student reviews with verified graduation credentials.

#### 3.5 Legal & DPDP Compliance
- **Digital Personal Data Protection (DPDP) Act 2023 Compliance:** Explicit consent checkbox before data submission.
- **Privacy Policy Modal:** Transparent disclosure of lead retention, WhatsApp API communication, and cookies.
- **Terms of Service Modal:** Clear booking advance terms, cancellation timeline, bridal trial policies, and academy seat reservation clauses.
- **Cookie Consent Banner:** Lightweight, non-intrusive daylight banner with accept/customize options.

---

### 4. Technical Quality Standards
- **Framework:** Next.js 15 with App Router and Server Components.
- **Performance:** 95+ Lighthouse Performance, zero Cumulative Layout Shift (CLS), instantaneous client transitions.
- **Accessibility:** 100% WCAG AA compliant contrast and ARIA labels on all interactive modals and filters.
- **Zero Vibecoding Rule Enforcement:** Absolute ban on dark mode, purples, neon, bubbly corners, and generic SaaS templates.
