import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import {
  OFFICIAL_WA_LINK,
  STUDIO_LOCATION_NAME,
  STUDIO_GOOGLE_MAPS_URL,
  OFFICIAL_COMMUNITY_COUNT,
  OFFICIAL_EXPERIENCE_YEARS,
} from '@/lib/whatsappRouter';

export const StudioLocation: React.FC = () => {
  return (
    <section id="location" className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                Central Mumbai Studio &amp; Academy
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                Kurla West, Mumbai
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-primary font-normal tracking-[-0.01em]">
              Studio Location &amp; Trust Architecture
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-espresso max-w-xl font-light mt-2">
              Centrally accessible from BKC, Bandra, Chembur, and Navi Mumbai. Equipped with high-definition bridal trial lighting and professional student workstations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={STUDIO_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#F5EFEB] transition-colors rounded-none"
            >
              <Navigation className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Get Directions on Google Maps</span>
            </a>

            <a
              href={OFFICIAL_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-sans uppercase font-medium tracking-[0.12em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors rounded-none"
            >
              <span>WhatsApp Booking</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>
          </div>
        </div>

        {/* 2-Column Location & Trust Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Address, Landmark & Operating Ledger */}
          <div className="lg:col-span-7 border border-[#EAE3DA] bg-[#FBF8F5] p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3DA]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FDFBF7] border border-[#EAE3DA] rounded-none">
                  <MapPin className="w-5 h-5 text-ink-primary stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink-primary font-medium">
                    Kurla Studio &amp; Training Academy
                  </h3>
                  <p className="text-[12px] font-sans text-ink-espresso font-light">
                    Kurla West, Mumbai, Maharashtra 400070
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.16em] text-ink-espresso bg-[#F5EFEB] px-2.5 py-1 border border-[#EAE3DA]">
                Central Suburbs Hub
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FDFBF7] border border-[#EAE3DA] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Transit Accessibility:
                </span>
                <p className="text-[13px] font-sans text-ink-primary font-medium">
                  5 Mins from Kurla Station
                </p>
                <p className="text-[11px] font-sans text-ink-espresso font-light">
                  Seamless connectivity via Central &amp; Harbour local train lines and Eastern Express Highway.
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF7] border border-[#EAE3DA] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Bandra-Kurla Complex (BKC):
                </span>
                <p className="text-[13px] font-sans text-ink-primary font-medium">
                  10 Mins from BKC Hub
                </p>
                <p className="text-[11px] font-sans text-ink-espresso font-light">
                  Effortless appointment commute for South Mumbai, Bandra, and outstation brides staying at luxury BKC hotels.
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF7] border border-[#EAE3DA] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Studio Hours (Consultations):
                </span>
                <p className="text-[13px] font-sans text-ink-primary font-medium">
                  10:30 AM – 07:00 PM (IST)
                </p>
                <p className="text-[11px] font-sans text-ink-espresso font-light">
                  Prior appointment reservation mandatory for one-on-one bridal vanity trials.
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF7] border border-[#EAE3DA] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Academy Cohort Timings:
                </span>
                <p className="text-[13px] font-sans text-ink-primary font-medium">
                  Morning &amp; Afternoon Batches
                </p>
                <p className="text-[11px] font-sans text-ink-espresso font-light">
                  11:00 AM – 03:00 PM (Masterclass) | 03:30 PM – 06:30 PM (Nails).
                </p>
              </div>
            </div>

            {/* Direct Google Maps & Direction Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={STUDIO_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <Navigation className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Open in Google Maps Application</span>
              </a>

              <a
                href={`${OFFICIAL_WA_LINK}?text=${encodeURIComponent(
                  'Hello Studio Team, I would like to schedule a personal studio consultation at your Kurla, Mumbai academy.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 text-[11px] font-sans uppercase font-medium tracking-[0.14em] bg-transparent text-ink-primary border border-ink-primary hover:bg-[#FDFBF7] transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <span>Schedule Studio Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: Founder Authority & Trust Badges */}
          <div className="lg:col-span-5 border border-[#EAE3DA] bg-[#FDFBF7] p-6 sm:p-8 rounded-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-[#EAE3DA]">
                <div className="p-2.5 bg-[#F5EFEB] border border-[#EAE3DA] rounded-none">
                  <Award className="w-5 h-5 text-ink-primary stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink-primary font-medium">
                    Rashmi Mishra
                  </h3>
                  <p className="text-[12px] font-mono uppercase tracking-[0.14em] text-ink-muted">
                    Founder &amp; Celebrity Artistry Director
                  </p>
                </div>
              </div>

              {/* Trust Authority Metrics */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between p-3.5 bg-[#FBF8F5] border border-[#EAE3DA]">
                  <span className="text-[12px] font-sans text-ink-espresso">
                    Verified Digital Community
                  </span>
                  <span className="text-base font-serif font-medium text-ink-primary">
                    {OFFICIAL_COMMUNITY_COUNT} Followers
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#FBF8F5] border border-[#EAE3DA]">
                  <span className="text-[12px] font-sans text-ink-espresso">
                    Celebrity &amp; Luxury Bridal Portfolios
                  </span>
                  <span className="text-base font-serif font-medium text-ink-primary">
                    600+ Real Brides
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#FBF8F5] border border-[#EAE3DA]">
                  <span className="text-[12px] font-sans text-ink-espresso">
                    Academy Alumni Across India
                  </span>
                  <span className="text-base font-serif font-medium text-ink-primary">
                    250+ Certified Artists
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#FBF8F5] border border-[#EAE3DA]">
                  <span className="text-[12px] font-sans text-ink-espresso">
                    Industry Experience
                  </span>
                  <span className="text-base font-serif font-medium text-ink-primary">
                    {OFFICIAL_EXPERIENCE_YEARS} Active Years
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Verification Badge */}
            <div className="p-4 bg-[#F5EFEB] border border-[#EAE3DA] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-ink-primary stroke-[1.5] flex-shrink-0" />
              <div>
                <p className="text-[12px] font-sans font-medium text-ink-primary">
                  Official WhatsApp Business Channel
                </p>
                <p className="text-[11px] font-mono text-ink-muted">
                  Official Router: wa.link/grbesm (Encrypted SSL Concierge)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
