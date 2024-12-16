import React, { useState } from 'react';

// 数据：Slides 内容
const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg', // 图片路径（替换为实际图片路径）
    title: '望子成凤',
    subtitle: '新西兰站 New Zealand',
    description:
      '12/07/2024 19:00 The Great Hall Christchurch\n19/07/2024 19:00 Skycity Theatre Auckland',
    link: 'https://www.tickettailor.com/events/youshowstudio',
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: '菜市场的女儿',
    subtitle: '陈晓靖 脱口秀专场',
    description:
      '21/09/2024 12:00 @Skycity Theatre\n22/09/2024 18:30 @Event Centre, Albany Auckland',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: '坐在角落的人2',
    subtitle: '梁海源 脱口秀专场',
    description: '08/30 Friday 19:30\nAuckland Bruce Mason Centre',
  },
];

function WonderfulReview() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-110 z-10"
      >
        &#8249;
      </button>

      {/* Slides Container */}
      <div className="w-full max-w-5xl flex items-center justify-center overflow-hidden">
        <div className="w-[90%] md:w-[70%] bg-white rounded-xl shadow-lg p-4 transform transition-all duration-500">
          {/* Image */}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />

          {/* Text Content */}
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            {slides[current].title}
          </h2>
          <h3 className="text-lg font-semibold text-orange-500 text-center mb-2">
            {slides[current].subtitle}
          </h3>
          <p className="text-center text-gray-600 whitespace-pre-line">
            {slides[current].description}
          </p>

          {/* Link */}
          {slides[current].link && (
            <div className="mt-4 text-center">
              <a
                href={slides[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-semibold"
              >
                查看详情
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-110 z-10"
      >
        &#8250;
      </button>
    </div>
  );
}

export default WonderfulReview;
