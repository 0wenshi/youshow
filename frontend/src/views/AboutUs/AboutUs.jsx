import React from 'react';
import NavBar from '../CommonComponents/NavBar';
import ContactUs from './components/ContactUs';
import WonderfulReview from './components/WonderfulReview';

function AboutUs() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover bg-center min-h-screen min-w-[1024px] flex items-center p-5">
      <div className="pt-0 px-8 pb-8">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className="my-8">
          <div
            className="w-full h-1"
            style={{
              background:
                'liner-gradient(to right,transparent,rgb(250,127,42),transparent)',
            }}
          ></div>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <WonderfulReview />
        </div>
        <div className="mt-12">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
