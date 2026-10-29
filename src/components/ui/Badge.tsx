import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'subtle' | 'accent' | 'charcoal';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const styles = {
    neutral: 'bg-canvas-secondary border-hairline text-ink-espresso',
    subtle: 'bg-canvas-tertiary border-hairline-strong text-ink-primary',
    accent: 'bg-[#F2EBE5] border-[#DFD7CD] text-ink-primary',
    charcoal: 'bg-ink-primary border-ink-primary text-canvas-primary',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.16em] uppercase font-mono font-medium border rounded-none select-none ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
