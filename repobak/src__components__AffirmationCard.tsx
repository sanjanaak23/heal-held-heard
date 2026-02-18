'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const affirmations = [
  "You are allowed to rest.",
  "Healing happens in moments of stillness.",
  "Your feelings are welcome here.",
  "You don't have to earn peace.",
  "This is your space to just be.",
];

export default function AffirmationCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % affirmations.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 max-w-md mx-auto">
      <p className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-medium">
        Today's affirmation
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="font-sans text-2xl md:text-3xl font-light text-text leading-relaxed"
        >
          “{affirmations[index]}”
        </motion.p>
      </AnimatePresence>
      <div className="flex justify-center mt-6 gap-2">
        {affirmations.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}