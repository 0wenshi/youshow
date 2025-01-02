import React from 'react';
import NavBar from '../CommonComponents/NavBar';
import Calendar from './components/Calendar';
import EventCards from './components/EventCards';

function PerformancePlans() {
  return (
    <div className="bg-[url('/images/startbackground.jpg')] min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 p-4 flex items-center justify-center">
          <Calendar />
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          <EventCards />
        </div>
      </div>
    </div>
  );
}

export default PerformancePlans;
