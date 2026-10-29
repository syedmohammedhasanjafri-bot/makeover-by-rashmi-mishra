'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { LookbookItem } from '@/types';
import { OFFICIAL_WA_LINK } from '@/lib/whatsappRouter';

interface LookbookCardProps {
  item: LookbookItem;
  onSelectLook: (item: LookbookItem) => void;
}

export const LookbookCard: React.FC<LookbookCardProps> = ({ item, onSelectLook }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="border border-[#EAE3DA] bg-[#FBF8F5] p-3 rounded-none flex flex-col justify-between transition-all duration-300 hover:border-ink-primary group">
      <div>
        {/* Top Header Strip */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
            {item.category}
          </span>
          {item.signatureLook && (
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-primary font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#1C1917] rounded-none"></span>
              Signature Signature
            </span>
          )}
        </div>

        {/* Image Frame with Skeleton Layer */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5EFEB] border border-[#EAE3DA]">
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton-shimmer z-10" />
          )}

          <Image
            src={item.imageUrl}
            alt={`Makeover by Rashmi Mishra - ${item.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Hover Overlay Button */}
          <div className="absolute inset-0 bg-[#1C1917]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20">
            <button
              onClick={() => onSelectLook(item)}
              className="w-full py-2.5 px-3 bg-[#FDFBF7] text-ink-primary text-[11px] font-sans uppercase tracking-[0.14em] font-medium border border-ink-primary shadow-none hover:bg-ink-primary hover:text-canvas-primary transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Inquire Look Availability</span>
            </button>
          </div>
        </div>

        {/* Content Details */}
        <div className="mt-3.5 space-y-1.5">
          <h3 className="font-serif text-lg text-ink-primary font-medium tracking-tight">
            {item.title}
          </h3>
          <p className="text-[12px] font-sans text-ink-espresso leading-snug font-light">
            {item.subtitle}
          </p>
          <p className="text-[11px] font-sans text-ink-muted leading-relaxed pt-1 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Draping & Quick Actions */}
      <div className="mt-4 pt-3 border-t border-[#EAE3DA] flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-muted truncate max-w-[170px]">
          {item.drapeAndStyle}
        </span>
        <button
          onClick={() => onSelectLook(item)}
          className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-primary hover:underline flex items-center gap-1 flex-shrink-0"
        >
          <span>Reserve Look</span>
          <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
        </button>
      </div>
    </article>
  );
};
