'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { OFFICIAL_WA_LINK, STUDIO_LOCATION_NAME } from '@/lib/whatsappRouter';

interface NavbarProps {
  onOpenDateCheck: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDateCheck, onOpenSyllabus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Bridal Lookbook', href: '#lookbook' },
    { label: 'The Academy', href: '#academy' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Studio & Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/95 backdrop-blur-none border-b border-[#EAE3DA] transition-all">
      {/* Top Heritage Sub-Bar */}
      <div className="w-full bg-[#F5EFEB] border-b border-[#EAE3DA] py-1.5 px-4 sm:px-8 text-center">
        <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-ink-espresso">
          Celebrity Bridal Artistry & Masterclass Academy • Kurla, Mumbai • 10.1K Community
        </p>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.04em] text-ink-primary uppercase leading-tight font-normal">
            Makeover by Rashmi Mishra
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-ink-muted mt-0.5">
            Haute Couture Bridal Atelier & Academy • {STUDIO_LOCATION_NAME}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-sans uppercase tracking-[0.14em] text-ink-espresso hover:text-ink-primary transition-colors py-1 border-b border-transparent hover:border-ink-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDateCheck}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#F5EFEB] transition-colors rounded-none"
          >
            <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Check Wedding Date</span>
          </button>

          <a
            href={OFFICIAL_WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors rounded-none"
          >
            <span>WhatsApp Concierge</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-ink-primary border border-hairline hover:bg-canvas-tertiary rounded-none focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-[#FDFBF7] border-t border-[#EAE3DA] p-6 flex flex-col justify-between overflow-y-auto z-50">
          <div className="flex flex-col gap-6 pt-4">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-ink-muted">
              Navigation Menu
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-ink-primary hover:text-ink-espresso transition-colors border-b border-[#EAE3DA] pb-3"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-8 pb-12 border-t border-[#EAE3DA]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDateCheck();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 text-[12px] font-sans uppercase tracking-[0.14em] font-medium border border-ink-primary text-ink-primary bg-transparent rounded-none"
            >
              <Calendar className="w-4 h-4 stroke-[1.5]" />
              <span>Check Wedding Date Availability</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 text-[12px] font-sans uppercase tracking-[0.14em] font-medium border border-hairline-strong text-ink-primary bg-canvas-tertiary rounded-none"
            >
              <Sparkles className="w-4 h-4 stroke-[1.5]" />
              <span>Download Academy Syllabus & Fees</span>
            </button>

            <a
              href={OFFICIAL_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 text-[12px] font-sans uppercase tracking-[0.14em] font-medium bg-ink-primary text-canvas-primary border border-ink-primary rounded-none"
            >
              <span>Direct WhatsApp Concierge</span>
              <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
            </a>

            <p className="text-[11px] font-mono text-center text-ink-muted pt-4">
              Studio: Kurla, Mumbai • Batch Dates: Nov & Dec 2026
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
