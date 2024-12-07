import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Perfromance Plans', href: '/plans' },
  { name: 'Actors Introduction', href: '/actors' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'Memberships Program', href: '/memberships' },
  { name: 'Contact Us', href: '/contact' },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-orange-500 rounded-full shadow-md max-w-7xl mx-auto my-4">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-8 py-3"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Avatar"
              src="/images/Avatar.jpg"
              style={{ height: '60px', width: 'auto' }}
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-bold ${
                location.pathname === item.href
                  ? 'text-white underline'
                  : 'text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Additional Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-2">
          <a href="#" className="text-sm font-semibold text-black">
            Login <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            type="button"
            className="text-black hover:text-gray-700"
            aria-label="Translate"
          >
            <img
              src="/images/translate-icon.svg"
              alt="Translate"
              className="h-6 w-6"
            />
          </button>
          <button
            type="button"
            className="text-black hover:text-gray-700"
            aria-label="Share"
          >
            <img src="/images/share-icon.svg" alt="Share" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg rounded-lg p-4 mt-2">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-lg font-semibold ${
                  location.pathname === item.href
                    ? 'text-orange-500'
                    : 'text-black'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#" className="text-sm font-semibold text-black">
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
