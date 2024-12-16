import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/contactus/apan.jpg',
    title: '年度大咖秀',
    subtitle: 'YOU SHOW Standup Comedy',
    description:
      'A-pan 单口喜剧个人专场 - <望子成凤> ',
  },
  {
    id: 2,
    image: '/images/contactus/chenxiaojing.jpg',
    title: '不服不怠',
    subtitle: '崔佳守 单口喜剧王打秀',
    description:
      '18/10 | 19:00 Pinehurst School Theatre, Albany\nVIP $79.99 | $59.99 | $39.99',
  },
  {
    id: 3,
    image: '/images/contactus/lianghaiyuan.jpg',
    title: '流浪计划',
    subtitle: '张瀚茗 单口喜剧专场',
    description:
      '22 Nov | 19:00 Pinehurst School Theatre, Albany\nVIP $79.99 | $59.99 | $39.99',
  },
  {
    id: 4,
    image: '/images/contactus/niandudakaxiu.jpg',
    title: '年度大咖秀',
    subtitle: 'YOU SHOW Standup Comedy',
    description:
      '7 Nov | 19:30 Skycity Theatre\nVIP $136.99 | $118.99 | $99.99',
  },
  {
    id: 5,
    image: '/images/contactus/zhaijianing.jpg',
    title: '年度大咖秀',
    subtitle: 'YOU SHOW Standup Comedy',
    description:
      '7 Nov | 19:30 Skycity Theatre\nVIP $136.99 | $118.99 | $99.99',
  },
  {
    id: 6,
    image: '/images/contactus/zhanghaozhe.jpg',
    title: '年度大咖秀',
    subtitle: 'YOU SHOW Standup Comedy',
    description:
      '7 Nov | 19:30 Skycity Theatre\nVIP $136.99 | $118.99 | $99.99',
  },
  {
    id: 7,
    image: '/images/contactus/heideng.jpg',
    title: '年度大咖秀',
    subtitle: 'YOU SHOW Standup Comedy',
    description:
      '7 Nov | 19:30 Skycity Theatre\nVIP $136.99 | $118.99 | $99.99',
  },
];

function WonderfulReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const visibleSlides = [
    slides[currentIndex],
    slides[(currentIndex + 1) % slides.length],
    slides[(currentIndex + 2) % slides.length],
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-black text-black mb-8">精彩回顾</h1>

      {/* Slides Container */}
      <div className="relative w-full max-w-6xl flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-110 z-10"
        >
          &#8249;
        </button>

        {/* Slides */}
        <div className="flex gap-4 justify-center w-full overflow-hidden">
          {visibleSlides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-1/3 bg-white rounded-t-2xl shadow-lg overflow-hidden transform transition-all duration-500"
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-96 rounded-t-2xl"
              />
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-black">{slide.title}</h3>
                <p className="text-orange-500 text-md font-semibold mt-2">
                  {slide.subtitle}
                </p>
                <p className="text-gray-600 text-sm mt-2 whitespace-pre-line">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-110 z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default WonderfulReview;
