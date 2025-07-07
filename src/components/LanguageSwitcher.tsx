
import { useTranslation } from 'react-i18next';
import '../styles/Introduction.css';

type LanguageSwitcherProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const LanguageSwitcher = ({ isMenuOpen, toggleMenu }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();


  const handleLanguageChange = () => {
    const currentLang = i18n.language; 
    const newLang = currentLang === 'en' ? 'sv' : 'en'; 
    i18n.changeLanguage(newLang);
    if (isMenuOpen) {
      toggleMenu();
    }
    localStorage.setItem('language', newLang); 
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
