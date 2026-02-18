// components/sections/Hero.tsx
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral-50">
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Anxiety, trauma, or burnout?<br />
            <span className="text-primary">You don’t have to face it alone.</span>
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Licensed psychologist in <strong>Santa Monica, CA</strong> offering in-person and online therapy 
            for adults who feel stuck in overthinking, emotional exhaustion, or the weight of past experiences.
          </p>
          <p className="text-lg mb-8 text-gray-600">
            You’re not just “functional”—you deserve to feel grounded, connected, and at ease in your own life.
          </p>
          <Button size="lg">Book a free 15-minute consultation</Button>
          <p className="mt-4 text-sm text-gray-500">
            Serving California residents via telehealth • In-person sessions in Santa Monica
          </p>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          {/* Replace with a warm, welcoming image of Dr. Maya or office space */}
          <img 
            src="/images/dr-maya-hero.jpg" 
            alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
