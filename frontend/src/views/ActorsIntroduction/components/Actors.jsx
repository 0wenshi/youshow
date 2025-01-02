import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Actors() {
  const { t } = useTranslation();
  const [actors, setActors] = useState([]);
  const [locale, setLocale] = useState('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActors();
  }, [locale]);

  const fetchActors = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/actors', {
        params: {
          locale,
        },
      });
      setActors(response.data);
    } catch (err) {
      setError('Failed to fetch actors. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Language Switcher */}
      <div className="mb-4 flex justify-center">
        {['en', 'zh'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={`px-4 py-2 mx-2 border rounded-lg ${
              locale === lang
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {lang === 'en' ? 'English' : '中文'}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {actors.map((actor) => (
            <div
              key={actor.id}
              className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center"
            >
              {/* Image Section */}
              <img
                src={actor.image} // Assuming `image` is a URL string
                alt={actor.title}
                className="w-52 h-80 object-cover rounded-lg"
              />
              {/* Text Section */}
              <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-orange-500 text-3xl font-black mb-4">
                  {actor.title}
                </h2>
                <h3 className="text-black text-lg font-semibold mb-4">
                  {actor.subtitle}
                </h3>
                <p className="text-black text-base font-sansregular">
                  {actor.description}
                </p>
              </div>
            </div>
          ))}
          <p className="mt-5 pt-5 text-left text-xs font-bold text-gray-800">
            {t('actors.note')}
          </p>
        </div>
      )}
    </div>
  );
}

export default Actors;
