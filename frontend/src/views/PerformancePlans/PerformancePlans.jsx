import React from 'react';
import styles from './components/styles.module.css';
import SearchBox from '../ActorsIntroduction/components/SearchBox';
import NavBar from '../HomePage/components/NavBar';
import Calendar from './components/Calendar';
import EventCards from './components/EventCards';

function PerformancePlans() {
  return (
    <div className={styles.background}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <Calendar />
      </div>
      <div>
        <EventCards />
      </div>
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default PerformancePlans;
