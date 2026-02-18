// components/layout/Header.tsx
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Hamburger from '@/components/ui/Hamburger';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-serif">
          Dr. Maya Reynolds, PsyD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact#office" className="hover:text-primary transition">
            Our Office
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Button href="/contact" size="sm">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Hamburger (scrolls to homepage sections) */}
        <Hamburger />
      </div>
    </header>
  );
}