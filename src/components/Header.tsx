import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Dr. Maya Reynolds, PsyD
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#specialties" className="text-gray-700 hover:text-primary">
            Specialties
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="#faqs" className="text-gray-700 hover:text-primary">
            FAQs
          </Link>
          <Link href="#our-office" className="text-gray-700 hover:text-primary">
            Our Office
          </Link>
          <Link
            href="#our-office"
            className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-primary/80"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
