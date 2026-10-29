'use client';

import React, { useState } from 'react';
import { ChevronDown, Check, Clock } from 'lucide-react';
import { CurriculumModule } from '@/types';

interface CurriculumAccordionProps {
  modules: CurriculumModule[];
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-2 border border-[#EAE3DA] bg-[#FDFBF7] p-4 sm:p-5 rounded-none">
      <div className="flex items-center justify-between pb-3 border-b border-[#EAE3DA]">
        <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-primary font-medium">
          Comprehensive Daily Curriculum Modules
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-muted">
          80% Practical Hands-On
        </span>
      </div>

      <div className="divide-y divide-[#EAE3DA]">
        {modules.map((mod, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={mod.moduleNumber} className="py-2.5">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left py-2 hover:text-ink-espresso transition-colors group focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA] text-ink-espresso">
                    {mod.moduleNumber}
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-ink-primary group-hover:text-ink-espresso transition-colors">
                      {mod.title}
                    </h4>
                    <span className="text-[11px] font-mono text-ink-muted">
                      {mod.duration} • Focus: {mod.focus}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-1 border border-[#EAE3DA] bg-[#FBF8F5] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#F5EFEB]' : ''
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 stroke-[1.5] text-ink-primary" />
                </div>
              </button>

              {isOpen && (
                <div className="pt-2 pb-3 pl-11 pr-4 space-y-2 text-ink-espresso animate-fadeIn">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-ink-muted mb-2">
                    Key Practical Competencies:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {mod.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-ink-primary stroke-[1.5] mt-0.5 flex-shrink-0" />
                        <span className="text-[12px] font-sans text-ink-espresso leading-snug">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
