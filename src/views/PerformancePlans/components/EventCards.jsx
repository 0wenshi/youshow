import React from "react";

const cards = [
  {
    image: "/images/slides1.jpg",
    title: "年度大咖秀",
    description: "7 Nov / 19:30 (Thur) @ Skycity Theatre",
    price: "SVIP $136.99",
    button: "选座购票",
  },
  {
    image: "/images/slides2.jpg",
    title: "流浪计划",
    description: "22 Nov / 19:00 (Fri) @ Pinehurst Theatre",
    price: "SVIP $79.99",
    button: "选座购票",
  },
  {
    image: "/images/slides3.jpg",
    title: "开放麦",
    description: "8 Nov / 7:30 PM @ Albany, Auckland",
    price: "票价 $19",
    button: "选座购票",
  },
];

function EventCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            {/* Heart Icon */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="none"
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
            <h2 className="text-xl font-bold text-gray-900">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.description}</p>
            <p className="text-orange-500 font-semibold">{card.price}</p>
          </div>

          {/* Button Section */}
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition-colors">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCards;
