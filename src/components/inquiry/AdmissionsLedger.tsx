'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import {
  buildBridalWhatsAppUrl,
  buildAcademyWhatsAppUrl,
  OFFICIAL_WA_LINK,
} from '@/lib/whatsappRouter';

interface AdmissionsLedgerProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const AdmissionsLedger: React.FC<AdmissionsLedgerProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const [formType, setFormType] = useState<'bridal' | 'academy'>('bridal');

  // Bridal Form State
  const [bridalData, setBridalData] = useState({
    brideName: '',
    phone: '',
    weddingDate: '',
    functionType: 'Traditional Bridal',
    venueCity: 'Mumbai',
    notes: '',
    dpdpConsent: false,
  });

  // Academy Form State
  const [academyData, setAcademyData] = useState({
    studentName: '',
    phone: '',
    courseId: '30-Day Masterclass: Basic to International Bridal Makeup & Hairstyle Diploma',
    preferredBatch: 'November 2026 Batch',
    city: 'Mumbai',
    priorExperience: 'Beginner' as 'Beginner' | 'Practicing Artist' | 'Salon Owner',
    notes: '',
    dpdpConsent: false,
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleBridalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!bridalData.brideName || !bridalData.phone || !bridalData.weddingDate) {
      setErrorMsg('Please complete all mandatory fields (Name, Phone, and Wedding Date).');
      return;
    }

    if (!bridalData.dpdpConsent) {
      setErrorMsg('Please confirm your consent under the DPDP Act to receive details via WhatsApp.');
      return;
    }

    const url = buildBridalWhatsAppUrl(bridalData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAcademySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!academyData.studentName || !academyData.phone || !academyData.city) {
      setErrorMsg('Please complete all mandatory fields (Name, Phone, and City).');
      return;
    }

    if (!academyData.dpdpConsent) {
      setErrorMsg('Please confirm your consent under the DPDP Act to receive syllabus details via WhatsApp.');
      return;
    }

    const url = buildAcademyWhatsAppUrl(academyData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inquire" className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#EAE3DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Ledger Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA] inline-block mb-3">
            Digital Admissions &amp; Booking Ledger
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-primary font-normal tracking-[-0.01em]">
            Official Consultation &amp; Enrollment Ledger
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-espresso max-w-xl mx-auto font-light mt-2">
            Submit your inquiry to trigger an encrypted WhatsApp booking brief directly to Rashmi Mishra’s studio concierge.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 gap-0 border border-[#EAE3DA] mb-8">
          <button
            type="button"
            onClick={() => {
              setFormType('bridal');
              setErrorMsg(null);
            }}
            className={`py-3.5 px-4 text-[12px] font-sans uppercase tracking-[0.14em] font-medium transition-all flex items-center justify-center gap-2 rounded-none ${
              formType === 'bridal'
                ? 'bg-ink-primary text-canvas-primary'
                : 'bg-[#FBF8F5] text-ink-espresso hover:text-ink-primary hover:bg-[#F5EFEB]'
            }`}
          >
            <Calendar className="w-4 h-4 stroke-[1.5]" />
            <span>Bridal Date Inquiry</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setFormType('academy');
              setErrorMsg(null);
            }}
            className={`py-3.5 px-4 text-[12px] font-sans uppercase tracking-[0.14em] font-medium transition-all flex items-center justify-center gap-2 rounded-none border-l border-[#EAE3DA] ${
              formType === 'academy'
                ? 'bg-ink-primary text-canvas-primary'
                : 'bg-[#FBF8F5] text-ink-espresso hover:text-ink-primary hover:bg-[#F5EFEB]'
            }`}
          >
            <BookOpen className="w-4 h-4 stroke-[1.5]" />
            <span>Academy Admissions 2026</span>
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-[#FBE9E7] border border-[#FFCCBC] flex items-center gap-3 text-ink-primary rounded-none">
            <AlertCircle className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
            <span className="text-[12px] font-sans font-medium">{errorMsg}</span>
          </div>
        )}

        {/* Form Container */}
        <div className="border border-[#EAE3DA] bg-[#FBF8F5] p-6 sm:p-10 rounded-none">
          {formType === 'bridal' ? (
            /* Bridal Inquiry Form */
            <form onSubmit={handleBridalSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Bride Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bridalData.brideName}
                    onChange={(e) =>
                      setBridalData({ ...bridalData, brideName: e.target.value })
                    }
                    placeholder="e.g. Priyanka Deshmukh"
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bridalData.phone}
                    onChange={(e) =>
                      setBridalData({ ...bridalData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Wedding / Function Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bridalData.weddingDate}
                    onChange={(e) =>
                      setBridalData({ ...bridalData, weddingDate: e.target.value })
                    }
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Wedding Function Type
                  </label>
                  <select
                    value={bridalData.functionType}
                    onChange={(e) =>
                      setBridalData({ ...bridalData, functionType: e.target.value })
                    }
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
                  >
                    <option value="Traditional Vedic Wedding">Traditional Vedic Wedding</option>
                    <option value="Maharashtrian Regal Nauvari">Maharashtrian Regal Nauvari</option>
                    <option value="Reception Dewy Cocktail Glam">Reception Dewy Cocktail Glam</option>
                    <option value="Engagement & Sangeet Package">Engagement &amp; Sangeet Package</option>
                    <option value="Complete 3-Day Wedding Package">Complete 3-Day Wedding Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                  Event Venue / Destination City
                </label>
                <input
                  type="text"
                  value={bridalData.venueCity}
                  onChange={(e) =>
                    setBridalData({ ...bridalData, venueCity: e.target.value })
                  }
                  placeholder="e.g. Kurla / Taj Lands End, Bandra / Goa Destination"
                  className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                  Vision Notes or Outfit Color (Optional)
                </label>
                <textarea
                  rows={3}
                  value={bridalData.notes}
                  onChange={(e) =>
                    setBridalData({ ...bridalData, notes: e.target.value })
                  }
                  placeholder="Mention your outfit palette, hair preferences, or family makeup requirements..."
                  className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                />
              </div>

              {/* DPDP Act 2023 Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bridalData.dpdpConsent}
                    onChange={(e) =>
                      setBridalData({ ...bridalData, dpdpConsent: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 rounded-none accent-[#1C1917] border border-[#EAE3DA]"
                  />
                  <span className="text-[12px] font-sans text-ink-espresso leading-snug">
                    I agree to receive course/bridal details via WhatsApp in accordance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023. You may view our{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="underline text-ink-primary hover:text-black font-medium"
                    >
                      Privacy Policy
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="underline text-ink-primary hover:text-black font-medium"
                    >
                      Terms of Service
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-all flex items-center justify-center gap-2 rounded-none"
              >
                <span>Check Date Availability on WhatsApp</span>
                <Send className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </form>
          ) : (
            /* Academy Admissions Form */
            <form onSubmit={handleAcademySubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Applicant Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={academyData.studentName}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, studentName: e.target.value })
                    }
                    placeholder="e.g. Shweta Salunkhe"
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={academyData.phone}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Course Selected
                  </label>
                  <select
                    value={academyData.courseId}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, courseId: e.target.value })
                    }
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
                  >
                    <option value="30-Day Masterclass: Basic to International Bridal Makeup & Hairstyle Diploma">
                      30-Day Masterclass (Makeup &amp; Hair Diploma)
                    </option>
                    <option value="Professional Nail Art & Extension Diploma">
                      Professional Nail Art &amp; Extension Diploma (10 Days)
                    </option>
                    <option value="Combined Dual Diploma (Makeup, Hair & Nails)">
                      Combined Dual Diploma (Makeup, Hair &amp; Nails)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Preferred Batch Month
                  </label>
                  <select
                    value={academyData.preferredBatch}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, preferredBatch: e.target.value })
                    }
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
                  >
                    <option value="November 2026 Batch">November 2026 Batch</option>
                    <option value="December 2026 Batch">December 2026 Batch</option>
                    <option value="Waitlist for 2027 Cohort">Waitlist for 2027 Cohort</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Your Current City / Suburb *
                  </label>
                  <input
                    type="text"
                    required
                    value={academyData.city}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, city: e.target.value })
                    }
                    placeholder="e.g. Kurla, Thane, Navi Mumbai, Pune"
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                    Prior Makeup / Nail Experience
                  </label>
                  <select
                    value={academyData.priorExperience}
                    onChange={(e) =>
                      setAcademyData({
                        ...academyData,
                        priorExperience: e.target.value as any,
                      })
                    }
                    className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
                  >
                    <option value="Beginner">Beginner (Zero prior experience)</option>
                    <option value="Practicing Artist">Practicing Makeup / Hair Artist</option>
                    <option value="Salon Owner">Salon Owner / Beauty Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-2">
                  Career Goals or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={academyData.notes}
                  onChange={(e) =>
                    setAcademyData({ ...academyData, notes: e.target.value })
                  }
                  placeholder="Tell Rashmi Ma’am about your career dreams or questions about fee installments..."
                  className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-4 py-3 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
                />
              </div>

              {/* DPDP Act 2023 Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={academyData.dpdpConsent}
                    onChange={(e) =>
                      setAcademyData({ ...academyData, dpdpConsent: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 rounded-none accent-[#1C1917] border border-[#EAE3DA]"
                  />
                  <span className="text-[12px] font-sans text-ink-espresso leading-snug">
                    I agree to receive course/bridal details via WhatsApp in accordance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023. You may view our{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="underline text-ink-primary hover:text-black font-medium"
                    >
                      Privacy Policy
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="underline text-ink-primary hover:text-black font-medium"
                    >
                      Terms of Service
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-all flex items-center justify-center gap-2 rounded-none"
              >
                <span>Request Course Syllabus &amp; Fee Structure on WhatsApp</span>
                <Send className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
