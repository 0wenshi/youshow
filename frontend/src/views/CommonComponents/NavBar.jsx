import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const navigation = [
  { key: 'plans', href: '/plans' },
  { key: 'introduction', href: '/introduction' },
  { key: 'memberships', href: '/memberships' },
  { key: 'about', href: '/contact' },
];

const dropdownItems = [
  { key: 'talkshow', href: '/talkshow' },
  { key: 'guidelines', href: '/guidelines' },
  { key: 'rental', href: '/rental' },
  { key: 'recruitment', href: '/recruitment' },
  { key: 'actorsmanagement', href: '/actorsmanagement' },
];

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Translation hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="bg-orange-500 rounded-full shadow-lg max-w-6xl my-2 mx-auto">
      <nav aria-label="Global" className="flex px-6">
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
        <div className="flex gap-x-8 items-center">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`text-lg font-bold ${
                location.pathname === item.href
                  ? 'text-orange-200 underline'
                  : 'text-black hover:text-orange-200'
              }`}
            >
              {t(`navbar.${item.key}`)}
            </a>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-lg font-bold text-black hover:text-orange-200">
              {t('navbar.more')}
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20">
                {dropdownItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-1 py-2 text-black text-sm font-semibold hover:text-orange-200 rounded"
                  >
                    {t(`dropdown.${item.key}`)}
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
              className="text-xs font-bold text-black hover:text-orange-200"
            >
              {t('navbar.logout')} <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <a
              href="/login"
              className="text-xs font-bold text-black hover:text-orange-200"
            >
              {t('navbar.login')} <span aria-hidden="true">&rarr;</span>
            </a>
          )}
          {/* Translate Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-black hover:text-gray-700 flex items-center gap-1"
            aria-label="Translate"
          >
            <img
              src="/images/translate-icon.svg"
              alt="Translate"
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold">
              {i18n.language === 'en' ? '中文' : 'English'}
            </span>
          </button>
          <button
            type="button"
            className="text-black hover:text-gray-700"
            aria-label="Share"
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: document.title, // Current page title
                    text: 'New Zealand`s First Chinese Stand-Up Comedy Club!', // Custom text
                    url: window.location.href, // Current page URL
                  })
                  .then(() => console.log('Page shared successfully'))
                  .catch((error) => console.error('Error sharing:', error));
              } else {
                // Fallback for unsupported browsers
                alert(
                  'Sharing is not supported on this browser. Please copy the URL manually.'
                );
              }
            }}
          >
            <img src="/images/share-icon.svg" alt="Share" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        class="elfsight-app-e4c2828d-37b3-45fa-b37a-114698f8cc79"
        data-elfsight-app-lazy
      ></div>
    </header>
  );
}

export default NavBar;
