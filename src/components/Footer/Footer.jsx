import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';  // <-- import CSS here

const Footer = () => {
  const { t } = useTranslation();
  return <footer className="footer">{t('home.footer')}</footer>;
};

export default Footer;
