import React from 'react';
import styles from './components/styles.module.css';
import SearchBox from '../CommonComponents/SearchBox';
import Actors from './components/Actors';
import NavBar from '../CommonComponents/NavBar';

function ActorsIntroduction() {
  return (
    <div className={styles.background}>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="w-full -mt-5">
          <NavBar />
        </div>
        <div className="w-full pt-28">
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
