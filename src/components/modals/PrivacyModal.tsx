'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/80 backdrop-blur-none animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#1C1917] p-6 sm:p-10 rounded-none shadow-none max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink-primary border border-hairline hover:bg-canvas-tertiary rounded-none focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-ink-primary stroke-[1.5]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
            DPDP Act 2023 Compliance
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary font-normal mb-4">
          Privacy Policy &amp; Data Protection Notice
        </h3>

        <div className="space-y-4 text-[13px] font-sans text-ink-espresso font-light leading-relaxed border-t border-[#EAE3DA] pt-4">
          <p>
            <strong>Makeover by Rashmi Mishra</strong> (&ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data in full compliance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023 of India</strong>.
          </p>

          <h4 className="font-serif text-base text-ink-primary font-medium pt-2">
            1. Collection of Personal Data
          </h4>
          <p>
            When you interact with our bridal inquiry forms, date availability checkers, or academy admissions portals, we collect only the minimum necessary information: your full name, telephone/WhatsApp contact number, wedding/event dates, preferred course selection, and location.
          </p>

          <h4 className="font-serif text-base text-ink-primary font-medium pt-2">
            2. Purpose of Processing
          </h4>
          <p>
            Your details are processed strictly for:
            (a) verifying bridal appointment availability and preparing quotations;
            (b) transmitting official academy curriculum syllabi and batch admission schedules;
            (c) coordinating studio trial visits at our Kurla, Mumbai studio.
          </p>

          <h4 className="font-serif text-base text-ink-primary font-medium pt-2">
            3. Third-Party Disclosures &amp; WhatsApp Integration
          </h4>
          <p>
            We do not sell, rent, or trade your personal information to third-party telemarketers or advertisers. Communications initiated through WhatsApp are processed via encrypted channels pursuant to WhatsApp&apos;s privacy standard.
          </p>

          <h4 className="font-serif text-base text-ink-primary font-medium pt-2">
            4. Data Subject Rights (Access, Correction &amp; Deletion)
          </h4>
          <p>
            Under the DPDP Act 2023, you have the right to request access to your stored inquiry records, request corrections, or mandate complete deletion of your records by messaging our studio grievance officer at <code>wa.link/grbesm</code>.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#EAE3DA] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary border border-ink-primary rounded-none"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
