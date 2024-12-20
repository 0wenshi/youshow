import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    id: 1,
    image: '/images/contactus/apan.jpg',
  },
  {
    id: 2,
    image: '/images/contactus/chenxiaojing.jpg',
  },
  {
    id: 3,
    image: '/images/contactus/lianghaiyuan.jpg',
  },
  {
    id: 4,
    image: '/images/contactus/niandudakaxiu.jpg',
  },
  {
    id: 5,
    image: '/images/contactus/zhaijianing.jpg',
  },
  {
    id: 6,
    image: '/images/contactus/zhanghaozhe.jpg',
  },
  {
    id: 7,
    image: '/images/contactus/heideng.jpg',
  },
];

function WonderfulReview() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-black text-black mb-10 mt-8">
        {t('wonderful_review.title')}
      </h1>

      {/* Slides Container */}
      <div className="relative w-full max-w-6xl flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 p-3 rounded-full text-white transition-transform transform hover:scale-110 z-10 ${
            currentIndex === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gray-800 hover:bg-orange-600'
          }`}
        >
          &#8249;
        </button>

        {/* Slides */}
        <div className="flex gap-4 justify-center -mt-6">
          {visibleSlides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-1/3 bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500"
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={t(`wonderful_review.slides.${slide.id}.title`)}
                className="w-full h-[500px] object-cover rounded-t-2xl "
              />
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-black">
                  {t(`wonderful_review.slides.${slide.id}.title`)}
                </h3>
                <p className="text-orange-500 text-md font-semibold mt-2">
                  {t(`wonderful_review.slides.${slide.id}.subtitle`)}
                </p>
                <p className="text-gray-600 text-sm mt-2 whitespace-pre-line">
                  {t(`wonderful_review.slides.${slide.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= slides.length - 3}
          className={`absolute right-0 p-3 rounded-full text-white transition-transform transform hover:scale-110 z-10 ${
            currentIndex >= slides.length - 3
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gray-800 hover:bg-orange-600'
          }`}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default WonderfulReview;
