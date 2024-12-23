import React from 'react';
import { useTranslation } from 'react-i18next';

function Introduction() {
  const { t } = useTranslation();

  return (
    <div id="root">
      <div className="bg-transparent p-7 font-sans flex flex-col lg:flex-row items-center lg:justify-between lg:gap-x-60">
        {/* Left-hand content */}
        <div className="lg:w-2/5 space-y-4 flex flex-col items-center my-5">
          <div>
            <img
              src="/images/about_standup_comedy_1.jpg"
              alt="Top image"
              className="w-[300px] h-[300px] object-cover rounded-[35px]"
            />
          </div>
          <div className="w-[300px] text-left">
            <h2 className="text-xl font-bold mb-4">
              {t('introduction.title1')}
            </h2>
            <p className="leading-relaxed">{t('introduction.description1')}</p>
            <p className="mt-4 leading-relaxed">
              <strong>{t('introduction.subtitle1')}</strong>
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              {t('introduction.steps', { returnObjects: true }).map(
                (step, index) => (
                  <li key={index}>{step}</li>
                )
              )}
            </ul>
            <p className="mt-4 leading-relaxed">
              {t('introduction.description2')}
            </p>
          </div>
          <div>
            <img
              src="/images/about_standup_comedy_3.jpg"
              alt="Bottom image"
              className="w-[300px] h-[200px] object-cover rounded-[35px]"
            />
          </div>
        </div>
        {/* 右侧内容 */}
        <div className="lg:w-2/5 space-y-4 flex flex-col items-center my-5">
          <div className="w-[300px]">
            <h2 className="text-2xl font-bold mb-4">
              {t('introduction.title2')}
            </h2>
            <p className="leading-relaxed">{t('introduction.description3')}</p>
          </div>
          <div>
            <img
              src="/images/about_standup_comedy_2.jpg"
              alt="Side image"
              className="w-[300px] h-[200px] object-cover rounded-[35px]"
            />
          </div>
          <div className="w-[300px]">
            <h2 className="text-xl font-semibold mb-4">
              {t('introduction.subtitle2')}
            </h2>
            <p className="leading-relaxed">{t('introduction.description4')}</p>
            <ul className="list-none ml-0 mt-4 space-y-4">
              {t('introduction.formats', { returnObjects: true }).map(
                (format, index) => (
                  <li key={index}>
                    <p className="font-semibold">{format.title}</p>
                    <p className="leading-relaxed">{format.description}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <footer className="h-14"></footer>
    </div>
  );
}

export default Introduction;
