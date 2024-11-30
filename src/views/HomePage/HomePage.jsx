import React from 'react';
import styles from './components/styles.module.css';
import SearchBox from '../ActorsIntroduction/components/SearchBox';
import NavBar from './components/NavBar';
import RotatingSlides from './components/RotatingSlides';

function HomePage (){

  return (
<div className={styles.background}>
    <div className="fixed top-0 left-20 right-5 z-50">
    <NavBar />
    </div>
    <div >
      <RotatingSlides />
    </div>
    <div className="fixed bottom-10 right-10">
    <SearchBox />
    </div>
</div>
  );
};

export default HomePage;
