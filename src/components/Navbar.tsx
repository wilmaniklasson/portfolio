
import '../styles/Introduction.css';
import { Link as ScrollLink } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import "../styles/ThemeToggle.css"

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const theme = localStorage.getItem('theme') || 'dark';


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
      <nav
  className={`navigation-buttons ${isMenuOpen ? 'open' : ''} ${isMenuOpen && theme === 'light' ? 'light' : ''}`}>
        <ScrollLink to="About" smooth={true} duration={500}>
          <button className="button" id="about" onClick={toggleMenu}>
            {t('aboutMe')}
          </button>
        </ScrollLink>
        <ScrollLink to="Project" smooth={true} duration={500}>
          <button className="button" id="projects" onClick={toggleMenu}>
            {t('projects')}
          </button>
        </ScrollLink>
        <LanguageSwitcher isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
}

export default Navbar;
