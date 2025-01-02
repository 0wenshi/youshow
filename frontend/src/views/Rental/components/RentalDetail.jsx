import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function RentalDetail() {
  const { t } = useTranslation();

  const details = t('rentalDetail.details', { returnObjects: true });
  const whyUs = t('rentalDetail.whyUs', { returnObjects: true });

  return (
    <div className="py-10 px-6">
      <div className="max-w-6xl mx-auto rounded-lg p-8 shadow-2xl">
        {/* Title */}
        <div className="text-center text-3xl font-extrabold mb-10 text-gray-900">
          {t('rentalDetail.title')}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Address Section */}
          <div className="space-y-6">
            <div className="text-2xl font-semibold text-gray-800">
              {t('rentalDetail.address.title')}
            </div>
            <div className="text-lg font-bold text-orange-600">
              {t('rentalDetail.address.name')}
            </div>
            <div className="text-lg text-gray-700">
              {t('rentalDetail.address.location')}
            </div>
            <img
              src="/images/address.jpg"
              alt="Address"
              className="w-full h-80 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-6 text-lg text-gray-800">
            <div>
              <Trans
                components={{
                  span: <span className="font-bold text-red-500" />,
                }}
              >
                {details}
              </Trans>
            </div>
            <div className="text-xl font-bold text-gray-900">
              {t('rentalDetail.whyUsTitle')}
            </div>
            <div>
              <Trans
                components={{
                  span: <span className="font-semibold text-red-500" />,
                }}
              >
                {whyUs}
              </Trans>
            </div>
            <div className="text-xl font-bold text-gray-900">
              {t('rentalDetail.contact.title')}
            </div>
            <div className="font-semibold">
              {t('rentalDetail.contact.info')}
            </div>
            <div className="font-semibold text-gray-700">
              📧 am2pmnz@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalDetail;
