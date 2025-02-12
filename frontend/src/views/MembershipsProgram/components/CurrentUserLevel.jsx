import React, { useState, useEffect } from 'react';
import axios from 'axios';

const benefitsData = {
  Regular: ['Basic Support', 'Standard Discounts'],
  Silver: ['Priority Support', 'Exclusive Discounts', 'Monthly Freebie'],
  Gold: ['VIP Support', 'Special Events', 'Lounge Access', 'Bigger Discounts'],
  VIP: [
    'All Gold Perks',
    'Private Concierge',
    'Personalized Offers',
    'Exclusive Lounge',
  ],
};

const API_URL = import.meta.env.VITE_API_URL;

const CurrentUserLevel = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Show a loading spinner
  const [error, setError] = useState(null); // Show an error message
  const [showModal, setShowModal] = useState(false);

  const levels = ['Regular', 'Silver', 'Gold', 'VIP'];

  useEffect(() => {
    const fetchUserLevel = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/level`, {
          withCredentials: true,
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user level:', error);
        setError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserLevel();
  }, []);

  if (loading) {
    return <div className="text-center text-grey-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="relative bg-orange-100 rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      {/* current level title */}
      <div className="text-sm text-gray-800 font-bold mb-2">Current Level</div>

      {/* member info + to upgrade button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-600 flex items-center">
            <span className="mr-2">🌟</span> {user.currentLevel}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            expire in {user.expiryDate}{' '}
            <button
              onClick={() => setShowModal(true)}
              className="text-orange-500 underline"
            >
              View Benefits
            </button>
          </p>
        </div>

        {/* upgrate button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 mt-3 sm:mt-0">
          To Upgrade &gt;
        </button>
      </div>

      {/* progress bar */}
      <div className="relative mt-6">
        <div className="h-3 bg-orange-200 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>

        {/* membership level marker + spacing adjustment*/}
        <div className="flex justify-between mt-4">
          {levels.map((level, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  user.progress >= (index / (levels.length - 1)) * 100
                    ? 'bg-orange-500'
                    : 'bg-orange-300'
                }`}
              ></div>
              <span className="mt-1 text-sm text-gray-700">{level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2 text-orange-600">
              {user.currentLevel} Benefits
            </h3>
            <ul className="list-disc pl-5 text-gray-800">
              {levels.map((level) => (
                <li
                  key={level}
                  className={`${
                    levels.indexOf(level) <= levels.indexOf(user.currentLevel)
                      ? 'text-black'
                      : 'text-gray-400 line-through'
                  }`}
                >
                  {level === user.currentLevel ? (
                    <strong>{benefitsData[level].join(', ')}</strong>
                  ) : (
                    benefitsData[level].join(', ')
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentUserLevel;
