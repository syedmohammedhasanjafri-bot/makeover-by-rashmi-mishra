'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Download, CheckCircle2, ArrowRight, BookOpen, Award, Users } from 'lucide-react';
import { ACADEMY_COURSES } from '@/data/coursesData';
import { AcademyCourse } from '@/types';
import { BatchSchedule } from './BatchSchedule';
import { CurriculumAccordion } from './CurriculumAccordion';
import { OFFICIAL_WA_LINK } from '@/lib/whatsappRouter';

interface AcademySectionProps {
  onOpenSyllabus: (course?: AcademyCourse) => void;
  onOpenEnrollment: (course?: AcademyCourse) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onOpenSyllabus,
  onOpenEnrollment,
}) => {
  const [activeCourseId, setActiveCourseId] = useState<string>(ACADEMY_COURSES[0].id);

  const activeCourse =
    ACADEMY_COURSES.find((c) => c.id === activeCourseId) || ACADEMY_COURSES[0];

  return (
    <section id="academy" className="w-full bg-[#FBF8F5] py-20 sm:py-28 border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                Vocational Artistry Admissions 2026
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                Kurla West Studio Cohorts
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-primary font-normal tracking-[-0.01em]">
              The Academy &amp; Diploma Wing
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-espresso max-w-2xl font-light mt-2">
              Transform into an internationally certified bridal makeup artist or high-ticket nail technician with 80% practical hands-on training on live human models.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenSyllabus(activeCourse)}
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#F5EFEB] transition-colors rounded-none"
            >
              <Download className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Download Syllabus &amp; Fees</span>
            </button>

            <button
              onClick={() => onOpenEnrollment(activeCourse)}
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors rounded-none"
            >
              <span>Reserve 2026 Seat</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Course Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {ACADEMY_COURSES.map((course) => {
            const isSelected = course.id === activeCourseId;
            return (
              <div
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`cursor-pointer p-6 border transition-all duration-300 rounded-none ${
                  isSelected
                    ? 'bg-[#FDFBF7] border-ink-primary shadow-none'
                    : 'bg-[#F5EFEB] border-[#EAE3DA] hover:border-[#DFD7CD]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
                    {course.code} • {course.duration}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-primary font-medium">
                    Batch Cap: {course.seatsTotal} Students
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-normal mb-2">
                  {course.title}
                </h3>

                <p className="text-[12px] font-sans text-ink-espresso font-light line-clamp-2 mb-4">
                  {course.subtitle}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#EAE3DA]">
                  <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-ink-muted">
                    Batches: Nov &amp; Dec 2026
                  </span>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-[0.14em] font-medium ${
                      isSelected ? 'text-ink-primary underline' : 'text-ink-muted'
                    }`}
                  >
                    {isSelected ? 'Currently Viewing' : 'View Syllabus →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Course Detailed Matrix */}
        <div className="border border-[#EAE3DA] bg-[#FDFBF7] p-6 sm:p-10 rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Key Highlights & Practicum Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                  Curriculum Overview &amp; Certification
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary font-normal mt-3 mb-2">
                  {activeCourse.title}
                </h3>
                <p className="text-[13px] font-sans text-ink-espresso leading-relaxed font-light">
                  {activeCourse.subtitle}
                </p>
              </div>

              {/* Practicum Highlights Grid */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Signature Training Protocols:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeCourse.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 bg-[#FBF8F5] border border-[#EAE3DA]">
                      <CheckCircle2 className="w-4 h-4 text-ink-primary stroke-[1.5] mt-0.5 flex-shrink-0" />
                      <span className="text-[12px] font-sans text-ink-espresso leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kit Details Strip */}
              <div className="p-4 bg-[#F5EFEB] border border-[#EAE3DA] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-muted">
                  Studio Kit &amp; Practicum Tools:
                </span>
                <p className="text-[12px] font-sans text-ink-espresso font-light">
                  {activeCourse.kitDetails}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenSyllabus(activeCourse)}
                  className="flex-1 py-3.5 px-4 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#F5EFEB] transition-colors flex items-center justify-center gap-2 rounded-none"
                >
                  <Download className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>Download Syllabus &amp; Fee Structure</span>
                </button>

                <button
                  onClick={() => onOpenEnrollment(activeCourse)}
                  className="flex-1 py-3.5 px-4 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors flex items-center justify-center gap-2 rounded-none"
                >
                  <span>Reserve Seat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* Right Column: Batch Schedule & Detailed Modules */}
            <div className="lg:col-span-6 space-y-6">
              {/* Batch Schedule Box */}
              <BatchSchedule
                batches={activeCourse.batchSchedule}
                seatsRemaining={activeCourse.seatsRemaining}
              />

              {/* In-Depth Accordion Modules */}
              <div id="curriculum">
                <CurriculumAccordion modules={activeCourse.modules} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
