import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Introduction.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();


  const handleLanguageChange = () => {
    const currentLang = i18n.language; 
    const newLang = currentLang === 'en' ? 'sv' : 'en'; 
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <button className="button"  id='english' onClick={handleLanguageChange}>
        {i18n.language === 'en' ? 'Switch to Svenska' : 'Switch to English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
