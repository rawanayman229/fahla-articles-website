import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // Detect user language
.use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
.use(initReactI18next)
  // Init i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .use(HttpApi) // Used to load translations from a remote source (e.g., public folder)
.init({
    supportedLngs: ['en', 'es', 'fr'], // Add the languages you want to support
    fallbackLng: 'en', // Language to use if translations in user language are not available
    debug: true, // Set to false in production
    
    // Options for language detector
    detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie'],
    },

    // A backend is used to load translations asynchronously
    backend: {
    loadPath: '/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
});

export default i18n;