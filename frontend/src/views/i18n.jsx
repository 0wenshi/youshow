import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        plans: 'Performance Plans',
        actors: 'Actors Introduction',
        memberships: 'Memberships Program',
        about: 'About Us',
        more: 'More',
        login: 'Login',
        logout: 'Logout',
      },
      dropdown: {
        talkshow: 'Talk Show',
        guidelines: 'Guidelines',
        rental: 'Venue Rental',
        recruitment: 'Recruitment',
      },
    },
  },
  zh: {
    translation: {
      navbar: {
        plans: '演出计划',
        actors: '演员介绍',
        memberships: '会员计划',
        about: '关于我们',
        more: '更多',
        login: '登录',
        logout: '退出',
      },
      dropdown: {
        talkshow: '脱口秀',
        guidelines: '观演须知',
        rental: '场地租赁',
        recruitment: '新人招募',
      },
    },
  },
};

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 默认语言
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
