import React, { useEffect, useState, useContext } from 'react';
import { LocaleContext } from '../../../context/LocaleContext';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Actors() {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchActors();
  }, [locale]);

  const fetchActors = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/actors', {
        params: {
          locale,
        },
      });
      console.log('Fetched actors:', response.data);
      setActors(response.data);
    } catch (error) {
      console.error('Error fetching actors:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLocalizedDetails = (actor) => {
    // Check if ActorDetails exists and is an array
    if (Array.isArray(actor.ActorDetails)) {
      return actor.ActorDetails.find(
        (detail) => detail.Locale?.locale_code === locale
      );
    }
    return null; // Return null if ActorDetails is not valid
  };

  return (
    <div>
      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {actors.map((actor) => {
            const details = getLocalizedDetails(actor);
            if (!details) {
              // Skip rendering this actor if details for the current locale are not found
              return null;
            }
            return (
              <div
                key={actor.actor_id}
                className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center"
              >
                {/* Image Section */}
                <img
                  src={details.image} // Assuming `image` is a URL string
                  alt={details.title}
                  className="w-52 h-80 object-cover rounded-lg"
                />
                {/* Text Section */}
                <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="text-orange-500 text-3xl font-black mb-4">
                    {details.title}
                  </h2>
                  <h3 className="text-black text-lg font-semibold mb-4">
                    {details.subtitle}
                  </h3>
                  <p className="text-black text-base font-sansregular">
                    {details.description}
                  </p>
                </div>
              </div>
            );
          })}
          <p className="mt-5 pt-5 text-left text-xs font-bold text-gray-800">
            {t('actors.note')}
          </p>
        </div>
      )}
    </div>
  );
}

export default Actors;
