import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function RecruitmentDetail() {
  const { t } = useTranslation();

  return (
    <div className="font-sans text-black p-6 flex flex-col items-center">
      <div className="text-center font-bold text-2xl mb-8">
        {t('recruitment.title')}
      </div>
      <div className="space-y-8 text-center w-4/5 text-xl">
        <section>
          <p>
            <Trans
              components={{
                br: <br />,
                span: <span className="text-red-500 font-bold" />,
              }}
            >
              {t('recruitment.introduction')}
            </Trans>
          </p>
        </section>
        <section>
          <div className="font-bold">{t('recruitment.whatWeNeed.title')}</div>
          <p>
            <Trans components={{ br: <br /> }}>
              {t('recruitment.whatWeNeed.description')}
            </Trans>
          </p>
        </section>
        <section>
          <div className="font-bold">{t('recruitment.growth.title')}</div>
          <p>
            <Trans components={{ br: <br /> }}>
              {t('recruitment.growth.description')}
            </Trans>
          </p>
        </section>
        <section>
          <div className="font-bold">{t('recruitment.benefits.title')}</div>
          <p>
            <Trans components={{ br: <br /> }}>
              {t('recruitment.benefits.description')}
            </Trans>
          </p>
        </section>
        <section>
          <div className="font-bold">{t('recruitment.howToJoin.title')}</div>
          <p>
            <Trans
              components={{
                a: (
                  <a
                    href="mailto:youshow.nz@gmail.com"
                    className="text-blue-500 underline"
                  />
                ),
              }}
            >
              {t('recruitment.howToJoin.contact')}
            </Trans>
          </p>
          <p>{t('recruitment.howToJoin.info')}</p>
        </section>
      </div>
      <div className="text-center mt-8 font-bold text-xl">
        {t('recruitment.footer')}
      </div>
    </div>
  );
}

export default RecruitmentDetail;
