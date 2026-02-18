// components/sections/FAQs.tsx
import SectionWrapper from '@/components/ui/SectionWrapper';

const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'I am an out-of-network provider for most insurance plans. I can provide a superbill that you may submit to your insurance company for possible reimbursement. Please contact your provider to verify your out-of-network mental health benefits.',
  },
  {
    q: 'What are your session rates?',
    a: 'My rate is $250 per 50-minute session. I also offer a limited number of sliding-scale spots for clients with financial need—please inquire about availability.',
  },
  {
    q: 'Do you have any openings right now?',
    a: 'I currently have limited availability for new clients. I encourage you to reach out via the contact page to schedule a free 15-minute consultation and check current openings.',
  },
  {
    q: 'Do you offer in-person or online therapy?',
    a: 'Both. My office is located at 123th Street 45 W, Santa Monica, CA 90401. I also provide secure telehealth sessions for clients anywhere in California.',
  },
];

export default function FAQs() {
  return (
    <SectionWrapper id="faqs" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          Still have questions? <a href="/contact" className="text-primary underline hover:no-underline">Get in touch</a>.
        </p>
      </div>
    </SectionWrapper>
  );
}
