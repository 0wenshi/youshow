import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Cookies from 'js-cookie';

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000';

const TicketBooking = () => {
  const { eventId } = useParams(); // Gets the eventId in the URL
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([]);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/user`, {
          withCredentials: true, // allowed cookies
        });
        console.log('User Data:', response.data);
        setUserId(response.data.user_id); // save user_id
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setError('Failed to load user data.');
      }
    };

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/events/${eventId}`, {
          withCredentials: true,
        });
        console.log('Event Details:', response.data);
        setEvent(response.data);

        // seats layout
        const seatLayout = [];
        for (let row = 1; row <= 5; row++) {
          for (let col = 1; col <= 10; col++) {
            seatLayout.push({
              seat: `${String.fromCharCode(64 + row)}${col}`, // A1, A2, ..., E10
              selected: false,
            });
          }
        }
        setSeats(seatLayout);
      } catch (error) {
        console.error('Error fetching event:', error);
        setError('Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchEventDetails();
  }, [eventId]);

  const handleSeatSelection = (seatIndex) => {
    const updatedSeats = seats.map((seat, index) =>
      index === seatIndex ? { ...seat, selected: !seat.selected } : seat
    );
    setSeats(updatedSeats);

    // Update selected seats
    setSelectedSeat(updatedSeats[seatIndex]?.seat);
  };

  const handlePurchase = async () => {
    if (!selectedSeat) {
      alert('❌ Please select a seat before purchasing.');
      return;
    }
    const userId = user?.user_id || Cookies.get('user_id'); // Try to get it from context or cookies
    if (!userId) {
      alert('⚠️ User not authenticated. Please log in.');
      navigate('/login');
      return;
    }

    setIsPurchasing(true);
    try {
      const response = await axios.post(
        `${API_URL}/tickets/purchase`,
        {
          user_id: userId, // user_id obtained through cookies
          event_id: eventId,
          seat: selectedSeat,
        },
        { withCredentials: true }
      );

      alert('🎉 Ticket purchased successfully!');
      navigate(`/confirmation/${response.data.ticket.order_id}`);
    } catch (error) {
      console.error('Error purchasing ticket:', error);
      alert('⚠️ Failed to purchase ticket. Please try again.');
    } finally {
      setIsPurchasing(false);
    }
  };

  if (loading)
    return (
      <div className="text-center text-gray-600">
        ⏳ Loading event details...
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-orange-600">{event.title}</h1>
      <p className="text-lg text-gray-700">
        📅 {event.timestamps?.event_date || 'Unknown Date'} | 🕒{' '}
        {event.timestamps?.start_time || 'TBA'} -{' '}
        {event.timestamps?.end_time || 'TBA'}
      </p>

      <p className="text-lg text-gray-700">
        📍 {event.details?.[0]?.location || 'Unknown Venue'}
      </p>
      <p className="text-lg text-gray-700">
        💰 {event.details?.[0]?.price || 'N/A'}
      </p>

      {/* choose seats */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">
          🎟 Select Your Seat:
        </h2>
        <div className="grid grid-cols-10 gap-2 mt-4">
          {seats.map((seat, index) => (
            <button
              key={index}
              className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                seat.selected ? 'bg-orange-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSeatSelection(index)}
            >
              {seat.seat}
            </button>
          ))}
        </div>
      </div>

      {/* purchase button */}
      <button
        className={`mt-6 px-6 py-3 text-white font-bold rounded-lg ${
          isPurchasing
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700'
        }`}
        onClick={handlePurchase}
        disabled={isPurchasing}
      >
        {isPurchasing ? '⏳ Purchasing...' : 'Buy Ticket'}
      </button>
    </div>
  );
};

export default TicketBooking;
