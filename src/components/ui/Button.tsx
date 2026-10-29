import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.14em] transition-all duration-300 rounded-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2.5 gap-2',
    md: 'text-[12px] px-6 py-3.5 gap-2.5',
    lg: 'text-[13px] px-8 py-4 gap-3',
  };

  const variantStyles = {
    primary:
      'bg-ink-primary text-canvas-primary hover:bg-[#2B2724] border border-ink-primary shadow-none active:translate-y-[1px]',
    secondary:
      'bg-canvas-tertiary text-ink-primary hover:bg-[#EAE3DA] border border-hairline-strong active:translate-y-[1px]',
    outline:
      'bg-transparent text-ink-primary border border-ink-primary hover:bg-ink-primary hover:text-canvas-primary active:translate-y-[1px]',
    ghost:
      'bg-transparent text-ink-primary hover:bg-canvas-tertiary border border-transparent hover:border-hairline',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
