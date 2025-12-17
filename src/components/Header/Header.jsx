import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';  // <-- import CSS here

const Header = () => {
  return (
    <header className="header">
      <h1>World Dev</h1>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
