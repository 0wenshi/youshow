import React, { useState, useEffect } from 'react';
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

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [eventDates, setEventDates] = useState([]); // Stores a list of event dates

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log(
          `Fetching events for year: ${currentYear}, month: ${currentMonth + 1}`
        );
        const response = await axios.get(
          `http://localhost:3000/events/${currentYear}/${currentMonth + 1}`
        );

        // Log the full event data for debugging
        console.log('Fetched events:', response.data);

        // Extract event dates from event_timestamps
        const dates = response.data.map((event) => {
          const eventDate = new Date(event.EventTimestamp.event_date); // Access event_date from EventTimestamp
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

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const dates = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

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
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-4">
        {dates.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-lg text-lg font-medium ${
              isToday(day) ? 'bg-orange-500 text-white font-bold' : 'text-black'
            } ${eventDates.includes(day) ? 'border-4 border-orange-400' : ''}`}
          >
            <span>{day || ''}</span>
            <span
              className={`text-base mt-1 ${
                eventDates.includes(day)
                  ? 'bg-orange-400 px-1 py-0.5 rounded-sm text-white'
                  : 'text-gray-900'
              }`}
            >
              {eventDates.includes(day) ? 'Event' : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
