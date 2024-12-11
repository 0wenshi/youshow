import React, { useState } from 'react';

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

const events = {
  12: '19:30',
  13: '19:30',
  14: '19:30',
  19: '19:30',
  20: '19:30',
  26: '19:30',
};

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

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
    <div className="max-w-2xl mx-auto p-8 ">
      {/* Header */}
      <div className="text-center mb-1">
        <img
          src="/images/showcase calendar.png"
          style={{ height: '100px', width: '200px' }}
        ></img>
        <h2 className="text-5xl font-semibold text-orange-700 -mt-4">
          {monthNames[currentMonth]} {currentYear}
        </h2>
      </div>
      <div className="flex items-center justify-between mb-1">
        <button
          onClick={handlePrevMonth}
          className="p-3 bg-white rounded-full hover:bg-orange-500"
        >
          &#8249;
        </button>
        <button
          onClick={handleNextMonth}
          className="p-3 bg-white rounded-full hover:bg-orange-500"
        >
          &#8250;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-bold text-lg text-black mb-4">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {dates.map((day, index) => (
          <div
            key={index}
            className={`h-20 w-20 flex flex-col items-center justify-center rounded-lg text-lg font-medium ${
              isToday(day) ? 'bg-orange-500 text-white font-bold' : 'text-black'
            } ${events[day] ? ' border-orange-400' : ''}`}
          >
            <span>{day || ''}</span>
            <span
              className={`text-base mt-1 ${
                events[day] ? 'bg-orange-400 px-1 ' : 'text-gray-900'
              }`}
            >
              {events[day] || 'Break'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
