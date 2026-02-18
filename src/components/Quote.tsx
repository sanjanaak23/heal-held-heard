import Section from './Section';
import Link from 'next/link';

export default function Quote() {
  return (
    <Section className="py-20 bg-gradient-to-l from-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            You don’t have to face these challenges alone.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <div className="text-left inline-block">
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Persistent feelings of anxiety or panic</li>
              <li>Difficulty sleeping due to stress or worry</li>
              <li>Feeling disconnected from yourself or others</li>
              <li>Exhaustion from pushing through chronic stress</li>
              <li>Memories or experiences from the past that still affect you</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 mb-10">
            With a warm, collaborative, and grounded approach, we'll work together to help you feel more regulated, resilient, and connected to yourself.
          </p>
          <Link
            href="#our-office"
            className="bg-secondary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary/80 transition duration-300"
          >
            Start Your Healing Journey
          </Link>
        </div>
      </div>
    </Section>
  );
}
