'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { LookbookItem } from '@/types';
import { buildBridalWhatsAppUrl } from '@/lib/whatsappRouter';

interface DateCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLook?: LookbookItem | null;
  onOpenPrivacy: () => void;
}

export const DateCheckModal: React.FC<DateCheckModalProps> = ({
  isOpen,
  onClose,
  selectedLook,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    brideName: '',
    phone: '',
    weddingDate: '',
    functionType: selectedLook?.category || 'Traditional Vedic Wedding',
    venueCity: 'Mumbai',
    lookTitle: selectedLook?.title || '',
    notes: '',
    dpdpConsent: true,
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (selectedLook) {
      setFormData((prev) => ({
        ...prev,
        functionType: selectedLook.category,
        lookTitle: selectedLook.title,
      }));
    }
  }, [selectedLook]);

  // Handle ESC key to close
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

    if (!formData.brideName || !formData.phone || !formData.weddingDate) {
      setErrorMsg('Please provide your Name, WhatsApp Phone, and Wedding Date.');
      return;
    }

    if (!formData.dpdpConsent) {
      setErrorMsg('Please check the DPDP Act consent box to proceed.');
      return;
    }

    const url = buildBridalWhatsAppUrl({
      ...formData,
      lookTitle: selectedLook ? selectedLook.title : formData.lookTitle,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/80 backdrop-blur-none animate-fadeIn">
      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-lg bg-[#FDFBF7] border border-[#1C1917] p-6 sm:p-8 rounded-none shadow-none max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink-primary border border-hairline hover:bg-canvas-tertiary rounded-none focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
            Wedding Date Availability
          </span>
          <h3 className="font-serif text-2xl text-ink-primary font-normal mt-2">
            Inquire Bridal Dates with Rashmi Mishra
          </h3>
          <p className="text-[12px] font-sans text-ink-espresso font-light mt-1">
            {selectedLook
              ? `Referencing: ${selectedLook.title} (${selectedLook.category})`
              : 'Direct studio date availability verification for Mumbai and destination weddings.'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-[#FBE9E7] border border-[#FFCCBC] flex items-center gap-2 text-ink-primary text-[12px]">
            <AlertCircle className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
              Bride Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.brideName}
              onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
              placeholder="e.g. Radhika Sharma"
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
                Wedding Date *
              </label>
              <input
                type="date"
                required
                value={formData.weddingDate}
                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                Function Type
              </label>
              <select
                value={formData.functionType}
                onChange={(e) => setFormData({ ...formData, functionType: e.target.value })}
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary"
              >
                <option value="Traditional Vedic Wedding">Traditional Vedic Wedding</option>
                <option value="Maharashtrian Regal Nauvari">Maharashtrian Regal Nauvari</option>
                <option value="Reception Dewy Cocktail Glam">Reception Dewy Cocktail Glam</option>
                <option value="Engagement Glam">Engagement Glam</option>
                <option value="Complete Bridal Package">Complete Bridal Package</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-ink-espresso mb-1">
                Venue City / Suburb
              </label>
              <input
                type="text"
                value={formData.venueCity}
                onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                placeholder="e.g. Kurla, Bandra, Goa"
                className="w-full bg-[#FDFBF7] border border-[#EAE3DA] px-3.5 py-2.5 text-[13px] font-sans text-ink-primary rounded-none focus:outline-none focus:border-ink-primary placeholder:text-ink-muted"
              />
            </div>
          </div>

          {/* DPDP Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.dpdpConsent}
                onChange={(e) => setFormData({ ...formData, dpdpConsent: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded-none accent-[#1C1917] border border-[#EAE3DA]"
              />
              <span className="text-[11px] font-sans text-ink-espresso leading-snug">
                I agree to receive bridal schedule &amp; quote via WhatsApp (DPDP Act 2023 Consent). View{' '}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-3 py-3.5 text-[12px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors flex items-center justify-center gap-2 rounded-none"
          >
            <span>Send Date Inquiry to WhatsApp</span>
            <Send className="w-3.5 h-3.5 stroke-[1.5]" />
          </button>
        </form>
      </div>
    </div>
  );
};
