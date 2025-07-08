import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../styles/ScrollToFooterButton.css';

import VsgLogo from '../assets/VsgLogo.svg'; // Ändra sökväg efter din bild

interface Props {
  toggleMenu?: () => void;
}


const ScrollToFooterButton: React.FC<Props> = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <ScrollLink to="footer" smooth={true} duration={500}>
      <button 
        className="chat-bubble-button"
        onClick={toggleMenu}
        type="button"
      >
        <span className="chat-bubble-text" id='animated-text'>
          {t('wilmasAgentRowOne')}
          <br />
          {t('wilmasAgentRowTwo')}
          <br />
          {t('wilmasAgentRowThree')}
        </span>
        

        <img
          src={VsgLogo}
          alt="VSG Logo"
          className="chat-bubble-icon"
          aria-hidden="true"
        />
      </button>
    </ScrollLink>
  );
};

export default ScrollToFooterButton;

