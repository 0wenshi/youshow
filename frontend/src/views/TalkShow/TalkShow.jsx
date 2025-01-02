import React from 'react';

import NavBar from '../CommonComponents/NavBar';
import Introduction from './components/Introduction';

function TalkShow() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5">
      <div className="-mt-5 top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        <div className="mt-4">
          <Introduction />
        </div>
      </div>
    </div>
  );
}

export default TalkShow;
