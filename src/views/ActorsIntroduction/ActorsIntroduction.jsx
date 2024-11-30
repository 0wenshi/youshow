import React from 'react';
import styles from '../ActorsIntroduction/components/styles.module.css'
import SearchBox from './components/SearchBox';
import Actors from './components/Actors';

function ActorsIntroduction() {

return (
<div className={styles.background}>
  <div className="w-full max-w-7xl mb-64">
  </div>
  <Actors />
  <SearchBox />
</div>
  );
}

export default ActorsIntroduction;
