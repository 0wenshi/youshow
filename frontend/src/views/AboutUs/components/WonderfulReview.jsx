import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/contactus/apan.jpg',
    title: 'A-Pan',
    subtitle: '单口喜剧个人专场',
    description: '《望子成风》',
  },
  {
    id: 2,
    image: '/images/contactus/chenxiaojing.jpg',
    title: '陈晓靖',
    subtitle: '脱口秀专场',
    description: '《菜市场的女儿》',
  },
  {
    id: 3,
    image: '/images/contactus/lianghaiyuan.jpg',
    title: '梁海源',
    subtitle: '脱口秀专场',
    description: '《坐在角落的人2》',
  },
  {
    id: 4,
    image: '/images/contactus/niandudakaxiu.jpg',
    title: 'You Show 首场全明星阵容',
    subtitle: '年度大咖秀',
    description: '刘仁铖,于祥宇,大老王,菜菜,Echo',
  },
  {
    id: 5,
    image: '/images/contactus/zhaijianing.jpg',
    title: '翟佳宁',
    subtitle: '单口喜剧主打秀',
    description: '《不服不忿》',
  },
  {
    id: 6,
    image: '/images/contactus/zhanghaozhe.jpg',
    title: '张灏喆',
    subtitle: '单口喜剧专场',
    description: '《流浪计划》',
  },
  {
    id: 7,
    image: '/images/contactus/heideng.jpg',
    title: '黑灯',
    subtitle: '单口喜剧专场',
    description: '《君不见》',
  },
];

function WonderfulReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 下一页逻辑：防止超出范围
  const nextSlide = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // 上一页逻辑：防止小于0
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-black text-black mb-10 mt-8">精彩回顾</h1>

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
                alt={slide.title}
                className="w-full h-[500px] object-cover rounded-t-2xl "
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
