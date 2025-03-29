import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hello: 'Hello!',
      nameIs: 'my name is',
      pitch: 'I am driven, solution-oriented, and a skilled facilitator who fosters collaboration and collective problem-solving within the team.',
      aboutMe: 'ABOUT ME',
      projects: 'PROJECTS',
    }
  },
  sv: {
    translation: {
      hello: 'Hej!',
      nameIs: 'mitt namn är',
      pitch: 'Jag är driven, lösningorienterad och en skicklig facilitator som främjar samarbete och gemensam problemlösning i teamet.',
      aboutMe: 'OM MIG',
      projects: 'PROJEKT',
    }
  }
};

i18n.use(initReactI18next) 
  .init({
    resources,
    lng: 'en',  
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
