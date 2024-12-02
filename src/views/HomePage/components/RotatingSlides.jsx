import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slides1.jpg",
    title: "The biggest show of the year",
    description: "YOU SHOW All Stars The biggest show of the year",
  },
  {
    image: "/images/slides2.jpg",
    title: "Exclusive Experiences",
    description:
      "Experience the thrill of live shows with exclusive VIP access, backstage tours, and meet-and-greet opportunities with your favorite performers.",
  },
  {
    image: "/images/slides3.jpg",
    title: "Unforgettable Memories",
    description:
      "Capture unforgettable moments and create lifelong memories as you witness performances that inspire and entertain.",
  },
];

function RotatingSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
<div className="flex flex-col pt-24">
  {/* Combined RotatingSlides and Description */}
  <div className="flex justify-between items-start mx-auto w-[1300px] h-[600px] gap-12">
    {/* Rotating Slides */}
    <div className="relative w-[800px] h-[600px] overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-[35%] h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>

    {/* Description Section */}
    <div className="w-1/3 pl-18 relative">
      <div className="absolute inset-0 bg-white bg-opacity-40 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-orange-500 mb-6 drop-shadow-lg">
          {slides[currentIndex].title}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed drop-shadow-lg">
          {slides[currentIndex].description}
        </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default RotatingSlides;
