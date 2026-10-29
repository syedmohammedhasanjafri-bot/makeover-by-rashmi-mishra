'use client';

import React, { useEffect } from 'react';
import { X, Scale } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
          <Scale className="w-4 h-4 text-ink-primary stroke-[1.5]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
            Terms of Service &amp; Policies
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary font-normal mb-4">
          Bridal Booking &amp; Academy Enrollment Terms
        </h3>

        <div className="space-y-4 text-[13px] font-sans text-ink-espresso font-light leading-relaxed border-t border-[#EAE3DA] pt-4">
          <h4 className="font-serif text-base text-ink-primary font-medium">
            Part A: Bridal Glamour Appointments
          </h4>
          <p>
            1. <strong>Date Reservation:</strong> Bridal dates are locked strictly upon receipt of a confirmed non-refundable advance booking deposit. Verbal requests or draft inquiries do not reserve wedding dates on Rashmi Mishra&apos;s master calendar.
          </p>
          <p>
            2. <strong>Trial Policy:</strong> Paid bridal trials are conducted exclusively at the Kurla, Mumbai studio on weekdays by prior appointment.
          </p>
          <p>
            3. <strong>Outstation &amp; Destination Bookings:</strong> For destination weddings (Goa, Udaipur, Rajasthan, international), client bears round-trip flight transit, private hotel lodging, and on-ground transfers for Rashmi Mishra and senior assistant.
          </p>

          <h4 className="font-serif text-base text-ink-primary font-medium pt-2">
            Part B: Academy Diploma Admissions (Nov &amp; Dec 2026)
          </h4>
          <p>
            1. <strong>Cohort Seat Allocation:</strong> Cohorts are strictly capped (10 students for Masterclass, 8 students for Nail Art) to guarantee 1-on-1 supervision. Seat reservation is finalized only upon advance enrollment fee deposit.
          </p>
          <p>
            2. <strong>Attendance &amp; Practical Assessment:</strong> Awarding of the International Certified Diploma requires a minimum 90% attendance record and satisfactory completion of the final live model practical examination.
          </p>
          <p>
            3. <strong>Studio Discipline:</strong> Students must follow strict sanitation protocols, arrive promptly for morning/afternoon cohort timings, and treat studio equipment with professional care.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#EAE3DA] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary border border-ink-primary rounded-none"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
