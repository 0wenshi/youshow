import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import NavBar from '../CommonComponents/NavBar';
import Introduction from './components/Introduction';

function TalkShow() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover items-center p-5">
      <div className="pt-0 px-96">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className='mt-20'>
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
