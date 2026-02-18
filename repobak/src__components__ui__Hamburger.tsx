// components/ui/Hamburger.tsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollLink from '@/components/shared/ScrollLink';
import Button from '@/components/ui/Button'; // this button links to /contact
import { ReactNode } from 'react';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: '#hero', label: 'Home' },
    { id: '#specialties', label: 'Specialties' },
    { id: '#about', label: 'About' },
    { id: '#our-office', label: 'Our Office' },
    { id: '#faqs', label: 'FAQs' },
    { id: '#contact', label: 'Contact' }, // this is the homepage contact section
  ];

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <div className="w-6 h-0.5 bg-current mb-1"></div>
        <div className="w-6 h-0.5 bg-current mb-1"></div>
        <div className="w-6 h-0.5 bg-current"></div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg z-50"
          >
            <div className="flex flex-col p-4 space-y-3">
              {sections.map((item) => (
                <ScrollLink key={item.id} href={item.id} onClick={() => setIsOpen(false)}>
                  <span className="text-lg hover:text-primary">{item.label}</span>
                </ScrollLink>
              ))}
              {/* Primary CTA inside hamburger too */}
              <Button href="/contact" className="mt-2">
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}