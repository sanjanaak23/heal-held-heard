// app/contact/page.tsx
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-8"
        >
          Let's Connect
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-lg mb-6">
              Starting therapy is courageous. Get in touch for questions, or to book a free 15-minute consultation.
            </p>
            
            {/* Office Section with Anchor ID */}
            <div id="office" className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-medium mb-4">My Office</h2>
              <p className="mb-2">123th Street 45 W</p>
              <p className="mb-4">Santa Monica, CA 90401</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Hours:</span><br />
                Monday – Friday<br />
                10am – 6pm
              </p>
            </div>

            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> maya@drmayatherapy.com</p>
              <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
            </div>

            {/* HIPAA Notice */}
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
              <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. 
              Squarespace stores data that is input into forms in the Marketing tab under Profiles. 
              Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
            </div>
          </div>

          {/* Right Column: Scheduling */}
          <div>
            <h2 className="text-2xl font-medium mb-4">Book an appointment</h2>
            <p className="mb-4">Add your scheduling widget below.</p>
            <div className="bg-gray-100 p-8 rounded-lg text-center text-gray-500">
              [HIPAA-compliant scheduling widget will appear here]
            </div>
          </div>
        </div>

        {/* Office Images */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium mb-6">A calm space for healing</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/office1.jpg" alt="Therapy office" className="rounded-lg" />
            <img src="/images/office2.jpg" alt="Waiting area" className="rounded-lg" />
            <img src="/images/office3.jpg" alt="Counseling room" className="rounded-lg" />
            <img src="/images/office4.jpg" alt="Office exterior" className="rounded-lg" />
          </div>
        </div>

        {/* 🔙 BACK TO HOME LINK (at the very bottom) */}
        <div className="mt-20 text-center border-t pt-8">
          <Link href="/" className="text-gray-600 hover:text-primary transition inline-flex items-center gap-2">
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
