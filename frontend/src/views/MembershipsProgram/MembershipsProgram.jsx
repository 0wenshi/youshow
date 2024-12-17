import React from 'react';
import Memberships from './components/Memberships';
import SearchBox from '../CommonComponents/SearchBox';
import CurrentUserLevel from './components/CurrentUserLevel';
import NavBar from '../CommonComponents/NavBar';

function MembershipsProgram() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover items-center p-5">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* <div className="w-full py-4 mt-10 mb-4 rounded-lg">
          <CurrentUserLevel />
        </div> */}
        <div className="w-full mt-2 mb-2 rounded-lg">
          <Memberships />
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default MembershipsProgram;
