import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import Actors from './components/Actors';
import NavBar from '../CommonComponents/NavBar';

function ActorsIntroduction() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5">
      <div className="pt-0 px-4 pb-8">
        <div className="-mt-5 top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className="p-8 px-[100px] pb-[90px]">
          <Actors />
        </div>
      </div>
      {/* <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div> */}
    </div>
  );
}

export default ActorsIntroduction;
