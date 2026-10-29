import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AcademyCourse } from '@/types';

interface BatchScheduleProps {
  batches: AcademyCourse['batchSchedule'];
  seatsRemaining: number;
}

export const BatchSchedule: React.FC<BatchScheduleProps> = ({ batches, seatsRemaining }) => {
  return (
    <div className="border border-[#EAE3DA] bg-[#FDFBF7] p-4 sm:p-5 rounded-none space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#EAE3DA]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 stroke-[1.5] text-ink-espresso" />
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-primary font-medium">
            2026 Admissions Calendar
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-espresso bg-[#F5EFEB] px-2 py-0.5 border border-[#EAE3DA]">
          {seatsRemaining} Seats Remaining
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {batches.map((batch, idx) => (
          <div
            key={idx}
            className="p-3 bg-[#FBF8F5] border border-[#EAE3DA] space-y-1.5 rounded-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-serif font-medium text-ink-primary">
                {batch.month}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.14em] text-ink-espresso font-medium bg-[#F5EFEB] px-1.5 py-0.5 border border-[#EAE3DA]">
                {batch.status}
              </span>
            </div>
            <p className="text-[11px] font-mono text-ink-espresso flex items-center gap-1.5">
              <span>{batch.dates}</span>
            </p>
            <p className="text-[10px] font-mono text-ink-muted flex items-center gap-1.5">
              <Clock className="w-3 h-3 stroke-[1.5]" />
              <span>{batch.timings}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
