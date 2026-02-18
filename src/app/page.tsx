'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Specialties from '@/components/Specialties';
import Sanctuary from '@/components/Sanctuary'; // ✨ new meditative experience
import Quote from '@/components/Quote';
import About from '@/components/About';
import FAQs from '@/components/FAQs';
import ProfessionalBackground from '@/components/ProfessionalBackground';
import OurOffice from '@/components/OurOffice';
import Footer from '@/components/Footer';
import MotionButton from '@/components/ui/MotionButton';
import CTA from '@/components/CTA';


export default function Home() {
  return (
    <main>
      <Hero />
      <Specialties />
      
      {/* 🧘 Meditative experience */}
      <Sanctuary />

      <Quote />
      <About />
      <FAQs />
      <ProfessionalBackground />
      <OurOffice />
      <CTA />

      {/* 🪄 Morphing button → morphs into the "Let's Connect" heading on /contact */}
      <div className="flex justify-center py-16">
        <Link href="/contact" passHref>
              <MotionButton href="/contact">
            Healing, just one click away →
          </MotionButton>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
