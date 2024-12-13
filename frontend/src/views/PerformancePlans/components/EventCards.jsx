import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EventCards() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);// save dynamic data from the server

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/events');
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={card.image || '/images/Avatar.jpg'} //default image
              alt={card.title}
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 space-y-3">
            <h2 className="text-xl font-bold text-black">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.description}</p>
            <p className="text-orange-500 font-semibold">{card.price}</p>
          </div>

          {/* Button Section */}
          <div className="p-4">
            <button
              onClick={() => handleNavigation(card.link)}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              {card.button || 'Buy tickets'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCards;
