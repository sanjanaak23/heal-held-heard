'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface MotionButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function MotionButton({ children, href = '/contact', className = '' }: MotionButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      type: 'tween' as const,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <motion.button
      onClick={handleClick}
      layoutId={href === '/contact' ? 'healing-button' : undefined}
      className={`group relative bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg md:text-xl font-medium shadow-lg border-2 border-transparent overflow-hidden ${className}`}
      animate={pulseAnimation}
      whileHover={{
        scale: 1.05,
        backgroundColor: '#ffffff',
        color: '#9e7bdb',
        borderColor: '#463369',
        boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.3)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
      </span>
    </motion.button>
  );
}
