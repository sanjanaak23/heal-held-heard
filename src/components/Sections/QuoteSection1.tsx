// components/sections/QuoteSection1.tsx
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function QuoteSection1() {
  const struggles = [
    'Persistent feelings of sadness or hopelessness',
    'Trouble focusing or making decisions',
    'Difficulty maintaining relationships',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed',
  ];

  return (
    <SectionWrapper className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          You don’t have to do this all alone.
        </h2>
        <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          If you are facing any of these, there’s hope:
        </p>
        <ul className="text-left max-w-md mx-auto space-y-3 text-gray-700">
          {struggles.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg mt-8 text-gray-700">
          With empathy and guidance, we'll work together to navigate the challenges life throws your way.
        </p>
      </div>
    </SectionWrapper>
  );
}
