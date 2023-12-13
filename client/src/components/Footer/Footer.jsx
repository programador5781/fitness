import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:CORREO@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/NUMERO_WHATSAPP" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer">
          <RiLinkedinBoxLine />
        </a>
      </div>
      <span className={style.gymName}>TRAINING MAX GYM</span>
      <div className={style.designBy}>
        <p>Design by <a href="URL_LINKEDIN">programador5781</a></p>
      </div>
    </footer>
  );
};

export default Footer;
