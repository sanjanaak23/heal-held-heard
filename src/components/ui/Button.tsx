// src/components/ui/Button.tsx
'use client';
import React from 'react';

type Variant = 'solid' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}

export default function Button({
  children,
  className = '',
  variant = 'solid',
  ...props
}: ButtonProps) {
  const base =
    'group relative px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg md:text-xl font-medium transition-all duration-300 ease-out overflow-hidden';

  const effect =
    'shadow-lg hover:shadow-2xl hover:scale-105 animate-breathe';

  const variantClass =
    variant === 'outline'
      ? 'bg-transparent text-current border-2 border-current hover:bg-neutral-50 hover:text-primary'
      : variant === 'ghost'
      ? 'bg-transparent text-current border-0 hover:bg-neutral-50/40'
      : // solid
        'bg-primary text-white border-2 border-transparent hover:bg-neutral-50 hover:text-primary';

  return (
    <button className={`${base} ${effect} ${variantClass} ${className}`} {...props}>
      <span className="relative inline-block">
        {children}
        <span
          className="
            absolute bottom-0 left-1/2 w-0 h-0.5 bg-current
            transition-all duration-300 ease-out
            group-hover:w-full group-hover:left-0
          "
        />
      </span>
    </button>
  );
}