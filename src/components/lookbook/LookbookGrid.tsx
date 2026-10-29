'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Filter } from 'lucide-react';
import { WeddingFunction, LookbookItem } from '@/types';
import { LOOKBOOK_ITEMS } from '@/data/lookbookData';
import { LookbookCard } from './LookbookCard';
import { LookbookSkeleton } from './LookbookSkeleton';

interface LookbookGridProps {
  onOpenDateCheck: (selectedLook?: LookbookItem) => void;
}

export const LookbookGrid: React.FC<LookbookGridProps> = ({ onOpenDateCheck }) => {
  const [activeTab, setActiveTab] = useState<WeddingFunction>('All Looks');
  const [isLoading, setIsLoading] = useState(false);

  const categories: WeddingFunction[] = [
    'All Looks',
    'Traditional Bridal',
    'Engagement Glam',
    'Reception Dewy',
    'Maharashtrian Regal',
  ];

  const handleTabChange = (cat: WeddingFunction) => {
    if (cat === activeTab) return;
    setIsLoading(true);
    setActiveTab(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  const filteredItems =
    activeTab === 'All Looks'
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="lookbook" className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                Haute Couture Bridal Portfolio
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                Archived &amp; Real Brides
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-primary font-normal tracking-[-0.01em]">
              The Bridal Lookbook Showcase
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-espresso max-w-xl font-light mt-2">
              Curated wedding day signatures engineered for 18-hour sweat resistance, tear-proof mandap rituals, and flawless 4K cinematic optics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenDateCheck()}
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors rounded-none"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Check Date Availability</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#EAE3DA] scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleTabChange(cat)}
                  className={`px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.14em] transition-all rounded-none border ${
                    isActive
                      ? 'bg-ink-primary text-canvas-primary border-ink-primary'
                      : 'bg-canvas-secondary text-ink-espresso border-[#EAE3DA] hover:border-ink-primary hover:text-ink-primary'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lookbook Grid Showcase */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <LookbookSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <LookbookCard
                key={item.id}
                item={item}
                onSelectLook={(selected) => onOpenDateCheck(selected)}
              />
            ))}
          </div>
        )}

        {/* Lookbook Sub-Banner Note */}
        <div className="mt-14 p-6 bg-[#F5EFEB] border border-[#EAE3DA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FDFBF7] border border-[#EAE3DA] rounded-none">
              <Sparkles className="w-5 h-5 stroke-[1.5] text-ink-primary" />
            </div>
            <div>
              <p className="font-serif text-base text-ink-primary font-medium">
                Destination &amp; Pre-Wedding Inquiries Welcomed
              </p>
              <p className="text-[12px] font-sans text-ink-espresso font-light">
                Outstation bridal bookings across Goa, Udaipur, Jaipur, and international locations are managed with advance flight &amp; kit scheduling.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenDateCheck()}
            className="px-6 py-3 text-[11px] font-sans uppercase tracking-[0.14em] font-medium border border-ink-primary text-ink-primary hover:bg-ink-primary hover:text-canvas-primary transition-colors whitespace-nowrap rounded-none"
          >
            Inquire Bridal Dates
          </button>
        </div>
      </div>
    </section>
  );
};
