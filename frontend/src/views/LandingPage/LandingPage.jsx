import React from 'react';
import GetStartButton from './components/GetStartButton';
import styles from './components/styles.module.css';

function LandingPage() {
  return (
    <div className={styles.background}>
      <div className="text-center z-10">
        <h1 className="text-8xl font-black text-black tracking-widest">
          YOU <span className="block">SHOW</span>
        </h1>
        <GetStartButton />
      </div>
    </div>
  );
}

export default LandingPage;
