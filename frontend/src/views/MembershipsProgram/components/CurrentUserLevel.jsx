import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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

const levels = ['Regular', 'Silver', 'Gold', 'VIP'];
const prices = { Silver: 10, Gold: 20, VIP: 50 };

const CurrentUserLevel = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Show a loading spinner
  const [error, setError] = useState(null); // Show an error message
  const [showBenefitsModal, setShowBenefitsModal] = useState(false); // Show benefits modal
  const [showUpgradeModal, setShowUpgradeModal] = useState(false); // Show upgrade modal
  const [selectedLevel, setSelectedLevel] = useState(null);

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

  const handlePayment = async () => {
    if (!selectedLevel) {
      Swal.fire(
        'Error',
        'Please select a membership level to upgrade!',
        'error'
      );
      return;
    }

    try {
      // Send the request to the back-end to process the payment
      const response = await axios.post(
        `${API_URL}/users/upgrade`,
        { newLevel: selectedLevel },
        { withCredentials: true }
      );

      // Update user status
      setUser(response.data);
      setShowUpgradeModal(false);

      Swal.fire('Success', 'Your membership has been upgraded!', 'success');
    } catch (error) {
      console.error('Error upgrading membership:', error);
      Swal.fire('Error', 'Payment failed, please try again.', 'error');
    }
  };

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
            Expire in {user.expiryDate}{' '}
            <button
              onClick={() => setShowBenefitsModal(true)}
              className="text-orange-500 underline"
            >
              View Benefits
            </button>
          </p>
        </div>

        <button
          onClick={() => setShowUpgradeModal(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 mt-3 sm:mt-0"
        >
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

        {/* membership level marker */}
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
      {showBenefitsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowBenefitsModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2 text-orange-600">
              {user.currentLevel} Benefits
            </h3>
            <ul className="list-disc pl-5 text-gray-800">
              {benefitsData[user.currentLevel].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowUpgradeModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2 text-orange-600">
              Upgrade Membership
            </h3>
            <p className="text-gray-700 mb-4">
              {' '}
              Choose your desired membership level:
            </p>
            <div className="space-y-2">
              {Object.keys(prices).map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="radio"
                    id={level}
                    name="membershipLevel"
                    value={level}
                    checked={selectedLevel === level}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={level} className="text-gray-800">
                    {level} - ${prices[level]}
                  </label>
                </div>
              ))}
            </div>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 w-full"
              onClick={handlePayment}
            >
              Pay & Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentUserLevel;
