import React from 'react';
import SearchBox from '../CommonComponents/SearchBox';
import NavBar from '../CommonComponents/NavBar';
import RotatingSlides from './components/RotatingSlides';

function HomePage() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      {/* Content Section */}
      <div className="flex flex-col pt-15">
        <div className="flex justify-between items-start mx-auto max-w-6xl w-full">
          <div className="w-2/3">
            <RotatingSlides />
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default HomePage;
