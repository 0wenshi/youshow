import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000';

const EventCards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]); // Save dynamic data from the server
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/events`);
        // console.log('Fetched events data:', response.data);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleNavigation = (link) => {
    if (link && (link.startsWith('http') || link.startsWith('www'))) {
      const externalLink = link.startsWith('www') ? `https://${link}` : link;
      console.log('Navigating to external link:', externalLink);
      window.location.href = externalLink;
    } else if (link) {
      console.log('Navigating to internal link:', link);
      navigate(link);
    } else {
      console.warn('No link provided for navigation.');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 z-10">
      <div className="flex items-center justify-between space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-orange-500 rounded-full hover:bg-white transition-colors duration-300"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>

        {/* Event Card */}
        {cards.length > 0 && (
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
              <img
                src={
                  cards[currentSlide]?.EventDetails?.[0]?.image ||
                  '/images/Avatar.jpg'
                }
                alt={cards[currentSlide]?.title || 'Event'}
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-between md:w-1/2">
              <div className="text-center md:text-left">
                {/* Event Title */}
                <h2 className="text-2xl font-bold text-black">
                  {cards[currentSlide]?.title || 'Untitled Event'}
                </h2>

                {/* Event Description */}
                <p className="text-lg text-gray-600 my-4">
                  {cards[currentSlide]?.EventDetails?.[0]?.description ||
                    'Description not available'}
                </p>

                {/* Event Date and Time */}
                <p className="text-sm text-gray-500">
                  {`Date: ${
                    cards[currentSlide]?.EventTimestamp?.event_date || 'TBA'
                  }`}
                </p>
                <p className="text-sm text-gray-500">
                  {`Time: ${
                    cards[currentSlide]?.EventTimestamp?.start_time || 'TBA'
                  } - ${
                    cards[currentSlide]?.EventTimestamp?.end_time || 'TBA'
                  }`}
                </p>

                {/* Event Location */}
                <p className="text-gray-700">
                  {`Location: ${
                    cards[currentSlide]?.EventDetails?.[0]?.location || 'TBA'
                  }`}
                </p>

                {/* Event Price */}
                <p className="text-orange-500 text-2xl font-semibold my-2">
                  {cards[currentSlide]?.EventDetails?.[0]?.price || 'TBA'}
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-4">
                <button
                  onClick={() =>
                    handleNavigation(
                      cards[currentSlide]?.EventDetails?.[0]?.link
                    )
                  }
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  Buy tickets
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-orange-500 rounded-full hover:bg-white transition-colors duration-300"
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default EventCards;
