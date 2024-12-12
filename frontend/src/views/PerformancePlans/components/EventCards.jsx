import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cards = [
  {
    id: '1',
    image: '/images/xiaolu.jpg',
    title: '我的中女时代 小鹿 全球巡演',
    description: '13/14 Feb 2025 / 19:30 @ Skycity Theatre, Auckland',
    price: '$136.99',
    button: '选座购票',
    link: 'www.eventbrite.com/',
  },
  {
    id: '2',
    image: '/images/open_mic_Chinese.png',
    title: '中文开放麦',
    description:
      '20 Feb 2025 / 19:30 @ 5/7 Corinthinn Drive Albany, Auckland 0632',
    price: '$19',
    button: '选座购票',
    link: 'www.eventbrite.com/',
  },
  {
    id: '3',
    image: '/images/open_mic_English.png',
    title: '英文开放麦',
    description:
      '26 Feb 2025 / 19:30 @ 5/7 Corinthinn Drive Albany, Auckland 0632',
    price: '$19',
    button: '选座购票',
    link: 'www.eventbrite.com/',
  },
];

function EventCards() {
  const navigate = useNavigate();

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
              src={card.image}
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
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCards;
