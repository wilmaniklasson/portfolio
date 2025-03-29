
import '../styles/Introduction.css';
import { Link as ScrollLink } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} id="mobile-menu" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'rotate-forward' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'fade-out' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'rotate-backward' : ''}`}></span>
      </div>
      <nav className={`navigation-buttons ${isMenuOpen ? 'open' : ''}`}>
        <ScrollLink className="button" id="about" to="About" smooth={true} duration={500}>
          {t('aboutMe')}
        </ScrollLink>
        <ScrollLink className="button" id="projects" to="Project" smooth={true} duration={500}>
          {t('projects')}
        </ScrollLink>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}

export default Navbar;
