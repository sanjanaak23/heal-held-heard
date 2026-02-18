// components/sections/QuoteSection2.tsx
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';

export default function QuoteSection2() {
  return (
    <SectionWrapper className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Healing isn’t about becoming someone new.
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          It’s about coming home to yourself—with more clarity, compassion, and calm.
        </p>
        <Button variant="outline" className="border-white text-white hover:bg-neutral-50 hover:text-primary">
          Start your journey
        </Button>
      </div>
    </SectionWrapper>
  );
}
