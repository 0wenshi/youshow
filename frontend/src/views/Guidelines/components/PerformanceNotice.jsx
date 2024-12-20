import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function PerformanceNotice() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto rounded-lg p-8">
        <h1 className="text-center text-2xl font-bold mb-4 text-black">
          {t('performanceNotice.title')}
        </h1>
        <p className="text-center text-lg font-bold mb-6 text-black">
          {t('performanceNotice.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {t('performanceNotice.rules', { returnObjects: true }).map(
            (rule, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
              >
                <img
                  src={rule.image}
                  alt={rule.alt}
                  className="w-32 h-32 md:w-48 md:h-48"
                />
                <p className="font-bold text-black text-lg text-center md:text-left">
                  <Trans i18nKey={`performanceNotice.rules.${index}.text`}>
                    {rule.textParts.map((part, i) =>
                      part.highlight ? (
                        <span
                          key={i}
                          className="text-red-500 font-bold"
                          dangerouslySetInnerHTML={{ __html: part.content }}
                        />
                      ) : (
                        part.content
                      )
                    )}
                  </Trans>
                </p>
              </div>
            )
          )}
        </div>
        <div className="text-center space-y-4">
          {t('performanceNotice.remarks', { returnObjects: true }).map(
            (remark, index) => (
              <p key={index} className="text-black text-lg font-bold">
                <Trans i18nKey={`performanceNotice.remarks.${index}`}>
                  {remark}
                </Trans>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default PerformanceNotice;
