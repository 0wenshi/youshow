import React from 'react';

const styles = {
  cards: {
    backgroundImage: `url('/images/currentlevel.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    height: '500px',
  },
};

function CurrentUserLevel() {
  return <div style={styles.cards}></div>;
}

export default CurrentUserLevel;
