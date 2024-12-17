import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import NavBar from '../CommonComponents/NavBar';
import Introduction from './components/Introduction';

function TalkShow() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover p-5 ">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="w-full -mt-5">
          <NavBar />
        </div>
        <div>
          <Introduction />
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default TalkShow;
