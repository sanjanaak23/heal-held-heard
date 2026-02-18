'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Do you accept insurance?',
    answer:
      'I am an out-of-network provider for most insurance plans. I can provide a superbill that you may submit to your insurance company for possible reimbursement. Please contact your provider to verify your out-of-network mental health benefits.',
  },
  {
    question: 'What are your session rates?',
    answer:
      'My rate is $250 per 50-minute session. I also offer a limited number of sliding-scale spots for clients with financial need—please inquire about availability.',
  },
  {
    question: 'Do you have any openings right now?',
    answer:
      'I currently have limited availability for new clients. I encourage you to reach out via the contact page to schedule a free 15-minute consultation and check current openings.',
  },
  {
    question: 'Do you offer in-person or online therapy?',
    answer:
      'Both. My office is located at 123th Street 45 W, Santa Monica, CA 90401. I also provide secure telehealth sessions for clients anywhere in California.',
  },
  {
    question: 'How long are sessions?',
    answer:
      'Standard sessions are 50 minutes. Extended sessions may be available upon request.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-sans text-3xl md:text-4xl font-light text-center text-text mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-white/50"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-sans text-lg font-medium text-text">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary ml-4 flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              {/* Answer with Animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-soft leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
