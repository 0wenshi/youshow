import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function EventCards() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]); // Save dynamic data from the server
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/auth/events`);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleNavigation = (link) => {
    if (link.startsWith('http') || link.startsWith('www')) {
      const externalLink = link.startsWith('www') ? `https://${link}` : link;
      window.location.href = externalLink;
    } else {
      navigate(link);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full">
      <div className="flex items-center mb-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-orange-500 rounded-full hover:bg-white"
        >
          &#8249;
        </button>

        {/* Event Card */}
        {cards.length > 0 && (
          <div className="w-full max-w-lg h-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            {/* Image Section */}
            <div className="relative w-full h-96">
              <img
                src={cards[currentSlide]?.image || '/images/Avatar.jpg'} // Default image
                alt={cards[currentSlide]?.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold text-black">
                {cards[currentSlide]?.title}
              </h2>
              <p className="text-lg text-gray-600 my-4">
                {cards[currentSlide]?.description}
              </p>
              <p className="text-orange-500 text-2xl font-semibold">
                {cards[currentSlide]?.price}
              </p>
            </div>

            {/* Button Section */}
            <div className="p-6">
              <button
                onClick={() => handleNavigation(cards[currentSlide]?.link)}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Buy tickets
              </button>
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-orange-500 rounded-full hover:bg-white"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default EventCards;
