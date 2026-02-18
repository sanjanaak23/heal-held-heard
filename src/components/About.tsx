'use client';

import { motion } from 'framer-motion';
import MotionButton from '@/components/ui/MotionButton';
import Image from 'next/image';

export default function About() {
  const testimonials = [
    {
      quote: "Dr. Reynolds helped me break free from anxiety that was holding me back.",
      author: "Sarah M.",
      role: "Tech Executive"
    },
    {
      quote: "Her trauma-informed approach made me feel safe and truly heard.",
      author: "James K.",
      role: "Creative Director"
    },
    {
      quote: "Finally found someone who understands burnout and knows how to help.",
      author: "Elena R.",
      role: "Healthcare Professional"
    }
  ];

  const approaches = [
    { icon: '🧠', title: 'Evidence-Based', description: 'Using proven therapeutic methods' },
    { icon: '🤝', title: 'Collaborative', description: 'Working together toward your goals' },
    { icon: '💚', title: 'Compassionate', description: 'Meeting you where you are' },
    { icon: '🎯', title: 'Results-Focused', description: 'Practical solutions for real change' }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Main Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, licensed clinical psychologist"
                fill
                className="object-cover"
                priority
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-text">
              I'm Dr. Maya Reynolds.
            </h2>

            {/* Bio paragraph */}
            <motion.p
              className="text-text-soft leading-relaxed text-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              I'm a licensed clinical psychologist based in{' '}
              <span className="font-medium text-primary">Santa Monica, California</span>, 
              specializing in anxiety, trauma, and burnout. My approach is warm, collaborative, 
              and grounded – helping high‑achieving adults reconnect with themselves and 
              find lasting calm.
            </motion.p>

            {/* Credentials as icons + text */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <p className="text-primary font-medium">Education</p>
                <p className="text-text-soft text-sm">Psy.D. in Clinical Psychology<br />Pepperdine University</p>
              </div>
              <div>
                <p className="text-primary font-medium">Licensure</p>
                <p className="text-text-soft text-sm">CA License #PSY33572</p>
              </div>
              <div>
                <p className="text-primary font-medium">Certifications</p>
                <p className="text-text-soft text-sm">EMDR Certified · CBT · MBSR</p>
              </div>
              <div>
                <p className="text-primary font-medium">Experience</p>
                <p className="text-text-soft text-sm">12+ years supporting individuals</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <MotionButton href="/contact">
                Work with me
              </MotionButton>
            </div>
          </motion.div>
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-text mb-4">My Approach</h3>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Every person is unique. I customize my approach to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="bg-neutral-50 p-6 rounded-2xl text-center border border-neutral-100 transition-all"
              >
                <div className="text-5xl mb-3">{approach.icon}</div>
                <h4 className="font-medium text-text mb-2">{approach.title}</h4>
                <p className="text-text-soft text-sm">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-text mb-4">What Clients Say</h3>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Real stories from people who've found healing and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-text italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-medium text-text">{testimonial.author}</p>
                  <p className="text-text-soft text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-light text-text mb-4">My Philosophy</h3>
          <p className="text-text-soft text-lg max-w-3xl mx-auto leading-relaxed">
            Healing isn't about "fixing" what's broken—it's about understanding yourself more deeply, 
            building resilience, and creating lasting change. You don't have to do this alone. 
            I'm here to guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
