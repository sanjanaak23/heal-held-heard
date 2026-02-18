'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AffirmationCard from './AffirmationCard';

export default function Sanctuary() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-center text-text mb-4"
        >
          A space that breathes with you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-text-soft max-w-2xl mx-auto mb-12"
        >
          Pause, breathe, and take a moment just for yourself.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Calming Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/6480714/pexels-photo-6480714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Calming therapy space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Right: Affirmation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center h-full"
          >
            <AffirmationCard />
            <p className="text-sm text-text-soft mt-6 italic">
              “This space is yours. No rush, no expectation.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
