'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { TrustStrip } from './TrustStrip';

interface HeroSectionProps {
  onOpenDateCheck: () => void;
  onOpenSyllabus: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDateCheck, onOpenSyllabus }) => {
  return (
    <section className="relative w-full bg-[#FDFBF7] pt-8 sm:pt-14 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Subheader Meta Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5EFEB] border border-[#EAE3DA] text-[10px] font-mono uppercase tracking-[0.18em] text-ink-espresso rounded-none">
            <span className="w-1.5 h-1.5 bg-[#1C1917] rounded-none"></span>
            Mumbai Couture Bridal Atelier
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted">
            Batch Admissions: Nov & Dec 2026
          </span>
        </div>

        {/* 2-Column Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-24">
          {/* Left Column: Haute Typography & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-ink-primary font-normal leading-[1.08] tracking-[-0.015em] mb-6">
              Timeless Bridal Glamour &amp; <br />
              <span className="italic font-light text-ink-espresso">
                Professional Artistry Education.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-ink-espresso max-w-2xl font-light leading-relaxed mb-8">
              Led by International Certified Artist <strong className="font-medium text-ink-primary">Rashmi Mishra</strong> — Kurla, Mumbai.
              Curating bespoke high-definition dewy wedding signatures for discerning brides and mentoring next-generation professional makeup and nail artists.
            </p>

            {/* Dual Core CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-all rounded-none group"
              >
                <span>Explore Bridal Looks</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#academy"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#F5EFEB] transition-all rounded-none group"
              >
                <span>Academy Admissions 2026</span>
                <ArrowDown className="w-4 h-4 stroke-[1.5] transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Bullet Quality Proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#EAE3DA]">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-ink-primary stroke-[1.5] flex-shrink-0" />
                <span className="text-[12px] font-sans text-ink-espresso">
                  18h Sweat-Proof High-Definition Base
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-ink-primary stroke-[1.5] flex-shrink-0" />
                <span className="text-[12px] font-sans text-ink-espresso">
                  80% Live Model Hands-On Practicum
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-ink-primary stroke-[1.5] flex-shrink-0" />
                <span className="text-[12px] font-sans text-ink-espresso">
                  Authentic Peshwai Nauvari & Vedic Drapes
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-ink-primary stroke-[1.5] flex-shrink-0" />
                <span className="text-[12px] font-sans text-ink-espresso">
                  International Convocated Certification
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Lookbook Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#EAE3DA] bg-[#FBF8F5] p-3 rounded-none">
              {/* Corner Coordinate Badges */}
              <div className="absolute top-5 left-5 z-20">
                <span className="px-2.5 py-1 bg-[#1C1917]/90 text-canvas-primary text-[9px] font-mono uppercase tracking-[0.2em] rounded-none">
                  Signature Bride 2026
                </span>
              </div>
              <div className="absolute top-5 right-5 z-20">
                <span className="px-2.5 py-1 bg-[#FDFBF7]/90 text-ink-primary border border-[#EAE3DA] text-[9px] font-mono uppercase tracking-[0.2em] rounded-none">
                  Kurla Studio
                </span>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5EFEB]">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                  alt="Makeover by Rashmi Mishra - Signature Bridal Glamour"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Bottom Caption Strip */}
              <div className="mt-3 pt-3 border-t border-[#EAE3DA] flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm text-ink-primary font-medium">
                    The Royal Vedic Crimson
                  </p>
                  <p className="text-[11px] font-sans text-ink-muted">
                    Traditional Bridal • Mathapatti &amp; High-Definition Skin
                  </p>
                </div>
                <button
                  onClick={onOpenDateCheck}
                  className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] border border-ink-primary text-ink-primary hover:bg-ink-primary hover:text-canvas-primary transition-colors rounded-none"
                >
                  Check Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Metric Banner */}
      <TrustStrip />
    </section>
  );
};
