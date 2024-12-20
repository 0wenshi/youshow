import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between p-5 w-full bg-orange-500 rounded-2xl max-w-7xl mx-auto">
      <div className="flex-shrink-0 mr-44">
        <img
          src="/images/Avatar.jpg"
          alt="YouShow Logo"
          className="w-[400px] h-[200px] object-cover ml-40"
        />
      </div>
      <div className="flex flex-col flex-1 ml-10 my-1 text-lg font-bold leading-relaxed">
        <p className="mb-2">{t('contact_us.customer_service')}</p>
        <p className="mb-2">
          {t('contact_us.wechat')}{' '}
          <span className="text-black font-extrabold">youshow-nz</span>
        </p>
        <p>
          {t('contact_us.email')}{' '}
          <span className="text-black font-extrabold">
            youshow.nz@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
