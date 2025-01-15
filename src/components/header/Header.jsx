// components/Header.js
import React from 'react';

const Header = () => (
  <div className="text-container">
    <header>
      <a href="/">
        <img src="assets/images/logo_main.png" className="logo" alt="Logo" />
      </a>
      <h1 className="main-title">
        ASK<span className="black">the</span>VETS
      </h1>
      <p className="subtitle">CARE FOR YOUR BELOVED PET</p>
    </header>
  </div>
);

export default Header;
