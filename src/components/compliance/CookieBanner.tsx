'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rm_cookie_consent_v1');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rm_cookie_consent_v1', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('rm_cookie_consent_v1', 'essential_only');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 bg-[#FDFBF7] border-t border-[#1C1917] shadow-none animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <ShieldCheck className="w-5 h-5 text-ink-primary stroke-[1.5] mt-0.5 flex-shrink-0" />
          <p className="text-[12px] font-sans text-ink-espresso leading-relaxed font-light">
            We employ essential cookies and local session tokens to optimize bridal lookbook image rendering and securely remember your admissions preferences in compliance with the{' '}
            <strong className="font-medium text-ink-primary">Digital Personal Data Protection (DPDP) Act 2023</strong>.{' '}
            <button
              onClick={onOpenPrivacy}
              className="underline text-ink-primary hover:text-black font-medium"
            >
              Read our full Privacy Notice
            </button>
            .
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-initial px-4 py-2 text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso bg-[#F5EFEB] border border-[#EAE3DA] hover:bg-[#EAE3DA] transition-colors rounded-none"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-initial px-5 py-2 text-[11px] font-mono uppercase tracking-[0.14em] text-canvas-primary bg-ink-primary border border-ink-primary hover:bg-[#2B2724] transition-colors rounded-none"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
