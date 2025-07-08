import React from "react";
import "../styles/Footer.css";
import cv from "../assets/Wilma_Niklasson_CV.pdf"
import { useTranslation } from "react-i18next";
import { WilmaBot } from "./WilmaBot";


const Footer: React.FC = () => {
  const { t } = useTranslation()
  
  const handleOpenCV = () => {
    window.open(cv, "_blank");
  };



  return (
    <footer className="footer">
      <WilmaBot />
      <button onClick={handleOpenCV} className="footer-button">
        {t('openCV')}
      </button>
      <p className="footer-text">© 2025 Wilma – All rights reserved.</p>
    </footer>
  );
};

export default Footer;
