import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentUserLevel = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Show a loading spinner
  const [error, setError] = useState(null); // Show an error message

  const levels = ['regular', 'silver card', 'gold card', 'VIP'];

  useEffect(() => {
    const fetchUserLevel = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/level');
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
            {user.expiryDate} expire ·{' '}
            <a href="#" className="text-orange-500 underline">
              View Benefits
            </a>
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
    </div>
  );
};

export default CurrentUserLevel;
