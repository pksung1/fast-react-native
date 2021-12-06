import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import ko from './ko';
import RNLocalize from 'react-native-localize';
if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: RNLocalize.getLocales()[0].languageCode,
    fallbackLng: 'en',
    debug: __DEV__,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      ko,
    },
  });
}

export default i18next;
