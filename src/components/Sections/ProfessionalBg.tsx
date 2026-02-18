// components/sections/ProfessionalBg.tsx
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ProfessionalBg() {
  return (
    <SectionWrapper id="professional-bg" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          My Professional Background
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Education */}
          <div>
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-medium mb-3">Education</h3>
            <p className="text-gray-700">
              Psy.D. in Clinical Psychology<br />
              Pepperdine University, Los Angeles<br />
              B.A. in Psychology, UCLA
            </p>
          </div>
          {/* Licensure */}
          <div>
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-medium mb-3">Licensure</h3>
            <p className="text-gray-700">
              Licensed Clinical Psychologist<br />
              California Board of Psychology<br />
              License #PSY33572
            </p>
          </div>
          {/* Certifications & Training */}
          <div>
            <div className="text-4xl mb-4">🕊️</div>
            <h3 className="text-xl font-medium mb-3">Certifications</h3>
            <p className="text-gray-700">
              EMDR Certified Therapist<br />
              CBT Certificate – Beck Institute<br />
              Mindfulness-Based Stress Reduction (MBSR)
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
