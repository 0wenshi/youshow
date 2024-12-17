import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import NavBar from '../CommonComponents/NavBar';
import Calendar from './components/Calendar';
import EventCards from './components/EventCards';

function PerformancePlans() {
  return (
    <div className="bg-[url('/images/startbackground.jpg')] min-h-screen ">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="min-h-screen flex">
        {/* Calendar Section */}
        <div className="flex-grow flex items-center">
          <Calendar />
        </div>
        {/* EventCards Section */}
        <div className="flex-grow flex items-center">
          <EventCards />
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default PerformancePlans;
