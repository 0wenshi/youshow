import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Memberships = () => {
  const { t } = useTranslation();
  const images = ['/images/199.jpg', '/images/666.jpg', '/images/999.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-16 space-y-12">
      <div className="relative w-[650px] h-[300px]">
        {/* Carousel picture */}
        <div
          className="p-6 rounded-lg bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            width: '650px',
            height: '300px',
          }}
        ></div>

        {/* Manual switch button */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + images.length) % images.length
            )
          }
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        >
          ▶
        </button>
      </div>

      <div className="text-base text-gray-800 text-left space-y-2 w-full max-w-md font-bold">
        <p>{t('memberships.note1')}</p>
        <p>{t('memberships.note2')}</p>
      </div>

      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
        {t('memberships.joinNow')}
      </button>
    </div>
  );
};

export default Memberships;
