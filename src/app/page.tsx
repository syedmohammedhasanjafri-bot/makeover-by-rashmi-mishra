'use client';

import React, { useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { LookbookGrid } from '@/components/lookbook/LookbookGrid';
import { AcademySection } from '@/components/academy/AcademySection';
import { StudioLocation } from '@/components/trust/StudioLocation';
import { Testimonials } from '@/components/trust/Testimonials';
import { AdmissionsLedger } from '@/components/inquiry/AdmissionsLedger';
import { Footer } from '@/components/footer/Footer';

// Modals & Compliance
import { DateCheckModal } from '@/components/modals/DateCheckModal';
import { SyllabusModal } from '@/components/modals/SyllabusModal';
import { PrivacyModal } from '@/components/modals/PrivacyModal';
import { TermsModal } from '@/components/modals/TermsModal';
import { CookieBanner } from '@/components/compliance/CookieBanner';

import { LookbookItem, AcademyCourse } from '@/types';

export default function Home() {
  // Initialize Lenis smooth inertial scrolling
  useLenis();

  // Modal State Orchestration
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenDateCheck = (look?: LookbookItem) => {
    setSelectedLook(look || null);
    setDateModalOpen(true);
  };

  const handleOpenSyllabus = (course?: AcademyCourse) => {
    setSelectedCourse(course || null);
    setSyllabusModalOpen(true);
  };

  const handleOpenEnrollment = (course?: AcademyCourse) => {
    setSelectedCourse(course || null);
    setSyllabusModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] selection:bg-[#1C1917] selection:text-[#FDFBF7]">
      {/* Haute Couture Sticky Header */}
      <Navbar
        onOpenDateCheck={() => handleOpenDateCheck()}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      <main>
        {/* 1. Hero Section with Dual Persona CTAs */}
        <HeroSection
          onOpenDateCheck={() => handleOpenDateCheck()}
          onOpenSyllabus={() => handleOpenSyllabus()}
        />

        {/* 2. Bridal Lookbook Showcase with Skeleton Loaders */}
        <LookbookGrid onOpenDateCheck={(look) => handleOpenDateCheck(look)} />

        {/* 3. The Academy & Diploma Wing (Nov & Dec 2026 Batches) */}
        <AcademySection
          onOpenSyllabus={(course) => handleOpenSyllabus(course)}
          onOpenEnrollment={(course) => handleOpenEnrollment(course)}
        />

        {/* 4. Client & Student Trust Architecture & Kurla Mumbai Studio */}
        <StudioLocation />

        {/* 5. Verified Client & Student Testimonial Archive */}
        <Testimonials />

        {/* 6. Interactive Admissions & Booking Ledger Form (DPDP Consent) */}
        <AdmissionsLedger
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          onOpenTerms={() => setTermsModalOpen(true)}
        />
      </main>

      {/* Footer & DPDP Compliance Strip */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenDateCheck={() => handleOpenDateCheck()}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      {/* Interactive Global Modals */}
      <DateCheckModal
        isOpen={dateModalOpen}
        onClose={() => setDateModalOpen(false)}
        selectedLook={selectedLook}
        onOpenPrivacy={() => {
          setDateModalOpen(false);
          setPrivacyModalOpen(true);
        }}
      />

      <SyllabusModal
        isOpen={syllabusModalOpen}
        onClose={() => setSyllabusModalOpen(false)}
        selectedCourse={selectedCourse}
        onOpenPrivacy={() => {
          setSyllabusModalOpen(false);
          setPrivacyModalOpen(true);
        }}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      {/* DPDP Act 2023 Compliant Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={() => setPrivacyModalOpen(true)} />
    </div>
  );
}
