import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/testimonialsData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="w-full bg-[#FBF8F5] py-20 sm:py-28 border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                Client &amp; Student Endorsements
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                100% Verified Real Reviews
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-primary font-normal tracking-[-0.01em]">
              Words from Brides &amp; Alumni
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-espresso max-w-xl font-light mt-2">
              Unfiltered reflections from brides on their auspicious wedding days and academy students building high-earning independent artistry careers.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FDFBF7] p-3 border border-[#EAE3DA]">
            <div className="flex items-center text-ink-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-ink-primary text-ink-primary stroke-none" />
              ))}
            </div>
            <span className="text-[12px] font-serif font-medium text-ink-primary ml-1.5">
              5.0 Star Rating
            </span>
            <span className="text-[11px] font-mono text-ink-muted">
              (600+ Brides Styled)
            </span>
          </div>
        </div>

        {/* 3-Column Testimonial Grid with Razor-Sharp Corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="border border-[#EAE3DA] bg-[#FDFBF7] p-6 sm:p-7 rounded-none flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE3DA] mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
                    {t.role}
                  </span>
                  <div className="flex items-center text-ink-primary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-ink-primary text-ink-primary stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif text-lg text-ink-primary font-medium mb-3 leading-snug">
                  &ldquo;{t.highlight}&rdquo;
                </h3>

                <p className="text-[13px] font-sans text-ink-espresso leading-relaxed font-light mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Author Strip */}
              <div className="pt-4 border-t border-[#EAE3DA]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base text-ink-primary font-medium">
                      {t.clientName}
                    </h4>
                    <p className="text-[11px] font-mono text-ink-muted">
                      {t.location}
                    </p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-ink-primary stroke-[1.5]" />
                </div>
                <p className="text-[10px] font-mono text-ink-muted mt-1 uppercase tracking-[0.1em]">
                  {t.eventOrBatch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
