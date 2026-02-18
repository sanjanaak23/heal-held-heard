'use client';

import { motion } from 'framer-motion';
import MotionButton from '@/components/ui/MotionButton';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Decorative organic shapes (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-text mb-4">
            Get started today.
          </h2>
          <p className="text-lg text-text-soft mb-8 max-w-xl mx-auto">
            Ready to take the first step towards a happier, healthier you? 
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
          <MotionButton href="/contact" className="text-lg">
            Book a free consultation
          </MotionButton>
        </motion.div>
      </div>
    </section>
  );
}
