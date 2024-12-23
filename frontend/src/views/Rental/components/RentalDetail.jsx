import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function RentalDetail() {
  const { t } = useTranslation();

  const details = t('rentalDetail.details', { returnObjects: true });
  const whyUs = t('rentalDetail.whyUs', { returnObjects: true });

  return (
    <div className="font-sans text-black p-6">
      <div className="text-center font-bold text-2xl mb-8">
        {t('rentalDetail.title')}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="text-xl font-semibold">
            {t('rentalDetail.address.title')}
          </div>
          <div className="font-bold text-lg">
            {t('rentalDetail.address.name')}
          </div>
          <div className="text-lg">{t('rentalDetail.address.location')}</div>
          <img
            src="/images/address.jpg"
            alt="Address"
            className="w-full md:w-100 h-80 rounded-[40px] shadow-lg"
          />
        </div>
        <div className="space-y-4 text-lg">
          <p>
            <Trans
              components={{ span: <span className="font-bold text-red-500" /> }}
            >
              {details}
            </Trans>
          </p>
          <div className="text-base font-bold">
            {t('rentalDetail.whyUsTitle')}
          </div>
          <p>
            <Trans
              components={{
                span: <span className="font-semibold text-red-500" />,
              }}
            >
              {whyUs}
            </Trans>
          </p>
          <div className="text-base font-bold">
            {t('rentalDetail.contact.title')}
          </div>
          <p className="font-semibold">{t('rentalDetail.contact.info')}</p>
          <p className="font-semibold">📧 am2pmnz@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default RentalDetail;
