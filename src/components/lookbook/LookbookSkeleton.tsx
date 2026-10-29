import React from 'react';

export const LookbookSkeleton: React.FC = () => {
  return (
    <div className="border border-[#EAE3DA] bg-[#FBF8F5] p-3 rounded-none animate-pulse">
      {/* Top Meta Skeleton */}
      <div className="flex items-center justify-between mb-3">
        <div className="h-4 w-24 bg-[#EAE3DA] rounded-none"></div>
        <div className="h-4 w-16 bg-[#EAE3DA] rounded-none"></div>
      </div>

      {/* Main Image Shimmer Placeholder */}
      <div className="relative aspect-[4/5] w-full skeleton-shimmer rounded-none border border-[#EAE3DA]"></div>

      {/* Bottom Caption Skeleton */}
      <div className="mt-3 pt-3 border-t border-[#EAE3DA] space-y-2">
        <div className="h-5 w-3/4 bg-[#EAE3DA] rounded-none"></div>
        <div className="h-3.5 w-full bg-[#EAE3DA] rounded-none"></div>
        <div className="h-3.5 w-1/2 bg-[#EAE3DA] rounded-none"></div>
      </div>
    </div>
  );
};
