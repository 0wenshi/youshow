import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Performance Plans', href: '/plans' },
  { name: 'Actors Introduction', href: '/actors' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'Memberships Program', href: '/memberships' },
  { name: 'Contact Us', href: '/contact' },
];

function NavBar() {
  const location = useLocation();

  return (
    <header className="bg-orange-500 rounded-full shadow-md max-w-7xl mx-auto my-4">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-8 py-3"
      >
        {/* Logo */}
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Avatar"
              src="/images/Avatar.jpg"
              style={{ height: '60px', width: 'auto' }}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-x-12">
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
        <div className="flex flex-1 justify-end gap-x-2">
          <a href="/login" className="text-sm font-semibold text-black">
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
    </header>
  );
}

export default NavBar;
