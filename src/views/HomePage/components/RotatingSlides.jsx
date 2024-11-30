RotatingSlides

import React,{ useState, useEffect } from "react";

const images = [
    "/images/slides1.jpg",
    "/images/slides2.jpg",
    "/images/slides3.jpg",
  ];

function RotatingSlides() {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >

    {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: "100%" }} 
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
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
  );
}

export default RotatingSlides;