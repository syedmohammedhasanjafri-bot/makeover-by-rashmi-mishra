import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Instagram, ShieldCheck, Heart } from 'lucide-react';
import {
  OFFICIAL_WA_LINK,
  STUDIO_GOOGLE_MAPS_URL,
  OFFICIAL_INSTAGRAM_URL,
  STUDIO_LOCATION_NAME,
  OFFICIAL_COMMUNITY_COUNT,
  OFFICIAL_EXPERIENCE_YEARS,
} from '@/lib/whatsappRouter';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDateCheck: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDateCheck,
  onOpenSyllabus,
}) => {
  return (
    <footer className="w-full bg-[#F5EFEB] border-t border-[#EAE3DA] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#EAE3DA]">
          {/* Col 1: Brand & Atelier Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#FDFBF7] px-2.5 py-1 border border-[#EAE3DA] inline-block">
              Haute Couture Bridal &amp; Academy Flagship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary font-normal uppercase tracking-[0.02em]">
              Makeover by Rashmi Mishra
            </h3>
            <p className="text-[13px] font-sans text-ink-espresso font-light max-w-sm leading-relaxed">
              Curating timeless bridal looks with dewy high-definition finish and training future makeup and nail artists at our Kurla, Mumbai academy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={OFFICIAL_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.14em] bg-[#FDFBF7] text-ink-primary border border-[#EAE3DA] hover:border-ink-primary transition-colors rounded-none"
              >
                <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Instagram ({OFFICIAL_COMMUNITY_COUNT})</span>
              </a>

              <a
                href={OFFICIAL_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.14em] bg-ink-primary text-canvas-primary border border-ink-primary hover:bg-[#2B2724] transition-colors rounded-none"
              >
                <span>WhatsApp Hub</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Col 2: Bridal Wing Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-primary font-medium">
              Bridal Wing
            </p>
            <ul className="space-y-2 text-[12px] font-sans text-ink-espresso">
              <li>
                <a href="#lookbook" className="hover:text-ink-primary transition-colors">
                  Traditional Bridal
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-ink-primary transition-colors">
                  Maharashtrian Regal
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-ink-primary transition-colors">
                  Reception Dewy Glam
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-ink-primary transition-colors">
                  Engagement Romance
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDateCheck}
                  className="text-ink-primary underline font-medium hover:text-black transition-colors"
                >
                  Check Date Availability
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: The Academy Wing (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-primary font-medium">
              The Academy Wing 2026
            </p>
            <ul className="space-y-2 text-[12px] font-sans text-ink-espresso">
              <li>
                <a href="#academy" className="hover:text-ink-primary transition-colors">
                  30-Day Bridal Makeup Masterclass
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-ink-primary transition-colors">
                  Professional Nail Art Diploma
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-ink-primary transition-colors">
                  80% Live Model Practicum
                </a>
              </li>
              <li>
                <span className="text-[11px] font-mono text-ink-muted">
                  Upcoming: Nov &amp; Dec 2026 Cohorts
                </span>
              </li>
              <li>
                <button
                  onClick={onOpenSyllabus}
                  className="text-ink-primary underline font-medium hover:text-black transition-colors"
                >
                  Download Syllabus &amp; Fees
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Location & Inquiries (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-primary font-medium">
              Studio Location
            </p>
            <div className="text-[12px] font-sans text-ink-espresso space-y-1 font-light">
              <p className="font-medium text-ink-primary">{STUDIO_LOCATION_NAME}</p>
              <p>Kurla West, Mumbai</p>
              <p>Maharashtra 400070</p>
              <div className="pt-2">
                <a
                  href={STUDIO_GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.1em] text-ink-primary underline"
                >
                  <span>Google Maps Pin</span>
                  <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & DPDP Compliance Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-ink-muted">
            <span>&copy; {new Date().getFullYear()} Makeover by Rashmi Mishra. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Kurla, Mumbai</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-ink-espresso">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-ink-primary transition-colors underline"
            >
              Privacy Policy (DPDP 2023)
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-ink-primary transition-colors underline"
            >
              Terms of Service
            </button>
            <span>•</span>
            <a
              href={OFFICIAL_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary transition-colors"
            >
              wa.link/grbesm
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
