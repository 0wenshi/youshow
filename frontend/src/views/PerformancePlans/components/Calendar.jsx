import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000';

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [eventDates, setEventDates] = useState([]); // Stores a list of event dates
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log(
          `Fetching events for year: ${currentYear}, month: ${currentMonth + 1}`
        );
        const response = await axios.get(
          `${API_URL}/events/by-month/${currentYear}/${currentMonth + 1}`
        );

        // Log the full event data for debugging
        console.log('Fetched events:', response.data);

        // Extract event dates from event_timestamps
        const dates = response.data.map((event) => {
          const eventDate = new Date(event.timestamps.event_date); // Access event_date from EventTimestamp
          return eventDate.getDate(); // Extract the day of the month
        });

        console.log('Extracted event dates:', dates);

        setEventDates(dates);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [currentMonth, currentYear]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };
  const handleDateClick = async (day) => {
    // Fetch event details for the selected date
    if (!eventDates.includes(day)) return;

    const formattedDate = `${currentYear}-${(currentMonth + 1)
      .toString()
      .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    try {
      const response = await axios.get(
        `${API_URL}/events/by-date/${formattedDate}`
      );

      if (response.data.length > 0) {
        setSelectedEvent(response.data[0]); // Display the first event
      } else {
        setSelectedEvent(null); // Clear the selected event
      }
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  const closePopup = () => {
    setSelectedEvent(null);
  }; // Close the event popup

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const dates = Array.from({ length: firstDayOfMonth }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const isToday = (day) => {
    return (
      day &&
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Header */}
      <div className="-mb-4">
        <img
          src="/images/showcase calendar.png"
          style={{ height: '100px', width: '200px' }}
          alt="Calendar Header"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        {/* Left Button */}
        <button
          onClick={handlePrevMonth}
          className="p-3 bg-orange-500 rounded-full hover:bg-white"
        >
          &#8249;
        </button>

        {/* Center Title */}
        <h2 className="text-5xl font-semibold text-orange-700 text-center mx-4 flex-1">
          {monthNames[currentMonth]} {currentYear}
        </h2>

        {/* Right Button */}
        <button
          onClick={handleNextMonth}
          className="p-3 bg-orange-500 rounded-full hover:bg-white"
        >
          &#8250;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-bold text-xl text-black mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-4">
        {dates.map((day, index) => (
          <div
            key={index}
            className={`cursor-pointer flex flex-col items-center justify-center rounded-lg text-lg font-medium ${
              isToday(day) ? 'bg-orange-500 text-white font-bold' : 'text-black'
            } ${
              eventDates.includes(day)
                ? 'bg-orange-400 text-white font-bold'
                : 'text-black'
            }`}
            onClick={() => day && handleDateClick(day)}
          >
            <span>{day || ''}</span>
            <span
              className={`text-base mt-1 ${
                eventDates.includes(day)
                  ? 'bg-orange-400 px-1 py-0.5 rounded-xl text-white'
                  : 'text-gray-900'
              }`}
            >
              {eventDates.includes(day) ? 'Event' : ''}
            </span>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventPopup event={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
};

function EventPopup({ event, onClose }) {
  const details = event.details?.[0] || {};
  const timestamp = event.timestamps || {};
  const navigate = useNavigate();

  const handleBooking = () => {
    console.log(`Navigating to ticket booking for event ID: ${event.event_id}`);
    navigate(`/tickets/${event.event_id}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h3 className="text-xl font-bold mb-2">
          {event.title || 'Unknown Event'}
        </h3>
        <p className="text-gray-700 mb-1">
          📍 {details.location || 'Unknown Venue'}
        </p>
        <p className="text-gray-700 mb-1">💰 {details.price || 'N/A'}</p>
        <p className="text-gray-700 mb-1">
          🕒 {timestamp.event_date || 'Date not available'}{' '}
          {timestamp.start_time
            ? `| ${timestamp.start_time} - ${timestamp.end_time}`
            : ''}
        </p>
        <p className="text-gray-600">
          🚀 {details.description || 'No description available'}
        </p>
        <button
          onClick={handleBooking}
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors mt-4"
        >
          Buy tickets
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default Calendar;
