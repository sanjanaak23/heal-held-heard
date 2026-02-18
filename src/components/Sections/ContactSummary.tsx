import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ContactSummary() {
  return (
    <SectionWrapper id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Get started today.</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Ready to take the first step towards a happier, healthier you? 
          Contact me to book your first session. I look forward to starting this therapeutic journey with you.
        </p>
        <Button href="/contact" size="lg">
          Get in touch
        </Button>
        <p className="mt-6 text-sm text-gray-600">
          <span className="font-medium">Office:</span> 123th Street 45 W, Santa Monica, CA 90401<br />
          <span className="font-medium">Hours:</span> Mon–Fri, 10am–6pm
        </p>
      </div>
    </SectionWrapper>
  );
}
