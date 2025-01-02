import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function PerformanceNotice() {
  const { t } = useTranslation();

  const rules = t('performanceNotice.rules', { returnObjects: true });
  const remarks = t('performanceNotice.remarks', { returnObjects: true });

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto rounded-lg p-6 shadow-2xl">
        {/* Title Section */}
        <h1 className="text-center text-4xl font-extrabold mb-6 text-gray-900">
          {t('performanceNotice.title')}
        </h1>
        <p className="text-center text-lg font-medium mb-8 text-gray-700">
          {t('performanceNotice.subtitle')}
        </p>

        {/* Rules Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <img
                src={rule.image}
                alt={rule.alt}
                className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full object-cover shadow"
              />
              <p className="font-medium text-gray-800 text-lg">
                <Trans
                  components={{
                    span: <span className="text-red-500 font-semibold" />,
                  }}
                >
                  {rule.text}
                </Trans>
              </p>
            </div>
          ))}
        </div>

        {/* Remarks Section */}
        <div className="space-y-6">
          {remarks.map((remark, index) => (
            <p
              key={index}
              className="text-center text-gray-800 text-lg font-semibold"
            >
              <Trans
                components={{
                  span: <span className="text-red-500 font-semibold" />,
                }}
              >
                {remark}
              </Trans>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerformanceNotice;
