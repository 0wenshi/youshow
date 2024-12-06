import React from 'react';
import styles from './components/styles.module.css'
import SearchBox from './components/SearchBox';
import Actors from './components/Actors';
import NavBar from "../HomePage/components/NavBar";

function ActorsIntroduction() {

return (
  <div className={styles.background}>
    <div className="fixed top-0 left-0 right-0 z-50">
      <NavBar />
    </div>
    <div className="w-full max-w-7xl mb-64">
      <Actors />
    </div>
    <SearchBox />
  </div>
  );
}

export default ActorsIntroduction;
