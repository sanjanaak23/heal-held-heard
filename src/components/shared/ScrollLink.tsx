// components/shared/ScrollLink.tsx
'use client';
import { ReactNode } from 'react';

export default function ScrollLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: ReactNode; 
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <a href={href} onClick={handleClick} className="block">
      {children}
    </a>
  );
}
