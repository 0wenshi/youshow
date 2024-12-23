import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center bg-[url('/images/startbackground.jpg')]">
      <div className="flex flex-col items-center">
        <img
          src="/images/youshow.png"
          alt="YOU SHOW"
          className="transition-transform duration-300 hover:scale-110 mx-auto"
          style={{ width: '600px' }}
        />
        <Link to="/login">
          <button className="mt-32 bg-orange-500 hover:bg-orange-600 rounded-[39px] px-20 py-4 text-black font-bold text-3xl flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
            GET START
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
