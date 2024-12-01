import React, { useState, useEffect } from "react";

const images = [
  "/images/slides1.jpg",
  "/images/slides2.jpg",
  "/images/slides3.jpg",
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg max-w-lg mx-auto">
      {/* Slides */}
      <div className="relative h-[400px]">
        {images.map((src, index) => {
          const position = getPosition(index, currentIndex, images.length);
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out`}
              style={{
                transform: position.transform,
                zIndex: position.zIndex,
                opacity: position.opacity,
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-10">
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

// Helper function to determine the position of slides
function getPosition(index, currentIndex, length) {
  if (index === currentIndex) {
    return {
      transform: "translateX(0) scale(1)",
      zIndex: 3,
      opacity: 1,
    };
  } else if (
    index === (currentIndex - 1 + length) % length // Previous slide
  ) {
    return {
      transform: "translateX(-50%) scale(0.9)",
      zIndex: 2,
      opacity: 0.8,
    };
  } else if (index === (currentIndex + 1) % length) {
    return {
      transform: "translateX(50%) scale(0.9)",
      zIndex: 2,
      opacity: 0.8,
    };
  } else {
    return {
      transform: "translateX(100%) scale(0.8)",
      zIndex: 1,
      opacity: 0,
    };
  }
}

export default RotatingSlides;
