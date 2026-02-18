import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-gray-400">Licensed Clinical Psychologist</p>
            <p className="text-gray-400 mt-2">123th Street 45 W, Santa Monica, CA 90401</p>
            <p className="text-gray-400">contact@drmayareynolds.com | (555) 123-4567</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Hours</h4>
            <p className="text-gray-400">Monday – Friday</p>
            <p className="text-gray-400">10am – 6pm</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#our-office" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy & Cookies Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="hover:text-white">
              Website Terms & Conditions
            </Link>{' '}
            |{' '}
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
