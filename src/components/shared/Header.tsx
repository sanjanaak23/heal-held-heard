// In components/shared/Header.tsx
import Link from 'next/link';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <button onClick={() => scrollToSection('specialties')}>
        Services
      </button>
      <button onClick={() => scrollToSection('our-office')}>
        Our Office
      </button>
      <button onClick={() => scrollToSection('contact')}>
        Contact
      </button>
    </nav>
  );
};
