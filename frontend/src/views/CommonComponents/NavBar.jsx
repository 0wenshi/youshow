import { useLocation, useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleContext } from '../../context/LocaleContext';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const navigation = [
  { key: 'plans', href: '/plans' },
  { key: 'actorsintroduction', href: '/actorsintroduction' },
  { key: 'memberships', href: '/memberships' },
  { key: 'about', href: '/contact' },
];

const dropdownItems = [
  { key: 'talkshow', href: '/talkshow' },
  { key: 'guidelines', href: '/guidelines' },
  { key: 'rental', href: '/rental' },
  { key: 'recruitment', href: '/recruitment' },
  { key: 'actorsmanagement', href: '/actorsmanagement' },
  { key: 'eventsmanagement', href: '/eventsmanagement' },
];

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'thai', label: 'ไทย' },
];

const API_URL = import.meta.env.VITE_API_URL;

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Translation hook
  const { locale, setLocale } = useContext(LocaleContext);
  const { user, setUser } = useUser(); // Access user and setUser from context
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Sync isLoggedIn state with user context
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      setUser(null); // Clear the user context
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
    setShowLanguageDropdown(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    setShowMoreDropdown(false);
  };

  const changeLanguage = (newLocale) => {
    i18n.changeLanguage(newLocale);
    setLocale(newLocale);
    setShowLanguageDropdown(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMoreDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMoreDropdown(false);
    }, 300);
  };

  return (
    <header className="bg-orange-500 rounded-full shadow-lg max-w-7xl my-2 mx-auto">
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
            <button
              className="text-lg font-bold text-black hover:text-orange-200"
              onClick={toggleMoreDropdown}
            >
              {t('navbar.more')}
            </button>
            {showMoreDropdown && (
              <div className="absolute left-0 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20">
                {dropdownItems
                  .filter(
                    (item) =>
                      (item.key !== 'actorsmanagement' &&
                        item.key !== 'eventsmanagement') ||
                      user?.role === 'admin' // Only show actorsmanagement to admin
                  )
                  .map((item) => (
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
        <div className="flex flex-1 justify-end gap-x-6">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-xs font-bold text-black hover:text-orange-200 ml-4"
            >
              {t('navbar.logout')} <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <a
              href="/login"
              className="text-xs font-bold text-black hover:text-orange-200 ml-4"
            >
              {t('navbar.login')} <span aria-hidden="true">&rarr;</span>
            </a>
          )}
          <div className="relative ml-4">
            {/* Click to expand the drop-down menu */}
            <button
              type="button"
              onClick={toggleLanguageDropdown}
              className="flex items-center gap-1 text-black hover:text-orange-200"
              aria-label="Translate"
            >
              <img
                src="/images/translate-icon.svg"
                alt="Translate"
                className="h-6 w-6 align-middle"
              />
              <span className="text-sm font-semibold">
                {languageOptions.find((lang) => lang.code === locale)?.label ||
                  'Language'}
              </span>
            </button>

            {/* Language Dropdown */}
            {showLanguageDropdown && (
              <div className="absolute right-15 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20">
                {languageOptions.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`block w-full px-4 py-2 text-black text-sm font-semibold hover:text-orange-200 ${
                      locale === code ? 'font-bold text-orange-200' : ''
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Share Button */}
          <button
            type="button"
            className="text-black hover:text-gray-700 ml-4"
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
        className="elfsight-app-e4c2828d-37b3-45fa-b37a-114698f8cc79"
        data-elfsight-app-lazy
      ></div>
    </header>
  );
};

export default NavBar;
