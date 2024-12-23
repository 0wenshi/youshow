import React from 'react';
import { useTranslation } from 'react-i18next';

function Memberships() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-16 space-y-12">
      <div className="space-y-8">
        {/* Image Cards */}
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/199.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/666.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/999.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>

        {/* Text Section */}
        <div className="text-base text-gray-800 text-left space-y-2 w-full max-w-md font-bold">
          <p>{t('memberships.note1')}</p>
          <p>{t('memberships.note2')}</p>
        </div>
      </div>
    </div>
  );
}

export default Memberships;
