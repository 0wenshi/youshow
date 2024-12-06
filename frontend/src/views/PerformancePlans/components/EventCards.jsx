import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const cards = [
  {
    id: "1",
    image: "/images/slides1.jpg",
    title: "年度大咖秀",
    description: "7 Nov / 19:30 (Thur) @ Skycity Theatre, Auckland",
    price: "$136.99",
    button: "选座购票",
    link: "/tickets?event=show1",
  },
  {
    id: "2",
    image: "/images/slides2.jpg",
    title: "流浪计划",
    description: "22 Nov / 19:00 (Fri) @ Pinehurst Theatre, Auckland",
    price: "$79.99",
    button: "选座购票",
    link: "/tickets?event=show2",
  },
  {
    id: "3",
    image: "/images/slides4.jpg",
    title: "开放麦",
    description: "8 Nov / 19:30 (Fri) @ Albany, Auckland",
    price: "$19",
    button: "选座购票",
    link: "/tickets?event=show3",
  },
];

function EventCards() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from the server on component mount
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:3000/favorites");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  // Handle favorite toggle
  const toggleFavorite = async (id) => {
    const isFavorited = favorites.includes(id);
    try {
      const response = await axios.post("http://localhost:3000/favorites", {
        id,
        isFavorited: !isFavorited,
      });
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  const handleNavigation = (link) => {
    navigate(link);
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
            {/* Heart Icon */}
            <div
              className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full cursor-pointer"
              onClick={() => toggleFavorite(card.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={favorites.includes(card.id) ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={favorites.includes(card.id) ? "red" : "gray"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61c-1.54-1.4-4.09-1.4-5.64 0l-.36.33-.36-.33c-1.54-1.4-4.09-1.4-5.64 0a4.48 4.48 0 0 0-.37 6.34l6.01 6.01 6.01-6.01a4.48 4.48 0 0 0-.37-6.34z"
                />
              </svg>
            </div>
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