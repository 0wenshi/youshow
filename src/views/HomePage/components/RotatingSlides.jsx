import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slides1.jpg",
    title: "The biggest show of the year",
    description:
      "YOU SHOW All Stars The biggest show of the year",
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
      <div className="flex justify-between items-start mx-auto max-w-6xl w-full">
        {/* Rotating Slides */}
        <div className="w-2/3 relative overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-[400px]">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
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
        <div className="w-1/3 pl-8">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            {slides[currentIndex].title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RotatingSlides;
