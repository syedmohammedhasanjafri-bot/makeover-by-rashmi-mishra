import React from 'react';
import { Award, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_COMMUNITY_COUNT, OFFICIAL_EXPERIENCE_YEARS, STUDIO_LOCATION_NAME } from '@/lib/whatsappRouter';

export const TrustStrip: React.FC = () => {
  const metrics = [
    {
      icon: <Award className="w-4 h-4 stroke-[1.5] text-ink-espresso" />,
      label: 'Artistry Legacy',
      value: `${OFFICIAL_EXPERIENCE_YEARS} Years Industry Excellence`,
    },
    {
      icon: <Users className="w-4 h-4 stroke-[1.5] text-ink-espresso" />,
      label: 'Beauty Community',
      value: `${OFFICIAL_COMMUNITY_COUNT} Dedicated Followers`,
    },
    {
      icon: <Sparkles className="w-4 h-4 stroke-[1.5] text-ink-espresso" />,
      label: 'Brides & Alumni',
      value: '600+ Brides Styled & 250+ Certified',
    },
    {
      icon: <MapPin className="w-4 h-4 stroke-[1.5] text-ink-espresso" />,
      label: 'Central Studio',
      value: `${STUDIO_LOCATION_NAME} (BKC / Bandra Access)`,
    },
  ];

  return (
    <div className="w-full bg-[#F5EFEB] border-y border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE3DA]">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 ${
                idx !== 0 ? 'sm:pl-6' : ''
              } ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}
            >
              <div className="p-2 bg-[#FDFBF7] border border-[#EAE3DA] rounded-none flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  {item.label}
                </p>
                <p className="text-[13px] font-serif font-medium text-ink-primary tracking-[0.01em]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
