import React from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '../CommonComponents/NavBar';
import ContactUs from './components/ContactUs';
import WonderfulReview from './components/WonderfulReview';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover bg-center min-h-screen items-center p-5">
      <div className="pt-0 px-8 pb-8">
        <div className="-mt-5 top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className="-mt-2">
          <WonderfulReview />
        </div>
        {/* Gradient horizontal line */}
        <div className="my-8">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent"></div>
        </div>
        <div className="flex justify-center mb-8 mt-12">
          <div className="relative w-[400px] h-[300px]">
            {/* Border */}
            <div className="absolute w-full h-full bg-orange-400 border-4 border-black rounded-2xl left-4 top-2"></div>
            {/* Image */}
            <div
              className="absolute w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: 'url("/images/aboutus.jpg")' }}
            ></div>
          </div>
        </div>
        {/* content */}
        <div className="text-center max-w-4xl mx-auto -mt-2 text-lg leading-relaxed font-extrabold text-black">
          <p className="text-xl mb-6">
            <span className="font-black text-2xl text-black">
              You Show Studio
            </span>{' '}
            {t('about_us.description1')}
          </p>
          <p className="text-xl">{t('about_us.description2')}</p>
        </div>
        {/* Gradient horizontal line */}
        <div className="mt-12 my-48">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent"></div>
        </div>
        <div className="-mt-40">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
