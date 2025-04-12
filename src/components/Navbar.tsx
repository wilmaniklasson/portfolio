
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
        <ScrollLink to="About" smooth={true} duration={500}>
          <button className="button" id="about">
            {t('aboutMe')}
          </button>
        </ScrollLink>
        <ScrollLink to="Project" smooth={true} duration={500}>
          <button className="button" id="projects">
            {t('projects')}
          </button>
        </ScrollLink>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}

export default Navbar;
