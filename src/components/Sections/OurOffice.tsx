// components/sections/OurOffice.tsx
import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';

export default function OurOffice() {
  return (
    <SectionWrapper id="our-office" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">
          A Calm Space for Healing
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-700">
          My Santa Monica office is designed to feel quiet, grounded, and private—a place where you can arrive as you are and begin to feel at ease.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/images/office-chair.jpg" 
              alt="Comfortable therapy chair by window" 
              width={400} 
              height={500}
              className="rounded-lg object-cover w-full h-64"
            />
            <Image 
              src="/images/office-couch.jpg" 
              alt="Warm and inviting counseling space" 
              width={400} 
              height={500}
              className="rounded-lg object-cover w-full h-64"
            />
            <Image 
              src="/images/office-details.jpg" 
              alt="Calming decor and natural light" 
              width={400} 
              height={500}
              className="rounded-lg object-cover w-full h-64 col-span-2"
            />
          </div>

          {/* Office Description */}
          <div>
            <h3 className="text-2xl font-medium mb-4">In-Person & Hybrid Sessions Available</h3>
            <p className="mb-4 text-gray-700">
              Located at <strong>123th Street 45 W, Santa Monica, CA 90401</strong>, my office offers a quiet, 
              uncluttered environment with natural light. Clients often share that the space itself helps them 
              feel more regulated and present.
            </p>
            <p className="mb-6 text-gray-700">
              Every detail—from the comfortable seating to the soft lighting—is intentional. Whether you choose 
              in-person or secure telehealth, my goal is for you to feel safe, respected, and fully supported.
            </p>
            <div className="border-t pt-6">
              <p className="font-medium">Office Hours:</p>
              <p>Monday – Friday, 10am – 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
