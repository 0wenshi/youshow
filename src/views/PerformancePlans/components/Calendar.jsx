import React, { useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calendar() {
  const today = new Date(); // 获取今天的日期
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
    dates.push(null); // 填充空白占位
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i); // 添加日期
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
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8249;
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h1>
        <button
          onClick={handleNextMonth}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8250;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-bold text-gray-700 mb-2">
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
            className={`h-10 flex items-center justify-center rounded-full ${
              isToday(day)
                ? "bg-orange-500 text-white font-bold"
                : "bg-white text-gray-800"
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
