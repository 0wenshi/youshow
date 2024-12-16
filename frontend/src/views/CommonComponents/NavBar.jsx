import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Performance Plans', href: '/plans' },
  { name: 'Actors Introduction', href: '/actors' },
  { name: 'Memberships Program', href: '/memberships' },
  { name: 'Contact Us', href: '/contact' },
];

const dropdownItems = [
  { name: '脱口秀', href: '/standup' },
  { name: '观演须知', href: '/guidelines' },
  { name: '场地租赁', href: '/rental' },
  { name: '新人招募', href: '/recruitment' },
];

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="bg-orange-500 rounded-full shadow-md max-w-6xl mx-auto my-2">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-2"
      >
        {/* Logo */}
        <div className="flex flex-1">
          <a href="/" className="-m-2.5 p-0.5">
            <img
              alt="Avatar"
              src="/images/Avatar.jpg"
              style={{
                height: '80px',
                width: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-x-12 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-bold ${
                location.pathname === item.href
                  ? 'text-orange-200 underline'
                  : 'text-black hover:text-orange-200'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-lg font-bold text-black hover:text-orange-200">
              更多
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20">
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-black font-semibold hover:text-orange-200 rounded"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Additional Buttons */}
        <div className="flex flex-1 justify-end gap-x-2">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm font-bold text-black hover:text-orange-200"
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <a
              href="/login"
              className="text-sm font-bold text-black hover:text-orange-200"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          )}
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
