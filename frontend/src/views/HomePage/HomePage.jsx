import React from 'react';
import styles from './components/styles.module.css';
import SearchBox from '../ActorsIntroduction/components/SearchBox';
import NavBar from './components/NavBar';
import RotatingSlides from './components/RotatingSlides';

function HomePage() {
  return (
    <div className={styles.background}>
      {/* Navigation Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      {/* Content Section */}
      <div className="flex flex-col pt-15">
        {/* RotatingSlides and Description */}
        <div className="flex justify-between items-start mx-auto max-w-6xl w-full">
          {/* Rotating Slides */}
          <div className="w-2/3">
            <RotatingSlides />
          </div>
        </div>
      </div>

      {/* Search Box at the Bottom */}
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default HomePage;
