'use client';

import { motion } from 'framer-motion';

const backgroundData = [
  {
    title: 'Education',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    details: [
      'Psy.D. in Clinical Psychology',
      'Pepperdine University',
      'B.A. in Psychology, UCLA',
    ],
  },
  {
    title: 'Licensure',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
      </svg>
    ),
    details: [
      'Licensed Clinical Psychologist',
      'California Board of Psychology',
      'License #PSY33572',
      'Active since 2012',
    ],
  },
  {
    title: 'Certifications',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    details: [
      'EMDR Certified Therapist',
      'CBT Certificate – Beck Institute',
      'Mindfulness-Based Stress Reduction (MBSR)',
      'Somatic Experiencing (advanced)',
    ],
  },
];

export default function ProfessionalBackground() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl md:text-4xl font-light text-center text-text mb-12"
        >
          My Professional Background
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {backgroundData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="group bg-neutral-50 rounded-2xl p-8 shadow-md hover:shadow-xl border border-neutral-100 flex flex-col items-center text-center"
            >
              {/* Icon with hover animation */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="mb-4"
              >
                {item.icon}
              </motion.div>

              <h3 className="font-sans text-xl font-medium text-text mb-3">
                {item.title}
              </h3>

              <div className="space-y-2 text-text-soft">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm md:text-base">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Subtle decorative line on hover */}
              <div className="w-12 h-0.5 bg-primary/30 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
