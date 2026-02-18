'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurOffice() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-light text-text mb-4">
            A Calm Space for Healing
          </h2>
          <p className="text-text-soft max-w-2xl mx-auto">
            Step into an environment designed for safety, comfort, and presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text and details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-text-soft">
              <p>
                My Santa Monica office is designed to feel quiet, grounded, and private—a place where you can arrive as you are and begin to feel at ease. With natural light, comfortable seating, and an uncluttered environment, every detail is intentional.
              </p>
              <p>
                Whether you're seeking in‑person sessions or a hybrid approach, this space offers a sanctuary away from the busyness of daily life.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl shadow-md border border-white/50">
              <h3 className="font-sans text-xl font-medium text-text mb-3">Location & Hours</h3>
              <address className="not-italic text-text-soft space-y-2">
                <p>123th Street 45 W<br />Santa Monica, CA 90401</p>
                <p>
                  <span className="font-medium text-primary">Monday – Friday</span><br />
                  10am – 6pm
                </p>
                <p>In‑person & telehealth sessions available.</p>
              </address>
            </div>

            {/* Optional small button to contact (links to contact page) */}
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors group"
              >
                Schedule a visit
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Image 1 – main office view */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg col-span-2">
              <Image
                src="/images/office-1.jpg"
                alt="Therapy office with comfortable chairs and natural light"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 2 – close up of couch */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/office-2.jpg"
                alt="Cozy couch in therapy room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 3 – peaceful corner */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/office-3.jpg"
                alt="Calming decor and plants"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
