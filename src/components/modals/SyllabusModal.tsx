'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { AcademyCourse } from '@/types';
import { buildAcademyWhatsAppUrl } from '@/lib/whatsappRouter';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: AcademyCourse | null;
  onOpenPrivacy: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    courseId: selectedCourse?.title || '30-Day Masterclass: Basic to International Bridal Makeup & Hairstyle Diploma',
    preferredBatch: 'November 2026 Batch',
    city: 'Mumbai',
    priorExperience: 'Beginner' as 'Beginner' | 'Practicing Artist' | 'Salon Owner',
    notes: '',
    dpdpConsent: true,
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        courseId: selectedCourse.title,
      }));
    }
  }, [selectedCourse]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.studentName || !formData.phone || !formData.city) {
      setErrorMsg('Please provide your Name, Phone Number, and City.');
      return;
    }

    if (!formData.dpdpConsent) {
      setErrorMsg('Please confirm your DPDP consent to receive syllabus documents.');
      return;
    }

    const url = buildAcademyWhatsAppUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/80 backdrop-blur-none animate-fadeIn">
      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-[#FDFBF7] border border-[#1C1917] p-6 sm:p-8 rounded-none shadow-none max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink-primary border border-hairline hover:bg-canvas-tertiary rounded-none focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>

        <div className="mb-6 pr-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
            Official Admissions Prospectus
          </span>
          <h3 className="font-serif text-2xl text-ink-primary font-normal mt-2">
            Download Course Syllabus &amp; Fee Structure
          </h3>
          <p className="text-[12px] font-sans text-ink-espresso font-light mt-1">
            Receive the official day-by-day curriculum breakdown, kit guidance, and fee structure directly on WhatsApp.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-[#FBE9E7] border border-[#FFCCBC] flex items-center gap-2 text-ink-primary text-[12px]">
            <AlertCircle className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
              Applicant Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="e.g. Pooja Shinde"
              className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                Current City / Location *
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Kurla, Thane, Pune"
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
              Course of Interest
            </label>
            <select
              value={formData.courseId}
              onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
              className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                Preferred Batch Month
              </label>
              <select
                value={formData.preferredBatch}
                onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
              >
                <option value="November 2026 Batch">November 2026 Batch</option>
                <option value="December 2026 Batch">December 2026 Batch</option>
                <option value="Early 2027 Waitlist">Early 2027 Waitlist</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                Prior Experience
              </label>
              <select
                value={formData.priorExperience}
                onChange={(e) =>
                  setFormData({ ...formData, priorExperience: e.target.value as any })
                }
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
              >
                <option value="Beginner">Beginner (Zero prior knowledge)</option>
                <option value="Practicing Artist">Practicing Makeup Artist</option>
                <option value="Salon Owner">Salon Owner</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.dpdpConsent}
                onChange={(e) => setFormData({ ...formData, dpdpConsent: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded-none accent-[#1C1917] border border-[#EAE3DA]"
              />
              <span className="text-[11px] font-sans text-ink-espresso leading-snug">
                I agree to receive course syllabus &amp; fee structure via WhatsApp (DPDP Act 2023 Consent). View{' '}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="underline text-ink-primary hover:text-black font-medium"
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-3.5 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors flex items-center justify-center gap-2 rounded-none"
          >
            <Download className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Receive Syllabus on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
