import React from 'react';
import styles from './components/styles.module.css';
import Memberships from './components/Memberships';
import SearchBox from '../ActorsIntroduction/components/SearchBox';
import CurrentUserLevel from './components/CurrentUserLevel';
import NavBar from '../HomePage/components/NavBar';

function MembershipsProgram() {
  return (
    <div className={styles.background}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="w-full max-w-7xl mb-24">
        <CurrentUserLevel />
      </div>

      <div className="w-full max-w-7xl mb-24">
        <Memberships />
      </div>

      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default MembershipsProgram;
