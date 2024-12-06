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
    <div className="max-w-2xl mx-auto p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-3 bg-white rounded-full hover:bg-orange-500"
        >
          &#8249;
        </button>
        <h1 className="p-3 text-7xl font-bold text-black">
          {monthNames[currentMonth]} {currentYear}
        </h1>
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
      <div className="grid grid-cols-7 gap-4">
        {dates.map((day, index) => (
          <div
            key={index}
            className={`h-16 w-16 flex items-center justify-center rounded-full text-lg ${
              isToday(day)
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white text-black'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
