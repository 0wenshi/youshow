import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import Actors from './components/Actors';
import NavBar from '../CommonComponents/NavBar';

function ActorsIntroduction() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover bg-center min-h-screen min-w-[1024px] flex items-center p-5">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="w-full -mt-5">
          <NavBar />
        </div>
        <div className="p-8 px-[100px] pb-[90px]">
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
