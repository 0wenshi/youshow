import React from 'react';
import styles from './components/styles.module.css';
import SearchBox from './components/SearchBox';
import Actors from './components/Actors';
import NavBar from '../HomePage/components/NavBar';

function ActorsIntroduction() {
  return (
    <div className={styles.background}>

      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        <div className="w-full -mt-5">
          <NavBar />
        </div>
        <div className="w-full pt-24">
          <Actors />
        </div>
      </div>

      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default ActorsIntroduction;
